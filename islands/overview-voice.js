// r43 食農島語音介紹：點選食材打開圖卡（或按 ◀ ▶ 切換）時，自動朗讀「食材名稱＋介紹」。
// 不修改 3D 主程式，只觀察圖卡閱讀器 #viewer 的內容變化；使用共用語音模組 shared/speech.js。
(function () {
  const $ = id => document.getElementById(id);
  const viewer = $('viewer'), vText = $('vText'), vTitle = $('vTitle'), bar = viewer?.querySelector('.vbar');
  if (!viewer || !vText || !vTitle || !bar || !window.NantouSpeech?.supported) return;

  let enabled = true;
  try { enabled = localStorage.getItem('islandsVoice') !== 'off'; } catch (error) {}

  const style = document.createElement('style');
  style.textContent = '.vbar .vvoice{background:#2878b8;color:#fff;box-shadow:0 3px 0 #1a5a8a;white-space:nowrap}.vbar .vvoice.off{background:#e6e1cf;color:#6a6450;box-shadow:0 3px 0 #c8c0a0}';
  document.head.appendChild(style);
  const replay = document.createElement('button');
  replay.type = 'button'; replay.className = 'vvoice'; replay.textContent = '🔊 重播'; replay.setAttribute('aria-label', '重播語音介紹');
  const toggle = document.createElement('button');
  toggle.type = 'button'; toggle.className = 'vvoice';
  bar.insertBefore(replay, $('vClose'));
  bar.insertBefore(toggle, $('vClose'));

  function render() {
    toggle.textContent = enabled ? '語音：開' : '語音：關';
    toggle.classList.toggle('off', !enabled);
    toggle.setAttribute('aria-pressed', String(enabled));
    replay.hidden = !enabled;
  }

  function textToRead() {
    const title = vTitle.firstChild?.textContent?.trim() || ''; // 不含 <small> 的鄉鎮副標
    const intro = vText.querySelector('p:not(.sub)')?.textContent?.trim() || '';
    return [title, intro].filter(Boolean).join('。');
  }

  let lastRead = '';
  function readNow(force) {
    if (!enabled || viewer.hidden) return;
    const text = textToRead();
    if (!text || (!force && text === lastRead)) return;
    lastRead = text;
    window.NantouSpeech.speak(text);
  }

  replay.onclick = () => readNow(true);
  toggle.onclick = () => {
    enabled = !enabled;
    try { localStorage.setItem('islandsVoice', enabled ? 'on' : 'off'); } catch (error) {}
    render();
    if (enabled) readNow(true); else window.speechSynthesis.cancel();
  };

  let timer = null;
  new MutationObserver(() => { clearTimeout(timer); timer = setTimeout(() => readNow(false), 60); })
    .observe(vText, { childList: true, subtree: true, characterData: true });
  new MutationObserver(() => {
    if (viewer.hidden) { lastRead = ''; window.speechSynthesis.cancel(); }
    else readNow(false);
  }).observe(viewer, { attributes: true, attributeFilter: ['hidden'] });

  render();
})();
