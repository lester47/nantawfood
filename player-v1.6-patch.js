// v1.6 player.html 建議讀取以下網址參數並保留傳送資料一致性：
const urlParams = new URLSearchParams(location.search);
const schoolName = urlParams.get("school") || "";
const className = urlParams.get("class") || "";
const groupDisplayName = urlParams.get("groupName") || "";

// 送 MQTT payload 時加入：
{
  groupId,
  roomId: groupId,
  schoolName,
  className,
  groupDisplayName,
  groupName: groupDisplayName || `小組 ${groupId}`,
  team,
  steps: 1,
  timestamp: Date.now(),
  version: "v1.6"
}
