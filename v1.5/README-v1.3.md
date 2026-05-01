# v1.3 Room ID 房間制版

本版以 v1.2 手機體感 MQTT 版為基礎，新增 Room ID 房間制。

## 核心升級

| 項目 | 說明 |
|---|---|
| Room ID | 主畫面自動建立 4 碼房間代碼 |
| 玩家網址 | 主畫面可複製 `player.html?room=房號` |
| MQTT Topic | 改為 `nantou-food-race/{roomId}/red` 與 `nantou-food-race/{roomId}/green` |
| 資料隔離 | 不同房間訊息不會互相干擾 |
| MQTT Server | `wss://MQTTGO.io:8084/mqtt` |

## 操作方式

1. 開啟主畫面：`https://lester47.github.io/nantawfood/`
2. 主畫面會顯示房間代碼，例如 `A7K2`。
3. 點「複製玩家網址」或直接開啟：`player.html?room=A7K2`
4. 手機選擇紅隊或綠隊。
5. 按「開始體感」後晃動手機，主畫面會同步前進。

## MQTTGO 測試訂閱

```text
nantou-food-race/#
```

單一房間可訂閱：

```text
nantou-food-race/A7K2/#
```

## Git 上傳

```bash
git add .
git commit -m "upgrade to v1.3 room id version"
git push origin main
git tag v1.3
git push origin v1.3
```

## 驗收標準

| 測試 | 通過條件 |
|---|---|
| 主畫面顯示房號 | 可以看到 Room ID |
| 玩家網址帶房號 | player.html?room=房號 |
| 手機送出步數 | 主畫面同步增加 |
| 不同房間隔離 | A房不影響B房 |
| 手動模式 | 原本按鈕仍可用 |
