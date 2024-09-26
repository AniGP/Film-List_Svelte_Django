import{s as U,a as j,o as W,t as z,b as N}from"../chunks/scheduler.63274e7e.js";import{S as F,i as G,s as H,e as m,c as J,a as w,t as p,b as L,d as h,f as d,g as K,h as M,j as Q,k as I,l as v,m as X,n as Y,o as Z,p as P,q as g,r as b,u as D,v as k,w as E}from"../chunks/index.d7c298af.js";const x="modulepreload",ee=function(f,e){return new URL(f,e).href},T={},R=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=ee(l,r),l in T)return;T[l]=!0;const t=l.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(!!r)for(let a=i.length-1;a>=0;a--){const u=i[a];if(u.href===l&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${o}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":x,t||(c.as="script",c.crossOrigin=""),c.href=l,document.head.appendChild(c),t)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e()).catch(l=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=l,window.dispatchEvent(t),!t.defaultPrevented)throw l})},_e={};function te(f){let e,n,r;var i=f[1][0];function l(t,o){return{props:{data:t[3],form:t[2]}}}return i&&(e=g(i,l(f)),f[15](e)),{c(){e&&b(e.$$.fragment),n=m()},l(t){e&&D(e.$$.fragment,t),n=m()},m(t,o){e&&k(e,t,o),w(t,n,o),r=!0},p(t,o){if(o&2&&i!==(i=t[1][0])){if(e){P();const s=e;p(s.$$.fragment,1,0,()=>{E(s,1)}),L()}i?(e=g(i,l(t)),t[15](e),b(e.$$.fragment),h(e.$$.fragment,1),k(e,n.parentNode,n)):e=null}else if(i){const s={};o&8&&(s.data=t[3]),o&4&&(s.form=t[2]),e.$set(s)}},i(t){r||(e&&h(e.$$.fragment,t),r=!0)},o(t){e&&p(e.$$.fragment,t),r=!1},d(t){t&&d(n),f[15](null),e&&E(e,t)}}}function ne(f){let e,n,r;var i=f[1][0];function l(t,o){return{props:{data:t[3],$$slots:{default:[oe]},$$scope:{ctx:t}}}}return i&&(e=g(i,l(f)),f[14](e)),{c(){e&&b(e.$$.fragment),n=m()},l(t){e&&D(e.$$.fragment,t),n=m()},m(t,o){e&&k(e,t,o),w(t,n,o),r=!0},p(t,o){if(o&2&&i!==(i=t[1][0])){if(e){P();const s=e;p(s.$$.fragment,1,0,()=>{E(s,1)}),L()}i?(e=g(i,l(t)),t[14](e),b(e.$$.fragment),h(e.$$.fragment,1),k(e,n.parentNode,n)):e=null}else if(i){const s={};o&8&&(s.data=t[3]),o&65591&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)}},i(t){r||(e&&h(e.$$.fragment,t),r=!0)},o(t){e&&p(e.$$.fragment,t),r=!1},d(t){t&&d(n),f[14](null),e&&E(e,t)}}}function ie(f){let e,n,r;var i=f[1][1];function l(t,o){return{props:{data:t[4],form:t[2]}}}return i&&(e=g(i,l(f)),f[13](e)),{c(){e&&b(e.$$.fragment),n=m()},l(t){e&&D(e.$$.fragment,t),n=m()},m(t,o){e&&k(e,t,o),w(t,n,o),r=!0},p(t,o){if(o&2&&i!==(i=t[1][1])){if(e){P();const s=e;p(s.$$.fragment,1,0,()=>{E(s,1)}),L()}i?(e=g(i,l(t)),t[13](e),b(e.$$.fragment),h(e.$$.fragment,1),k(e,n.parentNode,n)):e=null}else if(i){const s={};o&16&&(s.data=t[4]),o&4&&(s.form=t[2]),e.$set(s)}},i(t){r||(e&&h(e.$$.fragment,t),r=!0)},o(t){e&&p(e.$$.fragment,t),r=!1},d(t){t&&d(n),f[13](null),e&&E(e,t)}}}function se(f){let e,n,r;var i=f[1][1];function l(t,o){return{props:{data:t[4],$$slots:{default:[re]},$$scope:{ctx:t}}}}return i&&(e=g(i,l(f)),f[12](e)),{c(){e&&b(e.$$.fragment),n=m()},l(t){e&&D(e.$$.fragment,t),n=m()},m(t,o){e&&k(e,t,o),w(t,n,o),r=!0},p(t,o){if(o&2&&i!==(i=t[1][1])){if(e){P();const s=e;p(s.$$.fragment,1,0,()=>{E(s,1)}),L()}i?(e=g(i,l(t)),t[12](e),b(e.$$.fragment),h(e.$$.fragment,1),k(e,n.parentNode,n)):e=null}else if(i){const s={};o&16&&(s.data=t[4]),o&65575&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)}},i(t){r||(e&&h(e.$$.fragment,t),r=!0)},o(t){e&&p(e.$$.fragment,t),r=!1},d(t){t&&d(n),f[12](null),e&&E(e,t)}}}function re(f){let e,n,r;var i=f[1][2];function l(t,o){return{props:{data:t[5],form:t[2]}}}return i&&(e=g(i,l(f)),f[11](e)),{c(){e&&b(e.$$.fragment),n=m()},l(t){e&&D(e.$$.fragment,t),n=m()},m(t,o){e&&k(e,t,o),w(t,n,o),r=!0},p(t,o){if(o&2&&i!==(i=t[1][2])){if(e){P();const s=e;p(s.$$.fragment,1,0,()=>{E(s,1)}),L()}i?(e=g(i,l(t)),t[11](e),b(e.$$.fragment),h(e.$$.fragment,1),k(e,n.parentNode,n)):e=null}else if(i){const s={};o&32&&(s.data=t[5]),o&4&&(s.form=t[2]),e.$set(s)}},i(t){r||(e&&h(e.$$.fragment,t),r=!0)},o(t){e&&p(e.$$.fragment,t),r=!1},d(t){t&&d(n),f[11](null),e&&E(e,t)}}}function oe(f){let e,n,r,i;const l=[se,ie],t=[];function o(s,c){return s[1][2]?0:1}return e=o(f),n=t[e]=l[e](f),{c(){n.c(),r=m()},l(s){n.l(s),r=m()},m(s,c){t[e].m(s,c),w(s,r,c),i=!0},p(s,c){let a=e;e=o(s),e===a?t[e].p(s,c):(P(),p(t[a],1,1,()=>{t[a]=null}),L(),n=t[e],n?n.p(s,c):(n=t[e]=l[e](s),n.c()),h(n,1),n.m(r.parentNode,r))},i(s){i||(h(n),i=!0)},o(s){p(n),i=!1},d(s){s&&d(r),t[e].d(s)}}}function V(f){let e,n=f[7]&&$(f);return{c(){e=K("div"),n&&n.c(),this.h()},l(r){e=M(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=Q(e);n&&n.l(i),i.forEach(d),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),v(e,"position","absolute"),v(e,"left","0"),v(e,"top","0"),v(e,"clip","rect(0 0 0 0)"),v(e,"clip-path","inset(50%)"),v(e,"overflow","hidden"),v(e,"white-space","nowrap"),v(e,"width","1px"),v(e,"height","1px")},m(r,i){w(r,e,i),n&&n.m(e,null)},p(r,i){r[7]?n?n.p(r,i):(n=$(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&d(e),n&&n.d()}}}function $(f){let e;return{c(){e=X(f[8])},l(n){e=Y(n,f[8])},m(n,r){w(n,e,r)},p(n,r){r&256&&Z(e,n[8])},d(n){n&&d(e)}}}function fe(f){let e,n,r,i,l;const t=[ne,te],o=[];function s(a,u){return a[1][1]?0:1}e=s(f),n=o[e]=t[e](f);let c=f[6]&&V(f);return{c(){n.c(),r=H(),c&&c.c(),i=m()},l(a){n.l(a),r=J(a),c&&c.l(a),i=m()},m(a,u){o[e].m(a,u),w(a,r,u),c&&c.m(a,u),w(a,i,u),l=!0},p(a,[u]){let y=e;e=s(a),e===y?o[e].p(a,u):(P(),p(o[y],1,1,()=>{o[y]=null}),L(),n=o[e],n?n.p(a,u):(n=o[e]=t[e](a),n.c()),h(n,1),n.m(r.parentNode,r)),a[6]?c?c.p(a,u):(c=V(a),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null)},i(a){l||(h(n),l=!0)},o(a){p(n),l=!1},d(a){a&&(d(r),d(i)),o[e].d(a),c&&c.d(a)}}}function le(f,e,n){let{stores:r}=e,{page:i}=e,{constructors:l}=e,{components:t=[]}=e,{form:o}=e,{data_0:s=null}=e,{data_1:c=null}=e,{data_2:a=null}=e;j(r.page.notify);let u=!1,y=!1,O=null;W(()=>{const _=r.page.subscribe(()=>{u&&(n(7,y=!0),z().then(()=>{n(8,O=document.title||"untitled page")}))});return n(6,u=!0),_});function A(_){N[_?"unshift":"push"](()=>{t[2]=_,n(0,t)})}function S(_){N[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function C(_){N[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function q(_){N[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function B(_){N[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return f.$$set=_=>{"stores"in _&&n(9,r=_.stores),"page"in _&&n(10,i=_.page),"constructors"in _&&n(1,l=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,o=_.form),"data_0"in _&&n(3,s=_.data_0),"data_1"in _&&n(4,c=_.data_1),"data_2"in _&&n(5,a=_.data_2)},f.$$.update=()=>{f.$$.dirty&1536&&r.page.set(i)},[t,l,o,s,c,a,u,y,O,r,i,A,S,C,q,B]}class ue extends F{constructor(e){super(),G(this,e,le,fe,U,{stores:9,page:10,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5})}}const me=[()=>R(()=>import("../nodes/0.6549c5bc.js"),["../nodes/0.6549c5bc.js","../chunks/scheduler.63274e7e.js","../chunks/index.d7c298af.js"],import.meta.url),()=>R(()=>import("../nodes/1.d29549c5.js"),["../nodes/1.d29549c5.js","../chunks/scheduler.63274e7e.js","../chunks/index.d7c298af.js","../chunks/singletons.fe9d2f3b.js","../chunks/index.35a173b3.js"],import.meta.url),()=>R(()=>import("../nodes/2.871a5310.js"),["../nodes/2.871a5310.js","../chunks/scheduler.63274e7e.js","../chunks/index.d7c298af.js"],import.meta.url),()=>R(()=>import("../nodes/3.8891ffe0.js"),["../nodes/3.8891ffe0.js","../chunks/scheduler.63274e7e.js","../chunks/index.d7c298af.js"],import.meta.url),()=>R(()=>import("../nodes/4.052ff1bf.js"),["../nodes/4.052ff1bf.js","../chunks/scheduler.63274e7e.js","../chunks/index.d7c298af.js","../chunks/film-store.75b5ca4c.js","../chunks/index.35a173b3.js"],import.meta.url),()=>R(()=>import("../nodes/5.3c47f7c1.js"),["../nodes/5.3c47f7c1.js","../chunks/scheduler.63274e7e.js","../chunks/index.d7c298af.js","../chunks/film-store.75b5ca4c.js","../chunks/index.35a173b3.js"],import.meta.url),()=>R(()=>import("../nodes/6.5a312b6d.js"),["../nodes/6.5a312b6d.js","../chunks/scheduler.63274e7e.js","../chunks/index.d7c298af.js","../chunks/film-store.75b5ca4c.js","../chunks/index.35a173b3.js","../chunks/singletons.fe9d2f3b.js"],import.meta.url)],pe=[],he={"/":[3],"/films":[4,[2]],"/films/add":[6,[2]],"/films/[id]":[5,[2]]},de={handleError:({error:f})=>{console.error(f)}};export{he as dictionary,de as hooks,_e as matchers,me as nodes,ue as root,pe as server_loads};
