const CACHE_NAME = 'sa7d-fitness-v9';
const APP_ASSETS = [
  './',
  './index.html',
  './styles.css?v=9',
  './identity-client.js?v=9',
  './app.js?v=9',
  './manifest.webmanifest?v=9',
  './icons/app-logo.png?v=9',
  './icons/icon-192.png?v=9',
  './icons/icon-512.png?v=9',
  './icons/apple-touch-icon.png?v=9',
  './guides/bench-press.gif?v=9',
  './guides/incline-press.gif?v=9',
  './guides/dumbbell-fly.gif?v=9',
  './guides/push-up.gif?v=9',
  './guides/pushdown.gif?v=9',
  './guides/overhead-extension.gif?v=9',
  './guides/pulldown.gif?v=9',
  './guides/row.gif?v=9',
  './guides/single-row.gif?v=9',
  './guides/curl.gif?v=9',
  './guides/squat.gif?v=9',
  './guides/hinge.gif?v=9',
  './guides/leg-press.gif?v=9',
  './guides/lunge.gif?v=9',
  './guides/calf-raise.gif?v=9',
  './guides/overhead-press.gif?v=9',
  './guides/lateral-raise.gif?v=9',
  './guides/face-pull.gif?v=9',
  './guides/dips.gif?v=9'
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
