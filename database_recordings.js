!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}({1:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},11:function(e,t,n){e.exports=function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){if(o)return o(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,(function(e){return i(t[a][1][e]||e)}),c,c.exports,e,t,n,r)}return n[a].exports}for(var o=!1,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={width:"100%",height:"100%"},a=function(e){return Number(e)==Number(e)},s="classList"in document.documentElement?function(e,t){e.classList.add(t)}:function(e,t){var n=e.getAttribute("class")||"";e.setAttribute("class",n+" "+t)},l=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config={},this._lastRepaint=null,this._maxElementHeight=e.getMaxBrowserHeight(),this.refresh(t,n);var i=this._config;!function e(){var t=r._getScrollPosition(),n=r._lastRepaint;if(r._renderAnimationFrame=window.requestAnimationFrame(e),t!==n){var o=n?t-n:0;if(!n||o<0||o>r._averageHeight){var a=r._renderChunk();r._lastRepaint=t,!1!==a&&"function"==typeof i.afterRender&&i.afterRender()}}}()}return r(e,null,[{key:"create",value:function(t,n){return new e(t,n)}},{key:"mergeStyle",value:function(e,t){for(var n in t)e.style[n]!==t[n]&&(e.style[n]=t[n])}},{key:"getMaxBrowserHeight",value:function(){var t=document.createElement("div"),n=document.createElement("div");e.mergeStyle(t,{position:"absolute",height:"1px",opacity:0}),e.mergeStyle(n,{height:"1e7px"}),t.appendChild(n),document.body.appendChild(t);var r=n.offsetHeight;return document.body.removeChild(t),r}}]),r(e,[{key:"destroy",value:function(){window.cancelAnimationFrame(this._renderAnimationFrame)}},{key:"refresh",value:function(t,n){var r;if(Object.assign(this._config,o,n),!t||1!==t.nodeType)throw new Error("HyperList requires a valid DOM Node container");this._element=t;var s=this._config,l=this._scroller||s.scroller||document.createElement(s.scrollerTagName||"tr");if("boolean"!=typeof s.useFragment&&(this._config.useFragment=!0),!s.generate)throw new Error("Missing required `generate` function");if(!a(s.total))throw new Error("Invalid required `total` value, expected number");if(!Array.isArray(s.itemHeight)&&!a(s.itemHeight))throw new Error("\n        Invalid required `itemHeight` value, expected number or array\n      ".trim());a(s.itemHeight)?this._itemHeights=Array(s.total).fill(s.itemHeight):this._itemHeights=s.itemHeight,Object.keys(o).filter((function(e){return e in s})).forEach((function(e){var t=s[e],n=a(t);if(t&&"string"!=typeof t&&"number"!=typeof t)throw new Error("Invalid optional `"+e+"`, expected string or number");n&&(s[e]=t+"px")}));var c=Boolean(s.horizontal),u=s[c?"width":"height"];if(u){var d=a(u),h=!d&&"%"===u.slice(-1),f=d?u:parseInt(u.replace(/px|%/,""),10),v=window[c?"innerWidth":"innerHeight"];this._containerSize=h?v*f/100:a(u)?u:f}var m=s.scrollContainer,p=s.itemHeight*s.total,g=this._maxElementHeight;p>g&&console.warn(["HyperList: The maximum element height",g+"px has","been exceeded; please reduce your item height."].join(" "));var y={width:""+s.width,height:m?p+"px":""+s.height,overflow:m?"none":"auto",position:"relative"};e.mergeStyle(t,y),m&&e.mergeStyle(s.scrollContainer,{overflow:"auto"});var b=(i(r={opacity:"0",position:"absolute"},c?"height":"width","1px"),i(r,c?"width":"height",p+"px"),r);e.mergeStyle(l,b),this._scroller||t.appendChild(l);var w=this._computeScrollPadding();this._scrollPaddingBottom=w.bottom,this._scrollPaddingTop=w.top,this._scroller=l,this._scrollHeight=this._computeScrollHeight(),this._itemPositions=this._itemPositions||Array(s.total).fill(0),this._computePositions(0),this._renderChunk(null!==this._lastRepaint),"function"==typeof s.afterRender&&s.afterRender()}},{key:"_getRow",value:function(t){var n=this._config,r=n.generate(t),o=r.height;if(void 0!==o&&a(o)?(r=r.element,o!==this._itemHeights[t]&&(this._itemHeights[t]=o,this._computePositions(t),this._scrollHeight=this._computeScrollHeight(t))):o=this._itemHeights[t],!r||1!==r.nodeType)throw new Error("Generator did not return a DOM Node for index: "+t);s(r,n.rowClassName||"vrow");var l=this._itemPositions[t]+this._scrollPaddingTop;return e.mergeStyle(r,i({position:"absolute"},n.horizontal?"left":"top",l+"px")),r}},{key:"_getScrollPosition",value:function(){var e=this._config;return"function"==typeof e.overrideScrollPosition?e.overrideScrollPosition():this._element[e.horizontal?"scrollLeft":"scrollTop"]}},{key:"_renderChunk",value:function(e){var t=this._config,n=this._element,r=this._getScrollPosition(),i=t.total,o=t.reverse?this._getReverseFrom(r):this._getFrom(r)-1;if((o<0||o-this._screenItemsLen<0)&&(o=0),!e&&this._lastFrom===o)return!1;this._lastFrom=o;var a=o+this._cachedItemsLen;(a>i||a+this._cachedItemsLen>i)&&(a=i);var s=t.useFragment?document.createDocumentFragment():[],l=this._scroller;s[t.useFragment?"appendChild":"push"](l);for(var c=o;c<a;c++){var u=this._getRow(c);s[t.useFragment?"appendChild":"push"](u)}if(t.applyPatch)return t.applyPatch(n,s);n.innerHTML="",n.appendChild(s)}},{key:"_computePositions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this._config,n=t.total,r=t.reverse;e<1&&!r&&(e=1);for(var i=e;i<n;i++)r?0===i?this._itemPositions[0]=this._scrollHeight-this._itemHeights[0]:this._itemPositions[i]=this._itemPositions[i-1]-this._itemHeights[i]:this._itemPositions[i]=this._itemHeights[i-1]+this._itemPositions[i-1]}},{key:"_computeScrollHeight",value:function(){var t,n=this,r=this._config,o=Boolean(r.horizontal),a=r.total,s=this._itemHeights.reduce((function(e,t){return e+t}),0)+this._scrollPaddingBottom+this._scrollPaddingTop;e.mergeStyle(this._scroller,(i(t={opacity:0,position:"absolute",top:"0px"},o?"height":"width","1px"),i(t,o?"width":"height",s+"px"),t));var l=this._itemHeights.slice(0).sort((function(e,t){return e-t})),c=Math.floor(a/2),u=a%2==0?(l[c]+l[c-1])/2:l[c],d=o?"clientWidth":"clientHeight",h=r.scrollContainer?r.scrollContainer:this._element,f=h[d]?h[d]:this._containerSize;return this._screenItemsLen=Math.ceil(f/u),this._containerSize=f,this._cachedItemsLen=Math.max(this._cachedItemsLen||0,3*this._screenItemsLen),this._averageHeight=u,r.reverse&&window.requestAnimationFrame((function(){o?n._element.scrollLeft=s:n._element.scrollTop=s})),s}},{key:"_computeScrollPadding",value:function(){var e=this._config,t=Boolean(e.horizontal),n=e.reverse,r=window.getComputedStyle(this._element),i=function(e){var t=r.getPropertyValue("padding-"+e);return parseInt(t,10)||0};return t&&n?{bottom:i("left"),top:i("right")}:t?{bottom:i("right"),top:i("left")}:n?{bottom:i("top"),top:i("bottom")}:{bottom:i("bottom"),top:i("top")}}},{key:"_getFrom",value:function(e){for(var t=0;this._itemPositions[t]<e;)t++;return t}},{key:"_getReverseFrom",value:function(e){for(var t=this._config.total-1;t>0&&this._itemPositions[t]<e+this._containerSize;)t--;return t}}]),e}();n.default=l,t.exports=n.default},{}]},{},[1])(1)},12:function(e,t,n){(function(n){var r,i,o;i=[],void 0===(o="function"==typeof(r=function(){"use strict";function t(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){s(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(e,n,a){var s=o.URL||o.webkitURL,l=document.createElement("a");n=n||e.name||"download",l.download=n,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):r(l.href)?t(e,n,a):i(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,o){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,o),n);else if(r(e))t(e,n,o);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){i(a)}))}}:function(e,n,r,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,r);var s="application/octet-stream"===e.type,l=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||s&&l||a)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},u.readAsDataURL(e)}else{var d=o.URL||o.webkitURL,h=d.createObjectURL(e);i?i.location=h:location.href=h,i=null,setTimeout((function(){d.revokeObjectURL(h)}),4e4)}});o.saveAs=s.saveAs=s,e.exports=s})?r.apply(t,i):r)||(e.exports=o)}).call(this,n(1))},19:function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r),o=n(12);function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=c(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function s(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,i)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){f(o,r,i,a,s,"next",e)}function s(e){f(o,r,i,a,s,"throw",e)}a(void 0)}))}}FCBH.docReady(v(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new m,e.next=3,t.init();case 3:case"end":return e.stop()}}),e)}))));var m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,"fuseOptions",{shouldSort:!0,threshold:0,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["lang_name","country"]}),h(this,"results",[]),h(this,"fuse",null),h(this,"searchText",""),h(this,"filter","All"),h(this,"sort","language desc"),h(this,"viewDate",!0),h(this,"bibleRecordingsFile","bible_recordings")}var t,n,r,c,u;return t=e,(n=[{key:"init",value:(u=v(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.createSearchListener(),this.avoidForm(),this.processFiltering(),this.processCheckbox(),e.next=6,this.fetchDatabase();case 6:this.results=e.sent,this.initializeResultList(this.results),this.fuse=this.createSearcher(this.results),this.appendSorting(),this.searchSortFilterAndRender(this.results),this.createDownloadListener();case 12:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"fetchDatabase",value:(c=v(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href.toLowerCase().includes("bible-brain-available-content")?"biblebrain_content":this.bibleRecordingsFile,e.next=3,FCBH.axiosInstance.get("".concat(FCBH.BASE_URL,"resources/").concat(t,".json"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"createSearcher",value:function(e){return new Fuse(e,this.fuseOptions)}},{key:"search",value:function(e){return this.fuse.search(e)}},{key:"mapSearchToResults",value:function(e){return e.map((function(e){return e.item}))}},{key:"applyFilter",value:function(e,t){return"All"===e?t:t.filter((function(t){switch(e){case"Video":return t.video_date&&"NULL"!==t.video_date;case"Text":return t.text_date&&"NULL"!==t.text_date;case"Audio":return t.audio_date&&"NULL"!==t.audio_date;default:return!1}}))}},{key:"sorting",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!this.sort)return e;var t=this.sort.split(" "),n=l(t,2),r=n[0],i=n[1],o=this.columnToKey(r),a=e.filter((function(e){return!e[o]||"NULL"===e[o]})),c=e.filter((function(e){return e[o]&&"NULL"!==e[o]})).sort((function(e,t){return"desc"===i?e[o]>t[o]?1:-1:e[o]>t[o]?-1:1}));return[].concat(s(c),s(a))}},{key:"columnToKey",value:function(e){var t,n={language:"lang_name",country:"country",video:"video_date",text:"text_date",audio:"audio_date",iso:"iso"};return null!==(t=n[e])&&void 0!==t?t:n.language}},{key:"createSearchListener",value:function(){var e=this;document.querySelector("#Search").addEventListener("keyup",(function(t){e.searchText=t.target.value,e.searchSortFilterAndRender()}))}},{key:"avoidForm",value:function(){document.querySelector("#wf-form-MP3-Downloads").addEventListener("submit",(function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}))}},{key:"processFiltering",value:function(){for(var e=this,t=document.querySelector("#format > div > div"),n=document.querySelector("#format nav");null==n?void 0:n.lastChild;)n.removeChild(n.lastChild);var r=["All","Audio","Video","Text"].map((function(n){var r=document.createElement("a");r.href="#",r.classList.add("dropdown-link","w-dropdown-link"),r.textContent=n,r.setAttribute("data-value",n);var i=function(){t.textContent=r.getAttribute("data-value"),t.dispatchEvent(new MouseEvent("mouseup",{view:window,bubbles:!0,cancelable:!1})),t.dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1})),e.filter=r.getAttribute("data-value"),e.searchSortFilterAndRender()};return r.addEventListener("touchstart",i),r.addEventListener("click",i),r}));n.append.apply(n,s(r)),t.textContent="All"}},{key:"processCheckbox",value:function(){var e=this,t=document.querySelector(".recordings-database__date-toggle .modal-window");t.addEventListener("click",(function(e){e.path.includes(t.querySelector(".modal__close"))&&document.querySelector(".modal-overlay").dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1})),e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}));var n=document.querySelector("input[name='View-Date']");n.checked=!0,n.addEventListener("change",(function(){e.viewDate=n.checked,document.querySelectorAll('div[data-attr="dateNode"]').forEach((function(e){e.querySelector("span").style.display=n.checked?"inline":"none",e.querySelector("div").style.display=n.checked?"none":"block"}))}))}},{key:"searchSortFilterAndRender",value:function(){if(this.searchText){var e=this.sorting(this.applyFilter(this.filter,this.mapSearchToResults(this.search(this.searchText))));this.renderList(e)}else this.renderList(this.sorting(this.applyFilter(this.filter,this.results)))}},{key:"initializeResultList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];for(this.renderContainer=document.querySelector(".default-width-container.db-container");this.renderContainer.lastChild;)this.renderContainer.removeChild(this.renderContainer.lastChild);this.list=i.a.create(this.renderContainer,{itemHeight:100,total:e.length,generate:function(e){var t=document.createElement("div");return t.innerHTML="ITEM ".concat(e+1),t}})}},{key:"getNodeHeight",value:function(e){var t,n=e.cloneNode(!0);return n.style.cssText="position:fixed; top:-9999px; opacity:0;",document.body.appendChild(n),t=n.clientHeight,n.parentNode.removeChild(n),t}},{key:"renderList",value:function(e){var t=this;this.renderContainer.style.minHeight="800px";var n={itemHeight:100,total:e.length,generate:function(n){var r=document.createElement("div");return r.id="db-table-container",r.classList.add("w-layout-grid","recordings-db-grid"),r.style.width="100%",r.append.apply(r,s(t.createRow(e[n],n%2==0))),{element:r,height:t.getNodeHeight(r)}}};this.list.refresh(this.renderContainer,n)}},{key:"createRow",value:function(e,t){var n=this.createLanguageNode(e),r=this.createSimpleNode(e.country);r.classList.add("recordings-db-grid-text--country");var i=[n,r,this.createDateNode(e.audio_date),this.createDateNode(e.video_date),this.createDateNode(e.text_date),this.createSimpleNode(e.iso.toUpperCase())];return t||i.forEach((function(e){e.classList.add("recordings-db-grid-text--even")})),i}},{key:"createLanguageNode",value:function(e){var t=e.bible_id,n=e.lang_name,r=e.bible_name,i=e.country,o=document.createElement("a");o.href="https://live.bible.is/bible/"+t,o.target="_blank",o.title="".concat(n," | ").concat(r),o.textContent="".concat(n," "),o.classList.add("txt-sm","txt-sm--link","recordings-link");var a=this.makeTextNode(r);a.classList.add("language-version");var s=this.makeTextNode(i);s.classList.add("txt-bold","country-mobile");var l=this.makeContainer();return l.append(o,a,s),l}},{key:"createSimpleNode",value:function(e){var t=this.makeTextNode(e),n=this.makeContainer();return n.append(t),n}},{key:"createDateNode",value:function(e){var t=this.makeContainer();if(!e||"NULL"===e)return t;var n=this.makeTextNode(e);n.style.display=this.viewDate?"none":"block";var r=document.createElement("span");return r.innerHTML='\n    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t width="32px" height="32px" viewBox="0 0 78.369 78.369" style="enable-background:new 0 0 78.369 78.369;fill:#20b2aa"\n\t xml:space="preserve">\n      <g>\n        <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704\n          c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704\n          C78.477,17.894,78.477,18.586,78.049,19.015z"/>\n      </g>\n    </svg>\n',r.style.display=this.viewDate?"inline":"none",t.append(n,r),t.setAttribute("data-attr","dateNode"),t}},{key:"makeTextNode",value:function(e){var t=document.createElement("div");return t.classList.add("txt-xs"),t.textContent=e,t}},{key:"makeContainer",value:function(){var e=document.createElement("div");return e.classList.add("recordings-db-grid-text"),e}},{key:"appendSorting",value:function(){var e,t=this,n=document.querySelectorAll(".recordings-db-grid-title"),r=a(n);try{var i=function(){var r=e.value,i=r.querySelector("h5").textContent;"language"===i.toLowerCase()&&r.classList.add("recordings-db-grid-title--is-active"),r.addEventListener("click",(function(){t.onSortClicked(i,r,n)}))};for(r.s();!(e=r.n()).done;)i()}catch(e){r.e(e)}finally{r.f()}}},{key:"onSortClicked",value:function(e,t,n){var r="recordings-db-grid-title--is-active-toggle";t.classList.contains("recordings-db-grid-title--is-active")&&t.classList.toggle(r),t.classList.add("recordings-db-grid-title--is-active");var i,o=t.classList.contains(r)?"asc":"desc",s=a(n);try{for(s.s();!(i=s.n()).done;){var l=i.value;l!==t&&l.classList.remove("recordings-db-grid-title--is-active",r)}}catch(e){s.e(e)}finally{s.f()}this.sort="".concat(e.toLowerCase()," ").concat(o),this.searchSortFilterAndRender()}},{key:"createDownloadListener",value:function(){document.getElementById("recordingsDownload").addEventListener("click",this.downloadCSVFile.bind(this))}},{key:"downloadCSVFile",value:function(){var e="".concat(this.bibleRecordingsFile,".csv");Object(o.saveAs)("".concat(FCBH.BASE_URL,"resources/").concat(e),e)}}])&&d(t.prototype,n),r&&d(t,r),e}()}});
//# sourceMappingURL=database_recordings.js.map
// Version 1.5