self.addEventListener('install', function (event) {
  console.log('[SERVICE WORKER] Installing SW...', event);
});

self.addEventListener('activate', function (event) {
  console.log('[SERVICE WORKER] Activating SW...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  console.log('[SERVICE WORKER] Fetching something...', event);
});