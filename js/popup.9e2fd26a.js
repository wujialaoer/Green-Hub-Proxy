(function(e){function t(t){for(var r,o,a=t[0],l=t[1],u=t[2],f=0,p=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);i&&i(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==s[l]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={popup:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var i=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("0a3d")},"0a3d":function(e,t,n){"use strict";n.r(t),function(e){n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),r=n("cc29"),s=n("37dd");e.browser=n("9845"),t["default"].prototype.$browser=e.browser,new t["default"]({router:s["a"],el:"#app",render:function(e){return e(r["a"])}})}.call(this,n("c8ba"))},"37dd":function(e,t,n){"use strict";var r,s,c=n("2b0e"),o=n("8c4f"),a=n("2877"),l={},u=Object(a["a"])(l,r,s,!1,null,null,null),i=u.exports,f=[{path:"/",component:i,redirect:"",children:[]}];c["default"].use(o["a"]);t["a"]=new o["a"]({routes:f})},"4af3":function(e,t,n){"use strict";(function(e){var r=n("5530"),s=(n("96cf"),n("1da1"));t["a"]={name:"App",data:function(){return{extInfo:{version:"0.9",uid:"",connection:null,sharedDate:null},LinkStatus:1,users:"..."}},created:function(){this.getExtInfo().then(),this.getTotalConnections().then()},methods:{getExtInfo:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.runtime.sendMessage({action:"extInfo",data:{}});case 2:s=n.sent,t.extInfo=Object(r["a"])(Object(r["a"])({},t.extInfo),s);case 4:case"end":return n.stop()}}),n)})))()},getTotalConnections:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.runtime.sendMessage({action:"getTotalConnections",data:{}});case 2:t.users=n.sent;case 3:case"end":return n.stop()}}),n)})))()},jumpCountryTabs:function(){window.open(chrome.runtime.getURL("options.html"))},disconnect:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.runtime.sendMessage({action:"disconnect",data:{}});case 2:return n.next=4,t.getExtInfo();case 4:case"end":return n.stop()}}),n)})))()},shareQQ:function(){var t="个人推荐：GreenHub 绿墙，五星好用的网络出海工具，500+五星好评。",n="https://github.com/pablocc1979/Green-Hub-Proxy",r="../assets/picture1.png",s="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary="+t+"&url="+n+"&pics="+r;e.runtime.sendMessage({action:"userShared",data:{}}),window.open(s,"newwindow","height=400,width=400,top=100,left=100")},shareToXl:function(){var t="个人推荐：GreenHub 绿墙，五星好用的网络出海工具，500+五星好评。",n="https://github.com/pablocc1979/Green-Hub-Proxy",r="../assets/picture1.png",s="http://v.t.sina.com.cn/share/share.php?title="+t+"&url="+n+"&content=utf-8&sourceUrl="+n+"&pic="+r;e.runtime.sendMessage({action:"userShared",data:{}}),window.open(s,"newwindow","height=400,width=400,top=100,left=100")}}}}).call(this,n("9845"))},"4b07":function(e,t){e.exports="data:image/png;base64,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"},"5df5":function(e,t,n){"use strict";var r=n("7c00"),s=n.n(r);s.a},"7c00":function(e,t,n){},cc29:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"header"},[r("p",{staticClass:"titleP",on:{click:e.jumpCountryTabs}},[e._v("GreenHub 绿墙 — 网络出海工具")]),r("span",{staticClass:"title_icon",on:{click:e.shareToXl}},[r("svg",{staticClass:"svg-icon",staticStyle:{fill:"rgb(124, 180, 97)",cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"16",height:"16"}},[r("path",{attrs:{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"}})])])]),r("div",{staticClass:"content"},[r("p",{staticClass:"link_type"},[e.extInfo.connection?r("svg",{staticClass:"svg-icon",staticStyle:{fill:"rgb(124, 180, 97)",margin:"0 auto"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"100",height:"100"}},[r("path",{attrs:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})]):r("img",{attrs:{src:n("4b07"),alt:""}})]),r("p",{staticClass:"online_users"},[e._v("当前在线人总数 "+e._s(e.users))]),r("p",{staticClass:"connection_VPN"},[e.extInfo.connection?r("span",{staticStyle:{color:"#7CB461"}},[e._v("VPN 已连接")]):e._e(),e.extInfo.connection?e._e():r("span",{staticStyle:{color:"#C0C4CC"}},[e._v("VPN 未连接")])]),r("p",{staticClass:"select_button"},[e.extInfo.connection?e._e():r("button",{staticClass:"connection_button",on:{click:e.jumpCountryTabs}},[e._v("立即连接")]),e.extInfo.connection?r("button",{staticClass:"disconnect_button",on:{click:e.disconnect}},[e._v("断开连接")]):e._e(),r("button",{on:{click:e.shareQQ}},[r("svg",{staticClass:"svg-icon",staticStyle:{fill:"rgb(48, 49, 51)"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"64 64 896 896",width:"22",height:"22"}},[r("path",{attrs:{d:"M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"}})]),e._v(" 分享到QQ空间")]),r("button",{on:{click:e.shareToXl}},[r("svg",{staticClass:"svg-icon",staticStyle:{fill:"rgb(48, 49, 51)","margin-right":"16px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24",height:"24"}},[r("path",{attrs:{d:"M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7C108.5 446.7 0 395.3 0 310.4c0-44.3 28-95.4 76.3-143.7C176 67 279.5 65.8 249.9 161c-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zm143.7-146.3c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8.3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4.6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z"}})]),e._v(" 分享到微博")])]),e._m(0)])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"node_country"},[n("p",[e._v("· 8 个节点")]),n("p",[e._v("· 500+ 五星好评")]),n("p",[e._v("· 4 个国家")]),n("p",[e._v("· 免费限时即用")])])}],c=n("4af3"),o=c["a"],a=(n("5df5"),n("2877")),l=Object(a["a"])(o,r,s,!1,null,null,null);t["a"]=l.exports}});
//# sourceMappingURL=popup.9e2fd26a.js.map