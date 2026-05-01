const CACHE_NAME = "nantou-food-v1.6-learning-groups";
const ASSETS = ["./","./index.html","./player.html","./leaderboard.html","./teacher.html","./manifest.json"];
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS).catch(()=>null))); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k!==CACHE_NAME ? caches.delete(k) : null)))); self.clients.claim(); });
self.addEventListener("fetch", e => { if(e.request.method !== "GET") return; e.respondWith(fetch(e.request).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))); });
