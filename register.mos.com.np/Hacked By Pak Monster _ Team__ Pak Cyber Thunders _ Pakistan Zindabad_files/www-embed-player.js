(function(){var k;function n(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if("prototype"!=d)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
for(var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca="undefined"!=typeof Reflect&&Reflect.construct||function(a,b,c){void 0===c&&(c=a);
c=ba(c.prototype||Object.prototype);return Function.prototype.apply.call(a,c,b)||c},da="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ea=["Reflect",
"construct"],fa=0;fa<ea.length-1;fa++){var ha=ea[fa];ha in da||(da[ha]={});da=da[ha]}var ia=ea[ea.length-1],ja=da[ia],ka;ka=ja||ca;ka!=ja&&null!=ka&&aa(da,ia,{configurable:!0,writable:!0,value:ka});var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function u(a,b){for(var c=a.split("."),d=b||p,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function la(){}
function ma(a){a.ja=void 0;a.getInstance=function(){return a.ja?a.ja:a.ja=new a}}
function na(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function oa(a){return"array"==na(a)}
function pa(a){var b=na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function qa(a){return"function"==na(a)}
function ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var sa="closure_uid_"+(1E9*Math.random()>>>0),ta=0;function ua(a,b,c){return a.call.apply(a.bind,arguments)}
function va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=ua:v=va;return v.apply(null,arguments)}
function x(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var y=Date.now||function(){return+new Date};
function z(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ib=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var wa=document,A=window;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(B,Error);B.prototype.name="CustomError";var xa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function za(a,b){return a<b?-1:a>b?1:0}
function Aa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ba=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ca=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Da(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Ea(a,b){var c=Ba(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Fa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ga(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ha;a:{var Ia=p.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){Ha=Ja;break a}}Ha=""}function D(a){return-1!=Ha.indexOf(a)}
;function Ka(a,b){var c=pa(b),d=c?b:arguments;for(c=c?0:1;c<d.length&&(a=a[d[c]],q(a));c++);return a}
function La(a){var b=Ma,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Na(a){for(var b in a)return!1;return!0}
function Oa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Pa(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ra="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ra.length;f++)c=Ra[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ta(a){Ta[" "](a);return a}
Ta[" "]=la;function Ua(a,b){var c=Va;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Wa=D("Opera"),Xa=D("Trident")||D("MSIE"),Ya=D("Edge"),Za=D("Gecko")&&!(-1!=Ha.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),$a=-1!=Ha.toLowerCase().indexOf("webkit")&&!D("Edge");function ab(){var a=p.document;return a?a.documentMode:void 0}
var bb;a:{var cb="",db=function(){var a=Ha;if(Za)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ya)return/Edge\/([\d\.]+)/.exec(a);if(Xa)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if($a)return/WebKit\/(\S+)/.exec(a);if(Wa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
db&&(cb=db?db[1]:"");if(Xa){var eb=ab();if(null!=eb&&eb>parseFloat(cb)){bb=String(eb);break a}}bb=cb}var fb=bb,Va={};
function gb(a){return Ua(a,function(){for(var b=0,c=xa(String(fb)).split("."),d=xa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=za(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||za(0==g[2].length,0==h[2].length)||za(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var hb;var ib=p.document;hb=ib&&Xa?ab()||("CSS1Compat"==ib.compatMode?parseInt(fb,10):5):void 0;!Za&&!Xa||Xa&&9<=Number(hb)||Za&&gb("1.9.1");Xa&&gb("9");function jb(){this.b="";this.f=kb}
jb.prototype.ia=!0;jb.prototype.ha=function(){return this.b};
function lb(a){return a instanceof jb&&a.constructor===jb&&a.f===kb?a.b:"type_error:TrustedResourceUrl"}
var kb={};function E(){this.b="";this.f=mb}
E.prototype.ia=!0;E.prototype.ha=function(){return this.b};
function nb(a){return a instanceof E&&a.constructor===E&&a.f===mb?a.b:"type_error:SafeUrl"}
var ob=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function pb(a){if(a instanceof E)return a;a=a.ia?a.ha():String(a);ob.test(a)||(a="about:invalid#zClosurez");return qb(a)}
var mb={};function qb(a){var b=new E;b.b=a;return b}
qb("about:blank");function rb(){this.b=""}
rb.prototype.ia=!0;rb.prototype.ha=function(){return this.b};
function sb(a){var b=new rb;b.b=a;return b}
sb("<!DOCTYPE html>");sb("");sb("<br>");function tb(a,b){var c=b instanceof E?b:pb(b);a.href=nb(c)}
function ub(a,b){a.src=lb(b)}
;function vb(a,b){this.b=q(a)?a:0;this.f=q(b)?b:0}
vb.prototype.equals=function(a){return a instanceof vb&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
vb.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
vb.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
vb.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};function wb(a,b){this.width=a;this.height=b}
k=wb.prototype;k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function xb(a){var b=document;return r(a)?b.getElementById(a):a}
function yb(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function zb(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Ab(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Bb(){var a=Cb;try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ta(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
;function Db(a){Eb();var b=new jb;b.b=a;return b}
var Eb=la;function Fb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Gb=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",null,b)}catch(c){}return a}();var Hb=!!window.google_async_iframe_id,Cb=Hb&&window.parent||window;var Ib=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function F(a){return a.match(Ib)}
function Jb(a){return a?decodeURI(a):a}
function Kb(a,b,c){if(oa(b))for(var d=0;d<b.length;d++)Kb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Lb(a){var b=[],c;for(c in a)Kb(c,a[c],b);return b.join("&")}
function Mb(a,b){var c=Lb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var Nb=null;function Ob(a,b){var c=Pb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;function Qb(a,b){this.events=[];this.f=b||p;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.google_measure_js_timing);if(null===Nb){Nb="";try{var d=p.top.location.hash;if(d){var e=d.match(/\bdeid=([\d,]+)/);Nb=e?e[1]:""}}catch(f){}}d=Nb;d=d.indexOf&&0<=d.indexOf("1337");this.b=(this.b=null!=c?c:Math.random()<a)||d;c=this.f.performance;this.g=!!(c&&c.mark&&c.clearMarks&&d)}
Qb.prototype.h=function(a){if(a&&this.g){var b=this.f.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};
Qb.prototype.start=function(a,b){if(!this.b)return null;var c=new Ob(a,b);this.g&&this.f.performance.mark("goog_"+c.uniqueId+"_start");return c};
Qb.prototype.end=function(a){this.b&&"number"==typeof a.value&&(a.duration=Pb()-a.value,this.g&&this.f.performance.mark("goog_"+a.uniqueId+"_end"),this.b&&this.events.push(a))};
function Pb(){var a=p.performance;return a&&a.now?a.now():y()}
;if(Hb&&!Bb()){var Rb="."+wa.domain;try{for(;2<Rb.split(".").length&&!Bb();)wa.domain=Rb=Rb.substr(Rb.indexOf(".")+1),Cb=window.parent}catch(a){}Bb()||(Cb=window)}var Sb=Cb,G=new Qb(1,Sb);function Tb(){Sb.google_measure_js_timing||(G.events!=G.f.google_js_reporting_queue&&(G.events.length=0,G.g&&C(G.events,G.h,G)),G.b=!1)}
if("complete"==Sb.document.readyState)Tb();else if(G.b){var Ub=function(){Tb()};
Sb.addEventListener?Sb.addEventListener("load",Ub,Gb?void 0:!1):Sb.attachEvent&&Sb.attachEvent("onload",Ub)};var Vb=(new Date).getTime();function Wb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Xb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var H=1518500249}else m=d^f^h,H=1859775393;else 60>c?(m=d&f|h&(d|f),H=2400959708):(m=d^f^h,H=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+H+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[m++]=a[d++],w++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,w;a();return{reset:a,update:c,digest:d,ya:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Yb(a,b,c){var d=[],e=[];if(1==(oa(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Zb(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Zb(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Zb(a){var b=Xb();b.update(a);return b.ya().toLowerCase()}
;function $b(a){this.b=a||{cookie:""}}
k=$b.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ac=new $b("undefined"==typeof document?null:document);ac.f=3950;function bc(){var a=[],b=Wb(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new $b(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new $b(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Yb(Wb(d),b,a||null)].join(" "):null}return null}
;function cc(a,b,c){this.h=c;this.g=a;this.i=b;this.f=0;this.b=null}
cc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function dc(a,b){a.i(b);a.f<a.h&&(a.f++,b.next=a.b,a.b=b)}
;function ec(a){p.setTimeout(function(){throw a;},0)}
var fc;
function gc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.oa;c.oa=null;a()}};
return function(a){d.next={oa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function hc(){this.f=this.b=null}
var jc=new cc(function(){return new ic},function(a){a.reset()},100);
hc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function ic(){this.next=this.scope=this.b=null}
ic.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
ic.prototype.reset=function(){this.next=this.scope=this.b=null};function kc(a,b){lc||mc();nc||(lc(),nc=!0);var c=oc,d=jc.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var lc;function mc(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);lc=function(){a.then(pc)}}else lc=function(){var a=pc;
!qa(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(fc||(fc=gc()),fc(a)):p.setImmediate(a)}}
var nc=!1,oc=new hc;function pc(){for(var a;a=oc.remove();){try{a.b.call(a.scope)}catch(b){ec(b)}dc(jc,a)}nc=!1}
;var qc=D("Firefox"),rc=(D("Chrome")||D("CriOS"))&&!D("Edge");function I(){this.f=this.f;this.F=this.F}
I.prototype.f=!1;I.prototype.dispose=function(){this.f||(this.f=!0,this.l())};
function sc(a,b){a.f?q(void 0)?b.call(void 0):b():(a.F||(a.F=[]),a.F.push(q(void 0)?v(b,void 0):b))}
I.prototype.l=function(){if(this.F)for(;this.F.length;)this.F.shift()()};
function tc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function uc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];pa(d)?uc.apply(null,d):tc(d)}}
;var vc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function wc(){}
wc.prototype.next=function(){throw vc;};
wc.prototype.Y=function(){return this};
function xc(a){if(a instanceof wc)return a;if("function"==typeof a.Y)return a.Y(!1);if(pa(a)){var b=0,c=new wc;c.next=function(){for(;;){if(b>=a.length)throw vc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function yc(a,b){if(pa(a))try{C(a,b,void 0)}catch(c){if(c!==vc)throw c;}else{a=xc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==vc)throw c;}}}
function zc(a){if(pa(a))return Fa(a);a=xc(a);var b=[];yc(a,function(a){b.push(a)});
return b}
;function Ac(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Bc(a){a=String(a);if(Ac(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Cc(a){var b=[];Dc(new Ec,a,b);return b.join("")}
function Ec(){}
function Dc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(oa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Dc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Fc(d,c),c.push(":"),Dc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Fc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Gc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Hc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Fc(a,b){b.push('"',a.replace(Hc,function(a){var b=Gc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Gc[a]=b);return b}),'"')}
;function Ic(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Jc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function J(a,b){this.b=0;this.m=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=la)try{var c=this;a.call(b,function(a){Kc(c,2,a)},function(a){Kc(c,3,a)})}catch(d){Kc(this,3,d)}}
function Lc(){this.next=this.context=this.f=this.g=this.b=null;this.h=!1}
Lc.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.h=!1};
var Mc=new cc(function(){return new Lc},function(a){a.reset()},100);
function Nc(a,b,c){var d=Mc.get();d.g=a;d.f=b;d.context=c;return d}
function Oc(a){return new J(function(b,c){c(a)})}
J.prototype.then=function(a,b,c){return Pc(this,qa(a)?a:null,qa(b)?b:null,c)};
Ic(J);function Qc(a,b){return Pc(a,null,b,void 0)}
J.prototype.cancel=function(a){0==this.b&&kc(function(){var b=new Rc(a);Sc(this,b)},this)};
function Sc(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.h||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Sc(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Tc(c),Uc(c,e,3,b)))}a.g=null}else Kc(a,3,b)}
function Vc(a,b){a.f||2!=a.b&&3!=a.b||Wc(a);a.h?a.h.next=b:a.f=b;a.h=b}
function Pc(a,b,c,d){var e=Nc(null,null,null);e.b=new J(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Rc?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Vc(a,e);return e.b}
J.prototype.w=function(a){this.b=0;Kc(this,2,a)};
J.prototype.A=function(a){this.b=0;Kc(this,3,a)};
function Kc(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.w,f=a.A;if(d instanceof J){Vc(d,Nc(e||la,f||null,a));var g=!0}else if(Jc(d))d.then(e,f,a),g=!0;else{if(ra(d))try{var h=d.then;if(qa(h)){Xc(d,h,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}g||(a.m=c,a.b=b,a.g=null,Wc(a),3!=b||c instanceof Rc||Yc(a,c))}}
function Xc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Wc(a){a.j||(a.j=!0,kc(a.u,a))}
function Tc(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
J.prototype.u=function(){for(var a;a=Tc(this);)Uc(this,a,this.b,this.m);this.j=!1};
function Uc(a,b,c,d){if(3==c&&b.f&&!b.h)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,Zc(b,c,d);else try{b.h?b.g.call(b.context):Zc(b,c,d)}catch(e){$c.call(null,e)}dc(Mc,b)}
function Zc(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Yc(a,b){a.i=!0;kc(function(){a.i&&$c.call(null,b)})}
var $c=ec;function Rc(a){B.call(this,a)}
z(Rc,B);Rc.prototype.name="cancel";function K(a){I.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.g={};this.m=!!a}
z(K,I);k=K.prototype;k.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function ad(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Da(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.D(b)}}
k.D=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.b[a+1]=la):(c&&Ea(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.O=function(a){var b=this.g[a];if(b){for(var c=Array(arguments.length-1),d=1,e=arguments.length;d<e;d++)c[d-1]=arguments[d];if(this.m)for(d=0;d<b.length;d++){var f=b[d];bd(this.b[f+1],this.b[f+2],c)}else{this.i++;try{for(d=0,e=b.length;d<e;d++)f=b[d],this.b[f+1].apply(this.b[f+2],c)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;f=this.h.pop();)this.D(f)}}return 0!=d}return!1};
function bd(a,b,c){kc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.g[a];b&&(C(b,this.D,this),delete this.g[a])}else this.b.length=0,this.g={}};
k.l=function(){K.o.l.call(this);this.clear();this.h.length=0};function cd(a){this.b=a}
cd.prototype.set=function(a,b){q(b)?this.b.set(a,Cc(b)):this.b.remove(a)};
cd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return Bc(b)}catch(c){throw"Storage: Invalid value was encountered";}};
cd.prototype.remove=function(a){this.b.remove(a)};function dd(a){this.b=a}
z(dd,cd);function ed(a){this.data=a}
function fd(a){return!q(a)||a instanceof ed?a:new ed(a)}
dd.prototype.set=function(a,b){dd.o.set.call(this,a,fd(b))};
dd.prototype.f=function(a){a=dd.o.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
dd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function L(a){this.b=a}
z(L,dd);L.prototype.set=function(a,b,c){if(b=fd(b)){if(c){if(c<y()){L.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}L.o.set.call(this,a,b)};
L.prototype.f=function(a,b){var c=L.o.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<y()||!!d&&d>y()}if(d)L.prototype.remove.call(this,a);else return c}};function gd(a){this.b=a}
z(gd,L);function hd(){}
;function id(){}
z(id,hd);id.prototype.clear=function(){var a=zc(this.Y(!0)),b=this;C(a,function(a){b.remove(a)})};function jd(a){this.b=a}
z(jd,id);k=jd.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.Y=function(a){var b=0,c=this.b,d=new wc;d.next=function(){if(b>=c.length)throw vc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function kd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(kd,jd);function ld(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(ld,jd);var md=!1,nd="";function od(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(md=!0,a.description)){nd=od(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){md=!0;nd="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],md=!(!a||!a.enabledPlugin))){nd=od(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");md=!0;nd=od(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");md=!0;nd="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),md=!0,nd=od(b.GetVariable("$version"))}catch(c){}})();
var pd=md,qd=nd;var rd="Microsoft Internet Explorer"==navigator.appName,M=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
function sd(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
;var td=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",td,void 0);function N(a){sd(td,arguments)}
function O(a,b){return a in td?td[a]:b}
function P(a){return O(a,void 0)}
;function Q(a,b){var c=u("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=O("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),N("ERRORS",c))}
function ud(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Q(b)}}:a}
;function R(a){return O("EXPERIMENT_FLAGS",{})[a]}
;var vd={};function wd(a){return vd[a]||(vd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function xd(a,b){return a?a.dataset?a.dataset[wd(b)]:a.getAttribute("data-"+b):null}
function yd(a){a&&(a.dataset?a.dataset[wd("loaded")]="true":a.setAttribute("data-loaded","true"))}
;function S(a,b){qa(a)&&(a=ud(a));return window.setTimeout(a,b)}
;var zd=u("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.D;K.prototype.publish=K.prototype.O;K.prototype.clear=K.prototype.clear;t("ytPubsubPubsubInstance",zd,void 0);var Cd=u("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",Cd,void 0);var Dd=u("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",Dd,void 0);var Ed=u("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",Ed,void 0);
function Fd(a,b){var c=Gd();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){Cd[d]&&b.apply(window,c)};
try{Ed[a]?f():S(f,0)}catch(g){Q(g)}},void 0);
Cd[d]=!0;Dd[a]||(Dd[a]=[]);Dd[a].push(d);return d}return 0}
function Gd(){return u("ytPubsubPubsubInstance")}
function Hd(a){Dd[a]&&(a=Dd[a],C(a,function(a){Cd[a]&&delete Cd[a]}),a.length=0)}
function Id(a){var b=Gd();if(b)if(b.clear(a),a)Hd(a);else for(var c in Dd)Hd(c)}
function Jd(a,b){var c=Gd();c&&c.publish.apply(c,arguments)}
function Kd(a){var b=Gd();b&&("number"==typeof a?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete Cd[a]}))}
;var Ld=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Md=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Nd(a,b){var c=Od(a),d=document.getElementById(c),e=d&&xd(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=Fd(c,b);var g=""+(b[sa]||(b[sa]=++ta));Pd[g]=e}f||(d=Qd(a,c,function(){xd(d,"loaded")||(yd(d),Jd(c),S(x(Id,c),0))}))}}
function Qd(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
ub(d,Db(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Rd(a){a=Od(a);var b=document.getElementById(a);b&&(Id(a),b.parentNode.removeChild(b))}
function Sd(a,b){if(a&&b){var c=""+(b[sa]||(b[sa]=++ta));(c=Pd[c])&&Kd(c)}}
function Od(a){var b=document.createElement("a");tb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Aa(a)}
var Pd={};function Td(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ld,""),c=c.replace(Md,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Nd(a,b)}
;var Ud=null;function Vd(){var a=O("BG_I",null),b=O("BG_IU",null),c=O("BG_P",void 0);b?Td(b,function(){window.botguard?Wd(c):(Rd(b),Q(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),Wd(c))}
function Wd(a){Ud=new window.botguard.bg(a);R("botguard_periodic_refresh")?M():R("botguard_always_refresh")}
function Xd(){return null!=Ud}
function Yd(){return Ud?Ud.invoke():null}
;y();var Zd=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function $d(){if(!Zd)return null;var a=Zd();return"open"in a?a:null}
function ae(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function be(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?oa(b[f])?Ga(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function ce(a,b){var c=a.split("#",2);a=c[0];c=1<c.length?"#"+c[1]:"";var d=a.split("?",2);a=d[0];d=be(d[1]||"");for(var e in b)d[e]=b[e];return Mb(a,d)+c}
;var de={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ee=!1;
function fe(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=F(a)[1]||null,e=Jb(F(a)[3]||null);d&&e?(d=c,c=F(a),d=F(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Jb(F(c)[3]||null)==e&&(Number(F(c)[4]||null)||null)==(Number(F(a)[4]||null)||null):!0;for(var f in de){if((e=d=O(de[f]))&&!(e=c)){var g=a;e=f;var h=O("CORS_HEADER_WHITELIST")||{};e=(g=Jb(F(g)[3]||null))?(h=h[g])?0<=Ba(h,e):!1:!0}e&&(b[f]=d)}return b}
function ge(a,b){var c=O("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.kb&&(!Jb(F(a)[3]||null)||b.withCredentials||Jb(F(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.B&&b.B[c])}
function he(a,b){var c=b.format||"JSON";b.Da&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=O("XSRF_FIELD_NAME",void 0),e=O("XSRF_TOKEN",void 0),f=b.ab;f&&(f[d]&&delete f[d],a=ce(a,f||{}));f=b.postBody||"";var g=b.B;ge(a,b)&&(g||(g={}),g[d]=e);g&&r(f)&&(d=be(f),Sa(d,g),f=b.sa&&"JSON"==b.sa?JSON.stringify(d):Lb(d));d=f||g&&!Na(g);!ee&&d&&"POST"!=b.method&&(ee=!0,Q(Error("AJAX request with postData should use POST")));var h=
!1,l,m=ie(a,function(a){if(!h){h=!0;l&&window.clearTimeout(l);var d=ae(a),e=null;if(d||400<=a.status&&500>a.status)e=je(c,a,b.jb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||p;d?b.P&&b.P.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Ia&&b.Ia.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.aa&&0<b.timeout&&(l=S(function(){h||(h=!0,m.abort(),window.clearTimeout(l),b.aa.call(b.context||p,m))},b.timeout))}
function je(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?ke(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=le(a)})}c&&me(d);
return d}
function me(a){if(ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=sb(a[b]);a[c]=d}else me(a[b])}}
function ke(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function le(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function ne(a,b){b.method="POST";b.B||(b.B={});he(a,b)}
function ie(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&ud(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=$d();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c;if(e=fe(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var oe={},pe=0;function qe(a,b){a&&(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?ie(a,b):re(a,b))}
function re(a,b){var c=new Image,d=""+pe++;oe[d]=c;c.onload=c.onerror=function(){b&&oe[d]&&b();delete oe[d]};
c.src=a}
;function se(a,b,c,d,e){b=void 0===b?"ERROR":b;e=void 0===e?!1:e;c={name:c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=te)){e=a.stacktrace;d=a.columnNumber;var f=u("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(H){h="Not available",
g=!0}try{var l=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||f}catch(H){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(ue[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=a.fileName;h={ab:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,
1E3),line:h,level:b,"client.name":c.name},B:{url:O("PAGE_NAME",window.location.href),file:l},method:"POST"};c.version&&(h["client.version"]=c.version);e&&(h.B.stack=e);for(var m in c)h.B["client."+m]=c[m];if(m=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var w in m)h.B[w]=m[w];he("/error_204",h);ue[a.message]=!0;te++}}}
var te=0,ue={};var ve=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",ve,void 0);function we(a){sd(ve,arguments)}
;function xe(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
function ye(a){if(!isNaN(a)){var b=u("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
;var ze=[],Ae=!1;function Be(){function a(){Ae=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)}
Td("//static.doubleclick.net/instream/ad_status.js",a);ze.push(xe(function(){Ae||"google_ad_status"in window||(Sd("//static.doubleclick.net/instream/ad_status.js",a),N("DCLKSTAT",3))},1))}
function Ce(){return parseInt(O("DCLKSTAT",0),10)}
;var De=0,Ee=u("ytDomDomGetNextId")||function(){return++De};
t("ytDomDomGetNextId",Ee,void 0);var Fe={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ge(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Fe||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Ge.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ge.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ge.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ma=u("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Ma,void 0);var He=u("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",He,void 0);function Ie(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return La(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Je(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ie(a,b,c,d);if(e)return e;e=++He.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Ge(d);if(!Ab(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Ge(b);
b.currentTarget=a;return c.call(a,b)};
g=ud(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ma[e]=[a,b,c,g,d];return e}
function Ke(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Ma){var b=Ma[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ma[a]}}))}
;function Le(){if(null==u("_lact",window)){var a=parseInt(O("LACT"),10);a=isFinite(a)?y()-Math.max(a,0):-1;t("_lact",a,window);t("_fact",a,window);-1==a&&T();Je(document,"keydown",T);Je(document,"keyup",T);Je(document,"mousedown",T);Je(document,"mouseup",T);Fd("page-mouse",T);Fd("page-scroll",T);Fd("page-resize",T)}}
function T(){null==u("_lact",window)&&(Le(),u("_lact",window));var a=y();t("_lact",a,window);-1==u("_fact",window)&&t("_fact",a,window);Jd("USER_ACTIVE")}
function Me(){var a=u("_lact",window);return null==a?-1:Math.max(y()-a,0)}
var Ne=T;function Oe(a,b,c,d,e){this.g=a;this.i=b;this.h=c;this.f=d;this.b=e}
var Pe=1;function Qe(a){var b={};void 0!==a.g?b.trackingParams=a.g:(b.veType=a.i,null!=a.h&&(b.veCounter=a.h),null!=a.f&&(b.elementIndex=a.f));void 0!==a.b&&(b.dataElement=Qe(a.b));return b}
;var Re={log_event:"events",log_event2:"events",log_interaction:"interactions"},Se=Object.create(null);Se.log_event="GENERIC_EVENT_LOGGING";Se.log_event2="GENERIC_EVENT_LOGGING";Se.log_interaction="INTERACTION_LOGGING";var Te={},Ue={},Ve=0,U=u("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",U,void 0);var We=u("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",We,void 0);var Xe=u("ytLoggingTransportDispatchedStats_")||{};
t("ytLoggingTransportDispatchedStats_",Xe,void 0);var Ye=u("ytLoggingTransportCapturedTime_")||{};t("ytytLoggingTransportCapturedTime_",Ye,void 0);function Ze(a,b){Ue[a.endpoint]=b;if(a.Z){var c=a.Z;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);We[a.Z.token]=d;c=$e(a.endpoint,a.Z.token)}else c=$e(a.endpoint);c.push(a.ra);d=R("web_logging_max_batch");c.length>=(Number(d||0)||20)?af():bf()}
function af(){window.clearTimeout(Ve);if(!Na(U)){for(var a in U){var b=Te[a];if(!b){var c=Ue[a];if(!c)continue;b=new c;Te[a]=b}c=void 0;var d=a,e=b,f=Re[d],g=Xe[d]||{};Xe[d]=g;b=Math.round(M());for(c in U[d]){var h=e.b;h={client:{hl:h.Ga,gl:h.Fa,clientName:h.Ea,clientVersion:h.innertubeContextClientVersion}};O("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});h={context:h};h[f]=$e(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;
h.requestTimeMs=b;var l=We[c];if(l)a:{var m=h,w=c;if(l.videoId)var H="VIDEO";else if(l.playlistId)H="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:w,scope:H}]}delete We[c];cf(e,d,h)}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete U[a]}Na(U)||
bf()}}
function bf(){window.clearTimeout(Ve);Ve=S(af,O("LOGGING_BATCH_TIMEOUT",1E4))}
function $e(a,b){b||(b="");U[a]=U[a]||{};U[a][b]=U[a][b]||[];return U[a][b]}
;function df(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||M());f[a]=b;f.context={lastActivityMs:String(d?-1:Me())};a=R("web_system_health_gel2")&&"systemHealthCaptured"==a?"log_event2":"log_event";Ze({endpoint:a,ra:f,Z:e},c)}
;function ef(a,b,c){ff(gf,{attachChild:{csn:a,parentVisualElement:Qe(b),visualElements:[Qe(c)]}},void 0,void 0)}
function hf(a,b){var c=gf;if(R("interaction_logging_on_gel_web"))b.forEach(function(b){df("visualElementShown",{csn:a,ve:Qe(b),eventType:1},c)});
else{var d=Ca(b,function(a){return Qe(a)});
ff(c,{visibilityUpdate:{csn:a,visualElements:d}})}}
function ff(a,b,c,d){b.eventTimeMs=Math.round(M());b.lactMs=Me();d?b.clientData=d:c&&(b.clientData=jf(c));Ze({endpoint:"log_interaction",ra:b},a)}
function jf(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=Ca(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function kf(){if(!lf&&!mf||!window.JSON)return null;try{var a=lf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))try{a=mf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var mf,nf=new kd;mf=nf.isAvailable()?new gd(nf):null;var lf,of=new ld;lf=of.isAvailable()?new gd(of):null;function pf(){var a=O("ROOT_VE_TYPE",void 0);return a?new Oe(void 0,a,void 0):null}
function qf(){var a=O("client-screen-nonce",void 0);a||(a=O("EVENT_ID",void 0));return a}
;function rf(a,b,c){ac.set(""+a,b,c,"/","youtube.com",!1)}
;function sf(a){if(a){a=a.itct||a.ved;var b=u("yt.logging.screen.storeParentElement");a&&b&&b(new Oe(a))}}
;function tf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Jb(F(window.location.href)[3]||null);f&&e.push(f);f=Jb(F(d)[3]||null);if(0<=Ba(e,f)||!f&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(e=document.createElement("a"),tb(e,d),d=e.href),d){f=F(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
qf();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Aa(d).toString(36),e=b?Lb(b):"",rf(d,e,h||5),sf(b))}else h="ST-"+Aa(d).toString(36),d=b?Lb(b):"",rf(h,d,5),sf(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var w=void 0===w?window:w;c=w.location;a=Mb(a,l)+m;a=a instanceof E?a:pb(a);c.href=nb(a)}return!0}
;var uf=u("yt.abuse.botguardInitialized")||Xd;t("yt.abuse.botguardInitialized",uf,void 0);var vf=u("yt.abuse.invokeBotguard")||Yd;t("yt.abuse.invokeBotguard",vf,void 0);var wf=u("yt.abuse.dclkstatus.checkDclkStatus")||Ce;t("yt.abuse.dclkstatus.checkDclkStatus",wf,void 0);var xf=u("yt.player.exports.navigate")||tf;t("yt.player.exports.navigate",xf,void 0);var yf=u("yt.util.activity.init")||Le;t("yt.util.activity.init",yf,void 0);var zf=u("yt.util.activity.getTimeSinceActive")||Me;
t("yt.util.activity.getTimeSinceActive",zf,void 0);var Af=u("yt.util.activity.setTimestamp")||Ne;t("yt.util.activity.setTimestamp",Af,void 0);function Bf(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function gf(a){this.b=a||{apiaryHost:P("APIARY_HOST"),hb:P("APIARY_HOST_FIRSTPARTY"),gapiHintOverride:!!O("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:P("GAPI_HINT_PARAMS"),innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),Ea:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ga:P("INNERTUBE_CONTEXT_HL"),Fa:P("INNERTUBE_CONTEXT_GL"),xhrApiaryHost:P("XHR_APIARY_HOST")||"",Ha:P("INNERTUBE_HOST_OVERRIDE")||""}}
function cf(a,b,c){var d={};!O("VISITOR_DATA")&&.01>Math.random()&&Q(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":O("VISITOR_DATA","")},B:c,sa:"JSON",aa:d.aa,P:function(a,b){d.P&&d.P(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=bc();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=O("SESSION_INDEX",0));var g="",h=a.b.Ha;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);ne(""+g+Bf(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey,e)}
;function Cf(a){a=a||{};this.url=a.url||"";this.args=a.args||Pa(Df);this.assets=a.assets||{};this.attrs=a.attrs||Pa(Ef);this.params=a.params||Pa(Ff);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Df={enablejsapi:1},Ef={},Ff={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Gf(a){a instanceof Cf||(a=new Cf(a));return a}
function Hf(a){var b=new Cf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==na(d)?Pa(d):d}return b}
;function If(a){I.call(this);this.b=[];this.g=a||this}
n(If,I);function Jf(a,b,c,d){d=ud(v(d,a.g));d={target:b,name:c,na:d};b.addEventListener(c,d.na,void 0);a.b.push(d)}
function Kf(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.na)}}
If.prototype.l=function(){Kf(this);I.prototype.l.call(this)};function Lf(){this.g=this.f=this.b=0;var a=u("window.navigator.plugins"),b=u("window.navigator.mimeTypes");a=a&&a["Shockwave Flash"];b=b&&b["application/x-shockwave-flash"];if(b=a&&b&&b.enabledPlugin&&a.description||""){a=b.indexOf("Shockwave Flash");0<=a&&(b=b.substr(a+15));a=b.split(" ");var c="";b="";for(var d=0,e=a.length;d<e;d++)if(c)if(b)break;else b=a[d];else c=a[d];c=c.split(".");a=parseInt(c[0],10)||0;c=parseInt(c[1],10)||0;d=0;if("r"==b.charAt(0)||"d"==b.charAt(0))d=parseInt(b.substr(1),
10)||0;b=[a,c,d]}else b=[0,0,0];this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){if(rd)try{var f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(m){f=null}else{var g=document.body;var h=document.createElement("object");h.setAttribute("type","application/x-shockwave-flash");f=g.appendChild(h)}if(f&&"GetVariable"in f)try{var l=f.GetVariable("$version")}catch(m){l=""}g&&h&&g.removeChild(h);(f=l||"")?(f=f.split(" ")[1].split(","),f=[parseInt(f[0],10)||0,parseInt(f[1],10)||0,parseInt(f[2],10)||
0]):f=[0,0,0];this.b=f[0];this.f=f[1];this.g=f[2]}}
ma(Lf);var Mf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Nf(a){a=a||"";if(window.spf){var b=a.match(Mf);spf.style.load(a,b?b[1]:"",void 0)}else Of(a)}
function Of(a){var b=Pf(a),c=document.getElementById(b),d=c&&xd(c,"loaded");d||c&&!d||(c=Qf(a,b,function(){xd(c,"loaded")||(yd(c),Jd(b),S(x(Id,b),0))}))}
function Qf(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Db(a);d.rel="stylesheet";d.href=lb(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Pf(a){var b=document.createElement("A");a=qb(a);tb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Aa(b)}
;var V={},Rf=(V["api.invalidparam"]=2,V.auth=150,V["drm.auth"]=150,V["heartbeat.net"]=150,V["heartbeat.servererror"]=150,V["heartbeat.stop"]=150,V["html5.unsupportedads"]=5,V["fmt.noneavailable"]=5,V["fmt.decode"]=5,V["fmt.unplayable"]=5,V["html5.missingapi"]=5,V["html5.unsupportedlive"]=5,V["drm.unavailable"]=5,V);var Sf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Tf;var Uf=Ha;Uf=Uf.toLowerCase();if(-1!=Uf.indexOf("android")){var Vf=Uf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Vf)Tf=parseFloat(Vf[1]);else{var Wf=[],Xf=0,Yf;for(Yf in Sf)Wf[Xf++]=Yf;var Zf=Uf.match("("+Wf.join("|")+")");Tf=Zf?Sf[Zf[0]]:0}}else Tf=void 0;var $f=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],ag=['audio/mp4; codecs="mp4a.40.2"'];var bg=u("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",bg,void 0);var cg=0;function dg(a){bg[a]=bg[a]||{count:0};var b=bg[a];b.count++;b.time=M();cg||(cg=xe(eg,0));return 10<b.count?(11==b.count&&se(Error("CSI data exceeded logging limit with key: "+a)),!0):!1}
function eg(){var a=M(),b;for(b in bg)6E4<a-bg[b].time&&delete bg[b];cg=0}
;function fg(a,b){this.version=a;this.args=b}
;function gg(a){this.topic=a}
gg.prototype.toString=function(){return this.topic};var hg=u("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.D;K.prototype.publish=K.prototype.O;K.prototype.clear=K.prototype.clear;t("ytPubsub2Pubsub2Instance",hg,void 0);var ig=u("ytPubsub2Pubsub2SubscribedKeys")||{};t("ytPubsub2Pubsub2SubscribedKeys",ig,void 0);var jg=u("ytPubsub2Pubsub2TopicToKeys")||{};t("ytPubsub2Pubsub2TopicToKeys",jg,void 0);var kg=u("ytPubsub2Pubsub2IsAsync")||{};t("ytPubsub2Pubsub2IsAsync",kg,void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function lg(a,b){var c=u("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function mg(){var a=O("TIMING_TICK_EXPIRATION");a||(a={},N("TIMING_TICK_EXPIRATION",a));return a}
function ng(){var a=mg(),b;for(b in a)ye(a[b]);N("TIMING_TICK_EXPIRATION",{})}
;function og(a,b){fg.call(this,1,arguments)}
n(og,fg);function pg(a,b){fg.call(this,1,arguments)}
n(pg,fg);var qg=new gg("aft-recorded"),rg=new gg("timing-sent");var W=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};var sg=y().toString();var tg={vc:!0},ug={ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",plid:"videoId",fmt:"playerInfo.itag",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},vg="ap c cver ei srt yt_fss yt_li GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid ad_allowed ad_docid ba cmt ncnp nr p pa paused pc prerender psc rc start vpil vpni vps yt_abt yt_ad_an yt_eil yt_fn yt_fs yt_pft yt_pl yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
wg=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],xg=!1;
function yg(a){if("_"!=a[0]){var b=a;W.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),W.mark(b))}b=zg();var c=M();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=mg();if(c=b[a])ye(c),b[a]=0;Ag()["tick_"+a]=void 0;M();R("csi_on_gel")?(b=Bg(),"_start"==a?dg("baseline_"+b)||df("latencyActionBaselined",{clientActionNonce:b},gf,void 0):dg("tick_"+a+"_"+b)||df("latencyActionTicked",{tickName:a,clientActionNonce:b},gf,void 0),a=!0):a=!1;if(a=!a)a=!u("yt.timing.pingSent_");if(a&&(b=P("TIMING_ACTION"),
a=zg(),u("ytglobal.timingready_")&&b&&a._start&&(b=Cg()))){R("tighter_critical_section")&&!xg&&(lg(qg,new og(Math.round(b-a._start),void 0)),xg=!0);b=!0;c=O("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Dg()}}
function Eg(){var a=Fg().info.yt_lt="hot_bg";Ag().info_yt_lt=a;if(R("csi_on_gel"))if("yt_lt"in ug){var b={},c=ug.yt_lt.split(".");0<=Ba(wg,c)&&(a=!!a);for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=Bg();c=Object.keys(b).join("");dg("info_"+c+"_"+a)||(b.clientActionNonce=a,df("latencyActionInfo",b,gf))}else 0<=Ba(vg,"yt_lt")||Q(Error("Unknown label yt_lt logged with GEL CSI."))}
function Cg(){var a=zg();if(a.aft)return a.aft;for(var b=O("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Dg(){ng();if(!R("csi_on_gel")){var a=zg(),b=Fg().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&oa(a[d])){var e=d.slice(1);if(e in tg){var f=Ca(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=u("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Gg(f,e),Hg(),Ig(),Jg(!1,void 0),O("TIMING_ACTION")&&N("PREVIOUS_ACTION",O("TIMING_ACTION")),N("TIMING_ACTION","")}else{var g=O("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:O("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+u("ytplayer.config.assets.js");(l=W.getEntriesByName?W.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):
delete b.h5jse}a.aft=Cg();Kg()&&"youtube"==g&&(Eg(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=M();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=u("ytdebug.logTiming"))&&a(f,b);Gg(f,e,void 0);lg(rg,new pg(b.aft+(h||0),void 0))}}}
var Ig=v(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||la,W);
function Gg(a,b,c){if(R("debug_csi_data")){var d=u("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||qe(a,void 0)}catch(f){qe(a,void 0)}else qe(a);Jg(!0,c)}
function Bg(){var a=Fg().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=y();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(sg)for(b=1,c=0;c<sg.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^sg.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");Fg().nonce=a}return a}
function zg(){return Fg().tick}
function Ag(){var a=Fg();"gel"in a||(a.gel={});return a.gel}
function Fg(){return u("ytcsi.data_")||Hg()}
function Hg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function Jg(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Kg(){var a=zg(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Fg().info.yt_pvis}
;function Lg(a,b){I.call(this);this.u=this.j=a;this.M=b;this.A=!1;this.g={};this.V=this.L=null;this.N=new K;sc(this,x(tc,this.N));this.i={};this.G=this.W=this.h=this.ea=this.b=null;this.R=!1;this.H=this.w=this.m=this.K=null;this.X={};this.wa=["onReady"];this.T=new If(this);sc(this,x(tc,this.T));this.ca=null;this.la=NaN;this.U={};Mg(this);this.C("onDetailedError",v(this.La,this));this.C("onTabOrderChange",v(this.xa,this));this.C("onTabAnnounce",v(this.ma,this));this.C("WATCH_LATER_VIDEO_ADDED",v(this.Ma,
this));this.C("WATCH_LATER_VIDEO_REMOVED",v(this.Na,this));qc||(this.C("onMouseWheelCapture",v(this.Ja,this)),this.C("onMouseWheelRelease",v(this.Ka,this)));this.C("onAdAnnounce",v(this.ma,this));this.I=new If(this);sc(this,x(tc,this.I));this.da=!1;this.ba=null}
z(Lg,I);var Ng=["fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];k=Lg.prototype;k.ka=function(a,b){this.f||(Og(this,a),Pg(this,b),this.A&&Qg(this))};
function Og(a,b){a.ea=b;a.b=Hf(b);a.h=a.b.attrs.id||a.h;"video-player"==a.h&&(a.h=a.M,a.b.attrs.id=a.M);a.u.id==a.h&&(a.h+="-player",a.b.attrs.id=a.h);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.M;a.W||(a.W=Rg(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.u.style.width=Fb(Number(c)||c));if(c=a.b.attrs.height)a.u.style.height=Fb(Number(c)||c)}
k.Aa=function(){return this.ea};
function Qg(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function Sg(a){var b=a.b&&a.b.args;if(b&&b.fflags){var c=b.el;b=b.fflags;if(("detailpage"==c||"profilepage"==c)&&0<=b.indexOf("web_player_disable_flash_watch=true")||"embedded"==c&&0<=b.indexOf("web_player_disable_flash_embed=true"))return!1}if(!q(a.b.disable.flash)){c=a.b.disable;b=Lf.getInstance();var d=a.b.minVersion;d="string"==typeof d?d.split("."):[d,void 0,void 0];d[0]=parseInt(d[0],10)||0;d[1]=parseInt(d[1],10)||0;d[2]=parseInt(d[2],10)||0;c.flash=!(b.b>d[0]||b.b==d[0]&&b.f>d[1]||b.b==d[0]&&
b.f==d[1]&&b.g>=d[2])}return!a.b.disable.flash}
function Tg(a,b){var c=a.b,d=c&&c.args&&c.args.fflags;!d||0>d.indexOf("web_player_flash_fallback_killswitch=true")||b&&(5!=(Rf[b.errorCode]||5)||-1==Ng.indexOf(b.errorCode))||!Sg(a)||((d=X(a))&&d.stopVideo&&d.stopVideo(),d&&d.getUpdatedConfigurationData&&(c=d.getUpdatedConfigurationData(),c=Gf(c)),c.args.autoplay=1,c.args.html5_unavailable="1",Og(a,c),Pg(a,"flash"))}
function Pg(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&Sg(a))){if(!q(a.b.disable.html5)){c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Tf)var d=!0;else{a:{var e=c;c=u("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),t("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType){e=e?$f:ag;for(var f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=Ug(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Sg(a)?"flash":"unsupported":"html5"}("flash"==b?a.bb:a.cb).call(a)}}
function Ug(a){var b=!0,c=X(a);c&&a.b&&(a=a.b,b=xd(c,"version")==a.assets.js);return b&&!!u("yt.player.Application.create")}
k.cb=function(){if(!this.R){var a=Ug(this);if(a&&"html5"==Vg(this))this.G="html5",this.A||this.J();else if(Wg(this),this.G="html5",a&&this.m)this.j.appendChild(this.m),this.J();else{this.b.loaded=!0;var b=!1;this.K=v(function(){b=!0;var a=this.j,d=Hf(this.b);u("yt.player.Application.create")(a,d);this.J()},this);
this.R=!0;a?this.K():(Td(this.b.assets.js,this.K),Nf(this.b.assets.css),Xg(this)&&!b&&t("yt.player.Application.create",null,void 0))}}};
k.bb=function(){var a=Hf(this.b);if(!this.w){var b=X(this);b&&(this.w=document.createElement("SPAN"),this.w.tabIndex=0,Jf(this.T,this.w,"focus",this.pa),this.H=document.createElement("SPAN"),this.H.tabIndex=0,Jf(this.T,this.H,"focus",this.pa),b.parentNode&&b.parentNode.insertBefore(this.w,b),b.parentNode&&b.parentNode.insertBefore(this.H,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Vg(this))this.G="flash",this.A||this.J();else{Wg(this);this.G=
"flash";this.b.loaded=!0;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.j;var c=a.url;if(c){b=r(b)?xb(b):b;var d=Pa(a.attrs);d.tabindex=0;var e=Pa(a.params);e.flashvars=Lb(a.args);if(rd){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;a=document.createElement("object");for(var f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type=
"application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var l in e)a.setAttribute(l,e[l])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.J()}};
k.pa=function(){X(this).focus()};
function X(a){var b=xb(a.h);!b&&a.u&&a.u.querySelector&&(b=a.u.querySelector("#"+a.h));return b}
k.J=function(){if(!this.f){var a=X(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.R=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Tg(this);else{Mg(this);this.A=!0;a=X(this);a.addEventListener&&(this.L=Yg(this,a,"addEventListener"));a.removeEventListener&&(this.V=Yg(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=Yg(this,a,d))}for(var e in this.i)this.L(e,
this.i[e]);Qg(this);this.W&&this.W(this.g);this.N.O("onReady",this.g)}else this.la=S(v(this.J,this),50)}};
function Yg(a,b,c){var d=b[c];return function(){try{return a.ca=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ca=e,Q(e,"WARNING"))}}}
function Mg(a){a.A=!1;if(a.V)for(var b in a.i)a.V(b,a.i[b]);for(var c in a.U)window.clearTimeout(parseInt(c,10));a.U={};a.L=null;a.V=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=v(a.C,a);a.g.removeEventListener=v(a.Sa,a);a.g.destroy=v(a.dispose,a);a.g.getLastError=v(a.Ba,a);a.g.getPlayerType=v(a.Ca,a);a.g.getCurrentVideoConfig=v(a.Aa,a);a.g.loadNewVideoConfig=v(a.ka,a);a.g.isReady=v(a.eb,a)}
k.eb=function(){return this.A};
k.C=function(a,b){if(!this.f){var c=Rg(this,b);if(c){if(!(0<=Ba(this.wa,a)||this.i[a])){var d=Zg(this,a);this.L&&this.L(a,d)}this.N.subscribe(a,c);"onReady"==a&&this.A&&S(x(c,this.g),0)}}};
k.Sa=function(a,b){if(!this.f){var c=Rg(this,b);c&&ad(this.N,a,c)}};
function Rg(a,b){var c=b;if("string"==typeof b){if(a.X[b])return a.X[b];c=function(){var a=u(b);a&&a.apply(p,arguments)};
a.X[b]=c}return c?c:null}
function Zg(a,b){var c="ytPlayer"+b+a.M;a.i[b]=c;p[c]=function(c){var d=S(function(){if(!a.f){a.N.O(b,c);var e=a.U,g=String(d);g in e&&delete e[g]}},0);
Oa(a.U,String(d))};
return c}
k.xa=function(a){a=a?zb:yb;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.w||b==this.H||(b.focus(),b!=document.activeElement));)b=a(b)};
k.ma=function(a){Jd("a11y-announce",a)};
k.La=function(a){Tg(this,a)};
k.Ma=function(a){Jd("WATCH_LATER_VIDEO_ADDED",a)};
k.Na=function(a){Jd("WATCH_LATER_VIDEO_REMOVED",a)};
k.Ja=function(){if(!this.da){if(rc){var a=document,b=a.scrollingElement?a.scrollingElement:$a||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement;a=a.parentWindow||a.defaultView;this.ba=Xa&&gb("10")&&a.pageYOffset!=b.scrollTop?new vb(b.scrollLeft,b.scrollTop):new vb(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);Jf(this.I,window,"scroll",this.Qa);Jf(this.I,this.j,"touchmove",this.Pa)}else Jf(this.I,this.j,"mousewheel",this.qa),Jf(this.I,this.j,"wheel",this.qa);this.da=
!0}};
k.Ka=function(){Kf(this.I);this.da=!1};
k.qa=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
k.Qa=function(){window.scrollTo(this.ba.b,this.ba.f)};
k.Pa=function(a){a.preventDefault()};
k.Ca=function(){return this.G||Vg(this)};
k.Ba=function(){return this.ca};
function Vg(a){return(a=X(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Wg(a){yg("dcp");a.cancel();Mg(a);a.G=null;a.b&&(a.b.loaded=!1);var b=X(a);"html5"==Vg(a)?Ug(a)||!Xg(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null):b&&b.destroy&&b.destroy();b=a.j;for(var c;c=b.firstChild;)b.removeChild(c);Kf(a.T);a.w=null;a.H=null}
k.cancel=function(){this.K&&Sd(this.b.assets.js,this.K);window.clearTimeout(this.la);this.R=!1};
k.l=function(){Wg(this);if(this.m&&this.b&&this.m.destroy)try{this.m.destroy()}catch(b){Q(b)}this.X=null;for(var a in this.i)p[this.i[a]]=null;this.ea=this.b=this.g=null;delete this.j;delete this.u;Lg.o.l.call(this)};
function Xg(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var $g={},ah="player_uid_"+(1E9*Math.random()>>>0);function bh(a){var b="player";b=r(b)?xb(b):b;a=Gf(a);var c=ah+"_"+(b[sa]||(b[sa]=++ta)),d=$g[c];if(d)return d.ka(a),d.g;d=new Lg(b,c);$g[c]=d;Jd("player-added",d.g);sc(d,x(ch,d));S(function(){d.ka(a)},0);
return d.g}
function ch(a){$g[a.M]=null}
;function dh(a,b,c){if(ra(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function eh(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return dh(a)}
function fh(a,b,c,d){if(ra(a)&&!oa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function Y(a){var b=a.video_id||a.videoId;if(r(b)){var c=kf()||{},d=kf()||{};q(void 0)?d[b]=void 0:delete d[b];var e=y()+3E5,f=mf;if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
function gh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
;function hh(a){I.call(this);this.g=a;this.g.subscribe("command",this.ta,this);this.h={};this.i=!1}
z(hh,I);k=hh.prototype;k.start=function(){this.i||this.f||(this.i=!0,ih(this.g,"RECEIVING"))};
k.ta=function(a,b){if(this.i&&!this.f){var c=b||{};switch(a){case "addEventListener":if(r(c.event)&&(c=c.event,!(c in this.h))){var d=v(this.Ua,this,c);this.h[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":r(c.event)&&jh(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=kh(a,b||{}),c=this.b[a].apply(this.b,c),(c=lh(a,c))&&this.i&&!this.f&&ih(this.g,a,c))}}};
k.Ua=function(a,b){this.i&&!this.f&&ih(this.g,a,this.fa(a,b))};
k.fa=function(a,b){if(null!=b)return{value:b}};
function jh(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
k.l=function(){var a=this.g;a.f||ad(a.b,"command",this.ta,this);this.g=null;for(var b in this.h)jh(this,b);hh.o.l.call(this)};function mh(a,b){hh.call(this,b);this.b=a;this.start()}
z(mh,hh);mh.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
mh.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function kh(a,b){switch(a){case "loadVideoById":return b=dh(b),Y(b),[b];case "cueVideoById":return b=dh(b),Y(b),[b];case "loadVideoByPlayerVars":return Y(b),[b];case "cueVideoByPlayerVars":return Y(b),[b];case "loadPlaylist":return b=fh(b),Y(b),[b];case "cuePlaylist":return b=fh(b),Y(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function lh(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
mh.prototype.fa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return mh.o.fa.call(this,a,b)};
mh.prototype.l=function(){mh.o.l.call(this);delete this.b};function nh(a,b,c,d){I.call(this);this.g=b||null;this.u="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.A=!!a;this.m=v(this.w,this);window.addEventListener("message",this.m)}
n(nh,I);
nh.prototype.w=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.g&&a.source!=this.g)&&r(a.data)){try{var b=Bc(a.data)}catch(c){return}if(!(null==b||this.A&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.h=this.u=a.origin:Q(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(this.j&&!(0<=Ba(this.j,b.func))||this.i(b.func,
b.args))}}};
nh.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=Cc(a);c.postMessage(d,this.u)}catch(e){Q(e,"WARNING")}}};
nh.prototype.l=function(){window.removeEventListener("message",this.m);I.prototype.l.call(this)};function oh(a,b,c){nh.call(this,a,b,c||O("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(oh,nh);function ph(){var a=!!O("WIDGET_ID_ENFORCE");a=this.f=new oh(a);var b=v(this.Ra,this);a.i=b;a.j=null;this.f.channel="widget";if(a=O("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
k=ph.prototype;k.Ra=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.i[c]||"onReady"==c||(this.addEventListener(c,qh(this,c)),this.i[c]=!0)}else this.va(a,b)};
k.va=function(){};
function qh(a,b){return v(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.za=function(){this.j=!0;this.sendMessage("initialDelivery",this.ga());this.sendMessage("onReady");C(this.h,this.ua,this);this.h=[]};
k.ga=function(){return null};
function rh(a,b){a.sendMessage("infoDelivery",b)}
k.ua=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
k.sendMessage=function(a,b){this.ua({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function sh(a){ph.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.Oa,this));this.addEventListener("onVideoProgress",v(this.Ya,this));this.addEventListener("onVolumeChange",v(this.Za,this));this.addEventListener("onApiChange",v(this.Ta,this));this.addEventListener("onPlaybackQualityChange",v(this.Va,this));this.addEventListener("onPlaybackRateChange",v(this.Wa,this));this.addEventListener("onStateChange",v(this.Xa,this))}
z(sh,ph);k=sh.prototype;k.va=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&gh(a)){var c=b;if(ra(c[0])&&!oa(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=dh.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=eh.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=fh.apply(window,c)}c=d}Y(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);gh(a)&&rh(this,this.ga())}};
k.Oa=function(){var a=v(this.za,this);this.f.b=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.ga=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ea(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=y()/1E3;return b};
k.Xa=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());rh(this,a)};
k.Va=function(a){rh(this,{playbackQuality:a})};
k.Wa=function(a){rh(this,{playbackRate:a})};
k.Ta=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.Za=function(){rh(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Ya=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());rh(this,a)};
k.dispose=function(){sh.o.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function th(){I.call(this);this.b=new K;sc(this,x(tc,this.b))}
z(th,I);th.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
th.prototype.D=function(a){return this.f?!1:this.b.D(a)};
th.prototype.j=function(a,b){this.f||this.b.O.apply(this.b,arguments)};function uh(a,b,c){th.call(this);this.g=a;this.h=b;this.i=c}
z(uh,th);function ih(a,b,c){if(!a.f){var d=a.g;d.f||a.h!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(Cc(a),d.h))}}
uh.prototype.l=function(){this.h=this.g=null;uh.o.l.call(this)};function vh(a,b,c){I.call(this);this.b=a;this.h=c;this.i=Je(window,"message",v(this.j,this));this.g=new uh(this,a,b);sc(this,x(tc,this.g))}
z(vh,I);vh.prototype.j=function(a){var b;if(b=!this.f)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,r(a))){try{a=Bc(a)}catch(d){return}a.command&&(b=this.g,b.f||b.j("command",a.command,a.data))}};
vh.prototype.l=function(){Ke(this.i);this.b=null;vh.o.l.call(this)};function wh(){var a=Ka(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||O("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||R("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=Pa(xh);return new J(function(c,d){b.P=function(a){ae(a)?c(a):d(new yh("Request failed, status="+a.status,"net.badstatus"))};
b.onError=function(){d(new yh("Unknown request error","net.unknown"))};
b.aa=function(){d(new yh("Request timed out","net.timeout"))};
he(a,b)})}
var zh={fb:"net.badstatus",gb:"net.retryexhausted",TIMEOUT:"net.timeout",UNKNOWN:"net.unknown"};function yh(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(yh,B);var Ah=yh;function Bh(a){this.g=void 0===a?null:a;this.f=0;this.b=null}
Bh.prototype.then=function(a,b,c){return this.g?this.g.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),Jc(a)?a:Ch(a)):2===this.f&&b?(a=b.call(c,this.b),Jc(a)?a:Dh(a)):this};
Bh.prototype.getValue=function(){return this.b};
Ic(Bh);function Dh(a){var b=new Bh;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function Ch(a){var b=new Bh;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function Eh(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Fh;this.isTimeout=a instanceof Ah&&a.errorCode==zh.TIMEOUT;this.isCanceled=a instanceof Rc}
n(Eh,B);Eh.prototype.name="BiscottiError";function Fh(){B.call(this,"Biscotti ID is missing from server")}
n(Fh,B);Fh.prototype.name="BiscottiMissingError";var xh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Gh=null;function Hh(){if("1"===Ka(O("PLAYER_CONFIG",{}),"args","privembed"))return Oc(Error("Biscotti ID is not available in private embed mode"));Gh||(Gh=Qc(wh().then(Ih),function(a){return Jh(2,a)}));
return Gh}
function Ih(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Fh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Fh;a=a.id;Kh(a);Gh=Ch(a);Lh(18E5,2);return a}
function Jh(a,b){var c=new Eh(b);Kh("");Gh=Dh(c);0<a&&Lh(12E4,a-1);throw c;}
function Lh(a,b){S(function(){Qc(wh().then(Ih,function(a){return Jh(b,a)}),la)},a)}
function Kh(a){t("yt.ads.biscotti.lastId_",a,void 0)}
;function Mh(){}
function Nh(a){if("1"!==Ka(O("PLAYER_CONFIG",{}),"args","privembed")){a&&!u("yt.ads.biscotti.getId_")&&t("yt.ads.biscotti.getId_",Hh,void 0);try{try{var b=u("yt.ads.biscotti.getId_");var c=b?b():Hh()}catch(d){c=Oc(d)}c.then(Oh,Mh);S(Nh,18E5)}catch(d){Q(d)}}}
var Ph=0;
function Oh(a){a:{try{var b=window.top.location.href}catch(Qa){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:Vb,flash:qd||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c=void 0===c?A:c;try{var d=c.history.length}catch(Qa){d=0}b.u_his=d;b.u_java=!!A.navigator&&"unknown"!==typeof A.navigator.javaEnabled&&!!A.navigator.javaEnabled&&A.navigator.javaEnabled();A.screen&&(b.u_h=A.screen.height,b.u_w=A.screen.width,b.u_ah=A.screen.availHeight,b.u_aw=A.screen.availWidth,b.u_cd=
A.screen.colorDepth);A.navigator&&A.navigator.plugins&&(b.u_nplug=A.navigator.plugins.length);A.navigator&&A.navigator.mimeTypes&&(b.u_nmime=A.navigator.mimeTypes.length);b.bid=a;b.ca_type=pd?"flash":"image";if(R("enable_server_side_search_pyv")||R("enable_server_side_mweb_search_pyv")){a=window;try{var e=a.screenX;var f=a.screenY}catch(Qa){}try{var g=a.outerWidth;var h=a.outerHeight}catch(Qa){}try{var l=a.innerWidth;var m=a.innerHeight}catch(Qa){}e=[a.screenLeft,a.screenTop,e,f,a.screen?a.screen.availWidth:
void 0,a.screen?a.screen.availTop:void 0,g,h,l,m];f=window.top||A;try{if(f.document&&!f.document.body)var w=new wb(-1,-1);else{var H=(f||window).document,Ad="CSS1Compat"==H.compatMode?H.documentElement:H.body;w=(new wb(Ad.clientWidth,Ad.clientHeight)).round()}var ya=w}catch(Qa){ya=new wb(-12245933,-12245933)}w=0;window.SVGElement&&document.createElementNS&&(w|=1);ya={bc:w,bih:ya.height,biw:ya.width,brdim:e.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[wa.webkitVisibilityState||wa.mozVisibilityState||
wa.visibilityState||""]||0,wgl:!!A.WebGLRenderingContext};for(var Bd in ya)b[Bd]=ya[Bd]}b.bsq=Ph++;ne("//www.youtube.com/ad_data_204",{Da:!1,B:b})}
;function Qh(){this.b=O("ALT_PREF_COOKIE_NAME","PREF");var a=ac.get(""+this.b,void 0);if(a){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
ma(Qh);var Z=u("yt.prefs.UserPrefs.prefs_")||{};t("yt.prefs.UserPrefs.prefs_",Z,void 0);function Rh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Sh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Th(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Qh.prototype.get=function(a,b){Sh(a);Rh(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
Qh.prototype.set=function(a,b){Sh(a);Rh(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
Qh.prototype.remove=function(a){Sh(a);Rh(a);delete Z[a]};
Qh.prototype.clear=function(){Z={}};var Uh=null,Vh=null,Wh=null,Xh={};function Yh(a){df(a.payload_name,a.payload,gf,void 0,void 0)}
function Zh(a){var b=a.id;a=a.ve_type;var c=Pe++;a=new Oe(void 0,a,c,void 0,void 0);Xh[b]=a;b=qf();c=pf();b&&c&&ef(b,c,a)}
function $h(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(N("client-screen-nonce",b),N("ROOT_VE_TYPE",a),a=pf()))for(var c in Xh){var d=Xh[c];d&&ef(b,a,d)}}
function ai(a){Xh[a.id]=new Oe(a.tracking_params)}
function bi(a){var b=qf();a=Xh[a.id];b&&a&&ff(gf,{click:{csn:b,visualElement:Qe(a)}},void 0,void 0)}
function ci(a){a=a.ids;var b=qf();if(b){for(var c=[],d=0;d<a.length;d++){var e=Xh[a[d]];e&&c.push(e)}c.length&&hf(b,c)}}
function di(){var a=Uh;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",N,void 0);t("yt.config.set",N,void 0);t("yt.setMsg",we,void 0);t("yt.msgs.set",we,void 0);t("yt.logging.errors.log",se,void 0);
t("writeEmbed",function(){var a=O("PLAYER_CONFIG",void 0);Nh(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=O("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);O("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Y(a.args);Uh=a=bh(a);a.addEventListener("onScreenChanged",$h);a.addEventListener("onLogClientVeCreated",Zh);a.addEventListener("onLogServerVeCreated",ai);a.addEventListener("onLogToGel",Yh);
a.addEventListener("onLogVeClicked",bi);a.addEventListener("onLogVesShown",ci);a.addEventListener("onReady",di);b=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?Wh=new sh(a):O("ENABLE_POST_API")&&r(b)&&r(c)&&(Vh=new vh(window.parent,b,c),Wh=new mh(a,Vh.g));O("BG_P")&&(O("BG_I")||O("BG_IU"))&&Vd();Be()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){qe(a+"mac_204?action_fcts=1");return!0},void 0);
var ei=ud(function(){yg("ol");var a=Qh.getInstance(),b=1<window.devicePixelRatio;if(!!((Th("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Th(c)||0;d=b?d|67108864:d&-67108865;0==d?delete Z[c]:Z[c]=d.toString(16).toString();a=a.b;b=[];for(var e in Z)b.push(e+"="+escape(Z[e]));rf(a,b.join("&"),63072E3)}}),fi=ud(function(){var a=Uh;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();O("PL_ATT")&&(Ud=null);a=0;for(var b=ze.length;a<b;a++)ye(ze[a]);ze.length=0;Rd("//static.doubleclick.net/instream/ad_status.js");Ae=!1;N("DCLKSTAT",0);uc(Wh,Vh);if(a=Uh)a.removeEventListener("onScreenChanged",$h),a.removeEventListener("onLogClientVeCreated",Zh),a.removeEventListener("onLogServerVeCreated",ai),a.removeEventListener("onLogToGel",Yh),a.removeEventListener("onLogVeClicked",bi),a.removeEventListener("onLogVesShown",ci),a.removeEventListener("onReady",
di),a.destroy();Xh={}});
window.addEventListener?(window.addEventListener("load",ei),window.addEventListener("unload",fi)):window.attachEvent&&(window.attachEvent("onload",ei),window.attachEvent("onunload",fi));}).call(this);
