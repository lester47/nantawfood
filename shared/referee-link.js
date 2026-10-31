(function(root) {
  class RefereeLink {
    constructor({onFrame,onState,onInvalid}) {Object.assign(this,{onFrame,onState,onInvalid});this.port=null;this.reader=null;this.task=null;this.closing=false;this.outgoing=Promise.resolve();}
    async connect() {
      if(this.port) return;
      if(!navigator.serial||!window.isSecureContext)throw new Error('請使用電腦版 Chrome／Edge，從 localhost 或 HTTPS 開啟');
      const selected=await navigator.serial.requestPort();
      await selected.open({baudRate:RaceInput.CONFIG.baudRate,dataBits:8,stopBits:1,parity:'none',flowControl:'none'});
      this.port=selected;this.closing=false;this.onState('connected','USB 已連接，等待裁判進度');
      const parser=new RaceInput.ShortFrameReceiver(p=>{
        this.onFrame(p);
        const pad=n=>String(n).padStart(2,'0');
        void this.send(`ACK,A,${pad(p.a)},B,${pad(p.b)}`).catch(e=>this.onState('warning',`確認回覆失敗：${e.message}`));
      },raw=>this.onInvalid(raw));
      this.task=this.read(selected,parser);
      void this.task.then(()=>{if(!this.closing&&this.port===selected){this.onState('disconnected','USB 已中斷，請重新連線');void this.disconnect();}});
      try {await this.send('STATUS');}catch(e){this.onState('warning',`初始查詢失敗：${e.message}`);}
    }
    async read(port,parser) {
      const decoder=new TextDecoder();
      try {
        this.reader=port.readable.getReader();
        while(!this.closing) {const {value,done}=await this.reader.read();if(done)break;parser.feed(decoder.decode(value,{stream:true}));}
      }catch(e){if(!this.closing)this.onState('warning',`USB 讀取中斷：${e.message}`);}
      finally{this.reader?.releaseLock();this.reader=null;}
    }
    send(command) {
      const active=this.port;
      const task=this.outgoing.catch(()=>{}).then(async()=>{
        if(!active?.writable||active!==this.port||this.closing)return;
        const writer=active.writable.getWriter();
        try{await writer.write(new TextEncoder().encode(command+'\n'));}finally{writer.releaseLock();}
      });this.outgoing=task;return task;
    }
    async disconnect() {
      this.closing=true;const active=this.port;
      try{if(this.reader)await this.reader.cancel();if(this.task)await this.task;await this.outgoing.catch(()=>{});if(active)await active.close();}
      finally{this.port=null;this.task=null;this.closing=false;this.onState('disconnected','USB 未連線；分數保留至下一筆有效資料');}
    }
  }
  root.RefereeLink=RefereeLink;
})(globalThis);
