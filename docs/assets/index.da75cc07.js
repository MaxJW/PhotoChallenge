(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function q(){}const ot=t=>t;function wi(t,e){for(const n in e)t[n]=e[n];return t}function ma(t){return t()}function Gr(){return Object.create(null)}function we(t){t.forEach(ma)}function at(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ju(t){return Object.keys(t).length===0}function Zu(t,...e){if(t==null)return q;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ga(t,e,n){t.$$.on_destroy.push(Zu(e,n))}function Zn(t){return t==null?"":t}function el(t){return t&&at(t.destroy)?t.destroy:q}function Qr(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const ya=typeof window<"u";let wn=ya?()=>window.performance.now():()=>Date.now(),Ji=ya?t=>requestAnimationFrame(t):q;const Et=new Set;function va(t){Et.forEach(e=>{e.c(t)||(Et.delete(e),e.f())}),Et.size!==0&&Ji(va)}function En(t){let e;return Et.size===0&&Ji(va),{promise:new Promise(n=>{Et.add(e={c:t,f:n})}),abort(){Et.delete(e)}}}function k(t,e){t.appendChild(e)}function wa(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function tl(t){const e=M("style");return nl(wa(t),e),e.sheet}function nl(t,e){return k(t.head||t,e),e.sheet}function G(t,e,n){t.insertBefore(e,n||null)}function B(t){t.parentNode&&t.parentNode.removeChild(t)}function sl(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function M(t){return document.createElement(t)}function il(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function tt(t){return document.createTextNode(t)}function W(){return tt(" ")}function Ts(){return tt("")}function _e(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function N(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function rl(t){return Array.from(t.childNodes)}function tn(t,e){e=""+e,t.data!==e&&(t.data=e)}function Wr(t,e){t.value=e==null?"":e}function Vn(t,e,n){t.classList[n?"add":"remove"](e)}function ol(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}class al{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,s=null){this.e||(this.is_svg?this.e=il(n.nodeName):this.e=M(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)G(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(B)}}function Yr(t,e){return new t(e)}const es=new Map;let ts=0;function cl(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ul(t,e){const n={stylesheet:tl(e),rules:{}};return es.set(t,n),n}function nn(t,e,n,s,i,r,o,a=0){const c=16.666/s;let u=`{
`;for(let v=0;v<=1;v+=c){const b=e+(n-e)*r(v);u+=v*100+`%{${o(b,1-b)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${cl(l)}_${a}`,f=wa(t),{stylesheet:d,rules:p}=es.get(f)||ul(f,t);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${l}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${h} ${s}ms linear ${i}ms 1 both`,ts+=1,h}function sn(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),ts-=i,ts||ll())}function ll(){Ji(()=>{ts||(es.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&B(e)}),es.clear())})}function hl(t,e,n,s){if(!e)return q;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return q;const{delay:r=0,duration:o=300,easing:a=ot,start:c=wn()+r,end:u=c+o,tick:l=q,css:h}=n(t,{from:e,to:i},s);let f=!0,d=!1,p;function m(){h&&(p=nn(t,0,1,o,r,a,h)),r||(d=!0)}function v(){h&&sn(t,p),f=!1}return En(b=>{if(!d&&b>=c&&(d=!0),d&&b>=u&&(l(1,0),v()),!f)return!1;if(d){const P=b-c,S=0+1*a(P/o);l(S,1-S)}return!0}),m(),l(0,1),v}function fl(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:s}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=s,Ea(t,i)}}function Ea(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const s=getComputedStyle(t),i=s.transform==="none"?"":s.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let rn;function Wt(t){rn=t}function _a(){if(!rn)throw new Error("Function called outside component initialization");return rn}function dl(t){_a().$$.on_mount.push(t)}function pl(t){_a().$$.on_destroy.push(t)}const gt=[],ns=[];let _t=[];const Ei=[],ml=Promise.resolve();let _i=!1;function gl(){_i||(_i=!0,ml.then(Ta))}function Ue(t){_t.push(t)}function yl(t){Ei.push(t)}const ni=new Set;let pt=0;function Ta(){if(pt!==0)return;const t=rn;do{try{for(;pt<gt.length;){const e=gt[pt];pt++,Wt(e),vl(e.$$)}}catch(e){throw gt.length=0,pt=0,e}for(Wt(null),gt.length=0,pt=0;ns.length;)ns.pop()();for(let e=0;e<_t.length;e+=1){const n=_t[e];ni.has(n)||(ni.add(n),n())}_t.length=0}while(gt.length);for(;Ei.length;)Ei.pop()();_i=!1,ni.clear(),Wt(t)}function vl(t){if(t.fragment!==null){t.update(),we(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ue)}}function wl(t){const e=[],n=[];_t.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),_t=e}let qt;function Zi(){return qt||(qt=Promise.resolve(),qt.then(()=>{qt=null})),qt}function Je(t,e,n){t.dispatchEvent(ol(`${e?"intro":"outro"}${n}`))}const Qn=new Set;let Ie;function _n(){Ie={r:0,c:[],p:Ie}}function Tn(){Ie.r||we(Ie.c),Ie=Ie.p}function ee(t,e){t&&t.i&&(Qn.delete(t),t.i(e))}function fe(t,e,n,s){if(t&&t.o){if(Qn.has(t))return;Qn.add(t),Ie.c.push(()=>{Qn.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const er={duration:0};function El(t,e,n){const s={direction:"in"};let i=e(t,n,s),r=!1,o,a,c=0;function u(){o&&sn(t,o)}function l(){const{delay:f=0,duration:d=300,easing:p=ot,tick:m=q,css:v}=i||er;v&&(o=nn(t,0,1,d,f,p,v,c++)),m(0,1);const b=wn()+f,P=b+d;a&&a.abort(),r=!0,Ue(()=>Je(t,!0,"start")),a=En(S=>{if(r){if(S>=P)return m(1,0),Je(t,!0,"end"),u(),r=!1;if(S>=b){const $=p((S-b)/d);m($,1-$)}}return r})}let h=!1;return{start(){h||(h=!0,sn(t),at(i)?(i=i(s),Zi().then(l)):l())},invalidate(){h=!1},end(){r&&(u(),r=!1)}}}function _l(t,e,n){const s={direction:"out"};let i=e(t,n,s),r=!0,o;const a=Ie;a.r+=1;function c(){const{delay:u=0,duration:l=300,easing:h=ot,tick:f=q,css:d}=i||er;d&&(o=nn(t,1,0,l,u,h,d));const p=wn()+u,m=p+l;Ue(()=>Je(t,!1,"start")),En(v=>{if(r){if(v>=m)return f(0,1),Je(t,!1,"end"),--a.r||we(a.c),!1;if(v>=p){const b=h((v-p)/l);f(1-b,b)}}return r})}return at(i)?Zi().then(()=>{i=i(s),c()}):c(),{end(u){u&&i.tick&&i.tick(1,0),r&&(o&&sn(t,o),r=!1)}}}function Xr(t,e,n,s){const i={direction:"both"};let r=e(t,n,i),o=s?0:1,a=null,c=null,u=null;function l(){u&&sn(t,u)}function h(d,p){const m=d.b-o;return p*=Math.abs(m),{a:o,b:d.b,d:m,duration:p,start:d.start,end:d.start+p,group:d.group}}function f(d){const{delay:p=0,duration:m=300,easing:v=ot,tick:b=q,css:P}=r||er,S={start:wn()+p,b:d};d||(S.group=Ie,Ie.r+=1),a||c?c=S:(P&&(l(),u=nn(t,o,d,m,p,v,P)),d&&b(0,1),a=h(S,m),Ue(()=>Je(t,d,"start")),En($=>{if(c&&$>c.start&&(a=h(c,m),c=null,Je(t,a.b,"start"),P&&(l(),u=nn(t,o,a.b,a.duration,0,v,r.css))),a){if($>=a.end)b(o=a.b,1-o),Je(t,a.b,"end"),c||(a.b?l():--a.group.r||we(a.group.c)),a=null;else if($>=a.start){const me=$-a.start;o=a.a+a.d*v(me/a.duration),b(o,1-o)}}return!!(a||c)}))}return{run(d){at(r)?Zi().then(()=>{r=r(i),f(d)}):f(d)},end(){l(),a=c=null}}}function Tl(t,e){fe(t,1,1,()=>{e.delete(t.key)})}function bl(t,e){t.f(),Tl(t,e)}function Il(t,e,n,s,i,r,o,a,c,u,l,h){let f=t.length,d=r.length,p=f;const m={};for(;p--;)m[t[p].key]=p;const v=[],b=new Map,P=new Map,S=[];for(p=d;p--;){const z=h(i,r,p),ge=n(z);let Te=o.get(ge);Te?s&&S.push(()=>Te.p(z,e)):(Te=u(ge,z),Te.c()),b.set(ge,v[p]=Te),ge in m&&P.set(ge,Math.abs(p-m[ge]))}const $=new Set,me=new Set;function dt(z){ee(z,1),z.m(a,l),o.set(z.key,z),l=z.first,d--}for(;f&&d;){const z=v[d-1],ge=t[f-1],Te=z.key,Fn=ge.key;z===ge?(l=z.first,f--,d--):b.has(Fn)?!o.has(Te)||$.has(Te)?dt(z):me.has(Fn)?f--:P.get(Te)>P.get(Fn)?(me.add(Te),dt(z)):($.add(Fn),f--):(c(ge,o),f--)}for(;f--;){const z=t[f];b.has(z.key)||c(z,o)}for(;d;)dt(v[d-1]);return we(S),v}function Cl(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);t[r]=a}else for(const c in o)i[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Sl(t){return typeof t=="object"&&t!==null?t:{}}function Dl(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function nt(t){t&&t.c()}function Be(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||Ue(()=>{const o=t.$$.on_mount.map(ma).filter(at);t.$$.on_destroy?t.$$.on_destroy.push(...o):we(o),t.$$.on_mount=[]}),r.forEach(Ue)}function je(t,e){const n=t.$$;n.fragment!==null&&(wl(n.after_update),we(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Al(t,e){t.$$.dirty[0]===-1&&(gt.push(t),gl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Mt(t,e,n,s,i,r,o,a=[-1]){const c=rn;Wt(t);const u=t.$$={fragment:null,ctx:[],props:r,update:q,not_equal:i,bound:Gr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Gr(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(t,e.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return u.ctx&&i(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),l&&Al(t,h)),f}):[],u.update(),l=!0,we(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const h=rl(e.target);u.fragment&&u.fragment.l(h),h.forEach(B)}else u.fragment&&u.fragment.c();e.intro&&ee(t.$$.fragment),Be(t,e.target,e.anchor,e.customElement),Ta()}Wt(c)}class Pt{$destroy(){je(this,1),this.$destroy=q}$on(e,n){if(!at(n))return q;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Ju(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
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
 */const ba=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kl=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ia={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),s.push(n[l],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ba(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw new Nl;const f=r<<2|a>>4;if(s.push(f),u!==64){const d=a<<4&240|u>>2;if(s.push(d),h!==64){const p=u<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rl=function(t){const e=ba(t);return Ia.encodeByteArray(e,!0)},ss=function(t){return Rl(t).replace(/\./g,"")},xl=function(t){try{return Ia.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ll(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ol=()=>Ll().__FIREBASE_DEFAULTS__,Ml=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Pl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xl(t[1]);return e&&JSON.parse(e)},Ca=()=>{try{return Ol()||Ml()||Pl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$l=t=>{var e,n;return(n=(e=Ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fl=t=>{const e=$l(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Vl=()=>{var t;return(t=Ca())===null||t===void 0?void 0:t.config};/**
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
 */class Ul{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Bl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ss(JSON.stringify(n)),ss(JSON.stringify(o)),a].join(".")}function jl(){try{return typeof indexedDB=="object"}catch{return!1}}function ql(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const zl="FirebaseError";class $t extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=zl,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sa.prototype.create)}}class Sa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Kl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $t(i,a,s)}}function Kl(t,e){return t.replace(Hl,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Hl=/\{\$([^}]+)}/g;function Ti(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Jr(r)&&Jr(o)){if(!Ti(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Jr(t){return t!==null&&typeof t=="object"}/**
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
 */function Ne(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qe="[DEFAULT]";/**
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
 */class Gl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ul;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wl(e))try{this.getOrInitializeService({instanceIdentifier:Qe})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Qe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qe){return this.instances.has(e)}getOptions(e=Qe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ql(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qe){return this.component?this.component.multipleInstances?e:Qe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ql(t){return t===Qe?void 0:t}function Wl(t){return t.instantiationMode==="EAGER"}/**
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
 */class Yl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var L;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(L||(L={}));const Xl={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Jl=L.INFO,Zl={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},eh=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Zl[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Da{constructor(e){this.name=e,this._logLevel=Jl,this._logHandler=eh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const th=(t,e)=>e.some(n=>t instanceof n);let Zr,eo;function nh(){return Zr||(Zr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sh(){return eo||(eo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Aa=new WeakMap,bi=new WeakMap,ka=new WeakMap,si=new WeakMap,tr=new WeakMap;function ih(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Me(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Aa.set(n,t)}).catch(()=>{}),tr.set(e,t),e}function rh(t){if(bi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});bi.set(t,e)}let Ii={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ka.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oh(t){Ii=t(Ii)}function ah(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ii(this),e,...n);return ka.set(s,e.sort?e.sort():[e]),Me(s)}:sh().includes(t)?function(...e){return t.apply(ii(this),e),Me(Aa.get(this))}:function(...e){return Me(t.apply(ii(this),e))}}function ch(t){return typeof t=="function"?ah(t):(t instanceof IDBTransaction&&rh(t),th(t,nh())?new Proxy(t,Ii):t)}function Me(t){if(t instanceof IDBRequest)return ih(t);if(si.has(t))return si.get(t);const e=ch(t);return e!==t&&(si.set(t,e),tr.set(e,t)),e}const ii=t=>tr.get(t);function uh(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Me(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Me(o.result),c.oldVersion,c.newVersion,Me(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const lh=["get","getKey","getAll","getAllKeys","count"],hh=["put","add","delete","clear"],ri=new Map;function to(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ri.get(e))return ri.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=hh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||lh.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return ri.set(e,r),r}oh(t=>({...t,get:(e,n,s)=>to(e,n)||t.get(e,n,s),has:(e,n)=>!!to(e,n)||t.has(e,n)}));/**
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
 */class fh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function dh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ci="@firebase/app",no="0.9.7";/**
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
 */const st=new Da("@firebase/app"),ph="@firebase/app-compat",mh="@firebase/analytics-compat",gh="@firebase/analytics",yh="@firebase/app-check-compat",vh="@firebase/app-check",wh="@firebase/auth",Eh="@firebase/auth-compat",_h="@firebase/database",Th="@firebase/database-compat",bh="@firebase/functions",Ih="@firebase/functions-compat",Ch="@firebase/installations",Sh="@firebase/installations-compat",Dh="@firebase/messaging",Ah="@firebase/messaging-compat",kh="@firebase/performance",Nh="@firebase/performance-compat",Rh="@firebase/remote-config",xh="@firebase/remote-config-compat",Lh="@firebase/storage",Oh="@firebase/storage-compat",Mh="@firebase/firestore",Ph="@firebase/firestore-compat",$h="firebase",Fh="9.19.1";/**
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
 */const Si="[DEFAULT]",Vh={[Ci]:"fire-core",[ph]:"fire-core-compat",[gh]:"fire-analytics",[mh]:"fire-analytics-compat",[vh]:"fire-app-check",[yh]:"fire-app-check-compat",[wh]:"fire-auth",[Eh]:"fire-auth-compat",[_h]:"fire-rtdb",[Th]:"fire-rtdb-compat",[bh]:"fire-fn",[Ih]:"fire-fn-compat",[Ch]:"fire-iid",[Sh]:"fire-iid-compat",[Dh]:"fire-fcm",[Ah]:"fire-fcm-compat",[kh]:"fire-perf",[Nh]:"fire-perf-compat",[Rh]:"fire-rc",[xh]:"fire-rc-compat",[Lh]:"fire-gcs",[Oh]:"fire-gcs-compat",[Mh]:"fire-fst",[Ph]:"fire-fst-compat","fire-js":"fire-js",[$h]:"fire-js-all"};/**
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
 */const is=new Map,Di=new Map;function Uh(t,e){try{t.container.addComponent(e)}catch(n){st.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(Di.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;Di.set(e,t);for(const n of is.values())Uh(n,t);return!0}function Bh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const jh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pe=new Sa("app","Firebase",jh);/**
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
 */class qh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pe.create("app-deleted",{appName:this._name})}}/**
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
 */const zh=Fh;function Na(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Si,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Pe.create("bad-app-name",{appName:String(i)});if(n||(n=Vl()),!n)throw Pe.create("no-options");const r=is.get(i);if(r){if(Ti(n,r.options)&&Ti(s,r.config))return r;throw Pe.create("duplicate-app",{appName:i})}const o=new Yl(i);for(const c of Di.values())o.addComponent(c);const a=new qh(n,s,o);return is.set(i,a),a}function Kh(t=Si){const e=is.get(t);if(!e&&t===Si)return Na();if(!e)throw Pe.create("no-app",{appName:t});return e}function Tt(t,e,n){var s;let i=(s=Vh[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),st.warn(a.join(" "));return}rs(new on(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Hh="firebase-heartbeat-database",Gh=1,an="firebase-heartbeat-store";let oi=null;function Ra(){return oi||(oi=uh(Hh,Gh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(an)}}}).catch(t=>{throw Pe.create("idb-open",{originalErrorMessage:t.message})})),oi}async function Qh(t){try{return(await Ra()).transaction(an).objectStore(an).get(xa(t))}catch(e){if(e instanceof $t)st.warn(e.message);else{const n=Pe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});st.warn(n.message)}}}async function so(t,e){try{const s=(await Ra()).transaction(an,"readwrite");return await s.objectStore(an).put(e,xa(t)),s.done}catch(n){if(n instanceof $t)st.warn(n.message);else{const s=Pe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});st.warn(s.message)}}}function xa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wh=1024,Yh=30*24*60*60*1e3;class Xh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=io();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Yh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=io(),{heartbeatsToSend:n,unsentEntries:s}=Jh(this._heartbeatsCache.heartbeats),i=ss(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function io(){return new Date().toISOString().substring(0,10)}function Jh(t,e=Wh){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ro(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ro(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Zh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jl()?ql().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Qh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return so(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return so(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ro(t){return ss(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ef(t){rs(new on("platform-logger",e=>new fh(e),"PRIVATE")),rs(new on("heartbeat",e=>new Xh(e),"PRIVATE")),Tt(Ci,no,t),Tt(Ci,no,"esm2017"),Tt("fire-js","")}ef("");var tf="firebase",nf="9.19.1";/**
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
 */Tt(tf,nf,"app");var sf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,nr=nr||{},C=sf||self;function os(){}function bs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function rf(t){return Object.prototype.hasOwnProperty.call(t,ai)&&t[ai]||(t[ai]=++of)}var ai="closure_uid_"+(1e9*Math.random()>>>0),of=0;function af(t,e,n){return t.call.apply(t.bind,arguments)}function cf(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ue(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ue=af:ue=cf,ue.apply(null,arguments)}function Un(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ie(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function He(){this.s=this.s,this.o=this.o}var uf=0;He.prototype.s=!1;He.prototype.na=function(){!this.s&&(this.s=!0,this.M(),uf!=0)&&rf(this)};He.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const La=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function sr(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function oo(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(bs(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var lf=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{C.addEventListener("test",os,e),C.removeEventListener("test",os,e)}catch{}return t}();function as(t){return/^[\s\xa0]*$/.test(t)}var ao=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ci(t,e){return t<e?-1:t>e?1:0}function Is(){var t=C.navigator;return t&&(t=t.userAgent)?t:""}function be(t){return Is().indexOf(t)!=-1}function ir(t){return ir[" "](t),t}ir[" "]=os;function hf(t){var e=pf;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ff=be("Opera"),St=be("Trident")||be("MSIE"),Oa=be("Edge"),Ai=Oa||St,Ma=be("Gecko")&&!(Is().toLowerCase().indexOf("webkit")!=-1&&!be("Edge"))&&!(be("Trident")||be("MSIE"))&&!be("Edge"),df=Is().toLowerCase().indexOf("webkit")!=-1&&!be("Edge");function Pa(){var t=C.document;return t?t.documentMode:void 0}var cs;e:{var ui="",li=function(){var t=Is();if(Ma)return/rv:([^\);]+)(\)|;)/.exec(t);if(Oa)return/Edge\/([\d\.]+)/.exec(t);if(St)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(df)return/WebKit\/(\S+)/.exec(t);if(ff)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(li&&(ui=li?li[1]:""),St){var hi=Pa();if(hi!=null&&hi>parseFloat(ui)){cs=String(hi);break e}}cs=ui}var pf={};function mf(){return hf(function(){let t=0;const e=ao(String(cs)).split("."),n=ao("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=ci(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ci(i[2].length==0,r[2].length==0)||ci(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var ki;if(C.document&&St){var co=Pa();ki=co||parseInt(cs,10)||void 0}else ki=void 0;var gf=ki;function cn(t,e){if(le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ma){e:{try{ir(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:yf[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&cn.X.h.call(this)}}ie(cn,le);var yf={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var In="closure_listenable_"+(1e6*Math.random()|0),vf=0;function wf(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++vf,this.ba=this.ea=!1}function Cs(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function rr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function $a(t){const e={};for(const n in t)e[n]=t[n];return e}const uo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fa(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<uo.length;r++)n=uo[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ss(t){this.src=t,this.g={},this.h=0}Ss.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ri(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new wf(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Ni(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=La(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Cs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ri(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var or="closure_lm_"+(1e6*Math.random()|0),fi={};function Va(t,e,n,s,i){if(s&&s.once)return Ba(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Va(t,e[r],n,s,i);return null}return n=ur(n),t&&t[In]?t.N(e,n,bn(s)?!!s.capture:!!s,i):Ua(t,e,n,!1,s,i)}function Ua(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=bn(i)?!!i.capture:!!i,a=cr(t);if(a||(t[or]=a=new Ss(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Ef(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)lf||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(qa(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ef(){function t(n){return e.call(t.src,t.listener,n)}const e=_f;return t}function Ba(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ba(t,e[r],n,s,i);return null}return n=ur(n),t&&t[In]?t.O(e,n,bn(s)?!!s.capture:!!s,i):Ua(t,e,n,!0,s,i)}function ja(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)ja(t,e[r],n,s,i);else s=bn(s)?!!s.capture:!!s,n=ur(n),t&&t[In]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ri(r,n,s,i),-1<n&&(Cs(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=cr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ri(e,n,s,i)),(n=-1<t?e[t]:null)&&ar(n))}function ar(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[In])Ni(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(qa(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=cr(e))?(Ni(n,t),n.h==0&&(n.src=null,e[or]=null)):Cs(t)}}}function qa(t){return t in fi?fi[t]:fi[t]="on"+t}function _f(t,e){if(t.ba)t=!0;else{e=new cn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ar(t),t=n.call(s,e)}return t}function cr(t){return t=t[or],t instanceof Ss?t:null}var di="__closure_events_fn_"+(1e9*Math.random()>>>0);function ur(t){return typeof t=="function"?t:(t[di]||(t[di]=function(e){return t.handleEvent(e)}),t[di])}function te(){He.call(this),this.i=new Ss(this),this.P=this,this.I=null}ie(te,He);te.prototype[In]=!0;te.prototype.removeEventListener=function(t,e,n,s){ja(this,t,e,n,s)};function se(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new le(e,t);else if(e instanceof le)e.target=e.target||t;else{var i=e;e=new le(s,t),Fa(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Bn(o,s,!0,e)&&i}if(o=e.g=t,i=Bn(o,s,!0,e)&&i,i=Bn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Bn(o,s,!1,e)&&i}te.prototype.M=function(){if(te.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Cs(n[s]);delete t.g[e],t.h--}}this.I=null};te.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};te.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Bn(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ni(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var lr=C.JSON.stringify;function Tf(){var t=Ha;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bf{constructor(){this.h=this.g=null}add(e,n){const s=za.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var za=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new If,t=>t.reset());class If{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Cf(t){C.setTimeout(()=>{throw t},0)}function Ka(t,e){xi||Sf(),Li||(xi(),Li=!0),Ha.add(t,e)}var xi;function Sf(){var t=C.Promise.resolve(void 0);xi=function(){t.then(Df)}}var Li=!1,Ha=new bf;function Df(){for(var t;t=Tf();){try{t.h.call(t.g)}catch(n){Cf(n)}var e=za;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Li=!1}function Ds(t,e){te.call(this),this.h=t||1,this.g=e||C,this.j=ue(this.lb,this),this.l=Date.now()}ie(Ds,te);w=Ds.prototype;w.ca=!1;w.R=null;w.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),se(this,"tick"),this.ca&&(hr(this),this.start()))}};w.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hr(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}w.M=function(){Ds.X.M.call(this),hr(this),delete this.g};function fr(t,e,n){if(typeof t=="function")n&&(t=ue(t,n));else if(t&&typeof t.handleEvent=="function")t=ue(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:C.setTimeout(t,e||0)}function Ga(t){t.g=fr(()=>{t.g=null,t.i&&(t.i=!1,Ga(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Af extends He{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ga(this)}M(){super.M(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function un(t){He.call(this),this.h=t,this.g={}}ie(un,He);var lo=[];function Qa(t,e,n,s){Array.isArray(n)||(n&&(lo[0]=n.toString()),n=lo);for(var i=0;i<n.length;i++){var r=Va(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Wa(t){rr(t.g,function(e,n){this.g.hasOwnProperty(n)&&ar(e)},t),t.g={}}un.prototype.M=function(){un.X.M.call(this),Wa(this)};un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function As(){this.g=!0}As.prototype.Aa=function(){this.g=!1};function kf(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Nf(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function wt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xf(t,n)+(s?" "+s:"")})}function Rf(t,e){t.info(function(){return"TIMEOUT: "+e})}As.prototype.info=function(){};function xf(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return lr(n)}catch{return e}}var ut={},ho=null;function ks(){return ho=ho||new te}ut.Pa="serverreachability";function Ya(t){le.call(this,ut.Pa,t)}ie(Ya,le);function ln(t){const e=ks();se(e,new Ya(e))}ut.STAT_EVENT="statevent";function Xa(t,e){le.call(this,ut.STAT_EVENT,t),this.stat=e}ie(Xa,le);function de(t){const e=ks();se(e,new Xa(e,t))}ut.Qa="timingevent";function Ja(t,e){le.call(this,ut.Qa,t),this.size=e}ie(Ja,le);function Cn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){t()},e)}var Ns={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Za={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function dr(){}dr.prototype.h=null;function fo(t){return t.h||(t.h=t.i())}function ec(){}var Sn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function pr(){le.call(this,"d")}ie(pr,le);function mr(){le.call(this,"c")}ie(mr,le);var Oi;function Rs(){}ie(Rs,dr);Rs.prototype.g=function(){return new XMLHttpRequest};Rs.prototype.i=function(){return{}};Oi=new Rs;function Dn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new un(this),this.O=Lf,t=Ai?125:void 0,this.T=new Ds(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new tc}function tc(){this.i=null,this.g="",this.h=!1}var Lf=45e3,Mi={},us={};w=Dn.prototype;w.setTimeout=function(t){this.O=t};function Pi(t,e,n){t.K=1,t.v=Ls(Re(e)),t.s=n,t.P=!0,nc(t,null)}function nc(t,e){t.F=Date.now(),An(t),t.A=Re(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),lc(n.i,"t",s),t.C=0,n=t.l.H,t.h=new tc,t.g=Rc(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Af(ue(t.La,t,t.g),t.N)),Qa(t.S,t.g,"readystatechange",t.ib),e=t.H?$a(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ln(),kf(t.j,t.u,t.A,t.m,t.U,t.s)}w.ib=function(t){t=t.target;const e=this.L;e&&Ae(t)==3?e.l():this.La(t)};w.La=function(t){try{if(t==this.g)e:{const l=Ae(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Ai||this.g&&(this.h.h||this.g.fa()||yo(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?ln(3):ln(2)),xs(this);var n=this.g.aa();this.Y=n;t:if(sc(this)){var s=yo(this.g);t="";var i=s.length,r=Ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){We(this),Yt(this);var o="";break t}this.h.i=new C.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Nf(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!as(a)){var u=a;break t}}u=null}if(n=u)wt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$i(this,n);else{this.i=!1,this.o=3,de(12),We(this),Yt(this);break e}}this.P?(ic(this,l,o),Ai&&this.i&&l==3&&(Qa(this.S,this.T,"tick",this.hb),this.T.start())):(wt(this.j,this.m,o,null),$i(this,o)),l==4&&We(this),this.i&&!this.I&&(l==4?Dc(this.l,this):(this.i=!1,An(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),We(this),Yt(this)}}}catch{}finally{}};function sc(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function ic(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Of(t,n),i==us){e==4&&(t.o=4,de(14),s=!1),wt(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Mi){t.o=4,de(15),wt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else wt(t.j,t.m,i,null),$i(t,i);sc(t)&&i!=us&&i!=Mi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,de(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Tr(e),e.K=!0,de(11))):(wt(t.j,t.m,n,"[Invalid Chunked Response]"),We(t),Yt(t))}w.hb=function(){if(this.g){var t=Ae(this.g),e=this.g.fa();this.C<e.length&&(xs(this),ic(this,t,e),this.i&&t!=4&&An(this))}};function Of(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?us:(n=Number(e.substring(n,s)),isNaN(n)?Mi:(s+=1,s+n>e.length?us:(e=e.substr(s,n),t.C=s+n,e)))}w.cancel=function(){this.I=!0,We(this)};function An(t){t.V=Date.now()+t.O,rc(t,t.O)}function rc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Cn(ue(t.gb,t),e)}function xs(t){t.B&&(C.clearTimeout(t.B),t.B=null)}w.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Rf(this.j,this.A),this.K!=2&&(ln(),de(17)),We(this),this.o=2,Yt(this)):rc(this,this.V-t)};function Yt(t){t.l.G==0||t.I||Dc(t.l,t)}function We(t){xs(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,hr(t.T),Wa(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function $i(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Fi(n.h,t))){if(!t.J&&Fi(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)fs(n),Ps(n);else break e;_r(n),de(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Cn(ue(n.cb,n),6e3));if(1>=dc(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ye(n,11)}else if((t.J||n.g==t)&&fs(n),!as(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(gr(r,r.h),r.h=null))}if(s.D){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,V(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Nc(s,s.H?s.ka:null,s.V),o.J){pc(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(xs(a),An(a)),s.g=o}else Cc(s);0<n.i.length&&$s(n)}else u[0]!="stop"&&u[0]!="close"||Ye(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ye(n,7):Er(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ln(4)}catch{}}function Mf(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(bs(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Pf(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(bs(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function oc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bs(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Pf(t),s=Mf(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $f(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ze(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ze){this.h=e!==void 0?e:t.h,ls(this,t.j),this.s=t.s,this.g=t.g,hs(this,t.m),this.l=t.l,e=t.i;var n=new hn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),po(this,n),this.o=t.o}else t&&(n=String(t).match(ac))?(this.h=!!e,ls(this,n[1]||"",!0),this.s=Kt(n[2]||""),this.g=Kt(n[3]||"",!0),hs(this,n[4]),this.l=Kt(n[5]||"",!0),po(this,n[6]||"",!0),this.o=Kt(n[7]||"")):(this.h=!!e,this.i=new hn(null,this.h))}Ze.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ht(e,mo,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ht(e,mo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ht(n,n.charAt(0)=="/"?Uf:Vf,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ht(n,jf)),t.join("")};function Re(t){return new Ze(t)}function ls(t,e,n){t.j=n?Kt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function po(t,e,n){e instanceof hn?(t.i=e,qf(t.i,t.h)):(n||(e=Ht(e,Bf)),t.i=new hn(e,t.h))}function V(t,e,n){t.i.set(e,n)}function Ls(t){return V(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Kt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ht(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ff),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ff(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mo=/[#\/\?@]/g,Vf=/[#\?:]/g,Uf=/[#\?]/g,Bf=/[#\?@]/g,jf=/#/g;function hn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ge(t){t.g||(t.g=new Map,t.h=0,t.i&&$f(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}w=hn.prototype;w.add=function(t,e){Ge(this),this.i=null,t=Ft(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function cc(t,e){Ge(t),e=Ft(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function uc(t,e){return Ge(t),e=Ft(t,e),t.g.has(e)}w.forEach=function(t,e){Ge(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};w.oa=function(){Ge(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};w.W=function(t){Ge(this);let e=[];if(typeof t=="string")uc(this,t)&&(e=e.concat(this.g.get(Ft(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};w.set=function(t,e){return Ge(this),this.i=null,t=Ft(this,t),uc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};w.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function lc(t,e,n){cc(t,e),0<n.length&&(t.i=null,t.g.set(Ft(t,e),sr(n)),t.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ft(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qf(t,e){e&&!t.j&&(Ge(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(cc(this,s),lc(this,i,n))},t)),t.j=e}var zf=class{constructor(t,e){this.h=t,this.g=e}};function hc(t){this.l=t||Kf,C.PerformanceNavigationTiming?(t=C.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(C.g&&C.g.Ga&&C.g.Ga()&&C.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Kf=10;function fc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function dc(t){return t.h?1:t.g?t.g.size:0}function Fi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function gr(t,e){t.g?t.g.add(e):t.h=e}function pc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hc.prototype.cancel=function(){if(this.i=mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function mc(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return sr(t.i)}function yr(){}yr.prototype.stringify=function(t){return C.JSON.stringify(t,void 0)};yr.prototype.parse=function(t){return C.JSON.parse(t,void 0)};function Hf(){this.g=new yr}function Gf(t,e,n){const s=n||"";try{oc(t,function(i,r){let o=i;bn(i)&&(o=lr(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Qf(t,e){const n=new As;if(C.Image){const s=new Image;s.onload=Un(jn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Un(jn,n,s,"TestLoadImage: error",!1,e),s.onabort=Un(jn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Un(jn,n,s,"TestLoadImage: timeout",!1,e),C.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function jn(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function kn(t){this.l=t.ac||null,this.j=t.jb||!1}ie(kn,dr);kn.prototype.g=function(){return new Os(this.l,this.j)};kn.prototype.i=function(t){return function(){return t}}({});function Os(t,e){te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=vr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ie(Os,te);var vr=0;w=Os.prototype;w.open=function(t,e){if(this.readyState!=vr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,fn(this)};w.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||C).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nn(this)),this.readyState=vr};w.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,fn(this)),this.g&&(this.readyState=3,fn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gc(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function gc(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}w.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nn(this):fn(this),this.readyState==3&&gc(this)}};w.Va=function(t){this.g&&(this.response=this.responseText=t,Nn(this))};w.Ua=function(t){this.g&&(this.response=t,Nn(this))};w.ga=function(){this.g&&Nn(this)};function Nn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,fn(t)}w.setRequestHeader=function(t,e){this.v.append(t,e)};w.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function fn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Os.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Wf=C.JSON.parse;function j(t){te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=yc,this.K=this.L=!1}ie(j,te);var yc="",Yf=/^https?$/i,Xf=["POST","PUT"];w=j.prototype;w.Ka=function(t){this.L=t};w.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Oi.g(),this.C=this.u?fo(this.u):fo(Oi),this.g.onreadystatechange=ue(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){go(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=C.FormData&&t instanceof C.FormData,!(0<=La(Xf,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ec(this),0<this.B&&((this.K=Jf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ue(this.qa,this)):this.A=fr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){go(this,r)}};function Jf(t){return St&&mf()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}w.qa=function(){typeof nr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,se(this,"timeout"),this.abort(8))};function go(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vc(t),Ms(t)}function vc(t){t.D||(t.D=!0,se(t,"complete"),se(t,"error"))}w.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,se(this,"complete"),se(this,"abort"),Ms(this))};w.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ms(this,!0)),j.X.M.call(this)};w.Ha=function(){this.s||(this.F||this.v||this.l?wc(this):this.fb())};w.fb=function(){wc(this)};function wc(t){if(t.h&&typeof nr<"u"&&(!t.C[1]||Ae(t)!=4||t.aa()!=2)){if(t.v&&Ae(t)==4)fr(t.Ha,0,t);else if(se(t,"readystatechange"),Ae(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(ac)[1]||null;if(!i&&C.self&&C.self.location){var r=C.self.location.protocol;i=r.substr(0,r.length-1)}s=!Yf.test(i?i.toLowerCase():"")}n=s}if(n)se(t,"complete"),se(t,"success");else{t.m=6;try{var o=2<Ae(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",vc(t)}}finally{Ms(t)}}}}function Ms(t,e){if(t.g){Ec(t);const n=t.g,s=t.C[0]?os:null;t.g=null,t.C=null,e||se(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ec(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(C.clearTimeout(t.A),t.A=null)}function Ae(t){return t.g?t.g.readyState:0}w.aa=function(){try{return 2<Ae(this)?this.g.status:-1}catch{return-1}};w.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Wf(e)}};function yo(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case yc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}w.Ea=function(){return this.m};w.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _c(t){let e="";return rr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function wr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=_c(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):V(t,e,n))}function zt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Tc(t){this.Ca=0,this.i=[],this.j=new As,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=zt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=zt("baseRetryDelayMs",5e3,t),this.bb=zt("retryDelaySeedMs",1e4,t),this.$a=zt("forwardChannelMaxRetries",2,t),this.ta=zt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new hc(t&&t.concurrentRequestLimit),this.Fa=new Hf,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}w=Tc.prototype;w.ma=8;w.G=1;function Er(t){if(bc(t),t.G==3){var e=t.U++,n=Re(t.F);V(n,"SID",t.I),V(n,"RID",e),V(n,"TYPE","terminate"),Rn(t,n),e=new Dn(t,t.j,e,void 0),e.K=2,e.v=Ls(Re(n)),n=!1,C.navigator&&C.navigator.sendBeacon&&(n=C.navigator.sendBeacon(e.v.toString(),"")),!n&&C.Image&&(new Image().src=e.v,n=!0),n||(e.g=Rc(e.l,null),e.g.da(e.v)),e.F=Date.now(),An(e)}kc(t)}function Ps(t){t.g&&(Tr(t),t.g.cancel(),t.g=null)}function bc(t){Ps(t),t.u&&(C.clearTimeout(t.u),t.u=null),fs(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&C.clearTimeout(t.m),t.m=null)}function $s(t){fc(t.h)||t.m||(t.m=!0,Ka(t.Ja,t),t.C=0)}function Zf(t,e){return dc(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Cn(ue(t.Ja,t,e),Ac(t,t.C)),t.C++,!0)}w.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Dn(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=$a(r),Fa(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ic(this,i,e),n=Re(this.F),V(n,"RID",t),V(n,"CVER",22),this.D&&V(n,"X-HTTP-Session-Id",this.D),Rn(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(_c(r)))+"&"+e:this.o&&wr(n,this.o,r)),gr(this.h,i),this.Ya&&V(n,"TYPE","init"),this.O?(V(n,"$req",e),V(n,"SID","null"),i.Z=!0,Pi(i,n,null)):Pi(i,n,e),this.G=2}}else this.G==3&&(t?vo(this,t):this.i.length==0||fc(this.h)||vo(this))};function vo(t,e){var n;e?n=e.m:n=t.U++;const s=Re(t.F);V(s,"SID",t.I),V(s,"RID",n),V(s,"AID",t.T),Rn(t,s),t.o&&t.s&&wr(s,t.o,t.s),n=new Dn(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ic(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),gr(t.h,n),Pi(n,s,e)}function Rn(t,e){t.ia&&rr(t.ia,function(n,s){V(e,s,n)}),t.l&&oc({},function(n,s){V(e,s,n)})}function Ic(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ue(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{Gf(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Cc(t){t.g||t.u||(t.Z=1,Ka(t.Ia,t),t.A=0)}function _r(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Cn(ue(t.Ia,t),Ac(t,t.A)),t.A++,!0)}w.Ia=function(){if(this.u=null,Sc(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Cn(ue(this.eb,this),t)}};w.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,de(10),Ps(this),Sc(this))};function Tr(t){t.B!=null&&(C.clearTimeout(t.B),t.B=null)}function Sc(t){t.g=new Dn(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Re(t.sa);V(e,"RID","rpc"),V(e,"SID",t.I),V(e,"CI",t.L?"0":"1"),V(e,"AID",t.T),V(e,"TYPE","xmlhttp"),Rn(t,e),t.o&&t.s&&wr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ls(Re(e)),n.s=null,n.P=!0,nc(n,t)}w.cb=function(){this.v!=null&&(this.v=null,Ps(this),_r(this),de(19))};function fs(t){t.v!=null&&(C.clearTimeout(t.v),t.v=null)}function Dc(t,e){var n=null;if(t.g==e){fs(t),Tr(t),t.g=null;var s=2}else if(Fi(t.h,e))n=e.D,pc(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ks(),se(s,new Ja(s,n)),$s(t)}else Cc(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Zf(t,e)||s==2&&_r(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ye(t,5);break;case 4:Ye(t,10);break;case 3:Ye(t,6);break;default:Ye(t,2)}}}function Ac(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ye(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ue(t.kb,t);n||(n=new Ze("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||ls(n,"https"),Ls(n)),Qf(n.toString(),s)}else de(2);t.G=0,t.l&&t.l.va(e),kc(t),bc(t)}w.kb=function(t){t?(this.j.info("Successfully pinged google.com"),de(2)):(this.j.info("Failed to ping google.com"),de(1))};function kc(t){if(t.G=0,t.la=[],t.l){const e=mc(t.h);(e.length!=0||t.i.length!=0)&&(oo(t.la,e),oo(t.la,t.i),t.h.i.length=0,sr(t.i),t.i.length=0),t.l.ua()}}function Nc(t,e,n){var s=n instanceof Ze?Re(n):new Ze(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),hs(s,s.m);else{var i=C.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ze(null,void 0);s&&ls(r,s),e&&(r.g=e),i&&hs(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&V(s,n,e),V(s,"VER",t.ma),Rn(t,s),s}function Rc(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new j(new kn({jb:!0})):new j(t.ra),e.Ka(t.H),e}function xc(){}w=xc.prototype;w.xa=function(){};w.wa=function(){};w.va=function(){};w.ua=function(){};w.Ra=function(){};function ds(){if(St&&!(10<=Number(gf)))throw Error("Environmental error: no available transport.")}ds.prototype.g=function(t,e){return new ve(t,e)};function ve(t,e){te.call(this),this.g=new Tc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!as(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!as(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Vt(this)}ie(ve,te);ve.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;de(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Nc(t,null,t.V),$s(t)};ve.prototype.close=function(){Er(this.g)};ve.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=lr(t),t=n);e.i.push(new zf(e.ab++,t)),e.G==3&&$s(e)};ve.prototype.M=function(){this.g.l=null,delete this.j,Er(this.g),delete this.g,ve.X.M.call(this)};function Lc(t){pr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ie(Lc,pr);function Oc(){mr.call(this),this.status=1}ie(Oc,mr);function Vt(t){this.g=t}ie(Vt,xc);Vt.prototype.xa=function(){se(this.g,"a")};Vt.prototype.wa=function(t){se(this.g,new Lc(t))};Vt.prototype.va=function(t){se(this.g,new Oc)};Vt.prototype.ua=function(){se(this.g,"b")};ds.prototype.createWebChannel=ds.prototype.g;ve.prototype.send=ve.prototype.u;ve.prototype.open=ve.prototype.m;ve.prototype.close=ve.prototype.close;Ns.NO_ERROR=0;Ns.TIMEOUT=8;Ns.HTTP_ERROR=6;Za.COMPLETE="complete";ec.EventType=Sn;Sn.OPEN="a";Sn.CLOSE="b";Sn.ERROR="c";Sn.MESSAGE="d";te.prototype.listen=te.prototype.N;j.prototype.listenOnce=j.prototype.O;j.prototype.getLastError=j.prototype.Oa;j.prototype.getLastErrorCode=j.prototype.Ea;j.prototype.getStatus=j.prototype.aa;j.prototype.getResponseJson=j.prototype.Sa;j.prototype.getResponseText=j.prototype.fa;j.prototype.send=j.prototype.da;j.prototype.setWithCredentials=j.prototype.Ka;var ed=function(){return new ds},td=function(){return ks()},pi=Ns,nd=Za,sd=ut,wo={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},id=kn,qn=ec,rd=j;const Eo="@firebase/firestore";/**
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
 */class oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
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
 */let Ut="9.19.0";/**
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
 */const it=new Da("@firebase/firestore");function _o(){return it.logLevel}function E(t,...e){if(it.logLevel<=L.DEBUG){const n=e.map(br);it.debug(`Firestore (${Ut}): ${t}`,...n)}}function xe(t,...e){if(it.logLevel<=L.ERROR){const n=e.map(br);it.error(`Firestore (${Ut}): ${t}`,...n)}}function ps(t,...e){if(it.logLevel<=L.WARN){const n=e.map(br);it.warn(`Firestore (${Ut}): ${t}`,...n)}}function br(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function I(t="Unexpected state"){const e=`FIRESTORE (${Ut}) INTERNAL ASSERTION FAILED: `+t;throw xe(e),new Error(e)}function F(t,e){t||I()}function A(t,e){return t}/**
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
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends $t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $e{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Mc{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class od{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(oe.UNAUTHENTICATED))}shutdown(){}}class ad{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cd{constructor(e){this.t=e,this.currentUser=oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new $e;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new $e,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new $e)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(F(typeof s.accessToken=="string"),new Mc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new oe(e)}}class ud{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=oe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ld{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new ud(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fd{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(F(typeof n.token=="string"),this.T=n.token,new hd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function dd(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Pc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=dd(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function O(t,e){return t<e?-1:t>e?1:0}function Dt(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Y{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new T(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new T(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Y(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class D{constructor(e){this.timestamp=e}static fromTimestamp(e){return new D(e)}static min(){return new D(new Y(0,0))}static max(){return new D(new Y(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class dn{constructor(e,n,s){n===void 0?n=0:n>e.length&&I(),s===void 0?s=e.length-n:s>e.length-n&&I(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof dn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class U extends dn{construct(e,n,s){return new U(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new T(g.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new U(n)}static emptyPath(){return new U([])}}const pd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends dn{construct(e,n,s){return new ce(e,n,s)}static isValidIdentifier(e){return pd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ce(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new T(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new T(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new T(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new T(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(n)}static emptyPath(){return new ce([])}}/**
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
 */class _{constructor(e){this.path=e}static fromPath(e){return new _(U.fromString(e))}static fromName(e){return new _(U.fromString(e).popFirst(5))}static empty(){return new _(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&U.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return U.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _(new U(e.slice()))}}function md(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=D.fromTimestamp(s===1e9?new Y(n+1,0):new Y(n,s));return new qe(i,_.empty(),e)}function gd(t){return new qe(t.readTime,t.key,-1)}class qe{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new qe(D.min(),_.empty(),-1)}static max(){return new qe(D.max(),_.empty(),-1)}}function yd(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=_.comparator(t.documentKey,e.documentKey),n!==0?n:O(t.largestBatchId,e.largestBatchId))}/**
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
 */const vd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xn(t){if(t.code!==g.FAILED_PRECONDITION||t.message!==vd)throw t;E("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,s)=>{n(e)})}static reject(e){return new y((n,s)=>{s(e)})}static waitFor(e){return new y((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=y.resolve(!1);for(const s of e)n=n.next(i=>i?y.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new y((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(e,n){return new y((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ln(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ir{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ir.ct=-1;function Fs(t){return t==null}function ms(t){return t===0&&1/t==-1/0}function Ed(t){return typeof t=="number"&&Number.isInteger(t)&&!ms(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function To(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function lt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $c(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class J{constructor(e,n){this.comparator=e,this.root=n||ne.EMPTY}insert(e,n){return new J(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zn(this.root,e,this.comparator,!1)}getReverseIterator(){return new zn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zn(this.root,e,this.comparator,!0)}}class zn{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ne{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ne.RED,this.left=i!=null?i:ne.EMPTY,this.right=r!=null?r:ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new ne(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ne.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1;ne.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class X{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bo(this.data.getIterator())}getIteratorFrom(e){return new bo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof X)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new X(this.comparator);return n.data=e,n}}class bo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ee{constructor(e){this.fields=e,e.sort(ce.comparator)}static empty(){return new Ee([])}unionWith(e){let n=new X(ce.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ee(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Dt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class _d extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _d("Invalid base64 string: "+i):i}}(e);return new he(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new he(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const Td=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ze(t){if(F(!!t),typeof t=="string"){let e=0;const n=Td.exec(t);if(F(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:H(t.seconds),nanos:H(t.nanos)}}function H(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function At(t){return typeof t=="string"?he.fromBase64String(t):he.fromUint8Array(t)}/**
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
 */function Fc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vc(t){const e=t.mapValue.fields.__previous_value__;return Fc(e)?Vc(e):e}function pn(t){const e=ze(t.mapValue.fields.__local_write_time__.timestampValue);return new Y(e.seconds,e.nanos)}/**
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
 */class bd{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class mn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fc(t)?4:Id(t)?9007199254740991:10:I()}function Se(t,e){if(t===e)return!0;const n=rt(t);if(n!==rt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pn(t).isEqual(pn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ze(s.timestampValue),o=ze(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return At(s.bytesValue).isEqual(At(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return H(s.geoPointValue.latitude)===H(i.geoPointValue.latitude)&&H(s.geoPointValue.longitude)===H(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return H(s.integerValue)===H(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=H(s.doubleValue),o=H(i.doubleValue);return r===o?ms(r)===ms(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Dt(t.arrayValue.values||[],e.arrayValue.values||[],Se);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(To(r)!==To(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Se(r[a],o[a])))return!1;return!0}(t,e);default:return I()}}function gn(t,e){return(t.values||[]).find(n=>Se(n,e))!==void 0}function kt(t,e){if(t===e)return 0;const n=rt(t),s=rt(e);if(n!==s)return O(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=H(i.integerValue||i.doubleValue),a=H(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Io(t.timestampValue,e.timestampValue);case 4:return Io(pn(t),pn(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(i,r){const o=At(i),a=At(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=O(o[c],a[c]);if(u!==0)return u}return O(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=O(H(i.latitude),H(r.latitude));return o!==0?o:O(H(i.longitude),H(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=kt(o[c],a[c]);if(u)return u}return O(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Kn.mapValue&&r===Kn.mapValue)return 0;if(i===Kn.mapValue)return 1;if(r===Kn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=O(a[l],u[l]);if(h!==0)return h;const f=kt(o[a[l]],c[u[l]]);if(f!==0)return f}return O(a.length,u.length)}(t.mapValue,e.mapValue);default:throw I()}}function Io(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return O(t,e);const n=ze(t),s=ze(e),i=O(n.seconds,s.seconds);return i!==0?i:O(n.nanos,s.nanos)}function Nt(t){return Vi(t)}function Vi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=ze(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?At(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,_.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Vi(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Vi(s.fields[a])}`;return r+"}"}(t.mapValue):I();var e,n}function Ui(t){return!!t&&"integerValue"in t}function Cr(t){return!!t&&"arrayValue"in t}function Co(t){return!!t&&"nullValue"in t}function So(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wn(t){return!!t&&"mapValue"in t}function Xt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return lt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Xt(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Id(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ye{constructor(e){this.value=e}static empty(){return new ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Wn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xt(n)}setAll(e){let n=ce.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Xt(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Wn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Se(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Wn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){lt(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new ye(Xt(this.value))}}function Uc(t){const e=[];return lt(t.fields,(n,s)=>{const i=new ce([n]);if(Wn(s)){const r=Uc(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ee(e)}/**
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
 */class ae{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ae(e,0,D.min(),D.min(),D.min(),ye.empty(),0)}static newFoundDocument(e,n,s,i){return new ae(e,1,n,D.min(),s,i,0)}static newNoDocument(e,n){return new ae(e,2,n,D.min(),D.min(),ye.empty(),0)}static newUnknownDocument(e,n){return new ae(e,3,n,D.min(),D.min(),ye.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(D.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=D.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gs{constructor(e,n){this.position=e,this.inclusive=n}}function Do(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=_.comparator(_.fromName(o.referenceValue),n.key):s=kt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ao(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Se(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Cd(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Bc{}class Q extends Bc{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Dd(e,n,s):n==="array-contains"?new Nd(e,s):n==="in"?new Rd(e,s):n==="not-in"?new xd(e,s):n==="array-contains-any"?new Ld(e,s):new Q(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Ad(e,s):new kd(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(kt(n,this.value)):n!==null&&rt(this.value)===rt(n)&&this.matchesComparison(kt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class De extends Bc{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new De(e,n)}matches(e){return jc(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function jc(t){return t.op==="and"}function qc(t){return Sd(t)&&jc(t)}function Sd(t){for(const e of t.filters)if(e instanceof De)return!1;return!0}function Bi(t){if(t instanceof Q)return t.field.canonicalString()+t.op.toString()+Nt(t.value);if(qc(t))return t.filters.map(e=>Bi(e)).join(",");{const e=t.filters.map(n=>Bi(n)).join(",");return`${t.op}(${e})`}}function zc(t,e){return t instanceof Q?function(n,s){return s instanceof Q&&n.op===s.op&&n.field.isEqual(s.field)&&Se(n.value,s.value)}(t,e):t instanceof De?function(n,s){return s instanceof De&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&zc(r,s.filters[o]),!0):!1}(t,e):void I()}function Kc(t){return t instanceof Q?function(e){return`${e.field.canonicalString()} ${e.op} ${Nt(e.value)}`}(t):t instanceof De?function(e){return e.op.toString()+" {"+e.getFilters().map(Kc).join(" ,")+"}"}(t):"Filter"}class Dd extends Q{constructor(e,n,s){super(e,n,s),this.key=_.fromName(s.referenceValue)}matches(e){const n=_.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ad extends Q{constructor(e,n){super(e,"in",n),this.keys=Hc("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kd extends Q{constructor(e,n){super(e,"not-in",n),this.keys=Hc("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Hc(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>_.fromName(s.referenceValue))}class Nd extends Q{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cr(n)&&gn(n.arrayValue,this.value)}}class Rd extends Q{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gn(this.value.arrayValue,n)}}class xd extends Q{constructor(e,n){super(e,"not-in",n)}matches(e){if(gn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gn(this.value.arrayValue,n)}}class Ld extends Q{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>gn(this.value.arrayValue,s))}}/**
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
 */class Od{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function ko(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Od(t,e,n,s,i,r,o)}function Sr(t){const e=A(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Bi(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Fs(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Nt(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Nt(s)).join(",")),e.ft=n}return e.ft}function Dr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Cd(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zc(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ao(t.startAt,e.startAt)&&Ao(t.endAt,e.endAt)}function ji(t){return _.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Vs{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Md(t,e,n,s,i,r,o,a){return new Vs(t,e,n,s,i,r,o,a)}function Us(t){return new Vs(t)}function No(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Pd(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $d(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Fd(t){return t.collectionGroup!==null}function bt(t){const e=A(t);if(e.dt===null){e.dt=[];const n=$d(e),s=Pd(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Jt(n)),e.dt.push(new Jt(ce.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Jt(ce.keyField(),r))}}}return e.dt}function Le(t){const e=A(t);if(!e.wt)if(e.limitType==="F")e.wt=ko(e.path,e.collectionGroup,bt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of bt(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Jt(r.field,o))}const s=e.endAt?new gs(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new gs(e.startAt.position,e.startAt.inclusive):null;e.wt=ko(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function qi(t,e,n){return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bs(t,e){return Dr(Le(t),Le(e))&&t.limitType===e.limitType}function Gc(t){return`${Sr(Le(t))}|lt:${t.limitType}`}function zi(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Kc(s)).join(", ")}]`),Fs(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Nt(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Nt(s)).join(",")),`Target(${n})`}(Le(t))}; limitType=${t.limitType})`}function js(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):_.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of bt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Do(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,bt(n),s)||n.endAt&&!function(i,r,o){const a=Do(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,bt(n),s))}(t,e)}function Vd(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qc(t){return(e,n)=>{let s=!1;for(const i of bt(t)){const r=Ud(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Ud(t,e,n){const s=t.field.isKeyField()?_.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?kt(a,c):I()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */class Bt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){lt(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return $c(this.inner)}size(){return this.innerSize}}/**
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
 */const Bd=new J(_.comparator);function Oe(){return Bd}const Wc=new J(_.comparator);function Gt(...t){let e=Wc;for(const n of t)e=e.insert(n.key,n);return e}function Yc(t){let e=Wc;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Xe(){return Zt()}function Xc(){return Zt()}function Zt(){return new Bt(t=>t.toString(),(t,e)=>t.isEqual(e))}const jd=new J(_.comparator),qd=new X(_.comparator);function R(...t){let e=qd;for(const n of t)e=e.add(n);return e}const zd=new X(O);function Jc(){return zd}/**
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
 */function Zc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ms(e)?"-0":e}}function eu(t){return{integerValue:""+t}}function Kd(t,e){return Ed(e)?eu(e):Zc(t,e)}/**
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
 */class qs{constructor(){this._=void 0}}function Hd(t,e,n){return t instanceof ys?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Rt?nu(t,e):t instanceof yn?su(t,e):function(s,i){const r=tu(s,i),o=Ro(r)+Ro(s._t);return Ui(r)&&Ui(s._t)?eu(o):Zc(s.serializer,o)}(t,e)}function Gd(t,e,n){return t instanceof Rt?nu(t,e):t instanceof yn?su(t,e):n}function tu(t,e){return t instanceof vs?Ui(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ys extends qs{}class Rt extends qs{constructor(e){super(),this.elements=e}}function nu(t,e){const n=iu(e);for(const s of t.elements)n.some(i=>Se(i,s))||n.push(s);return{arrayValue:{values:n}}}class yn extends qs{constructor(e){super(),this.elements=e}}function su(t,e){let n=iu(e);for(const s of t.elements)n=n.filter(i=>!Se(i,s));return{arrayValue:{values:n}}}class vs extends qs{constructor(e,n){super(),this.serializer=e,this._t=n}}function Ro(t){return H(t.integerValue||t.doubleValue)}function iu(t){return Cr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Qd{constructor(e,n){this.field=e,this.transform=n}}function Wd(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Rt&&s instanceof Rt||n instanceof yn&&s instanceof yn?Dt(n.elements,s.elements,Se):n instanceof vs&&s instanceof vs?Se(n._t,s._t):n instanceof ys&&s instanceof ys}(t.transform,e.transform)}class Yd{constructor(e,n){this.version=e,this.transformResults=n}}class ke{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zs{}function ru(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new au(t.key,ke.none()):new Ks(t.key,t.data,ke.none());{const n=t.data,s=ye.empty();let i=new X(ce.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ht(t.key,s,new Ee(i.toArray()),ke.none())}}function Xd(t,e,n){t instanceof Ks?function(s,i,r){const o=s.value.clone(),a=Lo(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ht?function(s,i,r){if(!Yn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Lo(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(ou(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function en(t,e,n,s){return t instanceof Ks?function(i,r,o,a){if(!Yn(i.precondition,r))return o;const c=i.value.clone(),u=Oo(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ht?function(i,r,o,a){if(!Yn(i.precondition,r))return o;const c=Oo(i.fieldTransforms,a,r),u=r.data;return u.setAll(ou(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(i,r,o){return Yn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Jd(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=tu(s.transform,i||null);r!=null&&(n===null&&(n=ye.empty()),n.set(s.field,r))}return n||null}function xo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Dt(n,s,(i,r)=>Wd(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ks extends zs{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ht extends zs{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ou(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Lo(t,e,n){const s=new Map;F(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Gd(o,a,n[i]))}return s}function Oo(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Hd(r,o,e))}return s}class au extends zs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zd extends zs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ep{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Xd(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=en(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=en(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Xc();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=ru(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(D.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),R())}isEqual(e){return this.batchId===e.batchId&&Dt(this.mutations,e.mutations,(n,s)=>xo(n,s))&&Dt(this.baseMutations,e.baseMutations,(n,s)=>xo(n,s))}}class Ar{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){F(e.mutations.length===s.length);let i=jd;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Ar(e,n,s,i)}}/**
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
 */class tp{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class np{constructor(e){this.count=e}}/**
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
 */var K,x;function sp(t){switch(t){default:return I();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function cu(t){if(t===void 0)return xe("GRPC error has no .code"),g.UNKNOWN;switch(t){case K.OK:return g.OK;case K.CANCELLED:return g.CANCELLED;case K.UNKNOWN:return g.UNKNOWN;case K.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case K.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case K.INTERNAL:return g.INTERNAL;case K.UNAVAILABLE:return g.UNAVAILABLE;case K.UNAUTHENTICATED:return g.UNAUTHENTICATED;case K.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case K.NOT_FOUND:return g.NOT_FOUND;case K.ALREADY_EXISTS:return g.ALREADY_EXISTS;case K.PERMISSION_DENIED:return g.PERMISSION_DENIED;case K.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case K.ABORTED:return g.ABORTED;case K.OUT_OF_RANGE:return g.OUT_OF_RANGE;case K.UNIMPLEMENTED:return g.UNIMPLEMENTED;case K.DATA_LOSS:return g.DATA_LOSS;default:return I()}}(x=K||(K={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class kr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Hn}static getOrCreateInstance(){return Hn===null&&(Hn=new kr),Hn}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Hn=null;/**
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
 */class Hs{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,On.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Hs(D.min(),i,Jc(),Oe(),R())}}class On{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new On(s,n,R(),R(),R())}}/**
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
 */class Xn{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class uu{constructor(e,n){this.targetId=e,this.Et=n}}class lu{constructor(e,n,s=he.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Mo{constructor(){this.At=0,this.Rt=$o(),this.vt=he.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=R(),n=R(),s=R();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new On(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=$o()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class ip{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Oe(),this.qt=Po(),this.Ut=new X(O)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:I()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(ji(o))if(i===0){const a=new _(o.path);this.Qt(s,a,ae.newNoDocument(a,D.min()))}else F(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=kr.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&ji(a.target)){const c=new _(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ae.newNoDocument(c,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=R();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new Hs(e,n,this.Ut,this.Lt,s);return this.Lt=Oe(),this.qt=Po(),this.Ut=new X(O),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Mo,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new X(O),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||E("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Mo),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Po(){return new J(_.comparator)}function $o(){return new J(_.comparator)}/**
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
 */const rp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),op=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ap=(()=>({and:"AND",or:"OR"}))();class cp{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ws(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hu(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function up(t,e){return ws(t,e.toTimestamp())}function Ce(t){return F(!!t),D.fromTimestamp(function(e){const n=ze(e);return new Y(n.seconds,n.nanos)}(t))}function Nr(t,e){return function(n){return new U(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function fu(t){const e=U.fromString(t);return F(gu(e)),e}function Ki(t,e){return Nr(t.databaseId,e.path)}function mi(t,e){const n=fu(e);if(n.get(1)!==t.databaseId.projectId)throw new T(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _(du(n))}function Hi(t,e){return Nr(t.databaseId,e)}function lp(t){const e=fu(t);return e.length===4?U.emptyPath():du(e)}function Gi(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function du(t){return F(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Fo(t,e,n){return{name:Ki(t,e),fields:n.value.mapValue.fields}}function hp(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(F(u===void 0||typeof u=="string"),he.fromBase64String(u||"")):(F(u===void 0||u instanceof Uint8Array),he.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?g.UNKNOWN:cu(c.code);return new T(u,c.message||"")}(o);n=new lu(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=mi(t,s.document.name),r=Ce(s.document.updateTime),o=s.document.createTime?Ce(s.document.createTime):D.min(),a=new ye({mapValue:{fields:s.document.fields}}),c=ae.newFoundDocument(i,r,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Xn(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=mi(t,s.document),r=s.readTime?Ce(s.readTime):D.min(),o=ae.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Xn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=mi(t,s.document),r=s.removedTargetIds||[];n=new Xn([],r,i,null)}else{if(!("filter"in e))return I();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new np(i),o=s.targetId;n=new uu(o,r)}}return n}function fp(t,e){let n;if(e instanceof Ks)n={update:Fo(t,e.key,e.value)};else if(e instanceof au)n={delete:Ki(t,e.key)};else if(e instanceof ht)n={update:Fo(t,e.key,e.data),updateMask:_p(e.fieldMask)};else{if(!(e instanceof Zd))return I();n={verify:Ki(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof ys)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Rt)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof yn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof vs)return{fieldPath:r.field.canonicalString(),increment:o._t};throw I()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:up(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(t,e.precondition)),n}function dp(t,e){return t&&t.length>0?(F(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Ce(s.updateTime):Ce(i);return r.isEqual(D.min())&&(r=Ce(i)),new Yd(r,s.transformResults||[])}(n,e))):[]}function pp(t,e){return{documents:[Hi(t,e.path)]}}function mp(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Hi(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hi(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return mu(De.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:yt(l.field),direction:vp(l.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.useProto3Json||Fs(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function gp(t){let e=lp(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){F(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];n.where&&(r=function(l){const h=pu(l);return h instanceof De&&qc(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Jt(vt(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Fs(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new gs(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new gs(f,h)}(n.endAt)),Md(e,i,o,r,a,"F",c,u)}function yp(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function pu(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=vt(e.unaryFilter.field);return Q.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=vt(e.unaryFilter.field);return Q.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vt(e.unaryFilter.field);return Q.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=vt(e.unaryFilter.field);return Q.create(r,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(t):t.fieldFilter!==void 0?function(e){return Q.create(vt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return De.create(e.compositeFilter.filters.map(n=>pu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return I()}}(e.compositeFilter.op))}(t):I()}function vp(t){return rp[t]}function wp(t){return op[t]}function Ep(t){return ap[t]}function yt(t){return{fieldPath:t.canonicalString()}}function vt(t){return ce.fromServerFormat(t.fieldPath)}function mu(t){return t instanceof Q?function(e){if(e.op==="=="){if(So(e.value))return{unaryFilter:{field:yt(e.field),op:"IS_NAN"}};if(Co(e.value))return{unaryFilter:{field:yt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(So(e.value))return{unaryFilter:{field:yt(e.field),op:"IS_NOT_NAN"}};if(Co(e.value))return{unaryFilter:{field:yt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yt(e.field),op:wp(e.op),value:e.value}}}(t):t instanceof De?function(e){const n=e.getFilters().map(s=>mu(s));return n.length===1?n[0]:{compositeFilter:{op:Ep(e.op),filters:n}}}(t):I()}function _p(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class et{constructor(e,n,s,i,r=D.min(),o=D.min(),a=he.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Tp{constructor(e){this.se=e}}function bp(t){const e=gp({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qi(e,e.limit,"L"):e}/**
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
 */class Ip{constructor(){this.He=new Cp}addToCollectionParentIndex(e,n){return this.He.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(qe.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(qe.min())}updateCollectionGroup(e,n,s){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class Cp{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new X(U.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new X(U.comparator)).toArray()}}/**
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
 */class xt{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new xt(0)}static bn(){return new xt(-1)}}/**
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
 */class Sp{constructor(){this.changes=new Bt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ae.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Dp{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Ap{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&en(s.mutation,i,Ee.empty(),Y.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,R()).next(()=>s))}getLocalViewOfDocuments(e,n,s=R()){const i=Xe();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Gt();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Xe();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,R()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Oe();const o=Zt(),a=Zt();return n.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof ht)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),en(l.mutation,u,l.mutation.getFieldMask(),Y.now())):o.set(u.key,Ee.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Dp(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Zt();let i=new J((o,a)=>o-a),r=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ee.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||R()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Xc();l.forEach(f=>{if(!r.has(f)){const d=ru(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return y.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return _.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fd(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):y.resolve(Xe());let a=-1,c=r;return o.next(u=>y.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?y.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,R())).next(l=>({batchId:a,changes:Yc(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _(n)).next(s=>{let i=Gt();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Gt();return this.indexManager.getCollectionParents(e,i).next(o=>y.forEach(o,a=>{const c=function(u,l){return new Vs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,ae.newInvalidDocument(u)))});let o=Gt();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&en(u.mutation,c,Ee.empty(),Y.now()),js(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class kp{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return y.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ce(s.createTime)}),y.resolve()}getNamedQuery(e,n){return y.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:bp(s.bundledQuery),readTime:Ce(s.readTime)}}(n)),y.resolve()}}/**
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
 */class Np{constructor(){this.overlays=new J(_.comparator),this.ts=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Xe();return y.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),y.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),y.resolve()}getOverlaysForCollection(e,n,s){const i=Xe(),r=n.length+1,o=new _(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return y.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new J((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=Xe(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Xe(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return y.resolve(a)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new tp(n,s));let r=this.ts.get(n);r===void 0&&(r=R(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
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
 */class Rr{constructor(){this.es=new X(Z.ns),this.ss=new X(Z.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new Z(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new Z(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new _(new U([])),s=new Z(n,e),i=new Z(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new _(new U([])),s=new Z(n,e),i=new Z(n,e+1);let r=R();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Z(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Z{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return _.comparator(e.key,n.key)||O(e.ds,n.ds)}static rs(e,n){return O(e.ds,n.ds)||_.comparator(e.key,n.key)}}/**
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
 */class Rp{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new X(Z.ns)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ep(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Z(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Z(n,0),i=new Z(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new X(O);return n.forEach(i=>{const r=new Z(i,0),o=new Z(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),y.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;_.isDocumentKey(r)||(r=r.child(""));const o=new Z(new _(r),0);let a=new X(O);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ds)),!0)},o),y.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){F(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return y.forEach(n.mutations,i=>{const r=new Z(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new Z(n,0),i=this._s.firstAfterOrEqual(s);return y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class xp{constructor(e){this.Ts=e,this.docs=new J(_.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return y.resolve(s?s.document.mutableCopy():ae.newInvalidDocument(n))}getEntries(e,n){let s=Oe();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ae.newInvalidDocument(i))}),y.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Oe();const o=n.path,a=new _(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||yd(gd(l),s)<=0||(i.has(l.key)||js(n,l))&&(r=r.insert(l.key,l.mutableCopy()))}return y.resolve(r)}getAllFromCollectionGroup(e,n,s,i){I()}Es(e,n){return y.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Lp(this)}getSize(e){return y.resolve(this.size)}}class Lp extends Sp{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),y.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class Op{constructor(e){this.persistence=e,this.As=new Bt(n=>Sr(n),Dr),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Rr,this.targetCount=0,this.bs=xt.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),y.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new xt(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.Sn(n),y.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),y.waitFor(r).next(()=>i)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return y.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),y.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),y.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),y.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return y.resolve(s)}containsKey(e,n){return y.resolve(this.vs.containsKey(n))}}/**
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
 */class Mp{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Ir(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Op(this),this.indexManager=new Ip,this.remoteDocumentCache=function(s){return new xp(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Tp(n),this.xs=new kp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Np,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new Rp(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){E("MemoryPersistence","Starting transaction:",e);const i=new Pp(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return y.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class Pp extends wd{constructor(e){super(),this.currentSequenceNumber=e}}class xr{constructor(e){this.persistence=e,this.$s=new Rr,this.Ms=null}static Fs(e){return new xr(e)}get Bs(){if(this.Ms)return this.Ms;throw I()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),y.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),y.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Bs,s=>{const i=_.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,D.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return y.or([()=>y.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Lr{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=i}static Di(e,n){let s=R(),i=R();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Lr(e,n.fromCache,s,i)}}/**
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
 */class $p{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(No(n))return y.resolve(null);let s=Le(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=qi(n,null,"F"),s=Le(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=R(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(e,qi(n,null,"F")):this.Fi(e,u,n,c)}))})))}ki(e,n,s,i){return No(n)||i.isEqual(D.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(_o()<=L.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zi(n)),this.Fi(e,o,n,md(i,-1)))})}$i(e,n){let s=new X(Qc(e));return n.forEach((i,r)=>{js(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return _o()<=L.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",zi(n)),this.xi.getDocumentsMatchingQuery(e,n,qe.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class Fp{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new J(O),this.qi=new Bt(r=>Sr(r),Dr),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ap(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function Vp(t,e,n,s){return new Fp(t,e,n,s)}async function yu(t,e){const n=A(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=R();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function Up(t,e){const n=A(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=y.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(p=>{const m=c.docVersions.get(d);F(m!==null),p.version.compareTo(m)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=R();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function vu(t){const e=A(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function Bp(t,e){const n=A(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((l,h)=>{const f=i.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,l.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(he.EMPTY_BYTE_STRING,D.min()).withLastLimboFreeSnapshotVersion(D.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),i=i.insert(h,d),function(p,m,v){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,l)&&a.push(n.Ds.updateTargetData(r,d))});let c=Oe(),u=R();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(jp(r,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!s.isEqual(D.min())){const l=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return y.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.Li=i,r))}function jp(t,e,n){let s=R(),i=R();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Oe();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(D.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:i}})}function qp(t,e){const n=A(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function zp(t,e){const n=A(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,y.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new et(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Qi(t,e,n){const s=A(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ln(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function Vo(t,e,n){const s=A(t);let i=D.min(),r=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=A(a),h=l.qi.get(u);return h!==void 0?y.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(s,o,Le(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:D.min(),n?r:R())).next(a=>(Kp(s,Vd(e),a),{documents:a,Wi:r})))}function Kp(t,e,n){let s=t.Ui.get(e)||D.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class Uo{constructor(){this.activeTargetIds=Jc()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hp{constructor(){this.Br=new Uo,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Uo,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Gp{qr(e){}shutdown(){}}/**
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
 */class Bo{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gn=null;function gi(){return Gn===null?Gn=268435456+Math.round(2147483648*Math.random()):Gn++,"0x"+Gn.toString(16)}/**
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
 */const Qp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Wp{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const re="WebChannelConnection";class Yp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=gi(),a=this.ao(e,n);E("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,i,r),this.lo(e,a,c,s).then(u=>(E("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw ps("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ut,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=Qp[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=gi();return new Promise((o,a)=>{const c=new rd;c.setWithCredentials(!0),c.listenOnce(nd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case pi.NO_ERROR:const l=c.getResponseJson();E(re,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(l)),o(l);break;case pi.TIMEOUT:E(re,`RPC '${e}' ${r} timed out`),a(new T(g.DEADLINE_EXCEEDED,"Request time out"));break;case pi.HTTP_ERROR:const h=c.getStatus();if(E(re,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(v)>=0?v:g.UNKNOWN}(d.status);a(new T(p,d.message))}else a(new T(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new T(g.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{E(re,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);E(re,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}wo(e,n,s){const i=gi(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ed(),a=td(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new id({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=r.join("");E(re,`Creating RPC '${e}' stream ${i}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,f=!1;const d=new Wp({Wr:m=>{f?E(re,`Not sending because RPC '${e}' stream ${i} is closed:`,m):(h||(E(re,`Opening RPC '${e}' stream ${i} transport.`),l.open(),h=!0),E(re,`RPC '${e}' stream ${i} sending:`,m),l.send(m))},Hr:()=>l.close()}),p=(m,v,b)=>{m.listen(v,P=>{try{b(P)}catch(S){setTimeout(()=>{throw S},0)}})};return p(l,qn.EventType.OPEN,()=>{f||E(re,`RPC '${e}' stream ${i} transport opened.`)}),p(l,qn.EventType.CLOSE,()=>{f||(f=!0,E(re,`RPC '${e}' stream ${i} transport closed`),d.so())}),p(l,qn.EventType.ERROR,m=>{f||(f=!0,ps(re,`RPC '${e}' stream ${i} transport errored:`,m),d.so(new T(g.UNAVAILABLE,"The operation could not be completed")))}),p(l,qn.EventType.MESSAGE,m=>{var v;if(!f){const b=m.data[0];F(!!b);const P=b,S=P.error||((v=P[0])===null||v===void 0?void 0:v.error);if(S){E(re,`RPC '${e}' stream ${i} received error:`,S);const $=S.status;let me=function(z){const ge=K[z];if(ge!==void 0)return cu(ge)}($),dt=S.message;me===void 0&&(me=g.INTERNAL,dt="Unknown error status: "+$+" with message "+S.message),f=!0,d.so(new T(me,dt)),l.close()}else E(re,`RPC '${e}' stream ${i} received:`,b),d.io(b)}}),p(a,sd.STAT_EVENT,m=>{m.stat===wo.PROXY?E(re,`RPC '${e}' stream ${i} detected buffering proxy`):m.stat===wo.NOPROXY&&E(re,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function yi(){return typeof document<"u"?document:null}/**
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
 */function Gs(t){return new cp(t,!0)}/**
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
 */class wu{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&E("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Eu{constructor(e,n,s,i,r,o,a,c){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new wu(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(xe(n.toString()),xe("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new T(g.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return E("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xp extends Eu{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=hp(this.serializer,e),s=function(i){if(!("targetChange"in i))return D.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?D.min():r.readTime?Ce(r.readTime):D.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Gi(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=ji(a)?{documents:pp(i,a)}:{query:mp(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=hu(i,r.resumeToken):r.snapshotVersion.compareTo(D.min())>0&&(o.readTime=ws(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=yp(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Gi(this.serializer),n.removeTarget=e,this.Fo(n)}}class Jp extends Eu{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=dp(e.writeResults,e.commitTime),s=Ce(e.commitTime);return this.listener.Zo(s,n)}return F(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Gi(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>fp(this.serializer,s))};this.Fo(n)}}/**
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
 */class Zp extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new T(g.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(g.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new T(g.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class em{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(xe(n),this.ru=!1):E("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class tm{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{ft(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=A(a);c.du.add(4),await Mn(c),c.mu.set("Unknown"),c.du.delete(4),await Qs(c)}(this))})}),this.mu=new em(s,i)}}async function Qs(t){if(ft(t))for(const e of t.wu)await e(!0)}async function Mn(t){for(const e of t.wu)await e(!1)}function _u(t,e){const n=A(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Pr(n)?Mr(n):jt(n).No()&&Or(n,e))}function Tu(t,e){const n=A(t),s=jt(n);n.fu.delete(e),s.No()&&bu(n,e),n.fu.size===0&&(s.No()?s.$o():ft(n)&&n.mu.set("Unknown"))}function Or(t,e){t.gu.Ot(e.targetId),jt(t).jo(e)}function bu(t,e){t.gu.Ot(e),jt(t).Wo(e)}function Mr(t){t.gu=new ip({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),jt(t).start(),t.mu.ou()}function Pr(t){return ft(t)&&!jt(t).xo()&&t.fu.size>0}function ft(t){return A(t).du.size===0}function Iu(t){t.gu=void 0}async function nm(t){t.fu.forEach((e,n)=>{Or(t,e)})}async function sm(t,e){Iu(t),Pr(t)?(t.mu.au(e),Mr(t)):t.mu.set("Unknown")}async function im(t,e,n){if(t.mu.set("Online"),e instanceof lu&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){E("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Es(t,s)}else if(e instanceof Xn?t.gu.Kt(e):e instanceof uu?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(D.min()))try{const s=await vu(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(c);u&&i.fu.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(he.EMPTY_BYTE_STRING,c.snapshotVersion)),bu(i,a);const u=new et(c.target,a,1,c.sequenceNumber);Or(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){E("RemoteStore","Failed to raise snapshot:",s),await Es(t,s)}}async function Es(t,e,n){if(!Ln(e))throw e;t.du.add(1),await Mn(t),t.mu.set("Offline"),n||(n=()=>vu(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Qs(t)})}function Cu(t,e){return e().catch(n=>Es(t,n,e))}async function Ws(t){const e=A(t),n=Ke(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;rm(e);)try{const i=await qp(e.localStore,s);if(i===null){e.lu.length===0&&n.$o();break}s=i.batchId,om(e,i)}catch(i){await Es(e,i)}Su(e)&&Du(e)}function rm(t){return ft(t)&&t.lu.length<10}function om(t,e){t.lu.push(e);const n=Ke(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Su(t){return ft(t)&&!Ke(t).xo()&&t.lu.length>0}function Du(t){Ke(t).start()}async function am(t){Ke(t).tu()}async function cm(t){const e=Ke(t);for(const n of t.lu)e.Yo(n.mutations)}async function um(t,e,n){const s=t.lu.shift(),i=Ar.from(s,e,n);await Cu(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ws(t)}async function lm(t,e){e&&Ke(t).Jo&&await async function(n,s){if(i=s.code,sp(i)&&i!==g.ABORTED){const r=n.lu.shift();Ke(n).Oo(),await Cu(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ws(n)}var i}(t,e),Su(t)&&Du(t)}async function jo(t,e){const n=A(t);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const s=ft(n);n.du.add(3),await Mn(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Qs(n)}async function hm(t,e){const n=A(t);e?(n.du.delete(2),await Qs(n)):e||(n.du.add(2),await Mn(n),n.mu.set("Unknown"))}function jt(t){return t.yu||(t.yu=function(e,n,s){const i=A(e);return i.nu(),new Xp(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:nm.bind(null,t),Zr:sm.bind(null,t),zo:im.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Pr(t)?Mr(t):t.mu.set("Unknown")):(await t.yu.stop(),Iu(t))})),t.yu}function Ke(t){return t.pu||(t.pu=function(e,n,s){const i=A(e);return i.nu(),new Jp(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:am.bind(null,t),Zr:lm.bind(null,t),Xo:cm.bind(null,t),Zo:um.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Ws(t)):(await t.pu.stop(),t.lu.length>0&&(E("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class $r{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new $e,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new $r(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fr(t,e){if(xe("AsyncQueue",`${e}: ${t}`),Ln(t))return new T(g.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class It{constructor(e){this.comparator=e?(n,s)=>e(n,s)||_.comparator(n.key,s.key):(n,s)=>_.comparator(n.key,s.key),this.keyedMap=Gt(),this.sortedSet=new J(this.comparator)}static emptySet(e){return new It(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new It;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class qo{constructor(){this.Iu=new J(_.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):I():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Lt{constructor(e,n,s,i,r,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Lt(e,n,It.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class fm{constructor(){this.Eu=void 0,this.listeners=[]}}class dm{constructor(){this.queries=new Bt(e=>Gc(e),Bs),this.onlineState="Unknown",this.Au=new Set}}async function Au(t,e){const n=A(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new fm),i)try{r.Eu=await n.onListen(s)}catch(o){const a=Fr(o,`Initialization of query '${zi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Vr(n)}async function ku(t,e){const n=A(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function pm(t,e){const n=A(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Vr(n)}function mm(t,e,n){const s=A(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Vr(t){t.Au.forEach(e=>{e.next()})}class Nu{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Lt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Lt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class Ru{constructor(e){this.key=e}}class xu{constructor(e){this.key=e}}class gm{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=R(),this.mutatedKeys=R(),this.Ku=Qc(e),this.Gu=new It(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new qo,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const f=i.get(l),d=js(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(s.track({type:3,doc:d}),v=!0):this.Wu(f,d)||(s.track({type:2,doc:d}),v=!0,(c&&this.Ku(d,c)>0||u&&this.Ku(d,u)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),v=!0):f&&!d&&(s.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(d?(o=o.add(d),r=m?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((u,l)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return d(h)-d(f)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new Lt(this.query,e.Gu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new qo,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=R(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new xu(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Ru(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=R();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Lt.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class ym{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class vm{constructor(e){this.key=e,this.ec=!1}}class wm{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Bt(a=>Gc(a),Bs),this.ic=new Map,this.rc=new Set,this.oc=new J(_.comparator),this.uc=new Map,this.cc=new Rr,this.ac={},this.hc=new Map,this.lc=xt.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Em(t,e){const n=Nm(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await zp(n.localStore,Le(e));n.isPrimaryClient&&_u(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await _m(n,e,s,a==="current",o.resumeToken)}return i}async function _m(t,e,n,s,i){t.dc=(h,f,d)=>async function(p,m,v,b){let P=m.view.zu(v);P.Mi&&(P=await Vo(p.localStore,m.query,!1).then(({documents:me})=>m.view.zu(me,P)));const S=b&&b.targetChanges.get(m.targetId),$=m.view.applyChanges(P,p.isPrimaryClient,S);return Ko(p,m.targetId,$.Yu),$.snapshot}(t,h,f,d);const r=await Vo(t.localStore,e,!0),o=new gm(e,r.Wi),a=o.zu(r.documents),c=On.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);Ko(t,n,u.Yu);const l=new ym(e,n,o);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function Tm(t,e){const n=A(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!Bs(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Qi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Tu(n.remoteStore,s.targetId),Wi(n,s.targetId)}).catch(xn)):(Wi(n,s.targetId),await Qi(n.localStore,s.targetId,!0))}async function bm(t,e,n){const s=Rm(t);try{const i=await function(r,o){const a=A(r),c=Y.now(),u=o.reduce((f,d)=>f.add(d.key),R());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Oe(),p=R();return a.Ki.getEntries(f,u).next(m=>{d=m,d.forEach((v,b)=>{b.isValidDocument()||(p=p.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{l=m;const v=[];for(const b of o){const P=Jd(b,l.get(b.key).overlayedDocument);P!=null&&v.push(new ht(b.key,P,Uc(P.value.mapValue),ke.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,v,o)}).next(m=>{h=m;const v=m.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,v)})}).then(()=>({batchId:h.batchId,changes:Yc(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.ac[r.currentUser.toKey()];c||(c=new J(O)),c=c.insert(o,a),r.ac[r.currentUser.toKey()]=c}(s,i.batchId,n),await Pn(s,i.changes),await Ws(s.remoteStore)}catch(i){const r=Fr(i,"Failed to persist write");n.reject(r)}}async function Lu(t,e){const n=A(t);try{const s=await Bp(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?F(o.ec):i.removedDocuments.size>0&&(F(o.ec),o.ec=!1))}),await Pn(n,s,e)}catch(s){await xn(s)}}function zo(t,e,n){const s=A(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=A(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&Vr(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Im(t,e,n){const s=A(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new J(_.comparator);o=o.insert(r,ae.newNoDocument(r,D.min()));const a=R().add(r),c=new Hs(D.min(),new Map,new X(O),o,a);await Lu(s,c),s.oc=s.oc.remove(r),s.uc.delete(e),Ur(s)}else await Qi(s.localStore,e,!1).then(()=>Wi(s,e,n)).catch(xn)}async function Cm(t,e){const n=A(t),s=e.batch.batchId;try{const i=await Up(n.localStore,e);Mu(n,s,null),Ou(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Pn(n,i)}catch(i){await xn(i)}}async function Sm(t,e,n){const s=A(t);try{const i=await function(r,o){const a=A(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(F(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Mu(s,e,n),Ou(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Pn(s,i)}catch(i){await xn(i)}}function Ou(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Mu(t,e,n){const s=A(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function Wi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Pu(t,s)})}function Pu(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Tu(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Ur(t))}function Ko(t,e,n){for(const s of n)s instanceof Ru?(t.cc.addReference(s.key,e),Dm(t,s)):s instanceof xu?(E("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Pu(t,s.key)):I()}function Dm(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(E("SyncEngine","New document in limbo: "+n),t.rc.add(s),Ur(t))}function Ur(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new _(U.fromString(e)),s=t.lc.next();t.uc.set(s,new vm(n)),t.oc=t.oc.insert(n,s),_u(t.remoteStore,new et(Le(Us(n.path)),s,2,Ir.ct))}}async function Pn(t,e,n){const s=A(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Lr.Di(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,c){const u=A(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(c,h=>y.forEach(h.Vi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>y.forEach(h.Si,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Ln(l))throw l;E("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Li.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);u.Li=u.Li.insert(h,p)}}}(s.localStore,r))}async function Am(t,e){const n=A(t);if(!n.currentUser.isEqual(e)){E("SyncEngine","User change. New user:",e.toKey());const s=await yu(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new T(g.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Pn(n,s.Qi)}}function km(t,e){const n=A(t),s=n.uc.get(e);if(s&&s.ec)return R().add(s.key);{let i=R();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function Nm(t){const e=A(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=km.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Im.bind(null,e),e.nc.zo=pm.bind(null,e.eventManager),e.nc.wc=mm.bind(null,e.eventManager),e}function Rm(t){const e=A(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Cm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Sm.bind(null,e),e}class Ho{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Gs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Vp(this.persistence,new $p,e.initialUser,this.serializer)}createPersistence(e){return new Mp(xr.Fs,this.serializer)}createSharedClientState(e){return new Hp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>zo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Am.bind(null,this.syncEngine),await hm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new dm}createDatastore(e){const n=Gs(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Yp(i));var i;return function(r,o,a,c){return new Zp(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>zo(this.syncEngine,a,0),o=Bo.D()?new Bo:new Gp,new tm(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,u){const l=new wm(s,i,r,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=A(e);E("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Mn(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class $u{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):xe("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Lm{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=oe.UNAUTHENTICATED,this.clientId=Pc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{E("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(E("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $e;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Fr(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function vi(t,e){t.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await yu(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Go(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Mm(t);E("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>jo(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>jo(e.remoteStore,r)),t._onlineComponents=e}function Om(t){return t.name==="FirebaseError"?t.code===g.FAILED_PRECONDITION||t.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Mm(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await vi(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Om(n))throw n;ps("Error using user provided cache. Falling back to memory cache: "+n),await vi(t,new Ho)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await vi(t,new Ho);return t._offlineComponents}async function Fu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await Go(t,t._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await Go(t,new xm))),t._onlineComponents}function Pm(t){return Fu(t).then(e=>e.syncEngine)}async function Yi(t){const e=await Fu(t),n=e.eventManager;return n.onListen=Em.bind(null,e.syncEngine),n.onUnlisten=Tm.bind(null,e.syncEngine),n}function $m(t,e,n={}){const s=new $e;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new $u({next:h=>{r.enqueueAndForget(()=>ku(i,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new T(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new T(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Nu(Us(o.path),u,{includeMetadataChanges:!0,xu:!0});return Au(i,l)}(await Yi(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const Qo=new Map;/**
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
 */function Vu(t,e,n){if(!n)throw new T(g.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Fm(t,e,n,s){if(e===!0&&s===!0)throw new T(g.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wo(t){if(!_.isDocumentKey(t))throw new T(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yo(t){if(_.isDocumentKey(t))throw new T(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Br(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":I()}function Fe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Br(t);throw new T(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Xo{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new T(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Fm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ys{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xo(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new od;switch(n.type){case"firstParty":return new ld(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new T(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Qo.get(e);n&&(E("ComponentProvider","Removing Datastore"),Qo.delete(e),n.terminate())}(this),Promise.resolve()}}function Vm(t,e,n,s={}){var i;const r=(t=Fe(t,Ys))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&ps("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=oe.MOCK_USER;else{o=Bl(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new T(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new oe(c)}t._authCredentials=new ad(new Mc(o,a))}}/**
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
 */class pe{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ve(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pe(this.firestore,e,this._key)}}class Xs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Xs(this.firestore,e,this._query)}}class Ve extends Xs{constructor(e,n,s){super(e,n,Us(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new _(e))}withConverter(e){return new Ve(this.firestore,e,this._path)}}function Um(t,e,...n){if(t=Ne(t),Vu("collection","path",e),t instanceof Ys){const s=U.fromString(e,...n);return Yo(s),new Ve(t,null,s)}{if(!(t instanceof pe||t instanceof Ve))throw new T(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(U.fromString(e,...n));return Yo(s),new Ve(t.firestore,null,s)}}function Bm(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=Pc.A()),Vu("doc","path",e),t instanceof Ys){const s=U.fromString(e,...n);return Wo(s),new pe(t,null,new _(s))}{if(!(t instanceof pe||t instanceof Ve))throw new T(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(U.fromString(e,...n));return Wo(s),new pe(t.firestore,t instanceof Ve?t.converter:null,new _(s))}}/**
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
 */class jm{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new wu(this,"async_queue_retry"),this.qc=()=>{const n=yi();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=yi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=yi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new $e;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Ln(e))throw e;E("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw xe("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=$r.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&I()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Jo(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class vn extends Ys{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new jm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Uu(this),this._firestoreClient.terminate()}}function qm(t,e){const n=typeof t=="object"?t:Kh(),s=typeof t=="string"?t:e||"(default)",i=Bh(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Fl("firestore");r&&Vm(i,...r)}return i}function jr(t){return t._firestoreClient||Uu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Uu(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,c,u){return new bd(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Lm(t._authCredentials,t._appCheckCredentials,t._queue,r),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=i.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ot(he.fromBase64String(e))}catch(n){throw new T(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ot(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Js{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new T(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zs{constructor(e){this._methodName=e}}/**
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
 */class qr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new T(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new T(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}/**
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
 */const zm=/^__.*__$/;class Bu{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ht(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ju(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class ei{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new ei(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.ea(e),i}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return _s(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(ju(this.Yc)&&zm.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class Km{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Gs(e)}ua(e,n,s,i=!1){return new ei({Yc:e,methodName:n,oa:s,path:ce.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hm(t){const e=t._freezeSettings(),n=Gs(t._databaseId);return new Km(t._databaseId,!!e.ignoreUndefinedProperties,n)}class ti extends Zs{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ti}}function Gm(t,e,n){return new ei({Yc:3,oa:e.settings.oa,methodName:t._methodName,ta:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Qm extends Zs{constructor(e,n){super(e),this.ca=n}_toFieldTransform(e){const n=Gm(this,e,!0),s=this.ca.map(r=>$n(r,n)),i=new Rt(s);return new Qd(e.path,i)}isEqual(e){return this===e}}function Wm(t,e,n,s){const i=t.ua(1,e,n);zu("Data must be an object, but it was:",i,s);const r=[],o=ye.empty();lt(s,(c,u)=>{const l=zr(e,c,n);u=Ne(u);const h=i.na(l);if(u instanceof ti)r.push(l);else{const f=$n(u,h);f!=null&&(r.push(l),o.set(l,f))}});const a=new Ee(r);return new Bu(o,a,i.fieldTransforms)}function Ym(t,e,n,s,i,r){const o=t.ua(1,e,n),a=[Zo(e,s,n)],c=[i];if(r.length%2!=0)throw new T(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Zo(e,r[f])),c.push(r[f+1]);const u=[],l=ye.empty();for(let f=a.length-1;f>=0;--f)if(!Zm(u,a[f])){const d=a[f];let p=c[f];p=Ne(p);const m=o.na(d);if(p instanceof ti)u.push(d);else{const v=$n(p,m);v!=null&&(u.push(d),l.set(d,v))}}const h=new Ee(u);return new Bu(l,h,o.fieldTransforms)}function $n(t,e){if(qu(t=Ne(t)))return zu("Unsupported field value:",e,t),Xm(t,e);if(t instanceof Zs)return function(n,s){if(!ju(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=$n(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Kd(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Y.fromDate(n);return{timestampValue:ws(s.serializer,i)}}if(n instanceof Y){const i=new Y(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ws(s.serializer,i)}}if(n instanceof qr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ot)return{bytesValue:hu(s.serializer,n._byteString)};if(n instanceof pe){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Nr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Br(n)}`)}(t,e)}function Xm(t,e){const n={};return $c(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lt(t,(s,i)=>{const r=$n(i,e.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function qu(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Y||t instanceof qr||t instanceof Ot||t instanceof pe||t instanceof Zs)}function zu(t,e,n){if(!qu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Br(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function Zo(t,e,n){if((e=Ne(e))instanceof Js)return e._internalPath;if(typeof e=="string")return zr(t,e);throw _s("Field path arguments must be of type string or ",t,!1,void 0,n)}const Jm=new RegExp("[~\\*/\\[\\]]");function zr(t,e,n){if(e.search(Jm)>=0)throw _s(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Js(...e.split("."))._internalPath}catch{throw _s(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _s(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new T(g.INVALID_ARGUMENT,a+t+c)}function Zm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ku{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eg extends Ku{data(){return super.data()}}function Hu(t,e){return typeof e=="string"?zr(t,e):e instanceof Js?e._internalPath:e._delegate._internalPath}/**
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
 */function tg(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new T(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ng{convertValue(e,n="none"){switch(rt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return H(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(At(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw I()}}convertObject(e,n){const s={};return lt(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new qr(H(e.latitude),H(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Vc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(pn(e));default:return null}}convertTimestamp(e){const n=ze(e);return new Y(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=U.fromString(e);F(gu(s));const i=new mn(s.get(1),s.get(3)),r=new _(s.popFirst(5));return i.isEqual(n)||xe(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class Qt{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gu extends Ku{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Hu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Jn extends Gu{data(e={}){return super.data(e)}}class sg{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qt(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Jn(this._firestore,this._userDataWriter,s.key,s,new Qt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Jn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Jn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:ig(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ig(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
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
 */function rg(t){t=Fe(t,pe);const e=Fe(t.firestore,vn);return $m(jr(e),t._key).then(n=>Wu(e,t,n))}class Qu extends ng{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ot(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,n)}}function og(t,e,n,...s){t=Fe(t,pe);const i=Fe(t.firestore,vn),r=Hm(i);let o;return o=typeof(e=Ne(e))=="string"||e instanceof Js?Ym(r,"updateDoc",t._key,e,n,s):Wm(r,"updateDoc",t._key,e),cg(i,[o.toMutation(t._key,ke.exists(!0))])}function ag(t,...e){var n,s,i;t=Ne(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Jo(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Jo(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof pe)u=Fe(t.firestore,vn),l=Us(t._key.path),c={next:h=>{e[o]&&e[o](Wu(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Fe(t,Xs);u=Fe(h.firestore,vn),l=h._query;const f=new Qu(u);c={next:d=>{e[o]&&e[o](new sg(u,f,h,d))},error:e[o+1],complete:e[o+2]},tg(t._query)}return function(h,f,d,p){const m=new $u(p),v=new Nu(f,m,d);return h.asyncQueue.enqueueAndForget(async()=>Au(await Yi(h),v)),()=>{m.yc(),h.asyncQueue.enqueueAndForget(async()=>ku(await Yi(h),v))}}(jr(u),l,a,c)}function cg(t,e){return function(n,s){const i=new $e;return n.asyncQueue.enqueueAndForget(async()=>bm(await Pm(n),s,i)),i.promise}(jr(t),e)}function Wu(t,e,n){const s=n.docs.get(e._key),i=new Qu(t);return new Gu(t,i,e._key,s,new Qt(n.hasPendingWrites,n.fromCache),e.converter)}function ug(...t){return new Qm("arrayUnion",t)}(function(t,e=!0){(function(n){Ut=n})(zh),rs(new on("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new vn(new cd(n.getProvider("auth-internal")),new fd(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new T(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mn(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Tt(Eo,"3.10.0",t),Tt(Eo,"3.10.0","esm2017")})();const lg={apiKey:"AIzaSyCDqpSA_-xEwVkbj-EBwPHNYiSvJO6ULOY",authDomain:"wedding-photos-challenge.firebaseapp.com",projectId:"wedding-photos-challenge",storageBucket:"wedding-photos-challenge.appspot.com",messagingSenderId:"1095306889273",appId:"1:1095306889273:web:2f1ac74abc6fb029f1a5e8",measurementId:"G-3V15Z3EV3R"},hg=Na(lg),ea=qm(hg);function Kr(t){const e=t-1;return e*e*e+1}function ta(t){return--t*t*t*t*t+1}function fg(t,{delay:e=0,duration:n=400,easing:s=ot}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function dg(t,{delay:e=0,duration:n=400,easing:s=Kr,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o),[h,f]=Qr(i),[d,p]=Qr(r);return{delay:e,duration:n,easing:s,css:(m,v)=>`
			transform: ${u} translate(${(1-m)*h}${f}, ${(1-m)*d}${p});
			opacity: ${c-l*v}`}}function na(t,{delay:e=0,duration:n=400,easing:s=Kr,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,c=o.transform==="none"?"":o.transform,u=1-i,l=a*(1-r);return{delay:e,duration:n,easing:s,css:(h,f)=>`
			transform: ${c} scale(${1-u*f});
			opacity: ${a-l*f}
		`}}function pg(t,{from:e,to:n},s={}){const i=getComputedStyle(t),r=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),c=e.left+e.width*o/n.width-(n.left+o),u=e.top+e.height*a/n.height-(n.top+a),{delay:l=0,duration:h=d=>Math.sqrt(d)*120,easing:f=Kr}=s;return{delay:l,duration:at(h)?h(Math.sqrt(c*c+u*u)):h,easing:f,css:(d,p)=>{const m=p*c,v=p*u,b=d+p*e.width/n.width,P=d+p*e.height/n.height;return`transform: ${r} translate(${m}px, ${v}px) scale(${b}, ${P});`}}}const mt=[];function Hr(t,e=q){let n;const s=new Set;function i(a){if(ct(t,a)&&(t=a,n)){const c=!mt.length;for(const u of s)u[1](),mt.push(u,t);if(c){for(let u=0;u<mt.length;u+=2)mt[u][0](mt[u+1]);mt.length=0}}}function r(a){i(a(t))}function o(a,c=q){const u=[a,c];return s.add(u),s.size===1&&(n=e(i)||q),a(t),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const mg={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},gg=()=>{const{subscribe:t,update:e}=Hr([]);let n=0;const s={},i=u=>u instanceof Object;return{subscribe:t,push:(u,l={})=>{const h={target:"default",...i(u)?u:{...l,msg:u}},f=s[h.target]||{},d={...mg,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++n};return e(p=>d.reversed?[...p,d]:[d,...p]),n},pop:u=>{e(l=>{if(!l.length||u===0)return[];if(i(u))return l.filter(f=>u(f));const h=u||Math.max(...l.map(f=>f.id));return l.filter(f=>f.id!==h)})},set:(u,l={})=>{const h=i(u)?{...u}:{...l,id:u};e(f=>{const d=f.findIndex(p=>p.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(u="default",l={})=>(s[u]=l,s)}},Ct=gg();function sa(t){return Object.prototype.toString.call(t)==="[object Date]"}function Xi(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const s=e.map((i,r)=>Xi(t[r],i));return i=>s.map(r=>r(i))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(sa(t)&&sa(e)){t=t.getTime(),e=e.getTime();const r=e-t;return o=>new Date(t+o*r)}const s=Object.keys(e),i={};return s.forEach(r=>{i[r]=Xi(t[r],e[r])}),r=>{const o={};return s.forEach(a=>{o[a]=i[a](r)}),o}}if(n==="number"){const s=e-t;return i=>t+i*s}throw new Error(`Cannot interpolate ${n} values`)}function yg(t,e={}){const n=Hr(t);let s,i=t;function r(o,a){if(t==null)return n.set(t=o),Promise.resolve();i=o;let c=s,u=!1,{delay:l=0,duration:h=400,easing:f=ot,interpolate:d=Xi}=wi(wi({},e),a);if(h===0)return c&&(c.abort(),c=null),n.set(t=i),Promise.resolve();const p=wn()+l;let m;return s=En(v=>{if(v<p)return!0;u||(m=d(t,o),typeof h=="function"&&(h=h(t,o)),u=!0),c&&(c.abort(),c=null);const b=v-p;return b>h?(n.set(t=o),!1):(n.set(t=m(f(b/h))),!0)}),s.promise}return{set:r,update:(o,a)=>r(o(i,t),a),subscribe:n.subscribe}}function vg(t){let e,n=t[0].msg+"",s;return{c(){e=new al(!1),s=Ts(),e.a=s},m(i,r){e.m(n,i,r),G(i,s,r)},p(i,r){r&1&&n!==(n=i[0].msg+"")&&e.p(n)},i:q,o:q,d(i){i&&B(s),i&&e.d()}}}function wg(t){let e,n,s;const i=[t[2]];var r=t[0].component.src;function o(a){let c={};for(let u=0;u<i.length;u+=1)c=wi(c,i[u]);return{props:c}}return r&&(e=Yr(r,o())),{c(){e&&nt(e.$$.fragment),n=Ts()},m(a,c){e&&Be(e,a,c),G(a,n,c),s=!0},p(a,c){const u=c&4?Cl(i,[Sl(a[2])]):{};if(c&1&&r!==(r=a[0].component.src)){if(e){_n();const l=e;fe(l.$$.fragment,1,0,()=>{je(l,1)}),Tn()}r?(e=Yr(r,o()),nt(e.$$.fragment),ee(e.$$.fragment,1),Be(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(a){s||(e&&ee(e.$$.fragment,a),s=!0)},o(a){e&&fe(e.$$.fragment,a),s=!1},d(a){a&&B(n),e&&je(e,a)}}}function ia(t){let e,n,s;return{c(){e=M("div"),N(e,"class","_toastBtn pe svelte-l65oht"),N(e,"role","button"),N(e,"tabindex","0")},m(i,r){G(i,e,r),n||(s=[_e(e,"click",t[4]),_e(e,"keydown",t[8])],n=!0)},p:q,d(i){i&&B(e),n=!1,we(s)}}}function Eg(t){let e,n,s,i,r,o,a,c,u,l;const h=[wg,vg],f=[];function d(m,v){return m[0].component?0:1}s=d(t),i=f[s]=h[s](t);let p=t[0].dismissable&&ia(t);return{c(){e=M("div"),n=M("div"),i.c(),r=W(),p&&p.c(),o=W(),a=M("progress"),N(n,"role","status"),N(n,"class","_toastMsg svelte-l65oht"),Vn(n,"pe",t[0].component),N(a,"class","_toastBar svelte-l65oht"),a.value=t[1],N(e,"class","_toastItem svelte-l65oht"),Vn(e,"pe",t[0].pausable)},m(m,v){G(m,e,v),k(e,n),f[s].m(n,null),k(e,r),p&&p.m(e,null),k(e,o),k(e,a),c=!0,u||(l=[_e(e,"mouseenter",t[9]),_e(e,"mouseleave",t[6])],u=!0)},p(m,[v]){let b=s;s=d(m),s===b?f[s].p(m,v):(_n(),fe(f[b],1,1,()=>{f[b]=null}),Tn(),i=f[s],i?i.p(m,v):(i=f[s]=h[s](m),i.c()),ee(i,1),i.m(n,null)),(!c||v&1)&&Vn(n,"pe",m[0].component),m[0].dismissable?p?p.p(m,v):(p=ia(m),p.c(),p.m(e,o)):p&&(p.d(1),p=null),(!c||v&2)&&(a.value=m[1]),(!c||v&1)&&Vn(e,"pe",m[0].pausable)},i(m){c||(ee(i),c=!0)},o(m){fe(i),c=!1},d(m){m&&B(e),f[s].d(),p&&p.d(),u=!1,we(l)}}}function _g(t,e,n){let s,{item:i}=e;const r=yg(i.initial,{duration:i.duration,easing:ot});ga(t,r,S=>n(1,s=S));const o=()=>Ct.pop(i.id),a=()=>{(s===1||s===0)&&o()};let c=i.initial,u=c,l=!1;const h=()=>{!l&&s!==c&&(r.set(s,{duration:0}),l=!0)},f=()=>{if(l){const S=i.duration,$=S-S*((s-u)/(c-u));r.set(c,{duration:$}).then(a),l=!1}};let d={};const p=(S,$="undefined")=>typeof S===$;let m;dl((S=document)=>{if(p(S.hidden))return;const $=()=>S.hidden?h():f(),me="visibilitychange";S.addEventListener(me,$),m=()=>S.removeEventListener(me,$),$()}),pl(()=>{p(i.onpop,"function")&&i.onpop(i.id),m&&m()});const b=S=>{S instanceof KeyboardEvent&&["Enter"," "].includes(S.key)&&o()},P=()=>{i.pausable&&h()};return t.$$set=S=>{"item"in S&&n(0,i=S.item)},t.$$.update=()=>{if(t.$$.dirty&1&&(p(i.progress)||n(0,i.next=i.progress,i)),t.$$.dirty&131&&c!==i.next&&(n(7,c=i.next),u=s,l=!1,r.set(c).then(a)),t.$$.dirty&1&&i.component){const{props:S={},sendIdTo:$}=i.component;n(2,d={...S,...$&&{[$]:i.id}})}},[i,s,d,r,o,h,f,c,b,P]}class Tg extends Pt{constructor(e){super(),Mt(this,e,_g,Eg,ct,{item:0})}}function ra(t,e,n){const s=t.slice();return s[5]=e[n],s}function oa(t,e){let n,s,i,r,o,a,c,u,l=q,h;return s=new Tg({props:{item:e[5]}}),{key:t,first:null,c(){n=M("li"),nt(s.$$.fragment),i=W(),N(n,"class",r=Zn(e[5].classes.join(" "))+" svelte-yh90az"),N(n,"style",o=e[1](e[5].theme)),this.first=n},m(f,d){G(f,n,d),Be(s,n,null),k(n,i),h=!0},p(f,d){e=f;const p={};d&1&&(p.item=e[5]),s.$set(p),(!h||d&1&&r!==(r=Zn(e[5].classes.join(" "))+" svelte-yh90az"))&&N(n,"class",r),(!h||d&1&&o!==(o=e[1](e[5].theme)))&&N(n,"style",o)},r(){u=n.getBoundingClientRect()},f(){fl(n),l(),Ea(n,u)},a(){l(),l=hl(n,u,pg,{duration:200})},i(f){h||(ee(s.$$.fragment,f),Ue(()=>{!h||(c&&c.end(1),a=El(n,dg,e[5].intro),a.start())}),h=!0)},o(f){fe(s.$$.fragment,f),a&&a.invalidate(),c=_l(n,fg,{}),h=!1},d(f){f&&B(n),je(s),f&&c&&c.end()}}}function bg(t){let e,n=[],s=new Map,i,r=t[0];const o=a=>a[5].id;for(let a=0;a<r.length;a+=1){let c=ra(t,r,a),u=o(c);s.set(u,n[a]=oa(u,c))}return{c(){e=M("ul");for(let a=0;a<n.length;a+=1)n[a].c();N(e,"class","_toastContainer svelte-yh90az")},m(a,c){G(a,e,c);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(e,null);i=!0},p(a,[c]){if(c&3){r=a[0],_n();for(let u=0;u<n.length;u+=1)n[u].r();n=Il(n,c,o,1,a,r,s,e,bl,oa,null,ra);for(let u=0;u<n.length;u+=1)n[u].a();Tn()}},i(a){if(!i){for(let c=0;c<r.length;c+=1)ee(n[c]);i=!0}},o(a){for(let c=0;c<n.length;c+=1)fe(n[c]);i=!1},d(a){a&&B(e);for(let c=0;c<n.length;c+=1)n[c].d()}}}function Ig(t,e,n){let s;ga(t,Ct,c=>n(4,s=c));let{options:i={}}=e,{target:r="default"}=e,o;const a=c=>Object.keys(c).reduce((u,l)=>`${u}${l}:${c[l]};`,"");return t.$$set=c=>{"options"in c&&n(2,i=c.options),"target"in c&&n(3,r=c.target)},t.$$.update=()=>{t.$$.dirty&12&&Ct._init(r,i),t.$$.dirty&24&&n(0,o=s.filter(c=>c.target===r))},[o,a,i,r,s]}class Cg extends Pt{constructor(e){super(),Mt(this,e,Ig,bg,ct,{options:2,target:3})}}function Sg(t){const e=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click_outside",t))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function aa(t,e,n){const s=t.slice();return s[7]=e[n],s}function ca(t){let e,n,s,i,r,o,a,c,u,l=t[2],h=[];for(let f=0;f<l.length;f+=1)h[f]=ua(aa(t,l,f));return{c(){e=M("table"),n=M("caption"),n.textContent="Leaderboard",s=W(),i=M("tr"),i.innerHTML=`<th class="svelte-i10xo1">Name</th> 
            <th class="svelte-i10xo1">Challenges Completed</th>`,r=W();for(let f=0;f<h.length;f+=1)h[f].c();N(n,"class","svelte-i10xo1"),N(i,"class","svelte-i10xo1"),N(e,"class","leaderboard svelte-i10xo1")},m(f,d){G(f,e,d),k(e,n),k(e,s),k(e,i),k(e,r);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(e,null);a=!0,c||(u=[el(Sg.call(null,e)),_e(e,"click_outside",t[3])],c=!0)},p(f,d){if(t=f,d&4){l=t[2];let p;for(p=0;p<l.length;p+=1){const m=aa(t,l,p);h[p]?h[p].p(m,d):(h[p]=ua(m),h[p].c(),h[p].m(e,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=l.length}},i(f){a||(Ue(()=>{!a||(o||(o=Xr(e,na,{duration:250,opacity:.5,easing:ta},!0)),o.run(1))}),a=!0)},o(f){o||(o=Xr(e,na,{duration:250,opacity:.5,easing:ta},!1)),o.run(0),a=!1},d(f){f&&B(e),sl(h,f),f&&o&&o.end(),c=!1,we(u)}}}function ua(t){let e,n,s=t[7].name+"",i,r,o,a=t[7].challenges_completed+"",c,u;return{c(){e=M("tr"),n=M("td"),i=tt(s),r=W(),o=M("td"),c=tt(a),u=W(),N(n,"class","leaderboard-name svelte-i10xo1"),N(o,"class","svelte-i10xo1"),N(e,"class","svelte-i10xo1")},m(l,h){G(l,e,h),k(e,n),k(n,i),k(e,r),k(e,o),k(o,c),k(e,u)},p(l,h){h&4&&s!==(s=l[7].name+"")&&tn(i,s),h&4&&a!==(a=l[7].challenges_completed+"")&&tn(c,a)},d(l){l&&B(e)}}}function Dg(t){let e,n,s,i,r,o,a=t[0]&&ca(t);return{c(){e=M("div"),e.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" alt="Leaderboard button" class="svelte-i10xo1"/>',n=W(),a&&a.c(),s=Ts(),N(e,"class","icon svelte-i10xo1")},m(c,u){G(c,e,u),t[6](e),G(c,n,u),a&&a.m(c,u),G(c,s,u),i=!0,r||(o=_e(e,"click",t[3]),r=!0)},p(c,[u]){c[0]?a?(a.p(c,u),u&1&&ee(a,1)):(a=ca(c),a.c(),ee(a,1),a.m(s.parentNode,s)):a&&(_n(),fe(a,1,1,()=>{a=null}),Tn())},i(c){i||(ee(a),i=!0)},o(c){fe(a),i=!1},d(c){c&&B(e),t[6](null),c&&B(n),a&&a.d(c),c&&B(s),r=!1,o()}}}function Ag(t,e,n){let s,{challengeList:i=[]}=e,r={},o=!1,a;function c(){n(0,o=!o),o?n(1,a.style["pointer-events"]="none",a):n(1,a.style["pointer-events"]="all",a)}function u(l){ns[l?"unshift":"push"](()=>{a=l,n(1,a)})}return t.$$set=l=>{"challengeList"in l&&n(4,i=l.challengeList)},t.$$.update=()=>{t.$$.dirty&48&&(n(5,r={}),i.forEach(l=>{l.completed.forEach(h=>{r[h]?n(5,r[h]++,r):n(5,r[h]=1,r)})})),t.$$.dirty&32&&n(2,s=Object.keys(r).map(l=>({name:l,challenges_completed:r[l]})).sort((l,h)=>h.challenges_completed-l.challenges_completed))},[o,a,s,c,i,r,u]}class kg extends Pt{constructor(e){super(),Mt(this,e,Ag,Dg,ct,{challengeList:4})}}function la(t){let e,n,s,i,r=t[0].name+"",o,a,c,u,l,h=(t[0].completed.length>0?t[0].completed.join(", "):"Not completed by anyone yet!")+"",f,d;return{c(){e=M("div"),n=M("h2"),n.textContent="Take a photo of...",s=W(),i=M("h1"),o=tt(r),a=W(),c=M("h3"),c.textContent="Completed by:",u=W(),l=M("h2"),f=tt(h),N(i,"class","challenge svelte-1wsnha1"),N(l,"class",d=Zn(t[0].completed.length>0?"completers":"")+" svelte-1wsnha1"),N(e,"class","challenge-block svelte-1wsnha1")},m(p,m){G(p,e,m),k(e,n),k(e,s),k(e,i),k(i,o),k(e,a),k(e,c),k(e,u),k(e,l),k(l,f)},p(p,m){m&1&&r!==(r=p[0].name+"")&&tn(o,r),m&1&&h!==(h=(p[0].completed.length>0?p[0].completed.join(", "):"Not completed by anyone yet!")+"")&&tn(f,h),m&1&&d!==(d=Zn(p[0].completed.length>0?"completers":"")+" svelte-1wsnha1")&&N(l,"class",d)},d(p){p&&B(e)}}}function Ng(t){let e,n,s,i,r,o,a,c,u,l,h;e=new kg({props:{challengeList:t[1]}});let f=t[0]&&t[0].name&&t[0].completed&&la(t);return{c(){nt(e.$$.fragment),n=W(),s=M("div"),i=M("div"),f&&f.c(),r=W(),o=M("button"),o.textContent="\u{1F503} New Challenge",a=W(),c=M("button"),c.textContent="\u2705 Complete Challenge",N(i,"class","heading svelte-1wsnha1"),N(s,"class","container svelte-1wsnha1")},m(d,p){Be(e,d,p),G(d,n,p),G(d,s,p),k(s,i),f&&f.m(i,null),k(i,r),k(i,o),k(i,a),k(i,c),u=!0,l||(h=[_e(o,"click",t[2]),_e(c,"click",t[3])],l=!0)},p(d,[p]){const m={};p&2&&(m.challengeList=d[1]),e.$set(m),d[0]&&d[0].name&&d[0].completed?f?f.p(d,p):(f=la(d),f.c(),f.m(i,r)):f&&(f.d(1),f=null)},i(d){u||(ee(e.$$.fragment,d),u=!0)},o(d){fe(e.$$.fragment,d),u=!1},d(d){je(e,d),d&&B(n),d&&B(s),f&&f.d(),l=!1,we(h)}}}let ha="challenges";function Rg(t,e,n){let{name:s}=e,i={id:"",name:"Loading...",completed:[]},r=[],o=[],a=6;const c=Um(ea,ha);ag(c,h=>{n(1,r=[]),h.forEach(f=>{r.push({id:f.id,name:f.data().name,completed:f.data().completed}),i&&i.id&&i.id==f.id&&n(0,i={id:f.id,name:f.data().name,completed:f.data().completed})}),(!i||i.name=="Loading...")&&u(),a>=r.length&&(a=r.length-1)});function u(){let h=i;for(;i.id==h.id||o.includes(i.id);)n(0,i=r[Math.floor(Math.random()*r.length)]);o.push(i.id),o.length>a&&o.shift()}async function l(){if(i.completed.includes(s)){Ct.push("\u{1F6A7} Challenge already completed!");return}const h=Bm(ea,ha,i.id);(await rg(h)).exists()?await og(h,{completed:ug(s)}).then(()=>{Ct.push("\u2705 Challenge completed!")}):Ct.push("\u{1F6A8} Unable to complete challenge, try again or refresh!")}return t.$$set=h=>{"name"in h&&n(4,s=h.name)},[i,r,u,l,s]}class xg extends Pt{constructor(e){super(),Mt(this,e,Rg,Ng,ct,{name:4})}}const Yu=(t,e)=>{const n=c=>JSON.stringify(c,null,2),s=JSON.parse;localStorage.getItem(t)===null&&localStorage.setItem(t,n(e));const i=s(localStorage.getItem(t)),{subscribe:r,set:o,update:a}=Hr(i);return{subscribe:r,set:c=>(localStorage.setItem(t,n(c)),o(c)),update:a}},Xu="",fa=Yu("pc-name",Xu),da=Yu("pc-tutorial",Xu);function Lg(t){let e,n,s,i,r,o,a,c;return{c(){e=M("div"),n=M("label"),n.textContent="What's your name?",s=W(),i=M("input"),r=W(),o=M("button"),o.textContent="Let's go!",N(n,"for","name-input"),N(n,"class","svelte-e2ktyq"),N(i,"id","name-input"),N(i,"type","text"),N(i,"class","svelte-e2ktyq"),N(o,"class","svelte-e2ktyq"),N(e,"id","name-container"),N(e,"class","svelte-e2ktyq")},m(u,l){G(u,e,l),k(e,n),k(e,s),k(e,i),Wr(i,t[1]),k(e,r),k(e,o),a||(c=[_e(i,"input",t[4]),_e(o,"click",t[2])],a=!0)},p(u,l){l&2&&i.value!==u[1]&&Wr(i,u[1])},d(u){u&&B(e),a=!1,we(c)}}}function Og(t){let e,n,s,i,r,o;return{c(){e=M("p"),n=tt(t[0]),s=W(),i=M("span"),i.textContent="Change",N(i,"class","svelte-e2ktyq"),N(e,"id","logged-in"),N(e,"class","svelte-e2ktyq")},m(a,c){G(a,e,c),k(e,n),k(e,s),k(e,i),r||(o=_e(i,"click",t[3]),r=!0)},p(a,c){c&1&&tn(n,a[0])},d(a){a&&B(e),r=!1,o()}}}function Mg(t){let e;function n(r,o){return r[0]!=""?Og:Lg}let s=n(t),i=s(t);return{c(){i.c(),e=Ts()},m(r,o){i.m(r,o),G(r,e,o)},p(r,[o]){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:q,o:q,d(r){i.d(r),r&&B(e)}}}function Pg(t,e,n){let{nameVal:s}=e;fa.subscribe(c=>{n(0,s=c)});let i="";function r(){n(1,i=i.toLowerCase()),fa.set(i)}function o(){n(1,i=""),r()}function a(){i=this.value,n(1,i)}return t.$$set=c=>{"nameVal"in c&&n(0,s=c.nameVal)},[s,i,r,o,a]}class $g extends Pt{constructor(e){super(),Mt(this,e,Pg,Mg,ct,{nameVal:0})}}function pa(t){let e,n;return e=new xg({props:{name:t[0]}}),{c(){nt(e.$$.fragment)},m(s,i){Be(e,s,i),n=!0},p(s,i){const r={};i&1&&(r.name=s[0]),e.$set(r)},i(s){n||(ee(e.$$.fragment,s),n=!0)},o(s){fe(e.$$.fragment,s),n=!1},d(s){je(e,s)}}}function Fg(t){let e,n,s,i,r,o;function a(l){t[1](l)}let c={};t[0]!==void 0&&(c.nameVal=t[0]),e=new $g({props:c}),ns.push(()=>Dl(e,"nameVal",a));let u=t[0]!=""&&pa(t);return r=new Cg({}),{c(){nt(e.$$.fragment),s=W(),u&&u.c(),i=W(),nt(r.$$.fragment)},m(l,h){Be(e,l,h),G(l,s,h),u&&u.m(l,h),G(l,i,h),Be(r,l,h),o=!0},p(l,[h]){const f={};!n&&h&1&&(n=!0,f.nameVal=l[0],yl(()=>n=!1)),e.$set(f),l[0]!=""?u?(u.p(l,h),h&1&&ee(u,1)):(u=pa(l),u.c(),ee(u,1),u.m(i.parentNode,i)):u&&(_n(),fe(u,1,1,()=>{u=null}),Tn())},i(l){o||(ee(e.$$.fragment,l),ee(u),ee(r.$$.fragment,l),o=!0)},o(l){fe(e.$$.fragment,l),fe(u),fe(r.$$.fragment,l),o=!1},d(l){je(e,l),l&&B(s),u&&u.d(l),l&&B(i),je(r,l)}}}function Vg(t,e,n){let s=!1;da.subscribe(o=>{s=o}),s||confirm(`Thanks for scanning!

If you fancy some more photo challenges, we have created a bunch for you here, just enter your name, and get snapping!

Click 'New Challenge' if you don't like the one you have, and click 'Complete Challenge' to mark it as complete! There's a leaderboard and everything \u{1F601}

Click OK to hide this pop-up.`)&&da.set(!0);let i="";function r(o){i=o,n(0,i)}return[i,r]}class Ug extends Pt{constructor(e){super(),Mt(this,e,Vg,Fg,ct,{})}}new Ug({target:document.getElementById("app")});
