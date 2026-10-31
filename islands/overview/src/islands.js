// 13 toy-style floating islands: terrain archetype + landmark + 8 ingredient plots + 8 showcase pedestals.
import * as THREE from 'three';
import {Parts} from './parts.js';
import {buildPatch,buildSample,buildSampleHi} from './props.js';
import {rng,fbm,clamp,sm,mix} from '../../lugu/src/noise.js';
import {SHAPES} from './nantou-shapes.js';
// real township outline (smoothed polar radii from centroid, concavities partly filled so the island stays walkable)
export function shapeOf(town){const s=SHAPES[town];let r=s.rad.slice();for(let k=0;k<3;k++)r=r.map((v,j)=>(r[(j+71)%72]+2*v+r[(j+1)%72])/4);const mx=Math.max(...r);r=r.map(v=>Math.max(v,mx*.55));return {...s,r,min:Math.min(...r),max:mx}}
export function makeOutline(sh,scale){const r=sh.r;return th=>{const u=(((th/(Math.PI*2))%1)+1)%1*72,j=Math.floor(u),f=u-j;return scale*(r[j%72]*(1-f)+r[(j+1)%72]*f)}}
const TAU=Math.PI*2;
export const SPREAD=1.7,TIER={S:7.4,M:8.8,L:10.8};
// mx,my: relative position in Nantou (x west→east, y south→north, 0–100), lift: floating height (≈ altitude feel)
export const ISLES=[
 {town:'仁愛鄉',mx:74,my:82,tier:'L',lift:9,arch:'peak',lm:'合歡山雪頂・香菇寮',terrain:'高山雪峰',blurb:'縣內最高寒的山地鄉，山頂常有雲霧，山腰種蘋果、水蜜桃和高山茶。'},
 {ld:[-16,-8],town:'國姓鄉',mx:42,my:76,tier:'M',lift:3.5,arch:'hills',lm:'咖啡烘豆工坊',terrain:'咖啡山坡丘陵',blurb:'山多平地少，山坡咖啡樹結滿紅果子，旁邊就是烘豆工坊。'},
 {ld:[-34,-6],town:'草屯鎮',mx:24,my:64,tier:'S',lift:0,arch:'plain',lm:'大石臼與麻糬',terrain:'平坦稻田平原',blurb:'地勢平坦、稻田廣闊，糯米和石臼讓這裡成為麻糬的家。'},
 {ld:[-46,30],town:'南投市',mx:28,my:51,tier:'S',lift:1,arch:'plateau',lm:'意麵老店・八卦山台地',terrain:'台地加貓羅溪',blurb:'貓羅溪流過平原，台地邊的老店用細細的意麵招待客人。'},
 {ld:[30,-4],town:'中寮鄉',mx:39,my:50,tier:'M',lift:3,arch:'basin',lm:'蜂箱花田・環山盆地',terrain:'四面環山的坡地',blurb:'四面環山，坡地開滿花，龍眼花蜜讓蜜蜂忙個不停。'},
 {ld:[-8,-6],town:'埔里鎮',mx:55,my:66,tier:'M',lift:4,arch:'basin2',lm:'台灣地理中心碑・盆地',terrain:'山環水田盆地',blurb:'四面環山的盆地，水田裡長出白白嫩嫩的茭白筍，還有台灣的地理中心碑。'},
 {town:'魚池鄉',mx:63,my:52,tier:'M',lift:5,arch:'lake',lm:'日月潭・慈恩塔',terrain:'山中湖泊與茶園',blurb:'日月潭在這裡！湖邊山坡是一層層的茶園，紅茶香飄很遠。'},
 {town:'名間鄉',mx:20,my:36,tier:'S',lift:.5,arch:'tea',lm:'松柏嶺茶園涼亭',terrain:'台地茶園與鳳梨田',blurb:'陽光充足的台地，鳳梨一排排，松柏嶺的茶園也很有名。'},
 {town:'集集鎮',mx:41,my:31,tier:'S',lift:1.5,arch:'rail',lm:'集集火車站',terrain:'河谷平地與鐵道',blurb:'小火車沿著鐵道慢慢開，沿途都是香蕉和水果。'},
 {town:'水里鄉',mx:57,my:33,tier:'M',lift:3,arch:'river',lm:'蛇窯・濁水溪',terrain:'河谷與山坡梅園',blurb:'濁水溪穿過河谷，蛇窯燒出陶器，山坡上的青梅做成脆梅。'},
 {town:'鹿谷鄉',mx:39,my:12,tier:'M',lift:5,arch:'terrace',lm:'凍頂茶園・大茶壺',terrain:'梯田茶山',blurb:'凍頂烏龍茶的家，茶園一層層爬上山坡，旁邊還有竹林和鱒魚。'},
 {town:'竹山鎮',mx:28,my:21,tier:'M',lift:1.5,arch:'redhill',lm:'竹編屋・紅土地',terrain:'紅土台地與竹林',blurb:'紅紅的土地種地瓜，竹子編成的房子是竹山的特色。'},
 {town:'信義鄉',mx:77,my:25,tier:'L',lift:10,arch:'peak2',lm:'玉山・葡萄棚',terrain:'高山河谷',blurb:'縣內最大的鄉，玉山是台灣最高峰，山谷裡有葡萄棚架和高山茶。'}];
const D2=(x,z,ax,az)=>Math.hypot(x-ax,z-az);
const hill=(x,z,cx,cz,r,h,p=1.6)=>h*Math.pow(Math.max(0,1-D2(x,z,cx,cz)/r),p);
const distPoly=(x,z,pts)=>{let bd=1e9;for(let i=0;i<pts.length-1;i++){const [ax,az]=pts[i],[bx0,bz0]=pts[i+1],bx=bx0-ax,bz=bz0-az,t=clamp(((x-ax)*bx+(z-az)*bz)/(bx*bx+bz*bz||1));bd=Math.min(bd,Math.hypot(x-ax-bx*t,z-az-bz*t))}return bd};
const smoothPts=(pts,n=60)=>new THREE.CatmullRomCurve3(pts.map(p=>new THREE.Vector3(p[0],0,p[1])),false,'centripetal').getPoints(n).map(v=>[v.x,v.z]);
// ---------- per-archetype configuration (units: island-local, R≈7.4/8.8/10.8) ----------
function config(k,R){const c={R,lms:[],river:null,lake:null,hills:[],peak:null,terr:null,basin:null,plateau:null,soil:null,rail:null,col:{a:0x7fd04e,b:0x9ae060}};
 switch(k){
 case'peak':c.peak={x:3.4,z:-4.4,r:7.4,h:5.8,sharp:1.35};c.lms=[{x:-5.2,z:-2.2,r:2.4}];break;
 case'peak2':c.peak={x:-3.4,z:-5.4,r:7.4,h:6.8,sharp:1.3};c.lms=[{x:4.8,z:-4.4,r:2.0}];break;
 case'hills':c.hills=[{x:-4,z:-3,r:5.6,h:2.0},{x:4,z:-4.4,r:4.6,h:1.6},{x:-1,z:-6,r:4,h:1.1}];c.lms=[{x:-4,z:-3,r:2.4,pad:true}];c.col={a:0x86cf4a,b:0xa6dc5e};break;
 case'plain':c.lms=[{x:0,z:-1.9,r:2.4}];c.col={a:0x8ad84e,b:0xb0e460};break;
 case'plateau':c.plateau={h:1.0,nx:-.55,nz:-.83,off:.6};c.river=smoothPts([[-7.4,3.2],[-3.2,2.2],[1.5,2.4],[7.4,.4]],40);c.lms=[{x:-2.2,z:-3.4,r:2.4}];break;
 case'basin':c.basin={r0:.62,h:1.7};c.lms=[{x:0,z:-1.2,r:2.2}];c.col={a:0x7ccf55,b:0xd8e468};break;
 case'basin2':c.basin={r0:.7,h:1.5};c.lms=[{x:0,z:-3.6,r:1.8}];break;
 case'lake':c.lake={x:-1.2,z:1.4,r:3.7,depth:.9};c.hills=[{x:4.3,z:-3.2,r:4.4,h:2.3}];c.lms=[{x:4.3,z:-3.2,r:1.8,pad:true},{x:-1.2,z:1.4,r:3.9,pad:false}];c.islet={x:-.6,z:1.4,r:.95,h:1.0};break;
 case'tea':c.hills=[{x:-3.2,z:-3.2,r:3.8,h:1.3}];c.lms=[{x:-3.2,z:-3.2,r:2.2,pad:true}];c.col={a:0x86d450,b:0xb4e668};break;
 case'rail':c.rail={z:-4.4,x0:-6.4,x1:6.4};c.lms=[{x:-1.6,z:-5.2,r:2.4}];break;
 case'river':c.river=smoothPts([[-8.2,-6],[-4.6,-3.6],[-1,-.5],[2.6,1.2],[6.4,2],[9.2,3.2]],56);c.lms=[{x:-5.2,z:-5.8,r:2.4}];c.hills=[{x:3.6,z:-5.4,r:4.4,h:1.6}];break;
 case'terrace':c.terr={x:-3.4,z:-3.6,r:6.4,h:3.6,steps:6};c.lms=[{x:3.8,z:-2.4,r:2.2}];c.col={a:0x7ccf4e,b:0x9ee062};break;
 case'redhill':c.hills=[{x:3.2,z:-3.6,r:5.6,h:1.8}];c.soil={x:3.2,z:-3.6,r:5.6};c.lms=[{x:-3.4,z:-3.2,r:2.2}];break}
 return c}
function makeH(c,seed){const R=c.R,O=c.O||(()=>R);
 return (x,z,pads=true,flat=null)=>{const rad=Math.hypot(x,z)/R;let h=.25+.2*(fbm(x*.22+seed,z*.22,3,seed)-.5)*2*(c.river||c.lake?.55:1);
  if(c.peak){const d=Math.hypot(x-c.peak.x,z-c.peak.z)/c.peak.r;h+=c.peak.h*Math.pow(Math.max(0,1-d),c.peak.sharp)*(1+.12*Math.sin(Math.atan2(z-c.peak.z,x-c.peak.x)*5))}
  for(const o of c.hills)h+=hill(x,z,o.x,o.z,o.r,o.h);
  if(c.terr){const t=Math.pow(Math.max(0,1-D2(x,z,c.terr.x,c.terr.z)/c.terr.r),1.15)*c.terr.steps,L=Math.floor(t),f=t-L;h+=c.terr.h*(L+sm(.62,.95,f))/c.terr.steps}
  if(c.basin)h+=c.basin.h*sm(c.basin.r0,1.0,rad)*(1+.25*Math.sin(Math.atan2(z,x)*3+seed));
  if(c.plateau){const u=x*c.plateau.nx+z*c.plateau.nz;h+=c.plateau.h*sm(c.plateau.off-.7,c.plateau.off+.7,u)}
  if(c.lake){const d=D2(x,z,c.lake.x,c.lake.z);h-=c.lake.depth*(1-sm(c.lake.r*.55,c.lake.r*1.05,d));if(c.islet)h+=hill(x,z,c.islet.x,c.islet.z,c.islet.r,c.islet.h+.9,.9)}
  if(c.river){const d=distPoly(x,z,c.river);h-=(.62+.2*sm(0,.5,Math.abs(h)))*(1-sm(.5,1.55,d))}
  {const ex=sm(.92,1.4,rad);if(ex>0)h+=ex*c.outerAmp*(fbm(x*.11+seed,z*.11,3,seed+5)*1.5-.25)}
  {const rr=Math.hypot(x,z)/O(Math.atan2(z,x));h-=1.2*Math.pow(sm(.86,1.0,rr),1.4)}
  if(pads&&c.flatten)for(const f of c.flatten){const d=D2(x,z,f.x,f.z),m=1-sm(f.r*.72,f.r*1.2,d);if(m>0)h=mix(h,f.h,m)}
  return h}}
// ---------- landmarks ----------
const WOODC=0xc89560,CREAM=0xfff0cf,RED=0xe8483a,TILE=0xd8643a;
function wedgeRoof(P,x,y,z,w,d,h,col,ry=0){P.cone(col,x,y,z,Math.hypot(w,d)/2*1.02,h,4,0,Math.PI/4+ry)}
const LM={
 peak:(P,gy,x,z)=>{const y=gy(x,z);P.box(WOODC,x,y,z,2.4,1.1,1.8);P.sph(RED,x,y+1.05,z,1.65,1,.62,1,12);for(let i=0;i<7;i++){const a=i*GA(),b=.6+i%3*.25;P.sph(0xffffff,x+Math.cos(a)*1.2*Math.cos(b*.6),y+1.1+Math.sin(b)*.75,z+Math.sin(a)*1.2*Math.cos(b*.6),.17)}P.box(0x7a4f2c,x,y,z+.92,.5,.8,.08);P.cyl(0xb06a4a,x+.8,y+1.3,z-.3,.14,.14,.8,6);for(let i=0;i<3;i++)P.sph(0xffffff,x+.8+i*.18,y+2.3+i*.35,z-.3,.2+i*.07)},
 peak2:(P,gy,x,z)=>{const y=gy(x,z);P.box(0xb08a5a,x,y,z,2.0,1.0,1.6);P.add(new THREE.ConeGeometry(1.5,.9,4).toNonIndexed(),0xd8483a,x,y+1.4,z,1,1,.9,0,Math.PI/4,0);P.box(0x7a4f2c,x,y,z+.82,.45,.7,.08);P.cyl(0x7a7a7a,x+1.4,y,z,.05,.05,1.8,5);P.box(0xff4a3a,x+1.62,y+1.2,z,.5,.34,.04)},
 hills:(P,gy,x,z)=>{const y=gy(x,z);P.box(CREAM,x,y,z,2.2,1.2,1.7);P.add(new THREE.ConeGeometry(1.75,.95,4).toNonIndexed(),0x9a5a3a,x,y+1.65,z,1,1,.85,0,Math.PI/4,0);P.cyl(0xc0553a,x+.8,y+1.0,z-.4,.25,.25,1.9,6);for(let i=0;i<4;i++)P.sph(0xffffff,x+.8+i*.12,y+3.1+i*.4,z-.4,.2+i*.07);P.box(0x7a4f2c,x-.3,y,z+.87,.5,.8,.08);for(let i=0;i<3;i++){P.box(0xd8b878,x-1.5+i*.2,y,z+1.2-i*.1,.34,.4,.3);P.sph(0x5a3418,x-1.5+i*.2,y+.45,z+1.2-i*.1,.1)}},
 plain:(P,gy,x,z)=>{const y=gy(x,z);P.cyl(0x9a9a9a,x,y,z,1.35,1.65,1.1,10);P.cyl(0x6a6a6a,x,y+1.08,z,1.4,1.4,.06,10);P.sph(0xffffff,x,y+1.15,z,1.15,1,.55,1,10);P.cyl(0xb98a50,x+.5,y+1.4,z-.2,.12,.12,2.3,6,0,.9);P.sph(0xb98a50,x+1.6,y+2.3,z-.2,.34,1,1.3,1)},
 plateau:(P,gy,x,z)=>{const y=gy(x,z);P.box(CREAM,x,y,z,2.5,1.2,1.8);P.add(new THREE.ConeGeometry(2,.9,4).toNonIndexed(),0xb0443a,x,y+1.7,z,1,1,.85,0,Math.PI/4,0);P.box(0xe84a3a,x,y+.85,z+1.1,2.6,.2,.8,0,.5);P.box(0xffffff,x,y+.86,z+1.1,.5,.2,.8,0,.5);P.cyl(0xffffff,x,y+2.1,z,.7,.52,.5,10);P.cyl(0xffd86a,x,y+2.5,z,.62,.62,.08,10);for(let i=0;i<7;i++)P.sph(0xffdf7a,x+Math.cos(i*GA())*.3,y+2.58,z+Math.sin(i*GA())*.3,.18,1,.4,1);P.box(0x7a4f2c,x-.5,y,z+.92,.5,.8,.08)},
 basin:(P,gy,x,z)=>{const y=gy(x,z);P.cyl(0xffd23a,x,y,z,1.35,1.2,1.3,6);P.cone(0xf0a020,x,y+1.3,z,1.55,1.1,6);P.cyl(0xe8a020,x+.4,y+1.5,z,.18,.1,.7,5);P.box(0x7a4f2c,x,y,z+1.0,.5,.8,.08);for(let i=0;i<3;i++){P.box([0xffd23a,0xff9ac0,0x7ad1f0][i],x+1.9,y+i*.3,z+.4,.8,.3,.7)}for(let i=0;i<30;i++){const a=i*GA(),d=2.6+i%5*.35,xx=x+Math.cos(a)*d,zz=z+Math.sin(a)*d*.8;P.sph([0xff6ab0,0xffd23a,0xffffff,0xc07af0][i%4],xx,gy(xx,zz)+.14,zz,.14)}},
 basin2:(P,gy,x,z)=>{const y=gy(x,z);P.cyl(0xb8b0a0,x,y,z,1.5,1.5,.25,10);P.cyl(0xd8d0c0,x,y+.25,z,1.1,1.1,.25,10);P.box(0xc8c0b0,x,y+.5,z,.8,2.4,.8);P.sph(0xe84a3a,x,y+3.1,z,.42);P.cyl(0xe84a3a,x,y+.28,z,1.3,1.3,.04,12);P.cyl(0x7a7a7a,x+.5,y+2.6,z,.04,.04,1.2,5);P.box(0xffd23a,x+.78,y+3.5,z,.5,.32,.04)},
 lake:(P,gy,x,z)=>{if(Math.abs(x-4.3)<.01){const y=gy(x,z);let w=1.0;for(let i=0;i<5;i++){P.cyl(0xf4ead0,x,y+i*.62+.1,z,.95*(1-i*.12),.8*(1-i*.12),.5,8);P.cone(0xd8503a,x,y+i*.62+.5,z,1.35*(1-i*.12),.28,8)}P.cone(0xd8503a,x,y+3.4,z,.4,.9,8);P.sph(0xffd23a,x,y+4.3,z,.12)}else{const y=-.28;P.cyl(0x7a4f2c,x+2.2,y,z-.9,.07,.07,1.4,5);P.boxc(0xffffff,x+2.55,y+.8,z-.9,.7,.9,.04);P.box(0xc89560,x+2.2,y,z-.9,1.2,.2,.45,.4);P.cyl(0x9a7a50,x-.6,gy(x-.6,z)-.2,z,.1,.08,.6,5);P.sph(0x4fb83a,x-.6,gy(x-.6,z)+.6,z,.5)}},
 tea:(P,gy,x,z)=>{const y=gy(x,z);for(const [dx,dz] of[[-1,-.7],[1,-.7],[-1,.7],[1,.7]])P.cyl(0xb06a4a,x+dx,y,z+dz,.09,.09,1.5,6);P.cone(0xd8503a,x,y+1.5,z,1.9,.9,6);P.cone(0xb03a2a,x,y+2.3,z,.4,.5,6);P.box(0xc89560,x,y+.35,z,1.8,.1,1.2);for(let i=0;i<3;i++)for(let j=0;j<2;j++){P.box(0xe0b060,x+2.6+j*.8,y+i*.34,z+.2,.7,.32,.55);P.sph(0xffc233,x+2.6+j*.8,y+i*.34+.4,z+.2,.2,1,.8,1)}},
 rail:(P,gy,x,z)=>{const y=gy(x,z);P.box(0xe8c898,x,y,z,3.2,1.3,1.6);P.add(new THREE.ConeGeometry(2.45,1,4).toNonIndexed(),0x8a4a3a,x,y+1.3,z,1,1,.75,0,Math.PI/4,0);P.cyl(0xffffff,x,y+.7,z+.82,.3,.3,.06,10,Math.PI/2);P.box(0x7a4f2c,x+.9,y,z+.82,.5,.8,.08);P.box(0xb0a090,x,y,z+1.5,3.6,.18,.9);
  for(let i=0;i<22;i++){const xx=-6.3+i*.58;P.box(0x7a5a3a,xx,gy(xx,-4.4)+.02,-4.4+(0),.12,.08,1.1)}P.box(0xb0b0b8,0,gy(0,-4.4)+.12,-4.7,13,.06,.08);P.box(0xb0b0b8,0,gy(0,-4.4)+.12,-4.1,13,.06,.08);
  const tx=3.6,ty=gy(tx,-4.4)+.12;P.box(0x2fa84a,tx,ty,-4.4,1.6,.8,.9);P.cyl(0x2a2a2a,tx+.5,ty+.8,-4.4,.18,.14,.55,8);P.box(0xe8483a,tx-.3,ty+.8,-4.4,.8,.45,.95);for(let i=1;i<=2;i++){P.box(i%2?0xffd23a:0xff8a3a,tx-1.8*i,ty,-4.4,1.5,.7,.85)}},
 river:(P,gy,x,z)=>{const y=gy(x,z);const hs=[[0,0,1.0],[1.1,.3,.9],[2.1,.6,.8],[3.0,.9,.7]];for(const [dx,dz,s] of hs){P.sph(0xd0583a,x+dx-.8,y+.05,z+dz*.5,.9*s,1.3,.75,1,10);P.cyl(0xa04030,x+dx-.8,y+.55*s,z+dz*.5,.15,.15,.55,6)}P.cyl(0xa04030,x+2.2,y+.7,z+.3,.22,.18,1.4,6);for(let i=0;i<5;i++)P.sph(0xc88a58,x-.7+i*.45,y+.22,z+1.4,.2,1,1.2,1)},
 terrace:(P,gy,x,z)=>{const y=gy(x,z);P.sph(0xffffff,x,y+1.35,z,1.15,1,.95,1,14);dots(P,0x58b848,x,y+1.4,z,1.1,8,.16);P.cyl(0xffffff,x,y+.1,z,.5,.7,.35,10);P.sph(0xffffff,x,y+2.4,z,.3,1,.4,1);P.sph(0xffffff,x,y+2.6,z,.12);P.cyl(0xffffff,x+1.0,y+1.1,z,.3,.2,1.1,8,0,-1.0);P.sph(0xffffff,x+1.75,y+1.95,z,.2);for(let i=0;i<7;i++){const a=-1.2+i*.4;P.sph(0xffffff,x-1.3-Math.cos(a)*.35,y+1.3+Math.sin(a)*.9,z,.14)}P.cyl(0xffffff,x+2.4,y,z+1.2,.4,.28,.34,10);P.cyl(0xc8872a,x+2.4,y+.28,z+1.2,.34,.34,.04,10)},
 redhill:(P,gy,x,z)=>{const y=gy(x,z);P.cyl(0xe6c070,x,y,z,1.35,1.3,1.2,10);P.cone(0xd8a850,x,y+1.2,z,1.75,1.35,10);for(let i=0;i<8;i++)P.box(0xc89a44,x+Math.cos(i*.785)*1.33,y+.1,z+Math.sin(i*.785)*1.33,.1,1,.1,-i*.785);P.box(0x7a4f2c,x,y,z+1.3,.55,.85,.08);P.cyl(0xe6c070,x+2.2,y,z+.6,.35,.3,.7,8);for(let i=0;i<3;i++)P.cyl(0x7fcf5a,x+2.2+i*.16,y+.3,z+.6,.05,.04,1.4,5)}};
function dots(P,col,x,y,z,r,n,sz){for(let i=0;i<n;i++){const a=i*GA(),b=(i%3)*.5-.2;P.sph(col,x+Math.cos(a)*r*Math.cos(b),y+Math.sin(b)*r*.9,z+Math.sin(a)*r*Math.cos(b),sz)}}
function GA(){return 2.399}
const LMKEY={peak:'peak',peak2:'peak2',hills:'hills',plain:'plain',plateau:'plateau',basin:'basin',basin2:'basin2',lake:'lake',tea:'tea',rail:'rail',river:'river',terrace:'terrace',redhill:'redhill'};
// ---------- build ----------
let M=null;export function materials(){if(M)return M;const gm=new THREE.DataTexture(new Uint8Array([120,120,120,255,190,190,190,255,255,255,255,255]),3,1,THREE.RGBAFormat);gm.minFilter=gm.magFilter=THREE.NearestFilter;gm.needsUpdate=true;
 const g4=new THREE.DataTexture(new Uint8Array([105,105,105,255,160,160,160,255,212,212,212,255,255,255,255,255]),4,1,THREE.RGBAFormat);g4.minFilter=g4.magFilter=THREE.NearestFilter;g4.needsUpdate=true;
 M={toon:new THREE.MeshToonMaterial({vertexColors:true,gradientMap:g4}),water:new THREE.MeshToonMaterial({color:0x56c8f0,gradientMap:gm,transparent:true,opacity:.88}),cloud:new THREE.MeshToonMaterial({color:0xffffff,gradientMap:gm,transparent:true,opacity:.95})};return M}
const C3=h=>new THREE.Color(h);
const _hsl={};function deepen(k){k.getHSL(_hsl);if(_hsl.h>.16&&_hsl.h<.45){const g=Math.min(1,1.4-Math.abs(_hsl.h-.29)/.15);k.setHSL(_hsl.h+(.285-_hsl.h)*.55*g,Math.min(.72,_hsl.s*.95+.04)*g+_hsl.s*(1-g),_hsl.l*(1-.17*g))}return k}
export function buildIsland(def,titles,idx,opt={}){
 const mats=materials(),R=opt.R||TIER[def.tier],O=opt.O||(()=>R),rn=rng(100+idx*17),seed=idx*3.7+1;const c=config(def.arch,R);c.O=O;c.outerAmp=def.arch.startsWith('peak')?2.6:def.arch==='hills'||def.arch==='redhill'?1.3:.7;
 const inside=(x,z,k=1)=>Math.hypot(x,z)<O(Math.atan2(z,x))*k;
 if(c.river){const rv=c.river;for(const end of[0,1]){const a=end?rv[rv.length-1]:rv[0],b=end?rv[rv.length-2]:rv[1];let dx=a[0]-b[0],dz=a[1]-b[1];const l=Math.hypot(dx,dz)||1;dx/=l;dz/=l;let p=[a[0],a[1]];const add=[];for(let k=0;k<200&&inside(p[0],p[1],1.06);k++){p=[p[0]+dx*.8,p[1]+dz*.8];add.push(p)}if(end)rv.push(...add);else rv.unshift(...add.reverse())}}
 const lms=c.lms;const H0=makeH(c,seed);
 const bAng=opt.bridgeAngles||[],ends=bAng.map(a=>({ang:a,x:Math.cos(a)*O(a)*.9,z:Math.sin(a)*O(a)*.9}));let hub=null;const paths=[];
 if(ends.length){let best=1e9;for(let gx=-R*.5;gx<=R*.5;gx+=.7)for(let gz=-R*.5;gz<=R*.5;gz+=.7){if(Math.hypot(gx,gz)>R*.5)continue;let sc=Math.hypot(gx,gz)*.15;
   for(const e of ends){const seg=[[e.x,e.z],[gx,gz]];for(const l of lms)if(distPoly(l.x,l.z,seg)<l.r+.7)sc+=10;if(c.lake&&distPoly(c.lake.x,c.lake.z,seg)<c.lake.r+.7)sc+=10;if(c.peak&&distPoly(c.peak.x,c.peak.z,seg)<c.peak.r*.5)sc+=6;if(c.river)sc+=distPoly(gx,gz,c.river)<1.8?4:0}
   for(const l of lms)if(D2(gx,gz,l.x,l.z)<l.r+1.2)sc+=20;if(sc<best){best=sc;hub=[gx,gz]}}
  for(const e of ends)paths.push([[e.x,e.z],[Math.cos(e.ang)*O(e.ang)*1.02,Math.sin(e.ang)*O(e.ang)*1.02]],[[e.x,e.z],hub])}
 const distPaths=(x,z)=>{let d=1e9;for(const p of paths)d=Math.min(d,distPoly(x,z,p));if(hub)d=Math.min(d,D2(x,z,hub[0],hub[1])-.6);return d};
 // slots: greedy farthest-style sampling on flat, dry ground
 const slotR=1.4,cand=[];for(let i=0;i<900;i++){const a=rn()*TAU,d=Math.sqrt(rn())*R*.84,x=Math.cos(a)*d,z=Math.sin(a)*d;cand.push([x,z])}
 const slope=(f,x,z)=>Math.hypot(f(x+.3,z)-f(x-.3,z),f(x,z+.3)-f(x,z-.3))/.6;
 const ok=(x,z,taken)=>{if(H0(x,z)<.06||slope(H0,x,z)>.45)return false;for(const l of lms)if(D2(x,z,l.x,l.z)<l.r+slotR+.1)return false;if(c.river&&distPoly(x,z,c.river)<1.9+slotR*.5)return false;if(c.lake&&D2(x,z,c.lake.x,c.lake.z)<c.lake.r+1.1+slotR*.4)return false;if(c.rail&&Math.abs(z-c.rail.z)<2.0)return false;if(c.peak&&D2(x,z,c.peak.x,c.peak.z)<c.peak.r*.52)return false;for(const t of taken)if(D2(x,z,t[0],t[1])<slotR*2+.1)return false;if(distPaths(x,z)<slotR+.45)return false;return Math.hypot(x,z)<R*.8};
 const slots=[];for(const [x,z] of cand){if(slots.length>=8)break;if(ok(x,z,slots))slots.push([x,z])}
 for(let tries=0;slots.length<8&&tries<4000;tries++){const a=rn()*TAU,d=Math.sqrt(rn())*R*.84,x=Math.cos(a)*d,z=Math.sin(a)*d;const taken=slots;if(H0(x,z)>.06&&D2(x,z,0,0)<R*.85&&!lms.some(l=>D2(x,z,l.x,l.z)<l.r+.8)&&!(c.river&&distPoly(x,z,c.river)<1.7)&&!(c.lake&&D2(x,z,c.lake.x,c.lake.z)<c.lake.r+.9)&&!(c.rail&&Math.abs(z-c.rail.z)<1.8)&&!taken.some(t=>D2(x,z,t[0],t[1])<2.3)&&distPaths(x,z)>slotR+.15)slots.push([x,z])}
 // front-most slots first so ingredient #1.. read left→right near viewer
 slots.sort((a,b)=>(a[0]-b[0])*.5+(b[1]-a[1])*.0);
 c.flatten=[...lms.filter(l=>l.pad!==false).map(l=>({x:l.x,z:l.z,r:l.r*.95,h:H0(l.x,l.z)})),...slots.map(s=>({x:s[0],z:s[1],r:slotR,h:H0(s[0],s[1])}))];
 // river/lake lms are not flattened (water landmark)
 if(def.arch==='lake')c.flatten=c.flatten.filter(f=>!(Math.abs(f.x+1.2)<.01));
 // outer land (beyond the design disk): more fields of this island's own ingredients + forest
 const outerSlots=[];{let area=0;for(let k=0;k<72;k++){const o=O(k/72*TAU);area+=(o*o-R*R)*Math.PI/72}const want=Math.max(0,Math.min(14,Math.round(area/38)));const orn=rng(700+idx);
  for(let k=0;k<3000&&outerSlots.length<want;k++){const a=orn()*TAU,d=Math.sqrt(orn())*O(a)*.86,x=Math.cos(a)*d,z=Math.sin(a)*d;if(Math.hypot(x,z)<R+1.5)continue;if(H0(x,z)<.1||slope(H0,x,z)>.55)continue;if(distPaths(x,z)<2.2)continue;if(c.river&&distPoly(x,z,c.river)<2.6)continue;if(c.lake&&D2(x,z,c.lake.x,c.lake.z)<c.lake.r+2)continue;if([...slots,...outerSlots].some(s=>D2(x,z,s[0],s[1])<3.4))continue;outerSlots.push([x,z])}}
 c.flatten.push(...outerSlots.map(s=>({x:s[0],z:s[1],r:1.5,h:H0(s[0],s[1])})));
 const H=makeH(c,seed);const gy=(x,z)=>H(x,z);
 // ----- top surface -----
 const SEG=120,RING=30,pos=[],col=[],idxs=[];
 const colorAt=(x,z,h,sl)=>{const n=fbm(x*.3+seed,z*.3,3,2);let k=C3(c.col.a).lerp(C3(c.col.b),n);const rad=Math.hypot(x,z)/R;
  if(c.soil&&D2(x,z,c.soil.x,c.soil.z)<c.soil.r*.78)k.lerp(C3(0xd2603a),.8*(1-sm(.4,.78,D2(x,z,c.soil.x,c.soil.z)/c.soil.r)));
  if(c.peak){const pk=h/c.peak.h;k.lerp(C3(0x9a8f84),sm(.18,.4,pk)*.9);k.lerp(C3(0xb4aca2),sm(.58,.72,pk)*.8)}
  if(c.terr){const t=Math.pow(Math.max(0,1-D2(x,z,c.terr.x,c.terr.z)/c.terr.r),1.15)*c.terr.steps,f=t-Math.floor(t);if(h>.3)k.lerp(C3(0xa8703c),(1-sm(.6,.75,f))*.55)}
  if(c.lake){const d=D2(x,z,c.lake.x,c.lake.z);if(h<.05&&d<c.lake.r*1.15)k.lerp(C3(0xf0dca0),.95)}
  if(c.river){const d=distPoly(x,z,c.river);k.lerp(C3(0xf0dca0),(1-sm(.9,1.9,d))*.9)}
  for(const l of lms)if(l.pad!==false){const d=D2(x,z,l.x,l.z);k.lerp(C3(0xe8d8a8),(1-sm(l.r*.7,l.r*1.05,d))*.75)}
  for(const s of [...slots,...outerSlots]){const d=D2(x,z,s[0],s[1]);k.lerp(C3(0xb88a56),(1-sm(slotR*.7,slotR*1.15,d))*.85)}
  if(def.arch==='rail'){const d=Math.abs(z-c.rail.z);k.lerp(C3(0xd8c8a0),(1-sm(.6,1.4,d))*.8)}
  if(def.arch==='plateau'&&h>.5)k.lerp(C3(0xb4e45c),.25);
  if(paths.length){const dp=distPaths(x,z);k.lerp(C3(0xead29a),(1-sm(.42,.78,dp))*.92)}
  k.lerp(C3(0x3f9a3c),sm(.9,1.0,Math.hypot(x,z)/O(Math.atan2(z,x)))*.5*(paths.length?sm(.5,.9,distPaths(x,z)):1));return deepen(k)};
 for(let j=0;j<=RING;j++){const t=Math.pow(j/RING,.9);for(let a=0;a<=SEG;a++){const th=a/SEG*TAU,r=O(th)*t,x=j?Math.cos(th)*r:0,z=j?Math.sin(th)*r:0,h=H(x,z);pos.push(x,h,z);col.push(0,0,0)}}
 for(let j=0;j<RING;j++)for(let a=0;a<SEG;a++){const i=j*(SEG+1)+a,i2=i+SEG+1;idxs.push(i,i+1,i2,i+1,i2+1,i2)}
 const tg=new THREE.BufferGeometry();tg.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));tg.setIndex(idxs);tg.computeVertexNormals();const nr=tg.attributes.normal;const cc=new Float32Array(pos.length);
 for(let i=0;i<pos.length/3;i++){const ny=Math.max(.1,nr.getY(i)),sl=Math.sqrt(Math.max(0,1-ny*ny))/ny,k=colorAt(pos[i*3],pos[i*3+2],pos[i*3+1],sl);cc[i*3]=k.r;cc[i*3+1]=k.g;cc[i*3+2]=k.b}
 tg.setAttribute('color',new THREE.BufferAttribute(cc,3));
 // ----- body (chunky faceted rock, toy-like) -----
 let Oavg=0;for(let k=0;k<72;k++)Oavg+=O(k/72*TAU)/72;const DEP=8.3*Math.min(2.2,Math.max(1,Oavg/9));
 const FR=[[1.0,-.15],[.98,-1.0],[.88,-2.3],[.7,-3.9],[.46,-5.6],[.22,-7.0],[.06,-7.9],[0,-8.3]],BS=72;let bg;{const bpos=[],bidx=[];
  for(let k=0;k<FR.length;k++)for(let a=0;a<=BS;a++){const th=a/BS*TAU,rr=O(th)*FR[k][0],y=FR[k][1]*(k?DEP/8.3:1);let x=Math.cos(th)*rr,z=Math.sin(th)*rr;const nn=k&&k<FR.length-1?1+.16*(fbm(x*.4+seed,z*.4+y*.3,2,9)-.5)*2:1;bpos.push(x*nn,y+(k>1?.4*(fbm(x*.3,z*.3,2,5)-.5):0),z*nn)}
  for(let k=0;k<FR.length-1;k++)for(let a=0;a<BS;a++){const p=k*(BS+1)+a,q=p+BS+1;bidx.push(p,q,p+1,p+1,q,q+1)}
  bg=new THREE.BufferGeometry();bg.setAttribute('position',new THREE.Float32BufferAttribute(bpos,3));bg.setIndex(bidx)}
 bg=bg.toNonIndexed();bg.computeVertexNormals();const bcol=new Float32Array(bg.attributes.position.count*3);for(let i=0;i<bg.attributes.position.count;i++){const y=bg.attributes.position.getY(i)*8.3/DEP;const k=y>-.5?C3(0x4f9e34):y>-2.6?C3(0x9a6438).lerp(C3(0x7e4e2c),sm(-.6,-2.6,y)).lerp(C3(0xb07a48),(Math.sin(y*7)>.6?.35:0)):C3(0x8e7a66).lerp(C3(0x5e5048),sm(-2.6,-8,y));bcol[i*3]=k.r;bcol[i*3+1]=k.g;bcol[i*3+2]=k.b}bg.setAttribute('color',new THREE.BufferAttribute(bcol,3));
 const geoms=[tg.toNonIndexed(),bg];for(const g of geoms){for(const n of Object.keys(g.attributes))if(!['position','normal','color'].includes(n))g.deleteAttribute(n)}
 // ----- props -----
 const P=new Parts();
 LM[LMKEY[def.arch]](P,gy,lms[0].x,lms[0].z);if(def.arch==='lake')LM.lake(P,gy,lms[1].x,lms[1].z);
 // ingredient plots (8)
 slots.slice(0,8).forEach((s,i)=>buildPatch(P,gy,s[0],s[1],rng(500+idx*31+i),titles[i]));
 outerSlots.forEach((s,k)=>buildPatch(P,gy,s[0],s[1],rng(800+idx*31+k),titles[k%titles.length]));
 // hanging clouds & decor trees
 let Oarea=0;for(let k=0;k<72;k++)Oarea+=O(k/72*TAU)**2*Math.PI/72;const trees=Math.min(110,Math.round(Oarea/9));for(let i=0;i<trees*5&&trees>0;i++){const a=rn()*TAU,d=O(a)*Math.sqrt(.12+rn()*.76),x=Math.cos(a)*d,z=Math.sin(a)*d;if(Math.hypot(x,z)<R*.5)continue;const h=H(x,z);if(h<.1||distPaths(x,z)<1.0||slope(H,x,z)>.7||[...slots,...outerSlots].some(s=>D2(x,z,s[0],s[1])<slotR+.7)||lms.some(l=>D2(x,z,l.x,l.z)<l.r+.6)||(c.river&&distPoly(x,z,c.river)<1.7)||(c.lake&&D2(x,z,c.lake.x,c.lake.z)<c.lake.r+.8)||(c.rail&&Math.abs(z-c.rail.z)<1.6))continue;const s=.7+rn()*.5;if(i%3===2){P.cyl(0x7a4f2c,x,h,z,.09*s,.07*s,.4*s,6);for(let t=0;t<3;t++)P.cone([0x2f7f3a,0x358a3e,0x2a7334][t],x,h+(.3+t*.42)*s,z,(.62-t*.16)*s,.75*s,8)}else{P.cyl(0x7a4f2c,x,h,z,.1*s,.08*s,.6*s,6);P.sph([0x3f9a34,0x4aa83a,0x358c30][i%3],x,h+.95*s,z,.52*s,1,1.08,1,9);P.sph([0x4aa83a,0x58b442][i%2],x+.18*s,h+1.15*s,z+.1*s,.32*s,1,1,1,8)}if(P.l.length>4200)break}
 const clouds=new Parts();for(let i=0;i<Math.round(7*Oavg/9);i++){const a=i*GA()+idx,d=O(i*GA()+idx)*(.45+(i%3)*.22),y=-3.6*DEP/8.3-(i%4)*1.1;const s=1.5+rn()*1.6;clouds.sph(0xffffff,Math.cos(a)*d,y,Math.sin(a)*d,s,1.3,.62,1.1,10);clouds.sph(0xffffff,Math.cos(a)*d+s*.9,y-.1,Math.sin(a)*d+.4,s*.7,1.2,.6,1.1,9)}
 // pedestals (showcase samples) along the front rim: the 8 ingredients, large and readable
 const ped=[],S=new Parts(),S2=new Parts(),D=new Parts();const n=8;
  const okA=[];for(let s=0;s<=240;s++){const th=Math.PI*(.86-.72*s/240);if(!bAng.some(a=>{let d=Math.abs(((th-a)%TAU+TAU)%TAU);d=Math.min(d,TAU-d);return d<.22}))okA.push(th)}
 for(let i=0;i<n;i++){const th=okA.length>=n?okA[Math.round(i*(okA.length-1)/(n-1))]:Math.PI*(.8-.6*i/(n-1)),pr=R*.98,x=Math.cos(th)*pr,z=Math.sin(th)*pr*1.0;const y=Math.max(-.2,H(x*.9,z*.9)+.05);
  S.cyl(0xc89560,x,y-.1,z,.5,.46,.55,8);S.cyl(0xfff0cf,x,y+.45,z,.56,.56,.08,10);const Q=new Parts();buildSample(Q,titles[i]);const g=Q.merge();if(g)S.raw(g,x,y+.55,z,1.5);ped.push({x,y:y+2.0,z});
  // hi-detail pedestal: little wooden crate with planks, cream tray, grass skirt
  S2.cyl(0xc89560,x,y-.1,z,.56,.52,.55,16);for(let k=0;k<8;k++){const a=k/8*TAU+.2;S2.box(0x9a6a3e,x+Math.cos(a)*.535,y-.1,z+Math.sin(a)*.535,.05,.56,.08,-a)}S2.cyl(0xa8754a,x,y+.4,z,.62,.62,.06,20);S2.cyl(0xfff3d8,x,y+.46,z,.58,.58,.05,24);
  for(let k=0;k<10;k++){const a=k/10*TAU+i;S2.cone(k%2?0x5cbf48:0x7ccf4e,x+Math.cos(a)*.58,y-.12,z+Math.sin(a)*.58,.07,.26+(k%3)*.06,5,Math.sin(a)*.3,0,-Math.cos(a)*.3)}
  const Q2=new Parts();buildSampleHi(Q2,titles[i]);const g2=Q2.merge();if(g2)S2.raw(g2,x,y+.51,z,1.45)}
 // hi-detail decor
 const dr=rng(900+idx*7),FL=[0xff7ab0,0xffd23a,0xffffff,0xb07af0,0xff9a4a];
 const freeSpot=(x,z,m=.5)=>{const h=H(x,z);if(h<.05||slope(H,x,z)>.5||distPaths(x,z)<.65)return false;if(slots.some(s=>D2(x,z,s[0],s[1])<slotR+m))return false;if(lms.some(l=>D2(x,z,l.x,l.z)<l.r+.3))return false;if(c.river&&distPoly(x,z,c.river)<1.3)return false;if(c.lake&&D2(x,z,c.lake.x,c.lake.z)<c.lake.r+.5)return false;if(c.rail&&Math.abs(z-c.rail.z)<1.0)return false;if(c.peak&&H(x,z)>c.peak.h*.45)return false;return inside(x,z,.9)};
 for(let k=0,f=0,gq=0;k<500&&(f<26||gq<40);k++){const a=dr()*TAU,dd=Math.sqrt(dr())*O(a)*.92,x=Math.cos(a)*dd,z=Math.sin(a)*dd;if(!freeSpot(x,z))continue;const h=H(x,z);
  if(f<26&&dr()<.45){f++;const col=FL[f%FL.length];D.cyl(0x4fa83c,x,h,z,.02,.02,.32,4);for(let p=0;p<5;p++){const pa=p/5*TAU;D.sph(col,x+Math.cos(pa)*.07,h+.33,z+Math.sin(pa)*.07,.06,1,.45,1,6)}D.sph(0xffd23a,x,h+.35,z,.045,1,1,1,6)}
  else if(gq<40){gq++;for(let b=0;b<4;b++){const ba=b/4*TAU+dr();D.cone(b%2?0x5cbf48:0x7fd45a,x+Math.cos(ba)*.05,h-.02,z+Math.sin(ba)*.05,.05,.3+dr()*.15,4,Math.sin(ba)*.35,0,-Math.cos(ba)*.35)}}}
 slots.slice(0,8).forEach(([sx,sz])=>{for(let k=0;k<16;k++){const a=k/16*TAU,x=sx+Math.cos(a)*(slotR+.08),z=sz+Math.sin(a)*(slotR+.08);D.sph(k%3?0xd8cfc0:0xbfb4a4,x,H(x,z)+.03,z,.11,1.2,.6,1,6)}});
 for(let k=0;k<12;k++){const a=Math.PI*.9+k/12*Math.PI*1.2+idx*.1,x=Math.cos(a)*O(a)*1.0,z=Math.sin(a)*O(a)*1.0,y0=-.45;let px=x,py=y0,pz=z;const L=1.2+((k*.37)%1)*1.6;for(let s=0;s<6;s++){const ny=py-L/6;D.cyl(0x3f8f3a,px,ny,pz,.025,.025,L/6,4);if(s%2===0)D.sph(0x5cbf48,px+.06,ny+.05,pz,.09,1.2,.4,1,6);py=ny;px+=Math.cos(a)*.03;pz+=Math.sin(a)*.03}}
 for(let k=0;k<10;k++){const a=k/10*TAU+idx*.7,x=Math.cos(a)*O(a)*.95,z=Math.sin(a)*O(a)*.95;D.sph(k%2?0xb8ac9a:0xa0968a,x,-.9-(k%3)*.5,z,.4+(k%3)*.15,1.1,.8,1,7)}
 // water
 const water=new Parts();
 if(c.lake){water.cyl(0x56c8f0,c.lake.x,-.32,c.lake.z,c.lake.r*1.02,c.lake.r*1.02,.1,28)}
 if(c.river){const pts=c.river;for(let i=0;i<pts.length-1;i++){const [ax,az]=pts[i],[bx,bz]=pts[i+1],L=Math.hypot(bx-ax,bz-az);water.boxc(0x56c8f0,(ax+bx)/2,-.28,(az+bz)/2,L*1.12,.08,1.35,-Math.atan2(bz-az,bx-ax))}}
 // assemble group
 const grp=new THREE.Group();
 const body=new THREE.Mesh(mergeG(geoms),mats.toon);body.userData.island=idx;grp.add(body);
 const prop=new THREE.Mesh(P.merge(),mats.toon);prop.userData.island=idx;grp.add(prop);
 const cl=new THREE.Mesh(clouds.merge(),mats.cloud);cl.userData.island=idx;grp.add(cl);
 const wg=water.merge();if(wg){const w=new THREE.Mesh(wg,mats.water);w.userData.island=idx;grp.add(w)}
 const sLo=new THREE.Mesh(S.merge(),mats.toon),sHi=new THREE.Mesh(S2.merge(),mats.toon),dHi=new THREE.Mesh(D.merge(),mats.toon);[sLo,sHi,dHi].forEach(m=>{m.userData.island=idx;grp.add(m)});sHi.visible=dHi.visible=false;
 let tris=0,hiTris=0;grp.traverse(o=>{if(o.isMesh){const n=o.geometry.attributes.position.count/3;if(o===sHi||o===dHi)hiTris+=n;else tris+=n}});
 return {gy,hub,ends,group:grp,R,O,Oavg,slots:slots.slice(0,8),pedestals:ped,lmPos:[lms[0].x,gy(lms[0].x,lms[0].z)+2.8,lms[0].z],tris,hiTris,lo:[sLo],hi:[sHi,dHi],meshes:[body,prop,cl,sLo,sHi,dHi]}}
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
function mergeG(a){const norm=a.map(g=>{g=g.index?g.toNonIndexed():g;for(const n of Object.keys(g.attributes))if(!['position','normal','color'].includes(n))g.deleteAttribute(n);return g});return mergeGeometries(norm,false)}
