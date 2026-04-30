const CACHE_NAME = "nantou-food-race-v1-2-20260430";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./player.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",

  // 13 鄉鎮圖卡：請確認 images 資料夾內檔名與下列一致
  "./images/renai.png",
  "./images/guoxing.png",
  "./images/caotun.png",
  "./images/nantou.png",
  "./images/zhongliao.png",
  "./images/puli.png",
  "./images/yuchi.png",
  "./images/mingjian.png",
  "./images/jiji.png",
  "./images/shuili.png",
  "./images/lugu.png",
  "./images/zhushan.png",
  "./images/xinyi.png",

  // 外部資源：第一次仍需連網，成功快取後可離線展示主畫面
  "https://cdn.jsdelivr.net/npm/d3@7",
  "https://unpkg.com/mqtt/dist/mqtt.min.js",
  "https://raw.githubusercontent.com/titaneric/Taiwan-GeoJSON/master/%E5%8D%97%E6%8A%95%E7%B8%A3%E9%84%89%E9%8E%AE.json"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.allSettled(
        CORE_ASSETS.map((asset) =>
          cache.add(asset).catch((error) => {
            console.warn("[PWA] 快取失敗：", asset, error);
          })
        )
      );
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match("./index.html"))
        )
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(request).then((networkResponse) => {
        const clone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        return networkResponse;
      });
    })
  );
});
