(this.webpackJsonpenfo=this.webpackJsonpenfo||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(3),c=t.n(l),o=(t(9),t(1)),s=(t(10),function(e){return r.a.createElement("button",{className:"number",style:{backgroundColor:m[e.status]},onClick:function(){return e.onClick(e.number,e.status)}},e.number)}),i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"number",style:{backgroundColor:m.available}},r.a.createElement("p",{className:"infoText"},"Ledig")),r.a.createElement("div",{className:"number",style:{backgroundColor:m.selected}},r.a.createElement("p",{className:"infoText"},"Vald")),r.a.createElement("div",{className:"number",style:{backgroundColor:m.used}},r.a.createElement("p",{className:"infoText"},"Bokad")))},u=function(e){return r.a.createElement("button",{className:"save",onClick:function(){return e.onClick()}},"Boka platser")},m={available:"lightgreen",used:"lightcoral",selected:"yellow"},d={range:function(e,n){return Array.from({length:n-e+1},(function(n,t){return e+t}))}},f=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],l=n[1],c=Object(a.useState)([]),m=Object(o.a)(c,2),f=m[0],b=m[1],v=function(e){return f.includes(e)?"used":t.includes(e)?"selected":"available"},g=function(e,n){if("used"!==n){var a="available"===n?t.concat(e):t.filter((function(n){return n!==e}));l(a),console.log(t.length)}};return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"help"},"Bioduk"),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"right"},d.range(1,25).map((function(e){return r.a.createElement(s,{key:e,number:e,status:v(e),onClick:g})}))),r.a.createElement("div",{className:"saveBtn"},r.a.createElement(u,{onClick:function(){b(t)}}),r.a.createElement(i,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.9af0dda3.chunk.js.map