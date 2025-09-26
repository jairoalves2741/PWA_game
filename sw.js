self.addEventListener("install", () => {
    caches.open("CacheStorageAPI").then((cache) => {
        return cache.addAll([
            "/PWA_game/index.html",
            "/PWA_game/game-logic.js",
            "/PWA_game/manifest.json",
            "/PWA_game/script.js",
            "/PWA_game/style.css",
            "/PWA_game/sw.js",
            "/PWA_game/icons/icon-192x192.png",
            "/PWA_game/icons/icon-512x512.png"
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

