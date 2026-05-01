# v1.4 小組排行榜版

## 本版新增

- `leaderboard.html`：全班多組即時排行榜。
- `index.html`：每個 Room 會透過 MQTTGO.io 廣播 summary。
- 保留 v1.3 小組代碼制與手機體感控制。

## 使用方式

1. 主畫面：`https://lester47.github.io/nantawfood/`
2. 手機控制器：主畫面複製玩家網址，或使用 `player.html?room=小組代碼`
3. 排行榜：`https://lester47.github.io/nantawfood/leaderboard.html`

## MQTT Topic

- 單小組紅隊：`nantou-food-race/{roomId}/red`
- 單小組綠隊：`nantou-food-race/{roomId}/green`
- 單小組摘要：`nantou-food-race/{roomId}/summary`
- 排行榜廣播：`nantou-food-race/leaderboard/update`

## Git 指令

```bash
git add .
git commit -m "upgrade to v1.4 leaderboard version"
git push origin main
git tag v1.4
git push origin v1.4
```

## 驗收

- 不同 Room 可各自遊玩。
- 每完成一次攻佔，排行榜會收到該 Room 摘要。
- `leaderboard.html` 可依總分排序。
