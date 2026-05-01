# v1.7 一鍵開新場完整整合版

## 版本目標
- 一鍵開新場，自動產生場次代碼 `sessionId`
- MQTT Topic 自動加入場次層級，避免舊資料污染新比賽
- 保留小組競賽、排行榜、教師控制台、手機體感

## Topic 架構
```text
nantou-food-race/{sessionId}/{groupId}/red
nantou-food-race/{sessionId}/{groupId}/green
nantou-food-race/{sessionId}/{groupId}/summary
nantou-food-race/{sessionId}/leaderboard/update
nantou-food-race/{sessionId}/control/all
```

## 頁面
| 檔案 | 功能 |
|---|---|
| teacher.html | 教師控制台，一鍵開新場 |
| index.html | 小組主畫面 |
| player.html | 手機體感控制器 |
| leaderboard.html | 場次排行榜 |
| manifest.json | PWA 設定 |
| service-worker.js | PWA 快取 |

## Git 指令
```bash
git add . && git commit -m "upgrade to v1.7 session topic version" && git push origin main && git tag v1.7 && git push origin v1.7
```
