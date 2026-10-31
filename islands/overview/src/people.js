// Toy villagers: farmers, shoppers, kids, grandpa. Instanced per type, walking on a node/edge graph (paths + bridges).
import * as THREE from 'three';
import {Parts} from './parts.js';
const SKIN=0xffd6b0,SKIN2=0xf2c09a;
function person(o){const P=new Parts();const {shirt,pants,hair=0x3a2a20,hat=null,skirt=null,prop=null,skin=SKIN,longHair=false,pig=false,grey=false}=o;
 for(const s of[-1,1]){P.cyl(pants,s*.075,.04,0,.058,.058,.28,8);P.sph(0x4a3a30,s*.075,.045,.03,.065,1,.6,1.4,8)}
 if(skirt){P.cone(skirt,0,.2,0,.24,.34,12,Math.PI);P.cyl(skirt,0,.2,0,.18,.18,.02,12)}
 P.cyl(shirt,0,.3,0,.17,.15,.3,12);P.sph(shirt,0,.6,0,.155,1,.5,1,10);
 for(const s of[-1,1]){P.cyl(shirt,s*.2,.36,0,.05,.045,.24,6,0,s*.18);P.sph(skin,s*.225,.35,.01,.05,1,1,1,8)}
 P.sph(skin,0,.8,0,.19,1,.97,1,14);
 if(hair!==null){P.sph(grey?0xd8d8d0:hair,0,.85,-.03,.195,1,.88,1,12);P.sph(grey?0xd8d8d0:hair,0,.81,-.07,.19,1,.9,.9,10)}
 if(longHair)P.sph(hair,0,.66,-.1,.17,1,1.1,.6,10);
 if(pig){for(const s of[-1,1]){P.sph(hair,s*.2,.8,-.05,.07,1,1,1,8);P.sph(0xff5a8a,s*.18,.86,-.05,.035,1,1,1,6)}}
 for(const s of[-1,1]){P.sph(0x2a2018,s*.065,.81,.17,.024,1,1.2,.6,6);P.sph(0xff9aa0,s*.11,.75,.15,.035,1,.6,.5,6)}P.sph(0xc0583a,0,.74,.18,.02,1.6,.6,.6,6);
 if(hat==='straw'){P.cone(0xe8c87a,0,.93,0,.38,.22,16);P.cyl(0xc89a4a,0,.92,0,.38,.38,.015,16);P.cyl(0xd85a3a,0,.94,0,.2,.2,.03,14)}
 if(hat==='cap'){P.sph(o.capCol||0xffd23a,0,.9,0,.2,1,.6,1,12);P.box(o.capCol||0xffd23a,0,.9,.15,.2,.03,.18)}
 if(prop==='hoe'){P.cyl(0x9a6a3e,.24,.35,0,.025,.025,.75,5,-.25,0);P.box(0x9aa0a8,.24,1.02,-.17,.14,.04,.12)}
 if(prop==='basket'){P.cyl(0xc8955a,0,.38,-.22,.15,.19,.3,10);P.cyl(0x6ab040,0,.66,-.22,.15,.15,.04,10);P.sph(0x6ab040,0,.7,-.22,.13,1,.5,1,8)}
 if(prop==='bag'){P.box(o.bagCol||0x58b848,.27,.12,.04,.16,.2,.1);P.sph(0xff6a3a,.27,.34,.04,.05,1,1,1,6);P.sph(0xffd23a,.3,.33,.06,.045,1,1,1,6);P.cyl(0x4a7a30,.25,.33,.06,.012,.012,.12,4)}
 if(prop==='backpack'){P.box(o.packCol||0x3a8ad8,0,.32,-.2,.24,.28,.12);P.box(0xffd23a,0,.36,-.27,.12,.08,.02)}
 if(prop==='cane'){P.cyl(0x7a5230,.24,.0,.1,.022,.022,.38,5)}
 if(o.sash){P.add(new THREE.BoxGeometry(.07,.46,.2).toNonIndexed(),0xe8323a,0,.44,.0,1,1,1.05,0,0,.62);P.sph(0xffd23a,.07,.5,.165,.05,1,1,.5,10);P.sph(0xffe9a0,.07,.5,.19,.025,1,1,.5,8)}
 if(o.bob){P.sph(hair,0,.84,-.06,.215,1,.92,.95,12);for(const s of[-1,1])P.sph(hair,s*.165,.74,-.01,.085,1,1.5,1,10);P.sph(hair,0,.96,.06,.16,1,.32,.75,10);P.sph(hair,.08,.93,.13,.08,1.4,.35,.6,8)}
 if(o.pearls)for(let k=0;k<9;k++){const a=-1.1+k*.275;P.sph(0xfff8f0,Math.sin(a)*.12,.62-Math.cos(a)*.04,Math.cos(a)*.12+.02,.022,1,1,1,6)}
 if(o.lapel){for(const s of[-1,1])P.box(0xffffff,s*.045,.38,.15,.07,.22,.02,s*.25)}
 if(o.apron){P.box(o.apron,0,.12,.13,.26,.42,.03)}
 if(o.weave){for(let k=0;k<5;k++)P.cyl([0xc8242a,0x1a1a1a,0xffffff,0xc8242a,0x1a1a1a][k],0,.3+k*.055,0,.177-k*.003,.177,.05,14)}
 if(o.headband){P.cyl(0xc8242a,0,.86,0,.198,.198,.05,14);P.cyl(0xffffff,0,.88,0,.2,.2,.012,14)}
 if(o.chefCap){P.cyl(0xffffff,0,.92,0,.17,.17,.12,12);P.sph(0xffffff,0,1.07,0,.2,1,.6,1,12)}
 if(prop==='tray'){P.cyl(0xc8955a,0,.44,.28,.2,.2,.04,14);for(let k=0;k<7;k++)P.sph(0x58a83a,Math.cos(k*2.4)*.12,.49,.28+Math.sin(k*2.4)*.12,.05,1.5,.4,.8,6)}
 if(prop==='crate'){P.box(0xc8955a,0,.36,.26,.36,.18,.24);for(let k=0;k<6;k++)P.sph([0xff4a3a,0xffd23a,0x7fd45a,0xff9a1f,0x7a2fa8,0x7fd45a][k],-.12+(k%3)*.12,.56,.21+Math.floor(k/3)*.1,.06,1,1,1,8)}
 if(prop==='carrier'){P.cyl(0xb88a4a,0,.4,-.24,.18,.13,.42,10);for(let k=0;k<4;k++)P.cyl(0x8a6a34,0,.45+k*.09,-.24,.16-k*.005,.16,.02,10);P.sph(0x6ab040,0,.84,-.24,.13,1,.5,1,8)}
 if(prop==='camera'){P.box(0x2a2a2a,0,.5,.17,.16,.1,.06);P.cyl(0x555555,0,.55,.2,.04,.04,.06,8,Math.PI/2)}
 return P.merge()}

// Fictional, generic county-magistrate character (not modelled on any real person): elegant, friendly, slightly larger.
function mayorFigure(){const P=new Parts();const SK=0xffdcc0,HAIR=0x3a2418,HAIR2=0x5a3a28,SUIT=0xe86a7a,SUIT2=0xd85a6c,SKIRT=0xf3f0f6,GOLD=0xffd24a;
 // legs + shoes (small heels)
 for(const s of[-1,1]){P.cyl(SK,s*.07,.06,0,.045,.045,.26,10);P.sph(0xc8324a,s*.07,.05,.04,.06,1,.55,1.6,10);P.cyl(0xc8324a,s*.07,0,-.03,.02,.02,.06,6)}
 // A-line skirt
 P.add(new THREE.CylinderGeometry(.15,.25,.3,18).toNonIndexed(),SKIRT,0,.33,0);P.cyl(0xe8e2ee,0,.18,0,.25,.25,.02,18);
 // fitted blazer: torso + peplum + lapels + buttons
 P.add(new THREE.CylinderGeometry(.14,.16,.28,16).toNonIndexed(),SUIT,0,.6,0);P.add(new THREE.CylinderGeometry(.165,.19,.07,16).toNonIndexed(),SUIT2,0,.45,0);
 P.sph(SUIT,0,.74,0,.15,1,.42,.95,14);
 for(const s of[-1,1]){P.add(new THREE.BoxGeometry(.06,.2,.02).toNonIndexed(),SUIT2,s*.05,.66,.135,1,1,1,0,0,-s*.35)}
 P.add(new THREE.ConeGeometry(.07,.13,3).toNonIndexed(),0xffffff,0,.68,.13,1,1,.3,Math.PI,0,0);
 for(let k=0;k<2;k++)P.sph(GOLD,0,.52+k*.07,.152,.016,1,1,.5,8);
 // arms (one waving) + hands
 P.cyl(SUIT,.17,.48,0,.045,.04,.26,8,0,-.2);P.sph(SK,.2,.47,.01,.045,1,1,1,10);
 P.cyl(SUIT,-.17,.68,0,.045,.04,.24,8,0,2.5);P.sph(SK,-.27,.88,.02,.05,1,1,1,10);
 // sash with rosette
 P.add(new THREE.BoxGeometry(.06,.44,.02).toNonIndexed(),0xffffff,.0,.6,.145,1,1,1,0,0,.6);P.add(new THREE.BoxGeometry(.035,.44,.022).toNonIndexed(),0xe8323a,.0,.6,.15,1,1,1,0,0,.6);
 for(let k=0;k<8;k++){const a=k/8*Math.PI*2;P.sph(GOLD,.1+Math.cos(a)*.035,.66+Math.sin(a)*.035,.16,.022,1,1,.5,6)}P.sph(0xe8323a,.1,.66,.17,.025,1,1,.5,8);
 // pearl necklace
 for(let k=0;k<11;k++){const a=-1.15+k*.23;P.sph(0xfffaf2,Math.sin(a)*.11,.8-Math.cos(a)*.035,Math.cos(a)*.1+.03,.02,1,1,1,8)}
 // head: soft rounded face, big shiny eyes, lashes, blush, smile
 P.cyl(SK,0,.8,0,.05,.05,.06,10);P.sph(SK,0,1.0,0,.2,1,.98,.98,18);
 for(const s of[-1,1]){P.sph(0x2a1810,s*.07,1.0,.175,.036,.9,1.25,.55,12);P.sph(0x5a3a2a,s*.07,.99,.19,.022,.9,1.1,.4,10);P.sph(0xffffff,s*.07+.012,1.015,.205,.011,1,1,.5,6);P.sph(0xffffff,s*.07-.01,.985,.204,.006,1,1,.5,5);
  for(let k=0;k<3;k++)P.add(new THREE.BoxGeometry(.008,.03,.006).toNonIndexed(),0x2a1810,s*(.07+(k-1)*.022),1.045,.18,1,1,1,0,0,s*(k-1)*-.5);
  P.add(new THREE.BoxGeometry(.06,.012,.008).toNonIndexed(),HAIR,s*.072,1.075,.18,1,1,1,0,0,s*-.15);
  P.sph(0xff9aa8,s*.115,.94,.16,.035,1.2,.7,.4,10);P.sph(GOLD,s*.195,.94,.0,.022,1,1,1,8)}
 const smile=[];for(let k=0;k<7;k++){const a=-.6+k*.2;smile.push([Math.sin(a)*.045,.92-Math.cos(a)*.018,.193])}P.add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(smile.map(q=>new THREE.Vector3(...q))),10,.007,5).toNonIndexed(),0xd04a5a);
 P.sph(0xffc0a8,0,.965,.2,.014,1,.8,.6,6);
 // glossy bob with side part + sweep, small hair clip
 P.sph(HAIR,0,1.06,-.04,.215,1,.9,.95,16);P.sph(HAIR,-.04,1.15,.06,.17,1.15,.42,.85,14);P.sph(HAIR2,.06,1.17,.07,.12,1.1,.3,.7,12);
 for(const s of[-1,1]){P.sph(HAIR,s*.17,.94,-.02,.09,.85,1.55,1,12);P.sph(HAIR2,s*.16,.86,.04,.06,.9,.8,.9,10)}
 P.sph(HAIR,0,.92,-.15,.15,1.2,1.3,.7,12);P.sph(0x7a5a48,.0,1.2,.0,.09,1.2,.2,.6,10);
 P.sph(0xffffff,.11,1.14,.13,.03,1.2,.6,.6,8);P.sph(0xffd24a,.11,1.14,.14,.014,1,1,1,6);
 return P.merge()}
export const TYPES=[
 {id:'farmerM',scale:1,speed:.9,stay:true,o:{shirt:0x4a8ad8,pants:0x4a4a5a,hat:'straw',prop:'hoe',skin:SKIN2}},
 {id:'farmerW',scale:.96,speed:.85,stay:true,o:{shirt:0xff8ab0,pants:0x5a5a7a,hat:'straw',prop:'basket'}},
 {id:'shopperW',scale:1,speed:1.1,o:{shirt:0xffa23a,pants:0x3a5aa8,hair:0x5a3a20,longHair:true,prop:'bag',bagCol:0x58b848}},
 {id:'shopperM',scale:1.04,speed:1.15,o:{shirt:0xf8f8f0,pants:0x3a4a8a,prop:'bag',bagCol:0xe84a3a,hair:0x2a2020}},
 {id:'kidBoy',scale:.66,speed:1.45,o:{shirt:0xe84a3a,pants:0x3a6ad8,hat:'cap',capCol:0xffd23a,prop:'backpack'}},
 {id:'kidGirl',scale:.63,speed:1.35,o:{shirt:0xffffff,pants:0xffd6b0,skirt:0xff7ab0,hair:0x3a2a20,pig:true}},
 {id:'grandpa',scale:.97,speed:.6,o:{shirt:0x6ab070,pants:0x7a6a5a,grey:true,prop:'cane',skin:SKIN2}},
 {id:'mayor',scale:1.3,speed:.9,o:{shirt:0x2f6fa8,pants:0x3a2a2a,skirt:0x23406a,hair:0x2a1a14,bob:true,sash:true,pearls:true,lapel:true,skin:SKIN}},
 {id:'tourist',scale:1,speed:1.0,o:{shirt:0x4fc0c8,pants:0xd8c8a0,hat:'cap',capCol:0xffffff,prop:'camera'}},
 {id:'indigenous',scale:1,speed:.85,stay:true,o:{shirt:0xf4efe4,pants:0x2a2a2a,weave:true,headband:true,prop:'carrier',skin:SKIN2}},
 {id:'processor',scale:1,speed:.8,stay:true,o:{shirt:0xf8f8f8,pants:0x5a5a6a,apron:0x3f7f4a,chefCap:true,prop:'tray'}},
 {id:'vendor',scale:1.02,speed:.95,o:{shirt:0xffd23a,pants:0x3a4a6a,apron:0xd85a3a,hat:'cap',capCol:0xd85a3a,prop:'crate'}}];
// graph: nodes {id,pos:Vector3,edges:[]}, edges {a,b,pts:[Vector3],bridge}
export function createVillagers(scene,graph,mat,{perIsland=2,visitors=26,seed=7,extra=[]}={}){
 let s=seed;const rnd=()=>((s=Math.imul(s^s>>>15,2246822507)+12345|0)>>>0)/4294967296;
 const geos=TYPES.map(t=>t.id==='mayor'?mayorFigure():person(t.o));const walkers=[];
 const hubs=graph.nodes.filter(n=>n.hub);
 for(const h of hubs){for(let k=0;k<perIsland;k++)walkers.push({t:k%2,home:h.island,node:h})}
 for(let k=0;k<visitors;k++){walkers.push({t:2+(k%6),node:hubs[Math.floor(rnd()*hubs.length)]})}
 const MI=TYPES.findIndex(t=>t.id==='mayor');walkers.forEach(w=>{if(w.t>=MI)w.t++});walkers.push({t:MI,node:hubs[Math.floor(rnd()*hubs.length)],mayor:true});
 for(const x of extra){const ti=TYPES.findIndex(t=>t.id===x.type),h=hubs.find(n=>n.island===x.island);if(ti>=0&&h)walkers.push({t:ti,home:x.island,node:h})}
 const counts=TYPES.map((_,ti)=>walkers.filter(w=>w.t===ti).length);
 const meshes=geos.map((g,ti)=>{const m=new THREE.InstancedMesh(g,mat,Math.max(1,counts[ti]));m.count=counts[ti];m.frustumCulled=false;scene.add(m);return m});
 const slot=TYPES.map(()=>0);
 for(const w of walkers){const T=TYPES[w.t];w.slot=slot[w.t]++;w.speed=T.speed*(.85+rnd()*.3);w.scale=T.scale;w.phase=rnd()*10;w.wait=rnd()*3;pickEdge(w,true)}
 function pickEdge(w,first){const n=w.node;let opts=n.edges.filter(e=>!(TYPES[w.t].stay&&e.bridge));if(opts.length>1&&w.prevEdge)opts=opts.filter(e=>e!==w.prevEdge);if(!opts.length)opts=n.edges;const e=opts[Math.floor(rnd()*opts.length)];w.edge=e;w.fwd=e.a===n;w.d=first?rnd()*e.len*.8:0;w.prevEdge=e}
 const _m=new THREE.Matrix4(),_q=new THREE.Quaternion(),_e=new THREE.Euler(),_s=new THREE.Vector3(),_p=new THREE.Vector3(),_t=new THREE.Vector3();
 function at(e,d,out){const P=e.pts,cum=e.cum;let i=1;while(i<P.length-1&&cum[i]<d)i++;const t=Math.min(1,Math.max(0,(d-cum[i-1])/(cum[i]-cum[i-1]||1)));return out.lerpVectors(P[i-1],P[i],t)}
 function update(dt,now,moving){for(const w of walkers){let walking=false;
   if(w.wait>0){w.wait-=dt}else if(moving){walking=true;w.d+=w.speed*dt;if(w.d>=w.edge.len){w.node=w.fwd?w.edge.b:w.edge.a;w.wait=w.node.hub?1+rnd()*3:(rnd()<.3?.6:0);pickEdge(w)}}
   const e=w.edge,dd=Math.min(w.d,e.len),pd=w.fwd?dd:e.len-dd;at(e,pd,_p);at(e,Math.min(e.len,Math.max(0,pd+(w.fwd?.15:-.15))),_t);
   const yaw=Math.atan2(_t.x-_p.x,_t.z-_p.z);if(walking||w.yaw===undefined)w.yaw=yaw;w.phase+=dt*w.speed*9*(walking?1:0);
   const bob=walking?Math.abs(Math.sin(w.phase))*.07*w.scale:0,wad=walking?Math.sin(w.phase)*.09:0;
   w.x=_p.x;w.y=_p.y;w.z=_p.z;_e.set(0,w.yaw,wad,'YXZ');_q.setFromEuler(_e);_p.y+=bob;_m.compose(_p,_q,_s.set(w.scale,w.scale,w.scale));meshes[w.t].setMatrixAt(w.slot,_m)}
  meshes.forEach(m=>m.instanceMatrix.needsUpdate=true)}
 update(0,0,false);let tris=0;geos.forEach((g,i)=>tris+=g.attributes.position.count/3*counts[i]);
 return {update,walkers,meshes,tris:Math.round(tris)}}
