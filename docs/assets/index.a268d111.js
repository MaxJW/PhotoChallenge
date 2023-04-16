(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function j(){}const Ne=e=>e;function mi(e,t){for(const n in t)e[n]=t[n];return e}function ra(e){return e()}function zr(){return Object.create(null)}function Et(e){e.forEach(ra)}function fn(e){return typeof e=="function"}function Re(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function qu(e){return Object.keys(e).length===0}function zu(e,...t){if(e==null)return j;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function oa(e,t,n){e.$$.on_destroy.push(zu(t,n))}function Kn(e){return e==null?"":e}function Kr(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const aa=typeof window<"u";let ms=aa?()=>window.performance.now():()=>Date.now(),Yi=aa?e=>requestAnimationFrame(e):j;const de=new Set;function ca(e){de.forEach(t=>{t.c(e)||(de.delete(t),t.f())}),de.size!==0&&Yi(ca)}function gs(e){let t;return de.size===0&&Yi(ca),{promise:new Promise(n=>{de.add(t={c:e,f:n})}),abort(){de.delete(t)}}}function L(e,t){e.appendChild(t)}function ua(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Ku(e){const t=V("style");return Hu(ua(e),t),t.sheet}function Hu(e,t){return L(e.head||e,t),t.sheet}function ft(e,t,n){e.insertBefore(t,n||null)}function at(e){e.parentNode&&e.parentNode.removeChild(e)}function V(e){return document.createElement(e)}function Gu(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function Ye(e){return document.createTextNode(e)}function mt(){return Ye(" ")}function Xi(){return Ye("")}function At(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function O(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Qu(e){return Array.from(e.childNodes)}function gi(e,t){t=""+t,e.data!==t&&(e.data=t)}function Hr(e,t){e.value=t==null?"":t}function Rn(e,t,n){e.classList[n?"add":"remove"](t)}function Wu(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,s,t),i}class Yu{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,s=null){this.e||(this.is_svg?this.e=Gu(n.nodeName):this.e=V(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)ft(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(at)}}function Gr(e,t){return new e(t)}const Hn=new Map;let Gn=0;function Xu(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Ju(e,t){const n={stylesheet:Ku(t),rules:{}};return Hn.set(e,n),n}function Ji(e,t,n,s,i,r,o,a=0){const c=16.666/s;let u=`{
`;for(let v=0;v<=1;v+=c){const C=t+(n-t)*r(v);u+=v*100+`%{${o(C,1-C)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${Xu(l)}_${a}`,f=ua(e),{stylesheet:d,rules:p}=Hn.get(f)||Ju(f,e);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${l}`,d.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${h} ${s}ms linear ${i}ms 1 both`,Gn+=1,h}function Qn(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(e.style.animation=s.join(", "),Gn-=i,Gn||Zu())}function Zu(){Yi(()=>{Gn||(Hn.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&at(t)}),Hn.clear())})}function tl(e,t,n,s){if(!t)return j;const i=e.getBoundingClientRect();if(t.left===i.left&&t.right===i.right&&t.top===i.top&&t.bottom===i.bottom)return j;const{delay:r=0,duration:o=300,easing:a=Ne,start:c=ms()+r,end:u=c+o,tick:l=j,css:h}=n(e,{from:t,to:i},s);let f=!0,d=!1,p;function m(){h&&(p=Ji(e,0,1,o,r,a,h)),r||(d=!0)}function v(){h&&Qn(e,p),f=!1}return gs(C=>{if(!d&&C>=c&&(d=!0),d&&C>=u&&(l(1,0),v()),!f)return!1;if(d){const M=C-c,A=0+1*a(M/o);l(A,1-A)}return!0}),m(),l(0,1),v}function el(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:s}=t,i=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=s,la(e,i)}}function la(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const s=getComputedStyle(e),i=s.transform==="none"?"":s.transform;e.style.transform=`${i} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}let Xe;function ze(e){Xe=e}function ha(){if(!Xe)throw new Error("Function called outside component initialization");return Xe}function nl(e){ha().$$.on_mount.push(e)}function sl(e){ha().$$.on_destroy.push(e)}const ue=[],yi=[];let pe=[];const vi=[],il=Promise.resolve();let wi=!1;function rl(){wi||(wi=!0,il.then(fa))}function we(e){pe.push(e)}function ol(e){vi.push(e)}const Js=new Set;let ae=0;function fa(){if(ae!==0)return;const e=Xe;do{try{for(;ae<ue.length;){const t=ue[ae];ae++,ze(t),al(t.$$)}}catch(t){throw ue.length=0,ae=0,t}for(ze(null),ue.length=0,ae=0;yi.length;)yi.pop()();for(let t=0;t<pe.length;t+=1){const n=pe[t];Js.has(n)||(Js.add(n),n())}pe.length=0}while(ue.length);for(;vi.length;)vi.pop()();wi=!1,Js.clear(),ze(e)}function al(e){if(e.fragment!==null){e.update(),Et(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(we)}}function cl(e){const t=[],n=[];pe.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),pe=t}let Fe;function da(){return Fe||(Fe=Promise.resolve(),Fe.then(()=>{Fe=null})),Fe}function Wn(e,t,n){e.dispatchEvent(Wu(`${t?"intro":"outro"}${n}`))}const Un=new Set;let Lt;function ys(){Lt={r:0,c:[],p:Lt}}function vs(){Lt.r||Et(Lt.c),Lt=Lt.p}function lt(e,t){e&&e.i&&(Un.delete(e),e.i(t))}function yt(e,t,n,s){if(e&&e.o){if(Un.has(e))return;Un.add(e),Lt.c.push(()=>{Un.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}const pa={duration:0};function ul(e,t,n){const s={direction:"in"};let i=t(e,n,s),r=!1,o,a,c=0;function u(){o&&Qn(e,o)}function l(){const{delay:f=0,duration:d=300,easing:p=Ne,tick:m=j,css:v}=i||pa;v&&(o=Ji(e,0,1,d,f,p,v,c++)),m(0,1);const C=ms()+f,M=C+d;a&&a.abort(),r=!0,we(()=>Wn(e,!0,"start")),a=gs(A=>{if(r){if(A>=M)return m(1,0),Wn(e,!0,"end"),u(),r=!1;if(A>=C){const U=p((A-C)/d);m(U,1-U)}}return r})}let h=!1;return{start(){h||(h=!0,Qn(e),fn(i)?(i=i(s),da().then(l)):l())},invalidate(){h=!1},end(){r&&(u(),r=!1)}}}function ll(e,t,n){const s={direction:"out"};let i=t(e,n,s),r=!0,o;const a=Lt;a.r+=1;function c(){const{delay:u=0,duration:l=300,easing:h=Ne,tick:f=j,css:d}=i||pa;d&&(o=Ji(e,1,0,l,u,h,d));const p=ms()+u,m=p+l;we(()=>Wn(e,!1,"start")),gs(v=>{if(r){if(v>=m)return f(0,1),Wn(e,!1,"end"),--a.r||Et(a.c),!1;if(v>=p){const C=h((v-p)/l);f(1-C,C)}}return r})}return fn(i)?da().then(()=>{i=i(s),c()}):c(),{end(u){u&&i.tick&&i.tick(1,0),r&&(o&&Qn(e,o),r=!1)}}}function hl(e,t){yt(e,1,1,()=>{t.delete(e.key)})}function fl(e,t){e.f(),hl(e,t)}function dl(e,t,n,s,i,r,o,a,c,u,l,h){let f=e.length,d=r.length,p=f;const m={};for(;p--;)m[e[p].key]=p;const v=[],C=new Map,M=new Map,A=[];for(p=d;p--;){const q=h(i,r,p),dt=n(q);let _t=o.get(dt);_t?s&&A.push(()=>_t.p(q,t)):(_t=u(dt,q),_t.c()),C.set(dt,v[p]=_t),dt in m&&M.set(dt,Math.abs(p-m[dt]))}const U=new Set,vt=new Set;function oe(q){lt(q,1),q.m(a,l),o.set(q.key,q),l=q.first,d--}for(;f&&d;){const q=v[d-1],dt=e[f-1],_t=q.key,Nn=dt.key;q===dt?(l=q.first,f--,d--):C.has(Nn)?!o.has(_t)||U.has(_t)?oe(q):vt.has(Nn)?f--:M.get(_t)>M.get(Nn)?(vt.add(_t),oe(q)):(U.add(Nn),f--):(c(dt,o),f--)}for(;f--;){const q=e[f];C.has(q.key)||c(q,o)}for(;d;)oe(v[d-1]);return Et(A),v}function pl(e,t){const n={},s={},i={$$scope:1};let r=e.length;for(;r--;){const o=e[r],a=t[r];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);e[r]=a}else for(const c in o)i[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function ml(e){return typeof e=="object"&&e!==null?e:{}}function gl(e,t,n){const s=e.$$.props[t];s!==void 0&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function Ee(e){e&&e.c()}function Xt(e,t,n,s){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),s||we(()=>{const o=e.$$.on_mount.map(ra).filter(fn);e.$$.on_destroy?e.$$.on_destroy.push(...o):Et(o),e.$$.on_mount=[]}),r.forEach(we)}function Jt(e,t){const n=e.$$;n.fragment!==null&&(cl(n.after_update),Et(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function yl(e,t){e.$$.dirty[0]===-1&&(ue.push(e),rl(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function dn(e,t,n,s,i,r,o,a=[-1]){const c=Xe;ze(e);const u=e.$$={fragment:null,ctx:[],props:r,update:j,not_equal:i,bound:zr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:zr(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(e,t.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return u.ctx&&i(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),l&&yl(e,h)),f}):[],u.update(),l=!0,Et(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const h=Qu(t.target);u.fragment&&u.fragment.l(h),h.forEach(at)}else u.fragment&&u.fragment.c();t.intro&&lt(e.$$.fragment),Xt(e,t.target,t.anchor,t.customElement),fa()}ze(c)}class pn{$destroy(){Jt(this,1),this.$destroy=j}$on(t,n){if(!fn(n))return j;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!qu(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},vl=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),s.push(n[l],n[h],n[f],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ma(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):vl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw new wl;const f=r<<2|a>>4;if(s.push(f),u!==64){const d=a<<4&240|u>>2;if(s.push(d),h!==64){const p=u<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class wl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const El=function(e){const t=ma(e);return ga.encodeByteArray(t,!0)},Yn=function(e){return El(e).replace(/\./g,"")},_l=function(e){try{return ga.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=()=>Tl().__FIREBASE_DEFAULTS__,Il=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Cl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&_l(e[1]);return t&&JSON.parse(t)},ya=()=>{try{return bl()||Il()||Cl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Sl=e=>{var t,n;return(n=(t=ya())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Dl=e=>{const t=Sl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Al=()=>{var e;return(e=ya())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Yn(JSON.stringify(n)),Yn(JSON.stringify(o)),a].join(".")}function Rl(){try{return typeof indexedDB=="object"}catch{return!1}}function xl(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="FirebaseError";class xe extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Ol,Object.setPrototypeOf(this,xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,va.prototype.create)}}class va{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Ll(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xe(i,a,s)}}function Ll(e,t){return e.replace(Ml,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Ml=/\{\$([^}]+)}/g;function Ei(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Qr(r)&&Qr(o)){if(!Ei(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Qr(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e){return e&&e._delegate?e._delegate:e}class Je{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new kl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fl(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Pl(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pl(e){return e===Kt?void 0:e}function Fl(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new $l(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(R||(R={}));const Ul={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},Bl=R.INFO,jl={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},ql=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=jl[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class wa{constructor(t){this.name=t,this._logLevel=Bl,this._logHandler=ql,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in R))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ul[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...t),this._logHandler(this,R.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...t),this._logHandler(this,R.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,R.INFO,...t),this._logHandler(this,R.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,R.WARN,...t),this._logHandler(this,R.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...t),this._logHandler(this,R.ERROR,...t)}}const zl=(e,t)=>t.some(n=>e instanceof n);let Wr,Yr;function Kl(){return Wr||(Wr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hl(){return Yr||(Yr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ea=new WeakMap,_i=new WeakMap,_a=new WeakMap,Zs=new WeakMap,Zi=new WeakMap;function Gl(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Mt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ea.set(n,e)}).catch(()=>{}),Zi.set(t,e),t}function Ql(e){if(_i.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});_i.set(e,t)}let Ti={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return _i.get(e);if(t==="objectStoreNames")return e.objectStoreNames||_a.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Wl(e){Ti=e(Ti)}function Yl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(ti(this),t,...n);return _a.set(s,t.sort?t.sort():[t]),Mt(s)}:Hl().includes(e)?function(...t){return e.apply(ti(this),t),Mt(Ea.get(this))}:function(...t){return Mt(e.apply(ti(this),t))}}function Xl(e){return typeof e=="function"?Yl(e):(e instanceof IDBTransaction&&Ql(e),zl(e,Kl())?new Proxy(e,Ti):e)}function Mt(e){if(e instanceof IDBRequest)return Gl(e);if(Zs.has(e))return Zs.get(e);const t=Xl(e);return t!==e&&(Zs.set(e,t),Zi.set(t,e)),t}const ti=e=>Zi.get(e);function Jl(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=Mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Zl=["get","getKey","getAll","getAllKeys","count"],th=["put","add","delete","clear"],ei=new Map;function Xr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ei.get(t))return ei.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=th.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Zl.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return ei.set(t,r),r}Wl(e=>({...e,get:(t,n,s)=>Xr(t,n)||e.get(t,n,s),has:(t,n)=>!!Xr(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function nh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const bi="@firebase/app",Jr="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new wa("@firebase/app"),sh="@firebase/app-compat",ih="@firebase/analytics-compat",rh="@firebase/analytics",oh="@firebase/app-check-compat",ah="@firebase/app-check",ch="@firebase/auth",uh="@firebase/auth-compat",lh="@firebase/database",hh="@firebase/database-compat",fh="@firebase/functions",dh="@firebase/functions-compat",ph="@firebase/installations",mh="@firebase/installations-compat",gh="@firebase/messaging",yh="@firebase/messaging-compat",vh="@firebase/performance",wh="@firebase/performance-compat",Eh="@firebase/remote-config",_h="@firebase/remote-config-compat",Th="@firebase/storage",bh="@firebase/storage-compat",Ih="@firebase/firestore",Ch="@firebase/firestore-compat",Sh="firebase",Dh="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="[DEFAULT]",Ah={[bi]:"fire-core",[sh]:"fire-core-compat",[rh]:"fire-analytics",[ih]:"fire-analytics-compat",[ah]:"fire-app-check",[oh]:"fire-app-check-compat",[ch]:"fire-auth",[uh]:"fire-auth-compat",[lh]:"fire-rtdb",[hh]:"fire-rtdb-compat",[fh]:"fire-fn",[dh]:"fire-fn-compat",[ph]:"fire-iid",[mh]:"fire-iid-compat",[gh]:"fire-fcm",[yh]:"fire-fcm-compat",[vh]:"fire-perf",[wh]:"fire-perf-compat",[Eh]:"fire-rc",[_h]:"fire-rc-compat",[Th]:"fire-gcs",[bh]:"fire-gcs-compat",[Ih]:"fire-fst",[Ch]:"fire-fst-compat","fire-js":"fire-js",[Sh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new Map,Ci=new Map;function kh(e,t){try{e.container.addComponent(t)}catch(n){Zt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Jn(e){const t=e.name;if(Ci.has(t))return Zt.debug(`There were multiple attempts to register component ${t}.`),!1;Ci.set(t,e);for(const n of Xn.values())kh(n,e);return!0}function Nh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$t=new va("app","Firebase",Rh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=Dh;function Ta(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Ii,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(n||(n=Al()),!n)throw $t.create("no-options");const r=Xn.get(i);if(r){if(Ei(n,r.options)&&Ei(s,r.config))return r;throw $t.create("duplicate-app",{appName:i})}const o=new Vl(i);for(const c of Ci.values())o.addComponent(c);const a=new xh(n,s,o);return Xn.set(i,a),a}function Lh(e=Ii){const t=Xn.get(e);if(!t&&e===Ii)return Ta();if(!t)throw $t.create("no-app",{appName:e});return t}function me(e,t,n){var s;let i=(s=Ah[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zt.warn(a.join(" "));return}Jn(new Je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="firebase-heartbeat-database",$h=1,Ze="firebase-heartbeat-store";let ni=null;function ba(){return ni||(ni=Jl(Mh,$h,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ze)}}}).catch(e=>{throw $t.create("idb-open",{originalErrorMessage:e.message})})),ni}async function Ph(e){try{return(await ba()).transaction(Ze).objectStore(Ze).get(Ia(e))}catch(t){if(t instanceof xe)Zt.warn(t.message);else{const n=$t.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Zt.warn(n.message)}}}async function Zr(e,t){try{const s=(await ba()).transaction(Ze,"readwrite");return await s.objectStore(Ze).put(t,Ia(e)),s.done}catch(n){if(n instanceof xe)Zt.warn(n.message);else{const s=$t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(s.message)}}}function Ia(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=1024,Vh=30*24*60*60*1e3;class Uh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=to();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Vh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=to(),{heartbeatsToSend:n,unsentEntries:s}=Bh(this._heartbeatsCache.heartbeats),i=Yn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function to(){return new Date().toISOString().substring(0,10)}function Bh(e,t=Fh){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),eo(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),eo(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class jh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rl()?xl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ph(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function eo(e){return Yn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(e){Jn(new Je("platform-logger",t=>new eh(t),"PRIVATE")),Jn(new Je("heartbeat",t=>new Uh(t),"PRIVATE")),me(bi,Jr,e),me(bi,Jr,"esm2017"),me("fire-js","")}qh("");var zh="firebase",Kh="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */me(zh,Kh,"app");var Hh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,tr=tr||{},I=Hh||self;function Zn(){}function ws(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function mn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Gh(e){return Object.prototype.hasOwnProperty.call(e,si)&&e[si]||(e[si]=++Qh)}var si="closure_uid_"+(1e9*Math.random()>>>0),Qh=0;function Wh(e,t,n){return e.call.apply(e.bind,arguments)}function Yh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function rt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=Wh:rt=Yh,rt.apply(null,arguments)}function xn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function tt(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function qt(){this.s=this.s,this.o=this.o}var Xh=0;qt.prototype.s=!1;qt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Xh!=0)&&Gh(this)};qt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ca=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function er(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function no(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ws(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function ot(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var Jh=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{I.addEventListener("test",Zn,t),I.removeEventListener("test",Zn,t)}catch{}return e}();function ts(e){return/^[\s\xa0]*$/.test(e)}var so=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ii(e,t){return e<t?-1:e>t?1:0}function Es(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function Tt(e){return Es().indexOf(e)!=-1}function nr(e){return nr[" "](e),e}nr[" "]=Zn;function Zh(e){var t=nf;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var tf=Tt("Opera"),_e=Tt("Trident")||Tt("MSIE"),Sa=Tt("Edge"),Si=Sa||_e,Da=Tt("Gecko")&&!(Es().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge"))&&!(Tt("Trident")||Tt("MSIE"))&&!Tt("Edge"),ef=Es().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge");function Aa(){var e=I.document;return e?e.documentMode:void 0}var es;t:{var ri="",oi=function(){var e=Es();if(Da)return/rv:([^\);]+)(\)|;)/.exec(e);if(Sa)return/Edge\/([\d\.]+)/.exec(e);if(_e)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(ef)return/WebKit\/(\S+)/.exec(e);if(tf)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(oi&&(ri=oi?oi[1]:""),_e){var ai=Aa();if(ai!=null&&ai>parseFloat(ri)){es=String(ai);break t}}es=ri}var nf={};function sf(){return Zh(function(){let e=0;const t=so(String(es)).split("."),n=so("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=ii(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ii(i[2].length==0,r[2].length==0)||ii(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Di;if(I.document&&_e){var io=Aa();Di=io||parseInt(es,10)||void 0}else Di=void 0;var rf=Di;function tn(e,t){if(ot.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Da){t:{try{nr(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:of[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&tn.X.h.call(this)}}tt(tn,ot);var of={2:"touch",3:"pen",4:"mouse"};tn.prototype.h=function(){tn.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var gn="closure_listenable_"+(1e6*Math.random()|0),af=0;function cf(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++af,this.ba=this.ea=!1}function _s(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function sr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function ka(e){const t={};for(const n in e)t[n]=e[n];return t}const ro="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Na(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<ro.length;r++)n=ro[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ts(e){this.src=e,this.g={},this.h=0}Ts.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=ki(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new cf(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function Ai(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Ca(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(_s(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ki(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var ir="closure_lm_"+(1e6*Math.random()|0),ci={};function Ra(e,t,n,s,i){if(s&&s.once)return Oa(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Ra(e,t[r],n,s,i);return null}return n=ar(n),e&&e[gn]?e.N(t,n,mn(s)?!!s.capture:!!s,i):xa(e,t,n,!1,s,i)}function xa(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=mn(i)?!!i.capture:!!i,a=or(e);if(a||(e[ir]=a=new Ts(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=uf(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Jh||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Ma(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uf(){function e(n){return t.call(e.src,e.listener,n)}const t=lf;return e}function Oa(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Oa(e,t[r],n,s,i);return null}return n=ar(n),e&&e[gn]?e.O(t,n,mn(s)?!!s.capture:!!s,i):xa(e,t,n,!0,s,i)}function La(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)La(e,t[r],n,s,i);else s=mn(s)?!!s.capture:!!s,n=ar(n),e&&e[gn]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=ki(r,n,s,i),-1<n&&(_s(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=or(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ki(t,n,s,i)),(n=-1<e?t[e]:null)&&rr(n))}function rr(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[gn])Ai(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Ma(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=or(t))?(Ai(n,e),n.h==0&&(n.src=null,t[ir]=null)):_s(e)}}}function Ma(e){return e in ci?ci[e]:ci[e]="on"+e}function lf(e,t){if(e.ba)e=!0;else{t=new tn(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&rr(e),e=n.call(s,t)}return e}function or(e){return e=e[ir],e instanceof Ts?e:null}var ui="__closure_events_fn_"+(1e9*Math.random()>>>0);function ar(e){return typeof e=="function"?e:(e[ui]||(e[ui]=function(t){return e.handleEvent(t)}),e[ui])}function X(){qt.call(this),this.i=new Ts(this),this.P=this,this.I=null}tt(X,qt);X.prototype[gn]=!0;X.prototype.removeEventListener=function(e,t,n,s){La(this,e,t,n,s)};function Z(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new ot(t,e);else if(t instanceof ot)t.target=t.target||e;else{var i=t;t=new ot(s,e),Na(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=On(o,s,!0,t)&&i}if(o=t.g=e,i=On(o,s,!0,t)&&i,i=On(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=On(o,s,!1,t)&&i}X.prototype.M=function(){if(X.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)_s(n[s]);delete e.g[t],e.h--}}this.I=null};X.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};X.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function On(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ai(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var cr=I.JSON.stringify;function hf(){var e=Fa;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ff{constructor(){this.h=this.g=null}add(t,n){const s=$a.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var $a=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new df,e=>e.reset());class df{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pf(e){I.setTimeout(()=>{throw e},0)}function Pa(e,t){Ni||mf(),Ri||(Ni(),Ri=!0),Fa.add(e,t)}var Ni;function mf(){var e=I.Promise.resolve(void 0);Ni=function(){e.then(gf)}}var Ri=!1,Fa=new ff;function gf(){for(var e;e=hf();){try{e.h.call(e.g)}catch(n){pf(n)}var t=$a;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ri=!1}function bs(e,t){X.call(this),this.h=e||1,this.g=t||I,this.j=rt(this.lb,this),this.l=Date.now()}tt(bs,X);w=bs.prototype;w.ca=!1;w.R=null;w.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Z(this,"tick"),this.ca&&(ur(this),this.start()))}};w.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ur(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}w.M=function(){bs.X.M.call(this),ur(this),delete this.g};function lr(e,t,n){if(typeof e=="function")n&&(e=rt(e,n));else if(e&&typeof e.handleEvent=="function")e=rt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function Va(e){e.g=lr(()=>{e.g=null,e.i&&(e.i=!1,Va(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class yf extends qt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Va(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function en(e){qt.call(this),this.h=e,this.g={}}tt(en,qt);var oo=[];function Ua(e,t,n,s){Array.isArray(n)||(n&&(oo[0]=n.toString()),n=oo);for(var i=0;i<n.length;i++){var r=Ra(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Ba(e){sr(e.g,function(t,n){this.g.hasOwnProperty(n)&&rr(t)},e),e.g={}}en.prototype.M=function(){en.X.M.call(this),Ba(this)};en.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Is(){this.g=!0}Is.prototype.Aa=function(){this.g=!1};function vf(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function wf(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function fe(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+_f(e,n)+(s?" "+s:"")})}function Ef(e,t){e.info(function(){return"TIMEOUT: "+t})}Is.prototype.info=function(){};function _f(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return cr(n)}catch{return t}}var ne={},ao=null;function Cs(){return ao=ao||new X}ne.Pa="serverreachability";function ja(e){ot.call(this,ne.Pa,e)}tt(ja,ot);function nn(e){const t=Cs();Z(t,new ja(t))}ne.STAT_EVENT="statevent";function qa(e,t){ot.call(this,ne.STAT_EVENT,e),this.stat=t}tt(qa,ot);function ut(e){const t=Cs();Z(t,new qa(t,e))}ne.Qa="timingevent";function za(e,t){ot.call(this,ne.Qa,e),this.size=t}tt(za,ot);function yn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var Ss={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ka={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function hr(){}hr.prototype.h=null;function co(e){return e.h||(e.h=e.i())}function Ha(){}var vn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function fr(){ot.call(this,"d")}tt(fr,ot);function dr(){ot.call(this,"c")}tt(dr,ot);var xi;function Ds(){}tt(Ds,hr);Ds.prototype.g=function(){return new XMLHttpRequest};Ds.prototype.i=function(){return{}};xi=new Ds;function wn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new en(this),this.O=Tf,e=Si?125:void 0,this.T=new bs(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ga}function Ga(){this.i=null,this.g="",this.h=!1}var Tf=45e3,Oi={},ns={};w=wn.prototype;w.setTimeout=function(e){this.O=e};function Li(e,t,n){e.K=1,e.v=ks(Nt(t)),e.s=n,e.P=!0,Qa(e,null)}function Qa(e,t){e.F=Date.now(),En(e),e.A=Nt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),nc(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Ga,e.g=bc(e.l,n?t:null,!e.s),0<e.N&&(e.L=new yf(rt(e.La,e,e.g),e.N)),Ua(e.S,e.g,"readystatechange",e.ib),t=e.H?ka(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),nn(),vf(e.j,e.u,e.A,e.m,e.U,e.s)}w.ib=function(e){e=e.target;const t=this.L;t&&St(e)==3?t.l():this.La(e)};w.La=function(e){try{if(e==this.g)t:{const l=St(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Si||this.g&&(this.h.h||this.g.fa()||fo(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?nn(3):nn(2)),As(this);var n=this.g.aa();this.Y=n;e:if(Wa(this)){var s=fo(this.g);e="";var i=s.length,r=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),Ke(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,wf(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ts(a)){var u=a;break e}}u=null}if(n=u)fe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Mi(this,n);else{this.i=!1,this.o=3,ut(12),Ht(this),Ke(this);break t}}this.P?(Ya(this,l,o),Si&&this.i&&l==3&&(Ua(this.S,this.T,"tick",this.hb),this.T.start())):(fe(this.j,this.m,o,null),Mi(this,o)),l==4&&Ht(this),this.i&&!this.I&&(l==4?wc(this.l,this):(this.i=!1,En(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),Ht(this),Ke(this)}}}catch{}finally{}};function Wa(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Ya(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=bf(e,n),i==ns){t==4&&(e.o=4,ut(14),s=!1),fe(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Oi){e.o=4,ut(15),fe(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else fe(e.j,e.m,i,null),Mi(e,i);Wa(e)&&i!=ns&&i!=Oi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ut(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Er(t),t.K=!0,ut(11))):(fe(e.j,e.m,n,"[Invalid Chunked Response]"),Ht(e),Ke(e))}w.hb=function(){if(this.g){var e=St(this.g),t=this.g.fa();this.C<t.length&&(As(this),Ya(this,e,t),this.i&&e!=4&&En(this))}};function bf(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?ns:(n=Number(t.substring(n,s)),isNaN(n)?Oi:(s+=1,s+n>t.length?ns:(t=t.substr(s,n),e.C=s+n,t)))}w.cancel=function(){this.I=!0,Ht(this)};function En(e){e.V=Date.now()+e.O,Xa(e,e.O)}function Xa(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=yn(rt(e.gb,e),t)}function As(e){e.B&&(I.clearTimeout(e.B),e.B=null)}w.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ef(this.j,this.A),this.K!=2&&(nn(),ut(17)),Ht(this),this.o=2,Ke(this)):Xa(this,this.V-e)};function Ke(e){e.l.G==0||e.I||wc(e.l,e)}function Ht(e){As(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,ur(e.T),Ba(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Mi(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||$i(n.h,e))){if(!e.J&&$i(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)rs(n),xs(n);else break t;wr(n),ut(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=yn(rt(n.cb,n),6e3));if(1>=rc(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Gt(n,11)}else if((e.J||n.g==e)&&rs(n),!ts(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=e.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(pr(r,r.h),r.h=null))}if(s.D){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,P(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Tc(s,s.H?s.ka:null,s.V),o.J){oc(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(As(a),En(a)),s.g=o}else yc(s);0<n.i.length&&Os(n)}else u[0]!="stop"&&u[0]!="close"||Gt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Gt(n,7):vr(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}nn(4)}catch{}}function If(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ws(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Cf(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ws(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Ja(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ws(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Cf(e),s=If(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var Za=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sf(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Wt){this.h=t!==void 0?t:e.h,ss(this,e.j),this.s=e.s,this.g=e.g,is(this,e.m),this.l=e.l,t=e.i;var n=new sn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),uo(this,n),this.o=e.o}else e&&(n=String(e).match(Za))?(this.h=!!t,ss(this,n[1]||"",!0),this.s=Ue(n[2]||""),this.g=Ue(n[3]||"",!0),is(this,n[4]),this.l=Ue(n[5]||"",!0),uo(this,n[6]||"",!0),this.o=Ue(n[7]||"")):(this.h=!!t,this.i=new sn(null,this.h))}Wt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Be(t,lo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Be(t,lo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Be(n,n.charAt(0)=="/"?kf:Af,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Be(n,Rf)),e.join("")};function Nt(e){return new Wt(e)}function ss(e,t,n){e.j=n?Ue(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function is(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function uo(e,t,n){t instanceof sn?(e.i=t,xf(e.i,e.h)):(n||(t=Be(t,Nf)),e.i=new sn(t,e.h))}function P(e,t,n){e.i.set(t,n)}function ks(e){return P(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ue(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Be(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Df),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Df(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var lo=/[#\/\?@]/g,Af=/[#\?:]/g,kf=/[#\?]/g,Nf=/[#\?@]/g,Rf=/#/g;function sn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function zt(e){e.g||(e.g=new Map,e.h=0,e.i&&Sf(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}w=sn.prototype;w.add=function(e,t){zt(this),this.i=null,e=Oe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function tc(e,t){zt(e),t=Oe(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ec(e,t){return zt(e),t=Oe(e,t),e.g.has(t)}w.forEach=function(e,t){zt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};w.oa=function(){zt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};w.W=function(e){zt(this);let t=[];if(typeof e=="string")ec(this,e)&&(t=t.concat(this.g.get(Oe(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};w.set=function(e,t){return zt(this),this.i=null,e=Oe(this,e),ec(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};w.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function nc(e,t,n){tc(e,t),0<n.length&&(e.i=null,e.g.set(Oe(e,t),er(n)),e.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Oe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function xf(e,t){t&&!e.j&&(zt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(tc(this,s),nc(this,i,n))},e)),e.j=t}var Of=class{constructor(e,t){this.h=e,this.g=t}};function sc(e){this.l=e||Lf,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ga&&I.g.Ga()&&I.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Lf=10;function ic(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function rc(e){return e.h?1:e.g?e.g.size:0}function $i(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function pr(e,t){e.g?e.g.add(t):e.h=t}function oc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}sc.prototype.cancel=function(){if(this.i=ac(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ac(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return er(e.i)}function mr(){}mr.prototype.stringify=function(e){return I.JSON.stringify(e,void 0)};mr.prototype.parse=function(e){return I.JSON.parse(e,void 0)};function Mf(){this.g=new mr}function $f(e,t,n){const s=n||"";try{Ja(e,function(i,r){let o=i;mn(i)&&(o=cr(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Pf(e,t){const n=new Is;if(I.Image){const s=new Image;s.onload=xn(Ln,n,s,"TestLoadImage: loaded",!0,t),s.onerror=xn(Ln,n,s,"TestLoadImage: error",!1,t),s.onabort=xn(Ln,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=xn(Ln,n,s,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Ln(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function _n(e){this.l=e.ac||null,this.j=e.jb||!1}tt(_n,hr);_n.prototype.g=function(){return new Ns(this.l,this.j)};_n.prototype.i=function(e){return function(){return e}}({});function Ns(e,t){X.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=gr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Ns,X);var gr=0;w=Ns.prototype;w.open=function(e,t){if(this.readyState!=gr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,rn(this)};w.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||I).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tn(this)),this.readyState=gr};w.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cc(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function cc(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}w.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Tn(this):rn(this),this.readyState==3&&cc(this)}};w.Va=function(e){this.g&&(this.response=this.responseText=e,Tn(this))};w.Ua=function(e){this.g&&(this.response=e,Tn(this))};w.ga=function(){this.g&&Tn(this)};function Tn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,rn(e)}w.setRequestHeader=function(e,t){this.v.append(e,t)};w.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function rn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Ff=I.JSON.parse;function B(e){X.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=uc,this.K=this.L=!1}tt(B,X);var uc="",Vf=/^https?$/i,Uf=["POST","PUT"];w=B.prototype;w.Ka=function(e){this.L=e};w.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():xi.g(),this.C=this.u?co(this.u):co(xi),this.g.onreadystatechange=rt(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){ho(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=I.FormData&&e instanceof I.FormData,!(0<=Ca(Uf,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{fc(this),0<this.B&&((this.K=Bf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.qa,this)):this.A=lr(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){ho(this,r)}};function Bf(e){return _e&&sf()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}w.qa=function(){typeof tr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Z(this,"timeout"),this.abort(8))};function ho(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,lc(e),Rs(e)}function lc(e){e.D||(e.D=!0,Z(e,"complete"),Z(e,"error"))}w.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Z(this,"complete"),Z(this,"abort"),Rs(this))};w.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rs(this,!0)),B.X.M.call(this)};w.Ha=function(){this.s||(this.F||this.v||this.l?hc(this):this.fb())};w.fb=function(){hc(this)};function hc(e){if(e.h&&typeof tr<"u"&&(!e.C[1]||St(e)!=4||e.aa()!=2)){if(e.v&&St(e)==4)lr(e.Ha,0,e);else if(Z(e,"readystatechange"),St(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Za)[1]||null;if(!i&&I.self&&I.self.location){var r=I.self.location.protocol;i=r.substr(0,r.length-1)}s=!Vf.test(i?i.toLowerCase():"")}n=s}if(n)Z(e,"complete"),Z(e,"success");else{e.m=6;try{var o=2<St(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",lc(e)}}finally{Rs(e)}}}}function Rs(e,t){if(e.g){fc(e);const n=e.g,s=e.C[0]?Zn:null;e.g=null,e.C=null,t||Z(e,"ready");try{n.onreadystatechange=s}catch{}}}function fc(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}function St(e){return e.g?e.g.readyState:0}w.aa=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}};w.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Ff(t)}};function fo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case uc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}w.Ea=function(){return this.m};w.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dc(e){let t="";return sr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function yr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=dc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):P(e,t,n))}function Ve(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function pc(e){this.Ca=0,this.i=[],this.j=new Is,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ve("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ve("baseRetryDelayMs",5e3,e),this.bb=Ve("retryDelaySeedMs",1e4,e),this.$a=Ve("forwardChannelMaxRetries",2,e),this.ta=Ve("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new sc(e&&e.concurrentRequestLimit),this.Fa=new Mf,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}w=pc.prototype;w.ma=8;w.G=1;function vr(e){if(mc(e),e.G==3){var t=e.U++,n=Nt(e.F);P(n,"SID",e.I),P(n,"RID",t),P(n,"TYPE","terminate"),bn(e,n),t=new wn(e,e.j,t,void 0),t.K=2,t.v=ks(Nt(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(t.v.toString(),"")),!n&&I.Image&&(new Image().src=t.v,n=!0),n||(t.g=bc(t.l,null),t.g.da(t.v)),t.F=Date.now(),En(t)}_c(e)}function xs(e){e.g&&(Er(e),e.g.cancel(),e.g=null)}function mc(e){xs(e),e.u&&(I.clearTimeout(e.u),e.u=null),rs(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function Os(e){ic(e.h)||e.m||(e.m=!0,Pa(e.Ja,e),e.C=0)}function jf(e,t){return rc(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=yn(rt(e.Ja,e,t),Ec(e,e.C)),e.C++,!0)}w.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new wn(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=ka(r),Na(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=gc(this,i,t),n=Nt(this.F),P(n,"RID",e),P(n,"CVER",22),this.D&&P(n,"X-HTTP-Session-Id",this.D),bn(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(dc(r)))+"&"+t:this.o&&yr(n,this.o,r)),pr(this.h,i),this.Ya&&P(n,"TYPE","init"),this.O?(P(n,"$req",t),P(n,"SID","null"),i.Z=!0,Li(i,n,null)):Li(i,n,t),this.G=2}}else this.G==3&&(e?po(this,e):this.i.length==0||ic(this.h)||po(this))};function po(e,t){var n;t?n=t.m:n=e.U++;const s=Nt(e.F);P(s,"SID",e.I),P(s,"RID",n),P(s,"AID",e.T),bn(e,s),e.o&&e.s&&yr(s,e.o,e.s),n=new wn(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=gc(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),pr(e.h,n),Li(n,s,t)}function bn(e,t){e.ia&&sr(e.ia,function(n,s){P(t,s,n)}),e.l&&Ja({},function(n,s){P(t,s,n)})}function gc(e,t,n){n=Math.min(e.i.length,n);var s=e.l?rt(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{$f(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function yc(e){e.g||e.u||(e.Z=1,Pa(e.Ia,e),e.A=0)}function wr(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=yn(rt(e.Ia,e),Ec(e,e.A)),e.A++,!0)}w.Ia=function(){if(this.u=null,vc(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=yn(rt(this.eb,this),e)}};w.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ut(10),xs(this),vc(this))};function Er(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function vc(e){e.g=new wn(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Nt(e.sa);P(t,"RID","rpc"),P(t,"SID",e.I),P(t,"CI",e.L?"0":"1"),P(t,"AID",e.T),P(t,"TYPE","xmlhttp"),bn(e,t),e.o&&e.s&&yr(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=ks(Nt(t)),n.s=null,n.P=!0,Qa(n,e)}w.cb=function(){this.v!=null&&(this.v=null,xs(this),wr(this),ut(19))};function rs(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function wc(e,t){var n=null;if(e.g==t){rs(e),Er(e),e.g=null;var s=2}else if($i(e.h,t))n=t.D,oc(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=Cs(),Z(s,new za(s,n)),Os(e)}else yc(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&jf(e,t)||s==2&&wr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Gt(e,5);break;case 4:Gt(e,10);break;case 3:Gt(e,6);break;default:Gt(e,2)}}}function Ec(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Gt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=rt(e.kb,e);n||(n=new Wt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||ss(n,"https"),ks(n)),Pf(n.toString(),s)}else ut(2);e.G=0,e.l&&e.l.va(t),_c(e),mc(e)}w.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function _c(e){if(e.G=0,e.la=[],e.l){const t=ac(e.h);(t.length!=0||e.i.length!=0)&&(no(e.la,t),no(e.la,e.i),e.h.i.length=0,er(e.i),e.i.length=0),e.l.ua()}}function Tc(e,t,n){var s=n instanceof Wt?Nt(n):new Wt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),is(s,s.m);else{var i=I.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Wt(null,void 0);s&&ss(r,s),t&&(r.g=t),i&&is(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&P(s,n,t),P(s,"VER",e.ma),bn(e,s),s}function bc(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new B(new _n({jb:!0})):new B(e.ra),t.Ka(e.H),t}function Ic(){}w=Ic.prototype;w.xa=function(){};w.wa=function(){};w.va=function(){};w.ua=function(){};w.Ra=function(){};function os(){if(_e&&!(10<=Number(rf)))throw Error("Environmental error: no available transport.")}os.prototype.g=function(e,t){return new gt(e,t)};function gt(e,t){X.call(this),this.g=new pc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!ts(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ts(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Le(this)}tt(gt,X);gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;ut(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Tc(e,null,e.V),Os(e)};gt.prototype.close=function(){vr(this.g)};gt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=cr(e),e=n);t.i.push(new Of(t.ab++,e)),t.G==3&&Os(t)};gt.prototype.M=function(){this.g.l=null,delete this.j,vr(this.g),delete this.g,gt.X.M.call(this)};function Cc(e){fr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}tt(Cc,fr);function Sc(){dr.call(this),this.status=1}tt(Sc,dr);function Le(e){this.g=e}tt(Le,Ic);Le.prototype.xa=function(){Z(this.g,"a")};Le.prototype.wa=function(e){Z(this.g,new Cc(e))};Le.prototype.va=function(e){Z(this.g,new Sc)};Le.prototype.ua=function(){Z(this.g,"b")};os.prototype.createWebChannel=os.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;Ss.NO_ERROR=0;Ss.TIMEOUT=8;Ss.HTTP_ERROR=6;Ka.COMPLETE="complete";Ha.EventType=vn;vn.OPEN="a";vn.CLOSE="b";vn.ERROR="c";vn.MESSAGE="d";X.prototype.listen=X.prototype.N;B.prototype.listenOnce=B.prototype.O;B.prototype.getLastError=B.prototype.Oa;B.prototype.getLastErrorCode=B.prototype.Ea;B.prototype.getStatus=B.prototype.aa;B.prototype.getResponseJson=B.prototype.Sa;B.prototype.getResponseText=B.prototype.fa;B.prototype.send=B.prototype.da;B.prototype.setWithCredentials=B.prototype.Ka;var qf=function(){return new os},zf=function(){return Cs()},li=Ss,Kf=Ka,Hf=ne,mo={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Gf=_n,Mn=Ha,Qf=B;const go="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Me="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new wa("@firebase/firestore");function yo(){return te.logLevel}function E(e,...t){if(te.logLevel<=R.DEBUG){const n=t.map(_r);te.debug(`Firestore (${Me}): ${e}`,...n)}}function Rt(e,...t){if(te.logLevel<=R.ERROR){const n=t.map(_r);te.error(`Firestore (${Me}): ${e}`,...n)}}function as(e,...t){if(te.logLevel<=R.WARN){const n=t.map(_r);te.warn(`Firestore (${Me}): ${e}`,...n)}}function _r(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e="Unexpected state"){const t=`FIRESTORE (${Me}) INTERNAL ASSERTION FAILED: `+e;throw Rt(t),new Error(t)}function $(e,t){e||b()}function D(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends xe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class Yf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Xf{constructor(t){this.t=t,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Pt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Pt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($(typeof s.accessToken=="string"),new Dc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string"),new nt(t)}}class Jf{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Zf{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Jf(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class td{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ed{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=r=>{r.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?($(typeof n.token=="string"),this.T=n.token,new td(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=nd(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function x(e,t){return e<t?-1:e>t?1:0}function Te(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new T(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new T(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return G.fromMillis(Date.now())}static fromDate(t){return G.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new G(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?x(this.nanoseconds,t.nanoseconds):x(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new G(0,0))}static max(){return new S(new G(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,n,s){n===void 0?n=0:n>t.length&&b(),s===void 0?s=t.length-n:s>t.length-n&&b(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return on.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof on?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class F extends on{construct(t,n,s){return new F(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new T(g.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new F(n)}static emptyPath(){return new F([])}}const sd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends on{construct(t,n,s){return new it(t,n,s)}static isValidIdentifier(t){return sd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new T(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new T(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new T(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new T(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(t){this.path=t}static fromPath(t){return new _(F.fromString(t))}static fromName(t){return new _(F.fromString(t).popFirst(5))}static empty(){return new _(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&F.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return F.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _(new F(t.slice()))}}function id(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=S.fromTimestamp(s===1e9?new G(n+1,0):new G(n,s));return new Ut(i,_.empty(),t)}function rd(e){return new Ut(e.readTime,e.key,-1)}class Ut{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Ut(S.min(),_.empty(),-1)}static max(){return new Ut(S.max(),_.empty(),-1)}}function od(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=_.comparator(e.documentKey,t.documentKey),n!==0?n:x(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==ad)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new y((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):y.reject(n)}static resolve(t){return new y((n,s)=>{n(t)})}static reject(t){return new y((n,s)=>{s(t)})}static waitFor(t){return new y((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=y.resolve(!1);for(const s of t)n=n.next(i=>i?y.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new y((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(t,n){return new y((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Cn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}Tr.ct=-1;function Ls(e){return e==null}function cs(e){return e===0&&1/e==-1/0}function ud(e){return typeof e=="number"&&Number.isInteger(e)&&!cs(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function se(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function kc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,n){this.comparator=t,this.root=n||J.EMPTY}insert(t,n){return new W(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,J.BLACK,null,null))}remove(t){return new W(this.comparator,this.root.remove(t,this.comparator).copy(null,null,J.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $n(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $n(this.root,t,this.comparator,!1)}getReverseIterator(){return new $n(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $n(this.root,t,this.comparator,!0)}}class $n{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class J{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:J.RED,this.left=i!=null?i:J.EMPTY,this.right=r!=null?r:J.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new J(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return J.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const t=this.left.check();if(t!==this.right.check())throw b();return t+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,n,s,i){return this}insert(e,t,n){return new J(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.comparator=t,this.data=new W(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new wo(this.data.getIterator())}getIteratorFrom(t){return new wo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Q)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Q(this.comparator);return n.data=t,n}}class wo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new wt([])}unionWith(t){let n=new Q(it.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new wt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Te(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ld("Invalid base64 string: "+i):i}}(t);return new ct(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new ct(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const hd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(e){if($(!!e),typeof e=="string"){let t=0;const n=hd.exec(e);if($(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:K(e.seconds),nanos:K(e.nanos)}}function K(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function be(e){return typeof e=="string"?ct.fromBase64String(e):ct.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rc(e){const t=e.mapValue.fields.__previous_value__;return Nc(t)?Rc(t):t}function an(e){const t=Bt(e.mapValue.fields.__local_write_time__.timestampValue);return new G(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class cn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new cn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof cn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ee(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Nc(e)?4:dd(e)?9007199254740991:10:b()}function It(e,t){if(e===t)return!0;const n=ee(e);if(n!==ee(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return an(e).isEqual(an(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Bt(s.timestampValue),o=Bt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return be(s.bytesValue).isEqual(be(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return K(s.geoPointValue.latitude)===K(i.geoPointValue.latitude)&&K(s.geoPointValue.longitude)===K(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return K(s.integerValue)===K(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=K(s.doubleValue),o=K(i.doubleValue);return r===o?cs(r)===cs(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Te(e.arrayValue.values||[],t.arrayValue.values||[],It);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(vo(r)!==vo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!It(r[a],o[a])))return!1;return!0}(e,t);default:return b()}}function un(e,t){return(e.values||[]).find(n=>It(n,t))!==void 0}function Ie(e,t){if(e===t)return 0;const n=ee(e),s=ee(t);if(n!==s)return x(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=K(i.integerValue||i.doubleValue),a=K(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Eo(e.timestampValue,t.timestampValue);case 4:return Eo(an(e),an(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(i,r){const o=be(i),a=be(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=x(o[c],a[c]);if(u!==0)return u}return x(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=x(K(i.latitude),K(r.latitude));return o!==0?o:x(K(i.longitude),K(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ie(o[c],a[c]);if(u)return u}return x(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===Pn.mapValue&&r===Pn.mapValue)return 0;if(i===Pn.mapValue)return 1;if(r===Pn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=x(a[l],u[l]);if(h!==0)return h;const f=Ie(o[a[l]],c[u[l]]);if(f!==0)return f}return x(a.length,u.length)}(e.mapValue,t.mapValue);default:throw b()}}function Eo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return x(e,t);const n=Bt(e),s=Bt(t),i=x(n.seconds,s.seconds);return i!==0?i:x(n.nanos,s.nanos)}function Ce(e){return Pi(e)}function Pi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=Bt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?be(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,_.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Pi(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Pi(s.fields[a])}`;return r+"}"}(e.mapValue):b();var t,n}function Fi(e){return!!e&&"integerValue"in e}function br(e){return!!e&&"arrayValue"in e}function _o(e){return!!e&&"nullValue"in e}function To(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Bn(e){return!!e&&"mapValue"in e}function He(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return se(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=He(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=He(e.arrayValue.values[n]);return t}return Object.assign({},e)}function dd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.value=t}static empty(){return new pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Bn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=He(n)}setAll(t){let n=it.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=He(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Bn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return It(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Bn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){se(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new pt(He(this.value))}}function xc(e){const t=[];return se(e.fields,(n,s)=>{const i=new it([n]);if(Bn(s)){const r=xc(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new st(t,0,S.min(),S.min(),S.min(),pt.empty(),0)}static newFoundDocument(t,n,s,i){return new st(t,1,n,S.min(),s,i,0)}static newNoDocument(t,n){return new st(t,2,n,S.min(),S.min(),pt.empty(),0)}static newUnknownDocument(t,n){return new st(t,3,n,S.min(),S.min(),pt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof st&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,n){this.position=t,this.inclusive=n}}function bo(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=_.comparator(_.fromName(o.referenceValue),n.key):s=Ie(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Io(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!It(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,n="asc"){this.field=t,this.dir=n}}function pd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{}class H extends Oc{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new gd(t,n,s):n==="array-contains"?new wd(t,s):n==="in"?new Ed(t,s):n==="not-in"?new _d(t,s):n==="array-contains-any"?new Td(t,s):new H(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new yd(t,s):new vd(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ie(n,this.value)):n!==null&&ee(this.value)===ee(n)&&this.matchesComparison(Ie(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ct extends Oc{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new Ct(t,n)}matches(t){return Lc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Lc(e){return e.op==="and"}function Mc(e){return md(e)&&Lc(e)}function md(e){for(const t of e.filters)if(t instanceof Ct)return!1;return!0}function Vi(e){if(e instanceof H)return e.field.canonicalString()+e.op.toString()+Ce(e.value);if(Mc(e))return e.filters.map(t=>Vi(t)).join(",");{const t=e.filters.map(n=>Vi(n)).join(",");return`${e.op}(${t})`}}function $c(e,t){return e instanceof H?function(n,s){return s instanceof H&&n.op===s.op&&n.field.isEqual(s.field)&&It(n.value,s.value)}(e,t):e instanceof Ct?function(n,s){return s instanceof Ct&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&$c(r,s.filters[o]),!0):!1}(e,t):void b()}function Pc(e){return e instanceof H?function(t){return`${t.field.canonicalString()} ${t.op} ${Ce(t.value)}`}(e):e instanceof Ct?function(t){return t.op.toString()+" {"+t.getFilters().map(Pc).join(" ,")+"}"}(e):"Filter"}class gd extends H{constructor(t,n,s){super(t,n,s),this.key=_.fromName(s.referenceValue)}matches(t){const n=_.comparator(t.key,this.key);return this.matchesComparison(n)}}class yd extends H{constructor(t,n){super(t,"in",n),this.keys=Fc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class vd extends H{constructor(t,n){super(t,"not-in",n),this.keys=Fc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Fc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>_.fromName(s.referenceValue))}class wd extends H{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return br(n)&&un(n.arrayValue,this.value)}}class Ed extends H{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&un(this.value.arrayValue,n)}}class _d extends H{constructor(t,n){super(t,"not-in",n)}matches(t){if(un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!un(this.value.arrayValue,n)}}class Td extends H{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!br(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>un(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Co(e,t=null,n=[],s=[],i=null,r=null,o=null){return new bd(e,t,n,s,i,r,o)}function Ir(e){const t=D(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Vi(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ls(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ce(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ce(s)).join(",")),t.ft=n}return t.ft}function Cr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!pd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!$c(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Io(e.startAt,t.startAt)&&Io(e.endAt,t.endAt)}function Ui(e){return _.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Id(e,t,n,s,i,r,o,a){return new Ms(e,t,n,s,i,r,o,a)}function $s(e){return new Ms(e)}function So(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Cd(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Sd(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Dd(e){return e.collectionGroup!==null}function ge(e){const t=D(e);if(t.dt===null){t.dt=[];const n=Sd(t),s=Cd(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new Ge(n)),t.dt.push(new Ge(it.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Ge(it.keyField(),r))}}}return t.dt}function xt(e){const t=D(e);if(!t.wt)if(t.limitType==="F")t.wt=Co(t.path,t.collectionGroup,ge(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ge(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ge(r.field,o))}const s=t.endAt?new us(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new us(t.startAt.position,t.startAt.inclusive):null;t.wt=Co(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.wt}function Bi(e,t,n){return new Ms(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ps(e,t){return Cr(xt(e),xt(t))&&e.limitType===t.limitType}function Vc(e){return`${Ir(xt(e))}|lt:${e.limitType}`}function ji(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Pc(s)).join(", ")}]`),Ls(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ce(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ce(s)).join(",")),`Target(${n})`}(xt(e))}; limitType=${e.limitType})`}function Fs(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):_.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of ge(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=bo(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ge(n),s)||n.endAt&&!function(i,r,o){const a=bo(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ge(n),s))}(e,t)}function Ad(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Uc(e){return(t,n)=>{let s=!1;for(const i of ge(e)){const r=kd(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function kd(e,t,n){const s=e.field.isKeyField()?_.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ie(a,c):b()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return b()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){se(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return kc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new W(_.comparator);function Ot(){return Nd}const Bc=new W(_.comparator);function je(...e){let t=Bc;for(const n of e)t=t.insert(n.key,n);return t}function jc(e){let t=Bc;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Qt(){return Qe()}function qc(){return Qe()}function Qe(){return new $e(e=>e.toString(),(e,t)=>e.isEqual(t))}const Rd=new W(_.comparator),xd=new Q(_.comparator);function k(...e){let t=xd;for(const n of e)t=t.add(n);return t}const Od=new Q(x);function zc(){return Od}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cs(t)?"-0":t}}function Hc(e){return{integerValue:""+e}}function Ld(e,t){return ud(t)?Hc(t):Kc(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this._=void 0}}function Md(e,t,n){return e instanceof ls?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Se?Qc(e,t):e instanceof ln?Wc(e,t):function(s,i){const r=Gc(s,i),o=Do(r)+Do(s._t);return Fi(r)&&Fi(s._t)?Hc(o):Kc(s.serializer,o)}(e,t)}function $d(e,t,n){return e instanceof Se?Qc(e,t):e instanceof ln?Wc(e,t):n}function Gc(e,t){return e instanceof hs?Fi(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class ls extends Vs{}class Se extends Vs{constructor(t){super(),this.elements=t}}function Qc(e,t){const n=Yc(t);for(const s of e.elements)n.some(i=>It(i,s))||n.push(s);return{arrayValue:{values:n}}}class ln extends Vs{constructor(t){super(),this.elements=t}}function Wc(e,t){let n=Yc(t);for(const s of e.elements)n=n.filter(i=>!It(i,s));return{arrayValue:{values:n}}}class hs extends Vs{constructor(t,n){super(),this.serializer=t,this._t=n}}function Do(e){return K(e.integerValue||e.doubleValue)}function Yc(e){return br(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,n){this.field=t,this.transform=n}}function Fd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Se&&s instanceof Se||n instanceof ln&&s instanceof ln?Te(n.elements,s.elements,It):n instanceof hs&&s instanceof hs?It(n._t,s._t):n instanceof ls&&s instanceof ls}(e.transform,t.transform)}class Vd{constructor(t,n){this.version=t,this.transformResults=n}}class Dt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Dt}static exists(t){return new Dt(void 0,t)}static updateTime(t){return new Dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Us{}function Xc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Zc(e.key,Dt.none()):new Bs(e.key,e.data,Dt.none());{const n=e.data,s=pt.empty();let i=new Q(it.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ie(e.key,s,new wt(i.toArray()),Dt.none())}}function Ud(e,t,n){e instanceof Bs?function(s,i,r){const o=s.value.clone(),a=ko(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ie?function(s,i,r){if(!jn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=ko(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Jc(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function We(e,t,n,s){return e instanceof Bs?function(i,r,o,a){if(!jn(i.precondition,r))return o;const c=i.value.clone(),u=No(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof ie?function(i,r,o,a){if(!jn(i.precondition,r))return o;const c=No(i.fieldTransforms,a,r),u=r.data;return u.setAll(Jc(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(i,r,o){return jn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Bd(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Gc(s.transform,i||null);r!=null&&(n===null&&(n=pt.empty()),n.set(s.field,r))}return n||null}function Ao(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Te(n,s,(i,r)=>Fd(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Bs extends Us{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ie extends Us{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Jc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function ko(e,t,n){const s=new Map;$(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,$d(o,a,n[i]))}return s}function No(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Md(r,o,t))}return s}class Zc extends Us{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jd extends Us{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Ud(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=We(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=We(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=qc();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Xc(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),k())}isEqual(t){return this.batchId===t.batchId&&Te(this.mutations,t.mutations,(n,s)=>Ao(n,s))&&Te(this.baseMutations,t.baseMutations,(n,s)=>Ao(n,s))}}class Sr{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){$(t.mutations.length===s.length);let i=Rd;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Sr(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z,N;function Hd(e){switch(e){default:return b();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function tu(e){if(e===void 0)return Rt("GRPC error has no .code"),g.UNKNOWN;switch(e){case z.OK:return g.OK;case z.CANCELLED:return g.CANCELLED;case z.UNKNOWN:return g.UNKNOWN;case z.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case z.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case z.INTERNAL:return g.INTERNAL;case z.UNAVAILABLE:return g.UNAVAILABLE;case z.UNAUTHENTICATED:return g.UNAUTHENTICATED;case z.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case z.NOT_FOUND:return g.NOT_FOUND;case z.ALREADY_EXISTS:return g.ALREADY_EXISTS;case z.PERMISSION_DENIED:return g.PERMISSION_DENIED;case z.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case z.ABORTED:return g.ABORTED;case z.OUT_OF_RANGE:return g.OUT_OF_RANGE;case z.UNIMPLEMENTED:return g.UNIMPLEMENTED;case z.DATA_LOSS:return g.DATA_LOSS;default:return b()}}(N=z||(z={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Fn}static getOrCreateInstance(){return Fn===null&&(Fn=new Dr),Fn}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Fn=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,Sn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new js(S.min(),i,zc(),Ot(),k())}}class Sn{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Sn(s,n,k(),k(),k())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,n,s,i){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=i}}class eu{constructor(t,n){this.targetId=t,this.Et=n}}class nu{constructor(t,n,s=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Ro{constructor(){this.At=0,this.Rt=Oo(),this.vt=ct.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=k(),n=k(),s=k();return this.Rt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:b()}}),new Sn(this.vt,this.bt,t,n,s)}xt(){this.Pt=!1,this.Rt=Oo()}Nt(t,n){this.Pt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Gd{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=Ot(),this.qt=xo(),this.Ut=new Q(x)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}zt(t){this.forEachTarget(t,n=>{const s=this.jt(n);switch(t.state){case 0:this.Wt(n)&&s.Dt(t.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(t.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:b()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(t){var n;const s=t.targetId,i=t.Et.count,r=this.Yt(s);if(r){const o=r.target;if(Ui(o))if(i===0){const a=new _(o.path);this.Qt(s,a,st.newNoDocument(a,S.min()))}else $(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Dr.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:t.Et.count}))}}}Xt(t){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Ui(a.target)){const c=new _(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,st.newNoDocument(c,t))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=k();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(t));const i=new js(t,n,this.Ut,this.Lt,s);return this.Lt=Ot(),this.qt=xo(),this.Ut=new Q(x),i}Gt(t,n){if(!this.Wt(t))return;const s=this.te(t,n.key)?2:0;this.jt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.Wt(t))return;const i=this.jt(t);this.te(t,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Zt(t){const n=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let n=this.Bt.get(t);return n||(n=new Ro,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new Q(x),this.qt=this.qt.insert(t,n)),n}Wt(t){const n=this.Yt(t)!==null;return n||E("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new Ro),this.Ft.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.Ft.getRemoteKeysForTarget(t).has(n)}}function xo(){return new W(_.comparator)}function Oo(){return new W(_.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Wd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Yd=(()=>({and:"AND",or:"OR"}))();class Xd{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function fs(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function su(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Jd(e,t){return fs(e,t.toTimestamp())}function bt(e){return $(!!e),S.fromTimestamp(function(t){const n=Bt(t);return new G(n.seconds,n.nanos)}(e))}function Ar(e,t){return function(n){return new F(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function iu(e){const t=F.fromString(e);return $(cu(t)),t}function qi(e,t){return Ar(e.databaseId,t.path)}function hi(e,t){const n=iu(t);if(n.get(1)!==e.databaseId.projectId)throw new T(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new _(ru(n))}function zi(e,t){return Ar(e.databaseId,t)}function Zd(e){const t=iu(e);return t.length===4?F.emptyPath():ru(t)}function Ki(e){return new F(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ru(e){return $(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Lo(e,t,n){return{name:qi(e,t),fields:n.value.mapValue.fields}}function tp(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?($(u===void 0||typeof u=="string"),ct.fromBase64String(u||"")):($(u===void 0||u instanceof Uint8Array),ct.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?g.UNKNOWN:tu(c.code);return new T(u,c.message||"")}(o);n=new nu(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=hi(e,s.document.name),r=bt(s.document.updateTime),o=s.document.createTime?bt(s.document.createTime):S.min(),a=new pt({mapValue:{fields:s.document.fields}}),c=st.newFoundDocument(i,r,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new qn(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=hi(e,s.document),r=s.readTime?bt(s.readTime):S.min(),o=st.newNoDocument(i,r),a=s.removedTargetIds||[];n=new qn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=hi(e,s.document),r=s.removedTargetIds||[];n=new qn([],r,i,null)}else{if(!("filter"in t))return b();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new Kd(i),o=s.targetId;n=new eu(o,r)}}return n}function ep(e,t){let n;if(t instanceof Bs)n={update:Lo(e,t.key,t.value)};else if(t instanceof Zc)n={delete:qi(e,t.key)};else if(t instanceof ie)n={update:Lo(e,t.key,t.data),updateMask:lp(t.fieldMask)};else{if(!(t instanceof jd))return b();n={verify:qi(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof ls)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Se)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ln)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof hs)return{fieldPath:r.field.canonicalString(),increment:o._t};throw b()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Jd(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(e,t.precondition)),n}function np(e,t){return e&&e.length>0?($(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?bt(s.updateTime):bt(i);return r.isEqual(S.min())&&(r=bt(i)),new Vd(r,s.transformResults||[])}(n,t))):[]}function sp(e,t){return{documents:[zi(e,t.path)]}}function ip(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=zi(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=zi(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return au(Ct.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:le(l.field),direction:ap(l.dir)}}(u))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.useProto3Json||Ls(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function rp(e){let t=Zd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){$(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let r=[];n.where&&(r=function(l){const h=ou(l);return h instanceof Ct&&Mc(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Ge(he(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ls(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new us(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new us(f,h)}(n.endAt)),Id(t,i,o,r,a,"F",c,u)}function op(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function ou(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=he(t.unaryFilter.field);return H.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=he(t.unaryFilter.field);return H.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=he(t.unaryFilter.field);return H.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=he(t.unaryFilter.field);return H.create(r,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(e):e.fieldFilter!==void 0?function(t){return H.create(he(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Ct.create(t.compositeFilter.filters.map(n=>ou(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return b()}}(t.compositeFilter.op))}(e):b()}function ap(e){return Qd[e]}function cp(e){return Wd[e]}function up(e){return Yd[e]}function le(e){return{fieldPath:e.canonicalString()}}function he(e){return it.fromServerFormat(e.fieldPath)}function au(e){return e instanceof H?function(t){if(t.op==="=="){if(To(t.value))return{unaryFilter:{field:le(t.field),op:"IS_NAN"}};if(_o(t.value))return{unaryFilter:{field:le(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(To(t.value))return{unaryFilter:{field:le(t.field),op:"IS_NOT_NAN"}};if(_o(t.value))return{unaryFilter:{field:le(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:le(t.field),op:cp(t.op),value:t.value}}}(e):e instanceof Ct?function(t){const n=t.getFilters().map(s=>au(s));return n.length===1?n[0]:{compositeFilter:{op:up(t.op),filters:n}}}(e):b()}function lp(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function cu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,n,s,i,r=S.min(),o=S.min(),a=ct.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Yt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t){this.se=t}}function fp(e){const t=rp({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Bi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.He=new pp}addToCollectionParentIndex(t,n){return this.He.add(n),y.resolve()}getCollectionParents(t,n){return y.resolve(this.He.getEntries(n))}addFieldIndex(t,n){return y.resolve()}deleteFieldIndex(t,n){return y.resolve()}getDocumentsMatchingTarget(t,n){return y.resolve(null)}getIndexType(t,n){return y.resolve(0)}getFieldIndexes(t,n){return y.resolve([])}getNextCollectionGroupToUpdate(t){return y.resolve(null)}getMinOffset(t,n){return y.resolve(Ut.min())}getMinOffsetFromCollectionGroup(t,n){return y.resolve(Ut.min())}updateCollectionGroup(t,n,s){return y.resolve()}updateIndexEntries(t,n){return y.resolve()}}class pp{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new Q(F.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new Q(F.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new De(0)}static bn(){return new De(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.changes=new $e(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,st.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?y.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&We(s.mutation,i,wt.empty(),G.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,k()).next(()=>s))}getLocalViewOfDocuments(t,n,s=k()){const i=Qt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=je();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Qt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,k()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=Ot();const o=Qe(),a=Qe();return n.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof ie)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),We(l.mutation,u,l.mutation.getFieldMask(),G.now())):o.set(u.key,wt.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new gp(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Qe();let i=new W((o,a)=>o-a),r=k();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||wt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||k()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=qc();l.forEach(f=>{if(!r.has(f)){const d=Xc(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return y.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return _.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Dd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):y.resolve(Qt());let a=-1,c=r;return o.next(u=>y.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?y.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,k())).next(l=>({batchId:a,changes:jc(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new _(n)).next(s=>{let i=je();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=je();return this.indexManager.getCollectionParents(t,i).next(o=>y.forEach(o,a=>{const c=function(u,l){return new Ms(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,st.newInvalidDocument(u)))});let o=je();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&We(u.mutation,c,wt.empty(),G.now()),Fs(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,n){return y.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:bt(s.createTime)}),y.resolve()}getNamedQuery(t,n){return y.resolve(this.Xn.get(n))}saveNamedQuery(t,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:fp(s.bundledQuery),readTime:bt(s.readTime)}}(n)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.overlays=new W(_.comparator),this.ts=new Map}getOverlay(t,n){return y.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Qt();return y.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.re(t,n,r)}),y.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),y.resolve()}getOverlaysForCollection(t,n,s){const i=Qt(),r=n.length+1,o=new _(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return y.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new W((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=Qt(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Qt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return y.resolve(a)}re(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new zd(n,s));let r=this.ts.get(n);r===void 0&&(r=k(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.es=new Q(Y.ns),this.ss=new Q(Y.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,n){const s=new Y(t,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.us(new Y(t,n))}cs(t,n){t.forEach(s=>this.removeReference(s,n))}hs(t){const n=new _(new F([])),s=new Y(n,t),i=new Y(n,t+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(t=>this.us(t))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const n=new _(new F([])),s=new Y(n,t),i=new Y(n,t+1);let r=k();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new Y(t,0),s=this.es.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Y{constructor(t,n){this.key=t,this.ds=n}static ns(t,n){return _.comparator(t.key,n.key)||x(t.ds,n.ds)}static rs(t,n){return x(t.ds,n.ds)||_.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Q(Y.ns)}checkEmpty(t){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qd(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Y(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(t,n){return y.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Y(n,0),i=new Y(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Q(x);return n.forEach(i=>{const r=new Y(i,0),o=new Y(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),y.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;_.isDocumentKey(r)||(r=r.child(""));const o=new Y(new _(r),0);let a=new Q(x);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ds)),!0)},o),y.resolve(this.ps(a))}ps(t){const n=[];return t.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){$(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return y.forEach(n.mutations,i=>{const r=new Y(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this._s=s})}En(t){}containsKey(t,n){const s=new Y(n,0),i=this._s.firstAfterOrEqual(s);return y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,y.resolve()}Is(t,n){return this.ys(t)}ys(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}gs(t){const n=this.ys(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t){this.Ts=t,this.docs=new W(_.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return y.resolve(s?s.document.mutableCopy():st.newInvalidDocument(n))}getEntries(t,n){let s=Ot();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():st.newInvalidDocument(i))}),y.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=Ot();const o=n.path,a=new _(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||od(rd(l),s)<=0||(i.has(l.key)||Fs(n,l))&&(r=r.insert(l.key,l.mutableCopy()))}return y.resolve(r)}getAllFromCollectionGroup(t,n,s,i){b()}Es(t,n){return y.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Tp(this)}getSize(t){return y.resolve(this.size)}}class Tp extends mp{constructor(t){super(),this.Jn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(t,i)):this.Jn.removeEntry(s)}),y.waitFor(n)}getFromCache(t,n){return this.Jn.getEntry(t,n)}getAllFromCache(t,n){return this.Jn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t){this.persistence=t,this.As=new $e(n=>Ir(n),Cr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Rs=0,this.vs=new kr,this.targetCount=0,this.bs=De.vn()}forEachTarget(t,n){return this.As.forEach((s,i)=>n(i)),y.resolve()}getLastRemoteSnapshotVersion(t){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return y.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),y.resolve()}Sn(t){this.As.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new De(n),this.highestTargetId=n),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,n){return this.Sn(n),this.targetCount+=1,y.resolve()}updateTargetData(t,n){return this.Sn(n),y.resolve()}removeTargetData(t,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),y.waitFor(r).next(()=>i)}getTargetCount(t){return y.resolve(this.targetCount)}getTargetData(t,n){const s=this.As.get(n)||null;return y.resolve(s)}addMatchingKeys(t,n,s){return this.vs.os(n,s),y.resolve()}removeMatchingKeys(t,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),y.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.vs.hs(n),y.resolve()}getMatchingKeysForTargetId(t,n){const s=this.vs.fs(n);return y.resolve(s)}containsKey(t,n){return y.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(t,n){this.Ps={},this.overlays={},this.Vs=new Tr(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new bp(this),this.indexManager=new dp,this.remoteDocumentCache=function(s){return new _p(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new hp(n),this.xs=new vp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new wp,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ps[t.toKey()];return s||(s=new Ep(n,this.referenceDelegate),this.Ps[t.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,n,s){E("MemoryPersistence","Starting transaction:",t);const i=new Cp(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(t,n){return y.or(Object.values(this.Ps).map(s=>()=>s.containsKey(t,n)))}}class Cp extends cd{constructor(t){super(),this.currentSequenceNumber=t}}class Nr{constructor(t){this.persistence=t,this.$s=new kr,this.Ms=null}static Fs(t){return new Nr(t)}get Bs(){if(this.Ms)return this.Ms;throw b()}addReference(t,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),y.resolve()}removeReference(t,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),y.resolve()}markPotentiallyOrphaned(t,n){return this.Bs.add(n.toString()),y.resolve()}removeTarget(t,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Ns(){this.Ms=new Set}ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Bs,s=>{const i=_.fromPath(s);return this.Ls(t,i).next(r=>{r||n.removeEntry(i,S.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ls(t,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(t){return 0}Ls(t,n){return y.or([()=>y.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Vi=s,this.Si=i}static Di(t,n){let s=k(),i=k();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Rr(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this.Ci=!1}initialize(t,n){this.xi=t,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ni(t,n).next(r=>r||this.ki(t,n,i,s)).next(r=>r||this.Oi(t,n))}Ni(t,n){if(So(n))return y.resolve(null);let s=xt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Bi(n,null,"F"),s=xt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=k(...r);return this.xi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(t,Bi(n,null,"F")):this.Fi(t,u,n,c)}))})))}ki(t,n,s,i){return So(n)||i.isEqual(S.min())?this.Oi(t,n):this.xi.getDocuments(t,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(t,n):(yo()<=R.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ji(n)),this.Fi(t,o,n,id(i,-1)))})}$i(t,n){let s=new Q(Uc(t));return n.forEach((i,r)=>{Fs(t,r)&&(s=s.add(r))}),s}Mi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(t,n){return yo()<=R.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",ji(n)),this.xi.getDocumentsMatchingQuery(t,n,Ut.min())}Fi(t,n,s,i){return this.xi.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,n,s,i){this.persistence=t,this.Bi=n,this.serializer=i,this.Li=new W(x),this.qi=new $e(r=>Ir(r),Cr),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(s)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new yp(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Li))}}function Ap(e,t,n,s){return new Dp(e,t,n,s)}async function uu(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=k();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function kp(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=y.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(p=>{const m=c.docVersions.get(d);$(m!==null),p.version.compareTo(m)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=k();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function lu(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ds.getLastRemoteSnapshotVersion(n))}function Np(e,t){const n=D(e),s=t.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];t.targetChanges.forEach((l,h)=>{const f=i.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,l.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(h)?d=d.withResumeToken(ct.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),i=i.insert(h,d),function(p,m,v){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,l)&&a.push(n.Ds.updateTargetData(r,d))});let c=Ot(),u=k();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(Rp(r,o,t.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!s.isEqual(S.min())){const l=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return y.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.Li=i,r))}function Rp(e,t,n){let s=k(),i=k();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=Ot();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:i}})}function xp(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Op(e,t){const n=D(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,t).next(r=>r?(i=r,y.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new Yt(t,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(t,s.targetId)),s})}async function Hi(e,t,n){const s=D(e),i=s.Li.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Cn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Li=s.Li.remove(t),s.qi.delete(i.target)}function Mo(e,t,n){const s=D(e);let i=S.min(),r=k();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=D(a),h=l.qi.get(u);return h!==void 0?y.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(s,o,xt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,t,n?i:S.min(),n?r:k())).next(a=>(Lp(s,Ad(t),a),{documents:a,Wi:r})))}function Lp(e,t,n){let s=e.Ui.get(t)||S.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Ui.set(t,s)}class $o{constructor(){this.activeTargetIds=zc()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Mp{constructor(){this.Br=new $o,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,n,s){this.Lr[t]=n}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new $o,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{qr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn=null;function fi(){return Vn===null?Vn=268435456+Math.round(2147483648*Math.random()):Vn++,"0x"+Vn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class Vp extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.ro=n+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,n,s,i,r){const o=fi(),a=this.ao(t,n);E("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const c={};return this.ho(c,i,r),this.lo(t,a,c,s).then(u=>(E("RestConnection",`Received RPC '${t}' ${o}: `,u),u),u=>{throw as("RestConnection",`RPC '${t}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(t,n,s,i,r,o){return this.co(t,n,s,i,r)}ho(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Me,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ao(t,n){const s=Pp[t];return`${this.ro}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,s,i){const r=fi();return new Promise((o,a)=>{const c=new Qf;c.setWithCredentials(!0),c.listenOnce(Kf.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case li.NO_ERROR:const l=c.getResponseJson();E(et,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(l)),o(l);break;case li.TIMEOUT:E(et,`RPC '${t}' ${r} timed out`),a(new T(g.DEADLINE_EXCEEDED,"Request time out"));break;case li.HTTP_ERROR:const h=c.getStatus();if(E(et,`RPC '${t}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(v)>=0?v:g.UNKNOWN}(d.status);a(new T(p,d.message))}else a(new T(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new T(g.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{E(et,`RPC '${t}' ${r} completed.`)}});const u=JSON.stringify(i);E(et,`RPC '${t}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}wo(t,n,s){const i=fi(),r=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=qf(),a=zf(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Gf({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=r.join("");E(et,`Creating RPC '${t}' stream ${i}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,f=!1;const d=new Fp({Wr:m=>{f?E(et,`Not sending because RPC '${t}' stream ${i} is closed:`,m):(h||(E(et,`Opening RPC '${t}' stream ${i} transport.`),l.open(),h=!0),E(et,`RPC '${t}' stream ${i} sending:`,m),l.send(m))},Hr:()=>l.close()}),p=(m,v,C)=>{m.listen(v,M=>{try{C(M)}catch(A){setTimeout(()=>{throw A},0)}})};return p(l,Mn.EventType.OPEN,()=>{f||E(et,`RPC '${t}' stream ${i} transport opened.`)}),p(l,Mn.EventType.CLOSE,()=>{f||(f=!0,E(et,`RPC '${t}' stream ${i} transport closed`),d.so())}),p(l,Mn.EventType.ERROR,m=>{f||(f=!0,as(et,`RPC '${t}' stream ${i} transport errored:`,m),d.so(new T(g.UNAVAILABLE,"The operation could not be completed")))}),p(l,Mn.EventType.MESSAGE,m=>{var v;if(!f){const C=m.data[0];$(!!C);const M=C,A=M.error||((v=M[0])===null||v===void 0?void 0:v.error);if(A){E(et,`RPC '${t}' stream ${i} received error:`,A);const U=A.status;let vt=function(q){const dt=z[q];if(dt!==void 0)return tu(dt)}(U),oe=A.message;vt===void 0&&(vt=g.INTERNAL,oe="Unknown error status: "+U+" with message "+A.message),f=!0,d.so(new T(vt,oe)),l.close()}else E(et,`RPC '${t}' stream ${i} received:`,C),d.io(C)}}),p(a,Hf.STAT_EVENT,m=>{m.stat===mo.PROXY?E(et,`RPC '${t}' stream ${i} detected buffering proxy`):m.stat===mo.NOPROXY&&E(et,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function di(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(e){return new Xd(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Ws=t,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&E("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,n,s,i,r,o,a,c){this.Ws=t,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new hu(t,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,t!==4?this.Co.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(Rt(n.toString()),Rt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{t(()=>{const i=new T(g.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(t,n){const s=this.Uo(this.Vo);this.stream=this.Qo(t,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(t){return E("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===t?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Up extends fu{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Co.reset();const n=tp(this.serializer,t),s=function(i){if(!("targetChange"in i))return S.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?bt(r.readTime):S.min()}(t);return this.listener.zo(n,s)}jo(t){const n={};n.database=Ki(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=Ui(a)?{documents:sp(i,a)}:{query:ip(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=su(i,r.resumeToken):r.snapshotVersion.compareTo(S.min())>0&&(o.readTime=fs(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,t);const s=op(this.serializer,t);s&&(n.labels=s),this.Fo(n)}Wo(t){const n={};n.database=Ki(this.serializer),n.removeTarget=t,this.Fo(n)}}class Bp extends fu{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if($(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const n=np(t.writeResults,t.commitTime),s=bt(t.commitTime);return this.listener.Zo(s,n)}return $(!t.writeResults||t.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=Ki(this.serializer),this.Fo(t)}Yo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>ep(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new T(g.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(g.UNKNOWN,i.toString())})}fo(t,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new T(g.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class qp{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(t){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,t==="Online"&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Rt(n),this.ru=!1):E("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{re(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=D(a);c.du.add(4),await Dn(c),c.mu.set("Unknown"),c.du.delete(4),await zs(c)}(this))})}),this.mu=new qp(s,i)}}async function zs(e){if(re(e))for(const t of e.wu)await t(!0)}async function Dn(e){for(const t of e.wu)await t(!1)}function du(e,t){const n=D(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Lr(n)?Or(n):Pe(n).No()&&xr(n,t))}function pu(e,t){const n=D(e),s=Pe(n);n.fu.delete(t),s.No()&&mu(n,t),n.fu.size===0&&(s.No()?s.$o():re(n)&&n.mu.set("Unknown"))}function xr(e,t){e.gu.Ot(t.targetId),Pe(e).jo(t)}function mu(e,t){e.gu.Ot(t),Pe(e).Wo(t)}function Or(e){e.gu=new Gd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),Pe(e).start(),e.mu.ou()}function Lr(e){return re(e)&&!Pe(e).xo()&&e.fu.size>0}function re(e){return D(e).du.size===0}function gu(e){e.gu=void 0}async function Kp(e){e.fu.forEach((t,n)=>{xr(e,t)})}async function Hp(e,t){gu(e),Lr(e)?(e.mu.au(t),Or(e)):e.mu.set("Unknown")}async function Gp(e,t,n){if(e.mu.set("Online"),t instanceof nu&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(e,t)}catch(s){E("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await ds(e,s)}else if(t instanceof qn?e.gu.Kt(t):t instanceof eu?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(S.min()))try{const s=await lu(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(c);u&&i.fu.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(ct.EMPTY_BYTE_STRING,c.snapshotVersion)),mu(i,a);const u=new Yt(c.target,a,1,c.sequenceNumber);xr(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){E("RemoteStore","Failed to raise snapshot:",s),await ds(e,s)}}async function ds(e,t,n){if(!Cn(t))throw t;e.du.add(1),await Dn(e),e.mu.set("Offline"),n||(n=()=>lu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await zs(e)})}function yu(e,t){return t().catch(n=>ds(e,n,t))}async function Ks(e){const t=D(e),n=jt(t);let s=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;Qp(t);)try{const i=await xp(t.localStore,s);if(i===null){t.lu.length===0&&n.$o();break}s=i.batchId,Wp(t,i)}catch(i){await ds(t,i)}vu(t)&&wu(t)}function Qp(e){return re(e)&&e.lu.length<10}function Wp(e,t){e.lu.push(t);const n=jt(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function vu(e){return re(e)&&!jt(e).xo()&&e.lu.length>0}function wu(e){jt(e).start()}async function Yp(e){jt(e).tu()}async function Xp(e){const t=jt(e);for(const n of e.lu)t.Yo(n.mutations)}async function Jp(e,t,n){const s=e.lu.shift(),i=Sr.from(s,t,n);await yu(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ks(e)}async function Zp(e,t){t&&jt(e).Jo&&await async function(n,s){if(i=s.code,Hd(i)&&i!==g.ABORTED){const r=n.lu.shift();jt(n).Oo(),await yu(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ks(n)}var i}(e,t),vu(e)&&wu(e)}async function Fo(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const s=re(n);n.du.add(3),await Dn(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await zs(n)}async function tm(e,t){const n=D(e);t?(n.du.delete(2),await zs(n)):t||(n.du.add(2),await Dn(n),n.mu.set("Unknown"))}function Pe(e){return e.yu||(e.yu=function(t,n,s){const i=D(t);return i.nu(),new Up(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Jr:Kp.bind(null,e),Zr:Hp.bind(null,e),zo:Gp.bind(null,e)}),e.wu.push(async t=>{t?(e.yu.Oo(),Lr(e)?Or(e):e.mu.set("Unknown")):(await e.yu.stop(),gu(e))})),e.yu}function jt(e){return e.pu||(e.pu=function(t,n,s){const i=D(t);return i.nu(),new Bp(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Jr:Yp.bind(null,e),Zr:Zp.bind(null,e),Xo:Xp.bind(null,e),Zo:Jp.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),await Ks(e)):(await e.pu.stop(),e.lu.length>0&&(E("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Mr(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $r(e,t){if(Rt("AsyncQueue",`${t}: ${e}`),Cn(e))return new T(g.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.comparator=t?(n,s)=>t(n,s)||_.comparator(n.key,s.key):(n,s)=>_.comparator(n.key,s.key),this.keyedMap=je(),this.sortedSet=new W(this.comparator)}static emptySet(t){return new ye(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ye)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new ye;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.Iu=new W(_.comparator)}track(t){const n=t.doc.key,s=this.Iu.get(n);s?t.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,t):t.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Iu=this.Iu.remove(n):t.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):b():this.Iu=this.Iu.insert(n,t)}Tu(){const t=[];return this.Iu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ae{constructor(t,n,s,i,r,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ae(t,n,ye.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ps(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.Eu=void 0,this.listeners=[]}}class nm{constructor(){this.queries=new $e(t=>Vc(t),Ps),this.onlineState="Unknown",this.Au=new Set}}async function Eu(e,t){const n=D(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new em),i)try{r.Eu=await n.onListen(s)}catch(o){const a=$r(o,`Initialization of query '${ji(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Ru(n.onlineState),r.Eu&&t.vu(r.Eu)&&Pr(n)}async function _u(e,t){const n=D(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function sm(e,t){const n=D(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Pr(n)}function im(e,t,n){const s=D(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function Pr(e){e.Au.forEach(t=>{t.next()})}class Tu{constructor(t,n,s){this.query=t,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Ae(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),n=!0):this.Du(t,this.onlineState)&&(this.Cu(t),n=!0),this.Vu=t,n}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),n=!0),n}Du(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Su(t){if(t.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(t){t=Ae.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t){this.key=t}}class Iu{constructor(t){this.key=t}}class rm{constructor(t,n){this.query=t,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=k(),this.mutatedKeys=k(),this.Ku=Uc(t),this.Gu=new ye(this.Ku)}get Qu(){return this.Lu}zu(t,n){const s=n?n.ju:new Vo,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const f=i.get(l),d=Fs(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(s.track({type:3,doc:d}),v=!0):this.Wu(f,d)||(s.track({type:2,doc:d}),v=!0,(c&&this.Ku(d,c)>0||u&&this.Ku(d,u)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),v=!0):f&&!d&&(s.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(d?(o=o.add(d),r=m?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const r=t.ju.Tu();r.sort((u,l)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return d(h)-d(f)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new Ae(this.query,t.Gu,i,r,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Vo,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=k(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return t.forEach(s=>{this.Uu.has(s)||n.push(new Iu(s))}),this.Uu.forEach(s=>{t.has(s)||n.push(new bu(s))}),n}Xu(t){this.Lu=t.Wi,this.Uu=k();const n=this.zu(t.documents);return this.applyChanges(n,!0)}tc(){return Ae.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class om{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class am{constructor(t){this.key=t,this.ec=!1}}class cm{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new $e(a=>Vc(a),Ps),this.ic=new Map,this.rc=new Set,this.oc=new W(_.comparator),this.uc=new Map,this.cc=new kr,this.ac={},this.hc=new Map,this.lc=De.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function um(e,t){const n=wm(e);let s,i;const r=n.sc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await Op(n.localStore,xt(t));n.isPrimaryClient&&du(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await lm(n,t,s,a==="current",o.resumeToken)}return i}async function lm(e,t,n,s,i){e.dc=(h,f,d)=>async function(p,m,v,C){let M=m.view.zu(v);M.Mi&&(M=await Mo(p.localStore,m.query,!1).then(({documents:vt})=>m.view.zu(vt,M)));const A=C&&C.targetChanges.get(m.targetId),U=m.view.applyChanges(M,p.isPrimaryClient,A);return Bo(p,m.targetId,U.Yu),U.snapshot}(e,h,f,d);const r=await Mo(e.localStore,t,!0),o=new rm(t,r.Wi),a=o.zu(r.documents),c=Sn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);Bo(e,n,u.Yu);const l=new om(t,n,o);return e.sc.set(t,l),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function hm(e,t){const n=D(e),s=n.sc.get(t),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!Ps(r,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Hi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),pu(n.remoteStore,s.targetId),Gi(n,s.targetId)}).catch(In)):(Gi(n,s.targetId),await Hi(n.localStore,s.targetId,!0))}async function fm(e,t,n){const s=Em(e);try{const i=await function(r,o){const a=D(r),c=G.now(),u=o.reduce((f,d)=>f.add(d.key),k());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Ot(),p=k();return a.Ki.getEntries(f,u).next(m=>{d=m,d.forEach((v,C)=>{C.isValidDocument()||(p=p.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{l=m;const v=[];for(const C of o){const M=Bd(C,l.get(C.key).overlayedDocument);M!=null&&v.push(new ie(C.key,M,xc(M.value.mapValue),Dt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,v,o)}).next(m=>{h=m;const v=m.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,v)})}).then(()=>({batchId:h.batchId,changes:jc(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.ac[r.currentUser.toKey()];c||(c=new W(x)),c=c.insert(o,a),r.ac[r.currentUser.toKey()]=c}(s,i.batchId,n),await An(s,i.changes),await Ks(s.remoteStore)}catch(i){const r=$r(i,"Failed to persist write");n.reject(r)}}async function Cu(e,t){const n=D(e);try{const s=await Np(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?$(o.ec):i.removedDocuments.size>0&&($(o.ec),o.ec=!1))}),await An(n,s,t)}catch(s){await In(s)}}function Uo(e,t,n){const s=D(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=D(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&Pr(a)}(s.eventManager,t),i.length&&s.nc.zo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function dm(e,t,n){const s=D(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.uc.get(t),r=i&&i.key;if(r){let o=new W(_.comparator);o=o.insert(r,st.newNoDocument(r,S.min()));const a=k().add(r),c=new js(S.min(),new Map,new Q(x),o,a);await Cu(s,c),s.oc=s.oc.remove(r),s.uc.delete(t),Fr(s)}else await Hi(s.localStore,t,!1).then(()=>Gi(s,t,n)).catch(In)}async function pm(e,t){const n=D(e),s=t.batch.batchId;try{const i=await kp(n.localStore,t);Du(n,s,null),Su(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await An(n,i)}catch(i){await In(i)}}async function mm(e,t,n){const s=D(e);try{const i=await function(r,o){const a=D(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>($(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);Du(s,t,n),Su(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await An(s,i)}catch(i){await In(i)}}function Su(e,t){(e.hc.get(t)||[]).forEach(n=>{n.resolve()}),e.hc.delete(t)}function Du(e,t,n){const s=D(e);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.ac[s.currentUser.toKey()]=i}}function Gi(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ic.get(t))e.sc.delete(s),n&&e.nc.wc(s,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach(s=>{e.cc.containsKey(s)||Au(e,s)})}function Au(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);n!==null&&(pu(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),Fr(e))}function Bo(e,t,n){for(const s of n)s instanceof bu?(e.cc.addReference(s.key,t),gm(e,s)):s instanceof Iu?(E("SyncEngine","Document no longer in limbo: "+s.key),e.cc.removeReference(s.key,t),e.cc.containsKey(s.key)||Au(e,s.key)):b()}function gm(e,t){const n=t.key,s=n.path.canonicalString();e.oc.get(n)||e.rc.has(s)||(E("SyncEngine","New document in limbo: "+n),e.rc.add(s),Fr(e))}function Fr(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new _(F.fromString(t)),s=e.lc.next();e.uc.set(s,new am(n)),e.oc=e.oc.insert(n,s),du(e.remoteStore,new Yt(xt($s(n.path)),s,2,Tr.ct))}}async function An(e,t,n){const s=D(e),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Rr.Di(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,c){const u=D(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(c,h=>y.forEach(h.Vi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>y.forEach(h.Si,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Cn(l))throw l;E("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Li.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);u.Li=u.Li.insert(h,p)}}}(s.localStore,r))}async function ym(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){E("SyncEngine","User change. New user:",t.toKey());const s=await uu(n.localStore,t);n.currentUser=t,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new T(g.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await An(n,s.Qi)}}function vm(e,t){const n=D(e),s=n.uc.get(t);if(s&&s.ec)return k().add(s.key);{let i=k();const r=n.ic.get(t);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function wm(e){const t=D(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Cu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=vm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dm.bind(null,t),t.nc.zo=sm.bind(null,t.eventManager),t.nc.wc=im.bind(null,t.eventManager),t}function Em(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=pm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mm.bind(null,t),t}class jo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=qs(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Ap(this.persistence,new Sp,t.initialUser,this.serializer)}createPersistence(t){return new Ip(Nr.Fs,this.serializer)}createSharedClientState(t){return new Mp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _m{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Uo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ym.bind(null,this.syncEngine),await tm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new nm}createDatastore(t){const n=qs(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Vp(i));var i;return function(r,o,a,c){return new jp(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Uo(this.syncEngine,a,0),o=Po.D()?new Po:new $p,new zp(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,u){const l=new cm(s,i,r,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=D(t);E("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Dn(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):Rt("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=Ac.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{E("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(E("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=$r(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function pi(e,t){e.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await uu(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function qo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Im(e);E("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Fo(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Fo(t.remoteStore,r)),e._onlineComponents=t}function bm(e){return e.name==="FirebaseError"?e.code===g.FAILED_PRECONDITION||e.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Im(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await pi(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!bm(n))throw n;as("Error using user provided cache. Falling back to memory cache: "+n),await pi(e,new jo)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await pi(e,new jo);return e._offlineComponents}async function Nu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await qo(e,e._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await qo(e,new _m))),e._onlineComponents}function Cm(e){return Nu(e).then(t=>t.syncEngine)}async function Qi(e){const t=await Nu(e),n=t.eventManager;return n.onListen=um.bind(null,t.syncEngine),n.onUnlisten=hm.bind(null,t.syncEngine),n}function Sm(e,t,n={}){const s=new Pt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new ku({next:h=>{r.enqueueAndForget(()=>_u(i,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new T(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new T(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Tu($s(o.path),u,{includeMetadataChanges:!0,xu:!0});return Eu(i,l)}(await Qi(e),e.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(e,t,n){if(!n)throw new T(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Dm(e,t,n,s){if(t===!0&&s===!0)throw new T(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ko(e){if(!_.isDocumentKey(e))throw new T(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ho(e){if(_.isDocumentKey(e))throw new T(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Vr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":b()}function Ft(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vr(e);throw new T(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new T(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new T(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Dm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Go({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new T(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Go(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Wf;switch(n.type){case"firstParty":return new Zf(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new T(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=zo.get(t);n&&(E("ComponentProvider","Removing Datastore"),zo.delete(t),n.terminate())}(this),Promise.resolve()}}function Am(e,t,n,s={}){var i;const r=(e=Ft(e,Hs))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&as("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=nt.MOCK_USER;else{o=Nl(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new T(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new nt(c)}e._authCredentials=new Yf(new Dc(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ht(this.firestore,t,this._key)}}class Gs{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Gs(this.firestore,t,this._query)}}class Vt extends Gs{constructor(t,n,s){super(t,n,$s(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ht(this.firestore,null,new _(t))}withConverter(t){return new Vt(this.firestore,t,this._path)}}function km(e,t,...n){if(e=kt(e),Ru("collection","path",t),e instanceof Hs){const s=F.fromString(t,...n);return Ho(s),new Vt(e,null,s)}{if(!(e instanceof ht||e instanceof Vt))throw new T(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(F.fromString(t,...n));return Ho(s),new Vt(e.firestore,null,s)}}function Nm(e,t,...n){if(e=kt(e),arguments.length===1&&(t=Ac.A()),Ru("doc","path",t),e instanceof Hs){const s=F.fromString(t,...n);return Ko(s),new ht(e,null,new _(s))}{if(!(e instanceof ht||e instanceof Vt))throw new T(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(F.fromString(t,...n));return Ko(s),new ht(e.firestore,e instanceof Vt?e.converter:null,new _(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new hu(this,"async_queue_retry"),this.qc=()=>{const n=di();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const t=di();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const n=di();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Pt;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.kc.push(t),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!Cn(t))throw t;E("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(t){const n=this.Nc.then(()=>(this.Fc=!0,t().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Rt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(t,n,s){this.Uc(),this.Lc.indexOf(t)>-1&&(n=0);const i=Mr.createAndSchedule(this,t,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&b()}verifyOperationInProgress(){}async zc(){let t;do t=this.Nc,await t;while(t!==this.Nc)}jc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Wc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Hc(t){this.Lc.push(t)}Qc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}function Qo(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class hn extends Hs{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new Rm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xu(this),this._firestoreClient.terminate()}}function xm(e,t){const n=typeof e=="object"?e:Lh(),s=typeof e=="string"?e:t||"(default)",i=Nh(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Dl("firestore");r&&Am(i,...r)}return i}function Ur(e){return e._firestoreClient||xu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function xu(e){var t,n,s;const i=e._freezeSettings(),r=function(o,a,c,u){return new fd(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Tm(e._authCredentials,e._appCheckCredentials,e._queue,r),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=i.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ke(ct.fromBase64String(t))}catch(n){throw new T(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ke(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new T(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new T(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new T(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return x(this._lat,t._lat)||x(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=/^__.*__$/;class Ou{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new ie(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Lu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Ys{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new Ys(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Zc({path:s,ta:!1});return i.ea(t),i}na(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return ps(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(t.length===0)throw this.ia("Document fields must not be empty");if(Lu(this.Yc)&&Om.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class Lm{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||qs(t)}ua(t,n,s,i=!1){return new Ys({Yc:t,methodName:n,oa:s,path:it.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mm(e){const t=e._freezeSettings(),n=qs(e._databaseId);return new Lm(e._databaseId,!!t.ignoreUndefinedProperties,n)}class Xs extends Ws{_toFieldTransform(t){if(t.Yc!==2)throw t.Yc===1?t.ia(`${this._methodName}() can only appear at the top level of your update data`):t.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Xs}}function $m(e,t,n){return new Ys({Yc:3,oa:t.settings.oa,methodName:e._methodName,ta:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Pm extends Ws{constructor(t,n){super(t),this.ca=n}_toFieldTransform(t){const n=$m(this,t,!0),s=this.ca.map(r=>kn(r,n)),i=new Se(s);return new Pd(t.path,i)}isEqual(t){return this===t}}function Fm(e,t,n,s){const i=e.ua(1,t,n);$u("Data must be an object, but it was:",i,s);const r=[],o=pt.empty();se(s,(c,u)=>{const l=jr(t,c,n);u=kt(u);const h=i.na(l);if(u instanceof Xs)r.push(l);else{const f=kn(u,h);f!=null&&(r.push(l),o.set(l,f))}});const a=new wt(r);return new Ou(o,a,i.fieldTransforms)}function Vm(e,t,n,s,i,r){const o=e.ua(1,t,n),a=[Wo(t,s,n)],c=[i];if(r.length%2!=0)throw new T(g.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Wo(t,r[f])),c.push(r[f+1]);const u=[],l=pt.empty();for(let f=a.length-1;f>=0;--f)if(!jm(u,a[f])){const d=a[f];let p=c[f];p=kt(p);const m=o.na(d);if(p instanceof Xs)u.push(d);else{const v=kn(p,m);v!=null&&(u.push(d),l.set(d,v))}}const h=new wt(u);return new Ou(l,h,o.fieldTransforms)}function kn(e,t){if(Mu(e=kt(e)))return $u("Unsupported field value:",t,e),Um(e,t);if(e instanceof Ws)return function(n,s){if(!Lu(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&t.Yc!==4)throw t.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=kn(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=kt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ld(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=G.fromDate(n);return{timestampValue:fs(s.serializer,i)}}if(n instanceof G){const i=new G(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fs(s.serializer,i)}}if(n instanceof Br)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ke)return{bytesValue:su(s.serializer,n._byteString)};if(n instanceof ht){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ar(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Vr(n)}`)}(e,t)}function Um(e,t){const n={};return kc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):se(e,(s,i)=>{const r=kn(i,t.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Mu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof G||e instanceof Br||e instanceof ke||e instanceof ht||e instanceof Ws)}function $u(e,t,n){if(!Mu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Vr(n);throw s==="an object"?t.ia(e+" a custom object"):t.ia(e+" "+s)}}function Wo(e,t,n){if((t=kt(t))instanceof Qs)return t._internalPath;if(typeof t=="string")return jr(e,t);throw ps("Field path arguments must be of type string or ",e,!1,void 0,n)}const Bm=new RegExp("[~\\*/\\[\\]]");function jr(e,t,n){if(t.search(Bm)>=0)throw ps(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Qs(...t.split("."))._internalPath}catch{throw ps(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ps(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new T(g.INVALID_ARGUMENT,a+e+c)}function jm(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new qm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Fu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qm extends Pu{data(){return super.data()}}function Fu(e,t){return typeof t=="string"?jr(e,t):t instanceof Qs?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new T(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Km{convertValue(t,n="none"){switch(ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return K(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(be(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw b()}}convertObject(t,n){const s={};return se(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Br(K(t.latitude),K(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Rc(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(an(t));default:return null}}convertTimestamp(t){const n=Bt(t);return new G(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=F.fromString(t);$(cu(s));const i=new cn(s.get(1),s.get(3)),r=new _(s.popFirst(5));return i.isEqual(n)||Rt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vu extends Pu{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new zn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Fu("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class zn extends Vu{data(t={}){return super.data(t)}}class Hm{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new qe(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new zn(this._firestore,this._userDataWriter,s.key,s,new qe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new zn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new zn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Gm(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Gm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(e){e=Ft(e,ht);const t=Ft(e.firestore,hn);return Sm(Ur(t),e._key).then(n=>Bu(t,e,n))}class Uu extends Km{constructor(t){super(),this.firestore=t}convertBytes(t){return new ke(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function Wm(e,t,n,...s){e=Ft(e,ht);const i=Ft(e.firestore,hn),r=Mm(i);let o;return o=typeof(t=kt(t))=="string"||t instanceof Qs?Vm(r,"updateDoc",e._key,t,n,s):Fm(r,"updateDoc",e._key,t),Xm(i,[o.toMutation(e._key,Dt.exists(!0))])}function Ym(e,...t){var n,s,i;e=kt(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Qo(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Qo(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(e instanceof ht)u=Ft(e.firestore,hn),l=$s(e._key.path),c={next:h=>{t[o]&&t[o](Bu(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Ft(e,Gs);u=Ft(h.firestore,hn),l=h._query;const f=new Uu(u);c={next:d=>{t[o]&&t[o](new Hm(u,f,h,d))},error:t[o+1],complete:t[o+2]},zm(e._query)}return function(h,f,d,p){const m=new ku(p),v=new Tu(f,m,d);return h.asyncQueue.enqueueAndForget(async()=>Eu(await Qi(h),v)),()=>{m.yc(),h.asyncQueue.enqueueAndForget(async()=>_u(await Qi(h),v))}}(Ur(u),l,a,c)}function Xm(e,t){return function(n,s){const i=new Pt;return n.asyncQueue.enqueueAndForget(async()=>fm(await Cm(n),s,i)),i.promise}(Ur(e),t)}function Bu(e,t,n){const s=n.docs.get(t._key),i=new Uu(e);return new Vu(e,i,t._key,s,new qe(n.hasPendingWrites,n.fromCache),t.converter)}function Jm(...e){return new Pm("arrayUnion",e)}(function(e,t=!0){(function(n){Me=n})(Oh),Jn(new Je("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new hn(new Xf(n.getProvider("auth-internal")),new ed(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new T(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cn(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),me(go,"3.10.0",e),me(go,"3.10.0","esm2017")})();const Zm={apiKey:"AIzaSyCDqpSA_-xEwVkbj-EBwPHNYiSvJO6ULOY",authDomain:"wedding-photos-challenge.firebaseapp.com",projectId:"wedding-photos-challenge",storageBucket:"wedding-photos-challenge.appspot.com",messagingSenderId:"1095306889273",appId:"1:1095306889273:web:2f1ac74abc6fb029f1a5e8",measurementId:"G-3V15Z3EV3R"},tg=Ta(Zm),Yo=xm(tg);function ju(e){const t=e-1;return t*t*t+1}function eg(e,{delay:t=0,duration:n=400,easing:s=Ne}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function ng(e,{delay:t=0,duration:n=400,easing:s=ju,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(e),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o),[h,f]=Kr(i),[d,p]=Kr(r);return{delay:t,duration:n,easing:s,css:(m,v)=>`
			transform: ${u} translate(${(1-m)*h}${f}, ${(1-m)*d}${p});
			opacity: ${c-l*v}`}}function sg(e,{from:t,to:n},s={}){const i=getComputedStyle(e),r=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),c=t.left+t.width*o/n.width-(n.left+o),u=t.top+t.height*a/n.height-(n.top+a),{delay:l=0,duration:h=d=>Math.sqrt(d)*120,easing:f=ju}=s;return{delay:l,duration:fn(h)?h(Math.sqrt(c*c+u*u)):h,easing:f,css:(d,p)=>{const m=p*c,v=p*u,C=d+p*t.width/n.width,M=d+p*t.height/n.height;return`transform: ${r} translate(${m}px, ${v}px) scale(${C}, ${M});`}}}const ce=[];function qr(e,t=j){let n;const s=new Set;function i(a){if(Re(e,a)&&(e=a,n)){const c=!ce.length;for(const u of s)u[1](),ce.push(u,e);if(c){for(let u=0;u<ce.length;u+=2)ce[u][0](ce[u+1]);ce.length=0}}}function r(a){i(a(e))}function o(a,c=j){const u=[a,c];return s.add(u),s.size===1&&(n=t(i)||j),a(e),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const ig={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},rg=()=>{const{subscribe:e,update:t}=qr([]);let n=0;const s={},i=u=>u instanceof Object;return{subscribe:e,push:(u,l={})=>{const h={target:"default",...i(u)?u:{...l,msg:u}},f=s[h.target]||{},d={...ig,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++n};return t(p=>d.reversed?[...p,d]:[d,...p]),n},pop:u=>{t(l=>{if(!l.length||u===0)return[];if(i(u))return l.filter(f=>u(f));const h=u||Math.max(...l.map(f=>f.id));return l.filter(f=>f.id!==h)})},set:(u,l={})=>{const h=i(u)?{...u}:{...l,id:u};t(f=>{const d=f.findIndex(p=>p.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(u="default",l={})=>(s[u]=l,s)}},ve=rg();function Xo(e){return Object.prototype.toString.call(e)==="[object Date]"}function Wi(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=t.map((i,r)=>Wi(e[r],i));return i=>s.map(r=>r(i))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(Xo(e)&&Xo(t)){e=e.getTime(),t=t.getTime();const r=t-e;return o=>new Date(e+o*r)}const s=Object.keys(t),i={};return s.forEach(r=>{i[r]=Wi(e[r],t[r])}),r=>{const o={};return s.forEach(a=>{o[a]=i[a](r)}),o}}if(n==="number"){const s=t-e;return i=>e+i*s}throw new Error(`Cannot interpolate ${n} values`)}function og(e,t={}){const n=qr(e);let s,i=e;function r(o,a){if(e==null)return n.set(e=o),Promise.resolve();i=o;let c=s,u=!1,{delay:l=0,duration:h=400,easing:f=Ne,interpolate:d=Wi}=mi(mi({},t),a);if(h===0)return c&&(c.abort(),c=null),n.set(e=i),Promise.resolve();const p=ms()+l;let m;return s=gs(v=>{if(v<p)return!0;u||(m=d(e,o),typeof h=="function"&&(h=h(e,o)),u=!0),c&&(c.abort(),c=null);const C=v-p;return C>h?(n.set(e=o),!1):(n.set(e=m(f(C/h))),!0)}),s.promise}return{set:r,update:(o,a)=>r(o(i,e),a),subscribe:n.subscribe}}function ag(e){let t,n=e[0].msg+"",s;return{c(){t=new Yu(!1),s=Xi(),t.a=s},m(i,r){t.m(n,i,r),ft(i,s,r)},p(i,r){r&1&&n!==(n=i[0].msg+"")&&t.p(n)},i:j,o:j,d(i){i&&at(s),i&&t.d()}}}function cg(e){let t,n,s;const i=[e[2]];var r=e[0].component.src;function o(a){let c={};for(let u=0;u<i.length;u+=1)c=mi(c,i[u]);return{props:c}}return r&&(t=Gr(r,o())),{c(){t&&Ee(t.$$.fragment),n=Xi()},m(a,c){t&&Xt(t,a,c),ft(a,n,c),s=!0},p(a,c){const u=c&4?pl(i,[ml(a[2])]):{};if(c&1&&r!==(r=a[0].component.src)){if(t){ys();const l=t;yt(l.$$.fragment,1,0,()=>{Jt(l,1)}),vs()}r?(t=Gr(r,o()),Ee(t.$$.fragment),lt(t.$$.fragment,1),Xt(t,n.parentNode,n)):t=null}else r&&t.$set(u)},i(a){s||(t&&lt(t.$$.fragment,a),s=!0)},o(a){t&&yt(t.$$.fragment,a),s=!1},d(a){a&&at(n),t&&Jt(t,a)}}}function Jo(e){let t,n,s;return{c(){t=V("div"),O(t,"class","_toastBtn pe svelte-l65oht"),O(t,"role","button"),O(t,"tabindex","0")},m(i,r){ft(i,t,r),n||(s=[At(t,"click",e[4]),At(t,"keydown",e[8])],n=!0)},p:j,d(i){i&&at(t),n=!1,Et(s)}}}function ug(e){let t,n,s,i,r,o,a,c,u,l;const h=[cg,ag],f=[];function d(m,v){return m[0].component?0:1}s=d(e),i=f[s]=h[s](e);let p=e[0].dismissable&&Jo(e);return{c(){t=V("div"),n=V("div"),i.c(),r=mt(),p&&p.c(),o=mt(),a=V("progress"),O(n,"role","status"),O(n,"class","_toastMsg svelte-l65oht"),Rn(n,"pe",e[0].component),O(a,"class","_toastBar svelte-l65oht"),a.value=e[1],O(t,"class","_toastItem svelte-l65oht"),Rn(t,"pe",e[0].pausable)},m(m,v){ft(m,t,v),L(t,n),f[s].m(n,null),L(t,r),p&&p.m(t,null),L(t,o),L(t,a),c=!0,u||(l=[At(t,"mouseenter",e[9]),At(t,"mouseleave",e[6])],u=!0)},p(m,[v]){let C=s;s=d(m),s===C?f[s].p(m,v):(ys(),yt(f[C],1,1,()=>{f[C]=null}),vs(),i=f[s],i?i.p(m,v):(i=f[s]=h[s](m),i.c()),lt(i,1),i.m(n,null)),(!c||v&1)&&Rn(n,"pe",m[0].component),m[0].dismissable?p?p.p(m,v):(p=Jo(m),p.c(),p.m(t,o)):p&&(p.d(1),p=null),(!c||v&2)&&(a.value=m[1]),(!c||v&1)&&Rn(t,"pe",m[0].pausable)},i(m){c||(lt(i),c=!0)},o(m){yt(i),c=!1},d(m){m&&at(t),f[s].d(),p&&p.d(),u=!1,Et(l)}}}function lg(e,t,n){let s,{item:i}=t;const r=og(i.initial,{duration:i.duration,easing:Ne});oa(e,r,A=>n(1,s=A));const o=()=>ve.pop(i.id),a=()=>{(s===1||s===0)&&o()};let c=i.initial,u=c,l=!1;const h=()=>{!l&&s!==c&&(r.set(s,{duration:0}),l=!0)},f=()=>{if(l){const A=i.duration,U=A-A*((s-u)/(c-u));r.set(c,{duration:U}).then(a),l=!1}};let d={};const p=(A,U="undefined")=>typeof A===U;let m;nl((A=document)=>{if(p(A.hidden))return;const U=()=>A.hidden?h():f(),vt="visibilitychange";A.addEventListener(vt,U),m=()=>A.removeEventListener(vt,U),U()}),sl(()=>{p(i.onpop,"function")&&i.onpop(i.id),m&&m()});const C=A=>{A instanceof KeyboardEvent&&["Enter"," "].includes(A.key)&&o()},M=()=>{i.pausable&&h()};return e.$$set=A=>{"item"in A&&n(0,i=A.item)},e.$$.update=()=>{if(e.$$.dirty&1&&(p(i.progress)||n(0,i.next=i.progress,i)),e.$$.dirty&131&&c!==i.next&&(n(7,c=i.next),u=s,l=!1,r.set(c).then(a)),e.$$.dirty&1&&i.component){const{props:A={},sendIdTo:U}=i.component;n(2,d={...A,...U&&{[U]:i.id}})}},[i,s,d,r,o,h,f,c,C,M]}class hg extends pn{constructor(t){super(),dn(this,t,lg,ug,Re,{item:0})}}function Zo(e,t,n){const s=e.slice();return s[5]=t[n],s}function ta(e,t){let n,s,i,r,o,a,c,u,l=j,h;return s=new hg({props:{item:t[5]}}),{key:e,first:null,c(){n=V("li"),Ee(s.$$.fragment),i=mt(),O(n,"class",r=Kn(t[5].classes.join(" "))+" svelte-yh90az"),O(n,"style",o=t[1](t[5].theme)),this.first=n},m(f,d){ft(f,n,d),Xt(s,n,null),L(n,i),h=!0},p(f,d){t=f;const p={};d&1&&(p.item=t[5]),s.$set(p),(!h||d&1&&r!==(r=Kn(t[5].classes.join(" "))+" svelte-yh90az"))&&O(n,"class",r),(!h||d&1&&o!==(o=t[1](t[5].theme)))&&O(n,"style",o)},r(){u=n.getBoundingClientRect()},f(){el(n),l(),la(n,u)},a(){l(),l=tl(n,u,sg,{duration:200})},i(f){h||(lt(s.$$.fragment,f),we(()=>{!h||(c&&c.end(1),a=ul(n,ng,t[5].intro),a.start())}),h=!0)},o(f){yt(s.$$.fragment,f),a&&a.invalidate(),c=ll(n,eg,{}),h=!1},d(f){f&&at(n),Jt(s),f&&c&&c.end()}}}function fg(e){let t,n=[],s=new Map,i,r=e[0];const o=a=>a[5].id;for(let a=0;a<r.length;a+=1){let c=Zo(e,r,a),u=o(c);s.set(u,n[a]=ta(u,c))}return{c(){t=V("ul");for(let a=0;a<n.length;a+=1)n[a].c();O(t,"class","_toastContainer svelte-yh90az")},m(a,c){ft(a,t,c);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null);i=!0},p(a,[c]){if(c&3){r=a[0],ys();for(let u=0;u<n.length;u+=1)n[u].r();n=dl(n,c,o,1,a,r,s,t,fl,ta,null,Zo);for(let u=0;u<n.length;u+=1)n[u].a();vs()}},i(a){if(!i){for(let c=0;c<r.length;c+=1)lt(n[c]);i=!0}},o(a){for(let c=0;c<n.length;c+=1)yt(n[c]);i=!1},d(a){a&&at(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}function dg(e,t,n){let s;oa(e,ve,c=>n(4,s=c));let{options:i={}}=t,{target:r="default"}=t,o;const a=c=>Object.keys(c).reduce((u,l)=>`${u}${l}:${c[l]};`,"");return e.$$set=c=>{"options"in c&&n(2,i=c.options),"target"in c&&n(3,r=c.target)},e.$$.update=()=>{e.$$.dirty&12&&ve._init(r,i),e.$$.dirty&24&&n(0,o=s.filter(c=>c.target===r))},[o,a,i,r,s]}class pg extends pn{constructor(t){super(),dn(this,t,dg,fg,Re,{options:2,target:3})}}function ea(e){let t,n,s,i,r=e[0].name+"",o,a,c,u,l,h=(e[0].completed.length>0?e[0].completed.join(", "):"Not completed by anyone yet!")+"",f,d;return{c(){t=V("div"),n=V("h2"),n.textContent="Your challenge is:",s=mt(),i=V("h1"),o=Ye(r),a=mt(),c=V("h3"),c.textContent="Completed by:",u=mt(),l=V("h2"),f=Ye(h),O(i,"class","challenge svelte-1wsnha1"),O(l,"class",d=Kn(e[0].completed.length>0?"completers":"")+" svelte-1wsnha1"),O(t,"class","challenge-block svelte-1wsnha1")},m(p,m){ft(p,t,m),L(t,n),L(t,s),L(t,i),L(i,o),L(t,a),L(t,c),L(t,u),L(t,l),L(l,f)},p(p,m){m&1&&r!==(r=p[0].name+"")&&gi(o,r),m&1&&h!==(h=(p[0].completed.length>0?p[0].completed.join(", "):"Not completed by anyone yet!")+"")&&gi(f,h),m&1&&d!==(d=Kn(p[0].completed.length>0?"completers":"")+" svelte-1wsnha1")&&O(l,"class",d)},d(p){p&&at(t)}}}function mg(e){let t,n,s,i,r,o,a,c,u=e[0]&&e[0].name&&e[0].completed&&ea(e);return{c(){t=V("div"),n=V("div"),u&&u.c(),s=mt(),i=V("button"),i.textContent="\u{1F503} New Challenge",r=mt(),o=V("button"),o.textContent="\u2705 Complete Challenge",O(n,"class","heading svelte-1wsnha1"),O(t,"class","container svelte-1wsnha1")},m(l,h){ft(l,t,h),L(t,n),u&&u.m(n,null),L(n,s),L(n,i),L(n,r),L(n,o),a||(c=[At(i,"click",e[1]),At(o,"click",e[2])],a=!0)},p(l,[h]){l[0]&&l[0].name&&l[0].completed?u?u.p(l,h):(u=ea(l),u.c(),u.m(n,s)):u&&(u.d(1),u=null)},i:j,o:j,d(l){l&&at(t),u&&u.d(),a=!1,Et(c)}}}let na="challenges";function gg(e,t,n){let{name:s}=t,i={id:"",name:"Loading...",completed:[]},r=[];const o=km(Yo,na);Ym(o,u=>{r=[],u.forEach(l=>{r.push({id:l.id,name:l.data().name,completed:l.data().completed}),(!i||i.name=="Loading...")&&a(),i.id==l.id&&n(0,i={id:l.id,name:l.data().name,completed:l.data().completed})})});function a(){let u=i;for(;i==u;)n(0,i=r[Math.floor(Math.random()*r.length)])}async function c(){if(i.completed.includes(s)){ve.push("\u{1F6A7} Challenge already completed!");return}const u=Nm(Yo,na,i.id);(await Qm(u)).exists()?await Wm(u,{completed:Jm(s)}).then(()=>{ve.push("\u2705 Challenge completed!")}):ve.push("\u{1F6A8} Unable to complete challenge, try again or refresh!")}return e.$$set=u=>{"name"in u&&n(3,s=u.name)},[i,a,c,s]}class yg extends pn{constructor(t){super(),dn(this,t,gg,mg,Re,{name:3})}}const vg=(e,t)=>{const n=c=>JSON.stringify(c,null,2),s=JSON.parse;localStorage.getItem(e)===null&&localStorage.setItem(e,n(t));const i=s(localStorage.getItem(e)),{subscribe:r,set:o,update:a}=qr(i);return{subscribe:r,set:c=>(localStorage.setItem(e,n(c)),o(c)),update:a}},wg="",sa=vg("pc-name",wg);function Eg(e){let t,n,s,i,r,o,a,c;return{c(){t=V("div"),n=V("label"),n.textContent="What's your name?",s=mt(),i=V("input"),r=mt(),o=V("button"),o.textContent="Let's go!",O(n,"for","name-input"),O(n,"class","svelte-1j52fg6"),O(i,"id","name-input"),O(i,"type","text"),O(i,"class","svelte-1j52fg6"),O(o,"class","svelte-1j52fg6"),O(t,"id","name-container"),O(t,"class","svelte-1j52fg6")},m(u,l){ft(u,t,l),L(t,n),L(t,s),L(t,i),Hr(i,e[1]),L(t,r),L(t,o),a||(c=[At(i,"input",e[4]),At(o,"click",e[2])],a=!0)},p(u,l){l&2&&i.value!==u[1]&&Hr(i,u[1])},d(u){u&&at(t),a=!1,Et(c)}}}function _g(e){let t,n,s,i,r,o;return{c(){t=V("p"),n=Ye(e[0]),s=mt(),i=V("span"),i.textContent="Change",O(i,"class","svelte-1j52fg6"),O(t,"id","logged-in"),O(t,"class","svelte-1j52fg6")},m(a,c){ft(a,t,c),L(t,n),L(t,s),L(t,i),r||(o=At(i,"click",e[3]),r=!0)},p(a,c){c&1&&gi(n,a[0])},d(a){a&&at(t),r=!1,o()}}}function Tg(e){let t;function n(r,o){return r[0]!=""?_g:Eg}let s=n(e),i=s(e);return{c(){i.c(),t=Xi()},m(r,o){i.m(r,o),ft(r,t,o)},p(r,[o]){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(t.parentNode,t)))},i:j,o:j,d(r){i.d(r),r&&at(t)}}}function bg(e,t,n){let{nameVal:s}=t;sa.subscribe(c=>{n(0,s=c)});let i="";function r(){n(1,i=i.toLowerCase()),sa.set(i)}function o(){n(1,i=""),r()}function a(){i=this.value,n(1,i)}return e.$$set=c=>{"nameVal"in c&&n(0,s=c.nameVal)},e.$$.update=()=>{e.$$.dirty&1&&console.log(s)},[s,i,r,o,a]}class Ig extends pn{constructor(t){super(),dn(this,t,bg,Tg,Re,{nameVal:0})}}function ia(e){let t,n;return t=new yg({props:{name:e[0]}}),{c(){Ee(t.$$.fragment)},m(s,i){Xt(t,s,i),n=!0},p(s,i){const r={};i&1&&(r.name=s[0]),t.$set(r)},i(s){n||(lt(t.$$.fragment,s),n=!0)},o(s){yt(t.$$.fragment,s),n=!1},d(s){Jt(t,s)}}}function Cg(e){let t,n,s,i,r,o;function a(l){e[1](l)}let c={};e[0]!==void 0&&(c.nameVal=e[0]),t=new Ig({props:c}),yi.push(()=>gl(t,"nameVal",a));let u=e[0]!=""&&ia(e);return r=new pg({}),{c(){Ee(t.$$.fragment),s=mt(),u&&u.c(),i=mt(),Ee(r.$$.fragment)},m(l,h){Xt(t,l,h),ft(l,s,h),u&&u.m(l,h),ft(l,i,h),Xt(r,l,h),o=!0},p(l,[h]){const f={};!n&&h&1&&(n=!0,f.nameVal=l[0],ol(()=>n=!1)),t.$set(f),l[0]!=""?u?(u.p(l,h),h&1&&lt(u,1)):(u=ia(l),u.c(),lt(u,1),u.m(i.parentNode,i)):u&&(ys(),yt(u,1,1,()=>{u=null}),vs())},i(l){o||(lt(t.$$.fragment,l),lt(u),lt(r.$$.fragment,l),o=!0)},o(l){yt(t.$$.fragment,l),yt(u),yt(r.$$.fragment,l),o=!1},d(l){Jt(t,l),l&&at(s),u&&u.d(l),l&&at(i),Jt(r,l)}}}function Sg(e,t,n){let s="";function i(r){s=r,n(0,s)}return[s,i]}class Dg extends pn{constructor(t){super(),dn(this,t,Sg,Cg,Re,{})}}new Dg({target:document.getElementById("app")});
