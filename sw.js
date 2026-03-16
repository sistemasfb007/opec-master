// OPEC MASTER — Service Worker v2
const CACHE = 'opec-master-v2';
const BASE  = '/opec-master/';
const ASSETS = [
  BASE,
  BASE + 'index.html',
  BASE + 'OPEC.html',
  BASE + 'MASTER.html',
  BASE + 'manifest.json',
  BASE + 'icon-192.png',
  BASE + 'icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Sempre busca da rede, usa cache só como fallback offline
  e.respondWith(
    fetch(e.request)
      .catch(() => caches.match(e.request))
  );
});
