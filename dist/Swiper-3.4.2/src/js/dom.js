var Dom7=function(){var t=function(t){var e=this,n=0;for(n=0;n<t.length;n++)e[n]=t[n];return e.length=t.length,this},e=function(e,n){var i=[],r=0;if(e&&!n&&e instanceof t)return e;if(e)if("string"==typeof e){var s,o,h=e.trim();if(h.indexOf("<")>=0&&h.indexOf(">")>=0){var l="div";for(0===h.indexOf("<li")&&(l="ul"),0===h.indexOf("<tr")&&(l="tbody"),0!==h.indexOf("<td")&&0!==h.indexOf("<th")||(l="tr"),0===h.indexOf("<tbody")&&(l="table"),0===h.indexOf("<option")&&(l="select"),(o=document.createElement(l)).innerHTML=e,r=0;r<o.childNodes.length;r++)i.push(o.childNodes[r])}else for(s=n||"#"!==e[0]||e.match(/[ .<>:~]/)?(n||document).querySelectorAll(e):[document.getElementById(e.split("#")[1])],r=0;r<s.length;r++)s[r]&&i.push(s[r])}else if(e.nodeType||e===window||e===document)i.push(e);else if(e.length>0&&e[0].nodeType)for(r=0;r<e.length;r++)i.push(e[r]);return new t(i)};return t.prototype={addClass:function(t){if(void 0===t)return this;for(var e=t.split(" "),n=0;n<e.length;n++)for(var i=0;i<this.length;i++)this[i].classList.add(e[n]);return this},removeClass:function(t){for(var e=t.split(" "),n=0;n<e.length;n++)for(var i=0;i<this.length;i++)this[i].classList.remove(e[n]);return this},hasClass:function(t){return!!this[0]&&this[0].classList.contains(t)},toggleClass:function(t){for(var e=t.split(" "),n=0;n<e.length;n++)for(var i=0;i<this.length;i++)this[i].classList.toggle(e[n]);return this},attr:function(t,e){if(1===arguments.length&&"string"==typeof t)return this[0]?this[0].getAttribute(t):void 0;for(var n=0;n<this.length;n++)if(2===arguments.length)this[n].setAttribute(t,e);else for(var i in t)this[n][i]=t[i],this[n].setAttribute(i,t[i]);return this},removeAttr:function(t){for(var e=0;e<this.length;e++)this[e].removeAttribute(t);return this},data:function(t,e){if(void 0!==e){for(var n=0;n<this.length;n++){var i=this[n];i.dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[t]=e}return this}if(this[0]){var r=this[0].getAttribute("data-"+t);return r||(this[0].dom7ElementDataStorage&&t in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[t]:void 0)}},transform:function(t){for(var e=0;e<this.length;e++){var n=this[e].style;n.webkitTransform=n.MsTransform=n.msTransform=n.MozTransform=n.OTransform=n.transform=t}return this},transition:function(t){"string"!=typeof t&&(t+="ms");for(var e=0;e<this.length;e++){var n=this[e].style;n.webkitTransitionDuration=n.MsTransitionDuration=n.msTransitionDuration=n.MozTransitionDuration=n.OTransitionDuration=n.transitionDuration=t}return this},on:function(t,n,i,r){function s(t){var r=t.target;if(e(r).is(n))i.call(r,t);else for(var s=e(r).parents(),o=0;o<s.length;o++)e(s[o]).is(n)&&i.call(s[o],t)}var o,h,l=t.split(" ");for(o=0;o<this.length;o++)if("function"==typeof n||!1===n)for("function"==typeof n&&(i=arguments[1],r=arguments[2]||!1),h=0;h<l.length;h++)this[o].addEventListener(l[h],i,r);else for(h=0;h<l.length;h++)this[o].dom7LiveListeners||(this[o].dom7LiveListeners=[]),this[o].dom7LiveListeners.push({listener:i,liveListener:s}),this[o].addEventListener(l[h],s,r);return this},off:function(t,e,n,i){for(var r=t.split(" "),s=0;s<r.length;s++)for(var o=0;o<this.length;o++)if("function"==typeof e||!1===e)"function"==typeof e&&(n=arguments[1],i=arguments[2]||!1),this[o].removeEventListener(r[s],n,i);else if(this[o].dom7LiveListeners)for(var h=0;h<this[o].dom7LiveListeners.length;h++)this[o].dom7LiveListeners[h].listener===n&&this[o].removeEventListener(r[s],this[o].dom7LiveListeners[h].liveListener,i);return this},once:function(t,e,n,i){function r(o){n(o),s.off(t,e,r,i)}var s=this;"function"==typeof e&&(e=!1,n=arguments[1],i=arguments[2]),s.on(t,e,r,i)},trigger:function(t,e){for(var n=0;n<this.length;n++){var i;try{i=new window.CustomEvent(t,{detail:e,bubbles:!0,cancelable:!0})}catch(n){(i=document.createEvent("Event")).initEvent(t,!0,!0),i.detail=e}this[n].dispatchEvent(i)}return this},transitionEnd:function(t){function e(s){if(s.target===this)for(t.call(this,s),n=0;n<i.length;n++)r.off(i[n],e)}var n,i=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(t)for(n=0;n<i.length;n++)r.on(i[n],e);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(t){return this.length>0?t?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(t){return this.length>0?t?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var t=this[0],e=t.getBoundingClientRect(),n=document.body,i=t.clientTop||n.clientTop||0,r=t.clientLeft||n.clientLeft||0,s=window.pageYOffset||t.scrollTop,o=window.pageXOffset||t.scrollLeft;return{top:e.top+s-i,left:e.left+o-r}}return null},css:function(t,e){var n;if(1===arguments.length){if("string"!=typeof t){for(n=0;n<this.length;n++)for(var i in t)this[n].style[i]=t[i];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(t)}if(2===arguments.length&&"string"==typeof t){for(n=0;n<this.length;n++)this[n].style[t]=e;return this}return this},each:function(t){for(var e=0;e<this.length;e++)t.call(this[e],e,this[e]);return this},html:function(t){if(void 0===t)return this[0]?this[0].innerHTML:void 0;for(var e=0;e<this.length;e++)this[e].innerHTML=t;return this},text:function(t){if(void 0===t)return this[0]?this[0].textContent.trim():null;for(var e=0;e<this.length;e++)this[e].textContent=t;return this},is:function(n){if(!this[0])return!1;var i,r;if("string"==typeof n){var s=this[0];if(s===document)return n===document;if(s===window)return n===window;if(s.matches)return s.matches(n);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(n);if(s.mozMatchesSelector)return s.mozMatchesSelector(n);if(s.msMatchesSelector)return s.msMatchesSelector(n);for(i=e(n),r=0;r<i.length;r++)if(i[r]===this[0])return!0;return!1}if(n===document)return this[0]===document;if(n===window)return this[0]===window;if(n.nodeType||n instanceof t){for(i=n.nodeType?[n]:n,r=0;r<i.length;r++)if(i[r]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var t=this[0],e=0;null!==(t=t.previousSibling);)1===t.nodeType&&e++;return e}},eq:function(e){if(void 0===e)return this;var n,i=this.length;return e>i-1?new t([]):e<0?(n=i+e,new t(n<0?[]:[this[n]])):new t([this[e]])},append:function(e){var n,i;for(n=0;n<this.length;n++)if("string"==typeof e){var r=document.createElement("div");for(r.innerHTML=e;r.firstChild;)this[n].appendChild(r.firstChild)}else if(e instanceof t)for(i=0;i<e.length;i++)this[n].appendChild(e[i]);else this[n].appendChild(e);return this},prepend:function(e){var n,i;for(n=0;n<this.length;n++)if("string"==typeof e){var r=document.createElement("div");for(r.innerHTML=e,i=r.childNodes.length-1;i>=0;i--)this[n].insertBefore(r.childNodes[i],this[n].childNodes[0])}else if(e instanceof t)for(i=0;i<e.length;i++)this[n].insertBefore(e[i],this[n].childNodes[0]);else this[n].insertBefore(e,this[n].childNodes[0]);return this},insertBefore:function(t){for(var n=e(t),i=0;i<this.length;i++)if(1===n.length)n[0].parentNode.insertBefore(this[i],n[0]);else if(n.length>1)for(var r=0;r<n.length;r++)n[r].parentNode.insertBefore(this[i].cloneNode(!0),n[r])},insertAfter:function(t){for(var n=e(t),i=0;i<this.length;i++)if(1===n.length)n[0].parentNode.insertBefore(this[i],n[0].nextSibling);else if(n.length>1)for(var r=0;r<n.length;r++)n[r].parentNode.insertBefore(this[i].cloneNode(!0),n[r].nextSibling)},next:function(n){return new t(this.length>0?n?this[0].nextElementSibling&&e(this[0].nextElementSibling).is(n)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(n){var i=[],r=this[0];if(!r)return new t([]);for(;r.nextElementSibling;){var s=r.nextElementSibling;n?e(s).is(n)&&i.push(s):i.push(s),r=s}return new t(i)},prev:function(n){return new t(this.length>0?n?this[0].previousElementSibling&&e(this[0].previousElementSibling).is(n)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(n){var i=[],r=this[0];if(!r)return new t([]);for(;r.previousElementSibling;){var s=r.previousElementSibling;n?e(s).is(n)&&i.push(s):i.push(s),r=s}return new t(i)},parent:function(t){for(var n=[],i=0;i<this.length;i++)t?e(this[i].parentNode).is(t)&&n.push(this[i].parentNode):n.push(this[i].parentNode);return e(e.unique(n))},parents:function(t){for(var n=[],i=0;i<this.length;i++)for(var r=this[i].parentNode;r;)t?e(r).is(t)&&n.push(r):n.push(r),r=r.parentNode;return e(e.unique(n))},find:function(e){for(var n=[],i=0;i<this.length;i++)for(var r=this[i].querySelectorAll(e),s=0;s<r.length;s++)n.push(r[s]);return new t(n)},children:function(n){for(var i=[],r=0;r<this.length;r++)for(var s=this[r].childNodes,o=0;o<s.length;o++)n?1===s[o].nodeType&&e(s[o]).is(n)&&i.push(s[o]):1===s[o].nodeType&&i.push(s[o]);return new t(e.unique(i))},remove:function(){for(var t=0;t<this.length;t++)this[t].parentNode&&this[t].parentNode.removeChild(this[t]);return this},add:function(){var t,n,i=this;for(t=0;t<arguments.length;t++){var r=e(arguments[t]);for(n=0;n<r.length;n++)i[i.length]=r[n],i.length++}return i}},e.fn=t.prototype,e.unique=function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e},e}();