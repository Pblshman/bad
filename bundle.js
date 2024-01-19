(()=>{"use strict";var e={917:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=i},426:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(81),r=n.n(o),a=n(645),i=n.n(a),s=n(667),c=n.n(s),l=new URL(n(73),n.b),d=new URL(n(514),n.b),u=i()(r()),p=c()(l),f=c()(d);u.push([e.id,`@font-face {\n    font-family: 'Open Sans';\n    src:\n      url(${p}) format('truetype'),\n      url(${f}) format('truetype')\n  }\n  \n  .fontReg{\n    font-family: 'Open Sans';\n    font-weight: 400;\n  }\n\n  .fontSemBold{\n    font-family: 'Open Sans';\n    font-weight: 600;\n  }\n\n  p{\n    line-height: 3vh;\n  }`,""]);const h=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=r(f,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=o(e,r),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},73:(e,t,n)=>{e.exports=n.p+"b8cc747a58ffa52b7ff9.ttf"},514:(e,t,n)=>{e.exports=n.p+"c7ab78a511011d4e147e.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(917),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=n(426),y={};y.styleTagTransform=p(),y.setAttributes=c(),y.insert=i().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=d(),t()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;const g=function(e){const t=document.createElement("h1");return t.classList.add("fontSemBold"),t.textContent=e,t.style.textAlign="center",t},v=function(e){const t=document.createElement("p");return t.classList.add("fontReg"),t.textContent=e,t},b=function(){const e=document.createElement("div");return e.appendChild(function(){const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="10px",e.style.backgroundColor="#faf9f6",e.style.paddingTop="5vh",e.style.paddingLeft="10vw",e.style.paddingRight="10vw",e.appendChild(g("MR SANDMAN RESTAURANT")),e.appendChild(v("Welcome to Mr. Sandman Restaurant, an oasis of culinary delight in the heart of the city. Step into a world where flavors dance on your palate, and every dish is a masterpiece crafted with passion and precision.")),e.appendChild(v("At Mr. Sandman, we take pride in offering a menu that reflects the essence of both tradition and innovation. From the warm embrace of our hospitality to the carefully curated selection of dishes, each element is designed to transport you to a realm of exquisite dining.    ")),e.appendChild(v("Our culinary artisans blend the finest ingredients to create a symphony of tastes, where every bite tells a story of dedication and artistry. Whether you're savoring our sumptuous appetizers, indulging in mouthwatering main courses, or delighting in our decadent desserts, each dish is a celebration of culinary excellence.")),e.appendChild(v("Immerse yourself in the inviting ambiance of Mr. Sandman, where every detail is designed to enhance your dining experience. Whether it's a casual meal with friends, a romantic dinner, or a special celebration, Mr. Sandman Restaurant is your destination for memorable moments and unparalleled gastronomic adventure. Join us and let the magic of flavors unfold at Mr. Sandman Restaurant.    ")),e.appendChild(v("See you soon.")),e}()),e.id="cont1",e},C=function(e,t){const n=document.createElement("div");return n.classList.add("fontSemBold"),n.textContent=e,n},x=function(){const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="10px",e.style.paddingTop="5vh",e.style.paddingLeft="10vw",e.style.paddingRight="10vw",e.appendChild(g("OUR PRODUCTS")),e.appendChild(function(e){const t=document.createElement("h2");return t.classList.add("fontSemBold"),t.textContent=e,t}("DOG MEAT")),e.appendChild(v("Indulge in a culinary masterpiece at Mr. Sandman Restaurant with our signature dish, Prime Cuts Symphony. This exquisite creation showcases the richness and succulence of premium beef, carefully selected and expertly prepared to perfection.")),e.appendChild(v("Savor the melt-in-your-mouth tenderness of each meticulously chosen cut, grilled to your desired perfection. The dish is a harmonious blend of flavors, where the natural richness of the beef is enhanced by our special seasoning, creating a symphony for your taste buds.")),e.appendChild(v("See you soon.")),e},w=function(){const e=C("PRODUCT");return e.onclick=function(){document.getElementById("contentText").replaceChild(function(){const e=document.createElement("div");return e.appendChild(x()),e.id="cont2",e}(),document.getElementById("contentText").firstChild)},e},T=function(){const e=document.createElement("div");return e.appendChild(function(){const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="10px",e.style.paddingTop="5vh",e.style.paddingLeft="10vw",e.style.paddingRight="10vw",e.appendChild(v("Mr. Sandman Restaurant")),e.appendChild(v("123 Dream Avenue")),e.appendChild(v("Sandman City, NY 10001")),e.appendChild(v("United States")),e}()),e.id="cont3",e},E=function(){const e=document.createElement("div");return e.style.display="flex",e.style.gridRow="1 / 2",e.style.backgroundColor="#e8f9fd",e.style.justifyContent="center",e.style.gap="5vw",e.style.paddingTop="5vh",e.appendChild(function(){const e=C("HOME");return document.getElementById("contentText").replaceChild(b(),document.getElementById("contentText").firstChild),e.style.pointerEvents="none",e.onclick=function(){document.getElementById("contentText").replaceChild(b(),document.getElementById("contentText").firstChild),e.style.pointerEvents="none"},e}()),e.appendChild(w()),e.appendChild(function(){const e=C("CONTACT");return e.onclick=function(){document.getElementById("contentText").replaceChild(T(),document.getElementById("contentText").firstChild),e.style.pointerEvents="none",console.log("hey")},e}()),e};!function(){const e=document.getElementById("content");e.style.display="grid",e.style.width="100vw",e.style.height="100vh",e.style.gridTemplateRows="10vh",e.appendChild(E()),e.appendChild(function(e){const t=document.createElement("div");return t.id="contentText",t.style.display="flex",t.style.justifyContent="center",t.style.gridRow="2 / 3",t.style.backgroundColor="#faf9f6",t.appendChild(b()),t}())}()})()})();