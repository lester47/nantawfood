var ss={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sf=0,Bl=1,Ef=2;var xu=1,wf=2,fi=3,Ni=0,un=1,Ln=2;var Pi=0,Hs=1,Tr=2,zl=3,kl=4,Tf=5,Yi=100,Af=101,Rf=102,Hl=103,Vl=104,Cf=200,If=201,Lf=202,Pf=203,mc=204,gc=205,Df=206,Uf=207,Nf=208,Of=209,Ff=210,Bf=211,zf=212,kf=213,Hf=214,Vf=0,Gf=1,Wf=2,Pa=3,Xf=4,qf=5,Yf=6,Zf=7,_u=0,$f=1,Jf=2,Di=0,Kf=1,jf=2,Qf=3,td=4,ed=5,nd=6;var yu=300,Ws=301,Xs=302,xc=303,_c=304,fo=306,yc=1e3,Gn=1001,vc=1002,Ve=1003,Gl=1004;var No=1005;var In=1006,id=1007;var Ar=1008;var Ui=1009,sd=1010,rd=1011,al=1012,vu=1013,Ci=1014,Ii=1015,Rr=1016,Mu=1017,bu=1018,Ji=1020,ad=1021,_n=1023,od=1024,cd=1025,Ki=1026,qs=1027,ld=1028,Su=1029,hd=1030,Eu=1031,wu=1033,Oo=33776,Fo=33777,Bo=33778,zo=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,Tu=36196,Zl=37492,$l=37496,Jl=37808,Kl=37809,jl=37810,Ql=37811,th=37812,eh=37813,nh=37814,ih=37815,sh=37816,rh=37817,ah=37818,oh=37819,ch=37820,lh=37821,ko=36492,hh=36494,uh=36495,ud=36283,fh=36284,dh=36285,ph=36286;var Da=2300,Ua=2301,Ho=2302,mh=2400,gh=2401,xh=2402;var Au=3e3,ji=3001,fd=3200,dd=3201,Ru=0,pd=1,Pn="",qe="srgb",pi="srgb-linear",ol="display-p3",po="display-p3-linear",Na="linear",Le="srgb",Oa="rec709",Fa="p3";var xs=7680;var _h=519,md=512,gd=513,xd=514,Cu=515,_d=516,yd=517,vd=518,Md=519,Mc=35044;var yh="300 es",bc=1035,di=2e3,Ba=2001,jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=1234567,yr=Math.PI/180,Cr=180/Math.PI;function Kn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Ye(n,t,e){return Math.max(t,Math.min(e,n))}function cl(n,t){return(n%t+t)%t}function bd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Sd(n,t,e){return n!==t?(e-n)/(t-n):0}function vr(n,t,e){return(1-e)*n+e*t}function Ed(n,t,e,i){return vr(n,t,1-Math.exp(-e*i))}function wd(n,t=1){return t-Math.abs(cl(n,t*2)-t)}function Td(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ad(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Rd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Cd(n,t){return n+Math.random()*(t-n)}function Id(n){return n*(.5-Math.random())}function Ld(n){n!==void 0&&(vh=n);let t=vh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pd(n){return n*yr}function Dd(n){return n*Cr}function Sc(n){return(n&n-1)===0&&n!==0}function Ud(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function za(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Nd(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),f=a((t-i)/2),d=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,c*u,c*f,o*l);break;case"YZY":n.set(c*f,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*f,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*d,o*l);break;case"YXY":n.set(c*d,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Te(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Iu={DEG2RAD:yr,RAD2DEG:Cr,generateUUID:Kn,clamp:Ye,euclideanModulo:cl,mapLinear:bd,inverseLerp:Sd,lerp:vr,damp:Ed,pingpong:wd,smoothstep:Td,smootherstep:Ad,randInt:Rd,randFloat:Cd,randFloatSpread:Id,seededRandom:Ld,degToRad:Pd,radToDeg:Dd,isPowerOfTwo:Sc,ceilPowerOfTwo:Ud,floorPowerOfTwo:za,setQuaternionFromProperEuler:Nd,normalize:Te,denormalize:Jn},Mt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},de=class n{constructor(t,e,i,s,r,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],T=s[1],y=s[4],R=s[7],O=s[2],L=s[5],P=s[8];return r[0]=a*x+o*T+c*O,r[3]=a*m+o*y+c*L,r[6]=a*p+o*R+c*P,r[1]=l*x+h*T+u*O,r[4]=l*m+h*y+u*L,r[7]=l*p+h*R+u*P,r[2]=f*x+d*T+g*O,r[5]=f*m+d*y+g*L,r[8]=f*p+d*R+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(o*i-s*a)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(i*c-l*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vo.makeScale(t,e)),this}rotate(t){return this.premultiply(Vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vo=new de;function Lu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Od(){let n=ka("canvas");return n.style.display="block",n}var Mh={};function Mr(n){n in Mh||(Mh[n]=!0,console.warn(n))}var bh=new de().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sh=new de().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[pi]:{transfer:Na,primaries:Oa,toReference:n=>n,fromReference:n=>n},[qe]:{transfer:Le,primaries:Oa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[po]:{transfer:Na,primaries:Fa,toReference:n=>n.applyMatrix3(Sh),fromReference:n=>n.applyMatrix3(bh)},[ol]:{transfer:Le,primaries:Fa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Sh),fromReference:n=>n.applyMatrix3(bh).convertLinearToSRGB()}},Fd=new Set([pi,po]),Ae={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Fd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=ta[t].toReference,s=ta[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return ta[n].primaries},getTransfer:function(n){return n===Pn?Na:ta[n].transfer}};function Vs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Go(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var _s,Ha=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_s===void 0&&(_s=ka("canvas")),_s.width=t.width,_s.height=t.height;let i=_s.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=_s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ka("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vs(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vs(e[i]/255)*255):e[i]=Vs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bd=0,Va=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Kn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wo(s[a].image)):r.push(Wo(s[a]))}else r=Wo(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ha.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zd=0,bn=class n extends jn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Gn,s=Gn,r=In,a=Ar,o=_n,c=Ui,l=n.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Kn(),this.name="",this.source=new Va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ji?qe:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yc:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yc:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qe?ji:Au}set encoding(t){Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ji?qe:Pn}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=yu;bn.DEFAULT_ANISOTROPY=1;var en=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,R=(d+1)/2,O=(p+1)/2,L=(h+f)/4,P=(u+x)/4,Z=(g+m)/4;return y>R&&y>O?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=L/i,r=P/i):R>O?R<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),i=L/s,r=Z/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=P/r,s=Z/r),this.set(i,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-x)/T,this.z=(f-h)/T,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ec=class extends jn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new en(0,0,t,e),this.scissorTest=!1,this.viewport=new en(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(Mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ji?qe:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new bn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Va(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mi=class extends Ec{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ga=class extends bn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wc=class extends bn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-o,p=c*f+l*d+h*g+u*x,T=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let O=Math.sqrt(y),L=Math.atan2(O,p*T);m=Math.sin(m*L)/O,o=Math.sin(o*L)/O}let R=o*T;if(c=c*m+f*R,l=l*m+d*R,h=h*m+g*R,u=u*m+x*R,m===1-o){let O=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=O,l*=O,h*=O,u*=O}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-o*d,t[e+2]=l*g+h*d+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xo.copy(this).projectOnVector(t),this.sub(Xo)}reflect(t){return this.sub(Xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xo=new D,Eh=new xn,gi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ea.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(t.matrixWorld),this.union(ea)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),na.subVectors(this.max,hr),ys.subVectors(t.a,hr),vs.subVectors(t.b,hr),Ms.subVectors(t.c,hr),Ei.subVectors(vs,ys),wi.subVectors(Ms,vs),Vi.subVectors(ys,Ms);let e=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-Vi.z,Vi.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,Vi.z,0,-Vi.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-Vi.y,Vi.x,0];return!qo(e,ys,vs,Ms,na)||(e=[1,0,0,0,1,0,0,0,1],!qo(e,ys,vs,Ms,na))?!1:(ia.crossVectors(Ei,wi),e=[ia.x,ia.y,ia.z],qo(e,ys,vs,Ms,na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},oi=[new D,new D,new D,new D,new D,new D,new D,new D],zn=new D,ea=new gi,ys=new D,vs=new D,Ms=new D,Ei=new D,wi=new D,Vi=new D,hr=new D,na=new D,ia=new D,Gi=new D;function qo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Gi.fromArray(n,r);let o=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),c=t.dot(Gi),l=e.dot(Gi),h=i.dot(Gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var kd=new gi,ur=new D,Yo=new D,Oi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):kd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);let e=ur.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(Yo)),this.expandByPoint(ur.copy(t.center).sub(Yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ci=new D,Zo=new D,sa=new D,Ti=new D,$o=new D,ra=new D,Jo=new D,Qi=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Zo.copy(t).add(e).multiplyScalar(.5),sa.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(Zo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(sa),o=Ti.dot(this.direction),c=-Ti.dot(sa),l=Ti.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zo).addScaledVector(sa,f),d}intersectSphere(t,e){ci.subVectors(t.center,this.origin);let i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,i,s,r){$o.subVectors(e,t),ra.subVectors(i,t),Jo.crossVectors($o,ra);let a=this.direction.dot(Jo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,t);let c=o*this.direction.dot(ra.crossVectors(Ti,ra));if(c<0)return null;let l=o*this.direction.dot($o.cross(Ti));if(l<0||c+l>a)return null;let h=-o*Ti.dot(Jo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class n{constructor(t,e,i,s,r,a,o,c,l,h,u,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,u,f,d,g,x,m)}set(t,e,i,s,r,a,o,c,l,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/bs.setFromMatrixColumn(t,0).length(),r=1/bs.setFromMatrixColumn(t,1).length(),a=1/bs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f+x*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hd,t,Vd)}lookAt(t,e,i){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ai.crossVectors(i,vn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ai.crossVectors(i,vn)),Ai.normalize(),aa.crossVectors(vn,Ai),s[0]=Ai.x,s[4]=aa.x,s[8]=vn.x,s[1]=Ai.y,s[5]=aa.y,s[9]=vn.y,s[2]=Ai.z,s[6]=aa.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],T=i[3],y=i[7],R=i[11],O=i[15],L=s[0],P=s[4],Z=s[8],S=s[12],b=s[1],H=s[5],K=s[9],$=s[13],N=s[2],V=s[6],j=s[10],ut=s[14],ot=s[3],st=s[7],xt=s[11],_t=s[15];return r[0]=a*L+o*b+c*N+l*ot,r[4]=a*P+o*H+c*V+l*st,r[8]=a*Z+o*K+c*j+l*xt,r[12]=a*S+o*$+c*ut+l*_t,r[1]=h*L+u*b+f*N+d*ot,r[5]=h*P+u*H+f*V+d*st,r[9]=h*Z+u*K+f*j+d*xt,r[13]=h*S+u*$+f*ut+d*_t,r[2]=g*L+x*b+m*N+p*ot,r[6]=g*P+x*H+m*V+p*st,r[10]=g*Z+x*K+m*j+p*xt,r[14]=g*S+x*$+m*ut+p*_t,r[3]=T*L+y*b+R*N+O*ot,r[7]=T*P+y*H+R*V+O*st,r[11]=T*Z+y*K+R*j+O*xt,r[15]=T*S+y*$+R*ut+O*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*f+i*l*f+s*o*d-i*c*d)+x*(+e*c*d-e*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+m*(+e*l*u-e*o*d-r*a*u+i*a*d+r*o*h-i*l*h)+p*(-s*o*h-e*c*u+e*o*f+s*a*u-i*a*f+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],T=u*m*l-x*f*l+x*c*d-o*m*d-u*c*p+o*f*p,y=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,R=h*x*l-g*u*l+g*o*d-a*x*d-h*o*p+a*u*p,O=g*u*c-h*x*c-g*o*f+a*x*f+h*o*m-a*u*m,L=e*T+i*y+s*R+r*O;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/L;return t[0]=T*P,t[1]=(x*f*r-u*m*r-x*s*d+i*m*d+u*s*p-i*f*p)*P,t[2]=(o*m*r-x*c*r+x*s*l-i*m*l-o*s*p+i*c*p)*P,t[3]=(u*c*r-o*f*r-u*s*l+i*f*l+o*s*d-i*c*d)*P,t[4]=y*P,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*P,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*P,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*d+e*c*d)*P,t[8]=R*P,t[9]=(g*u*r-h*x*r-g*i*d+e*x*d+h*i*p-e*u*p)*P,t[10]=(a*x*r-g*o*r+g*i*l-e*x*l-a*i*p+e*o*p)*P,t[11]=(h*o*r-a*u*r-h*i*l+e*u*l+a*i*d-e*o*d)*P,t[12]=O*P,t[13]=(h*x*s-g*u*s+g*i*f-e*x*f-h*i*m+e*u*m)*P,t[14]=(g*o*s-a*x*s-g*i*c+e*x*c+a*i*m-e*o*m)*P,t[15]=(a*u*s-h*o*s+h*i*c-e*u*c-a*i*f+e*o*f)*P,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,x=a*h,m=a*u,p=o*u,T=c*l,y=c*h,R=c*u,O=i.x,L=i.y,P=i.z;return s[0]=(1-(x+p))*O,s[1]=(d+R)*O,s[2]=(g-y)*O,s[3]=0,s[4]=(d-R)*L,s[5]=(1-(f+p))*L,s[6]=(m+T)*L,s[7]=0,s[8]=(g+y)*P,s[9]=(m-T)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=bs.set(s[0],s[1],s[2]).length(),a=bs.set(s[4],s[5],s[6]).length(),o=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],kn.copy(this);let l=1/r,h=1/a,u=1/o;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=di){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),d,g;if(o===di)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ba)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=di){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(a-r),f=(e+t)*l,d=(i+s)*h,g,x;if(o===di)g=(a+r)*u,x=-2*u;else if(o===Ba)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},bs=new D,kn=new be,Hd=new D(0,0,0),Vd=new D(1,1,1),Ai=new D,aa=new D,vn=new D,wh=new be,Th=new xn,Fi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Th.setFromEuler(this),this.setFromQuaternion(Th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fi.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gd=0,Ah=new D,Ss=new xn,li=new be,oa=new D,fr=new D,Wd=new D,Xd=new xn,Rh=new D(1,0,0),Ch=new D(0,1,0),Ih=new D(0,0,1),qd={type:"added"},Yd={type:"removed"},nn=class n extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new D,e=new Fi,i=new xn,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new de}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(Rh,t)}rotateY(t){return this.rotateOnAxis(Ch,t)}rotateZ(t){return this.rotateOnAxis(Ih,t)}translateOnAxis(t,e){return Ah.copy(t).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rh,t)}translateY(t){return this.translateOnAxis(Ch,t)}translateZ(t){return this.translateOnAxis(Ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?oa.copy(t):oa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(fr,oa,this.up):li.lookAt(oa,fr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(li),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};nn.DEFAULT_UP=new D(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new D,hi=new D,Ko=new D,ui=new D,Es=new D,ws=new D,Lh=new D,jo=new D,Qo=new D,tc=new D,ca=!1,$i=class n{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Hn.subVectors(t,e),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Hn.subVectors(s,e),hi.subVectors(i,e),Ko.subVectors(t,e);let a=Hn.dot(Hn),o=Hn.dot(hi),c=Hn.dot(Ko),l=hi.dot(hi),h=hi.dot(Ko),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(t,e,i,s,r,a,o,c){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),this.getInterpolation(t,e,i,s,r,a,o,c)}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(a,ui.y),c.addScaledVector(o,ui.z),c)}static isFrontFacing(t,e,i,s){return Hn.subVectors(i,e),hi.subVectors(t,e),Hn.cross(hi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Hn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Es.subVectors(s,i),ws.subVectors(r,i),jo.subVectors(t,i);let c=Es.dot(jo),l=ws.dot(jo);if(c<=0&&l<=0)return e.copy(i);Qo.subVectors(t,s);let h=Es.dot(Qo),u=ws.dot(Qo);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Es,a);tc.subVectors(t,r);let d=Es.dot(tc),g=ws.dot(tc);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(ws,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Lh.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Lh,o);let p=1/(m+x+f);return a=x*p,o=f*p,e.copy(i).addScaledVector(Es,a).addScaledVector(ws,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},la={h:0,s:0,l:0};function ec(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ae.workingColorSpace){if(t=cl(t,1),e=Ye(e,0,1),i=Ye(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ec(a,r,t+1/3),this.g=ec(a,r,t),this.b=ec(a,r,t-1/3)}return Ae.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let i=Pu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}copyLinearToSRGB(t){return this.r=Go(t.r),this.g=Go(t.g),this.b=Go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return Ae.fromWorkingColorSpace(hn.copy(this),t),Math.round(Ye(hn.r*255,0,255))*65536+Math.round(Ye(hn.g*255,0,255))*256+Math.round(Ye(hn.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(hn.copy(this),e);let i=hn.r,s=hn.g,r=hn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=qe){Ae.fromWorkingColorSpace(hn.copy(this),t);let e=hn.r,i=hn.g,s=hn.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(la);let i=vr(Ri.h,la.h,e),s=vr(Ri.s,la.s,e),r=vr(Ri.l,la.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Wt;Wt.NAMES=Pu;var Zd=0,xi=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Hs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mc&&(i.blendSrc=this.blendSrc),this.blendDst!==gc&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Qn=class extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new D,ha=new Mt,Ne=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mc&&(t.usage=this.usage),t}};var Wa=class extends Ne{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Xa=class extends Ne{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ye=class extends Ne{constructor(t,e,i){super(new Float32Array(t),e,i)}};var $d=0,Cn=new be,nc=new nn,Ts=new D,Mn=new gi,dr=new gi,tn=new D,Ie=class n extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lu(t)?Xa:Wa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new de().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,i){return Cn.makeTranslation(t,e,i),this.applyMatrix4(Cn),this}scale(t,e,i){return Cn.makeScale(t,e,i),this.applyMatrix4(Cn),this}lookAt(t){return nc.lookAt(t),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Mn.min,dr.min),Mn.expandByPoint(tn),tn.addVectors(Mn.max,dr.max),Mn.expandByPoint(tn)):(Mn.expandByPoint(dr.min),Mn.expandByPoint(dr.max))}Mn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(tn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)tn.fromBufferAttribute(o,l),c&&(Ts.fromBufferAttribute(t,l),tn.add(Ts)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<o;b++)l[b]=new D,h[b]=new D;let u=new D,f=new D,d=new D,g=new Mt,x=new Mt,m=new Mt,p=new D,T=new D;function y(b,H,K){u.fromArray(s,b*3),f.fromArray(s,H*3),d.fromArray(s,K*3),g.fromArray(a,b*2),x.fromArray(a,H*2),m.fromArray(a,K*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let $=1/(x.x*m.y-m.x*x.y);isFinite($)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar($),T.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar($),l[b].add(p),l[H].add(p),l[K].add(p),h[b].add(T),h[H].add(T),h[K].add(T))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let b=0,H=R.length;b<H;++b){let K=R[b],$=K.start,N=K.count;for(let V=$,j=$+N;V<j;V+=3)y(i[V+0],i[V+1],i[V+2])}let O=new D,L=new D,P=new D,Z=new D;function S(b){P.fromArray(r,b*3),Z.copy(P);let H=l[b];O.copy(H),O.sub(P.multiplyScalar(P.dot(H))).normalize(),L.crossVectors(Z,H);let $=L.dot(h[b])<0?-1:1;c[b*4]=O.x,c[b*4+1]=O.y,c[b*4+2]=O.z,c[b*4+3]=$}for(let b=0,H=R.length;b<H;++b){let K=R[b],$=K.start,N=K.count;for(let V=$,j=$+N;V<j;V+=3)S(i[V+0]),S(i[V+1]),S(i[V+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Ne(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ph=new be,Wi=new Qi,ua=new Oi,Dh=new D,As=new D,Rs=new D,Cs=new D,ic=new D,fa=new D,da=new Mt,pa=new Mt,ma=new Mt,Uh=new D,Nh=new D,Oh=new D,ga=new D,xa=new D,ve=class extends nn{constructor(t=new Ie,e=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(ic.fromBufferAttribute(u,t),a?fa.addScaledVector(ic,h):fa.addScaledVector(ic.sub(e),h))}e.add(fa)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(ua.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(ua,Dh)===null||Wi.origin.distanceToSquared(Dh)>(t.far-t.near)**2))&&(Ph.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(Ph),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let R=T,O=y;R<O;R+=3){let L=o.getX(R),P=o.getX(R+1),Z=o.getX(R+2);s=_a(this,p,t,i,l,h,u,L,P,Z),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let T=o.getX(m),y=o.getX(m+1),R=o.getX(m+2);s=_a(this,a,t,i,l,h,u,T,y,R),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let R=T,O=y;R<O;R+=3){let L=R,P=R+1,Z=R+2;s=_a(this,p,t,i,l,h,u,L,P,Z),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let T=m,y=m+1,R=m+2;s=_a(this,a,t,i,l,h,u,T,y,R),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Jd(n,t,e,i,s,r,a,o){let c;if(t.side===un?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Ni,o),c===null)return null;xa.copy(o),xa.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(xa);return l<e.near||l>e.far?null:{distance:l,point:xa.clone(),object:n}}function _a(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,As),n.getVertexPosition(c,Rs),n.getVertexPosition(l,Cs);let h=Jd(n,t,e,i,As,Rs,Cs,ga);if(h){s&&(da.fromBufferAttribute(s,o),pa.fromBufferAttribute(s,c),ma.fromBufferAttribute(s,l),h.uv=$i.getInterpolation(ga,As,Rs,Cs,da,pa,ma,new Mt)),r&&(da.fromBufferAttribute(r,o),pa.fromBufferAttribute(r,c),ma.fromBufferAttribute(r,l),h.uv1=$i.getInterpolation(ga,As,Rs,Cs,da,pa,ma,new Mt),h.uv2=h.uv1),a&&(Uh.fromBufferAttribute(a,o),Nh.fromBufferAttribute(a,c),Oh.fromBufferAttribute(a,l),h.normal=$i.getInterpolation(ga,As,Rs,Cs,Uh,Nh,Oh,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new D,materialIndex:0};$i.getNormal(As,Rs,Cs,u.normal),h.face=u}return h}var sn=class n extends Ie{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function g(x,m,p,T,y,R,O,L,P,Z,S){let b=R/P,H=O/Z,K=R/2,$=O/2,N=L/2,V=P+1,j=Z+1,ut=0,ot=0,st=new D;for(let xt=0;xt<j;xt++){let _t=xt*H-$;for(let ft=0;ft<V;ft++){let Q=ft*b-K;st[x]=Q*T,st[m]=_t*y,st[p]=N,l.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[p]=L>0?1:-1,h.push(st.x,st.y,st.z),u.push(ft/P),u.push(1-xt/Z),ut+=1}}for(let xt=0;xt<Z;xt++)for(let _t=0;_t<P;_t++){let ft=f+_t+V*xt,Q=f+_t+V*(xt+1),pt=f+(_t+1)+V*(xt+1),It=f+(_t+1)+V*xt;c.push(ft,Q,It),c.push(Q,pt,It),ot+=6}o.addGroup(d,ot,S),d+=ot,f+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ys(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function mn(n){let t={};for(let e=0;e<n.length;e++){let i=Ys(n[e]);for(let s in i)t[s]=i[s]}return t}function Kd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Du(n){return n.getRenderTarget()===null?n.outputColorSpace:Ae.workingColorSpace}var jd={clone:Ys,merge:mn},Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wn=class extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=Kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},qa=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gn=class extends qa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(yr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Is=-90,Ls=1,Tc=class extends nn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(Is,Ls,t,e);s.layers=this.layers,this.add(s);let r=new gn(Is,Ls,t,e);r.layers=this.layers,this.add(r);let a=new gn(Is,Ls,t,e);a.layers=this.layers,this.add(a);let o=new gn(Is,Ls,t,e);o.layers=this.layers,this.add(o);let c=new gn(Is,Ls,t,e);c.layers=this.layers,this.add(c);let l=new gn(Is,Ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ya=class extends bn{constructor(t,e,i,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ws,super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ac=class extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(Mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ji?qe:Pn),this.texture=new Ya(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new sn(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Pi});r.uniforms.tEquirect.value=e;let a=new ve(s,r),o=e.minFilter;return e.minFilter===Ar&&(e.minFilter=In),new Tc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},sc=new D,ep=new D,np=new de,Vn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=sc.subVectors(i,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(sc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||np.getNormalMatrix(t),s=this.coplanarPoint(sc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new Oi,ya=new D,Lr=class{constructor(t=new Vn,e=new Vn,i=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=di){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],T=s[13],y=s[14],R=s[15];if(i[0].setComponents(c-r,f-l,m-d,R-p).normalize(),i[1].setComponents(c+r,f+l,m+d,R+p).normalize(),i[2].setComponents(c+a,f+h,m+g,R+T).normalize(),i[3].setComponents(c-a,f-h,m-g,R-T).normalize(),i[4].setComponents(c-o,f-u,m-x,R-y).normalize(),e===di)i[5].setComponents(c+o,f+u,m+x,R+y).normalize();else if(e===Ba)i[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ya.x=s.normal.x>0?t.max.x:t.min.x,ya.y=s.normal.y>0?t.max.y:t.min.y,ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Uu(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ip(n,t){let e=t.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,f=l.usage,d=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),d.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):n.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Rc=class n extends Ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let T=p*f-a;for(let y=0;y<l;y++){let R=y*u-r;g.push(R,-T,0),x.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){let y=T+l*p,R=T+l*(p+1),O=T+1+l*(p+1),L=T+1+l*p;d.push(y,R,L),d.push(R,O,L)}this.setIndex(d),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_p=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ap=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ym=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,u0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:ap,alphamap_pars_fragment:op,alphatest_fragment:cp,alphatest_pars_fragment:lp,aomap_fragment:hp,aomap_pars_fragment:up,batching_pars_vertex:fp,batching_vertex:dp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:xp,bumpmap_pars_fragment:_p,clipping_planes_fragment:yp,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:bp,color_fragment:Sp,color_pars_fragment:Ep,color_pars_vertex:wp,color_vertex:Tp,common:Ap,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Lp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Dp,colorspace_fragment:Up,colorspace_pars_fragment:Np,envmap_fragment:Op,envmap_common_pars_fragment:Fp,envmap_pars_fragment:Bp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Kp,envmap_vertex:kp,fog_vertex:Hp,fog_pars_vertex:Vp,fog_fragment:Gp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_fragment:qp,lightmap_pars_fragment:Yp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:$p,lights_pars_begin:Jp,lights_toon_fragment:jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:tm,lights_phong_pars_fragment:em,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:am,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:hm,map_fragment:um,map_pars_fragment:fm,map_particle_fragment:dm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphcolor_vertex:xm,morphnormal_vertex:_m,morphtarget_pars_vertex:ym,morphtarget_vertex:vm,normal_fragment_begin:Mm,normal_fragment_maps:bm,normal_pars_fragment:Sm,normal_pars_vertex:Em,normal_vertex:wm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Im,opaque_fragment:Lm,packing:Pm,premultiplied_alpha_fragment:Dm,project_vertex:Um,dithering_fragment:Nm,dithering_pars_fragment:Om,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:km,shadowmap_vertex:Hm,shadowmask_pars_fragment:Vm,skinbase_vertex:Gm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:Zm,tonemapping_fragment:$m,tonemapping_pars_fragment:Jm,transmission_fragment:Km,transmission_pars_fragment:jm,uv_pars_fragment:Qm,uv_pars_vertex:t0,uv_vertex:e0,worldpos_vertex:n0,background_vert:i0,background_frag:s0,backgroundCube_vert:r0,backgroundCube_frag:a0,cube_vert:o0,cube_frag:c0,depth_vert:l0,depth_frag:h0,distanceRGBA_vert:u0,distanceRGBA_frag:f0,equirect_vert:d0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:x0,meshbasic_frag:_0,meshlambert_vert:y0,meshlambert_frag:v0,meshmatcap_vert:M0,meshmatcap_frag:b0,meshnormal_vert:S0,meshnormal_frag:E0,meshphong_vert:w0,meshphong_frag:T0,meshphysical_vert:A0,meshphysical_frag:R0,meshtoon_vert:C0,meshtoon_frag:I0,points_vert:L0,points_frag:P0,shadow_vert:D0,shadow_frag:U0,sprite_vert:N0,sprite_frag:O0},Ct={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},$n={basic:{uniforms:mn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:mn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:mn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:mn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:mn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:mn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:mn([Ct.points,Ct.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:mn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:mn([Ct.common,Ct.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:mn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:mn([Ct.sprite,Ct.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:mn([Ct.common,Ct.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:mn([Ct.lights,Ct.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};$n.physical={uniforms:mn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var va={r:0,b:0,g:0};function F0(n,t,e,i,s,r,a){let o=new Wt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let T=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y)),y===null?x(o,c):y&&y.isColor&&(x(y,1),T=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===fo)?(h===void 0&&(h=new ve(new sn(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Ys($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Ae.getTransfer(y.colorSpace)!==Le,(u!==y||f!==y.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ve(new Rc(2,2),new Wn({name:"BackgroundMaterial",uniforms:Ys($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Ae.getTransfer(y.colorSpace)!==Le,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB(va,Du(n)),i.buffers.color.setClear(va.r,va.g,va.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:g}}function B0(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=m(null),l=c,h=!1;function u(N,V,j,ut,ot){let st=!1;if(a){let xt=x(ut,j,V);l!==xt&&(l=xt,d(l.object)),st=p(N,ut,j,ot),st&&T(N,ut,j,ot)}else{let xt=V.wireframe===!0;(l.geometry!==ut.id||l.program!==j.id||l.wireframe!==xt)&&(l.geometry=ut.id,l.program=j.id,l.wireframe=xt,st=!0)}ot!==null&&e.update(ot,n.ELEMENT_ARRAY_BUFFER),(st||h)&&(h=!1,Z(N,V,j,ut),ot!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ot).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(N){return i.isWebGL2?n.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?n.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function x(N,V,j){let ut=j.wireframe===!0,ot=o[N.id];ot===void 0&&(ot={},o[N.id]=ot);let st=ot[V.id];st===void 0&&(st={},ot[V.id]=st);let xt=st[ut];return xt===void 0&&(xt=m(f()),st[ut]=xt),xt}function m(N){let V=[],j=[],ut=[];for(let ot=0;ot<s;ot++)V[ot]=0,j[ot]=0,ut[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:ut,object:N,attributes:{},index:null}}function p(N,V,j,ut){let ot=l.attributes,st=V.attributes,xt=0,_t=j.getAttributes();for(let ft in _t)if(_t[ft].location>=0){let pt=ot[ft],It=st[ft];if(It===void 0&&(ft==="instanceMatrix"&&N.instanceMatrix&&(It=N.instanceMatrix),ft==="instanceColor"&&N.instanceColor&&(It=N.instanceColor)),pt===void 0||pt.attribute!==It||It&&pt.data!==It.data)return!0;xt++}return l.attributesNum!==xt||l.index!==ut}function T(N,V,j,ut){let ot={},st=V.attributes,xt=0,_t=j.getAttributes();for(let ft in _t)if(_t[ft].location>=0){let pt=st[ft];pt===void 0&&(ft==="instanceMatrix"&&N.instanceMatrix&&(pt=N.instanceMatrix),ft==="instanceColor"&&N.instanceColor&&(pt=N.instanceColor));let It={};It.attribute=pt,pt&&pt.data&&(It.data=pt.data),ot[ft]=It,xt++}l.attributes=ot,l.attributesNum=xt,l.index=ut}function y(){let N=l.newAttributes;for(let V=0,j=N.length;V<j;V++)N[V]=0}function R(N){O(N,0)}function O(N,V){let j=l.newAttributes,ut=l.enabledAttributes,ot=l.attributeDivisors;j[N]=1,ut[N]===0&&(n.enableVertexAttribArray(N),ut[N]=1),ot[N]!==V&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,V),ot[N]=V)}function L(){let N=l.newAttributes,V=l.enabledAttributes;for(let j=0,ut=V.length;j<ut;j++)V[j]!==N[j]&&(n.disableVertexAttribArray(j),V[j]=0)}function P(N,V,j,ut,ot,st,xt){xt===!0?n.vertexAttribIPointer(N,V,j,ot,st):n.vertexAttribPointer(N,V,j,ut,ot,st)}function Z(N,V,j,ut){if(i.isWebGL2===!1&&(N.isInstancedMesh||ut.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let ot=ut.attributes,st=j.getAttributes(),xt=V.defaultAttributeValues;for(let _t in st){let ft=st[_t];if(ft.location>=0){let Q=ot[_t];if(Q===void 0&&(_t==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),_t==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let pt=Q.normalized,It=Q.itemSize,Nt=e.get(Q);if(Nt===void 0)continue;let Ot=Nt.buffer,$t=Nt.type,Jt=Nt.bytesPerElement,kt=i.isWebGL2===!0&&($t===n.INT||$t===n.UNSIGNED_INT||Q.gpuType===vu);if(Q.isInterleavedBufferAttribute){let te=Q.data,U=te.stride,St=Q.offset;if(te.isInstancedInterleavedBuffer){for(let rt=0;rt<ft.locationSize;rt++)O(ft.location+rt,te.meshPerAttribute);N.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let rt=0;rt<ft.locationSize;rt++)R(ft.location+rt);n.bindBuffer(n.ARRAY_BUFFER,Ot);for(let rt=0;rt<ft.locationSize;rt++)P(ft.location+rt,It/ft.locationSize,$t,pt,U*Jt,(St+It/ft.locationSize*rt)*Jt,kt)}else{if(Q.isInstancedBufferAttribute){for(let te=0;te<ft.locationSize;te++)O(ft.location+te,Q.meshPerAttribute);N.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let te=0;te<ft.locationSize;te++)R(ft.location+te);n.bindBuffer(n.ARRAY_BUFFER,Ot);for(let te=0;te<ft.locationSize;te++)P(ft.location+te,It/ft.locationSize,$t,pt,It*Jt,It/ft.locationSize*te*Jt,kt)}}else if(xt!==void 0){let pt=xt[_t];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(ft.location,pt);break;case 3:n.vertexAttrib3fv(ft.location,pt);break;case 4:n.vertexAttrib4fv(ft.location,pt);break;default:n.vertexAttrib1fv(ft.location,pt)}}}}L()}function S(){K();for(let N in o){let V=o[N];for(let j in V){let ut=V[j];for(let ot in ut)g(ut[ot].object),delete ut[ot];delete V[j]}delete o[N]}}function b(N){if(o[N.id]===void 0)return;let V=o[N.id];for(let j in V){let ut=V[j];for(let ot in ut)g(ut[ot].object),delete ut[ot];delete V[j]}delete o[N.id]}function H(N){for(let V in o){let j=o[V];if(j[N.id]===void 0)continue;let ut=j[N.id];for(let ot in ut)g(ut[ot].object),delete ut[ot];delete j[N.id]}}function K(){$(),h=!0,l!==c&&(l=c,d(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:K,resetDefaultState:$,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:H,initAttributes:y,enableAttribute:R,disableUnusedAttributes:L}}function z0(n,t,e,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(s)d=n,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function k0(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,R=a||t.has("OES_texture_float"),O=y&&R,L=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:T,vertexTextures:y,floatFragmentTextures:R,floatVertexTextures:O,maxSamples:L}}function H0(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Vn,o=new de,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let T=r?0:i,y=T*4,R=p.clippingState||null;c.value=R,R=h(g,f,y,d);for(let O=0;O!==y;++O)R[O]=e[O];p.clippingState=R,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,R=d;y!==x;++y,R+=4)a.copy(u[y]).applyMatrix4(T,o),a.normal.toArray(m,R),m[R+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function V0(n){let t=new WeakMap;function e(a,o){return o===xc?a.mapping=Ws:o===_c&&(a.mapping=Xs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===xc||o===_c)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ac(c.height/2);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Za=class extends qa{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bs=4,Fh=[.125,.215,.35,.446,.526,.582],Zi=20,rc=new Za,Bh=new Wt,ac=null,oc=0,cc=0,qi=(1+Math.sqrt(5))/2,Ps=1/qi,zh=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,qi,Ps),new D(0,qi,-Ps),new D(Ps,0,qi),new D(-Ps,0,qi),new D(qi,Ps,0),new D(-qi,Ps,0)],$a=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ac,oc,cc),t.scissorTest=!1,Ma(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ws||t.mapping===Xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Rr,format:_n,colorSpace:pi,depthBuffer:!1},s=kh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G0(r)),this._blurMaterial=W0(r,t,e)}return s}_compileMaterial(t){let e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,rc)}_sceneToCubeUV(t,e,i,s){let o=new gn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Bh),h.toneMapping=Di,h.autoClear=!1;let d=new Qn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new ve(new sn,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Bh),x=!0);for(let p=0;p<6;p++){let T=p%3;T===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):T===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let y=this._cubeSize;Ma(s,T*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ws||t.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ve(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ma(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,rc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=zh[(s-1)%zh.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ve(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Zi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Zi;m>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);let p=[],T=0;for(let P=0;P<Zi;++P){let Z=P/x,S=Math.exp(-Z*Z/2);p.push(S),P===0?T+=S:P<m&&(T+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let R=this._sizeLods[s],O=3*R*(s>y-Bs?s-y+Bs:0),L=4*(this._cubeSize-R);Ma(e,O,L,3*R,2*R),c.setRenderTarget(e),c.render(u,rc)}};function G0(n){let t=[],e=[],i=[],s=n,r=n-Bs+1+Fh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>n-Bs?c=Fh[a-n+Bs-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,T=new Float32Array(x*g*d),y=new Float32Array(m*g*d),R=new Float32Array(p*g*d);for(let L=0;L<d;L++){let P=L%3*2/3-1,Z=L>2?0:-1,S=[P,Z,0,P+2/3,Z,0,P+2/3,Z+1,0,P,Z,0,P+2/3,Z+1,0,P,Z+1,0];T.set(S,x*g*L),y.set(f,m*g*L);let b=[L,L,L,L,L,L];R.set(b,p*g*L)}let O=new Ie;O.setAttribute("position",new Ne(T,x)),O.setAttribute("uv",new Ne(y,m)),O.setAttribute("faceIndex",new Ne(R,p)),t.push(O),s>Bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function kh(n,t,e){let i=new mi(n,t,e);return i.texture.mapping=fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ma(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function W0(n,t,e){let i=new Float32Array(Zi),s=new D(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Hh(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Vh(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===xc||c===_c,h=c===Ws||c===Xs;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new $a(n)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new $a(n));let f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function q0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Y0(n,t,e,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let T=d.array;x=d.version;for(let y=0,R=T.length;y<R;y+=3){let O=T[y+0],L=T[y+1],P=T[y+2];f.push(O,L,L,P,P,O)}}else if(g!==void 0){let T=g.array;x=g.version;for(let y=0,R=T.length/3-1;y<R;y+=3){let O=y+0,L=y+1,P=y+2;f.push(O,L,L,P,P,O)}}else return;let m=new(Lu(f)?Xa:Wa)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Z0(n,t,e,i){let s=i.isWebGL2,r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,g){n.drawElements(r,g,o,d*c),e.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*c,x),e.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,x);let p=0;for(let T=0;T<x;T++)p+=g[T];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function $0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function J0(n,t){return n[0]-t[0]}function K0(n,t){return Math.abs(t[1])-Math.abs(n[1])}function j0(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,a=new en,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let N=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",N)};x!==void 0&&x.texture.dispose();let T=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],P=h.morphAttributes.color||[],Z=0;T===!0&&(Z=1),y===!0&&(Z=2),R===!0&&(Z=3);let S=h.attributes.position.count*Z,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let H=new Float32Array(S*b*4*g),K=new Ga(H,S,b,g);K.type=Ii,K.needsUpdate=!0;let $=Z*4;for(let V=0;V<g;V++){let j=O[V],ut=L[V],ot=P[V],st=S*b*4*V;for(let xt=0;xt<j.count;xt++){let _t=xt*$;T===!0&&(a.fromBufferAttribute(j,xt),H[st+_t+0]=a.x,H[st+_t+1]=a.y,H[st+_t+2]=a.z,H[st+_t+3]=0),y===!0&&(a.fromBufferAttribute(ut,xt),H[st+_t+4]=a.x,H[st+_t+5]=a.y,H[st+_t+6]=a.z,H[st+_t+7]=0),R===!0&&(a.fromBufferAttribute(ot,xt),H[st+_t+8]=a.x,H[st+_t+9]=a.y,H[st+_t+10]=a.z,H[st+_t+11]=ot.itemSize===4?a.w:1)}}x={count:g,texture:K,size:new Mt(S,b)},r.set(h,x),h.addEventListener("dispose",N)}let m=0;for(let T=0;T<f.length;T++)m+=f[T];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==d){g=[];for(let y=0;y<d;y++)g[y]=[y,0];i[h.id]=g}for(let y=0;y<d;y++){let R=g[y];R[0]=y,R[1]=f[y]}g.sort(K0);for(let y=0;y<8;y++)y<d&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(J0);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let R=o[y],O=R[0],L=R[1];O!==Number.MAX_SAFE_INTEGER&&L?(x&&h.getAttribute("morphTarget"+y)!==x[O]&&h.setAttribute("morphTarget"+y,x[O]),m&&h.getAttribute("morphNormal"+y)!==m[O]&&h.setAttribute("morphNormal"+y,m[O]),s[y]=L,p+=L):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let T=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",T),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function Q0(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Ja=class extends bn{constructor(t,e,i,s,r,a,o,c,l,h){if(h=h!==void 0?h:Ki,h!==Ki&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ki&&(i=Ci),i===void 0&&h===qs&&(i=Ji),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=c!==void 0?c:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Nu=new bn,Ou=new Ja(1,1);Ou.compareFunction=Cu;var Fu=new Ga,Bu=new wc,zu=new Ya,Gh=[],Wh=[],Xh=new Float32Array(16),qh=new Float32Array(9),Yh=new Float32Array(4);function js(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function $e(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function mo(n,t){let e=Wh[t];e===void 0&&(e=new Int32Array(t),Wh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function tg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function eg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2fv(this.addr,t),$e(e,t)}}function ng(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;n.uniform3fv(this.addr,t),$e(e,t)}}function ig(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4fv(this.addr,t),$e(e,t)}}function sg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,i))return;Yh.set(i),n.uniformMatrix2fv(this.addr,!1,Yh),$e(e,i)}}function rg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,i))return;qh.set(i),n.uniformMatrix3fv(this.addr,!1,qh),$e(e,i)}}function ag(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,i))return;Xh.set(i),n.uniformMatrix4fv(this.addr,!1,Xh),$e(e,i)}}function og(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2iv(this.addr,t),$e(e,t)}}function lg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3iv(this.addr,t),$e(e,t)}}function hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4iv(this.addr,t),$e(e,t)}}function ug(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2uiv(this.addr,t),$e(e,t)}}function dg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3uiv(this.addr,t),$e(e,t)}}function pg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4uiv(this.addr,t),$e(e,t)}}function mg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Ou:Nu;e.setTexture2D(t||r,s)}function gg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Bu,s)}function xg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||zu,s)}function _g(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Fu,s)}function yg(n){switch(n){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return cg;case 35668:case 35672:return lg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return fg;case 36295:return dg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return _g}}function vg(n,t){n.uniform1fv(this.addr,t)}function Mg(n,t){let e=js(t,this.size,2);n.uniform2fv(this.addr,e)}function bg(n,t){let e=js(t,this.size,3);n.uniform3fv(this.addr,e)}function Sg(n,t){let e=js(t,this.size,4);n.uniform4fv(this.addr,e)}function Eg(n,t){let e=js(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function wg(n,t){let e=js(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Tg(n,t){let e=js(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ag(n,t){n.uniform1iv(this.addr,t)}function Rg(n,t){n.uniform2iv(this.addr,t)}function Cg(n,t){n.uniform3iv(this.addr,t)}function Ig(n,t){n.uniform4iv(this.addr,t)}function Lg(n,t){n.uniform1uiv(this.addr,t)}function Pg(n,t){n.uniform2uiv(this.addr,t)}function Dg(n,t){n.uniform3uiv(this.addr,t)}function Ug(n,t){n.uniform4uiv(this.addr,t)}function Ng(n,t,e){let i=this.cache,s=t.length,r=mo(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Nu,r[a])}function Og(n,t,e){let i=this.cache,s=t.length,r=mo(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Bu,r[a])}function Fg(n,t,e){let i=this.cache,s=t.length,r=mo(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||zu,r[a])}function Bg(n,t,e){let i=this.cache,s=t.length,r=mo(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Fu,r[a])}function zg(n){switch(n){case 5126:return vg;case 35664:return Mg;case 35665:return bg;case 35666:return Sg;case 35674:return Eg;case 35675:return wg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Pg;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Bg}}var Cc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yg(e.type)}},Ic=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zg(e.type)}},Lc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},lc=/(\w+)(\])?(\[|\.)?/g;function Zh(n,t){n.seq.push(t),n.map[t.id]=t}function kg(n,t,e){let i=n.name,s=i.length;for(lc.lastIndex=0;;){let r=lc.exec(i),a=lc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Zh(e,l===void 0?new Cc(o,n,t):new Ic(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Lc(o),Zh(e,u)),e=u}}}var Gs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);kg(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function $h(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Hg=37297,Vg=0;function Gg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Wg(n){let t=Ae.getPrimaries(Ae.workingColorSpace),e=Ae.getPrimaries(n),i;switch(t===e?i="":t===Fa&&e===Oa?i="LinearDisplayP3ToLinearSRGB":t===Oa&&e===Fa&&(i="LinearSRGBToLinearDisplayP3"),n){case pi:case po:return[i,"LinearTransferOETF"];case qe:case ol:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Jh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Gg(n.getShaderSource(t),a)}else return s}function Xg(n,t){let e=Wg(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qg(n,t){let e;switch(t){case Kf:e="Linear";break;case jf:e="Reinhard";break;case Qf:e="OptimizedCineon";break;case td:e="ACESFilmic";break;case nd:e="AgX";break;case ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Yg(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function Zg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zs).join(`
`)}function $g(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Jg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function zs(n){return n!==""}function Kh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(n){return n.replace(Kg,Qg)}var jg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Qg(n,t){let e=fe[t];if(e===void 0){let i=jg.get(t);if(i!==void 0)e=fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}var tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(n){return n.replace(tx,ex)}function ex(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===wf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function ix(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ws:case Xs:t="ENVMAP_TYPE_CUBE";break;case fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sx(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Xs&&(t="ENVMAP_MODE_REFRACTION"),t}function rx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _u:t="ENVMAP_BLENDING_MULTIPLY";break;case $f:t="ENVMAP_BLENDING_MIX";break;case Jf:t="ENVMAP_BLENDING_ADD";break}return t}function ax(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ox(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=nx(e),l=ix(e),h=sx(e),u=rx(e),f=ax(e),d=e.isWebGL2?"":Yg(e),g=Zg(e),x=$g(r),m=s.createProgram(),p,T,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(zs).join(`
`),p.length>0&&(p+=`
`),T=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(zs).join(`
`),T.length>0&&(T+=`
`)):(p=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),T=[d,tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?fe.tonemapping_pars_fragment:"",e.toneMapping!==Di?qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Xg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),a=Pc(a),a=Kh(a,e),a=jh(a,e),o=Pc(o),o=Kh(o,e),o=jh(o,e),a=Qh(a),o=Qh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,T=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);let R=y+p+a,O=y+T+o,L=$h(s,s.VERTEX_SHADER,R),P=$h(s,s.FRAGMENT_SHADER,O);s.attachShader(m,L),s.attachShader(m,P),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function Z(K){if(n.debug.checkShaderErrors){let $=s.getProgramInfoLog(m).trim(),N=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(P).trim(),j=!0,ut=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,L,P);else{let ot=Jh(s,L,"vertex"),st=Jh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+ot+`
`+st)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(N===""||V==="")&&(ut=!1);ut&&(K.diagnostics={runnable:j,programLog:$,vertexShader:{log:N,prefix:p},fragmentShader:{log:V,prefix:T}})}s.deleteShader(L),s.deleteShader(P),S=new Gs(s,m),b=Jg(s,m)}let S;this.getUniforms=function(){return S===void 0&&Z(this),S};let b;this.getAttributes=function(){return b===void 0&&Z(this),b};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(m,Hg)),H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=L,this.fragmentShader=P,this}var cx=0,Dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Uc(t),e.set(t,i)),i}},Uc=class{constructor(t){this.id=cx++,this.code=t,this.usedTimes=0}};function lx(n,t,e,i,s,r,a){let o=new Ir,c=new Dc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function m(S,b,H,K,$){let N=K.fog,V=$.geometry,j=S.isMeshStandardMaterial?K.environment:null,ut=(S.isMeshStandardMaterial?e:t).get(S.envMap||j),ot=ut&&ut.mapping===fo?ut.image.height:null,st=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let xt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=xt!==void 0?xt.length:0,ft=0;V.morphAttributes.position!==void 0&&(ft=1),V.morphAttributes.normal!==void 0&&(ft=2),V.morphAttributes.color!==void 0&&(ft=3);let Q,pt,It,Nt;if(st){let Oe=$n[st];Q=Oe.vertexShader,pt=Oe.fragmentShader}else Q=S.vertexShader,pt=S.fragmentShader,c.update(S),It=c.getVertexShaderID(S),Nt=c.getFragmentShaderID(S);let Ot=n.getRenderTarget(),$t=$.isInstancedMesh===!0,Jt=$.isBatchedMesh===!0,kt=!!S.map,te=!!S.matcap,U=!!ut,St=!!S.aoMap,rt=!!S.lightMap,Et=!!S.bumpMap,at=!!S.normalMap,Xt=!!S.displacementMap,Lt=!!S.emissiveMap,w=!!S.metalnessMap,v=!!S.roughnessMap,W=S.anisotropy>0,yt=S.clearcoat>0,mt=S.iridescence>0,nt=S.sheen>0,Pt=S.transmission>0,At=W&&!!S.anisotropyMap,Ut=yt&&!!S.clearcoatMap,qt=yt&&!!S.clearcoatNormalMap,Gt=yt&&!!S.clearcoatRoughnessMap,E=mt&&!!S.iridescenceMap,k=mt&&!!S.iridescenceThicknessMap,M=nt&&!!S.sheenColorMap,B=nt&&!!S.sheenRoughnessMap,z=!!S.specularMap,q=!!S.specularColorMap,ct=!!S.specularIntensityMap,dt=Pt&&!!S.transmissionMap,zt=Pt&&!!S.thicknessMap,Vt=!!S.gradientMap,vt=!!S.alphaMap,F=S.alphaTest>0,Tt=!!S.alphaHash,wt=!!S.extensions,Qt=!!V.attributes.uv1,Zt=!!V.attributes.uv2,pe=!!V.attributes.uv3,xe=Di;return S.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(xe=n.toneMapping),{isWebGL2:h,shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:Q,fragmentShader:pt,defines:S.defines,customVertexShaderID:It,customFragmentShaderID:Nt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Jt,instancing:$t,instancingColor:$t&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ot===null?n.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:pi,map:kt,matcap:te,envMap:U,envMapMode:U&&ut.mapping,envMapCubeUVHeight:ot,aoMap:St,lightMap:rt,bumpMap:Et,normalMap:at,displacementMap:f&&Xt,emissiveMap:Lt,normalMapObjectSpace:at&&S.normalMapType===pd,normalMapTangentSpace:at&&S.normalMapType===Ru,metalnessMap:w,roughnessMap:v,anisotropy:W,anisotropyMap:At,clearcoat:yt,clearcoatMap:Ut,clearcoatNormalMap:qt,clearcoatRoughnessMap:Gt,iridescence:mt,iridescenceMap:E,iridescenceThicknessMap:k,sheen:nt,sheenColorMap:M,sheenRoughnessMap:B,specularMap:z,specularColorMap:q,specularIntensityMap:ct,transmission:Pt,transmissionMap:dt,thicknessMap:zt,gradientMap:Vt,opaque:S.transparent===!1&&S.blending===Hs,alphaMap:vt,alphaTest:F,alphaHash:Tt,combine:S.combine,mapUv:kt&&x(S.map.channel),aoMapUv:St&&x(S.aoMap.channel),lightMapUv:rt&&x(S.lightMap.channel),bumpMapUv:Et&&x(S.bumpMap.channel),normalMapUv:at&&x(S.normalMap.channel),displacementMapUv:Xt&&x(S.displacementMap.channel),emissiveMapUv:Lt&&x(S.emissiveMap.channel),metalnessMapUv:w&&x(S.metalnessMap.channel),roughnessMapUv:v&&x(S.roughnessMap.channel),anisotropyMapUv:At&&x(S.anisotropyMap.channel),clearcoatMapUv:Ut&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:qt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:E&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:k&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:M&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:B&&x(S.sheenRoughnessMap.channel),specularMapUv:z&&x(S.specularMap.channel),specularColorMapUv:q&&x(S.specularColorMap.channel),specularIntensityMapUv:ct&&x(S.specularIntensityMap.channel),transmissionMapUv:dt&&x(S.transmissionMap.channel),thicknessMapUv:zt&&x(S.thicknessMap.channel),alphaMapUv:vt&&x(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(at||W),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Qt,vertexUv2s:Zt,vertexUv3s:pe,pointsUvs:$.isPoints===!0&&!!V.attributes.uv&&(kt||vt),fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:ft,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:kt&&S.map.isVideoTexture===!0&&Ae.getTransfer(S.map.colorSpace)===Le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ln,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:wt&&S.extensions.derivatives===!0,extensionFragDepth:wt&&S.extensions.fragDepth===!0,extensionDrawBuffers:wt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:wt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:wt&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let H in S.defines)b.push(H),b.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(T(b,S),y(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function T(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function R(S){let b=g[S.type],H;if(b){let K=$n[b];H=jd.clone(K.uniforms)}else H=S.uniforms;return H}function O(S,b){let H;for(let K=0,$=l.length;K<$;K++){let N=l[K];if(N.cacheKey===b){H=N,++H.usedTimes;break}}return H===void 0&&(H=new ox(n,b,S,r),l.push(H)),H}function L(S){if(--S.usedTimes===0){let b=l.indexOf(S);l[b]=l[l.length-1],l.pop(),S.destroy()}}function P(S){c.remove(S)}function Z(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:R,acquireProgram:O,releaseProgram:L,releaseShaderCache:P,programs:l,dispose:Z}}function hx(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function ux(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function eu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function nu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,f,d,g,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||ux),i.length>1&&i.sort(f||eu),s.length>1&&s.sort(f||eu)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function fx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new nu,n.set(i,[a])):s>=r.length?(a=new nu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function dx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Wt};break;case"SpotLight":e={position:new D,direction:new D,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function px(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var mx=0;function gx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xx(n,t){let e=new dx,i=px(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new D);let r=new D,a=new be,o=new be;function c(h,u){let f=0,d=0,g=0;for(let K=0;K<9;K++)s.probe[K].set(0,0,0);let x=0,m=0,p=0,T=0,y=0,R=0,O=0,L=0,P=0,Z=0,S=0;h.sort(gx);let b=u===!0?Math.PI:1;for(let K=0,$=h.length;K<$;K++){let N=h[K],V=N.color,j=N.intensity,ut=N.distance,ot=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=V.r*j*b,d+=V.g*j*b,g+=V.b*j*b;else if(N.isLightProbe){for(let st=0;st<9;st++)s.probe[st].addScaledVector(N.sh.coefficients[st],j);S++}else if(N.isDirectionalLight){let st=e.get(N);if(st.color.copy(N.color).multiplyScalar(N.intensity*b),N.castShadow){let xt=N.shadow,_t=i.get(N);_t.shadowBias=xt.bias,_t.shadowNormalBias=xt.normalBias,_t.shadowRadius=xt.radius,_t.shadowMapSize=xt.mapSize,s.directionalShadow[x]=_t,s.directionalShadowMap[x]=ot,s.directionalShadowMatrix[x]=N.shadow.matrix,R++}s.directional[x]=st,x++}else if(N.isSpotLight){let st=e.get(N);st.position.setFromMatrixPosition(N.matrixWorld),st.color.copy(V).multiplyScalar(j*b),st.distance=ut,st.coneCos=Math.cos(N.angle),st.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),st.decay=N.decay,s.spot[p]=st;let xt=N.shadow;if(N.map&&(s.spotLightMap[P]=N.map,P++,xt.updateMatrices(N),N.castShadow&&Z++),s.spotLightMatrix[p]=xt.matrix,N.castShadow){let _t=i.get(N);_t.shadowBias=xt.bias,_t.shadowNormalBias=xt.normalBias,_t.shadowRadius=xt.radius,_t.shadowMapSize=xt.mapSize,s.spotShadow[p]=_t,s.spotShadowMap[p]=ot,L++}p++}else if(N.isRectAreaLight){let st=e.get(N);st.color.copy(V).multiplyScalar(j),st.halfWidth.set(N.width*.5,0,0),st.halfHeight.set(0,N.height*.5,0),s.rectArea[T]=st,T++}else if(N.isPointLight){let st=e.get(N);if(st.color.copy(N.color).multiplyScalar(N.intensity*b),st.distance=N.distance,st.decay=N.decay,N.castShadow){let xt=N.shadow,_t=i.get(N);_t.shadowBias=xt.bias,_t.shadowNormalBias=xt.normalBias,_t.shadowRadius=xt.radius,_t.shadowMapSize=xt.mapSize,_t.shadowCameraNear=xt.camera.near,_t.shadowCameraFar=xt.camera.far,s.pointShadow[m]=_t,s.pointShadowMap[m]=ot,s.pointShadowMatrix[m]=N.shadow.matrix,O++}s.point[m]=st,m++}else if(N.isHemisphereLight){let st=e.get(N);st.skyColor.copy(N.color).multiplyScalar(j*b),st.groundColor.copy(N.groundColor).multiplyScalar(j*b),s.hemi[y]=st,y++}}T>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ct.LTC_FLOAT_1,s.rectAreaLTC2=Ct.LTC_FLOAT_2):(s.rectAreaLTC1=Ct.LTC_HALF_1,s.rectAreaLTC2=Ct.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ct.LTC_FLOAT_1,s.rectAreaLTC2=Ct.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ct.LTC_HALF_1,s.rectAreaLTC2=Ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let H=s.hash;(H.directionalLength!==x||H.pointLength!==m||H.spotLength!==p||H.rectAreaLength!==T||H.hemiLength!==y||H.numDirectionalShadows!==R||H.numPointShadows!==O||H.numSpotShadows!==L||H.numSpotMaps!==P||H.numLightProbes!==S)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=T,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=L+P-Z,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=Z,s.numLightProbes=S,H.directionalLength=x,H.pointLength=m,H.spotLength=p,H.rectAreaLength=T,H.hemiLength=y,H.numDirectionalShadows=R,H.numPointShadows=O,H.numSpotShadows=L,H.numSpotMaps=P,H.numLightProbes=S,s.version=mx++)}function l(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let T=0,y=h.length;T<y;T++){let R=h[T];if(R.isDirectionalLight){let O=s.directional[f];O.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),f++}else if(R.isSpotLight){let O=s.spot[g];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(p),O.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),g++}else if(R.isRectAreaLight){let O=s.rectArea[x];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(p),o.identity(),a.copy(R.matrixWorld),a.premultiply(p),o.extractRotation(a),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),x++}else if(R.isPointLight){let O=s.point[d];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(p),d++}else if(R.isHemisphereLight){let O=s.hemi[m];O.direction.setFromMatrixPosition(R.matrixWorld),O.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function iu(n,t){let e=new xx(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function c(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function _x(n,t){let e=new WeakMap;function i(r,a=0){let o=e.get(r),c;return o===void 0?(c=new iu(n,t),e.set(r,[c])):a>=o.length?(c=new iu(n,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:i,dispose:s}}var Nc=class extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Oc=class extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mx(n,t,e){let i=new Lr,s=new Mt,r=new Mt,a=new en,o=new Nc({depthPacking:dd}),c=new Oc,l={},h=e.maxTextureSize,u={[Ni]:un,[un]:Ni,[Ln]:Ln},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:yx,fragmentShader:vx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ve(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let p=this.type;this.render=function(L,P,Z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;let S=n.getRenderTarget(),b=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Pi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let $=p!==fi&&this.type===fi,N=p===fi&&this.type!==fi;for(let V=0,j=L.length;V<j;V++){let ut=L[V],ot=ut.shadow;if(ot===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(ot.autoUpdate===!1&&ot.needsUpdate===!1)continue;s.copy(ot.mapSize);let st=ot.getFrameExtents();if(s.multiply(st),r.copy(ot.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,ot.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,ot.mapSize.y=r.y)),ot.map===null||$===!0||N===!0){let _t=this.type!==fi?{minFilter:Ve,magFilter:Ve}:{};ot.map!==null&&ot.map.dispose(),ot.map=new mi(s.x,s.y,_t),ot.map.texture.name=ut.name+".shadowMap",ot.camera.updateProjectionMatrix()}n.setRenderTarget(ot.map),n.clear();let xt=ot.getViewportCount();for(let _t=0;_t<xt;_t++){let ft=ot.getViewport(_t);a.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),K.viewport(a),ot.updateMatrices(ut,_t),i=ot.getFrustum(),R(P,Z,ot.camera,ut,this.type)}ot.isPointLightShadow!==!0&&this.type===fi&&T(ot,Z),ot.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,b,H)};function T(L,P){let Z=t.update(x);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new mi(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,Z,f,x,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,Z,d,x,null)}function y(L,P,Z,S){let b=null,H=Z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)b=H;else if(b=Z.isPointLight===!0?c:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let K=b.uuid,$=P.uuid,N=l[K];N===void 0&&(N={},l[K]=N);let V=N[$];V===void 0&&(V=b.clone(),N[$]=V,P.addEventListener("dispose",O)),b=V}if(b.visible=P.visible,b.wireframe=P.wireframe,S===fi?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,Z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let K=n.properties.get(b);K.light=Z}return b}function R(L,P,Z,S,b){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===fi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,L.matrixWorld);let $=t.update(L),N=L.material;if(Array.isArray(N)){let V=$.groups;for(let j=0,ut=V.length;j<ut;j++){let ot=V[j],st=N[ot.materialIndex];if(st&&st.visible){let xt=y(L,st,S,b);L.onBeforeShadow(n,L,P,Z,$,xt,ot),n.renderBufferDirect(Z,null,$,xt,L,ot),L.onAfterShadow(n,L,P,Z,$,xt,ot)}}}else if(N.visible){let V=y(L,N,S,b);L.onBeforeShadow(n,L,P,Z,$,V,null),n.renderBufferDirect(Z,null,$,V,L,null),L.onAfterShadow(n,L,P,Z,$,V,null)}}let K=L.children;for(let $=0,N=K.length;$<N;$++)R(K[$],P,Z,S,b)}function O(L){L.target.removeEventListener("dispose",O);for(let Z in l){let S=l[Z],b=L.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function bx(n,t,e){let i=e.isWebGL2;function s(){let F=!1,Tt=new en,wt=null,Qt=new en(0,0,0,0);return{setMask:function(Zt){wt!==Zt&&!F&&(n.colorMask(Zt,Zt,Zt,Zt),wt=Zt)},setLocked:function(Zt){F=Zt},setClear:function(Zt,pe,xe,ke,Oe){Oe===!0&&(Zt*=ke,pe*=ke,xe*=ke),Tt.set(Zt,pe,xe,ke),Qt.equals(Tt)===!1&&(n.clearColor(Zt,pe,xe,ke),Qt.copy(Tt))},reset:function(){F=!1,wt=null,Qt.set(-1,0,0,0)}}}function r(){let F=!1,Tt=null,wt=null,Qt=null;return{setTest:function(Zt){Zt?Jt(n.DEPTH_TEST):kt(n.DEPTH_TEST)},setMask:function(Zt){Tt!==Zt&&!F&&(n.depthMask(Zt),Tt=Zt)},setFunc:function(Zt){if(wt!==Zt){switch(Zt){case Vf:n.depthFunc(n.NEVER);break;case Gf:n.depthFunc(n.ALWAYS);break;case Wf:n.depthFunc(n.LESS);break;case Pa:n.depthFunc(n.LEQUAL);break;case Xf:n.depthFunc(n.EQUAL);break;case qf:n.depthFunc(n.GEQUAL);break;case Yf:n.depthFunc(n.GREATER);break;case Zf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=Zt}},setLocked:function(Zt){F=Zt},setClear:function(Zt){Qt!==Zt&&(n.clearDepth(Zt),Qt=Zt)},reset:function(){F=!1,Tt=null,wt=null,Qt=null}}}function a(){let F=!1,Tt=null,wt=null,Qt=null,Zt=null,pe=null,xe=null,ke=null,Oe=null;return{setTest:function(we){F||(we?Jt(n.STENCIL_TEST):kt(n.STENCIL_TEST))},setMask:function(we){Tt!==we&&!F&&(n.stencilMask(we),Tt=we)},setFunc:function(we,Ke,yn){(wt!==we||Qt!==Ke||Zt!==yn)&&(n.stencilFunc(we,Ke,yn),wt=we,Qt=Ke,Zt=yn)},setOp:function(we,Ke,yn){(pe!==we||xe!==Ke||ke!==yn)&&(n.stencilOp(we,Ke,yn),pe=we,xe=Ke,ke=yn)},setLocked:function(we){F=we},setClear:function(we){Oe!==we&&(n.clearStencil(we),Oe=we)},reset:function(){F=!1,Tt=null,wt=null,Qt=null,Zt=null,pe=null,xe=null,ke=null,Oe=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,T=null,y=null,R=null,O=null,L=null,P=null,Z=null,S=new Wt(0,0,0),b=0,H=!1,K=null,$=null,N=null,V=null,j=null,ut=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ot=!1,st=0,xt=n.getParameter(n.VERSION);xt.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(xt)[1]),ot=st>=1):xt.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(xt)[1]),ot=st>=2);let _t=null,ft={},Q=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),It=new en().fromArray(Q),Nt=new en().fromArray(pt);function Ot(F,Tt,wt,Qt){let Zt=new Uint8Array(4),pe=n.createTexture();n.bindTexture(F,pe),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<wt;xe++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(Tt,0,n.RGBA,1,1,Qt,0,n.RGBA,n.UNSIGNED_BYTE,Zt):n.texImage2D(Tt+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Zt);return pe}let $t={};$t[n.TEXTURE_2D]=Ot(n.TEXTURE_2D,n.TEXTURE_2D,1),$t[n.TEXTURE_CUBE_MAP]=Ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&($t[n.TEXTURE_2D_ARRAY]=Ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$t[n.TEXTURE_3D]=Ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Jt(n.DEPTH_TEST),c.setFunc(Pa),Lt(!1),w(Bl),Jt(n.CULL_FACE),at(Pi);function Jt(F){f[F]!==!0&&(n.enable(F),f[F]=!0)}function kt(F){f[F]!==!1&&(n.disable(F),f[F]=!1)}function te(F,Tt){return d[F]!==Tt?(n.bindFramebuffer(F,Tt),d[F]=Tt,i&&(F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Tt),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Tt)),!0):!1}function U(F,Tt){let wt=x,Qt=!1;if(F)if(wt=g.get(Tt),wt===void 0&&(wt=[],g.set(Tt,wt)),F.isWebGLMultipleRenderTargets){let Zt=F.texture;if(wt.length!==Zt.length||wt[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,xe=Zt.length;pe<xe;pe++)wt[pe]=n.COLOR_ATTACHMENT0+pe;wt.length=Zt.length,Qt=!0}}else wt[0]!==n.COLOR_ATTACHMENT0&&(wt[0]=n.COLOR_ATTACHMENT0,Qt=!0);else wt[0]!==n.BACK&&(wt[0]=n.BACK,Qt=!0);Qt&&(e.isWebGL2?n.drawBuffers(wt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(wt))}function St(F){return m!==F?(n.useProgram(F),m=F,!0):!1}let rt={[Yi]:n.FUNC_ADD,[Af]:n.FUNC_SUBTRACT,[Rf]:n.FUNC_REVERSE_SUBTRACT};if(i)rt[Hl]=n.MIN,rt[Vl]=n.MAX;else{let F=t.get("EXT_blend_minmax");F!==null&&(rt[Hl]=F.MIN_EXT,rt[Vl]=F.MAX_EXT)}let Et={[Cf]:n.ZERO,[If]:n.ONE,[Lf]:n.SRC_COLOR,[mc]:n.SRC_ALPHA,[Ff]:n.SRC_ALPHA_SATURATE,[Nf]:n.DST_COLOR,[Df]:n.DST_ALPHA,[Pf]:n.ONE_MINUS_SRC_COLOR,[gc]:n.ONE_MINUS_SRC_ALPHA,[Of]:n.ONE_MINUS_DST_COLOR,[Uf]:n.ONE_MINUS_DST_ALPHA,[Bf]:n.CONSTANT_COLOR,[zf]:n.ONE_MINUS_CONSTANT_COLOR,[kf]:n.CONSTANT_ALPHA,[Hf]:n.ONE_MINUS_CONSTANT_ALPHA};function at(F,Tt,wt,Qt,Zt,pe,xe,ke,Oe,we){if(F===Pi){p===!0&&(kt(n.BLEND),p=!1);return}if(p===!1&&(Jt(n.BLEND),p=!0),F!==Tf){if(F!==T||we!==H){if((y!==Yi||L!==Yi)&&(n.blendEquation(n.FUNC_ADD),y=Yi,L=Yi),we)switch(F){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tr:n.blendFunc(n.ONE,n.ONE);break;case zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}R=null,O=null,P=null,Z=null,S.set(0,0,0),b=0,T=F,H=we}return}Zt=Zt||Tt,pe=pe||wt,xe=xe||Qt,(Tt!==y||Zt!==L)&&(n.blendEquationSeparate(rt[Tt],rt[Zt]),y=Tt,L=Zt),(wt!==R||Qt!==O||pe!==P||xe!==Z)&&(n.blendFuncSeparate(Et[wt],Et[Qt],Et[pe],Et[xe]),R=wt,O=Qt,P=pe,Z=xe),(ke.equals(S)===!1||Oe!==b)&&(n.blendColor(ke.r,ke.g,ke.b,Oe),S.copy(ke),b=Oe),T=F,H=!1}function Xt(F,Tt){F.side===Ln?kt(n.CULL_FACE):Jt(n.CULL_FACE);let wt=F.side===un;Tt&&(wt=!wt),Lt(wt),F.blending===Hs&&F.transparent===!1?at(Pi):at(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),o.setMask(F.colorWrite);let Qt=F.stencilWrite;l.setTest(Qt),Qt&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),W(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Jt(n.SAMPLE_ALPHA_TO_COVERAGE):kt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(F){K!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),K=F)}function w(F){F!==Sf?(Jt(n.CULL_FACE),F!==$&&(F===Bl?n.cullFace(n.BACK):F===Ef?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):kt(n.CULL_FACE),$=F}function v(F){F!==N&&(ot&&n.lineWidth(F),N=F)}function W(F,Tt,wt){F?(Jt(n.POLYGON_OFFSET_FILL),(V!==Tt||j!==wt)&&(n.polygonOffset(Tt,wt),V=Tt,j=wt)):kt(n.POLYGON_OFFSET_FILL)}function yt(F){F?Jt(n.SCISSOR_TEST):kt(n.SCISSOR_TEST)}function mt(F){F===void 0&&(F=n.TEXTURE0+ut-1),_t!==F&&(n.activeTexture(F),_t=F)}function nt(F,Tt,wt){wt===void 0&&(_t===null?wt=n.TEXTURE0+ut-1:wt=_t);let Qt=ft[wt];Qt===void 0&&(Qt={type:void 0,texture:void 0},ft[wt]=Qt),(Qt.type!==F||Qt.texture!==Tt)&&(_t!==wt&&(n.activeTexture(wt),_t=wt),n.bindTexture(F,Tt||$t[F]),Qt.type=F,Qt.texture=Tt)}function Pt(){let F=ft[_t];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function At(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ut(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qt(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Gt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function E(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function M(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function B(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(F){It.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),It.copy(F))}function dt(F){Nt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Nt.copy(F))}function zt(F,Tt){let wt=u.get(Tt);wt===void 0&&(wt=new WeakMap,u.set(Tt,wt));let Qt=wt.get(F);Qt===void 0&&(Qt=n.getUniformBlockIndex(Tt,F.name),wt.set(F,Qt))}function Vt(F,Tt){let Qt=u.get(Tt).get(F);h.get(Tt)!==Qt&&(n.uniformBlockBinding(Tt,Qt,F.__bindingPointIndex),h.set(Tt,Qt))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},_t=null,ft={},d={},g=new WeakMap,x=[],m=null,p=!1,T=null,y=null,R=null,O=null,L=null,P=null,Z=null,S=new Wt(0,0,0),b=0,H=!1,K=null,$=null,N=null,V=null,j=null,It.set(0,0,n.canvas.width,n.canvas.height),Nt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Jt,disable:kt,bindFramebuffer:te,drawBuffers:U,useProgram:St,setBlending:at,setMaterial:Xt,setFlipSided:Lt,setCullFace:w,setLineWidth:v,setPolygonOffset:W,setScissorTest:yt,activeTexture:mt,bindTexture:nt,unbindTexture:Pt,compressedTexImage2D:At,compressedTexImage3D:Ut,texImage2D:z,texImage3D:q,updateUBOMapping:zt,uniformBlockBinding:Vt,texStorage2D:M,texStorage3D:B,texSubImage2D:qt,texSubImage3D:Gt,compressedTexSubImage2D:E,compressedTexSubImage3D:k,scissor:ct,viewport:dt,reset:vt}}function Sx(n,t,e,i,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return d?new OffscreenCanvas(w,v):ka("canvas")}function x(w,v,W,yt){let mt=1;if((w.width>yt||w.height>yt)&&(mt=yt/Math.max(w.width,w.height)),mt<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let nt=v?za:Math.floor,Pt=nt(mt*w.width),At=nt(mt*w.height);u===void 0&&(u=g(Pt,At));let Ut=W?g(Pt,At):u;return Ut.width=Pt,Ut.height=At,Ut.getContext("2d").drawImage(w,0,0,Pt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Pt+"x"+At+")."),Ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Sc(w.width)&&Sc(w.height)}function p(w){return o?!1:w.wrapS!==Gn||w.wrapT!==Gn||w.minFilter!==Ve&&w.minFilter!==In}function T(w,v){return w.generateMipmaps&&v&&w.minFilter!==Ve&&w.minFilter!==In}function y(w){n.generateMipmap(w)}function R(w,v,W,yt,mt=!1){if(o===!1)return v;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let nt=v;if(v===n.RED&&(W===n.FLOAT&&(nt=n.R32F),W===n.HALF_FLOAT&&(nt=n.R16F),W===n.UNSIGNED_BYTE&&(nt=n.R8)),v===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(nt=n.R8UI),W===n.UNSIGNED_SHORT&&(nt=n.R16UI),W===n.UNSIGNED_INT&&(nt=n.R32UI),W===n.BYTE&&(nt=n.R8I),W===n.SHORT&&(nt=n.R16I),W===n.INT&&(nt=n.R32I)),v===n.RG&&(W===n.FLOAT&&(nt=n.RG32F),W===n.HALF_FLOAT&&(nt=n.RG16F),W===n.UNSIGNED_BYTE&&(nt=n.RG8)),v===n.RGBA){let Pt=mt?Na:Ae.getTransfer(yt);W===n.FLOAT&&(nt=n.RGBA32F),W===n.HALF_FLOAT&&(nt=n.RGBA16F),W===n.UNSIGNED_BYTE&&(nt=Pt===Le?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function O(w,v,W){return T(w,W)===!0||w.isFramebufferTexture&&w.minFilter!==Ve&&w.minFilter!==In?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function L(w){return w===Ve||w===Gl||w===No?n.NEAREST:n.LINEAR}function P(w){let v=w.target;v.removeEventListener("dispose",P),S(v),v.isVideoTexture&&h.delete(v)}function Z(w){let v=w.target;v.removeEventListener("dispose",Z),H(v)}function S(w){let v=i.get(w);if(v.__webglInit===void 0)return;let W=w.source,yt=f.get(W);if(yt){let mt=yt[v.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&b(w),Object.keys(yt).length===0&&f.delete(W)}i.remove(w)}function b(w){let v=i.get(w);n.deleteTexture(v.__webglTexture);let W=w.source,yt=f.get(W);delete yt[v.__cacheKey],a.memory.textures--}function H(w){let v=w.texture,W=i.get(w),yt=i.get(v);if(yt.__webglTexture!==void 0&&(n.deleteTexture(yt.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(W.__webglFramebuffer[mt]))for(let nt=0;nt<W.__webglFramebuffer[mt].length;nt++)n.deleteFramebuffer(W.__webglFramebuffer[mt][nt]);else n.deleteFramebuffer(W.__webglFramebuffer[mt]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[mt])}else{if(Array.isArray(W.__webglFramebuffer))for(let mt=0;mt<W.__webglFramebuffer.length;mt++)n.deleteFramebuffer(W.__webglFramebuffer[mt]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let mt=0;mt<W.__webglColorRenderbuffer.length;mt++)W.__webglColorRenderbuffer[mt]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[mt]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let mt=0,nt=v.length;mt<nt;mt++){let Pt=i.get(v[mt]);Pt.__webglTexture&&(n.deleteTexture(Pt.__webglTexture),a.memory.textures--),i.remove(v[mt])}i.remove(v),i.remove(w)}let K=0;function $(){K=0}function N(){let w=K;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),K+=1,w}function V(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function j(w,v){let W=i.get(w);if(w.isVideoTexture&&Xt(w),w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){let yt=w.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{It(W,w,v);return}}e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+v)}function ut(w,v){let W=i.get(w);if(w.version>0&&W.__version!==w.version){It(W,w,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+v)}function ot(w,v){let W=i.get(w);if(w.version>0&&W.__version!==w.version){It(W,w,v);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+v)}function st(w,v){let W=i.get(w);if(w.version>0&&W.__version!==w.version){Nt(W,w,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+v)}let xt={[yc]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[vc]:n.MIRRORED_REPEAT},_t={[Ve]:n.NEAREST,[Gl]:n.NEAREST_MIPMAP_NEAREST,[No]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[id]:n.LINEAR_MIPMAP_NEAREST,[Ar]:n.LINEAR_MIPMAP_LINEAR},ft={[md]:n.NEVER,[Md]:n.ALWAYS,[gd]:n.LESS,[Cu]:n.LEQUAL,[xd]:n.EQUAL,[vd]:n.GEQUAL,[_d]:n.GREATER,[yd]:n.NOTEQUAL};function Q(w,v,W){if(W?(n.texParameteri(w,n.TEXTURE_WRAP_S,xt[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,xt[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,xt[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,_t[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,_t[v.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Gn||v.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,L(v.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,L(v.minFilter)),v.minFilter!==Ve&&v.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ft[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let yt=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ve||v.minFilter!==No&&v.minFilter!==Ar||v.type===Ii&&t.has("OES_texture_float_linear")===!1||o===!1&&v.type===Rr&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(w,yt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function pt(w,v){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",P));let yt=v.source,mt=f.get(yt);mt===void 0&&(mt={},f.set(yt,mt));let nt=V(v);if(nt!==w.__cacheKey){mt[nt]===void 0&&(mt[nt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),mt[nt].usedTimes++;let Pt=mt[w.__cacheKey];Pt!==void 0&&(mt[w.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(v)),w.__cacheKey=nt,w.__webglTexture=mt[nt].texture}return W}function It(w,v,W){let yt=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(yt=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(yt=n.TEXTURE_3D);let mt=pt(w,v),nt=v.source;e.bindTexture(yt,w.__webglTexture,n.TEXTURE0+W);let Pt=i.get(nt);if(nt.version!==Pt.__version||mt===!0){e.activeTexture(n.TEXTURE0+W);let At=Ae.getPrimaries(Ae.workingColorSpace),Ut=v.colorSpace===Pn?null:Ae.getPrimaries(v.colorSpace),qt=v.colorSpace===Pn||At===Ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Gt=p(v)&&m(v.image)===!1,E=x(v.image,Gt,!1,s.maxTextureSize);E=Lt(v,E);let k=m(E)||o,M=r.convert(v.format,v.colorSpace),B=r.convert(v.type),z=R(v.internalFormat,M,B,v.colorSpace,v.isVideoTexture);Q(yt,v,k);let q,ct=v.mipmaps,dt=o&&v.isVideoTexture!==!0&&z!==Tu,zt=Pt.__version===void 0||mt===!0,Vt=O(v,E,k);if(v.isDepthTexture)z=n.DEPTH_COMPONENT,o?v.type===Ii?z=n.DEPTH_COMPONENT32F:v.type===Ci?z=n.DEPTH_COMPONENT24:v.type===Ji?z=n.DEPTH24_STENCIL8:z=n.DEPTH_COMPONENT16:v.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ki&&z===n.DEPTH_COMPONENT&&v.type!==al&&v.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Ci,B=r.convert(v.type)),v.format===qs&&z===n.DEPTH_COMPONENT&&(z=n.DEPTH_STENCIL,v.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ji,B=r.convert(v.type))),zt&&(dt?e.texStorage2D(n.TEXTURE_2D,1,z,E.width,E.height):e.texImage2D(n.TEXTURE_2D,0,z,E.width,E.height,0,M,B,null));else if(v.isDataTexture)if(ct.length>0&&k){dt&&zt&&e.texStorage2D(n.TEXTURE_2D,Vt,z,ct[0].width,ct[0].height);for(let vt=0,F=ct.length;vt<F;vt++)q=ct[vt],dt?e.texSubImage2D(n.TEXTURE_2D,vt,0,0,q.width,q.height,M,B,q.data):e.texImage2D(n.TEXTURE_2D,vt,z,q.width,q.height,0,M,B,q.data);v.generateMipmaps=!1}else dt?(zt&&e.texStorage2D(n.TEXTURE_2D,Vt,z,E.width,E.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,M,B,E.data)):e.texImage2D(n.TEXTURE_2D,0,z,E.width,E.height,0,M,B,E.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){dt&&zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Vt,z,ct[0].width,ct[0].height,E.depth);for(let vt=0,F=ct.length;vt<F;vt++)q=ct[vt],v.format!==_n?M!==null?dt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,q.width,q.height,E.depth,M,q.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,vt,z,q.width,q.height,E.depth,0,q.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,q.width,q.height,E.depth,M,B,q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,vt,z,q.width,q.height,E.depth,0,M,B,q.data)}else{dt&&zt&&e.texStorage2D(n.TEXTURE_2D,Vt,z,ct[0].width,ct[0].height);for(let vt=0,F=ct.length;vt<F;vt++)q=ct[vt],v.format!==_n?M!==null?dt?e.compressedTexSubImage2D(n.TEXTURE_2D,vt,0,0,q.width,q.height,M,q.data):e.compressedTexImage2D(n.TEXTURE_2D,vt,z,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage2D(n.TEXTURE_2D,vt,0,0,q.width,q.height,M,B,q.data):e.texImage2D(n.TEXTURE_2D,vt,z,q.width,q.height,0,M,B,q.data)}else if(v.isDataArrayTexture)dt?(zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Vt,z,E.width,E.height,E.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,E.width,E.height,E.depth,M,B,E.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,z,E.width,E.height,E.depth,0,M,B,E.data);else if(v.isData3DTexture)dt?(zt&&e.texStorage3D(n.TEXTURE_3D,Vt,z,E.width,E.height,E.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,E.width,E.height,E.depth,M,B,E.data)):e.texImage3D(n.TEXTURE_3D,0,z,E.width,E.height,E.depth,0,M,B,E.data);else if(v.isFramebufferTexture){if(zt)if(dt)e.texStorage2D(n.TEXTURE_2D,Vt,z,E.width,E.height);else{let vt=E.width,F=E.height;for(let Tt=0;Tt<Vt;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,z,vt,F,0,M,B,null),vt>>=1,F>>=1}}else if(ct.length>0&&k){dt&&zt&&e.texStorage2D(n.TEXTURE_2D,Vt,z,ct[0].width,ct[0].height);for(let vt=0,F=ct.length;vt<F;vt++)q=ct[vt],dt?e.texSubImage2D(n.TEXTURE_2D,vt,0,0,M,B,q):e.texImage2D(n.TEXTURE_2D,vt,z,M,B,q);v.generateMipmaps=!1}else dt?(zt&&e.texStorage2D(n.TEXTURE_2D,Vt,z,E.width,E.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,M,B,E)):e.texImage2D(n.TEXTURE_2D,0,z,M,B,E);T(v,k)&&y(yt),Pt.__version=nt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Nt(w,v,W){if(v.image.length!==6)return;let yt=pt(w,v),mt=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+W);let nt=i.get(mt);if(mt.version!==nt.__version||yt===!0){e.activeTexture(n.TEXTURE0+W);let Pt=Ae.getPrimaries(Ae.workingColorSpace),At=v.colorSpace===Pn?null:Ae.getPrimaries(v.colorSpace),Ut=v.colorSpace===Pn||Pt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let qt=v.isCompressedTexture||v.image[0].isCompressedTexture,Gt=v.image[0]&&v.image[0].isDataTexture,E=[];for(let vt=0;vt<6;vt++)!qt&&!Gt?E[vt]=x(v.image[vt],!1,!0,s.maxCubemapSize):E[vt]=Gt?v.image[vt].image:v.image[vt],E[vt]=Lt(v,E[vt]);let k=E[0],M=m(k)||o,B=r.convert(v.format,v.colorSpace),z=r.convert(v.type),q=R(v.internalFormat,B,z,v.colorSpace),ct=o&&v.isVideoTexture!==!0,dt=nt.__version===void 0||yt===!0,zt=O(v,k,M);Q(n.TEXTURE_CUBE_MAP,v,M);let Vt;if(qt){ct&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,zt,q,k.width,k.height);for(let vt=0;vt<6;vt++){Vt=E[vt].mipmaps;for(let F=0;F<Vt.length;F++){let Tt=Vt[F];v.format!==_n?B!==null?ct?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,0,0,Tt.width,Tt.height,B,Tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,q,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,0,0,Tt.width,Tt.height,B,z,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,q,Tt.width,Tt.height,0,B,z,Tt.data)}}}else{Vt=v.mipmaps,ct&&dt&&(Vt.length>0&&zt++,e.texStorage2D(n.TEXTURE_CUBE_MAP,zt,q,E[0].width,E[0].height));for(let vt=0;vt<6;vt++)if(Gt){ct?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,E[vt].width,E[vt].height,B,z,E[vt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,q,E[vt].width,E[vt].height,0,B,z,E[vt].data);for(let F=0;F<Vt.length;F++){let wt=Vt[F].image[vt].image;ct?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,0,0,wt.width,wt.height,B,z,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,q,wt.width,wt.height,0,B,z,wt.data)}}else{ct?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,B,z,E[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,q,B,z,E[vt]);for(let F=0;F<Vt.length;F++){let Tt=Vt[F];ct?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,0,0,B,z,Tt.image[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,q,B,z,Tt.image[vt])}}}T(v,M)&&y(n.TEXTURE_CUBE_MAP),nt.__version=mt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ot(w,v,W,yt,mt,nt){let Pt=r.convert(W.format,W.colorSpace),At=r.convert(W.type),Ut=R(W.internalFormat,Pt,At,W.colorSpace);if(!i.get(v).__hasExternalTextures){let Gt=Math.max(1,v.width>>nt),E=Math.max(1,v.height>>nt);mt===n.TEXTURE_3D||mt===n.TEXTURE_2D_ARRAY?e.texImage3D(mt,nt,Ut,Gt,E,v.depth,0,Pt,At,null):e.texImage2D(mt,nt,Ut,Gt,E,0,Pt,At,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),at(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,yt,mt,i.get(W).__webglTexture,0,Et(v)):(mt===n.TEXTURE_2D||mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,yt,mt,i.get(W).__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function $t(w,v,W){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer&&!v.stencilBuffer){let yt=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(W||at(v)){let mt=v.depthTexture;mt&&mt.isDepthTexture&&(mt.type===Ii?yt=n.DEPTH_COMPONENT32F:mt.type===Ci&&(yt=n.DEPTH_COMPONENT24));let nt=Et(v);at(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,yt,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,yt,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,yt,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(v.depthBuffer&&v.stencilBuffer){let yt=Et(v);W&&at(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,n.DEPTH24_STENCIL8,v.width,v.height):at(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{let yt=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let mt=0;mt<yt.length;mt++){let nt=yt[mt],Pt=r.convert(nt.format,nt.colorSpace),At=r.convert(nt.type),Ut=R(nt.internalFormat,Pt,At,nt.colorSpace),qt=Et(v);W&&at(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,Ut,v.width,v.height):at(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qt,Ut,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ut,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Jt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);let yt=i.get(v.depthTexture).__webglTexture,mt=Et(v);if(v.depthTexture.format===Ki)at(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,yt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,yt,0);else if(v.depthTexture.format===qs)at(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,yt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function kt(w){let v=i.get(w),W=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Jt(v.__webglFramebuffer,w)}else if(W){v.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[yt]),v.__webglDepthbuffer[yt]=n.createRenderbuffer(),$t(v.__webglDepthbuffer[yt],w,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),$t(v.__webglDepthbuffer,w,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function te(w,v,W){let yt=i.get(w);v!==void 0&&Ot(yt.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&kt(w)}function U(w){let v=w.texture,W=i.get(w),yt=i.get(v);w.addEventListener("dispose",Z),w.isWebGLMultipleRenderTargets!==!0&&(yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture()),yt.__version=v.version,a.memory.textures++);let mt=w.isWebGLCubeRenderTarget===!0,nt=w.isWebGLMultipleRenderTargets===!0,Pt=m(w)||o;if(mt){W.__webglFramebuffer=[];for(let At=0;At<6;At++)if(o&&v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer[At]=[];for(let Ut=0;Ut<v.mipmaps.length;Ut++)W.__webglFramebuffer[At][Ut]=n.createFramebuffer()}else W.__webglFramebuffer[At]=n.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer=[];for(let At=0;At<v.mipmaps.length;At++)W.__webglFramebuffer[At]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(nt)if(s.drawBuffers){let At=w.texture;for(let Ut=0,qt=At.length;Ut<qt;Ut++){let Gt=i.get(At[Ut]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&at(w)===!1){let At=nt?v:[v];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ut=0;Ut<At.length;Ut++){let qt=At[Ut];W.__webglColorRenderbuffer[Ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[Ut]);let Gt=r.convert(qt.format,qt.colorSpace),E=r.convert(qt.type),k=R(qt.internalFormat,Gt,E,qt.colorSpace,w.isXRRenderTarget===!0),M=Et(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,M,k,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,W.__webglColorRenderbuffer[Ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),$t(W.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,yt.__webglTexture),Q(n.TEXTURE_CUBE_MAP,v,Pt);for(let At=0;At<6;At++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let Ut=0;Ut<v.mipmaps.length;Ut++)Ot(W.__webglFramebuffer[At][Ut],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ut);else Ot(W.__webglFramebuffer[At],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);T(v,Pt)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){let At=w.texture;for(let Ut=0,qt=At.length;Ut<qt;Ut++){let Gt=At[Ut],E=i.get(Gt);e.bindTexture(n.TEXTURE_2D,E.__webglTexture),Q(n.TEXTURE_2D,Gt,Pt),Ot(W.__webglFramebuffer,w,Gt,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,0),T(Gt,Pt)&&y(n.TEXTURE_2D)}e.unbindTexture()}else{let At=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?At=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(At,yt.__webglTexture),Q(At,v,Pt),o&&v.mipmaps&&v.mipmaps.length>0)for(let Ut=0;Ut<v.mipmaps.length;Ut++)Ot(W.__webglFramebuffer[Ut],w,v,n.COLOR_ATTACHMENT0,At,Ut);else Ot(W.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,At,0);T(v,Pt)&&y(At),e.unbindTexture()}w.depthBuffer&&kt(w)}function St(w){let v=m(w)||o,W=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let yt=0,mt=W.length;yt<mt;yt++){let nt=W[yt];if(T(nt,v)){let Pt=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,At=i.get(nt).__webglTexture;e.bindTexture(Pt,At),y(Pt),e.unbindTexture()}}}function rt(w){if(o&&w.samples>0&&at(w)===!1){let v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],W=w.width,yt=w.height,mt=n.COLOR_BUFFER_BIT,nt=[],Pt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(w),Ut=w.isWebGLMultipleRenderTargets===!0;if(Ut)for(let qt=0;qt<v.length;qt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let qt=0;qt<v.length;qt++){nt.push(n.COLOR_ATTACHMENT0+qt),w.depthBuffer&&nt.push(Pt);let Gt=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(Gt===!1&&(w.depthBuffer&&(mt|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(mt|=n.STENCIL_BUFFER_BIT)),Ut&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[qt]),Gt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Pt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Pt])),Ut){let E=i.get(v[qt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,E,0)}n.blitFramebuffer(0,0,W,yt,0,0,W,yt,mt,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ut)for(let qt=0;qt<v.length;qt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qt,n.RENDERBUFFER,At.__webglColorRenderbuffer[qt]);let Gt=i.get(v[qt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qt,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function Et(w){return Math.min(s.maxSamples,w.samples)}function at(w){let v=i.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Xt(w){let v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Lt(w,v){let W=w.colorSpace,yt=w.format,mt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===bc||W!==pi&&W!==Pn&&(Ae.getTransfer(W)===Le?o===!1?t.has("EXT_sRGB")===!0&&yt===_n?(w.format=bc,w.minFilter=In,w.generateMipmaps=!1):v=Ha.sRGBToLinear(v):(yt!==_n||mt!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),v}this.allocateTextureUnit=N,this.resetTextureUnits=$,this.setTexture2D=j,this.setTexture2DArray=ut,this.setTexture3D=ot,this.setTextureCube=st,this.rebindTextures=te,this.setupRenderTarget=U,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=at}function Ex(n,t,e){let i=e.isWebGL2;function s(r,a=Pn){let o,c=Ae.getTransfer(a);if(r===Ui)return n.UNSIGNED_BYTE;if(r===Mu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===bu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===sd)return n.BYTE;if(r===rd)return n.SHORT;if(r===al)return n.UNSIGNED_SHORT;if(r===vu)return n.INT;if(r===Ci)return n.UNSIGNED_INT;if(r===Ii)return n.FLOAT;if(r===Rr)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ad)return n.ALPHA;if(r===_n)return n.RGBA;if(r===od)return n.LUMINANCE;if(r===cd)return n.LUMINANCE_ALPHA;if(r===Ki)return n.DEPTH_COMPONENT;if(r===qs)return n.DEPTH_STENCIL;if(r===bc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ld)return n.RED;if(r===Su)return n.RED_INTEGER;if(r===hd)return n.RG;if(r===Eu)return n.RG_INTEGER;if(r===wu)return n.RGBA_INTEGER;if(r===Oo||r===Fo||r===Bo||r===zo)if(c===Le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Oo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Oo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wl||r===Xl||r===ql||r===Yl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Wl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ql)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zl||r===$l)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Zl)return c===Le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===$l)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jl||r===Kl||r===jl||r===Ql||r===th||r===eh||r===nh||r===ih||r===sh||r===rh||r===ah||r===oh||r===ch||r===lh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Jl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jl)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ql)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===th)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===eh)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nh)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ih)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rh)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ah)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===oh)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ch)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lh)return c===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ko||r===hh||r===uh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===ko)return c===Le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ud||r===fh||r===dh||r===ph)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===ko)return o.COMPRESSED_RED_RGTC1_EXT;if(r===fh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ph)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ji?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Fc=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Li=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},wx={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Li;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Bc=class extends jn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=e.getContextAttributes(),m=null,p=null,T=[],y=[],R=new Mt,O=null,L=new gn;L.layers.enable(1),L.viewport=new en;let P=new gn;P.layers.enable(2),P.viewport=new en;let Z=[L,P],S=new Fc;S.layers.enable(1),S.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=T[Q];return pt===void 0&&(pt=new br,T[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=T[Q];return pt===void 0&&(pt=new br,T[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=T[Q];return pt===void 0&&(pt=new br,T[Q]=pt),pt.getHandSpace()};function K(Q){let pt=y.indexOf(Q.inputSource);if(pt===-1)return;let It=T[pt];It!==void 0&&(It.update(Q.inputSource,Q.frame,l||a),It.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",N);for(let Q=0;Q<T.length;Q++){let pt=y[Q];pt!==null&&(y[Q]=null,T[Q].disconnect(pt))}b=null,H=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(O),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",$),s.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let pt={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new mi(d.framebufferWidth,d.framebufferHeight,{format:_n,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let pt=null,It=null,Nt=null;x.depth&&(Nt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=x.stencil?qs:Ki,It=x.stencil?Ji:Ci);let Ot={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new mi(f.textureWidth,f.textureHeight,{format:_n,type:Ui,depthTexture:new Ja(f.textureWidth,f.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let $t=t.properties.get(p);$t.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(Q){for(let pt=0;pt<Q.removed.length;pt++){let It=Q.removed[pt],Nt=y.indexOf(It);Nt>=0&&(y[Nt]=null,T[Nt].disconnect(It))}for(let pt=0;pt<Q.added.length;pt++){let It=Q.added[pt],Nt=y.indexOf(It);if(Nt===-1){for(let $t=0;$t<T.length;$t++)if($t>=y.length){y.push(It),Nt=$t;break}else if(y[$t]===null){y[$t]=It,Nt=$t;break}if(Nt===-1)break}let Ot=T[Nt];Ot&&Ot.connect(It)}}let V=new D,j=new D;function ut(Q,pt,It){V.setFromMatrixPosition(pt.matrixWorld),j.setFromMatrixPosition(It.matrixWorld);let Nt=V.distanceTo(j),Ot=pt.projectionMatrix.elements,$t=It.projectionMatrix.elements,Jt=Ot[14]/(Ot[10]-1),kt=Ot[14]/(Ot[10]+1),te=(Ot[9]+1)/Ot[5],U=(Ot[9]-1)/Ot[5],St=(Ot[8]-1)/Ot[0],rt=($t[8]+1)/$t[0],Et=Jt*St,at=Jt*rt,Xt=Nt/(-St+rt),Lt=Xt*-St;pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Lt),Q.translateZ(Xt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();let w=Jt+Xt,v=kt+Xt,W=Et-Lt,yt=at+(Nt-Lt),mt=te*kt/v*w,nt=U*kt/v*w;Q.projectionMatrix.makePerspective(W,yt,mt,nt,w,v),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ot(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;S.near=P.near=L.near=Q.near,S.far=P.far=L.far=Q.far,(b!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,H=S.far);let pt=Q.parent,It=S.cameras;ot(S,pt);for(let Nt=0;Nt<It.length;Nt++)ot(It[Nt],pt);It.length===2?ut(S,L,P):S.projectionMatrix.copy(L.projectionMatrix),st(Q,S,pt)};function st(Q,pt,It){It===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(It.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Cr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)};let xt=null;function _t(Q,pt){if(h=pt.getViewerPose(l||a),g=pt,h!==null){let It=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Nt=!1;It.length!==S.cameras.length&&(S.cameras.length=0,Nt=!0);for(let Ot=0;Ot<It.length;Ot++){let $t=It[Ot],Jt=null;if(d!==null)Jt=d.getViewport($t);else{let te=u.getViewSubImage(f,$t);Jt=te.viewport,Ot===0&&(t.setRenderTargetTextures(p,te.colorTexture,f.ignoreDepthValues?void 0:te.depthStencilTexture),t.setRenderTarget(p))}let kt=Z[Ot];kt===void 0&&(kt=new gn,kt.layers.enable(Ot),kt.viewport=new en,Z[Ot]=kt),kt.matrix.fromArray($t.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray($t.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Ot===0&&(S.matrix.copy(kt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Nt===!0&&S.cameras.push(kt)}}for(let It=0;It<T.length;It++){let Nt=y[It],Ot=T[It];Nt!==null&&Ot!==void 0&&Ot.update(Nt,pt,l||a)}xt&&xt(Q,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),g=null}let ft=new Uu;ft.setAnimationLoop(_t),this.setAnimationLoop=function(Q){xt=Q},this.dispose=function(){}}};function Tx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Du(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,y,R){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,R)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p).envMap;if(T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ax(n,t,e,i){let s={},r={},a=[],o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(T,y){let R=y.program;i.uniformBlockBinding(T,R)}function l(T,y){let R=s[T.id];R===void 0&&(g(T),R=h(T),s[T.id]=R,T.addEventListener("dispose",m));let O=y.program;i.updateUBOMapping(T,O);let L=t.render.frame;r[T.id]!==L&&(f(T),r[T.id]=L)}function h(T){let y=u();T.__bindingPointIndex=y;let R=n.createBuffer(),O=T.__size,L=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,O,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,R),R}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let y=s[T.id],R=T.uniforms,O=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let L=0,P=R.length;L<P;L++){let Z=Array.isArray(R[L])?R[L]:[R[L]];for(let S=0,b=Z.length;S<b;S++){let H=Z[S];if(d(H,L,S,O)===!0){let K=H.__offset,$=Array.isArray(H.value)?H.value:[H.value],N=0;for(let V=0;V<$.length;V++){let j=$[V],ut=x(j);typeof j=="number"||typeof j=="boolean"?(H.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,K+N,H.__data)):j.isMatrix3?(H.__data[0]=j.elements[0],H.__data[1]=j.elements[1],H.__data[2]=j.elements[2],H.__data[3]=0,H.__data[4]=j.elements[3],H.__data[5]=j.elements[4],H.__data[6]=j.elements[5],H.__data[7]=0,H.__data[8]=j.elements[6],H.__data[9]=j.elements[7],H.__data[10]=j.elements[8],H.__data[11]=0):(j.toArray(H.__data,N),N+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,y,R,O){let L=T.value,P=y+"_"+R;if(O[P]===void 0)return typeof L=="number"||typeof L=="boolean"?O[P]=L:O[P]=L.clone(),!0;{let Z=O[P];if(typeof L=="number"||typeof L=="boolean"){if(Z!==L)return O[P]=L,!0}else if(Z.equals(L)===!1)return Z.copy(L),!0}return!1}function g(T){let y=T.uniforms,R=0,O=16;for(let P=0,Z=y.length;P<Z;P++){let S=Array.isArray(y[P])?y[P]:[y[P]];for(let b=0,H=S.length;b<H;b++){let K=S[b],$=Array.isArray(K.value)?K.value:[K.value];for(let N=0,V=$.length;N<V;N++){let j=$[N],ut=x(j),ot=R%O;ot!==0&&O-ot<ut.boundary&&(R+=O-ot),K.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=R,R+=ut.storage}}}let L=R%O;return L>0&&(R+=O-L),T.__size=R,T.__cache={},this}function x(T){let y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){let y=T.target;y.removeEventListener("dispose",m);let R=a.indexOf(y.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let T in s)n.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Pr=class{constructor(t={}){let{canvas:e=Od(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this._useLegacyLights=!1,this.toneMapping=Di,this.toneMappingExposure=1;let y=this,R=!1,O=0,L=0,P=null,Z=-1,S=null,b=new en,H=new en,K=null,$=new Wt(0),N=0,V=e.width,j=e.height,ut=1,ot=null,st=null,xt=new en(0,0,V,j),_t=new en(0,0,V,j),ft=!1,Q=new Lr,pt=!1,It=!1,Nt=null,Ot=new be,$t=new Mt,Jt=new D,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return P===null?ut:1}let U=i;function St(A,Y){for(let et=0;et<A.length;et++){let tt=A[et],J=e.getContext(tt,Y);if(J!==null)return J}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),U===null){let Y=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Y.shift(),U=St(Y,A),U===null)throw St(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let rt,Et,at,Xt,Lt,w,v,W,yt,mt,nt,Pt,At,Ut,qt,Gt,E,k,M,B,z,q,ct,dt;function zt(){rt=new q0(U),Et=new k0(U,rt,t),rt.init(Et),q=new Ex(U,rt,Et),at=new bx(U,rt,Et),Xt=new $0(U),Lt=new hx,w=new Sx(U,rt,at,Lt,Et,q,Xt),v=new V0(y),W=new X0(y),yt=new ip(U,Et),ct=new B0(U,rt,yt,Et),mt=new Y0(U,yt,Xt,ct),nt=new Q0(U,mt,yt,Xt),M=new j0(U,Et,w),Gt=new H0(Lt),Pt=new lx(y,v,W,rt,Et,ct,Gt),At=new Tx(y,Lt),Ut=new fx,qt=new _x(rt,Et),k=new F0(y,v,W,at,nt,f,c),E=new Mx(y,nt,Et),dt=new Ax(U,Xt,Et,at),B=new z0(U,rt,Xt,Et),z=new Z0(U,rt,Xt,Et),Xt.programs=Pt.programs,y.capabilities=Et,y.extensions=rt,y.properties=Lt,y.renderLists=Ut,y.shadowMap=E,y.state=at,y.info=Xt}zt();let Vt=new Bc(y,U);this.xr=Vt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(A){A!==void 0&&(ut=A,this.setSize(V,j,!1))},this.getSize=function(A){return A.set(V,j)},this.setSize=function(A,Y,et=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,j=Y,e.width=Math.floor(A*ut),e.height=Math.floor(Y*ut),et===!0&&(e.style.width=A+"px",e.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(V*ut,j*ut).floor()},this.setDrawingBufferSize=function(A,Y,et){V=A,j=Y,ut=et,e.width=Math.floor(A*et),e.height=Math.floor(Y*et),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(xt)},this.setViewport=function(A,Y,et,tt){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,Y,et,tt),at.viewport(b.copy(xt).multiplyScalar(ut).floor())},this.getScissor=function(A){return A.copy(_t)},this.setScissor=function(A,Y,et,tt){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,Y,et,tt),at.scissor(H.copy(_t).multiplyScalar(ut).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(A){at.setScissorTest(ft=A)},this.setOpaqueSort=function(A){ot=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(A=!0,Y=!0,et=!0){let tt=0;if(A){let J=!1;if(P!==null){let Bt=P.texture.format;J=Bt===wu||Bt===Eu||Bt===Su}if(J){let Bt=P.texture.type,Kt=Bt===Ui||Bt===Ci||Bt===al||Bt===Ji||Bt===Mu||Bt===bu,ee=k.getClearColor(),ie=k.getClearAlpha(),he=ee.r,oe=ee.g,ce=ee.b;Kt?(d[0]=he,d[1]=oe,d[2]=ce,d[3]=ie,U.clearBufferuiv(U.COLOR,0,d)):(g[0]=he,g[1]=oe,g[2]=ce,g[3]=ie,U.clearBufferiv(U.COLOR,0,g))}else tt|=U.COLOR_BUFFER_BIT}Y&&(tt|=U.DEPTH_BUFFER_BIT),et&&(tt|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Ut.dispose(),qt.dispose(),Lt.dispose(),v.dispose(),W.dispose(),nt.dispose(),ct.dispose(),dt.dispose(),Pt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Oe),Vt.removeEventListener("sessionend",we),Nt&&(Nt.dispose(),Nt=null),Ke.stop()};function vt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let A=Xt.autoReset,Y=E.enabled,et=E.autoUpdate,tt=E.needsUpdate,J=E.type;zt(),Xt.autoReset=A,E.enabled=Y,E.autoUpdate=et,E.needsUpdate=tt,E.type=J}function Tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function wt(A){let Y=A.target;Y.removeEventListener("dispose",wt),Qt(Y)}function Qt(A){Zt(A),Lt.remove(A)}function Zt(A){let Y=Lt.get(A).programs;Y!==void 0&&(Y.forEach(function(et){Pt.releaseProgram(et)}),A.isShaderMaterial&&Pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,et,tt,J,Bt){Y===null&&(Y=kt);let Kt=J.isMesh&&J.matrixWorld.determinant()<0,ee=jr(A,Y,et,tt,J);at.setMaterial(tt,Kt);let ie=et.index,he=1;if(tt.wireframe===!0){if(ie=mt.getWireframeAttribute(et),ie===void 0)return;he=2}let oe=et.drawRange,ce=et.attributes.position,Pe=oe.start*he,je=(oe.start+oe.count)*he;Bt!==null&&(Pe=Math.max(Pe,Bt.start*he),je=Math.min(je,(Bt.start+Bt.count)*he)),ie!==null?(Pe=Math.max(Pe,0),je=Math.min(je,ie.count)):ce!=null&&(Pe=Math.max(Pe,0),je=Math.min(je,ce.count));let _e=je-Pe;if(_e<0||_e===1/0)return;ct.setup(J,tt,ee,et,ie);let on,Se=B;if(ie!==null&&(on=yt.get(ie),Se=z,Se.setIndex(on)),J.isMesh)tt.wireframe===!0?(at.setLineWidth(tt.wireframeLinewidth*te()),Se.setMode(U.LINES)):Se.setMode(U.TRIANGLES);else if(J.isLine){let le=tt.linewidth;le===void 0&&(le=1),at.setLineWidth(le*te()),J.isLineSegments?Se.setMode(U.LINES):J.isLineLoop?Se.setMode(U.LINE_LOOP):Se.setMode(U.LINE_STRIP)}else J.isPoints?Se.setMode(U.POINTS):J.isSprite&&Se.setMode(U.TRIANGLES);if(J.isBatchedMesh)Se.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Se.renderInstances(Pe,_e,J.count);else if(et.isInstancedBufferGeometry){let le=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,cn=Math.min(et.instanceCount,le);Se.renderInstances(Pe,_e,cn)}else Se.render(Pe,_e)};function pe(A,Y,et){A.transparent===!0&&A.side===Ln&&A.forceSinglePass===!1?(A.side=un,A.needsUpdate=!0,ar(A,Y,et),A.side=Ni,A.needsUpdate=!0,ar(A,Y,et),A.side=Ln):ar(A,Y,et)}this.compile=function(A,Y,et=null){et===null&&(et=A),m=qt.get(et),m.init(),T.push(m),et.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),A!==et&&A.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(y._useLegacyLights);let tt=new Set;return A.traverse(function(J){let Bt=J.material;if(Bt)if(Array.isArray(Bt))for(let Kt=0;Kt<Bt.length;Kt++){let ee=Bt[Kt];pe(ee,et,J),tt.add(ee)}else pe(Bt,et,J),tt.add(Bt)}),T.pop(),m=null,tt},this.compileAsync=function(A,Y,et=null){let tt=this.compile(A,Y,et);return new Promise(J=>{function Bt(){if(tt.forEach(function(Kt){Lt.get(Kt).currentProgram.isReady()&&tt.delete(Kt)}),tt.size===0){J(A);return}setTimeout(Bt,10)}rt.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let xe=null;function ke(A){xe&&xe(A)}function Oe(){Ke.stop()}function we(){Ke.start()}let Ke=new Uu;Ke.setAnimationLoop(ke),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(A){xe=A,Vt.setAnimationLoop(A),A===null?Ke.stop():Ke.start()},Vt.addEventListener("sessionstart",Oe),Vt.addEventListener("sessionend",we),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(Y),Y=Vt.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,Y,P),m=qt.get(A,T.length),m.init(),T.push(m),Ot.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(Ot),It=this.localClippingEnabled,pt=Gt.init(this.clippingPlanes,It),x=Ut.get(A,p.length),x.init(),p.push(x),yn(A,Y,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(ot,st),this.info.render.frame++,pt===!0&&Gt.beginShadows();let et=m.state.shadowsArray;if(E.render(et,A,Y),pt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(x,A),m.setupLights(y._useLegacyLights),Y.isArrayCamera){let tt=Y.cameras;for(let J=0,Bt=tt.length;J<Bt;J++){let Kt=tt[J];rr(x,A,Kt,Kt.viewport)}}else rr(x,A,Y);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(y,A,Y),ct.resetDefaultState(),Z=-1,S=null,T.pop(),T.length>0?m=T[T.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function yn(A,Y,et,tt){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)et=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){tt&&Jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ot);let Kt=nt.update(A),ee=A.material;ee.visible&&x.push(A,Kt,ee,et,Jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){let Kt=nt.update(A),ee=A.material;if(tt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Jt.copy(A.boundingSphere.center)):(Kt.boundingSphere===null&&Kt.computeBoundingSphere(),Jt.copy(Kt.boundingSphere.center)),Jt.applyMatrix4(A.matrixWorld).applyMatrix4(Ot)),Array.isArray(ee)){let ie=Kt.groups;for(let he=0,oe=ie.length;he<oe;he++){let ce=ie[he],Pe=ee[ce.materialIndex];Pe&&Pe.visible&&x.push(A,Kt,Pe,et,Jt.z,ce)}}else ee.visible&&x.push(A,Kt,ee,et,Jt.z,null)}}let Bt=A.children;for(let Kt=0,ee=Bt.length;Kt<ee;Kt++)yn(Bt[Kt],Y,et,tt)}function rr(A,Y,et,tt){let J=A.opaque,Bt=A.transmissive,Kt=A.transparent;m.setupLightsView(et),pt===!0&&Gt.setGlobalState(y.clippingPlanes,et),Bt.length>0&&Mi(J,Bt,Y,et),tt&&at.viewport(b.copy(tt)),J.length>0&&us(J,Y,et),Bt.length>0&&us(Bt,Y,et),Kt.length>0&&us(Kt,Y,et),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Mi(A,Y,et,tt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;let Bt=Et.isWebGL2;Nt===null&&(Nt=new mi(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")?Rr:Ui,minFilter:Ar,samples:Bt?4:0})),y.getDrawingBufferSize($t),Bt?Nt.setSize($t.x,$t.y):Nt.setSize(za($t.x),za($t.y));let Kt=y.getRenderTarget();y.setRenderTarget(Nt),y.getClearColor($),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();let ee=y.toneMapping;y.toneMapping=Di,us(A,et,tt),w.updateMultisampleRenderTarget(Nt),w.updateRenderTargetMipmap(Nt);let ie=!1;for(let he=0,oe=Y.length;he<oe;he++){let ce=Y[he],Pe=ce.object,je=ce.geometry,_e=ce.material,on=ce.group;if(_e.side===Ln&&Pe.layers.test(tt.layers)){let Se=_e.side;_e.side=un,_e.needsUpdate=!0,$r(Pe,et,tt,je,_e,on),_e.side=Se,_e.needsUpdate=!0,ie=!0}}ie===!0&&(w.updateMultisampleRenderTarget(Nt),w.updateRenderTargetMipmap(Nt)),y.setRenderTarget(Kt),y.setClearColor($,N),y.toneMapping=ee}function us(A,Y,et){let tt=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Bt=A.length;J<Bt;J++){let Kt=A[J],ee=Kt.object,ie=Kt.geometry,he=tt===null?Kt.material:tt,oe=Kt.group;ee.layers.test(et.layers)&&$r(ee,Y,et,ie,he,oe)}}function $r(A,Y,et,tt,J,Bt){A.onBeforeRender(y,Y,et,tt,J,Bt),A.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(y,Y,et,tt,A,Bt),J.transparent===!0&&J.side===Ln&&J.forceSinglePass===!1?(J.side=un,J.needsUpdate=!0,y.renderBufferDirect(et,Y,tt,J,A,Bt),J.side=Ni,J.needsUpdate=!0,y.renderBufferDirect(et,Y,tt,J,A,Bt),J.side=Ln):y.renderBufferDirect(et,Y,tt,J,A,Bt),A.onAfterRender(y,Y,et,tt,J,Bt)}function ar(A,Y,et){Y.isScene!==!0&&(Y=kt);let tt=Lt.get(A),J=m.state.lights,Bt=m.state.shadowsArray,Kt=J.state.version,ee=Pt.getParameters(A,J.state,Bt,Y,et),ie=Pt.getProgramCacheKey(ee),he=tt.programs;tt.environment=A.isMeshStandardMaterial?Y.environment:null,tt.fog=Y.fog,tt.envMap=(A.isMeshStandardMaterial?W:v).get(A.envMap||tt.environment),he===void 0&&(A.addEventListener("dispose",wt),he=new Map,tt.programs=he);let oe=he.get(ie);if(oe!==void 0){if(tt.currentProgram===oe&&tt.lightsStateVersion===Kt)return Kr(A,ee),oe}else ee.uniforms=Pt.getUniforms(A),A.onBuild(et,ee,y),A.onBeforeCompile(ee,y),oe=Pt.acquireProgram(ee,ie),he.set(ie,oe),tt.uniforms=ee.uniforms;let ce=tt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ce.clippingPlanes=Gt.uniform),Kr(A,ee),tt.needsLights=or(A),tt.lightsStateVersion=Kt,tt.needsLights&&(ce.ambientLightColor.value=J.state.ambient,ce.lightProbe.value=J.state.probe,ce.directionalLights.value=J.state.directional,ce.directionalLightShadows.value=J.state.directionalShadow,ce.spotLights.value=J.state.spot,ce.spotLightShadows.value=J.state.spotShadow,ce.rectAreaLights.value=J.state.rectArea,ce.ltc_1.value=J.state.rectAreaLTC1,ce.ltc_2.value=J.state.rectAreaLTC2,ce.pointLights.value=J.state.point,ce.pointLightShadows.value=J.state.pointShadow,ce.hemisphereLights.value=J.state.hemi,ce.directionalShadowMap.value=J.state.directionalShadowMap,ce.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ce.spotShadowMap.value=J.state.spotShadowMap,ce.spotLightMatrix.value=J.state.spotLightMatrix,ce.spotLightMap.value=J.state.spotLightMap,ce.pointShadowMap.value=J.state.pointShadowMap,ce.pointShadowMatrix.value=J.state.pointShadowMatrix),tt.currentProgram=oe,tt.uniformsList=null,oe}function Jr(A){if(A.uniformsList===null){let Y=A.currentProgram.getUniforms();A.uniformsList=Gs.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Kr(A,Y){let et=Lt.get(A);et.outputColorSpace=Y.outputColorSpace,et.batching=Y.batching,et.instancing=Y.instancing,et.instancingColor=Y.instancingColor,et.skinning=Y.skinning,et.morphTargets=Y.morphTargets,et.morphNormals=Y.morphNormals,et.morphColors=Y.morphColors,et.morphTargetsCount=Y.morphTargetsCount,et.numClippingPlanes=Y.numClippingPlanes,et.numIntersection=Y.numClipIntersection,et.vertexAlphas=Y.vertexAlphas,et.vertexTangents=Y.vertexTangents,et.toneMapping=Y.toneMapping}function jr(A,Y,et,tt,J){Y.isScene!==!0&&(Y=kt),w.resetTextureUnits();let Bt=Y.fog,Kt=tt.isMeshStandardMaterial?Y.environment:null,ee=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:pi,ie=(tt.isMeshStandardMaterial?W:v).get(tt.envMap||Kt),he=tt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,oe=!!et.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),ce=!!et.morphAttributes.position,Pe=!!et.morphAttributes.normal,je=!!et.morphAttributes.color,_e=Di;tt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_e=y.toneMapping);let on=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Se=on!==void 0?on.length:0,le=Lt.get(tt),cn=m.state.lights;if(pt===!0&&(It===!0||A!==S)){let dn=A===S&&tt.id===Z;Gt.setState(tt,A,dn)}let De=!1;tt.version===le.__version?(le.needsLights&&le.lightsStateVersion!==cn.state.version||le.outputColorSpace!==ee||J.isBatchedMesh&&le.batching===!1||!J.isBatchedMesh&&le.batching===!0||J.isInstancedMesh&&le.instancing===!1||!J.isInstancedMesh&&le.instancing===!0||J.isSkinnedMesh&&le.skinning===!1||!J.isSkinnedMesh&&le.skinning===!0||J.isInstancedMesh&&le.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&le.instancingColor===!1&&J.instanceColor!==null||le.envMap!==ie||tt.fog===!0&&le.fog!==Bt||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==Gt.numPlanes||le.numIntersection!==Gt.numIntersection)||le.vertexAlphas!==he||le.vertexTangents!==oe||le.morphTargets!==ce||le.morphNormals!==Pe||le.morphColors!==je||le.toneMapping!==_e||Et.isWebGL2===!0&&le.morphTargetsCount!==Se)&&(De=!0):(De=!0,le.__version=tt.version);let Rn=le.currentProgram;De===!0&&(Rn=ar(tt,Y,J));let fs=!1,Bn=!1,zi=!1,Qe=Rn.getUniforms(),ri=le.uniforms;if(at.useProgram(Rn.program)&&(fs=!0,Bn=!0,zi=!0),tt.id!==Z&&(Z=tt.id,Bn=!0),fs||S!==A){Qe.setValue(U,"projectionMatrix",A.projectionMatrix),Qe.setValue(U,"viewMatrix",A.matrixWorldInverse);let dn=Qe.map.cameraPosition;dn!==void 0&&dn.setValue(U,Jt.setFromMatrixPosition(A.matrixWorld)),Et.logarithmicDepthBuffer&&Qe.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Qe.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Bn=!0,zi=!0)}if(J.isSkinnedMesh){Qe.setOptional(U,J,"bindMatrix"),Qe.setOptional(U,J,"bindMatrixInverse");let dn=J.skeleton;dn&&(Et.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Qe.setValue(U,"boneTexture",dn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Qe.setOptional(U,J,"batchingTexture"),Qe.setValue(U,"batchingTexture",J._matricesTexture,w));let bi=et.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0&&Et.isWebGL2===!0)&&M.update(J,et,Rn),(Bn||le.receiveShadow!==J.receiveShadow)&&(le.receiveShadow=J.receiveShadow,Qe.setValue(U,"receiveShadow",J.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(ri.envMap.value=ie,ri.flipEnvMap.value=ie.isCubeTexture&&ie.isRenderTargetTexture===!1?-1:1),Bn&&(Qe.setValue(U,"toneMappingExposure",y.toneMappingExposure),le.needsLights&&Ro(ri,zi),Bt&&tt.fog===!0&&At.refreshFogUniforms(ri,Bt),At.refreshMaterialUniforms(ri,tt,ut,j,Nt),Gs.upload(U,Jr(le),ri,w)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Gs.upload(U,Jr(le),ri,w),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Qe.setValue(U,"center",J.center),Qe.setValue(U,"modelViewMatrix",J.modelViewMatrix),Qe.setValue(U,"normalMatrix",J.normalMatrix),Qe.setValue(U,"modelMatrix",J.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let dn=tt.uniformsGroups;for(let ds=0,ki=dn.length;ds<ki;ds++)if(Et.isWebGL2){let Si=dn[ds];dt.update(Si,Rn),dt.bind(Si,Rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rn}function Ro(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function or(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,Y,et){Lt.get(A.texture).__webglTexture=Y,Lt.get(A.depthTexture).__webglTexture=et;let tt=Lt.get(A);tt.__hasExternalTextures=!0,tt.__hasExternalTextures&&(tt.__autoAllocateDepthBuffer=et===void 0,tt.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,Y){let et=Lt.get(A);et.__webglFramebuffer=Y,et.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,et=0){P=A,O=Y,L=et;let tt=!0,J=null,Bt=!1,Kt=!1;if(A){let ie=Lt.get(A);ie.__useDefaultFramebuffer!==void 0?(at.bindFramebuffer(U.FRAMEBUFFER,null),tt=!1):ie.__webglFramebuffer===void 0?w.setupRenderTarget(A):ie.__hasExternalTextures&&w.rebindTextures(A,Lt.get(A.texture).__webglTexture,Lt.get(A.depthTexture).__webglTexture);let he=A.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(Kt=!0);let oe=Lt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(oe[Y])?J=oe[Y][et]:J=oe[Y],Bt=!0):Et.isWebGL2&&A.samples>0&&w.useMultisampledRTT(A)===!1?J=Lt.get(A).__webglMultisampledFramebuffer:Array.isArray(oe)?J=oe[et]:J=oe,b.copy(A.viewport),H.copy(A.scissor),K=A.scissorTest}else b.copy(xt).multiplyScalar(ut).floor(),H.copy(_t).multiplyScalar(ut).floor(),K=ft;if(at.bindFramebuffer(U.FRAMEBUFFER,J)&&Et.drawBuffers&&tt&&at.drawBuffers(A,J),at.viewport(b),at.scissor(H),at.setScissorTest(K),Bt){let ie=Lt.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie.__webglTexture,et)}else if(Kt){let ie=Lt.get(A.texture),he=Y||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ie.__webglTexture,et||0,he)}Z=-1},this.readRenderTargetPixels=function(A,Y,et,tt,J,Bt,Kt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=Lt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Kt!==void 0&&(ee=ee[Kt]),ee){at.bindFramebuffer(U.FRAMEBUFFER,ee);try{let ie=A.texture,he=ie.format,oe=ie.type;if(he!==_n&&q.convert(he)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ce=oe===Rr&&(rt.has("EXT_color_buffer_half_float")||Et.isWebGL2&&rt.has("EXT_color_buffer_float"));if(oe!==Ui&&q.convert(oe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(oe===Ii&&(Et.isWebGL2||rt.has("OES_texture_float")||rt.has("WEBGL_color_buffer_float")))&&!ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-tt&&et>=0&&et<=A.height-J&&U.readPixels(Y,et,tt,J,q.convert(he),q.convert(oe),Bt)}finally{let ie=P!==null?Lt.get(P).__webglFramebuffer:null;at.bindFramebuffer(U.FRAMEBUFFER,ie)}}},this.copyFramebufferToTexture=function(A,Y,et=0){let tt=Math.pow(2,-et),J=Math.floor(Y.image.width*tt),Bt=Math.floor(Y.image.height*tt);w.setTexture2D(Y,0),U.copyTexSubImage2D(U.TEXTURE_2D,et,0,0,A.x,A.y,J,Bt),at.unbindTexture()},this.copyTextureToTexture=function(A,Y,et,tt=0){let J=Y.image.width,Bt=Y.image.height,Kt=q.convert(et.format),ee=q.convert(et.type);w.setTexture2D(et,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,et.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,et.unpackAlignment),Y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,tt,A.x,A.y,J,Bt,Kt,ee,Y.image.data):Y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,tt,A.x,A.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Kt,Y.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,tt,A.x,A.y,Kt,ee,Y.image),tt===0&&et.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),at.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,et,tt,J=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Bt=A.max.x-A.min.x+1,Kt=A.max.y-A.min.y+1,ee=A.max.z-A.min.z+1,ie=q.convert(tt.format),he=q.convert(tt.type),oe;if(tt.isData3DTexture)w.setTexture3D(tt,0),oe=U.TEXTURE_3D;else if(tt.isDataArrayTexture||tt.isCompressedArrayTexture)w.setTexture2DArray(tt,0),oe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,tt.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,tt.unpackAlignment);let ce=U.getParameter(U.UNPACK_ROW_LENGTH),Pe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),je=U.getParameter(U.UNPACK_SKIP_PIXELS),_e=U.getParameter(U.UNPACK_SKIP_ROWS),on=U.getParameter(U.UNPACK_SKIP_IMAGES),Se=et.isCompressedTexture?et.mipmaps[J]:et.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Se.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Se.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,A.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,A.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,A.min.z),et.isDataTexture||et.isData3DTexture?U.texSubImage3D(oe,J,Y.x,Y.y,Y.z,Bt,Kt,ee,ie,he,Se.data):et.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(oe,J,Y.x,Y.y,Y.z,Bt,Kt,ee,ie,Se.data)):U.texSubImage3D(oe,J,Y.x,Y.y,Y.z,Bt,Kt,ee,ie,he,Se),U.pixelStorei(U.UNPACK_ROW_LENGTH,ce),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Pe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,je),U.pixelStorei(U.UNPACK_SKIP_ROWS,_e),U.pixelStorei(U.UNPACK_SKIP_IMAGES,on),J===0&&tt.generateMipmaps&&U.generateMipmap(oe),at.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),at.unbindTexture()},this.resetState=function(){O=0,L=0,P=null,at.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ol?"display-p3":"srgb",e.unpackColorSpace=Ae.workingColorSpace===po?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qe?ji:Au}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ji?qe:pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},zc=class extends Pr{};zc.prototype.isWebGL1Renderer=!0;var Ka=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},ja=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new D,Dr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zs=class extends xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ds,pr=new D,Us=new D,Ns=new D,Os=new Mt,mr=new Mt,ku=new be,ba=new D,gr=new D,Sa=new D,su=new Mt,hc=new Mt,ru=new Mt,Ur=class extends nn{constructor(t=new Zs){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ja(e,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new Dr(i,3,0,!1)),Ds.setAttribute("uv",new Dr(i,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new Mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),ku.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ns.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ea(ba.set(-.5,-.5,0),Ns,a,Us,s,r),Ea(gr.set(.5,-.5,0),Ns,a,Us,s,r),Ea(Sa.set(.5,.5,0),Ns,a,Us,s,r),su.set(0,0),hc.set(1,0),ru.set(1,1);let o=t.ray.intersectTriangle(ba,gr,Sa,!1,pr);if(o===null&&(Ea(gr.set(-.5,.5,0),Ns,a,Us,s,r),hc.set(0,1),o=t.ray.intersectTriangle(ba,Sa,gr,!1,pr),o===null))return;let c=t.ray.origin.distanceTo(pr);c<t.near||c>t.far||e.push({distance:c,point:pr.clone(),uv:$i.getInterpolation(pr,ba,gr,Sa,su,hc,ru,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ea(n,t,e,i,s,r){Os.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(mr.x=r*Os.x-s*Os.y,mr.y=s*Os.x+r*Os.y):mr.copy(Os),n.copy(t),n.x+=mr.x,n.y+=mr.y,n.applyMatrix4(ku)}var Nr=class extends bn{constructor(t=null,e=1,i=1,s,r,a,o,c,l=Ve,h=Ve,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Or=class extends Ne{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fs=new be,au=new be,wa=[],ou=new gi,Rx=new be,xr=new ve,_r=new Oi,$s=class extends ve{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Or(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Rx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fs),ou.copy(t.boundingBox).applyMatrix4(Fs),this.boundingBox.union(ou)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fs),_r.copy(t.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(_r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(i),t.ray.intersectsSphere(_r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),au.multiplyMatrices(i,Fs),xr.matrixWorld=au,xr.raycast(t,wa);for(let a=0,o=wa.length;a<o;a++){let c=wa[a];c.instanceId=r,c.object=this,e.push(c)}wa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Or(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Js=class extends xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},cu=new be,kc=new Qi,Ta=new Oi,Aa=new D,Fr=class extends nn{constructor(t=new Ie,e=new Js){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,t.ray.intersectsSphere(Ta)===!1)return;cu.copy(s).invert(),kc.copy(t.ray).applyMatrix4(cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let m=l.getX(g);Aa.fromBufferAttribute(u,m),lu(Aa,m,c,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)Aa.fromBufferAttribute(u,g),lu(Aa,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lu(n,t,e,i,s,r,a){let o=kc.distanceSqToPoint(n);if(o<e){let c=new D;kc.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var Br=class extends bn{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Mt:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new D,s=[],r=[],a=[],o=new D,c=new be;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ye(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ye(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zr=class extends Dn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let i=e||new Mt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Hc=class extends zr{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hl(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Ra=new D,uc=new hl,fc=new hl,dc=new hl,Sn=class extends Dn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ra.subVectors(s[0],s[1]).add(s[0]),l=Ra);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ra.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ra),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),uc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),fc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),dc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(uc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),fc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),dc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(uc.calc(c),fc.calc(c),dc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function hu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function Cx(n,t){let e=1-n;return e*e*t}function Ix(n,t){return 2*(1-n)*n*t}function Lx(n,t){return n*n*t}function Sr(n,t,e,i){return Cx(n,t)+Ix(n,e)+Lx(n,i)}function Px(n,t){let e=1-n;return e*e*e*t}function Dx(n,t){let e=1-n;return 3*e*e*n*t}function Ux(n,t){return 3*(1-n)*n*n*t}function Nx(n,t){return n*n*n*t}function Er(n,t,e,i,s){return Px(n,t)+Dx(n,e)+Ux(n,i)+Nx(n,s)}var Qa=class extends Dn{constructor(t=new Mt,e=new Mt,i=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Mt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Er(t,s.x,r.x,a.x,o.x),Er(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vc=class extends Dn{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Er(t,s.x,r.x,a.x,o.x),Er(t,s.y,r.y,a.y,o.y),Er(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},to=class extends Dn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gc=class extends Dn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eo=class extends Dn{constructor(t=new Mt,e=new Mt,i=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Mt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Sr(t,s.x,r.x,a.x),Sr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends Dn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Sr(t,s.x,r.x,a.x),Sr(t,s.y,r.y,a.y),Sr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},io=class extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(hu(o,c.x,l.x,h.x,u.x),hu(o,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},so=Object.freeze({__proto__:null,ArcCurve:Hc,CatmullRomCurve3:Sn,CubicBezierCurve:Qa,CubicBezierCurve3:Vc,EllipseCurve:zr,LineCurve:to,LineCurve3:Gc,QuadraticBezierCurve:eo,QuadraticBezierCurve3:no,SplineCurve:io}),Wc=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new so[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new so[s.type]().fromJSON(s))}return this}},ro=class extends Wc{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new to(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new eo(this.currentPoint.clone(),new Mt(t,e),new Mt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Qa(this.currentPoint.clone(),new Mt(t,e),new Mt(i,s),new Mt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new io(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){let l=new zr(t,e,i,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ao=class n extends Ie{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ye(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new D,f=new Mt,d=new D,g=new D,x=new D,m=0,p=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let T=0;T<=e;T++){let y=i+T*h*s,R=Math.sin(y),O=Math.cos(y);for(let L=0;L<=t.length-1;L++){u.x=t[L].x*R,u.y=t[L].y,u.z=t[L].x*O,a.push(u.x,u.y,u.z),f.x=T/e,f.y=L/(t.length-1),o.push(f.x,f.y);let P=c[3*L+0]*R,Z=c[3*L+1],S=c[3*L+0]*O;l.push(P,Z,S)}}for(let T=0;T<e;T++)for(let y=0;y<t.length-1;y++){let R=y+T*t.length,O=R,L=R+t.length,P=R+t.length+1,Z=R+1;r.push(O,L,Z),r.push(P,Z,L)}this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("uv",new ye(o,2)),this.setAttribute("normal",new ye(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var En=class n extends Ie{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;T(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(d,2));function T(){let R=new D,O=new D,L=0,P=(e-t)/i;for(let Z=0;Z<=r;Z++){let S=[],b=Z/r,H=b*(e-t)+t;for(let K=0;K<=s;K++){let $=K/s,N=$*c+o,V=Math.sin(N),j=Math.cos(N);O.x=H*V,O.y=-b*i+m,O.z=H*j,u.push(O.x,O.y,O.z),R.set(V,P,j).normalize(),f.push(R.x,R.y,R.z),d.push($,1-b),S.push(g++)}x.push(S)}for(let Z=0;Z<s;Z++)for(let S=0;S<r;S++){let b=x[S][Z],H=x[S+1][Z],K=x[S+1][Z+1],$=x[S][Z+1];h.push(b,H,$),h.push(H,K,$),L+=6}l.addGroup(p,L,0),p+=L}function y(R){let O=g,L=new Mt,P=new D,Z=0,S=R===!0?t:e,b=R===!0?1:-1;for(let K=1;K<=s;K++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;let H=g;for(let K=0;K<=s;K++){let N=K/s*c+o,V=Math.cos(N),j=Math.sin(N);P.x=S*j,P.y=m*b,P.z=S*V,u.push(P.x,P.y,P.z),f.push(0,b,0),L.x=V*.5+.5,L.y=j*.5*b+.5,d.push(L.x,L.y),g++}for(let K=0;K<s;K++){let $=O+K,N=H+K;R===!0?h.push(N,N+1,$):h.push(N+1,N,$),Z+=3}l.addGroup(p,Z,R===!0?1:2),p+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wn=class n extends En{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var kr=class extends ro{constructor(t){super(t),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ro().fromJSON(s))}return this}},Ox={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Hu(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,d;if(i&&(r=Hx(n,t,r,e)),n.length>80*e){o=l=n[0],c=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return Hr(r,a,e,o,c,d,0),a}};function Hu(n,t,e,i,s){let r,a;if(s===jx(n,t,e,i)>0)for(r=t;r<e;r+=i)a=uu(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=uu(r,n[r],n[r+1],a);return a&&go(a,a.next)&&(Gr(a),a=a.next),a}function ts(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(go(e,e.next)||Fe(e.prev,e,e.next)===0)){if(Gr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Hr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&qx(n,i,s,r);let o=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?Bx(n,i,s,r):Fx(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Gr(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=zx(ts(n),t,e),Hr(n,t,e,i,s,r,2)):a===2&&kx(n,t,e,i,s,r):Hr(ts(n),t,e,i,s,r,1);break}}}function Fx(n){let t=n.prev,e=n,i=n.next;if(Fe(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&ks(s,o,r,c,a,l,g.x,g.y)&&Fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bx(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Fe(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,x=o>c?o>l?o:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Xc(d,g,t,e,i),T=Xc(x,m,t,e,i),y=n.prevZ,R=n.nextZ;for(;y&&y.z>=p&&R&&R.z<=T;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ks(o,h,c,u,l,f,y.x,y.y)&&Fe(y.prev,y,y.next)>=0||(y=y.prevZ,R.x>=d&&R.x<=x&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&ks(o,h,c,u,l,f,R.x,R.y)&&Fe(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ks(o,h,c,u,l,f,y.x,y.y)&&Fe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;R&&R.z<=T;){if(R.x>=d&&R.x<=x&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&ks(o,h,c,u,l,f,R.x,R.y)&&Fe(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function zx(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!go(s,r)&&Vu(s,i,i.next,r)&&Vr(s,r)&&Vr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Gr(i),Gr(i.next),i=n=r),i=i.next}while(i!==n);return ts(i)}function kx(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$x(a,o)){let c=Gu(a,o);a=ts(a,a.next),c=ts(c,c.next),Hr(a,t,e,i,s,r,0),Hr(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Hx(n,t,e,i){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=Hu(n,o,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Zx(l));for(s.sort(Vx),r=0;r<s.length;r++)e=Gx(s[r],e);return e}function Vx(n,t){return n.x-t.x}function Gx(n,t){let e=Wx(n,t);if(!e)return t;let i=Gu(e,n);return ts(i,i.next),ts(e,e.next)}function Wx(n,t){let e=t,i=-1/0,s,r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ks(a<l?r:i,a,c,l,a<l?i:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Vr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Xx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Xx(n,t){return Fe(n.prev,n,t.prev)<0&&Fe(t.next,n,n.next)<0}function qx(n,t,e,i){let s=n;do s.z===0&&(s.z=Xc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Yx(s)}function Yx(n){let t,e,i,s,r,a,o,c,l=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<l&&(o++,i=i.nextZ,!!i);t++);for(c=l;o>0||c>0&&i;)o!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(a>1);return n}function Xc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Zx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ks(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function $x(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Jx(n,t)&&(Vr(n,t)&&Vr(t,n)&&Kx(n,t)&&(Fe(n.prev,n,t.prev)||Fe(n,t.prev,t))||go(n,t)&&Fe(n.prev,n,n.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function go(n,t){return n.x===t.x&&n.y===t.y}function Vu(n,t,e,i){let s=Ia(Fe(n,t,e)),r=Ia(Fe(n,t,i)),a=Ia(Fe(e,i,n)),o=Ia(Fe(e,i,t));return!!(s!==r&&a!==o||s===0&&Ca(n,e,t)||r===0&&Ca(n,i,t)||a===0&&Ca(e,n,i)||o===0&&Ca(e,t,i))}function Ca(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ia(n){return n>0?1:n<0?-1:0}function Jx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Vu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Vr(n,t){return Fe(n.prev,n,n.next)<0?Fe(n,t,n.next)>=0&&Fe(n,n.prev,t)>=0:Fe(n,t,n.prev)<0||Fe(n,n.next,t)<0}function Kx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Gu(n,t){let e=new qc(n.i,n.x,n.y),i=new qc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function uu(n,t,e,i){let s=new qc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Gr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jx(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var wr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];fu(t),du(i,t);let a=t.length;e.forEach(fu);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,du(i,e[c]);let o=Ox.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function fu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function du(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var oo=class n extends Ie{constructor(t=new kr([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Qx,y,R=!1,O,L,P,Z;p&&(y=p.getSpacedPoints(h),R=!0,f=!1,O=p.computeFrenetFrames(h,!1),L=new D,P=new D,Z=new D),f||(m=0,d=0,g=0,x=0);let S=o.extractPoints(l),b=S.shape,H=S.holes;if(!wr.isClockWise(b)){b=b.reverse();for(let U=0,St=H.length;U<St;U++){let rt=H[U];wr.isClockWise(rt)&&(H[U]=rt.reverse())}}let $=wr.triangulateShape(b,H),N=b;for(let U=0,St=H.length;U<St;U++){let rt=H[U];b=b.concat(rt)}function V(U,St,rt){return St||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(St,rt)}let j=b.length,ut=$.length;function ot(U,St,rt){let Et,at,Xt,Lt=U.x-St.x,w=U.y-St.y,v=rt.x-U.x,W=rt.y-U.y,yt=Lt*Lt+w*w,mt=Lt*W-w*v;if(Math.abs(mt)>Number.EPSILON){let nt=Math.sqrt(yt),Pt=Math.sqrt(v*v+W*W),At=St.x-w/nt,Ut=St.y+Lt/nt,qt=rt.x-W/Pt,Gt=rt.y+v/Pt,E=((qt-At)*W-(Gt-Ut)*v)/(Lt*W-w*v);Et=At+Lt*E-U.x,at=Ut+w*E-U.y;let k=Et*Et+at*at;if(k<=2)return new Mt(Et,at);Xt=Math.sqrt(k/2)}else{let nt=!1;Lt>Number.EPSILON?v>Number.EPSILON&&(nt=!0):Lt<-Number.EPSILON?v<-Number.EPSILON&&(nt=!0):Math.sign(w)===Math.sign(W)&&(nt=!0),nt?(Et=-w,at=Lt,Xt=Math.sqrt(yt)):(Et=Lt,at=w,Xt=Math.sqrt(yt/2))}return new Mt(Et/Xt,at/Xt)}let st=[];for(let U=0,St=N.length,rt=St-1,Et=U+1;U<St;U++,rt++,Et++)rt===St&&(rt=0),Et===St&&(Et=0),st[U]=ot(N[U],N[rt],N[Et]);let xt=[],_t,ft=st.concat();for(let U=0,St=H.length;U<St;U++){let rt=H[U];_t=[];for(let Et=0,at=rt.length,Xt=at-1,Lt=Et+1;Et<at;Et++,Xt++,Lt++)Xt===at&&(Xt=0),Lt===at&&(Lt=0),_t[Et]=ot(rt[Et],rt[Xt],rt[Lt]);xt.push(_t),ft=ft.concat(_t)}for(let U=0;U<m;U++){let St=U/m,rt=d*Math.cos(St*Math.PI/2),Et=g*Math.sin(St*Math.PI/2)+x;for(let at=0,Xt=N.length;at<Xt;at++){let Lt=V(N[at],st[at],Et);Ot(Lt.x,Lt.y,-rt)}for(let at=0,Xt=H.length;at<Xt;at++){let Lt=H[at];_t=xt[at];for(let w=0,v=Lt.length;w<v;w++){let W=V(Lt[w],_t[w],Et);Ot(W.x,W.y,-rt)}}}let Q=g+x;for(let U=0;U<j;U++){let St=f?V(b[U],ft[U],Q):b[U];R?(P.copy(O.normals[0]).multiplyScalar(St.x),L.copy(O.binormals[0]).multiplyScalar(St.y),Z.copy(y[0]).add(P).add(L),Ot(Z.x,Z.y,Z.z)):Ot(St.x,St.y,0)}for(let U=1;U<=h;U++)for(let St=0;St<j;St++){let rt=f?V(b[St],ft[St],Q):b[St];R?(P.copy(O.normals[U]).multiplyScalar(rt.x),L.copy(O.binormals[U]).multiplyScalar(rt.y),Z.copy(y[U]).add(P).add(L),Ot(Z.x,Z.y,Z.z)):Ot(rt.x,rt.y,u/h*U)}for(let U=m-1;U>=0;U--){let St=U/m,rt=d*Math.cos(St*Math.PI/2),Et=g*Math.sin(St*Math.PI/2)+x;for(let at=0,Xt=N.length;at<Xt;at++){let Lt=V(N[at],st[at],Et);Ot(Lt.x,Lt.y,u+rt)}for(let at=0,Xt=H.length;at<Xt;at++){let Lt=H[at];_t=xt[at];for(let w=0,v=Lt.length;w<v;w++){let W=V(Lt[w],_t[w],Et);R?Ot(W.x,W.y+y[h-1].y,y[h-1].x+rt):Ot(W.x,W.y,u+rt)}}}pt(),It();function pt(){let U=s.length/3;if(f){let St=0,rt=j*St;for(let Et=0;Et<ut;Et++){let at=$[Et];$t(at[2]+rt,at[1]+rt,at[0]+rt)}St=h+m*2,rt=j*St;for(let Et=0;Et<ut;Et++){let at=$[Et];$t(at[0]+rt,at[1]+rt,at[2]+rt)}}else{for(let St=0;St<ut;St++){let rt=$[St];$t(rt[2],rt[1],rt[0])}for(let St=0;St<ut;St++){let rt=$[St];$t(rt[0]+j*h,rt[1]+j*h,rt[2]+j*h)}}i.addGroup(U,s.length/3-U,0)}function It(){let U=s.length/3,St=0;Nt(N,St),St+=N.length;for(let rt=0,Et=H.length;rt<Et;rt++){let at=H[rt];Nt(at,St),St+=at.length}i.addGroup(U,s.length/3-U,1)}function Nt(U,St){let rt=U.length;for(;--rt>=0;){let Et=rt,at=rt-1;at<0&&(at=U.length-1);for(let Xt=0,Lt=h+m*2;Xt<Lt;Xt++){let w=j*Xt,v=j*(Xt+1),W=St+Et+w,yt=St+at+w,mt=St+at+v,nt=St+Et+v;Jt(W,yt,mt,nt)}}}function Ot(U,St,rt){c.push(U),c.push(St),c.push(rt)}function $t(U,St,rt){kt(U),kt(St),kt(rt);let Et=s.length/3,at=T.generateTopUV(i,s,Et-3,Et-2,Et-1);te(at[0]),te(at[1]),te(at[2])}function Jt(U,St,rt,Et){kt(U),kt(St),kt(Et),kt(St),kt(rt),kt(Et);let at=s.length/3,Xt=T.generateSideWallUV(i,s,at-6,at-3,at-2,at-1);te(Xt[0]),te(Xt[1]),te(Xt[3]),te(Xt[1]),te(Xt[2]),te(Xt[3])}function kt(U){s.push(c[U*3+0]),s.push(c[U*3+1]),s.push(c[U*3+2])}function te(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return t1(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new so[s.type]().fromJSON(s)),new n(i,t.options)}},Qx={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new Mt(r,a),new Mt(o,c),new Mt(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new Mt(a,1-c),new Mt(l,1-u),new Mt(f,1-g),new Mt(x,1-p)]:[new Mt(o,1-c),new Mt(h,1-u),new Mt(d,1-g),new Mt(m,1-p)]}};function t1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Tn=class n extends Ie{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new D,f=new D,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let T=[],y=p/i,R=0;p===0&&a===0?R=.5/e:p===i&&c===Math.PI&&(R=-.5/e);for(let O=0;O<=e;O++){let L=O/e;u.x=-t*Math.cos(s+L*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+L*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(L+R,1-y),T.push(l++)}h.push(T)}for(let p=0;p<i;p++)for(let T=0;T<e;T++){let y=h[p][T+1],R=h[p][T],O=h[p+1][T],L=h[p+1][T+1];(p!==0||a>0)&&d.push(y,R,L),(p!==i-1||c<Math.PI)&&d.push(R,O,L)}this.setIndex(d),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var es=class n extends Ie{constructor(t=new no(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,c=new D,l=new Mt,h=new D,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(d,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),T(),p()}function m(y){h=t.getPointAt(y/e,h);let R=a.normals[y],O=a.binormals[y];for(let L=0;L<=s;L++){let P=L/s*Math.PI*2,Z=Math.sin(P),S=-Math.cos(P);c.x=S*R.x+Z*O.x,c.y=S*R.y+Z*O.y,c.z=S*R.z+Z*O.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=e;y++)for(let R=1;R<=s;R++){let O=(s+1)*(y-1)+(R-1),L=(s+1)*y+(R-1),P=(s+1)*y+R,Z=(s+1)*(y-1)+R;g.push(O,L,Z),g.push(L,P,Z)}}function T(){for(let y=0;y<=e;y++)for(let R=0;R<=s;R++)l.x=y/e,l.y=R/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new so[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var _i=class extends xi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ru,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function La(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function e1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ks=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yc=class extends Ks{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gh:r=t,o=2*e-i;break;case xh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case gh:a=t,c=2*i-e;break;case xh:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,T=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,R=d*m-d*x;for(let O=0;O!==o;++O)r[O]=p*a[h+O]+T*a[l+O]+y*a[c+O]+R*a[u+O];return r}},Zc=class extends Ks{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},$c=class extends Ks{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Xn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=La(e,this.TimeBufferType),this.values=La(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:La(t.times,Array),values:La(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new $c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Da:e=this.InterpolantFactoryMethodDiscrete;break;case Ua:e=this.InterpolantFactoryMethodLinear;break;case Ho:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Da;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&e1(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ho,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Ua;var ns=class extends Xn{};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Da;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends Xn{};Jc.prototype.ValueTypeName="color";var Kc=class extends Xn{};Kc.prototype.ValueTypeName="number";var jc=class extends Ks{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)xn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Wr=class extends Xn{InterpolantFactoryMethodLinear(t){return new jc(this.times,this.values,this.getValueSize(),t)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.DefaultInterpolation=Ua;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Xn{};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Da;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends Xn{};Qc.prototype.ValueTypeName="vector";var tl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},n1=new tl,el=class{constructor(t){this.manager=t!==void 0?t:n1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};el.DEFAULT_MATERIAL_NAME="__DEFAULT";var co=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},lo=class extends co{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},pc=new be,pu=new D,mu=new D,nl=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(pu),mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mu),e.updateMatrixWorld(),pc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var il=class extends nl{constructor(){super(new Za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ho=class extends co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new il}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ul="\\[\\]\\.:\\/",i1=new RegExp("["+ul+"]","g"),fl="[^"+ul+"]",s1="[^"+ul.replace("\\.","")+"]",r1=/((?:WC+[\/:])*)/.source.replace("WC",fl),a1=/(WCOD+)?/.source.replace("WCOD",s1),o1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),c1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),l1=new RegExp("^"+r1+a1+o1+c1+"$"),h1=["material","materials","bones","map"],sl=class{constructor(t,e,i){let s=i||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ue=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i1,"")}static parseTrackName(t){let e=l1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);h1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=sl;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H1=new Float32Array(1);var uo=class{constructor(t,e,i=0,s=1/0){this.ray=new Qi(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ir,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return rl(t,this,i,e),i.sort(gu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)rl(t[s],this,i,e);return i.sort(gu),i}};function gu(n,t){return n.distance-t.distance}function rl(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)rl(s[r],t,e,!0)}}var Xr=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Wu={type:"change"},dl={type:"start"},Xu={type:"end"},xo=new Qi,qu=new Vn,u1=Math.cos(70*Iu.DEG2RAD),_o=class extends jn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",nt),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",nt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Wu),i.update(),r=s.NONE},this.update=(function(){let M=new D,B=new xn().setFromUnitVectors(t.up,new D(0,1,0)),z=B.clone().invert(),q=new D,ct=new xn,dt=new D,zt=2*Math.PI;return function(vt=null){let F=i.object.position;M.copy(F).sub(i.target),M.applyQuaternion(B),o.setFromVector3(M),i.autoRotate&&r===s.NONE&&H(S(vt)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Tt=i.minAzimuthAngle,wt=i.maxAzimuthAngle;isFinite(Tt)&&isFinite(wt)&&(Tt<-Math.PI?Tt+=zt:Tt>Math.PI&&(Tt-=zt),wt<-Math.PI?wt+=zt:wt>Math.PI&&(wt-=zt),Tt<=wt?o.theta=Math.max(Tt,Math.min(wt,o.theta)):o.theta=o.theta>(Tt+wt)/2?Math.max(Tt,o.theta):Math.min(wt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&L||i.object.isOrthographicCamera?o.radius=st(o.radius):o.radius=st(o.radius*l),M.setFromSpherical(o),M.applyQuaternion(z),F.copy(i.target).add(M),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Qt=!1;if(i.zoomToCursor&&L){let Zt=null;if(i.object.isPerspectiveCamera){let pe=M.length();Zt=st(pe*l);let xe=pe-Zt;i.object.position.addScaledVector(R,xe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let pe=new D(O.x,O.y,0);pe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Qt=!0;let xe=new D(O.x,O.y,0);xe.unproject(i.object),i.object.position.sub(xe).add(pe),i.object.updateMatrixWorld(),Zt=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Zt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Zt).add(i.object.position):(xo.origin.copy(i.object.position),xo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(xo.direction))<u1?t.lookAt(i.target):(qu.setFromNormalAndCoplanarPoint(i.object.up,i.target),xo.intersectPlane(qu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Qt=!0);return l=1,L=!1,Qt||q.distanceToSquared(i.object.position)>a||8*(1-ct.dot(i.object.quaternion))>a||dt.distanceToSquared(i.target)>0?(i.dispatchEvent(Wu),q.copy(i.object.position),ct.copy(i.object.quaternion),dt.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ut),i.domElement.removeEventListener("pointerdown",Lt),i.domElement.removeEventListener("pointercancel",v),i.domElement.removeEventListener("wheel",mt),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",v),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",nt),i._domElementKeyEvents=null)};let i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new Xr,c=new Xr,l=1,h=new D,u=new Mt,f=new Mt,d=new Mt,g=new Mt,x=new Mt,m=new Mt,p=new Mt,T=new Mt,y=new Mt,R=new D,O=new Mt,L=!1,P=[],Z={};function S(M){return M!==null?2*Math.PI/60*i.autoRotateSpeed*M:2*Math.PI/60/60*i.autoRotateSpeed}function b(M){let B=Math.abs(M)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*B)}function H(M){c.theta-=M}function K(M){c.phi-=M}let $=(function(){let M=new D;return function(z,q){M.setFromMatrixColumn(q,0),M.multiplyScalar(-z),h.add(M)}})(),N=(function(){let M=new D;return function(z,q){i.screenSpacePanning===!0?M.setFromMatrixColumn(q,1):(M.setFromMatrixColumn(q,0),M.crossVectors(i.object.up,M)),M.multiplyScalar(z),h.add(M)}})(),V=(function(){let M=new D;return function(z,q){let ct=i.domElement;if(i.object.isPerspectiveCamera){let dt=i.object.position;M.copy(dt).sub(i.target);let zt=M.length();zt*=Math.tan(i.object.fov/2*Math.PI/180),$(2*z*zt/ct.clientHeight,i.object.matrix),N(2*q*zt/ct.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(z*(i.object.right-i.object.left)/i.object.zoom/ct.clientWidth,i.object.matrix),N(q*(i.object.top-i.object.bottom)/i.object.zoom/ct.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function j(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ut(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ot(M,B){if(!i.zoomToCursor)return;L=!0;let z=i.domElement.getBoundingClientRect(),q=M-z.left,ct=B-z.top,dt=z.width,zt=z.height;O.x=q/dt*2-1,O.y=-(ct/zt)*2+1,R.set(O.x,O.y,1).unproject(i.object).sub(i.object.position).normalize()}function st(M){return Math.max(i.minDistance,Math.min(i.maxDistance,M))}function xt(M){u.set(M.clientX,M.clientY)}function _t(M){ot(M.clientX,M.clientX),p.set(M.clientX,M.clientY)}function ft(M){g.set(M.clientX,M.clientY)}function Q(M){f.set(M.clientX,M.clientY),d.subVectors(f,u).multiplyScalar(i.rotateSpeed);let B=i.domElement;H(2*Math.PI*d.x/B.clientHeight),K(2*Math.PI*d.y/B.clientHeight),u.copy(f),i.update()}function pt(M){T.set(M.clientX,M.clientY),y.subVectors(T,p),y.y>0?j(b(y.y)):y.y<0&&ut(b(y.y)),p.copy(T),i.update()}function It(M){x.set(M.clientX,M.clientY),m.subVectors(x,g).multiplyScalar(i.panSpeed),V(m.x,m.y),g.copy(x),i.update()}function Nt(M){ot(M.clientX,M.clientY),M.deltaY<0?ut(b(M.deltaY)):M.deltaY>0&&j(b(M.deltaY)),i.update()}function Ot(M){let B=!1;switch(M.code){case i.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,i.keyPanSpeed),B=!0;break;case i.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,-i.keyPanSpeed),B=!0;break;case i.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(i.keyPanSpeed,0),B=!0;break;case i.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(-i.keyPanSpeed,0),B=!0;break}B&&(M.preventDefault(),i.update())}function $t(M){if(P.length===1)u.set(M.pageX,M.pageY);else{let B=k(M),z=.5*(M.pageX+B.x),q=.5*(M.pageY+B.y);u.set(z,q)}}function Jt(M){if(P.length===1)g.set(M.pageX,M.pageY);else{let B=k(M),z=.5*(M.pageX+B.x),q=.5*(M.pageY+B.y);g.set(z,q)}}function kt(M){let B=k(M),z=M.pageX-B.x,q=M.pageY-B.y,ct=Math.sqrt(z*z+q*q);p.set(0,ct)}function te(M){i.enableZoom&&kt(M),i.enablePan&&Jt(M)}function U(M){i.enableZoom&&kt(M),i.enableRotate&&$t(M)}function St(M){if(P.length==1)f.set(M.pageX,M.pageY);else{let z=k(M),q=.5*(M.pageX+z.x),ct=.5*(M.pageY+z.y);f.set(q,ct)}d.subVectors(f,u).multiplyScalar(i.rotateSpeed);let B=i.domElement;H(2*Math.PI*d.x/B.clientHeight),K(2*Math.PI*d.y/B.clientHeight),u.copy(f)}function rt(M){if(P.length===1)x.set(M.pageX,M.pageY);else{let B=k(M),z=.5*(M.pageX+B.x),q=.5*(M.pageY+B.y);x.set(z,q)}m.subVectors(x,g).multiplyScalar(i.panSpeed),V(m.x,m.y),g.copy(x)}function Et(M){let B=k(M),z=M.pageX-B.x,q=M.pageY-B.y,ct=Math.sqrt(z*z+q*q);T.set(0,ct),y.set(0,Math.pow(T.y/p.y,i.zoomSpeed)),j(y.y),p.copy(T);let dt=(M.pageX+B.x)*.5,zt=(M.pageY+B.y)*.5;ot(dt,zt)}function at(M){i.enableZoom&&Et(M),i.enablePan&&rt(M)}function Xt(M){i.enableZoom&&Et(M),i.enableRotate&&St(M)}function Lt(M){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(M.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",v)),qt(M),M.pointerType==="touch"?Pt(M):W(M))}function w(M){i.enabled!==!1&&(M.pointerType==="touch"?At(M):yt(M))}function v(M){Gt(M),P.length===0&&(i.domElement.releasePointerCapture(M.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",v)),i.dispatchEvent(Xu),r=s.NONE}function W(M){let B;switch(M.button){case 0:B=i.mouseButtons.LEFT;break;case 1:B=i.mouseButtons.MIDDLE;break;case 2:B=i.mouseButtons.RIGHT;break;default:B=-1}switch(B){case ss.DOLLY:if(i.enableZoom===!1)return;_t(M),r=s.DOLLY;break;case ss.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enablePan===!1)return;ft(M),r=s.PAN}else{if(i.enableRotate===!1)return;xt(M),r=s.ROTATE}break;case ss.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enableRotate===!1)return;xt(M),r=s.ROTATE}else{if(i.enablePan===!1)return;ft(M),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(dl)}function yt(M){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;Q(M);break;case s.DOLLY:if(i.enableZoom===!1)return;pt(M);break;case s.PAN:if(i.enablePan===!1)return;It(M);break}}function mt(M){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(M.preventDefault(),i.dispatchEvent(dl),Nt(M),i.dispatchEvent(Xu))}function nt(M){i.enabled===!1||i.enablePan===!1||Ot(M)}function Pt(M){switch(E(M),P.length){case 1:switch(i.touches.ONE){case rs.ROTATE:if(i.enableRotate===!1)return;$t(M),r=s.TOUCH_ROTATE;break;case rs.PAN:if(i.enablePan===!1)return;Jt(M),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case rs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;te(M),r=s.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;U(M),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(dl)}function At(M){switch(E(M),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;St(M),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;rt(M),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;at(M),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Xt(M),i.update();break;default:r=s.NONE}}function Ut(M){i.enabled!==!1&&M.preventDefault()}function qt(M){P.push(M.pointerId)}function Gt(M){delete Z[M.pointerId];for(let B=0;B<P.length;B++)if(P[B]==M.pointerId){P.splice(B,1);return}}function E(M){let B=Z[M.pointerId];B===void 0&&(B=new Mt,Z[M.pointerId]=B),B.set(M.pageX,M.pageY)}function k(M){let B=M.pointerId===P[0]?P[1]:P[0];return Z[B]}i.domElement.addEventListener("contextmenu",Ut),i.domElement.addEventListener("pointerdown",Lt),i.domElement.addEventListener("pointercancel",v),i.domElement.addEventListener("wheel",mt,{passive:!1}),this.update()}};function yo(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,c=new Ie,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Yu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);let g=Yu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Yu(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new t(r),o=0;for(let l=0;l<n.length;++l)a.set(n[l].array,o),o+=n[l].array.length;let c=new Ne(a,e,i);return s!==void 0&&(c.gpuType=s),c}var Zu={},pl=(n,t)=>Zu[n]??(Zu[n]=(()=>{let e=t();e=e.index?e.toNonIndexed():e;for(let i of Object.keys(e.attributes))i!=="position"&&i!=="normal"&&e.deleteAttribute(i);return e})()),vo=new be,Mo=new xn,ml=new Fi,$u=new D,Ju=new D,Je=class{constructor(){this.l=[]}add(t,e,i=0,s=0,r=0,a=1,o=a,c=a,l=0,h=0,u=0){let f=new Wt(e),d=t.clone();for(let m of Object.keys(d.attributes))m!=="position"&&m!=="normal"&&d.deleteAttribute(m);ml.set(l,h,u,"YXZ"),Mo.setFromEuler(ml),vo.compose($u.set(i,s,r),Mo,Ju.set(a,o,c)),d.applyMatrix4(vo);let g=d.attributes.position.count,x=new Float32Array(g*3);for(let m=0;m<g;m++)x[m*3]=f.r,x[m*3+1]=f.g,x[m*3+2]=f.b;return d.setAttribute("color",new Ne(x,3)),this.l.push(d),this}sph(t,e,i,s,r,a=1,o=1,c=1,l=9){return this.add(pl("s"+l,()=>new Tn(1,l,Math.max(5,l-3))),t,e,i,s,r*a,r*o,r*c)}cyl(t,e,i,s,r,a,o,c=8,l=0,h=0){let u=new En(a,r,o,c);return u.translate(0,o/2,0),this.add(u.toNonIndexed(),t,e,i,s,1,1,1,l,0,h)}cone(t,e,i,s,r,a,o=8,c=0,l=0,h=0){let u=new wn(r,a,o);return u.translate(0,a/2,0),this.add(u.toNonIndexed(),t,e,i,s,1,1,1,c,l,h)}box(t,e,i,s,r,a,o,c=0,l=0,h=0){return this.add(pl("b",()=>new sn(1,1,1)),t,e,i+a/2,s,r,a,o,l,c,h)}boxc(t,e,i,s,r,a,o,c=0,l=0,h=0){return this.add(pl("b",()=>new sn(1,1,1)),t,e,i,s,r,a,o,l,c,h)}geo(t,e,i=0,s=0,r=0,a=1){t=t.index?t.toNonIndexed():t;for(let o of Object.keys(t.attributes))o!=="position"&&o!=="normal"&&t.deleteAttribute(o);return this.add(t,e,i,s,r,a)}raw(t,e=0,i=0,s=0,r=1){let a=t.clone();return ml.set(0,0,0,"YXZ"),Mo.identity(),vo.compose($u.set(e,i,s),Mo,Ju.set(r,r,r)),a.applyMatrix4(vo),this.l.push(a),this}merge(){return this.l.length?yo(this.l,!1):null}};var Ce=Math.PI*2,fn=2.399,_l=n=>n.index?n.toNonIndexed():n,Ku={},cs=(n,t)=>Ku[n]??(Ku[n]=_l(t())),qn=n=>cs("s"+n,()=>new Tn(1,n,Math.max(6,Math.round(n*.7)))),Yr=n=>cs("h"+n,()=>new Tn(1,n,Math.max(5,Math.round(n*.4)),0,Ce,Math.PI/2,Math.PI/2)),f1=()=>cs("leaf",()=>{let n=new Tn(1,12,8);return n.scale(.5,.06,.5),n.translate(0,0,.5),n}),d1=()=>cs("rib",()=>{let n=new Tn(1,6,4);return n.scale(.05,.09,.46),n.translate(0,.012,.5),n}),Nn=(n,t)=>new Wt(n).lerp(new Wt(16777215),t).getHex(),An=(n,t)=>new Wt(n).multiplyScalar(1-t).getHex(),Ft=(n,t,e,i,s,r,a=r,o=r,c=0,l=0,h=0,u=18)=>n.add(qn(u),t,e,i,s,r,a,o,c,l,h),rn=(n,t,e,i,s)=>Ft(n,16777215,t,e,i,s,s*.55,s*.8,0,0,0,8),ti=(n,t,e,i,s,r)=>Ft(n,t,e,i,s,r,r,r,0,0,0,5);function ue(n,t,e,i,s,r,a,o,c=.35,l=0){n.add(f1(),t,e,i,s,a,r,r,-c,o,l),n.add(d1(),Nn(t,.45),e,i,s,a,r,r,-c,o,l)}function p1(n,t,e=t,{radial:i=10,segs:s=16}={}){let r=new Sn(n.map(h=>new D(...h))),a=r.computeFrenetFrames(s,!1),o=[],c=[];for(let h=0;h<=s;h++){let u=h/s,f=r.getPointAt(u),d=a.normals[h],g=a.binormals[h],x=t+(e-t)*u;for(let m=0;m<=i;m++){let p=m/i*Ce,T=Math.cos(p)*x,y=Math.sin(p)*x;o.push(f.x+d.x*T+g.x*y,f.y+d.y*T+g.y*y,f.z+d.z*T+g.z*y)}}for(let h=0;h<s;h++)for(let u=0;u<i;u++){let f=h*(i+1)+u,d=f+i+1;c.push(f,d,f+1,f+1,d,d+1)}let l=new Ie;return l.setAttribute("position",new ye(o,3)),l.setIndex(c),l.computeVertexNormals(),_l(l)}var me=(n,t,e,i,s,r)=>n.add(p1(e,i,s,r),t),Un=(n,t,e,i=0,s=0,r=0,a=1,o=28)=>n.add(_l(new ao(e.map(c=>new Mt(c[0],c[1])),o)),t,i,s,r,a,a,a),ze=(n,t,e,i,s,r,a,o,c=16,l=0,h=0,u=0)=>{let f=cs(`c${c}`,()=>{let d=new En(1,1,1,c);return d.translate(0,.5,0),d});n.add(f,t,e,i,s,r,o,r,l,h,u)},Qs=(n,t,e,i,s,r,a,o=12,c=0,l=0,h=0)=>{let u=cs(`k${o}`,()=>{let f=new wn(1,1,o);return f.translate(0,.5,0),f});n.add(u,t,e,i,s,r,a,r,c,l,h)};var os=(n,t,e=.03)=>me(n,8016432,t,e,e*.7,{radial:6,segs:10});function ei(n,t,e,i,s,r,a,{sy:o=1,core:c=null,seeds:l=null,nSeeds:h=14,rind:u=null,segs:f=0}={}){if(n.add(Yr(20),t,i,s+a*o,r,a,a*o,a),u&&ze(n,u,i,s+a*o-.012,r,a*.97,a*.97,.02,24),ze(n,e,i,s+a*o-.004,r,a*(u?.86:.95),0,.02,24),c&&ze(n,c[0],i,s+a*o+.004,r,a*c[1],0,.02,18),l)for(let d=0;d<h;d++){let g=a*(.25+.45*(d*.37%1)),x=d*fn;Ft(n,l,i+Math.cos(x)*g,s+a*o+.03,r+Math.sin(x)*g,a*.07,a*.04,a*.11,0,x,0,6)}for(let d=0;d<f;d++){let g=d/f*Ce;n.add(qn(4),16777215,i+Math.cos(g)*a*.45,s+a*o+.012,r+Math.sin(g)*a*.45,a*.45,.006,.012,0,-g,0)}}function ju(n,t,e,i,s,r){Ft(n,t,e,i+r*.92,s,r,r*.9,r),Ft(n,Nn(t,.25),e-r*.25,i+r*.95,s+r*.5,r*.5,r*.5,r*.42),Ft(n,An(t,.45),e,i+r*1.72,s,r*.3,r*.08,r*.3,0,0,0,10),os(n,[[e,i+r*1.68,s],[e+.02,i+r*1.95,s],[e+.06,i+r*2.15,s]],.025),ue(n,6078280,e+.04,i+r*1.95,s,r*.9,r*.42,1.1,.45),rn(n,e-r*.42,i+r*1.3,s+r*.6,r*.16)}function m1(n,t,e,i,s,r){Ft(n,t,e,i+r*.95,s,r,r*.98,r*.94),Ft(n,16740234,e+r*.3,i+r*1.05,s+r*.35,r*.7,r*.72,r*.68),Ft(n,An(t,.3),e,i+r,s+r*.9,r*.05,r*.9,r*.09,0,0,0,8),ue(n,5814344,e,i+r*1.85,s,r*1,r*.36,-.6,.3),ue(n,5221956,e,i+r*1.85,s,r*.9,r*.32,2.2,.35),rn(n,e-r*.4,i+r*1.35,s+r*.55,r*.15)}function g1(n,t,e,i,s,r){Ft(n,t,e,i+r*.85,s,r,r*.88,r),Ft(n,t,e,i+r*1.7,s,r*.62,r*.75,r*.62),Zr(n,An(t,.25),e,i+r*.95,s,r*.99,14,r*.035),os(n,[[e,i+r*2.3,s],[e+.04,i+r*2.6,s],[e+.1,i+r*2.75,s]],.025),ue(n,6078280,e+.05,i+r*2.5,s,r*.9,r*.36,1.6,.4),rn(n,e-r*.4,i+r*1.1,s+r*.6,r*.14)}function gl(n,t,e,i,s,r,{flat:a=.9,leafy:o=!0}={}){Ft(n,t,e,i+r*a,s,r,r*a,r,0,0,0,22),Zr(n,Nn(t,.35),e,i+r*a,s,r*.995,30,r*.03),Ft(n,6982186,e,i+r*a*2-.01,s,r*.12,r*.05,r*.12,0,0,0,8),o&&(ue(n,4168250,e,i+r*a*2,s,r*1.1,r*.45,.6,.25),ue(n,5221956,e,i+r*a*2,s,r*.9,r*.38,2.4,.3)),rn(n,e-r*.4,i+r*a*1.35,s+r*.55,r*.15)}function x1(n,t,e,i,s,r){ei(n,t,Nn(t,.35),e,i,s,r,{rind:16774360,segs:8,sy:.85})}function _1(n,t,e,i,s,r){Ft(n,t,e,i+r,s,r,r*1.05,r);for(let a=0;a<46;a++){let o=a*fn,c=Math.asin(1-2*(a+.5)/46);Ft(n,An(t,.12),e+Math.cos(o)*Math.cos(c)*r,i+r+Math.sin(c)*r*1.05,s+Math.sin(o)*Math.cos(c)*r,r*.13,r*.13,r*.13,0,0,0,5)}}function bo(n,t,e,i,s,r,a,o,{leafCol:c=5221956,stemTop:l=1.05}={}){let h=[i,s+l,r];os(n,[[i-.25,s+l+.1,r],h,[i+.05,s+l-.05,r]],.03);for(let u=0;u<o;u++){let f=u*fn,d=o>1?.12+.13*Math.sqrt(u/o):0,g=s+l-.25-u*.53%1*.35-a*.4,x=i+Math.cos(f)*d*2.2,m=r+Math.sin(f)*d*2.2;os(n,[h,[x,g+a*1.6,m]],.012),t(n,e,x,g,m,a)}ue(n,c,h[0],h[1],h[2],.5,.2,-.8,.25),ue(n,An(c,.1),h[0],h[1],h[2],.45,.18,1.9,.35)}var as=(n,t,e,i,s,r)=>{Ft(n,t,e,i+r,s,r,r,r,0,0,0,14),rn(n,e-r*.4,i+r*1.4,s+r*.5,r*.18)},y1=(n,t,e,i,s,r)=>{Ft(n,t,e,i+r*1.2,s,r,r*1.25,r,0,0,0,14),Ft(n,5913120,e,i+r*.05,s,r*.15,r*.06,r*.15,0,0,0,6),rn(n,e-r*.4,i+r*1.6,s+r*.5,r*.18)},v1=(n,t,e,i,s,r)=>_1(n,t,e,i,s,r);function Qu(n,t,e,i,s,r){Ft(n,t,e,i+r*.72,s,r,r*.72,r,0,0,0,22);for(let a=0;a<4;a++)ue(n,6978090,e,i+r*1.42,s,r*.55,r*.38,a*Ce/4+.4,.05);Ft(n,5917216,e,i+r*1.48,s,r*.1,r*.08,r*.1,0,0,0,8),rn(n,e-r*.4,i+r*1,s+r*.6,r*.15)}function M1(n,t,e,i,s,r){Ft(n,t,e-.18,i+r,s-.1,r,r*.95,r),Zr(n,An(t,.2),e-.18,i+r,s-.1,r*.99,16,r*.03),Ft(n,5917216,e-.18,i+r*1.94,s-.1,r*.1,r*.06,r*.1,0,0,0,8),ei(n,t,16747168,e+.42,i,s+.18,r*.75,{seeds:16771248,nSeeds:18,rind:Nn(t,.3),sy:.8})}function b1(n,t,e,i,s,r){Ft(n,t,e,i+r*.9,s,r,r*.9,r,0,0,0,22),Ft(n,t,e,i+r*1.75,s,r*.5,r*.4,r*.5),Zr(n,Nn(t,.3),e,i+r*.9,s,r,24,r*.025),ue(n,4168250,e,i+r*2.1,s,r*.8,r*.32,.8,.3),rn(n,e-r*.4,i+r*1.3,s+r*.6,r*.14)}function Zr(n,t,e,i,s,r,a,o){for(let c=0;c<a;c++){let l=c*fn,h=Math.asin(1-2*(c+.5)/a)*.85;ti(n,t,e+Math.cos(l)*Math.cos(h)*r,i+Math.sin(h)*r,s+Math.sin(l)*Math.cos(h)*r,o)}}var tf={apple:(n,t)=>{ju(n,t.fruit,-.08,0,0,.36),ju(n,An(t.fruit,.05),.42,0,.25,.22)},peach:(n,t)=>{m1(n,t.fruit,0,0,0,.38)},pear:(n,t)=>{g1(n,t.fruit,0,0,0,.3)},plum:(n,t)=>bo(n,as,t.fruit,0,0,0,.15,4),loquat:(n,t)=>bo(n,y1,t.fruit,0,0,0,.13,6,{stemTop:1}),mandarin:(n,t)=>{gl(n,t.fruit,-.18,0,0,.26,{flat:.85}),gl(n,t.fruit,.35,0,.18,.2,{flat:.85,leafy:!1})},orange:(n,t)=>{gl(n,t.fruit,-.15,0,-.05,.32),x1(n,t.fruit,.42,0,.25,.2)},guava:(n,t)=>M1(n,t.fruit,0,0,0,.3),lychee:(n,t)=>bo(n,v1,t.fruit,0,0,0,.13,5),longan:(n,t)=>bo(n,as,t.fruit,0,0,0,.1,9),pomelo:(n,t)=>b1(n,t.fruit,0,0,0,.36),persimmon:(n,t)=>{Qu(n,t.fruit,-.1,0,0,.34),Qu(n,An(t.fruit,.06),.42,0,.22,.2)},cordia:(n,t)=>{xl(n,16774112,0,0,0,.42);for(let e=0;e<22;e++){let i=e*fn,s=.3*Math.sqrt(e/22);as(n,t.fruit,Math.cos(i)*s,.2+e%3*.03,Math.sin(i)*s,.06)}ue(n,5221956,.3,.28,0,.4,.18,1.2,.2)}};function xl(n,t,e,i,s,r,a=5939424){Un(n,t,[[0,0],[r*.45,0],[r*.5,.04],[r*.9,r*.42],[r,r*.55],[r*.95,r*.56],[r*.84,r*.45],[0,.06]],e,i,s,1,28),me(n,a,Array.from({length:25},(o,c)=>{let l=c/24*Ce;return[e+Math.cos(l)*r*.93,i+r*.46,s+Math.sin(l)*r*.93]}),.012,.012,{radial:4,segs:40})}var S1={tree:(n,t)=>(tf[t.sv]||tf.apple)(n,t),papaya:n=>{Ft(n,16753202,-.25,.36,0,.24,.36,.24,0,0,.25,18),Ft(n,9093184,-.32,.66,0,.08,.08,.08),ei(n,16753202,16742954,.25,0,.15,.28,{sy:.6,seeds:2763306,nSeeds:22,rind:16763002}),Ft(n,16777215,-.33,.5,.2,.04,.07,.03,0,0,0,6)},banana:n=>{for(let t=0;t<5;t++){let e=(t-2)*.32,i=Math.sin(e)*.08,s=Math.cos(e)*.08;me(n,16767293,[[i,.75,s],[i+Math.sin(e)*.25,.62,s+Math.cos(e)*.3],[i+Math.sin(e)*.38,.34,s+Math.cos(e)*.42],[i+Math.sin(e)*.42,.08,s+Math.cos(e)*.5]],.085,.05,{radial:8,segs:14}),Ft(n,5917216,i+Math.sin(e)*.42,.06,s+Math.cos(e)*.5,.035)}ze(n,10135610,0,.7,.02,.09,.09,.22,10),me(n,8030762,[[0,.9,0],[0,1.05,-.05],[-.05,1.2,-.12]],.05,.04,{radial:6,segs:6}),rn(n,-.1,.5,.4,.05)},pineapple:n=>{Ft(n,16758062,0,.45,0,.33,.45,.33,0,0,0,20);for(let t=0;t<7;t++)for(let e=0;e<9;e++){let i=e/9*Ce+t*.35,s=-1+t*.32,r=.335;Ft(n,t%2?15242538:15902768,Math.cos(i)*Math.cos(s)*r,.45+Math.sin(s)*.45,Math.sin(i)*Math.cos(s)*r,.06,.05,.04,0,-i+Math.PI/2,0,6),ti(n,9067032,Math.cos(i)*Math.cos(s)*r*1.05,.45+Math.sin(s)*.45,Math.sin(i)*Math.cos(s)*r*1.05,.014)}for(let t=0;t<3;t++)for(let e=0;e<8;e++)ue(n,t?6078280:4168250,0,.85+t*.08,0,.62-t*.15,.12,e/8*Ce+t*.4,1.05-t*.15)},grape:n=>{[[0,6],[1,5],[2,5],[3,4],[4,3],[5,2],[6,1]].forEach(([e,i])=>{for(let s=0;s<i;s++){let r=s/i*Ce+e*.5,a=.04*i;Ft(n,(s+e)%3?8011696:6959008,Math.cos(r)*a,1-e*.13,Math.sin(r)*a,.1,.11,.1,0,0,0,12),rn(n,Math.cos(r)*a-.03,1.04-e*.13,Math.sin(r)*a+.06,.025)}}),me(n,7047722,[[0,1.02,0],[0,1.2,0],[.06,1.3,0]],.03,.025);for(let e=0;e<5;e++)ue(n,5220412,.06,1.25,0,.32,.36,-.9+(e-2)*.35+Math.PI/2,.2+e%2*.1);me(n,9087546,Array.from({length:12},(e,i)=>{let s=i/11;return[-.06-s*.2,1.22+Math.sin(s*9)*.05,Math.cos(s*9)*.05]}),.012,.008,{radial:4,segs:20})},dragon:n=>{Ft(n,16727435,-.2,.4,0,.28,.38,.28,0,0,0,18);for(let t=0;t<14;t++){let e=t*fn,i=-.6+t%5*.3,s=-.2+Math.cos(e)*.28*Math.cos(i),r=.4+Math.sin(i)*.38,a=Math.sin(e)*.28*Math.cos(i);ue(n,t%2?8048714:10149968,s,r,a,.18,.12,Math.atan2(Math.cos(e),Math.sin(e)),.8)}Ft(n,10149968,-.2,.8,0,.06,.08,.06),ei(n,16727435,16777215,.35,0,.2,.26,{sy:.75,seeds:1710618,nSeeds:34})},strawberry:n=>{let t=[[0,0],[.06,.02],[.22,.25],[.34,.52],[.32,.66],[.2,.74],[0,.76]],e=s=>{for(let r=0;r<t.length-1;r++){let[a,o]=t[r],[c,l]=t[r+1];if(s>=o&&s<=l)return a+(c-a)*(s-o)/(l-o)}return 0},i=(s,r,a)=>{Un(n,16726602,t.map(([o,c])=>[o*a,c*a]),s,0,r,1,28);for(let o=0;o<40;o++){let c=o*fn,l=.08+.8*(o*.618%1),h=l*.72,u=e(h)*1;ti(n,16769162,s+Math.cos(c)*u*a,h*a,r+Math.sin(c)*u*a,.02*a)}for(let o=0;o<7;o++)ue(n,5221956,s,.74*a,r,.3*a,.13*a,o/7*Ce,-.2);Qs(n,5221956,s,.74*a,r,.03*a,.16*a,6),rn(n,s-.12*a,.5*a,r+.26*a,.05*a)};i(-.15,0,.95),i(.36,.24,.6)},cabbage:(n,t)=>{let e=t.col||8377434;Ft(n,Nn(e,.45),0,.42,0,.34,.32,.34);for(let i=0;i<9;i++){let s=i/9*Ce;n.add(Yr(14),i%2?e:An(e,.08),Math.cos(s)*.12,.34,Math.sin(s)*.12,.36,.42,.2,-.9,s+Math.PI/2,0)}for(let i=0;i<6;i++)ue(n,An(e,.15),0,.1,0,.6,.42,i/6*Ce+.3,.25)},leafy:(n,t)=>{let e=t.col||8179534;for(let i=0;i<11;i++){let s=i/11*Ce,r=Math.cos(s)*.08,a=Math.sin(s)*.08;me(n,Nn(e,.35),[[r,0,a],[r*1.6,.4,a*1.6],[r*2.6,.75,a*2.6]],.025,.02,{radial:5,segs:6}),ue(n,e,r*2.6,.75,a*2.6,.38,.2,s+Math.PI/2*0+Math.atan2(r,a),.7),ue(n,An(e,.1),r*1.8,.5,a*1.8,.28,.15,Math.atan2(r,a)+.8,.5)}ze(n,15223354,0,.18,0,.13,.13,.06,14)},jiaobai:n=>{for(let t=0;t<3;t++){let e=(t-1)*.22,i=t===1?16645096:15921876;me(n,i,[[e,0,0],[e,.35,0],[e+.02,.7,0]],.1,.06,{radial:12,segs:8}),Ft(n,i,e+.02,.72,0,.06,.06,.06)}me(n,8179534,[[.42,0,.1],[.44,.4,.1],[.47,.9,.12]],.11,.07,{radial:10,segs:8});for(let t=0;t<4;t++)ue(n,6078280,.45,.6+t*.1,.1,.55,.12,t*1.6,1.1)},bamboo:(n,t)=>{let e=t.col||14268794;for(let i=0;i<7;i++){let s=1-i*.12,r=i*.12,a=i*1.1;n.add(Yr(16),i%2?An(e,.15):e,.04*Math.sin(a),r,.04*Math.cos(a),.36*s,.55*s+.08,.36*s,Math.PI,a,0);for(let o=0;o<6;o++){let c=o/6*Ce+a;ti(n,6965802,Math.cos(c)*.3*s,r+.04,Math.sin(c)*.3*s,.012)}}Qs(n,Nn(e,.35),0,.82,0,.07,.32,10),ei(n,e,16774872,.5,0,.2,.2,{sy:1.1,core:[15786672,.5]})},mush:n=>{let t=(e,i,s,r=0)=>{ze(n,16773592,e,0,i,.11*s,.11*s,.42*s,14,0,0,r),n.add(Yr(20),15259832,e,.42*s,i,.42*s,.06*s,.42*s,Math.PI,0,0),n.add(qn(20),11100207,e,.42*s,i,.44*s,.26*s,.44*s);for(let a=0;a<6;a++){let o=a*fn;n.add(qn(4),15980976,e+Math.cos(o)*.24*s,.62*s,i+Math.sin(o)*.24*s,.11*s,.012,.025*s,0,o,0)}for(let a=0;a<10;a++){let o=a*fn;ti(n,14196848,e+Math.cos(o)*.35*s,.52*s,i+Math.sin(o)*.35*s,.025*s)}};t(-.12,0,1.1),t(.4,.25,.65)},eggplant:n=>{me(n,8007592,[[-.4,.24,0],[-.15,.28,.02],[.15,.33,0],[.38,.46,0]],.17,.24,{radial:16,segs:14}),Ft(n,8007592,.4,.48,0,.24,.24,.24),Ft(n,8007592,-.4,.24,0,.17,.17,.17);for(let t=0;t<5;t++)ue(n,5212730,.56,.56,0,.22,.14,t/5*Ce,-1.2);me(n,5212730,[[.6,.58,0],[.72,.62,0],[.8,.72,0]],.035,.03,{radial:6,segs:5}),rn(n,.2,.62,.18,.06),me(n,6954904,[[-.3,.1,.42],[-.1,.12,.44],[.15,.16,.42]],.09,.13,{radial:12,segs:10}),Ft(n,6954904,.17,.18,.42,.13,.13,.13)},tomato:n=>{let t=(i,s,r,a)=>{for(let o=0;o<6;o++){let c=o/6*Ce;Ft(n,a,i+Math.cos(c)*r*.2,r*.9,s+Math.sin(c)*r*.2,r*.82,r*.85,r*.82,0,0,0,16)}for(let o=0;o<5;o++)ue(n,5221956,i,r*1.72,s,r*.55,r*.22,o/5*Ce,-.3);ze(n,5221956,i,r*1.7,s,.025,0,.1,6),rn(n,i-r*.4,e(r),s+r*.55,r*.16)},e=i=>i*1.3;t(-.12,0,.38,16730682),t(.45,.25,.16,16734778),t(.45,-.15,.13,16756778)},pepper:n=>{let t=(e,i,s,r)=>{for(let a=0;a<4;a++){let o=a/4*Ce;Ft(n,r,e+Math.cos(o)*.11*s,.36*s,i+Math.sin(o)*.11*s,.21*s,.36*s,.21*s,0,0,0,14)}Ft(n,An(r,.15),e,.7*s,i,.16*s,.05*s,.16*s),me(n,5212730,[[e,.7*s,i],[e+.02,.85*s,i],[e+.08,.95*s,i]],.04*s,.03*s,{radial:6,segs:5}),rn(n,e-.14*s,.55*s,i+.2*s,.05*s)};t(-.2,0,1.15,16726843),t(.38,.15,.85,16762926)},radish:n=>{Un(n,16645104,[[0,.04],[.04,.12],[.14,.35],[.2,.62],[.19,.76],[.12,.82],[0,.84]],0,0,0,1,22),me(n,15919832,[[0,.06,0],[.04,-.02,.06],[.12,-.03,.12]],.02,.008,{radial:5,segs:6});for(let t=0;t<7;t++){let e=t/7*Ce;me(n,9095248,[[0,.82,0],[Math.cos(e)*.1,1.05,Math.sin(e)*.1]],.02,.02,{radial:4,segs:3});for(let i=0;i<3;i++)ue(n,6078280,Math.cos(e)*(.08+i*.05),.95+i*.1,Math.sin(e)*(.08+i*.05),.22-i*.03,.12,Math.atan2(Math.cos(e),Math.sin(e)),.8)}rn(n,-.08,.6,.16,.03)},ginger:n=>{let t=[[0,.18,0,.2,.15,.22],[.26,.22,.05,.16,.12,.17],[-.24,.2,.05,.15,.13,.16],[.1,.3,-.2,.14,.12,.14],[-.08,.12,.24,.13,.1,.15],[.42,.28,.12,.1,.09,.12]];for(let[e,i,s,r,a,o]of t){Ft(n,15120499,e,i,s,r,a,o,0,e*3,0,14),ti(n,16097448,e+r*.8,i+a*.5,s,.04);for(let c=0;c<3;c++)n.add(qn(4),13146712,e,i-.04+c*.05,s,r*1.01,.008,o*1.01)}ue(n,8179534,.42,.36,.12,.7,.14,.2,1.2),ue(n,7126852,.42,.36,.12,.6,.12,1.4,1.1)},sweetpotato:n=>{let t=(e,i,s,r)=>{Ft(n,12730714,e,.2*r,i,.42*r,.19*r,.2*r,0,s,0,18),Ft(n,11679054,e+Math.cos(s)*.36*r,.2*r,i-Math.sin(s)*.36*r,.1*r,.08*r,.08*r,0,s,0,8);for(let a=0;a<5;a++)ti(n,9054778,e+Math.cos(s)*(a-2)*.14*r,.36*r,i-Math.sin(s)*(a-2)*.14*r+(a%2-.5)*.05,.015*r)};t(-.12,-.05,.3,1),t(.2,.3,-.4,.75),ei(n,12730714,16760906,.48,0,-.2,.16,{sy:.9,core:[16767088,.6]}),ue(n,6989882,-.42,.25,-.1,.4,.3,-1,.3)},yam:n=>{me(n,12159578,[[-.5,.12,0],[-.15,.16,.04],[.2,.18,0],[.5,.14,.03]],.12,.15,{radial:12,segs:14});for(let t=0;t<14;t++){let e=t/13;me(n,9071168,[[-.5+e,.2+t%2*.05,(t%3-1)*.1],[-.5+e+.04,.28+t%2*.05,(t%3-1)*.13]],.006,.004,{radial:3,segs:2})}ei(n,12159578,16776170,.35,0,.35,.16,{sy:.5,core:[16183254,.4]})},daylily:n=>{for(let t=0;t<5;t++){let e=t*1.3,i=.5+t*.04;me(n,7324234,[[0,0,0],[Math.cos(e)*.15,.4,Math.sin(e)*.15]],.02,.02,{radial:4,segs:3}),Ft(n,t%2?16752155:16757050,Math.cos(e)*.18,.55,Math.sin(e)*.18,.06,.2,.06,Math.sin(e)*.3,0,-Math.cos(e)*.3,12)}me(n,7324234,[[.1,0,.1],[.15,.6,.15],[.2,.85,.2]],.025,.02);for(let t=0;t<6;t++)ue(n,t%2?16752155:16758858,.2,.85,.2,.3,.16,t/6*Ce,.55);for(let t=0;t<6;t++)me(n,16769136,[[.2,.86,.2],[.2+Math.cos(t)*.08,1.02,.2+Math.sin(t)*.08]],.006,.006,{radial:3,segs:2});for(let t=0;t<4;t++)ue(n,6076480,0,0,0,.6,.1,t*1.57+.4,.7)},sugarcane:n=>{for(let t=0;t<3;t++){let e=(t-1)*.22,i=.9+t*.08;for(let s=0;s<4;s++)ze(n,s%2?9054802:8004168,e,s*i/4,0,.08,.08,i/4-.02,14),ze(n,14262456,e,s*i/4+i/4-.02,0,.09,.09,.03,14)}ue(n,8179534,0,1,0,.6,.12,.4,.9),ue(n,7126852,.2,1,0,.5,.1,2.4,.9),ze(n,16312558,.45,0,.35,.08,.08,.06,14),ze(n,9054802,.45,0,.35,.085,.085,.03,14)},rice:(n,t)=>{let e=t.col||15911244,i=t.col&&t.col!==15911244&&t.col!==15382592?Nn(t.col,.6):16777215;xl(n,16777215,0,0,0,.44,14178874),Ft(n,i,0,.24,0,.38,.16,.38,0,0,0,20);for(let s=0;s<40;s++){let r=s*fn,a=.33*Math.sqrt(s/40);Ft(n,Nn(i,.2),Math.cos(r)*a,.24+.15*Math.sqrt(1-(a/.38)**2),Math.sin(r)*a,.022,.014,.04,0,r,0,5)}for(let s=0;s<5;s++){let r=-.8+s*.4;me(n,12109914,[[.48,0,-.1],[.48+Math.sin(r)*.08,.5,-.1],[.5+Math.sin(r)*.25,.88,-.1+Math.cos(r)*.05]],.015,.01,{radial:4,segs:8});for(let a=0;a<6;a++)Ft(n,e,.5+Math.sin(r)*.25-a*.03,.86-a*.07,-.1+Math.cos(r)*.05,.025,.045,.025,0,0,r,6)}},tea:(n,t)=>{let e=t.liq||13148202;Un(n,16777215,[[0,0],[.55,0],[.62,.04],[.6,.07],[.3,.06],[0,.06]],0,0,0,1,28),Un(n,16777215,[[0,.06],[.18,.06],[.2,.1],[.34,.22],[.42,.4],[.45,.52],[.42,.53],[.38,.42],[.3,.25],[0,.14]],0,0,0,1,28),ze(n,e,0,.46,0,.38,.38,.02,24),me(n,6986298,Array.from({length:18},(s,r)=>{let a=r/17*Ce;return[Math.cos(a)*.44,.44,Math.sin(a)*.44]}),.016,.016,{radial:4,segs:30}),rn(n,-.25,.4,.3,.04),os(n,[[.55,.05,.15],[.62,.25,.18],[.68,.48,.12]],.018),ue(n,4165434,.6,.18,.16,.36,.18,.4,.3),ue(n,5220412,.63,.3,.18,.32,.16,2.6,.4),ue(n,10214490,.68,.48,.12,.24,.1,1.2,1.1),Qs(n,12118128,.68,.48,.12,.035,.18,8)},coffee:n=>{os(n,[[-.5,.55,0],[-.1,.6,0],[.2,.68,.05]],.03);for(let e=0;e<7;e++){let i=e/7;as(n,e%3?15214650:12065322,-.42+i*.6,.38+Math.sin(e*1.7)*.06,.08*Math.cos(e*2),.09)}ue(n,3112762,-.1,.6,0,.45,.2,.5,.2),ue(n,4165434,.1,.64,0,.4,.18,2.6,.25);let t=(e,i,s)=>{n.add(Yr(14),5911576,e,.06,i,.11,.12,.15,Math.PI,s,0),n.add(qn(4),2757640,e,.06,i,.012,.02,.13,0,s,0)};for(let e=0;e<5;e++)t(.1+Math.cos(e*fn)*.16,.3+Math.sin(e*fn)*.12,e);Un(n,16777215,[[0,0],[.14,0],[.19,.2],[.2,.22],[.17,.21],[0,.16]],-.35,0,.3,1,20),ze(n,3809296,-.35,.18,.3,.16,.16,.02,18)},honey:(n,t)=>{let e=t.col||15245344;Un(n,e,[[0,0],[.3,0],[.34,.08],[.34,.5],[.28,.58],[.22,.6],[.22,.66],[0,.66]],0,0,0,1,24),ze(n,16774096,0,.2,0,.348,.348,.2,24);for(let a=0;a<3;a++)Ft(n,16765498,Math.cos(a*.5-.5)*.35,.3,Math.sin(a*.5-.5)*.35,.04,.04,.04,0,0,0,6);n.add(qn(8),16777215,-.2,.42,.25,.03,.09,.02),ze(n,15223354,0,.64,0,.26,.26,.07,20),Ft(n,15223354,0,.68,0,.3,.04,.3,0,0,0,12);for(let a=0;a<4;a++)Ft(n,e,.32*Math.cos(a),.56-a*.08,.32*Math.sin(a),.05,.1,.05,0,0,0,10);me(n,13145434,[[.25,.72,0],[.5,.5,0],[.62,.12,0]],.025,.025,{radial:6,segs:6});for(let a=0;a<4;a++)ze(n,13145434,.6,.05+a*.04,0,.07-a*.004,.07,.03,12);let i=-.42,s=.62,r=.22;Ft(n,16765498,i,s,r,.12,.09,.09);for(let a=0;a<3;a++)n.add(qn(8),2763306,i-.06+a*.06,s,r,.012,.095,.095);Ft(n,2763306,i+.13,s+.01,r,.06);for(let a of[-1,1])Ft(n,15267583,i,s+.09,r+a*.07,.07,.02,.05,a*.4,0,0,8)},mochi:n=>{Un(n,16777215,[[0,0],[.5,0],[.62,.05],[.6,.07],[.3,.05],[0,.05]],0,0,0,1,28);let t=(e,i,s,r)=>{if(Ft(n,s,e,.2,i,.2,.15,.2,0,0,0,18),r)for(let a=0;a<16;a++){let o=a*fn,c=.15*Math.sqrt(a/16);ti(n,r,e+Math.cos(o)*c,.33-c*.4,i+Math.sin(o)*c,.02)}rn(n,e-.08,.3,i+.1,.03)};t(-.2,0,16777215,14203e3),t(.2,.1,16758728),t(0,-.24,11065480),t(.05,.28,16048832,6965818),me(n,13145434,[[.42,.05,-.3],[.6,.15,.2]],.015,.015,{radial:4,segs:2})},noodle:n=>{Un(n,16777215,[[0,0],[.2,0],[.24,.04],[.48,.3],[.52,.38],[.48,.39],[.44,.3],[0,.08]],0,0,0,1,28),me(n,14178874,Array.from({length:25},(t,e)=>{let i=e/24*Ce;return[Math.cos(i)*.47,.33,Math.sin(i)*.47]}),.014,.014,{radial:4,segs:40}),Ft(n,13138490,0,.29,0,.42,.05,.42,0,0,0,20);for(let t=0;t<9;t++){let e=t*.7;me(n,16768890,Array.from({length:10},(i,s)=>{let r=s/9,a=.08+r*.26;return[Math.cos(e+r*4)*a,.34+Math.sin(r*9)*.02,Math.sin(e+r*4)*a]}),.022,.022,{radial:5,segs:14})}Ft(n,16777215,.18,.38,-.08,.11,.06,.08,0,0,0,14),Ft(n,16758062,.18,.42,-.08,.06,.03,.05,0,0,0,10);for(let t=0;t<8;t++)ze(n,6078280,-.15+Math.cos(t)*.08,.37,.12+Math.sin(t)*.08,.025,.025,.02,8);n.add(qn(8),15227498,-.05,.38,-.2,.08,.015,.08);for(let t of[-.03,.03])me(n,12092234,[[.3,.42,t],[.75,.75,t*2]],.016,.012,{radial:5,segs:2})},jar:n=>{Un(n,14216944,[[0,0],[.3,0],[.36,.06],[.38,.3],[.36,.6],[.3,.68],[.24,.7],[.24,.76],[0,.76]],0,0,0,1,24);for(let t=0;t<14;t++){let e=t*fn,i=.22*Math.sqrt(t/14);as(n,t%3?10145866:12116064,Math.cos(e)*i,.06+t%4*.14,Math.sin(e)*i,.09)}ze(n,15223354,0,.74,0,.3,.3,.06,20),Ft(n,15223354,0,.8,0,.32,.05,.32,0,0,0,16),me(n,16765498,Array.from({length:21},(t,e)=>{let i=e/20*Ce;return[Math.cos(i)*.27,.74,Math.sin(i)*.27]}),.018,.018,{radial:4,segs:30}),as(n,10145866,.45,0,.25,.1),as(n,12116064,.5,0,.02,.09),ue(n,5221956,.45,.18,.25,.3,.14,.6,.2)},trout:n=>{Un(n,13161692,[[0,-.5],[.09,-.42],[.17,-.2],[.2,0],[.17,.22],[.1,.42],[0,.5]],0,0,0,1,22);let t=n.l[n.l.length-1];t.scale(1,1,.65),t.rotateZ(Math.PI/2),t.translate(0,.32,0),n.add(qn(10),16747162,0,.32,.1,.42,.05,.02);for(let e=0;e<20;e++){let i=-.4+e*.37%1*.75,s=.32+e*.61%1*.22-.05;ti(n,3815994,i,s+.02,.12*Math.cos(i*2),.018)}Ft(n,16777215,.36,.38,.1,.045),Ft(n,1710618,.37,.38,.13,.024),Ft(n,15245472,.47,.3,0,.04,.02,.06),Qs(n,11056316,-.62,.32,0,.16,.22,4,0,0,Math.PI/2),Ft(n,11056316,-.62,.32,0,.04,.18,.03),Qs(n,11056316,0,.48,0,.12,.14,4,0,0,-.3),Qs(n,11056316,.15,.18,.06,.06,.1,4,0,0,2.6);for(let e=0;e<6;e++)Ft(n,9097456,-.3+e*.14,.02,.4*Math.sin(e),.12,.02,.12,0,0,0,10)},pumpkin:n=>{for(let t=0;t<9;t++){let e=t/9*Ce;Ft(n,t%2?14964266:14174752,Math.cos(e)*.22,.34,Math.sin(e)*.22,.22,.32,.22,0,-e,0,16)}Ft(n,14964266,0,.34,0,.3,.33,.3),me(n,7047722,[[0,.62,0],[.03,.78,0],[.12,.86,.02]],.05,.035,{radial:8,segs:6}),ue(n,5814344,.04,.66,0,.4,.36,1.2,.15),me(n,8042560,Array.from({length:12},(t,e)=>{let i=e/11;return[-.05-i*.3,.66+Math.sin(i*10)*.04,-.05+Math.cos(i*10)*.04]}),.01,.006,{radial:3,segs:16})},aiyu:n=>{xl(n,16777215,-.15,0,0,.4,5939424);for(let t=0;t<9;t++){let e=t*fn,i=.24*Math.sqrt(t/9);n.add(cs("cube",()=>new sn(1,1,1)),16180362,-.15+Math.cos(e)*i,.2+t%2*.04,Math.sin(e)*i,.11,.09,.11,0,e,0)}ei(n,16183520,15259786,-0,.22,0,.08,{sy:.3}),ze(n,16775328,.05,.25,-.05,.09,.09,.015,18),Ft(n,10135632,.45,.32,.15,.17,.3,.17,0,0,.2,16),ei(n,10135632,15259816,.42,0,-.25,.14,{sy:1,seeds:11569722,nSeeds:26})},camellia:(n,t)=>{let e=t.col||16777215;if(e===16747192){os(n,[[-.4,.1,0],[0,.35,0],[.3,.5,0]],.03);for(let s=0;s<6;s++)ue(n,3112762,-.2+s*.1,.25+s*.05,0,.32,.16,(s%2?1:-1)*1.3+.6,.2);for(let s=0;s<2;s++)for(let r=0;r<6;r++){let a=r/6*Ce+s*.5;ue(n,s?Nn(e,.3):e,0,.55,0,.32-s*.1,.26-s*.06,a,.35+s*.4)}for(let s=0;s<14;s++){let r=s*fn;me(n,16769136,[[0,.55,0],[Math.cos(r)*.08,.7,Math.sin(r)*.08]],.008,.006,{radial:3,segs:2}),ti(n,16756768,Math.cos(r)*.08,.7,Math.sin(r)*.08,.02)}}else{for(let s=0;s<3;s++){let r=-.3+s*.22,a=s%2*.15;Ft(n,9067058,r,.16,a,.16,.15,.16,0,0,0,14);for(let o=0;o<3;o++)n.add(qn(4),5913114,r,.16,a,.165,.008,.02,0,o*1.05,0)}Un(n,16773296,[[0,0],[.14,0],[.15,.35],[.08,.45],[.06,.6],[0,.6]],.4,0,.1,1,18),ze(n,15253568,.4,.06,.1,.145,.145,.25,18),ze(n,8015660,.4,.58,.1,.07,.07,.08,12),ue(n,3112762,-.1,.25,-.15,.36,.16,-.6,.2)}},trellis:(n,t)=>{if(t.sv==="passion")Ft(n,6957706,-.2,.3,0,.3,.3,.3,0,0,0,18),Zr(n,9063082,-.2,.3,0,.3,10,.03),Ft(n,4885034,-.2,.62,0,.05,.04,.05),ei(n,6957706,16765498,.3,0,.15,.25,{sy:.9,seeds:2759178,nSeeds:24,rind:16777215}),ue(n,5220412,-.2,.62,0,.4,.3,1,.2);else if(t.sv==="luffa"){for(let e=0;e<2;e++){let i=(e-.5)*.4;me(n,e?6991936:8044618,[[-.55,.12,i],[-.2,.15,i],[.2,.16,i],[.5,.18,i]],.09,.15,{radial:14,segs:16});for(let s=0;s<8;s++){let r=s/8*Ce;me(n,5214256,[[-.55,.12+Math.sin(r)*.09,i+Math.cos(r)*.09],[.5,.18+Math.sin(r)*.15,i+Math.cos(r)*.15]],.01,.012,{radial:3,segs:4})}}Ft(n,16765498,-.6,.3,0,.08,.03,.08);for(let e=0;e<5;e++)ue(n,16765498,-.6,.3,0,.12,.08,e/5*Ce,.2)}else{for(let e=0;e<9;e++){let i=e/9*Ce;me(n,9096272,[[Math.cos(i)*.05,0,Math.sin(i)*.05],[Math.cos(i)*.12,.45,Math.sin(i)*.12],[Math.cos(i)*.2,.75,Math.sin(i)*.2]],.022,.018,{radial:4,segs:6}),ue(n,6995780,Math.cos(i)*.15,.55,Math.sin(i)*.15,.22,.12,i,.4),me(n,11066474,Array.from({length:10},(s,r)=>{let a=r/9;return[Math.cos(i)*(.2+a*.12),.75+a*.25,Math.sin(i)*(.2+a*.12)+Math.sin(a*12)*.04]}),.008,.005,{radial:3,segs:12})}ze(n,15223354,0,.2,0,.12,.12,.06,14)}}};function ef(n,t){let e=S1[t.kind];e&&e(n,t)}var ni=Math.PI*2,On=2.399,Ee=(n,t)=>Array.from({length:n},(e,i)=>{let s=t*Math.sqrt((i+.5)/n),r=i*On;return[Math.cos(r)*s,Math.sin(r)*s]}),nf=(n,t=.12)=>(n()-.5)*t*2;var nr=5220412,So=8835162;var Ml=10119742,Eo=8015660;var E1=16774102;function rf(n,t,e,i,s,r,a="sphere"){let o={sphere:[1,1,1],flat:[1.1,.8,1.1],ovoid:[.8,1.2,.8],pear:[.8,1,.8]}[a]||[1,1,1];n.sph(t,e,i,s,r,o[0],o[1],o[2]),a==="pear"&&n.sph(t,e,i+r*.9,s,r*.62),n.cyl(7031338,e,i+r*o[1]*(a==="pear"?1.45:.85),s,.025,.02,r*.35,5)}function w1(n,t,e,i,s,r){let{leaf:a=So,fruit:o,fr:c=.15,shape:l="sphere",n:h=8,h:u=.95,cr:f=.62}=r;for(let[d,g]of Ee(4,1.05)){let x=e+d+nf(s,.1),m=i+g+nf(s,.1),p=t(x,m);n.cyl(Eo,x,p,m,.1,.07,u,6),n.sph(a,x,p+u+f*.45,m,f,1,.88,1,8),n.sph(a,x+.22,p+u+f*.2,m+.1,f*.65,1,.9,1,7);for(let T=0;T<h;T++){let y=T*On+s(),R=.25+s()*.9;rf(n,o,x+Math.cos(y)*f*.95*Math.cos(R),p+u+f*.45+Math.sin(R)*f*.7,m+Math.sin(y)*f*.95*Math.cos(R),c,l)}}}function tr(n,t,e,i,s,r,a,o,c=.35){for(let l=0;l<s;l++){let h=l/s*ni+o();n.cone(a,t+Math.cos(h)*.04,e,i+Math.sin(h)*.04,.07,r*(.8+o()*.4),4,Math.sin(h)*c,0,-Math.cos(h)*c)}}function ls(n,t,e,i,s){n.cyl(Ml,t,e,i,.06,.06,s,5)}function vl(n,t,e,i,s,r){let{pod:a,colA:o,colB:c,leaf:l=nr,round:h=!1}=r;for(let u of[-1,1]){let f=e-.9,d=e+.9,g=i+u*.55,x=t(e,g);ls(n,f,t(f,g),g,1.3),ls(n,d,t(d,g),g,1.3),n.boxc(Ml,e,x+1.28,g,1.9,.07,.07),n.boxc(l,e,x+1.2,g,1.8,.3,.34);for(let m=0;m<7;m++){let p=e-.75+m*.25,T=x+.95-s()*.2;h?n.sph(m%2?o:c,p,T,g,.11):n.cyl(m%2?o:c,p,T-.45,g,.06,.05,.6,5)}}}function T1(n,t,e,i,s,r,a){let{bush:o=nr,fruit:c,fr:l=.1,h=.9}=a;for(let[u,f]of Ee(s,1.1)){let d=e+u,g=i+f,x=t(d,g);ls(n,d,x,g,h*1.1),n.sph(o,d,x+h*.55,g,.3,1,1.15,1,7);for(let m=0;m<4;m++)n.sph(c,d+Math.cos(m*1.9)*.28,x+h*.4+m*.1,g+Math.sin(m*1.9)*.28,l)}}function sf(n,t,e,i,s=1){for(let r=0;r<6;r++){let a=r*1.05;n.cyl(16767293,t+Math.cos(a)*.08*s,e,i+Math.sin(a)*.08*s,.06*s,.04*s,.5*s,6,Math.sin(a)*.35,-Math.cos(a)*.35)}n.cyl(8030762,t,e+.45*s,i,.03*s,.03*s,.25*s,5)}var er=(n,t,e,i,s,r,a=6,o=.04)=>{for(let c=0;c<a;c++){let l=c*On,h=c%3*.5-.3;n.sph(t,e+Math.cos(l)*r*Math.cos(h),i+Math.sin(h)*r,s+Math.sin(l)*r*Math.cos(h),o)}},bl={tree:{patch:(n,t,e,i,s,r)=>w1(n,t,e,i,s,r),sample:(n,t)=>{rf(n,t.fruit,0,.42,0,.4,t.shape),n.sph(So,.12,.9,0,.14,1.6,.4,.8)}},papaya:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(3,.9)){let o=e+r,c=i+a,l=t(o,c);n.cyl(12098154,o,l,c,.1,.07,1.5,6);for(let h=0;h<6;h++){let u=h*1.05;n.cone(5814344,o+Math.cos(u)*.1,l+1.5,c+Math.sin(u)*.1,.22,.75,5,Math.sin(u)*1.1,0,-Math.cos(u)*1.1)}for(let h=0;h<4;h++)n.sph(16751150,o+Math.cos(h*1.6)*.14,l+1.38-h*.04,c+Math.sin(h*1.6)*.14,.13,.8,1.25,.8)}},sample:n=>{n.sph(16751150,0,.5,0,.36,.78,1.3,.78),n.sph(14698524,0,.66,0,.14,.6,.9,.6),n.sph(5814344,0,1.02,0,.1)}},banana:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(3,.95)){let o=e+r,c=i+a,l=t(o,c);n.cyl(9685338,o,l,c,.16,.11,1.1,7);for(let h=0;h<6;h++){let u=h*1.05+s();n.sph(6471493,o+Math.cos(u)*.62,l+1.1,c+Math.sin(u)*.62,.5,1.1,.1,.42,6)}sf(n,o+.18,l+.62,c,.9)}},sample:n=>{sf(n,0,.2,0,1.5)}},pineapple:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(9,1.35)){let o=e+r,c=i+a,l=t(o,c);for(let h=0;h<7;h++){let u=h/7*ni;n.cone(6141516,o+Math.cos(u)*.05,l,c+Math.sin(u)*.05,.06,.5,4,Math.sin(u)*.9,0,-Math.cos(u)*.9)}r*a>-.2&&n.sph(16761395,o,l+.2,c,.15,1,1.25,1)}},sample:n=>{n.sph(16760622,0,.46,0,.34,1,1.3,1);for(let t=0;t<9;t++){let e=t/9*ni;n.cone(5221956,Math.cos(e)*.05,.82,Math.sin(e)*.05,.08,.55,4,Math.sin(e)*.5,0,-Math.cos(e)*.5)}n.cone(5221956,0,.82,0,.07,.62,4),er(n,13208092,0,.46,0,.36,10,.04)}},grape:{patch:(n,t,e,i,s)=>vl(n,t,e,i,s,{round:!0,colA:8011696,colB:5909130,leaf:5220412}),sample:n=>{for(let t=0;t<5;t++)for(let e=0;e<5-t;e++)n.sph(t%2?6960288:8668352,(e-(4-t)/2)*.19,.9-t*.17,0,.11);n.cyl(7031338,0,.94,0,.03,.03,.15,5),n.sph(5220412,.12,1.05,0,.12,1.5,.3,1)}},dragon:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(4,1)){let o=e+r,c=i+a,l=t(o,c);ls(n,o,l,c,.9);for(let h=0;h<5;h++){let u=h*1.3;n.cyl(6928458,o+Math.cos(u)*.25,l+.8,c+Math.sin(u)*.25,.07,.06,.45,5,Math.sin(u)*.8,-Math.cos(u)*.8)}n.sph(16727435,o+.25,l+.75,c,.11,1,1.2,1),n.sph(16727435,o-.2,l+.68,c+.12,.1,1,1.2,1)}},sample:n=>{n.sph(16727435,0,.46,0,.34,1,1.25,1);for(let t=0;t<10;t++){let e=t*On,i=t%4*.45-.5;n.cone(5816906,Math.cos(e)*.3*Math.cos(i),.46+Math.sin(i)*.4,Math.sin(e)*.3*Math.cos(i),.05,.22,4,0,0,0)}n.sph(16727435,0,.9,0,.1)}},strawberry:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(8,1.3)){let o=e+r,c=i+a,l=t(o,c);n.sph(nr,o,l+.1,c,.26,1,.55,1,7);for(let h=0;h<3;h++)n.cone(16726602,o+Math.cos(h*2.1)*.2,l+.12,c+Math.sin(h*2.1)*.2,.07,.16,6,3.14)}},sample:n=>{n.cone(16726602,0,.1,0,.34,.7,10,Math.PI),n.sph(16726602,0,.62,0,.34,1,.7,1),er(n,16769162,0,.5,0,.33,12,.025);for(let t=0;t<6;t++){let e=t/6*ni;n.cone(5221956,Math.cos(e)*.1,.9,Math.sin(e)*.1,.07,.25,4,Math.sin(e)*1.2,0,-Math.cos(e)*1.2)}}},cabbage:{patch:(n,t,e,i,s,r)=>{for(let[a,o]of Ee(7,1.3)){let c=e+a,l=i+o,h=t(c,l);n.sph(r.col||8377434,c,h+.2,l,.3,1,.85,1),n.sph(13167770,c,h+.28,l,.2,1,.85,1)}},sample:(n,t)=>{n.sph(t.col||8377434,0,.42,0,.44,1,.9,1),n.sph(13167770,0,.52,0,.3,1,.9,1);for(let e=0;e<6;e++){let i=e/6*ni;n.sph(6078280,Math.cos(i)*.34,.34,Math.sin(i)*.34,.2,.35,1,1)}}},leafy:{patch:(n,t,e,i,s,r)=>{for(let[a,o]of Ee(9,1.35)){let c=e+a,l=i+o;tr(n,c,t(c,l),l,6,.55,r.col||So,s)}},sample:(n,t)=>{for(let e=0;e<9;e++){let i=e/9*ni;n.cyl(t.col||So,Math.cos(i)*.06,0,Math.sin(i)*.06,.07,.05,.9,5,Math.sin(i)*.25,-Math.cos(i)*.25)}n.cyl(15266504,0,0,0,.1,.1,.25,6)}},jiaobai:{patch:(n,t,e,i,s)=>{n.cyl(7325672,e,t(e,i)+.02,i,1.55,1.55,.06,16);for(let[r,a]of Ee(8,1.2)){let o=e+r,c=i+a,l=t(o,c);tr(n,o,l,c,5,1,6078280,s,.3),n.cyl(15332038,o,l,c,.06,.07,.3,5)}},sample:n=>{for(let t=0;t<3;t++)n.cyl(15266244,(t-1)*.14,0,0,.12,.08,.62,6),n.cone(12049787,(t-1)*.14,.6,0,.1,.38,6);n.sph(6078280,0,.95,0,.2,1.6,.35,.6)}},bamboo:{patch:(n,t,e,i,s,r)=>{for(let[a,o]of Ee(5,1)){let c=e+a,l=i+o,h=t(c,l),u=1.9+s()*.7;n.cyl(8376154,c,h,l,.08,.06,u,6);for(let f=1;f<5;f++)n.cyl(13100682,c,h+f*u/5,l,.095,.095,.05,6);n.sph(6078280,c,h+u,l,.4,1,.55,1,6),n.sph(7327568,c+.1,h+u*.8,l,.3,1,.5,1,6)}for(let[a,o]of Ee(3,.55)){let c=e+a+.2,l=i+o+.7,h=t(c,l);n.cone(r.col||14268794,c,h,l,.12,.4,6)}},sample:(n,t)=>{for(let e=0;e<5;e++){let i=1-e*.16;n.cone(e%2?13214824:t.col||14268794,0,e*.14,0,.34*i,.55*i+.15,8)}n.cone(15325600,0,.62,0,.12,.4,8)}},mush:{patch:(n,t,e,i,s)=>{for(let r=0;r<4;r++){let a=e+(r-1.5)*.5,o=i+(r%2?.3:-.3),c=t(a,o);n.cyl(8015660,a,c+.14,o,.14,.14,1.1,7,0,Math.PI/2);for(let l=0;l<3;l++){let h=a+(l-1)*.28,u=h;n.sph(11100207,u,c+.34,o+.2,.12,1,.6,1,7),n.sph(11100207,u+.1,c+.3,o-.2,.1,1,.6,1,7)}}},sample:n=>{n.cyl(E1,0,0,0,.14,.12,.5,8),n.sph(11821102,0,.55,0,.5,1,.55,1,10),er(n,15317386,0,.62,0,.44,8,.05)}},eggplant:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(6,1.3)){let o=e+r,c=i+a,l=t(o,c);n.sph(nr,o,l+.35,c,.3,1,1.1,1,7),n.sph(8007592,o+.18,l+.22,c+.1,.09,.8,1.9,.8),n.sph(8007592,o-.15,l+.28,c-.12,.08,.8,1.7,.8)}},sample:n=>{n.sph(8007592,0,.42,0,.28,.8,1.8,.8),n.cone(5221956,0,.9,0,.16,.12,6),n.cyl(5221956,0,.96,0,.04,.03,.18,5)}},tomato:{patch:(n,t,e,i,s)=>T1(n,t,e,i,5,s,{fruit:16730682,fr:.1}),sample:n=>{n.sph(16730682,0,.38,0,.38,1,.88,1);for(let t=0;t<5;t++){let e=t/5*ni;n.cone(5221956,Math.cos(e)*.1,.68,Math.sin(e)*.1,.06,.2,4,Math.sin(e)*1.2,0,-Math.cos(e)*1.2)}}},pepper:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(6,1.25)){let o=e+r,c=i+a,l=t(o,c);n.sph(nr,o,l+.3,c,.28,1,1,1,7),n.cone([16726843,16762926,16747038][(r*10|0)&1?0:(a*10|0)&1?1:2],o+.12,l+.2,c+.08,.08,.22,6,Math.PI)}},sample:n=>{n.sph(16726843,0,.4,0,.3,1,1.1,1),n.sph(16762926,.3,.3,.1,.22,1,1.1,1),n.cyl(5221956,0,.7,0,.04,.04,.14,5)}},radish:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(10,1.35)){let o=e+r,c=i+a,l=t(o,c);tr(n,o,l+.08,c,5,.45,6078280,s),n.sph(16645104,o,l+.04,c,.09,1,1.1,1)}},sample:n=>{n.cone(16645104,0,.08,0,.2,.9,9,Math.PI),n.sph(16645104,0,.7,0,.2,1,1.1,1);for(let t=0;t<6;t++){let e=t/6*ni;n.cone(6078280,Math.cos(e)*.08,.8,Math.sin(e)*.08,.1,.6,4,Math.sin(e)*.5,0,-Math.cos(e)*.5)}}},ginger:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(8,1.3)){let o=e+r,c=i+a;tr(n,o,t(o,c),c,5,.8,8179534,s,.2)}},sample:n=>{for(let[t,e,i,s]of[[0,.2,0,.22],[.25,.28,.05,.17],[-.24,.24,.04,.16],[.08,.38,-.18,.15],[-.1,.14,.2,.14]])n.sph(15120499,t,e,i,s,1.4,.8,1);n.sph(16177568,.28,.3,.05,.06)}},sweetpotato:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(7,1.3)){let o=e+r,c=i+a,l=t(o,c);n.sph(6989882,o,l+.12,c,.28,1,.5,1,7),n.sph(12730714,o+.18,l+.04,c+.12,.1,1.6,.7,.8)}},sample:n=>{for(let[t,e,i]of[[0,0,0],[.28,.1,.5],[-.25,.12,-.4]])n.sph(12730714,t,.2,e,.2,1.9,.8,.85,8,0)}},yam:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(4,1)){let o=e+r,c=i+a,l=t(o,c);ls(n,o,l,c,1.3);for(let h=0;h<6;h++)n.sph(5814344,o+Math.cos(h*1.7)*.18,l+.3+h*.17,c+Math.sin(h*1.7)*.18,.1,1.3,.3,1)}},sample:n=>{n.cyl(12159578,0,.02,0,.13,.09,1.1,7,0,.5),er(n,15324072,.1,.4,0,.1,3,.03)}},daylily:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(8,1.3)){let o=e+r,c=i+a,l=t(o,c);tr(n,o,l,c,5,.6,7324234,s),n.cone(16752155,o+.08,l+.62,c,.1,.28,6),n.cone(16757050,o-.08,l+.5,c+.05,.09,.24,6)}},sample:n=>{for(let t=0;t<4;t++){let e=t*1.6;n.cone(16752155,Math.cos(e)*.15,.35+t*.1,Math.sin(e)*.15,.14,.5,7,Math.sin(e)*.35,0,-Math.cos(e)*.35)}n.cyl(7324234,0,0,0,.04,.03,.4,5)}},sugarcane:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(9,1.3)){let o=e+r,c=i+a,l=t(o,c);n.cyl(9054802,o,l,c,.06,.05,1.7,6);for(let h=1;h<5;h++)n.cyl(14262456,o,l+h*.34,c,.075,.075,.03,6);tr(n,o,l+1.65,c,5,.55,7324234,s,.9)}},sample:n=>{for(let t=0;t<3;t++)n.cyl(t%2?9054802:6954564,0,t*.42,0,.11,.11,.4,8),n.cyl(14262456,0,t*.42+.4,0,.13,.13,.03,8)}},rice:{patch:(n,t,e,i,s,r)=>{let a=r.col||15911244;n.cyl(10146792,e,t(e,i)+.02,i,1.55,1.55,.05,16);for(let[o,c]of Ee(18,1.4)){let l=e+o,h=i+c,u=t(l,h);n.cyl(10142282,l,u,h,.025,.02,.55,4),n.sph(a,l+.06,u+.58,h,.06,1,2.2,1,5)}},sample:(n,t)=>{let e=t.col||15911244;for(let i=0;i<9;i++){let s=i/9*ni;n.cyl(12109914,Math.cos(s)*.12,0,Math.sin(s)*.12,.04,.03,.7,4,Math.sin(s)*.2,-Math.cos(s)*.2),n.sph(e,Math.cos(s)*.26,.76,Math.sin(s)*.26,.08,.9,2,.9,5)}n.cyl(12728890,0,.3,0,.2,.2,.07,8)}},tea:{patch:(n,t,e,i,s,r)=>{for(let a=-1;a<=1;a++)for(let o=0;o<5;o++){let c=e+(o-2)*.5,l=i+a*.62,h=t(c,l);n.sph(5220412,c,h+.2,l,.3,1,.7,1,7),n.sph(10214490,c,h+.38,l,.18,1,.4,1,6)}},sample:(n,t)=>{n.cyl(16777215,0,0,0,.95,.9,.07,14),n.cyl(16777215,0,.05,0,.38,.62,.46,14),n.cyl(t.liq||13148202,0,.49,0,.56,.56,.05,14),n.sph(16777215,.72,.3,0,.22,.4,1,.9);for(let e=0;e<3;e++)n.sph(5814344,-.2+e*.22,.12,.95,.2,1.2,.28,.9,6);n.sph(5814344,.5,.12,.9,.2,1.2,.28,.9,6)}},coffee:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(4,1.05)){let o=e+r,c=i+a,l=t(o,c);n.sph(4165434,o,l+.45,c,.42,1,1.1,1,8);for(let h=0;h<9;h++){let u=h*On;n.sph(15214650,o+Math.cos(u)*.38,l+.35+h%4*.12,c+Math.sin(u)*.38,.07)}}},sample:n=>{n.sph(15214650,-.2,.2,0,.2),n.sph(15214650,.15,.18,.1,.18),n.sph(5911576,0,.1,.3,.15,.8,.6,1.2),n.sph(5911576,.3,.1,.28,.15,.8,.6,1.2),n.sph(5911576,-.3,.1,.28,.15,.8,.6,1.2),n.cone(5221956,0,.35,0,.06,.2,4,.5)}},honey:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(4,1)){let o=e+r,c=i+a,l=t(o,c);n.cyl(Eo,o-.15,l,c,.08,.08,.25,5),n.box([16765498,16751296,8049136,16765498][(r>0?1:0)+(a>0?2:0)],o,l+.2,c,.6,.28,.5),n.box(16773576,o,l+.48,c,.66,.1,.55)}for(let r=0;r<6;r++){let a=e+Math.cos(r*On)*1.4,o=i+Math.sin(r*On)*1.4;n.sph([16743088,16765498,16777215][r%3],a,t(a,o)+.18,o,.09)}},sample:(n,t)=>{n.cyl(t.col||15245344,0,0,0,.34,.34,.62,10),n.cyl(12614168,0,.6,0,.3,.3,.06,10),n.cyl(8015660,0,.64,0,.05,.05,.35,5,0,.5),n.sph(15245344,0,.3,.36,.1,1,1.4,.3)}},mochi:{patch:(n,t,e,i,s)=>{let r=t(e,i);n.cyl(Ml,e,r,i,.7,.7,.5,10),n.cyl(Eo,e,r+.5,i,.9,.9,.06,12);for(let[a,o]of Ee(3,.45))n.cyl(16777215,e+a,r+.56,i+o,.25,.25,.05,10),n.sph([16777215,16758728,13625512][(a>0?1:0)+(o>0?1:0)>1?2:a>0?1:0],e+a,r+.66,i+o,.17,1,.7,1);for(let[a,o]of Ee(4,1.35))n.cyl(6974058,e+a,t(e+a,i+o),i+o,.18,.22,.28,7)},sample:n=>{n.cyl(16777215,0,0,0,.55,.45,.08,12);for(let[t,e,i]of[[-.2,0,16777215],[.2,.1,16758728],[0,-.22,13625512]])n.sph(i,t,.2,e,.2,1,.75,1,8);er(n,14203e3,-.2,.25,0,.14,5,.03)}},noodle:{patch:(n,t,e,i,s)=>{for(let r=-1;r<=1;r+=2){let a=e-.8,o=e+.8,c=i+r*.5;ls(n,a,t(a,c),c,1.2),ls(n,o,t(o,c),c,1.2),n.boxc(Eo,e,t(e,c)+1.18,c,1.7,.06,.06);for(let l=0;l<9;l++)n.cyl(16768890,e-.7+l*.18,t(e,c)+.35,c,.025,.025,.85,4)}},sample:n=>{n.cyl(16777215,0,0,0,.22,.5,.34,12),n.cyl(16767082,0,.3,0,.46,.46,.06,12);for(let t=0;t<7;t++)n.sph(16768890,Math.cos(t*On)*.22,.36,Math.sin(t*On)*.22,.14,1,.5,1,7);n.sph(16742970,.15,.42,.1,.1,1,.5,1),n.cyl(8015660,.28,.3,0,.02,.02,.7,4,0,.9),n.cyl(8015660,.34,.3,.1,.02,.02,.7,4,0,.9)}},jar:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(5,1.2)){let o=e+r,c=i+a,l=t(o,c);n.sph(13148272,o,l+.3,c,.36,1,1.05,1),n.cyl(10517064,o,l+.62,c,.2,.2,.1,8),n.cyl(10111530,o,l+.7,c,.22,.22,.05,8)}},sample:n=>{n.sph(13148272,0,.45,0,.46,1,1.1,1),n.cyl(10517064,0,.95,0,.26,.26,.1,8),n.cyl(10111530,0,1.04,0,.28,.28,.06,8);for(let t=0;t<5;t++)n.sph(10474586,Math.cos(t*On)*.34,.4+t%3*.12,Math.sin(t*On)*.34+.1,.1)}},trout:{patch:(n,t,e,i,s)=>{let r=t(e,i);n.cyl(7130608,e,r+.03,i,1.5,1.5,.1,16);for(let a=0;a<3;a++){let o=a*2.2,c=e+Math.cos(o)*.6,l=i+Math.sin(o)*.6;n.sph(15245408,c,r+.16,l,.2,1.7,.5,.6,7,0),n.cone(15245408,c-Math.cos(o)*0,r+.16,l,.1,.2,4)}for(let[a,o]of Ee(5,1.7))n.sph(10132106,e+a*.9,r+.08,i+o*.9,.2,1,.6,1,6)},sample:n=>{n.sph(15247520,0,.3,0,.42,1.9,.8,.62,10),n.cone(14191200,-.82,.3,0,.2,.35,4,0,0,Math.PI/2),n.sph(2763306,.5,.38,.2,.05),er(n,5913130,0,.42,.2,.5,6,.04),n.cone(14191200,0,.62,0,.12,.25,4)}},pumpkin:{patch:(n,t,e,i,s)=>{for(let[r,a]of Ee(6,1.3)){let o=e+r,c=i+a,l=t(o,c);n.sph(14964266,o,l+.2,c,.27,1.2,.85,1.2,8),n.sph(nr,o+.3,l+.1,c,.2,1,.25,1.2,6)}},sample:n=>{n.sph(14964266,0,.36,0,.46,1.2,.88,1.2,10),n.sph(13650464,0,.36,0,.46,.3,.88,1.2,10),n.cyl(7047722,0,.72,0,.06,.05,.2,5)}},aiyu:{patch:(n,t,e,i,s)=>vl(n,t,e,i,s,{round:!0,colA:12114026,colB:14209136,leaf:5220412}),sample:n=>{n.sph(13163626,0,.4,0,.34,.8,1.35,.8),n.sph(14735488,0,.4,0,.24,.8,1.25,.8),n.cone(5221956,0,.9,0,.1,.18,5)}},camellia:{patch:(n,t,e,i,s,r)=>{for(let[a,o]of Ee(4,1)){let c=e+a,l=i+o,h=t(c,l);n.sph(3112762,c,h+.4,l,.42,1,.9,1,8);for(let u=0;u<5;u++){let f=u*On;n.sph(r.col||16777215,c+Math.cos(f)*.34,h+.45+u%3*.1,l+Math.sin(f)*.34,.1,1,.5,1)}}},sample:(n,t)=>{for(let e=0;e<6;e++){let i=e/6*ni;n.sph(t.col||16777215,Math.cos(i)*.22,.35,Math.sin(i)*.22,.2,1,.45,1)}n.sph(16765498,0,.4,0,.1),n.sph(6965802,.5,.12,.1,.12)}},leafy2:null},jt=(n,t={})=>({kind:n,...t}),an=(n,t={})=>jt("tree",{fruit:n,...t}),yl={\u9999\u83C7:jt("mush"),\u6C34\u871C\u6843:an(16756924,{sv:"peach"}),\u6EAB\u5E36\u68A8:an(14213232,{shape:"pear",sv:"pear"}),\u860B\u679C:an(15218223,{sv:"apple"}),\u9752\u6885:an(10145866,{fr:.1,n:12,sv:"plum"}),\u9AD8\u5C71\u8336:jt("tea",{liq:14211184}),\u9999\u7CEF\u7C73:jt("rice",{col:16180904}),"\u9AD8\u9E97\u83DC\uFF08\u7518\u85CD\uFF09":jt("cabbage"),\u570B\u59D3\u5496\u5561:jt("coffee"),\u8349\u8393:jt("strawberry"),\u6787\u6777:an(16167482,{shape:"ovoid",fr:.13,sv:"loquat"}),\u9999\u8549:jt("banana"),\u5317\u5C71\u8336:jt("tea",{liq:13681760}),\u7802\u7CD6\u6A58:an(16753183,{fr:.12,n:12,sv:"mandarin"}),"\u756A\u77F3\u69B4\uFF08\u82AD\u6A02\uFF09":an(11853936,{fr:.16,sv:"guava"}),\u624B\u5DE5\u9EBB\u7CEC:jt("mochi"),\u7A3B\u7C73:jt("rice"),\u7D05\u858F\u4EC1:jt("rice",{col:12866874}),\u8354\u679D:an(14692426,{fr:.11,n:12,sv:"lychee"}),\u5DE8\u5CF0\u8461\u8404:jt("grape"),\u6817\u5B50\u5357\u74DC:jt("pumpkin"),\u5C71\u85E5:jt("yam"),\u5357\u6295\u610F\u9EB5:jt("noodle"),\u9752\u5C71\u8336:jt("tea",{liq:14074698}),\u751F\u8591:jt("ginger"),\u9CF3\u68A8:jt("pineapple"),\u9F8D\u773C:an(13148250,{fr:.11,n:14,sv:"longan"}),\u9F8D\u773C\u8702\u871C:jt("honey",{col:12085778}),"\u67F3\u6A59\uFF08\u67F3\u4E01\uFF09":an(16751135,{fr:.16,sv:"orange"}),\u67F3\u6A59:an(16751135,{fr:.16,sv:"orange"}),\u6587\u65E6\u67DA:an(14213232,{fr:.24,n:5,sv:"pomelo"}),\u7AF9\u7B4D:jt("bamboo"),\u4E8C\u5C16\u8336:jt("tea",{liq:13152330}),\u832D\u767D\u7B4D:jt("jiaobai"),\u767E\u9999\u679C:jt("trellis",{round:!0,colA:8011696,colB:10112960,sv:"passion"}),\u7D05\u7518\u8517:jt("sugarcane"),\u590F\u5B63\u863F\u8514:jt("radish"),\u6728\u74DC:jt("papaya"),\u7D72\u74DC:jt("trellis",{colA:8044618,colB:6074432,sv:"luffa"}),\u65E5\u6708\u6F6D\u7D05\u8336:jt("tea",{liq:11548190}),\u91D1\u91DD\u83DC:jt("daylily"),\u8304\u5B50:jt("eggplant"),\u692A\u67D1:an(16756266,{fr:.15,sv:"mandarin"}),\u5496\u5561:jt("coffee"),\u677E\u67CF\u9577\u9752\u8336:jt("tea",{liq:13677628}),\u6FC1\u6C34\u7C73:jt("rice",{col:16044144}),"\u6C34\u8579\u83DC\uFF08\u7A7A\u5FC3\u83DC\uFF09":jt("leafy",{col:5816906}),"\u7D05\u9F8D\u679C\uFF08\u706B\u9F8D\u679C\uFF09":jt("dragon"),\u5C71\u8549:jt("banana"),\u7CEF\u7C73\u8354\u679D:an(14692426,{fr:.11,n:12,sv:"lychee"}),"\u7A3B\u7C73\uFF08\u65E5\u66EC\u7C73\uFF09":jt("rice",{col:15382592}),"\u8106\u6885\uFF08\u9752\u6885\u52A0\u5DE5\uFF09":jt("jar"),\u7389\u5C71\u8336\u5340\u8336\u8449:jt("tea",{liq:13621360}),\u751C\u67FF:an(16742954,{shape:"flat",fr:.17,sv:"persimmon"}),\u51CD\u9802\u70CF\u9F8D\u8336:jt("tea",{liq:13141802}),\u5B5F\u5B97\u7AF9\u7B4D:jt("bamboo",{col:13214824}),\u6842\u7AF9\u7B4D:jt("bamboo",{col:12107888}),\u9EBB\u7AF9\u7B4D:jt("bamboo",{col:14733456}),\u5C71\u82B9\u83DC:jt("leafy",{col:10146906}),\u745E\u7530\u7C73:jt("rice",{col:16178298}),\u9C52\u9B5A:jt("trout"),\u8336\u6885:jt("camellia",{col:16747192}),"\u7D05\u756A\u85AF\uFF08\u5730\u74DC\uFF09":jt("sweetpotato"),"\u5B5F\u5B97\u7AF9\u7B4D\uFF08\u51AC\u7B4D\uFF09":jt("bamboo",{col:13214824}),\u7AF9\u5C71\u8336\u8449:jt("tea",{liq:13942864}),\u8302\u8C37\u67D1:an(16749360,{fr:.15,sv:"orange"}),\u7834\u5E03\u5B50:an(13150288,{fr:.08,n:16,sv:"cordia"}),\u7389\u5C71\u9AD8\u5C71\u8336:jt("tea",{liq:13687928}),\u611B\u7389\u5B50:jt("aiyu"),"\u6CB9\u8336\uFF08\u82E6\u8336\u6CB9\u539F\u6599\uFF09":jt("camellia",{col:16773328}),\u751C\u6912:jt("pepper"),\u756A\u8304:jt("tomato"),\u9F8D\u9B1A\u83DC:jt("trellis",{colA:10146906,colB:8044618,round:!1})};bl.trellis={patch:(n,t,e,i,s,r)=>vl(n,t,e,i,s,r),sample:(n,t)=>{if(t.round){for(let e=0;e<3;e++)n.sph(e%2?t.colA:t.colB,(e-1)*.3,.3,0,.22);n.cone(5221956,0,.55,0,.1,.12,5)}else n.cyl(t.colA,0,0,0,.12,.08,1,7,0,.4),n.cyl(t.colB,.1,0,0,.1,.07,.9,7,0,-.3)}};function Sl(n){let t=yl[n];if(!t){let e=Object.keys(yl).find(i=>n.includes(i.replace(/[（(].*/,"")));return e?yl[e]:{kind:"cabbage"}}return t}function El(n,t,e,i,s,r){let a=Sl(r);bl[a.kind].patch(n,t,e,i,s,a)}function af(n,t){ef(n,Sl(t))}function of(n,t){let e=Sl(t);bl[e.kind].sample(n,e)}function ir(n){let t=n|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function wo(n,t,e){let i=Math.imul(n,374761393)^Math.imul(t,668265263)^Math.imul(e,1442695041);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function A1(n,t,e=0){let i=Math.floor(n),s=Math.floor(t),r=n-i,a=t-s,o=r*r*(3-2*r),c=a*a*(3-2*a),l=wo(i,s,e),h=wo(i+1,s,e),u=wo(i,s+1,e),f=wo(i+1,s+1,e);return l+(h-l)*o+(u-l)*c+(l-h-u+f)*o*c}function sr(n,t,e=4,i=0){let s=.5,r=1,a=0,o=0;for(let c=0;c<e;c++)a+=s*A1(n*r,t*r,i+c*7),o+=s,s*=.5,r*=2.03;return a/o}var wl=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),Be=(n,t,e)=>{let i=wl((e-n)/(t-n));return i*i*(3-2*i)},cf=(n,t,e)=>n+(t-n)*e;var lf={\u5357\u6295\u5E02:{area:71.7,cx:-16.528,cy:-5.791,rad:[3.898,3.942,4.074,4.117,4.167,4.084,4.122,4.181,6.095,6.671,4.836,4.554,4.417,4.437,4.437,4.465,4.506,4.587,4.493,4.454,4.497,4.448,4.649,4.757,4.807,4.9,5.104,5.188,5.639,6.256,5.173,5.079,5.034,4.933,4.652,4.492,4.324,4.317,5.092,4.906,4.781,5.337,5.497,5.982,5.462,5.458,5.605,4.884,3.877,2.969,2.804,2.754,3.053,3.182,3.297,3.779,4.423,4.393,4.679,5.257,4.89,5.038,4.995,5.137,5.36,6.22,6.386,6.154,5.869,5.834,5.793,4.468]},\u57D4\u91CC\u93AE:{area:171.3,cx:12.361,cy:-12.12,rad:[10.565,9.863,9.666,9.404,9.395,9.324,4.604,6.401,6.573,7.733,7.611,8.085,6.893,6.818,6.913,8.982,7.294,6.809,5.403,5.608,5.304,5.428,5.409,5.887,7.066,7.205,7.544,8.31,8.465,10.326,9.781,9.432,8.985,8.207,7.77,5.757,5.749,5.77,6.044,6.161,6.013,6.575,8.67,8.413,8.394,8.741,8.898,8.586,8.815,8.647,7.708,8.491,7.918,7.343,6.771,6.007,5.817,6.113,5.877,5.628,5.522,5.595,5.878,6.116,5.595,5.155,5.184,5.557,7.275,10.058,10.17,10.724]},\u8349\u5C6F\u93AE:{area:103.8,cx:-11.102,cy:-12.598,rad:[10.513,10.335,9.277,7.592,7.243,6.386,5.474,3.572,3.427,3.327,3.265,3.321,3.461,3.472,3.274,3.618,3.899,3.839,3.521,3.298,3.14,3.622,3.611,3.635,3.658,3.818,3.624,3.781,3.951,3.828,8.068,8.164,8.575,8.933,8.81,8.668,8.355,8.996,9.904,9.91,8.085,6.63,6.411,4.559,3.843,3.491,3.371,3.284,3.225,3.191,3.091,2.993,2.914,2.861,2.815,2.692,2.583,2.501,2.443,2.404,2.371,2.261,2.198,2.978,6.309,6.463,7.214,7.667,8.067,8.033,9.068,10.14]},\u7AF9\u5C71\u93AE:{area:257.8,cx:-13.345,cy:18.936,rad:[2.432,2.57,2.921,3.129,4.114,6.098,11.082,12.992,14.982,15.009,14.643,13.146,10.969,10.186,10.065,10.145,8.567,7.615,8.743,8.958,8.751,9.817,10.344,10.68,10.732,10.219,9.803,11.468,10.707,9.323,8.249,7.373,6.914,6.518,6.653,6.532,6.714,6.607,7.234,7.346,7.462,7.874,7.828,7.228,7.405,7.959,8.93,11.867,11.641,11.425,11.627,11.841,11.843,12.416,13.847,14.672,14.811,14.611,14.346,6.89,4.816,4.422,4.058,3.636,3.195,2.957,2.966,2.971,2.743,2.58,2.237,2.258]},\u96C6\u96C6\u93AE:{area:39.6,cx:-5.691,cy:3.577,rad:[4.945,4.747,4.6,4.653,4.725,4.222,3.729,3.548,3.383,3.255,3.074,2.896,2.753,2.592,2.466,2.369,2.291,2.232,2.193,2.14,2.119,2.173,2.265,2.366,2.696,2.895,3.039,3.127,3.247,3.317,3.496,3.622,3.904,4.364,5.005,5.632,5.548,5.578,6.074,5.924,5.516,5.456,4.741,4.018,1.52,1.603,1.523,1.48,1.695,1.67,1.659,1.597,1.551,1.587,1.708,1.715,1.602,1.568,1.547,1.598,1.868,1.997,2.053,2.186,2.429,2.648,3.57,5.074,6.064,5.916,6.064,6.371]},\u540D\u9593\u9109:{area:79.1,cx:-16.67,cy:2.019,rad:[5.381,4.985,5.399,5.697,5.484,5.246,4.889,4.688,4.572,4.557,4.651,4.77,4.93,5.125,5.282,5.387,5.514,5.015,3.67,3.455,3.645,3.96,4.225,4.47,4.9,4.914,4.896,5.004,5.033,5.055,4.736,4.73,5.034,5.233,6.333,5.534,5.36,5.244,5.491,6.044,5.799,5.807,6.051,6.214,6.376,5.926,5.19,4.62,4.123,3.778,3.702,3.621,3.425,3.389,3.344,3.302,3.285,3.484,3.703,4.027,4.532,5.108,5.523,5.717,5.52,5.689,5.807,5.958,5.853,5.936,5.958,6.04]},\u9E7F\u8C37\u9109:{area:142.5,cx:-6.072,cy:14.547,rad:[4.975,4.782,4.86,5.006,5.236,5.831,6.283,6.269,6.223,6.525,6.717,6.733,6.9,7.162,7.981,9.813,9.846,9.18,9.136,8.785,7.441,7.078,6.923,6.781,6.727,6.649,6.704,6.544,6.548,5.611,5.537,5.345,5,4.886,4.839,4.718,5.115,5.128,4.547,4.308,4.448,6.476,7.866,7.634,7.179,7.151,6.695,6.655,6.65,6.659,6.956,8.181,8.751,8.811,8.885,8.75,8.749,8.917,9.103,7.3,6.554,5.994,5.485,5.22,5.499,5.406,5.784,5.752,5.706,5.256,5.031,4.984]},\u4E2D\u5BEE\u9109:{area:143.7,cx:-5.615,cy:-4.049,rad:[5.909,6.471,6.79,7.201,7.3,6.845,7.19,7.775,8.167,7.816,7.202,7.087,6.595,6.655,6.463,6.29,6.074,6.201,5.902,6.099,6.571,6.779,6.642,6.52,6.266,6.355,6.863,7.186,6.986,6.793,6.724,6.583,6.642,6.582,7.686,7.515,7.229,7.059,7.097,7.084,6.805,5.998,6.092,6.596,6.966,6.732,7.015,6.555,7.008,6.902,7.069,6.753,5.56,5.919,5.57,5.934,6.063,6.505,7.552,7.736,8.071,8.674,7.925,6.206,5.642,5.901,6.349,6.366,6.13,6.066,5.916,6.17]},\u9B5A\u6C60\u9109:{area:124.2,cx:8.609,cy:-.736,rad:[5.771,6.306,6.699,7.271,7.275,7.572,7.86,7.081,6.454,5.705,3.634,4.112,3.975,3.913,4.021,4.412,4.965,5.219,5.228,5.401,5.435,6.863,7.404,8.015,8.362,8.474,8.68,8.129,5.77,5.867,6.186,6.09,6.026,5.694,5.455,5.436,5.092,5.346,5.313,5.721,6.069,6.36,6.994,6.391,6.502,6.846,7.111,6.791,7.006,6.728,5.516,5.495,5.756,5.624,5.356,5.339,5.999,6.402,6.57,6.783,6.764,7.197,6.607,6.488,6.541,6.652,6.896,6.559,6.884,6.698,6.643,5.67]},\u570B\u59D3\u9109:{area:205.8,cx:2.685,cy:-17.9,rad:[3.539,3.295,3.199,3.057,2.841,2.644,2.553,4.281,5.344,5.527,5.776,6.857,7.688,7.406,7.294,7.469,8.447,12.39,13.599,15.253,13.245,11.038,11.081,9.699,6.858,6.103,5.743,5.911,6.177,6.218,6.604,6.511,6.984,7.21,8.748,8.632,7.723,7.557,7.328,7.104,6.937,7.07,7.113,6.866,6.406,6.182,6.097,6.915,7.977,8.811,9.673,10.211,10.434,9.405,9.413,9.046,7.911,9.7,9.884,9.651,9.744,10.896,13.656,11.883,10.237,9.266,8.394,9.003,8.245,7.6,3.744,3.512]},\u6C34\u91CC\u9109:{area:111.5,cx:2.149,cy:8.089,rad:[7.592,7.511,4.798,4.542,3.279,2.791,2.604,2.383,2.177,1.936,1.837,2.02,4.3,4.621,5.217,8.446,8.582,8.29,8.039,8.51,8.936,9.509,9.04,8.096,6.538,5.192,4.782,4.951,5.02,5.014,5.358,5.173,5.084,5.014,4.995,4.951,5.011,5.264,5.207,4.996,5.369,5.653,5.307,4.763,4.454,4.719,5.049,5.283,5.403,5.195,4.98,7.024,8.745,10.694,11.524,10.396,5.934,5.759,5.66,2.26,2.205,2.355,2.465,2.63,2.708,2.77,6.885,7.9,7.661,7.572,7.438,7.255]},\u4FE1\u7FA9\u9109:{area:1418.7,cx:18.345,cy:23.642,rad:[21.416,20.748,20.87,20.517,18.448,17.825,15.474,17.175,16.967,18.289,19.097,18.679,17.389,17.098,16.297,17.182,21.845,23.011,24.055,21.401,21.221,21.071,22.161,22.402,22.939,25.361,26.308,27.491,26.246,25.31,25.058,22.49,21.628,21.491,21.116,21.208,21.665,21.753,20.838,20.28,19.05,17.845,15.612,17.65,18.359,20.077,18.745,18.223,17.331,21.204,22.156,21.296,20.588,18.86,18.166,17.843,17.53,17.592,18.667,19.994,24.277,27.209,28.052,28.494,27.888,25.965,22.555,23.332,23.058,23.101,22.534,21.839]},\u4EC1\u611B\u9109:{area:1219.5,cx:30.879,cy:-17.61,rad:[13.741,13.354,12.952,12.675,12.525,14.633,15.372,16.109,17.176,18.831,19.154,21.078,21.53,22.926,24.703,20.295,19.535,18.433,20.034,21.113,23.486,24.57,25.702,25.92,26.574,26.049,24.066,23.407,20.962,17.509,16.653,9.196,9.39,11.985,14.524,14.198,16.482,18.845,20.708,21.382,21.741,21.615,19.629,18.707,18.617,19.17,18.716,17.687,17.139,17.226,17.433,18.732,18.935,18.59,19.758,20.926,20.699,22.127,23.36,23.593,26.426,28.034,29.275,29.145,18.363,19.326,19.889,20.43,19.217,16.87,14.296,14.434]}};function mf(n){let t=lf[n],e=t.rad.slice();for(let s=0;s<3;s++)e=e.map((r,a)=>(e[(a+71)%72]+2*r+e[(a+1)%72])/4);let i=Math.max(...e);return e=e.map(s=>Math.max(s,i*.55)),{...t,r:e,min:Math.min(...e),max:i}}function gf(n,t){let e=n.r;return i=>{let s=(i/(Math.PI*2)%1+1)%1*72,r=Math.floor(s),a=s-r;return t*(e[r%72]*(1-a)+e[(r+1)%72]*a)}}var Ge=Math.PI*2;var R1={S:7.4,M:8.8,L:10.8},Bi=[{town:"\u4EC1\u611B\u9109",mx:74,my:82,tier:"L",lift:9,arch:"peak",lm:"\u5408\u6B61\u5C71\u96EA\u9802\u30FB\u9999\u83C7\u5BEE",terrain:"\u9AD8\u5C71\u96EA\u5CF0",blurb:"\u7E23\u5167\u6700\u9AD8\u5BD2\u7684\u5C71\u5730\u9109\uFF0C\u5C71\u9802\u5E38\u6709\u96F2\u9727\uFF0C\u5C71\u8170\u7A2E\u860B\u679C\u3001\u6C34\u871C\u6843\u548C\u9AD8\u5C71\u8336\u3002"},{ld:[-16,-8],town:"\u570B\u59D3\u9109",mx:42,my:76,tier:"M",lift:3.5,arch:"hills",lm:"\u5496\u5561\u70D8\u8C46\u5DE5\u574A",terrain:"\u5496\u5561\u5C71\u5761\u4E18\u9675",blurb:"\u5C71\u591A\u5E73\u5730\u5C11\uFF0C\u5C71\u5761\u5496\u5561\u6A39\u7D50\u6EFF\u7D05\u679C\u5B50\uFF0C\u65C1\u908A\u5C31\u662F\u70D8\u8C46\u5DE5\u574A\u3002"},{ld:[-34,-6],town:"\u8349\u5C6F\u93AE",mx:24,my:64,tier:"S",lift:0,arch:"plain",lm:"\u5927\u77F3\u81FC\u8207\u9EBB\u7CEC",terrain:"\u5E73\u5766\u7A3B\u7530\u5E73\u539F",blurb:"\u5730\u52E2\u5E73\u5766\u3001\u7A3B\u7530\u5EE3\u95CA\uFF0C\u7CEF\u7C73\u548C\u77F3\u81FC\u8B93\u9019\u88E1\u6210\u70BA\u9EBB\u7CEC\u7684\u5BB6\u3002"},{ld:[-46,30],town:"\u5357\u6295\u5E02",mx:28,my:51,tier:"S",lift:1,arch:"plateau",lm:"\u610F\u9EB5\u8001\u5E97\u30FB\u516B\u5366\u5C71\u53F0\u5730",terrain:"\u53F0\u5730\u52A0\u8C93\u7F85\u6EAA",blurb:"\u8C93\u7F85\u6EAA\u6D41\u904E\u5E73\u539F\uFF0C\u53F0\u5730\u908A\u7684\u8001\u5E97\u7528\u7D30\u7D30\u7684\u610F\u9EB5\u62DB\u5F85\u5BA2\u4EBA\u3002"},{ld:[30,-4],town:"\u4E2D\u5BEE\u9109",mx:39,my:50,tier:"M",lift:3,arch:"basin",lm:"\u8702\u7BB1\u82B1\u7530\u30FB\u74B0\u5C71\u76C6\u5730",terrain:"\u56DB\u9762\u74B0\u5C71\u7684\u5761\u5730",blurb:"\u56DB\u9762\u74B0\u5C71\uFF0C\u5761\u5730\u958B\u6EFF\u82B1\uFF0C\u9F8D\u773C\u82B1\u871C\u8B93\u871C\u8702\u5FD9\u500B\u4E0D\u505C\u3002"},{ld:[-8,-6],town:"\u57D4\u91CC\u93AE",mx:55,my:66,tier:"M",lift:4,arch:"basin2",lm:"\u53F0\u7063\u5730\u7406\u4E2D\u5FC3\u7891\u30FB\u76C6\u5730",terrain:"\u5C71\u74B0\u6C34\u7530\u76C6\u5730",blurb:"\u56DB\u9762\u74B0\u5C71\u7684\u76C6\u5730\uFF0C\u6C34\u7530\u88E1\u9577\u51FA\u767D\u767D\u5AE9\u5AE9\u7684\u832D\u767D\u7B4D\uFF0C\u9084\u6709\u53F0\u7063\u7684\u5730\u7406\u4E2D\u5FC3\u7891\u3002"},{town:"\u9B5A\u6C60\u9109",mx:63,my:52,tier:"M",lift:5,arch:"lake",lm:"\u65E5\u6708\u6F6D\u30FB\u6148\u6069\u5854",terrain:"\u5C71\u4E2D\u6E56\u6CCA\u8207\u8336\u5712",blurb:"\u65E5\u6708\u6F6D\u5728\u9019\u88E1\uFF01\u6E56\u908A\u5C71\u5761\u662F\u4E00\u5C64\u5C64\u7684\u8336\u5712\uFF0C\u7D05\u8336\u9999\u98C4\u5F88\u9060\u3002"},{town:"\u540D\u9593\u9109",mx:20,my:36,tier:"S",lift:.5,arch:"tea",lm:"\u677E\u67CF\u5DBA\u8336\u5712\u6DBC\u4EAD",terrain:"\u53F0\u5730\u8336\u5712\u8207\u9CF3\u68A8\u7530",blurb:"\u967D\u5149\u5145\u8DB3\u7684\u53F0\u5730\uFF0C\u9CF3\u68A8\u4E00\u6392\u6392\uFF0C\u677E\u67CF\u5DBA\u7684\u8336\u5712\u4E5F\u5F88\u6709\u540D\u3002"},{town:"\u96C6\u96C6\u93AE",mx:41,my:31,tier:"S",lift:1.5,arch:"rail",lm:"\u96C6\u96C6\u706B\u8ECA\u7AD9",terrain:"\u6CB3\u8C37\u5E73\u5730\u8207\u9435\u9053",blurb:"\u5C0F\u706B\u8ECA\u6CBF\u8457\u9435\u9053\u6162\u6162\u958B\uFF0C\u6CBF\u9014\u90FD\u662F\u9999\u8549\u548C\u6C34\u679C\u3002"},{town:"\u6C34\u91CC\u9109",mx:57,my:33,tier:"M",lift:3,arch:"river",lm:"\u86C7\u7AAF\u30FB\u6FC1\u6C34\u6EAA",terrain:"\u6CB3\u8C37\u8207\u5C71\u5761\u6885\u5712",blurb:"\u6FC1\u6C34\u6EAA\u7A7F\u904E\u6CB3\u8C37\uFF0C\u86C7\u7AAF\u71D2\u51FA\u9676\u5668\uFF0C\u5C71\u5761\u4E0A\u7684\u9752\u6885\u505A\u6210\u8106\u6885\u3002"},{town:"\u9E7F\u8C37\u9109",mx:39,my:12,tier:"M",lift:5,arch:"terrace",lm:"\u51CD\u9802\u8336\u5712\u30FB\u5927\u8336\u58FA",terrain:"\u68AF\u7530\u8336\u5C71",blurb:"\u51CD\u9802\u70CF\u9F8D\u8336\u7684\u5BB6\uFF0C\u8336\u5712\u4E00\u5C64\u5C64\u722C\u4E0A\u5C71\u5761\uFF0C\u65C1\u908A\u9084\u6709\u7AF9\u6797\u548C\u9C52\u9B5A\u3002"},{town:"\u7AF9\u5C71\u93AE",mx:28,my:21,tier:"M",lift:1.5,arch:"redhill",lm:"\u7AF9\u7DE8\u5C4B\u30FB\u7D05\u571F\u5730",terrain:"\u7D05\u571F\u53F0\u5730\u8207\u7AF9\u6797",blurb:"\u7D05\u7D05\u7684\u571F\u5730\u7A2E\u5730\u74DC\uFF0C\u7AF9\u5B50\u7DE8\u6210\u7684\u623F\u5B50\u662F\u7AF9\u5C71\u7684\u7279\u8272\u3002"},{town:"\u4FE1\u7FA9\u9109",mx:77,my:25,tier:"L",lift:10,arch:"peak2",lm:"\u7389\u5C71\u30FB\u8461\u8404\u68DA",terrain:"\u9AD8\u5C71\u6CB3\u8C37",blurb:"\u7E23\u5167\u6700\u5927\u7684\u9109\uFF0C\u7389\u5C71\u662F\u53F0\u7063\u6700\u9AD8\u5CF0\uFF0C\u5C71\u8C37\u88E1\u6709\u8461\u8404\u68DA\u67B6\u548C\u9AD8\u5C71\u8336\u3002"}],Re=(n,t,e,i)=>Math.hypot(n-e,t-i),hf=(n,t,e,i,s,r,a=1.6)=>r*Math.pow(Math.max(0,1-Re(n,t,e,i)/s),a),Fn=(n,t,e)=>{let i=1e9;for(let s=0;s<e.length-1;s++){let[r,a]=e[s],[o,c]=e[s+1],l=o-r,h=c-a,u=wl(((n-r)*l+(t-a)*h)/(l*l+h*h||1));i=Math.min(i,Math.hypot(n-r-l*u,t-a-h*u))}return i},uf=(n,t=60)=>new Sn(n.map(e=>new D(e[0],0,e[1])),!1,"centripetal").getPoints(t).map(e=>[e.x,e.z]);function C1(n,t){let e={R:t,lms:[],river:null,lake:null,hills:[],peak:null,terr:null,basin:null,plateau:null,soil:null,rail:null,col:{a:8376398,b:10149984}};switch(n){case"peak":e.peak={x:3.4,z:-4.4,r:7.4,h:5.8,sharp:1.35},e.lms=[{x:-5.2,z:-2.2,r:2.4}];break;case"peak2":e.peak={x:-3.4,z:-5.4,r:7.4,h:6.8,sharp:1.3},e.lms=[{x:4.8,z:-4.4,r:2}];break;case"hills":e.hills=[{x:-4,z:-3,r:5.6,h:2},{x:4,z:-4.4,r:4.6,h:1.6},{x:-1,z:-6,r:4,h:1.1}],e.lms=[{x:-4,z:-3,r:2.4,pad:!0}],e.col={a:8834890,b:10935390};break;case"plain":e.lms=[{x:0,z:-1.9,r:2.4}],e.col={a:9099342,b:11592800};break;case"plateau":e.plateau={h:1,nx:-.55,nz:-.83,off:.6},e.river=uf([[-7.4,3.2],[-3.2,2.2],[1.5,2.4],[7.4,.4]],40),e.lms=[{x:-2.2,z:-3.4,r:2.4}];break;case"basin":e.basin={r0:.62,h:1.7},e.lms=[{x:0,z:-1.2,r:2.2}],e.col={a:8179541,b:14214248};break;case"basin2":e.basin={r0:.7,h:1.5},e.lms=[{x:0,z:-3.6,r:1.8}];break;case"lake":e.lake={x:-1.2,z:1.4,r:3.7,depth:.9},e.hills=[{x:4.3,z:-3.2,r:4.4,h:2.3}],e.lms=[{x:4.3,z:-3.2,r:1.8,pad:!0},{x:-1.2,z:1.4,r:3.9,pad:!1}],e.islet={x:-.6,z:1.4,r:.95,h:1};break;case"tea":e.hills=[{x:-3.2,z:-3.2,r:3.8,h:1.3}],e.lms=[{x:-3.2,z:-3.2,r:2.2,pad:!0}],e.col={a:8836176,b:11855464};break;case"rail":e.rail={z:-4.4,x0:-6.4,x1:6.4},e.lms=[{x:-1.6,z:-5.2,r:2.4}];break;case"river":e.river=uf([[-8.2,-6],[-4.6,-3.6],[-1,-.5],[2.6,1.2],[6.4,2],[9.2,3.2]],56),e.lms=[{x:-5.2,z:-5.8,r:2.4}],e.hills=[{x:3.6,z:-5.4,r:4.4,h:1.6}];break;case"terrace":e.terr={x:-3.4,z:-3.6,r:6.4,h:3.6,steps:6},e.lms=[{x:3.8,z:-2.4,r:2.2}],e.col={a:8179534,b:10412130};break;case"redhill":e.hills=[{x:3.2,z:-3.6,r:5.6,h:1.8}],e.soil={x:3.2,z:-3.6,r:5.6},e.lms=[{x:-3.4,z:-3.2,r:2.2}];break}return e}function ff(n,t){let e=n.R,i=n.O||(()=>e);return(s,r,a=!0,o=null)=>{let c=Math.hypot(s,r)/e,l=.25+.2*(sr(s*.22+t,r*.22,3,t)-.5)*2*(n.river||n.lake?.55:1);if(n.peak){let h=Math.hypot(s-n.peak.x,r-n.peak.z)/n.peak.r;l+=n.peak.h*Math.pow(Math.max(0,1-h),n.peak.sharp)*(1+.12*Math.sin(Math.atan2(r-n.peak.z,s-n.peak.x)*5))}for(let h of n.hills)l+=hf(s,r,h.x,h.z,h.r,h.h);if(n.terr){let h=Math.pow(Math.max(0,1-Re(s,r,n.terr.x,n.terr.z)/n.terr.r),1.15)*n.terr.steps,u=Math.floor(h),f=h-u;l+=n.terr.h*(u+Be(.62,.95,f))/n.terr.steps}if(n.basin&&(l+=n.basin.h*Be(n.basin.r0,1,c)*(1+.25*Math.sin(Math.atan2(r,s)*3+t))),n.plateau){let h=s*n.plateau.nx+r*n.plateau.nz;l+=n.plateau.h*Be(n.plateau.off-.7,n.plateau.off+.7,h)}if(n.lake){let h=Re(s,r,n.lake.x,n.lake.z);l-=n.lake.depth*(1-Be(n.lake.r*.55,n.lake.r*1.05,h)),n.islet&&(l+=hf(s,r,n.islet.x,n.islet.z,n.islet.r,n.islet.h+.9,.9))}if(n.river){let h=Fn(s,r,n.river);l-=(.62+.2*Be(0,.5,Math.abs(l)))*(1-Be(.5,1.55,h))}{let h=Be(.92,1.4,c);h>0&&(l+=h*n.outerAmp*(sr(s*.11+t,r*.11,3,t+5)*1.5-.25))}{let h=Math.hypot(s,r)/i(Math.atan2(r,s));l-=1.2*Math.pow(Be(.86,1,h),1.4)}if(a&&n.flatten)for(let h of n.flatten){let u=Re(s,r,h.x,h.z),f=1-Be(h.r*.72,h.r*1.2,u);f>0&&(l=cf(l,h.h,f))}return l}}var I1=13145440,df=16773327,L1=15222842;var pf={peak:(n,t,e,i)=>{let s=t(e,i);n.box(I1,e,s,i,2.4,1.1,1.8),n.sph(L1,e,s+1.05,i,1.65,1,.62,1,12);for(let r=0;r<7;r++){let a=r*hs(),o=.6+r%3*.25;n.sph(16777215,e+Math.cos(a)*1.2*Math.cos(o*.6),s+1.1+Math.sin(o)*.75,i+Math.sin(a)*1.2*Math.cos(o*.6),.17)}n.box(8015660,e,s,i+.92,.5,.8,.08),n.cyl(11561546,e+.8,s+1.3,i-.3,.14,.14,.8,6);for(let r=0;r<3;r++)n.sph(16777215,e+.8+r*.18,s+2.3+r*.35,i-.3,.2+r*.07)},peak2:(n,t,e,i)=>{let s=t(e,i);n.box(11569754,e,s,i,2,1,1.6),n.add(new wn(1.5,.9,4).toNonIndexed(),14174266,e,s+1.4,i,1,1,.9,0,Math.PI/4,0),n.box(8015660,e,s,i+.82,.45,.7,.08),n.cyl(8026746,e+1.4,s,i,.05,.05,1.8,5),n.box(16730682,e+1.62,s+1.2,i,.5,.34,.04)},hills:(n,t,e,i)=>{let s=t(e,i);n.box(df,e,s,i,2.2,1.2,1.7),n.add(new wn(1.75,.95,4).toNonIndexed(),10115642,e,s+1.65,i,1,1,.85,0,Math.PI/4,0),n.cyl(12604730,e+.8,s+1,i-.4,.25,.25,1.9,6);for(let r=0;r<4;r++)n.sph(16777215,e+.8+r*.12,s+3.1+r*.4,i-.4,.2+r*.07);n.box(8015660,e-.3,s,i+.87,.5,.8,.08);for(let r=0;r<3;r++)n.box(14203e3,e-1.5+r*.2,s,i+1.2-r*.1,.34,.4,.3),n.sph(5911576,e-1.5+r*.2,s+.45,i+1.2-r*.1,.1)},plain:(n,t,e,i)=>{let s=t(e,i);n.cyl(10132122,e,s,i,1.35,1.65,1.1,10),n.cyl(6974058,e,s+1.08,i,1.4,1.4,.06,10),n.sph(16777215,e,s+1.15,i,1.15,1,.55,1,10),n.cyl(12159568,e+.5,s+1.4,i-.2,.12,.12,2.3,6,0,.9),n.sph(12159568,e+1.6,s+2.3,i-.2,.34,1,1.3,1)},plateau:(n,t,e,i)=>{let s=t(e,i);n.box(df,e,s,i,2.5,1.2,1.8),n.add(new wn(2,.9,4).toNonIndexed(),11551802,e,s+1.7,i,1,1,.85,0,Math.PI/4,0),n.box(15223354,e,s+.85,i+1.1,2.6,.2,.8,0,.5),n.box(16777215,e,s+.86,i+1.1,.5,.2,.8,0,.5),n.cyl(16777215,e,s+2.1,i,.7,.52,.5,10),n.cyl(16767082,e,s+2.5,i,.62,.62,.08,10);for(let r=0;r<7;r++)n.sph(16768890,e+Math.cos(r*hs())*.3,s+2.58,i+Math.sin(r*hs())*.3,.18,1,.4,1);n.box(8015660,e-.5,s,i+.92,.5,.8,.08)},basin:(n,t,e,i)=>{let s=t(e,i);n.cyl(16765498,e,s,i,1.35,1.2,1.3,6),n.cone(15769632,e,s+1.3,i,1.55,1.1,6),n.cyl(15245344,e+.4,s+1.5,i,.18,.1,.7,5),n.box(8015660,e,s,i+1,.5,.8,.08);for(let r=0;r<3;r++)n.box([16765498,16751296,8049136][r],e+1.9,s+r*.3,i+.4,.8,.3,.7);for(let r=0;r<30;r++){let a=r*hs(),o=2.6+r%5*.35,c=e+Math.cos(a)*o,l=i+Math.sin(a)*o*.8;n.sph([16738992,16765498,16777215,12614384][r%4],c,t(c,l)+.14,l,.14)}},basin2:(n,t,e,i)=>{let s=t(e,i);n.cyl(12103840,e,s,i,1.5,1.5,.25,10),n.cyl(14209216,e,s+.25,i,1.1,1.1,.25,10),n.box(13156528,e,s+.5,i,.8,2.4,.8),n.sph(15223354,e,s+3.1,i,.42),n.cyl(15223354,e,s+.28,i,1.3,1.3,.04,12),n.cyl(8026746,e+.5,s+2.6,i,.04,.04,1.2,5),n.box(16765498,e+.78,s+3.5,i,.5,.32,.04)},lake:(n,t,e,i)=>{if(Math.abs(e-4.3)<.01){let s=t(e,i),r=1;for(let a=0;a<5;a++)n.cyl(16050896,e,s+a*.62+.1,i,.95*(1-a*.12),.8*(1-a*.12),.5,8),n.cone(14176314,e,s+a*.62+.5,i,1.35*(1-a*.12),.28,8);n.cone(14176314,e,s+3.4,i,.4,.9,8),n.sph(16765498,e,s+4.3,i,.12)}else n.cyl(8015660,e+2.2,-.28,i-.9,.07,.07,1.4,5),n.boxc(16777215,e+2.55,-.28+.8,i-.9,.7,.9,.04),n.box(13145440,e+2.2,-.28,i-.9,1.2,.2,.45,.4),n.cyl(10123856,e-.6,t(e-.6,i)-.2,i,.1,.08,.6,5),n.sph(5224506,e-.6,t(e-.6,i)+.6,i,.5)},tea:(n,t,e,i)=>{let s=t(e,i);for(let[r,a]of[[-1,-.7],[1,-.7],[-1,.7],[1,.7]])n.cyl(11561546,e+r,s,i+a,.09,.09,1.5,6);n.cone(14176314,e,s+1.5,i,1.9,.9,6),n.cone(11549226,e,s+2.3,i,.4,.5,6),n.box(13145440,e,s+.35,i,1.8,.1,1.2);for(let r=0;r<3;r++)for(let a=0;a<2;a++)n.box(14725216,e+2.6+a*.8,s+r*.34,i+.2,.7,.32,.55),n.sph(16761395,e+2.6+a*.8,s+r*.34+.4,i+.2,.2,1,.8,1)},rail:(n,t,e,i)=>{let s=t(e,i);n.box(15255704,e,s,i,3.2,1.3,1.6),n.add(new wn(2.45,1,4).toNonIndexed(),9062970,e,s+1.3,i,1,1,.75,0,Math.PI/4,0),n.cyl(16777215,e,s+.7,i+.82,.3,.3,.06,10,Math.PI/2),n.box(8015660,e+.9,s,i+.82,.5,.8,.08),n.box(11575440,e,s,i+1.5,3.6,.18,.9);for(let o=0;o<22;o++){let c=-6.3+o*.58;n.box(8018490,c,t(c,-4.4)+.02,-4.4+0,.12,.08,1.1)}n.box(11579576,0,t(0,-4.4)+.12,-4.7,13,.06,.08),n.box(11579576,0,t(0,-4.4)+.12,-4.1,13,.06,.08);let r=3.6,a=t(r,-4.4)+.12;n.box(3123274,r,a,-4.4,1.6,.8,.9),n.cyl(2763306,r+.5,a+.8,-4.4,.18,.14,.55,8),n.box(15222842,r-.3,a+.8,-4.4,.8,.45,.95);for(let o=1;o<=2;o++)n.box(o%2?16765498:16747066,r-1.8*o,a,-4.4,1.5,.7,.85)},river:(n,t,e,i)=>{let s=t(e,i),r=[[0,0,1],[1.1,.3,.9],[2.1,.6,.8],[3,.9,.7]];for(let[a,o,c]of r)n.sph(13654074,e+a-.8,s+.05,i+o*.5,.9*c,1.3,.75,1,10),n.cyl(10502192,e+a-.8,s+.55*c,i+o*.5,.15,.15,.55,6);n.cyl(10502192,e+2.2,s+.7,i+.3,.22,.18,1.4,6);for(let a=0;a<5;a++)n.sph(13142616,e-.7+a*.45,s+.22,i+1.4,.2,1,1.2,1)},terrace:(n,t,e,i)=>{let s=t(e,i);n.sph(16777215,e,s+1.35,i,1.15,1,.95,1,14),P1(n,5814344,e,s+1.4,i,1.1,8,.16),n.cyl(16777215,e,s+.1,i,.5,.7,.35,10),n.sph(16777215,e,s+2.4,i,.3,1,.4,1),n.sph(16777215,e,s+2.6,i,.12),n.cyl(16777215,e+1,s+1.1,i,.3,.2,1.1,8,0,-1),n.sph(16777215,e+1.75,s+1.95,i,.2);for(let r=0;r<7;r++){let a=-1.2+r*.4;n.sph(16777215,e-1.3-Math.cos(a)*.35,s+1.3+Math.sin(a)*.9,i,.14)}n.cyl(16777215,e+2.4,s,i+1.2,.4,.28,.34,10),n.cyl(13141802,e+2.4,s+.28,i+1.2,.34,.34,.04,10)},redhill:(n,t,e,i)=>{let s=t(e,i);n.cyl(15122544,e,s,i,1.35,1.3,1.2,10),n.cone(14198864,e,s+1.2,i,1.75,1.35,10);for(let r=0;r<8;r++)n.box(13146692,e+Math.cos(r*.785)*1.33,s+.1,i+Math.sin(r*.785)*1.33,.1,1,.1,-r*.785);n.box(8015660,e,s,i+1.3,.55,.85,.08),n.cyl(15122544,e+2.2,s,i+.6,.35,.3,.7,8);for(let r=0;r<3;r++)n.cyl(8376154,e+2.2+r*.16,s+.3,i+.6,.05,.04,1.4,5)}};function P1(n,t,e,i,s,r,a,o){for(let c=0;c<a;c++){let l=c*hs(),h=c%3*.5-.2;n.sph(t,e+Math.cos(l)*r*Math.cos(h),i+Math.sin(h)*r*.9,s+Math.sin(l)*r*Math.cos(h),o)}}function hs(){return 2.399}var D1={peak:"peak",peak2:"peak2",hills:"hills",plain:"plain",plateau:"plateau",basin:"basin",basin2:"basin2",lake:"lake",tea:"tea",rail:"rail",river:"river",terrace:"terrace",redhill:"redhill"},To=null;function vi(){if(To)return To;let n=new Nr(new Uint8Array([120,120,120,255,190,190,190,255,255,255,255,255]),3,1,_n);n.minFilter=n.magFilter=Ve,n.needsUpdate=!0;let t=new Nr(new Uint8Array([105,105,105,255,160,160,160,255,212,212,212,255,255,255,255,255]),4,1,_n);return t.minFilter=t.magFilter=Ve,t.needsUpdate=!0,To={toon:new _i({vertexColors:!0,gradientMap:t}),water:new _i({color:5687536,gradientMap:n,transparent:!0,opacity:.88}),cloud:new _i({color:16777215,gradientMap:n,transparent:!0,opacity:.95})},To}var We=n=>new Wt(n),yi={};function U1(n){if(n.getHSL(yi),yi.h>.16&&yi.h<.45){let t=Math.min(1,1.4-Math.abs(yi.h-.29)/.15);n.setHSL(yi.h+(.285-yi.h)*.55*t,Math.min(.72,yi.s*.95+.04)*t+yi.s*(1-t),yi.l*(1-.17*t))}return n}function xf(n,t,e,i={}){let s=vi(),r=i.R||R1[n.tier],a=i.O||(()=>r),o=ir(100+e*17),c=e*3.7+1,l=C1(n.arch,r);l.O=a,l.outerAmp=n.arch.startsWith("peak")?2.6:n.arch==="hills"||n.arch==="redhill"?1.3:.7;let h=(E,k,M=1)=>Math.hypot(E,k)<a(Math.atan2(k,E))*M;if(l.river){let E=l.river;for(let k of[0,1]){let M=k?E[E.length-1]:E[0],B=k?E[E.length-2]:E[1],z=M[0]-B[0],q=M[1]-B[1],ct=Math.hypot(z,q)||1;z/=ct,q/=ct;let dt=[M[0],M[1]],zt=[];for(let Vt=0;Vt<200&&h(dt[0],dt[1],1.06);Vt++)dt=[dt[0]+z*.8,dt[1]+q*.8],zt.push(dt);k?E.push(...zt):E.unshift(...zt.reverse())}}let u=l.lms,f=ff(l,c),d=i.bridgeAngles||[],g=d.map(E=>({ang:E,x:Math.cos(E)*a(E)*.9,z:Math.sin(E)*a(E)*.9})),x=null,m=[];if(g.length){let E=1e9;for(let k=-r*.5;k<=r*.5;k+=.7)for(let M=-r*.5;M<=r*.5;M+=.7){if(Math.hypot(k,M)>r*.5)continue;let B=Math.hypot(k,M)*.15;for(let z of g){let q=[[z.x,z.z],[k,M]];for(let ct of u)Fn(ct.x,ct.z,q)<ct.r+.7&&(B+=10);l.lake&&Fn(l.lake.x,l.lake.z,q)<l.lake.r+.7&&(B+=10),l.peak&&Fn(l.peak.x,l.peak.z,q)<l.peak.r*.5&&(B+=6),l.river&&(B+=Fn(k,M,l.river)<1.8?4:0)}for(let z of u)Re(k,M,z.x,z.z)<z.r+1.2&&(B+=20);B<E&&(E=B,x=[k,M])}for(let k of g)m.push([[k.x,k.z],[Math.cos(k.ang)*a(k.ang)*1.02,Math.sin(k.ang)*a(k.ang)*1.02]],[[k.x,k.z],x])}let p=(E,k)=>{let M=1e9;for(let B of m)M=Math.min(M,Fn(E,k,B));return x&&(M=Math.min(M,Re(E,k,x[0],x[1])-.6)),M},T=1.4,y=[];for(let E=0;E<900;E++){let k=o()*Ge,M=Math.sqrt(o())*r*.84,B=Math.cos(k)*M,z=Math.sin(k)*M;y.push([B,z])}let R=(E,k,M)=>Math.hypot(E(k+.3,M)-E(k-.3,M),E(k,M+.3)-E(k,M-.3))/.6,O=(E,k,M)=>{if(f(E,k)<.06||R(f,E,k)>.45)return!1;for(let B of u)if(Re(E,k,B.x,B.z)<B.r+T+.1)return!1;if(l.river&&Fn(E,k,l.river)<1.9+T*.5||l.lake&&Re(E,k,l.lake.x,l.lake.z)<l.lake.r+1.1+T*.4||l.rail&&Math.abs(k-l.rail.z)<2||l.peak&&Re(E,k,l.peak.x,l.peak.z)<l.peak.r*.52)return!1;for(let B of M)if(Re(E,k,B[0],B[1])<T*2+.1)return!1;return p(E,k)<T+.45?!1:Math.hypot(E,k)<r*.8},L=[];for(let[E,k]of y){if(L.length>=8)break;O(E,k,L)&&L.push([E,k])}for(let E=0;L.length<8&&E<4e3;E++){let k=o()*Ge,M=Math.sqrt(o())*r*.84,B=Math.cos(k)*M,z=Math.sin(k)*M,q=L;f(B,z)>.06&&Re(B,z,0,0)<r*.85&&!u.some(ct=>Re(B,z,ct.x,ct.z)<ct.r+.8)&&!(l.river&&Fn(B,z,l.river)<1.7)&&!(l.lake&&Re(B,z,l.lake.x,l.lake.z)<l.lake.r+.9)&&!(l.rail&&Math.abs(z-l.rail.z)<1.8)&&!q.some(ct=>Re(B,z,ct[0],ct[1])<2.3)&&p(B,z)>T+.15&&L.push([B,z])}L.sort((E,k)=>(E[0]-k[0])*.5+(k[1]-E[1])*0),l.flatten=[...u.filter(E=>E.pad!==!1).map(E=>({x:E.x,z:E.z,r:E.r*.95,h:f(E.x,E.z)})),...L.map(E=>({x:E[0],z:E[1],r:T,h:f(E[0],E[1])}))],n.arch==="lake"&&(l.flatten=l.flatten.filter(E=>!(Math.abs(E.x+1.2)<.01)));let P=[];{let E=0;for(let B=0;B<72;B++){let z=a(B/72*Ge);E+=(z*z-r*r)*Math.PI/72}let k=Math.max(0,Math.min(14,Math.round(E/38))),M=ir(700+e);for(let B=0;B<3e3&&P.length<k;B++){let z=M()*Ge,q=Math.sqrt(M())*a(z)*.86,ct=Math.cos(z)*q,dt=Math.sin(z)*q;Math.hypot(ct,dt)<r+1.5||f(ct,dt)<.1||R(f,ct,dt)>.55||p(ct,dt)<2.2||l.river&&Fn(ct,dt,l.river)<2.6||l.lake&&Re(ct,dt,l.lake.x,l.lake.z)<l.lake.r+2||[...L,...P].some(zt=>Re(ct,dt,zt[0],zt[1])<3.4)||P.push([ct,dt])}}l.flatten.push(...P.map(E=>({x:E[0],z:E[1],r:1.5,h:f(E[0],E[1])})));let Z=ff(l,c),S=(E,k)=>Z(E,k),b=120,H=30,K=[],$=[],N=[],V=(E,k,M,B)=>{let z=sr(E*.3+c,k*.3,3,2),q=We(l.col.a).lerp(We(l.col.b),z),ct=Math.hypot(E,k)/r;if(l.soil&&Re(E,k,l.soil.x,l.soil.z)<l.soil.r*.78&&q.lerp(We(13787194),.8*(1-Be(.4,.78,Re(E,k,l.soil.x,l.soil.z)/l.soil.r))),l.peak){let dt=M/l.peak.h;q.lerp(We(10129284),Be(.18,.4,dt)*.9),q.lerp(We(11840674),Be(.58,.72,dt)*.8)}if(l.terr){let dt=Math.pow(Math.max(0,1-Re(E,k,l.terr.x,l.terr.z)/l.terr.r),1.15)*l.terr.steps,zt=dt-Math.floor(dt);M>.3&&q.lerp(We(11038780),(1-Be(.6,.75,zt))*.55)}if(l.lake){let dt=Re(E,k,l.lake.x,l.lake.z);M<.05&&dt<l.lake.r*1.15&&q.lerp(We(15785120),.95)}if(l.river){let dt=Fn(E,k,l.river);q.lerp(We(15785120),(1-Be(.9,1.9,dt))*.9)}for(let dt of u)if(dt.pad!==!1){let zt=Re(E,k,dt.x,dt.z);q.lerp(We(15259816),(1-Be(dt.r*.7,dt.r*1.05,zt))*.75)}for(let dt of[...L,...P]){let zt=Re(E,k,dt[0],dt[1]);q.lerp(We(12094038),(1-Be(T*.7,T*1.15,zt))*.85)}if(n.arch==="rail"){let dt=Math.abs(k-l.rail.z);q.lerp(We(14207136),(1-Be(.6,1.4,dt))*.8)}if(n.arch==="plateau"&&M>.5&&q.lerp(We(11854940),.25),m.length){let dt=p(E,k);q.lerp(We(15389338),(1-Be(.42,.78,dt))*.92)}return q.lerp(We(4168252),Be(.9,1,Math.hypot(E,k)/a(Math.atan2(k,E)))*.5*(m.length?Be(.5,.9,p(E,k)):1)),U1(q)};for(let E=0;E<=H;E++){let k=Math.pow(E/H,.9);for(let M=0;M<=b;M++){let B=M/b*Ge,z=a(B)*k,q=E?Math.cos(B)*z:0,ct=E?Math.sin(B)*z:0,dt=Z(q,ct);K.push(q,dt,ct),$.push(0,0,0)}}for(let E=0;E<H;E++)for(let k=0;k<b;k++){let M=E*(b+1)+k,B=M+b+1;N.push(M,M+1,B,M+1,B+1,B)}let j=new Ie;j.setAttribute("position",new ye(K,3)),j.setIndex(N),j.computeVertexNormals();let ut=j.attributes.normal,ot=new Float32Array(K.length);for(let E=0;E<K.length/3;E++){let k=Math.max(.1,ut.getY(E)),M=Math.sqrt(Math.max(0,1-k*k))/k,B=V(K[E*3],K[E*3+2],K[E*3+1],M);ot[E*3]=B.r,ot[E*3+1]=B.g,ot[E*3+2]=B.b}j.setAttribute("color",new Ne(ot,3));let st=0;for(let E=0;E<72;E++)st+=a(E/72*Ge)/72;let xt=8.3*Math.min(2.2,Math.max(1,st/9)),_t=[[1,-.15],[.98,-1],[.88,-2.3],[.7,-3.9],[.46,-5.6],[.22,-7],[.06,-7.9],[0,-8.3]],ft=72,Q;{let E=[],k=[];for(let M=0;M<_t.length;M++)for(let B=0;B<=ft;B++){let z=B/ft*Ge,q=a(z)*_t[M][0],ct=_t[M][1]*(M?xt/8.3:1),dt=Math.cos(z)*q,zt=Math.sin(z)*q,Vt=M&&M<_t.length-1?1+.16*(sr(dt*.4+c,zt*.4+ct*.3,2,9)-.5)*2:1;E.push(dt*Vt,ct+(M>1?.4*(sr(dt*.3,zt*.3,2,5)-.5):0),zt*Vt)}for(let M=0;M<_t.length-1;M++)for(let B=0;B<ft;B++){let z=M*(ft+1)+B,q=z+ft+1;k.push(z,q,z+1,z+1,q,q+1)}Q=new Ie,Q.setAttribute("position",new ye(E,3)),Q.setIndex(k)}Q=Q.toNonIndexed(),Q.computeVertexNormals();let pt=new Float32Array(Q.attributes.position.count*3);for(let E=0;E<Q.attributes.position.count;E++){let k=Q.attributes.position.getY(E)*8.3/xt,M=k>-.5?We(5217844):k>-2.6?We(10118200).lerp(We(8277548),Be(-.6,-2.6,k)).lerp(We(11565640),Math.sin(k*7)>.6?.35:0):We(9337446).lerp(We(6180936),Be(-2.6,-8,k));pt[E*3]=M.r,pt[E*3+1]=M.g,pt[E*3+2]=M.b}Q.setAttribute("color",new Ne(pt,3));let It=[j.toNonIndexed(),Q];for(let E of It)for(let k of Object.keys(E.attributes))["position","normal","color"].includes(k)||E.deleteAttribute(k);let Nt=new Je;pf[D1[n.arch]](Nt,S,u[0].x,u[0].z),n.arch==="lake"&&pf.lake(Nt,S,u[1].x,u[1].z),L.slice(0,8).forEach((E,k)=>El(Nt,S,E[0],E[1],ir(500+e*31+k),t[k])),P.forEach((E,k)=>El(Nt,S,E[0],E[1],ir(800+e*31+k),t[k%t.length]));let Ot=0;for(let E=0;E<72;E++)Ot+=a(E/72*Ge)**2*Math.PI/72;let $t=Math.min(110,Math.round(Ot/9));for(let E=0;E<$t*5&&$t>0;E++){let k=o()*Ge,M=a(k)*Math.sqrt(.12+o()*.76),B=Math.cos(k)*M,z=Math.sin(k)*M;if(Math.hypot(B,z)<r*.5)continue;let q=Z(B,z);if(q<.1||p(B,z)<1||R(Z,B,z)>.7||[...L,...P].some(dt=>Re(B,z,dt[0],dt[1])<T+.7)||u.some(dt=>Re(B,z,dt.x,dt.z)<dt.r+.6)||l.river&&Fn(B,z,l.river)<1.7||l.lake&&Re(B,z,l.lake.x,l.lake.z)<l.lake.r+.8||l.rail&&Math.abs(z-l.rail.z)<1.6)continue;let ct=.7+o()*.5;if(E%3===2){Nt.cyl(8015660,B,q,z,.09*ct,.07*ct,.4*ct,6);for(let dt=0;dt<3;dt++)Nt.cone([3112762,3508798,2782004][dt],B,q+(.3+dt*.42)*ct,z,(.62-dt*.16)*ct,.75*ct,8)}else Nt.cyl(8015660,B,q,z,.1*ct,.08*ct,.6*ct,6),Nt.sph([4168244,4892730,3509296][E%3],B,q+.95*ct,z,.52*ct,1,1.08,1,9),Nt.sph([4892730,5813314][E%2],B+.18*ct,q+1.15*ct,z+.1*ct,.32*ct,1,1,1,8);if(Nt.l.length>4200)break}let Jt=new Je;for(let E=0;E<Math.round(7*st/9);E++){let k=E*hs()+e,M=a(E*hs()+e)*(.45+E%3*.22),B=-3.6*xt/8.3-E%4*1.1,z=1.5+o()*1.6;Jt.sph(16777215,Math.cos(k)*M,B,Math.sin(k)*M,z,1.3,.62,1.1,10),Jt.sph(16777215,Math.cos(k)*M+z*.9,B-.1,Math.sin(k)*M+.4,z*.7,1.2,.6,1.1,9)}let kt=[],te=new Je,U=new Je,St=new Je,rt=8,Et=[];for(let E=0;E<=240;E++){let k=Math.PI*(.86-.72*E/240);d.some(M=>{let B=Math.abs(((k-M)%Ge+Ge)%Ge);return B=Math.min(B,Ge-B),B<.22})||Et.push(k)}for(let E=0;E<rt;E++){let k=Et.length>=rt?Et[Math.round(E*(Et.length-1)/(rt-1))]:Math.PI*(.8-.6*E/(rt-1)),M=r*.98,B=Math.cos(k)*M,z=Math.sin(k)*M*1,q=Math.max(-.2,Z(B*.9,z*.9)+.05);te.cyl(13145440,B,q-.1,z,.5,.46,.55,8),te.cyl(16773327,B,q+.45,z,.56,.56,.08,10);let ct=new Je;of(ct,t[E]);let dt=ct.merge();dt&&te.raw(dt,B,q+.55,z,1.5),kt.push({x:B,y:q+2,z}),U.cyl(13145440,B,q-.1,z,.56,.52,.55,16);for(let vt=0;vt<8;vt++){let F=vt/8*Ge+.2;U.box(10119742,B+Math.cos(F)*.535,q-.1,z+Math.sin(F)*.535,.05,.56,.08,-F)}U.cyl(11040074,B,q+.4,z,.62,.62,.06,20),U.cyl(16774104,B,q+.46,z,.58,.58,.05,24);for(let vt=0;vt<10;vt++){let F=vt/10*Ge+E;U.cone(vt%2?6078280:8179534,B+Math.cos(F)*.58,q-.12,z+Math.sin(F)*.58,.07,.26+vt%3*.06,5,Math.sin(F)*.3,0,-Math.cos(F)*.3)}let zt=new Je;af(zt,t[E]);let Vt=zt.merge();Vt&&U.raw(Vt,B,q+.51,z,1.45)}let at=ir(900+e*7),Xt=[16743088,16765498,16777215,11565808,16751178],Lt=(E,k,M=.5)=>Z(E,k)<.05||R(Z,E,k)>.5||p(E,k)<.65||L.some(z=>Re(E,k,z[0],z[1])<T+M)||u.some(z=>Re(E,k,z.x,z.z)<z.r+.3)||l.river&&Fn(E,k,l.river)<1.3||l.lake&&Re(E,k,l.lake.x,l.lake.z)<l.lake.r+.5||l.rail&&Math.abs(k-l.rail.z)<1||l.peak&&Z(E,k)>l.peak.h*.45?!1:h(E,k,.9);for(let E=0,k=0,M=0;E<500&&(k<26||M<40);E++){let B=at()*Ge,z=Math.sqrt(at())*a(B)*.92,q=Math.cos(B)*z,ct=Math.sin(B)*z;if(!Lt(q,ct))continue;let dt=Z(q,ct);if(k<26&&at()<.45){k++;let zt=Xt[k%Xt.length];St.cyl(5220412,q,dt,ct,.02,.02,.32,4);for(let Vt=0;Vt<5;Vt++){let vt=Vt/5*Ge;St.sph(zt,q+Math.cos(vt)*.07,dt+.33,ct+Math.sin(vt)*.07,.06,1,.45,1,6)}St.sph(16765498,q,dt+.35,ct,.045,1,1,1,6)}else if(M<40){M++;for(let zt=0;zt<4;zt++){let Vt=zt/4*Ge+at();St.cone(zt%2?6078280:8377434,q+Math.cos(Vt)*.05,dt-.02,ct+Math.sin(Vt)*.05,.05,.3+at()*.15,4,Math.sin(Vt)*.35,0,-Math.cos(Vt)*.35)}}}L.slice(0,8).forEach(([E,k])=>{for(let M=0;M<16;M++){let B=M/16*Ge,z=E+Math.cos(B)*(T+.08),q=k+Math.sin(B)*(T+.08);St.sph(M%3?14208960:12563620,z,Z(z,q)+.03,q,.11,1.2,.6,1,6)}});for(let E=0;E<12;E++){let k=Math.PI*.9+E/12*Math.PI*1.2+e*.1,M=Math.cos(k)*a(k)*1,B=Math.sin(k)*a(k)*1,z=-.45,q=M,ct=z,dt=B,zt=1.2+E*.37%1*1.6;for(let Vt=0;Vt<6;Vt++){let vt=ct-zt/6;St.cyl(4165434,q,vt,dt,.025,.025,zt/6,4),Vt%2===0&&St.sph(6078280,q+.06,vt+.05,dt,.09,1.2,.4,1,6),ct=vt,q+=Math.cos(k)*.03,dt+=Math.sin(k)*.03}}for(let E=0;E<10;E++){let k=E/10*Ge+e*.7,M=Math.cos(k)*a(k)*.95,B=Math.sin(k)*a(k)*.95;St.sph(E%2?12102810:10524298,M,-.9-E%3*.5,B,.4+E%3*.15,1.1,.8,1,7)}let w=new Je;if(l.lake&&w.cyl(5687536,l.lake.x,-.32,l.lake.z,l.lake.r*1.02,l.lake.r*1.02,.1,28),l.river){let E=l.river;for(let k=0;k<E.length-1;k++){let[M,B]=E[k],[z,q]=E[k+1],ct=Math.hypot(z-M,q-B);w.boxc(5687536,(M+z)/2,-.28,(B+q)/2,ct*1.12,.08,1.35,-Math.atan2(q-B,z-M))}}let v=new Li,W=new ve(N1(It),s.toon);W.userData.island=e,v.add(W);let yt=new ve(Nt.merge(),s.toon);yt.userData.island=e,v.add(yt);let mt=new ve(Jt.merge(),s.cloud);mt.userData.island=e,v.add(mt);let nt=w.merge();if(nt){let E=new ve(nt,s.water);E.userData.island=e,v.add(E)}let Pt=new ve(te.merge(),s.toon),At=new ve(U.merge(),s.toon),Ut=new ve(St.merge(),s.toon);[Pt,At,Ut].forEach(E=>{E.userData.island=e,v.add(E)}),At.visible=Ut.visible=!1;let qt=0,Gt=0;return v.traverse(E=>{if(E.isMesh){let k=E.geometry.attributes.position.count/3;E===At||E===Ut?Gt+=k:qt+=k}}),{gy:S,hub:x,ends:g,group:v,R:r,O:a,Oavg:st,slots:L.slice(0,8),pedestals:kt,lmPos:[u[0].x,S(u[0].x,u[0].z)+2.8,u[0].z],tris:qt,hiTris:Gt,lo:[Pt],hi:[At,Ut],meshes:[W,yt,mt,Pt,At,Ut]}}function N1(n){let t=n.map(e=>{e=e.index?e.toNonIndexed():e;for(let i of Object.keys(e.attributes))["position","normal","color"].includes(i)||e.deleteAttribute(i);return e});return yo(t,!1)}var _f=16766640,Tl=15909018;function O1(n){let t=new Je,{shirt:e,pants:i,hair:s=3811872,hat:r=null,skirt:a=null,prop:o=null,skin:c=_f,longHair:l=!1,pig:h=!1,grey:u=!1}=n;for(let f of[-1,1])t.cyl(i,f*.075,.04,0,.058,.058,.28,8),t.sph(4864560,f*.075,.045,.03,.065,1,.6,1.4,8);a&&(t.cone(a,0,.2,0,.24,.34,12,Math.PI),t.cyl(a,0,.2,0,.18,.18,.02,12)),t.cyl(e,0,.3,0,.17,.15,.3,12),t.sph(e,0,.6,0,.155,1,.5,1,10);for(let f of[-1,1])t.cyl(e,f*.2,.36,0,.05,.045,.24,6,0,f*.18),t.sph(c,f*.225,.35,.01,.05,1,1,1,8);if(t.sph(c,0,.8,0,.19,1,.97,1,14),s!==null&&(t.sph(u?14211280:s,0,.85,-.03,.195,1,.88,1,12),t.sph(u?14211280:s,0,.81,-.07,.19,1,.9,.9,10)),l&&t.sph(s,0,.66,-.1,.17,1,1.1,.6,10),h)for(let f of[-1,1])t.sph(s,f*.2,.8,-.05,.07,1,1,1,8),t.sph(16734858,f*.18,.86,-.05,.035,1,1,1,6);for(let f of[-1,1])t.sph(2760728,f*.065,.81,.17,.024,1,1.2,.6,6),t.sph(16751264,f*.11,.75,.15,.035,1,.6,.5,6);if(t.sph(12605498,0,.74,.18,.02,1.6,.6,.6,6),r==="straw"&&(t.cone(15255674,0,.93,0,.38,.22,16),t.cyl(13146698,0,.92,0,.38,.38,.015,16),t.cyl(14178874,0,.94,0,.2,.2,.03,14)),r==="cap"&&(t.sph(n.capCol||16765498,0,.9,0,.2,1,.6,1,12),t.box(n.capCol||16765498,0,.9,.15,.2,.03,.18)),o==="hoe"&&(t.cyl(10119742,.24,.35,0,.025,.025,.75,5,-.25,0),t.box(10133672,.24,1.02,-.17,.14,.04,.12)),o==="basket"&&(t.cyl(13145434,0,.38,-.22,.15,.19,.3,10),t.cyl(6991936,0,.66,-.22,.15,.15,.04,10),t.sph(6991936,0,.7,-.22,.13,1,.5,1,8)),o==="bag"&&(t.box(n.bagCol||5814344,.27,.12,.04,.16,.2,.1),t.sph(16738874,.27,.34,.04,.05,1,1,1,6),t.sph(16765498,.3,.33,.06,.045,1,1,1,6),t.cyl(4880944,.25,.33,.06,.012,.012,.12,4)),o==="backpack"&&(t.box(n.packCol||3836632,0,.32,-.2,.24,.28,.12),t.box(16765498,0,.36,-.27,.12,.08,.02)),o==="cane"&&t.cyl(8016432,.24,0,.1,.022,.022,.38,5),n.sash&&(t.add(new sn(.07,.46,.2).toNonIndexed(),15217210,0,.44,0,1,1,1.05,0,0,.62),t.sph(16765498,.07,.5,.165,.05,1,1,.5,10),t.sph(16771488,.07,.5,.19,.025,1,1,.5,8)),n.bob){t.sph(s,0,.84,-.06,.215,1,.92,.95,12);for(let f of[-1,1])t.sph(s,f*.165,.74,-.01,.085,1,1.5,1,10);t.sph(s,0,.96,.06,.16,1,.32,.75,10),t.sph(s,.08,.93,.13,.08,1.4,.35,.6,8)}if(n.pearls)for(let f=0;f<9;f++){let d=-1.1+f*.275;t.sph(16775408,Math.sin(d)*.12,.62-Math.cos(d)*.04,Math.cos(d)*.12+.02,.022,1,1,1,6)}if(n.lapel)for(let f of[-1,1])t.box(16777215,f*.045,.38,.15,.07,.22,.02,f*.25);if(n.apron&&t.box(n.apron,0,.12,.13,.26,.42,.03),n.weave)for(let f=0;f<5;f++)t.cyl([13116458,1710618,16777215,13116458,1710618][f],0,.3+f*.055,0,.177-f*.003,.177,.05,14);if(n.headband&&(t.cyl(13116458,0,.86,0,.198,.198,.05,14),t.cyl(16777215,0,.88,0,.2,.2,.012,14)),n.chefCap&&(t.cyl(16777215,0,.92,0,.17,.17,.12,12),t.sph(16777215,0,1.07,0,.2,1,.6,1,12)),o==="tray"){t.cyl(13145434,0,.44,.28,.2,.2,.04,14);for(let f=0;f<7;f++)t.sph(5810234,Math.cos(f*2.4)*.12,.49,.28+Math.sin(f*2.4)*.12,.05,1.5,.4,.8,6)}if(o==="crate"){t.box(13145434,0,.36,.26,.36,.18,.24);for(let f=0;f<6;f++)t.sph([16730682,16765498,8377434,16751135,8007592,8377434][f],-.12+f%3*.12,.56,.21+Math.floor(f/3)*.1,.06,1,1,1,8)}if(o==="carrier"){t.cyl(12094026,0,.4,-.24,.18,.13,.42,10);for(let f=0;f<4;f++)t.cyl(9071156,0,.45+f*.09,-.24,.16-f*.005,.16,.02,10);t.sph(6991936,0,.84,-.24,.13,1,.5,1,8)}return o==="camera"&&(t.box(2763306,0,.5,.17,.16,.1,.06),t.cyl(5592405,0,.55,.2,.04,.04,.06,8,Math.PI/2)),t.merge()}function F1(){let n=new Je,t=16768192,e=3810328,i=5913128,s=15231610,r=14178924,a=15986934,o=16765514;for(let l of[-1,1])n.cyl(t,l*.07,.06,0,.045,.045,.26,10),n.sph(13120074,l*.07,.05,.04,.06,1,.55,1.6,10),n.cyl(13120074,l*.07,0,-.03,.02,.02,.06,6);n.add(new En(.15,.25,.3,18).toNonIndexed(),a,0,.33,0),n.cyl(15262446,0,.18,0,.25,.25,.02,18),n.add(new En(.14,.16,.28,16).toNonIndexed(),s,0,.6,0),n.add(new En(.165,.19,.07,16).toNonIndexed(),r,0,.45,0),n.sph(s,0,.74,0,.15,1,.42,.95,14);for(let l of[-1,1])n.add(new sn(.06,.2,.02).toNonIndexed(),r,l*.05,.66,.135,1,1,1,0,0,-l*.35);n.add(new wn(.07,.13,3).toNonIndexed(),16777215,0,.68,.13,1,1,.3,Math.PI,0,0);for(let l=0;l<2;l++)n.sph(o,0,.52+l*.07,.152,.016,1,1,.5,8);n.cyl(s,.17,.48,0,.045,.04,.26,8,0,-.2),n.sph(t,.2,.47,.01,.045,1,1,1,10),n.cyl(s,-.17,.68,0,.045,.04,.24,8,0,2.5),n.sph(t,-.27,.88,.02,.05,1,1,1,10),n.add(new sn(.06,.44,.02).toNonIndexed(),16777215,0,.6,.145,1,1,1,0,0,.6),n.add(new sn(.035,.44,.022).toNonIndexed(),15217210,0,.6,.15,1,1,1,0,0,.6);for(let l=0;l<8;l++){let h=l/8*Math.PI*2;n.sph(o,.1+Math.cos(h)*.035,.66+Math.sin(h)*.035,.16,.022,1,1,.5,6)}n.sph(15217210,.1,.66,.17,.025,1,1,.5,8);for(let l=0;l<11;l++){let h=-1.15+l*.23;n.sph(16775922,Math.sin(h)*.11,.8-Math.cos(h)*.035,Math.cos(h)*.1+.03,.02,1,1,1,8)}n.cyl(t,0,.8,0,.05,.05,.06,10),n.sph(t,0,1,0,.2,1,.98,.98,18);for(let l of[-1,1]){n.sph(2758672,l*.07,1,.175,.036,.9,1.25,.55,12),n.sph(5913130,l*.07,.99,.19,.022,.9,1.1,.4,10),n.sph(16777215,l*.07+.012,1.015,.205,.011,1,1,.5,6),n.sph(16777215,l*.07-.01,.985,.204,.006,1,1,.5,5);for(let h=0;h<3;h++)n.add(new sn(.008,.03,.006).toNonIndexed(),2758672,l*(.07+(h-1)*.022),1.045,.18,1,1,1,0,0,l*(h-1)*-.5);n.add(new sn(.06,.012,.008).toNonIndexed(),e,l*.072,1.075,.18,1,1,1,0,0,l*-.15),n.sph(16751272,l*.115,.94,.16,.035,1.2,.7,.4,10),n.sph(o,l*.195,.94,0,.022,1,1,1,8)}let c=[];for(let l=0;l<7;l++){let h=-.6+l*.2;c.push([Math.sin(h)*.045,.92-Math.cos(h)*.018,.193])}n.add(new es(new Sn(c.map(l=>new D(...l))),10,.007,5).toNonIndexed(),13650522),n.sph(16761e3,0,.965,.2,.014,1,.8,.6,6),n.sph(e,0,1.06,-.04,.215,1,.9,.95,16),n.sph(e,-.04,1.15,.06,.17,1.15,.42,.85,14),n.sph(i,.06,1.17,.07,.12,1.1,.3,.7,12);for(let l of[-1,1])n.sph(e,l*.17,.94,-.02,.09,.85,1.55,1,12),n.sph(i,l*.16,.86,.04,.06,.9,.8,.9,10);return n.sph(e,0,.92,-.15,.15,1.2,1.3,.7,12),n.sph(8018504,0,1.2,0,.09,1.2,.2,.6,10),n.sph(16777215,.11,1.14,.13,.03,1.2,.6,.6,8),n.sph(16765514,.11,1.14,.14,.014,1,1,1,6),n.merge()}var ii=[{id:"farmerM",scale:1,speed:.9,stay:!0,o:{shirt:4885208,pants:4868698,hat:"straw",prop:"hoe",skin:Tl}},{id:"farmerW",scale:.96,speed:.85,stay:!0,o:{shirt:16747184,pants:5921402,hat:"straw",prop:"basket"}},{id:"shopperW",scale:1,speed:1.1,o:{shirt:16753210,pants:3824296,hair:5913120,longHair:!0,prop:"bag",bagCol:5814344}},{id:"shopperM",scale:1.04,speed:1.15,o:{shirt:16316656,pants:3820170,prop:"bag",bagCol:15223354,hair:2760736}},{id:"kidBoy",scale:.66,speed:1.45,o:{shirt:15223354,pants:3828440,hat:"cap",capCol:16765498,prop:"backpack"}},{id:"kidGirl",scale:.63,speed:1.35,o:{shirt:16777215,pants:16766640,skirt:16743088,hair:3811872,pig:!0}},{id:"grandpa",scale:.97,speed:.6,o:{shirt:6991984,pants:8022618,grey:!0,prop:"cane",skin:Tl}},{id:"mayor",scale:1.3,speed:.9,o:{shirt:3108776,pants:3811882,skirt:2310250,hair:2759188,bob:!0,sash:!0,pearls:!0,lapel:!0,skin:_f}},{id:"tourist",scale:1,speed:1,o:{shirt:5226696,pants:14207136,hat:"cap",capCol:16777215,prop:"camera"}},{id:"indigenous",scale:1,speed:.85,stay:!0,o:{shirt:16052196,pants:2763306,weave:!0,headband:!0,prop:"carrier",skin:Tl}},{id:"processor",scale:1,speed:.8,stay:!0,o:{shirt:16316664,pants:5921386,apron:4161354,chefCap:!0,prop:"tray"}},{id:"vendor",scale:1.02,speed:.95,o:{shirt:16765498,pants:3820138,apron:14178874,hat:"cap",capCol:14178874,prop:"crate"}}];function yf(n,t,e,{perIsland:i=2,visitors:s=26,seed:r=7,extra:a=[]}={}){let o=r,c=()=>((o=Math.imul(o^o>>>15,2246822507)+12345|0)>>>0)/4294967296,l=ii.map(b=>b.id==="mayor"?F1():O1(b.o)),h=[],u=t.nodes.filter(b=>b.hub);for(let b of u)for(let H=0;H<i;H++)h.push({t:H%2,home:b.island,node:b});for(let b=0;b<s;b++)h.push({t:2+b%6,node:u[Math.floor(c()*u.length)]});let f=ii.findIndex(b=>b.id==="mayor");h.forEach(b=>{b.t>=f&&b.t++}),h.push({t:f,node:u[Math.floor(c()*u.length)],mayor:!0});for(let b of a){let H=ii.findIndex($=>$.id===b.type),K=u.find($=>$.island===b.island);H>=0&&K&&h.push({t:H,home:b.island,node:K})}let d=ii.map((b,H)=>h.filter(K=>K.t===H).length),g=l.map((b,H)=>{let K=new $s(b,e,Math.max(1,d[H]));return K.count=d[H],K.frustumCulled=!1,n.add(K),K}),x=ii.map(()=>0);for(let b of h){let H=ii[b.t];b.slot=x[b.t]++,b.speed=H.speed*(.85+c()*.3),b.scale=H.scale,b.phase=c()*10,b.wait=c()*3,m(b,!0)}function m(b,H){let K=b.node,$=K.edges.filter(V=>!(ii[b.t].stay&&V.bridge));$.length>1&&b.prevEdge&&($=$.filter(V=>V!==b.prevEdge)),$.length||($=K.edges);let N=$[Math.floor(c()*$.length)];b.edge=N,b.fwd=N.a===K,b.d=H?c()*N.len*.8:0,b.prevEdge=N}let p=new be,T=new xn,y=new Fi,R=new D,O=new D,L=new D;function P(b,H,K){let $=b.pts,N=b.cum,V=1;for(;V<$.length-1&&N[V]<H;)V++;let j=Math.min(1,Math.max(0,(H-N[V-1])/(N[V]-N[V-1]||1)));return K.lerpVectors($[V-1],$[V],j)}function Z(b,H,K){for(let $ of h){let N=!1;$.wait>0?$.wait-=b:K&&(N=!0,$.d+=$.speed*b,$.d>=$.edge.len&&($.node=$.fwd?$.edge.b:$.edge.a,$.wait=$.node.hub?1+c()*3:c()<.3?.6:0,m($)));let V=$.edge,j=Math.min($.d,V.len),ut=$.fwd?j:V.len-j;P(V,ut,O),P(V,Math.min(V.len,Math.max(0,ut+($.fwd?.15:-.15))),L);let ot=Math.atan2(L.x-O.x,L.z-O.z);(N||$.yaw===void 0)&&($.yaw=ot),$.phase+=b*$.speed*9*(N?1:0);let st=N?Math.abs(Math.sin($.phase))*.07*$.scale:0,xt=N?Math.sin($.phase)*.09:0;$.x=O.x,$.y=O.y,$.z=O.z,y.set(0,$.yaw,xt,"YXZ"),T.setFromEuler(y),O.y+=st,p.compose(O,T,R.set($.scale,$.scale,$.scale)),g[$.t].setMatrixAt($.slot,p)}g.forEach($=>$.instanceMatrix.needsUpdate=!0)}Z(0,0,!1);let S=0;return l.forEach((b,H)=>S+=b.attributes.position.count/3*d[H]),{update:Z,walkers:h,meshes:g,tris:Math.round(S)}}var Ao={farmerM:{icon:"\u{1F468}\u200D\u{1F33E}",name:"\u8FB2\u592B",tag:"\u751F\u7522\u8005",cls:"pro",stage:"\u751F\u7522",does:"\u7167\u9867\u571F\u5730\u548C\u4F5C\u7269\uFF0C\u770B\u5929\u6C23\u6C7A\u5B9A\u4EC0\u9EBC\u6642\u5019\u64AD\u7A2E\u3001\u63A1\u6536\u3002",you:"\u5403\u98EF\u524D\u60F3\u4E00\u60F3\uFF1A\u9019\u662F\u8AB0\u7A2E\u7684\uFF1F",principle:"\u652F\u6301\u8A8D\u540C\u5728\u5730\u8FB2\u696D"},farmerW:{icon:"\u{1F469}\u200D\u{1F33E}",name:"\u8FB2\u5A66",tag:"\u751F\u7522\u8005",cls:"pro",stage:"\u751F\u7522",does:"\u63A1\u6536\u3001\u6311\u9078\u3001\u6574\u7406\u8FB2\u7522\uFF0C\u628A\u597D\u54C1\u8CEA\u7684\u98DF\u7269\u9001\u51FA\u7522\u5730\u3002",you:"\u8A8D\u8B58\u7576\u5B63\u852C\u679C\uFF0C\u512A\u5148\u9078\u5728\u5730\u98DF\u6750\u3002",principle:"\u6DF1\u5316\u98F2\u98DF\u9023\u7D50\u8FB2\u696D"},grandpa:{icon:"\u{1F474}",name:"\u963F\u516C",tag:"\u8001\u8FB2\u30FB\u50B3\u627F\u8005",cls:"pro",stage:"\u751F\u7522",does:"\u7A2E\u690D\u8207\u505A\u83DC\u7684\u7D93\u9A57\uFF0C\u4E00\u4EE3\u4E00\u4EE3\u6559\u7D66\u5E74\u8F15\u4EBA\u3002",you:"\u554F\u554F\u5BB6\u4E2D\u9577\u8F29\uFF1A\u5C0F\u6642\u5019\u90FD\u5403\u4EC0\u9EBC\uFF1F",principle:"\u50B3\u627F\u8207\u5275\u65B0\u98F2\u98DF\u6587\u5316"},indigenous:{icon:"\u{1F304}",name:"\u539F\u4F4F\u6C11\u65CF\u8FB2\u53CB",tag:"\u5C71\u6797\u667A\u6167\u30FB\u751F\u7522\u8005",cls:"ind",stage:"\u751F\u7522",does:"\u5357\u6295\u6709\u5E03\u8FB2\u3001\u8CFD\u5FB7\u514B\u3001\u6CF0\u96C5\u3001\u90B5\u7B49\u65CF\u7FA4\uFF0C\u9806\u8457\u5C71\u6797\u548C\u5B63\u7BC0\u8015\u4F5C\uFF0C\u4FDD\u6709\u50B3\u7D71\u4F5C\u7269\u8207\u98F2\u98DF\u77E5\u8B58\u3002",you:"\u5C0A\u91CD\u4E0D\u540C\u65CF\u7FA4\u7684\u98F2\u98DF\u6587\u5316\uFF0C\u6709\u6A5F\u6703\u8ACB\u65CF\u4EBA\u5206\u4EAB\u3002",principle:"\u50B3\u627F\u8207\u5275\u65B0\u98F2\u98DF\u6587\u5316"},processor:{icon:"\u{1F375}",name:"\u88FD\u8336\u5E2B",tag:"\u52A0\u5DE5\u8005",cls:"proc",stage:"\u52A0\u5DE5",does:"\u8336\u83C1\u8981\u7D93\u904E\u840E\u51CB\u3001\u63C9\u637B\u3001\u70D8\u7119\u624D\u6703\u8B8A\u6210\u8336\u8449\uFF1B\u52A0\u5DE5\u8B93\u98DF\u7269\u4FDD\u5B58\u66F4\u4E45\u3001\u8B8A\u5316\u66F4\u591A\u3002",you:"\u770B\u770B\u5305\u88DD\u4E0A\u7684\u7522\u5730\u548C\u52A0\u5DE5\u65B9\u5F0F\u3002",principle:"\u50B3\u627F\u8207\u5275\u65B0\u98F2\u98DF\u6587\u5316"},vendor:{icon:"\u{1F9FA}",name:"\u6524\u5546",tag:"\u8CA9\u552E\u8005",cls:"sell",stage:"\u8CA9\u552E",does:"\u628A\u8FB2\u7522\u5E36\u5230\u5E02\u5834\uFF0C\u9023\u7D50\u8FB2\u6C11\u548C\u6D88\u8CBB\u8005\u3002",you:"\u8CB7\u6771\u897F\u6642\u554F\u554F\uFF1A\u9019\u662F\u54EA\u88E1\u7A2E\u7684\uFF1F\u662F\u7576\u5B63\u55CE\uFF1F",principle:"\u5730\u7522\u5730\u6D88\u6C38\u7E8C\u8FB2\u696D"},shopperW:{icon:"\u{1F6D2}",name:"\u5ABD\u5ABD",tag:"\u6D88\u8CBB\u8005",cls:"con",stage:"\u6D88\u8CBB",does:"\u70BA\u5BB6\u4EBA\u6311\u9078\u98DF\u7269\uFF0C\u6C7A\u5B9A\u9910\u684C\u4E0A\u5403\u4EC0\u9EBC\u3002",you:"\u5403\u591A\u5C11\u3001\u8CB7\u591A\u5C11\uFF0C\u4E0D\u6D6A\u8CBB\u98DF\u7269\u3002",principle:"\u73CD\u60DC\u98DF\u7269\u6E1B\u5C11\u6D6A\u8CBB"},shopperM:{icon:"\u{1F6CD}\uFE0F",name:"\u7238\u7238",tag:"\u6D88\u8CBB\u8005",cls:"con",stage:"\u6D88\u8CBB",does:"\u9078\u8CFC\u5728\u5730\u3001\u7576\u5B63\u7684\u98DF\u6750\uFF0C\u652F\u6301\u9644\u8FD1\u7684\u8FB2\u6C11\u3002",you:"\u8DDF\u5BB6\u4EBA\u4E00\u8D77\u901B\u5E02\u5834\u3001\u5217\u8CFC\u7269\u6E05\u55AE\u3002",principle:"\u5730\u7522\u5730\u6D88\u6C38\u7E8C\u8FB2\u696D"},tourist:{icon:"\u{1F4F7}",name:"\u89C0\u5149\u5BA2",tag:"\u6D88\u8CBB\u8005\u30FB\u9AD4\u9A57\u8005",cls:"con",stage:"\u6D88\u8CBB",does:"\u5230\u7522\u5730\u65C5\u884C\uFF0C\u53C3\u52A0\u63A1\u6536\u548C\u624B\u4F5C\u9AD4\u9A57\u3002",you:"\u53C3\u52A0\u8FB2\u5834\u9AD4\u9A57\uFF0C\u89AA\u773C\u770B\u770B\u98DF\u7269\u600E\u9EBC\u9577\u5927\u3002",principle:"\u6DF1\u5316\u98F2\u98DF\u9023\u7D50\u8FB2\u696D"},kidBoy:{icon:"\u{1F392}",name:"\u5C0F\u5B78\u751F",tag:"\u5B78\u7FD2\u8005",cls:"kid",stage:"\u5B78\u7FD2",does:"\u5728\u5B78\u6821\u83DC\u5712\u548C\u98DF\u8FB2\u8AB2\u5B78\u7A2E\u83DC\u3001\u5B78\u5403\u5F97\u5065\u5EB7\u3002",you:"\u6BCF\u5929\u5747\u8861\u5403\u4E94\u5927\u985E\u98DF\u7269\u3002",principle:"\u57F9\u990A\u5747\u8861\u98F2\u98DF\u89C0\u5FF5"},kidGirl:{icon:"\u{1F467}",name:"\u5C0F\u670B\u53CB",tag:"\u5B78\u7FD2\u8005",cls:"kid",stage:"\u5B78\u7FD2",does:"\u5C0D\u6BCF\u9053\u83DC\u90FD\u5F88\u597D\u5947\uFF0C\u60F3\u77E5\u9053\u5B83\u5F9E\u54EA\u88E1\u4F86\u3002",you:"\u628A\u4ECA\u5929\u5403\u5230\u7684\u98DF\u7269\u756B\u4E0B\u4F86\u6216\u8A18\u4E0B\u4F86\u3002",principle:"\u57F9\u990A\u5747\u8861\u98F2\u98DF\u89C0\u5FF5"},mayor:{icon:"\u{1F33E}",name:"\u98DF\u8FB2\u5927\u4F7F",tag:"\u63A8\u5EE3\u8005\u30FB\u4E32\u9023\u8005",cls:"may",stage:"\u4E32\u9023",does:"\u5E36\u5927\u5BB6\u8D70\u8A2A 13 \u500B\u9109\u93AE\uFF0C\u4ECB\u7D39\u98DF\u7269\u7684\u6545\u4E8B\uFF0C\u628A\u751F\u7522\u8005\u548C\u6D88\u8CBB\u8005\u9023\u5728\u4E00\u8D77\u3002",you:"\u628A\u4F60\u5B78\u5230\u7684\u98DF\u8FB2\u6545\u4E8B\u5206\u4EAB\u7D66\u5BB6\u4EBA\u3002",principle:"\u516D\u5927\u63A8\u52D5\u65B9\u91DD\u90FD\u4E32\u8D77\u4F86"}},vf=["\u751F\u7522","\u52A0\u5DE5","\u8CA9\u552E","\u6D88\u8CBB","\u5B78\u7FD2","\u4E32\u9023"];var Yt=n=>document.getElementById(n),si=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);var B1=.5,z1=4.2;async function k1(){let n=Yt("canvasHost"),t=null;try{t=await(await fetch("../shared/data/content.json")).json()}catch(_){console.warn(_)}let e=matchMedia("(pointer:coarse)").matches||(navigator.deviceMemory||8)<=4,i=new Pr({antialias:!e,powerPreference:"high-performance",preserveDrawingBuffer:!0});i.setPixelRatio(Math.min(devicePixelRatio,e?1.25:1.75)),i.outputColorSpace=qe,n.append(i.domElement),i.domElement.style.touchAction="none",Object.assign(i.domElement.style,{width:"100%",height:"100%",display:"block"});let s=new Ka,r;s.add(new ve(new Tn(500,24,12),r=new Wn({side:un,depthWrite:!1,uniforms:{ca:{value:new Wt(1,.95,.84)},cb:{value:new Wt(.66,.86,.97)},cc:{value:new Wt(.42,.7,.93)}},vertexShader:"varying vec3 v;void main(){v=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 ca,cb,cc;varying vec3 v;void main(){float h=v.y;vec3 k=mix(ca,cb,smoothstep(-.1,.25,h));k=mix(k,cc,smoothstep(.2,.8,h));gl_FragColor=vec4(pow(k,vec3(1./2.2)),1.);}"})));let a=new lo(16777215,12572832,2);s.add(a);let o=new ho(16773848,2.2);o.position.set(-40,90,60),s.add(o);let c=new gn(36,1,1,1400),l={p:new D,t:new D},h=new _o(c,i.domElement);h.enableDamping=!0,h.dampingFactor=.07,h.minDistance=9,h.maxDistance=260,h.maxPolarAngle=Math.PI*.58,h.target.copy(l.t);let u=.24,f=2.05,d=Bi.map(_=>mf(_.town)),g=0;d.forEach(_=>{g=Math.max(g,6.3/(Math.pow(_.area,-u)*_.min*.92))});let x=Bi.map((_,C)=>{let I=d[C],X=g*Math.pow(I.area,-u),G=gf(I,X);return{x:I.cx*f,z:I.cy*f,x0:I.cx*f,z0:I.cy*f,O:G,R:Math.min(12,X*I.min*.92),Rmax:X*I.max,sc:X}}),m=(_,C)=>{let I=C.x-_.x,X=C.z-_.z,G=Math.hypot(I,X)||1,lt=Math.atan2(X,I);return{d:G,dx:I/G,dz:X/G,need:_.O(lt)+C.O(lt+Math.PI)}};for(let _=0;_<500;_++){let C=0;for(let I=0;I<x.length;I++)for(let X=I+1;X<x.length;X++){let G=x[I],lt=x[X],it=m(G,lt),bt=it.need+z1;if(it.d<bt){let ht=(bt-it.d)/2*.5;G.x-=it.dx*ht,G.z-=it.dz*ht,lt.x+=it.dx*ht,lt.z+=it.dz*ht,C++}}for(let I of x)I.x+=(I.x0-I.x)*.004,I.z+=(I.z0-I.z)*.004;if(!C&&_>50)break}let p=(()=>{let _=[0,0,0,0,0,0],C=[0,0,0],I=[0,0,0],X=Bi.map((ht,gt)=>[ht.mx,ht.my,1,x[gt].x,x[gt].z]),G=[[0,0,0],[0,0,0],[0,0,0]];for(let ht of X)for(let gt=0;gt<3;gt++){for(let Dt=0;Dt<3;Dt++)G[gt][Dt]+=ht[gt]*ht[Dt];C[gt]+=ht[gt]*ht[3],I[gt]+=ht[gt]*ht[4]}let lt=(ht,gt)=>{let Dt=ht.map((Ht,re)=>[...Ht,gt[re]]);for(let Ht=0;Ht<3;Ht++){let re=Ht;for(let ne=Ht+1;ne<3;ne++)Math.abs(Dt[ne][Ht])>Math.abs(Dt[re][Ht])&&(re=ne);[Dt[Ht],Dt[re]]=[Dt[re],Dt[Ht]];for(let ne=0;ne<3;ne++)if(ne!==Ht){let Rt=Dt[ne][Ht]/Dt[Ht][Ht];for(let ae=Ht;ae<4;ae++)Dt[ne][ae]-=Rt*Dt[Ht][ae]}}return Dt.map((Ht,re)=>Ht[3]/Ht[re])},it=lt(G,C),bt=lt(G,I);return(ht,gt)=>[it[0]*ht+it[1]*gt+it[2],bt[0]*ht+bt[1]*gt+bt[2]]})(),T=()=>{};{let _=1e9,C=-1e9,I=1e9,X=-1e9;for(let bt of x)for(let ht=0;ht<36;ht++){let gt=ht/36*Math.PI*2,Dt=bt.O(gt),Ht=bt.x+Math.cos(gt)*Dt,re=bt.z+Math.sin(gt)*Dt;_=Math.min(_,Ht),C=Math.max(C,Ht),I=Math.min(I,re),X=Math.max(X,re)}let G=(_+C)/2,lt=(I+X)/2,it=Math.max(C-_,X-I)/2*1.1;T=()=>{let bt=Math.max(1,n.clientWidth)/Math.max(1,n.clientHeight),ht=bt>1.8,gt=ht?-3:-10,Dt=ht?1.68:1.75,Ht=ht?lt-1:lt-5;l.t.set(G+gt,0,Ht),l.p.set(G+gt,it*Dt,Ht+it*Dt*1.29)},T(),c.position.copy(l.p),h.target.copy(l.t)}let y,R=vi().toon;{let _=[];for(let Rt of x)for(let ae=0;ae<48;ae++){let ge=ae/48*Math.PI*2,se=Rt.O(ge)+7;_.push([Rt.x+Math.cos(ge)*se,Rt.z+Math.sin(ge)*se])}_.sort((Rt,ae)=>Rt[0]-ae[0]||Rt[1]-ae[1]);let C=(Rt,ae,ge)=>(ae[0]-Rt[0])*(ge[1]-Rt[1])-(ae[1]-Rt[1])*(ge[0]-Rt[0]),I=[],X=[];for(let Rt of _){for(;I.length>1&&C(I[I.length-2],I[I.length-1],Rt)<=0;)I.pop();I.push(Rt)}for(let Rt of _.slice().reverse()){for(;X.length>1&&C(X[X.length-2],X[X.length-1],Rt)<=0;)X.pop();X.push(Rt)}let G=I.slice(0,-1).concat(X.slice(0,-1)).map(Rt=>[Rt[0],-Rt[1]]),lt=new kr(G.map(Rt=>new Mt(Rt[0],Rt[1]))),it=new oo(lt,{depth:1.6,bevelEnabled:!0,bevelThickness:.6,bevelSize:1.2,bevelSegments:2,curveSegments:8});it.rotateX(Math.PI/2),it.translate(0,-24,0),y=new _i({color:16774876,gradientMap:R.gradientMap});let bt=new ve(it,y);s.add(bt);let ht=new Sn([[84,24],[72,29],[62,33],[52,31],[43,31],[33,35],[22,37],[8,36]].map(Rt=>{let ae=p(...Rt);return new D(ae[0],-22.3,ae[1])})).getPoints(80),gt=[],Dt=[];for(let Rt=0;Rt<ht.length;Rt++){let ae=ht[Rt],ge=ht[Math.min(ht.length-1,Rt+1)],se=ht[Math.max(0,Rt-1)],Me=ge.x-se.x,Zn=ge.z-se.z,ai=Math.hypot(Me,Zn)||1;Me/=ai,Zn/=ai;let gs=1.4+Rt*.02;gt.push(ae.x-Zn*gs,ae.y,ae.z+Me*gs,ae.x+Zn*gs,ae.y,ae.z-Me*gs)}for(let Rt=0;Rt<ht.length-1;Rt++)Dt.push(Rt*2,Rt*2+1,Rt*2+2,Rt*2+1,Rt*2+3,Rt*2+2);let Ht=new Ie;Ht.setAttribute("position",new ye(gt,3)),Ht.setIndex(Dt),Ht.computeVertexNormals(),s.add(new ve(Ht,new Qn({color:8376560,side:Ln})));let re=new ve(new En(2.6,2.6,.1,20),new Qn({color:8376560})),ne=p(64.5,50);re.position.set(ne[0]+4,-22.3,ne[1]-3),s.add(re)}let O=[];for(let _=0;_<x.length;_++)for(let C=_+1;C<x.length;C++){let I=m(x[_],x[C]);O.push({i:_,j:C,gap:I.d-I.need})}O.sort((_,C)=>_.gap-C.gap);let L=x.map((_,C)=>C),P=_=>L[_]===_?_:L[_]=P(L[_]),Z=[],S=x.map(()=>0),b=(_,C,I,X)=>{let G=(lt,it,bt)=>Math.sign((it.x-lt.x)*(bt.z-lt.z)-(it.z-lt.z)*(bt.x-lt.x));return G(_,C,I)!==G(_,C,X)&&G(I,X,_)!==G(I,X,C)},H=(_,C)=>Math.atan2(x[C].z-x[_].z,x[C].x-x[_].x),K=(_,C,I=.75)=>Z.every(X=>{if(X.i!==_&&X.j!==_)return!0;let G=X.i===_?H(_,X.j):H(_,X.i),lt=Math.abs(C-G)%(Math.PI*2);return lt=Math.min(lt,Math.PI*2-lt),lt>I}),$=(_,C)=>Z.some(I=>I.i!==_&&I.i!==C&&I.j!==_&&I.j!==C&&b(x[_],x[C],x[I.i],x[I.j])),N=[["\u5357\u6295\u5E02","\u8349\u5C6F\u93AE"],["\u5357\u6295\u5E02","\u540D\u9593\u9109"],["\u5357\u6295\u5E02","\u4E2D\u5BEE\u9109"],["\u57D4\u91CC\u93AE","\u9B5A\u6C60\u9109"],["\u57D4\u91CC\u93AE","\u570B\u59D3\u9109"],["\u57D4\u91CC\u93AE","\u4EC1\u611B\u9109"],["\u8349\u5C6F\u93AE","\u4E2D\u5BEE\u9109"],["\u8349\u5C6F\u93AE","\u570B\u59D3\u9109"],["\u7AF9\u5C71\u93AE","\u96C6\u96C6\u93AE"],["\u7AF9\u5C71\u93AE","\u540D\u9593\u9109"],["\u7AF9\u5C71\u93AE","\u9E7F\u8C37\u9109"],["\u7AF9\u5C71\u93AE","\u4FE1\u7FA9\u9109"],["\u96C6\u96C6\u93AE","\u540D\u9593\u9109"],["\u96C6\u96C6\u93AE","\u9E7F\u8C37\u9109"],["\u96C6\u96C6\u93AE","\u4E2D\u5BEE\u9109"],["\u96C6\u96C6\u93AE","\u6C34\u91CC\u9109"],["\u540D\u9593\u9109","\u4E2D\u5BEE\u9109"],["\u9E7F\u8C37\u9109","\u6C34\u91CC\u9109"],["\u9E7F\u8C37\u9109","\u4FE1\u7FA9\u9109"],["\u4E2D\u5BEE\u9109","\u570B\u59D3\u9109"],["\u4E2D\u5BEE\u9109","\u6C34\u91CC\u9109"],["\u9B5A\u6C60\u9109","\u570B\u59D3\u9109"],["\u9B5A\u6C60\u9109","\u6C34\u91CC\u9109"],["\u9B5A\u6C60\u9109","\u4FE1\u7FA9\u9109"],["\u9B5A\u6C60\u9109","\u4EC1\u611B\u9109"],["\u570B\u59D3\u9109","\u6C34\u91CC\u9109"],["\u570B\u59D3\u9109","\u4EC1\u611B\u9109"],["\u6C34\u91CC\u9109","\u4FE1\u7FA9\u9109"],["\u4FE1\u7FA9\u9109","\u4EC1\u611B\u9109"]],V=_=>Bi.findIndex(C=>C.town===_),j=(_,C)=>N.some(([I,X])=>V(I)===_&&V(X)===C||V(I)===C&&V(X)===_),ut=O.filter(_=>j(_.i,_.j)),ot=_=>{Z.push(_),S[_.i]++,S[_.j]++,L[P(_.i)]=P(_.j)},st=[["\u4EC1\u611B\u9109","\u4FE1\u7FA9\u9109"]];for(let[_,C]of st){let I=ut.find(X=>X.i===V(_)&&X.j===V(C)||X.i===V(C)&&X.j===V(_));I&&ot(I)}for(let _ of ut)Z.includes(_)||!$(_.i,_.j)&&K(_.i,H(_.i,_.j),.42)&&K(_.j,H(_.j,_.i),.42)&&ot(_);for(let _ of ut)!Z.includes(_)&&P(_.i)!==P(_.j)&&ot(_);let xt=ut.filter(_=>!Z.includes(_)).map(_=>Bi[_.i].town+"\u2013"+Bi[_.j].town),_t=x.map((_,C)=>Z.filter(I=>I.i===C||I.j===C).map(I=>I.i===C?H(C,I.j):H(C,I.i))),ft=[],Q=[];Bi.forEach((_,C)=>{let I=t?.islands.find(gt=>gt.town===_.town),X=I?I.cards.map(gt=>gt.title):Array(8).fill("\u7A3B\u7C73"),G=xf(_,X,C,{bridgeAngles:_t[C],O:x[C].O,R:x[C].R}),lt=x[C].x,it=x[C].z,bt=_.lift*B1;G.group.position.set(lt,bt,it),s.add(G.group);let ht={def:_,c:I,r:G,x:lt,y:bt,z:it,phase:C*1.3,hover:0};ft.push(ht),G.meshes.forEach(gt=>Q.push(gt))});let pt=[],It=[],Nt=(_,C)=>{let I={pos:_,edges:[],...C};return pt.push(I),I},Ot=(_,C,I,X=!1)=>{let G=[0];for(let it=1;it<I.length;it++)G.push(G[it-1]+I[it].distanceTo(I[it-1]));let lt={a:_,b:C,pts:I,cum:G,len:G[G.length-1],bridge:X};return _.edges.push(lt),C.edges.push(lt),It.push(lt),lt},$t=[];ft.forEach((_,C)=>{let I=_.r,X=Nt(new D(_.x+I.hub[0],_.y+I.gy(I.hub[0],I.hub[1]),_.z+I.hub[1]),{hub:!0,island:C});$t[C]=I.ends.map(G=>{let lt=Nt(new D(_.x+G.x,_.y+I.gy(G.x,G.z)+.04,_.z+G.z),{island:C,ang:G.ang}),it=[];for(let bt=0;bt<=14;bt++){let ht=bt/14,gt=G.x+(I.hub[0]-G.x)*ht,Dt=G.z+(I.hub[1]-G.z)*ht;it.push(new D(_.x+gt,_.y+I.gy(gt,Dt)+.03,_.z+Dt))}return Ot(lt,X,it),lt})});let Jt=new Je,kt=(_,C)=>$t[_].findIndex(I=>Math.abs(I.ang-C)<1e-6);for(let _ of Z){let C=$t[_.i][kt(_.i,H(_.i,_.j))],I=$t[_.j][kt(_.j,H(_.j,_.i))];if(!C||!I)continue;let X=C.pos.clone(),G=I.pos.clone(),lt=Math.hypot(G.x-X.x,G.z-X.z),it=Math.max(8,Math.round(lt/.3)),bt=Math.min(.6,lt*.06),ht=[];for(let Rt=0;Rt<=it;Rt++){let ae=Rt/it;ht.push(new D(X.x+(G.x-X.x)*ae,X.y+(G.y-X.y)*ae-bt*Math.sin(Math.PI*ae),X.z+(G.z-X.z)*ae))}let gt=(G.x-X.x)/lt,Dt=(G.z-X.z)/lt,Ht=-Dt,re=gt,ne=Math.atan2(gt,Dt);for(let Rt=0;Rt<it;Rt++){let ae=ht[Rt],ge=ht[Rt+1],se=ae.clone().add(ge).multiplyScalar(.5),Me=-Math.atan2(ge.y-ae.y,Math.hypot(ge.x-ae.x,ge.z-ae.z));Jt.boxc(Rt%2?13145440:11566666,se.x,se.y-.03,se.z,1.15,.07,.26,ne,Me)}for(let Rt of[-1,1]){let ae=ht.map((se,Me)=>new D(se.x+Ht*Rt*.6,se.y+.78+Math.sin(Math.PI*Me/it)*.12,se.z+re*Rt*.6));Jt.geo(new es(new Sn(ae),it*2,.035,5),14200944);let ge=ht.map((se,Me)=>new D(se.x+Ht*Rt*.6,se.y+.36+Math.sin(Math.PI*Me/it)*.06,se.z+re*Rt*.6));Jt.geo(new es(new Sn(ge),it*2,.025,5),14200944);for(let se=0;se<=it;se+=3){let Me=ht[se];Jt.cyl(11040074,Me.x+Ht*Rt*.6,Me.y-.05,Me.z+re*Rt*.6,.025,.025,.8+Math.sin(Math.PI*se/it)*.12,5)}for(let se of[X,G])Jt.cyl(9067062,se.x+Ht*Rt*.62,se.y-.25,se.z+re*Rt*.62,.09,.08,1.25,8),Jt.sph(15222842,se.x+Ht*Rt*.62,se.y+1.02,se.z+re*Rt*.62,.1,1,1,1,8)}Ot(C,I,ht.map(Rt=>Rt.clone().setY(Rt.y+.01)),!0)}let te=new ve(Jt.merge(),vi().toon);s.add(te);let U=[];{let _=0,C=0;for(let lt of x)_+=lt.x/x.length,C+=lt.z/x.length;let I=17,X=()=>((I=Math.imul(I^I>>>15,2246822507)+12345|0)>>>0)/4294967296,G=[{r:350,h:[26,58],base:6265448,haze:.42,n:36},{r:405,h:[44,92],base:7312016,haze:.58,n:28},{r:465,h:[70,135],base:9085108,haze:.7,n:22}];for(let lt of G){let it=[];for(let ge=0;ge<lt.n;ge++)it.push({a:ge/lt.n*Math.PI*2+X()*.12,h:lt.h[0]+X()*(lt.h[1]-lt.h[0]),w:.12+X()*.16});let bt=720,ht=[],gt=[],Dt=[],Ht=ge=>{let se=8;for(let Me of it){let Zn=Math.abs(((ge-Me.a)%(Math.PI*2)+Math.PI*3)%(Math.PI*2)-Math.PI),ai=Math.max(0,1-Zn/Me.w);se=Math.max(se,Me.h*Math.pow(ai,.9)+3*Math.sin(ge*60+Me.a*9)*ai)}return se},re=-40;for(let ge=0;ge<=bt;ge++){let se=ge/bt*Math.PI*2,Me=Ht(se),Zn=_+Math.cos(se)*lt.r,ai=C+Math.sin(se)*lt.r,gs=lt.snow&&Me>lt.h[1]*lt.snow;ht.push(Zn,re,ai,Zn,Me*.55,ai,Zn,Me,ai);let Po=1.18,Do=.9,Uo=gs?1.3:.96;gt.push(Po,Po,Po,Do,Do,Do,Uo,Uo,Uo)}for(let ge=0;ge<bt;ge++){let se=ge*3,Me=se+3;Dt.push(se,Me,se+1,se+1,Me,Me+1,se+1,Me+1,se+2,se+2,Me+1,Me+2)}let ne=new Ie;ne.setAttribute("position",new ye(ht,3)),ne.setAttribute("color",new ye(gt,3)),ne.setIndex(Dt);let Rt=new Qn({vertexColors:!0,side:Ln,fog:!1}),ae=new ve(ne,Rt);ae.renderOrder=-1,s.add(ae),U.push({mt:Rt,base:new Wt(lt.base),haze:lt.haze})}}let St=new Je,rt=[],Et=(()=>{let _=document.createElement("canvas");_.width=_.height=64;let C=_.getContext("2d"),I=C.createRadialGradient(32,32,0,32,32,32);return I.addColorStop(0,"rgba(255,240,190,1)"),I.addColorStop(.25,"rgba(255,210,120,.55)"),I.addColorStop(1,"rgba(255,190,90,0)"),C.fillStyle=I,C.fillRect(0,0,64,64),new Br(_)})(),at=(_,C,I)=>{St.cyl(4866104,_,C,I,.07,.06,1.5,6),St.cyl(3813416,_,C+1.48,I,.16,.16,.05,8),St.cone(3813416,_,C+1.78,I,.2,.18,8),rt.push(new D(_,C+1.62,I))};for(let _ of pt)if(_.hub){let C=ft[_.island];for(let I=0;I<3;I++){let X=I/3*Math.PI*2+_.island,G=_.pos.x+Math.cos(X)*1.1,lt=_.pos.z+Math.sin(X)*1.1;at(G,C.y+C.r.gy(G-C.x,lt-C.z),lt)}}else if(_.ang!==void 0){let C=ft[_.island],I=_.pos.x-Math.cos(_.ang)*.9+Math.sin(_.ang)*.9,X=_.pos.z-Math.sin(_.ang)*.9-Math.cos(_.ang)*.9;at(I,C.y+C.r.gy(I-C.x,X-C.z),X)}s.add(new ve(St.merge(),vi().toon));let Xt=new Qn({color:14209208}),Lt=new $s(new Tn(.13,10,8),Xt,rt.length);rt.forEach((_,C)=>Lt.setMatrixAt(C,new be().makeTranslation(_.x,_.y,_.z))),s.add(Lt);let w=[],v=new Zs({map:Et,blending:Tr,depthWrite:!1,transparent:!0,opacity:0});for(let _ of rt){let C=new Ur(v);C.position.copy(_),C.scale.setScalar(3.4),s.add(C),w.push(C)}let W=new Zs({map:Et,blending:Tr,depthWrite:!1,transparent:!0,opacity:0,color:16760944});ft.forEach(_=>{let[C,I,X]=_.r.lmPos,G=new Ur(W);G.position.set(_.x+C,_.y+I-1.6,_.z+X),G.scale.setScalar(5),s.add(G)});let yt=(()=>{let C=new Float32Array(2700),I=5,X=()=>((I=Math.imul(I^I>>>15,2246822507)+12345|0)>>>0)/4294967296;for(let bt=0;bt<900;bt++){let ht=X()*Math.PI*2,gt=Math.acos(X()*.9+.08),Dt=450;C.set([Math.cos(ht)*Math.sin(gt)*Dt,Math.cos(gt)*Dt,Math.sin(ht)*Math.sin(gt)*Dt],bt*3)}let G=new Ie;G.setAttribute("position",new Ne(C,3));let lt=new Js({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1}),it=new Fr(G,lt);return s.add(it),lt})(),mt=new ve(new Tn(9,20,14),new Qn({color:16774872,transparent:!0,opacity:0}));mt.position.set(160,180,-320),s.add(mt);let nt=_=>new Wt(_),Pt={day:{a:nt(16773846),b:nt(11066359),c:nt(7058413),hs:nt(16777215),hg:nt(12572832),hi:2,sc:nt(16773848),si:2.2,sp:[-40,90,60],pl:nt(16774876),cl:nt(16777215),lt:0,st:0,exp:1},noon:{a:nt(16775398),b:nt(9229055),c:nt(4166898),hs:nt(16777215),hg:nt(13690536),hi:2.35,sc:nt(16777215),si:3.3,sp:[5,140,25],pl:nt(16775910),cl:nt(16777215),lt:0,st:0,exp:1.08},dusk:{a:nt(16754784),b:nt(15764620),c:nt(5918618),hs:nt(16758928),hg:nt(5914696),hi:1.05,sc:nt(16749128),si:2.1,sp:[-110,26,30],pl:nt(15912878),cl:nt(16765634),lt:.6,st:.15,exp:1},night:{a:nt(2502746),b:nt(1318208),c:nt(461598),hs:nt(5267624),hg:nt(1054760),hi:.42,sc:nt(10138879),si:.38,sp:[60,90,-40],pl:nt(3423842),cl:nt(8029876),lt:1,st:1,exp:1}},At=[[0,"night"],[5,"night"],[6.5,"dusk"],[8,"day"],[11,"noon"],[14,"noon"],[16,"day"],[17.6,"dusk"],[19,"night"],[24,"night"]],Ut=_=>{_=(_%24+24)%24;let C=0;for(;C<At.length-2&&At[C+1][0]<=_;)C++;let[I,X]=At[C],[G,lt]=At[C+1],it=(_-I)/(G-I||1);return[Pt[X],Pt[lt],it]},qt={a:new Wt,b:new Wt,c:new Wt,hs:new Wt,hg:new Wt,sc:new Wt,pl:new Wt,cl:new Wt,sp:new D},Gt=9,E=!1,k=.5,M=_=>_<5||_>=19?"\u{1F319} \u665A\u4E0A":_<7.2?"\u{1F305} \u6E05\u6668":_<10.5?"\u2600\uFE0F \u767D\u5929":_<14.5?"\u{1F31E} \u5927\u592A\u967D":_<16.8?"\u2600\uFE0F \u767D\u5929":"\u{1F307} \u508D\u665A",B="day",z={...Pt.day,a:Pt.day.a.clone(),b:Pt.day.b.clone(),c:Pt.day.c.clone(),hs:Pt.day.hs.clone(),hg:Pt.day.hg.clone(),sc:Pt.day.sc.clone(),pl:Pt.day.pl.clone(),cl:Pt.day.cl.clone(),sp:new D(-40,90,60)},q=new Set,ct=nt(14209208),dt=nt(16769162);function zt(_){let[C,I,X]=Ut(Gt);for(let lt of["a","b","c","hs","hg","sc","pl","cl"])qt[lt].copy(C[lt]).lerp(I[lt],X);for(let lt of["hi","si","lt","st","exp"])qt[lt]=C[lt]+(I[lt]-C[lt])*X;{let lt=(Gt-6)/12*Math.PI,it=Math.sin(lt);qt.sp.set(-Math.cos(lt)*110,Math.max(18,it*120),35),(Gt<5.5||Gt>18.5)&&qt.sp.set(60,90,-40)}let G=qt;z.a.lerp(G.a,_),z.b.lerp(G.b,_),z.c.lerp(G.c,_),z.hs.lerp(G.hs,_),z.hg.lerp(G.hg,_),z.sc.lerp(G.sc,_),z.pl.lerp(G.pl,_),z.cl.lerp(G.cl,_),z.sp.lerp(G.sp,_);for(let lt of["hi","si","lt","st","exp"])z[lt]+=(G[lt]-z[lt])*_;r.uniforms.ca.value.copy(z.a),r.uniforms.cb.value.copy(z.b),r.uniforms.cc.value.copy(z.c),a.color.copy(z.hs),a.groundColor.copy(z.hg),a.intensity=z.hi,o.color.copy(z.sc),o.intensity=z.si,o.position.copy(z.sp),y.color.copy(z.pl),vi().cloud.color.copy(z.cl),q.forEach(lt=>lt.color.copy(z.cl)),v.opacity=z.lt,W.opacity=z.lt*.85,Xt.color.copy(ct).lerp(dt,z.lt),yt.opacity=z.st,mt.material.opacity=z.st,i.toneMappingExposure=z.exp;for(let lt of U)lt.mt.color.copy(lt.base).lerp(z.b,lt.haze).multiplyScalar(.55+.45*(1-z.st));typeof Oe<"u"&&Oe==="winter"&&(r.uniforms.ca.value.lerp(new Wt(14673646),.45),r.uniforms.cb.value.lerp(new Wt(12109526),.4))}let Vt={day:9,noon:12.5,dusk:17.8,night:21},vt=Yt("tlRange"),F=Yt("tlClock"),Tt=Yt("tlPlay"),wt=()=>{let _=Math.floor(Gt),C=Math.floor((Gt-_)*60);F.innerHTML=`<b>${String(_).padStart(2,"0")}:${String(C).padStart(2,"0")}</b> ${M(Gt)}`,vt.value=Gt.toFixed(2),vt.style.setProperty("--p",(Gt/24*100).toFixed(1)+"%");let I=Object.entries(Vt).find(([X,G])=>M(G)===M(Gt))?.[0];document.querySelectorAll("[data-tod]").forEach(X=>X.classList.toggle("on",X.dataset.tod===I))},Qt=_=>{E=_,Tt.textContent=_?"\u23F8":"\u25B6",Tt.setAttribute("aria-label",_?"\u66AB\u505C\u6642\u9593":"\u81EA\u52D5\u64AD\u653E\u6642\u9593"),Tt.classList.toggle("on",_)};vt.oninput=()=>{Gt=+vt.value,Qt(!1),wt()},Tt.onclick=()=>Qt(!E),document.querySelectorAll("[data-tod]").forEach(_=>_.onclick=()=>{Gt=Vt[_.dataset.tod],Qt(!1),wt()}),Yt("tlSpeed").onchange=_=>{Zt=+_.target.value};let Zt=1;wt(),Qt(!0),window.__tl={get hour(){return Gt},set hour(_){Gt=_,wt()},setPlay:Qt};let pe=(_,C,I=1e9)=>{let X=_.attributes.color,G=_.attributes.position,lt=_.attributes.normal,it=[],bt=[],ht=[],gt=[],Dt=[],Ht={},re=new Wt;for(let ne=0;ne<X.count;ne++){re.setRGB(X.getX(ne),X.getY(ne),X.getZ(ne)),re.getHSL(Ht);let Rt=Ht.h>.16&&Ht.h<.45&&Ht.s>.18;(Rt||G.getY(ne)>I)&&(it.push(ne),bt.push(Ht.h,Ht.s,Ht.l),ht.push(G.getY(ne)),gt.push(C&&lt?lt.getY(ne):1),Dt.push(Rt?1:0))}return{col:X,idx:it,hsl:bt,ys:ht,ups:gt,gr:Dt}},xe=ft.map((_,C)=>({i:C,G:pe(_.r.meshes[0].geometry,!1,C===0?2.4:1e9),F:pe(_.r.meshes[1].geometry,!0,C===0?3.2:1e9)})),ke=.6,Oe="summer",we={spring:{dh:-.01,ds:1.05,dl:1.12,au:0},summer:{dh:0,ds:1.1,dl:1,au:0},autumn:{dh:-.12,ds:.95,dl:1.05,au:.55},winter:{dh:-.04,ds:.55,dl:1.02,au:.15}},Ke=(_,C,I)=>Oe!=="winter"||_!==0?0:Math.min(.95,Math.max(0,(C-2.2)/1.4))*(.4+.6*Math.max(0,I)),yn=()=>{let _=new Wt,C=new Wt(16054527),I=ke,X=we[Oe];for(let{i:G,G:lt,F:it}of xe)for(let[bt,ht]of[[lt,!1],[it,!0]]){for(let gt=0;gt<bt.idx.length;gt++){let Dt=bt.hsl[gt*3],Ht=bt.hsl[gt*3+1],re=bt.hsl[gt*3+2];if(!bt.gr[gt]){_.setHSL(Dt,Ht,re);let ae=Ke(G,bt.ys[gt],bt.ups[gt]);ae>0&&_.lerp(C,ae),bt.col.setXYZ(bt.idx[gt],_.r,_.g,_.b);continue}ht||(Dt=Dt+(.3-Dt)*.25*I,Ht=Math.min(.85,Ht*(1+.12*I)),re=re*(1-.58*I));let ne=ht?X.au*(gt*7919%13/13):X.au;_.setHSL(Dt+X.dh*(ht?.6+ne:1)-0*ne,Math.min(.9,Ht*X.ds),Math.min(.92,re*X.dl));let Rt=Ke(G,bt.ys[gt],bt.ups[gt]);Rt>0&&_.lerp(C,Rt),bt.col.setXYZ(bt.idx[gt],_.r,_.g,_.b)}bt.col.needsUpdate=!0}},rr=_=>{ke=_,yn()};{let _=.6;try{let I=localStorage.getItem("nt-green");I!==null&&(_=+I)}catch{}let C=Yt("greenRange");C&&(C.value=_,C.oninput=()=>{rr(+C.value);try{localStorage.setItem("nt-green",C.value)}catch{}}),rr(_)}let Mi=yf(s,{nodes:pt,edges:It},vi().toon,{perIsland:2,visitors:30,extra:[...[0,0,12,12,6].map(_=>({type:"indigenous",island:_})),...[10,6,2,3,9,4].map(_=>({type:"processor",island:_})),...[3,2,8,5].map(_=>({type:"vendor",island:_}))]}),us=(()=>{let _=document.createElement("canvas");_.width=_.height=32;let C=_.getContext("2d"),I=C.createRadialGradient(16,16,0,16,16,16);return I.addColorStop(0,"rgba(255,255,255,1)"),I.addColorStop(.5,"rgba(255,255,255,.7)"),I.addColorStop(1,"rgba(255,255,255,0)"),C.fillStyle=I,C.fillRect(0,0,32,32),new Br(_)})(),$r=(_,C,I,X,G,lt)=>{let it=new Float32Array(_*3),bt=new Float32Array(_),ht=_*13,gt=()=>((ht=Math.imul(ht^ht>>>15,2246822507)+12345|0)>>>0)/4294967296;for(let ne=0;ne<_;ne++)it[ne*3]=C.x0+gt()*(C.x1-C.x0),it[ne*3+1]=C.y0+gt()*(C.y1-C.y0),it[ne*3+2]=C.z0+gt()*(C.z1-C.z0),bt[ne]=gt()*6.28;let Dt=new Ie;Dt.setAttribute("position",new Ne(it,3));let Ht=new Js({map:us,color:I,size:X,transparent:!0,depthWrite:!1,opacity:0,sizeAttenuation:!0}),re=new Fr(Dt,Ht);return re.frustumCulled=!1,s.add(re),{p:re,mt:Ht,pos:it,ph:bt,box:C,fall:G,drift:lt,n:_}},ar=(_,C,I,X)=>{let G=x[_],lt=0;for(let it=0;it<36;it++)lt=Math.max(lt,G.O(it/36*Math.PI*2));return{x0:G.x-lt-C,x1:G.x+lt+C,z0:G.z-lt-C,z1:G.z+lt+C,y0:ft[_].y+I,y1:ft[_].y+X}},Jr;{let _=1e9,C=-1e9,I=1e9,X=-1e9;for(let G of x)_=Math.min(_,G.x-G.Rmax),C=Math.max(C,G.x+G.Rmax),I=Math.min(I,G.z-G.Rmax),X=Math.max(X,G.z+G.Rmax);Jr={x0:_,x1:C,z0:I,z1:X,y0:-2,y1:26}}let Kr={winter:[$r(3200,{x0:x[0].x+3.4*1-14,x1:x[0].x+3.4+14,z0:x[0].z-4.4-12,z1:x[0].z-4.4+12,y0:ft[0].y+1.5,y1:ft[0].y+26},16777215,.55,2.2,1)],spring:[],autumn:[],summer:[]},jr=[];{let _=x[0];for(let C=0;C<7;C++){let I=C/7*Math.PI*2,X=7+C%3*3,G=new Je;G.sph(16777215,0,0,0,4.5,1.4,.7,1.1,14),G.sph(16777215,3.5,-.3,1,3.4,1.3,.7,1,12),G.sph(16777215,-3.4,-.2,-.8,3.2,1.3,.7,1,12);let lt=new _i({color:10134708,gradientMap:vi().toon.gradientMap,transparent:!0,opacity:0,depthWrite:!1}),it=new ve(G.merge(),lt);it.position.set(_.x+3.4+Math.cos(I)*X,ft[0].y+24+C%2*3,_.z-4.4+Math.sin(I)*X),s.add(it),jr.push(lt)}}let Ro=(_,C)=>{for(let[I,X]of Object.entries(Kr))for(let G of X){let lt=C/1e3%45<25,it=I===Oe&&lt;if(G.mt.opacity+=((it?.95:0)-G.mt.opacity)*Math.min(1,_*.8),G.p.visible=G.mt.opacity>.02,!G.p.visible||cr)continue;let bt=G.pos,ht=G.box;for(let gt=0;gt<G.n;gt++){let Dt=gt*3;bt[Dt+1]-=G.fall*_*(.7+.3*Math.sin(G.ph[gt])),bt[Dt]+=Math.sin(C*.001+G.ph[gt])*G.drift*_,bt[Dt+2]+=Math.cos(C*8e-4+G.ph[gt])*G.drift*_*.6,bt[Dt+1]<ht.y0&&(bt[Dt+1]=ht.y1,bt[Dt]=ht.x0+(gt*9301+C)%1e3/1e3*(ht.x1-ht.x0),bt[Dt+2]=ht.z0+(gt*4999+C*.7)%1e3/1e3*(ht.z1-ht.z0))}G.p.geometry.attributes.position.needsUpdate=!0}for(let I of jr)I.opacity+=((Oe==="winter"?.92:0)-I.opacity)*Math.min(1,_*1.5)},or=Yt("seasonToast"),A=0,Y={spring:"\u{1F338} \u6625\u5929\uFF1A\u842C\u7269\u767C\u82BD\uFF0C\u8336\u5712\u5192\u65B0\u82BD",summer:"\u2600\uFE0F \u590F\u5929\uFF1A\u7DA0\u610F\u6700\u6FC3\uFF0C\u6C34\u679C\u76DB\u7522",autumn:"\u{1F341} \u79CB\u5929\uFF1A\u7A3B\u7A40\u8F49\u9EC3\uFF0C\u6E96\u5099\u6536\u6210",winter:"\u2744\uFE0F \u5BD2\u6D41\u4F86\u8972\uFF01\u5408\u6B61\u5C71\u5076\u723E\u98C4\u96EA"},et=_=>{Oe=_,yn(),document.querySelectorAll("[data-season]").forEach(C=>C.classList.toggle("on",C.dataset.season===_)),or.textContent=Y[_],or.classList.add("show"),clearTimeout(A),A=setTimeout(()=>or.classList.remove("show"),3800)};document.querySelectorAll("[data-season]").forEach(_=>_.onclick=()=>{et(_.dataset.season),_.dataset.season==="winter"&&Rn(new D(x[0].x+10,ft[0].y+38,x[0].z+62),new D(x[0].x,ft[0].y+3,x[0].z))}),window.__season=et;let tt=Yt("roleCard"),J=_=>String(_).replace(/[&<>]/g,C=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[C]),Bt=(_,C)=>{let I=Ao[_];return`<div class="rc ${I.cls}"><div class="rh"><span class="ri">${I.icon}</span><div><b>${J(I.name)}</b><small>${J(I.tag)}</small></div></div><p class="stage">${vf.map(X=>`<span class="${X===I.stage?"on":""}">${X}</span>`).join("<i>\u2192</i>")}</p><p><em>\u6211\u5728\u505A\u4EC0\u9EBC</em>${J(I.does)}</p><p><em>\u4F60\u53EF\u4EE5\u9019\u6A23\u505A</em>${J(I.you)}</p><p class="law">\u{1F4D8} \u98DF\u8FB2\u6559\u80B2\u6CD5\u63A8\u52D5\u65B9\u91DD\uFF1A${J(I.principle)}</p></div>`},Kt=_=>{tt.innerHTML=`<button class="x" aria-label="\u95DC\u9589">\u2715</button>${Bt(_)}<p class="note">\u89D2\u8272\u70BA\u793A\u610F\uFF0C\u975E\u771F\u5BE6\u4EBA\u7269\uFF1B\u8AAA\u660E\u5167\u5BB9\u5F85\u6559\u5E2B\u5BE9\u95B1\u3002</p>`,tt.hidden=!1,tt.querySelector(".x").onclick=()=>tt.hidden=!0};Yt("peopleBtn").onclick=()=>{tt.innerHTML=`<button class="x" aria-label="\u95DC\u9589">\u2715</button><h3>\u8A8D\u8B58\u5CF6\u4E0A\u7684\u4EBA\uFF1A\u5F9E\u571F\u5730\u5230\u9910\u684C</h3><div class="rgrid">${Object.keys(Ao).map(_=>Bt(_)).join("")}</div><p class="note">\u89D2\u8272\u70BA\u793A\u610F\uFF0C\u975E\u771F\u5BE6\u4EBA\u7269\uFF1B\u8AAA\u660E\u5167\u5BB9\u5F85\u6559\u5E2B\u5BE9\u95B1\u3002\u63A8\u52D5\u65B9\u91DD\u4F9D\u300A\u98DF\u8FB2\u6559\u80B2\u6CD5\u300B\u7B2C 4 \u689D\u3002</p>`,tt.hidden=!1,tt.querySelector(".x").onclick=()=>tt.hidden=!0};for(let _ of Mi.walkers){let C=ii[_.t].id,I=Ao[C];if(!I)continue;let X=document.createElement("button");X.className="vlab "+I.cls,X.innerHTML=`<b>${I.icon} ${J(I.name)}</b><i>${J(I.tag)}</i>`,X.style.display="none",X.onclick=G=>{G.stopPropagation(),Kt(C)},n.append(X),_.lab=X}let ee=[],ie=new D,he=40;{let _=0,C=0;for(let it of x)_+=it.x/x.length,C+=it.z/x.length;let I=0;for(let it of x)I=Math.max(I,Math.hypot(it.x-_,it.z-C)+it.Rmax*.8);let X=91,G=()=>((X=Math.imul(X^X>>>15,2246822507)+12345|0)>>>0)/4294967296,lt=(it,bt,ht,gt,Dt)=>{let Ht=new Je,re=6+Math.floor(G()*4);Ht.sph(16777215,0,0,0,gt*.9,1.25,.75,1,14);for(let ae=0;ae<re;ae++){let ge=ae/re*Math.PI*2+G()*.6,se=(.55+G()*.5)*gt;Ht.sph(ae%3?16777215:16251903,Math.cos(ge)*se*1.35,G()*.35*gt,Math.sin(ge)*se*.75,gt*(.5+G()*.35),1,.78,1,12)}Ht.sph(15660024,0,-.18*gt,0,gt*1.3,1.5,.25,.85,14);let ne=vi().cloud.clone();ne.transparent=!0,ne.depthWrite=!1,ne.opacity=Dt;let Rt=new ve(Ht.merge(),ne);Rt.position.set(it,bt,ht),Rt.rotation.y=G()*Math.PI,Rt.renderOrder=2,s.add(Rt),ee.push({m:Rt,x0:it,z0:ht,op:Dt,sp:.4+G()*.6,ph:G()*6}),q.add(ne)};ie.set(_,0,C),he=I;for(let it=0;it<16;it++){let bt=it/16*Math.PI*2+G()*.25,ht=I+12+G()*14;lt(_+Math.cos(bt)*ht,12+G()*9,C+Math.sin(bt)*ht*.9,2.4+G()*2.2,.95)}for(let it=0;it<22;it++){let bt=it/22*Math.PI*2+G()*.3,ht=I+55+G()*90;lt(_+Math.cos(bt)*ht,8+G()*32,C+Math.sin(bt)*ht,7+G()*8,.9)}}let oe=1e9,ce=0;for(let _=0;_<ft.length;_++){let C=1e9;for(let I=0;I<ft.length;I++){if(_===I)continue;let X=Math.hypot(ft[_].x-ft[I].x,ft[_].z-ft[I].z)-0;C=Math.min(C,X),I>_&&(oe=Math.min(oe,X))}ce=Math.max(ce,C)}let Pe=ft.map((_,C)=>{let I=document.createElement("button");return I.className="lab",I.innerHTML=`<b>${si(_.def.town)}</b><small>${si(_.def.lm)}</small>`,I.onclick=()=>fs(C),n.append(I),I}),je=[];for(let _=0;_<8;_++){let C=document.createElement("button");C.className="ing",C.hidden=!0,n.append(C),je.push(C)}let _e=-1,on=-1,Se=!1,le=0,cn=null,De=_=>_<.5?4*_*_*_:1-Math.pow(-2*_+2,3)/2,Rn=(_,C,I=1200)=>{Yn=null,cn={t0:performance.now(),ms:I,p0:c.position.clone(),a0:h.target.clone(),p1:_,a1:C}};h.addEventListener("start",()=>{cn=null,Yn=null});function fs(_){Se&&bi(),_e=_,on=-1;let C=ft[_],I=C.r.R,X=innerWidth>700?I*.5:0;Rn(new D(C.x+X,C.y+I*1.1+7,C.z+I*2+9),new D(C.x+X,C.y+1,C.z+I*.12)),Qe(_)}function Bn(_){if(_e<0)return;on=_;let C=ft[_e],I=C.r.pedestals[_],X=Math.hypot(I.x,I.z)||1,G=I.x/X,lt=I.z/X;Rn(new D(C.x+I.x+G*7.5,C.y+I.y+3.6,C.z+I.z+lt*7.5),new D(C.x+I.x,C.y+I.y-.5,C.z+I.z),900),ri(_)}function zi(){bi(),T(),_e=-1,on=-1,Rn(l.p.clone(),l.t.clone(),1300),Yt("panel").hidden=!0,je.forEach(_=>_.hidden=!0)}function Qe(_){let C=ft[_],I=C.c;Yt("panel").hidden=!1,Yt("pTown").textContent=C.def.town,Yt("pName").textContent=I?I.name:C.def.town,Yt("pTerrain").textContent=C.def.terrain,Yt("pLm").textContent=C.def.lm,Yt("pBlurb").textContent=C.def.blurb,Yt("pCard").innerHTML="",Yt("pFull").innerHTML="",Yt("pIngs").innerHTML=(I?I.cards:[]).map((X,G)=>`<button data-k="${G}"><i>${G+1}</i>${si(X.title)}</button>`).join(""),Yt("pIngs").querySelectorAll("button").forEach(X=>X.onclick=()=>Bn(+X.dataset.k)),je.forEach((X,G)=>{X.hidden=!1,X.textContent=(I?.cards[G]?.title||"").replace(/（.*）/,""),X.onclick=()=>Bn(G)})}function ri(_){let C=ft[_e],I=C.c?.cards[_];if(!I)return;Yt("pIngs").querySelectorAll("button").forEach((G,lt)=>G.classList.toggle("on",lt===_)),Yt("pCard").innerHTML="",Yt("vTitle").innerHTML=`${si(I.title)}<small>${si(C.def.town)}\u30FB${si(I.subtitle)}</small>`,Yt("vCnt").textContent=`${_+1} / ${C.c.cards.length}`,Yt("vImg").src=I.image,Yt("vImg").alt=I.title+" \u98DF\u8FB2\u5716\u5361",Yt("vText").innerHTML=`<p>${si(I.intro)}</p>`+(I.notes||[]).map(G=>`<p class="sub">${si(G)}</p>`).join("");let X=I.questions?.[0];Yt("vQ").hidden=!X,X&&(Yt("vQ").innerHTML=`<p><b>\u8A66\u8A66\u770B\uFF1A</b>${si(X.prompt)}</p>${X.choices.map(G=>`<button data-c="${G.id}">${si(G.text)}</button>`).join("")}<p class="ex"></p>`,Yt("vQ").querySelectorAll("button").forEach(G=>G.onclick=()=>{let lt=G.dataset.c===X.answer;Yt("vQ").querySelectorAll("button").forEach(it=>it.disabled=!0),G.classList.add(lt?"good":"bad"),Yt("vQ").querySelector(".ex").textContent=(lt?"\u7B54\u5C0D\u4E86\uFF01":"\u518D\u8A8D\u8B58\u4E00\u4E0B\uFF1A")+X.explanation})),Yt("viewer").hidden=!1,Yt("viewer").querySelector(".vscroll").scrollTop=0,Se=!0}function bi(){Yt("viewer").hidden=!0,Se=!1,Yt("pIngs").querySelectorAll("button").forEach(_=>_.classList.remove("on"))}Yt("vClose").onclick=bi,Yt("vPrev").onclick=()=>{_e>=0&&Bn((on+7)%8)},Yt("vNext").onclick=()=>{_e>=0&&Bn((on+1)%8)},Yt("vImg").onclick=()=>{Yt("lbImg").src=Yt("vImg").src,Yt("lightbox").hidden=!1},Yt("lightbox").onclick=()=>Yt("lightbox").hidden=!0,addEventListener("keydown",_=>{if(!Yt("lightbox").hidden){_.key==="Escape"&&(Yt("lightbox").hidden=!0);return}Se&&(_.key==="Escape"&&bi(),_.key==="ArrowRight"&&Yt("vNext").click(),_.key==="ArrowLeft"&&Yt("vPrev").click())}),Yt("closeP").onclick=zi,Yt("overview").onclick=zi;let dn=new uo,ds=new Mt,ki=i.domElement,Si=null,Co=-1,Al=_=>{let C=ki.getBoundingClientRect();ds.set((_.clientX-C.left)/C.width*2-1,-(_.clientY-C.top)/C.height*2+1),dn.setFromCamera(ds,c);let I=dn.intersectObjects(Q,!1)[0];return I?I.object.userData.island:-1};ki.addEventListener("pointerdown",_=>Si=[_.clientX,_.clientY]),ki.addEventListener("pointerup",_=>{if(!Si)return;let C=Math.hypot(_.clientX-Si[0],_.clientY-Si[1]);if(Si=null,C>5)return;let I=Al(_);I>=0&&I!==_e&&fs(I)}),ki.addEventListener("pointermove",_=>{_.buttons||(Co=Al(_),ki.style.cursor=Co>=0?"pointer":"grab")});let Rl=()=>{let _=n.getBoundingClientRect();c.aspect=Math.max(1,_.width)/Math.max(1,_.height),c.updateProjectionMatrix(),i.setSize(_.width,_.height,!1)},ps=10,Yn=null,ms=0,Cl=0,Il=12,Mf=()=>l.p.distanceTo(l.t)*1.05,Ll=_=>Il*Math.pow(Mf()/Il,_/(ps-1)),Pl=()=>{let _=c.position.distanceTo(h.target),C=0,I=1e9;for(let X=0;X<ps;X++){let G=Math.abs(Math.log(Ll(X)/_));G<I&&(I=G,C=X)}return C},Io=_=>{let C=Math.max(0,Math.min(ps-1,(Yn!==null?Yn.l:Pl())+_));cn=null,Yn={l:C,d:Ll(C)},Dl(C)},Dl=_=>{let C=Yt("zoomLv");C&&(C.textContent=`${ps-_} / ${ps}`),document.querySelectorAll("#zoomDots i").forEach((I,X)=>I.classList.toggle("on",X<=ps-1-_))};n.addEventListener("wheel",_=>{_.preventDefault(),_.stopPropagation();let C=performance.now(),I=_.deltaY*(_.deltaMode===1?33:_.deltaMode===2?400:1);if((C-Cl>700||Math.sign(I)!==Math.sign(ms))&&(ms=0),Cl=C,ms+=I,Math.abs(ms)>=30){let X=ms>0?1:-1;ms=0,C-(n._lastStep||0)>200&&(n._lastStep=C,Io(X))}},{capture:!0,passive:!1}),Yt("zIn")&&(Yt("zIn").onclick=()=>Io(-1)),Yt("zOut")&&(Yt("zOut").onclick=()=>Io(1)),new ResizeObserver(Rl).observe(n),Rl(),T(),_e<0&&!cn&&(c.position.copy(l.p),h.target.copy(l.t));let cr=!1;Yt("reduce").onchange=_=>cr=_.target.checked;let Ul=0,Nl=0;ft.forEach(_=>{Ul+=_.r.tris,Nl+=_.r.hiTris});let lr={fps:0,calls:0,tris:0,islandTris:Math.round(Ul),hiTrisAll:Math.round(Nl),minGap:+oe.toFixed(1),maxNearestGap:+ce.toFixed(1),bridges:Z.length,bridgesPerIsland:S.join(","),realBorders:N.length,skippedBorders:xt.join(" / "),villagers:Mi.walkers.length,villagerTris:Mi.tris,low:e};window.__nan=()=>{let _=[];return s.traverse(C=>{if(C.geometry&&C.geometry.attributes.position){let I=C.geometry.attributes.position.array;for(let X=0;X<I.length;X++)if(!isFinite(I[X])){_.push((C.name||C.type)+" island:"+C.userData.island+" n="+I.length);break}}}),_},window.__ov={stats:lr,camera:c,controls:h,focus:fs,overview:zi,focusIng:Bn,isl:ft,villagers:Mi};let bf=e?36:44,Hi=new D,Ol=performance.now(),Qr=0,Lo=0,Xe=new D;function Fl(_){requestAnimationFrame(Fl);let C=Math.min(.05,(_-Ol)/1e3);if(Ol=_,Qr+=C,Lo++,Qr>1&&(lr.fps=Math.round(Lo/Qr),Qr=0,Lo=0),cn){let it=Math.min(1,(_-cn.t0)/cn.ms),bt=De(it);c.position.lerpVectors(cn.p0,cn.p1,bt),h.target.lerpVectors(cn.a0,cn.a1,bt),it>=1&&(cn=null)}if(Yn){let it=Hi.subVectors(c.position,h.target),bt=it.length(),ht=bt+(Yn.d-bt)*.2;c.position.copy(h.target).add(it.multiplyScalar(ht/bt)),Math.abs(ht-Yn.d)<.05&&(Yn=null)}!Yn&&_-(n._zs||0)>250&&(n._zs=_,Dl(Pl())),h.update();{let it=Yt("viewer"),bt=n.clientWidth,ht=n.clientHeight,gt=0;if(Se&&innerWidth>900){let Dt=bt-it.offsetWidth-12;gt=Math.max(0,bt/2-Dt/2)}le+=(gt-le)*.15,Math.abs(le)<.5&&gt===0?c.view&&c.clearViewOffset():c.setViewOffset(bt,ht,le,0,bt,ht)}let I=0,X=Math.tan(c.fov*Math.PI/360);ft.forEach(it=>{let bt=c.position.distanceTo(Hi.set(it.x,it.y,it.z)),ht=bt<bf||it.r.R/(bt*X)>(e?.42:.3);ht&&I++,it.r.hi.forEach(gt=>gt.visible=ht),it.r.lo.forEach(gt=>gt.visible=!ht)}),lr.hiIslands=I,Mi.update(C,_,!cr),E&&(Gt=(Gt+C*k*Zt)%24,(_|0)%4===0&&wt()),zt(Math.min(1,C*(E?6:4))),Ro(C,_);{let it=n.clientWidth,bt=n.clientHeight;for(let ht of Mi.walkers){let gt=ht.lab;if(!gt)continue;let Dt=ii[ht.t],Ht=(ht.mayor?1.55:1.25)*Dt.scale;Xe.set(ht.x,ht.y+Ht,ht.z).project(c);let re=c.position.distanceTo(Hi.set(ht.x,ht.y,ht.z));if(!(Xe.z<1&&Math.abs(Xe.x)<1.05&&Math.abs(Xe.y)<1.05&&(ht.mayor?re<120:re<46))){gt.style.display!=="none"&&(gt.style.display="none");continue}gt.style.display="",gt.style.left=(Xe.x*.5+.5)*it+"px",gt.style.top=(-Xe.y*.5+.5)*bt+"px",gt.style.fontSize=Math.max(12,Math.min(ht.mayor?26:20,(ht.mayor?900:620)/re))+"px",gt.style.zIndex=String(500-Math.round(re))}}for(let it of ee){cr||(it.m.position.x=it.x0+Math.sin(_*6e-5*it.sp+it.ph)*4);let bt=c.position.distanceTo(it.m.position),ht=Math.min(1,Math.max(0,(bt-10)/22)),gt=c.position.distanceTo(ie)-he*.35-bt;gt>0&&(ht*=Math.max(.12,1-gt/18)),it.m.material.opacity+=(it.op*ht-it.m.material.opacity)*.15,it.m.visible=it.m.material.opacity>.02}i.render(s,c),lr.calls=i.info.render.calls,lr.tris=i.info.render.triangles;let G=n.clientWidth,lt=n.clientHeight;if(ft.forEach((it,bt)=>{let ht=(it.def.arch.startsWith("peak")?10:6.5)+(cr?0:Math.sin(_*.0012+bt*1.7)*.45);Xe.set(it.x,it.y+ht,it.z).project(c);{let re=c.position.distanceTo(Hi.set(it.x,it.y,it.z));Pe[bt].style.fontSize=(re<70?17:Math.max(15,Math.min(26,2400/re)))+"px"}let gt=Xe.z<1&&Math.abs(Xe.x)<1.05&&Math.abs(Xe.y)<1.05,Dt=Pe[bt];Dt.style.display=gt?"":"none";let Ht=it.def.ld||[0,0];Dt.style.left=(Xe.x*.5+.5)*G+"px",Dt.style.top=(-Xe.y*.5+.5)*lt+"px",Dt.style.zIndex=String(200-Math.round(Xe.z*100)),Dt.classList.toggle("on",bt===Co||bt===_e),Dt.classList.toggle("dim",_e>=0&&bt!==_e)}),_e>=0){let it=ft[_e],bt=Math.tan(c.fov*Math.PI/360);je.forEach((ht,gt)=>{let Dt=it.r.pedestals[gt];Hi.set(it.x+Dt.x,it.y+Dt.y-.3,it.z+Dt.z);let Ht=c.position.distanceTo(Hi);Xe.copy(Hi).project(c);let re=Xe.z<1&&Math.abs(Xe.x)<1.05&&Math.abs(Xe.y)<1.05;ht.style.display=re?"":"none";let ne=1.5/(2*Ht*bt)*lt,Rt=Math.max(14,Math.min(64,ne*.34));ht.style.fontSize=Rt.toFixed(1)+"px",ht.style.zIndex=String(1e3-Math.round(Ht*10)),ht.style.left=(Xe.x*.5+.5)*G+"px",ht.style.top=(-Xe.y*.5+.5)*lt+"px",ht.classList.toggle("on",gt===on)})}}requestAnimationFrame(Fl),Yt("loading")?.remove();const requestedTown=new URLSearchParams(location.search).get("town");const requestedIndex=ft.findIndex(o=>o.def.town===requestedTown);if(requestedIndex>=0)fs(requestedIndex)}k1().catch(n=>{let t=Yt("loading");t&&(t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message+"\uFF08\u8ACB\u900F\u904E\u672C\u6A5F\u7DB2\u9801\u4F3A\u670D\u5668\u958B\u555F\uFF09"),console.error(n)});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
