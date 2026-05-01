# v1.6 班級小組名稱版

## 版本重點
v1.6 不是再增加玩法，而是把系統語言與資料結構升級成更適合教育現場的版本。

## 新增
- 支援 `schoolName`：學校或活動名稱
- 支援 `className`：班級名稱
- 支援 `groupDisplayName / groupName`：小組名稱
- 排行榜全面改為「班級／小組」顯示
- 修正「房間 4WBS」殘留，統一顯示為「小組 4WBS」或自訂小組名稱
- 新增 v1.6 教師控制台 `teacher.html`

## 網址參數範例
```text
index.html?group=A7K2&school=鯉魚國小&class=六甲&groupName=向日葵隊
player.html?group=A7K2&school=鯉魚國小&class=六甲&groupName=向日葵隊
```

## Git 指令
```bash
git add .
git commit -m "upgrade to v1.6 learning group names version"
git push origin main
git tag v1.6
git push origin v1.6
```
