// Network-first, falling back to the saved copy: updates show up when online, the page still opens offline.
const C = "qrt";
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(C).then(c => c.add("./"))); });
self.addEventListener("fetch", e => e.respondWith(
  fetch(e.request).then(r => { const copy = r.clone(); caches.open(C).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request))));
