"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[958],{6856:function(t,n,e){e.d(n,{BB4:function(){return u}});var r=e(9983);function u(t){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}}]})(t)}},7425:function(t,n,e){e.d(n,{GnT:function(){return u}});var r=e(9983);function u(t){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"}}]}]})(t)}},6916:function(t,n,e){e.d(n,{P1:function(){return c}});var r="NOT_FOUND";var u=function(t,n){return t===n};function o(t,n){var e="object"===typeof n?n:{equalityCheck:n},o=e.equalityCheck,i=void 0===o?u:o,a=e.maxSize,c=void 0===a?1:a,f=e.resultEqualityCheck,l=function(t){return function(n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var r=n.length,u=0;u<r;u++)if(!t(n[u],e[u]))return!1;return!0}}(i),v=1===c?function(t){var n;return{get:function(e){return n&&t(n.key,e)?n.value:r},put:function(t,e){n={key:t,value:e}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(t,n){var e=[];function u(t){var u=e.findIndex((function(e){return n(t,e.key)}));if(u>-1){var o=e[u];return u>0&&(e.splice(u,1),e.unshift(o)),o.value}return r}return{get:u,put:function(n,o){u(n)===r&&(e.unshift({key:n,value:o}),e.length>t&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(c,l);function p(){var n=v.get(arguments);if(n===r){if(n=t.apply(null,arguments),f){var e=v.getEntries(),u=e.find((function(t){return f(t.value,n)}));u&&(n=u.value)}v.put(arguments,n)}return n}return p.clearCache=function(){return v.clear()},p}function i(t){var n=Array.isArray(t[0])?t[0]:t;if(!n.every((function(t){return"function"===typeof t}))){var e=n.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return n}function a(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var u=function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];var o,a=0,c={memoizeOptions:void 0},f=r.pop();if("object"===typeof f&&(c=f,f=r.pop()),"function"!==typeof f)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var l=c,v=l.memoizeOptions,p=void 0===v?e:v,h=Array.isArray(p)?p:[p],s=i(r),y=t.apply(void 0,[function(){return a++,f.apply(null,arguments)}].concat(h)),d=t((function(){for(var t=[],n=s.length,e=0;e<n;e++)t.push(s[e].apply(null,arguments));return o=y.apply(null,t)}));return Object.assign(d,{resultFunc:f,memoizedResultFunc:y,dependencies:s,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),d};return u}var c=a(o)}}]);
//# sourceMappingURL=958.2e11d4ae.chunk.js.map