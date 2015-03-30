/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function t(){var k,q,r,u;k=function(){var n;n=function(){function a(a,b){return Object.prototype.hasOwnProperty.call(a,b)}return{t:function(a,b){if(a===b)return!0;var f=!!b&&"function"===typeof b.valueOf;return!!a&&"function"===typeof a.valueOf&&f&&a.valueOf()===b.valueOf()},extend:function(a,b){Array.prototype.slice.call(arguments,1).forEach(function(f){for(var b=Object.keys(f),p=0,h=b.length;p<h;p++){var d=b[p],e=Object.getOwnPropertyDescriptor(f,d);void 0!==e&&e.enumerable&&Object.defineProperty(a,
d,e)}});return a},D:function(g,b){for(var f in g)a(g,f)&&b(f,g[f])},n:a,J:function(g,b){var f={},m;for(m in g)a(g,m)&&(f[m]=b(g[m],m,g));return f}}}();return function(a){return a}(function(a,g,b,f){return{d:a,e:g,b:b,l:f}}(function(a){function g(a){return a.filter(function(a,p,e){return e.lastIndexOf(a)===p})}function b(a,h){for(var d=a.length,e=-1,c=0;c<d;++c)if(h(a[c])){if(0<=e)throw Error("Multiple elements match the predicate.");e=c}return e}function f(a,h){return a&&"function"===typeof a.valueOf&&
h&&"function"===typeof h.valueOf?a.valueOf()<=h.valueOf()?a.valueOf()<h.valueOf()?-1:0:1:a<=h?a<h?-1:0:1}function m(a,h){var d=a.length,e=Array(d),c=Array(d),l;for(l=0;l<d;++l)e[l]=l,c[l]=a[l];l=a;a=c;c=l;e.sort(function(e,c){return h(a[e],a[c])||e-c});for(l=0;l<d;++l)c[l]=a[e[l]];return c}return{contains:function(a,h){return 0<=a.indexOf(h)},B:function(b){if(50<b.length){for(var h=b.length,d={},e,c=0;c<h;++c)if(e=b[c],"string"===typeof e)if(a.n(d,e))break;else d[e]=!0;else if(b.lastIndexOf(e)!==
c)break;if(!(c>=h)){for(var l=b.slice(0,c);c<h;++c)e=b[c],"string"===typeof e?a.n(d,e)||(d[e]=!0,l.push(e)):b.lastIndexOf(e)===c&&l.push(e);b=l}}else b=g(b);return b},C:function(a,b){return Array.prototype.concat.apply([],a.map(b))},M:function(a,h){var d=b(a,h);if(0>d)throw Error("None of the elements matches the predicate.");return a[d]},N:function(a,h){var d=b(a,h);return 0<=d?a[d]:null},O:function(a,b){var d=b||f;window.chrome?d=m(a,d):(a.sort(d),d=a);return d}}}(n),function(){function a(a){return function(){return a}}
return{W:a(!0),R:a(!1),T:a(void 0),U:a(null),X:a(0),v:a,H:function(a){return a}}}(),n,{w:function(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})},A:function(a){return a.replace(/-([a-z])/g,function(a){return a[1].toUpperCase()})},format:function(a){var g=arguments;return a.replace(/{(\d+)}/g,function(a,f){var m=parseInt(f,10)+1;return typeof g.length<=m?a:g[m]})}}))}();q=function(n){return function(a,g){return n.b.extend(a,{get stringifyable(){return g()}})}}(k);r=function(n,
a){function g(){return 0}function b(a,b){return"string"===typeof a&&"string"===typeof b?a.localeCompare(b):a<=b?a<b?-1:0:1}function f(a,b){n.b.extend(a,{get onResultOf(){return this.i},get reverse(){return this.reverse},get callable(){return this.h}},{get i(){return function(e){return m(e,a)}},get reverse(){return function(){return b||k(a)}},get h(){return a}})}function m(b,d){function e(a,e){return d(b(a),b(e))}f(e);a(e,function(){return{type:"by-function-comparator",G:b.stringifyable,u:d.stringifyable}});
return e}function k(b){function d(a,c){return-b(a,c)}f(d,b);a(d,function(){return{type:"reversed-comparator",u:b.stringifyable}});return d}f(b);a(b,function(){return{type:"natural-comparator"}});f(g);a(g,function(){return{type:"indifferent-comparator"}});return{I:g,K:b}}(k,q);u=function(k,a){function g(a){k.b.extend(a,{get callable(){return this.h}},{get h(){return a}})}return{q:function(b){function f(a){return a[b]}g(f);a(f,function(){return{type:"property-accessor",propertyName:b}});return f}}}(k,
q);k=function(k,a){function g(){return!0}function b(){return!1}function f(a,b){k.b.extend(a,{get and(){return this.g},get negate(){return this.p},get onResultOf(){return this.i},get or(){return this.j},get callable(){return this.h}},{get g(){return function(b){return m([a,b])}},get p(){return function(){return b||h(a)}},get i(){return function(b){return p(b,a)}},get j(){return function(b){return d([a,b])}},get h(){return a}})}function m(b){function c(a){for(var c=0,d=b.length;c<d;++c)if(!b[c](a))return!1;
return!0}if(!b.length)return g;f(c);a(c,function(){return{type:"and-predicate",components:b.map(function(a){return a.stringifyable})}});return c}function p(b,c){function d(a){return c(b(a))}f(d);a(d,function(){return{type:"by-function-predicate",G:b.stringifyable,L:c.stringifyable}});return d}function h(b){function c(a){return!b(a)}f(c,b);a(c,function(){return{type:"negated-predicate",L:b.stringifyable}});return c}function d(e){function c(a){for(var b=0,c=e.length;b<c;++b)if(e[b](a))return!0;return!1}
if(!e.length)return b;f(c);a(c,function(){return{type:"or-predicate",components:e.map(function(a){return a.stringifyable})}});return c}f(b);a(b,function(){return{type:"always-false-predicate"}});f(g);a(g,function(){return{type:"always-true-predicate"}});return{r:b,s:g,g:m,F:function(b,c){function d(a){return b(a)}f(d);a(d,c);return d},j:d,o:function(b){function c(a){return b.test(a)}f(c);a(c,function(){return{type:"regular-expression-predicate",o:b.source,Q:!b.ignoreCase,multiline:b.multiline}});
return c}}}(k,q);return function(k){return k}({comparators:{indifferent:r.I,natural:r.K},functions:{propertyAccessor:u.q},predicates:{alwaysFalse:k.r,alwaysTrue:k.s,and:k.g,from:k.F,or:k.j,regularExpression:k.o},makeStringifyable:q,stringifyReplacer:function(k,a){return"function"===typeof a||"object"===typeof a?a.stringifyable||a:a}})}"function"===typeof define&&define.amd?define([],t):window.stringifyable=t();