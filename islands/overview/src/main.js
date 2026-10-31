import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {ISLES,buildIsland,SPREAD,TIER,materials,shapeOf,makeOutline} from './islands.js';
import {Parts} from './parts.js';
import {createVillagers,TYPES} from './people.js';
import {ROLES,STAGES} from './roles.js';
import {rng} from '../../lugu/src/noise.js';
const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const SP=1.12,LIFT=.5,GAP=4.2;
async function boot(){
 const host=$('canvasHost');let content=null;try{content=await (await fetch('../shared/data/content.json')).json()}catch(e){console.warn(e)}
 const low=matchMedia('(pointer:coarse)').matches||(navigator.deviceMemory||8)<=4;
 const renderer=new THREE.WebGLRenderer({antialias:!low,powerPreference:'high-performance',preserveDrawingBuffer:true});renderer.setPixelRatio(Math.min(devicePixelRatio,low?1.25:1.75));renderer.outputColorSpace=THREE.SRGBColorSpace;host.append(renderer.domElement);renderer.domElement.style.touchAction='none';Object.assign(renderer.domElement.style,{width:'100%',height:'100%',display:'block'});
 const scene=new THREE.Scene();
 let skyMat;scene.add(new THREE.Mesh(new THREE.SphereGeometry(500,24,12),skyMat=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{ca:{value:new THREE.Color(1,.95,.84)},cb:{value:new THREE.Color(.66,.86,.97)},cc:{value:new THREE.Color(.42,.70,.93)}},vertexShader:'varying vec3 v;void main(){v=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform vec3 ca,cb,cc;varying vec3 v;void main(){float h=v.y;vec3 k=mix(ca,cb,smoothstep(-.1,.25,h));k=mix(k,cc,smoothstep(.2,.8,h));gl_FragColor=vec4(pow(k,vec3(1./2.2)),1.);}'})));
 const hemi=new THREE.HemisphereLight(0xffffff,0xbfd8a0,2.0);scene.add(hemi);const sun=new THREE.DirectionalLight(0xfff2d8,2.2);sun.position.set(-40,90,60);scene.add(sun);
 const camera=new THREE.PerspectiveCamera(36,1,1,1400);const HOME={p:new THREE.Vector3(),t:new THREE.Vector3()};
 const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.07;controls.minDistance=9;controls.maxDistance=260;controls.maxPolarAngle=Math.PI*.58;controls.target.copy(HOME.t);
 // ---- real-outline layout: township shapes from the official map, area compressed (A^0.52), pushed apart just enough for bridges ----
 const Q=.24,KM=2.05;const SH=ISLES.map(d=>shapeOf(d.town));let cS=0;SH.forEach(s=>{cS=Math.max(cS,6.3/(Math.pow(s.area,-Q)*s.min*.92))});
 const L=ISLES.map((d,i)=>{const s=SH[i],sc=cS*Math.pow(s.area,-Q),O=makeOutline(s,sc);return {x:s.cx*KM,z:s.cy*KM,x0:s.cx*KM,z0:s.cy*KM,O,R:Math.min(12,sc*s.min*.92),Rmax:sc*s.max,sc}});
 const gapDir=(A,B)=>{const dx=B.x-A.x,dz=B.z-A.z,d=Math.hypot(dx,dz)||1,a=Math.atan2(dz,dx);return {d,dx:dx/d,dz:dz/d,need:A.O(a)+B.O(a+Math.PI)}};
 for(let it=0;it<500;it++){let moved=0;for(let i=0;i<L.length;i++)for(let j=i+1;j<L.length;j++){const A=L[i],B=L[j],g=gapDir(A,B),need=g.need+GAP;if(g.d<need){const p=(need-g.d)/2*.5;A.x-=g.dx*p;A.z-=g.dz*p;B.x+=g.dx*p;B.z+=g.dz*p;moved++}}for(const P of L){P.x+=(P.x0-P.x)*.004;P.z+=(P.z0-P.z)*.004}if(!moved&&it>50)break}
 // affine fit: old % map coords -> new world, used for river / lake decorations
 const W=(()=>{let S=[0,0,0,0,0,0],Sx=[0,0,0],Sz=[0,0,0];const rows=ISLES.map((d,i)=>[d.mx,d.my,1,L[i].x,L[i].z]);const A=[[0,0,0],[0,0,0],[0,0,0]];for(const r of rows){for(let p=0;p<3;p++){for(let q=0;q<3;q++)A[p][q]+=r[p]*r[q];Sx[p]+=r[p]*r[3];Sz[p]+=r[p]*r[4]}}
  const solve=(M,v)=>{const a=M.map((r,k)=>[...r,v[k]]);for(let c=0;c<3;c++){let p=c;for(let r=c+1;r<3;r++)if(Math.abs(a[r][c])>Math.abs(a[p][c]))p=r;[a[c],a[p]]=[a[p],a[c]];for(let r=0;r<3;r++)if(r!==c){const f=a[r][c]/a[c][c];for(let k=c;k<4;k++)a[r][k]-=f*a[c][k]}}return a.map((r,k)=>r[3]/r[k])};
  const cx=solve(A,Sx),cz=solve(A,Sz);return (mx,my)=>[cx[0]*mx+cx[1]*my+cx[2],cz[0]*mx+cz[1]*my+cz[2]]})();
 let setHome=()=>{};{let mnx=1e9,mxx=-1e9,mnz=1e9,mxz=-1e9;for(const P of L){for(let k=0;k<36;k++){const a=k/36*Math.PI*2,r=P.O(a),x=P.x+Math.cos(a)*r,z=P.z+Math.sin(a)*r;mnx=Math.min(mnx,x);mxx=Math.max(mxx,x);mnz=Math.min(mnz,z);mxz=Math.max(mxz,z)}}const cx=(mnx+mxx)/2,cz=(mnz+mxz)/2,ext=Math.max(mxx-mnx,mxz-mnz)/2*1.1;setHome=()=>{const asp=Math.max(1,host.clientWidth)/Math.max(1,host.clientHeight),wide=asp>1.8,sx=wide?-3:-10,k=wide?1.68:1.75,tz=wide?cz-1:cz-5;HOME.t.set(cx+sx,0,tz);HOME.p.set(cx+sx,ext*k,tz+ext*k*1.29)};setHome();camera.position.copy(HOME.p);controls.target.copy(HOME.t)}
 let plateMat;
 // ---- county plate (soft map base) + 濁水溪 ----
 const toon=materials().toon;
 {const pts=[];for(const P of L)for(let k=0;k<48;k++){const a=k/48*Math.PI*2,r=P.O(a)+7;pts.push([P.x+Math.cos(a)*r,P.z+Math.sin(a)*r])}pts.sort((a,b)=>a[0]-b[0]||a[1]-b[1]);const cr=(o,a,b)=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]);const lo=[],hi=[];for(const p of pts){while(lo.length>1&&cr(lo[lo.length-2],lo[lo.length-1],p)<=0)lo.pop();lo.push(p)}for(const p of pts.slice().reverse()){while(hi.length>1&&cr(hi[hi.length-2],hi[hi.length-1],p)<=0)hi.pop();hi.push(p)}const poly=lo.slice(0,-1).concat(hi.slice(0,-1)).map(p=>[p[0],-p[1]]);const sh=new THREE.Shape(poly.map(p=>new THREE.Vector2(p[0],p[1])));
  const g=new THREE.ExtrudeGeometry(sh,{depth:1.6,bevelEnabled:true,bevelThickness:.6,bevelSize:1.2,bevelSegments:2,curveSegments:8});g.rotateX(Math.PI/2);g.translate(0,-24,0);
  plateMat=new THREE.MeshToonMaterial({color:0xfff6dc,gradientMap:toon.gradientMap});const m=new THREE.Mesh(g,plateMat);scene.add(m);
  // river ribbon on plate
  const rv=new THREE.CatmullRomCurve3([[84,24],[72,29],[62,33],[52,31],[43,31],[33,35],[22,37],[8,36]].map(p=>{const w=W(...p);return new THREE.Vector3(w[0],-22.3,w[1])})).getPoints(80);
  const pos=[],idx=[];for(let i=0;i<rv.length;i++){const p=rv[i],q=rv[Math.min(rv.length-1,i+1)],o=rv[Math.max(0,i-1)];let tx=q.x-o.x,tz=q.z-o.z;const l=Math.hypot(tx,tz)||1;tx/=l;tz/=l;const w=1.4+i*.02;pos.push(p.x-tz*w,p.y,p.z+tx*w,p.x+tz*w,p.y,p.z-tx*w)}for(let i=0;i<rv.length-1;i++)idx.push(i*2,i*2+1,i*2+2,i*2+1,i*2+3,i*2+2);
  const rg=new THREE.BufferGeometry();rg.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));rg.setIndex(idx);rg.computeVertexNormals();scene.add(new THREE.Mesh(rg,new THREE.MeshBasicMaterial({color:0x7fd0f0,side:THREE.DoubleSide})));
  // sun-moon lake blob + 玉山 hint, drawn on the plate
  const lk=new THREE.Mesh(new THREE.CylinderGeometry(2.6,2.6,.1,20),new THREE.MeshBasicMaterial({color:0x7fd0f0}));const lw=W(64.5,50);lk.position.set(lw[0]+4,-22.3,lw[1]-3);scene.add(lk)}
 const pairs=[];for(let i=0;i<L.length;i++)for(let j=i+1;j<L.length;j++){const g=gapDir(L[i],L[j]);pairs.push({i,j,gap:g.d-g.need})}pairs.sort((a,b)=>a.gap-b.gap);
 const par=L.map((_,i)=>i),fd=i=>par[i]===i?i:(par[i]=fd(par[i]));const E=[],deg=L.map(()=>0);
 const segX=(p,q,r,s)=>{const o=(a,b,c)=>Math.sign((b.x-a.x)*(c.z-a.z)-(b.z-a.z)*(c.x-a.x));return o(p,q,r)!==o(p,q,s)&&o(r,s,p)!==o(r,s,q)};
 const angOf=(i,j)=>Math.atan2(L[j].z-L[i].z,L[j].x-L[i].x);const angOk=(i,a,minA=.75)=>E.every(e=>{if(e.i!==i&&e.j!==i)return true;const b=e.i===i?angOf(i,e.j):angOf(i,e.i);let d=Math.abs(a-b)%(Math.PI*2);d=Math.min(d,Math.PI*2-d);return d>minA});
 const crosses=(i,j)=>E.some(e=>e.i!==i&&e.i!==j&&e.j!==i&&e.j!==j&&segX(L[i],L[j],L[e.i],L[e.j]));
 // bridges follow REAL township borders (adjacency from the official boundary data); a pair is skipped only if its bridge would cross another
 const ADJ=[["南投市","草屯鎮"],["南投市","名間鄉"],["南投市","中寮鄉"],["埔里鎮","魚池鄉"],["埔里鎮","國姓鄉"],["埔里鎮","仁愛鄉"],["草屯鎮","中寮鄉"],["草屯鎮","國姓鄉"],["竹山鎮","集集鎮"],["竹山鎮","名間鄉"],["竹山鎮","鹿谷鄉"],["竹山鎮","信義鄉"],["集集鎮","名間鄉"],["集集鎮","鹿谷鄉"],["集集鎮","中寮鄉"],["集集鎮","水里鄉"],["名間鄉","中寮鄉"],["鹿谷鄉","水里鄉"],["鹿谷鄉","信義鄉"],["中寮鄉","國姓鄉"],["中寮鄉","水里鄉"],["魚池鄉","國姓鄉"],["魚池鄉","水里鄉"],["魚池鄉","信義鄉"],["魚池鄉","仁愛鄉"],["國姓鄉","水里鄉"],["國姓鄉","仁愛鄉"],["水里鄉","信義鄉"],["信義鄉","仁愛鄉"]];
 const ti=n=>ISLES.findIndex(d=>d.town===n);const isAdj=(i,j)=>ADJ.some(([a,b])=>(ti(a)===i&&ti(b)===j)||(ti(a)===j&&ti(b)===i));
 const adjPairs=pairs.filter(p=>isAdj(p.i,p.j));const addE=p=>{E.push(p);deg[p.i]++;deg[p.j]++;par[fd(p.i)]=fd(p.j)};
 const must=[['仁愛鄉','信義鄉']];for(const [a,b] of must){const p=adjPairs.find(p=>(p.i===ti(a)&&p.j===ti(b))||(p.i===ti(b)&&p.j===ti(a)));if(p)addE(p)}
 for(const p of adjPairs){if(E.includes(p))continue;if(!crosses(p.i,p.j)&&angOk(p.i,angOf(p.i,p.j),.42)&&angOk(p.j,angOf(p.j,p.i),.42))addE(p)}
 for(const p of adjPairs){if(!E.includes(p)&&fd(p.i)!==fd(p.j))addE(p)}
 const skipped=adjPairs.filter(p=>!E.includes(p)).map(p=>ISLES[p.i].town+'–'+ISLES[p.j].town);
 const bridgeAng=L.map((_,i)=>E.filter(e=>e.i===i||e.j===i).map(e=>e.i===i?angOf(i,e.j):angOf(i,e.i)));
 // ---- islands ----
 const isl=[],all=[];
 ISLES.forEach((def,i)=>{const c=content?.islands.find(x=>x.town===def.town);const titles=c?c.cards.map(k=>k.title):Array(8).fill('稻米');const r=buildIsland(def,titles,i,{bridgeAngles:bridgeAng[i],O:L[i].O,R:L[i].R});const x=L[i].x,z=L[i].z,y=def.lift*LIFT;r.group.position.set(x,y,z);scene.add(r.group);const o={def,c,r,x,y,z,phase:i*1.3,hover:0};isl.push(o);r.meshes.forEach(m=>all.push(m))});
 // ---- rope bridges + walking graph ----
 const nodes=[],edges=[];const node=(pos,extra)=>{const n={pos,edges:[],...extra};nodes.push(n);return n};
 const edge=(a,b,pts,bridge=false)=>{const cum=[0];for(let k=1;k<pts.length;k++)cum.push(cum[k-1]+pts[k].distanceTo(pts[k-1]));const e={a,b,pts,cum,len:cum[cum.length-1],bridge};a.edges.push(e);b.edges.push(e);edges.push(e);return e};
 const endNode=[];isl.forEach((o,i)=>{const r=o.r,hub=node(new THREE.Vector3(o.x+r.hub[0],o.y+r.gy(r.hub[0],r.hub[1]),o.z+r.hub[1]),{hub:true,island:i});endNode[i]=r.ends.map(e=>{const n=node(new THREE.Vector3(o.x+e.x,o.y+r.gy(e.x,e.z)+.04,o.z+e.z),{island:i,ang:e.ang});
  const pts=[];for(let k=0;k<=14;k++){const t=k/14,lx=e.x+(r.hub[0]-e.x)*t,lz=e.z+(r.hub[1]-e.z)*t;pts.push(new THREE.Vector3(o.x+lx,o.y+r.gy(lx,lz)+.03,o.z+lz))}edge(n,hub,pts);return n})});
 const BP=new Parts();const angIdx=(i,a)=>endNode[i].findIndex(n=>Math.abs(n.ang-a)<1e-6);
 for(const e of E){const na=endNode[e.i][angIdx(e.i,angOf(e.i,e.j))],nb=endNode[e.j][angIdx(e.j,angOf(e.j,e.i))];if(!na||!nb)continue;
  const p0=na.pos.clone(),p1=nb.pos.clone(),hd=Math.hypot(p1.x-p0.x,p1.z-p0.z),N=Math.max(8,Math.round(hd/.3)),sag=Math.min(.6,hd*.06);const deck=[];
  for(let k=0;k<=N;k++){const t=k/N;deck.push(new THREE.Vector3(p0.x+(p1.x-p0.x)*t,p0.y+(p1.y-p0.y)*t-sag*Math.sin(Math.PI*t),p0.z+(p1.z-p0.z)*t))}
  const dx=(p1.x-p0.x)/hd,dz=(p1.z-p0.z)/hd,nx=-dz,nz=dx,ry=Math.atan2(dx,dz);
  for(let k=0;k<N;k++){const a=deck[k],b=deck[k+1],mm=a.clone().add(b).multiplyScalar(.5),pitch=-Math.atan2(b.y-a.y,Math.hypot(b.x-a.x,b.z-a.z));BP.boxc(k%2?0xc89560:0xb07e4a,mm.x,mm.y-.03,mm.z,1.15,.07,.26,ry,pitch)}
  for(const s of[-1,1]){const rope=deck.map((p,k)=>new THREE.Vector3(p.x+nx*s*.6,p.y+.78+Math.sin(Math.PI*k/N)*.12,p.z+nz*s*.6));BP.geo(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rope),N*2,.035,5),0xd8b070);
   const low=deck.map((p,k)=>new THREE.Vector3(p.x+nx*s*.6,p.y+.36+Math.sin(Math.PI*k/N)*.06,p.z+nz*s*.6));BP.geo(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(low),N*2,.025,5),0xd8b070);
   for(let k=0;k<=N;k+=3){const p=deck[k];BP.cyl(0xa8754a,p.x+nx*s*.6,p.y-.05,p.z+nz*s*.6,.025,.025,.8+Math.sin(Math.PI*k/N)*.12,5)}
   for(const p of[p0,p1]){BP.cyl(0x8a5a36,p.x+nx*s*.62,p.y-.25,p.z+nz*s*.62,.09,.08,1.25,8);BP.sph(0xe8483a,p.x+nx*s*.62,p.y+1.02,p.z+nz*s*.62,.1,1,1,1,8)}}
  edge(na,nb,deck.map(p=>p.clone().setY(p.y+.01)),true)}
 const bridgeMesh=new THREE.Mesh(BP.merge(),materials().toon);scene.add(bridgeMesh);
 // ---- distant mountain ranges ringing the archipelago (3 layers, hazier the farther, snow on the tallest) ----
 const mtnLayers=[];{let cx=0,cz=0;for(const P of L){cx+=P.x/L.length;cz+=P.z/L.length}let ms=17;const mr=()=>((ms=Math.imul(ms^ms>>>15,2246822507)+12345|0)>>>0)/4294967296;
  const LAY=[{r:350,h:[26,58],base:0x5f9a68,haze:.42,n:36},{r:405,h:[44,92],base:0x6f9290,haze:.58,n:28},{r:465,h:[70,135],base:0x8aa0b4,haze:.7,n:22}];
  for(const Ly of LAY){const peaks=[];for(let k=0;k<Ly.n;k++)peaks.push({a:k/Ly.n*Math.PI*2+mr()*.12,h:Ly.h[0]+mr()*(Ly.h[1]-Ly.h[0]),w:.12+mr()*.16});
   const S=720,pos=[],col=[],idx=[];const hAt=a=>{let h=8;for(const p of peaks){let d=Math.abs(((a-p.a)%(Math.PI*2)+Math.PI*3)%(Math.PI*2)-Math.PI);const t=Math.max(0,1-d/p.w);h=Math.max(h,p.h*Math.pow(t,.9)+3*Math.sin(a*60+p.a*9)*t)}return h};
   const y0=-40;for(let k=0;k<=S;k++){const a=k/S*Math.PI*2,h=hAt(a),x=cx+Math.cos(a)*Ly.r,z=cz+Math.sin(a)*Ly.r;const sn=Ly.snow&&h>Ly.h[1]*Ly.snow;
    pos.push(x,y0,z, x,h*.55,z, x,h,z);const c0=1.18,c1=.9,c2=sn?1.3:.96;col.push(c0,c0,c0,c1,c1,c1,c2,c2,c2)}
   for(let k=0;k<S;k++){const a=k*3,b=a+3;idx.push(a,b,a+1,a+1,b,b+1,a+1,b+1,a+2,a+2,b+1,b+2)}
   const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));g.setIndex(idx);
   const mt=new THREE.MeshBasicMaterial({vertexColors:true,side:THREE.DoubleSide,fog:false});const me=new THREE.Mesh(g,mt);me.renderOrder=-1;scene.add(me);mtnLayers.push({mt,base:new THREE.Color(Ly.base),haze:Ly.haze})}}
 // ---- street lamps (plazas + bridge heads), landmark glows, stars ----
 const LP=new Parts(),bulbPos=[];const glowTex=(()=>{const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d'),g=x.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'rgba(255,240,190,1)');g.addColorStop(.25,'rgba(255,210,120,.55)');g.addColorStop(1,'rgba(255,190,90,0)');x.fillStyle=g;x.fillRect(0,0,64,64);return new THREE.CanvasTexture(c)})();
 const lamp=(x,y,z)=>{LP.cyl(0x4a4038,x,y,z,.07,.06,1.5,6);LP.cyl(0x3a3028,x,y+1.48,z,.16,.16,.05,8);LP.cone(0x3a3028,x,y+1.78,z,.2,.18,8);bulbPos.push(new THREE.Vector3(x,y+1.62,z))};
 for(const n of nodes){if(n.hub){const o=isl[n.island];for(let k=0;k<3;k++){const a=k/3*Math.PI*2+n.island,x=n.pos.x+Math.cos(a)*1.1,z=n.pos.z+Math.sin(a)*1.1;lamp(x,o.y+o.r.gy(x-o.x,z-o.z),z)}}else if(n.ang!==undefined){const o=isl[n.island],x=n.pos.x-Math.cos(n.ang)*.9+Math.sin(n.ang)*.9,z=n.pos.z-Math.sin(n.ang)*.9-Math.cos(n.ang)*.9;lamp(x,o.y+o.r.gy(x-o.x,z-o.z),z)}}
 scene.add(new THREE.Mesh(LP.merge(),materials().toon));
 const bulbMat=new THREE.MeshBasicMaterial({color:0xd8d0b8});const bulbs=new THREE.InstancedMesh(new THREE.SphereGeometry(.13,10,8),bulbMat,bulbPos.length);bulbPos.forEach((p,k)=>bulbs.setMatrixAt(k,new THREE.Matrix4().makeTranslation(p.x,p.y,p.z)));scene.add(bulbs);
 const glows=[],glowMat=new THREE.SpriteMaterial({map:glowTex,blending:THREE.AdditiveBlending,depthWrite:false,transparent:true,opacity:0});
 for(const p of bulbPos){const s=new THREE.Sprite(glowMat);s.position.copy(p);s.scale.setScalar(3.4);scene.add(s);glows.push(s)}
 const winMat=new THREE.SpriteMaterial({map:glowTex,blending:THREE.AdditiveBlending,depthWrite:false,transparent:true,opacity:0,color:0xffc070});
 isl.forEach(o=>{const [lx,ly,lz]=o.r.lmPos;const s=new THREE.Sprite(winMat);s.position.set(o.x+lx,o.y+ly-1.6,o.z+lz);s.scale.setScalar(5);scene.add(s)});
 const stars=(()=>{const n=900,pos=new Float32Array(n*3);let ss=5;const r=()=>((ss=Math.imul(ss^ss>>>15,2246822507)+12345|0)>>>0)/4294967296;for(let k=0;k<n;k++){const th=r()*Math.PI*2,ph=Math.acos(r()*.9+.08),R=450;pos.set([Math.cos(th)*Math.sin(ph)*R,Math.cos(ph)*R,Math.sin(th)*Math.sin(ph)*R],k*3)}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));const pm=new THREE.PointsMaterial({color:0xffffff,size:2.2,sizeAttenuation:false,transparent:true,opacity:0,depthWrite:false});const pt=new THREE.Points(g,pm);scene.add(pt);return pm})();
 const moon=new THREE.Mesh(new THREE.SphereGeometry(9,20,14),new THREE.MeshBasicMaterial({color:0xfff6d8,transparent:true,opacity:0}));moon.position.set(160,180,-320);scene.add(moon);
 const C=h=>new THREE.Color(h);const TOD={
  day:{a:C(0xfff2d6),b:C(0xa8dbf7),c:C(0x6bb3ed),hs:C(0xffffff),hg:C(0xbfd8a0),hi:2.0,sc:C(0xfff2d8),si:2.2,sp:[-40,90,60],pl:C(0xfff6dc),cl:C(0xffffff),lt:0,st:0,exp:1},
  noon:{a:C(0xfff8e6),b:C(0x8cd2ff),c:C(0x3f94f2),hs:C(0xffffff),hg:C(0xd0e6a8),hi:2.35,sc:C(0xffffff),si:3.3,sp:[5,140,25],pl:C(0xfffae6),cl:C(0xffffff),lt:0,st:0,exp:1.08},
  dusk:{a:C(0xffa860),b:C(0xf08c8c),c:C(0x5a4f9a),hs:C(0xffb890),hg:C(0x5a4048),hi:1.05,sc:C(0xff9248),si:2.1,sp:[-110,26,30],pl:C(0xf2cfae),cl:C(0xffd2c2),lt:.6,st:.15,exp:1},
  night:{a:C(0x26305a),b:C(0x141d40),c:C(0x070b1e),hs:C(0x5060a8),hg:C(0x101828),hi:.42,sc:C(0x9ab4ff),si:.38,sp:[60,90,-40],pl:C(0x343e62),cl:C(0x7a86b4),lt:1,st:1,exp:1}};
 const KEYS=[[0,'night'],[5,'night'],[6.5,'dusk'],[8,'day'],[11,'noon'],[14,'noon'],[16,'day'],[17.6,'dusk'],[19,'night'],[24,'night']];
 const blendAt=h=>{h=((h%24)+24)%24;let i=0;while(i<KEYS.length-2&&KEYS[i+1][0]<=h)i++;const [h0,k0]=KEYS[i],[h1,k1]=KEYS[i+1],t=(h-h0)/(h1-h0||1);return [TOD[k0],TOD[k1],t]};
 const tgt={a:new THREE.Color(),b:new THREE.Color(),c:new THREE.Color(),hs:new THREE.Color(),hg:new THREE.Color(),sc:new THREE.Color(),pl:new THREE.Color(),cl:new THREE.Color(),sp:new THREE.Vector3()};
 let hour=9,playing=false;const HOURS_PER_SEC=.5;
 const label=h=>h<5||h>=19?'🌙 晚上':h<7.2?'🌅 清晨':h<10.5?'☀️ 白天':h<14.5?'🌞 大太陽':h<16.8?'☀️ 白天':'🌇 傍晚';
 let todKey='day';const tod={...TOD.day,a:TOD.day.a.clone(),b:TOD.day.b.clone(),c:TOD.day.c.clone(),hs:TOD.day.hs.clone(),hg:TOD.day.hg.clone(),sc:TOD.day.sc.clone(),pl:TOD.day.pl.clone(),cl:TOD.day.cl.clone(),sp:new THREE.Vector3(-40,90,60)};
 const cloudMats=new Set();const bulbOff=C(0xd8d0b8),bulbOn=C(0xffe08a);
 function applyTod(k){const [A,B,t]=blendAt(hour);for(const f of['a','b','c','hs','hg','sc','pl','cl'])tgt[f].copy(A[f]).lerp(B[f],t);for(const f of['hi','si','lt','st','exp'])tgt[f]=A[f]+(B[f]-A[f])*t;
  {const ang=(hour-6)/12*Math.PI;const up=Math.sin(ang);tgt.sp.set(-Math.cos(ang)*110,Math.max(18,up*120),35);if(hour<5.5||hour>18.5)tgt.sp.set(60,90,-40)}
  const T=tgt;tod.a.lerp(T.a,k);tod.b.lerp(T.b,k);tod.c.lerp(T.c,k);tod.hs.lerp(T.hs,k);tod.hg.lerp(T.hg,k);tod.sc.lerp(T.sc,k);tod.pl.lerp(T.pl,k);tod.cl.lerp(T.cl,k);tod.sp.lerp(T.sp,k);for(const f of['hi','si','lt','st','exp'])tod[f]+=(T[f]-tod[f])*k;
  skyMat.uniforms.ca.value.copy(tod.a);skyMat.uniforms.cb.value.copy(tod.b);skyMat.uniforms.cc.value.copy(tod.c);hemi.color.copy(tod.hs);hemi.groundColor.copy(tod.hg);hemi.intensity=tod.hi;sun.color.copy(tod.sc);sun.intensity=tod.si;sun.position.copy(tod.sp);plateMat.color.copy(tod.pl);
  materials().cloud.color.copy(tod.cl);cloudMats.forEach(mt=>mt.color.copy(tod.cl));glowMat.opacity=tod.lt;winMat.opacity=tod.lt*.85;bulbMat.color.copy(bulbOff).lerp(bulbOn,tod.lt);stars.opacity=tod.st;moon.material.opacity=tod.st;renderer.toneMappingExposure=tod.exp;for(const ml of mtnLayers){ml.mt.color.copy(ml.base).lerp(tod.b,ml.haze).multiplyScalar(.55+.45*(1-tod.st));}if(typeof season!=='undefined'&&season==='winter'){skyMat.uniforms.ca.value.lerp(new THREE.Color(0xdfe6ee),.45);skyMat.uniforms.cb.value.lerp(new THREE.Color(0xb8c6d6),.4)}}
 const PRESET={day:9,noon:12.5,dusk:17.8,night:21};const tl=$('tlRange'),tlClock=$('tlClock'),tlPlay=$('tlPlay');
 const showTime=()=>{const h=Math.floor(hour),mi=Math.floor((hour-h)*60);tlClock.innerHTML=`<b>${String(h).padStart(2,'0')}:${String(mi).padStart(2,'0')}</b> ${label(hour)}`;tl.value=hour.toFixed(2);tl.style.setProperty('--p',(hour/24*100).toFixed(1)+'%');const near=Object.entries(PRESET).find(([k,v])=>label(v)===label(hour))?.[0];document.querySelectorAll('[data-tod]').forEach(b=>b.classList.toggle('on',b.dataset.tod===near))};
 const setPlay=p=>{playing=p;tlPlay.textContent=p?'⏸':'▶';tlPlay.setAttribute('aria-label',p?'暫停時間':'自動播放時間');tlPlay.classList.toggle('on',p)};
 tl.oninput=()=>{hour=+tl.value;setPlay(false);showTime()};tlPlay.onclick=()=>setPlay(!playing);
 document.querySelectorAll('[data-tod]').forEach(b=>b.onclick=()=>{hour=PRESET[b.dataset.tod];setPlay(false);showTime()});
 $('tlSpeed').onchange=e=>{tlSpeed=+e.target.value};let tlSpeed=1;showTime();setPlay(true);
 window.__tl={get hour(){return hour},set hour(v){hour=v;showTime()},setPlay};
 // ---- island green-depth control (recolours ground vertex colours at runtime) ----
 // ---- ground & foliage colour sets (green slider + seasons) ----
 const collect=(geo,useNormal,highY=1e9)=>{const col=geo.attributes.color,pos=geo.attributes.position,nr=geo.attributes.normal,idx=[],hsl=[],ys=[],ups=[],gr=[],hh={},tc=new THREE.Color();for(let k=0;k<col.count;k++){tc.setRGB(col.getX(k),col.getY(k),col.getZ(k));tc.getHSL(hh);const g=hh.h>.16&&hh.h<.45&&hh.s>.18;if(g||pos.getY(k)>highY){idx.push(k);hsl.push(hh.h,hh.s,hh.l);ys.push(pos.getY(k));ups.push(useNormal&&nr?nr.getY(k):1);gr.push(g?1:0)}}return {col,idx,hsl,ys,ups,gr}};
 const greenSets=isl.map((o,i)=>({i,G:collect(o.r.meshes[0].geometry,false,i===0?2.4:1e9),F:collect(o.r.meshes[1].geometry,true,i===0?3.2:1e9)}));
 let greenV=.6,season='summer';
 const SEASON={spring:{dh:-.01,ds:1.05,dl:1.12,au:0},summer:{dh:0,ds:1.1,dl:1,au:0},autumn:{dh:-.12,ds:.95,dl:1.05,au:.55},winter:{dh:-.04,ds:.55,dl:1.02,au:.15}};
 const snowAt=(i,y,up)=>{if(season!=='winter'||i!==0)return 0;return Math.min(.95,Math.max(0,(y-2.2)/1.4))*(.4+.6*Math.max(0,up))};
 const applyGround=()=>{const tc=new THREE.Color(),wh=new THREE.Color(0xf4f8ff),v=greenV,S=SEASON[season];for(const {i,G,F} of greenSets){for(const [set,foliage] of[[G,false],[F,true]]){for(let n=0;n<set.idx.length;n++){let h=set.hsl[n*3],s=set.hsl[n*3+1],l=set.hsl[n*3+2];if(!set.gr[n]){tc.setHSL(h,s,l);const sn=snowAt(i,set.ys[n],set.ups[n]);if(sn>0)tc.lerp(wh,sn);set.col.setXYZ(set.idx[n],tc.r,tc.g,tc.b);continue}if(!foliage){h=h+(.3-h)*.25*v;s=Math.min(.85,s*(1+.12*v));l=l*(1-.58*v)}
   const au=foliage?S.au*((n*7919%13)/13):S.au;tc.setHSL(h+S.dh*(foliage?.6+au:1)-.0*au,Math.min(.9,s*S.ds),Math.min(.92,l*S.dl));const sn=snowAt(i,set.ys[n],set.ups[n]);if(sn>0)tc.lerp(wh,sn);set.col.setXYZ(set.idx[n],tc.r,tc.g,tc.b)}set.col.needsUpdate=true}}};
 const applyGreen=v=>{greenV=v;applyGround()};
 {let gv=.6;try{const s=localStorage.getItem('nt-green');if(s!==null)gv=+s}catch(e){}const gr=$('greenRange');if(gr){gr.value=gv;gr.oninput=()=>{applyGreen(+gr.value);try{localStorage.setItem('nt-green',gr.value)}catch(e){}}}applyGreen(gv)}
 const villagers=createVillagers(scene,{nodes,edges},materials().toon,{perIsland:2,visitors:30,extra:[...[0,0,12,12,6].map(i=>({type:'indigenous',island:i})),...[10,6,2,3,9,4].map(i=>({type:'processor',island:i})),...[3,2,8,5].map(i=>({type:'vendor',island:i}))]});
 // ---- season particles: spring petals, autumn leaves, winter snow (heavy over 仁愛/合歡山, light on 信義 peak) ----
 const flakeTex=(()=>{const c=document.createElement('canvas');c.width=c.height=32;const x=c.getContext('2d'),g=x.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.5,'rgba(255,255,255,.7)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,32,32);return new THREE.CanvasTexture(c)})();
 const mkField=(n,box,col,size,fall,drift)=>{const pos=new Float32Array(n*3),ph=new Float32Array(n);let s=n*13;const r=()=>((s=Math.imul(s^s>>>15,2246822507)+12345|0)>>>0)/4294967296;for(let k=0;k<n;k++){pos[k*3]=box.x0+r()*(box.x1-box.x0);pos[k*3+1]=box.y0+r()*(box.y1-box.y0);pos[k*3+2]=box.z0+r()*(box.z1-box.z0);ph[k]=r()*6.28}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));const mt=new THREE.PointsMaterial({map:flakeTex,color:col,size,transparent:true,depthWrite:false,opacity:0,sizeAttenuation:true});const p=new THREE.Points(g,mt);p.frustumCulled=false;scene.add(p);return {p,mt,pos,ph,box,fall,drift,n}};
 const boxOf=(i,pad,y0,y1)=>{const P=L[i];let r=0;for(let k=0;k<36;k++)r=Math.max(r,P.O(k/36*Math.PI*2));return {x0:P.x-r-pad,x1:P.x+r+pad,z0:P.z-r-pad,z1:P.z+r+pad,y0:isl[i].y+y0,y1:isl[i].y+y1}};
 let allBox;{let a=1e9,b=-1e9,c=1e9,d=-1e9;for(const P of L){a=Math.min(a,P.x-P.Rmax);b=Math.max(b,P.x+P.Rmax);c=Math.min(c,P.z-P.Rmax);d=Math.max(d,P.z+P.Rmax)}allBox={x0:a,x1:b,z0:c,z1:d,y0:-2,y1:26}}
 const fields={winter:[mkField(3200,{x0:L[0].x+3.4*1-14,x1:L[0].x+3.4+14,z0:L[0].z-4.4-12,z1:L[0].z-4.4+12,y0:isl[0].y+1.5,y1:isl[0].y+26},0xffffff,.55,2.2,1.0)],spring:[],autumn:[],summer:[]};
 const coldClouds=[];{const P=L[0];for(let k=0;k<7;k++){const a=k/7*Math.PI*2,r=7+(k%3)*3;const C=new Parts();C.sph(0xffffff,0,0,0,4.5,1.4,.7,1.1,14);C.sph(0xffffff,3.5,-.3,1,3.4,1.3,.7,1,12);C.sph(0xffffff,-3.4,-.2,-.8,3.2,1.3,.7,1,12);const mt=new THREE.MeshToonMaterial({color:0x9aa4b4,gradientMap:materials().toon.gradientMap,transparent:true,opacity:0,depthWrite:false});const me=new THREE.Mesh(C.merge(),mt);me.position.set(P.x+3.4+Math.cos(a)*r,isl[0].y+24+(k%2)*3,P.z-4.4+Math.sin(a)*r);scene.add(me);coldClouds.push(mt)}}
 const updateSeason=(dt,now)=>{for(const [k,arr] of Object.entries(fields))for(const F of arr){const burst=((now/1000)%45)<25;const on=k===season&&burst;F.mt.opacity+=((on?.95:0)-F.mt.opacity)*Math.min(1,dt*.8);F.p.visible=F.mt.opacity>.02;if(!F.p.visible||reduce)continue;const P=F.pos,B=F.box;for(let n=0;n<F.n;n++){const j=n*3;P[j+1]-=F.fall*dt*(.7+.3*Math.sin(F.ph[n]));P[j]+=Math.sin(now*.001+F.ph[n])*F.drift*dt;P[j+2]+=Math.cos(now*.0008+F.ph[n])*F.drift*dt*.6;if(P[j+1]<B.y0){P[j+1]=B.y1;P[j]=B.x0+((n*9301+now)%1000)/1000*(B.x1-B.x0);P[j+2]=B.z0+((n*4999+now*.7)%1000)/1000*(B.z1-B.z0)}}F.p.geometry.attributes.position.needsUpdate=true}
  for(const mt of coldClouds)mt.opacity+=((season==='winter'?.92:0)-mt.opacity)*Math.min(1,dt*1.5)};
 const toast=$('seasonToast');let toastT=0;
 const SNAME={spring:'🌸 春天：萬物發芽，茶園冒新芽',summer:'☀️ 夏天：綠意最濃，水果盛產',autumn:'🍁 秋天：稻穀轉黃，準備收成',winter:'❄️ 寒流來襲！合歡山偶爾飄雪'};
 const setSeason=k=>{season=k;applyGround();document.querySelectorAll('[data-season]').forEach(b=>b.classList.toggle('on',b.dataset.season===k));toast.textContent=SNAME[k];toast.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>toast.classList.remove('show'),3800)};
 document.querySelectorAll('[data-season]').forEach(b=>b.onclick=()=>{setSeason(b.dataset.season);if(b.dataset.season==='winter'){fly(new THREE.Vector3(L[0].x+10,isl[0].y+38,L[0].z+62),new THREE.Vector3(L[0].x,isl[0].y+3,L[0].z))}});
 window.__season=setSeason;
 const roleCard=$('roleCard');const esc2=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
 const roleHTML=(id,big)=>{const r=ROLES[id];return `<div class="rc ${r.cls}"><div class="rh"><span class="ri">${r.icon}</span><div><b>${esc2(r.name)}</b><small>${esc2(r.tag)}</small></div></div><p class="stage">${STAGES.map(s=>`<span class="${s===r.stage?'on':''}">${s}</span>`).join('<i>→</i>')}</p><p><em>我在做什麼</em>${esc2(r.does)}</p><p><em>你可以這樣做</em>${esc2(r.you)}</p><p class="law">📘 食農教育法推動方針：${esc2(r.principle)}</p></div>`};
 const showRole=id=>{roleCard.innerHTML=`<button class="x" aria-label="關閉">✕</button>${roleHTML(id)}<p class="note">角色為示意，非真實人物；說明內容待教師審閱。</p>`;roleCard.hidden=false;roleCard.querySelector('.x').onclick=()=>roleCard.hidden=true};
 $('peopleBtn').onclick=()=>{roleCard.innerHTML=`<button class="x" aria-label="關閉">✕</button><h3>認識島上的人：從土地到餐桌</h3><div class="rgrid">${Object.keys(ROLES).map(id=>roleHTML(id)).join('')}</div><p class="note">角色為示意，非真實人物；說明內容待教師審閱。推動方針依《食農教育法》第 4 條。</p>`;roleCard.hidden=false;roleCard.querySelector('.x').onclick=()=>roleCard.hidden=true};
 for(const w of villagers.walkers){const id=TYPES[w.t].id,r=ROLES[id];if(!r)continue;const el=document.createElement('button');el.className='vlab '+r.cls;el.innerHTML=`<b>${r.icon} ${esc2(r.name)}</b><i>${esc2(r.tag)}</i>`;el.style.display='none';el.onclick=e=>{e.stopPropagation();showRole(id)};host.append(el);w.lab=el}

 // ---- sky clouds: a ring above and around the archipelago + big puffs far on the horizon (islands stay unblocked) ----
 const skyClouds=[],skyCenter=new THREE.Vector3();let skyExt=40;{let cx=0,cz=0;for(const P of L){cx+=P.x/L.length;cz+=P.z/L.length}let ext=0;for(const P of L)ext=Math.max(ext,Math.hypot(P.x-cx,P.z-cz)+P.Rmax*.8);let cs=91;const crn=()=>((cs=Math.imul(cs^cs>>>15,2246822507)+12345|0)>>>0)/4294967296;
  const puff=(x,y,z,s,op)=>{const P=new Parts(),n=6+Math.floor(crn()*4);P.sph(0xffffff,0,0,0,s*.9,1.25,.75,1,14);for(let k=0;k<n;k++){const a=k/n*Math.PI*2+crn()*.6,d=(.55+crn()*.5)*s;P.sph(k%3?0xffffff:0xf7fbff,Math.cos(a)*d*1.35,crn()*.35*s,Math.sin(a)*d*.75,s*(.5+crn()*.35),1,.78,1,12)}P.sph(0xeef3f8,0,-.18*s,0,s*1.3,1.5,.25,.85,14);
   const mt=materials().cloud.clone();mt.transparent=true;mt.depthWrite=false;mt.opacity=op;const m=new THREE.Mesh(P.merge(),mt);m.position.set(x,y,z);m.rotation.y=crn()*Math.PI;m.renderOrder=2;scene.add(m);skyClouds.push({m,x0:x,z0:z,op,sp:.4+crn()*.6,ph:crn()*6});cloudMats.add(mt)};skyCenter.set(cx,0,cz);skyExt=ext;
  for(let k=0;k<16;k++){const a=k/16*Math.PI*2+crn()*.25,r=ext+12+crn()*14;puff(cx+Math.cos(a)*r,12+crn()*9,cz+Math.sin(a)*r*.9,2.4+crn()*2.2,.95)}
  for(let k=0;k<22;k++){const a=k/22*Math.PI*2+crn()*.3,r=ext+55+crn()*90;puff(cx+Math.cos(a)*r,8+crn()*32,cz+Math.sin(a)*r,7+crn()*8,.9)}}
 // spacing sanity (min distance between island edges)
 let minGap=1e9,maxNN=0;for(let i=0;i<isl.length;i++){let nn=1e9;for(let j=0;j<isl.length;j++){if(i===j)continue;const g=Math.hypot(isl[i].x-isl[j].x,isl[i].z-isl[j].z)-0;nn=Math.min(nn,g);if(j>i)minGap=Math.min(minGap,g)}maxNN=Math.max(maxNN,nn)}
 // ---- labels ----
 const labels=isl.map((o,i)=>{const b=document.createElement('button');b.className='lab';b.innerHTML=`<b>${esc(o.def.town)}</b><small>${esc(o.def.lm)}</small>`;b.onclick=()=>focus(i);host.append(b);return b});
 const ingLabels=[];for(let k=0;k<8;k++){const b=document.createElement('button');b.className='ing';b.hidden=true;host.append(b);ingLabels.push(b)}
 let cur=-1,curIng=-1,viewOn=false,vOff=0;
 // ---- camera ----
 let tw=null;const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
 const fly=(p,t,ms=1200)=>{zoomGoal=null;tw={t0:performance.now(),ms,p0:camera.position.clone(),a0:controls.target.clone(),p1:p,a1:t}};controls.addEventListener('start',()=>{tw=null;zoomGoal=null});
 function focus(i){if(viewOn)closeViewer();cur=i;curIng=-1;const o=isl[i],R=o.r.R;const sx=innerWidth>700?R*.5:0;fly(new THREE.Vector3(o.x+sx,o.y+R*1.1+7,o.z+R*2.0+9),new THREE.Vector3(o.x+sx,o.y+1.0,o.z+R*.12));showPanel(i)}
 function focusIng(k){if(cur<0)return;curIng=k;const o=isl[cur],p=o.r.pedestals[k];const L=Math.hypot(p.x,p.z)||1,ox=p.x/L,oz=p.z/L;fly(new THREE.Vector3(o.x+p.x+ox*7.5,o.y+p.y+3.6,o.z+p.z+oz*7.5),new THREE.Vector3(o.x+p.x,o.y+p.y-.5,o.z+p.z),900);showCard(k)}
 function overview(){closeViewer();setHome();cur=-1;curIng=-1;fly(HOME.p.clone(),HOME.t.clone(),1300);$('panel').hidden=true;ingLabels.forEach(b=>b.hidden=true)}
 // ---- panel ----
 function showPanel(i){const o=isl[i],c=o.c;$('panel').hidden=false;$('pTown').textContent=o.def.town;$('pName').textContent=c?c.name:o.def.town;$('pTerrain').textContent=o.def.terrain;$('pLm').textContent=o.def.lm;$('pBlurb').textContent=o.def.blurb;$('pCard').innerHTML='';
  $('pFull').innerHTML='';
  $('pIngs').innerHTML=(c?c.cards:[]).map((k,n)=>`<button data-k="${n}"><i>${n+1}</i>${esc(k.title)}</button>`).join('');$('pIngs').querySelectorAll('button').forEach(b=>b.onclick=()=>focusIng(+b.dataset.k));
  ingLabels.forEach((b,k)=>{b.hidden=false;b.textContent=(c?.cards[k]?.title||'').replace(/（.*）/,'');b.onclick=()=>focusIng(k)})}
 function showCard(k){const o=isl[cur],c=o.c?.cards[k];if(!c)return;$('pIngs').querySelectorAll('button').forEach((b,n)=>b.classList.toggle('on',n===k));$('pCard').innerHTML='';
  $('vTitle').innerHTML=`${esc(c.title)}<small>${esc(o.def.town)}・${esc(c.subtitle)}</small>`;$('vCnt').textContent=`${k+1} / ${o.c.cards.length}`;$('vImg').src=c.image;$('vImg').alt=c.title+' 食農圖卡';
  $('vText').innerHTML=`<p>${esc(c.intro)}</p>`+(c.notes||[]).map(n=>`<p class="sub">${esc(n)}</p>`).join('');
  const q=c.questions?.[0];$('vQ').hidden=!q;if(q){$('vQ').innerHTML=`<p><b>試試看：</b>${esc(q.prompt)}</p>${q.choices.map(x=>`<button data-c="${x.id}">${esc(x.text)}</button>`).join('')}<p class="ex"></p>`;$('vQ').querySelectorAll('button').forEach(b=>b.onclick=()=>{const ok=b.dataset.c===q.answer;$('vQ').querySelectorAll('button').forEach(x=>x.disabled=true);b.classList.add(ok?'good':'bad');$('vQ').querySelector('.ex').textContent=(ok?'答對了！':'再認識一下：')+q.explanation})}
  $('viewer').hidden=false;$('viewer').querySelector('.vscroll').scrollTop=0;viewOn=true}
 function closeViewer(){$('viewer').hidden=true;viewOn=false;$('pIngs').querySelectorAll('button').forEach(b=>b.classList.remove('on'))}
 $('vClose').onclick=closeViewer;$('vPrev').onclick=()=>{if(cur>=0)focusIng((curIng+7)%8)};$('vNext').onclick=()=>{if(cur>=0)focusIng((curIng+1)%8)};
 $('vImg').onclick=()=>{$('lbImg').src=$('vImg').src;$('lightbox').hidden=false};$('lightbox').onclick=()=>$('lightbox').hidden=true;
 addEventListener('keydown',e=>{if(!$('lightbox').hidden){if(e.key==='Escape')$('lightbox').hidden=true;return}if(!viewOn)return;if(e.key==='Escape')closeViewer();if(e.key==='ArrowRight')$('vNext').click();if(e.key==='ArrowLeft')$('vPrev').click()});
 $('closeP').onclick=overview;$('overview').onclick=overview;
 // ---- picking / hover ----
 const ray=new THREE.Raycaster(),ptr=new THREE.Vector2(),dom=renderer.domElement;let down=null,hov=-1;
 const hit=e=>{const r=dom.getBoundingClientRect();ptr.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(ptr,camera);const h=ray.intersectObjects(all,false)[0];return h?h.object.userData.island:-1};
 dom.addEventListener('pointerdown',e=>down=[e.clientX,e.clientY]);dom.addEventListener('pointerup',e=>{if(!down)return;const mv=Math.hypot(e.clientX-down[0],e.clientY-down[1]);down=null;if(mv>5)return;const i=hit(e);if(i>=0&&i!==cur)focus(i)});
 dom.addEventListener('pointermove',e=>{if(e.buttons)return;hov=hit(e);dom.style.cursor=hov>=0?'pointer':'grab'});
 const resize=()=>{const r=host.getBoundingClientRect();camera.aspect=Math.max(1,r.width)/Math.max(1,r.height);camera.updateProjectionMatrix();renderer.setSize(r.width,r.height,false)}; const ZL=10;let zoomGoal=null,wheelAcc=0,wheelT=0;const zMin=12;const zMax=()=>HOME.p.distanceTo(HOME.t)*1.05;
 const levelD=l=>zMin*Math.pow(zMax()/zMin,l/(ZL-1));const curLevel=()=>{const d=camera.position.distanceTo(controls.target);let b=0,bd=1e9;for(let l=0;l<ZL;l++){const e=Math.abs(Math.log(levelD(l)/d));if(e<bd){bd=e;b=l}}return b};
 const stepZoom=dir=>{const l=Math.max(0,Math.min(ZL-1,(zoomGoal!==null?zoomGoal.l:curLevel())+dir));tw=null;zoomGoal={l,d:levelD(l)};showZoom(l)};
 const showZoom=l=>{const z=$('zoomLv');if(z)z.textContent=`${ZL-l} / ${ZL}`;document.querySelectorAll('#zoomDots i').forEach((e,k)=>e.classList.toggle('on',k<=ZL-1-l))};
 host.addEventListener('wheel',e=>{e.preventDefault();e.stopPropagation();const now=performance.now();let dy=e.deltaY*(e.deltaMode===1?33:e.deltaMode===2?400:1);if(now-wheelT>700||Math.sign(dy)!==Math.sign(wheelAcc))wheelAcc=0;wheelT=now;wheelAcc+=dy;
  if(Math.abs(wheelAcc)>=30){const dir=wheelAcc>0?1:-1;wheelAcc=0;if(now-(host._lastStep||0)>200){host._lastStep=now;stepZoom(dir)}}},{capture:true,passive:false});
 $('zIn')&&($('zIn').onclick=()=>stepZoom(-1));$('zOut')&&($('zOut').onclick=()=>stepZoom(1));
 new ResizeObserver(resize).observe(host);resize();setHome();if(cur<0&&!tw){camera.position.copy(HOME.p);controls.target.copy(HOME.t)}
 let reduce=false;$('reduce').onchange=e=>reduce=e.target.checked;
 let tris=0,hiT=0;isl.forEach(o=>{tris+=o.r.tris;hiT+=o.r.hiTris});const stats={fps:0,calls:0,tris:0,islandTris:Math.round(tris),hiTrisAll:Math.round(hiT),minGap:+minGap.toFixed(1),maxNearestGap:+maxNN.toFixed(1),bridges:E.length,bridgesPerIsland:deg.join(','),realBorders:ADJ.length,skippedBorders:skipped.join(' / '),villagers:villagers.walkers.length,villagerTris:villagers.tris,low};window.__nan=()=>{const out=[];scene.traverse(o=>{if(o.geometry&&o.geometry.attributes.position){const a=o.geometry.attributes.position.array;for(let k=0;k<a.length;k++)if(!isFinite(a[k])){out.push((o.name||o.type)+' island:'+o.userData.island+' n='+a.length);break}}});return out};window.__ov={stats,camera,controls,focus,overview,focusIng,isl,villagers};
 const HI_DIST=low?36:44,_c=new THREE.Vector3();let last=performance.now(),acc=0,fr=0;const v=new THREE.Vector3();
 function frame(now){requestAnimationFrame(frame);const dt=Math.min(.05,(now-last)/1000);last=now;acc+=dt;fr++;if(acc>1){stats.fps=Math.round(fr/acc);acc=0;fr=0}
  if(tw){const t=Math.min(1,(now-tw.t0)/tw.ms),e=ease(t);camera.position.lerpVectors(tw.p0,tw.p1,e);controls.target.lerpVectors(tw.a0,tw.a1,e);if(t>=1)tw=null}
  if(zoomGoal){const dir=_c.subVectors(camera.position,controls.target);const d=dir.length(),nd=d+(zoomGoal.d-d)*.2;camera.position.copy(controls.target).add(dir.multiplyScalar(nd/d));if(Math.abs(nd-zoomGoal.d)<.05)zoomGoal=null}
  if(!zoomGoal&&now-(host._zs||0)>250){host._zs=now;showZoom(curLevel())}
  controls.update();
  {const vw=$('viewer'),W0=host.clientWidth,H0=host.clientHeight;let tgt=0;if(viewOn&&innerWidth>900){const left=W0-vw.offsetWidth-12;tgt=Math.max(0,W0/2-left/2)}vOff+=(tgt-vOff)*.15;if(Math.abs(vOff)<.5&&tgt===0){if(camera.view)camera.clearViewOffset()}else camera.setViewOffset(W0,H0,vOff,0,W0,H0)}
  let hiN=0;const tanL=Math.tan(camera.fov*Math.PI/360);isl.forEach(o=>{const dd=camera.position.distanceTo(_c.set(o.x,o.y,o.z)),near=dd<HI_DIST||o.r.R/(dd*tanL)>(low?.42:.3);if(near)hiN++;o.r.hi.forEach(m=>m.visible=near);o.r.lo.forEach(m=>m.visible=!near)});stats.hiIslands=hiN;
  villagers.update(dt,now,!reduce);if(playing){hour=(hour+dt*HOURS_PER_SEC*tlSpeed)%24;if((now|0)%4===0)showTime()}applyTod(Math.min(1,dt*(playing?6:4)));updateSeason(dt,now);{const W0=host.clientWidth,H0=host.clientHeight;for(const w of villagers.walkers){const el=w.lab;if(!el)continue;const T=TYPES[w.t],hh=(w.mayor?1.55:1.25)*T.scale;v.set(w.x,w.y+hh,w.z).project(camera);const dd=camera.position.distanceTo(_c.set(w.x,w.y,w.z));const show=v.z<1&&Math.abs(v.x)<1.05&&Math.abs(v.y)<1.05&&(w.mayor?dd<120:dd<46);if(!show){if(el.style.display!=='none')el.style.display='none';continue}el.style.display='';el.style.left=(v.x*.5+.5)*W0+'px';el.style.top=(-v.y*.5+.5)*H0+'px';el.style.fontSize=Math.max(12,Math.min(w.mayor?26:20,(w.mayor?900:620)/dd))+'px';el.style.zIndex=String(500-Math.round(dd))}}for(const c of skyClouds){if(!reduce)c.m.position.x=c.x0+Math.sin(now*.00006*c.sp+c.ph)*4;const d=camera.position.distanceTo(c.m.position);let f=Math.min(1,Math.max(0,(d-10)/22));const front=camera.position.distanceTo(skyCenter)-skyExt*.35-d;if(front>0)f*=Math.max(.12,1-front/18);c.m.material.opacity+=(c.op*f-c.m.material.opacity)*.15;c.m.visible=c.m.material.opacity>.02}
  renderer.render(scene,camera);stats.calls=renderer.info.render.calls;stats.tris=renderer.info.render.triangles;
  const w=host.clientWidth,h=host.clientHeight;
  isl.forEach((o,i)=>{const hh=(o.def.arch.startsWith('peak')?10:6.5)+(reduce?0:Math.sin(now*.0012+i*1.7)*.45);v.set(o.x,o.y+hh,o.z).project(camera);{const dd=camera.position.distanceTo(_c.set(o.x,o.y,o.z));labels[i].style.fontSize=(dd<70?17:Math.max(15,Math.min(26,2400/dd)))+'px'}const vis=v.z<1&&Math.abs(v.x)<1.05&&Math.abs(v.y)<1.05;const el=labels[i];el.style.display=vis?'':'none';const ld=o.def.ld||[0,0];el.style.left=(v.x*.5+.5)*w+'px';el.style.top=(-v.y*.5+.5)*h+'px';el.style.zIndex=String(200-Math.round(v.z*100));el.classList.toggle('on',i===hov||i===cur);el.classList.toggle('dim',cur>=0&&i!==cur)});
  if(cur>=0){const o=isl[cur],tanH=Math.tan(camera.fov*Math.PI/360);ingLabels.forEach((b,k)=>{const p=o.r.pedestals[k];_c.set(o.x+p.x,o.y+p.y-.3,o.z+p.z);const d=camera.position.distanceTo(_c);v.copy(_c).project(camera);const vis=v.z<1&&Math.abs(v.x)<1.05&&Math.abs(v.y)<1.05;b.style.display=vis?'':'none';
   const foodPx=1.5/(2*d*tanH)*h, fs=Math.max(14,Math.min(64,foodPx*.34));b.style.fontSize=fs.toFixed(1)+'px';b.style.zIndex=String(1000-Math.round(d*10));b.style.left=(v.x*.5+.5)*w+'px';b.style.top=(-v.y*.5+.5)*h+'px';b.classList.toggle('on',k===curIng)})}}
 requestAnimationFrame(frame);$('loading')?.remove();const requestedTown=new URLSearchParams(location.search).get('town');const requestedIndex=isl.findIndex(o=>o.def.town===requestedTown);if(requestedIndex>=0)focus(requestedIndex);
}
boot().catch(e=>{const l=$('loading');if(l)l.textContent='載入失敗：'+e.message+'（請透過本機網頁伺服器開啟）';console.error(e)});
