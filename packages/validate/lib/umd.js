!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);let o=Promise;function n(e,t){if(Array.isArray(t)){const r=t.length;let n=[];for(let i=0;i<r;i++){let r,u,a,f=t[i];if(Array.isArray(f)?[r,...u]=f:(r=f.validator,u=f.parameters||[],a=f.errorMessage),"function"!=typeof r)throw`Validator "${r}" must be a function!`;{let t=o.resolve(r(e,...u));n.push(t.then(e=>{if(!0===e)return!0;throw"string"==typeof e&&(a=e),e}).catch(e=>{throw{validator:r,parameters:u,errorMessage:a,error:e}}))}}return o.all(n).then(()=>!0).catch(e=>{throw e})}throw"Second parameter should be a group of validators!"}t.default={Promise:o,validate:n,groupValidate:function(e,t=!0){if("object"!=typeof e)throw"Validate group should be an object!";let r=[];for(let o in e){let i=e[o];if("object"!=typeof i)throw"Validate group item should be an object!";let{value:u,validators:a}=i,f=n(u,a);r.push(f.catch(e=>{if(e.name=o,t)throw[e];return e}))}return o.all(r).then(e=>{let t=e.filter(e=>!0!==e);if(t.length)throw t;return!0})}}}])});