import { DCLogic } from './dc-runtime.js?v=9d4411f2f2';

export const THEMES = [
  Object.assign({"id":"rainbow","name":"Rainbow","tagline":"Each color is 10 minutes","relative":false,"sleep":false,"bars":["#CFE8FF","#62C584"],"lbars":null,"ldir":null,"lsplit":80,"psplit":62,"back":"light","defaults":{"minutes":55,"speed":"Demo (1 min = 1 s)","landscape":false},"template":"<div style=\"width: {{ L.w }}px; height: {{ L.h }}px; position: relative; overflow: hidden; background: #CFE8FF; font-family: 'Fredoka', 'Arial Rounded MT Bold', system-ui, sans-serif; color: #1E2A4A\">\n<svg width=\"{{ L.w }}\" height=\"{{ L.h }}\" viewBox=\"{{ L.vb }}\" role=\"img\" aria-label=\"{{ ariaLabel }}\" style=\"position: absolute; left: 0; top: 0; display: block\">\n<g display=\"{{ L.lD }}\">\n<g style=\"animation: rr-drift-l 74s linear -30s infinite\">\n<g fill=\"#FFFFFF\" opacity=\"0.9\">\n<circle cx=\"34\" cy=\"70\" r=\"15\"></circle>\n<circle cx=\"56\" cy=\"61\" r=\"20\"></circle>\n<circle cx=\"80\" cy=\"70\" r=\"14\"></circle>\n<rect x=\"19\" y=\"68\" width=\"76\" height=\"16\" rx=\"8\"></rect>\n</g>\n</g>\n<g style=\"animation: rr-drift-l 98s linear -74s infinite\">\n<g fill=\"#FFFFFF\" opacity=\"0.75\">\n<circle cx=\"26\" cy=\"128\" r=\"11\"></circle>\n<circle cx=\"42\" cy=\"121\" r=\"15\"></circle>\n<circle cx=\"60\" cy=\"128\" r=\"10\"></circle>\n<rect x=\"15\" y=\"127\" width=\"56\" height=\"12\" rx=\"6\"></rect>\n</g>\n</g>\n<path d=\"M0 300C96 282 196 284 290 300C380 315 450 300 520 268C600 232 720 224 844 238L844 390L0 390Z\" fill=\"#9ADFA9\"></path>\n<path d=\"M0 338C110 314 222 314 330 330C420 344 470 330 540 300C620 266 730 262 844 274L844 390L0 390Z\" fill=\"#62C584\"></path>\n</g>\n<g display=\"{{ L.pD }}\">\n<g style=\"animation: rr-drift 54s linear -20s infinite\">\n<g fill=\"#FFFFFF\" opacity=\"0.9\">\n<circle cx=\"34\" cy=\"178\" r=\"15\"></circle>\n<circle cx=\"56\" cy=\"169\" r=\"20\"></circle>\n<circle cx=\"80\" cy=\"178\" r=\"14\"></circle>\n<rect x=\"19\" y=\"176\" width=\"76\" height=\"16\" rx=\"8\"></rect>\n</g>\n</g>\n<g style=\"animation: rr-drift 72s linear -50s infinite\">\n<g fill=\"#FFFFFF\" opacity=\"0.75\">\n<circle cx=\"26\" cy=\"232\" r=\"11\"></circle>\n<circle cx=\"42\" cy=\"225\" r=\"15\"></circle>\n<circle cx=\"60\" cy=\"232\" r=\"10\"></circle>\n<rect x=\"15\" y=\"231\" width=\"56\" height=\"12\" rx=\"6\"></rect>\n</g>\n</g>\n</g>\n<g transform=\"{{ L.gT }}\">\n<g opacity=\"{{ sunOpacity }}\" style=\"transition: opacity 0.9s ease\">\n<g style=\"transform-box: fill-box; transform-origin: center; animation: rr-spin 28s linear infinite\">\n<path d=\"M255 352L271 352M246.96 382L260.82 390M225 403.96L233 417.82M195 412L195 428M165 403.96L157 417.82M143.04 382L129.18 390M135 352L119 352M143.04 322L129.18 314M165 300.04L157 286.18M195 292L195 276M225 300.04L233 286.18M246.96 322L260.82 314\" fill=\"none\" stroke=\"#FFC233\" stroke-width=\"10\" stroke-linecap=\"round\"></path>\n</g>\n<circle cx=\"195\" cy=\"352\" r=\"48\" fill=\"#FFD23F\"></circle>\n<circle cx=\"195\" cy=\"352\" r=\"36\" fill=\"#FFE27A\"></circle>\n</g>\n<g fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.5\" stroke-width=\"20\" stroke-linecap=\"round\">\n<path d=\"M25 432A170 170 0 0 1 365 432\"></path>\n<path d=\"M48 432A147 147 0 0 1 342 432\"></path>\n<path d=\"M71 432A124 124 0 0 1 319 432\"></path>\n<path d=\"M94 432A101 101 0 0 1 296 432\"></path>\n<path d=\"M117 432A78 78 0 0 1 273 432\"></path>\n<path d=\"M140 432A55 55 0 0 1 250 432\"></path>\n</g>\n<g fill=\"none\" stroke-width=\"20\" stroke-linecap=\"round\">\n<path d=\"{{ b0 }}\" stroke=\"#FF5D5D\"></path>\n<path d=\"{{ b1 }}\" stroke=\"#FF9F43\"></path>\n<path d=\"{{ b2 }}\" stroke=\"#FFD43B\"></path>\n<path d=\"{{ b3 }}\" stroke=\"#4CCB7A\"></path>\n<path d=\"{{ b4 }}\" stroke=\"#4D96FF\"></path>\n<path d=\"{{ b5 }}\" stroke=\"#9B6BFF\"></path>\n</g>\n<g transform=\"translate({{ tipX }} {{ tipY }})\" opacity=\"{{ tipOpacity }}\">\n<path d=\"M0 -11C1.6 -3 3 -1.6 11 0C3 1.6 1.6 3 0 11C-1.6 3 -3 1.6 -11 0C-3 -1.6 -1.6 -3 0 -11Z\" fill=\"#FFFFFF\" style=\"animation: rr-twinkle 1.1s ease-in-out infinite\"></path>\n</g>\n<g fill=\"#1E2A4A\" font-size=\"13\" font-weight=\"600\" text-anchor=\"middle\">\n<text x=\"25\" y=\"462\">{{ F.a }}</text>\n<text x=\"48\" y=\"462\">{{ F.b }}</text>\n<text x=\"71\" y=\"462\">{{ F.c }}</text>\n<text x=\"94\" y=\"462\">{{ F.d }}</text>\n<text x=\"117\" y=\"462\">{{ F.e }}</text>\n<text x=\"140\" y=\"462\">{{ F.f }}</text>\n</g>\n<g style=\"animation: rr-bob 3.4s ease-in-out infinite\">\n<g fill=\"#B4D3F2\">\n<rect x=\"226\" y=\"423\" width=\"172\" height=\"48\" rx=\"24\"></rect>\n<circle cx=\"258\" cy=\"427\" r=\"30\"></circle>\n<circle cx=\"300\" cy=\"409\" r=\"40\"></circle>\n<circle cx=\"346\" cy=\"411\" r=\"36\"></circle>\n<circle cx=\"380\" cy=\"431\" r=\"28\"></circle>\n</g>\n<g fill=\"#FFFFFF\">\n<rect x=\"226\" y=\"416\" width=\"172\" height=\"48\" rx=\"24\"></rect>\n<circle cx=\"258\" cy=\"420\" r=\"30\"></circle>\n<circle cx=\"300\" cy=\"402\" r=\"40\"></circle>\n<circle cx=\"346\" cy=\"404\" r=\"36\"></circle>\n<circle cx=\"380\" cy=\"424\" r=\"28\"></circle>\n</g>\n<circle cx=\"292\" cy=\"414\" r=\"3.4\" fill=\"#1E2A4A\"></circle>\n<circle cx=\"318\" cy=\"414\" r=\"3.4\" fill=\"#1E2A4A\"></circle>\n<path d=\"M299 421Q305 426.5 311 421\" fill=\"none\" stroke=\"#1E2A4A\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path>\n<ellipse cx=\"281\" cy=\"423\" rx=\"6\" ry=\"3.6\" fill=\"#FFB5C5\"></ellipse>\n<ellipse cx=\"329\" cy=\"423\" rx=\"6\" ry=\"3.6\" fill=\"#FFB5C5\"></ellipse>\n</g>\n</g>\n<g display=\"{{ L.pD }}\">\n<path d=\"M0 500C72 472 152 470 222 488C282 503 342 499 390 480L390 844L0 844Z\" fill=\"#9ADFA9\"></path>\n<path d=\"M0 552C92 518 182 514 262 530C322 542 362 538 390 528L390 844L0 844Z\" fill=\"#62C584\"></path>\n</g>\n</svg>\n<header style=\"position: absolute; left: {{ L.hL }}px; right: {{ L.hR }}px; top: {{ L.hT }}px; height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 12px\">\n<h1 style=\"margin: 0; font-size: 28px; font-weight: 700; line-height: 1.1; letter-spacing: -0.01em\">Playtime</h1>\n</header>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.rT }}px; transform: {{ L.mid }}; display: flex; flex-direction: column; align-items: center\">\n<sc-if value=\"{{ notDone }}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 10px\">\n<div style=\"font-size: 80px; font-weight: 700; line-height: 1; letter-spacing: -0.02em; font-variant-numeric: tabular-nums\">{{ time }}</div>\n<div style=\"display: flex; align-items: center; gap: 10px; font-size: 17px; font-weight: 600\">\n<div style=\"display: flex; align-items: center; gap: 5px\" aria-hidden=\"true\">\n<span style=\"width: 11px; height: 11px; border-radius: 99px; background: #FF5D5D; box-shadow: 0 0 0 2px #FFFFFF\"></span>\n<span style=\"width: 11px; height: 11px; border-radius: 99px; background: #FF9F43; box-shadow: 0 0 0 2px #FFFFFF\"></span>\n<span style=\"width: 11px; height: 11px; border-radius: 99px; background: #FFD43B; box-shadow: 0 0 0 2px #FFFFFF\"></span>\n<span style=\"width: 11px; height: 11px; border-radius: 99px; background: #4CCB7A; box-shadow: 0 0 0 2px #FFFFFF\"></span>\n<span style=\"width: 11px; height: 11px; border-radius: 99px; background: #4D96FF; box-shadow: 0 0 0 2px #FFFFFF\"></span>\n<span style=\"width: 11px; height: 11px; border-radius: 99px; background: #9B6BFF; box-shadow: 0 0 0 2px #FFFFFF\"></span>\n</div>\n<span>{{ colorLabel }}</span>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{ done }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 10px\">\n<div style=\"font-size: 62px; font-weight: 700; line-height: 1\">All done!</div>\n<div style=\"font-size: 18px; font-weight: 600\">The rainbow went home</div>\n</div>\n</sc-if>\n</div>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.kT }}px; transform: {{ L.mid }}; display: flex; align-items: center; justify-content: center; gap: 30px\">\n<button type=\"button\" onClick=\"{{ setTime }}\" aria-label=\"Set the time\" style=\"width: 62px; height: 62px; padding: 0; border: none; border-radius: 999px; background: #FFFFFF; color: #1E2A4A; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 0 #3F9E62\"><svg width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M10 2h4M12 14l3-3\"></path><circle cx=\"12\" cy=\"14\" r=\"8\"></circle></svg></button>\n<button type=\"button\" onClick=\"{{ toggle }}\" aria-label=\"{{ toggleLabel }}\" style=\"width: 90px; height: 90px; padding: 0; border: none; border-radius: 999px; background: #1E2A4A; color: #FFFFFF; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 6px 0 #101935\">\n<sc-if value=\"{{ showPlay }}\" hint-placeholder-val=\"{{ true }}\"><svg width=\"38\" height=\"38\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block; margin-left: 3px\"><path d=\"M8 5.14v13.72a1 1 0 0 0 1.52.85l10.79-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z\" fill=\"currentColor\"></path></svg></sc-if>\n<sc-if value=\"{{ running }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block\"><rect x=\"6\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect><rect x=\"13.5\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect></svg></sc-if>\n<sc-if value=\"{{ showReplay }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></sc-if>\n</button>\n<button type=\"button\" onClick=\"{{ reset }}\" aria-label=\"Reset timer\" style=\"width: 62px; height: 62px; padding: 0; border: none; border-radius: 999px; background: #FFFFFF; color: #1E2A4A; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 0 #3F9E62\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></button>\n</div>\n<sc-if value=\"{{ picking }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"position: absolute; left: 0; top: 0; width: {{ L.w }}px; height: {{ L.h }}px; z-index: 20\">\n<dc-import name=\"TimePicker\" value=\"{{ pickValue }}\" mode=\"duration\" heading=\"Set time\" accent=\"#1E2A4A\" accent-ink=\"#FFFFFF\" dark=\"{{ false }}\" landscape=\"{{ L.land }}\" on-set=\"{{ applyTime }}\" on-cancel=\"{{ cancelPick }}\" hint-size=\"390px,844px\"></dc-import>\n</div>\n</sc-if>\n</div>"}, { Logic: (function () {
class Component extends DCLogic {
  componentDidMount() {
    this.last = Date.now();
    this.iv = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.iv);
  }
  componentDidUpdate(prev) {
    if (prev && prev.minutes !== this.props.minutes) {
      this.setState({ rem: null, total: null, setSec: null, running: false, picking: false });
    }
  }
  base() {
    const m = Math.round(Number(this.props.minutes ?? 55));
    return (m > 0 ? Math.min(60, m) : 55) * 60;
  }
  rate() {
    return this.props.speed === 'Real time' ? 1 : 60;
  }
  cur() {
    const s = this.state || {};
    const b = this.base();
    const rem = s.rem ?? b;
    return { rem: rem, total: Math.max(s.total ?? b, rem, 1), running: !!s.running };
  }
  tick() {
    const now = Date.now();
    const dt = Math.max(0, (now - (this.last || now)) / 1000);
    this.last = now;
    const c = this.cur();
    if (!c.running) return;
    const rem = Math.max(0, c.rem - dt * this.rate());
    this.setState({ rem: rem, total: c.total, running: rem > 0 });
  }
  dur() {
    const s = this.state || {};
    return s.setSec ?? this.base();
  }
  toggle() {
    const c = this.cur();
    this.last = Date.now();
    if (c.rem <= 0) {
      const b = this.dur();
      this.setState({ rem: b, total: b, running: true });
    } else {
      this.setState({ rem: c.rem, total: c.total, running: !c.running });
    }
  }
  openPicker() {
    const c = this.cur();
    this.setState({ rem: c.rem, total: c.total, running: false, picking: true, wasRunning: c.running });
  }
  applyTime(sec) {
    const v = Math.max(1, Math.min(86399, Math.round(Number(sec) || 0)));
    this.last = Date.now();
    this.setState({ rem: v, total: v, setSec: v, running: false, picking: false });
  }
  cancelPick() {
    const s = this.state || {};
    this.last = Date.now();
    this.setState({ picking: false, running: !!s.wasRunning });
  }
  bump(d) {
    const c = this.cur();
    const rem = Math.max(0, Math.min(3600, c.rem + d));
    const total = Math.max(rem, 60, Math.min(3600, c.total + d));
    this.setState({ rem: rem, total: total, running: c.running && rem > 0 });
  }
  reset() {
    const b = this.dur();
    this.setState({ rem: b, total: b, running: false });
  }
  fmt(sec) {
    const s = Math.max(0, Math.ceil(sec - 0.001));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const r = s % 60;
    return (h > 0 ? h + ':' + (m < 10 ? '0' : '') + m : String(m)) + ':' + (r < 10 ? '0' : '') + r;
  }
  band(i, remMin) {
    const r = 170 - 23 * i;
    const f = Math.max(0, Math.min(1, (remMin - (5 - i) * 10) / 10));
    if (f <= 0) return { d: 'M-60 -60', f: 0, x: -60, y: -60 };
    const th = Math.PI * f;
    const x = 195 + r * Math.cos(th);
    const y = 432 - r * Math.sin(th);
    return { d: 'M' + x.toFixed(2) + ' ' + y.toFixed(2) + 'A' + r + ' ' + r + ' 0 0 1 ' + (195 + r) + ' 432', f: f, x: x, y: y };
  }
  lay() {
    const land = !!this.props.landscape;
    const v = land ? { k: 1, x: 52, y: -168 } : { k: 1, x: 0, y: 0 };
    return {
      land: land,
      w: land ? 844 : 390,
      h: land ? 390 : 844,
      vb: land ? '0 0 844 390' : '0 0 390 844',
      pD: land ? 'none' : 'inline',
      lD: land ? 'inline' : 'none',
      gT: 'translate(' + v.x + ' ' + v.y + ') scale(' + v.k + ')',
      cT: 'translate(' + v.x + 'px, ' + v.y + 'px) scale(' + v.k + ')',
      mid: land ? 'translateY(-50%)' : 'none',
      hL: land ? 476 : 20,
      hR: land ? 60 : 20,
      hT: land ? 20 : 52,
      pL: land ? 476 : 0,
      pR: land ? 60 : 0,
      rT: land ? 148 : 566,
      kT: land ? 292 : 700
    };
  }
  scale(total) {
    // The picture's full size: the smallest of 1 minute, 12 minutes, 1 hour,
    // 2 hours and 12 hours that holds the time that was set. Each keeps whole
    // numbers on the labels; n() turns seconds into the labels' unit.
    const C = [60, 720, 3600, 7200, 43200].find((x) => total <= x) || 43200;
    const u = C === 60 ? 1 : C === 43200 ? 3600 : 60;
    return { C: C, n: (sec) => sec / u };
  }
  unitName(v, short) {
    if (v < 60) return short ? v + ' sec' : v === 1 ? 'second' : v + ' seconds';
    if (v < 3600) {
      const m = v / 60;
      return short ? m + ' min' : m === 1 ? 'minute' : m + ' minutes';
    }
    const h = v / 3600;
    return short ? (h === 1 ? '1 hour' : h + ' hours') : h === 1 ? 'hour' : h + ' hours';
  }
  renderVals() {
    const c = this.cur();
    const S = this.scale(c.total);
    const remMin = c.rem / S.C * 60;
    const nums = [6, 5, 4, 3, 2, 1].map((k) => k * S.n(S.C / 6));
    const b = [0, 1, 2, 3, 4, 5].map((i) => this.band(i, remMin));
    const tip = b.find((x) => x.f > 0);
    const done = c.rem <= 0;
    const time = this.fmt(c.rem);
    return {
      L: this.lay(),
      colorLabel: 'Each color is ' + this.unitName(S.C / 6, false),
      F: { a: nums[0], b: nums[1], c: nums[2], d: nums[3], e: nums[4], f: nums[5] },
      b0: b[0].d, b1: b[1].d, b2: b[2].d, b3: b[3].d, b4: b[4].d, b5: b[5].d,
      tipX: tip ? tip.x.toFixed(1) : '-60',
      tipY: tip ? tip.y.toFixed(1) : '-60',
      tipOpacity: c.running && tip ? 1 : 0,
      sunOpacity: done ? 1 : 0,
      time: time,
      done: done,
      notDone: !done,
      running: c.running,
      showPlay: !c.running && !done,
      showReplay: done,
      toggleLabel: c.running ? 'Pause' : (done ? 'Start again' : 'Start'),
      ariaLabel: done ? 'Rainbow timer finished' : 'Rainbow timer, ' + time + ' left',
      toggle: () => this.toggle(),
      setTime: () => this.openPicker(),
      applyTime: (v) => this.applyTime(v),
      cancelPick: () => this.cancelPick(),
      picking: !!(this.state && this.state.picking),
      pickValue: Math.max(1, Math.round(c.rem > 0 ? c.rem : c.total)),
      reset: () => this.reset()
    };
  }
}
return Component;
})() }),
  Object.assign({"id":"pizza","name":"Pizza Party","tagline":"One slice is 5 minutes","relative":false,"sleep":false,"bars":["#F4C9BE","#D9A262"],"lbars":null,"ldir":"90deg","lsplit":56.6,"psplit":70,"back":"light","defaults":{"minutes":35,"speed":"Demo (1 min = 1 s)","landscape":false},"template":"<div style=\"width: {{ L.w }}px; height: {{ L.h }}px; position: relative; overflow: hidden; background-color: #FFF3E3; background-image: linear-gradient(90deg, rgba(222, 60, 60, 0.42) 50%, transparent 50%), linear-gradient(rgba(222, 60, 60, 0.42) 50%, transparent 50%); background-size: 46px 46px; font-family: 'Rubik', 'Helvetica Neue', system-ui, sans-serif; color: #3B1F12\">\n<svg width=\"390\" height=\"600\" viewBox=\"0 0 390 600\" role=\"img\" aria-label=\"{{ ariaLabel }}\" style=\"position: absolute; left: 0; top: 0; display: block; transform-origin: 0 0; transform: {{ L.cT }}\">\n<defs>\n<clipPath id=\"pz-left-clip\"><path d=\"{{ wedge }}\"></path></clipPath>\n</defs>\n<circle cx=\"195\" cy=\"365\" r=\"170\" fill=\"#5A1414\" opacity=\"0.22\"></circle>\n<circle cx=\"195\" cy=\"355\" r=\"170\" fill=\"#FFFFFF\"></circle>\n<circle cx=\"195\" cy=\"355\" r=\"146\" fill=\"#F5EDE1\" stroke=\"#E6DACA\" stroke-width=\"2\"></circle>\n<g fill=\"#6E4E36\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\" dominant-baseline=\"central\">\n<text x=\"195\" y=\"197\">{{ F.n0 }}</text>\n<text x=\"274\" y=\"218.2\">{{ F.n1 }}</text>\n<text x=\"331.8\" y=\"276\">{{ F.n2 }}</text>\n<text x=\"353\" y=\"355\">{{ F.n3 }}</text>\n<text x=\"331.8\" y=\"434\">{{ F.n4 }}</text>\n<text x=\"274\" y=\"491.8\">{{ F.n5 }}</text>\n<text x=\"195\" y=\"513\">{{ F.n6 }}</text>\n<text x=\"116\" y=\"491.8\">{{ F.n7 }}</text>\n<text x=\"58.2\" y=\"434\">{{ F.n8 }}</text>\n<text x=\"37\" y=\"355\">{{ F.n9 }}</text>\n<text x=\"58.2\" y=\"276\">{{ F.n10 }}</text>\n<text x=\"116\" y=\"218.2\">{{ F.n11 }}</text>\n</g>\n<path d=\"M150 314C176 298 214 306 242 336\" fill=\"none\" stroke=\"#D9481F\" stroke-opacity=\"0.16\" stroke-width=\"8\" stroke-linecap=\"round\"></path>\n<path d=\"M118 402C140 422 168 430 190 426\" fill=\"none\" stroke=\"#D9481F\" stroke-opacity=\"0.12\" stroke-width=\"6\" stroke-linecap=\"round\"></path>\n<g fill=\"#D29343\">\n<circle cx=\"232\" cy=\"286\" r=\"2.6\"></circle>\n<circle cx=\"300\" cy=\"352\" r=\"3\"></circle>\n<circle cx=\"288\" cy=\"428\" r=\"1.8\"></circle>\n<circle cx=\"204\" cy=\"478\" r=\"2\"></circle>\n<circle cx=\"122\" cy=\"438\" r=\"2.2\"></circle>\n<circle cx=\"82\" cy=\"338\" r=\"2\"></circle>\n<circle cx=\"150\" cy=\"262\" r=\"2\"></circle>\n<circle cx=\"216\" cy=\"340\" r=\"1.8\"></circle>\n</g>\n<g fill=\"#B9772E\">\n<circle cx=\"271\" cy=\"312\" r=\"2\"></circle>\n<circle cx=\"262\" cy=\"392\" r=\"2.2\"></circle>\n<circle cx=\"232\" cy=\"452\" r=\"2.6\"></circle>\n<circle cx=\"160\" cy=\"462\" r=\"3\"></circle>\n<circle cx=\"96\" cy=\"388\" r=\"2.6\"></circle>\n<circle cx=\"112\" cy=\"298\" r=\"2.8\"></circle>\n<circle cx=\"190\" cy=\"244\" r=\"2.4\"></circle>\n<circle cx=\"170\" cy=\"392\" r=\"2.2\"></circle>\n</g>\n<g clip-path=\"url(#pz-left-clip)\">\n<circle cx=\"195\" cy=\"355\" r=\"140\" fill=\"#D98E37\"></circle>\n<circle cx=\"195\" cy=\"355\" r=\"136\" fill=\"#EBAE58\"></circle>\n<circle cx=\"195\" cy=\"355\" r=\"124\" fill=\"#D9481F\"></circle>\n<circle cx=\"195\" cy=\"355\" r=\"120\" fill=\"#FFCF5E\"></circle>\n<g fill=\"#C27526\" opacity=\"0.55\">\n<ellipse cx=\"228.9\" cy=\"228.5\" rx=\"6\" ry=\"3\"></ellipse>\n<ellipse cx=\"295.3\" cy=\"270.8\" rx=\"6\" ry=\"3\"></ellipse>\n<ellipse cx=\"325.5\" cy=\"366.4\" rx=\"3\" ry=\"6\"></ellipse>\n<ellipse cx=\"279.2\" cy=\"455.3\" rx=\"6\" ry=\"3\"></ellipse>\n<ellipse cx=\"172.3\" cy=\"484\" rx=\"6\" ry=\"3\"></ellipse>\n<ellipse cx=\"94.7\" cy=\"439.2\" rx=\"6\" ry=\"3\"></ellipse>\n<ellipse cx=\"66\" cy=\"332.3\" rx=\"3\" ry=\"6\"></ellipse>\n<ellipse cx=\"110.8\" cy=\"254.7\" rx=\"6\" ry=\"3\"></ellipse>\n<ellipse cx=\"183.6\" cy=\"224.5\" rx=\"6\" ry=\"3\"></ellipse>\n</g>\n<g fill=\"#FFE29A\">\n<ellipse cx=\"180\" cy=\"302\" rx=\"16\" ry=\"9\"></ellipse>\n<ellipse cx=\"252\" cy=\"392\" rx=\"15\" ry=\"8\"></ellipse>\n<ellipse cx=\"122\" cy=\"410\" rx=\"12\" ry=\"7\"></ellipse>\n<ellipse cx=\"232\" cy=\"262\" rx=\"11\" ry=\"6\"></ellipse>\n<ellipse cx=\"304\" cy=\"350\" rx=\"12\" ry=\"7\"></ellipse>\n<ellipse cx=\"150\" cy=\"436\" rx=\"11\" ry=\"6\"></ellipse>\n<ellipse cx=\"210\" cy=\"430\" rx=\"13\" ry=\"7\"></ellipse>\n<ellipse cx=\"110\" cy=\"330\" rx=\"10\" ry=\"6\"></ellipse>\n<ellipse cx=\"276\" cy=\"280\" rx=\"9\" ry=\"5\"></ellipse>\n</g>\n<g fill=\"#F2B23F\" opacity=\"0.55\">\n<ellipse cx=\"200\" cy=\"280\" rx=\"6\" ry=\"4\"></ellipse>\n<ellipse cx=\"290\" cy=\"400\" rx=\"7\" ry=\"4\"></ellipse>\n<ellipse cx=\"140\" cy=\"380\" rx=\"6\" ry=\"3.5\"></ellipse>\n<ellipse cx=\"240\" cy=\"460\" rx=\"6\" ry=\"3.5\"></ellipse>\n<ellipse cx=\"95\" cy=\"300\" rx=\"5\" ry=\"3\"></ellipse>\n<ellipse cx=\"230\" cy=\"372\" rx=\"5\" ry=\"3\"></ellipse>\n</g>\n<g transform=\"translate(218.9 289.2)\"><circle r=\"15\" fill=\"#B02B26\"></circle><circle r=\"12.5\" fill=\"#D2433A\"></circle><circle cx=\"-5\" cy=\"-3\" r=\"1.7\" fill=\"#9A2420\"></circle><circle cx=\"4\" cy=\"-5\" r=\"1.5\" fill=\"#9A2420\"></circle><circle cx=\"2\" cy=\"5\" r=\"1.8\" fill=\"#9A2420\"></circle><path d=\"M-8 -6A10 10 0 0 1 2 -10\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.35\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(285.6 312.7)\"><circle r=\"15\" fill=\"#B02B26\"></circle><circle r=\"12.5\" fill=\"#D2433A\"></circle><circle cx=\"-4\" cy=\"4\" r=\"1.7\" fill=\"#9A2420\"></circle><circle cx=\"5\" cy=\"-2\" r=\"1.5\" fill=\"#9A2420\"></circle><circle cx=\"-2\" cy=\"-6\" r=\"1.6\" fill=\"#9A2420\"></circle><path d=\"M-8 -6A10 10 0 0 1 2 -10\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.35\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(239.8 358.9)\"><circle r=\"15\" fill=\"#B02B26\"></circle><circle r=\"12.5\" fill=\"#D2433A\"></circle><circle cx=\"-5\" cy=\"-3\" r=\"1.7\" fill=\"#9A2420\"></circle><circle cx=\"4\" cy=\"-5\" r=\"1.5\" fill=\"#9A2420\"></circle><circle cx=\"2\" cy=\"5\" r=\"1.8\" fill=\"#9A2420\"></circle><path d=\"M-8 -6A10 10 0 0 1 2 -10\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.35\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(265.5 414.1)\"><circle r=\"15\" fill=\"#B02B26\"></circle><circle r=\"12.5\" fill=\"#D2433A\"></circle><circle cx=\"-4\" cy=\"4\" r=\"1.7\" fill=\"#9A2420\"></circle><circle cx=\"5\" cy=\"-2\" r=\"1.5\" fill=\"#9A2420\"></circle><circle cx=\"-2\" cy=\"-6\" r=\"1.6\" fill=\"#9A2420\"></circle><path d=\"M-8 -6A10 10 0 0 1 2 -10\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.35\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(210.5 413)\"><circle r=\"15\" fill=\"#B02B26\"></circle><circle r=\"12.5\" fill=\"#D2433A\"></circle><circle cx=\"-5\" cy=\"-3\" r=\"1.7\" fill=\"#9A2420\"></circle><circle cx=\"4\" cy=\"-5\" r=\"1.5\" fill=\"#9A2420\"></circle><circle cx=\"2\" cy=\"5\" r=\"1.8\" fill=\"#9A2420\"></circle><path d=\"M-8 -6A10 10 0 0 1 2 -10\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.35\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(161.5 447.1)\"><circle r=\"15\" fill=\"#B02B26\"></circle><circle r=\"12.5\" fill=\"#D2433A\"></circle><circle cx=\"-4\" cy=\"4\" r=\"1.7\" fill=\"#9A2420\"></circle><circle cx=\"5\" cy=\"-2\" r=\"1.5\" fill=\"#9A2420\"></circle><circle cx=\"-2\" cy=\"-6\" r=\"1.6\" fill=\"#9A2420\"></circle><path d=\"M-8 -6A10 10 0 0 1 2 -10\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.35\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(152.4 384.8)\"><circle r=\"15\" fill=\"#B02B26\"></circle><circle r=\"12.5\" fill=\"#D2433A\"></circle><circle cx=\"-5\" cy=\"-3\" r=\"1.7\" fill=\"#9A2420\"></circle><circle cx=\"4\" cy=\"-5\" r=\"1.5\" fill=\"#9A2420\"></circle><circle cx=\"2\" cy=\"5\" r=\"1.8\" fill=\"#9A2420\"></circle><path d=\"M-8 -6A10 10 0 0 1 2 -10\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.35\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(96 368.9)\"><circle r=\"15\" fill=\"#B02B26\"></circle><circle r=\"12.5\" fill=\"#D2433A\"></circle><circle cx=\"-4\" cy=\"4\" r=\"1.7\" fill=\"#9A2420\"></circle><circle cx=\"5\" cy=\"-2\" r=\"1.5\" fill=\"#9A2420\"></circle><circle cx=\"-2\" cy=\"-6\" r=\"1.6\" fill=\"#9A2420\"></circle><path d=\"M-8 -6A10 10 0 0 1 2 -10\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.35\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(132.6 319)\"><circle r=\"15\" fill=\"#B02B26\"></circle><circle r=\"12.5\" fill=\"#D2433A\"></circle><circle cx=\"-5\" cy=\"-3\" r=\"1.7\" fill=\"#9A2420\"></circle><circle cx=\"4\" cy=\"-5\" r=\"1.5\" fill=\"#9A2420\"></circle><circle cx=\"2\" cy=\"5\" r=\"1.8\" fill=\"#9A2420\"></circle><path d=\"M-8 -6A10 10 0 0 1 2 -10\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.35\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(156.8 260.4)\"><circle r=\"15\" fill=\"#B02B26\"></circle><circle r=\"12.5\" fill=\"#D2433A\"></circle><circle cx=\"-4\" cy=\"4\" r=\"1.7\" fill=\"#9A2420\"></circle><circle cx=\"5\" cy=\"-2\" r=\"1.5\" fill=\"#9A2420\"></circle><circle cx=\"-2\" cy=\"-6\" r=\"1.6\" fill=\"#9A2420\"></circle><path d=\"M-8 -6A10 10 0 0 1 2 -10\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.35\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(207.9 339.7)\"><circle r=\"15\" fill=\"#B02B26\"></circle><circle r=\"12.5\" fill=\"#D2433A\"></circle><circle cx=\"-5\" cy=\"-3\" r=\"1.7\" fill=\"#9A2420\"></circle><circle cx=\"4\" cy=\"-5\" r=\"1.5\" fill=\"#9A2420\"></circle><circle cx=\"2\" cy=\"5\" r=\"1.8\" fill=\"#9A2420\"></circle><path d=\"M-8 -6A10 10 0 0 1 2 -10\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.35\" stroke-width=\"2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(262.6 336.9) rotate(30)\"><ellipse rx=\"10\" ry=\"5.5\" fill=\"#2F8F4E\"></ellipse><path d=\"M-8 0L8 0\" stroke=\"#1E6B37\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(298.4 392.6) rotate(-40)\"><ellipse rx=\"10\" ry=\"5.5\" fill=\"#2F8F4E\"></ellipse><path d=\"M-8 0L8 0\" stroke=\"#1E6B37\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(185.2 466.6) rotate(15)\"><ellipse rx=\"10\" ry=\"5.5\" fill=\"#2F8F4E\"></ellipse><path d=\"M-8 0L8 0\" stroke=\"#1E6B37\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(155.6 348) rotate(70)\"><ellipse rx=\"10\" ry=\"5.5\" fill=\"#2F8F4E\"></ellipse><path d=\"M-8 0L8 0\" stroke=\"#1E6B37\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(124.8 277) rotate(-20)\"><ellipse rx=\"10\" ry=\"5.5\" fill=\"#2F8F4E\"></ellipse><path d=\"M-8 0L8 0\" stroke=\"#1E6B37\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></g>\n<g transform=\"translate(210.3 246.1) rotate(50)\"><ellipse rx=\"10\" ry=\"5.5\" fill=\"#2F8F4E\"></ellipse><path d=\"M-8 0L8 0\" stroke=\"#1E6B37\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></g>\n<path d=\"M195 355L195 215M195 355L265 233.76M195 355L316.24 285M195 355L335 355M195 355L316.24 425M195 355L265 476.24M195 355L195 495M195 355L125 476.24M195 355L73.76 425M195 355L55 355M195 355L73.76 285M195 355L125 233.76\" fill=\"none\" stroke=\"#C98A2C\" stroke-width=\"2\" stroke-opacity=\"0.45\"></path>\n</g>\n<path d=\"{{ edge }}\" fill=\"none\" stroke=\"#A9651C\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.55\"></path>\n</svg>\n<header style=\"position: absolute; z-index: 2; left: {{ L.hL }}px; right: {{ L.hR }}px; top: {{ L.hT }}px; height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 12px\">\n<h1 style=\"margin: 0; padding: 10px 18px; border-radius: 999px; background: #FFFFFF; font-family: 'Bungee', 'Arial Black', sans-serif; font-weight: 400; font-size: 19px; line-height: 1.2; color: #3B1F12; box-shadow: 0 3px 0 rgba(90, 20, 20, 0.28)\">Lunch time</h1>\n</header>\n<section style=\"position: absolute; left: {{ L.sL }}px; right: 0; top: {{ L.sT }}px; bottom: 0; box-sizing: border-box; padding: {{ L.sPad }}; display: flex; flex-direction: column; align-items: center; justify-content: {{ L.sJ }}; gap: 22px; background-color: #D9A262; background-image: radial-gradient(rgba(110, 62, 24, 0.16) 1px, transparent 1.6px); background-size: 9px 9px; border-radius: {{ L.sRad }}; box-shadow: {{ L.sSh }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center\">\n<sc-if value=\"{{ notDone }}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 6px\">\n<div style=\"font-family: 'Bungee', 'Arial Black', sans-serif; font-size: 60px; line-height: 1; font-variant-numeric: tabular-nums\">{{ time }}</div>\n<div style=\"font-size: 16px; font-weight: 600\">{{ slicesLabel }}</div>\n</div>\n</sc-if>\n<sc-if value=\"{{ done }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 8px\">\n<div style=\"font-family: 'Bungee', 'Arial Black', sans-serif; font-size: {{ L.doneSize }}px; line-height: 1.05\">All gone!</div>\n<div style=\"font-size: 16px; font-weight: 600\">Lunch is over. Nice eating!</div>\n</div>\n</sc-if>\n</div>\n<div style=\"display: flex; align-items: center; justify-content: center; gap: 30px\">\n<button type=\"button\" onClick=\"{{ setTime }}\" aria-label=\"Set the time\" style=\"width: 62px; height: 62px; padding: 0; border: none; border-radius: 999px; background: #FFFFFF; color: #3B1F12; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 0 #A8743C\"><svg width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M10 2h4M12 14l3-3\"></path><circle cx=\"12\" cy=\"14\" r=\"8\"></circle></svg></button>\n<button type=\"button\" onClick=\"{{ toggle }}\" aria-label=\"{{ toggleLabel }}\" style=\"width: 86px; height: 86px; padding: 0; border: none; border-radius: 999px; background: #D23A2F; color: #FFFFFF; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 5px 0 #8E2119\">\n<sc-if value=\"{{ showPlay }}\" hint-placeholder-val=\"{{ true }}\"><svg width=\"36\" height=\"36\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block; margin-left: 3px\"><path d=\"M8 5.14v13.72a1 1 0 0 0 1.52.85l10.79-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z\" fill=\"currentColor\"></path></svg></sc-if>\n<sc-if value=\"{{ running }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block\"><rect x=\"6\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect><rect x=\"13.5\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect></svg></sc-if>\n<sc-if value=\"{{ showReplay }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></sc-if>\n</button>\n<button type=\"button\" onClick=\"{{ reset }}\" aria-label=\"Reset timer\" style=\"width: 62px; height: 62px; padding: 0; border: none; border-radius: 999px; background: #FFFFFF; color: #3B1F12; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 0 #A8743C\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></button>\n</div>\n</section>\n<sc-if value=\"{{ picking }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"position: absolute; left: 0; top: 0; width: {{ L.w }}px; height: {{ L.h }}px; z-index: 20\">\n<dc-import name=\"TimePicker\" value=\"{{ pickValue }}\" mode=\"duration\" heading=\"Set time\" accent=\"#D23A2F\" accent-ink=\"#FFFFFF\" dark=\"{{ false }}\" landscape=\"{{ L.land }}\" on-set=\"{{ applyTime }}\" on-cancel=\"{{ cancelPick }}\" hint-size=\"390px,844px\"></dc-import>\n</div>\n</sc-if>\n</div>"}, { Logic: (function () {
class Component extends DCLogic {
  componentDidMount() {
    this.last = Date.now();
    this.iv = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.iv);
  }
  componentDidUpdate(prev) {
    if (prev && prev.minutes !== this.props.minutes) {
      this.setState({ rem: null, total: null, setSec: null, running: false, picking: false });
    }
  }
  base() {
    const m = Math.round(Number(this.props.minutes ?? 35));
    return (m > 0 ? Math.min(60, m) : 35) * 60;
  }
  rate() {
    return this.props.speed === 'Real time' ? 1 : 60;
  }
  cur() {
    const s = this.state || {};
    const b = this.base();
    const rem = s.rem ?? b;
    return { rem: rem, total: Math.max(s.total ?? b, rem, 1), running: !!s.running };
  }
  tick() {
    const now = Date.now();
    const dt = Math.max(0, (now - (this.last || now)) / 1000);
    this.last = now;
    const c = this.cur();
    if (!c.running) return;
    const rem = Math.max(0, c.rem - dt * this.rate());
    this.setState({ rem: rem, total: c.total, running: rem > 0 });
  }
  dur() {
    const s = this.state || {};
    return s.setSec ?? this.base();
  }
  toggle() {
    const c = this.cur();
    this.last = Date.now();
    if (c.rem <= 0) {
      const b = this.dur();
      this.setState({ rem: b, total: b, running: true });
    } else {
      this.setState({ rem: c.rem, total: c.total, running: !c.running });
    }
  }
  openPicker() {
    const c = this.cur();
    this.setState({ rem: c.rem, total: c.total, running: false, picking: true, wasRunning: c.running });
  }
  applyTime(sec) {
    const v = Math.max(1, Math.min(86399, Math.round(Number(sec) || 0)));
    this.last = Date.now();
    this.setState({ rem: v, total: v, setSec: v, running: false, picking: false });
  }
  cancelPick() {
    const s = this.state || {};
    this.last = Date.now();
    this.setState({ picking: false, running: !!s.wasRunning });
  }
  bump(d) {
    const c = this.cur();
    const rem = Math.max(0, Math.min(3600, c.rem + d));
    const total = Math.max(rem, 60, Math.min(3600, c.total + d));
    this.setState({ rem: rem, total: total, running: c.running && rem > 0 });
  }
  reset() {
    const b = this.dur();
    this.setState({ rem: b, total: b, running: false });
  }
  fmt(sec) {
    const s = Math.max(0, Math.ceil(sec - 0.001));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const r = s % 60;
    return (h > 0 ? h + ':' + (m < 10 ? '0' : '') + m : String(m)) + ':' + (r < 10 ? '0' : '') + r;
  }
  wedge(frac) {
    if (frac <= 0) return 'M0 0Z';
    if (frac >= 0.9999) return 'M195 205A150 150 0 1 1 195 505A150 150 0 1 1 195 205Z';
    const a = frac * Math.PI * 2;
    const x = 195 + 150 * Math.sin(a);
    const y = 355 - 150 * Math.cos(a);
    return 'M195 355L195 205A150 150 0 ' + (frac > 0.5 ? 1 : 0) + ' 1 ' + x.toFixed(2) + ' ' + y.toFixed(2) + 'Z';
  }
  edge(frac) {
    if (frac <= 0 || frac >= 0.9999) return 'M-60 -60';
    const a = frac * Math.PI * 2;
    const x = 195 + 140 * Math.sin(a);
    const y = 355 - 140 * Math.cos(a);
    return 'M195 215L195 355L' + x.toFixed(2) + ' ' + y.toFixed(2);
  }
  lay() {
    const land = !!this.props.landscape;
    const v = land ? { k: 0.96, x: 76, y: -150 } : { k: 1, x: 0, y: 0 };
    return {
      land: land,
      w: land ? 844 : 390,
      h: land ? 390 : 844,
      vb: land ? '0 0 844 390' : '0 0 390 844',
      pD: land ? 'none' : 'inline',
      lD: land ? 'inline' : 'none',
      gT: 'translate(' + v.x + ' ' + v.y + ') scale(' + v.k + ')',
      cT: 'translate(' + v.x + 'px, ' + v.y + 'px) scale(' + v.k + ')',
      mid: land ? 'translateY(-50%)' : 'none',
      hL: land ? 500 : 20,
      hR: land ? 60 : 20,
      hT: land ? 22 : 52,
      sL: land ? 478 : 0,
      sT: land ? 0 : 590,
      sPad: land ? '74px 56px 18px 24px' : '26px 0 0',
      sJ: land ? 'center' : 'flex-start',
      sRad: land ? '30px 0 0 30px' : '30px 30px 0 0',
      sSh: land ? '-5px 0 0 rgba(90, 20, 20, 0.2)' : '0 -5px 0 rgba(90, 20, 20, 0.2)',
      doneSize: land ? 40 : 46
    };
  }
  scale(total) {
    // The picture's full size: the smallest of 1 minute, 12 minutes, 1 hour,
    // 2 hours and 12 hours that holds the time that was set. Each keeps whole
    // numbers on the labels; n() turns seconds into the labels' unit.
    const C = [60, 720, 3600, 7200, 43200].find((x) => total <= x) || 43200;
    const u = C === 60 ? 1 : C === 43200 ? 3600 : 60;
    return { C: C, n: (sec) => sec / u };
  }
  unitName(v, short) {
    if (v < 60) return short ? v + ' sec' : v === 1 ? 'second' : v + ' seconds';
    if (v < 3600) {
      const m = v / 60;
      return short ? m + ' min' : m === 1 ? 'minute' : m + ' minutes';
    }
    const h = v / 3600;
    return short ? (h === 1 ? '1 hour' : h + ' hours') : h === 1 ? 'hour' : h + ' hours';
  }
  renderVals() {
    const c = this.cur();
    const S = this.scale(c.total);
    const frac = Math.max(0, Math.min(1, c.rem / S.C));
    const F = {};
    for (let k = 0; k < 12; k++) F['n' + k] = k * S.n(S.C / 12);
    const done = c.rem <= 0;
    const time = this.fmt(c.rem);
    const slices = Math.min(12, Math.ceil(c.rem / (S.C / 12) - 1e-9));
    return {
      L: this.lay(),
      wedge: this.wedge(frac),
      edge: this.edge(frac),
      time: time,
      slicesLabel: (slices === 1 ? '1 slice left' : slices + ' slices left') + ' · 1 slice = ' + this.unitName(S.C / 12, true),
      F: F,
      done: done,
      notDone: !done,
      running: c.running,
      showPlay: !c.running && !done,
      showReplay: done,
      toggleLabel: c.running ? 'Pause' : (done ? 'Start again' : 'Start'),
      ariaLabel: done ? 'Pizza timer finished, the pizza is all gone' : 'Pizza timer, ' + time + ' left, ' + slices + ' slices',
      toggle: () => this.toggle(),
      setTime: () => this.openPicker(),
      applyTime: (v) => this.applyTime(v),
      cancelPick: () => this.cancelPick(),
      picking: !!(this.state && this.state.picking),
      pickValue: Math.max(1, Math.round(c.rem > 0 ? c.rem : c.total)),
      reset: () => this.reset()
    };
  }
}
return Component;
})() }),
  Object.assign({"id":"rocket","name":"Moon Mission","tagline":"Fly all the way to the Moon","relative":true,"sleep":false,"bars":["#0B1230","#0B1230"],"lbars":null,"ldir":null,"lsplit":null,"psplit":null,"back":"dark","defaults":{"minutes":20,"left":60,"speed":"Demo (1 min = 1 s)","landscape":false},"template":"<div style=\"width: {{ L.w }}px; height: {{ L.h }}px; position: relative; overflow: hidden; background: #0B1230; font-family: 'Space Grotesk', system-ui, sans-serif; color: #FFFFFF\">\n<svg width=\"{{ L.w }}\" height=\"{{ L.h }}\" viewBox=\"{{ L.vb }}\" role=\"img\" aria-label=\"{{ ariaLabel }}\" style=\"position: absolute; left: 0; top: 0; display: block\">\n<defs>\n<clipPath id=\"rk-earth-clip\"><circle cx=\"80\" cy=\"560\" r=\"62\"></circle></clipPath>\n<clipPath id=\"rk-moon-clip\"><circle cx=\"300\" cy=\"168\" r=\"56\"></circle></clipPath>\n</defs>\n<g display=\"{{ L.pD }}\">\n<g fill=\"#FFFFFF\" style=\"animation: rk-tw 3s ease-in-out infinite\">\n<circle cx=\"28\" cy=\"132\" r=\"1.4\"></circle>\n<circle cx=\"96\" cy=\"88\" r=\"1.1\"></circle>\n<circle cx=\"150\" cy=\"150\" r=\"1.6\"></circle>\n<circle cx=\"210\" cy=\"96\" r=\"1.2\"></circle>\n<circle cx=\"366\" cy=\"96\" r=\"1.5\"></circle>\n<circle cx=\"352\" cy=\"258\" r=\"1.2\"></circle>\n<circle cx=\"44\" cy=\"300\" r=\"1.6\"></circle>\n<circle cx=\"128\" cy=\"236\" r=\"1\"></circle>\n<circle cx=\"250\" cy=\"300\" r=\"1.3\"></circle>\n<circle cx=\"372\" cy=\"470\" r=\"1.4\"></circle>\n<circle cx=\"20\" cy=\"430\" r=\"1.1\"></circle>\n<circle cx=\"300\" cy=\"560\" r=\"1.2\"></circle>\n<circle cx=\"180\" cy=\"620\" r=\"1\"></circle>\n<circle cx=\"350\" cy=\"690\" r=\"1.3\"></circle>\n</g>\n<g fill=\"#FFFFFF\" style=\"animation: rk-tw 4.2s ease-in-out -1.3s infinite\">\n<circle cx=\"64\" cy=\"190\" r=\"1\"></circle>\n<circle cx=\"186\" cy=\"60\" r=\"1.4\"></circle>\n<circle cx=\"244\" cy=\"150\" r=\"1\"></circle>\n<circle cx=\"330\" cy=\"60\" r=\"1\"></circle>\n<circle cx=\"380\" cy=\"190\" r=\"1.3\"></circle>\n<circle cx=\"96\" cy=\"360\" r=\"1.2\"></circle>\n<circle cx=\"300\" cy=\"340\" r=\"1\"></circle>\n<circle cx=\"160\" cy=\"330\" r=\"1.4\"></circle>\n<circle cx=\"40\" cy=\"470\" r=\"1\"></circle>\n<circle cx=\"240\" cy=\"520\" r=\"1.4\"></circle>\n<circle cx=\"360\" cy=\"600\" r=\"1\"></circle>\n<circle cx=\"60\" cy=\"720\" r=\"1.2\"></circle>\n<circle cx=\"220\" cy=\"760\" r=\"1\"></circle>\n<circle cx=\"330\" cy=\"800\" r=\"1.2\"></circle>\n</g>\n<g fill=\"#FFFFFF\" style=\"animation: rk-tw 5.4s ease-in-out -2.6s infinite\">\n<circle cx=\"14\" cy=\"60\" r=\"1.2\"></circle>\n<circle cx=\"124\" cy=\"40\" r=\"1\"></circle>\n<circle cx=\"270\" cy=\"52\" r=\"1.3\"></circle>\n<circle cx=\"232\" cy=\"226\" r=\"1.6\"></circle>\n<circle cx=\"110\" cy=\"140\" r=\"1.2\"></circle>\n<circle cx=\"340\" cy=\"320\" r=\"1.5\"></circle>\n<circle cx=\"20\" cy=\"240\" r=\"1\"></circle>\n<circle cx=\"200\" cy=\"420\" r=\"1.1\"></circle>\n<circle cx=\"376\" cy=\"330\" r=\"1\"></circle>\n<circle cx=\"150\" cy=\"520\" r=\"1.3\"></circle>\n<circle cx=\"270\" cy=\"640\" r=\"1.1\"></circle>\n<circle cx=\"100\" cy=\"800\" r=\"1\"></circle>\n<circle cx=\"380\" cy=\"760\" r=\"1.1\"></circle>\n<circle cx=\"150\" cy=\"690\" r=\"1.2\"></circle>\n</g>\n</g>\n<g display=\"{{ L.lD }}\">\n<g fill=\"#FFFFFF\" style=\"animation: rk-tw 3s ease-in-out infinite\">\n<circle cx=\"339\" cy=\"85\" r=\"1.3\"></circle>\n<circle cx=\"674\" cy=\"32\" r=\"1\"></circle>\n<circle cx=\"556\" cy=\"56\" r=\"1.2\"></circle>\n<circle cx=\"604\" cy=\"37\" r=\"1.4\"></circle>\n<circle cx=\"227\" cy=\"27\" r=\"1\"></circle>\n<circle cx=\"452\" cy=\"222\" r=\"1\"></circle>\n<circle cx=\"572\" cy=\"225\" r=\"1\"></circle>\n<circle cx=\"236\" cy=\"330\" r=\"1.5\"></circle>\n<circle cx=\"598\" cy=\"307\" r=\"1.3\"></circle>\n<circle cx=\"58\" cy=\"121\" r=\"1\"></circle>\n<circle cx=\"304\" cy=\"222\" r=\"1.1\"></circle>\n<circle cx=\"592\" cy=\"165\" r=\"1.4\"></circle>\n<circle cx=\"706\" cy=\"100\" r=\"1\"></circle>\n<circle cx=\"662\" cy=\"104\" r=\"1.2\"></circle>\n<circle cx=\"107\" cy=\"288\" r=\"1.5\"></circle>\n<circle cx=\"69\" cy=\"324\" r=\"1.1\"></circle>\n</g>\n<g fill=\"#FFFFFF\" style=\"animation: rk-tw 4.2s ease-in-out -1.3s infinite\">\n<circle cx=\"516\" cy=\"356\" r=\"1.4\"></circle>\n<circle cx=\"445\" cy=\"168\" r=\"1.3\"></circle>\n<circle cx=\"607\" cy=\"240\" r=\"1.2\"></circle>\n<circle cx=\"314\" cy=\"135\" r=\"1.6\"></circle>\n<circle cx=\"192\" cy=\"365\" r=\"1.6\"></circle>\n<circle cx=\"257\" cy=\"49\" r=\"1.4\"></circle>\n<circle cx=\"315\" cy=\"276\" r=\"1.3\"></circle>\n<circle cx=\"359\" cy=\"381\" r=\"1.3\"></circle>\n<circle cx=\"302\" cy=\"319\" r=\"1\"></circle>\n<circle cx=\"128\" cy=\"270\" r=\"1.3\"></circle>\n<circle cx=\"176\" cy=\"183\" r=\"1.1\"></circle>\n<circle cx=\"508\" cy=\"223\" r=\"1\"></circle>\n<circle cx=\"692\" cy=\"47\" r=\"1.6\"></circle>\n<circle cx=\"579\" cy=\"301\" r=\"1.6\"></circle>\n<circle cx=\"329\" cy=\"182\" r=\"1.5\"></circle>\n<circle cx=\"366\" cy=\"312\" r=\"1.3\"></circle>\n</g>\n<g fill=\"#FFFFFF\" style=\"animation: rk-tw 5.4s ease-in-out -2.6s infinite\">\n<circle cx=\"601\" cy=\"241\" r=\"1\"></circle>\n<circle cx=\"103\" cy=\"146\" r=\"1.3\"></circle>\n<circle cx=\"721\" cy=\"348\" r=\"1\"></circle>\n<circle cx=\"70\" cy=\"382\" r=\"1.5\"></circle>\n<circle cx=\"325\" cy=\"339\" r=\"1.4\"></circle>\n<circle cx=\"705\" cy=\"236\" r=\"1.2\"></circle>\n<circle cx=\"741\" cy=\"205\" r=\"1.5\"></circle>\n<circle cx=\"363\" cy=\"19\" r=\"1.3\"></circle>\n<circle cx=\"371\" cy=\"94\" r=\"1.4\"></circle>\n<circle cx=\"127\" cy=\"260\" r=\"1\"></circle>\n<circle cx=\"231\" cy=\"155\" r=\"1.1\"></circle>\n<circle cx=\"764\" cy=\"134\" r=\"1.3\"></circle>\n<circle cx=\"408\" cy=\"262\" r=\"1\"></circle>\n<circle cx=\"178\" cy=\"237\" r=\"1.3\"></circle>\n<circle cx=\"570\" cy=\"150\" r=\"1.1\"></circle>\n<circle cx=\"448\" cy=\"289\" r=\"1.2\"></circle>\n</g>\n</g>\n<g style=\"animation: {{ L.shoot }}\">\n<path d=\"M0 0L46 -18\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.9\"></path>\n</g>\n<g transform=\"{{ L.moonT }}\">\n<circle cx=\"300\" cy=\"168\" r=\"96\" fill=\"#F2E9D8\" opacity=\"0.05\"></circle>\n<circle cx=\"300\" cy=\"168\" r=\"76\" fill=\"#F2E9D8\" opacity=\"0.07\"></circle>\n<circle cx=\"300\" cy=\"168\" r=\"56\" fill=\"#EFE6D2\"></circle>\n<g clip-path=\"url(#rk-moon-clip)\">\n<circle cx=\"318\" cy=\"184\" r=\"56\" fill=\"#C9BB9C\" opacity=\"0.35\"></circle>\n<circle cx=\"282\" cy=\"150\" r=\"10\" fill=\"#DDD0B5\"></circle>\n<circle cx=\"318\" cy=\"186\" r=\"13\" fill=\"#D3C5A8\"></circle>\n<circle cx=\"296\" cy=\"198\" r=\"6\" fill=\"#DDD0B5\"></circle>\n<circle cx=\"324\" cy=\"146\" r=\"7\" fill=\"#DDD0B5\"></circle>\n<circle cx=\"270\" cy=\"182\" r=\"5\" fill=\"#DDD0B5\"></circle>\n</g>\n<g opacity=\"{{ doneOpacity }}\" style=\"transition: opacity 0.6s ease\">\n<path d=\"M300 112L300 80\" stroke=\"#EFE6D2\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path>\n<path d=\"M300.5 80L322 87L300.5 94Z\" fill=\"#FF5A5F\"></path>\n</g>\n</g>\n<g transform=\"{{ L.planetT }}\">\n<g style=\"animation: rk-float 6s ease-in-out infinite\">\n<g transform=\"rotate(-20 338 392)\">\n<ellipse cx=\"338\" cy=\"392\" rx=\"30\" ry=\"8\" fill=\"none\" stroke=\"#FFD2A8\" stroke-width=\"3\" opacity=\"0.9\"></ellipse>\n<circle cx=\"338\" cy=\"392\" r=\"16\" fill=\"#FF8E72\"></circle>\n<path d=\"M343 381C348 384 351 389 351 395\" fill=\"none\" stroke=\"#FFB59C\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path>\n<path d=\"M308 392A30 8 0 0 0 368 392\" fill=\"none\" stroke=\"#FFD2A8\" stroke-width=\"3\"></path>\n</g>\n</g>\n</g>\n<g transform=\"{{ L.earthT }}\">\n<circle cx=\"80\" cy=\"560\" r=\"72\" fill=\"#5B9BFF\" opacity=\"0.14\"></circle>\n<circle cx=\"80\" cy=\"560\" r=\"62\" fill=\"#2D6BEA\"></circle>\n<g clip-path=\"url(#rk-earth-clip)\">\n<path d=\"M46 518C60 504 86 508 96 524C104 538 92 552 78 550C64 548 54 562 42 558C30 552 32 530 46 518Z\" fill=\"#3CCB7F\"></path>\n<path d=\"M102 576C116 566 136 572 140 588C142 602 126 614 110 608C98 602 94 586 102 576Z\" fill=\"#3CCB7F\"></path>\n<path d=\"M56 590C66 586 76 594 72 604C68 612 56 610 53 602C51 596 52 592 56 590Z\" fill=\"#3CCB7F\"></path>\n<path d=\"M28 546C48 538 68 542 84 538\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\"0.7\"></path>\n<path d=\"M88 614C102 608 116 612 128 606\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.6\"></path>\n<circle cx=\"102\" cy=\"582\" r=\"62\" fill=\"#050A1E\" opacity=\"0.32\"></circle>\n</g>\n</g>\n<path d=\"{{ pathDone }}\" fill=\"none\" stroke=\"#5E6AA8\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"0 13\" opacity=\"0.75\"></path>\n<path d=\"{{ pathLeft }}\" fill=\"none\" stroke=\"#FFE7A3\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-dasharray=\"0 13\" stroke-dashoffset=\"{{ dashOff }}\"></path>\n</svg>\n<sc-for list=\"{{ stations }}\" as=\"s\" hint-placeholder-count=\"3\">\n<div style=\"position: absolute; left: {{ s.x }}px; top: {{ s.y }}px; width: 0; height: 0; opacity: {{ s.o }}; transition: opacity 0.4s ease\">\n<div style=\"position: absolute; left: -7px; top: -7px; width: 10px; height: 10px; border-radius: 99px; border: 2px solid #9FB0FF; background: #0B1230\"></div>\n<div style=\"position: absolute; left: {{ s.lx }}px; top: {{ s.ly }}px; transform: translate(-50%, -50%); font-size: 12px; font-weight: 600; color: #C9D2FF; white-space: nowrap\">{{ s.label }}</div>\n</div>\n</sc-for>\n<div style=\"position: absolute; left: {{ rocketX }}px; top: {{ rocketY }}px; width: 0; height: 0; transform: rotate({{ rocketAng }}deg)\">\n<svg width=\"100\" height=\"60\" viewBox=\"-50 -30 100 60\" aria-hidden=\"true\" style=\"position: absolute; left: -50px; top: -30px; overflow: visible\">\n<g opacity=\"{{ flameOpacity }}\" style=\"transition: opacity 0.3s ease\">\n<g style=\"transform-box: fill-box; transform-origin: 100% 50%; animation: rk-flame 0.16s ease-in-out infinite alternate\">\n<path d=\"M-26 -6C-34 -6 -44 -2 -50 0C-44 2 -34 6 -26 6Z\" fill=\"#FF8A3D\"></path>\n<path d=\"M-26 -3.5C-31 -3.5 -38 -1 -42 0C-38 1 -31 3.5 -26 3.5Z\" fill=\"#FFE07A\"></path>\n</g>\n</g>\n<path d=\"M-10 -9L-22 -20L-22 -9Z\" fill=\"#FF5A5F\"></path>\n<path d=\"M-10 9L-22 20L-22 9Z\" fill=\"#FF5A5F\"></path>\n<rect x=\"-27\" y=\"-6\" width=\"6\" height=\"12\" rx=\"1.5\" fill=\"#8E97C2\"></rect>\n<path d=\"M-20 -9L10 -9C18 -9 24 -5 28 0C24 5 18 9 10 9L-20 9C-22 9 -23 7 -23 5L-23 -5C-23 -7 -22 -9 -20 -9Z\" fill=\"#F6F3EC\"></path>\n<path d=\"M10 -9C18 -9 24 -5 28 0C24 5 18 9 10 9C12 4 12 -4 10 -9Z\" fill=\"#FF5A5F\"></path>\n<path d=\"M-17 -9L-17 9\" stroke=\"#DCD6C8\" stroke-width=\"2\"></path>\n<circle cx=\"-3\" cy=\"0\" r=\"5\" fill=\"#73C8FF\" stroke=\"#2A3470\" stroke-width=\"2\"></circle>\n</svg>\n</div>\n<header style=\"position: absolute; left: {{ L.hL }}px; right: {{ L.hR }}px; top: {{ L.hT }}px; height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 12px\">\n<h1 style=\"margin: 0; font-family: 'Unbounded', system-ui, sans-serif; font-size: 24px; font-weight: 600; line-height: 1.15\">Get ready</h1>\n</header>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.rT }}px; transform: {{ L.mid }}; display: flex; flex-direction: column; align-items: center\">\n<sc-if value=\"{{ notDone }}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 8px\">\n<div style=\"font-family: 'Unbounded', system-ui, sans-serif; font-size: 56px; font-weight: 600; line-height: 1; font-variant-numeric: tabular-nums\">{{ time }}</div>\n<div style=\"font-size: 16px; font-weight: 500; color: #B9C2F0\">left until touchdown</div>\n</div>\n</sc-if>\n<sc-if value=\"{{ done }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 10px\">\n<div style=\"font-family: 'Unbounded', system-ui, sans-serif; font-size: 40px; font-weight: 700; line-height: 1\">Touchdown!</div>\n<div style=\"font-size: 16px; font-weight: 500; color: #B9C2F0\">You made it. Ready to go!</div>\n</div>\n</sc-if>\n</div>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.kT }}px; transform: {{ L.mid }}; display: flex; align-items: center; justify-content: center; gap: 30px\">\n<button type=\"button\" onClick=\"{{ setTime }}\" aria-label=\"Set the time\" style=\"width: 62px; height: 62px; padding: 0; border: 2px solid #3A4683; border-radius: 999px; background: #19214A; color: #FFFFFF; display: flex; align-items: center; justify-content: center; cursor: pointer\"><svg width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M10 2h4M12 14l3-3\"></path><circle cx=\"12\" cy=\"14\" r=\"8\"></circle></svg></button>\n<button type=\"button\" onClick=\"{{ toggle }}\" aria-label=\"{{ toggleLabel }}\" style=\"width: 88px; height: 88px; padding: 0; border: none; border-radius: 999px; background: #FFB703; color: #0B1230; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 0 0 7px rgba(255, 183, 3, 0.16)\">\n<sc-if value=\"{{ showPlay }}\" hint-placeholder-val=\"{{ true }}\"><svg width=\"36\" height=\"36\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block; margin-left: 3px\"><path d=\"M8 5.14v13.72a1 1 0 0 0 1.52.85l10.79-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z\" fill=\"currentColor\"></path></svg></sc-if>\n<sc-if value=\"{{ running }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block\"><rect x=\"6\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect><rect x=\"13.5\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect></svg></sc-if>\n<sc-if value=\"{{ showReplay }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></sc-if>\n</button>\n<button type=\"button\" onClick=\"{{ reset }}\" aria-label=\"Reset timer\" style=\"width: 62px; height: 62px; padding: 0; border: 2px solid #3A4683; border-radius: 999px; background: #19214A; color: #FFFFFF; display: flex; align-items: center; justify-content: center; cursor: pointer\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></button>\n</div>\n<sc-if value=\"{{ picking }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"position: absolute; left: 0; top: 0; width: {{ L.w }}px; height: {{ L.h }}px; z-index: 20\">\n<dc-import name=\"TimePicker\" value=\"{{ pickValue }}\" mode=\"duration\" heading=\"Set time\" accent=\"#FFB703\" accent-ink=\"#0B1230\" dark=\"{{ true }}\" landscape=\"{{ L.land }}\" on-set=\"{{ applyTime }}\" on-cancel=\"{{ cancelPick }}\" hint-size=\"390px,844px\"></dc-import>\n</div>\n</sc-if>\n</div>"}, { Logic: (function () {
class Component extends DCLogic {
  componentDidMount() {
    this.last = Date.now();
    this.iv = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.iv);
  }
  componentDidUpdate(prev) {
    if (prev && (prev.minutes !== this.props.minutes || prev.left !== this.props.left)) {
      this.setState({ rem: null, total: null, setSec: null, running: false, picking: false });
    }
  }
  base() {
    const m = Math.round(Number(this.props.minutes ?? 20));
    return (m > 0 ? Math.min(60, m) : 20) * 60;
  }
  start() {
    const b = this.base();
    const pct = Number(this.props.left ?? 60);
    const p = isFinite(pct) ? Math.max(0, Math.min(100, pct)) : 60;
    return { rem: Math.round(b * p / 100), total: b };
  }
  rate() {
    return this.props.speed === 'Real time' ? 1 : 60;
  }
  cur() {
    const s = this.state || {};
    const st = this.start();
    const rem = s.rem ?? st.rem;
    return { rem: rem, total: Math.max(s.total ?? st.total, rem, 1), running: !!s.running };
  }
  tick() {
    const now = Date.now();
    const dt = Math.max(0, (now - (this.last || now)) / 1000);
    this.last = now;
    const c = this.cur();
    if (!c.running) return;
    const rem = Math.max(0, c.rem - dt * this.rate());
    this.setState({ rem: rem, total: c.total, running: rem > 0 });
  }
  dur() {
    const s = this.state || {};
    return s.setSec ?? this.base();
  }
  toggle() {
    const c = this.cur();
    this.last = Date.now();
    if (c.rem <= 0) {
      const b = this.dur();
      this.setState({ rem: b, total: b, running: true });
    } else {
      this.setState({ rem: c.rem, total: c.total, running: !c.running });
    }
  }
  openPicker() {
    const c = this.cur();
    this.setState({ rem: c.rem, total: c.total, running: false, picking: true, wasRunning: c.running });
  }
  applyTime(sec) {
    const v = Math.max(1, Math.min(86399, Math.round(Number(sec) || 0)));
    this.last = Date.now();
    this.setState({ rem: v, total: v, setSec: v, running: false, picking: false });
  }
  cancelPick() {
    const s = this.state || {};
    this.last = Date.now();
    this.setState({ picking: false, running: !!s.wasRunning });
  }
  bump(d) {
    const c = this.cur();
    const rem = Math.max(0, Math.min(3600, c.rem + d));
    const total = Math.max(rem, 60, Math.min(3600, c.total + d));
    this.setState({ rem: rem, total: total, running: c.running && rem > 0 });
  }
  reset() {
    const b = this.dur();
    this.setState({ rem: b, total: b, running: false });
  }
  fmt(sec) {
    const s = Math.max(0, Math.ceil(sec - 0.001));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const r = s % 60;
    return (h > 0 ? h + ':' + (m < 10 ? '0' : '') + m : String(m)) + ':' + (r < 10 ? '0' : '') + r;
  }
  step(total) {
    // Marker spacing: the smallest round step that leaves at most five
    // markers, in seconds for short trips and minutes or hours for long ones.
    const steps = [10, 15, 20, 30, 60, 120, 300, 600, 900, 1200, 1800, 3600, 7200, 10800];
    return steps.find((s) => total / s <= 6) || 21600;
  }
  tAt(f) {
    // Progress measured by distance along the path, so the rocket flies at an
    // even speed and the stations are evenly spaced, even round tight turns.
    this.lenAt(0);
    const tb = this._lt;
    const n = tb.length - 1;
    const target = Math.max(0, Math.min(1, f)) * tb[n];
    let lo = 0;
    let hi = n;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (tb[mid] < target) lo = mid;
      else hi = mid;
    }
    const seg = tb[hi] - tb[lo] || 1;
    return (lo + (target - tb[lo]) / seg) / n;
  }
  minLabel(m) {
    if (m < 60) return m + ' min';
    const h = Math.floor(m / 60);
    const r = m % 60;
    return r ? h + ' h ' + r + ' min' : h + ' h';
  }
  durLabel(v) {
    if (v < 60) return v + ' s';
    if (v % 60) return Math.floor(v / 60) + ':' + String(v % 60).padStart(2, '0');
    return this.minLabel(v / 60);
  }
  shortDur(v) {
    if (v < 60) return v + 's';
    if (v % 60) return Math.floor(v / 60) + ':' + String(v % 60).padStart(2, '0');
    return this.shortLabel(v / 60);
  }
  shortLabel(m) {
    if (m < 60) return String(m);
    const h = Math.floor(m / 60);
    const r = m % 60;
    return h + 'h' + (r ? (r < 10 ? '0' : '') + r : '');
  }
  P() {
    // Landscape: a wide C from the earth (bottom left) out to the right and
    // back to the moon (top left), round the planet in the middle.
    if (this.props.landscape) return [[158, 254], [440, 340], [470, 40], [250, 114]];
    return [[126, 516], [430, 556], [-20, 366], [229, 212]];
  }
  pt(t) {
    const P = this.P();
    const u = 1 - t;
    const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
    return [a * P[0][0] + b * P[1][0] + c * P[2][0] + d * P[3][0], a * P[0][1] + b * P[1][1] + c * P[2][1] + d * P[3][1]];
  }
  tan(t) {
    const P = this.P();
    const u = 1 - t;
    const a = 3 * u * u, b = 6 * u * t, c = 3 * t * t;
    return [
      a * (P[1][0] - P[0][0]) + b * (P[2][0] - P[1][0]) + c * (P[3][0] - P[2][0]),
      a * (P[1][1] - P[0][1]) + b * (P[2][1] - P[1][1]) + c * (P[3][1] - P[2][1])
    ];
  }
  lenAt(t) {
    const lk = !!this.props.landscape;
    if (!this._lt || this._ltLand !== lk) {
      const n = 120;
      const tb = [0];
      let prev = this.pt(0);
      let acc = 0;
      for (let i = 1; i <= n; i++) {
        const p = this.pt(i / n);
        acc += Math.hypot(p[0] - prev[0], p[1] - prev[1]);
        tb.push(acc);
        prev = p;
      }
      this._lt = tb;
      this._ltLand = lk;
    }
    const tb = this._lt;
    const n = tb.length - 1;
    const f = Math.max(0, Math.min(1, t)) * n;
    const i = Math.floor(f);
    if (i >= n) return tb[n];
    return tb[i] + (tb[i + 1] - tb[i]) * (f - i);
  }
  split(t) {
    const P = this.P();
    const L = (a, b) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
    const p01 = L(P[0], P[1]), p12 = L(P[1], P[2]), p23 = L(P[2], P[3]);
    const p012 = L(p01, p12), p123 = L(p12, p23);
    const p = L(p012, p123);
    const f = (q) => q[0].toFixed(1) + ' ' + q[1].toFixed(1);
    return {
      a: 'M' + f(P[0]) + 'C' + f(p01) + ' ' + f(p012) + ' ' + f(p),
      b: 'M' + f(p) + 'C' + f(p123) + ' ' + f(p23) + ' ' + f(P[3]),
      p: p
    };
  }
  lay() {
    const land = !!this.props.landscape;
    const v = { k: 1, x: 0, y: 0 };
    return {
      land: land,
      w: land ? 844 : 390,
      h: land ? 390 : 844,
      vb: land ? '0 0 844 390' : '0 0 390 844',
      pD: land ? 'none' : 'inline',
      lD: land ? 'inline' : 'none',
      gT: 'translate(' + v.x + ' ' + v.y + ') scale(' + v.k + ')',
      cT: 'translate(' + v.x + 'px, ' + v.y + 'px) scale(' + v.k + ')',
      mid: land ? 'translateY(-50%)' : 'none',
      moonT: land ? 'translate(-114 -76)' : 'translate(0 0)',
      earthT: land ? 'translate(32 -262)' : 'translate(0 0)',
      planetT: land ? 'translate(-90 -210)' : 'translate(0 0)',
      shoot: land ? 'rk-shoot-l 11s ease-in infinite' : 'rk-shoot 11s ease-in infinite',
      hL: land ? 476 : 20,
      hR: land ? 60 : 20,
      hT: land ? 20 : 52,
      pL: land ? 476 : 0,
      pR: land ? 60 : 0,
      rT: land ? 150 : 630,
      kT: land ? 290 : 728
    };
  }
  renderVals() {
    const c = this.cur();
    const t = this.tAt(1 - c.rem / c.total);
    const sp = this.split(t);
    const tg = this.tan(t);
    const ang = Math.atan2(tg[1], tg[0]) * 180 / Math.PI;
    const done = c.rem <= 0;
    const time = this.fmt(c.rem);
    const stations = [];
    const step = this.step(c.total);
    for (let k = 1; k * step < c.total; k++) {
      const tk = this.tAt(1 - (k * step) / c.total);
      const p = this.pt(tk);
      const d = this.tan(tk);
      const l = Math.hypot(d[0], d[1]) || 1;
      stations.push({
        x: p[0].toFixed(1),
        y: p[1].toFixed(1),
        lx: (-d[1] / l * 26).toFixed(1),
        ly: (d[0] / l * 26).toFixed(1),
        o: tk > t + 0.0001 ? 1 : 0.3,
        label: this.durLabel(k * step)
      });
    }
    return {
      L: this.lay(),
      pathDone: t <= 0 ? 'M-60 -60' : sp.a,
      pathLeft: t >= 1 ? 'M-60 -60' : sp.b,
      dashOff: (this.lenAt(t) % 13).toFixed(2),
      rocketX: sp.p[0].toFixed(1),
      rocketY: sp.p[1].toFixed(1),
      rocketAng: ang.toFixed(1),
      flameOpacity: c.running ? 1 : 0,
      doneOpacity: done ? 1 : 0,
      stations: stations,
      time: time,
      done: done,
      notDone: !done,
      running: c.running,
      showPlay: !c.running && !done,
      showReplay: done,
      toggleLabel: c.running ? 'Pause' : (done ? 'Start again' : 'Start'),
      ariaLabel: done ? 'Moon mission timer finished, the rocket has landed' : 'Moon mission timer, ' + time + ' left until touchdown',
      toggle: () => this.toggle(),
      setTime: () => this.openPicker(),
      applyTime: (v) => this.applyTime(v),
      cancelPick: () => this.cancelPick(),
      picking: !!(this.state && this.state.picking),
      pickValue: Math.max(1, Math.round(c.rem > 0 ? c.rem : c.total)),
      reset: () => this.reset()
    };
  }
}
return Component;
})() }),
  Object.assign({"id":"hearts","name":"Pixel Hearts","tagline":"Screen time, game style","relative":false,"sleep":false,"bars":["#170F31","#170F31"],"lbars":null,"ldir":null,"lsplit":null,"psplit":null,"back":"dark","defaults":{"minutes":30,"speed":"Demo (1 min = 1 s)","landscape":false},"template":"<div style=\"width: {{ L.w }}px; height: {{ L.h }}px; position: relative; overflow: hidden; background-color: #170F31; background-image: linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px); background-size: 12px 12px; font-family: 'Silkscreen', 'Courier New', monospace; color: #EFE6FF\">\n<svg width=\"{{ L.w }}\" height=\"{{ L.h }}\" viewBox=\"{{ L.vb }}\" shape-rendering=\"crispEdges\" aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; display: block\">\n<g display=\"{{ L.lD }}\">\n<g fill=\"#4DF0FF\" style=\"animation: ar-blink 1.6s steps(1) infinite\"><rect x=\"66\" y=\"52\" width=\"12\" height=\"4\"></rect><rect x=\"70\" y=\"48\" width=\"4\" height=\"12\"></rect><rect x=\"410\" y=\"334\" width=\"12\" height=\"4\"></rect><rect x=\"414\" y=\"330\" width=\"4\" height=\"12\"></rect></g>\n<g fill=\"#FFE14D\" style=\"animation: ar-blink 2.2s steps(1) -0.7s infinite\"><rect x=\"414\" y=\"44\" width=\"12\" height=\"4\"></rect><rect x=\"418\" y=\"40\" width=\"4\" height=\"12\"></rect><rect x=\"774\" y=\"336\" width=\"12\" height=\"4\"></rect><rect x=\"778\" y=\"332\" width=\"4\" height=\"12\"></rect></g>\n<g fill=\"#FF3B6B\" style=\"animation: ar-blink 1.9s steps(1) -1.1s infinite\"><rect x=\"56\" y=\"322\" width=\"12\" height=\"4\"></rect><rect x=\"60\" y=\"318\" width=\"4\" height=\"12\"></rect><rect x=\"606\" y=\"312\" width=\"12\" height=\"4\"></rect><rect x=\"610\" y=\"308\" width=\"4\" height=\"12\"></rect></g>\n</g>\n<g display=\"{{ L.pD }}\">\n<g fill=\"#4DF0FF\" style=\"animation: ar-blink 1.6s steps(1) infinite\"><rect x=\"38\" y=\"168\" width=\"12\" height=\"4\"></rect><rect x=\"42\" y=\"164\" width=\"4\" height=\"12\"></rect><rect x=\"354\" y=\"558\" width=\"12\" height=\"4\"></rect><rect x=\"358\" y=\"554\" width=\"4\" height=\"12\"></rect></g>\n<g fill=\"#FFE14D\" style=\"animation: ar-blink 2.2s steps(1) -0.7s infinite\"><rect x=\"346\" y=\"174\" width=\"12\" height=\"4\"></rect><rect x=\"350\" y=\"170\" width=\"4\" height=\"12\"></rect><rect x=\"312\" y=\"638\" width=\"12\" height=\"4\"></rect><rect x=\"316\" y=\"634\" width=\"4\" height=\"12\"></rect></g>\n<g fill=\"#FF3B6B\" style=\"animation: ar-blink 1.9s steps(1) -1.1s infinite\"><rect x=\"24\" y=\"590\" width=\"12\" height=\"4\"></rect><rect x=\"28\" y=\"586\" width=\"4\" height=\"12\"></rect></g>\n</g>\n</svg>\n<header style=\"position: absolute; left: {{ L.hL }}px; right: {{ L.hR }}px; top: {{ L.hT }}px; height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 12px\">\n<div style=\"display: flex; align-items: center; gap: 12px\">\n<svg width=\"36\" height=\"24\" viewBox=\"0 0 12 8\" shape-rendering=\"crispEdges\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M2 1h8v1h1v4h-1v1h-2v-1h-4v1h-2v-1h-1v-4h1z\" fill=\"#4DF0FF\"></path><path d=\"M3 3h1v1h1v1h-1v1h-1v-1h-1v-1h1z\" fill=\"#170F31\"></path><path d=\"M8 3h1v1h-1zM9 4h1v1h-1z\" fill=\"#170F31\"></path></svg>\n<h1 style=\"margin: 0; font-family: 'Silkscreen', 'Courier New', monospace; font-weight: 700; font-size: 21px; line-height: 1; color: #4DF0FF; letter-spacing: 0.02em\">Screen time</h1>\n</div>\n</header>\n<div style=\"position: absolute; left: 0; top: 0; width: 390px; height: 844px; pointer-events: none; transform-origin: 0 0; transform: {{ L.cT }}\">\n<sc-for list=\"{{ hearts }}\" as=\"h\" hint-placeholder-count=\"12\">\n<div style=\"position: absolute; left: {{ h.x }}px; top: {{ h.y }}px; width: 54px; height: 48px; animation: {{ h.anim }}\">\n<svg width=\"54\" height=\"48\" viewBox=\"0 0 9 8\" shape-rendering=\"crispEdges\" aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; display: block\">\n<path d=\"M2 1h2v1h-2zM5 1h2v1h-2zM1 2h7v2h-7zM2 4h5v1h-5zM3 5h3v1h-3zM4 6h1v1h-1z\" fill=\"#241845\"></path>\n<path d=\"M2 0h2v1h-2zM5 0h2v1h-2zM1 1h1v1h-1zM4 1h1v1h-1zM7 1h1v1h-1zM0 2h1v2h-1zM8 2h1v2h-1zM1 4h1v1h-1zM7 4h1v1h-1zM2 5h1v1h-1zM6 5h1v1h-1zM3 6h1v1h-1zM5 6h1v1h-1zM4 7h1v1h-1z\" fill=\"#8F7FD0\"></path>\n</svg>\n<div style=\"position: absolute; left: 0; bottom: 0; width: 54px; height: {{ h.h }}px; overflow: hidden\">\n<svg width=\"54\" height=\"48\" viewBox=\"0 0 9 8\" shape-rendering=\"crispEdges\" aria-hidden=\"true\" style=\"position: absolute; left: 0; bottom: 0; display: block\">\n<path d=\"M2 1h2v1h-2zM5 1h2v1h-2zM1 2h7v2h-7zM2 4h5v1h-5zM3 5h3v1h-3zM4 6h1v1h-1z\" fill=\"#FF3B6B\"></path>\n<path d=\"M7 2h1v2h-1zM6 4h1v1h-1zM5 5h1v1h-1z\" fill=\"#C2185B\"></path>\n<path d=\"M2 1h1v2h-1z\" fill=\"#FFFFFF\"></path>\n<path d=\"M2 0h2v1h-2zM5 0h2v1h-2zM1 1h1v1h-1zM4 1h1v1h-1zM7 1h1v1h-1zM0 2h1v2h-1zM8 2h1v2h-1zM1 4h1v1h-1zM7 4h1v1h-1zM2 5h1v1h-1zM6 5h1v1h-1zM3 6h1v1h-1zM5 6h1v1h-1zM4 7h1v1h-1z\" fill=\"#FFD6E2\"></path>\n</svg>\n</div>\n</div>\n</sc-for>\n<div role=\"img\" aria-label=\"{{ ariaLabel }}\" style=\"position: absolute; left: 95px; top: 300px; width: 200px; height: 140px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center\">\n<sc-if value=\"{{ notDone }}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 8px\">\n<div style=\"font-family: 'Silkscreen', 'Courier New', monospace; font-size: 13px; color: #A99BE6; letter-spacing: 0.12em\">Time left</div>\n<div style=\"font-family: 'Silkscreen', 'Courier New', monospace; font-weight: 700; font-size: {{ timeSize }}px; line-height: 1; color: #FFFFFF; text-shadow: 4px 4px 0 #FF3B6B; font-variant-numeric: tabular-nums\">{{ time }}</div>\n<div style=\"font-family: 'Silkscreen', 'Courier New', monospace; font-size: 12px; color: #FFE14D; letter-spacing: 0.04em\">{{ heartsLabel }}</div>\n</div>\n</sc-if>\n<sc-if value=\"{{ done }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 12px\">\n<div style=\"display: flex; flex-direction: column; align-items: center; font-family: 'Silkscreen', 'Courier New', monospace; font-weight: 700; font-size: 40px; line-height: 0.95; color: #FFFFFF; text-shadow: 4px 4px 0 #FF3B6B; animation: ar-blink 1s steps(1) infinite\">\n<span>Game</span>\n<span>over</span>\n</div>\n<div style=\"font-family: 'Silkscreen', 'Courier New', monospace; font-size: 13px; color: #FFE14D\">Break time!</div>\n</div>\n</sc-if>\n</div>\n</div>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.kT }}px; transform: {{ L.mid }}; display: flex; align-items: center; justify-content: center; gap: 16px\">\n<button type=\"button\" onClick=\"{{ setTime }}\" aria-label=\"Set the time\" style=\"width: 72px; height: 64px; padding: 0; border: 3px solid #EFE6FF; border-radius: 0; background: #2A1D55; color: #EFE6FF; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 5px 5px 0 #000000\"><svg width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M10 2h4M12 14l3-3\"></path><circle cx=\"12\" cy=\"14\" r=\"8\"></circle></svg></button>\n<button type=\"button\" onClick=\"{{ toggle }}\" aria-label=\"{{ toggleLabel }}\" style=\"width: 150px; height: 64px; padding: 0 14px; border: 3px solid #EFE6FF; border-radius: 0; background: #FFE14D; color: #170F31; display: flex; align-items: center; justify-content: center; font-family: 'Silkscreen', 'Courier New', monospace; font-size: 20px; font-weight: 700; cursor: pointer; box-shadow: 5px 5px 0 #000000\">\n<sc-if value=\"{{ showPlay }}\" hint-placeholder-val=\"{{ true }}\"><span style=\"display: flex; align-items: center; gap: 12px\"><svg width=\"12\" height=\"21\" viewBox=\"0 0 4 7\" shape-rendering=\"crispEdges\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M0 0h1v7h-1zM1 1h1v5h-1zM2 2h1v3h-1zM3 3h1v1h-1z\" fill=\"currentColor\"></path></svg><span>Start</span></span></sc-if>\n<sc-if value=\"{{ running }}\" hint-placeholder-val=\"{{ false }}\"><span style=\"display: flex; align-items: center; gap: 12px\"><svg width=\"15\" height=\"21\" viewBox=\"0 0 5 7\" shape-rendering=\"crispEdges\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M0 0h2v7h-2zM3 0h2v7h-2z\" fill=\"currentColor\"></path></svg><span>Pause</span></span></sc-if>\n<sc-if value=\"{{ showReplay }}\" hint-placeholder-val=\"{{ false }}\"><span style=\"display: flex; align-items: center; gap: 12px\"><svg width=\"12\" height=\"21\" viewBox=\"0 0 4 7\" shape-rendering=\"crispEdges\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M0 0h1v7h-1zM1 1h1v5h-1zM2 2h1v3h-1zM3 3h1v1h-1z\" fill=\"currentColor\"></path></svg><span>Again</span></span></sc-if>\n</button>\n<button type=\"button\" onClick=\"{{ reset }}\" aria-label=\"Reset timer\" style=\"width: 72px; height: 64px; padding: 0; border: 3px solid #EFE6FF; border-radius: 0; background: #2A1D55; color: #EFE6FF; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 5px 5px 0 #000000\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></button>\n</div>\n<div aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; width: {{ L.w }}px; height: {{ L.h }}px; pointer-events: none; background-image: repeating-linear-gradient(180deg, rgba(0, 0, 0, 0.16) 0px, rgba(0, 0, 0, 0.16) 1px, transparent 1px, transparent 3px)\"></div>\n<sc-if value=\"{{ picking }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"position: absolute; left: 0; top: 0; width: {{ L.w }}px; height: {{ L.h }}px; z-index: 20\">\n<dc-import name=\"TimePicker\" value=\"{{ pickValue }}\" mode=\"duration\" heading=\"Set time\" accent=\"#FFE14D\" accent-ink=\"#170F31\" dark=\"{{ true }}\" landscape=\"{{ L.land }}\" on-set=\"{{ applyTime }}\" on-cancel=\"{{ cancelPick }}\" hint-size=\"390px,844px\"></dc-import>\n</div>\n</sc-if>\n</div>"}, { Logic: (function () {
class Component extends DCLogic {
  componentDidMount() {
    this.last = Date.now();
    this.iv = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.iv);
  }
  componentDidUpdate(prev) {
    if (prev && prev.minutes !== this.props.minutes) {
      this.setState({ rem: null, total: null, setSec: null, running: false, picking: false });
    }
  }
  base() {
    const m = Math.round(Number(this.props.minutes ?? 30));
    return (m > 0 ? Math.min(60, m) : 30) * 60;
  }
  rate() {
    return this.props.speed === 'Real time' ? 1 : 60;
  }
  cur() {
    const s = this.state || {};
    const b = this.base();
    const rem = s.rem ?? b;
    return { rem: rem, total: Math.max(s.total ?? b, rem, 1), running: !!s.running };
  }
  tick() {
    const now = Date.now();
    const dt = Math.max(0, (now - (this.last || now)) / 1000);
    this.last = now;
    const c = this.cur();
    if (!c.running) return;
    const rem = Math.max(0, c.rem - dt * this.rate());
    this.setState({ rem: rem, total: c.total, running: rem > 0 });
  }
  dur() {
    const s = this.state || {};
    return s.setSec ?? this.base();
  }
  toggle() {
    const c = this.cur();
    this.last = Date.now();
    if (c.rem <= 0) {
      const b = this.dur();
      this.setState({ rem: b, total: b, running: true });
    } else {
      this.setState({ rem: c.rem, total: c.total, running: !c.running });
    }
  }
  openPicker() {
    const c = this.cur();
    this.setState({ rem: c.rem, total: c.total, running: false, picking: true, wasRunning: c.running });
  }
  applyTime(sec) {
    const v = Math.max(1, Math.min(86399, Math.round(Number(sec) || 0)));
    this.last = Date.now();
    this.setState({ rem: v, total: v, setSec: v, running: false, picking: false });
  }
  cancelPick() {
    const s = this.state || {};
    this.last = Date.now();
    this.setState({ picking: false, running: !!s.wasRunning });
  }
  bump(d) {
    const c = this.cur();
    const rem = Math.max(0, Math.min(3600, c.rem + d));
    const total = Math.max(rem, 60, Math.min(3600, c.total + d));
    this.setState({ rem: rem, total: total, running: c.running && rem > 0 });
  }
  reset() {
    const b = this.dur();
    this.setState({ rem: b, total: b, running: false });
  }
  fmt(sec) {
    const s = Math.max(0, Math.ceil(sec - 0.001));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const r = s % 60;
    return (h > 0 ? h + ':' + (m < 10 ? '0' : '') + m : String(m)) + ':' + (r < 10 ? '0' : '') + r;
  }
  lay() {
    const land = !!this.props.landscape;
    const v = land ? { k: 1, x: 41, y: -175 } : { k: 1, x: 0, y: 0 };
    return {
      land: land,
      w: land ? 844 : 390,
      h: land ? 390 : 844,
      vb: land ? '0 0 844 390' : '0 0 390 844',
      pD: land ? 'none' : 'inline',
      lD: land ? 'inline' : 'none',
      gT: 'translate(' + v.x + ' ' + v.y + ') scale(' + v.k + ')',
      cT: 'translate(' + v.x + 'px, ' + v.y + 'px) scale(' + v.k + ')',
      mid: land ? 'translateY(-50%)' : 'none',
      hL: land ? 440 : 20,
      hR: land ? 56 : 20,
      hT: land ? 20 : 52,
      pL: land ? 440 : 0,
      pR: land ? 56 : 0,
      kT: land ? 214 : 708
    };
  }
  scale(total) {
    // The picture's full size: the smallest of 1 minute, 12 minutes, 1 hour,
    // 2 hours and 12 hours that holds the time that was set. Each keeps whole
    // numbers on the labels; n() turns seconds into the labels' unit.
    const C = [60, 720, 3600, 7200, 43200].find((x) => total <= x) || 43200;
    const u = C === 60 ? 1 : C === 43200 ? 3600 : 60;
    return { C: C, n: (sec) => sec / u };
  }
  unitName(v, short) {
    if (v < 60) return short ? v + ' sec' : v === 1 ? 'second' : v + ' seconds';
    if (v < 3600) {
      const m = v / 60;
      return short ? m + ' min' : m === 1 ? 'minute' : m + ' minutes';
    }
    const h = v / 3600;
    return short ? (h === 1 ? '1 hour' : h + ' hours') : h === 1 ? 'hour' : h + ' hours';
  }
  renderVals() {
    const c = this.cur();
    const S = this.scale(c.total);
    const remMin = c.rem / S.C * 60;
    const cum = [0, 1, 4, 9, 16, 23, 27];
    let active = -1;
    for (let k = 0; k < 12; k++) {
      if (remMin - 5 * k > 0) active = k;
    }
    const hearts = [];
    for (let k = 0; k < 12; k++) {
      const f = Math.max(0, Math.min(1, (remMin - 5 * k) / 5));
      let rows = 0;
      if (f > 0) {
        rows = 6;
        const need = f * 27 - 1e-6;
        for (let j = 1; j <= 6; j++) {
          if (cum[j] >= need) { rows = j; break; }
        }
      }
      const a = (k + 0.5) * Math.PI / 6;
      hearts.push({
        x: (195 + 128 * Math.sin(a) - 27).toFixed(1),
        y: (370 - 128 * Math.cos(a) - 24).toFixed(1),
        h: rows > 0 ? (rows + 1) * 6 : 0,
        anim: c.running && k === active ? 'ar-beat 0.9s steps(1) infinite' : 'none'
      });
    }
    const n = Math.min(12, Math.max(0, Math.ceil(c.rem / (S.C / 12) - 1e-9)));
    const done = c.rem <= 0;
    const time = this.fmt(c.rem);
    return {
      L: this.lay(),
      hearts: hearts,
      heartsLabel: (n === 1 ? '1 heart' : n + ' hearts') + ' · ' + this.unitName(S.C / 12, true) + ' each',
      time: time,
      timeSize: time.length > 5 ? 34 : 48,
      done: done,
      notDone: !done,
      running: c.running,
      showPlay: !c.running && !done,
      showReplay: done,
      toggleLabel: c.running ? 'Pause' : (done ? 'Play again' : 'Start'),
      ariaLabel: done ? 'Screen time is over' : 'Screen time timer, ' + time + ' left, ' + n + ' hearts',
      toggle: () => this.toggle(),
      setTime: () => this.openPicker(),
      applyTime: (v) => this.applyTime(v),
      cancelPick: () => this.cancelPick(),
      picking: !!(this.state && this.state.picking),
      pickValue: Math.max(1, Math.round(c.rem > 0 ? c.rem : c.total)),
      reset: () => this.reset()
    };
  }
}
return Component;
})() }),
  Object.assign({"id":"sunset","name":"Sunset","tagline":"Wind down before bed","relative":true,"sleep":false,"bars":"sunset","lbars":null,"ldir":null,"lsplit":82,"psplit":62,"back":"pill","defaults":{"minutes":30,"left":45,"speed":"Demo (1 min = 1 s)","landscape":false},"template":"<div style=\"width: {{ L.w }}px; height: {{ L.h }}px; position: relative; overflow: hidden; background: #0D1233; font-family: 'Outfit', 'Avenir Next', system-ui, sans-serif; color: #FFFFFF\">\n<div style=\"position: absolute; left: 0; top: 0; width: {{ L.w }}px; height: {{ L.skyH }}px; background: linear-gradient(180deg, {{ skyTop }} 0%, {{ skyBot }} 92%)\"></div>\n<svg width=\"{{ L.w }}\" height=\"{{ L.h }}\" viewBox=\"{{ L.vb }}\" role=\"img\" aria-label=\"{{ ariaLabel }}\" style=\"position: absolute; left: 0; top: 0; display: block\">\n<g fill=\"#FFFFFF\" opacity=\"{{ starOp }}\" display=\"{{ L.pD }}\">\n<g style=\"animation: ss-tw 3.2s ease-in-out infinite\">\n<circle cx=\"30\" cy=\"90\" r=\"1.3\"></circle>\n<circle cx=\"88\" cy=\"140\" r=\"1\"></circle>\n<circle cx=\"140\" cy=\"70\" r=\"1.5\"></circle>\n<circle cx=\"200\" cy=\"120\" r=\"1.1\"></circle>\n<circle cx=\"262\" cy=\"80\" r=\"1.2\"></circle>\n<circle cx=\"350\" cy=\"140\" r=\"1.4\"></circle>\n<circle cx=\"60\" cy=\"230\" r=\"1.1\"></circle>\n<circle cx=\"170\" cy=\"200\" r=\"1\"></circle>\n<circle cx=\"240\" cy=\"250\" r=\"1.3\"></circle>\n<circle cx=\"330\" cy=\"220\" r=\"1\"></circle>\n</g>\n<g style=\"animation: ss-tw 4.4s ease-in-out -1.5s infinite\">\n<circle cx=\"18\" cy=\"170\" r=\"1\"></circle>\n<circle cx=\"110\" cy=\"96\" r=\"1.2\"></circle>\n<circle cx=\"180\" cy=\"60\" r=\"1\"></circle>\n<circle cx=\"236\" cy=\"170\" r=\"1.4\"></circle>\n<circle cx=\"300\" cy=\"60\" r=\"1.1\"></circle>\n<circle cx=\"372\" cy=\"96\" r=\"1\"></circle>\n<circle cx=\"96\" cy=\"300\" r=\"1.3\"></circle>\n<circle cx=\"210\" cy=\"300\" r=\"1\"></circle>\n<circle cx=\"280\" cy=\"330\" r=\"1.2\"></circle>\n</g>\n<g style=\"animation: ss-tw 5.6s ease-in-out -3s infinite\">\n<circle cx=\"46\" cy=\"60\" r=\"1\"></circle>\n<circle cx=\"150\" cy=\"250\" r=\"1.2\"></circle>\n<circle cx=\"320\" cy=\"280\" r=\"1.4\"></circle>\n<circle cx=\"370\" cy=\"250\" r=\"1\"></circle>\n<circle cx=\"130\" cy=\"350\" r=\"1\"></circle>\n<circle cx=\"250\" cy=\"380\" r=\"1.1\"></circle>\n<circle cx=\"40\" cy=\"360\" r=\"1.2\"></circle>\n<circle cx=\"350\" cy=\"340\" r=\"1\"></circle>\n</g>\n</g>\n<g fill=\"#FFFFFF\" opacity=\"{{ starOp }}\" display=\"{{ L.lD }}\">\n<g style=\"animation: ss-tw 3.2s ease-in-out infinite\">\n<circle cx=\"339\" cy=\"85\" r=\"1.3\"></circle>\n<circle cx=\"674\" cy=\"32\" r=\"1\"></circle>\n<circle cx=\"556\" cy=\"56\" r=\"1.2\"></circle>\n<circle cx=\"604\" cy=\"37\" r=\"1.4\"></circle>\n<circle cx=\"227\" cy=\"27\" r=\"1\"></circle>\n<circle cx=\"452\" cy=\"222\" r=\"1\"></circle>\n<circle cx=\"572\" cy=\"225\" r=\"1\"></circle>\n<circle cx=\"58\" cy=\"121\" r=\"1\"></circle>\n<circle cx=\"304\" cy=\"222\" r=\"1.1\"></circle>\n<circle cx=\"592\" cy=\"165\" r=\"1.4\"></circle>\n<circle cx=\"706\" cy=\"100\" r=\"1\"></circle>\n<circle cx=\"662\" cy=\"104\" r=\"1.2\"></circle>\n</g>\n<g style=\"animation: ss-tw 4.4s ease-in-out -1.5s infinite\">\n<circle cx=\"445\" cy=\"168\" r=\"1.3\"></circle>\n<circle cx=\"607\" cy=\"240\" r=\"1.2\"></circle>\n<circle cx=\"314\" cy=\"135\" r=\"1.6\"></circle>\n<circle cx=\"257\" cy=\"49\" r=\"1.4\"></circle>\n<circle cx=\"176\" cy=\"183\" r=\"1.1\"></circle>\n<circle cx=\"508\" cy=\"223\" r=\"1\"></circle>\n<circle cx=\"692\" cy=\"47\" r=\"1.6\"></circle>\n<circle cx=\"329\" cy=\"182\" r=\"1.5\"></circle>\n</g>\n<g style=\"animation: ss-tw 5.6s ease-in-out -3s infinite\">\n<circle cx=\"601\" cy=\"241\" r=\"1\"></circle>\n<circle cx=\"103\" cy=\"146\" r=\"1.3\"></circle>\n<circle cx=\"705\" cy=\"236\" r=\"1.2\"></circle>\n<circle cx=\"741\" cy=\"205\" r=\"1.5\"></circle>\n<circle cx=\"363\" cy=\"19\" r=\"1.3\"></circle>\n<circle cx=\"371\" cy=\"94\" r=\"1.4\"></circle>\n<circle cx=\"231\" cy=\"155\" r=\"1.1\"></circle>\n<circle cx=\"764\" cy=\"134\" r=\"1.3\"></circle>\n<circle cx=\"178\" cy=\"237\" r=\"1.3\"></circle>\n<circle cx=\"570\" cy=\"150\" r=\"1.1\"></circle>\n</g>\n</g>\n<path d=\"M310 96A24 24 0 0 0 310 144A30 30 0 0 1 310 96Z\" fill=\"#FFF2CF\" opacity=\"{{ moonOp }}\" transform=\"{{ L.moonT }}\"></path>\n<g opacity=\"{{ glowOp }}\">\n<circle cx=\"{{ sunX }}\" cy=\"{{ sunY }}\" r=\"112\" fill=\"{{ glowColor }}\" opacity=\"0.1\"></circle>\n<circle cx=\"{{ sunX }}\" cy=\"{{ sunY }}\" r=\"74\" fill=\"{{ glowColor }}\" opacity=\"0.22\"></circle>\n</g>\n<path d=\"{{ pathLeft }}\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.75\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"0 11\"></path>\n<circle cx=\"{{ sunX }}\" cy=\"{{ sunY }}\" r=\"44\" fill=\"{{ sunColor }}\"></circle>\n<g fill=\"{{ cloudColor }}\" opacity=\"0.8\" transform=\"{{ L.cloudT }}\">\n<g style=\"animation: ss-cloud 18s ease-in-out infinite alternate\">\n<rect x=\"30\" y=\"248\" width=\"130\" height=\"9\" rx=\"4.5\"></rect>\n<rect x=\"70\" y=\"262\" width=\"80\" height=\"7\" rx=\"3.5\"></rect>\n</g>\n<g style=\"animation: ss-cloud 22s ease-in-out -6s infinite alternate\">\n<rect x=\"236\" y=\"300\" width=\"120\" height=\"10\" rx=\"5\"></rect>\n<rect x=\"280\" y=\"314\" width=\"70\" height=\"6\" rx=\"3\"></rect>\n</g>\n</g>\n<g opacity=\"{{ birdOp }}\">\n<g style=\"animation: {{ L.birds }}\">\n<path d=\"M0 0Q5 -5 10 0Q15 -5 20 0\" fill=\"none\" stroke=\"#2B2D52\" stroke-opacity=\"0.65\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M28 12Q32 8 36 12Q40 8 44 12\" fill=\"none\" stroke=\"#2B2D52\" stroke-opacity=\"0.65\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</g>\n</g>\n<path d=\"M0 420L40 396L78 410L122 352L168 430L212 488L252 436L300 368L344 402L390 380L390 560L0 560Z\" fill=\"{{ backColor }}\" display=\"{{ L.pD }}\"></path>\n<path d=\"M0 226L48 206L100 232L152 182L208 236L262 214L300 262L332 286L366 252L420 206L476 230L532 196L590 232L646 208L702 238L760 204L812 226L844 214L844 330L0 330Z\" fill=\"{{ backColor }}\" display=\"{{ L.lD }}\"></path>\n<path d=\"M0 470L52 440L102 466L150 452L198 512L226 514L264 470L312 444L352 462L390 440L390 560L0 560Z\" fill=\"{{ frontColor }}\" display=\"{{ L.pD }}\"></path>\n<path d=\"M0 268L58 246L114 270L172 256L228 274L284 282L318 304L346 306L382 274L440 252L500 270L560 256L620 282L680 262L742 284L800 266L844 276L844 330L0 330Z\" fill=\"{{ frontColor }}\" display=\"{{ L.lD }}\"></path>\n<rect x=\"0\" y=\"{{ L.lakeY }}\" width=\"{{ L.w }}\" height=\"{{ L.lakeH }}\" fill=\"{{ lakeColor }}\"></rect>\n<g transform=\"translate({{ sunX }} {{ L.refDy }})\" opacity=\"{{ refOp }}\" fill=\"{{ sunColor }}\">\n<rect x=\"-32\" y=\"530\" width=\"64\" height=\"3\" rx=\"1.5\" style=\"animation: ss-shim 2.8s ease-in-out infinite\"></rect>\n<rect x=\"-23\" y=\"541\" width=\"46\" height=\"3\" rx=\"1.5\" style=\"animation: ss-shim 3.4s ease-in-out -1s infinite\"></rect>\n<rect x=\"-28\" y=\"552\" width=\"56\" height=\"3\" rx=\"1.5\" style=\"animation: ss-shim 2.6s ease-in-out -0.5s infinite\"></rect>\n<rect x=\"-17\" y=\"563\" width=\"34\" height=\"3\" rx=\"1.5\" style=\"animation: ss-shim 3.1s ease-in-out -1.6s infinite\"></rect>\n<rect x=\"-20\" y=\"574\" width=\"40\" height=\"3\" rx=\"1.5\" style=\"animation: ss-shim 2.9s ease-in-out -2.2s infinite\"></rect>\n<rect x=\"-10\" y=\"585\" width=\"20\" height=\"3\" rx=\"1.5\" style=\"animation: ss-shim 3.3s ease-in-out -0.8s infinite\"></rect>\n</g>\n<g fill=\"#FFFFFF\" opacity=\"0.1\" display=\"{{ L.lD }}\">\n<rect x=\"70\" y=\"344\" width=\"56\" height=\"2\" rx=\"1\" style=\"animation: ss-shim 4.2s ease-in-out infinite\"></rect>\n<rect x=\"560\" y=\"340\" width=\"44\" height=\"2\" rx=\"1\" style=\"animation: ss-shim 3.6s ease-in-out -1.2s infinite\"></rect>\n<rect x=\"440\" y=\"370\" width=\"70\" height=\"2\" rx=\"1\" style=\"animation: ss-shim 4.8s ease-in-out -2s infinite\"></rect>\n<rect x=\"170\" y=\"376\" width=\"48\" height=\"2\" rx=\"1\" style=\"animation: ss-shim 3.9s ease-in-out -0.6s infinite\"></rect>\n<rect x=\"700\" y=\"362\" width=\"52\" height=\"2\" rx=\"1\" style=\"animation: ss-shim 4.4s ease-in-out -1.6s infinite\"></rect>\n</g>\n<g fill=\"#FFFFFF\" opacity=\"0.1\" display=\"{{ L.pD }}\">\n<rect x=\"36\" y=\"616\" width=\"56\" height=\"2\" rx=\"1\" style=\"animation: ss-shim 4.2s ease-in-out infinite\"></rect>\n<rect x=\"292\" y=\"602\" width=\"44\" height=\"2\" rx=\"1\" style=\"animation: ss-shim 3.6s ease-in-out -1.2s infinite\"></rect>\n<rect x=\"250\" y=\"700\" width=\"70\" height=\"2\" rx=\"1\" style=\"animation: ss-shim 4.8s ease-in-out -2s infinite\"></rect>\n<rect x=\"60\" y=\"760\" width=\"48\" height=\"2\" rx=\"1\" style=\"animation: ss-shim 3.9s ease-in-out -0.6s infinite\"></rect>\n</g>\n</svg>\n<sc-for list=\"{{ marks }}\" as=\"m\" hint-placeholder-count=\"2\">\n<div style=\"position: absolute; left: {{ m.x }}px; top: {{ m.y }}px; width: 0; height: 0\">\n<div style=\"position: absolute; left: -4px; top: -4px; width: 8px; height: 8px; border-radius: 99px; background: #FFFFFF\"></div>\n<div style=\"position: absolute; left: 12px; top: -10px; padding: 2px 8px; border-radius: 99px; background: rgba(10, 14, 40, 0.55); font-size: 12px; font-weight: 600; line-height: 16px; color: #FFFFFF; white-space: nowrap\">{{ m.label }}</div>\n</div>\n</sc-for>\n<div aria-hidden=\"true\" style=\"position: absolute; left: 478px; top: 90px; width: 308px; height: 278px; border-radius: 28px; background: rgba(10, 14, 40, 0.4); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); display: {{ L.cardD }}\"></div>\n<header style=\"position: absolute; left: {{ L.hL }}px; right: {{ L.hR }}px; top: {{ L.hT }}px; height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 12px\">\n<h1 style=\"margin: 0; padding: 10px 18px; border-radius: 999px; background: rgba(10, 14, 40, 0.5); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); font-size: 18px; font-weight: 600; line-height: 1.2; color: #FFFFFF\">Wind down</h1>\n</header>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.rT }}px; transform: {{ L.mid }}; display: flex; flex-direction: column; align-items: center\">\n<sc-if value=\"{{ notDone }}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 8px\">\n<div style=\"font-size: 86px; font-weight: 200; line-height: 1; letter-spacing: -0.02em; font-variant-numeric: tabular-nums\">{{ time }}</div>\n<div style=\"font-size: 17px; font-weight: 400; color: rgba(255, 255, 255, 0.86)\">until lights out</div>\n</div>\n</sc-if>\n<sc-if value=\"{{ done }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 10px\">\n<div style=\"font-size: 66px; font-weight: 200; line-height: 1; letter-spacing: -0.01em\">Goodnight</div>\n<div style=\"font-size: 17px; font-weight: 400; color: rgba(255, 255, 255, 0.86)\">Lights out, sleep tight</div>\n</div>\n</sc-if>\n</div>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.kT }}px; transform: {{ L.mid }}; display: flex; align-items: center; justify-content: center; gap: 30px\">\n<button type=\"button\" onClick=\"{{ setTime }}\" aria-label=\"Set the time\" style=\"width: 62px; height: 62px; padding: 0; border: 1.5px solid rgba(255, 255, 255, 0.4); border-radius: 999px; background: rgba(255, 255, 255, 0.14); color: #FFFFFF; display: flex; align-items: center; justify-content: center; cursor: pointer\"><svg width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M10 2h4M12 14l3-3\"></path><circle cx=\"12\" cy=\"14\" r=\"8\"></circle></svg></button>\n<button type=\"button\" onClick=\"{{ toggle }}\" aria-label=\"{{ toggleLabel }}\" style=\"width: 88px; height: 88px; padding: 0; border: none; border-radius: 999px; background: #FFFFFF; color: #1D1A45; display: flex; align-items: center; justify-content: center; cursor: pointer\">\n<sc-if value=\"{{ showPlay }}\" hint-placeholder-val=\"{{ true }}\"><svg width=\"36\" height=\"36\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block; margin-left: 3px\"><path d=\"M8 5.14v13.72a1 1 0 0 0 1.52.85l10.79-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z\" fill=\"currentColor\"></path></svg></sc-if>\n<sc-if value=\"{{ running }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block\"><rect x=\"6\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect><rect x=\"13.5\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect></svg></sc-if>\n<sc-if value=\"{{ showReplay }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></sc-if>\n</button>\n<button type=\"button\" onClick=\"{{ reset }}\" aria-label=\"Reset timer\" style=\"width: 62px; height: 62px; padding: 0; border: 1.5px solid rgba(255, 255, 255, 0.4); border-radius: 999px; background: rgba(255, 255, 255, 0.14); color: #FFFFFF; display: flex; align-items: center; justify-content: center; cursor: pointer\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></button>\n</div>\n<sc-if value=\"{{ picking }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"position: absolute; left: 0; top: 0; width: {{ L.w }}px; height: {{ L.h }}px; z-index: 20\">\n<dc-import name=\"TimePicker\" value=\"{{ pickValue }}\" mode=\"duration\" heading=\"Set time\" accent=\"#3A3A8C\" accent-ink=\"#FFFFFF\" dark=\"{{ true }}\" landscape=\"{{ L.land }}\" on-set=\"{{ applyTime }}\" on-cancel=\"{{ cancelPick }}\" hint-size=\"390px,844px\"></dc-import>\n</div>\n</sc-if>\n</div>"}, { Logic: (function () {
class Component extends DCLogic {
  componentDidMount() {
    this.last = Date.now();
    this.iv = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.iv);
  }
  componentDidUpdate(prev) {
    if (prev && (prev.minutes !== this.props.minutes || prev.left !== this.props.left)) {
      this.setState({ rem: null, total: null, setSec: null, running: false, picking: false });
    }
  }
  base() {
    const m = Math.round(Number(this.props.minutes ?? 30));
    return (m > 0 ? Math.min(60, m) : 30) * 60;
  }
  start() {
    const b = this.base();
    const pct = Number(this.props.left ?? 45);
    const p = isFinite(pct) ? Math.max(0, Math.min(100, pct)) : 45;
    return { rem: Math.round(b * p / 100), total: b };
  }
  rate() {
    return this.props.speed === 'Real time' ? 1 : 60;
  }
  cur() {
    const s = this.state || {};
    const st = this.start();
    const rem = s.rem ?? st.rem;
    return { rem: rem, total: Math.max(s.total ?? st.total, rem, 1), running: !!s.running };
  }
  tick() {
    const now = Date.now();
    const dt = Math.max(0, (now - (this.last || now)) / 1000);
    this.last = now;
    const c = this.cur();
    if (!c.running) return;
    const rem = Math.max(0, c.rem - dt * this.rate());
    this.setState({ rem: rem, total: c.total, running: rem > 0 });
  }
  dur() {
    const s = this.state || {};
    return s.setSec ?? this.base();
  }
  toggle() {
    const c = this.cur();
    this.last = Date.now();
    if (c.rem <= 0) {
      const b = this.dur();
      this.setState({ rem: b, total: b, running: true });
    } else {
      this.setState({ rem: c.rem, total: c.total, running: !c.running });
    }
  }
  openPicker() {
    const c = this.cur();
    this.setState({ rem: c.rem, total: c.total, running: false, picking: true, wasRunning: c.running });
  }
  applyTime(sec) {
    const v = Math.max(1, Math.min(86399, Math.round(Number(sec) || 0)));
    this.last = Date.now();
    this.setState({ rem: v, total: v, setSec: v, running: false, picking: false });
  }
  cancelPick() {
    const s = this.state || {};
    this.last = Date.now();
    this.setState({ picking: false, running: !!s.wasRunning });
  }
  bump(d) {
    const c = this.cur();
    const rem = Math.max(0, Math.min(3600, c.rem + d));
    const total = Math.max(rem, 60, Math.min(3600, c.total + d));
    this.setState({ rem: rem, total: total, running: c.running && rem > 0 });
  }
  reset() {
    const b = this.dur();
    this.setState({ rem: b, total: b, running: false });
  }
  fmt(sec) {
    const s = Math.max(0, Math.ceil(sec - 0.001));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const r = s % 60;
    return (h > 0 ? h + ':' + (m < 10 ? '0' : '') + m : String(m)) + ':' + (r < 10 ? '0' : '') + r;
  }
  step(total) {
    // Marker spacing: the smallest round step that leaves at most five
    // markers, in seconds for short trips and minutes or hours for long ones.
    const steps = [10, 15, 20, 30, 60, 120, 300, 600, 900, 1200, 1800, 3600, 7200, 10800];
    return steps.find((s) => total / s <= 6) || 21600;
  }
  minLabel(m) {
    if (m < 60) return m + ' min';
    const h = Math.floor(m / 60);
    const r = m % 60;
    return r ? h + ' h ' + r + ' min' : h + ' h';
  }
  durLabel(v) {
    if (v < 60) return v + ' s';
    if (v % 60) return Math.floor(v / 60) + ':' + String(v % 60).padStart(2, '0');
    return this.minLabel(v / 60);
  }
  shortDur(v) {
    if (v < 60) return v + 's';
    if (v % 60) return Math.floor(v / 60) + ':' + String(v % 60).padStart(2, '0');
    return this.shortLabel(v / 60);
  }
  shortLabel(m) {
    if (m < 60) return String(m);
    const h = Math.floor(m / 60);
    const r = m % 60;
    return h + 'h' + (r ? (r < 10 ? '0' : '') + r : '');
  }
  hex(h) {
    return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  }
  mix(a, b, t) {
    const A = this.hex(a);
    const B = this.hex(b);
    return 'rgb(' + A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(', ') + ')';
  }
  pal(p, cols) {
    const at = [0, 0.55, 0.85, 1];
    for (let i = 0; i < 3; i++) {
      if (p <= at[i + 1]) {
        const t = (p - at[i]) / (at[i + 1] - at[i]);
        return this.mix(cols[i], cols[i + 1], Math.max(0, Math.min(1, t)));
      }
    }
    return this.mix(cols[3], cols[3], 0);
  }
  S() {
    // The sun's path: a quadratic curve from p0 through c to e, behind the hills.
    // Marks below cut are hidden by the mountains.
    if (this.props.landscape) return { p0: [120, 58], c: [318, 110], e: [334, 366], cut: 246 };
    return { p0: [128, 180], c: [205, 260], e: [212, 560], cut: 478 };
  }
  sunAt(p) {
    const S = this.S();
    const u = 1 - p;
    return [u * u * S.p0[0] + 2 * u * p * S.c[0] + p * p * S.e[0], u * u * S.p0[1] + 2 * u * p * S.c[1] + p * p * S.e[1]];
  }
  lay() {
    const land = !!this.props.landscape;
    const v = { k: 1, x: 0, y: 0 };
    return {
      land: land,
      w: land ? 844 : 390,
      h: land ? 390 : 844,
      vb: land ? '0 0 844 390' : '0 0 390 844',
      pD: land ? 'none' : 'inline',
      lD: land ? 'inline' : 'none',
      gT: 'translate(' + v.x + ' ' + v.y + ') scale(' + v.k + ')',
      cT: 'translate(' + v.x + 'px, ' + v.y + 'px) scale(' + v.k + ')',
      mid: land ? 'translateY(-50%)' : 'none',
      skyH: land ? 330 : 560,
      lakeY: land ? 318 : 520,
      lakeH: land ? 72 : 324,
      refDy: land ? -212 : 0,
      moonT: land ? 'translate(96 -54)' : 'translate(0 0)',
      cloudT: land ? 'translate(40 -104)' : 'translate(0 0)',
      birds: land ? 'ss-birds-l 46s linear -12s infinite' : 'ss-birds 40s linear -12s infinite',
      cardD: land ? 'block' : 'none',
      hL: land ? 478 : 20,
      hR: land ? 58 : 20,
      hT: land ? 20 : 52,
      pL: land ? 478 : 0,
      pR: land ? 58 : 0,
      rT: land ? 172 : 592,
      kT: land ? 302 : 726
    };
  }
  renderVals() {
    const c = this.cur();
    const p = Math.max(0, Math.min(1, 1 - c.rem / c.total));
    const cl = (v) => Math.max(0, Math.min(1, v));
    const s = this.sunAt(p);
    const S = this.S();
    const qx = S.c[0] + (S.e[0] - S.c[0]) * p;
    const qy = S.c[1] + (S.e[1] - S.c[1]) * p;
    const marks = [];
    const step = this.step(c.total);
    for (let k = 1; k * step < c.total; k++) {
      const pk = 1 - (k * step) / c.total;
      if (pk <= p + 0.0001) continue;
      const q = this.sunAt(pk);
      if (q[1] > S.cut) continue;
      marks.push({ x: q[0].toFixed(1), y: q[1].toFixed(1), label: this.durLabel(k * step) });
    }
    const done = c.rem <= 0;
    const time = this.fmt(c.rem);
    return {
      L: this.lay(),
      skyTop: this.pal(p, ['#5E9BE6', '#6A7FD0', '#3A3A8C', '#0D1233']),
      skyBot: this.pal(p, ['#CBE3F7', '#FFCF8A', '#FF8662', '#2A2660']),
      sunColor: this.pal(p, ['#FFF3C4', '#FFCC4D', '#FF6A45', '#FF5A3D']),
      glowColor: this.pal(p, ['#FFF8DE', '#FFD98A', '#FF8A6A', '#FF6A55']),
      backColor: this.pal(p, ['#93AEDC', '#A88FC6', '#8B5A93', '#2A2654']),
      frontColor: this.pal(p, ['#45649C', '#584C8C', '#3D2D69', '#161337']),
      lakeColor: this.pal(p, ['#2E4F86', '#2D3E76', '#22214F', '#0D0F2E']),
      cloudColor: this.pal(p, ['#FFFFFF', '#FFE3B5', '#FF9F8A', '#4A447E']),
      sunX: s[0].toFixed(1),
      sunY: s[1].toFixed(1),
      pathLeft: p >= 1 ? 'M-60 -60' : 'M' + s[0].toFixed(1) + ' ' + s[1].toFixed(1) + 'Q' + qx.toFixed(1) + ' ' + qy.toFixed(1) + ' ' + S.e[0] + ' ' + S.e[1],
      starOp: cl((p - 0.62) / 0.3).toFixed(3),
      moonOp: cl((p - 0.82) / 0.16).toFixed(3),
      birdOp: (1 - cl((p - 0.45) / 0.3)).toFixed(3),
      glowOp: (1 - 0.85 * cl((p - 0.9) / 0.1)).toFixed(3),
      refOp: (0.7 * cl((p - 0.25) / 0.35) * cl((1 - p) / 0.06)).toFixed(3),
      marks: marks,
      time: time,
      done: done,
      notDone: !done,
      running: c.running,
      showPlay: !c.running && !done,
      showReplay: done,
      toggleLabel: c.running ? 'Pause' : (done ? 'Start again' : 'Start'),
      ariaLabel: done ? 'Sunset timer finished, it is night' : 'Sunset timer, ' + time + ' until lights out',
      toggle: () => this.toggle(),
      setTime: () => this.openPicker(),
      applyTime: (v) => this.applyTime(v),
      cancelPick: () => this.cancelPick(),
      picking: !!(this.state && this.state.picking),
      pickValue: Math.max(1, Math.round(c.rem > 0 ? c.rem : c.total)),
      reset: () => this.reset()
    };
  }
}
return Component;
})() }),
  Object.assign({"id":"dandelion","name":"Dandelion","tagline":"One seed for every minute","relative":false,"sleep":false,"bars":["#F2EEE3","#F2EEE3"],"lbars":null,"ldir":null,"lsplit":null,"psplit":null,"back":"light","defaults":{"minutes":40,"speed":"Demo (1 min = 1 s)","landscape":false},"template":"<div style=\"width: {{ L.w }}px; height: {{ L.h }}px; position: relative; overflow: hidden; background-color: #F2EEE3; background-image: radial-gradient(rgba(35, 48, 42, 0.05) 0.8px, transparent 1px); background-size: 5px 5px; font-family: 'Instrument Sans', 'Helvetica Neue', system-ui, sans-serif; color: #23302A\">\n<div aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; width: 30px; height: 46px; animation: {{ L.fa }}\">\n<svg width=\"30\" height=\"46\" viewBox=\"0 0 30 46\" style=\"display: block; overflow: visible\"><path d=\"M15 46L15 12\" fill=\"none\" stroke=\"#23302A\" stroke-width=\"0.9\"></path><path d=\"M15 12L4.54 8.6M15 12L6.83 4.64M15 12L10.53 1.95M15 12L15 1M15 12L19.47 1.95M15 12L23.17 4.64M15 12L25.46 8.6\" fill=\"none\" stroke=\"#23302A\" stroke-width=\"0.75\" stroke-linecap=\"round\"></path><ellipse cx=\"15\" cy=\"40\" rx=\"1.4\" ry=\"4\" fill=\"#23302A\"></ellipse></svg>\n</div>\n<div aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; width: 30px; height: 46px; animation: {{ L.fb }}\">\n<svg width=\"30\" height=\"46\" viewBox=\"0 0 30 46\" style=\"display: block; overflow: visible\"><path d=\"M15 46L15 12\" fill=\"none\" stroke=\"#23302A\" stroke-width=\"0.9\"></path><path d=\"M15 12L4.54 8.6M15 12L6.83 4.64M15 12L10.53 1.95M15 12L15 1M15 12L19.47 1.95M15 12L23.17 4.64M15 12L25.46 8.6\" fill=\"none\" stroke=\"#23302A\" stroke-width=\"0.75\" stroke-linecap=\"round\"></path><ellipse cx=\"15\" cy=\"40\" rx=\"1.4\" ry=\"4\" fill=\"#23302A\"></ellipse></svg>\n</div>\n<div aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; width: 30px; height: 46px; animation: {{ L.fc }}\">\n<svg width=\"30\" height=\"46\" viewBox=\"0 0 30 46\" style=\"display: block; overflow: visible\"><path d=\"M15 46L15 12\" fill=\"none\" stroke=\"#23302A\" stroke-width=\"0.9\"></path><path d=\"M15 12L4.54 8.6M15 12L6.83 4.64M15 12L10.53 1.95M15 12L15 1M15 12L19.47 1.95M15 12L23.17 4.64M15 12L25.46 8.6\" fill=\"none\" stroke=\"#23302A\" stroke-width=\"0.75\" stroke-linecap=\"round\"></path><ellipse cx=\"15\" cy=\"40\" rx=\"1.4\" ry=\"4\" fill=\"#23302A\"></ellipse></svg>\n</div>\n<div style=\"position: absolute; left: 0; top: 0; width: 390px; height: 844px; pointer-events: none; transform-origin: 0 0; transform: {{ L.cT }}\">\n<div role=\"img\" aria-label=\"{{ ariaLabel }}\" style=\"position: absolute; left: 0; top: 0; width: 390px; height: 844px; transform-origin: 195px 600px; animation: dd-sway 7s ease-in-out infinite\">\n<svg width=\"390\" height=\"844\" viewBox=\"0 0 390 844\" aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; display: block\">\n<circle cx=\"195\" cy=\"290\" r=\"104\" fill=\"none\" stroke=\"#23302A\" stroke-opacity=\"0.22\" stroke-width=\"1\" stroke-dasharray=\"2 5\"></circle>\n<g font-family=\"'Instrument Serif', Georgia, serif\" font-style=\"italic\" font-size=\"15\" fill=\"#5A645D\" text-anchor=\"middle\" dominant-baseline=\"central\">\n<text x=\"195\" y=\"160\">{{ F.a }}</text>\n<text x=\"325\" y=\"290\">{{ F.b }}</text>\n<text x=\"213\" y=\"420\">{{ F.c }}</text>\n<text x=\"65\" y=\"290\">{{ F.d }}</text>\n</g>\n<path d=\"M195 296C198 390 188 490 192 600\" fill=\"none\" stroke=\"#23302A\" stroke-width=\"2.6\" stroke-linecap=\"round\"></path>\n<path d=\"M190 600C176 588 158 590 148 578L158 574C140 566 126 568 114 554L126 550C108 540 98 538 88 524C108 526 128 534 144 548L138 552C156 562 168 568 180 582L174 584C182 590 187 595 190 600Z\" fill=\"#DCE3CF\" stroke=\"#23302A\" stroke-width=\"1.3\" stroke-linejoin=\"round\"></path>\n<path d=\"M194 600C208 588 226 590 236 578L226 574C244 566 258 568 270 554L258 550C276 540 286 538 296 524C276 526 256 534 240 548L246 552C228 562 216 568 204 582L210 584C202 590 197 595 194 600Z\" fill=\"#DCE3CF\" stroke=\"#23302A\" stroke-width=\"1.3\" stroke-linejoin=\"round\"></path>\n<path d=\"M190 598C170 580 130 556 92 526M194 598C214 580 254 556 292 526\" fill=\"none\" stroke=\"#23302A\" stroke-width=\"0.9\" stroke-opacity=\"0.6\" stroke-linecap=\"round\"></path>\n<path d=\"M56 601L334 601\" fill=\"none\" stroke=\"#23302A\" stroke-width=\"1.2\" stroke-opacity=\"0.55\" stroke-linecap=\"round\"></path>\n<path d=\"M78 601l-4 -9M84 601l2 -11M118 601l-2 -7M276 601l3 -8M304 601l-3 -10M311 601l4 -8\" fill=\"none\" stroke=\"#23302A\" stroke-width=\"1.1\" stroke-opacity=\"0.55\" stroke-linecap=\"round\"></path>\n</svg>\n<sc-for list=\"{{ seeds }}\" as=\"s\" hint-placeholder-count=\"40\">\n<div style=\"position: absolute; left: 180px; top: {{ s.top }}px; width: 30px; height: {{ s.len }}px; transform-origin: 15px {{ s.len }}px; transform: {{ s.tf }}; opacity: {{ s.op }}; transition: transform 2.8s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 2.8s ease-in\">\n<svg width=\"30\" height=\"{{ s.len }}\" viewBox=\"0 0 30 {{ s.len }}\" aria-hidden=\"true\" style=\"display: block; overflow: visible\">\n<path d=\"{{ s.stem }}\" fill=\"none\" stroke=\"#23302A\" stroke-width=\"0.9\"></path>\n<path d=\"M15 12L4.54 8.6M15 12L6.83 4.64M15 12L10.53 1.95M15 12L15 1M15 12L19.47 1.95M15 12L23.17 4.64M15 12L25.46 8.6\" fill=\"none\" stroke=\"#23302A\" stroke-width=\"0.75\" stroke-linecap=\"round\"></path>\n<ellipse cx=\"15\" cy=\"{{ s.ach }}\" rx=\"1.5\" ry=\"4.5\" fill=\"#23302A\"></ellipse>\n</svg>\n</div>\n</sc-for>\n<div aria-hidden=\"true\" style=\"position: absolute; left: 186px; top: 281px; width: 18px; height: 18px; border-radius: 99px; background: #23302A; box-shadow: inset 0 -3px 0 #3B4A42\"></div>\n</div>\n<div aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; width: 390px; height: 844px; pointer-events: none; opacity: {{ windOp }}; transition: opacity 0.6s ease\">\n<svg width=\"130\" height=\"16\" viewBox=\"0 0 130 16\" style=\"position: absolute; left: 0; top: 232px; display: block; animation: dd-wind 6s linear infinite\"><path d=\"M2 9C22 3 42 15 62 9S102 5 128 10\" fill=\"none\" stroke=\"#23302A\" stroke-opacity=\"0.35\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></svg>\n<svg width=\"130\" height=\"16\" viewBox=\"0 0 130 16\" style=\"position: absolute; left: 0; top: 352px; display: block; animation: dd-wind 8s linear -3s infinite\"><path d=\"M2 9C22 3 42 15 62 9S102 5 128 10\" fill=\"none\" stroke=\"#23302A\" stroke-opacity=\"0.3\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></svg>\n</div>\n</div>\n<header style=\"position: absolute; left: {{ L.hL }}px; right: {{ L.hR }}px; top: {{ L.hT }}px; height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 12px\">\n<h1 style=\"margin: 0; font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-weight: 400; font-size: 32px; line-height: 1.1\">Reading time</h1>\n</header>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.rT }}px; transform: {{ L.mid }}; display: flex; flex-direction: column; align-items: center\">\n<sc-if value=\"{{ notDone }}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 6px\">\n<div style=\"font-family: 'Instrument Serif', Georgia, serif; font-size: 72px; font-weight: 400; line-height: 1; font-variant-numeric: tabular-nums\">{{ time }}</div>\n<div style=\"font-size: 14px; font-weight: 500; color: #4F5A52\">{{ seedsLabel }}</div>\n</div>\n</sc-if>\n<sc-if value=\"{{ done }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 8px\">\n<div style=\"font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: 58px; line-height: 1\">Make a wish</div>\n<div style=\"font-size: 14px; font-weight: 500; color: #4F5A52\">Every seed has flown</div>\n</div>\n</sc-if>\n</div>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.kT }}px; transform: {{ L.mid }}; display: flex; align-items: center; justify-content: center; gap: 32px\">\n<button type=\"button\" onClick=\"{{ setTime }}\" aria-label=\"Set the time\" style=\"width: 60px; height: 60px; padding: 0; border: 1.5px solid #23302A; border-radius: 999px; background: transparent; color: #23302A; display: flex; align-items: center; justify-content: center; cursor: pointer\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M10 2h4M12 14l3-3\"></path><circle cx=\"12\" cy=\"14\" r=\"8\"></circle></svg></button>\n<button type=\"button\" onClick=\"{{ toggle }}\" aria-label=\"{{ toggleLabel }}\" style=\"width: 80px; height: 80px; padding: 0; border: none; border-radius: 999px; background: #23302A; color: #F2EEE3; display: flex; align-items: center; justify-content: center; cursor: pointer\">\n<sc-if value=\"{{ showPlay }}\" hint-placeholder-val=\"{{ true }}\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block; margin-left: 3px\"><path d=\"M8 5.14v13.72a1 1 0 0 0 1.52.85l10.79-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z\" fill=\"currentColor\"></path></svg></sc-if>\n<sc-if value=\"{{ running }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block\"><rect x=\"6\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect><rect x=\"13.5\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect></svg></sc-if>\n<sc-if value=\"{{ showReplay }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></sc-if>\n</button>\n<button type=\"button\" onClick=\"{{ reset }}\" aria-label=\"Reset timer\" style=\"width: 60px; height: 60px; padding: 0; border: 1.5px solid #23302A; border-radius: 999px; background: transparent; color: #23302A; display: flex; align-items: center; justify-content: center; cursor: pointer\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></button>\n</div>\n<sc-if value=\"{{ picking }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"position: absolute; left: 0; top: 0; width: {{ L.w }}px; height: {{ L.h }}px; z-index: 20\">\n<dc-import name=\"TimePicker\" value=\"{{ pickValue }}\" mode=\"duration\" heading=\"Set time\" accent=\"#23302A\" accent-ink=\"#F2EEE3\" dark=\"{{ false }}\" landscape=\"{{ L.land }}\" on-set=\"{{ applyTime }}\" on-cancel=\"{{ cancelPick }}\" hint-size=\"390px,844px\"></dc-import>\n</div>\n</sc-if>\n</div>"}, { Logic: (function () {
class Component extends DCLogic {
  componentDidMount() {
    this.last = Date.now();
    this.iv = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.iv);
  }
  componentDidUpdate(prev) {
    if (prev && prev.minutes !== this.props.minutes) {
      this.setState({ rem: null, total: null, setSec: null, running: false, picking: false });
    }
  }
  base() {
    const m = Math.round(Number(this.props.minutes ?? 40));
    return (m > 0 ? Math.min(60, m) : 40) * 60;
  }
  rate() {
    return this.props.speed === 'Real time' ? 1 : 60;
  }
  cur() {
    const s = this.state || {};
    const b = this.base();
    const rem = s.rem ?? b;
    return { rem: rem, total: Math.max(s.total ?? b, rem, 1), running: !!s.running };
  }
  tick() {
    const now = Date.now();
    const dt = Math.max(0, (now - (this.last || now)) / 1000);
    this.last = now;
    const c = this.cur();
    if (!c.running) return;
    const rem = Math.max(0, c.rem - dt * this.rate());
    this.setState({ rem: rem, total: c.total, running: rem > 0 });
  }
  dur() {
    const s = this.state || {};
    return s.setSec ?? this.base();
  }
  toggle() {
    const c = this.cur();
    this.last = Date.now();
    if (c.rem <= 0) {
      const b = this.dur();
      this.setState({ rem: b, total: b, running: true });
    } else {
      this.setState({ rem: c.rem, total: c.total, running: !c.running });
    }
  }
  openPicker() {
    const c = this.cur();
    this.setState({ rem: c.rem, total: c.total, running: false, picking: true, wasRunning: c.running });
  }
  applyTime(sec) {
    const v = Math.max(1, Math.min(86399, Math.round(Number(sec) || 0)));
    this.last = Date.now();
    this.setState({ rem: v, total: v, setSec: v, running: false, picking: false });
  }
  cancelPick() {
    const s = this.state || {};
    this.last = Date.now();
    this.setState({ picking: false, running: !!s.wasRunning });
  }
  bump(d) {
    const c = this.cur();
    const rem = Math.max(0, Math.min(3600, c.rem + d));
    const total = Math.max(rem, 60, Math.min(3600, c.total + d));
    this.setState({ rem: rem, total: total, running: c.running && rem > 0 });
  }
  reset() {
    const b = this.dur();
    this.setState({ rem: b, total: b, running: false });
  }
  fmt(sec) {
    const s = Math.max(0, Math.ceil(sec - 0.001));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const r = s % 60;
    return (h > 0 ? h + ':' + (m < 10 ? '0' : '') + m : String(m)) + ':' + (r < 10 ? '0' : '') + r;
  }
  rnd(n) {
    const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  }
  seedData() {
    if (this._sd) return this._sd;
    const out = [];
    for (let k = 0; k < 60; k++) {
      const a = this.rnd(k * 3 + 1);
      const b = this.rnd(k * 3 + 2);
      const c = this.rnd(k * 3 + 3);
      out.push({
        ang: k * 6 + 3 + (a - 0.5) * 3.4,
        len: Math.round(74 + b * 32),
        dx: Math.round(120 + c * 160),
        dy: Math.round(-150 - a * 190),
        spin: Math.round(30 + b * 90),
        op: (0.72 + c * 0.28).toFixed(2)
      });
    }
    this._sd = out;
    return out;
  }
  lay() {
    const land = !!this.props.landscape;
    const v = land ? { k: 0.78, x: 110, y: -101 } : { k: 1, x: 0, y: 0 };
    return {
      land: land,
      w: land ? 844 : 390,
      h: land ? 390 : 844,
      vb: land ? '0 0 844 390' : '0 0 390 844',
      pD: land ? 'none' : 'inline',
      lD: land ? 'inline' : 'none',
      gT: 'translate(' + v.x + ' ' + v.y + ') scale(' + v.k + ')',
      cT: 'translate(' + v.x + 'px, ' + v.y + 'px) scale(' + v.k + ')',
      mid: land ? 'translateY(-50%)' : 'none',
      fa: land ? 'dd-float-al 26s linear -4s infinite' : 'dd-float-a 21s linear -4s infinite',
      fb: land ? 'dd-float-bl 32s linear -15s infinite' : 'dd-float-b 27s linear -15s infinite',
      fc: land ? 'dd-float-cl 38s linear -26s infinite' : 'dd-float-c 33s linear -26s infinite',
      hL: land ? 476 : 20,
      hR: land ? 60 : 20,
      hT: land ? 20 : 52,
      pL: land ? 476 : 0,
      pR: land ? 60 : 0,
      rT: land ? 154 : 618,
      kT: land ? 290 : 728
    };
  }
  scale(total) {
    // The picture's full size: the smallest of 1 minute, 12 minutes, 1 hour,
    // 2 hours and 12 hours that holds the time that was set. Each keeps whole
    // numbers on the labels; n() turns seconds into the labels' unit.
    const C = [60, 720, 3600, 7200, 43200].find((x) => total <= x) || 43200;
    const u = C === 60 ? 1 : C === 43200 ? 3600 : 60;
    return { C: C, n: (sec) => sec / u };
  }
  unitName(v, short) {
    if (v < 60) return short ? v + ' sec' : v === 1 ? 'second' : v + ' seconds';
    if (v < 3600) {
      const m = v / 60;
      return short ? m + ' min' : m === 1 ? 'minute' : m + ' minutes';
    }
    const h = v / 3600;
    return short ? (h === 1 ? '1 hour' : h + ' hours') : h === 1 ? 'hour' : h + ' hours';
  }
  renderVals() {
    const c = this.cur();
    const S = this.scale(c.total);
    const left = Math.max(0, Math.min(60, Math.ceil(c.rem / (S.C / 60) - 1e-9)));
    const qv = S.n(S.C / 4);
    const q = [4 * qv, qv, 2 * qv, 3 * qv];
    const seeds = this.seedData().map((s, k) => {
      const on = k < left;
      return {
        len: s.len,
        top: 290 - s.len,
        ach: s.len - 9,
        stem: 'M15 ' + s.len + 'L15 12',
        tf: on ? 'translate(0px, 0px) rotate(' + s.ang.toFixed(1) + 'deg)' : 'translate(' + s.dx + 'px, ' + s.dy + 'px) rotate(' + (s.ang + s.spin).toFixed(1) + 'deg)',
        op: on ? s.op : 0
      };
    });
    const done = c.rem <= 0;
    const time = this.fmt(c.rem);
    return {
      L: this.lay(),
      seeds: seeds,
      seedsLabel: (left === 1 ? '1 seed left' : left + ' seeds left') + ' · one for every ' + this.unitName(S.C / 60, false),
      F: { a: q[0], b: q[1], c: q[2], d: q[3] },
      windOp: c.running ? 1 : 0,
      time: time,
      done: done,
      notDone: !done,
      running: c.running,
      showPlay: !c.running && !done,
      showReplay: done,
      toggleLabel: c.running ? 'Pause' : (done ? 'Start again' : 'Start'),
      ariaLabel: done ? 'Dandelion timer finished, every seed has flown' : 'Dandelion timer, ' + time + ' left, ' + left + ' seeds',
      toggle: () => this.toggle(),
      setTime: () => this.openPicker(),
      applyTime: (v) => this.applyTime(v),
      cancelPick: () => this.cancelPick(),
      picking: !!(this.state && this.state.picking),
      pickValue: Math.max(1, Math.round(c.rem > 0 ? c.rem : c.total)),
      reset: () => this.reset()
    };
  }
}
return Component;
})() }),
  Object.assign({"id":"boba","name":"Boba","tagline":"Sip by sip","relative":true,"sleep":false,"bars":["#FFD6E0","#FFD6E0"],"lbars":null,"ldir":null,"lsplit":null,"psplit":null,"back":"light","defaults":{"minutes":30,"left":60,"flavor":"Milk tea","speed":"Demo (1 min = 1 s)","landscape":false},"template":"<div style=\"width: {{ L.w }}px; height: {{ L.h }}px; position: relative; overflow: hidden; background-color: #FFD6E0; background-image: radial-gradient(#FFC1D1 2.5px, transparent 3px); background-size: 26px 26px; font-family: 'Nunito', 'Arial Rounded MT Bold', system-ui, sans-serif; color: #5A2340\">\n<div style=\"position: absolute; left: 0; top: 0; width: 390px; height: 600px; pointer-events: none; transform-origin: 0 0; transform: {{ L.cT }}\">\n<svg width=\"390\" height=\"600\" viewBox=\"0 0 390 600\" role=\"img\" aria-label=\"{{ ariaLabel }}\" style=\"position: absolute; left: 0; top: 0; display: block\">\n<defs>\n<clipPath id=\"bb-cup-clip\"><path d=\"M101 216L289 216L270.6 534Q269 556 247 556L143 556Q121 556 119.4 534Z\"></path></clipPath>\n</defs>\n<ellipse cx=\"195\" cy=\"572\" rx=\"98\" ry=\"10\" fill=\"#E7A6B9\" opacity=\"0.6\"></ellipse>\n<path d=\"M95 210L295 210L276 538Q274 562 250 562L140 562Q116 562 114 538Z\" fill=\"#FFFFFF\" fill-opacity=\"0.55\"></path>\n<path d=\"M261.9 97.4L207.9 549.4L184.1 546.6L238.1 94.6Z\" fill=\"#5CC8B4\" stroke=\"#5A2340\" stroke-width=\"4\" stroke-linejoin=\"round\"></path>\n<path d=\"M246 112L198 528\" fill=\"none\" stroke=\"#A6EADC\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\"0.8\"></path>\n<g clip-path=\"url(#bb-cup-clip)\">\n<g style=\"transform: translateY({{ levelY }}px); transition: transform 0.35s linear\">\n<g style=\"animation: bb-wave 3.2s linear infinite\">\n<path d=\"M-200 0Q-175 -8 -150 0T-100 0T-50 0T0 0T50 0T100 0T150 0T200 0T250 0T300 0T350 0T400 0T450 0T500 0T550 0T600 0L600 420L-200 420Z\" fill=\"{{ teaLight }}\" opacity=\"0.96\"></path>\n<path d=\"M-200 0Q-175 -8 -150 0T-100 0T-50 0T0 0T50 0T100 0T150 0T200 0T250 0T300 0T350 0T400 0T450 0T500 0T550 0T600 0L600 420L-200 420Z\" transform=\"translate(-25 14)\" fill=\"{{ tea }}\" opacity=\"0.96\"></path>\n</g>\n</g>\n<g style=\"animation: bb-bob 2.6s ease-in-out infinite\">\n<circle cx=\"132\" cy=\"540\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"128\" cy=\"536\" r=\"3\" fill=\"#7A5A48\"></circle>\n<circle cx=\"156\" cy=\"540\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"152\" cy=\"536\" r=\"3\" fill=\"#7A5A48\"></circle>\n<circle cx=\"180\" cy=\"540\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"176\" cy=\"536\" r=\"3\" fill=\"#7A5A48\"></circle>\n<circle cx=\"204\" cy=\"540\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"200\" cy=\"536\" r=\"3\" fill=\"#7A5A48\"></circle>\n<circle cx=\"228\" cy=\"540\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"224\" cy=\"536\" r=\"3\" fill=\"#7A5A48\"></circle>\n<circle cx=\"252\" cy=\"540\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"248\" cy=\"536\" r=\"3\" fill=\"#7A5A48\"></circle>\n</g>\n<g style=\"animation: bb-bob 3.1s ease-in-out -1s infinite\">\n<circle cx=\"144\" cy=\"520\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"140\" cy=\"516\" r=\"3\" fill=\"#7A5A48\"></circle>\n<circle cx=\"168\" cy=\"520\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"164\" cy=\"516\" r=\"3\" fill=\"#7A5A48\"></circle>\n<circle cx=\"192\" cy=\"520\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"188\" cy=\"516\" r=\"3\" fill=\"#7A5A48\"></circle>\n<circle cx=\"216\" cy=\"520\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"212\" cy=\"516\" r=\"3\" fill=\"#7A5A48\"></circle>\n<circle cx=\"240\" cy=\"520\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"236\" cy=\"516\" r=\"3\" fill=\"#7A5A48\"></circle>\n</g>\n<g style=\"animation: bb-bob 2.8s ease-in-out -0.5s infinite\">\n<circle cx=\"158\" cy=\"500\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"154\" cy=\"496\" r=\"3\" fill=\"#7A5A48\"></circle>\n<circle cx=\"186\" cy=\"500\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"182\" cy=\"496\" r=\"3\" fill=\"#7A5A48\"></circle>\n<circle cx=\"214\" cy=\"500\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"210\" cy=\"496\" r=\"3\" fill=\"#7A5A48\"></circle>\n<circle cx=\"240\" cy=\"500\" r=\"11\" fill=\"#3A2318\"></circle><circle cx=\"236\" cy=\"496\" r=\"3\" fill=\"#7A5A48\"></circle>\n</g>\n</g>\n<path d=\"M114 236L130 520\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"7\" stroke-linecap=\"round\" opacity=\"0.45\"></path>\n<g opacity=\"{{ openOp }}\">\n<circle cx=\"172\" cy=\"330\" r=\"6.5\" fill=\"#5A2340\"></circle>\n<circle cx=\"218\" cy=\"330\" r=\"6.5\" fill=\"#5A2340\"></circle>\n<circle cx=\"170\" cy=\"327.5\" r=\"2\" fill=\"#FFFFFF\"></circle>\n<circle cx=\"216\" cy=\"327.5\" r=\"2\" fill=\"#FFFFFF\"></circle>\n</g>\n<g opacity=\"{{ happyOp }}\" fill=\"none\" stroke=\"#5A2340\" stroke-width=\"4\" stroke-linecap=\"round\">\n<path d=\"M164 333Q172 322 180 333\"></path>\n<path d=\"M210 333Q218 322 226 333\"></path>\n</g>\n<ellipse cx=\"155\" cy=\"346\" rx=\"11\" ry=\"6\" fill=\"#FF8FB1\" opacity=\"0.75\"></ellipse>\n<ellipse cx=\"235\" cy=\"346\" rx=\"11\" ry=\"6\" fill=\"#FF8FB1\" opacity=\"0.75\"></ellipse>\n<path d=\"M188 344Q195 351 202 344\" fill=\"none\" stroke=\"#5A2340\" stroke-width=\"3.5\" stroke-linecap=\"round\"></path>\n<path d=\"M95 210L295 210L276 538Q274 562 250 562L140 562Q116 562 114 538Z\" fill=\"none\" stroke=\"#5A2340\" stroke-width=\"5\" stroke-linejoin=\"round\"></path>\n<rect x=\"86\" y=\"198\" width=\"218\" height=\"20\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#5A2340\" stroke-width=\"5\"></rect>\n<path d=\"M261.9 97.4L248.9 206.4L225.1 203.6L238.1 94.6Z\" fill=\"#5CC8B4\" stroke=\"#5A2340\" stroke-width=\"4\" stroke-linejoin=\"round\"></path>\n<path d=\"M246 112L237 196\" fill=\"none\" stroke=\"#A6EADC\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\"0.8\"></path>\n<g opacity=\"{{ sipOp }}\">\n<circle cx=\"0\" cy=\"0\" r=\"7\" fill=\"#3A2318\" style=\"animation: bb-sip 2.4s ease-in infinite\"></circle>\n</g>\n</svg>\n<sc-for list=\"{{ ticks }}\" as=\"t\" hint-placeholder-count=\"3\">\n<div style=\"position: absolute; left: {{ t.x }}px; top: {{ t.y }}px; height: 16px; display: flex; align-items: center; gap: 5px\">\n<div style=\"width: 14px; height: 3px; border-radius: 2px; background: #5A2340\"></div>\n<div style=\"font-size: 12px; font-weight: 800; line-height: 16px; color: #5A2340\">{{ t.label }}</div>\n</div>\n</sc-for>\n</div>\n<header style=\"position: absolute; left: {{ L.hL }}px; right: {{ L.hR }}px; top: {{ L.hT }}px; height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 12px\">\n<h1 style=\"margin: 0; padding: 8px 18px; border-radius: 999px; background: #FFFFFF; border: 3px solid #5A2340; font-weight: 900; font-size: 18px; line-height: 1.2; color: #5A2340\">Study time</h1>\n</header>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.rT }}px; transform: {{ L.mid }}; display: flex; flex-direction: column; align-items: center\">\n<sc-if value=\"{{ notDone }}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 8px\">\n<div style=\"font-family: 'Mochiy Pop One', 'Nunito', system-ui, sans-serif; font-size: 54px; line-height: 1; font-variant-numeric: tabular-nums\">{{ time }}</div>\n<div style=\"font-size: 16px; font-weight: 800\">until the last sip</div>\n</div>\n</sc-if>\n<sc-if value=\"{{ done }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 10px\">\n<div style=\"font-family: 'Mochiy Pop One', 'Nunito', system-ui, sans-serif; font-size: 46px; line-height: 1\">Slurp!</div>\n<div style=\"font-size: 16px; font-weight: 800\">All done, every last sip</div>\n</div>\n</sc-if>\n</div>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.kT }}px; transform: {{ L.mid }}; display: flex; align-items: center; justify-content: center; gap: 30px\">\n<button type=\"button\" onClick=\"{{ setTime }}\" aria-label=\"Set the time\" style=\"width: 62px; height: 62px; padding: 0; border: 4px solid #5A2340; border-radius: 999px; background: #FFFFFF; color: #5A2340; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 0 #5A2340\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M10 2h4M12 14l3-3\"></path><circle cx=\"12\" cy=\"14\" r=\"8\"></circle></svg></button>\n<button type=\"button\" onClick=\"{{ toggle }}\" aria-label=\"{{ toggleLabel }}\" style=\"width: 88px; height: 88px; padding: 0; border: none; border-radius: 999px; background: #5A2340; color: #FFFFFF; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 5px 0 #3A1328\">\n<sc-if value=\"{{ showPlay }}\" hint-placeholder-val=\"{{ true }}\"><svg width=\"36\" height=\"36\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block; margin-left: 3px\"><path d=\"M8 5.14v13.72a1 1 0 0 0 1.52.85l10.79-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z\" fill=\"currentColor\"></path></svg></sc-if>\n<sc-if value=\"{{ running }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block\"><rect x=\"6\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect><rect x=\"13.5\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect></svg></sc-if>\n<sc-if value=\"{{ showReplay }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></sc-if>\n</button>\n<button type=\"button\" onClick=\"{{ reset }}\" aria-label=\"Reset timer\" style=\"width: 62px; height: 62px; padding: 0; border: 4px solid #5A2340; border-radius: 999px; background: #FFFFFF; color: #5A2340; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 0 #5A2340\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></button>\n</div>\n<sc-if value=\"{{ picking }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"position: absolute; left: 0; top: 0; width: {{ L.w }}px; height: {{ L.h }}px; z-index: 20\">\n<dc-import name=\"TimePicker\" value=\"{{ pickValue }}\" mode=\"duration\" heading=\"Set time\" accent=\"#5A2340\" accent-ink=\"#FFFFFF\" dark=\"{{ false }}\" landscape=\"{{ L.land }}\" on-set=\"{{ applyTime }}\" on-cancel=\"{{ cancelPick }}\" hint-size=\"390px,844px\"></dc-import>\n</div>\n</sc-if>\n</div>"}, { Logic: (function () {
class Component extends DCLogic {
  componentDidMount() {
    this.last = Date.now();
    this.iv = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.iv);
  }
  componentDidUpdate(prev) {
    if (prev && (prev.minutes !== this.props.minutes || prev.left !== this.props.left)) {
      this.setState({ rem: null, total: null, setSec: null, running: false, picking: false });
    }
  }
  base() {
    const m = Math.round(Number(this.props.minutes ?? 30));
    return (m > 0 ? Math.min(60, m) : 30) * 60;
  }
  start() {
    const b = this.base();
    const pct = Number(this.props.left ?? 60);
    const p = isFinite(pct) ? Math.max(0, Math.min(100, pct)) : 60;
    return { rem: Math.round(b * p / 100), total: b };
  }
  rate() {
    return this.props.speed === 'Real time' ? 1 : 60;
  }
  cur() {
    const s = this.state || {};
    const st = this.start();
    const rem = s.rem ?? st.rem;
    return { rem: rem, total: Math.max(s.total ?? st.total, rem, 1), running: !!s.running };
  }
  tick() {
    const now = Date.now();
    const dt = Math.max(0, (now - (this.last || now)) / 1000);
    this.last = now;
    const c = this.cur();
    if (!c.running) return;
    const rem = Math.max(0, c.rem - dt * this.rate());
    this.setState({ rem: rem, total: c.total, running: rem > 0 });
  }
  dur() {
    const s = this.state || {};
    return s.setSec ?? this.base();
  }
  toggle() {
    const c = this.cur();
    this.last = Date.now();
    if (c.rem <= 0) {
      const b = this.dur();
      this.setState({ rem: b, total: b, running: true });
    } else {
      this.setState({ rem: c.rem, total: c.total, running: !c.running });
    }
  }
  openPicker() {
    const c = this.cur();
    this.setState({ rem: c.rem, total: c.total, running: false, picking: true, wasRunning: c.running });
  }
  applyTime(sec) {
    const v = Math.max(1, Math.min(86399, Math.round(Number(sec) || 0)));
    this.last = Date.now();
    this.setState({ rem: v, total: v, setSec: v, running: false, picking: false });
  }
  cancelPick() {
    const s = this.state || {};
    this.last = Date.now();
    this.setState({ picking: false, running: !!s.wasRunning });
  }
  bump(d) {
    const c = this.cur();
    const rem = Math.max(0, Math.min(3600, c.rem + d));
    const total = Math.max(rem, 60, Math.min(3600, c.total + d));
    this.setState({ rem: rem, total: total, running: c.running && rem > 0 });
  }
  reset() {
    const b = this.dur();
    this.setState({ rem: b, total: b, running: false });
  }
  fmt(sec) {
    const s = Math.max(0, Math.ceil(sec - 0.001));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const r = s % 60;
    return (h > 0 ? h + ':' + (m < 10 ? '0' : '') + m : String(m)) + ':' + (r < 10 ? '0' : '') + r;
  }
  step(total) {
    // Marker spacing: the smallest round step that leaves at most five
    // markers, in seconds for short trips and minutes or hours for long ones.
    const steps = [10, 15, 20, 30, 60, 120, 300, 600, 900, 1200, 1800, 3600, 7200, 10800];
    return steps.find((s) => total / s <= 6) || 21600;
  }
  minLabel(m) {
    if (m < 60) return m + ' min';
    const h = Math.floor(m / 60);
    const r = m % 60;
    return r ? h + ' h ' + r + ' min' : h + ' h';
  }
  durLabel(v) {
    if (v < 60) return v + ' s';
    if (v % 60) return Math.floor(v / 60) + ':' + String(v % 60).padStart(2, '0');
    return this.minLabel(v / 60);
  }
  shortDur(v) {
    if (v < 60) return v + 's';
    if (v % 60) return Math.floor(v / 60) + ':' + String(v % 60).padStart(2, '0');
    return this.shortLabel(v / 60);
  }
  shortLabel(m) {
    if (m < 60) return String(m);
    const h = Math.floor(m / 60);
    const r = m % 60;
    return h + 'h' + (r ? (r < 10 ? '0' : '') + r : '');
  }
  flavor() {
    const f = this.props.flavor;
    if (f === 'Taro') return ['#B497DD', '#DCCBF2'];
    if (f === 'Matcha') return ['#93C46F', '#CBE6B0'];
    if (f === 'Strawberry') return ['#FF8FAD', '#FFD0DC'];
    return ['#D9A472', '#F2D3AE'];
  }
  lay() {
    const land = !!this.props.landscape;
    const v = land ? { k: 0.74, x: 118, y: -55 } : { k: 1, x: 0, y: 0 };
    return {
      land: land,
      w: land ? 844 : 390,
      h: land ? 390 : 844,
      vb: land ? '0 0 844 390' : '0 0 390 844',
      pD: land ? 'none' : 'inline',
      lD: land ? 'inline' : 'none',
      gT: 'translate(' + v.x + ' ' + v.y + ') scale(' + v.k + ')',
      cT: 'translate(' + v.x + 'px, ' + v.y + 'px) scale(' + v.k + ')',
      mid: land ? 'translateY(-50%)' : 'none',
      hL: land ? 476 : 20,
      hR: land ? 60 : 20,
      hT: land ? 20 : 52,
      pL: land ? 476 : 0,
      pR: land ? 60 : 0,
      rT: land ? 154 : 598,
      kT: land ? 290 : 712
    };
  }
  renderVals() {
    const c = this.cur();
    const frac = Math.max(0, Math.min(1, c.rem / c.total));
    const levelY = 568 - frac * 330;
    const ticks = [];
    const step = this.step(c.total);
    for (let k = 1; k * step < c.total; k++) {
      const y = 568 - (k * step / c.total) * 330;
      if (y < 246 || y > 548) continue;
      const x = 95 + 19 * (y - 210) / 328 + 11;
      ticks.push({ x: x.toFixed(1), y: (y - 8).toFixed(1), label: this.shortDur(k * step) });
    }
    const fl = this.flavor();
    const done = c.rem <= 0;
    const time = this.fmt(c.rem);
    return {
      L: this.lay(),
      levelY: levelY.toFixed(1),
      tea: fl[0],
      teaLight: fl[1],
      ticks: ticks,
      openOp: done ? 0 : 1,
      happyOp: done ? 1 : 0,
      sipOp: c.running ? 1 : 0,
      time: time,
      done: done,
      notDone: !done,
      running: c.running,
      showPlay: !c.running && !done,
      showReplay: done,
      toggleLabel: c.running ? 'Pause' : (done ? 'Start again' : 'Start'),
      ariaLabel: done ? 'Boba timer finished, the cup is empty' : 'Boba timer, ' + time + ' until the last sip',
      toggle: () => this.toggle(),
      setTime: () => this.openPicker(),
      applyTime: (v) => this.applyTime(v),
      cancelPick: () => this.cancelPick(),
      picking: !!(this.state && this.state.picking),
      pickValue: Math.max(1, Math.round(c.rem > 0 ? c.rem : c.total)),
      reset: () => this.reset()
    };
  }
}
return Component;
})() }),
  Object.assign({"id":"classic","name":"Classic Glow","tagline":"Drag the dial to set it","relative":false,"sleep":false,"bars":["#111215","#111215"],"lbars":null,"ldir":null,"lsplit":null,"psplit":null,"back":"dark","defaults":{"minutes":25,"accent":"#FF5A3C","speed":"Demo (1 min = 1 s)","landscape":false},"template":"<div style=\"width: {{ L.w }}px; height: {{ L.h }}px; position: relative; overflow: hidden; background: #111215; font-family: 'Inter', system-ui, sans-serif; color: #F2F2F4\">\n<header style=\"position: absolute; left: {{ L.hL }}px; right: {{ L.hR }}px; top: {{ L.hT }}px; height: 52px; display: flex; align-items: center; gap: 12px\">\n<h1 style=\"margin: 0; font-family: 'Space Grotesk', system-ui, sans-serif; font-size: 24px; font-weight: 600; line-height: 1.15; letter-spacing: -0.01em\">Piano practice</h1>\n</header>\n<svg width=\"340\" height=\"340\" viewBox=\"0 0 340 340\" role=\"img\" aria-label=\"{{ ariaLabel }}\" onPointerDown=\"{{ dragStart }}\" onPointerMove=\"{{ dragMove }}\" onPointerUp=\"{{ dragEnd }}\" onPointerCancel=\"{{ dragEnd }}\" style=\"position: absolute; left: {{ L.dX }}px; top: {{ L.dY }}px; display: block; touch-action: none; cursor: grab\">\n<circle cx=\"170\" cy=\"170\" r=\"168\" fill=\"#1A1B20\"></circle>\n<circle cx=\"170\" cy=\"170\" r=\"167\" fill=\"none\" stroke=\"{{ bezel }}\" stroke-width=\"2\" style=\"transition: stroke 0.6s ease\"></circle>\n<path d=\"M32.3 90.5A159 159 0 0 1 307.7 90.5\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.05\" stroke-width=\"8\" stroke-linecap=\"round\"></path>\n<circle cx=\"170\" cy=\"170\" r=\"150\" fill=\"#16171B\"></circle>\n<circle cx=\"170\" cy=\"170\" r=\"147\" fill=\"none\" stroke=\"#0B0C0E\" stroke-width=\"6\" stroke-opacity=\"0.7\"></circle>\n<path d=\"{{ ticksMinor }}\" fill=\"none\" stroke=\"#4A4D57\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path>\n<path d=\"{{ ticksMajor }}\" fill=\"none\" stroke=\"#C9CCD4\" stroke-width=\"2.6\" stroke-linecap=\"round\"></path>\n<g fill=\"#9EA1AA\" font-family=\"'Space Grotesk', system-ui, sans-serif\" font-size=\"15\" font-weight=\"500\" text-anchor=\"middle\" dominant-baseline=\"central\">\n<text x=\"170\" y=\"49\">{{ F.n0 }}</text>\n<text x=\"230.5\" y=\"65.2\">{{ F.n1 }}</text>\n<text x=\"274.8\" y=\"109.5\">{{ F.n2 }}</text>\n<text x=\"291\" y=\"170\">{{ F.n3 }}</text>\n<text x=\"274.8\" y=\"230.5\">{{ F.n4 }}</text>\n<text x=\"230.5\" y=\"274.8\">{{ F.n5 }}</text>\n<text x=\"170\" y=\"291\">{{ F.n6 }}</text>\n<text x=\"109.5\" y=\"274.8\">{{ F.n7 }}</text>\n<text x=\"65.2\" y=\"230.5\">{{ F.n8 }}</text>\n<text x=\"49\" y=\"170\">{{ F.n9 }}</text>\n<text x=\"65.2\" y=\"109.5\">{{ F.n10 }}</text>\n<text x=\"109.5\" y=\"65.2\">{{ F.n11 }}</text>\n</g>\n<circle cx=\"170\" cy=\"170\" r=\"104\" fill=\"#1E2025\"></circle>\n<path d=\"{{ wedge }}\" fill=\"{{ accent }}\" style=\"filter: drop-shadow(0 0 18px {{ glow }}); animation: {{ pulse }}\"></path>\n<path d=\"{{ hand }}\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.92\"></path>\n<circle cx=\"170\" cy=\"170\" r=\"24\" fill=\"#2A2C33\"></circle>\n<circle cx=\"170\" cy=\"170\" r=\"23.5\" fill=\"none\" stroke=\"#FFFFFF\" stroke-opacity=\"0.08\"></circle>\n<circle cx=\"170\" cy=\"170\" r=\"7\" fill=\"{{ accent }}\"></circle>\n</svg>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.hintT }}px; display: flex; justify-content: center; height: 18px\">\n<sc-if value=\"{{ showHint }}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"font-size: 13px; font-weight: 500; line-height: 18px; color: #8B8E98\">Drag the dial to set the time</div>\n</sc-if>\n</div>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.rT }}px; transform: {{ L.mid }}; display: flex; flex-direction: column; align-items: center\">\n<sc-if value=\"{{ notDone }}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 6px\">\n<div style=\"font-family: 'Space Grotesk', system-ui, sans-serif; font-size: 68px; font-weight: 300; line-height: 1; letter-spacing: -0.02em; font-variant-numeric: tabular-nums\">{{ time }}</div>\n<div style=\"font-size: 15px; font-weight: 500; color: #A3A6AF\">{{ endsAt }}</div>\n</div>\n</sc-if>\n<sc-if value=\"{{ done }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 8px\">\n<div style=\"font-family: 'Space Grotesk', system-ui, sans-serif; font-size: 54px; font-weight: 400; line-height: 1\">Time's up</div>\n<div style=\"font-size: 15px; font-weight: 500; color: #A3A6AF\">Nicely done.</div>\n</div>\n</sc-if>\n</div>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.kT }}px; transform: {{ L.mid }}; display: flex; align-items: center; justify-content: center; gap: 30px\">\n<button type=\"button\" onClick=\"{{ setTime }}\" aria-label=\"Set the time\" style=\"width: 60px; height: 60px; padding: 0; border: 1px solid #2C2E35; border-radius: 999px; background: #1C1D22; color: #D6D8DE; display: flex; align-items: center; justify-content: center; cursor: pointer\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M10 2h4M12 14l3-3\"></path><circle cx=\"12\" cy=\"14\" r=\"8\"></circle></svg></button>\n<button type=\"button\" onClick=\"{{ toggle }}\" aria-label=\"{{ toggleLabel }}\" style=\"width: 88px; height: 88px; padding: 0; border: none; border-radius: 999px; background: {{ accent }}; color: #111215; display: flex; align-items: center; justify-content: center; cursor: pointer\">\n<sc-if value=\"{{ showPlay }}\" hint-placeholder-val=\"{{ true }}\"><svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block; margin-left: 3px\"><path d=\"M8 5.14v13.72a1 1 0 0 0 1.52.85l10.79-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z\" fill=\"currentColor\"></path></svg></sc-if>\n<sc-if value=\"{{ running }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block\"><rect x=\"6\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect><rect x=\"13.5\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect></svg></sc-if>\n<sc-if value=\"{{ showReplay }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></sc-if>\n</button>\n<button type=\"button\" onClick=\"{{ reset }}\" aria-label=\"Reset timer\" style=\"width: 60px; height: 60px; padding: 0; border: 1px solid #2C2E35; border-radius: 999px; background: #1C1D22; color: #D6D8DE; display: flex; align-items: center; justify-content: center; cursor: pointer\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></button>\n</div>\n<sc-if value=\"{{ picking }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"position: absolute; left: 0; top: 0; width: {{ L.w }}px; height: {{ L.h }}px; z-index: 20\">\n<dc-import name=\"TimePicker\" value=\"{{ pickValue }}\" mode=\"duration\" heading=\"Set time\" accent=\"{{ accent }}\" accent-ink=\"#111215\" dark=\"{{ true }}\" landscape=\"{{ L.land }}\" on-set=\"{{ applyTime }}\" on-cancel=\"{{ cancelPick }}\" hint-size=\"390px,844px\"></dc-import>\n</div>\n</sc-if>\n</div>"}, { Logic: (function () {
class Component extends DCLogic {
  componentDidMount() {
    this.last = Date.now();
    this.iv = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.iv);
  }
  componentDidUpdate(prev) {
    if (prev && prev.minutes !== this.props.minutes) {
      this.setState({ rem: null, total: null, setSec: null, C: null, running: false, picking: false });
    }
  }
  base() {
    const m = Math.round(Number(this.props.minutes ?? 25));
    return (m > 0 ? Math.min(60, m) : 25) * 60;
  }
  rate() {
    return this.props.speed === 'Real time' ? 1 : 60;
  }
  cur() {
    const s = this.state || {};
    const b = this.base();
    const rem = s.rem ?? b;
    return { rem: rem, total: Math.max(s.total ?? b, rem, 1), running: !!s.running };
  }
  tick() {
    const now = Date.now();
    const dt = Math.max(0, (now - (this.last || now)) / 1000);
    this.last = now;
    const c = this.cur();
    if (!c.running) {
      if (now - (this.fu || 0) > 15000) {
        this.fu = now;
        this.forceUpdate();
      }
      return;
    }
    const rem = Math.max(0, c.rem - dt * this.rate());
    this.setState({ rem: rem, total: c.total, running: rem > 0 });
  }
  dur() {
    const s = this.state || {};
    return s.setSec ?? this.base();
  }
  openPicker() {
    const c = this.cur();
    this.setState({ rem: c.rem, total: c.total, running: false, picking: true, wasRunning: c.running });
  }
  applyTime(sec) {
    const v = Math.max(1, Math.min(86399, Math.round(Number(sec) || 0)));
    this.last = Date.now();
    this.setState({ rem: v, total: v, setSec: v, C: this.scale(v).C, running: false, picking: false });
  }
  cancelPick() {
    const s = this.state || {};
    this.last = Date.now();
    this.setState({ picking: false, running: !!s.wasRunning });
  }
  toggle() {
    const c = this.cur();
    this.last = Date.now();
    if (c.rem <= 0) {
      const b = this.dur();
      this.setState({ rem: b, total: b, running: true });
    } else {
      this.setState({ rem: c.rem, total: c.total, running: !c.running });
    }
  }
  bump(d) {
    const c = this.cur();
    const rem = Math.max(0, Math.min(3600, c.rem + d));
    const total = Math.max(rem, 60, Math.min(3600, c.total + d));
    this.setState({ rem: rem, total: total, running: c.running && rem > 0 });
  }
  reset() {
    const b = this.dur();
    this.setState({ rem: b, total: b, running: false });
  }
  setMin(m) {
    this.setState({ rem: m * 60, total: m * 60, running: false });
  }
  fromEvent(e) {
    const el = e.currentTarget;
    if (!el || !el.getBoundingClientRect) return;
    const r = el.getBoundingClientRect();
    const s = r.width / 340 || 1;
    const dx = e.clientX - (r.left + 170 * s);
    const dy = e.clientY - (r.top + 170 * s);
    if (Math.hypot(dx, dy) < 18 * s) return;
    let deg = Math.atan2(dx, -dy) * 180 / Math.PI;
    if (deg < 0) deg += 360;
    let m = Math.round(deg / 6) % 60;
    const tick = (this.dragC || this.dial()) / 60;
    let prev = this.dragPrev;
    if (prev == null) {
      // First touch: take the number touched, except right at the top of a
      // (nearly) full dial, where 0 means keep it full.
      const v = Math.round(this.cur().rem / tick);
      prev = v >= 55 && m <= 5 ? 60 : m;
    }
    if (prev >= 45 && m <= 15) m = 60;
    else if (prev <= 15 && m >= 45) m = 0;
    this.dragPrev = m;
    // Each of the 60 ticks is a sixtieth of the dial: a second, 12 seconds,
    // a minute or 12 minutes.
    this.setState({ rem: m * tick, total: Math.max(m * tick, tick), setSec: Math.max(m * tick, tick), running: false });
  }
  dragStart(e) {
    this.dragging = true;
    this.dragC = this.dial();
    this.setState({ C: this.dragC });
    this.dragPrev = null;
    try {
      if (e.currentTarget && e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}
    this.fromEvent(e);
  }
  dragMove(e) {
    if (this.dragging) this.fromEvent(e);
  }
  dragEnd() {
    this.dragC = null;
    this.dragging = false;
  }
  fmt(sec) {
    const s = Math.max(0, Math.ceil(sec - 0.001));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const r = s % 60;
    return (h > 0 ? h + ':' + (m < 10 ? '0' : '') + m : String(m)) + ':' + (r < 10 ? '0' : '') + r;
  }
  tickPaths() {
    if (this._tp) return this._tp;
    let minor = '';
    let major = '';
    for (let i = 0; i < 60; i++) {
      const a = i * Math.PI / 30;
      const sn = Math.sin(a);
      const cs = Math.cos(a);
      const r1 = i % 5 === 0 ? 132 : 139;
      const seg = 'M' + (170 + r1 * sn).toFixed(2) + ' ' + (170 - r1 * cs).toFixed(2) + 'L' + (170 + 146 * sn).toFixed(2) + ' ' + (170 - 146 * cs).toFixed(2);
      if (i % 5 === 0) major += seg; else minor += seg;
    }
    this._tp = { minor: minor, major: major };
    return this._tp;
  }
  wedge(frac) {
    if (frac <= 0) return 'M-60 -60';
    if (frac >= 0.9999) return 'M170 66A104 104 0 1 1 170 274A104 104 0 1 1 170 66Z';
    const a = frac * Math.PI * 2;
    const x = 170 + 104 * Math.sin(a);
    const y = 170 - 104 * Math.cos(a);
    return 'M170 170L170 66A104 104 0 ' + (frac > 0.5 ? 1 : 0) + ' 1 ' + x.toFixed(2) + ' ' + y.toFixed(2) + 'Z';
  }
  hand(frac) {
    const a = frac * Math.PI * 2;
    return 'M170 170L' + (170 + 112 * Math.sin(a)).toFixed(2) + ' ' + (170 - 112 * Math.cos(a)).toFixed(2);
  }
  lay() {
    const land = !!this.props.landscape;
    const v = { k: 1, x: 0, y: 0 };
    return {
      land: land,
      w: land ? 844 : 390,
      h: land ? 390 : 844,
      vb: land ? '0 0 844 390' : '0 0 390 844',
      pD: land ? 'none' : 'inline',
      lD: land ? 'inline' : 'none',
      gT: 'translate(' + v.x + ' ' + v.y + ') scale(' + v.k + ')',
      cT: 'translate(' + v.x + 'px, ' + v.y + 'px) scale(' + v.k + ')',
      mid: land ? 'translateY(-50%)' : 'none',
      dX: land ? 92 : 25,
      dY: land ? 25 : 120,
      hL: land ? 476 : 24,
      hR: land ? 60 : 24,
      hT: land ? 20 : 52,
      pL: land ? 476 : 0,
      pR: land ? 60 : 0,
      hintT: land ? 96 : 470,
      rT: land ? 178 : 500,
      kT: land ? 300 : 652
    };
  }
  dial() {
    // The dial keeps the scale it was set to, so a drag never jumps scale.
    const s = this.state || {};
    return s.C || this.scale(this.cur().total).C;
  }
  scale(total) {
    // The picture's full size: the smallest of 1 minute, 12 minutes, 1 hour,
    // 2 hours and 12 hours that holds the time that was set. Each keeps whole
    // numbers on the labels; n() turns seconds into the labels' unit.
    const C = [60, 720, 3600, 7200, 43200].find((x) => total <= x) || 43200;
    const u = C === 60 ? 1 : C === 43200 ? 3600 : 60;
    return { C: C, n: (sec) => sec / u };
  }
  unitName(v, short) {
    if (v < 60) return short ? v + ' sec' : v === 1 ? 'second' : v + ' seconds';
    if (v < 3600) {
      const m = v / 60;
      return short ? m + ' min' : m === 1 ? 'minute' : m + ' minutes';
    }
    const h = v / 3600;
    return short ? (h === 1 ? '1 hour' : h + ' hours') : h === 1 ? 'hour' : h + ' hours';
  }
  renderVals() {
    const c = this.cur();
    const C = this.dial();
    const S = this.scale(C);
    const frac = Math.max(0, Math.min(1, c.rem / C));
    const F = {};
    for (let k = 0; k < 12; k++) F['n' + k] = k * S.n(C / 12);
    const dialName = { 60: '1-minute dial', 720: '12-minute dial', 7200: '2-hour dial', 43200: '12-hour dial' }[C];
    const accent = this.props.accent ?? '#FF5A3C';
    const glow = /^#[0-9a-fA-F]{6}$/.test(accent) ? accent + '73' : accent;
    const done = c.rem <= 0;
    const time = this.fmt(c.rem);
    const end = new Date(Date.now() + (c.rem / this.rate()) * 1000);
    const endsAt = (dialName ? dialName + ' · ends at ' : 'Ends at ') + end.getHours() + ':' + String(end.getMinutes()).padStart(2, '0');
    const tp = this.tickPaths();
    const chips = [5, 10, 15, 25, 45, 60].map((m, i) => {
      const on = Math.round(c.total) === m * 60;
      return {
        label: String(m),
        x: 19 + i * 60,
        aria: 'Set ' + m + ' minutes',
        pressed: on,
        bg: on ? accent : '#1C1D22',
        fg: on ? '#111215' : '#D6D8DE',
        bd: on ? accent : '#2C2E35',
        pick: () => this.setMin(m)
      };
    });
    return {
      L: this.lay(),
      F: F,
      ticksMinor: tp.minor,
      ticksMajor: tp.major,
      wedge: this.wedge(frac),
      hand: this.hand(frac),
      accent: accent,
      glow: glow,
      pulse: c.running && c.rem < 60 ? 'cg-pulse 1s ease-in-out infinite' : 'none',
      bezel: done ? accent : '#2B2D34',
      chips: chips,
      time: time,
      endsAt: endsAt,
      showHint: !c.running && !done,
      done: done,
      notDone: !done,
      running: c.running,
      showPlay: !c.running && !done,
      showReplay: done,
      toggleLabel: c.running ? 'Pause' : (done ? 'Start again' : 'Start'),
      ariaLabel: done ? 'Timer finished' : 'Timer dial, ' + time + ' left. Drag to set the time',
      dragStart: (e) => this.dragStart(e),
      dragMove: (e) => this.dragMove(e),
      dragEnd: () => this.dragEnd(),
      toggle: () => this.toggle(),
      setTime: () => this.openPicker(),
      applyTime: (v) => this.applyTime(v),
      cancelPick: () => this.cancelPick(),
      picking: !!(this.state && this.state.picking),
      pickValue: Math.max(1, Math.round(c.rem > 0 ? c.rem : c.total)),
      reset: () => this.reset()
    };
  }
}
return Component;
})() }),
  Object.assign({"id":"sleep","name":"Sleep trainer","tagline":"Red, amber, green. Clock or nap minutes","relative":false,"sleep":true,"bars":"sleep","lbars":null,"ldir":null,"lsplit":null,"psplit":null,"back":"auto","defaults":{"wakeBy":"Clock time","preview":"Sleeping","speed":"Demo (fast-forward)","landscape":false},"template":"<div style=\"width: {{ L.w }}px; height: {{ L.h }}px; position: relative; overflow: hidden; background: {{ bg }}; transition: background-color 1.2s ease; font-family: 'Baloo 2', 'Arial Rounded MT Bold', system-ui, sans-serif; color: {{ ink }}\">\n<svg width=\"{{ L.w }}\" height=\"{{ L.h }}\" viewBox=\"{{ L.vb }}\" role=\"img\" aria-label=\"{{ ariaLabel }}\" style=\"position: absolute; left: 0; top: 0; display: block\">\n<g fill=\"#FFFFFF\" opacity=\"{{ skyOp }}\" style=\"transition: opacity 1.2s ease\" display=\"{{ L.pD }}\">\n<g style=\"animation: st-tw 3.4s ease-in-out infinite\">\n<circle cx=\"30\" cy=\"140\" r=\"1.4\"></circle>\n<circle cx=\"122\" cy=\"112\" r=\"1\"></circle>\n<circle cx=\"348\" cy=\"90\" r=\"1.3\"></circle>\n<circle cx=\"22\" cy=\"300\" r=\"1.1\"></circle>\n<circle cx=\"360\" cy=\"440\" r=\"1.3\"></circle>\n<circle cx=\"60\" cy=\"520\" r=\"1\"></circle>\n<circle cx=\"370\" cy=\"640\" r=\"1.2\"></circle>\n</g>\n<g style=\"animation: st-tw 4.6s ease-in-out -2s infinite\">\n<circle cx=\"62\" cy=\"96\" r=\"1.1\"></circle>\n<circle cx=\"292\" cy=\"112\" r=\"1.2\"></circle>\n<circle cx=\"372\" cy=\"150\" r=\"1\"></circle>\n<circle cx=\"370\" cy=\"318\" r=\"1.4\"></circle>\n<circle cx=\"34\" cy=\"420\" r=\"1.2\"></circle>\n<circle cx=\"336\" cy=\"530\" r=\"1\"></circle>\n<circle cx=\"24\" cy=\"620\" r=\"1.3\"></circle>\n</g>\n</g>\n<g fill=\"#FFFFFF\" opacity=\"{{ skyOp }}\" style=\"transition: opacity 1.2s ease\" display=\"{{ L.lD }}\">\n<g style=\"animation: st-tw 3.4s ease-in-out infinite\">\n<circle cx=\"339\" cy=\"85\" r=\"1.3\"></circle>\n<circle cx=\"674\" cy=\"32\" r=\"1\"></circle>\n<circle cx=\"556\" cy=\"56\" r=\"1.2\"></circle>\n<circle cx=\"604\" cy=\"37\" r=\"1.4\"></circle>\n<circle cx=\"227\" cy=\"27\" r=\"1\"></circle>\n<circle cx=\"452\" cy=\"222\" r=\"1\"></circle>\n<circle cx=\"572\" cy=\"225\" r=\"1\"></circle>\n<circle cx=\"236\" cy=\"330\" r=\"1.5\"></circle>\n<circle cx=\"598\" cy=\"307\" r=\"1.3\"></circle>\n<circle cx=\"58\" cy=\"121\" r=\"1\"></circle>\n<circle cx=\"304\" cy=\"222\" r=\"1.1\"></circle>\n<circle cx=\"592\" cy=\"165\" r=\"1.4\"></circle>\n</g>\n<g style=\"animation: st-tw 4.6s ease-in-out -2s infinite\">\n<circle cx=\"516\" cy=\"356\" r=\"1.4\"></circle>\n<circle cx=\"445\" cy=\"168\" r=\"1.3\"></circle>\n<circle cx=\"607\" cy=\"240\" r=\"1.2\"></circle>\n<circle cx=\"314\" cy=\"135\" r=\"1.6\"></circle>\n<circle cx=\"192\" cy=\"365\" r=\"1.6\"></circle>\n<circle cx=\"257\" cy=\"49\" r=\"1.4\"></circle>\n<circle cx=\"315\" cy=\"276\" r=\"1.3\"></circle>\n<circle cx=\"359\" cy=\"381\" r=\"1.3\"></circle>\n<circle cx=\"302\" cy=\"319\" r=\"1\"></circle>\n<circle cx=\"128\" cy=\"270\" r=\"1.3\"></circle>\n<circle cx=\"176\" cy=\"183\" r=\"1.1\"></circle>\n<circle cx=\"508\" cy=\"223\" r=\"1\"></circle>\n</g>\n</g>\n<g transform=\"{{ L.gT }}\">\n<g opacity=\"{{ raysOp }}\" style=\"transition: opacity 1.2s ease\">\n<g style=\"transform-box: fill-box; transform-origin: center; animation: st-spin 40s linear infinite\">\n<path d=\"{{ rays }}\" fill=\"#FFE98A\" opacity=\"0.7\"></path>\n</g>\n</g>\n<g style=\"animation: st-glow 4s ease-in-out infinite\">\n<circle cx=\"195\" cy=\"292\" r=\"150\" opacity=\"0.1\" style=\"fill: {{ orb }}; transition: fill 1s ease\"></circle>\n<circle cx=\"195\" cy=\"292\" r=\"126\" opacity=\"0.2\" style=\"fill: {{ orb }}; transition: fill 1s ease\"></circle>\n</g>\n<circle cx=\"195\" cy=\"292\" r=\"104\" style=\"fill: {{ orb }}; transition: fill 1s ease\"></circle>\n<path d=\"{{ dots }}\" fill=\"#2B1E47\" opacity=\"0.3\"></path>\n</g>\n<g transform=\"{{ L.bunnyT }}\">\n<g style=\"animation: {{ bunnyAnim }}\">\n<ellipse cx=\"0\" cy=\"36\" rx=\"108\" ry=\"34\" fill=\"#F2EAFF\" stroke=\"#2B1E47\" stroke-width=\"4\"></ellipse>\n<g style=\"transform-box: fill-box; transform-origin: 50% 100%; transform: rotate({{ earL }}deg); transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)\">\n<ellipse cx=\"-26\" cy=\"-80\" rx=\"17\" ry=\"44\" fill=\"#FFF6EC\" stroke=\"#2B1E47\" stroke-width=\"4\"></ellipse>\n<ellipse cx=\"-26\" cy=\"-76\" rx=\"8\" ry=\"30\" fill=\"#FFB3C6\"></ellipse>\n</g>\n<g style=\"transform-box: fill-box; transform-origin: 50% 100%; transform: rotate({{ earR }}deg); transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)\">\n<ellipse cx=\"26\" cy=\"-80\" rx=\"17\" ry=\"44\" fill=\"#FFF6EC\" stroke=\"#2B1E47\" stroke-width=\"4\"></ellipse>\n<ellipse cx=\"26\" cy=\"-76\" rx=\"8\" ry=\"30\" fill=\"#FFB3C6\"></ellipse>\n</g>\n<ellipse cx=\"0\" cy=\"0\" rx=\"64\" ry=\"56\" fill=\"#FFF6EC\" stroke=\"#2B1E47\" stroke-width=\"4\"></ellipse>\n<ellipse cx=\"-38\" cy=\"20\" rx=\"11\" ry=\"7\" fill=\"#FFB3C6\" opacity=\"0.85\"></ellipse>\n<ellipse cx=\"38\" cy=\"20\" rx=\"11\" ry=\"7\" fill=\"#FFB3C6\" opacity=\"0.85\"></ellipse>\n<g opacity=\"{{ closedOp }}\" fill=\"none\" stroke=\"#2B1E47\" stroke-width=\"4\" stroke-linecap=\"round\" style=\"transition: opacity 0.5s ease\">\n<path d=\"M-34 2Q-24 11 -14 2\"></path>\n<path d=\"M14 2Q24 11 34 2\"></path>\n<path d=\"M-8 27Q-4 32 0 27Q4 32 8 27\" stroke-width=\"3\"></path>\n</g>\n<g opacity=\"{{ openOp }}\" style=\"transition: opacity 0.5s ease\">\n<circle cx=\"-24\" cy=\"2\" r=\"8.5\" fill=\"#2B1E47\"></circle>\n<circle cx=\"24\" cy=\"2\" r=\"8.5\" fill=\"#2B1E47\"></circle>\n<circle cx=\"-26.5\" cy=\"-1\" r=\"3\" fill=\"#FFFFFF\"></circle>\n<circle cx=\"21.5\" cy=\"-1\" r=\"3\" fill=\"#FFFFFF\"></circle>\n<path d=\"M-11 26Q0 42 11 26Z\" fill=\"#E25C7A\" stroke=\"#2B1E47\" stroke-width=\"3\" stroke-linejoin=\"round\"></path>\n</g>\n<path d=\"M-6 14L6 14L0 21Z\" fill=\"#FF8FA8\" stroke=\"#FF8FA8\" stroke-width=\"3\" stroke-linejoin=\"round\"></path>\n<path d=\"M-132 70C-110 52 -80 50 -50 58C-20 66 20 66 50 58C80 50 110 52 132 70L132 120C132 142 114 158 92 158L-92 158C-114 158 -132 142 -132 120Z\" fill=\"#7E6BE6\" stroke=\"#2B1E47\" stroke-width=\"4\" stroke-linejoin=\"round\"></path>\n<path d=\"M-120 84C-90 72 -60 72 -40 78\" fill=\"none\" stroke=\"#A99BFF\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n<g fill=\"#B7ABFF\">\n<path d=\"M0 -6L1.8 -1.9L6.2 -1.9L2.7 0.8L4 5.2L0 2.6L-4 5.2L-2.7 0.8L-6.2 -1.9L-1.8 -1.9Z\" transform=\"translate(-96 112)\"></path>\n<path d=\"M0 -6L1.8 -1.9L6.2 -1.9L2.7 0.8L4 5.2L0 2.6L-4 5.2L-2.7 0.8L-6.2 -1.9L-1.8 -1.9Z\" transform=\"translate(-52 138)\"></path>\n<path d=\"M0 -6L1.8 -1.9L6.2 -1.9L2.7 0.8L4 5.2L0 2.6L-4 5.2L-2.7 0.8L-6.2 -1.9L-1.8 -1.9Z\" transform=\"translate(-8 104)\"></path>\n<path d=\"M0 -6L1.8 -1.9L6.2 -1.9L2.7 0.8L4 5.2L0 2.6L-4 5.2L-2.7 0.8L-6.2 -1.9L-1.8 -1.9Z\" transform=\"translate(38 134)\"></path>\n<path d=\"M0 -6L1.8 -1.9L6.2 -1.9L2.7 0.8L4 5.2L0 2.6L-4 5.2L-2.7 0.8L-6.2 -1.9L-1.8 -1.9Z\" transform=\"translate(84 106)\"></path>\n<path d=\"M0 -6L1.8 -1.9L6.2 -1.9L2.7 0.8L4 5.2L0 2.6L-4 5.2L-2.7 0.8L-6.2 -1.9L-1.8 -1.9Z\" transform=\"translate(110 140)\"></path>\n</g>\n<g style=\"transform: translate({{ pawLX }}px, {{ pawY }}px); transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)\">\n<circle cx=\"-44\" cy=\"64\" r=\"14\" fill=\"#FFF6EC\" stroke=\"#2B1E47\" stroke-width=\"4\"></circle>\n</g>\n<g style=\"transform: translate({{ pawRX }}px, {{ pawY }}px); transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)\">\n<circle cx=\"44\" cy=\"64\" r=\"14\" fill=\"#FFF6EC\" stroke=\"#2B1E47\" stroke-width=\"4\"></circle>\n</g>\n</g>\n<g opacity=\"{{ zzzOp }}\" fill=\"#CFC3FF\" font-weight=\"800\" style=\"transition: opacity 0.8s ease\">\n<text x=\"64\" y=\"-60\" font-size=\"24\" style=\"transform-box: fill-box; transform-origin: center; animation: st-z 3.6s ease-out infinite\">z</text>\n<text x=\"64\" y=\"-60\" font-size=\"19\" style=\"transform-box: fill-box; transform-origin: center; animation: st-z 3.6s ease-out -1.2s infinite\">z</text>\n<text x=\"64\" y=\"-60\" font-size=\"15\" style=\"transform-box: fill-box; transform-origin: center; animation: st-z 3.6s ease-out -2.4s infinite\">z</text>\n</g>\n</g>\n</svg>\n<div style=\"position: absolute; left: 0; top: 0; width: 390px; height: 844px; pointer-events: none; transform-origin: 0 0; transform: {{ L.cT }}\">\n<sc-for list=\"{{ stars }}\" as=\"s\" hint-placeholder-count=\"6\">\n<div style=\"position: absolute; left: {{ s.x }}px; top: {{ s.y }}px; width: 34px; height: 34px\">\n<svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; display: block; overflow: visible\">\n<path d=\"M12 2.6l2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.1l-5.7 3 1.1-6.3-4.6-4.5 6.4-.9z\" fill=\"none\" stroke=\"{{ s.ghost }}\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path>\n</svg>\n<svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; display: block; overflow: visible; opacity: {{ s.op }}; transform: scale({{ s.sc }}); transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1); filter: drop-shadow(0 0 7px rgba(255, 214, 102, 0.8))\">\n<path d=\"M12 2.6l2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.1l-5.7 3 1.1-6.3-4.6-4.5 6.4-.9z\" fill=\"#FFD666\" stroke=\"#FFD666\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path>\n</svg>\n</div>\n</sc-for>\n<div style=\"position: absolute; left: 95px; top: 192px; width: 200px; height: 200px; display: flex; align-items: center; justify-content: center\">\n<div style=\"font-size: {{ displaySize }}px; font-weight: 800; line-height: 1; color: #2B1E47; font-variant-numeric: tabular-nums; letter-spacing: -0.01em\">{{ display }}</div>\n</div>\n</div>\n<div style=\"position: absolute; left: {{ L.tL }}px; right: {{ L.tR }}px; top: {{ L.tT }}px; transform: {{ L.mid }}; display: flex; flex-direction: column; align-items: center; gap: 2px; text-align: center\">\n<div style=\"font-size: 28px; font-weight: 800; line-height: 1.15\">{{ title }}</div>\n<div style=\"font-size: 16px; font-weight: 600; line-height: 1.35; color: {{ sub }}\">{{ subtitle }}</div>\n</div>\n<div aria-hidden=\"true\" style=\"position: absolute; left: 0; top: 0; width: {{ L.w }}px; height: {{ L.h }}px; pointer-events: none; background: #000000; opacity: {{ dimOp }}; transition: opacity 0.5s ease\"></div>\n<header style=\"position: absolute; left: {{ L.hL }}px; right: {{ L.hR }}px; top: {{ L.hT }}px; height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 12px\">\n<div role=\"group\" aria-label=\"Wake up by\" style=\"display: flex; gap: 4px; padding: 3px; border-radius: 999px; background: {{ segBg }}\">\n<button type=\"button\" onClick=\"{{ useClock }}\" aria-pressed=\"{{ isClock }}\" style=\"height: 44px; padding: 0 14px; border: none; border-radius: 999px; background: {{ segClockBg }}; color: {{ segClockFg }}; display: flex; align-items: center; gap: 6px; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; white-space: nowrap\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M17 18a5 5 0 0 0-10 0\"></path><path d=\"M12 2v7M4.2 10.2l1.4 1.4M1 18h2M21 18h2M18.4 11.6l1.4-1.4M23 22H1M8 6l4-4 4 4\"></path></svg>\n<span>{{ wakeLabel }}</span>\n</button>\n<button type=\"button\" onClick=\"{{ useMinutes }}\" aria-pressed=\"{{ isMinutes }}\" style=\"height: 44px; padding: 0 14px; border: none; border-radius: 999px; background: {{ segNapBg }}; color: {{ segNapFg }}; display: flex; align-items: center; gap: 6px; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; white-space: nowrap\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M10 2h4M12 14l3-3\"></path><circle cx=\"12\" cy=\"14\" r=\"8\"></circle></svg>\n<span>{{ napLabel }}</span>\n</button>\n</div>\n</header>\n<div style=\"position: absolute; left: {{ L.pL }}px; right: {{ L.pR }}px; top: {{ L.kT }}px; transform: {{ L.mid }}; display: flex; align-items: center; justify-content: center; gap: 30px\">\n<button type=\"button\" onClick=\"{{ setTime }}\" aria-label=\"{{ setAria }}\" style=\"width: 58px; height: 58px; padding: 0; border: none; border-radius: 999px; background: {{ segBg }}; color: {{ ink }}; display: flex; align-items: center; justify-content: center; cursor: pointer\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M10 2h4M12 14l3-3\"></path><circle cx=\"12\" cy=\"14\" r=\"8\"></circle></svg></button>\n<button type=\"button\" onClick=\"{{ toggle }}\" aria-label=\"{{ toggleLabel }}\" style=\"width: 72px; height: 72px; padding: 0; border: none; border-radius: 999px; background: {{ orb }}; color: #2B1E47; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background-color 1s ease\">\n<sc-if value=\"{{ showPlay }}\" hint-placeholder-val=\"{{ true }}\"><svg width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block; margin-left: 3px\"><path d=\"M8 5.14v13.72a1 1 0 0 0 1.52.85l10.79-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z\" fill=\"currentColor\"></path></svg></sc-if>\n<sc-if value=\"{{ running }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"display: block\"><rect x=\"6\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect><rect x=\"13.5\" y=\"4.5\" width=\"4.5\" height=\"15\" rx=\"1.4\" fill=\"currentColor\"></rect></svg></sc-if>\n<sc-if value=\"{{ showReplay }}\" hint-placeholder-val=\"{{ false }}\"><svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path><path d=\"M3 3v5h5\"></path></svg></sc-if>\n</button>\n<button type=\"button\" onClick=\"{{ cycleDim }}\" aria-label=\"{{ dimLabel }}\" style=\"width: 58px; height: 58px; padding: 0; border: none; border-radius: 999px; background: {{ segBg }}; color: {{ ink }}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; cursor: pointer\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"display: block\"><path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\"></path></svg>\n<span aria-hidden=\"true\" style=\"display: flex; gap: 3px\">\n<span style=\"width: 4px; height: 4px; border-radius: 99px; background: currentColor; opacity: {{ d1 }}\"></span>\n<span style=\"width: 4px; height: 4px; border-radius: 99px; background: currentColor; opacity: {{ d2 }}\"></span>\n<span style=\"width: 4px; height: 4px; border-radius: 99px; background: currentColor; opacity: {{ d3 }}\"></span>\n</span>\n</button>\n</div>\n<sc-if value=\"{{ picking }}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"position: absolute; left: 0; top: 0; width: {{ L.w }}px; height: {{ L.h }}px; z-index: 20\">\n<dc-import name=\"TimePicker\" value=\"{{ pickValue }}\" mode=\"{{ pickMode }}\" heading=\"{{ pickHeading }}\" accent=\"{{ orb }}\" accent-ink=\"#2B1E47\" dark=\"{{ pickDark }}\" landscape=\"{{ L.land }}\" on-set=\"{{ applyTime }}\" on-cancel=\"{{ cancelPick }}\" hint-size=\"390px,844px\"></dc-import>\n</div>\n</sc-if>\n</div>"}, { Logic: (function () {
class Component extends DCLogic {
  defaults() {
    return { wakeBy: 'Clock time', preview: 'Sleeping' };
  }
  componentDidMount() {
    this.last = Date.now();
    this.iv = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.iv);
  }
  componentDidUpdate(prev) {
    if (prev && (prev.preview !== this.props.preview || prev.wakeBy !== this.props.wakeBy || prev.speed !== this.props.speed)) {
      this.setState({ mode: null, m: null, running: false, demo: false, demoEnd: null, picking: false });
    }
  }
  realTime() {
    return this.props.speed === 'Real time';
  }
  mode() {
    const s = this.state || {};
    return s.mode ?? ((this.props.wakeBy ?? this.defaults().wakeBy) === 'Minutes' ? 'minutes' : 'clock');
  }
  wakeAt() {
    const s = this.state || {};
    return s.wake ?? 420;
  }
  napLen() {
    const s = this.state || {};
    return (s.napSec ?? 2700) / 60;
  }
  windowLen(mode) {
    return mode === 'clock' ? 30 : Math.min(30, this.napLen() / 3);
  }
  startM(mode) {
    const p = this.props.preview ?? this.defaults().preview;
    if (p === 'Wake-up time') return 0;
    if (p === 'Almost time') return mode === 'clock' ? 15 : this.windowLen(mode) / 2;
    return mode === 'clock' ? 240 : this.napLen();
  }
  live() {
    const s = this.state || {};
    return this.realTime() && this.mode() === 'clock' && !s.demo;
  }
  liveM() {
    const d = new Date();
    const now = d.getHours() * 60 + d.getMinutes() + d.getSeconds() / 60;
    const W = this.wakeAt();
    const B = 19 * 60 + 30;
    const inNight = now >= B || now < W;
    return inNight ? (((W - now) % 1440) + 1440) % 1440 : 0;
  }
  curM() {
    const s = this.state || {};
    if (this.live()) return this.liveM();
    return s.m ?? this.startM(this.mode());
  }
  tick() {
    const now = Date.now();
    const dt = Math.max(0, (now - (this.last || now)) / 1000);
    this.last = now;
    const s = this.state || {};
    if (this.live()) {
      if (now - (this.fu || 0) > 1000) {
        this.fu = now;
        this.forceUpdate();
      }
      return;
    }
    if (s.demo && !s.running && s.demoEnd && now - s.demoEnd > 5000) {
      this.setState({ demo: false, demoEnd: null });
      return;
    }
    if (!s.running) return;
    const mode = this.mode();
    const A = this.windowLen(mode);
    const m0 = this.curM();
    const fast = !this.realTime() || s.demo;
    const rate = fast ? (m0 > A + 0.5 ? 20 : 1) : 1 / 60;
    let m = m0 - dt * rate;
    if (m0 > A && m < A) m = A;
    m = Math.max(0, m);
    const patch = { m: m, running: m > 0 };
    if (m <= 0 && s.demo) patch.demoEnd = now;
    this.setState(patch);
  }
  toggle() {
    this.last = Date.now();
    const s = this.state || {};
    const mode = this.mode();
    if (this.live()) {
      this.setState({ demo: true, m: 240, running: true, demoEnd: null });
      return;
    }
    const m = this.curM();
    if (m <= 0) {
      this.setState({ m: mode === 'clock' ? 240 : this.napLen(), running: true, demoEnd: null });
      return;
    }
    this.setState({ m: m, running: !s.running });
  }
  setMode(mode) {
    this.setState({ mode: mode, m: this.startM(mode), running: false, demo: false, demoEnd: null });
  }
  bump(sign) {
    const s = this.state || {};
    if (this.mode() === 'clock') {
      const W = Math.max(300, Math.min(600, this.wakeAt() + 15 * sign));
      const d = W - this.wakeAt();
      const patch = { wake: W };
      if (!this.live()) patch.m = Math.max(0, this.curM() + d);
      this.setState(patch);
    } else {
      const N = Math.max(5, Math.min(180, this.napLen() + 5 * sign));
      const d = N - this.napLen();
      const m = Math.max(0, Math.min(N, this.curM() + d));
      this.setState({ nap: N, m: m, running: !!s.running && m > 0 });
    }
  }
  openPicker() {
    const s = this.state || {};
    const live = this.live();
    const patch = { picking: true, wasRunning: !!s.running && !live, running: false };
    if (!live) patch.m = this.curM();
    this.setState(patch);
  }
  applyTime(v) {
    this.last = Date.now();
    if (this.mode() === 'clock') {
      const W = Math.max(240, Math.min(720, Math.round(Number(v) || 0)));
      const patch = { wake: W, picking: false, running: false };
      if (!this.live()) patch.m = Math.max(0, this.curM() + (W - this.wakeAt()));
      this.setState(patch);
    } else {
      const sec = Math.max(60, Math.min(14400, Math.round(Number(v) || 0)));
      this.setState({ napSec: sec, m: sec / 60, picking: false, running: false });
    }
  }
  cancelPick() {
    const s = this.state || {};
    this.last = Date.now();
    this.setState({ picking: false, running: !!s.wasRunning });
  }
  napText() {
    const t = Math.round(this.napLen() * 60);
    const h = Math.floor(t / 3600);
    const m = Math.floor((t % 3600) / 60);
    const s = t % 60;
    if (h > 0) return h + 'h ' + (m < 10 ? '0' : '') + m + 'm';
    if (s > 0) return m + ':' + (s < 10 ? '0' : '') + s;
    return m + ' min';
  }
  cycleDim() {
    const s = this.state || {};
    this.setState({ dim: ((s.dim ?? 0) + 1) % 3 });
  }
  clockStr(t) {
    const v = ((Math.round(t) % 1440) + 1440) % 1440;
    const h = Math.floor(v / 60);
    const mm = v % 60;
    return h + ':' + (mm < 10 ? '0' : '') + mm;
  }
  shapes() {
    if (this._sh) return this._sh;
    const pol = (r, deg) => {
      const a = deg * Math.PI / 180;
      return (195 + r * Math.sin(a)).toFixed(1) + ' ' + (292 - r * Math.cos(a)).toFixed(1);
    };
    let rays = '';
    let dots = '';
    for (let k = 0; k < 12; k++) {
      const a = k * 30;
      rays += 'M' + pol(118, a - 4.5) + 'L' + pol(196, a) + 'L' + pol(118, a + 4.5) + 'Z';
      dots += 'M' + pol(86, a) + 'm-3.2 0a3.2 3.2 0 1 0 6.4 0a3.2 3.2 0 1 0 -6.4 0';
    }
    this._sh = { rays: rays, dots: dots };
    return this._sh;
  }
  lay() {
    const land = !!this.props.landscape;
    const v = land ? { k: 0.8, x: 80, y: -42 } : { k: 1, x: 0, y: 0 };
    return {
      land: land,
      w: land ? 844 : 390,
      h: land ? 390 : 844,
      vb: land ? '0 0 844 390' : '0 0 390 844',
      pD: land ? 'none' : 'inline',
      lD: land ? 'inline' : 'none',
      gT: 'translate(' + v.x + ' ' + v.y + ') scale(' + v.k + ')',
      cT: 'translate(' + v.x + 'px, ' + v.y + 'px) scale(' + v.k + ')',
      mid: land ? 'translateY(-50%)' : 'none',
      bunnyT: land ? 'translate(404 290) scale(0.56)' : 'translate(195 586) scale(0.9)',
      hL: land ? 462 : 20,
      hR: land ? 62 : 20,
      hT: land ? 20 : 52,
      tL: land ? 462 : 24,
      tR: land ? 62 : 24,
      tT: land ? 152 : 406,
      pL: land ? 462 : 0,
      pR: land ? 62 : 0,
      kT: land ? 292 : 740
    };
  }
  renderVals() {
    const s = this.state || {};
    const mode = this.mode();
    const clock = mode === 'clock';
    const A = this.windowLen(mode);
    const m = this.curM();
    const phase = m <= 0 ? 'wake' : (m <= A ? 'almost' : 'sleep');
    const lit = phase === 'sleep' ? 6 : (phase === 'almost' ? Math.min(6, Math.ceil(m / (A / 6) - 1e-9)) : 0);
    const night = phase !== 'wake';
    const P = {
      sleep: { bg: '#150F2B', orb: '#E8506A', ink: '#F3EAFF', sub: '#C9BCEB' },
      almost: { bg: '#24173A', orb: '#FFB547', ink: '#FFF3E0', sub: '#E9D8BC' },
      wake: { bg: '#DFF5E5', orb: '#3DCB7F', ink: '#22183A', sub: '#3E5148' }
    }[phase];
    const W = this.wakeAt();
    const N = this.napLen();
    let display;
    if (clock) {
      if (this.live()) {
        const d = new Date();
        display = d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0');
      } else {
        display = this.clockStr(W - Math.ceil(m - 1e-6));
      }
    } else {
      const sec = Math.max(0, Math.ceil(m * 60 - 0.001));
      display = Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
    }
    const starsLine = lit === 1 ? '1 star left' : lit + ' stars left';
    const copy = clock
      ? { sleep: ['Sleep time', 'Stay in bed until the light turns green'], almost: ['Almost morning', starsLine + ' · stay cozy'], wake: ['Good morning!', 'The light is green. Time to get up!'] }
      : { sleep: ['Nap time', 'Rest until the light turns green'], almost: ['Almost done', starsLine + ' · keep resting'], wake: ["Nap's over!", 'The light is green. Up you get!'] };
    const sh = this.shapes();
    const pos = [[52, 209.4], [91.6, 162.3], [147.3, 136.4], [208.7, 136.4], [264.4, 162.3], [304, 209.4]];
    const stars = pos.map((p, i) => ({
      x: p[0],
      y: p[1],
      op: i < lit ? 1 : 0,
      sc: i < lit ? 1 : 0.4,
      ghost: night ? 'rgba(255, 255, 255, 0.32)' : 'rgba(34, 24, 58, 0.22)'
    }));
    const dim = s.dim ?? 0;
    const segOn = night ? '#F3EAFF' : '#22183A';
    const segOnFg = night ? '#22183A' : '#FFFFFF';
    const live = this.live();
    const running = !!s.running && !live;
    const nowD = new Date();
    const dayTime = live && phase === 'wake' && (nowD.getHours() * 60 + nowD.getMinutes()) - W > 180;
    return {
      L: this.lay(),
      bg: P.bg,
      orb: P.orb,
      ink: P.ink,
      sub: P.sub,
      rays: sh.rays,
      dots: sh.dots,
      skyOp: phase === 'sleep' ? 1 : (phase === 'almost' ? 0.55 : 0),
      raysOp: phase === 'wake' ? 1 : 0,
      zzzOp: phase === 'sleep' ? 1 : (phase === 'almost' ? 0.45 : 0),
      closedOp: night ? 1 : 0,
      openOp: night ? 0 : 1,
      earL: phase === 'wake' ? -8 : -120,
      earR: phase === 'sleep' ? 120 : 8,
      pawLX: phase === 'wake' ? -46 : 0,
      pawRX: phase === 'wake' ? 46 : 0,
      pawY: phase === 'wake' ? -74 : 0,
      bunnyAnim: phase === 'wake' ? 'st-hop 1.5s ease-in-out infinite' : 'st-breathe 4.2s ease-in-out infinite',
      stars: stars,
      display: display,
      displaySize: display.length > 5 ? 46 : 64,
      title: dayTime ? 'Daytime' : copy[phase][0],
      subtitle: dayTime ? 'The sleep light starts at 19:30' : copy[phase][1],
      dimOp: [0, 0.3, 0.55][dim],
      dimLabel: 'Night light brightness: ' + ['high', 'medium', 'low'][dim],
      d1: 1,
      d2: dim < 2 ? 1 : 0.3,
      d3: dim < 1 ? 1 : 0.3,
      segBg: night ? 'rgba(255, 255, 255, 0.1)' : 'rgba(34, 24, 58, 0.08)',
      segClockBg: clock ? segOn : 'transparent',
      segClockFg: clock ? segOnFg : P.ink,
      segNapBg: clock ? 'transparent' : segOn,
      segNapFg: clock ? P.ink : segOnFg,
      isClock: clock,
      isMinutes: !clock,
      wakeLabel: 'Wake ' + this.clockStr(W),
      napLabel: 'Nap ' + this.napText(),
      setAria: clock ? 'Set the wake-up time' : 'Set the nap length',
      picking: !!s.picking,
      pickValue: clock ? W : Math.round(N * 60),
      pickMode: clock ? 'clock' : 'duration',
      pickHeading: clock ? 'Wake-up time' : 'Nap length',
      pickDark: night,
      done: phase === 'wake',
      running: running,
      showPlay: !running && (live || phase !== 'wake'),
      showReplay: !running && !live && phase === 'wake',
      toggleLabel: live ? 'Preview the night' : (running ? 'Pause' : (phase === 'wake' ? 'Start again' : 'Start')),
      ariaLabel: 'Sleep trainer. ' + copy[phase][0] + '. ' + (clock ? 'Time ' + display + ', wake-up at ' + this.clockStr(W) : display + ' of the nap left'),
      useClock: () => this.setMode('clock'),
      useMinutes: () => this.setMode('minutes'),
      cycleDim: () => this.cycleDim(),
      toggle: () => this.toggle(),
      setTime: () => this.openPicker(),
      applyTime: (v) => this.applyTime(v),
      cancelPick: () => this.cancelPick()
    };
  }
}
return Component;
})() })
];

export const COMPONENTS = {
  "TimePicker": Object.assign({"defaults":{"value":1500,"mode":"duration","dark":false,"accent":"#FF5A3C","heading":"Set time","accentInk":"#111215","landscape":false},"template":"<div style=\"position: relative; width: {{ W }}px; height: {{ H }}px; overflow: hidden; font-family: 'Inter', system-ui, sans-serif; color: {{ ink }}\">\n<button type=\"button\" onClick=\"{{ cancel }}\" aria-label=\"Close without changing the time\" style=\"position: absolute; left: 0; top: 0; width: {{ W }}px; height: {{ H }}px; padding: 0; border: none; background: rgba(10, 8, 20, 0.55); cursor: pointer\"></button>\n<div role=\"dialog\" aria-label=\"{{ heading }}\" style=\"position: absolute; left: {{ sheetX }}px; right: {{ sheetX }}px; bottom: 0; box-sizing: border-box; padding: {{ sheetPad }}; border-radius: 28px 28px 0 0; background: {{ sheet }}; box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.25); display: flex; flex-direction: column; gap: 10px\">\n<div style=\"display: flex; align-items: center; justify-content: space-between; gap: 12px\">\n<button type=\"button\" onClick=\"{{ cancel }}\" style=\"min-width: 72px; height: 44px; padding: 0 4px; border: none; background: transparent; color: {{ muted }}; font-family: inherit; font-size: 16px; font-weight: 600; text-align: left; cursor: pointer\">Cancel</button>\n<div style=\"font-size: 17px; font-weight: 700; line-height: 1.2\">{{ heading }}</div>\n<button type=\"button\" onClick=\"{{ set }}\" style=\"min-width: 72px; height: 44px; padding: 0 18px; border: none; border-radius: 999px; background: {{ accent }}; color: {{ accentInk }}; font-family: inherit; font-size: 16px; font-weight: 700; cursor: pointer; opacity: {{ setOp }}\">Set</button>\n</div>\n<div style=\"position: relative; height: 264px; display: flex; justify-content: center; gap: 10px\">\n<div aria-hidden=\"true\" style=\"position: absolute; left: 0; right: 0; top: 120px; height: 48px; border-radius: 14px; background: {{ band }}\"></div>\n<sc-for list=\"{{ cols }}\" as=\"c\" hint-placeholder-count=\"3\">\n<div style=\"position: relative; width: 96px; display: flex; flex-direction: column; align-items: center\">\n<div style=\"height: 24px; font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; line-height: 24px; color: {{ c.muted }}\">{{ c.label }}</div>\n<div data-wheel=\"1\" ref=\"{{ c.ref }}\" onScroll=\"{{ c.onScroll }}\" tabindex=\"0\" aria-label=\"{{ c.label }}\" style=\"position: relative; width: 96px; height: 240px; box-sizing: border-box; padding: 96px 0; overflow-y: scroll; overscroll-behavior: contain; scroll-snap-type: y mandatory; scrollbar-width: none; -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000000 30%, #000000 70%, transparent 100%); mask-image: linear-gradient(to bottom, transparent 0%, #000000 30%, #000000 70%, transparent 100%)\">\n<sc-for list=\"{{ c.items }}\" as=\"it\" hint-placeholder-count=\"5\">\n<div style=\"height: 48px; scroll-snap-align: center; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: {{ it.w }}; color: {{ it.color }}; font-variant-numeric: tabular-nums\">{{ it.text }}</div>\n</sc-for>\n</div>\n</div>\n</sc-for>\n</div>\n</div>\n</div>"}, { Logic: (function () {
class Component extends DCLogic {
  isClock() {
    return this.props.mode === 'clock';
  }
  init() {
    const v = Math.max(0, Math.round(Number(this.props.value ?? 1500)) || 0);
    if (this.isClock()) {
      const t = v % 1440;
      return { h: Math.floor(t / 60), m: t % 60, s: 0 };
    }
    const t = Math.min(86399, v);
    return { h: Math.floor(t / 3600), m: Math.floor((t % 3600) / 60), s: t % 60 };
  }
  val(key) {
    const st = this.state || {};
    return st[key] ?? this.init()[key];
  }
  refFor(key) {
    this._refs = this._refs || {};
    if (!this._refs[key]) {
      this._refs[key] = (el) => {
        if (!el || el.__dcWheel) return;
        el.__dcWheel = true;
        el.scrollTop = this.val(key) * 48;
      };
    }
    return this._refs[key];
  }
  scrollFor(key, max) {
    this._scroll = this._scroll || {};
    if (!this._scroll[key]) {
      this._scroll[key] = (e) => {
        const el = e && e.currentTarget;
        if (!el) return;
        const idx = Math.max(0, Math.min(max, Math.round(el.scrollTop / 48)));
        if (idx !== this.val(key)) {
          const patch = {};
          patch[key] = idx;
          this.setState(patch);
        }
      };
    }
    return this._scroll[key];
  }
  total() {
    const h = this.val('h');
    const m = this.val('m');
    const s = this.val('s');
    return this.isClock() ? h * 60 + m : h * 3600 + m * 60 + s;
  }
  set() {
    const t = this.total();
    if (!this.isClock() && t <= 0) return;
    if (typeof this.props.onSet === 'function') this.props.onSet(t);
  }
  cancel() {
    if (typeof this.props.onCancel === 'function') this.props.onCancel();
  }
  renderVals() {
    const dark = !!this.props.dark;
    const ink = dark ? '#F4F2FA' : '#15121F';
    const muted = dark ? '#A8A3BD' : '#625D74';
    const faint = dark ? '#7C778F' : '#9F9AB0';
    const pad = (n) => (n < 10 ? '0' : '') + n;
    const col = (key, label, count) => {
      const cur = this.val(key);
      const items = [];
      for (let i = 0; i < count; i++) {
        items.push({ text: pad(i), w: i === cur ? 700 : 500, color: i === cur ? ink : faint });
      }
      return { key: key, label: label, items: items, ref: this.refFor(key), onScroll: this.scrollFor(key, count - 1), muted: muted };
    };
    const cols = this.isClock()
      ? [col('h', 'Hour', 24), col('m', 'Minute', 60)]
      : [col('h', 'Hours', 24), col('m', 'Minutes', 60), col('s', 'Seconds', 60)];
    const t = this.total();
    const land = !!this.props.landscape;
    return {
      W: land ? 844 : 390,
      H: land ? 390 : 844,
      sheetX: land ? 192 : 0,
      sheetPad: land ? '10px 20px 12px' : '16px 20px 36px',
      ink: ink,
      muted: muted,
      sheet: dark ? '#1C1A26' : '#FFFFFF',
      band: dark ? 'rgba(255, 255, 255, 0.08)' : '#F1EFF6',
      heading: this.props.heading ?? 'Set time',
      accent: this.props.accent ?? '#FF5A3C',
      accentInk: this.props.accentInk ?? '#111215',
      setOp: !this.isClock() && t <= 0 ? 0.4 : 1,
      cols: cols,
      set: () => this.set(),
      cancel: () => this.cancel()
    };
  }
}
return Component;
})() })
};
