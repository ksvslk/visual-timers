import { mount, registerComponents } from './dc-runtime.js';
import { THEMES, COMPONENTS } from './themes.js';

registerComponents(COMPONENTS);

const $ = (id) => document.getElementById(id);
const home = $('home');
const player = $('player');
const stage = $('stage');
const grid = $('grid');
const metaTheme = document.querySelector('meta[name="theme-color"]');

const PREF_KEY = 'visual-timers:prefs';
let prefs = { sound: true, demo: false, secs: {}, sleep: {} };
try {
  prefs = Object.assign(prefs, JSON.parse(localStorage.getItem(PREF_KEY) || '{}'));
} catch (e) {}
prefs.secs = prefs.secs || {};
prefs.sleep = prefs.sleep || {};
const savePrefs = () => {
  try {
    localStorage.setItem(PREF_KEY, JSON.stringify(prefs));
  } catch (e) {}
};

const thumbMode = new URLSearchParams(location.search).has('thumbs');
const standalone = matchMedia('(display-mode: standalone)').matches || matchMedia('(display-mode: fullscreen)').matches || navigator.standalone === true;
const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

/* ---------- home ---------- */
for (const t of THEMES) {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = '#/t/' + t.id;
  const img = document.createElement('img');
  img.src = 'thumbs/' + t.id + '.webp';
  img.alt = '';
  img.width = 390;
  img.height = 844;
  img.loading = 'lazy';
  img.decoding = 'async';
  const name = document.createElement('span');
  name.className = 'card-name';
  name.textContent = t.name;
  const tag = document.createElement('span');
  tag.className = 'card-tag';
  tag.textContent = t.tagline;
  a.append(img, name, tag);
  grid.appendChild(a);
}

let cameFromHome = false;
grid.addEventListener('click', (e) => {
  const card = e.target.closest('a.card');
  if (!card) return;
  cameFromHome = true;
  unlockAudio();
  const el = document.documentElement;
  if (!standalone && matchMedia('(pointer: coarse)').matches && el.requestFullscreen && !document.fullscreenElement) {
    el.requestFullscreen({ navigationUI: 'hide' }).catch(() => {});
  }
});

const optSound = $('opt-sound');
const optDemo = $('opt-demo');
optSound.checked = !!prefs.sound;
optDemo.checked = !!prefs.demo;
optSound.addEventListener('change', () => {
  prefs.sound = optSound.checked;
  savePrefs();
  if (prefs.sound) {
    unlockAudio();
    chime();
  }
});
optDemo.addEventListener('change', () => {
  prefs.demo = optDemo.checked;
  savePrefs();
});

let installEvent = null;
addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  installEvent = e;
  $('install').hidden = false;
});
$('install').addEventListener('click', async () => {
  if (!installEvent) return;
  installEvent.prompt();
  try {
    await installEvent.userChoice;
  } catch (e) {}
  installEvent = null;
  $('install').hidden = true;
});
addEventListener('appinstalled', () => {
  $('install').hidden = true;
});
if (ios && !standalone) $('ios-hint').hidden = false;

/* ---------- sound ---------- */
let actx = null;
function unlockAudio() {
  try {
    if (!actx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) actx = new AC();
    }
    if (actx && actx.state === 'suspended') actx.resume();
  } catch (e) {}
}
document.addEventListener('pointerdown', unlockAudio, { passive: true });
function chime() {
  if (!actx) return;
  const t0 = actx.currentTime + 0.05;
  [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5].forEach((f, i) => {
    const at = t0 + i * 0.17 + (i > 3 ? 0.35 : 0);
    const osc = actx.createOscillator();
    const gain = actx.createGain();
    osc.type = 'sine';
    osc.frequency.value = f;
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.exponentialRampToValueAtTime(0.22, at + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.9);
    osc.connect(gain).connect(actx.destination);
    osc.start(at);
    osc.stop(at + 1);
  });
  if (navigator.vibrate) navigator.vibrate([220, 120, 220]);
}

/* ---------- screen wake lock ---------- */
let wakeLock = null;
async function lockScreen() {
  try {
    if ('wakeLock' in navigator && document.visibilityState === 'visible' && !wakeLock) {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => {
        wakeLock = null;
      });
    }
  } catch (e) {
    wakeLock = null;
  }
}
function releaseLock() {
  if (wakeLock) {
    wakeLock.release().catch(() => {});
    wakeLock = null;
  }
}
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && current && !thumbMode) lockScreen();
});

/* ---------- player ---------- */
let current = null;
let currentTheme = null;
let currentProps = null;
let prevVals = null;
let lastBars = '';
let land = false;

// Landscape whenever the screen is wider than tall. Thumbnails stay portrait.
const isLand = () => !thumbMode && window.innerWidth > window.innerHeight;

function propsFor(t, thumb) {
  const p = Object.assign({}, t.defaults);
  if (thumb) return p;
  p.landscape = land;
  p.speed = prefs.demo ? (t.sleep ? 'Demo (fast-forward)' : 'Demo (1 min = 1 s)') : 'Real time';
  if (t.relative) p.left = 100;
  if (t.sleep) {
    p.preview = 'Sleeping';
    if (prefs.sleep.mode) p.wakeBy = prefs.sleep.mode === 'minutes' ? 'Minutes' : 'Clock time';
  }
  return p;
}

function setBars(t, vals) {
  let top;
  let bottom;
  if (t.bars === 'sunset') {
    top = vals.skyTop;
    bottom = vals.lakeColor;
  } else if (t.bars === 'sleep') {
    top = vals.bg;
    bottom = vals.bg;
  } else if (land && t.lbars) {
    top = t.lbars[0];
    bottom = t.lbars[1];
  } else {
    top = t.bars[0];
    bottom = t.bars[1];
  }
  // In landscape the letterbox bars follow the landscape horizon (or a
  // left/right split for Pizza's board) instead of the portrait halves.
  const dir = land && t.ldir ? t.ldir : '180deg';
  const frac = (land ? (t.lsplit != null ? t.lsplit : 50) : (t.psplit != null ? t.psplit : 50)) / 100;
  const key = [top, bottom, dir, frac].join('|');
  if (key === lastBars) return;
  lastBars = key;
  barDir = dir;
  barFrac = frac;
  player.style.setProperty('--bar-top', top);
  player.style.setProperty('--bar-bottom', bottom);
  player.style.setProperty('--bar-dir', dir);
  applyBars();
  if (metaTheme && !thumbMode) metaTheme.setAttribute('content', top);
}

function onRender(vals) {
  if (!currentTheme) return;
  setBars(currentTheme, vals);
  if (prevVals && vals.done && !prevVals.done && prevVals.running && !currentTheme.sleep && prefs.sound) chime();
  prevVals = { done: !!vals.done, running: !!vals.running };
}

function addBack(t) {
  const header = stage.querySelector('header');
  if (!header) return;
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'dc-back tone-' + (t.back || 'auto');
  b.setAttribute('aria-label', 'All timers');
  b.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"></path></svg>';
  b.addEventListener('click', () => {
    if (cameFromHome) history.back();
    else location.hash = '';
  });
  header.insertBefore(b, header.firstChild);
}

let barDir = '180deg';
let barFrac = 0.5;
// The colour split sits at the same point of the stage, measured on screen,
// so bars beside the stage and bars above and below it both match it.
function applyBars() {
  const w = land ? 844 : 390;
  const h = land ? 390 : 844;
  const s = Math.min(window.innerWidth / w, window.innerHeight / h);
  const px = barDir === '90deg'
    ? (window.innerWidth - w * s) / 2 + barFrac * w * s
    : (window.innerHeight - h * s) / 2 + barFrac * h * s;
  player.style.setProperty('--bar-split', px.toFixed(1) + 'px');
}

function setLand(next) {
  land = next;
  player.classList.toggle('land', land);
  stage.classList.toggle('land', land);
}

function fit() {
  const next = isLand();
  if (next !== land) {
    setLand(next);
    lastBars = '';
    if (current && currentProps && !thumbMode) {
      // Same timer, new layout: only the landscape prop changes, so the
      // countdown keeps running where it was.
      currentProps = Object.assign({}, currentProps, { landscape: land });
      current.setProps(currentProps);
    }
  }
  const w = land ? 844 : 390;
  const h = land ? 390 : 844;
  const s = Math.min(window.innerWidth / w, window.innerHeight / h);
  stage.style.setProperty('--s', String(s));
  applyBars();
}
addEventListener('resize', fit);
addEventListener('orientationchange', () => setTimeout(fit, 60));

function closeTheme() {
  if (!current) return;
  const st = current.logic.state || {};
  if (currentTheme && !thumbMode) {
    if (currentTheme.sleep) {
      prefs.sleep = {
        mode: st.mode || prefs.sleep.mode,
        wake: st.wake || prefs.sleep.wake,
        napSec: st.napSec || prefs.sleep.napSec
      };
    } else if (st.setSec) {
      prefs.secs[currentTheme.id] = st.setSec;
    }
    savePrefs();
  }
  current.destroy();
  current = null;
  currentTheme = null;
  currentProps = null;
  prevVals = null;
  lastBars = '';
  stage.textContent = '';
  releaseLock();
}

function openTheme(id, thumb) {
  const t = THEMES.find((x) => x.id === id);
  if (!t) {
    showHome();
    return;
  }
  closeTheme();
  currentTheme = t;
  home.hidden = true;
  player.hidden = false;
  document.body.classList.add('playing');
  stage.className = 'dc-stage theme-' + t.id;
  setLand(isLand());
  currentProps = propsFor(t, thumb);
  current = mount(stage, t.template, t.Logic, currentProps, { onRender: onRender });
  if (!thumb) {
    if (t.sleep) {
      const s = prefs.sleep;
      const patch = {};
      if (s.wake) patch.wake = s.wake;
      if (s.napSec) patch.napSec = s.napSec;
      if (Object.keys(patch).length) current.logic.setState(patch);
    } else if (prefs.secs[t.id]) {
      const v = prefs.secs[t.id];
      current.logic.setState({ rem: v, total: v, setSec: v });
    }
  }
  if (!thumb) {
    addBack(t);
    lockScreen();
  }
  fit();
}

function showHome() {
  closeTheme();
  cameFromHome = false;
  player.hidden = true;
  home.hidden = false;
  document.body.classList.remove('playing');
  if (metaTheme) metaTheme.setAttribute('content', '#14111F');
}

function route() {
  const h = location.hash;
  let m = h.match(/^#\/thumb\/([\w-]+)/);
  if (m && thumbMode) {
    document.body.classList.add('thumb-mode');
    openTheme(m[1], true);
    return;
  }
  m = h.match(/^#\/t\/([\w-]+)/);
  if (m) {
    openTheme(m[1], false);
    return;
  }
  showHome();
}
addEventListener('hashchange', route);
route();

if ('serviceWorker' in navigator && !thumbMode) {
  const hadController = !!navigator.serviceWorker.controller;
  let reloaded = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    // A new version took over: reload once so the app runs the new files,
    // unless a timer is open right now.
    if (!hadController || reloaded || current) return;
    reloaded = true;
    location.reload();
  });
  addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
