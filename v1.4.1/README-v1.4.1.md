# v1.4.1 全場歸零清空版

## 新增功能

- 主畫面新增「🧹 全場歸零」按鈕。
- 排行榜頁新增「🧹 全場歸零」按鈕。
- 透過 MQTTGO.io 發送 `nantou-food-race/control/all` 控制訊息。
- 所有主畫面收到後會清空地圖、分數、步數與食農顯示。
- 所有手機控制器收到後會停止體感並將步數歸零。
- 排行榜收到後會清空全部房間資料。

## MQTT 控制訊息

Topic：

```text
nantou-food-race/control/all
```

Payload：

```json
{
  "version": "v1.4.1",
  "action": "resetAll",
  "target": "all",
  "timestamp": 1777536000000
}
```

## Git 上傳

```bash
git add .
git commit -m "upgrade to v1.4.1 global reset version"
git push origin main
git tag v1.4.1
git push origin v1.4.1
```

## 驗收方式

1. 開啟主畫面並建立一個房間。
2. 手機進入 `player.html?room=房號`，用體感讓隊伍前進並攻佔。
3. 開啟 `leaderboard.html`，確認排行榜有資料。
4. 在主畫面或排行榜按「全場歸零」。
5. 主畫面、手機控制器、排行榜都應回到初始狀態。
