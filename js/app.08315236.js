(function(e){function n(n){for(var r,i,l=n[0],s=n[1],a=n[2],f=0,p=[];f<l.length;f++)i=l[f],c[i]&&p.push(c[i][0]),c[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(n);while(p.length)p.shift()();return o.push.apply(o,a||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,l=1;l<t.length;l++){var s=t[l];0!==c[s]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/pencil-clicker/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var a=0;a<l.length;a++)n(l[a]);var u=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"034f":function(e,n,t){"use strict";var r=t("64a9"),c=t.n(r);c.a},"408c":function(e,n,t){"use strict";var r=t("a63a"),c=t.n(r);c.a},"64a9":function(e,n,t){},a63a:function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("PencilGame",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},o=[],i=t("d225"),l=t("308d"),s=t("6bb5"),a=t("4e2b"),u=t("9ab4"),f=t("60a3"),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("section",{staticClass:"section"},[t("div",[e._v("Pencils: "+e._s(e.pencilCount))]),t("button",{on:{click:e.createPencil}},[e._v("Create Pencil")])]),t("section",{staticClass:"section"},[e._v("Pencil Price: "+e._s(e.pencilPrice))]),t("section",{staticClass:"section"},[t("div",[e._v("Money: "+e._s(e.moneyAmount))]),t("button",{attrs:{disabled:e.pencilCount<1},on:{click:e.sellPencil}},[e._v("Sell Pencil")])]),t("section",{staticClass:"section"},[t("div",[e._v("Sellers: "+e._s(e.sellerCount))]),t("button",{attrs:{disabled:!e.canBuySeller},on:{click:e.buySeller}},[e._v("Buy Seller")])])])},d=[],b=t("cebc"),v=t("b0b4"),y=t("2f62"),m=function(e){function n(){return Object(i["a"])(this,n),Object(l["a"])(this,Object(s["a"])(n).apply(this,arguments))}return Object(a["a"])(n,e),Object(v["a"])(n,[{key:"created",value:function(){this.startSellers()}},{key:"startSellers",value:function(){var e=this;setInterval(function(){return e.$store.dispatch("workPencilSellers")},1e3)}},{key:"sellPencil",value:function(){this.$store.dispatch("sellPencil")}},{key:"buySeller",value:function(){this.$store.dispatch("buySeller")}}]),n}(f["b"]);m=u["a"]([Object(f["a"])({computed:Object(b["a"])({},Object(y["c"])(["pencilCount","moneyAmount","pencilPrice","sellerCount","canBuySeller"])),methods:Object(b["a"])({},Object(y["b"])(["createPencil"]))})],m);var h=m,P=h,S=(t("408c"),t("2877")),O=Object(S["a"])(P,p,d,!1,null,"1fefee8f",null),_=O.exports,g=function(e){function n(){return Object(i["a"])(this,n),Object(l["a"])(this,Object(s["a"])(n).apply(this,arguments))}return Object(a["a"])(n,e),n}(f["b"]);g=u["a"]([Object(f["a"])({components:{PencilGame:_}})],g);var j=g,E=j,w=(t("034f"),Object(S["a"])(E,c,o,!1,null,null,null)),k=w.exports,C=t("2ef0");r["default"].use(y["a"]);var T=new y["a"].Store({state:{pencils:0,pencilPrice:1,money:0,sellers:0,sellerPrice:10},getters:{pencilCount:function(e){var n=e.pencils;return n},moneyAmount:function(e){var n=e.money;return n},pencilPrice:function(e){var n=e.pencilPrice;return n},sellerCount:function(e){var n=e.sellers;return n},canBuySeller:function(e){var n=e.sellerPrice,t=e.money;return t>=n}},mutations:{SET_PENCILS:function(e,n){e.pencils=n},SET_PENCIL_PRICE:function(e,n){e.pencilPrice=n},SET_MONEY:function(e,n){e.money=n},SET_SELLERS:function(e,n){e.sellers=n}},actions:{createPencil:function(e){var n=e.commit,t=e.state;n("SET_PENCILS",t.pencils+1)},sellPencil:function(e){var n=e.commit,t=e.state,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;n("SET_PENCILS",t.pencils-r),n("SET_MONEY",t.pencilPrice*r+t.money)},buySeller:function(e){var n=e.commit,t=e.state;n("SET_MONEY",t.money-t.sellerPrice),n("SET_SELLERS",t.sellers+1)},workPencilSellers:function(e){e.commit;var n=e.state,t=e.dispatch,r=Object(C["clamp"])(n.pencils,n.sellers);r>0&&t("sellPencil",r)}}}),N=t("9483");Object(N["a"])("".concat("/pencil-clicker/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,new r["default"]({store:T,render:function(e){return e(k)}}).$mount("#app")}});
//# sourceMappingURL=app.08315236.js.map