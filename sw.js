const CACHE_NAME = 'sa7d-fitness-v8';
const APP_ASSETS = [
  './',
  './index.html',
  './styles.css?v=8',
  './identity-client.js?v=8',
  './app.js?v=8',
  './manifest.webmanifest?v=8',
  './icons/app-logo.png?v=8',
  './icons/icon-192.png?v=8',
  './icons/icon-512.png?v=8',
  './icons/apple-touch-icon.png?v=8',
  './guides/bench-press.gif?v=8',
  './guides/incline-press.gif?v=8',
  './guides/dumbbell-fly.gif?v=8',
  './guides/push-up.gif?v=8',
  './guides/pushdown.gif?v=8',
  './guides/overhead-extension.gif?v=8',
  './guides/pulldown.gif?v=8',
  './guides/row.gif?v=8',
  './guides/single-row.gif?v=8',
  './guides/curl.gif?v=8',
  './guides/squat.gif?v=8',
  './guides/hinge.gif?v=8',
  './guides/leg-press.gif?v=8',
  './guides/lunge.gif?v=8',
  './guides/calf-raise.gif?v=8',
  './guides/overhead-press.gif?v=8',
  './guides/lateral-raise.gif?v=8',
  './guides/face-pull.gif?v=8',
  './guides/dips.gif?v=8'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(event.request.url);

  if (event.request.mode === 'navigate') {
    event.respondWith(networkFirst(event.request, './index.html'));
    return;
  }

  if (requestUrl.origin === self.location.origin) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  event.respondWith(cacheFirst(event.request));
});

async function networkFirst(request, fallbackAsset) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);

    if (response && response.status === 200) {
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }

    if (fallbackAsset) {
      const fallback = await cache.match(fallbackAsset);
      if (fallback) {
        return fallback;
      }
    }

    throw error;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  if (response && response.status === 200) {
    cache.put(request, response.clone());
  }
  return response;
}
