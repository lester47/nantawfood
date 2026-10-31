## r23 首頁 QR code（2026-10-31）

首頁右上方新增網站 QR code，可掃描開啟 https://lester47.github.io/nantawfood/index.html；手機版自動排列，避免遮擋標題與導覽。

# 南投食農互動平台

本目錄是 2026-10-30 從「網站」整理的 GitHub 發布版本。正式頁面、遊戲及圖卡內容保持原樣。

## 入口

- `index.html`：平台首頁
- `territory.html`：領地戰
- `islands/nantou-overview-v3.html`：食農島
- `learning-cards/index.html`：104 張共用食材圖卡
- `portal.html`、`territory-quiz.html`：舊網址相容轉址

## 本機預覽與發布

在本目錄執行 `python -m http.server 8766 --bind 127.0.0.1`，開啟 http://127.0.0.1:8766/ 。

將**本目錄內的內容**作為 GitHub 儲存庫根目錄。GitHub Pages 選擇對應分支與 `/ (root)`；`.nojekyll` 已加入。尚未替你建立儲存庫、提交或推送。

## AI 配套

`api-mvp/` 是目前本機 AI 功能所需的 FastAPI 後端，已保留程式、測試及套件設定；啟動方式見其 README。GitHub Pages 僅提供靜態頁面，不能執行 Python；目前前端仍使用既有本機 AI 服務網址。線上 AI 部署需要另行配置後端。

## 整理範圍

保留 104 張圖卡 JPG、單卡頁使用的 101 張插畫 JPG、13 鄉鎮地圖及首頁插畫。移除發布副本中的高解析插畫 PNG 母檔、未使用的數字命名圖片、舊食農島原型、另一套 Next.js MVP、歷史規劃文件及 Python 產生檔。

原始資料完整保留於外層工作區；清理明細及驗證報告位於外層 `版本確認/github-clean-2026-10-30/`，不需上傳。既有 VERSION、CHANGELOG 代表功能版本，這次只整理發布內容。
