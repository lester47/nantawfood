(() => {
  const loading = document.getElementById('loading');
  if (!loading) return;
  function show(message) {
    if (!loading.isConnected) return;
    loading.replaceChildren();
    const box = document.createElement('div');
    box.style.cssText = 'max-width:560px;padding:24px;line-height:1.8;text-align:center';
    const text = document.createElement('p');
    text.textContent = message;
    const retry = document.createElement('button');
    retry.textContent = '重新載入食農島';
    retry.onclick = () => {
      const url = new URL(location.href);
      url.searchParams.set('reload', Date.now());
      location.replace(url);
    };
    const fallback = document.createElement('a');
    fallback.href = 'index.html';
    fallback.textContent = '開啟食農探索備援頁';
    fallback.style.cssText = 'display:block;margin-top:14px';
    box.append(text, retry, fallback);
    loading.append(box);
  }
  window.addEventListener('error', event => {
    const script = event.target;
    if (script instanceof HTMLScriptElement && script.type === 'module') {
      show('食農島程式載入失敗，請重新載入，或開啟備援頁。');
    } else if (event.message) {
      show('食農島啟動時發生錯誤：' + event.message);
    }
  }, true);
  setTimeout(() => show('食農島載入時間較長。可重新載入，或先使用食農探索備援頁。'), 30000);
})();
