self.addEventListener("install", () => {
    caches.open("CacheStorageAPI").then((cache) => {
        return cache.addAll([
            "/index.html",
            "/game-logic.js",
            "/manifest.json",
            "/script.js",
            "/style.css",
            "/sw.js",
            "/icons/icon-192x192.png",
            "/icons/icon-512x512.png"
        ]);
    })
})

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

