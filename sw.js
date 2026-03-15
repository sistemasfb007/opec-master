// ── OPEC Master — Service Worker ──
// Versão: atualizar para forçar re-cache
const CACHE_VERSION = 'opec-master-v1';
const CACHE_STATIC  = [
  '/OPEC.html',
  '/MASTER.html',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-master-192.png',
  '/icon-master-512.png',
  '/manifest-opec.json',
  '/manifest-master.json'
];

// ── Instalar: cachear arquivos estáticos ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      console.log('[SW] Cacheando arquivos...');
      return cache.addAll(CACHE_STATIC).catch(err => {
        console.warn('[SW] Erro ao cachear (normal em dev):', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// ── Ativar: remover caches antigas ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: servir do cache, atualizar em background ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Firebase e APIs externas: sempre da rede
  if (url.hostname.includes('firebase') ||
      url.hostname.includes('gstatic') ||
      url.hostname.includes('googleapis')) {
    return; // deixar passar direto
  }

  // Arquivos locais: cache-first com atualização em background
  event.respondWith(
    caches.match(event.request).then(cached => {
      const network = fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => null);

      return cached || network;
    })
  );
});

// ── Mensagem: forçar atualização ──
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
