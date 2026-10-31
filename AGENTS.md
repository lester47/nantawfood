# 發布版維護

- 唯一平台首頁為 index.html；領地戰正式程式為 territory.html。
- 保留現有畫面、玩法、USB 裁判與 AI 教學功能；不得使用舊原型覆蓋。
- 使用相對路徑以支援 GitHub Pages 子目錄。
- learning-cards 根目錄的 104 張 JPG 是正式共用圖卡；assets 中的 JPG 是單卡頁使用的不同插畫，不能當作重複檔刪除。
- api-mvp 是本機 AI 後端，不能以未被靜態 HTML 引用為由刪除。
- 備份、母檔、金鑰與歷史版本放在儲存庫外。
- 外層原網站的 BASELINE-SHA256.json 是歷史版本校驗，未重新定義。本次整理校驗與排除清單位於外層版本確認/github-clean-2026-10-30。
