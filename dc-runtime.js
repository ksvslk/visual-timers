// Minimal renderer for the canvas's .dc.html timer designs.
// Supports {{ holes }} in text and attributes, <sc-if>, <sc-for>, on* event
// handlers and a React-like DCLogic class (props, state, setState, lifecycle).
// DOM nodes are created once and updated in place, so CSS animations and
// transitions keep running between renders.

const SVG_NS = 'http://www.w3.org/2000/svg';
const HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
const WHOLE = /^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/;
const REGISTRY = {};

// Child components used through <dc-import name="...">.
export function registerComponents(map) {
  Object.assign(REGISTRY, map || {});
}

export class DCLogic {
  constructor(props) {
    this.props = props || {};
    this.state = null;
    this.__host = null;
  }
  setState(patch) {
    const prev = this.state || {};
    const next = typeof patch === 'function' ? patch(prev, this.props) : patch;
    this.state = Object.assign({}, prev, next || {});
    if (this.__host) this.__host.schedule();
  }
  forceUpdate() {
    if (this.__host) this.__host.schedule();
  }
}

function literal(path) {
  if (path === 'true') return { ok: true, v: true };
  if (path === 'false') return { ok: true, v: false };
  if (path === 'null') return { ok: true, v: null };
  if (/^-?\d+(\.\d+)?$/.test(path)) return { ok: true, v: Number(path) };
  const q = path[0];
  if ((q === '"' || q === "'") && path.length > 1 && path[path.length - 1] === q) return { ok: true, v: path.slice(1, -1) };
  return { ok: false };
}

function compilePath(path) {
  const lit = literal(path);
  if (lit.ok) return () => lit.v;
  const parts = path.split('.');
  const head = parts[0];
  const rest = parts.slice(1);
  return (scope) => {
    let v;
    let found = false;
    for (let s = scope; s; s = s.parent) {
      if (s.locals && Object.prototype.hasOwnProperty.call(s.locals, head)) {
        v = s.locals[head];
        found = true;
        break;
      }
    }
    if (!found) v = scope.root ? scope.root[head] : undefined;
    for (let i = 0; i < rest.length; i++) {
      if (v == null) return undefined;
      v = v[rest[i]];
    }
    return v;
  };
}

// A whole-value hole returns the raw value; anything else is an interpolated string.
function compileValue(raw) {
  const whole = raw.match(WHOLE);
  if (whole) return compilePath(whole[1].trim());
  const parts = [];
  let last = 0;
  raw.replace(HOLE, (match, p, offset) => {
    parts.push(raw.slice(last, offset));
    parts.push(compilePath(p.trim()));
    last = offset + match.length;
    return match;
  });
  parts.push(raw.slice(last));
  return (scope) => {
    let out = '';
    for (const part of parts) {
      if (typeof part === 'string') out += part;
      else {
        const v = part(scope);
        out += v == null ? '' : String(v);
      }
    }
    return out;
  };
}

class Block {
  constructor() {
    this.nodes = [];
    this.updaters = [];
    this.controls = [];
  }
  mountList(tplNodes, scope, anchor) {
    const frag = document.createDocumentFragment();
    for (const t of tplNodes) {
      const n = instantiate(t, this);
      if (n) {
        frag.appendChild(n);
        this.nodes.push(n);
      }
    }
    anchor.parentNode.insertBefore(frag, anchor);
    this.update(scope);
  }
  update(scope) {
    // Refs run after the whole block (children included) is up to date, like React.
    const outer = this.post;
    this.post = [];
    for (const u of this.updaters) u(scope, this);
    const post = this.post;
    this.post = outer;
    for (const f of post) f();
  }
  unmount() {
    for (const c of this.controls) c.unmount();
    this.controls = [];
    for (const n of this.nodes) {
      if (n.parentNode) n.parentNode.removeChild(n);
    }
    this.nodes = [];
    this.updaters = [];
  }
}

function makeIf(t, block) {
  const anchor = document.createComment('sc-if');
  const kids = Array.from(t.childNodes);
  const cond = compileValue(t.getAttribute('value') || '');
  let sub = null;
  const ctl = {
    update(scope) {
      if (cond(scope)) {
        if (!sub) {
          sub = new Block();
          sub.mountList(kids, scope, anchor);
        } else {
          sub.update(scope);
        }
      } else if (sub) {
        sub.unmount();
        sub = null;
      }
    },
    unmount() {
      if (sub) sub.unmount();
      sub = null;
    }
  };
  block.controls.push(ctl);
  block.updaters.push((scope) => ctl.update(scope));
  return anchor;
}

function makeFor(t, block) {
  const anchor = document.createComment('sc-for');
  const kids = Array.from(t.childNodes);
  const list = compileValue(t.getAttribute('list') || '');
  const as = t.getAttribute('as') || 'item';
  let items = [];
  const ctl = {
    update(scope) {
      const value = list(scope);
      const arr = Array.isArray(value) ? value : [];
      for (let i = 0; i < arr.length; i++) {
        const locals = { $index: i };
        locals[as] = arr[i];
        const itemScope = { root: scope.root, locals: locals, parent: scope };
        if (i < items.length) items[i].update(itemScope);
        else {
          const b = new Block();
          b.mountList(kids, itemScope, anchor);
          items.push(b);
        }
      }
      while (items.length > arr.length) items.pop().unmount();
    },
    unmount() {
      for (const b of items) b.unmount();
      items = [];
    }
  };
  block.controls.push(ctl);
  block.updaters.push((scope) => ctl.update(scope));
  return anchor;
}

function sameProps(a, b) {
  const ka = Object.keys(a);
  if (ka.length !== Object.keys(b).length) return false;
  for (const k of ka) {
    const x = a[k];
    const y = b[k];
    if (typeof x === 'function' && typeof y === 'function') continue;
    if (x !== y) return false;
  }
  return true;
}

function makeImport(t, block) {
  const host = document.createElement('div');
  host.style.display = 'contents';
  const compName = t.getAttribute('name');
  const getters = [];
  for (const a of Array.from(t.attributes)) {
    if (a.name === 'name' || a.name.startsWith('hint-')) continue;
    const key = a.name.replace(/-([a-z])/g, (m, ch) => ch.toUpperCase());
    getters.push([key, compileValue(a.value)]);
  }
  let child = null;
  let lastProps = null;
  const ctl = {
    update(scope) {
      const C = REGISTRY[compName];
      if (!C) return;
      const props = Object.assign({}, C.defaults);
      for (const [k, g] of getters) props[k] = g(scope);
      if (!child) {
        child = mount(host, C.template, C.Logic, props, {});
      } else if (lastProps && sameProps(lastProps, props)) {
        child.logic.props = props;
      } else {
        child.setProps(props);
      }
      lastProps = props;
    },
    unmount() {
      if (child) child.destroy();
      child = null;
      lastProps = null;
    }
  };
  block.controls.push(ctl);
  block.updaters.push((scope) => ctl.update(scope));
  return host;
}

function instantiate(t, block) {
  if (t.nodeType === 3) {
    const text = t.nodeValue;
    if (text.indexOf('{{') < 0) return document.createTextNode(text);
    const node = document.createTextNode('');
    const get = compileValue(text);
    let last;
    block.updaters.push((scope) => {
      const v = get(scope);
      const s = v == null ? '' : String(v);
      if (s !== last) {
        node.nodeValue = s;
        last = s;
      }
    });
    return node;
  }
  if (t.nodeType !== 1) return null;
  const tag = t.localName;
  if (tag === 'sc-if') return makeIf(t, block);
  if (tag === 'sc-for') return makeFor(t, block);
  if (tag === 'dc-import') return makeImport(t, block);
  const el = t.namespaceURI === SVG_NS ? document.createElementNS(SVG_NS, tag) : document.createElement(tag);
  for (const a of Array.from(t.attributes)) {
    const name = a.name;
    const val = a.value;
    if (name.startsWith('hint-')) continue;
    if (val.indexOf('{{') < 0) {
      el.setAttribute(name, val);
      continue;
    }
    if (name === 'ref' && WHOLE.test(val)) {
      const get = compileValue(val);
      let lastFn = null;
      block.updaters.push((scope, owner) => {
        const fn = get(scope);
        if (typeof fn === 'function' && fn !== lastFn) {
          lastFn = fn;
          if (owner && owner.post) owner.post.push(() => fn(el));
          else fn(el);
        }
      });
      continue;
    }
    if (name.length > 2 && name.startsWith('on') && WHOLE.test(val)) {
      const evt = name.slice(2).toLowerCase();
      const get = compileValue(val);
      let fn = null;
      el.addEventListener(evt, (e) => {
        if (typeof fn === 'function') fn(e);
      });
      block.updaters.push((scope) => {
        fn = get(scope);
      });
      continue;
    }
    const get = compileValue(val);
    let last;
    block.updaters.push((scope) => {
      const v = get(scope);
      const s = v == null ? '' : String(v);
      if (s !== last) {
        el.setAttribute(name, s);
        last = s;
      }
    });
  }
  for (const c of Array.from(t.childNodes)) {
    const n = instantiate(c, block);
    if (n) el.appendChild(n);
  }
  return el;
}

export function mount(container, templateHTML, Logic, props, hooks) {
  const tpl = document.createElement('template');
  tpl.innerHTML = templateHTML;
  const kids = Array.from(tpl.content.childNodes);
  const logic = new Logic(props);
  logic.props = props;
  const on = hooks || {};
  const anchor = document.createComment('dc-root');
  container.appendChild(anchor);
  const root = new Block();
  let alive = true;
  let scheduled = false;
  const render = () => {
    if (!alive) return;
    const vals = logic.renderVals();
    root.update({ root: vals, locals: null, parent: null });
    if (on.onRender) on.onRender(vals);
  };
  logic.__host = {
    schedule() {
      if (scheduled || !alive) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        render();
      });
    }
  };
  const first = logic.renderVals();
  root.mountList(kids, { root: first, locals: null, parent: null }, anchor);
  if (on.onRender) on.onRender(first);
  if (logic.componentDidMount) logic.componentDidMount();
  return {
    logic: logic,
    setProps(next) {
      const prev = logic.props;
      logic.props = next;
      render();
      if (logic.componentDidUpdate) logic.componentDidUpdate(prev, logic.state);
    },
    destroy() {
      if (!alive) return;
      if (logic.componentWillUnmount) logic.componentWillUnmount();
      alive = false;
      logic.__host = null;
      root.unmount();
      anchor.remove();
    }
  };
}
