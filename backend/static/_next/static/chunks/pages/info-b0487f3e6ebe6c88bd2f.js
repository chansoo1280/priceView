(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[776],{6814:function(e,t,r){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}r.d(t,{Z:function(){return n}})},4020:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var c=a(o[0]);c!==o[0]&&(r[o[0]]=c)}o=n.exec(e)}r["%C2"]="\ufffd";for(var s=Object.keys(r),i=0;i<s.length;i++){var u=s[i];e=e.replace(new RegExp(u,"g"),r[u])}return e}(e)}}},2806:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var c=n[a],s=e[c];(o?-1!==t.indexOf(c):t(c,s,e))&&(r[c]=s)}return r}},1374:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(5893),o=r(4699),a=r(7757),c=r.n(a),s=r(2137),i=r(6814),u=r(1163),l=r(7294),f=r(7563),p=r(1747),d=r(6156),y=(r(3144),r(4155));function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={Request:function(){var e=(0,s.Z)(c().mark((function e(t,r,n,o){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var i=n?"?".concat((0,f.stringify)(g(g({},n),{},{api_key:y.env.NEXT_PUBLIC_API_KEY}))):"";fetch("".concat("http://13.125.195.7").concat(r).concat(i),{body:JSON.stringify(o),cache:"no-cache",headers:{"content-type":"application/json",SECRET:"asdY235h^&@!%Y&~!~"},method:"".concat(t)}).then(function(){var t=(0,s.Z)(c().mark((function t(r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==r.status){t.next=2;break}return t.abrupt("return",r.json().then((function(t){console.log(t),e(t)})));case 2:return t.abrupt("return",a(r));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){a(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,r,n,o){return e.apply(this,arguments)}}()},v=r(8292),b="RN_API_GET_POSITION",j=function(e){(0,i.Z)(e);var t=(0,u.useRouter)(),r=null,a=p.mq.find((function(e,n){return r=n,e.seq===Number(t.query.seq)})),d={prev:null!==r&&p.mq[r-1]||null,next:null!==r&&p.mq[r+1]||null},y=(new Date).format("yyyy-MM"),m=(0,l.useState)(null),g=m[0],j=m[1],x=(0,l.useState)([]),O=x[0],w=x[1],k=(0,l.useState)(null===a||void 0===a?void 0:a.seq_list[0]),E=k[0],_=k[1],N=(0,l.useState)(p.OO[""]),S=N[0],C=N[1],F=(0,l.useState)(p.UU[""]),A=F[0],I=F[1],R=function(){var e=(0,s.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==E){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,h.Request("get","/api/count/"+E,{P_YEAR_MONTH:y,M_TYPE_CODE:A,M_GU_CODE:S}).catch((function(e){return e.status,null}));case 4:if(null!==(t=e.sent)){e.next=7;break}return e.abrupt("return");case 7:if(w(t.map((function(e){return e.AVER_VAL||null}))),null!==g){e.next=10;break}return e.abrupt("return");case 10:g.load({unload:!0,x:"Dates",columns:[["Dates"].concat(t.map((function(e){return e.P_YEAR_MONTH+"-01"}))),[null===a||void 0===a?void 0:a.name].concat(t.map((function(e){return e.AVER_VAL||null})))],labels:{format:function(e){return U(e)+"\uc6d0"}}});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){return 0!==O.length&&0!==O.filter((function(e){return null!==e})).length},U=function(e){return null===e?"0":e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},q=function(e){var t=JSON.parse(e.data),r=t.data;switch(t.type){case b:!function(e){var t=e.x,r=e.y;fetch("https://dapi.kakao.com/v2/local/geo/coord2address.json?".concat((0,f.stringify)({x:t,y:r})),{headers:{"content-type":"application/json",Authorization:"KakaoAK 4fdda60789cef4f549581038ad7564e5"},method:"get"}).then(function(){var e=(0,s.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=2;break}return e.abrupt("return",t.json().then((function(e){var t;if(e.documents&&0===e.documents.length)alert("\uc704\uce58\uc815\ubcf4\ub97c \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.");else{var r=null===(t=e.documents[0])||void 0===t?void 0:t.address,n=r.region_1depth_name,o=r.region_2depth_name;if("\uc11c\uc6b8"===n){var a=Object.keys(p.OO).find((function(e){return p.OO[e]===o}))||"";C(a)}else alert("\uc11c\uc6b8\uc774 \uc544\ub2d9\ub2c8\ub2e4")}})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}({y:r.coords.latitude,x:r.coords.longitude})}};return(0,l.useEffect)((function(){return window.ReactNativeWebView?(document.addEventListener("message",q),window.addEventListener("message",q)):alert("\ubaa8\ubc14\uc77c\uc774 \uc544\ub2d9\ub2c8\ub2e4."),function(){document.removeEventListener("message",q),window.removeEventListener("message",q)}}),[]),(0,l.useEffect)((function(){R()}),[g,E,A,S]),(0,l.useEffect)((function(){_(null===a||void 0===a?void 0:a.seq_list[0])}),[a]),(0,n.jsxs)("main",{id:"contents",className:"l_main",children:[(0,n.jsx)(v.ContentsBar,{children:(0,n.jsx)(v.Select,{sizeVal:v.SizeCode.large,value:E,setValue:function(e){_(Number(e))},children:null===a||void 0===a?void 0:a.seq_list.map((function(e){return(0,n.jsx)("option",{value:e,children:p.uJ[e].A_NAME},e)}))})}),(0,n.jsxs)(v.ContentsBar,{children:[(0,n.jsx)(v.Select,{value:S,setValue:C,children:Object.entries(p.OO).reverse().map((function(e){var t=(0,o.Z)(e,2),r=t[0],a=t[1];return(0,n.jsx)("option",{value:r,children:a||"\uc9c0\uc5ed \uc804\uccb4"},r)}))}),(0,n.jsx)(v.Select,{value:A,setValue:I,children:Object.entries(p.UU).reverse().map((function(e){var t=(0,o.Z)(e,2),r=t[0],a=t[1];return(0,n.jsx)("option",{value:r,children:a||"\uc2dc\uc7a5 \uc804\uccb4"},r)}))}),(0,n.jsxs)(v.Button,{onClick:function(){window.ReactNativeWebView.postMessage(JSON.stringify({type:b}))},children:[(0,n.jsx)("i",{className:"xi-my-location"}),(0,n.jsx)("span",{className:"ir",children:"\ub0b4\uc704\uce58"})]})]}),(0,n.jsx)(v.ContentsBar,{children:(0,n.jsx)(v.Title,{as:"h2",children:P()?"".concat(U(String(O[O.length-1]||"0")||"0"),"\uc6d0 - ").concat(y," ").concat(null===a||void 0===a?void 0:a.name," \ubb3c\uac00"):"\ub4f1\ub85d\ub41c \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})}),(0,n.jsx)(v.ContentsBar,{noPadding:!0,show:P(),children:(0,n.jsx)(v.Chart,{setChart:j})}),(0,n.jsx)(v.ContentsBar,{show:P(),children:(0,n.jsx)(v.Title,{as:"h2",children:"2020\ub144 \uc774\ub9d8\ub54c\uc758 \uac00\uaca9"})}),(0,n.jsx)(v.InfoNav,{nav_info:d})]})};j.getInitialProps=function(){var e=(0,s.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{layout:v.LayoutCode.Info,transition:"slide"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var x=j},3144:function(e){"use strict";var t=self.fetch.bind(self);e.exports=t,e.exports.default=e.exports},7777:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info",function(){return r(1374)}])},7563:function(e,t,r){"use strict";const n=r(610),o=r(4020),a=r(500),c=r(2806),s=Symbol("encodeFragmentIdentifier");function i(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function u(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function l(e,t){return t.decode?o(e):e}function f(e){return Array.isArray(e)?e.sort():"object"===typeof e?f(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function p(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function d(e){const t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function y(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){i((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"===typeof r&&r.includes(e.arrayFormatSeparator),a="string"===typeof r&&!o&&l(r,e).includes(e.arrayFormatSeparator);r=a?l(r,e):r;const c=o||a?r.split(e.arrayFormatSeparator).map((t=>l(t,e))):null===r?r:l(r,e);n[t]=c};case"bracket-separator":return(t,r,n)=>{const o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o)return void(n[t]=r?l(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>l(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!==typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,c]=a(t.decode?o.replace(/\+/g," "):o,"=");c=void 0===c?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?c:l(c,t),r(l(e,t),c,n)}for(const o of Object.keys(n)){const e=n[o];if("object"===typeof e&&null!==e)for(const r of Object.keys(e))e[r]=y(e[r],t);else n[o]=y(e,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=f(r):e[t]=r,e}),Object.create(null))}t.extract=d,t.parse=m,t.stringify=(e,t)=>{if(!e)return"";i((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>{return t.skipNull&&(null===(n=e[r])||void 0===n)||t.skipEmptyString&&""===e[r];var n},n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),"[",o,"]"].join("")]:[...r,[u(t,e),"[",u(o,e),"]=",u(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),"[]"].join("")]:[...r,[u(t,e),"[]=",u(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[u(r,e),t,u(o,e)].join("")]:[[n,u(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,u(t,e)]:[...r,[u(t,e),"=",u(n,e)].join("")]}}(t),o={};for(const c of Object.keys(e))r(c)||(o[c]=e[c]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?u(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?u(r,t)+"[]":o.reduce(n(r),[]).join("&"):u(r,t)+"="+u(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:m(d(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:l(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[s]:!0},r);const n=p(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),c=Object.assign(a,e.query);let i=t.stringify(c,r);i&&(i=`?${i}`);let l=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(l=`#${r[s]?u(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${i}${l}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[s]:!1},n);const{url:o,query:a,fragmentIdentifier:i}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:c(a,r),fragmentIdentifier:i},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},500:function(e){"use strict";e.exports=(e,t)=>{if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}},function(e){e.O(0,[774,888,179],(function(){return t=7777,e(e.s=t);var t}));var t=e.O();_N_E=t}]);