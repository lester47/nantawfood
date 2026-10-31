// Local prototype configuration: never persist or echo API credentials.
(() => {
 if (window.parent !== window) return;
 const dialog=document.createElement('dialog');
 dialog.style.cssText='max-width:540px;width:calc(100% - 56px);border:2px solid #e0c369;border-radius:22px;padding:26px;color:#243c2a;font:17px/1.65 system-ui';
 dialog.innerHTML=`<form method="dialog"><h2 style="margin-top:0">開始前，設定 AI 助手</h2><p>貼上你自己的 OpenAI API 金鑰，啟用回合後的食農學習解說。</p><label style="display:block">API 金鑰<input id="localAiKey" type="password" autocomplete="off" spellcheck="false" placeholder="貼上 API 金鑰" style="display:block;box-sizing:border-box;width:100%;padding:12px;margin:6px 0 16px;font:inherit"></label><label style="display:block">模型名稱<input id="localAiModel" value="gpt-4o-mini" spellcheck="false" style="display:block;box-sizing:border-box;width:100%;padding:12px;margin:6px 0 16px;font:inherit"></label><p style="font-size:14px">金鑰僅存於本機伺服器記憶體，重啟後清除。呼叫 AI 使用你的 API 額度。此設定適用本機教師預覽。</p><p id="localAiStatus" role="status" aria-live="polite"></p><div style="display:flex;flex-wrap:wrap;gap:8px"><button type="button" id="localAiSave">儲存設定</button><button type="button" id="localAiTest">測試 AI 連線</button><button type="button" id="localAiClear">清除金鑰</button><button id="localAiClose">先使用教材模式</button></div></form>`;
 const button=document.createElement('button');button.textContent='⚙ AI 金鑰設定';button.style.cssText='position:fixed;right:16px;bottom:16px;z-index:9999;background:#245c4e;color:white;border:0;border-radius:12px;padding:12px 18px;cursor:pointer;font:16px system-ui';
 document.body.append(button,dialog);
 const byId=id=>dialog.querySelector('#'+id);
 const status=byId('localAiStatus');
 async function request(path,body){const options=body?{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}:{};const urls=['http://127.0.0.1:8000/api/v1/ai/'+path];let last;for(const url of urls){try{const r=await fetch(url,options);const type=r.headers.get('content-type')||'';if(!type.includes('application/json')){last=Error('AI 設定服務未啟動。請先啟動本機 AI 服務。');continue}const d=await r.json();if(!r.ok)throw Error(d.detail||d.error||'設定服務連線失敗');return d}catch(e){last=e}}throw last||Error('設定服務連線失敗')}
 function showStatus(d){byId('localAiModel').value=d.model||'gpt-4o-mini';status.textContent=d.configured?'✓ 已成功設定金鑰（內容不顯示），可按「測試 AI 連線」確認。':'尚未設定 AI 金鑰，可先使用教材模式。';status.style.color=d.configured?'#23733d':'#8a5a12';byId('localAiClose').textContent=d.configured?'完成設定，開始遊戲':'先使用教材模式'}
 async function run(fn){const controls=dialog.querySelectorAll('button');controls.forEach(b=>b.disabled=true);try{await fn()}catch(e){status.textContent='操作未完成：'+e.message}finally{controls.forEach(b=>b.disabled=false)}}
 byId('localAiSave').onclick=()=>run(async()=>{const key=byId('localAiKey').value;try{showStatus(await request('config',{key,model:byId('localAiModel').value}))}finally{byId('localAiKey').value=''}});
 byId('localAiClear').onclick=()=>run(async()=>{showStatus(await request('config',{clear:true,model:byId('localAiModel').value}));byId('localAiKey').value=''});
 byId('localAiTest').onclick=()=>run(async()=>{status.textContent='測試中，請稍候…';const d=await request('test',{});status.textContent=d.message;status.style.color='#23733d'});
 dialog.addEventListener('close',()=>{byId('localAiKey').value=''});
 button.onclick=()=>{dialog.showModal();run(async()=>showStatus(await request('config')))};
 // Only display automatically on pages served by the local prototype backend.
 if(location.port==='8765'){dialog.showModal();run(async()=>showStatus(await request('config')))}
})();
