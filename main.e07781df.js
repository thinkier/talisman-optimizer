parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NbQW":[function(require,module,exports) {
"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getReforge=exports.REFORGES=exports.RARITIES=exports.PREPOPULATE=exports.Reforge=void 0;var n=function(){function r(t,n,o,u,i){e(this,r),this.rarity=t,this.name=n,this.str=o,this.cd=u,this.atkspd=void 0===i?0:i}return t(r,[{key:"shift",value:function(e){var r=this,t=o[e].filter(function(e){return exports.REFORGES[r.rarity].filter(function(r){return r.name===e}).length>0}),n=t.indexOf(this.name),i=[];return void 0!==n&&(n>0&&i.push(u(this.rarity,t[n-1])),n<t.length-1&&i.push(u(this.rarity,t[n+1]))),i}}]),r}();exports.Reforge=n;var o={Basic:["Hurtful","Strong","Forceful"],"Luxurious Spool":["Silky","Strong","Forceful"]};function u(e,r){return exports.REFORGES[e].filter(function(e){return e.name===r}).pop()}exports.PREPOPULATE={"Max Damage":{COMMON:["Hurtful"],UNCOMMON:["Hurtful"],RARE:["Hurtful"],EPIC:["Strong"],LEGENDARY:["Strong"],MYTHIC:["Strong"]}},exports.RARITIES=["COMMON","UNCOMMON","RARE","EPIC","LEGENDARY","MYTHIC"],exports.REFORGES={COMMON:[new n("COMMON","Silky",0,5),new n("COMMON","Hurtful",0,4),new n("COMMON","Bloody",1,3,1),new n("COMMON","Forceful",4,0)],UNCOMMON:[new n("UNCOMMON","Silky",0,6),new n("UNCOMMON","Hurtful",0,5),new n("UNCOMMON","Bloody",1,4,1),new n("UNCOMMON","Strange",1,2,2),new n("UNCOMMON","Forceful",5,0)],RARE:[new n("RARE","Silky",0,8),new n("RARE","Hurtful",0,7),new n("RARE","Bloody",1,5,1),new n("RARE","Forceful",7,0)],EPIC:[new n("EPIC","Silky",0,10),new n("EPIC","Hurtful",0,10),new n("EPIC","Bloody",2,6,2),new n("EPIC","Strong",5,5),new n("EPIC","Strange",3,1,4),new n("EPIC","Forceful",10,0)],LEGENDARY:[new n("LEGENDARY","Silky",0,15),new n("LEGENDARY","Hurtful",0,15),new n("LEGENDARY","Bloody",3,9,2),new n("LEGENDARY","Strong",8,8),new n("LEGENDARY","Forceful",15,0)],MYTHIC:[new n("MYTHIC","Silky",0,20),new n("MYTHIC","Hurtful",0,20),new n("MYTHIC","Strong",12,12),new n("MYTHIC","Forceful",20,0)]},exports.getReforge=u;
},{}],"fr1I":[function(require,module,exports) {
"use strict";function t(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=n(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return s=t.done,t},e:function(t){u=!0,o=t},f:function(){try{s||null==e.return||e.return()}finally{if(u)throw o}}}}function n(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function i(t,n,r){return n&&a(t.prototype,n),r&&a(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.AccessoryBag=void 0;var o=require("./reforges"),s=require("./main"),u=function(){function t(n){var r=this;e(this,t),this.talismans={},n.count.forEach(function(t,n){var e=o.PREPOPULATE["Max Damage"][n];r.talismans[n]=[];for(var a=0;a<t;a++){var i=e[t%e.length];r.talismans[n].push(o.getReforge(n,i))}})}return i(t,[{key:"generateSuccessors",value:function(t){var n=this,r=[this],e=function(t){if(!n.talismans.hasOwnProperty(t))return"continue";n.scanPivots(t).flatMap(function(r){return n.talismans[t][r].shift("Luxurious Spool").map(function(e){var a=n.clone();return a.talismans[t][r]=e,a.fixOrdering(),a})}).forEach(function(t){return r.push(t)})};for(var a in this.talismans)e(a);return console.log(r),r.sort(function(n,r){return r.evaluate(t).crit-n.evaluate(t).crit}),{bestSuccessors:r,optimal:r[0]===this}}},{key:"scanPivots",value:function(t){var n=[],r=this.talismans[t];if(r.length>0){n.push(0);for(var e=n[0],a=1;a<r.length;a++)e!=n[a]&&(e=n[a],n.push(a))}return n}},{key:"fixOrdering",value:function(){for(var t in this.talismans){if(this.talismans.hasOwnProperty(t))this.talismans[t].sort(function(t,n){return 1e4*(t.cd-n.cd)+100*(t.str-n.str)+t.atkspd*n.atkspd})}}},{key:"clone",value:function(){var n=new t(new s.TalismanCount);for(var r in this.talismans)this.talismans.hasOwnProperty(r)&&(n.talismans[r]=this.talismans[r].slice(0));return n}},{key:"evaluate",value:function(t){var n=t.str,r=t.cd,e=t.atkSpd;for(var a in this.talismans)this.talismans.hasOwnProperty(a)&&this.talismans[a].forEach(function(t){n+=t.str,r+=t.cd,e+=t.atkSpd});var i=(5+t.dmg+Math.floor(n/5))*(1+n/100),o=i+i*r;return{std:i,crit:o,dps:(2+2*Math.min(1,e/100))*o}}},{key:"toString",value:function(){var t=this;return o.RARITIES.map(function(n){var r=n+":\n",e=f(t.talismans[n].map(function(t){return t.name}));for(var a in e)e.hasOwnProperty(a)&&(r+="\t"+a+": "+e[a]+"\n");return r}).join("")}},{key:"aggregateReforges",value:function(){var t=this;return o.RARITIES.map(function(n){return{rarity:n,reforges:f(t.talismans[n].map(function(t){return t.name}))}})}}]),t}();function f(n){var r=new Map;if(n.length>0){var e,a=n[0],i=0,o=t(n);try{for(o.s();!(e=o.n()).done;){var s=e.value;s==a?i++:(r[a]=i,a=s,i=1)}}catch(u){o.e(u)}finally{o.f()}r[a]=i}return r}exports.AccessoryBag=u;
},{"./reforges":"NbQW","./main":"jP6t"}],"jP6t":[function(require,module,exports) {
"use strict";function e(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw i}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.TalismanCount=void 0;var o=require("./accessoryBag"),a=require("./reforges"),i=function e(){r(this,e),this.count=new Map};function s(){var t,n=e(u());try{for(n.s();!(t=n.n()).done;){var r=t.value,o=document.getElementById(r.rarity.toLowerCase()+"-max-cd-reforge-guide");for(var a in o.innerText="",r.reforges)if(r.reforges.hasOwnProperty(a)){var i=r.reforges[a],s=document.createElement("div");s.innerText=a+": "+i,o.appendChild(s)}}}catch(c){n.e(c)}finally{n.f()}}function u(){for(var e=new o.AccessoryBag(c()),t=f(),n=0;n<1e4;n++){var r=e.generateSuccessors(t);if(console.log("Generation "+n+" results:\n\n"+r.bestSuccessors[0].toString()),e=r.bestSuccessors[0],r.optimal)return console.log("Optimal solution found after "+n+" generations."),e.aggregateReforges()}console.log("Took too long to compute, interrupting...")}function c(){var t,n=new i,r=e(a.RARITIES);try{for(r.s();!(t=r.n()).done;){var o=t.value;n.count.set(o,l(o.toLowerCase()+"-talisman-count"))}}catch(s){r.e(s)}finally{r.f()}return n}function l(e){var t=document.getElementById(e).value;return t>0?+t:0}function f(){return{dmg:l("base-dmg"),str:l("base-strength"),cd:l("base-crit-dmg"),atkSpd:l("base-attack-speed")}}exports.TalismanCount=i,document.addEventListener("DOMContentLoaded",function(){var t,n=e(a.RARITIES);try{for(n.s();!(t=n.n()).done;){var r=t.value;document.getElementById(r.toLowerCase()+"-talisman-count").addEventListener("change",function(e){s()})}}catch(o){n.e(o)}finally{n.f()}s()});
},{"./accessoryBag":"fr1I","./reforges":"NbQW"}]},{},["jP6t"], null)
//# sourceMappingURL=/main.e07781df.js.map