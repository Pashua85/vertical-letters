(this.webpackJsonpvertical=this.webpackJsonpvertical||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(5),o=n.n(r),u=(n(12),n(3)),l=n(6),s=(n(13),function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(c.useRef)(null),s=function(e){/^[A-Za-z\u0410-\u042f\u0430-\u044f]/.test(e.key)&&1===e.key.length?r((function(t){return[].concat(Object(u.a)(t),[e.key])})):"Backspace"===e.key&&r((function(e){return Object(u.a)(e).slice(0,e.length-1)}))};return Object(c.useEffect)((function(){return document.addEventListener("keydown",s),function(){document.removeEventListener("keydown",s)}}),[]),Object(c.useEffect)((function(){var e;null!==o&&(null===(e=o.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))})),a.a.createElement("div",{className:"app"},a.a.createElement("p",{className:"word-line"},n.map((function(e){return a.a.createElement("span",{className:"letter"},e)}))),a.a.createElement("div",{className:"cursor",ref:o}))});o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.65fef3d5.chunk.js.map