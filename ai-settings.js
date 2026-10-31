// Local prototype configuration: never persist or echo API credentials.
(() => {
 if (window.parent !== window) return;
 const isLocalSite=['localhost','127.0.0.1','[::1]'].includes(location.hostname);
 const isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
 const siteRoot=new URL('./',document.currentScript.src);
 const launcherUrl=new URL('downloads/start-local-ai.bat',siteRoot).href;
 const guideUrl=new URL('local-ai-guide.html',siteRoot).href;
 const dialog=document.createElement('dialog');
 dialog.style.cssText='max-height:85vh;overflow-y:auto;max-width:540px;width:calc(100% - 56px);border:2px solid #e0c369;border-radius:22px;padding:26px;color:#243c2a;font:17px/1.65 system-ui';
 dialog.innerHTML=`<form method="dialog"><h2 style="margin-top:0">開始前，設定 AI 助手</h2><p>網站不提供 API Key。若要串接 AI，請使用你自己的 OpenAI API 金鑰；不串接也能使用事先整理好的備用教材與解說。</p><section aria-label="啟用本機 AI 串接" style="background:#f3f6e9;border:1px solid #d5dfc4;border-radius:12px;padding:14px;margin:16px 0;font-size:14px"><strong>想使用 AI？可啟用本機串接（選用）</strong><p style="margin:8px 0"><a href="${launcherUrl}" download="start-local-ai.bat" style="display:inline-block;background:#245c4e;color:white;padding:7px 12px;border-radius:8px;text-decoration:none">下載 Windows 啟動 BAT</a>　<a href="${guideUrl}" target="_blank" rel="noopener">完整使用教學 ↗</a></p><ol style="padding-left:22px;margin:8px 0"><li>安裝 Python 3.11 以上，勾選 Add Python to PATH。</li><li>下載並雙擊 BAT；首次會下載網站及安裝套件。</li><li>在自動開啟的本機網站輸入金鑰，按「儲存設定」→「測試 AI 連線」。</li></ol><p style="margin:8px 0 0">適用 Windows 10／11。使用時保留啟動視窗，結束時按 Enter 停止服務。不串接時使用事先整理好的備用版本，手機也能使用。</p></section><label style="display:block">API 金鑰<input id="localAiKey" type="password" autocomplete="off" spellcheck="false" placeholder="貼上 API 金鑰" style="display:block;box-sizing:border-box;width:100%;padding:12px;margin:6px 0 16px;font:inherit"></label><label style="display:block">模型名稱<input id="localAiModel" value="gpt-4o-mini" spellcheck="false" style="display:block;box-sizing:border-box;width:100%;padding:12px;margin:6px 0 16px;font:inherit"></label><p style="font-size:14px">金鑰僅存於本機伺服器記憶體，重啟後清除。呼叫 AI 使用你的 API 額度。請先使用 BAT 啟動服務，並在自動開啟的本機網站完成設定。</p><p id="localAiStatus" role="status" aria-live="polite"></p><div style="display:flex;flex-wrap:wrap;gap:8px"><button type="button" id="localAiSave">儲存設定</button><button type="button" id="localAiTest">測試 AI 連線</button><button type="button" id="localAiClear">清除金鑰</button><button id="localAiClose">使用備用教材，開始遊戲</button></div></form>`;
 const button=document.createElement('button');button.textContent='⚙ AI 金鑰設定';button.style.cssText='position:fixed;right:16px;bottom:16px;z-index:9999;background:#245c4e;color:white;border:0;border-radius:12px;padding:12px 18px;cursor:pointer;font:16px system-ui';
 document.body.append(button,dialog);
 const byId=id=>dialog.querySelector('#'+id);
 const status=byId('localAiStatus');
 async function request(path,body){const options=body?{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}:{};const urls=['http://127.0.0.1:8000/api/v1/ai/'+path];let last;for(const url of urls){try{const r=await fetch(url,options);const type=r.headers.get('content-type')||'';if(!type.includes('application/json')){last=Error('AI 設定服務未啟動。請先啟動本機 AI 服務。');continue}const d=await r.json();if(!r.ok)throw Error(d.detail||d.error||'設定服務連線失敗');return d}catch(e){last=e}}throw last||Error('設定服務連線失敗')}
 function showStatus(d){byId('localAiModel').value=d.model||'gpt-4o-mini';status.textContent=d.configured?'✓ 已成功設定金鑰（內容不顯示），可按「測試 AI 連線」確認。':'尚未設定 AI 金鑰，可使用備用教材，開始遊戲。';status.style.color=d.configured?'#23733d':'#8a5a12';byId('localAiClose').textContent=d.configured?'完成設定，開始遊戲':'使用備用教材，開始遊戲'}
 async function run(fn){const controls=dialog.querySelectorAll('button');controls.forEach(b=>b.disabled=true);try{await fn()}catch(e){status.textContent='無法連線至本機 AI 服務。請在 Windows 電腦執行 BAT，並使用自動開啟的本機網站；目前仍可使用事先整理的備用教材與解說。'+(e.message&&!/Failed to fetch|Load failed|NetworkError/i.test(e.message)?'（'+e.message+'）':'')}finally{controls.forEach(b=>b.disabled=false)}}
 byId('localAiSave').onclick=()=>run(async()=>{const key=byId('localAiKey').value;try{showStatus(await request('config',{key,model:byId('localAiModel').value}))}finally{byId('localAiKey').value=''}});
 byId('localAiClear').onclick=()=>run(async()=>{showStatus(await request('config',{clear:true,model:byId('localAiModel').value}));byId('localAiKey').value=''});
 byId('localAiTest').onclick=()=>run(async()=>{status.textContent='測試中，請稍候…';const d=await request('test',{});status.textContent=d.message;status.style.color='#23733d'});
 dialog.addEventListener('close',()=>{byId('localAiKey').value=''});
 function openSettings(){
  dialog.showModal();
  if(isMobile){
   status.textContent='手機使用事先整理好的備用教材與解說，不需 API Key。BAT 與 AI 串接適用 Windows 電腦；請在電腦依教學操作。';
   for(const id of ['localAiSave','localAiTest','localAiClear','localAiKey','localAiModel'])byId(id).disabled=true;
  }else if(isLocalSite){run(async()=>showStatus(await request('config')))}
  else{status.textContent='不串接即可使用備用教材與解說。若要使用 AI，請先下載並執行 Windows BAT，再到自動開啟的本機網站設定自己的 API Key。'}
 }
 button.onclick=openSettings;
 // Only display automatically on pages served by the local prototype backend.
 if(isLocalSite&&location.port==='8765')openSettings();
})();
