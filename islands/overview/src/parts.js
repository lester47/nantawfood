// Toy-style geometry accumulator: everything merges into ONE vertex-coloured mesh per island (few draw calls).
import * as THREE from 'three';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
const cache={};const base=(k,f)=>cache[k]??(cache[k]=(()=>{let g=f();g=g.index?g.toNonIndexed():g;for(const n of Object.keys(g.attributes))if(n!=='position'&&n!=='normal')g.deleteAttribute(n);return g})());
const _m=new THREE.Matrix4(),_q=new THREE.Quaternion(),_e=new THREE.Euler(),_v=new THREE.Vector3(),_s=new THREE.Vector3();
export class Parts{constructor(){this.l=[]}
 add(g,col,x=0,y=0,z=0,sx=1,sy=sx,sz=sx,rx=0,ry=0,rz=0){const c=new THREE.Color(col);const o=g.clone();for(const n of Object.keys(o.attributes))if(n!=='position'&&n!=='normal')o.deleteAttribute(n);_e.set(rx,ry,rz,'YXZ');_q.setFromEuler(_e);_m.compose(_v.set(x,y,z),_q,_s.set(sx,sy,sz));o.applyMatrix4(_m);const n=o.attributes.position.count,a=new Float32Array(n*3);for(let i=0;i<n;i++){a[i*3]=c.r;a[i*3+1]=c.g;a[i*3+2]=c.b}o.setAttribute('color',new THREE.BufferAttribute(a,3));this.l.push(o);return this}
 // sphere centred at (x,y,z), radius r, optional squash
 sph(col,x,y,z,r,sx=1,sy=1,sz=1,seg=9){return this.add(base('s'+seg,()=>new THREE.SphereGeometry(1,seg,Math.max(5,seg-3))),col,x,y,z,r*sx,r*sy,r*sz)}
 // cylinder standing on y (base), radius bottom rb, top rt, height h
 cyl(col,x,y,z,rb,rt,h,seg=8,rx=0,rz=0){const g=new THREE.CylinderGeometry(rt,rb,h,seg);g.translate(0,h/2,0);return this.add(g.toNonIndexed(),col,x,y,z,1,1,1,rx,0,rz)}
 cone(col,x,y,z,r,h,seg=8,rx=0,ry=0,rz=0){const g=new THREE.ConeGeometry(r,h,seg);g.translate(0,h/2,0);return this.add(g.toNonIndexed(),col,x,y,z,1,1,1,rx,ry,rz)}
 box(col,x,y,z,w,h,d,ry=0,rx=0,rz=0){return this.add(base('b',()=>new THREE.BoxGeometry(1,1,1)),col,x,y+h/2,z,w,h,d,rx,ry,rz)}
 boxc(col,x,y,z,w,h,d,ry=0,rx=0,rz=0){return this.add(base('b',()=>new THREE.BoxGeometry(1,1,1)),col,x,y,z,w,h,d,rx,ry,rz)} // centred
 geo(g,col,x=0,y=0,z=0,s=1){g=g.index?g.toNonIndexed():g;for(const n of Object.keys(g.attributes))if(n!=='position'&&n!=='normal')g.deleteAttribute(n);return this.add(g,col,x,y,z,s)}
 raw(g,x=0,y=0,z=0,s=1){const o=g.clone();_e.set(0,0,0,'YXZ');_q.identity();_m.compose(_v.set(x,y,z),_q,_s.set(s,s,s));o.applyMatrix4(_m);this.l.push(o);return this}
 merge(){return this.l.length?mergeGeometries(this.l,false):null}}
