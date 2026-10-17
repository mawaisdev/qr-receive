// Cache the page on first visit so it opens offline afterwards.
// ponytail: cache-first, so after editing index.html bump the cache name to ship the update.
const C = "qrt1";
self.addEventListener("install", e => e.waitUntil(caches.open(C).then(c => c.add("./"))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
