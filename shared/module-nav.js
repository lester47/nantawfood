(() => {
  if (location.pathname.endsWith('/index.html') || location.pathname.endsWith('/')) {
    const script = document.createElement('script');
    script.src = new URL('../ai-settings.js?v=ai-r25', document.currentScript.src).href;
    script.defer = true;
    document.head.append(script);
  }
  const root = new URL('../', document.currentScript.src);
  if (document.getElementById('platform-module-nav')) return;
  const approvedRevision = 'approved-20261029-r3';
  const townNames = ['南投市','埔里鎮','草屯鎮','竹山鎮','集集鎮','名間鄉','鹿谷鄉','中寮鄉','魚池鄉','國姓鄉','水里鄉','信義鄉','仁愛鄉'];
  const params = new URLSearchParams(location.search);
  let town = townNames.includes(params.get('town')) ? params.get('town') : '';
  const cardTown = location.pathname.split('/').pop().match(/^(\d{2})_[a-z]+/);
  if (!town && cardTown) town = townNames[Number(cardTown[1])-1] || '';
  const nav = document.createElement('nav');
  nav.id = 'platform-module-nav';
  nav.setAttribute('aria-label','食農平台模組切換');
  nav.style.cssText='position:fixed;right:10px;top:8px;z-index:10000;display:flex;flex-wrap:wrap;gap:6px;max-width:90vw;padding:7px;border-radius:14px;background:#fffef2ee;box-shadow:0 2px 10px #0003;font:14px sans-serif';
  const links = [['平台首頁','index.html'],['領地戰','territory.html'],['食農島','islands/nantou-overview-v3.html'],['共用圖卡','learning-cards/index.html']].map(([label,path])=>{
    const a=document.createElement('a'); a.textContent=label;a.dataset.path=path;
    a.style.cssText='display:inline-flex;align-items:center;color:#244f36;padding:5px;text-decoration:underline;font:14px/1.5 sans-serif;border:0;border-radius:6px;background:transparent;box-shadow:none;margin:0;white-space:nowrap'; nav.append(a); return a;
  });
  function update() {
    for(const a of links){const url=new URL(a.dataset.path,root);if(a.dataset.path==='territory.html')url.searchParams.set('revision',approvedRevision);if(a.dataset.path==='islands/nantou-overview-v3.html')url.searchParams.set('revision','links-r4');if(town && a.dataset.path!=='index.html' && location.pathname!==root.pathname && location.pathname!==new URL('index.html',root).pathname)url.searchParams.set('town',town);a.href=url.href;
      const current=location.pathname===url.pathname;
      if(current){a.setAttribute('aria-current','page');a.style.fontWeight='bold';a.style.background='#e1ecd9';}else{a.removeAttribute('aria-current');a.style.fontWeight='normal';a.style.background='transparent';}
    }
  }
  update(); document.body.append(nav);
  const syncDialogs = () => {
    const active = document.querySelector('#viewer:not([hidden]), #detail:not([hidden]), .modal.show, dialog[open], #introOverlay.show');
    nav.style.display = active ? 'none' : 'flex';
  };
  new MutationObserver(syncDialogs).observe(document.body,{subtree:true,attributes:true,attributeFilter:['hidden','class','open']});
  syncDialogs();
  const target = document.getElementById('pTown') || document.getElementById('townName') || document.getElementById('detailTitle');
  if(target)new MutationObserver(()=>{const found=townNames.find(n=>target.textContent.includes(n));if(found){town=found;update();}}).observe(target,{childList:true,subtree:true,characterData:true});
  if(town && document.getElementById('townName')){
    const hint=document.createElement('p');hint.textContent='從食農島返回：'+town+'（保留原攻佔規則，請在地圖選取鄉鎮）';hint.style.cssText='margin-top:55px;text-align:center';document.body.prepend(hint);
  }
})();
