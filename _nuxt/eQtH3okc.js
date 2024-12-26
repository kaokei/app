import{g as H,f as Z,h as E,e as N,u as D,r as G,o as K,c as X,a as n,i as _,t as I,j as L,v as M,n as J,k as Q}from"./DyZM1QfF.js";import{u as Y}from"./CsBLA6j2.js";import"./913o3H0G.js";var ee=function(){var s=document.getSelection();if(!s.rangeCount)return function(){};for(var o=document.activeElement,a=[],i=0;i<s.rangeCount;i++)a.push(s.getRangeAt(i));switch(o.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":o.blur();break;default:o=null;break}return s.removeAllRanges(),function(){s.type==="Caret"&&s.removeAllRanges(),s.rangeCount||a.forEach(function(r){s.addRange(r)}),o&&o.focus()}},te=ee,V={"text/plain":"Text","text/html":"Url",default:"Text"},re="Copy to clipboard: #{key}, Enter";function ne(s){var o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return s.replace(/#{\s*key\s*}/g,o)}function oe(s,o){var a,i,r,p,B,v,y=!1;o||(o={}),a=o.debug||!1;try{r=te(),p=document.createRange(),B=document.getSelection(),v=document.createElement("span"),v.textContent=s,v.ariaHidden="true",v.style.all="unset",v.style.position="fixed",v.style.top=0,v.style.clip="rect(0, 0, 0, 0)",v.style.whiteSpace="pre",v.style.webkitUserSelect="text",v.style.MozUserSelect="text",v.style.msUserSelect="text",v.style.userSelect="text",v.addEventListener("copy",function(l){if(l.stopPropagation(),o.format)if(l.preventDefault(),typeof l.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var h=V[o.format]||V.default;window.clipboardData.setData(h,s)}else l.clipboardData.clearData(),l.clipboardData.setData(o.format,s);o.onCopy&&(l.preventDefault(),o.onCopy(l.clipboardData))}),document.body.appendChild(v),p.selectNodeContents(v),B.addRange(p);var w=document.execCommand("copy");if(!w)throw new Error("copy command was unsuccessful");y=!0}catch(l){a&&console.error("unable to copy using execCommand: ",l),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(o.format||"text",s),o.onCopy&&o.onCopy(window.clipboardData),y=!0}catch(h){a&&console.error("unable to copy using clipboardData: ",h),a&&console.error("falling back to prompt"),i=ne("message"in o?o.message:re),window.prompt(i,s)}}finally{B&&(typeof B.removeRange=="function"?B.removeRange(p):B.removeAllRanges()),v&&document.body.removeChild(v),r()}return y}var ae=oe;const O=H(ae);var q={exports:{}};function se(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var z={exports:{}};const ie={},le=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),ce=Z(le);var P;function $(){return P||(P=1,function(s,o){(function(a,i){s.exports=i()})(E,function(){var a=a||function(i,r){var p;if(typeof window<"u"&&window.crypto&&(p=window.crypto),typeof self<"u"&&self.crypto&&(p=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(p=globalThis.crypto),!p&&typeof window<"u"&&window.msCrypto&&(p=window.msCrypto),!p&&typeof E<"u"&&E.crypto&&(p=E.crypto),!p&&typeof se=="function")try{p=ce}catch{}var B=function(){if(p){if(typeof p.getRandomValues=="function")try{return p.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof p.randomBytes=="function")try{return p.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},v=Object.create||function(){function e(){}return function(t){var c;return e.prototype=t,c=new e,e.prototype=null,c}}(),y={},w=y.lib={},l=w.Base=function(){return{extend:function(e){var t=v(this);return e&&t.mixIn(e),(!t.hasOwnProperty("init")||this.init===t.init)&&(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),h=w.WordArray=l.extend({init:function(e,t){e=this.words=e||[],t!=r?this.sigBytes=t:this.sigBytes=e.length*4},toString:function(e){return(e||f).stringify(this)},concat:function(e){var t=this.words,c=e.words,u=this.sigBytes,x=e.sigBytes;if(this.clamp(),u%4)for(var C=0;C<x;C++){var R=c[C>>>2]>>>24-C%4*8&255;t[u+C>>>2]|=R<<24-(u+C)%4*8}else for(var k=0;k<x;k+=4)t[u+k>>>2]=c[k>>>2];return this.sigBytes+=x,this},clamp:function(){var e=this.words,t=this.sigBytes;e[t>>>2]&=4294967295<<32-t%4*8,e.length=i.ceil(t/4)},clone:function(){var e=l.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],c=0;c<e;c+=4)t.push(B());return new h.init(t,e)}}),g=y.enc={},f=g.Hex={stringify:function(e){for(var t=e.words,c=e.sigBytes,u=[],x=0;x<c;x++){var C=t[x>>>2]>>>24-x%4*8&255;u.push((C>>>4).toString(16)),u.push((C&15).toString(16))}return u.join("")},parse:function(e){for(var t=e.length,c=[],u=0;u<t;u+=2)c[u>>>3]|=parseInt(e.substr(u,2),16)<<24-u%8*4;return new h.init(c,t/2)}},m=g.Latin1={stringify:function(e){for(var t=e.words,c=e.sigBytes,u=[],x=0;x<c;x++){var C=t[x>>>2]>>>24-x%4*8&255;u.push(String.fromCharCode(C))}return u.join("")},parse:function(e){for(var t=e.length,c=[],u=0;u<t;u++)c[u>>>2]|=(e.charCodeAt(u)&255)<<24-u%4*8;return new h.init(c,t)}},d=g.Utf8={stringify:function(e){try{return decodeURIComponent(escape(m.stringify(e)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(e){return m.parse(unescape(encodeURIComponent(e)))}},b=w.BufferedBlockAlgorithm=l.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(e){typeof e=="string"&&(e=d.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var t,c=this._data,u=c.words,x=c.sigBytes,C=this.blockSize,R=C*4,k=x/R;e?k=i.ceil(k):k=i.max((k|0)-this._minBufferSize,0);var A=k*C,U=i.min(A*4,x);if(A){for(var T=0;T<A;T+=C)this._doProcessBlock(u,T);t=u.splice(0,A),c.sigBytes-=U}return new h.init(t,U)},clone:function(){var e=l.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});w.Hasher=b.extend({cfg:l.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){b.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(e){return function(t,c){return new e.init(c).finalize(t)}},_createHmacHelper:function(e){return function(t,c){return new S.HMAC.init(e,c).finalize(t)}}});var S=y.algo={};return y}(Math);return a})}(z)),z.exports}(function(s,o){(function(a,i){s.exports=i($())})(E,function(a){return function(){var i=a,r=i.lib,p=r.WordArray,B=i.enc;B.Base64={stringify:function(y){var w=y.words,l=y.sigBytes,h=this._map;y.clamp();for(var g=[],f=0;f<l;f+=3)for(var m=w[f>>>2]>>>24-f%4*8&255,d=w[f+1>>>2]>>>24-(f+1)%4*8&255,b=w[f+2>>>2]>>>24-(f+2)%4*8&255,S=m<<16|d<<8|b,e=0;e<4&&f+e*.75<l;e++)g.push(h.charAt(S>>>6*(3-e)&63));var t=h.charAt(64);if(t)for(;g.length%4;)g.push(t);return g.join("")},parse:function(y){var w=y.length,l=this._map,h=this._reverseMap;if(!h){h=this._reverseMap=[];for(var g=0;g<l.length;g++)h[l.charCodeAt(g)]=g}var f=l.charAt(64);if(f){var m=y.indexOf(f);m!==-1&&(w=m)}return v(y,w,h)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function v(y,w,l){for(var h=[],g=0,f=0;f<w;f++)if(f%4){var m=l[y.charCodeAt(f-1)]<<f%4*2,d=l[y.charCodeAt(f)]>>>6-f%4*2,b=m|d;h[g>>>2]|=b<<24-g%4*8,g++}return p.create(h,g)}}(),a.enc.Base64})})(q);var ue=q.exports;const W=H(ue);var F={exports:{}};(function(s,o){(function(a,i){s.exports=i($())})(E,function(a){return a.enc.Utf8})})(F);var fe=F.exports;const j=H(fe);function de(s){return!!s.match(/^([A-Za-z0-9+/=]{4})*([A-Za-z0-9+/=]{2}==|[A-Za-z0-9+/=]{3}=)?$/)}const pe={class:"px-6 py-10"},ve={ref:"container",class:"flex w-full flex-col lg:flex-row"},he={class:"flex-grow lg:w-0"},ye={class:"mb-2 flex justify-between gap-2"},ge=["disabled"],me=["disabled"],we={class:"flex-grow lg:w-0"},xe={class:"mb-2 flex justify-between gap-2"},be=["disabled"],Ce=["disabled"],Se=N({__name:"index",setup(s){Y({title:"kaokei"});const o=D("container"),a=D("textarea1"),i=D("textarea2"),r=G({input:"",output:"",copyTooltipInput:"点击复制",copyTooltipOutput:"点击复制",decodeError:!1}),p=()=>{const m=j.parse(r.input);r.decodeError=!1,r.output="",Q(()=>{r.output=W.stringify(m)})},B=()=>{if(de(r.input))try{const m=W.parse(r.input);r.output=m.toString(j),r.decodeError=!1}catch{r.decodeError=!0,r.output="base64解码异常"}else r.decodeError=!0,r.output="无效的base64字符串"},v=()=>{const m=r.input;r.input=r.output,r.output=m},y=()=>{r.input=""},w=()=>{O(r.input),r.copyTooltipInput="复制成功",setTimeout(()=>{r.copyTooltipInput="点击复制"},2e3)},l=()=>{r.output=""},h=()=>{O(r.output),r.copyTooltipOutput="复制成功",setTimeout(()=>{r.copyTooltipOutput="点击复制"},2e3)},g=m=>{if(a.value&&i.value&&o.value){if(window.getComputedStyle(o.value).getPropertyValue("flex-direction")==="column")return;const b=a.value.style.height,S=i.value.style.height;!b&&S&&(a.value.style.height=S),i.value.style.height=""}},f=m=>{if(a.value&&i.value&&o.value){if(window.getComputedStyle(o.value).getPropertyValue("flex-direction")==="column")return;const b=a.value.style.height,S=i.value.style.height;b&&!S&&(i.value.style.height=b),a.value.style.height=""}};return(m,d)=>(K(),X("div",pe,[d[7]||(d[7]=n("article",{class:"prose mb-4 lg:prose-xl"},[n("h2",null,"Base64编码/解码"),n("ol",null,[n("li",null,"请在左侧文本输入框区域输入任意字符串；"),n("li",null,"点击中间区域的编码按钮/解码按钮；"),n("li",null,"右侧区域是展示编码结果/解码结果的地方。")])],-1)),n("div",ve,[n("div",he,[n("div",ye,[n("button",{disabled:!_(r).input,class:"btn btn-success flex flex-1",onClick:w},[d[2]||(d[2]=n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"})],-1)),n("span",null,I(_(r).copyTooltipInput),1)],8,ge),n("button",{disabled:!_(r).input,class:"btn flex flex-1",onClick:y},d[3]||(d[3]=[n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})],-1),n("span",null,"清空",-1)]),8,me)]),L(n("textarea",{ref:"textarea1","onUpdate:modelValue":d[0]||(d[0]=b=>_(r).input=b),placeholder:"请输入任意文字",class:"textarea textarea-bordered block h-[calc(100%-theme(space.14))] min-h-48 w-full lg:min-h-144",onMousedown:g},null,544),[[M,_(r).input]])]),n("div",{class:"divider h-12 lg:divider-horizontal lg:h-auto lg:w-16"},[n("button",{class:"btn btn-primary",onClick:p},"编码"),n("button",{class:"btn btn-secondary",onClick:B},"解码"),n("button",{class:"btn btn-neutral",onClick:v},d[4]||(d[4]=[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-6 rotate-90 lg:rotate-0"},[n("path",{"fill-rule":"evenodd",d:"M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"})],-1)]))]),n("div",we,[n("div",xe,[n("button",{disabled:!_(r).output,class:"btn btn-success flex flex-1",onClick:h},[d[5]||(d[5]=n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"})],-1)),n("span",null,I(_(r).copyTooltipOutput),1)],8,be),n("button",{disabled:!_(r).output,class:"btn flex flex-1",onClick:l},d[6]||(d[6]=[n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})],-1),n("span",null,"清空",-1)]),8,Ce)]),L(n("textarea",{ref:"textarea2",readonly:"","onUpdate:modelValue":d[1]||(d[1]=b=>_(r).output=b),placeholder:"这里是编码/解码的结果",class:J(["textarea textarea-bordered block h-[calc(100%-theme(space.14))] min-h-144 w-full",[_(r).decodeError?"textarea-error text-4xl text-danger":""]]),onMousedown:f},null,34),[[M,_(r).output]])])],512)]))}});export{Se as default};
