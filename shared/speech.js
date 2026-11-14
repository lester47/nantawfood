// r40 共用語音：修正開頭一兩個字被吃掉。
// 原因一：喇叭／HDMI／藍牙等音效裝置閒置時會休眠，語音開始的前幾百毫秒用來喚醒裝置而聽不到。
//         → 使用者第一次點擊後，以幾乎無聲的音訊持續讓輸出裝置保持喚醒。
// 原因二：Chrome 在 cancel() 之後立刻 speak()，新語音的開頭常被截掉。
//         → cancel 後稍等再播放；期間若又被取消（例如按下一回合）就不播放。
(function (root) {
  const synth = root.speechSynthesis;
  if (!synth || typeof root.SpeechSynthesisUtterance !== 'function') {
    root.NantouSpeech = { speak: () => false, cancel() {}, supported: false };
    return;
  }

  let token = 0;
  const realCancel = synth.cancel.bind(synth);
  // 網站其他地方直接呼叫 speechSynthesis.cancel() 時，也一併取消尚未開始的延遲播放。
  try { synth.cancel = function () { token += 1; realCancel(); }; } catch (error) { /* 無法覆寫時仍可使用 */ }

  let audioCtx = null;
  function keepAudioAwake() {
    try {
      if (!audioCtx) {
        const AC = root.AudioContext || root.webkitAudioContext;
        if (!AC) return;
        audioCtx = new AC();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        gain.gain.value = 0.0001; // 人耳聽不到，但裝置不會判定為靜音而休眠
        osc.frequency.value = 30;
        osc.connect(gain).connect(audioCtx.destination);
        osc.start();
      }
      if (audioCtx.state === 'suspended') audioCtx.resume();
    } catch (error) { /* 不支援時僅略過 */ }
  }
  ['pointerdown', 'keydown', 'touchstart'].forEach(type =>
    root.addEventListener(type, keepAudioAwake, { capture: true, passive: true }));

  let zhVoice = null;
  function pickVoice() {
    const voices = synth.getVoices() || [];
    zhVoice = voices.find(v => /zh[-_]TW/i.test(v.lang)) || voices.find(v => /^zh/i.test(v.lang)) || null;
  }
  pickVoice();
  try { synth.addEventListener('voiceschanged', pickVoice); } catch (error) {}

  const alive = new Set(); // 保留參照，避免 Chrome 在播放中回收 utterance 導致中斷或不觸發 onend

  function speak(text, { lang = 'zh-TW', rate = 1, pitch = 1, onstart, onend, onerror } = {}) {
    if (!text) return false;
    keepAudioAwake();
    const wasBusy = synth.speaking || synth.pending;
    synth.cancel();
    const mine = token;
    const delay = wasBusy ? 260 : 120;
    setTimeout(() => {
      if (mine !== token) return; // 等待期間已被取消或有新語音
      try {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = lang; u.rate = rate; u.pitch = pitch;
        if (zhVoice && /^zh/i.test(lang)) u.voice = zhVoice;
        alive.add(u);
        u.onstart = event => { if (onstart) onstart(event); };
        u.onend = event => { alive.delete(u); if (onend) onend(event); };
        u.onerror = event => { alive.delete(u); if (onerror) onerror(event); };
        if (synth.paused) synth.resume();
        synth.speak(u);
      } catch (error) { if (onerror) onerror(error); }
    }, delay);
    return true;
  }

  root.NantouSpeech = { speak, cancel: () => synth.cancel(), supported: true };
})(globalThis);
