const CACHE_NAME = 'sa7d-fitness-v10';
const APP_ASSETS = [
  './',
  './index.html',
  './styles.css?v=10',
  './identity-client.js?v=10',
  './app.js?v=10',
  './manifest.webmanifest?v=10',
  './icons/app-logo.png?v=10',
  './icons/icon-192.png?v=10',
  './icons/icon-512.png?v=10',
  './icons/apple-touch-icon.png?v=10',
  './guides/bench-press.gif?v=10',
  './guides/incline-press.gif?v=10',
  './guides/dumbbell-fly.gif?v=10',
  './guides/push-up.gif?v=10',
  './guides/pushdown.gif?v=10',
  './guides/overhead-extension.gif?v=10',
  './guides/pulldown.gif?v=10',
  './guides/row.gif?v=10',
  './guides/single-row.gif?v=10',
  './guides/curl.gif?v=10',
  './guides/squat.gif?v=10',
  './guides/hinge.gif?v=10',
  './guides/leg-press.gif?v=10',
  './guides/lunge.gif?v=10',
  './guides/calf-raise.gif?v=10',
  './guides/overhead-press.gif?v=10',
  './guides/lateral-raise.gif?v=10',
  './guides/face-pull.gif?v=10',
  './guides/dips.gif?v=10'
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
