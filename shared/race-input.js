(function(root) {
  const CONFIG = Object.freeze({ defaultSource:'uart', enableMqtt:false, enableManual:false, baudRate:9600, target:10 });
  class ShortFrameReceiver {
    constructor(onFrame,onError=()=>{}) { this.onFrame=onFrame;this.onError=onError;this.buffer=''; }
    feed(chunk) {
      for(const ch of chunk) {
        if(ch==='(') {this.buffer='(';continue;}
        if(!this.buffer) continue;
        this.buffer+=ch;
        if(ch===')') {
          const frame=this.buffer;this.buffer='';
          const match=/^\(A,([0-9]{1,2}),B,([0-9]{1,2})\)$/.exec(frame);
          if(!match) {this.onError(frame);continue;}
          const a=Number(match[1]),b=Number(match[2]);
          if(a>10||b>10||(a===10&&b===10)){this.onError(frame);continue;}
          this.onFrame({a,b,frame});
        } else if(this.buffer.length>40 || ch==='\n') {this.onError(this.buffer);this.buffer='';}
      }
    }
  }
  class ProgressGate {
    constructor({onProgress,onTarget,onZero,isBusy=()=>false,source='uart'}) {
      Object.assign(this,{onProgress,onTarget,onZero,isBusy,source});
      this.awaitingZero=false;this.winner=null;this.latest=null;
    }
    receive(source,p) {
      if(source!==this.source) return false;
      if(!p || !Number.isInteger(p.a)||!Number.isInteger(p.b)||p.a<0||p.b<0||p.a>10||p.b>10||(p.a===10&&p.b===10))return false;
      this.latest=p;
      if(p.a===0&&p.b===0) {
        this.awaitingZero=false;this.winner=null;
        this.onProgress(p);this.onZero();return true;
      }
      if(this.awaitingZero||this.isBusy())return false;
      this.onProgress(p);
      if(!this.winner&&(p.a===10||p.b===10)) {
        this.winner=p.a===10?'red':'green';this.onTarget(this.winner);
      }
      return true;
    }
    consume() {this.awaitingZero=true;this.winner=null;}
    finishPresentation() {
      this.awaitingZero=!this.latest || this.latest.a!==0 || this.latest.b!==0;
      this.winner=null;
    }
  }
  const api={CONFIG,ShortFrameReceiver,ProgressGate};
  if(typeof module!=='undefined')module.exports=api;else root.RaceInput=api;
})(globalThis);
