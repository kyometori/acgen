!function(){var e,t={"./node_modules/@skyra/discord-components-core/dist/cjs sync recursive ^\\.\\/.*\\.entry\\.js$":function(e,t,n){var r={"./discord-action-row_20.cjs.entry.js":"./node_modules/@skyra/discord-components-core/dist/cjs/discord-action-row_20.cjs.entry.js"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="./node_modules/@skyra/discord-components-core/dist/cjs sync recursive ^\\.\\/.*\\.entry\\.js$"},"./src/index.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n("./node_modules/react-dom/index.js"),o=n.p+"831ed052ae4f6d565b1aca8df23f755b.png",l=n.p+"0584393bb5cec255e737789d3c8523d5.png",c=n.p+"d1d19a7b277f4c25fac277fe3c91852b.png",i=n.p+"8b886893fa0a272cdb5fd1677c3caa2c.png",u=n("./node_modules/@skyra/discord-components-react/dist/index.mjs"),s={sena_shiawase:o,sena_julietta:l,diep:c,chocomint:i};function d(e){return r.createElement(u.dZ,{style:{minHeight:"90px"},"light-theme":e.light,id:"renderer"},r.createElement(u.kK,{author:e.name,avatar:s[e.avatar],roleColor:e.color,timestamp:e.timestamp},r.createElement("div",null,"",e.content),r.createElement("div",null,/\.(bmp|jpe?g|png|gif|webp|tiff)$/i.test(e.attachment)?r.createElement(u.cS,{slot:"attachments",url:e.attachment,style:{maxWidth:"256px"},alt:"attachment"}):"")))}var m=n("./node_modules/react/index.js");function f(e){return m.createElement("fieldset",null,m.createElement("legend",null,"訊息內容"),m.createElement("input",{type:"text",value:e.content,onChange:function(t){e.onContentChange(t.target.value)},style:{width:"80vw",height:"30px"}}))}var h=n("./node_modules/react/index.js");function g(e){return h.createElement("fieldset",null,h.createElement("legend",null,"頭像"),h.createElement("select",{onChange:function(t){e.onAvatarChange(t.target.value)}},h.createElement("option",{value:"sena_julietta"},"聖奈——ジュリエッタ"),h.createElement("option",{value:"sena_shiawase"},"聖奈——幸せ。"),h.createElement("option",{value:"diep"},"Diep.io"),h.createElement("option",{value:"chocomint"},"chocomint")))}var p=n("./node_modules/react/index.js");function v(e){return p.createElement("fieldset",null,p.createElement("legend",null,"顏色"),p.createElement("input",{type:"color",value:e.default,onChange:function(t){e.onColorChange(t.target.value)}}))}var E=n("./node_modules/react/index.js");function y(e){return E.createElement("fieldset",null,E.createElement("legend",null,"時間點"),E.createElement("input",{type:"text",value:e.default,onChange:function(t){e.onTimeChange(t.target.value)}}))}var b=n("./node_modules/react/index.js");function C(e){return b.createElement("fieldset",{onChange:function(t){e.onCheckChange(t.target.checked)}},b.createElement("legend",null,"明亮背景"),b.createElement("input",{type:"checkbox",id:"box"}),b.createElement("label",{htmlFor:"box"},"開啟"))}var j=n("./node_modules/react/index.js");function x(e){return j.createElement("fieldset",null,j.createElement("legend",null,j.createElement("nobr",null,"附件圖片網址"),j.createElement("nobr",null,"（對，只能一張圖片，麻煩用副檔名結尾）")),j.createElement("input",{type:"text",value:e.url,onChange:function(t){e.onAttachmentChange(t.target.value)},style:{width:"80vw",height:"30px"}}))}var _=n("./node_modules/react/index.js");function S(e){return _.createElement("fieldset",null,_.createElement("legend",null,"名稱"),_.createElement("select",{onChange:function(t){e.onNameChange(t.target.value)}},_.createElement(O,{name:"AC0xRPFS001"}),_.createElement(O,{name:"chocomint"}),_.createElement(O,{name:"chocomint++"}),_.createElement(O,{name:"Stellar"}),_.createElement(O,{name:"Fluxline"}),_.createElement(O,{name:"Serenitas"})))}function O(e){var t=e.name;return _.createElement("option",{value:t},t)}var A=JSON.parse('{"k":["這是 AC 訊息產生器，你可以用它產生 AC 沒說過的話","我沒說過這句話","嗨，歡迎使用 AC 訊息產生器","你這變態是不是想拿這去做奇怪的事","如果你看到了這則訊息，有很大的機率不是我講的","我很賭爛終究有一天，人們會拿著一張 Discord 訊息截圖，上面有我的名字和頭像，但我根本沒說過這句話","在你眼前的是一個訊息產生器，你可以用它產生 AC0xRPFS001 沒說過的話到處傳讓他頭很痛","AC 訊息產生器，讓你可以快速、方便的生出一句 AC0xRPFS001 的發言"]}'),k=n("./node_modules/react/index.js");function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,c=[],i=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(){var e,t=new Date,n=w((0,r.useState)((e=A.k)[~~(Math.random()*e.length)]),2),a=n[0],o=n[1],l=w((0,r.useState)("AC0xRPFS001"),2),c=l[0],i=l[1],u=w((0,r.useState)("sena_julietta"),2),s=u[0],m=u[1],h=w((0,r.useState)("#657c89"),2),p=h[0],E=h[1],b=w((0,r.useState)("".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate())),2),j=b[0],_=b[1],O=w((0,r.useState)(!1),2),F=O[0],M=O[1],P=w((0,r.useState)([]),2),D=P[0],T=P[1];return k.createElement(k.Fragment,null,k.createElement("header",null,k.createElement("div",{id:"title"},"AC 訊息產生器"),k.createElement("a",{href:"https://github.com/kyometori/acgen"},"原始碼")),k.createElement("div",{id:"inputs"},k.createElement(C,{default:F,onCheckChange:function(e){M(e)}}),k.createElement(v,{default:p,onColorChange:function(e){E(e)}}),k.createElement(S,{default:c,onNameChange:function(e){i(e)}}),k.createElement(g,{default:s,onAvatarChange:function(e){m(e)}}),k.createElement(y,{default:j,onTimeChange:function(e){_(e)}}),k.createElement(x,{url:D,onAttachmentChange:function(e){T(e)}}),k.createElement(f,{content:a,onContentChange:function(e){o(e)}}),k.createElement(d,{name:c,content:a,avatar:s,color:p,timestamp:j,light:F,attachment:D})))}a.render(r.createElement(M,null),document.getElementById("root"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,a,o){if(!n){var l=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],o=e[s][2];for(var c=!0,i=0;i<n.length;i++)(!1&o||l>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(c=!1,o<l&&(l=o));if(c){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,a,o]},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="https://kyometori.github.io/acgen/",function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,l=n[0],c=n[1],i=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(i)var s=i(r)}for(t&&t(n);u<l.length;u++)o=l[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(s)},n=self.webpackChunkAC_Message_Generator=self.webpackChunkAC_Message_Generator||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[196],(function(){return r("./src/index.js")}));a=r.O(a)}();