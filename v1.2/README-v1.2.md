# 南投食農領地戰 v1.2 手機體感單房間版

## 版本定位

v1.2 在 v1.1 PWA 可安裝版基礎上，新增「手機體感控制器」與 MQTT 即時傳輸功能。  
主畫面仍保留原本紅綠隊按鈕作為備援，手機端則可透過加速度感測器送出步數。

## 新增檔案

| 檔案 | 說明 |
|---|---|
| `player.html` | 手機體感控制器頁面 |
| `index.html` | 主畫面，已新增 MQTT 接收功能 |
| `service-worker.js` | 更新為 v1.2 快取，加入 player.html |
| `manifest.json` | 更新說明文字 |
| `README-v1.2.md` | 本說明文件 |

## 使用方式

### 1. 主畫面

電腦或大螢幕開啟：

```text
https://lester47.github.io/nantawfood/
```

主畫面會自動連線 MQTT，右上角會顯示 MQTT 狀態。

### 2. 手機控制器

手機開啟：

```text
https://lester47.github.io/nantawfood/player.html
```

操作流程：

1. 選擇紅隊或綠隊。
2. 點擊「開始體感偵測」。
3. iPhone 若跳出感測器授權，請允許。
4. 手持手機做跑步或晃動動作。
5. 手機每判定一步，就會透過 MQTT 傳到主畫面。

## MQTT Topic

| 隊伍 | Topic |
|---|---|
| 紅隊 | `nantou-food-race/red` |
| 綠隊 | `nantou-food-race/green` |

## 傳送資料格式

```json
{
  "team": "red",
  "steps": 1,
  "totalSteps": 25,
  "timestamp": 1777536000000,
  "mode": "mobile"
}
```

## 測試重點

| 測試項目 | 通過標準 |
|---|---|
| 主畫面可開啟 | 地圖、紅綠隊、食農資料正常 |
| 手機頁可開啟 | `player.html` 正常顯示 |
| MQTT 主畫面連線 | 顯示 MQTT 已連線 |
| MQTT 手機連線 | 手機頁顯示 MQTT 已連線 |
| 手機可計步 | 晃動手機步數增加 |
| 主畫面可接收 | 紅隊或綠隊進度條增加 |
| 跑滿10步 | 可點選鄉鎮攻佔 |
| 手動備援 | 主畫面原按鈕仍可使用 |

## 上傳 GitHub 指令

```powershell
cd C:\Users\Owner\nantawfood
git status
git add .
git commit -m "upgrade to v1.2 mobile motion MQTT version"
git push origin main
```

穩定後可打版本標籤：

```powershell
git tag -a v1.2 -m "mobile motion MQTT version"
git push origin v1.2
```

## 注意事項

- v1.2 尚未加入 Room ID，所以全班同時玩會共用同一組紅綠隊 Topic。
- v1.3 才會加入 Room ID 房間制。
- MQTT 需要網路才能運作；若 MQTT 無法連線，主畫面手動模式仍可使用。
- 手機感測器在 iPhone 上通常必須由使用者點擊按鈕後才能授權。
