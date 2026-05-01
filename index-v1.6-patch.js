// v1.6 index.html 需要確認 publishSummary() 送出的 payload 包含以下欄位：
// 請在 index.html 中找到 publishSummary()，把 payload 補成類似以下：

const urlParams = new URLSearchParams(location.search);
const schoolName = urlParams.get("school") || localStorage.getItem("schoolName") || "";
const className = urlParams.get("class") || localStorage.getItem("className") || "";
const groupDisplayName = urlParams.get("groupName") || localStorage.getItem("groupName") || "";

const payload = {
  groupId: state.groupId,
  roomId: state.groupId,
  schoolName,
  className,
  groupDisplayName,
  groupName: groupDisplayName || `小組 ${state.groupId}`,
  redTerritory: score.red,
  greenTerritory: score.green,
  redSteps: state.redSteps,
  greenSteps: state.greenSteps,
  totalTerritory: score.total,
  totalScore: score.total * 10,
  goal: state.goal,
  status: state.gameStatus,
  timestamp: Date.now(),
  version: "v1.6"
};
