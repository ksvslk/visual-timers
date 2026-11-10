// Offline cache for Visual Timers (generated)
const CACHE = 'visual-timers-723cd0e8c3';
const ASSETS = [
  "./",
  "app.css",
  "app.js",
  "dc-runtime.js",
  "fonts/baloo-2-latin-wght-normal.woff2",
  "fonts/bungee-latin-400-normal.woff2",
  "fonts/fonts.css",
  "fonts/fredoka-latin-wght-normal.woff2",
  "fonts/instrument-sans-latin-wght-normal.woff2",
  "fonts/instrument-serif-latin-400-italic.woff2",
  "fonts/instrument-serif-latin-400-normal.woff2",
  "fonts/inter-latin-wght-normal.woff2",
  "fonts/mochiy-pop-one-latin-400-normal.woff2",
  "fonts/nunito-latin-wght-normal.woff2",
  "fonts/outfit-latin-wght-normal.woff2",
  "fonts/rubik-latin-wght-normal.woff2",
  "fonts/silkscreen-latin-400-normal.woff2",
  "fonts/silkscreen-latin-700-normal.woff2",
  "fonts/space-grotesk-latin-wght-normal.woff2",
  "fonts/unbounded-latin-wght-normal.woff2",
  "icons/apple-touch-icon.png",
  "icons/favicon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png",
  "index.html",
  "manifest.webmanifest",
  "themes.css",
  "themes.js",
  "thumbs/boba.webp",
  "thumbs/classic.webp",
  "thumbs/dandelion.webp",
  "thumbs/hearts.webp",
  "thumbs/pizza.webp",
  "thumbs/rainbow.webp",
  "thumbs/rocket.webp",
  "thumbs/sleep.webp",
  "thumbs/sunset.webp"
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('visual-timers-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((cache) => cache.put(req, copy));
      }
      return res;
    }))
  );
});
