(()=>{"use strict";var t,e,n,r={1660:(t,e,n)=>{n(8594),n(5666);var r=n(144),o=n(8345);r.default.use(o.Z);var a=[{path:"/",name:"Inbox",component:function(){return n.e(746).then(n.bind(n,2932))}},{path:"/today",name:"Today",component:function(){return n.e(443).then(n.bind(n,9343))}},{path:"/upcoming",name:"Upcoming",component:function(){return n.e(443).then(n.bind(n,4760))}}];const i=new o.Z({routes:a});var s=n(5464),l=n.n(s);n(5680),n(7718),r.default.use(l());const c=new(l())({icons:{iconfont:"mdi"}});var d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("navigation"),t._v(" "),n("v-main",[n("router-view"),t._v(" "),n("router-view",{attrs:{name:"a"}}),t._v(" "),n("router-view",{attrs:{name:"b"}})],1),t._v(" "),n("footer-app")],1)};d._withStripped=!0;var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{color:"primary",dark:"",app:""}},[n("v-app-bar-nav-icon",{attrs:{color:"white"}}),t._v(" "),t._l(t.buttons,(function(e){return n("v-toolbar-title",{key:e.id,staticClass:"navigation_title"},[n("router-link",{staticClass:"navigation_title_link",attrs:{to:e.path}},[t._v(t._s(e.text))])],1)})),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{staticClass:"navigation_text-field",attrs:{width:"100",clearable:"",dense:"",label:"Search for todo items"}}),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1)],2)};u._withStripped=!0;var p=n(3379),v=n.n(p),f=n(7795),m=n.n(f),h=n(569),b=n.n(h),g=n(3565),_=n.n(g),y=n(9216),A=n.n(y),x=n(4589),w=n.n(x),k=n(5662),T={};T.styleTagTransform=w(),T.setAttributes=_(),T.insert=b().bind(null,"head"),T.domAPI=m(),T.insertStyleElement=A(),v()(k.Z,T),k.Z&&k.Z.locals&&k.Z.locals;var Z=n(1900),E=(0,Z.Z)({name:"Navigation",data:function(){return{buttons:[{id:1,text:"Inbox",path:"/"},{id:2,text:"Today",path:"/Today"},{id:3,text:"Upcoming",path:"/Upcoming"}]}}},u,[],!1,null,"492e790a",null);E.options.__file="src/vue/components/Navigation.vue";const S=E.exports;var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"primary"}},[n("v-row",{staticClass:"footer_row",attrs:{justify:"center"}},[t._l(t.links,(function(e){return n("router-link",{key:e.id,staticClass:"footer_link",attrs:{to:e.path}},[t._v(t._s(e.text))])})),t._v(" "),n("v-col",{staticClass:"primary text-center white--text",attrs:{cols:"12"}},[t._v("\n      2021 - Todo\n    ")])],2)],1)};C._withStripped=!0;var O=n(689),j={};j.styleTagTransform=w(),j.setAttributes=_(),j.insert=b().bind(null,"head"),j.domAPI=m(),j.insertStyleElement=A(),v()(O.Z,j),O.Z&&O.Z.locals&&O.Z.locals;var N=(0,Z.Z)({name:"FooterApp",data:function(){return{links:[{id:1,text:"Home",path:"/"},{id:2,text:"About us",path:"/Today"},{id:3,text:"Team",path:"/Upcoming"},{id:4,text:"Services",path:"/Today"},{id:5,text:"Blog",path:"/Upcoming"},{id:6,text:"Contact us",path:"/"}]}}},C,[],!1,null,"797e9b6f",null);N.options.__file="src/vue/components/FooterApp.vue";const P={name:"App",components:{Navigation:S,FooterApp:N.exports},mounted:function(){this.$route.params[0]=["hello","world"],console.log(this.$route.params)}};var $=n(6489),U={};U.styleTagTransform=w(),U.setAttributes=_(),U.insert=b().bind(null,"head"),U.domAPI=m(),U.insertStyleElement=A(),v()($.Z,U),$.Z&&$.Z.locals&&$.Z.locals;var F=(0,Z.Z)(P,d,[],!1,null,"5e019a2f",null);F.options.__file="src/vue/App.vue";const I=F.exports;var B;document.body.appendChild(((B=document.createElement("div")).classList.add("app-root"),B)),new r.default({router:i,vuetify:c,render:function(t){return t(I)}}).$mount(".app-root")},6489:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(8081),o=n.n(r),a=n(3645),i=n.n(a)()(o());i.push([t.id,"\nhtml[data-v-5e019a2f],\nbody[data-v-5e019a2f] {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 15px;\n}\n*[data-v-5e019a2f] {\n  box-sizing: border-box;\n}\n.nav[data-v-5e019a2f] {\n  display: flex;\n  flex-direction: row;\n}\n",""]);const s=i},689:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(8081),o=n.n(r),a=n(3645),i=n.n(a)()(o());i.push([t.id,"\n.footer_row[data-v-797e9b6f] {\n  margin: 0;\n}\n.footer_link[data-v-797e9b6f] {\n  padding: 20px 15px 0 15px;\n  text-decoration: none;\n  color: white;\n}\n",""]);const s=i},5662:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(8081),o=n.n(r),a=n(3645),i=n.n(a)()(o());i.push([t.id,"\n.navigation_title[data-v-492e790a] {\n  margin: 0 20px;\n}\n.navigation_title_link[data-v-492e790a] {\n  font-weight: 600;\n  color: white;\n  text-decoration: none;\n}\n.navigation_text-field[data-v-492e790a] {\n  max-width: 250px;\n  height: 40px;\n  margin-top: auto;\n}\n",""]);const s=i},5189:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC"}},o={};function a(t){var e=o[t];if(void 0!==e)return e.exports;var n=o[t]={id:t,exports:{}};return r[t].call(n.exports,n,n.exports,a),n.exports}a.m=r,t=[],a.O=(e,n,r,o)=>{if(!n){var i=1/0;for(d=0;d<t.length;d++){for(var[n,r,o]=t[d],s=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((t=>a.O[t](n[l])))?n.splice(l--,1):(s=!1,o<i&&(i=o));if(s){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,r,o]},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,n)=>(a.f[n](t,e),e)),[])),a.u=t=>({443:"about",746:"group-inbox"}[t]+"."+{443:"edb7453ed81265638792",746:"6adcf405e66ec2c72cd1"}[t]+".js"),a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},n="todo:",a.l=(t,r,o,i)=>{if(e[t])e[t].push(r);else{var s,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==n+o){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",n+o),s.src=t),e[t]=[r];var p=(n,r)=>{s.onerror=s.onload=null,clearTimeout(v);var o=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((t=>t(r))),n)return n(r)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t})(),(()=>{a.b=document.baseURI||self.location.href;var t={179:0};a.f.j=(e,n)=>{var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=t[e]=[n,o]));n.push(r[2]=o);var i=a.p+a.u(e),s=new Error;a.l(i,(n=>{if(a.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}}),"chunk-"+e,e)}},a.O.j=e=>0===t[e];var e=(e,n)=>{var r,o,[i,s,l]=n,c=0;if(i.some((e=>0!==t[e]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var d=l(a)}for(e&&e(n);c<i.length;c++)o=i[c],a.o(t,o)&&t[o]&&t[o][0](),t[i[c]]=0;return a.O(d)},n=self.webpackChunktodo=self.webpackChunktodo||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var i=a.O(void 0,[287],(()=>a(1660)));i=a.O(i)})();