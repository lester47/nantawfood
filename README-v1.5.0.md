# v1.5.0 AI 關卡整合版

這個版本是在 `v1.4.2` 教學現場版上，將 AI 問答模組整合進既有「跑步攻佔鄉鎮」流程。

## 版本定位
- 版本：`v1.5.0`
- 類型：**MINOR**（新增可見功能）
- 核心：保留舊流程穩定性，新增遊戲內 AI 互動關卡

## 新增重點
1. 主畫面 `index.html` 新增 **AI 問答 Modal**。
2. 攻佔成功後流程改為：
   - 食材介紹
   - AI 問答（可輸入問題）
   - 完成後進下一回合
3. 串接 `api-mvp` 的 `POST /api/v1/ai/ask`。
4. 先支援 4 個鄉鎮食材 mapping：
   - 埔里鎮 → `puli-guava`
   - 鹿谷鄉 → `lugu-oolong-tea`
   - 草屯鎮 → `caotun-rice`
   - 魚池鄉 → `yuchi-black-tea`

## 容錯策略
- AI API 失敗時，不會卡住遊戲。
- 使用者仍可按「完成，進入下一回合」。
- 未映射鄉鎮顯示「AI 問答即將上線」。

## 一起更新的版本標記
- `index.html`：v1.5.0 字樣與 summary payload version
- `player.html`：v1.5.0 字樣與 payload version
- `leaderboard.html`：v1.5.0 字樣
- `manifest.json`：名稱與描述更新為 v1.5.0
- `service-worker.js`：cache name 更新（避免舊快取干擾）

## 本機驗證建議
1. 開啟 `index.html`，跑步至可攻佔狀態。
2. 攻佔「埔里鎮 / 鹿谷鄉 / 草屯鎮 / 魚池鄉」任一鄉鎮。
3. 確認食材介紹後會跳出 AI 問答視窗。
4. 測試以下情境：
   - 正常問答回覆
   - API 關閉時 fallback 提示
   - 按略過可正常進下一回合

## 後續建議（v1.5.x / v1.6.0）
- v1.5.1：修 AI Modal UX 小問題（文案、按鈕節奏、錯誤提示）。
- v1.5.2：補老師引導文與課堂流程話術。
- v1.6.0：補齊 13 鄉鎮完整 mapping 與 AI 回答內容策略。
