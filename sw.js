// OPEC MASTER — Service Worker
const CACHE = 'opec-master-v1';
const ASSETS = [
  './',
  './index.html',
  './OPEC.html',
  './MASTER.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS).catch(()=>{}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Sempre buscar da rede — só usa cache como fallback
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
