// Role descriptions for villagers — framed by the six guiding principles of Taiwan's 食農教育法 (Art. 4).
// All characters are fictional illustrations; content awaits teacher review.
export const ROLES={
 farmerM:{icon:'👨‍🌾',name:'農夫',tag:'生產者',cls:'pro',stage:'生產',
  does:'照顧土地和作物，看天氣決定什麼時候播種、採收。',you:'吃飯前想一想：這是誰種的？',principle:'支持認同在地農業'},
 farmerW:{icon:'👩‍🌾',name:'農婦',tag:'生產者',cls:'pro',stage:'生產',
  does:'採收、挑選、整理農產，把好品質的食物送出產地。',you:'認識當季蔬果，優先選在地食材。',principle:'深化飲食連結農業'},
 grandpa:{icon:'👴',name:'阿公',tag:'老農・傳承者',cls:'pro',stage:'生產',
  does:'種植與做菜的經驗，一代一代教給年輕人。',you:'問問家中長輩：小時候都吃什麼？',principle:'傳承與創新飲食文化'},
 indigenous:{icon:'🌄',name:'原住民族農友',tag:'山林智慧・生產者',cls:'ind',stage:'生產',
  does:'南投有布農、賽德克、泰雅、邵等族群，順著山林和季節耕作，保有傳統作物與飲食知識。',you:'尊重不同族群的飲食文化，有機會請族人分享。',principle:'傳承與創新飲食文化'},
 processor:{icon:'🍵',name:'製茶師',tag:'加工者',cls:'proc',stage:'加工',
  does:'茶菁要經過萎凋、揉捻、烘焙才會變成茶葉；加工讓食物保存更久、變化更多。',you:'看看包裝上的產地和加工方式。',principle:'傳承與創新飲食文化'},
 vendor:{icon:'🧺',name:'攤商',tag:'販售者',cls:'sell',stage:'販售',
  does:'把農產帶到市場，連結農民和消費者。',you:'買東西時問問：這是哪裡種的？是當季嗎？',principle:'地產地消永續農業'},
 shopperW:{icon:'🛒',name:'媽媽',tag:'消費者',cls:'con',stage:'消費',
  does:'為家人挑選食物，決定餐桌上吃什麼。',you:'吃多少、買多少，不浪費食物。',principle:'珍惜食物減少浪費'},
 shopperM:{icon:'🛍️',name:'爸爸',tag:'消費者',cls:'con',stage:'消費',
  does:'選購在地、當季的食材，支持附近的農民。',you:'跟家人一起逛市場、列購物清單。',principle:'地產地消永續農業'},
 tourist:{icon:'📷',name:'觀光客',tag:'消費者・體驗者',cls:'con',stage:'消費',
  does:'到產地旅行，參加採收和手作體驗。',you:'參加農場體驗，親眼看看食物怎麼長大。',principle:'深化飲食連結農業'},
 kidBoy:{icon:'🎒',name:'小學生',tag:'學習者',cls:'kid',stage:'學習',
  does:'在學校菜園和食農課學種菜、學吃得健康。',you:'每天均衡吃五大類食物。',principle:'培養均衡飲食觀念'},
 kidGirl:{icon:'👧',name:'小朋友',tag:'學習者',cls:'kid',stage:'學習',
  does:'對每道菜都很好奇，想知道它從哪裡來。',you:'把今天吃到的食物畫下來或記下來。',principle:'培養均衡飲食觀念'},
 mayor:{icon:'🌾',name:'食農大使',tag:'推廣者・串連者',cls:'may',stage:'串連',
  does:'帶大家走訪 13 個鄉鎮，介紹食物的故事，把生產者和消費者連在一起。',you:'把你學到的食農故事分享給家人。',principle:'六大推動方針都串起來'}};
export const STAGES=['生產','加工','販售','消費','學習','串連'];
