(()=>{var e={311:()=>{var e,t=document.getElementById("answer"),n=document.getElementById("input"),o=[2,8,10,16,36],r=10,d=2;window.buttonClick=function(e,t){removeClass(t),addClass(t,e),"to"==t?r=e:d=e,output()},window.output=function(){e=(e=parseInt(n.value,r)).toString(d),t.innerHTML=e},window.removeClass=function(e){o.forEach((function(t){document.getElementById(e+t).classList.remove("checked")}))},window.addClass=function(e,t){document.getElementById(e+t).classList.add("checked")}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(311)})()})();