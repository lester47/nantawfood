# v1.1 PWA 可安裝版部署說明

## 這一版做了什麼

- 將原本 `nantau-food-final.html` 升級為 `index.html`
- 新增 `manifest.json`
- 新增 `service-worker.js`
- 新增 App 圖示 `icons/icon-192.png` 與 `icons/icon-512.png`
- 新增線上／離線展示狀態提示
- 新增「安裝到主畫面」按鈕
- 保留原本紅綠隊、地圖、分數、食農圖卡與語音介紹邏輯

## GitHub Pages 部署方式

請把下列檔案放在網站根目錄：

```text
index.html
manifest.json
service-worker.js
icons/icon-192.png
icons/icon-512.png
images/renai.png
images/guoxing.png
images/caotun.png
images/nantou.png
images/zhongliao.png
images/puli.png
images/yuchi.png
images/mingjian.png
images/jiji.png
images/shuili.png
images/lugu.png
images/zhushan.png
images/xinyi.png
```

## 測試方式

1. 用 Chrome 開啟 GitHub Pages 網址。
2. 等待地圖與圖片載入完成。
3. 點選網址列旁的安裝圖示，或按頁面右上角「安裝到主畫面」。
4. 關閉網路。
5. 從桌面圖示重新開啟。
6. 確認畫面可開啟，並顯示「離線展示模式」。

## 注意事項

第一次開啟仍需要網路，因為要快取 D3、南投 GeoJSON 與圖片。
若更新後手機仍顯示舊版，請清除瀏覽器網站資料，或修改 `service-worker.js` 的 `CACHE_NAME`。
