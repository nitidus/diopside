/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

if(void 0===jQuery){var jQuery;jQuery="function"==typeof require?$=require("jquery"):$}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,a){return jQuery.easing[jQuery.easing.def](t,e,i,n,a)},easeInQuad:function(t,e,i,n,a){return n*(e/=a)*e+i},easeOutQuad:function(t,e,i,n,a){return-n*(e/=a)*(e-2)+i},easeInOutQuad:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,a){return n*(e/=a)*e*e+i},easeOutCubic:function(t,e,i,n,a){return n*((e=e/a-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,a){return n*(e/=a)*e*e*e+i},easeOutQuart:function(t,e,i,n,a){return-n*((e=e/a-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,a){return n*(e/=a)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,a){return n*((e=e/a-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,a){return-n*Math.cos(e/a*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,a){return n*Math.sin(e/a*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,a){return-n/2*(Math.cos(Math.PI*e/a)-1)+i},easeInExpo:function(t,e,i,n,a){return 0==e?i:n*Math.pow(2,10*(e/a-1))+i},easeOutExpo:function(t,e,i,n,a){return e==a?i+n:n*(1-Math.pow(2,-10*e/a))+i},easeInOutExpo:function(t,e,i,n,a){return 0==e?i:e==a?i+n:(e/=a/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(2-Math.pow(2,-10*--e))+i},easeInCirc:function(t,e,i,n,a){return-n*(Math.sqrt(1-(e/=a)*e)-1)+i},easeOutCirc:function(t,e,i,n,a){return n*Math.sqrt(1-(e=e/a-1)*e)+i},easeInOutCirc:function(t,e,i,n,a){return(e/=a/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,a){var o=1.70158,r=0,s=n;if(0==e)return i;if(1==(e/=a))return i+n;if(r||(r=.3*a),s<Math.abs(n)){s=n;o=r/4}else o=r/(2*Math.PI)*Math.asin(n/s);return-s*Math.pow(2,10*(e-=1))*Math.sin((e*a-o)*(2*Math.PI)/r)+i},easeOutElastic:function(t,e,i,n,a){var o=1.70158,r=0,s=n;if(0==e)return i;if(1==(e/=a))return i+n;if(r||(r=.3*a),s<Math.abs(n)){s=n;o=r/4}else o=r/(2*Math.PI)*Math.asin(n/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-o)*(2*Math.PI)/r)+n+i},easeInOutElastic:function(t,e,i,n,a){var o=1.70158,r=0,s=n;if(0==e)return i;if(2==(e/=a/2))return i+n;if(r||(r=a*(.3*1.5)),s<Math.abs(n)){s=n;o=r/4}else o=r/(2*Math.PI)*Math.asin(n/s);return e<1?s*Math.pow(2,10*(e-=1))*Math.sin((e*a-o)*(2*Math.PI)/r)*-.5+i:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-o)*(2*Math.PI)/r)*.5+n+i},easeInBack:function(t,e,i,n,a,o){return void 0==o&&(o=1.70158),n*(e/=a)*e*((o+1)*e-o)+i},easeOutBack:function(t,e,i,n,a,o){return void 0==o&&(o=1.70158),n*((e=e/a-1)*e*((o+1)*e+o)+1)+i},easeInOutBack:function(t,e,i,n,a,o){return void 0==o&&(o=1.70158),(e/=a/2)<1?n/2*(e*e*((1+(o*=1.525))*e-o))+i:n/2*((e-=2)*e*((1+(o*=1.525))*e+o)+2)+i},easeInBounce:function(t,e,i,n,a){return n-jQuery.easing.easeOutBounce(t,a-e,0,n,a)+i},easeOutBounce:function(t,e,i,n,a){return(e/=a)<1/2.75?n*(7.5625*e*e)+i:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,a){return e<a/2?.5*jQuery.easing.easeInBounce(t,2*e,0,n,a)+i:.5*jQuery.easing.easeOutBounce(t,2*e-a,0,n,a)+.5*n+i}}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e+i:n/4*((e-=2)*e*e+2)+i}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(function(t){function e(t){var e=t.length,n=i.type(t);return"function"!==n&&!i.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t))}if(!t.jQuery){var i=function(t,e){return new i.fn.init(t,e)};i.isWindow=function(t){return null!=t&&t==t.window},i.type=function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?a[r.call(t)]||"object":typeof t},i.isArray=Array.isArray||function(t){return"array"===i.type(t)},i.isPlainObject=function(t){var e;if(!t||"object"!==i.type(t)||t.nodeType||i.isWindow(t))return!1;try{if(t.constructor&&!o.call(t,"constructor")&&!o.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}for(e in t);return void 0===e||o.call(t,e)},i.each=function(t,i,n){var a=0,o=t.length,r=e(t);if(n){if(r)for(;o>a&&!1!==i.apply(t[a],n);a++);else for(a in t)if(!1===i.apply(t[a],n))break}else if(r)for(;o>a&&!1!==i.call(t[a],a,t[a]);a++);else for(a in t)if(!1===i.call(t[a],a,t[a]))break;return t},i.data=function(t,e,a){if(void 0===a){var o=(r=t[i.expando])&&n[r];if(void 0===e)return o;if(o&&e in o)return o[e]}else if(void 0!==e){var r=t[i.expando]||(t[i.expando]=++i.uuid);return n[r]=n[r]||{},n[r][e]=a,a}},i.removeData=function(t,e){var a=t[i.expando],o=a&&n[a];o&&i.each(e,function(t,e){delete o[e]})},i.extend=function(){var t,e,n,a,o,r,s=arguments[0]||{},l=1,c=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==i.type(s)&&(s={}),l===c&&(s=this,l--);c>l;l++)if(null!=(o=arguments[l]))for(a in o)t=s[a],n=o[a],s!==n&&(u&&n&&(i.isPlainObject(n)||(e=i.isArray(n)))?(e?(e=!1,r=t&&i.isArray(t)?t:[]):r=t&&i.isPlainObject(t)?t:{},s[a]=i.extend(u,r,n)):void 0!==n&&(s[a]=n));return s},i.queue=function(t,n,a){if(t){n=(n||"fx")+"queue";var o=i.data(t,n);return a?(!o||i.isArray(a)?o=i.data(t,n,function(t,i){var n=i||[];return null!=t&&(e(Object(t))?function(t,e){for(var i=+e.length,n=0,a=t.length;i>n;)t[a++]=e[n++];if(i!==i)for(;void 0!==e[n];)t[a++]=e[n++];t.length=a}(n,"string"==typeof t?[t]:t):[].push.call(n,t)),n}(a)):o.push(a),o):o||[]}},i.dequeue=function(t,e){i.each(t.nodeType?[t]:t,function(t,n){e=e||"fx";var a=i.queue(n,e),o=a.shift();"inprogress"===o&&(o=a.shift()),o&&("fx"===e&&a.unshift("inprogress"),o.call(n,function(){i.dequeue(n,e)}))})},i.fn=i.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),n=this.offset(),a=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:i(t).offset();return n.top-=parseFloat(e.style.marginTop)||0,n.left-=parseFloat(e.style.marginLeft)||0,t.style&&(a.top+=parseFloat(t.style.borderTopWidth)||0,a.left+=parseFloat(t.style.borderLeftWidth)||0),{top:n.top-a.top,left:n.left-a.left}}};var n={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var a={},o=a.hasOwnProperty,r=a.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)a["[object "+s[l]+"]"]=s[l].toLowerCase();i.fn.init.prototype=i.fn,t.Velocity={Utilities:i}}}(window),function(t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):t()}(function(){return function(t,e,i,n){function a(t){for(var e=-1,i=t?t.length:0,n=[];++e<i;){var a=t[e];a&&n.push(a)}return n}function o(t){return v.isWrapped(t)?t=[].slice.call(t):v.isNode(t)&&(t=[t]),t}function r(t){var e=p.data(t,"velocity");return null===e?n:e}function s(t){return function(e){return Math.round(e*t)*(1/t)}}function l(t,i,n,a){function o(t,e){return 1-3*e+3*t}function r(t,e){return 3*e-6*t}function s(t){return 3*t}function l(t,e,i){return((o(e,i)*t+r(e,i))*t+s(e))*t}function c(t,e,i){return 3*o(e,i)*t*t+2*r(e,i)*t+s(e)}function u(e,i){for(var a=0;v>a;++a){var o=c(i,t,n);if(0===o)return i;i-=(l(i,t,n)-e)/o}return i}function d(){for(var e=0;b>e;++e)k[e]=l(e*w,t,n)}function p(e,i,a){var o,r,s=0;do{r=i+(a-i)/2,o=l(r,t,n)-e,o>0?a=r:i=r}while(Math.abs(o)>m&&++s<y);return r}function h(e){for(var i=0,a=1,o=b-1;a!=o&&k[a]<=e;++a)i+=w;var r=i+(e-k[--a])/(k[a+1]-k[a])*w,s=c(r,t,n);return s>=g?u(e,r):0==s?r:p(e,i,i+w)}function f(){T=!0,(t!=i||n!=a)&&d()}var v=4,g=.001,m=1e-7,y=10,b=11,w=1/(b-1),x="Float32Array"in e;if(4!==arguments.length)return!1;for(var C=0;4>C;++C)if("number"!=typeof arguments[C]||isNaN(arguments[C])||!isFinite(arguments[C]))return!1;t=Math.min(t,1),n=Math.min(n,1),t=Math.max(t,0),n=Math.max(n,0);var k=x?new Float32Array(b):new Array(b),T=!1,S=function(e){return T||f(),t===i&&n===a?e:0===e?0:1===e?1:l(h(e),i,a)};S.getControlPoints=function(){return[{x:t,y:i},{x:n,y:a}]};var P="generateBezier("+[t,i,n,a]+")";return S.toString=function(){return P},S}function c(t,e){var i=t;return v.isString(t)?b.Easings[t]||(i=!1):i=v.isArray(t)&&1===t.length?s.apply(null,t):v.isArray(t)&&2===t.length?w.apply(null,t.concat([e])):!(!v.isArray(t)||4!==t.length)&&l.apply(null,t),!1===i&&(i=b.Easings[b.defaults.easing]?b.defaults.easing:y),i}function u(t){if(t){var e=(new Date).getTime(),i=b.State.calls.length;i>1e4&&(b.State.calls=a(b.State.calls));for(var o=0;i>o;o++)if(b.State.calls[o]){var s=b.State.calls[o],l=s[0],c=s[2],h=s[3],f=!!h,g=null;h||(h=b.State.calls[o][3]=e-16);for(var m=Math.min((e-h)/c.duration,1),y=0,w=l.length;w>y;y++){var C=l[y],T=C.element;if(r(T)){var S=!1;if(c.display!==n&&null!==c.display&&"none"!==c.display){if("flex"===c.display){var P=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];p.each(P,function(t,e){x.setPropertyValue(T,"display",e)})}x.setPropertyValue(T,"display",c.display)}c.visibility!==n&&"hidden"!==c.visibility&&x.setPropertyValue(T,"visibility",c.visibility);for(var O in C)if("element"!==O){var E,A=C[O],I=v.isString(A.easing)?b.Easings[A.easing]:A.easing;if(1===m)E=A.endValue;else{var q=A.endValue-A.startValue;if(E=A.startValue+q*I(m,c,q),!f&&E===A.currentValue)continue}if(A.currentValue=E,"tween"===O)g=E;else{if(x.Hooks.registered[O]){var _=x.Hooks.getRoot(O),M=r(T).rootPropertyValueCache[_];M&&(A.rootPropertyValue=M)}var V=x.setPropertyValue(T,O,A.currentValue+(0===parseFloat(E)?"":A.unitType),A.rootPropertyValue,A.scrollData);x.Hooks.registered[O]&&(r(T).rootPropertyValueCache[_]=x.Normalizations.registered[_]?x.Normalizations.registered[_]("extract",null,V[1]):V[1]),"transform"===V[0]&&(S=!0)}}c.mobileHA&&r(T).transformCache.translate3d===n&&(r(T).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&x.flushTransformCache(T)}}c.display!==n&&"none"!==c.display&&(b.State.calls[o][2].display=!1),c.visibility!==n&&"hidden"!==c.visibility&&(b.State.calls[o][2].visibility=!1),c.progress&&c.progress.call(s[1],s[1],m,Math.max(0,h+c.duration-e),h,g),1===m&&d(o)}}b.State.isTicking&&k(u)}function d(t,e){if(!b.State.calls[t])return!1;for(var i=b.State.calls[t][0],a=b.State.calls[t][1],o=b.State.calls[t][2],s=b.State.calls[t][4],l=!1,c=0,u=i.length;u>c;c++){var d=i[c].element;if(e||o.loop||("none"===o.display&&x.setPropertyValue(d,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(d,"visibility",o.visibility)),!0!==o.loop&&(p.queue(d)[1]===n||!/\.velocityQueueEntryFlag/i.test(p.queue(d)[1]))&&r(d)){r(d).isAnimating=!1,r(d).rootPropertyValueCache={};var h=!1;p.each(x.Lists.transforms3D,function(t,e){var i=/^scale/.test(e)?1:0,a=r(d).transformCache[e];r(d).transformCache[e]!==n&&new RegExp("^\\("+i+"[^.]").test(a)&&(h=!0,delete r(d).transformCache[e])}),o.mobileHA&&(h=!0,delete r(d).transformCache.translate3d),h&&x.flushTransformCache(d),x.Values.removeClass(d,"velocity-animating")}if(!e&&o.complete&&!o.loop&&c===u-1)try{o.complete.call(a,a)}catch(t){setTimeout(function(){throw t},1)}s&&!0!==o.loop&&s(a),r(d)&&!0===o.loop&&!e&&(p.each(r(d).tweensContainer,function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)}),b(d,"reverse",{loop:!0,delay:o.delay})),!1!==o.queue&&p.dequeue(d,o.queue)}b.State.calls[t]=!1;for(var f=0,v=b.State.calls.length;v>f;f++)if(!1!==b.State.calls[f]){l=!0;break}!1===l&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var p,h=function(){if(i.documentMode)return i.documentMode;for(var t=7;t>4;t--){var e=i.createElement("div");if(e.innerHTML="\x3c!--[if IE "+t+"]><span></span><![endif]--\x3e",e.getElementsByTagName("span").length)return e=null,t}return n}(),f=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var i,n=(new Date).getTime();return i=Math.max(0,16-(n-t)),t=n+i,setTimeout(function(){e(n+i)},i)}}(),v={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==typeof t&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==n&&(0===t.length||"object"==typeof t[0]&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},g=!1;if(t.fn&&t.fn.jquery?(p=t,g=!0):p=e.Velocity.Utilities,8>=h&&!g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");{if(!(7>=h)){var m=400,y="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:p,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:m,easing:y,begin:n,complete:n,progress:n,display:n,visibility:n,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){p.data(t,"velocity",{isSVG:v.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==n?(b.State.scrollAnchor=e,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var w=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,i,n){var a={x:e.x+n.dx*i,v:e.v+n.dv*i,tension:e.tension,friction:e.friction};return{dx:a.v,dv:t(a)}}function i(i,n){var a={dx:i.v,dv:t(i)},o=e(i,.5*n,a),r=e(i,.5*n,o),s=e(i,n,r),l=1/6*(a.dx+2*(o.dx+r.dx)+s.dx),c=1/6*(a.dv+2*(o.dv+r.dv)+s.dv);return i.x=i.x+l*n,i.v=i.v+c*n,i}return function t(e,n,a){var o,r,s,l={x:-1,v:0,tension:null,friction:null},c=[0],u=0;for(e=parseFloat(e)||500,n=parseFloat(n)||20,a=a||null,l.tension=e,l.friction=n,(o=null!==a)?(u=t(e,n),r=u/a*.016):r=.016;s=i(s||l,r),c.push(1+s.x),u+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);return o?function(t){return c[t*(c.length-1)|0]}:u}}();b.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},p.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(t,e){b.Easings[e[0]]=l.apply(null,e[1])});var x=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(o=0;o<x.Lists.colors.length;o++){var t="color"===x.Lists.colors[o]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[o]]=["Red Green Blue Alpha",t]}var e,i,n;if(h)for(e in x.Hooks.templates){n=(i=x.Hooks.templates[e])[0].split(" ");var a=i[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),a.push(a.shift()),x.Hooks.templates[e]=[n.join(" "),a.join(" ")])}for(e in x.Hooks.templates){n=(i=x.Hooks.templates[e])[0].split(" ");for(var o in n){var r=e+n[o],s=o;x.Hooks.registered[r]=[e,s]}}},getRoot:function(t){var e=x.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return x.RegEx.valueUnwrap.test(e)&&(e=e.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(e)&&(e=x.Hooks.templates[t][1]),e},extractValue:function(t,e){var i=x.Hooks.registered[t];if(i){var n=i[0],a=i[1];return(e=x.Hooks.cleanRootPropertyValue(n,e)).toString().match(x.RegEx.valueSplit)[a]}return e},injectValue:function(t,e,i){var n=x.Hooks.registered[t];if(n){var a,o=n[0],r=n[1];return i=x.Hooks.cleanRootPropertyValue(o,i),a=i.toString().match(x.RegEx.valueSplit),a[r]=e,a.join(" ")}return i}},Normalizations:{registered:{clip:function(t,e,i){switch(t){case"name":return"clip";case"extract":var n;return x.RegEx.wrappedValueAlreadyExtracted.test(i)?n=i:(n=i.toString().match(x.RegEx.valueUnwrap),n=n?n[1].replace(/,(\s+)?/g," "):i),n;case"inject":return"rect("+i+")"}},blur:function(t,e,i){switch(t){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var n=parseFloat(i);if(!n&&0!==n){var a=i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);n=a?a[1]:0}return n;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(t,e,i){if(8>=h)switch(t){case"name":return"filter";case"extract":var n=i.toString().match(/alpha\(opacity=(.*)\)/i);return i=n?n[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(t){case"name":return"opacity";case"extract":case"inject":return i}}},register:function(){9>=h||b.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(t=0;t<x.Lists.transformsBase.length;t++)!function(){var e=x.Lists.transformsBase[t];x.Normalizations.registered[e]=function(t,i,a){switch(t){case"name":return"transform";case"extract":return r(i)===n||r(i).transformCache[e]===n?/^scale/i.test(e)?1:0:r(i).transformCache[e].replace(/[()]/g,"");case"inject":var o=!1;switch(e.substr(0,e.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(a);break;case"scal":case"scale":b.State.isAndroid&&r(i).transformCache[e]===n&&1>a&&(a=1),o=!/(\d)$/i.test(a);break;case"skew":o=!/(deg|\d)$/i.test(a);break;case"rotate":o=!/(deg|\d)$/i.test(a)}return o||(r(i).transformCache[e]="("+a+")"),r(i).transformCache[e]}}}();for(var t=0;t<x.Lists.colors.length;t++)!function(){var e=x.Lists.colors[t];x.Normalizations.registered[e]=function(t,i,a){switch(t){case"name":return e;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(a))o=a;else{var r,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(a)?r=s[a]!==n?s[a]:s.black:x.RegEx.isHex.test(a)?r="rgb("+x.Values.hexToRgb(a).join(" ")+")":/^rgba?\(/i.test(a)||(r=s.black),o=(r||a).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=h||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=h?4===a.split(" ").length&&(a=a.split(/\s+/).slice(0,3).join(" ")):3===a.split(" ").length&&(a+=" 1"),(8>=h?"rgb":"rgba")+"("+a.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(h||b.State.isAndroid&&!b.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(b.State.prefixMatches[t])return[b.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],i=0,n=e.length;n>i;i++){var a;if(a=0===i?t:e[i]+t.replace(/^\w/,function(t){return t.toUpperCase()}),v.isString(b.State.prefixElement.style[a]))return b.State.prefixMatches[t]=a,[a,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e,i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return t=t.replace(i,function(t,e,i,n){return e+e+i+i+n+n}),e=n.exec(t),e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,i,a,o){function s(t,i){function a(){c&&x.setPropertyValue(t,"display","none")}var l=0;if(8>=h)l=p.css(t,i);else{var c=!1;if(/^(width|height)$/.test(i)&&0===x.getPropertyValue(t,"display")&&(c=!0,x.setPropertyValue(t,"display",x.Values.getDisplayType(t))),!o){if("height"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var u=t.offsetHeight-(parseFloat(x.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(t,"paddingBottom"))||0);return a(),u}if("width"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var d=t.offsetWidth-(parseFloat(x.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(t,"paddingRight"))||0);return a(),d}}var f;f=r(t)===n?e.getComputedStyle(t,null):r(t).computedStyle?r(t).computedStyle:r(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===i&&(i="borderTopColor"),(""===(l=9===h&&"filter"===i?f.getPropertyValue(i):f[i])||null===l)&&(l=t.style[i]),a()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(i)){var v=s(t,"position");("fixed"===v||"absolute"===v&&/top|left/i.test(i))&&(l=p(t).position()[i]+"px")}return l}var l;if(x.Hooks.registered[i]){var c=i,u=x.Hooks.getRoot(c);a===n&&(a=x.getPropertyValue(t,x.Names.prefixCheck(u)[0])),x.Normalizations.registered[u]&&(a=x.Normalizations.registered[u]("extract",t,a)),l=x.Hooks.extractValue(c,a)}else if(x.Normalizations.registered[i]){var d,f;"transform"!==(d=x.Normalizations.registered[i]("name",t))&&(f=s(t,x.Names.prefixCheck(d)[0]),x.Values.isCSSNullValue(f)&&x.Hooks.templates[i]&&(f=x.Hooks.templates[i][1])),l=x.Normalizations.registered[i]("extract",t,f)}if(!/^[\d-]/.test(l))if(r(t)&&r(t).isSVG&&x.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{l=t.getBBox()[i]}catch(t){l=0}else l=t.getAttribute(i);else l=s(t,x.Names.prefixCheck(i)[0]);return x.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+i+": "+l),l},setPropertyValue:function(t,i,n,a,o){var s=i;if("scroll"===i)o.container?o.container["scroll"+o.direction]=n:"Left"===o.direction?e.scrollTo(n,o.alternateValue):e.scrollTo(o.alternateValue,n);else if(x.Normalizations.registered[i]&&"transform"===x.Normalizations.registered[i]("name",t))x.Normalizations.registered[i]("inject",t,n),s="transform",n=r(t).transformCache[i];else{if(x.Hooks.registered[i]){var l=i,c=x.Hooks.getRoot(i);a=a||x.getPropertyValue(t,c),n=x.Hooks.injectValue(l,n,a),i=c}if(x.Normalizations.registered[i]&&(n=x.Normalizations.registered[i]("inject",t,n),i=x.Normalizations.registered[i]("name",t)),s=x.Names.prefixCheck(i)[0],8>=h)try{t.style[s]=n}catch(t){b.debug&&console.log("Browser does not support ["+n+"] for ["+s+"]")}else r(t)&&r(t).isSVG&&x.Names.SVGAttribute(i)?t.setAttribute(i,n):t.style[s]=n;b.debug>=2&&console.log("Set "+i+" ("+s+"): "+n)}return[s,n]},flushTransformCache:function(t){function e(e){return parseFloat(x.getPropertyValue(t,e))}var i="";if((h||b.State.isAndroid&&!b.State.isChrome)&&r(t).isSVG){var n={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};p.each(r(t).transformCache,function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),n[t]&&(i+=t+"("+n[t].join(" ")+") ",delete n[t])})}else{var a,o;p.each(r(t).transformCache,function(e){return a=r(t).transformCache[e],"transformPerspective"===e?(o=a,!0):(9===h&&"rotateZ"===e&&(e="rotate"),void(i+=e+a+" "))}),o&&(i="perspective"+o+" "+i)}x.setPropertyValue(t,"transform",i)}};x.Hooks.register(),x.Normalizations.register(),b.hook=function(t,e,i){var a=n;return t=o(t),p.each(t,function(t,o){if(r(o)===n&&b.init(o),i===n)a===n&&(a=b.CSS.getPropertyValue(o,e));else{var s=b.CSS.setPropertyValue(o,e,i);"transform"===s[0]&&b.CSS.flushTransformCache(o),a=s}}),a};var C=function(){function t(){return s?P.promise||null:l}function a(){function t(t){function d(t,e){var i=n,a=n,r=n;return v.isArray(t)?(i=t[0],!v.isArray(t[1])&&/^[\d-]/.test(t[1])||v.isFunction(t[1])||x.RegEx.isHex.test(t[1])?r=t[1]:(v.isString(t[1])&&!x.RegEx.isHex.test(t[1])||v.isArray(t[1]))&&(a=e?t[1]:c(t[1],s.duration),t[2]!==n&&(r=t[2]))):i=t,e||(a=a||s.easing),v.isFunction(i)&&(i=i.call(o,T,k)),v.isFunction(r)&&(r=r.call(o,T,k)),[i||0,a,r]}function h(t,e){var i,n;return n=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(t){return i=t,""}),i||(i=x.Values.getUnitType(t)),[n,i]}if(s.begin&&0===T)try{s.begin.call(f,f)}catch(t){setTimeout(function(){throw t},1)}if("scroll"===O){var m,w,C,S=/^x$/i.test(s.axis)?"Left":"Top",E=parseFloat(s.offset)||0;s.container?v.isWrapped(s.container)||v.isNode(s.container)?(s.container=s.container[0]||s.container,m=s.container["scroll"+S],C=m+p(o).position()[S.toLowerCase()]+E):s.container=null:(m=b.State.scrollAnchor[b.State["scrollProperty"+S]],w=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===S?"Top":"Left")]],C=p(o).offset()[S.toLowerCase()]+E),l={scroll:{rootPropertyValue:!1,startValue:m,currentValue:m,endValue:C,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:S,alternateValue:w}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===O){if(!r(o).tweensContainer)return void p.dequeue(o,s.queue);"none"===r(o).opts.display&&(r(o).opts.display="auto"),"hidden"===r(o).opts.visibility&&(r(o).opts.visibility="visible"),r(o).opts.loop=!1,r(o).opts.begin=null,r(o).opts.complete=null,y.easing||delete s.easing,y.duration||delete s.duration,s=p.extend({},r(o).opts,s);q=p.extend(!0,{},r(o).tweensContainer);for(var A in q)if("element"!==A){var I=q[A].startValue;q[A].startValue=q[A].currentValue=q[A].endValue,q[A].endValue=I,v.isEmptyObject(y)||(q[A].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+A+"): "+JSON.stringify(q[A]),o)}l=q}else if("start"===O){var q;r(o).tweensContainer&&!0===r(o).isAnimating&&(q=r(o).tweensContainer),p.each(g,function(t,e){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(t)){var i=d(e,!0),a=i[0],o=i[1],r=i[2];if(x.RegEx.isHex.test(a)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(a),c=r?x.Values.hexToRgb(r):n,u=0;u<s.length;u++){var p=[l[u]];o&&p.push(o),c!==n&&p.push(c[u]),g[t+s[u]]=p}delete g[t]}}});for(var V in g){var j=d(g[V]),D=j[0],z=j[1],L=j[2];V=x.Names.camelCase(V);var $=x.Hooks.getRoot(V),N=!1;if(r(o).isSVG||"tween"===$||!1!==x.Names.prefixCheck($)[1]||x.Normalizations.registered[$]!==n){(s.display!==n&&null!==s.display&&"none"!==s.display||s.visibility!==n&&"hidden"!==s.visibility)&&/opacity|filter/.test(V)&&!L&&0!==D&&(L=0),s._cacheValues&&q&&q[V]?(L===n&&(L=q[V].endValue+q[V].unitType),N=r(o).rootPropertyValueCache[$]):x.Hooks.registered[V]?L===n?(N=x.getPropertyValue(o,$),L=x.getPropertyValue(o,V,N)):N=x.Hooks.templates[$][1]:L===n&&(L=x.getPropertyValue(o,V));var Q,F,H,W=!1;if(Q=h(V,L),L=Q[0],H=Q[1],Q=h(V,D),D=Q[0].replace(/^([+-\/*])=/,function(t,e){return W=e,""}),F=Q[1],L=parseFloat(L)||0,D=parseFloat(D)||0,"%"===F&&(/^(fontSize|lineHeight)$/.test(V)?(D/=100,F="em"):/^scale/.test(V)?(D/=100,F=""):/(Red|Green|Blue)$/i.test(V)&&(D=D/100*255,F="")),/[\/*]/.test(W))F=H;else if(H!==F&&0!==L)if(0===D)F=H;else{a=a||function(){var t={myParent:o.parentNode||i.body,position:x.getPropertyValue(o,"position"),fontSize:x.getPropertyValue(o,"fontSize")},n=t.position===_.lastPosition&&t.myParent===_.lastParent,a=t.fontSize===_.lastFontSize;_.lastParent=t.myParent,_.lastPosition=t.position,_.lastFontSize=t.fontSize;var s=100,l={};if(a&&n)l.emToPx=_.lastEmToPx,l.percentToPxWidth=_.lastPercentToPxWidth,l.percentToPxHeight=_.lastPercentToPxHeight;else{var c=r(o).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");b.init(c),t.myParent.appendChild(c),p.each(["overflow","overflowX","overflowY"],function(t,e){b.CSS.setPropertyValue(c,e,"hidden")}),b.CSS.setPropertyValue(c,"position",t.position),b.CSS.setPropertyValue(c,"fontSize",t.fontSize),b.CSS.setPropertyValue(c,"boxSizing","content-box"),p.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(t,e){b.CSS.setPropertyValue(c,e,s+"%")}),b.CSS.setPropertyValue(c,"paddingLeft",s+"em"),l.percentToPxWidth=_.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(c,"width",null,!0))||1)/s,l.percentToPxHeight=_.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(c,"height",null,!0))||1)/s,l.emToPx=_.lastEmToPx=(parseFloat(x.getPropertyValue(c,"paddingLeft"))||1)/s,t.myParent.removeChild(c)}return null===_.remToPx&&(_.remToPx=parseFloat(x.getPropertyValue(i.body,"fontSize"))||16),null===_.vwToPx&&(_.vwToPx=parseFloat(e.innerWidth)/100,_.vhToPx=parseFloat(e.innerHeight)/100),l.remToPx=_.remToPx,l.vwToPx=_.vwToPx,l.vhToPx=_.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}();var X=/margin|padding|left|right|width|text|word|letter/i.test(V)||/X$/.test(V)||"x"===V?"x":"y";switch(H){case"%":L*="x"===X?a.percentToPxWidth:a.percentToPxHeight;break;case"px":break;default:L*=a[H+"ToPx"]}switch(F){case"%":L*=1/("x"===X?a.percentToPxWidth:a.percentToPxHeight);break;case"px":break;default:L*=1/a[F+"ToPx"]}}switch(W){case"+":D=L+D;break;case"-":D=L-D;break;case"*":D*=L;break;case"/":D=L/D}l[V]={rootPropertyValue:N,startValue:L,currentValue:L,endValue:D,unitType:F,easing:z},b.debug&&console.log("tweensContainer ("+V+"): "+JSON.stringify(l[V]),o)}else b.debug&&console.log("Skipping ["+$+"] due to a lack of browser support.")}l.element=o}l.element&&(x.Values.addClass(o,"velocity-animating"),M.push(l),""===s.queue&&(r(o).tweensContainer=l,r(o).opts=s),r(o).isAnimating=!0,T===k-1?(b.State.calls.push([M,f,s,null,P.resolver]),!1===b.State.isTicking&&(b.State.isTicking=!0,u())):T++)}var a,o=this,s=p.extend({},b.defaults,y),l={};switch(r(o)===n&&b.init(o),parseFloat(s.delay)&&!1!==s.queue&&p.queue(o,s.queue,function(t){b.velocityQueueEntryFlag=!0,r(o).delayTimer={setTimeout:setTimeout(t,parseFloat(s.delay)),next:t}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=m;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}!1!==b.mock&&(!0===b.mock?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=c(s.easing,s.duration),s.begin&&!v.isFunction(s.begin)&&(s.begin=null),s.progress&&!v.isFunction(s.progress)&&(s.progress=null),s.complete&&!v.isFunction(s.complete)&&(s.complete=null),s.display!==n&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==n&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,!1===s.queue?s.delay?setTimeout(t,s.delay):t():p.queue(o,s.queue,function(e,i){return!0===i?(P.promise&&P.resolver(f),!0):(b.velocityQueueEntryFlag=!0,void t(e))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===p.queue(o)[0]||p.dequeue(o)}var s,l,h,f,g,y,w=arguments[0]&&(arguments[0].p||p.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||v.isString(arguments[0].properties));if(v.isWrapped(this)?(s=!1,h=0,f=this,l=this):(s=!0,h=1,f=w?arguments[0].elements||arguments[0].e:arguments[0]),f=o(f)){w?(g=arguments[0].properties||arguments[0].p,y=arguments[0].options||arguments[0].o):(g=arguments[h],y=arguments[h+1]);var k=f.length,T=0;if(!/^(stop|finish)$/i.test(g)&&!p.isPlainObject(y)){y={};for(var S=h+1;S<arguments.length;S++)v.isArray(arguments[S])||!/^(fast|normal|slow)$/i.test(arguments[S])&&!/^\d/.test(arguments[S])?v.isString(arguments[S])||v.isArray(arguments[S])?y.easing=arguments[S]:v.isFunction(arguments[S])&&(y.complete=arguments[S]):y.duration=arguments[S]}var P={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(P.promise=new b.Promise(function(t,e){P.resolver=t,P.rejecter=e}));var O;switch(g){case"scroll":O="scroll";break;case"reverse":O="reverse";break;case"finish":case"stop":p.each(f,function(t,e){r(e)&&r(e).delayTimer&&(clearTimeout(r(e).delayTimer.setTimeout),r(e).delayTimer.next&&r(e).delayTimer.next(),delete r(e).delayTimer)});var E=[];return p.each(b.State.calls,function(t,e){e&&p.each(e[1],function(i,a){var o=y===n?"":y;return!0!==o&&e[2].queue!==o&&(y!==n||!1!==e[2].queue)||void p.each(f,function(i,n){n===a&&((!0===y||v.isString(y))&&(p.each(p.queue(n,v.isString(y)?y:""),function(t,e){v.isFunction(e)&&e(null,!0)}),p.queue(n,v.isString(y)?y:"",[])),"stop"===g?(r(n)&&r(n).tweensContainer&&!1!==o&&p.each(r(n).tweensContainer,function(t,e){e.endValue=e.currentValue}),E.push(t)):"finish"===g&&(e[2].duration=1))})})}),"stop"===g&&(p.each(E,function(t,e){d(e,!0)}),P.promise&&P.resolver(f)),t();default:if(!p.isPlainObject(g)||v.isEmptyObject(g)){if(v.isString(g)&&b.Redirects[g]){var A=(j=p.extend({},y)).duration,I=j.delay||0;return!0===j.backwards&&(f=p.extend(!0,[],f).reverse()),p.each(f,function(t,e){parseFloat(j.stagger)?j.delay=I+parseFloat(j.stagger)*t:v.isFunction(j.stagger)&&(j.delay=I+j.stagger.call(e,t,k)),j.drag&&(j.duration=parseFloat(A)||(/^(callout|transition)/.test(g)?1e3:m),j.duration=Math.max(j.duration*(j.backwards?1-t/k:(t+1)/k),.75*j.duration,200)),b.Redirects[g].call(e,e,j||{},t,k,f,P.promise?P:n)}),t()}var q="Velocity: First argument ("+g+") was not a property map, a known action, or a registered redirect. Aborting.";return P.promise?P.rejecter(new Error(q)):console.log(q),t()}O="start"}var _={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},M=[];p.each(f,function(t,e){v.isNode(e)&&a.call(e)});var V,j=p.extend({},b.defaults,y);if(j.loop=parseInt(j.loop),V=2*j.loop-1,j.loop)for(var D=0;V>D;D++){var z={delay:j.delay,progress:j.progress};D===V-1&&(z.display=j.display,z.visibility=j.visibility,z.complete=j.complete),C(f,"reverse",z)}return t()}};(b=p.extend(C,b)).animate=C;var k=e.requestAnimationFrame||f;return b.State.isMobile||i.hidden===n||i.addEventListener("visibilitychange",function(){i.hidden?(k=function(t){return setTimeout(function(){t(!0)},16)},u()):k=e.requestAnimationFrame||f}),t.Velocity=b,t!==e&&(t.fn.velocity=C,t.fn.velocity.defaults=b.defaults),p.each(["Down","Up"],function(t,e){b.Redirects["slide"+e]=function(t,i,a,o,r,s){var l=p.extend({},i),c=l.begin,u=l.complete,d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},h={};l.display===n&&(l.display="Down"===e?"inline"===b.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){c&&c.call(r,r);for(var i in d){h[i]=t.style[i];var n=b.CSS.getPropertyValue(t,i);d[i]="Down"===e?[n,0]:[0,n]}h.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in h)t.style[e]=h[e];u&&u.call(r,r),s&&s.resolver(r)},b(t,d,l)}}),p.each(["In","Out"],function(t,e){b.Redirects["fade"+e]=function(t,i,a,o,r,s){var l=p.extend({},i),c={opacity:"In"===e?1:0},u=l.complete;l.complete=a!==o-1?l.begin=null:function(){u&&u.call(r,r),s&&s.resolver(r)},l.display===n&&(l.display="In"===e?"auto":"none"),b(this,c,l)}}),b}jQuery.fn.velocity=jQuery.fn.animate}}(window.jQuery||window.Zepto||window,window,document)})),function(t,e,i,n){"use strict";function a(t,e,i){return setTimeout(u(t,i),e)}function o(t,e,i){return!!Array.isArray(t)&&(r(t,i[e],i),!0)}function r(t,e,i){var a;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(a=0;a<t.length;)e.call(i,t[a],a,t),a++;else for(a in t)t.hasOwnProperty(a)&&e.call(i,t[a],a,t)}function s(t,e,i){for(var a=Object.keys(e),o=0;o<a.length;)(!i||i&&t[a[o]]===n)&&(t[a[o]]=e[a[o]]),o++;return t}function l(t,e){return s(t,e,!0)}function c(t,e,i){var n,a=e.prototype;(n=t.prototype=Object.create(a)).constructor=t,n._super=a,i&&s(n,i)}function u(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==ut?t.apply(e?e[0]||n:n,e):t}function p(t,e){return t===n?e:t}function h(t,e,i){r(m(e),function(e){t.addEventListener(e,i,!1)})}function f(t,e,i){r(m(e),function(e){t.removeEventListener(e,i,!1)})}function v(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function g(t,e){return t.indexOf(e)>-1}function m(t){return t.trim().split(/\s+/g)}function y(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function b(t){return Array.prototype.slice.call(t,0)}function w(t,e,i){for(var n=[],a=[],o=0;o<t.length;){var r=e?t[o][e]:t[o];y(a,r)<0&&n.push(t[o]),a[o]=r,o++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function x(t,e){for(var i,a,o=e[0].toUpperCase()+e.slice(1),r=0;r<lt.length;){if(i=lt[r],(a=i?i+o:e)in t)return a;r++}return n}function C(){return ft++}function k(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function T(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&i.handler(e)},this.init()}function S(t){var e=t.options.inputClass;return new(e||(mt?$:yt?F:gt?W:L))(t,P)}function P(t,e,i){var n=i.pointers.length,a=i.changedPointers.length,o=e&Ct&&0==n-a,r=e&(Tt|St)&&0==n-a;i.isFirst=!!o,i.isFinal=!!r,o&&(t.session={}),i.eventType=e,O(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function O(t,e){var i=t.session,n=e.pointers,a=n.length;i.firstInput||(i.firstInput=I(e)),a>1&&!i.firstMultiple?i.firstMultiple=I(e):1===a&&(i.firstMultiple=!1);var o=i.firstInput,r=i.firstMultiple,s=r?r.center:o.center,l=e.center=q(n);e.timeStamp=ht(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=j(s,l),e.distance=V(s,l),E(i,e),e.offsetDirection=M(e.deltaX,e.deltaY),e.scale=r?z(r.pointers,n):1,e.rotation=r?D(r.pointers,n):0,A(i,e);var c=t.element;v(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function E(t,e){var i=e.center,n=t.offsetDelta||{},a=t.prevDelta||{},o=t.prevInput||{};(e.eventType===Ct||o.eventType===Tt)&&(a=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=a.x+(i.x-n.x),e.deltaY=a.y+(i.y-n.y)}function A(t,e){var i,a,o,r,s=t.lastInterval||e,l=e.timeStamp-s.timeStamp;if(e.eventType!=St&&(l>xt||s.velocity===n)){var c=s.deltaX-e.deltaX,u=s.deltaY-e.deltaY,d=_(l,c,u);a=d.x,o=d.y,i=pt(d.x)>pt(d.y)?d.x:d.y,r=M(c,u),t.lastInterval=e}else i=s.velocity,a=s.velocityX,o=s.velocityY,r=s.direction;e.velocity=i,e.velocityX=a,e.velocityY=o,e.direction=r}function I(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:dt(t.pointers[i].clientX),clientY:dt(t.pointers[i].clientY)},i++;return{timeStamp:ht(),pointers:e,center:q(e),deltaX:t.deltaX,deltaY:t.deltaY}}function q(t){var e=t.length;if(1===e)return{x:dt(t[0].clientX),y:dt(t[0].clientY)};for(var i=0,n=0,a=0;e>a;)i+=t[a].clientX,n+=t[a].clientY,a++;return{x:dt(i/e),y:dt(n/e)}}function _(t,e,i){return{x:e/t||0,y:i/t||0}}function M(t,e){return t===e?Pt:pt(t)>=pt(e)?t>0?Ot:Et:e>0?At:It}function V(t,e,i){i||(i=Vt);var n=e[i[0]]-t[i[0]],a=e[i[1]]-t[i[1]];return Math.sqrt(n*n+a*a)}function j(t,e,i){i||(i=Vt);var n=e[i[0]]-t[i[0]],a=e[i[1]]-t[i[1]];return 180*Math.atan2(a,n)/Math.PI}function D(t,e){return j(e[1],e[0],jt)-j(t[1],t[0],jt)}function z(t,e){return V(e[0],e[1],jt)/V(t[0],t[1],jt)}function L(){this.evEl=zt,this.evWin=Lt,this.allow=!0,this.pressed=!1,T.apply(this,arguments)}function $(){this.evEl=Qt,this.evWin=Ft,T.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=Wt,this.evWin=Xt,this.started=!1,T.apply(this,arguments)}function Q(t,e){var i=b(t.touches),n=b(t.changedTouches);return e&(Tt|St)&&(i=w(i.concat(n),"identifier",!0)),[i,n]}function F(){this.evTarget=Yt,this.targetIds={},T.apply(this,arguments)}function H(t,e){var i=b(t.touches),n=this.targetIds;if(e&(Ct|kt)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var a,o,r=b(t.changedTouches),s=[],l=this.target;if(o=i.filter(function(t){return v(t.target,l)}),e===Ct)for(a=0;a<o.length;)n[o[a].identifier]=!0,a++;for(a=0;a<r.length;)n[r[a].identifier]&&s.push(r[a]),e&(Tt|St)&&delete n[r[a].identifier],a++;return s.length?[w(o.concat(s),"identifier",!0),s]:void 0}function W(){T.apply(this,arguments);var t=u(this.handler,this);this.touch=new F(this.manager,t),this.mouse=new L(this.manager,t)}function X(t,e){this.manager=t,this.set(e)}function R(t){if(g(t,Kt))return Kt;var e=g(t,te),i=g(t,ee);return e&&i?te+" "+ee:e||i?e?te:ee:g(t,Jt)?Jt:Zt}function Y(t){this.id=C(),this.manager=null,this.options=l(t||{},this.defaults),this.options.enable=p(this.options.enable,!0),this.state=ie,this.simultaneous={},this.requireFail=[]}function B(t){return t&se?"cancel":t&oe?"end":t&ae?"move":t&ne?"start":""}function U(t){return t==It?"down":t==At?"up":t==Ot?"left":t==Et?"right":""}function G(t,e){var i=e.manager;return i?i.get(t):t}function Z(){Y.apply(this,arguments)}function J(){Z.apply(this,arguments),this.pX=null,this.pY=null}function K(){Z.apply(this,arguments)}function tt(){Y.apply(this,arguments),this._timer=null,this._input=null}function et(){Z.apply(this,arguments)}function it(){Z.apply(this,arguments)}function nt(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function at(t,e){return e=e||{},e.recognizers=p(e.recognizers,at.defaults.preset),new ot(t,e)}function ot(t,e){e=e||{},this.options=l(e,at.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=S(this),this.touchAction=new X(this,this.options.touchAction),rt(this,!0),r(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function rt(t,e){var i=t.element;r(t.options.cssProps,function(t,n){i.style[x(i.style,n)]=e?t:""})}function st(t,i){var n=e.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=i,i.target.dispatchEvent(n)}var lt=["","webkit","moz","MS","ms","o"],ct=e.createElement("div"),ut="function",dt=Math.round,pt=Math.abs,ht=Date.now,ft=1,vt=/mobile|tablet|ip(ad|hone|od)|android/i,gt="ontouchstart"in t,mt=x(t,"PointerEvent")!==n,yt=gt&&vt.test(navigator.userAgent),bt="touch",wt="mouse",xt=25,Ct=1,kt=2,Tt=4,St=8,Pt=1,Ot=2,Et=4,At=8,It=16,qt=Ot|Et,_t=At|It,Mt=qt|_t,Vt=["x","y"],jt=["clientX","clientY"];T.prototype={handler:function(){},init:function(){this.evEl&&h(this.element,this.evEl,this.domHandler),this.evTarget&&h(this.target,this.evTarget,this.domHandler),this.evWin&&h(k(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(k(this.element),this.evWin,this.domHandler)}};var Dt={mousedown:Ct,mousemove:kt,mouseup:Tt},zt="mousedown",Lt="mousemove mouseup";c(L,T,{handler:function(t){var e=Dt[t.type];e&Ct&&0===t.button&&(this.pressed=!0),e&kt&&1!==t.which&&(e=Tt),this.pressed&&this.allow&&(e&Tt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:wt,srcEvent:t}))}});var $t={pointerdown:Ct,pointermove:kt,pointerup:Tt,pointercancel:St,pointerout:St},Nt={2:bt,3:"pen",4:wt,5:"kinect"},Qt="pointerdown",Ft="pointermove pointerup pointercancel";t.MSPointerEvent&&(Qt="MSPointerDown",Ft="MSPointerMove MSPointerUp MSPointerCancel"),c($,T,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),a=$t[n],o=Nt[t.pointerType]||t.pointerType,r=o==bt,s=y(e,t.pointerId,"pointerId");a&Ct&&(0===t.button||r)?0>s&&(e.push(t),s=e.length-1):a&(Tt|St)&&(i=!0),0>s||(e[s]=t,this.callback(this.manager,a,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),i&&e.splice(s,1))}});var Ht={touchstart:Ct,touchmove:kt,touchend:Tt,touchcancel:St},Wt="touchstart",Xt="touchstart touchmove touchend touchcancel";c(N,T,{handler:function(t){var e=Ht[t.type];if(e===Ct&&(this.started=!0),this.started){var i=Q.call(this,t,e);e&(Tt|St)&&0==i[0].length-i[1].length&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}});var Rt={touchstart:Ct,touchmove:kt,touchend:Tt,touchcancel:St},Yt="touchstart touchmove touchend touchcancel";c(F,T,{handler:function(t){var e=Rt[t.type],i=H.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}),c(W,T,{handler:function(t,e,i){var n=i.pointerType==bt,a=i.pointerType==wt;if(n)this.mouse.allow=!1;else if(a&&!this.mouse.allow)return;e&(Tt|St)&&(this.mouse.allow=!0),this.callback(t,e,i)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Bt=x(ct.style,"touchAction"),Ut=Bt!==n,Gt="compute",Zt="auto",Jt="manipulation",Kt="none",te="pan-x",ee="pan-y";X.prototype={set:function(t){t==Gt&&(t=this.compute()),Ut&&(this.manager.element.style[Bt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return r(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),R(t.join(" "))},preventDefaults:function(t){if(!Ut){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var n=this.actions,a=g(n,Kt),o=g(n,ee),r=g(n,te);return a||o&&i&qt||r&&i&_t?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ie=1,ne=2,ae=4,oe=8,re=oe,se=16;Y.prototype={defaults:{},set:function(t){return s(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(o(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=G(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return o(t,"dropRecognizeWith",this)?this:(t=G(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(o(t,"requireFailure",this))return this;var e=this.requireFail;return t=G(t,this),-1===y(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(o(t,"dropRequireFailure",this))return this;t=G(t,this);var e=y(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(i.options.event+(e?B(n):""),t)}var i=this,n=this.state;oe>n&&e(!0),e(),n>=oe&&e(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=32)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|ie)))return!1;t++}return!0},recognize:function(t){var e=s({},t);return d(this.options.enable,[this,e])?(this.state&(re|se|32)&&(this.state=ie),this.state=this.process(e),void(this.state&(ne|ae|oe|se)&&this.tryEmit(e))):(this.reset(),void(this.state=32))},process:function(){},getTouchAction:function(){},reset:function(){}},c(Z,Y,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(ne|ae),a=this.attrTest(t);return n&&(i&St||!a)?e|se:n||a?i&Tt?e|oe:e&ne?e|ae:ne:32}}),c(J,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Mt},getTouchAction:function(){var t=this.options.direction,e=[];return t&qt&&e.push(ee),t&_t&&e.push(te),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,a=t.direction,o=t.deltaX,r=t.deltaY;return a&e.direction||(e.direction&qt?(a=0===o?Pt:0>o?Ot:Et,i=o!=this.pX,n=Math.abs(t.deltaX)):(a=0===r?Pt:0>r?At:It,i=r!=this.pY,n=Math.abs(t.deltaY))),t.direction=a,i&&n>e.threshold&&a&e.direction},attrTest:function(t){return Z.prototype.attrTest.call(this,t)&&(this.state&ne||!(this.state&ne)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=U(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),c(K,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Kt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ne)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),c(tt,Y,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Zt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,o=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(Tt|St)&&!o)this.reset();else if(t.eventType&Ct)this.reset(),this._timer=a(function(){this.state=re,this.tryEmit()},e.time,this);else if(t.eventType&Tt)return re;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===re&&(t&&t.eventType&Tt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=ht(),this.manager.emit(this.options.event,this._input)))}}),c(et,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Kt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ne)}}),c(it,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:qt|_t,pointers:1},getTouchAction:function(){return J.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(qt|_t)?e=t.velocity:i&qt?e=t.velocityX:i&_t&&(e=t.velocityY),this._super.attrTest.call(this,t)&&i&t.direction&&t.distance>this.options.threshold&&pt(e)>this.options.velocity&&t.eventType&Tt},emit:function(t){var e=U(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),c(nt,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Jt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,o=t.deltaTime<e.time;if(this.reset(),t.eventType&Ct&&0===this.count)return this.failTimeout();if(n&&o&&i){if(t.eventType!=Tt)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||V(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,s&&r?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=a(function(){this.state=re,this.tryEmit()},e.interval,this),ne):re}return 32},failTimeout:function(){return this._timer=a(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==re&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),at.VERSION="2.0.4",at.defaults={domEvents:!1,touchAction:Gt,enable:!0,inputTarget:null,inputClass:null,preset:[[et,{enable:!1}],[K,{enable:!1},["rotate"]],[it,{direction:qt}],[J,{direction:qt},["swipe"]],[nt],[nt,{event:"doubletap",taps:2},["tap"]],[tt]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};ot.prototype={set:function(t){return s(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,a=e.curRecognizer;(!a||a&&a.state&re)&&(a=e.curRecognizer=null);for(var o=0;o<n.length;)i=n[o],2===e.stopped||a&&i!=a&&!i.canRecognizeWith(a)?i.reset():i.recognize(t),!a&&i.state&(ne|ae|oe)&&(a=e.curRecognizer=i),o++}},get:function(t){if(t instanceof Y)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(o(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(o(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(y(e,t),1),this.touchAction.update(),this},on:function(t,e){var i=this.handlers;return r(m(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this},off:function(t,e){var i=this.handlers;return r(m(t),function(t){e?i[t].splice(y(i[t],e),1):delete i[t]}),this},emit:function(t,e){this.options.domEvents&&st(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&rt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},s(at,{INPUT_START:Ct,INPUT_MOVE:kt,INPUT_END:Tt,INPUT_CANCEL:St,STATE_POSSIBLE:ie,STATE_BEGAN:ne,STATE_CHANGED:ae,STATE_ENDED:oe,STATE_RECOGNIZED:re,STATE_CANCELLED:se,STATE_FAILED:32,DIRECTION_NONE:Pt,DIRECTION_LEFT:Ot,DIRECTION_RIGHT:Et,DIRECTION_UP:At,DIRECTION_DOWN:It,DIRECTION_HORIZONTAL:qt,DIRECTION_VERTICAL:_t,DIRECTION_ALL:Mt,Manager:ot,Input:T,TouchAction:X,TouchInput:F,MouseInput:L,PointerEventInput:$,TouchMouseInput:W,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:Z,Tap:nt,Pan:J,Swipe:it,Pinch:K,Rotate:et,Press:tt,on:h,off:f,each:r,merge:l,extend:s,inherit:c,bindFn:u,prefixed:x}),typeof define==ut&&define.amd?define(function(){return at}):"undefined"!=typeof module&&module.exports?module.exports=at:t.Hammer=at}(window,document),function(t){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],t):"object"==typeof exports?t(require("jquery"),require("hammerjs")):t(jQuery,Hammer)}(function(t,e){function i(i,n){var a=t(i);a.data("hammer")||a.data("hammer",new e(a[0],n))}t.fn.hammer=function(t){return this.each(function(){i(this,t)})},e.Manager.prototype.emit=function(e){return function(i,n){e.call(this,i,n),t(this.element).trigger({type:i,gesture:n})}}(e.Manager.prototype.emit)}),function(t){t.Package?Materialize={}:t.Materialize={}}(window),Materialize.guid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}(),Materialize.elementOrParentIsFixed=function(t){var e=$(t),i=!1;return e.add(e.parents()).each(function(){if("fixed"===$(this).css("position"))return i=!0,!1}),i};var Vel;Vel=$?$.Velocity:jQuery?jQuery.Velocity:Velocity,function(t){t.fn.collapsible=function(e){var i={accordion:void 0};return e=t.extend(i,e),this.each(function(){function i(e){s=r.find("> li > .collapsible-header"),e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}),s.not(e).removeClass("active").parent().removeClass("active"),s.not(e).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function n(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function a(t){return o(t).length>0}function o(t){return t.closest("li > .collapsible-header")}var r=t(this),s=t(this).find("> li > .collapsible-header"),l=r.data("collapsible");r.off("click.collapse","> li > .collapsible-header"),s.off("click.collapse"),r.on("click.collapse","> li > .collapsible-header",function(r){var s=t(this),c=t(r.target);a(c)&&(c=o(c)),c.toggleClass("active"),e.accordion||"accordion"===l||void 0===l?i(c):(n(c),s.hasClass("active")&&n(s))});s=r.find("> li > .collapsible-header");e.accordion||"accordion"===l||void 0===l?i(s.filter(".active").first()):s.filter(".active").each(function(){n(t(this))})})},t(document).ready(function(){t(".collapsible").collapsible()})}(jQuery),function(t){t.fn.scrollTo=function(e){return t(this).scrollTop(t(this).scrollTop()-t(this).offset().top+t(e).offset().top),this},t.fn.dropdown=function(e){var i={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left",stopPropagation:!1};return"open"===e?(this.each(function(){t(this).trigger("open")}),!1):"close"===e?(this.each(function(){t(this).trigger("close")}),!1):void this.each(function(){function e(){void 0!==o.data("induration")&&(r.inDuration=o.data("induration")),void 0!==o.data("outduration")&&(r.outDuration=o.data("outduration")),void 0!==o.data("constrainwidth")&&(r.constrain_width=o.data("constrainwidth")),void 0!==o.data("hover")&&(r.hover=o.data("hover")),void 0!==o.data("gutter")&&(r.gutter=o.data("gutter")),void 0!==o.data("beloworigin")&&(r.belowOrigin=o.data("beloworigin")),void 0!==o.data("alignment")&&(r.alignment=o.data("alignment")),void 0!==o.data("stoppropagation")&&(r.stopPropagation=o.data("stoppropagation"))}function n(i){"focus"===i&&(s=!0),e(),l.addClass("active"),o.addClass("active"),!0===r.constrain_width?l.css("width",o.outerWidth()):l.css("white-space","nowrap");var n=window.innerHeight,a=o.innerHeight(),c=o.offset().left,u=o.offset().top-t(window).scrollTop(),d=r.alignment,p=0,h=0,f=0;!0===r.belowOrigin&&(f=a);var v=0,g=0,m=o.parent();if(m.is("body")||(m[0].scrollHeight>m[0].clientHeight&&(v=m[0].scrollTop),m[0].scrollWidth>m[0].clientWidth&&(g=m[0].scrollLeft)),c+l.innerWidth()>t(window).width()?d="right":c-l.innerWidth()+o.innerWidth()<0&&(d="left"),u+l.innerHeight()>n)if(u+a-l.innerHeight()<0){var y=n-u-f;l.css("max-height",y)}else f||(f+=a),f-=l.innerHeight();"left"===d?(p=r.gutter,h=o.position().left+p):"right"===d&&(h=o.position().left+o.outerWidth()-l.outerWidth()+(p=-r.gutter)),l.css({position:"absolute",top:o.position().top+f+v,left:h+g}),l.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:r.inDuration,easing:"easeOutCubic",complete:function(){t(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:r.inDuration,easing:"easeOutSine"})}function a(){s=!1,l.fadeOut(r.outDuration),l.removeClass("active"),o.removeClass("active"),setTimeout(function(){l.css("max-height","")},r.outDuration)}var o=t(this),r=t.extend({},i,r),s=!1,l=t("#"+o.attr("data-activates"));if(e(),o.after(l),r.hover){var c=!1;o.unbind("click."+o.attr("id")),o.on("mouseenter",function(t){!1===c&&(n(),c=!0)}),o.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-content").is(l)||(l.stop(!0,!0),a(),c=!1)}),l.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-button").is(o)||(l.stop(!0,!0),a(),c=!1)})}else o.unbind("click."+o.attr("id")),o.bind("click."+o.attr("id"),function(e){s||(o[0]!=e.currentTarget||o.hasClass("active")||0!==t(e.target).closest(".dropdown-content").length?o.hasClass("active")&&(a(),t(document).unbind("click."+l.attr("id")+" touchstart."+l.attr("id"))):(e.preventDefault(),r.stopPropagation&&e.stopPropagation(),n("click")),l.hasClass("active")&&t(document).bind("click."+l.attr("id")+" touchstart."+l.attr("id"),function(e){l.is(e.target)||o.is(e.target)||o.find(e.target).length||(a(),t(document).unbind("click."+l.attr("id")+" touchstart."+l.attr("id")))}))});o.on("open",function(t,e){n(e)}),o.on("close",a)})},t(document).ready(function(){t(".dropdown-button").dropdown()})}(jQuery),function(t){var e=0,i=0,n=function(){return"materialize-lean-overlay-"+ ++i};t.fn.extend({openModal:function(i){var a=t("body"),o=a.innerWidth();a.css("overflow","hidden"),a.width(o);var r={opacity:.5,in_duration:350,out_duration:250,ready:void 0,complete:void 0,dismissible:!0,starting_top:"4%",ending_top:"10%"},s=t(this);if(!s.hasClass("open")){var l=n(),c=t('<div class="lean-overlay"></div>');lStack=++e,c.attr("id",l).css("z-index",1e3+2*lStack),s.data("overlay-id",l).css("z-index",1e3+2*lStack+1),s.addClass("open"),t("body").append(c),(i=t.extend(r,i)).dismissible&&(c.click(function(){s.closeModal(i)}),t(document).on("keyup.leanModal"+l,function(t){27===t.keyCode&&s.closeModal(i)})),s.find(".modal-close").on("click.close",function(t){s.closeModal(i)}),c.css({display:"block",opacity:0}),s.css({display:"block",opacity:0}),c.velocity({opacity:i.opacity},{duration:i.in_duration,queue:!1,ease:"easeOutCubic"}),s.data("associated-overlay",c[0]),s.hasClass("bottom-sheet")?s.velocity({bottom:"0",opacity:1},{duration:i.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof i.ready&&i.ready()}}):(t.Velocity.hook(s,"scaleX",.7),s.css({top:i.starting_top}),s.velocity({top:i.ending_top,opacity:1,scaleX:"1"},{duration:i.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof i.ready&&i.ready()}}))}}}),t.fn.extend({closeModal:function(i){var n={out_duration:250,complete:void 0},a=t(this),o=a.data("overlay-id"),r=t("#"+o);a.removeClass("open"),i=t.extend(n,i),t("body").css({overflow:"",width:""}),a.find(".modal-close").off("click.close"),t(document).off("keyup.leanModal"+o),r.velocity({opacity:0},{duration:i.out_duration,queue:!1,ease:"easeOutQuart"}),a.hasClass("bottom-sheet")?a.velocity({bottom:"-100%",opacity:0},{duration:i.out_duration,queue:!1,ease:"easeOutCubic",complete:function(){r.css({display:"none"}),"function"==typeof i.complete&&i.complete(),r.remove(),e--}}):a.velocity({top:i.starting_top,opacity:0,scaleX:.7},{duration:i.out_duration,complete:function(){t(this).css("display","none"),"function"==typeof i.complete&&i.complete(),r.remove(),e--}})}}),t.fn.extend({leanModal:function(e){return this.each(function(){var i={starting_top:"4%"},n=t.extend(i,e);t(this).click(function(e){n.starting_top=(t(this).offset().top-t(window).scrollTop())/1.15;var i=t(this).attr("href")||"#"+t(this).data("target");t(i).openModal(n),e.preventDefault()})})}})}(jQuery),function(t){t.fn.materialbox=function(){return this.each(function(){function e(){o=!1;var e=s.parent(".material-placeholder"),n=(window.innerWidth,window.innerHeight,s.data("width")),l=s.data("height");s.velocity("stop",!0),t("#materialbox-overlay").velocity("stop",!0),t(".materialbox-caption").velocity("stop",!0),t("#materialbox-overlay").velocity({opacity:0},{duration:r,queue:!1,easing:"easeOutQuad",complete:function(){a=!1,t(this).remove()}}),s.velocity({width:n,height:l,left:0,top:0},{duration:r,queue:!1,easing:"easeOutQuad"}),t(".materialbox-caption").velocity({opacity:0},{duration:r,queue:!1,easing:"easeOutQuad",complete:function(){e.css({height:"",width:"",position:"",top:"",left:""}),s.css({height:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),s.removeClass("active"),o=!0,t(this).remove(),i&&i.css("overflow","")}})}if(!t(this).hasClass("initialized")){t(this).addClass("initialized");var i,n,a=!1,o=!0,r=200,s=t(this),l=t("<div></div>").addClass("material-placeholder");s.wrap(l),s.on("click",function(){var r=s.parent(".material-placeholder"),l=window.innerWidth,c=window.innerHeight,u=s.width(),d=s.height();if(!1===o)return e(),!1;if(a&&!0===o)return e(),!1;o=!1,s.addClass("active"),a=!0,r.css({width:r[0].getBoundingClientRect().width,height:r[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),i=void 0,n=r[0].parentNode;for(;null!==n&&!t(n).is(document);){var p=t(n);"visible"!==p.css("overflow")&&(p.css("overflow","visible"),i=void 0===i?p:i.add(p)),n=n.parentNode}s.css({position:"absolute","z-index":1e3}).data("width",u).data("height",d);var h=t('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){!0===o&&e()});if(s.before(h),h.velocity({opacity:1},{duration:275,queue:!1,easing:"easeOutQuad"}),""!==s.data("caption")){var f=t('<div class="materialbox-caption"></div>');f.text(s.data("caption")),t("body").append(f),f.css({display:"inline"}),f.velocity({opacity:1},{duration:275,queue:!1,easing:"easeOutQuad"})}var v=0,g=0;u/l>d/c?(v=.9*l,g=.9*l*(d/u)):(v=.9*c*(u/d),g=.9*c),s.hasClass("responsive-img")?s.velocity({"max-width":v,width:u},{duration:0,queue:!1,complete:function(){s.css({left:0,top:0}).velocity({height:g,width:v,left:t(document).scrollLeft()+l/2-s.parent(".material-placeholder").offset().left-v/2,top:t(document).scrollTop()+c/2-s.parent(".material-placeholder").offset().top-g/2},{duration:275,queue:!1,easing:"easeOutQuad",complete:function(){o=!0}})}}):s.css("left",0).css("top",0).velocity({height:g,width:v,left:t(document).scrollLeft()+l/2-s.parent(".material-placeholder").offset().left-v/2,top:t(document).scrollTop()+c/2-s.parent(".material-placeholder").offset().top-g/2},{duration:275,queue:!1,easing:"easeOutQuad",complete:function(){o=!0}})}),t(window).scroll(function(){a&&e()}),t(document).keyup(function(t){27===t.keyCode&&!0===o&&a&&e()})}})},t(document).ready(function(){t(".materialboxed").materialbox()})}(jQuery),function(t){t.fn.parallax=function(){var e=t(window).width();return this.each(function(i){function n(i){var n;n=e<601?a.height()>0?a.height():a.children("img").height():a.height()>0?a.height():500;var o=a.children("img").first(),r=o.height()-n,s=a.offset().top+n,l=a.offset().top,c=t(window).scrollTop(),u=window.innerHeight,d=(c+u-l)/(n+u),p=Math.round(r*d);i&&o.css("display","block"),s>c&&l<c+u&&o.css("transform","translate3D(-50%,"+p+"px, 0)")}var a=t(this);a.addClass("parallax"),a.children("img").one("load",function(){n(!0)}).each(function(){this.complete&&t(this).load()}),t(window).scroll(function(){e=t(window).width(),n(!1)}),t(window).resize(function(){e=t(window).width(),n(!1)})})}}(jQuery),function(t){var e={init:function(e){var i={onShow:null};return e=t.extend(i,e),this.each(function(){var i=t(this);t(window).width();i.width("100%");var n,a,o=i.find("li.tab a"),r=i.width(),s=Math.max(r,i[0].scrollWidth)/o.length,l=0;0===(n=t(o.filter('[href="'+location.hash+'"]'))).length&&(n=t(this).find("li.tab a.active").first()),0===n.length&&(n=t(this).find("li.tab a").first()),n.addClass("active"),(l=o.index(n))<0&&(l=0),void 0!==n[0]&&(a=t(n[0].hash)),i.append('<div class="indicator"></div>');var c=i.find(".indicator");i.is(":visible")&&(c.css({right:r-(l+1)*s}),c.css({left:l*s})),t(window).resize(function(){r=i.width(),s=Math.max(r,i[0].scrollWidth)/o.length,l<0&&(l=0),0!==s&&0!==r&&(c.css({right:r-(l+1)*s}),c.css({left:l*s}))}),o.not(n).each(function(){t(this.hash).hide()}),i.on("click","a",function(u){if(t(this).parent().hasClass("disabled"))u.preventDefault();else if(!t(this).attr("target")){r=i.width(),s=Math.max(r,i[0].scrollWidth)/o.length,n.removeClass("active"),void 0!==a&&a.hide(),n=t(this),a=t(this.hash),o=i.find("li.tab a"),n.addClass("active");var d=l;(l=o.index(t(this)))<0&&(l=0),void 0!==a&&(a.show(),"function"==typeof e.onShow&&e.onShow.call(this,a)),l-d>=0?(c.velocity({right:r-(l+1)*s},{duration:300,queue:!1,easing:"easeOutQuad"}),c.velocity({left:l*s},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(c.velocity({left:l*s},{duration:300,queue:!1,easing:"easeOutQuad"}),c.velocity({right:r-(l+1)*s},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})),u.preventDefault()}})})},select_tab:function(t){this.find('a[href="#'+t+'"]').trigger("click")}};t.fn.tabs=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tooltip"):e.init.apply(this,arguments)},t(document).ready(function(){t("ul.tabs").tabs()})}(jQuery),function(t){t.fn.tooltip=function(i){var n={delay:350,tooltip:"",position:"bottom",html:!1};return"remove"===i?(this.each(function(){t("#"+t(this).attr("data-tooltip-id")).remove(),t(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(i=t.extend(n,i),this.each(function(){var n=Materialize.guid(),a=t(this);a.attr("data-tooltip-id",n);var o,r,s,l,c,u,d=function(){o=a.attr("data-html")?"true"===a.attr("data-html"):i.html,r=a.attr("data-delay"),r=void 0===r||""===r?i.delay:r,s=a.attr("data-position"),s=void 0===s||""===s?i.position:s,l=a.attr("data-tooltip"),l=void 0===l||""===l?i.tooltip:l};d();c=function(){var e=t('<div class="material-tooltip"></div>');return l=o?t("<span></span>").html(l):t("<span></span>").text(l),e.append(l).appendTo(t("body")).attr("id",n),(u=t('<div class="backdrop"></div>')).appendTo(e),e}(),a.off("mouseenter.tooltip mouseleave.tooltip");var p,h=!1;a.on({"mouseenter.tooltip":function(t){p=setTimeout(function(){d(),h=!0,c.velocity("stop"),u.velocity("stop"),c.css({display:"block",left:"0px",top:"0px"});var t,i,n,o=a.outerWidth(),r=a.outerHeight(),l=c.outerHeight(),p=c.outerWidth(),f="0px",v="0px",g=8,m=8;"top"===s?(t=a.offset().top-l-5,i=a.offset().left+o/2-p/2,n=e(i,t,p,l),f="-10px",u.css({bottom:0,left:0,borderRadius:"14px 14px 0 0",transformOrigin:"50% 100%",marginTop:l,marginLeft:p/2-u.width()/2})):"left"===s?(t=a.offset().top+r/2-l/2,i=a.offset().left-p-5,n=e(i,t,p,l),v="-10px",u.css({top:"-7px",right:0,width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:l/2,marginLeft:p})):"right"===s?(t=a.offset().top+r/2-l/2,i=a.offset().left+o+5,n=e(i,t,p,l),v="+10px",u.css({top:"-7px",left:0,width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:l/2,marginLeft:"0px"})):(t=a.offset().top+a.outerHeight()+5,i=a.offset().left+o/2-p/2,n=e(i,t,p,l),f="+10px",u.css({top:0,left:0,marginLeft:p/2-u.width()/2})),c.css({top:n.y,left:n.x}),g=Math.SQRT2*p/parseInt(u.css("width")),m=Math.SQRT2*l/parseInt(u.css("height")),c.velocity({marginTop:f,marginLeft:v},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),u.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scaleX:g,scaleY:m},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})},r)},"mouseleave.tooltip":function(){h=!1,clearTimeout(p),setTimeout(function(){!0!==h&&(c.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1}),u.velocity({opacity:0,scaleX:1,scaleY:1},{duration:225,queue:!1,complete:function(){u.css("display","none"),c.css("display","none"),h=!1}}))},225)}})}))};var e=function(e,i,n,a){var o=e,r=i;return o<0?o=4:o+n>window.innerWidth&&(o-=o+n-window.innerWidth),r<0?r=4:r+a>window.innerHeight+t(window).scrollTop&&(r-=r+a-window.innerHeight),{x:o,y:r}};t(document).ready(function(){t(".tooltipped").tooltip()})}(jQuery),function(t){"use strict";function e(t){return null!==t&&t===t.window}function i(t){return e(t)?t:9===t.nodeType&&t.defaultView}function n(t){var e,n,a={top:0,left:0},o=t&&t.ownerDocument;return e=o.documentElement,void 0!==t.getBoundingClientRect&&(a=t.getBoundingClientRect()),n=i(o),{top:a.top+n.pageYOffset-e.clientTop,left:a.left+n.pageXOffset-e.clientLeft}}function a(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}function o(t){if(!1===u.allowEvent(t))return null;for(var e=null,i=t.target||t.srcElement;null!==i.parentElement;){if(!(i instanceof SVGElement||-1===i.className.indexOf("waves-effect"))){e=i;break}if(i.classList.contains("waves-effect")){e=i;break}i=i.parentElement}return e}function r(e){var i=o(e);null!==i&&(c.show(e,i),"ontouchstart"in t&&(i.addEventListener("touchend",c.hide,!1),i.addEventListener("touchcancel",c.hide,!1)),i.addEventListener("mouseup",c.hide,!1),i.addEventListener("mouseleave",c.hide,!1))}var s=s||{},l=document.querySelectorAll.bind(document),c={duration:750,show:function(t,e){if(2===t.button)return!1;var i=e||this,o=document.createElement("div");o.className="waves-ripple",i.appendChild(o);var r=n(i),s=t.pageY-r.top,l=t.pageX-r.left,u="scale("+i.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-r.top,l=t.touches[0].pageX-r.left),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-scale",u),o.setAttribute("data-x",l),o.setAttribute("data-y",s);var d={top:s+"px",left:l+"px"};o.className=o.className+" waves-notransition",o.setAttribute("style",a(d)),o.className=o.className.replace("waves-notransition",""),d["-webkit-transform"]=u,d["-moz-transform"]=u,d["-ms-transform"]=u,d["-o-transform"]=u,d.transform=u,d.opacity="1",d["-webkit-transition-duration"]=c.duration+"ms",d["-moz-transition-duration"]=c.duration+"ms",d["-o-transition-duration"]=c.duration+"ms",d["transition-duration"]=c.duration+"ms",d["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",o.setAttribute("style",a(d))},hide:function(t){u.touchup(t);var e=this,i=(e.clientWidth,null),n=e.getElementsByClassName("waves-ripple");if(!(n.length>0))return!1;var o=(i=n[n.length-1]).getAttribute("data-x"),r=i.getAttribute("data-y"),s=i.getAttribute("data-scale"),l=350-(Date.now()-Number(i.getAttribute("data-hold")));l<0&&(l=0),setTimeout(function(){var t={top:r+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};i.setAttribute("style",a(t)),setTimeout(function(){try{e.removeChild(i)}catch(t){return!1}},c.duration)},l)},wrapInput:function(t){for(var e=0;e<t.length;e++){var i=t[e];if("input"===i.tagName.toLowerCase()){var n=i.parentNode;if("i"===n.tagName.toLowerCase()&&-1!==n.className.indexOf("waves-effect"))continue;var a=document.createElement("i");a.className=i.className+" waves-input-wrapper";var o=i.getAttribute("style");o||(o=""),a.setAttribute("style",o),i.className="waves-button-input",i.removeAttribute("style"),n.replaceChild(a,i),a.appendChild(i)}}}},u={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?u.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){u.touches>0&&(u.touches-=1)},500):"mousedown"===t.type&&u.touches>0&&(e=!1),e},touchup:function(t){u.allowEvent(t)}};s.displayEffect=function(e){"duration"in(e=e||{})&&(c.duration=e.duration),c.wrapInput(l(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",r,!1),e.addEventListener("mousedown",r,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window),Materialize.toast=function(t,e,i,n){i=i||"";var a=document.getElementById("toast-container");null===a&&((a=document.createElement("div")).id="toast-container",document.body.appendChild(a));var o=function(t){var e=document.createElement("div");if(e.classList.add("toast"),i)for(var a=i.split(" "),o=0,r=a.length;o<r;o++)e.classList.add(a[o]);("object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName)?e.appendChild(t):t instanceof jQuery?e.appendChild(t[0]):e.innerHTML=t;var s=new Hammer(e,{prevent_default:!1});return s.on("pan",function(t){var i=t.deltaX;e.classList.contains("panning")||e.classList.add("panning");var n=1-Math.abs(i/80);n<0&&(n=0),Vel(e,{left:i,opacity:n},{duration:50,queue:!1,easing:"easeOutQuad"})}),s.on("panend",function(t){var i=t.deltaX;Math.abs(i)>80?Vel(e,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof n&&n(),e.parentNode.removeChild(e)}}):(e.classList.remove("panning"),Vel(e,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),e}(t);t&&a.appendChild(o),o.style.top="35px",o.style.opacity=0,Vel(o,{top:"0px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var r=e,s=setInterval(function(){null===o.parentNode&&window.clearInterval(s),o.classList.contains("panning")||(r-=20),r<=0&&(Vel(o,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof n&&n(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(s))},20)},function(t){var e={init:function(e){var i={menuWidth:300,edge:"left",closeOnClick:!1};e=t.extend(i,e),t(this).each(function(){function i(i){r=!1,s=!1,t("body").css({overflow:"",width:""}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),"left"===e.edge?(o.css({width:"",right:"",left:"0"}),a.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){!0===i&&(a.removeAttr("style"),a.css("width",e.menuWidth))}})):(o.css({width:"",right:"0",left:""}),a.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){!0===i&&(a.removeAttr("style"),a.css("width",e.menuWidth))}}))}var n=t(this),a=t("#"+n.attr("data-activates"));300!=e.menuWidth&&a.css("width",e.menuWidth);var o=t('<div class="drag-target"></div>');t("body").append(o),"left"==e.edge?(a.css("transform","translateX(-100%)"),o.css({left:0})):(a.addClass("right-aligned").css("transform","translateX(100%)"),o.css({right:0})),a.hasClass("fixed")&&window.innerWidth>992&&a.css("transform","translateX(0)"),a.hasClass("fixed")&&t(window).resize(function(){window.innerWidth>992?0!==t("#sidenav-overlay").length&&s?i(!0):a.css("transform","translateX(0%)"):!1===s&&("left"===e.edge?a.css("transform","translateX(-100%)"):a.css("transform","translateX(100%)"))}),!0===e.closeOnClick&&a.on("click.itemclick","a:not(.collapsible-header)",function(){i()});var r=!1,s=!1;o.on("click",function(){s&&i()}),o.hammer({prevent_default:!1}).bind("pan",function(n){if("touch"==n.gesture.pointerType){n.gesture.direction;var o=n.gesture.center.x,r=(n.gesture.center.y,n.gesture.velocityX,t("body")),l=r.innerWidth();if(r.css("overflow","hidden"),r.width(l),0===t("#sidenav-overlay").length){var c=t('<div id="sidenav-overlay"></div>');c.css("opacity",0).click(function(){i()}),t("body").append(c)}if("left"===e.edge&&(o>e.menuWidth?o=e.menuWidth:o<0&&(o=0)),"left"===e.edge)o<e.menuWidth/2?s=!1:o>=e.menuWidth/2&&(s=!0),a.css("transform","translateX("+(o-e.menuWidth)+"px)");else{o<window.innerWidth-e.menuWidth/2?s=!0:o>=window.innerWidth-e.menuWidth/2&&(s=!1);var u=o-e.menuWidth/2;u<0&&(u=0),a.css("transform","translateX("+u+"px)")}var d;"left"===e.edge?(d=o/e.menuWidth,t("#sidenav-overlay").velocity({opacity:d},{duration:10,queue:!1,easing:"easeOutQuad"})):(d=Math.abs((o-window.innerWidth)/e.menuWidth),t("#sidenav-overlay").velocity({opacity:d},{duration:10,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(i){if("touch"==i.gesture.pointerType){var n=i.gesture.velocityX,l=i.gesture.center.x,c=l-e.menuWidth,u=l-e.menuWidth/2;c>0&&(c=0),u<0&&(u=0),r=!1,"left"===e.edge?s&&n<=.3||n<-.5?(0!==c&&a.velocity({translateX:[0,c]},{duration:300,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),o.css({width:"50%",right:0,left:""}),s=!0):(!s||n>.3)&&(t("body").css({overflow:"",width:""}),a.velocity({translateX:[-1*e.menuWidth-10,c]},{duration:200,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),o.css({width:"10px",right:"",left:0})):s&&n>=-.3||n>.5?(0!==u&&a.velocity({translateX:[0,u]},{duration:300,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),o.css({width:"50%",right:"",left:0}),s=!0):(!s||n<-.3)&&(t("body").css({overflow:"",width:""}),a.velocity({translateX:[e.menuWidth+10,u]},{duration:200,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),o.css({width:"10px",right:0,left:""}))}}),n.click(function(){if(!0===s)s=!1,r=!1,i();else{var n=t("body"),l=n.innerWidth();n.css("overflow","hidden"),n.width(l),t("body").append(o),"left"===e.edge?(o.css({width:"50%",right:0,left:""}),a.velocity({translateX:[0,-1*e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})):(o.css({width:"50%",right:"",left:0}),a.velocity({translateX:[0,e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"}));var c=t('<div id="sidenav-overlay"></div>');c.css("opacity",0).click(function(){s=!1,r=!1,i(),c.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}})}),t("body").append(c),c.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){s=!0,r=!1}})}return!1})})},show:function(){this.trigger("click")},hide:function(){t("#sidenav-overlay").trigger("click")}};t.fn.sideNav=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sideNav"):e.init.apply(this,arguments)}}(jQuery),function(t){function e(e,i,n,a){var o=t();return t.each(r,function(t,r){if(r.height()>0){var s=r.offset().top,l=r.offset().left,c=l+r.width(),u=s+r.height();!(l>i||c<a||s>n||u<e)&&o.push(r)}}),o}function i(){++c;var i=o.scrollTop(),n=o.scrollLeft(),a=n+o.width(),r=i+o.height(),l=e(i+u.top+200,a+u.right,r+u.bottom,n+u.left);t.each(l,function(t,e){"number"!=typeof e.data("scrollSpy:ticks")&&e.triggerHandler("scrollSpy:enter"),e.data("scrollSpy:ticks",c)}),t.each(s,function(t,e){var i=e.data("scrollSpy:ticks");"number"==typeof i&&i!==c&&(e.triggerHandler("scrollSpy:exit"),e.data("scrollSpy:ticks",null))}),s=l}function n(){o.trigger("scrollSpy:winSize")}function a(t,e,i){var n,a,o,r=null,s=0;i||(i={});var l=function(){s=!1===i.leading?0:d(),r=null,o=t.apply(n,a),n=a=null};return function(){var c=d();s||!1!==i.leading||(s=c);var u=e-(c-s);return n=this,a=arguments,u<=0?(clearTimeout(r),r=null,s=c,o=t.apply(n,a),n=a=null):r||!1===i.trailing||(r=setTimeout(l,u)),o}}var o=t(window),r=[],s=[],l=!1,c=0,u={top:0,right:0,bottom:0,left:0},d=Date.now||function(){return(new Date).getTime()};t.scrollSpy=function(e,n){var s={throttle:100,scrollOffset:200};n=t.extend(s,n);var c=[];(e=t(e)).each(function(e,i){r.push(t(i)),t(i).data("scrollSpy:id",e),t('a[href="#'+t(i).attr("id")+'"]').click(function(e){e.preventDefault();var i=t(this.hash).offset().top+1;t("html, body").animate({scrollTop:i-n.scrollOffset},{duration:400,queue:!1,easing:"easeOutCubic"})})}),u.top=n.offsetTop||0,u.right=n.offsetRight||0,u.bottom=n.offsetBottom||0,u.left=n.offsetLeft||0;var d=a(i,n.throttle||100),p=function(){t(document).ready(d)};return l||(o.on("scroll",p),o.on("resize",p),l=!0),setTimeout(p,0),e.on("scrollSpy:enter",function(){c=t.grep(c,function(t){return 0!=t.height()});var e=t(this);c[0]?(t('a[href="#'+c[0].attr("id")+'"]').removeClass("active"),e.data("scrollSpy:id")<c[0].data("scrollSpy:id")?c.unshift(t(this)):c.push(t(this))):c.push(t(this)),t('a[href="#'+c[0].attr("id")+'"]').addClass("active")}),e.on("scrollSpy:exit",function(){if((c=t.grep(c,function(t){return 0!=t.height()}))[0]){t('a[href="#'+c[0].attr("id")+'"]').removeClass("active");var e=t(this);(c=t.grep(c,function(t){return t.attr("id")!=e.attr("id")}))[0]&&t('a[href="#'+c[0].attr("id")+'"]').addClass("active")}}),e},t.winSizeSpy=function(e){return t.winSizeSpy=function(){return o},e=e||{throttle:100},o.on("resize",a(n,e.throttle||100))},t.fn.scrollSpy=function(e){return t.scrollSpy(t(this),e)}}(jQuery),function(t){t(document).ready(function(){function e(e){var i=e.css("font-family"),a=e.css("font-size"),o=e.css("line-height");a&&n.css("font-size",a),i&&n.css("font-family",i),o&&n.css("line-height",o),"off"===e.attr("wrap")&&n.css("overflow-wrap","normal").css("white-space","pre"),n.text(e.val()+"\n");var r=n.html().replace(/\n/g,"<br>");n.html(r),e.is(":visible")?n.css("width",e.width()):n.css("width",t(window).width()/2),e.css("height",n.height())}Materialize.updateTextFields=function(){t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(e,i){t(i).val().length>0||i.autofocus||void 0!==t(this).attr("placeholder")||!0===t(i)[0].validity.badInput?t(this).siblings("label").addClass("active"):t(this).siblings("label").removeClass("active")})};var i="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t(document).on("change",i,function(){0===t(this).val().length&&void 0===t(this).attr("placeholder")||t(this).siblings("label").addClass("active"),validate_field(t(this))}),t(document).ready(function(){Materialize.updateTextFields()}),t(document).on("reset",function(e){var n=t(e.target);n.is("form")&&(n.find(i).removeClass("valid").removeClass("invalid"),n.find(i).each(function(){""===t(this).attr("value")&&t(this).siblings("label").removeClass("active")}),n.find("select.initialized").each(function(){var t=n.find("option[selected]").text();n.siblings("input.select-dropdown").val(t)}))}),t(document).on("focus",i,function(){t(this).siblings("label, .prefix").addClass("active")}),t(document).on("blur",i,function(){var e=t(this),i=".prefix";0===e.val().length&&!0!==e[0].validity.badInput&&void 0===e.attr("placeholder")&&(i+=", label"),e.siblings(i).removeClass("active"),validate_field(e)}),window.validate_field=function(t){var e=void 0!==t.attr("length"),i=parseInt(t.attr("length")),n=t.val().length;0===t.val().length&&!1===t[0].validity.badInput?t.hasClass("validate")&&(t.removeClass("valid"),t.removeClass("invalid")):t.hasClass("validate")&&(t.is(":valid")&&e&&n<=i||t.is(":valid")&&!e?(t.removeClass("invalid"),t.addClass("valid")):(t.removeClass("valid"),t.addClass("invalid")))};t(document).on("keyup.radio","input[type=radio], input[type=checkbox]",function(e){if(9===e.which)return t(this).addClass("tabbed"),void t(this).one("blur",function(e){t(this).removeClass("tabbed")})});var n=t(".hiddendiv").first();n.length||(n=t('<div class="hiddendiv common"></div>'),t("body").append(n));t(".materialize-textarea").each(function(){var i=t(this);i.val().length&&e(i)}),t("body").on("keyup keydown autoresize",".materialize-textarea",function(){e(t(this))}),t(document).on("change",'.file-field input[type="file"]',function(){for(var e=t(this).closest(".file-field").find("input.file-path"),i=t(this)[0].files,n=[],a=0;a<i.length;a++)n.push(i[a].name);e.val(n.join(", ")),e.trigger("change")});var a,o="input[type=range]",r=!1;t(o).each(function(){var e=t('<span class="thumb"><span class="value"></span></span>');e.find(".value").html((t(this).val()/1e3).toFixed(0)+"K"),t(this).after(e)});t(document).on("change",o,function(e){t(this).siblings(".thumb").find(".value").html((t(this).val()/1e3).toFixed(0)+"K")}),t(document).on("input mousedown touchstart",o,function(e){var i=t(this).siblings(".thumb"),n=t(this).outerWidth();i.length<=0&&(i=t('<span class="thumb"><span class="value"></span></span>'),t(this).after(i)),i.find(".value").html((t(this).val()/1e3).toFixed(0)+"K"),r=!0,t(this).addClass("active"),i.hasClass("active")||i.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),"input"!==e.type&&((a=void 0===e.pageX||null===e.pageX?e.originalEvent.touches[0].pageX-t(this).offset().left:e.pageX-t(this).offset().left)<0?a=0:a>n&&(a=n),i.addClass("active").css("left",a)),i.find(".value").html(t(this).val())}),t(document).on("mouseup touchend",".range-field",function(){r=!1,t(this).removeClass("active")}),t(document).on("mousemove touchmove",".range-field",function(e){var i,n=t(this).children(".thumb");if(r){n.hasClass("active")||n.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),i=void 0===e.pageX||null===e.pageX?e.originalEvent.touches[0].pageX-t(this).offset().left:e.pageX-t(this).offset().left;var a=t(this).outerWidth();i<0?i=0:i>a&&(i=a),n.addClass("active").css("left",i),n.find(".value").html((n.siblings(o).val()/1e3).toFixed(0)+"K")}}),t(document).on("mouseout touchleave",".range-field",function(){if(!r){var e=t(this).children(".thumb");e.find(".value").html((t(this).val()/1e3).toFixed(0)+"K"),e.hasClass("active")&&e.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),e.removeClass("active")}}),t.fn.autocomplete=function(e){var i={data:{}};return e=t.extend(i,e),this.each(function(){var i=t(this),n=e.data,a=i.closest(".input-field");if(!t.isEmptyObject(n)){var o=t('<ul class="autocomplete-content dropdown-content"></ul>');a.length?a.append(o):i.after(o);var r=function(t,e){var i=e.find("img"),n=e.text().toLowerCase().indexOf(""+t.toLowerCase()),a=n+t.length-1,o=e.text().slice(0,n),r=e.text().slice(n,a+1),s=e.text().slice(a+1);e.html("<span>"+o+"<span class='highlight'>"+r+"</span>"+s+"</span>"),i.length&&e.prepend(i)};i.on("keyup",function(e){if(13!==e.which){var a=i.val().toLowerCase();if(o.empty(),""!==a)for(var s in n)if(n.hasOwnProperty(s)&&-1!==s.toLowerCase().indexOf(a)&&s.toLowerCase()!==a){var l=t("<li></li>");n[s]?l.append('<img src="'+n[s]+'" class="right circle"><span>'+s+"</span>"):l.append("<span>"+s+"</span>"),o.append(l),r(a,l)}}else o.find("li").first().click()}),o.on("click","li",function(){i.val(t(this).text().trim()),o.empty()})}})}}),t.fn.material_select=function(e){function i(t,e,i){var a=t.indexOf(e),o=-1===a;return o?t.push(e):t.splice(a,1),i.siblings("ul.dropdown-content").find("li").eq(e).toggleClass("active"),i.find("option").eq(e).prop("selected",o),n(t,i),o}function n(t,e){for(var i="",n=0,a=t.length;n<a;n++){var o=e.find("option").eq(t[n]).text();i+=0===n?o:", "+o}""===i&&(i=e.find("option:disabled").eq(0).text()),e.siblings("input.select-dropdown").val(i)}t(this).each(function(){var n=t(this);if(!n.hasClass("browser-default")){var a=!!n.attr("multiple"),o=n.data("select-id");if(o&&(n.parent().find("span.caret").remove(),n.parent().find("input").remove(),n.unwrap(),t("ul#select-options-"+o).remove()),"destroy"!==e){var r=Materialize.guid();n.data("select-id",r);var s=t('<div class="select-wrapper"></div>');s.addClass(n.attr("class"));var l=t('<ul id="select-options-'+r+'" class="dropdown-content select-dropdown '+(a?"multiple-select-dropdown":"")+'"></ul>'),c=n.children("option, optgroup"),u=[],d=!1,p=n.find("option:selected").html()||n.find("option:first").html()||"",h=function(e,i,n){var a=i.is(":disabled")?"disabled ":"",o="optgroup-option"===n?"optgroup-option ":"",r=i.data("icon"),s=i.attr("class");if(r){var c="";return s&&(c=' class="'+s+'"'),"multiple"===n?l.append(t('<li class="'+a+'"><img src="'+r+'"'+c+'><span><input type="checkbox"'+a+"/><label></label>"+i.html()+"</span></li>")):l.append(t('<li class="'+a+o+'"><img src="'+r+'"'+c+"><span>"+i.html()+"</span></li>")),!0}"multiple"===n?l.append(t('<li class="'+a+'"><span><input type="checkbox"'+a+"/><label></label>"+i.html()+"</span></li>")):l.append(t('<li class="'+a+o+'"><span>'+i.html()+"</span></li>"))};c.length&&c.each(function(){if(t(this).is("option"))a?h(0,t(this),"multiple"):h(0,t(this));else if(t(this).is("optgroup")){var e=t(this).children("option");l.append(t('<li class="optgroup"><span>'+t(this).attr("label")+"</span></li>")),e.each(function(){h(0,t(this),"optgroup-option")})}}),l.find("li:not(.optgroup)").each(function(o){t(this).click(function(r){if(!t(this).hasClass("disabled")&&!t(this).hasClass("optgroup")){var s=!0;a?(t('input[type="checkbox"]',this).prop("checked",function(t,e){return!e}),s=i(u,t(this).index(),n),g.trigger("focus")):(l.find("li").removeClass("active"),t(this).toggleClass("active"),g.val(t(this).text())),m(l,t(this)),n.find("option").eq(o).prop("selected",s),n.trigger("change"),void 0!==e&&e()}r.stopPropagation()})}),n.wrap(s);var f=t('<span class="caret">&#9660;</span>');n.is(":disabled")&&f.addClass("disabled");var v=p.replace(/"/g,"&quot;"),g=t('<input type="text" class="select-dropdown" readonly="true" '+(n.is(":disabled")?"disabled":"")+' data-activates="select-options-'+r+'" value="'+v+'"/>');n.before(g),g.before(f),g.after(l),n.is(":disabled")||g.dropdown({hover:!1,closeOnClick:!1}),n.attr("tabindex")&&t(g[0]).attr("tabindex",n.attr("tabindex")),n.addClass("initialized"),g.on({focus:function(){if(t("ul.select-dropdown").not(l[0]).is(":visible")&&t("input.select-dropdown").trigger("close"),!l.is(":visible")){t(this).trigger("open",["focus"]);var e=t(this).val(),i=l.find("li").filter(function(){return t(this).text().toLowerCase()===e.toLowerCase()})[0];m(l,i)}},click:function(t){t.stopPropagation()}}),g.on("blur",function(){a||t(this).trigger("close"),l.find("li.selected").removeClass("selected")}),l.hover(function(){d=!0},function(){d=!1}),t(window).on({click:function(){a&&(d||g.trigger("close"))}}),a&&n.find("option:selected:not(:disabled)").each(function(){var e=t(this).index();i(u,e,n),l.find("li").eq(e).find(":checkbox").prop("checked",!0)});var m=function(e,i){if(i){e.find("li.selected").removeClass("selected");var n=t(i);n.addClass("selected"),l.scrollTo(n)}},y=[];g.on("keydown",function(e){if(9!=e.which)if(40!=e.which||l.is(":visible")){if(13!=e.which||l.is(":visible")){e.preventDefault();var i=String.fromCharCode(e.which).toLowerCase(),n=[9,13,27,38,40];if(i&&-1===n.indexOf(e.which)){y.push(i);var o=y.join(""),r=l.find("li").filter(function(){return 0===t(this).text().toLowerCase().indexOf(o)})[0];r&&m(l,r)}if(13==e.which){var s=l.find("li.selected:not(.disabled)")[0];s&&(t(s).trigger("click"),a||g.trigger("close"))}40==e.which&&(r=l.find("li.selected").length?l.find("li.selected").next("li:not(.disabled)")[0]:l.find("li:not(.disabled)")[0],m(l,r)),27==e.which&&g.trigger("close"),38==e.which&&(r=l.find("li.selected").prev("li:not(.disabled)")[0])&&m(l,r),setTimeout(function(){y=[]},1e3)}}else g.trigger("open");else g.trigger("close")})}else n.data("select-id",null).removeClass("initialized")}})}}(jQuery),function(t){var e={init:function(e){var i={indicators:!0,height:400,transition:500,interval:6e3};return e=t.extend(i,e),this.each(function(){function i(t,e){t.hasClass("center-align")?t.velocity({opacity:0,translateY:-100},{duration:e,queue:!1}):t.hasClass("right-align")?t.velocity({opacity:0,translateX:100},{duration:e,queue:!1}):t.hasClass("left-align")&&t.velocity({opacity:0,translateX:-100},{duration:e,queue:!1})}function n(t){t>=c.length?t=0:t<0&&(t=c.length-1),(u=l.find(".active").index())!=t&&(a=c.eq(u),$caption=a.find(".caption"),a.removeClass("active"),a.velocity({opacity:0},{duration:e.transition,queue:!1,easing:"easeOutQuad",complete:function(){c.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),i($caption,e.transition),e.indicators&&o.eq(u).removeClass("active"),c.eq(t).velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),c.eq(t).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,delay:e.transition,queue:!1,easing:"easeOutQuad"}),c.eq(t).addClass("active"),e.indicators&&o.eq(t).addClass("active"))}var a,o,r,s=t(this),l=s.find("ul.slides").first(),c=l.find("> li"),u=l.find(".active").index();-1!=u&&(a=c.eq(u)),s.hasClass("fullscreen")||(e.indicators?s.height(e.height+40):s.height(e.height),l.height(e.height)),c.find(".caption").each(function(){i(t(this),0)}),c.find("img").each(function(){var e="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";t(this).attr("src")!==e&&(t(this).css("background-image","url("+t(this).attr("src")+")"),t(this).attr("src",e))}),e.indicators&&(o=t('<ul class="indicators"></ul>'),c.each(function(i){var a=t('<li class="indicator-item"></li>');a.click(function(){n(l.parent().find(t(this)).index()),clearInterval(r),r=setInterval(function(){u=l.find(".active").index(),c.length==u+1?u=0:u+=1,n(u)},e.transition+e.interval)}),o.append(a)}),s.append(o),o=s.find("ul.indicators").find("li.indicator-item")),a?a.show():(c.first().addClass("active").velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),u=0,a=c.eq(u),e.indicators&&o.eq(u).addClass("active")),a.find("img").each(function(){a.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,queue:!1,easing:"easeOutQuad"})}),r=setInterval(function(){n((u=l.find(".active").index())+1)},e.transition+e.interval);var d=!1,p=!1,h=!1;s.hammer({prevent_default:!1}).bind("pan",function(t){if("touch"===t.gesture.pointerType){clearInterval(r);var e=t.gesture.direction,i=t.gesture.deltaX,n=t.gesture.velocityX;$curr_slide=l.find(".active"),$curr_slide.velocity({translateX:i},{duration:50,queue:!1,easing:"easeOutQuad"}),4===e&&(i>s.innerWidth()/2||n<-.65)?h=!0:2===e&&(i<-1*s.innerWidth()/2||n>.65)&&(p=!0);var a;p&&(0===(a=$curr_slide.next()).length&&(a=c.first()),a.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),h&&(0===(a=$curr_slide.prev()).length&&(a=c.last()),a.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(t){"touch"===t.gesture.pointerType&&($curr_slide=l.find(".active"),d=!1,curr_index=l.find(".active").index(),!h&&!p||c.length<=1?$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}):p?(n(curr_index+1),$curr_slide.velocity({translateX:-1*s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):h&&(n(curr_index-1),$curr_slide.velocity({translateX:s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})),p=!1,h=!1,clearInterval(r),r=setInterval(function(){u=l.find(".active").index(),c.length==u+1?u=0:u+=1,n(u)},e.transition+e.interval))}),s.on("sliderPause",function(){clearInterval(r)}),s.on("sliderStart",function(){clearInterval(r),r=setInterval(function(){u=l.find(".active").index(),c.length==u+1?u=0:u+=1,n(u)},e.transition+e.interval)}),s.on("sliderNext",function(){n((u=l.find(".active").index())+1)}),s.on("sliderPrev",function(){n((u=l.find(".active").index())-1)})})},pause:function(){t(this).trigger("sliderPause")},start:function(){t(this).trigger("sliderStart")},next:function(){t(this).trigger("sliderNext")},prev:function(){t(this).trigger("sliderPrev")}};t.fn.slider=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tooltip"):e.init.apply(this,arguments)}}(jQuery),function(t){t(document).ready(function(){t(document).on("click.card",".card",function(e){t(this).find("> .card-reveal").length&&(t(e.target).is(t(".card-reveal .card-title"))||t(e.target).is(t(".card-reveal .card-title i"))?t(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){t(this).css({display:"none"})}}):(t(e.target).is(t(".card .activator"))||t(e.target).is(t(".card .activator i")))&&(t(e.target).closest(".card").css("overflow","hidden"),t(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"})))})})}(jQuery),function(t){var e=!1,i={data:[],placeholder:"",secondaryPlaceholder:""};t(document).ready(function(){t(document).on("click",".chip .close",function(e){t(this).closest(".chips").data("initialized")||t(this).closest(".chip").remove()})}),t.fn.material_chip=function(n){var a=this;return this.$el=t(this),this.$document=t(document),this.SELS={CHIPS:".chips",CHIP:".chip",INPUT:"input",DELETE:".material-icons",SELECTED_CHIP:".selected"},"data"===n?this.$el.data("chips"):"options"===n?this.$el.data("options"):(this.$el.data("options",t.extend({},i,n)),this.init=function(){var e=0;a.$el.each(function(){var i=t(this);if(!i.data("initialized")){var n=i.data("options");(!n.data||!n.data instanceof Array)&&(n.data=[]),i.data("chips",n.data),i.data("index",e),i.data("initialized",!0),i.hasClass(a.SELS.CHIPS)||i.addClass("chips"),a.chips(i),e++}})},this.handleEvents=function(){var e=a.SELS;a.$document.on("click",e.CHIPS,function(i){t(i.target).find(e.INPUT).focus()}),a.$document.on("click",e.CHIP,function(i){t(e.CHIP).removeClass("selected"),t(this).toggleClass("selected")}),a.$document.on("keydown",function(i){if(!t(i.target).is("input, textarea")){var n,o=a.$document.find(e.CHIP+e.SELECTED_CHIP),r=o.closest(e.CHIPS),s=o.siblings(e.CHIP).length;if(o.length)if(8===i.which||46===i.which){i.preventDefault();var l=r.data("index");n=o.index(),a.deleteChip(l,n,r);var c=null;n+1<s?c=n:n!==s&&n+1!==s||(c=s-1),c<0&&(c=null),null!==c&&a.selectChip(l,c,r),s||r.find("input").focus()}else if(37===i.which){if((n=o.index()-1)<0)return;t(e.CHIP).removeClass("selected"),a.selectChip(r.data("index"),n,r)}else if(39===i.which){if(n=o.index()+1,t(e.CHIP).removeClass("selected"),n>s)return void r.find("input").focus();a.selectChip(r.data("index"),n,r)}}}),a.$document.on("focusin",e.CHIPS+" "+e.INPUT,function(i){t(i.target).closest(e.CHIPS).addClass("focus"),t(e.CHIP).removeClass("selected")}),a.$document.on("focusout",e.CHIPS+" "+e.INPUT,function(i){t(i.target).closest(e.CHIPS).removeClass("focus")}),a.$document.on("keydown",e.CHIPS+" "+e.INPUT,function(i){var n=t(i.target),o=n.closest(e.CHIPS),r=o.data("index"),s=o.children(e.CHIP).length;return 13===i.which?(i.preventDefault(),a.addChip(r,{tag:n.val()},o),void n.val("")):8!==i.keyCode&&37!==i.keyCode||""!==n.val()||!s?void 0:(a.selectChip(r,s-1,o),void n.blur())}),a.$document.on("click",e.CHIPS+" "+e.DELETE,function(i){var n=t(i.target),o=n.closest(e.CHIPS),r=n.closest(e.CHIP);i.stopPropagation(),a.deleteChip(o.data("index"),r.index(),o),o.find("input").focus()})},this.chips=function(t){var e="";t.data("options");t.data("chips").forEach(function(t){e+=a.renderChip(t)}),e+='<input class="input" placeholder="">',t.html(e),a.setPlaceholder(t)},this.renderChip=function(t){if(t.tag){var e="",i="";return t.data&&(i+=' data-value="'+t.data+'"'),t.type&&(i+=' data-type="'+t.type+'"'),e+='<div class="chip" '+i+">"+t.tag,t.image&&(e+=' <img src="'+t.image+'"> '),e+='<i class="material-icons close">close</i>',e+="</div>"}},this.setPlaceholder=function(t){var e=t.data("options");t.data("chips").length&&e.placeholder?t.find("input").prop("placeholder",e.placeholder):!t.data("chips").length&&e.secondaryPlaceholder&&t.find("input").prop("placeholder",e.secondaryPlaceholder)},this.isValid=function(t,e){for(var i=t.data("chips"),n=!1,a=0;a<i.length;a++)if(i[a].tag===e.tag)return void(n=!0);return""!==e.tag&&!n},this.addChip=function(e,i,n){if(a.isValid(n,i)){n.data("options");var o=a.renderChip(i);n.data("chips").push(i),t(o).insertBefore(n.find("input")),n.trigger("chip.add",i),a.setPlaceholder(n)}},this.deleteChip=function(t,e,i){var n=i.data("chips")[e];i.find(".chip").eq(e).remove(),i.data("chips").splice(e,1),i.trigger("chip.delete",n),a.setPlaceholder(i)},this.selectChip=function(t,e,i){var n=i.find(".chip").eq(e);n&&!1===n.hasClass("selected")&&(n.addClass("selected"),i.trigger("chip.select",i.data("chips")[e]))},this.getChipsElement=function(t,e){return e.eq(t)},this.init(),void(e||(this.handleEvents(),e=!0)))}}(jQuery),function(t){t.fn.pushpin=function(e){var i={top:0,bottom:1/0,offset:0};return"remove"===e?(this.each(function(){(id=t(this).data("pushpin-id"))&&(t(window).off("scroll."+id),t(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))}),!1):(e=t.extend(i,e),$index=0,this.each(function(){function i(t){t.removeClass("pin-top"),t.removeClass("pinned"),t.removeClass("pin-bottom")}function n(n,a){n.each(function(){e.top<=a&&e.bottom>=a&&!t(this).hasClass("pinned")&&(i(t(this)),t(this).css("top",e.offset),t(this).addClass("pinned")),a<e.top&&!t(this).hasClass("pin-top")&&(i(t(this)),t(this).css("top",0),t(this).addClass("pin-top")),a>e.bottom&&!t(this).hasClass("pin-bottom")&&(i(t(this)),t(this).addClass("pin-bottom"),t(this).css("top",e.bottom-r))})}var a=Materialize.guid(),o=t(this),r=t(this).offset().top;t(this).data("pushpin-id",a),n(o,t(window).scrollTop()),t(window).on("scroll."+a,function(){var i=t(window).scrollTop()+e.offset;n(o,i)})}))}}(jQuery),function(t){t(document).ready(function(){t.fn.reverse=[].reverse,t(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(i){var n=t(this);e(n)}),t(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(e){var n=t(this);i(n)}),t(document).on("click.fixedActionBtn",".fixed-action-btn.click-to-toggle > a",function(n){var a=t(this).parent();a.hasClass("active")?i(a):e(a)})}),t.fn.extend({openFAB:function(){e(t(this))},closeFAB:function(){i(t(this))}});var e=function(e){if($this=e,!1===$this.hasClass("active")){var i,n;!0===$this.hasClass("horizontal")?n=40:i=40,$this.addClass("active"),$this.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:i+"px",translateX:n+"px"},{duration:0});var a=0;$this.find("ul .btn-floating").reverse().each(function(){t(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:a}),a+=40})}},i=function(t){$this=t;var e,i;!0===$this.hasClass("horizontal")?i=40:e=40,$this.removeClass("active");$this.find("ul .btn-floating").velocity("stop",!0),$this.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:e+"px",translateX:i+"px"},{duration:80})}}(jQuery),function(t){Materialize.fadeInImage=function(e){var i;if("string"==typeof e)i=t(e);else{if("object"!=typeof e)return;i=e}i.css({opacity:0}),t(i).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),t(i).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(e,i){i.start=100;var n=e/100,a=150-(100-e)/1.75;a<100&&(a=100),e>=0&&t(this).css({"-webkit-filter":"grayscale("+n+")brightness("+a+"%)",filter:"grayscale("+n+")brightness("+a+"%)"})}})},Materialize.showStaggeredList=function(e){var i;if("string"==typeof e)i=t(e);else{if("object"!=typeof e)return;i=e}var n=0;i.find("li").velocity({translateX:"-100px"},{duration:0}),i.find("li").each(function(){t(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:n,easing:[60,10]}),n+=120})},t(document).ready(function(){var e=!1,i=!1;t(".dismissable").each(function(){t(this).hammer({prevent_default:!1}).bind("pan",function(n){if("touch"===n.gesture.pointerType){var a=t(this),o=n.gesture.direction,r=n.gesture.deltaX,s=n.gesture.velocityX;a.velocity({translateX:r},{duration:50,queue:!1,easing:"easeOutQuad"}),4===o&&(r>a.innerWidth()/2||s<-.75)&&(e=!0),2===o&&(r<-1*a.innerWidth()/2||s>.75)&&(i=!0)}}).bind("panend",function(n){if(Math.abs(n.gesture.deltaX)<t(this).innerWidth()/2&&(i=!1,e=!1),"touch"===n.gesture.pointerType){var a=t(this);if(e||i){var o;o=e?a.innerWidth():-1*a.innerWidth(),a.velocity({translateX:o},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){a.css("border","none"),a.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a.remove()}})}})}else a.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});e=!1,i=!1}})})})}(jQuery),Materialize.scrollFire=function(t){var e=!1;window.addEventListener("scroll",function(){e=!0}),setInterval(function(){if(e){e=!1;for(var i=window.pageYOffset+window.innerHeight,n=0;n<t.length;n++){var a=t[n],o=a.selector,r=a.offset,s=a.callback,l=document.querySelector(o);null!==l&&i>l.getBoundingClientRect().top+window.pageYOffset+r&&!0!==a.done&&("function"==typeof s?s.call(this,l):"string"==typeof s&&new Function(s)(l),a.done=!0)}}},100)},function(t){"function"==typeof define&&define.amd?define("picker",["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):this.Picker=t(jQuery)}(function(t){function e(o,s,u,d){function p(){return e._.node("div",e._.node("div",e._.node("div",e._.node("div",T.component.nodes(b.open),x.box),x.wrap),x.frame),x.holder)}function h(){C.data(s,T).addClass(x.input).attr("tabindex",-1).val(C.data("value")?T.get("select",w.format):o.value),w.editable||C.on("focus."+b.id+" click."+b.id,function(t){t.preventDefault(),T.$root.eq(0).focus()}).on("keydown."+b.id,g),a(o,{haspopup:!0,expanded:!1,readonly:!1,owns:o.id+"_root"})}function f(){T.$root.on({keydown:g,focusin:function(t){T.$root.removeClass(x.focused),t.stopPropagation()},"mousedown click":function(e){var i=e.target;i!=T.$root.children()[0]&&(e.stopPropagation(),"mousedown"!=e.type||t(i).is("input, select, textarea, button, option")||(e.preventDefault(),T.$root.eq(0).focus()))}}).on({focus:function(){C.addClass(x.target)},blur:function(){C.removeClass(x.target)}}).on("focus.toOpen",m).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var e=t(this),i=e.data(),n=e.hasClass(x.navDisabled)||e.hasClass(x.disabled),a=r();a=a&&(a.type||a.href),(n||a&&!t.contains(T.$root[0],a))&&T.$root.eq(0).focus(),!n&&i.nav?T.set("highlight",T.component.item.highlight,{nav:i.nav}):!n&&"pick"in i?T.set("select",i.pick):i.clear?T.clear().close(!0):i.close&&T.close(!0)}),a(T.$root[0],"hidden",!0)}function v(){var e;!0===w.hiddenName?(e=o.name,o.name=""):e=(e=["string"==typeof w.hiddenPrefix?w.hiddenPrefix:"","string"==typeof w.hiddenSuffix?w.hiddenSuffix:"_submit"])[0]+o.name+e[1],T._hidden=t('<input type=hidden name="'+e+'"'+(C.data("value")||o.value?' value="'+T.get("select",w.formatSubmit)+'"':"")+">")[0],C.on("change."+b.id,function(){T._hidden.value=o.value?T.get("select",w.formatSubmit):""}),w.container?t(w.container).append(T._hidden):C.after(T._hidden)}function g(t){var e=t.keyCode,i=/^(8|46)$/.test(e);if(27==e)return T.close(),!1;(32==e||i||!b.open&&T.component.key[e])&&(t.preventDefault(),t.stopPropagation(),i?T.clear().close():T.open())}function m(t){t.stopPropagation(),"focus"==t.type&&T.$root.addClass(x.focused),T.open()}if(!o)return e;var y=!1,b={id:o.id||"P"+Math.abs(~~(Math.random()*new Date))},w=u?t.extend(!0,{},u.defaults,d):d||{},x=t.extend({},e.klasses(),w.klass),C=t(o),k=function(){return this.start()},T=k.prototype={constructor:k,$node:C,start:function(){return b&&b.start?T:(b.methods={},b.start=!0,b.open=!1,b.type=o.type,o.autofocus=o==r(),o.readOnly=!w.editable,o.id=o.id||b.id,"text"!=o.type&&(o.type="text"),T.component=new u(T,w),T.$root=t(e._.node("div",p(),x.picker,'id="'+o.id+'_root" tabindex="0"')),f(),w.formatSubmit&&v(),h(),w.container?t(w.container).append(T.$root):C.after(T.$root),T.on({start:T.component.onStart,render:T.component.onRender,stop:T.component.onStop,open:T.component.onOpen,close:T.component.onClose,set:T.component.onSet}).on({start:w.onStart,render:w.onRender,stop:w.onStop,open:w.onOpen,close:w.onClose,set:w.onSet}),y=i(T.$root.children()[0]),o.autofocus&&T.open(),T.trigger("start").trigger("render"))},render:function(t){return t?T.$root.html(p()):T.$root.find("."+x.box).html(T.component.nodes(b.open)),T.trigger("render")},stop:function(){return b.start?(T.close(),T._hidden&&T._hidden.parentNode.removeChild(T._hidden),T.$root.remove(),C.removeClass(x.input).removeData(s),setTimeout(function(){C.off("."+b.id)},0),o.type=b.type,o.readOnly=!1,T.trigger("stop"),b.methods={},b.start=!1,T):T},open:function(i){return b.open?T:(C.addClass(x.active),a(o,"expanded",!0),setTimeout(function(){T.$root.addClass(x.opened),a(T.$root[0],"hidden",!1)},0),!1!==i&&(b.open=!0,y&&c.css("overflow","hidden").css("padding-right","+="+n()),T.$root.eq(0).focus(),l.on("click."+b.id+" focusin."+b.id,function(t){var e=t.target;e!=o&&e!=document&&3!=t.which&&T.close(e===T.$root.children()[0])}).on("keydown."+b.id,function(i){var n=i.keyCode,a=T.component.key[n],o=i.target;27==n?T.close(!0):o!=T.$root[0]||!a&&13!=n?t.contains(T.$root[0],o)&&13==n&&(i.preventDefault(),o.click()):(i.preventDefault(),a?e._.trigger(T.component.key.go,T,[e._.trigger(a)]):T.$root.find("."+x.highlighted).hasClass(x.disabled)||T.set("select",T.component.item.highlight).close())})),T.trigger("open"))},close:function(t){return t&&(T.$root.off("focus.toOpen").eq(0).focus(),setTimeout(function(){T.$root.on("focus.toOpen",m)},0)),C.removeClass(x.active),a(o,"expanded",!1),setTimeout(function(){T.$root.removeClass(x.opened+" "+x.focused),a(T.$root[0],"hidden",!0)},0),b.open?(b.open=!1,y&&c.css("overflow","").css("padding-right","-="+n()),l.off("."+b.id),T.trigger("close")):T},clear:function(t){return T.set("clear",null,t)},set:function(e,i,n){var a,o,r=t.isPlainObject(e),s=r?e:{};if(n=r&&t.isPlainObject(i)?i:n||{},e){r||(s[e]=i);for(a in s)o=s[a],a in T.component.item&&(void 0===o&&(o=null),T.component.set(a,o,n)),"select"!=a&&"clear"!=a||C.val("clear"==a?"":T.get(a,w.format)).trigger("change");T.render()}return n.muted?T:T.trigger("set",s)},get:function(t,i){if(t=t||"value",null!=b[t])return b[t];if("valueSubmit"==t){if(T._hidden)return T._hidden.value;t="value"}if("value"==t)return o.value;if(t in T.component.item){if("string"==typeof i){var n=T.component.get(t);return n?e._.trigger(T.component.formats.toString,T.component,[i,n]):""}return T.component.get(t)}},on:function(e,i,n){var a,o,r=t.isPlainObject(e),s=r?e:{};if(e){r||(s[e]=i);for(a in s)o=s[a],n&&(a="_"+a),b.methods[a]=b.methods[a]||[],b.methods[a].push(o)}return T},off:function(){var t,e,i=arguments;for(t=0,namesCount=i.length;t<namesCount;t+=1)(e=i[t])in b.methods&&delete b.methods[e];return T},trigger:function(t,i){var n=function(t){var n=b.methods[t];n&&n.map(function(t){e._.trigger(t,T,[i])})};return n("_"+t),n(t),T}};return new k}function i(t){var e;return t.currentStyle?e=t.currentStyle.position:window.getComputedStyle&&(e=getComputedStyle(t).position),"fixed"==e}function n(){if(c.height()<=s.height())return 0;var e=t('<div style="visibility:hidden;width:100px" />').appendTo("body"),i=e[0].offsetWidth;e.css("overflow","scroll");var n=t('<div style="width:100%" />').appendTo(e)[0].offsetWidth;return e.remove(),i-n}function a(e,i,n){if(t.isPlainObject(i))for(var a in i)o(e,a,i[a]);else o(e,i,n)}function o(t,e,i){t.setAttribute(("role"==e?"":"aria-")+e,i)}function r(){try{return document.activeElement}catch(t){}}var s=t(window),l=t(document),c=t(document.documentElement);return e.klasses=function(t){return t=t||"picker",{picker:t,opened:t+"--opened",focused:t+"--focused",input:t+"__input",active:t+"__input--active",target:t+"__input--target",holder:t+"__holder",frame:t+"__frame",wrap:t+"__wrap",box:t+"__box"}},e._={group:function(t){for(var i,n="",a=e._.trigger(t.min,t);a<=e._.trigger(t.max,t,[a]);a+=t.i)i=e._.trigger(t.item,t,[a]),n+=e._.node(t.node,i[0],i[1],i[2]);return n},node:function(e,i,n,a){return i?(i=t.isArray(i)?i.join(""):i,n=n?' class="'+n+'"':"",a=a?" "+a:"","<"+e+n+a+">"+i+"</"+e+">"):""},lead:function(t){return(t<10?"0":"")+t},trigger:function(t,e,i){return"function"==typeof t?t.apply(e,i||[]):t},digits:function(t){return/\d/.test(t[1])?2:1},isDate:function(t){return{}.toString.call(t).indexOf("Date")>-1&&this.isInteger(t.getDate())},isInteger:function(t){return{}.toString.call(t).indexOf("Number")>-1&&t%1==0},ariaAttr:function(e,i){t.isPlainObject(e)||(e={attribute:i}),i="";for(var n in e){var a=("role"==n?"":"aria-")+n;i+=null==e[n]?"":a+'="'+e[n]+'"'}return i}},e.extend=function(i,n){t.fn[i]=function(a,o){var r=this.data(i);return"picker"==a?r:r&&"string"==typeof a?e._.trigger(r[a],r,[o]):this.each(function(){t(this).data(i)||new e(this,i,n,a)})},t.fn[i].defaults=n.defaults},e}),function(t){"function"==typeof define&&define.amd?define(["picker","jquery"],t):"object"==typeof exports?module.exports=t(require("./picker.js"),require("jquery")):t(Picker,jQuery)}(function(t,e){function i(t,e){var i=this,n=t.$node[0],a=n.value,o=t.$node.data("value"),r=o||a,s=o?e.formatSubmit:e.format,l=function(){return n.currentStyle?"rtl"==n.currentStyle.direction:"rtl"==getComputedStyle(t.$root[0]).direction};i.settings=e,i.$node=t.$node,i.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},i.item={},i.item.clear=null,i.item.disable=(e.disable||[]).slice(0),i.item.enable=-function(t){return!0===t[0]?t.shift():-1}(i.item.disable),i.set("min",e.min).set("max",e.max).set("now"),r?i.set("select",r,{format:s}):i.set("select",null).set("highlight",i.item.now),i.key={40:7,38:-7,39:function(){return l()?-1:1},37:function(){return l()?1:-1},go:function(t){var e=i.item.highlight,n=new Date(e.year,e.month,e.date+t);i.set("highlight",n,{interval:t}),this.render()}},t.on("render",function(){t.$root.find("."+e.klass.selectMonth).on("change",function(){var i=this.value;i&&(t.set("highlight",[t.get("view").year,i,t.get("highlight").date]),t.$root.find("."+e.klass.selectMonth).trigger("focus"))}),t.$root.find("."+e.klass.selectYear).on("change",function(){var i=this.value;i&&(t.set("highlight",[i,t.get("view").month,t.get("highlight").date]),t.$root.find("."+e.klass.selectYear).trigger("focus"))})},1).on("open",function(){var n="";i.disabled(i.get("now"))&&(n=":not(."+e.klass.buttonToday+")"),t.$root.find("button"+n+", select").attr("disabled",!1)},1).on("close",function(){t.$root.find("button, select").attr("disabled",!0)},1)}var n=t._;i.prototype.set=function(t,e,i){var n=this,a=n.item;return null===e?("clear"==t&&(t="select"),a[t]=e,n):(a["enable"==t?"disable":"flip"==t?"enable":t]=n.queue[t].split(" ").map(function(a){return e=n[a](t,e,i)}).pop(),"select"==t?n.set("highlight",a.select,i):"highlight"==t?n.set("view",a.highlight,i):t.match(/^(flip|min|max|disable|enable)$/)&&(a.select&&n.disabled(a.select)&&n.set("select",a.select,i),a.highlight&&n.disabled(a.highlight)&&n.set("highlight",a.highlight,i)),n)},i.prototype.get=function(t){return this.item[t]},i.prototype.create=function(t,i,a){var o,r=this;return i=void 0===i?t:i,i==-1/0||i==1/0?o=i:e.isPlainObject(i)&&n.isInteger(i.pick)?i=i.obj:e.isArray(i)?(i=new Date(i[0],i[1],i[2]),i=n.isDate(i)?i:r.create().obj):i=n.isInteger(i)||n.isDate(i)?r.normalize(new Date(i),a):r.now(t,i,a),{year:o||i.getFullYear(),month:o||i.getMonth(),date:o||i.getDate(),day:o||i.getDay(),obj:o||i,pick:o||i.getTime()}},i.prototype.createRange=function(t,i){var a=this,o=function(t){return!0===t||e.isArray(t)||n.isDate(t)?a.create(t):t};return n.isInteger(t)||(t=o(t)),n.isInteger(i)||(i=o(i)),n.isInteger(t)&&e.isPlainObject(i)?t=[i.year,i.month,i.date+t]:n.isInteger(i)&&e.isPlainObject(t)&&(i=[t.year,t.month,t.date+i]),{from:o(t),to:o(i)}},i.prototype.withinRange=function(t,e){return t=this.createRange(t.from,t.to),e.pick>=t.from.pick&&e.pick<=t.to.pick},i.prototype.overlapRanges=function(t,e){var i=this;return t=i.createRange(t.from,t.to),e=i.createRange(e.from,e.to),i.withinRange(t,e.from)||i.withinRange(t,e.to)||i.withinRange(e,t.from)||i.withinRange(e,t.to)},i.prototype.now=function(t,e,i){return e=new Date,i&&i.rel&&e.setDate(e.getDate()+i.rel),this.normalize(e,i)},i.prototype.navigate=function(t,i,n){var a,o,r,s,l=e.isArray(i),c=e.isPlainObject(i),u=this.item.view;if(l||c){for(c?(o=i.year,r=i.month,s=i.date):(o=+i[0],r=+i[1],s=+i[2]),n&&n.nav&&u&&u.month!==r&&(o=u.year,r=u.month),o=(a=new Date(o,r+(n&&n.nav?n.nav:0),1)).getFullYear(),r=a.getMonth();new Date(o,r,s).getMonth()!==r;)s-=1;i=[o,r,s]}return i},i.prototype.normalize=function(t){return t.setHours(0,0,0,0),t},i.prototype.measure=function(t,e){var i=this;return e?"string"==typeof e?e=i.parse(t,e):n.isInteger(e)&&(e=i.now(t,e,{rel:e})):e="min"==t?-1/0:1/0,e},i.prototype.viewset=function(t,e){return this.create([e.year,e.month,1])},i.prototype.validate=function(t,i,a){var o,r,s,l,c=this,u=i,d=a&&a.interval?a.interval:1,p=-1===c.item.enable,h=c.item.min,f=c.item.max,v=p&&c.item.disable.filter(function(t){if(e.isArray(t)){var a=c.create(t).pick;a<i.pick?o=!0:a>i.pick&&(r=!0)}return n.isInteger(t)}).length;if((!a||!a.nav)&&(!p&&c.disabled(i)||p&&c.disabled(i)&&(v||o||r)||!p&&(i.pick<=h.pick||i.pick>=f.pick)))for(p&&!v&&(!r&&d>0||!o&&d<0)&&(d*=-1);c.disabled(i)&&(Math.abs(d)>1&&(i.month<u.month||i.month>u.month)&&(i=u,d=d>0?1:-1),i.pick<=h.pick?(s=!0,d=1,i=c.create([h.year,h.month,h.date+(i.pick===h.pick?0:-1)])):i.pick>=f.pick&&(l=!0,d=-1,i=c.create([f.year,f.month,f.date+(i.pick===f.pick?0:1)])),!s||!l);)i=c.create([i.year,i.month,i.date+d]);return i},i.prototype.disabled=function(t){var i=this,a=i.item.disable.filter(function(a){return n.isInteger(a)?t.day===(i.settings.firstDay?a:a-1)%7:e.isArray(a)||n.isDate(a)?t.pick===i.create(a).pick:e.isPlainObject(a)?i.withinRange(a,t):void 0});return a=a.length&&!a.filter(function(t){return e.isArray(t)&&"inverted"==t[3]||e.isPlainObject(t)&&t.inverted}).length,-1===i.item.enable?!a:a||t.pick<i.item.min.pick||t.pick>i.item.max.pick},i.prototype.parse=function(t,e,i){var a=this,o={};return e&&"string"==typeof e?(i&&i.format||((i=i||{}).format=a.settings.format),a.formats.toArray(i.format).map(function(t){var i=a.formats[t],r=i?n.trigger(i,a,[e,o]):t.replace(/^!/,"").length;i&&(o[t]=e.substr(0,r)),e=e.substr(r)}),[o.yyyy||o.yy,+(o.mm||o.m)-1,o.dd||o.d]):e},i.prototype.formats=function(){function t(t,e,i){var n=t.match(/\w+/)[0];return i.mm||i.m||(i.m=e.indexOf(n)+1),n.length}function e(t){return t.match(/\w+/)[0].length}return{d:function(t,e){return t?n.digits(t):e.date},dd:function(t,e){return t?2:n.lead(e.date)},ddd:function(t,i){return t?e(t):this.settings.weekdaysShort[i.day]},dddd:function(t,i){return t?e(t):this.settings.weekdaysFull[i.day]},m:function(t,e){return t?n.digits(t):e.month+1},mm:function(t,e){return t?2:n.lead(e.month+1)},mmm:function(e,i){var n=this.settings.monthsShort;return e?t(e,n,i):n[i.month]},mmmm:function(e,i){var n=this.settings.monthsFull;return e?t(e,n,i):n[i.month]},yy:function(t,e){return t?2:(""+e.year).slice(2)},yyyy:function(t,e){return t?4:e.year},toArray:function(t){return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(t,e){var i=this;return i.formats.toArray(t).map(function(t){return n.trigger(i.formats[t],i,[0,e])||t.replace(/^!/,"")}).join("")}}}(),i.prototype.isDateExact=function(t,i){var a=this;return n.isInteger(t)&&n.isInteger(i)||"boolean"==typeof t&&"boolean"==typeof i?t===i:(n.isDate(t)||e.isArray(t))&&(n.isDate(i)||e.isArray(i))?a.create(t).pick===a.create(i).pick:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&(a.isDateExact(t.from,i.from)&&a.isDateExact(t.to,i.to))},i.prototype.isDateOverlap=function(t,i){var a=this,o=a.settings.firstDay?1:0;return n.isInteger(t)&&(n.isDate(i)||e.isArray(i))?(t=t%7+o)===a.create(i).day+1:n.isInteger(i)&&(n.isDate(t)||e.isArray(t))?(i=i%7+o)===a.create(t).day+1:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&a.overlapRanges(t,i)},i.prototype.flipEnable=function(t){var e=this.item;e.enable=t||(-1==e.enable?1:-1)},i.prototype.deactivate=function(t,i){var a=this,o=a.item.disable.slice(0);return"flip"==i?a.flipEnable():!1===i?(a.flipEnable(1),o=[]):!0===i?(a.flipEnable(-1),o=[]):i.map(function(t){for(var i,r=0;r<o.length;r+=1)if(a.isDateExact(t,o[r])){i=!0;break}i||(n.isInteger(t)||n.isDate(t)||e.isArray(t)||e.isPlainObject(t)&&t.from&&t.to)&&o.push(t)}),o},i.prototype.activate=function(t,i){var a=this,o=a.item.disable,r=o.length;return"flip"==i?a.flipEnable():!0===i?(a.flipEnable(1),o=[]):!1===i?(a.flipEnable(-1),o=[]):i.map(function(t){var i,s,l,c;for(l=0;l<r;l+=1){if(s=o[l],a.isDateExact(s,t)){i=o[l]=null,c=!0;break}if(a.isDateOverlap(s,t)){e.isPlainObject(t)?(t.inverted=!0,i=t):e.isArray(t)?(i=t)[3]||i.push("inverted"):n.isDate(t)&&(i=[t.getFullYear(),t.getMonth(),t.getDate(),"inverted"]);break}}if(i)for(l=0;l<r;l+=1)if(a.isDateExact(o[l],t)){o[l]=null;break}if(c)for(l=0;l<r;l+=1)if(a.isDateOverlap(o[l],t)){o[l]=null;break}i&&o.push(i)}),o.filter(function(t){return null!=t})},i.prototype.nodes=function(t){var e=this,i=e.settings,a=e.item,o=a.now,r=a.select,s=a.highlight,l=a.view,c=a.disable,u=a.min,d=a.max,p=function(t,e){return i.firstDay&&(t.push(t.shift()),e.push(e.shift())),n.node("thead",n.node("tr",n.group({min:0,max:6,i:1,node:"th",item:function(n){return[t[n],i.klass.weekdays,'scope=col title="'+e[n]+'"']}})))}((i.showWeekdaysFull?i.weekdaysFull:i.weekdaysLetter).slice(0),i.weekdaysFull.slice(0)),h=function(t){return n.node("div"," ",i.klass["nav"+(t?"Next":"Prev")]+(t&&l.year>=d.year&&l.month>=d.month||!t&&l.year<=u.year&&l.month<=u.month?" "+i.klass.navDisabled:""),"data-nav="+(t||-1)+" "+n.ariaAttr({role:"button",controls:e.$node[0].id+"_table"})+' title="'+(t?i.labelMonthNext:i.labelMonthPrev)+'"')},f=function(a){var o=i.showMonthsShort?i.monthsShort:i.monthsFull;return"short_months"==a&&(o=i.monthsShort),i.selectMonths&&void 0==a?n.node("select",n.group({min:0,max:11,i:1,node:"option",item:function(t){return[o[t],0,"value="+t+(l.month==t?" selected":"")+(l.year==u.year&&t<u.month||l.year==d.year&&t>d.month?" disabled":"")]}}),i.klass.selectMonth+" browser-default",(t?"":"disabled")+" "+n.ariaAttr({controls:e.$node[0].id+"_table"})+' title="'+i.labelMonthSelect+'"'):"short_months"==a?null!=r?n.node("div",o[r.month]):n.node("div",o[l.month]):n.node("div",o[l.month],i.klass.month)},v=function(a){var o=l.year,r=!0===i.selectYears?5:~~(i.selectYears/2);if(r){var s=u.year,c=d.year,p=o-r,h=o+r;if(s>p&&(h+=s-p,p=s),c<h){var f=p-s,v=h-c;p-=f>v?v:f,h=c}if(i.selectYears&&void 0==a)return n.node("select",n.group({min:p,max:h,i:1,node:"option",item:function(t){return[t,0,"value="+t+(o==t?" selected":"")]}}),i.klass.selectYear+" browser-default",(t?"":"disabled")+" "+n.ariaAttr({controls:e.$node[0].id+"_table"})+' title="'+i.labelYearSelect+'"')}return"raw"==a?n.node("div",o):n.node("div",o,i.klass.year)};return createDayLabel=function(){return null!=r?n.node("div",r.date):n.node("div",o.date)},createWeekdayLabel=function(){var t;return t=null!=r?r.day:o.day,i.weekdaysFull[t]},n.node("div",n.node("div",createWeekdayLabel(),"picker__weekday-display")+n.node("div",f("short_months"),i.klass.month_display)+n.node("div",createDayLabel(),i.klass.day_display)+n.node("div",v("raw"),i.klass.year_display),i.klass.date_display)+n.node("div",n.node("div",(i.selectYears,f()+v()+h()+h(1)),i.klass.header)+n.node("table",p+n.node("tbody",n.group({min:0,max:5,i:1,node:"tr",item:function(t){var a=i.firstDay&&0===e.create([l.year,l.month,1]).day?-7:0;return[n.group({min:7*t-l.day+a+1,max:function(){return this.min+7-1},i:1,node:"td",item:function(t){t=e.create([l.year,l.month,t+(i.firstDay?1:0)]);var a=r&&r.pick==t.pick,p=s&&s.pick==t.pick,h=c&&e.disabled(t)||t.pick<u.pick||t.pick>d.pick,f=n.trigger(e.formats.toString,e,[i.format,t]);return[n.node("div",t.date,function(e){return e.push(l.month==t.month?i.klass.infocus:i.klass.outfocus),o.pick==t.pick&&e.push(i.klass.now),a&&e.push(i.klass.selected),p&&e.push(i.klass.highlighted),h&&e.push(i.klass.disabled),e.join(" ")}([i.klass.day]),"data-pick="+t.pick+" "+n.ariaAttr({role:"gridcell",label:f,selected:!(!a||e.$node.val()!==f)||null,activedescendant:!!p||null,disabled:!!h||null})),"",n.ariaAttr({role:"presentation"})]}})]}})),i.klass.table,'id="'+e.$node[0].id+'_table" '+n.ariaAttr({role:"grid",controls:e.$node[0].id,readonly:!0})),i.klass.calendar_container)+n.node("div",n.node("button",i.today,"btn-flat picker__today","type=button data-pick="+o.pick+(t&&!e.disabled(o)?"":" disabled")+" "+n.ariaAttr({controls:e.$node[0].id}))+n.node("button",i.clear,"btn-flat picker__clear","type=button data-clear=1"+(t?"":" disabled")+" "+n.ariaAttr({controls:e.$node[0].id}))+n.node("button",i.close,"btn-flat picker__close","type=button data-close=true "+(t?"":" disabled")+" "+n.ariaAttr({controls:e.$node[0].id})),i.klass.footer)},i.defaults=function(t){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:t+"table",header:t+"header",date_display:t+"date-display",day_display:t+"day-display",month_display:t+"month-display",year_display:t+"year-display",calendar_container:t+"calendar-container",navPrev:t+"nav--prev",navNext:t+"nav--next",navDisabled:t+"nav--disabled",month:t+"month",year:t+"year",selectMonth:t+"select--month",selectYear:t+"select--year",weekdays:t+"weekday",day:t+"day",disabled:t+"day--disabled",selected:t+"day--selected",highlighted:t+"day--highlighted",now:t+"day--today",infocus:t+"day--infocus",outfocus:t+"day--outfocus",footer:t+"footer",buttonClear:t+"button--clear",buttonToday:t+"button--today",buttonClose:t+"button--close"}}}(t.klasses().picker+"__"),t.extend("pickadate",i)}),function(t){function e(){var e=+t(this).attr("length"),i=+t(this).val().length,n=i<=e;t(this).parent().find('span[class="character-counter"]').html(i+"/"+e),a(n,t(this))}function i(e){var i=e.parent().find('span[class="character-counter"]');i.length||(i=t("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1),e.parent().append(i))}function n(){t(this).parent().find('span[class="character-counter"]').html("")}function a(t,e){var i=e.hasClass("invalid");t&&i?e.removeClass("invalid"):t||i||(e.removeClass("valid"),e.addClass("invalid"))}t.fn.characterCounter=function(){return this.each(function(){var a=t(this);a.parent().find('span[class="character-counter"]').length||void 0!==a.attr("length")&&(a.on("input",e),a.on("focus",e),a.on("blur",n),i(a))})},t(document).ready(function(){t("input, textarea").characterCounter()})}(jQuery),function(t){var e={init:function(e){var i={time_constant:200,dist:-100,shift:0,padding:0,full_width:!1,indicators:!1,no_wrap:!1};return e=t.extend(i,e),this.each(function(){function i(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function n(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function a(t){return t>=b?t%b:t<0?a(b+t%b):t}function o(t){var i,n,o,r,s,l,c;if(f="number"==typeof t?t:f,v=Math.floor((f+m/2)/m),o=f-v*m,r=o<0?1:-1,s=-r*o*2/m,n=b>>1,e.full_width?c="translateX(0)":(c="translateX("+(_[0].clientWidth-item_width)/2+"px) ",c+="translateY("+(_[0].clientHeight-item_width)/2+"px)"),M){var u=v%b,d=q.find(".indicator-item.active");d.index()!==u&&(d.removeClass("active"),q.find(".indicator-item").eq(u).addClass("active"))}for((!e.no_wrap||v>=0&&v<b)&&((l=h[a(v)]).style[S]=c+" translateX("+-o/2+"px) translateX("+r*e.shift*s*i+"px) translateZ("+e.dist*s+"px)",l.style.zIndex=0,e.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*s,l.style.opacity=tweenedOpacity,l.style.display="block"),i=1;i<=n;++i)e.full_width?(zTranslation=e.dist,tweenedOpacity=i===n&&o<0?1-s:1):(zTranslation=e.dist*(2*i+s*r),tweenedOpacity=1-.2*(2*i+s*r)),(!e.no_wrap||v+i<b)&&((l=h[a(v+i)]).style[S]=c+" translateX("+(e.shift+(m*i-o)/2)+"px) translateZ("+zTranslation+"px)",l.style.zIndex=-i,l.style.opacity=tweenedOpacity,l.style.display="block"),e.full_width?(zTranslation=e.dist,tweenedOpacity=i===n&&o>0?1-s:1):(zTranslation=e.dist*(2*i-s*r),tweenedOpacity=1-.2*(2*i-s*r)),(!e.no_wrap||v-i>=0)&&((l=h[a(v-i)]).style[S]=c+" translateX("+(-e.shift+(-m*i-o)/2)+"px) translateZ("+zTranslation+"px)",l.style.zIndex=-i,l.style.opacity=tweenedOpacity,l.style.display="block");(!e.no_wrap||v>=0&&v<b)&&((l=h[a(v)]).style[S]=c+" translateX("+-o/2+"px) translateX("+r*e.shift*s+"px) translateZ("+e.dist*s+"px)",l.style.zIndex=0,e.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*s,l.style.opacity=tweenedOpacity,l.style.display="block")}function r(){var t,e,i;e=(t=Date.now())-O,O=t,i=f-P,P=f,T=.8*(1e3*i/(1+e))+.2*T}function s(){var t,i;C&&(t=Date.now()-O,(i=C*Math.exp(-t/e.time_constant))>2||i<-2?(o(k-i),requestAnimationFrame(s)):o(k))}function l(i){if(A)return i.preventDefault(),i.stopPropagation(),!1;if(!e.full_width){var n=t(i.target).closest(".carousel-item").index();0!==v%b-n&&(i.preventDefault(),i.stopPropagation()),c(n)}}function c(t){var i=v%b-t;e.no_wrap||(i<0?Math.abs(i+b)<Math.abs(i)&&(i+=b):i>0&&Math.abs(i-b)<i&&(i-=b)),i<0?_.trigger("carouselNext",[Math.abs(i)]):i>0&&_.trigger("carouselPrev",[i])}function u(t){g=!0,A=!1,I=!1,w=i(t),x=n(t),T=C=0,P=f,O=Date.now(),clearInterval(E),E=setInterval(r,100)}function d(t){var e,a;if(g)if(e=i(t),y=n(t),a=w-e,Math.abs(x-y)<30&&!I)(a>2||a<-2)&&(A=!0,w=e,o(f+a));else{if(A)return t.preventDefault(),t.stopPropagation(),!1;I=!0}if(A)return t.preventDefault(),t.stopPropagation(),!1}function p(t){if(g)return g=!1,clearInterval(E),k=f,(T>10||T<-10)&&(k=f+(C=.9*T)),k=Math.round(k/m)*m,e.no_wrap&&(k>=m*(b-1)?k=m*(b-1):k<0&&(k=0)),C=k-f,O=Date.now(),requestAnimationFrame(s),A&&(t.preventDefault(),t.stopPropagation()),!1}var h,f,v,g,m,b,w,x,C,k,T,S,P,O,E,A,I,q=t('<ul class="indicators"></ul>'),_=t(this),M=_.attr("data-indicators")||e.indicators;if(_.hasClass("initialized"))return t(this).trigger("carouselNext",[1e-6]),!0;if(e.full_width){e.dist=0;var V=_.find(".carousel-item .img").first();V.length?imageHeight=V.load(function(){_.css("height",t(this).height())}):(imageHeight=_.find(".carousel-item").first().height(),_.css("height",imageHeight)),M&&_.find(".carousel-fixed-item").addClass("with-indicators")}_.addClass("initialized"),g=!1,f=k=0,h=[],item_width=_.find(".carousel-item").first().innerWidth(),m=2*item_width+e.padding,_.find(".carousel-item").each(function(e){if(h.push(t(this)[0]),M){var i=t('<li class="indicator-item"></li>');0===e&&i.addClass("active"),i.click(function(){c(t(this).index())}),q.append(i)}}),M&&_.append(q),b=h.length,S="transform",["webkit","Moz","O","ms"].every(function(t){var e=t+"Transform";return void 0===document.body.style[e]||(S=e,!1)}),window.onresize=o,void 0!==window.ontouchstart&&(_[0].addEventListener("touchstart",u),_[0].addEventListener("touchmove",d),_[0].addEventListener("touchend",p)),_[0].addEventListener("mousedown",u),_[0].addEventListener("mousemove",d),_[0].addEventListener("mouseup",p),_[0].addEventListener("mouseleave",p),_[0].addEventListener("click",l),o(f),t(this).on("carouselNext",function(t,e){void 0===e&&(e=1),f!==(k=f+m*e)&&(C=k-f,O=Date.now(),requestAnimationFrame(s))}),t(this).on("carouselPrev",function(t,e){void 0===e&&(e=1),f!==(k=f-m*e)&&(C=k-f,O=Date.now(),requestAnimationFrame(s))}),t(this).on("carouselSet",function(t,e){void 0===e&&(e=0),c(e)})})},next:function(e){t(this).trigger("carouselNext",[e])},prev:function(e){t(this).trigger("carouselPrev",[e])},set:function(e){t(this).trigger("carouselSet",[e])}};t.fn.carousel=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.carousel"):e.init.apply(this,arguments)}}(jQuery);

/*global jQuery */
/*!	
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
			});	
			t.empty().append(inject);
		}
	}
	
	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},
		
		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);
/*global jQuery */
/*!	
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){
	
  $.fn.fitText = function( kompressor, options ) {
	   
    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);
	
    return this.each(function(){

      // Store the object
      var $this = $(this); 
        
      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();
				
      // Call on resize. Opera debounces their resize by default. 
      $(window).on('resize', resizer);
      	
    });

  };

})( jQuery );
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

/*!
 * GEM
 * @version 1.0
 * @author Ali Alizade Haqiqi <alializade@peedes.com>
 */

'use strict';

// This is going to be used in /assets/js/app.js
var CONFIG = {};

CONFIG = {

    // Various toast messages
    toastMessages: {
        nameMissing: 'Looks like you forgot to introduce yourself.',
        contactMissing: 'Let us know how to contact you.',
        messageMissing: 'You forgot to include a message to us :-)',
        enterValidEmail: 'Please enter a valid email address.',
        messageSent: 'Your message has been sent. We\'ll get back to you soon.',
        somethingWrong: 'Something went wrong, try again. Error: '
    },

    // Default Toast dismissal time
    toastSpeed: 4000
};

/*!
 * Nas
 * Project Website: http://nas.pimmey.com
 * @version 1.0
 * @author Yegor Borisenco <pimmey@pimmey.com>
 */

'use strict';

var App = {};

App = {
    /*
    * Injecting the data from config.js
    * */
    CONFIG: CONFIG === 'undefined' ? console.error('Missing config file') : CONFIG,

    /*
    * Global variables used throughout the app
    * */
    GLOBAL: {
        activeToasts: 0,
        $pace: $('.pace'),
        progress: {
            show: function show () {
                App.GLOBAL.$pace.show().css('visibility', 'visible');
            },
            hide: function hide () {
                App.GLOBAL.$pace.hide().css('visibility', 'hidden');
            }
        },
        isTouch: function isTouch () {
            return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        },
        $nav: $('nav')
    },

    /*
    * Initialising Google Maps
    * More information: https://developers.google.com/maps/documentation/javascript/
    * */
    initMap: function initMap () {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: App.CONFIG.map.lat,
                lng: App.CONFIG.map.lng
            },
            zoom: 14,
            disableDefaultUI: true,
            styles: App.CONFIG.map.styles
        });

        var marker = new google.maps.Marker({
            position: {
                lat: App.CONFIG.map.lat,
                lng: App.CONFIG.map.lng
            },
            map: map,
            icon: App.CONFIG.map.markerIcon,
            title: 'Nas'
        });
    },

    /*
    * Loader handling
    * */
    onLoad: function onLoad () {
        window.onload = function () {
            $('#loading-overlay').fadeOut();
            App.GLOBAL.progress.hide();
            $(".side-menu").sideNav();
        };
    },

    /*
     * Initing side nav for medium and smaller devices
     * */
    initSideNav: function sinitSideNav () {
        $('#sidenav-toggle').sideNav({
            closeOnClick: true,
            draggable: true
        });
    },

    /*
     Contact form handling
     @param String suffix helps differentiate between human and classic form modes
     Constricted to human and classic
     */
    initContactForm: function initContactForm () {
        var $name = $('#name');
        var $email = $('#email');
        var $message = $('#message');
        var $sendButton = $('#send-message');
        var initialMessage = $message.html();

        $sendButton.on('click', function (e) {
            e.preventDefault();
            App._sendMessage($name, $email, $message, initialMessage, $sendButton);
        });
    },

    /*
     A private function that sends the message, once everything is cool
     @param Obj $name the object that contains name value
     Obj $email the object that contains contact value
     Obj $message the object that contains message value
     String initialMessage initial message value
     Obj $sendButton the button that submits the form
     */
    _sendMessage: function _sendMessage ($name, $email, $message, initialMessage, $sendButton) {
        // Creating the conditions of the form's validity
        var isNameValid = App._verifyField($name, App.CONFIG.toastMessages.nameMissing);
        var isEmailValid = App._verifyField($email, App.CONFIG.toastMessages.contactMissing);
        var isMessageValid = App._verifyField($message, App.CONFIG.toastMessages.messageMissing, initialMessage);

        if (isNameValid && isEmailValid && isMessageValid) {
            App.GLOBAL.progress.show();

            // Disabling the button while we're waiting for the response
            $sendButton.attr('disabled', true);
            $.ajax({
                url: '/mailer/mailer.php',
                type: 'POST',
                data: {
                    name: $name.html() || $name.val(),
                    email: $email.html() || $email.val(),
                    message: $message.html() || $message.val()
                }
            }).done(function (res) {
                // res should return 1, if PHPMailer has done its job right
                if (res === '200') {
                    Materialize.toast(App.CONFIG.toastMessages.messageSent, App.CONFIG.toastSpeed, 'success');

                    // Resetting the form
                    $name.html('') && $name.val('');
                    $email.html('') && $email.val('');
                    $message.html(initialMessage) && $message.val(initialMessage);

                    // Removing active class from label
                    $name.next().removeClass('active');
                    $email.next().removeClass('active');
                    $message.next().removeClass('active');
                } else {
                    Materialize.toast(App.CONFIG.toastMessages.somethingWrong + res, App.CONFIG.toastSpeed, 'error');
                }
            }).error(function (error) {
                console.error(error);
                Materialize.toast(App.CONFIG.toastMessages.somethingWrong + error, App.CONFIG.toastSpeed, 'error');
            }).complete(function () {
                App.GLOBAL.progress.hide();

                // Re-enabling the button on request complete
                $sendButton.attr('disabled', false);
            });
        }
    },

    /*
     A private function that handles field verifying
     @param Obj $field the object that contains selected field
     String errorMessage error message relevant to the selected field
     String initialMessage initial message value
     */
    _verifyField: function _verifyField ($field, errorMessage, initialMessage) {
        var fieldValue = $field.html() || $field.val();
        var isFieldInvalid;
        var isFieldLengthInvalid = fieldValue.length === 0;

        if (initialMessage !== 'undefined') {
            isFieldInvalid = isFieldLengthInvalid || (fieldValue === initialMessage);
        } else {
            isFieldInvalid = isFieldLengthInvalid;
        }

        if ($field.attr('type') === 'email' && ! /.+\@.+\..+/.test(fieldValue)) {
            Materialize.toast(App.CONFIG.toastMessages.enterValidEmail, App.CONFIG.toastSpeed, 'error', function () {
                App.GLOBAL.activeToasts--;
            });
            App.GLOBAL.activeToasts++;
            return false;
        }

        if (isFieldInvalid) {
            Materialize.toast(errorMessage, App.CONFIG.toastSpeed, 'error', function () {
                App.GLOBAL.activeToasts--;
            });
            App.GLOBAL.activeToasts++;
            return false;
        } else {
            return true;
        }
    },

    /*
    * A function that handles stories hovers
    * */
    initPostsHovers: function initPostHovers () {
        if ( ! this.GLOBAL.isTouch()) {
            var $postLinks = $('.posts a');
            var $postCoverImages = $('.posts-covers > div');
            var $navbar = $('.navbar-fixed');

            $(document).on('mouseenter', '.posts a', function () {
                var slug = $(this).data('slug');
                $navbar.css('z-index', 0);
                $postLinks.addClass('opacity');
                $postCoverImages.removeClass('active zoom');
                $('.' + slug).addClass('active');
                setTimeout(function () {
                    $('.' + slug).addClass('zoom');
                }, 1);
            }).on('mouseleave', '.posts a', function () {
                $navbar.css('z-index', '');
                $postLinks.removeClass('opacity');
                $postCoverImages.removeClass('active');
            });
        }
    },

    /*
    * Adding .animate class to services section on scroll
    * */
    initAnimateService: function initAnimateService (service) {
      if ($(document).find(service).length > 0){
        var $servicesSection = $(service);
        var servicesSectionOffset = $servicesSection.offset().top;
        var windowOffset;
        $(document).on('scroll', function () {
            windowOffset = $(window).scrollTop() + 150;
            if (windowOffset > servicesSectionOffset) {
                $servicesSection.addClass('animate');
            }
        });
      }
    },

    /*
    * Handling nav color scheme, depending on scroll position
    * */
    initNavColorChange: function initNavColorChange () {
        var $trianglesHeight = $('#triangles').height() || 720;
        $(document).on('scroll ready', function () {
          if ($(document).find('.indexed').length > 0){
            App._switchNavColorSchemes($trianglesHeight);
          }
        });
    },

    /*
    * A private function that toggles .dark class for nav element
    * */
    _switchNavColorSchemes: function _switchNavColorSchemes ($trianglesHeight) {
        if ($(window).scrollTop() > $trianglesHeight) {
            App.GLOBAL.$nav.addClass('dark');
            $('.table-of-contents li:last-child ul').css({'background-color': 'rgba(255, 255, 255, 0.97)'});
        } else {
          App.GLOBAL.$nav.removeClass('dark');
          $('.table-of-contents li:last-child ul').css({'background-color': 'transparent'});
        }
    },

    /*
    * Initialising scroll spy to detect current section
    * Check it out here: http://materializecss.com/scrollspy.html
    * */
    initScrollSpy: function initScrollSpy () {
        $('.scrollspy').scrollSpy({
            scrollOffset: 50
        });
    },

    /*
    * Initialising parallax
    * http://materializecss.com/parallax.html
    * */
    initParallax: function initParallax () {
        $('.parallax').parallax();
    },

    /*
    * Initialising slider
    * http://materializecss.com/media.html#slider
    * */
    initSlider: function initSlider () {
        $('.slider').slider({
            full_width: true,
            height: 720
        });
    },

    /*
    * Handling modals behaviour
    * http://materializecss.com/modals.html
    * */
    initModal: function initModal () {
        if (window.location.hash.length > 0 && window.location.hash !== '#!') {
            $(window.location.hash).openModal({
                complete: function () {
                    history.replaceState('', document.title, window.location.pathname);
                }
            });
        }

        $('.modal-trigger').leanModal({
            opacity: .5,
            ready: function () {

            },
            complete: function () {
                history.replaceState('', document.title, window.location.pathname);
            }
        }).on('click', function () {
            var href = $(this).attr('href');
            setTimeout(function () {
                window.location.hash = href;
            }, 400);
        });
    },

    /*
    * A function that handles modal navigation
    * */
    initModalNav: function initModalNav () {
        var $links = $('.modal-nav');

        $links.on('click', function (e) {
            e.preventDefault();

            var $this = $(this);
            var current = window.location.hash;
            var next = $this.data('next-modal');
            var prev = $this.data('previous-modal');

            $(current).closeModal();

            if (typeof prev !== 'undefined') {
                $('#' + prev).openModal({
                    ready: function () {
                        $('.modal').scrollTop(0);
                        window.location.hash = prev;
                    },
                    complete: function () {
                        history.replaceState('', document.title, window.location.pathname);
                    }
                });
            }

            if (typeof next !== 'undefined') {
                $('#' + next).openModal({
                    ready: function () {
                        $('.modal').scrollTop(0);
                        window.location.hash = next;
                    },
                    complete: function () {
                        history.replaceState('', document.title, window.location.pathname);
                    }
                });
            }
        });
    },

    /*
    * Textillate effect on hover of .block elements
    * */
    /*initTextillate: function initTextillate () {
        var $tlt = $('.tlt');

        if ($tlt) {
            $tlt.textillate({
                loop: false,
                minDisplayTime: 0,
                initialDelay: 0,
                autoStart: false,
                'in': {
                    effect: 'fadeIn',
                    delay: 15
                },
                out: {
                    effect: 'fadeOut',
                    delay: 15
                }
            });

            $('.block').on({
                'mouseenter': function () {
                    $(this).find('.tlt').textillate('in');
                },
                'mouseleave': function () {
                    $(this).find('.tlt').textillate('out');
                }
            });
        }
    }*/
};

$(document).on('ready', function () {
    App.onLoad();
    App.initSideNav();
    App.initPostsHovers();
    App.initAnimateService('.services-section');
    App.initAnimateService('.table-section');
    App.initNavColorChange();
    App.initScrollSpy();
    App.initParallax();
    App.initSlider();
    App.initModal();
    App.initModalNav();
    // App.initTextillate();
    App.initContactForm();
});

/*!
 * GEM
 * @version 1.0
 * @author Ali Alizade Haqiqi <alializade@peedes.com>
 */

 (function($){
  'Use Strict';

  $('.parallax').parallax();
  $('.carousel').carousel();

  var HBSC = '',
      LBSC = '',
      PBSC = '';

  var currentHref = window.location.href,
      currentOrigin = window.location.origin;

  function _convertDigitsToEnglish(string) {
      return string.replace(/[\u0660-\u0669]/g, function (c) {
          return c.charCodeAt(0) - 0x0660;
      }).replace(/[\u06f0-\u06f9]/g, function (c) {
         return c.charCodeAt(0) - 0x06f0;
     });
   }

  function _convertDigitsToPersian(string) {
    return string.replace(/[0-9]/g, function (c) {
        return String.fromCharCode(c.charCodeAt(0) + 0x0630);
    });
  }

  function _gregorian_to_jalali(gy, gm, gd) {
   g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

   if (gy > 1600){
    jy = 979;
    gy -= 1600;
   }else{
    jy = 0;
    gy -= 621;
   }

   gy2 = (gm > 2)? (gy + 1): gy;
   days = (365*gy) + (parseInt((gy2+3)/4)) - (parseInt((gy2 + 99) / 100)) +(parseInt((gy2 + 399) / 400)) - 80 + gd + g_d_m[gm - 1];
   jy += 33 * (parseInt(days / 12053));
   days %= 12053;
   jy += 4 * (parseInt(days / 1461));
   days %= 1461;

   if (days > 365){
    jy += parseInt((days - 1) / 365);
    days = (days - 1) % 365;
   }

   jm = (days < 186)? 1 + parseInt(days/31): 7 + parseInt((days - 186) / 30);
   jd = 1 + ((days < 186)? (days % 31): ((days - 186) % 30));

   return {
     year: jy,
     month: jm,
     day: jd
   };
 }

 function _jalali_to_gregorian(jy, jm, jd) {
   if (jy > 979){
    gy = 1600;
    jy -= 979;
   }else{
    gy = 621;
   }

   days = (365 * jy) + ((parseInt(jy / 33)) * 8) + (parseInt(((jy % 33) + 3) / 4)) + 78 + jd + ((jm < 7)? (jm - 1) * 31: ((jm - 7) * 30) + 186);
   gy += 400 * (parseInt(days / 146097));
   days %= 146097;

   if (days > 36524){
    gy += 100 *(parseInt(--days / 36524));
    days %= 36524;

    if (days >= 365) days++;
   }

   gy += 4 * (parseInt(days / 1461));
   days %= 1461;

   if (days > 365){
    gy += parseInt((days - 1) / 365);
    days = (days - 1) % 365;
   }

   gd = days + 1;
   sal_a = [0, 31, ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0))? 29: 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   for (gm = 0; gm < 13; gm++){
    v = sal_a[gm];

    if (gd <= v) break;

    gd-=v;
   }

   return (new Date(gy + '/' + gm + '/' + gd));
 }

 function _getMonthName(monthNum){
    var months = [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند"
        ];

      return months[monthNum - 1];
  }

  if (currentOrigin + '/profile/wallet/new' == currentHref){
    var targetCredit = document.getElementById('target-credit');

    noUiSlider.create(targetCredit, {
      start: 10000,
      direction: 'rtl',
      step: 10000,
      range: {
        'min': 10000,
        'max': 1000000
      },
      tooltips: wNumb({
        decimals: 0,
        postfix: ' تومان',
        edit: function(value){
          return '<span data-value="' + value.replace(/\ تومان/g, '') + '">' + _convertDigitsToPersian(value) + '</span>';
        }
      }),
      connect: [true, false],
      pips: {
        mode: 'values',
        stepped: true,
        values: [10000, 250000, 500000, 750000, 1000000],
        density: 6,
        format: wNumb({
          decimals: 0,
          postfix: ' تومان',
          edit: function(value){
            return _convertDigitsToPersian(value.toString());
          }
        })
      }
    });

    targetCredit.noUiSlider.on('change', function(){
      $('#credit-details .SPD-title span').html($('#target-credit .noUi-tooltip span').html());
    });
  }else if (currentOrigin + '/profile/accounts/new' == currentHref || currentOrigin + '/profile/accounts/new/' == currentHref){
    var linkIsListeningOn = {
      status: false,
      index: -1,
      type: null
    };
  }else if (currentHref.match(new RegExp(currentOrigin + '/profile/accounts/.{24}$', 'g')) != null) {
    var navigationOption = {
      buttonOptions: {
        theme: {
          fill: 'transparent',
          states: {
            hover: {
              fill: 'transparent'
            },
            select: {
              fill: 'transparent'
            }
          }
        }
      },
      menuStyle: {
        "margin": "10px -5px 0 0",
        "padding": "1.2rem 1.5rem 1rem 1.5rem",
        "box-shadow": "none",
        "border-radius": "6px",
        "border": "none",
        "background-color": "rgb(247, 247, 247)",
      },
      menuItemStyle: {
        "border-radius": "6px",
        "padding": "1rem",
        "margin-bottom": "5px",
        "font-size": "13px"
      },
      menuItemHoverStyle: {
        "background-color": "#5b0bbb"
      }
    },
    exportingOption = {
      buttons: {
        contextButton: {
          symbol: 'circle',
          symbolStrokeWidth: 4,
          symbolFill: 'transparent',
          symbolStroke: '#5b0bbb',
          width: 20,
          height: 20,
          symbolSize: 20,
          x: -33,
          y: 23
        }
      }
    },
    creditsOption = {
        enabled: false
    },
    tooltipOptions = {
      borderWidth: 0,
      shadow: false,
      padding: 18,
      pointFormatter: function(){
        var value = (typeof this.y != 'undefined')? this.y : this.value,
            color = (typeof this.options.color != 'undefined')? this.options.color : this.series.color,
            tooltipContent = '';

        tooltipContent += '<span>';

        if (typeof this.series.chart.userOptions.chart.type != 'undefined' && this.series.chart.userOptions.chart.type == 'treemap'){
          tooltipContent += '<span>' + this.options.name.replace(/<br>/g, ' ') + ': </span><br>';
        }else if (typeof this.series.userOptions.type != 'undefined' && this.series.userOptions.type == 'pie') {
          tooltipContent += '<span>' + this.address + ': </span><br>';
        }

        tooltipContent += '<span style="font-size: 1rem; color: ' + color + '">●</span> ';

        if (value > 1000){
          tooltipContent += ( ((value / 1000).toFixed(1) % 1).toFixed(1) * 10 > 0 )? _convertDigitsToPersian((value / 1000).toFixed(1).toString()): _convertDigitsToPersian((value / 1000).toFixed(0).toString()) + ' هزار</span>';
        }else{
          tooltipContent += _convertDigitsToPersian(value.toString()) + '</span>';
        }

        return tooltipContent;
      }
    },
    TotalLocationsTitle = function(){
      var total = 0

      for (var i = 0, len = this.series[0].yData.length; i < len; i++) {
          total += this.series[0].yData[i];
      }

      if (this.totalTitle) {
          this.totalTitle.destroy();
      }

      var r = this.renderer,
          x = this.series[0].center[0] + this.plotLeft,
          y = this.series[0].center[1] + this.plotTop;

      this.totalTitle = r.text('<tspan style="font-size: 2.5rem; text-anchor: middle;">' +
      _convertDigitsToPersian(total.toString()) +
      '</tspan><br>'/* +
      '<tspan style="text-anchor: middle; dominant-baseline: hanging;"> موقعیت جغرافیایی</tspan>'*/, 0, 0)
      .hide()
      .add();

      var bbox = this.totalTitle.getBBox();

      this.totalTitle.attr({
          x: x ,
          y: y
      }).show();
    };

    var hashedToken = JSON.parse(Cookies.get('hashed-token'));

    $.ajax({
      url: currentOrigin + '/analysis/' + hashedToken.user + '/' + hashedToken.service,
      type: "get",
      success: function(analysis){
        if (analysis.meta.code == 200){
          var analysisData = analysis.data,
              colors = ["#6E66E6", "#E84851", "#F7BC5C", "#8DCA5F", "#A3B2B8", "#41A0F1"],
              seriesData = [];

          if (analysisData.length > 0){
            for (var i = analysisData.length - 1; i >= 0; i--) {
              if (analysisData[i].service.micro_service.type == 'periods'){
                var microServiceContentText = analysisData[i].service.micro_service.content.text.first +
                                              ',<br>' +
                                              analysisData[i].service.micro_service.content.text.second;

                if (seriesData.length > 0){
                  for (var j = 0; j < seriesData.length; j++) {
                    if (seriesData[j].name.toLowerCase() == microServiceContentText.toLowerCase()){
                      seriesData[j].value++;
                    }else{
                      if (seriesData.length <= 6){
                        seriesData.push({
                          name: microServiceContentText,
                          value: 1,
                          color: colors[((seriesData.length > 0)? (seriesData.length - 1) : 0)]
                        });
                      }
                    }
                  }
                }else{
                  seriesData.push({
                    name: microServiceContentText,
                    value: 1,
                    color: colors[((seriesData.length > 0)? (seriesData.length - 1) : 0)]
                  });
                }
              }
            }

            Highcharts.chart('periods-in-detail', {
                chart: {
                  type: 'treemap',
                  borderRadius: 4,
                  spacingLeft: 15,
                  spacingRight: 15
                },
                title: {
                  text: 'جزئیات زمانبندی‌ها',
                  align: 'right',
                  margin: 60,
                  y: 40,
                  x: 25
                },
                plotOptions: {
                  series: {
                    borderWidth: 3,
                    borderColor: '#FFFFFF',
                    dataLabels: {
                      style: {
                        "textOutline": "none"
                      }
                    },
                    states: {
                      hover: {
                        enabled: false
                      }
                    }
                  }
                },
                tooltip: tooltipOptions,
                series: [{
                  layoutAlgorithm: 'squarified',
                  data: seriesData
                }],
                credits: creditsOption,
                navigation: navigationOption,
                exporting: exportingOption
            });
          }
        }else{
          Materialize.toast(analysis.meta.error_message, 4000);
        }
      }
    })

    $.ajax({
      url: currentOrigin + '/analysis/' + hashedToken.user + '/' + hashedToken.service,
      type: "get",
      success: function(analysis){
        if (analysis.meta.code == 200){
          var analysisData = analysis.data,
              colors = ["#6E66E6", "#E84851", "#F7BC5C", "#8DCA5F", "#A3B2B8", "#41A0F1"],
              seriesData = [];

          if (analysisData.length > 0){
            for (var i = analysisData.length - 1; i >= 0; i--) {
              if (analysisData[i].service.micro_service.type == 'locations'){
                var microServiceContentText = analysisData[i].service.micro_service.content.text;

                if (seriesData.length > 0){
                  for (var j = 0; j < seriesData.length; j++) {
                    if (seriesData[j].address.toLowerCase() == microServiceContentText.toLowerCase()){
                      seriesData[j].y++;
                    }else{
                      if (seriesData.length <= 6){
                        seriesData.push({
                          name: (microServiceContentText.substr(0, 15) + '...'),
                          address: microServiceContentText,
                          y: 1,
                          color: colors[((seriesData.length > 0)? (seriesData.length - 1) : 0)]
                        });
                      }
                    }
                  }
                }else{
                  seriesData.push({
                    name: (microServiceContentText.substr(0, 15) + '...'),
                    address: microServiceContentText,
                    y: 1,
                    color: colors[((seriesData.length > 0)? (seriesData.length - 1) : 0)]
                  });
                }
              }
            }

            Highcharts.chart('locations-in-detail', {
                chart: {
                  plotBackgroundColor: null,
                  plotBorderWidth: 0,
                  plotShadow: false,
                  borderRadius: 4,
                  spacingLeft: 30,
                  events: {
                    load: TotalLocationsTitle,
                    redraw: TotalLocationsTitle
                  }
                },
                title: {
                  text: 'جزئیات موقعیت‌های جغرافیایی',
                  align: 'right',
                  margin: 60,
                  y: 40,
                  x: 10
                },
                tooltip: tooltipOptions,
                credits: creditsOption,
                plotOptions: {
                  pie: {
                    dataLabels: {
                      enabled: false
                    },
                    startAngle: 0,
                    endAngle: 360,
                    center: ['50%', '50%'],
                    innerSize: '93%',
                    borderWidth: 3,
                    showInLegend: true
                  }
                },
                legend: {
                    layout: 'vertical',
                    verticalAlign: 'middle',
                    align: 'left',
                    itemMarginTop: 20
                },
                series: [{
                  type: 'pie',
                  name: 'Location',
                  data: seriesData
                }],
                navigation: navigationOption,
                exporting: exportingOption
            });
          }
        }else{
          Materialize.toast(analysis.meta.error_message, 4000);
        }
      }
    })

    $.ajax({
      url: currentOrigin + '/analysis/' + hashedToken.user + '/' + hashedToken.service,
      type: "get",
      success: function(analysis){
        if (analysis.meta.code == 200){
          var analysisData = analysis.data,
              colors = ["#41A0F1", "#F7BC5C", "#E84851", "#8DCA5F", "#6E66E6"],
              seriesData = [],
              xAxisCategories = [];

          if (analysisData.length > 0){
            for (var i = analysisData.length - 1; i >= 0; i--) {
              if (analysisData[i].service.micro_service.type == 'hashtags'){
                var microServiceContentText = '';

                switch (analysisData[i].service.micro_service.content.type) {
                  case 'hashtag':
                    microServiceContentText = '#' + analysisData[i].service.micro_service.content.text;
                    break;
                  case 'mention':
                    microServiceContentText = analysisData[i].service.micro_service.content.text;
                    break;
                }

                var hashtagIndex = xAxisCategories.indexOf(microServiceContentText);

                if (hashtagIndex != -1){
                  seriesData[hashtagIndex].y++;
                }else{
                  if (xAxisCategories.length <= 5 && seriesData.length <= 5){
                    xAxisCategories.push(microServiceContentText);
                    seriesData.push({
                      y: 1,
                      color: colors[xAxisCategories.length - 1]
                    });
                  }
                }
              }
            }

            Highcharts.chart('hashtags-in-detail', {
                chart: {
                  type: 'bar',
                  spacingLeft: 40,
                  borderRadius: 4
                },
                title: {
                  text: 'جزئیات هشتگ‌ها',
                  align: 'right',
                  margin: 60,
                  y: 40,
                  x: 0
                },
                tooltip: {
                  enabled: false
                },
                xAxis: {
                  lineWidth: 0,
                  tickWidth: 0,
                  categories: xAxisCategories,
                  maxPadding: 0.3,
                  labels: {
                    style: {
                      "font-size": "1rem"
                    }
                  }
                },
                yAxis: {
                  min: 0,
                  title: {
                      text: ''
                  },
                  visible: false
                },
                legend: {
                  enabled: false
                },
                credits: creditsOption,
                plotOptions: {
                  series: {
                    colorByPoint: true,
                    pointWidth: 10,
                    borderRadius: 6,
                    dataLabels: {
                      enabled: true,
                      formatter: function(){
                        var value = this.point.y;

                        if (value > 1000){
                          return ( ((value / 1000).toFixed(1) % 1).toFixed(1) * 10 > 0 )? _convertDigitsToPersian((value / 1000).toFixed(1).toString()) + ' هزار': _convertDigitsToPersian((value / 1000).toFixed(0).toString()) + ' هزار';
                        }else{
                          return value;
                        }
                      }
                    }
                  }
                },
                series: [{
                  data: seriesData
                }],
                navigation: navigationOption,
                exporting: exportingOption
            });
          }
        }else{
          Materialize.toast(analysis.meta.error_message, 4000);
        }
      }
    })

    $.ajax({
      url: currentOrigin + '/analysis/' + hashedToken.user + '/' + hashedToken.service,
      type: "get",
      success: function(analysis){
        if (analysis.meta.code == 200){
          var analysisData = analysis.data,
              seriesData = [
                {
                  name: 'هشتگ‌ها',
                  data: [0, 0, 0, 0, 0, 0, 0],
                  color: '#E84851'
                },
                {
                  name: 'موقعیت‌های جغرافیایی',
                  data: [0, 0, 0, 0, 0, 0, 0],
                  color: '#41A0F1'
                },
                {
                  name: 'زمان‌بندی‌ها',
                  data: [0, 0, 0, 0, 0, 0, 0],
                  color: '#F7BC5C'
                }
              ];

          if (analysisData.length > 0){
            for (var i = 0; i < analysisData.length; i++) {
              var created_at = new Date(analysisData[i].created_at),
                  seriesOptionIndex = 0;

              switch (analysisData[i].service.micro_service.type) {
                case 'hashtags':
                  seriesOptionIndex = 0
                  break;
                case 'locations':
                  seriesOptionIndex = 1
                  break;
                case 'periods':
                  seriesOptionIndex = 2
                  break;
              }

              seriesData[seriesOptionIndex].data[created_at.getDay()]++;
            }

            Highcharts.chart('weekly-services', {
                title: {
                  text: 'سرویس‌ها در طول هفته',
                  align: 'right',
                  margin: 140,
                  y: 40,
                  x: 30
                },
                chart: {
                  type: 'areaspline',
                  borderRadius: 4
                },
                tooltip: tooltipOptions,
                xAxis: {
                  lineWidth: 0,
                  tickWidth: 0,
                  labels: {
                    y: 70
                  },
                  categories: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    labels: {
                        enabled: false
                    },
                    gridLineWidth: 2,
                    gridLineColor: '#F3F6F7',
                    gridLineDashStyle: 'dash'
                },
                legend: {
                  align: 'right',
                  verticalAlign: 'top',
                  y: 20,
                  x: -70
                },
                credits: creditsOption,
                plotOptions: {
                    series: {
                        fillOpacity: 0,
                        lineWidth: 3,
                        marker: {
                            symbol: 'circle',
                            radius: 5
                        }
                    }
                },
                series: seriesData,
                navigation: navigationOption,
                exporting: exportingOption,
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                          legend: {
                            align: 'center',
                            verticalAlign: 'top',
                            y: 60,
                            x: 0
                          }
                        }
                    }]
                }
            });
          }
        }else{
          Materialize.toast(analysis.meta.error_message, 4000);
        }
      }
    })
  }else if (currentOrigin + '/profile' == currentHref) {
    var navigationOption = {
      buttonOptions: {
        theme: {
          fill: 'transparent',
          states: {
            hover: {
              fill: 'transparent'
            },
            select: {
              fill: 'transparent'
            }
          }
        }
      },
      menuStyle: {
        "margin": "10px -5px 0 0",
        "padding": "1.2rem 1.5rem 1rem 1.5rem",
        "box-shadow": "none",
        "border-radius": "6px",
        "border": "none",
        "background-color": "rgb(247, 247, 247)"
      },
      menuItemStyle: {
        "border-radius": "6px",
        "padding": "1rem",
        "margin-bottom": "5px",
        "font-size": "13px"
      },
      menuItemHoverStyle: {
        "background-color": "#5b0bbb"
      }
    },
    exportingOption = {
      buttons: {
        contextButton: {
          symbol: 'circle',
          symbolStrokeWidth: 4,
          symbolFill: 'transparent',
          symbolStroke: '#ffffff',
          width: 20,
          height: 20,
          symbolSize: 20,
          x: -33,
          y: 23
        }
      }
    },
    creditsOption = {
        enabled: false
    },
    tooltipOptions = {
      borderWidth: 0,
      shadow: false,
      padding: 18,
      formatter: function () {
          return '<div style="direction: ltr !important">' +
          '<span style="font-size: 10px; font-weight: bold;">' + this.point.name + '</span><br/>' +
          '<span style="color:' + this.point.color + '">●</span> ' + _convertDigitsToPersian(this.point.y.toString()) + ' تومان' +
          '</div>';
      }
    },
    TotalPricesTitle = function(){
      var total = 0

      for (var i = 0, len = this.series[0].yData.length; i < len; i++) {
          total += this.series[0].yData[i];
      }

      if (this.totalTitle) {
          this.totalTitle.destroy();
      }

      var r = this.renderer,
          x = this.series[0].center[0] + this.plotLeft,
          y = this.series[0].center[1] + this.plotTop;

      this.totalTitle = r.text('<tspan style="color: #FFFFFF; font-size: 2.5rem;">' +
        _convertDigitsToPersian(total.toString()) +
      '</tspan> ' +
      '<span style="color: #FFFFFF; font-size: 1rem; font-weight: 600;">تومان</span><br/>'/* +
      '<tspan style="color: #FFFFFF; ">همه</tspan>'*/, 0, 0)
      .css({
        'textAnchor': 'middle',
        'dominantBaseline': 'hanging'
      })
      .hide()
      .add();

      var bbox = this.totalTitle.getBBox();

      this.totalTitle.attr({
          x: x ,
          y: y
      }).show();
    };

    var hashedToken = Cookies.get('hashed-token');

    $.ajax({
      url: currentOrigin + "/services/" + hashedToken,
      type: "get",
      success: function(totalUserServices){
        if (totalUserServices.meta.code == 200){
          totalUserServices = totalUserServices.data;

          if (totalUserServices.length > 0){
            $.ajax({
              url: currentOrigin + "/credits/" + hashedToken,
              type: "get",
              success: function(credits){
                if (credits.meta.code == 200){
                  var creditsData = credits.data,
                      lastCreditsContent = '';

                  if (creditsData.length > 0){
                    if (creditsData.length > 3){
                      for (var i = creditsData.length - 1; i >= creditsData.length - 3; i--) {
                        var trending = {
                          mode: '',
                          color: ''
                        };

                        if (typeof creditsData[i].balance.previous != 'undefined'){
                          if (creditsData[i].balance.new >= creditsData[i].balance.previous){
                            trending.mode = 'trending_up';
                            trending.color = 'green';
                          }else{
                            trending.mode = 'trending_down';
                            trending.color = 'red';
                          }
                        }else{
                          trending.mode = 'trending_up';
                          trending.color = 'green';
                        }

                        lastCreditsContent += '<div class="chip ' + trending.color + '">' +
                          '<i class="material-icons circle ' + trending.color + '">' + trending.mode + '</i>' +
                          '<span>' + creditsData[i].payment.content.price + ' <sup>تومان</sup></span>' +
                        '</div>';
                      }
                    }else{
                      for (var i = 0; i < creditsData.length; i++) {
                        var trending = {
                          mode: '',
                          color: ''
                        };

                        if (typeof creditsData[i].balance.previous != 'undefined'){
                          if (creditsData[i].balance.new >= creditsData[i].balance.previous){
                            trending.mode = 'trending_up';
                            trending.color = 'green';
                          }else{
                            trending.mode = 'trending_down';
                            trending.color = 'red';
                          }
                        }else{
                          trending.mode = 'trending_up';
                          trending.color = 'green';
                        }

                        lastCreditsContent += '<div class="chip ' + trending.color + '">' +
                          '<i class="material-icons circle ' + trending.color + '">' + trending.mode + '</i>' +
                          '<span>' + creditsData[i].payment.content.price + ' <sup>تومان</sup></span>' +
                        '</div>';
                      }
                    }

                    $('#profile-dashboard-container #user-balance-detail .recommend-detail .last-credits').html(lastCreditsContent);
                  }
                }else{
                  Materialize.toast(credits.meta.error_message, 4000);
                }
              }
            })

            $.ajax({
              url: currentOrigin + "/services/grouped/" + hashedToken,
              type: "get",
              success: function(services){
                if (services.meta.code == 200){
                  var inprogressServices = services.data.inprogress,
                      colors = ["#41A0F1", "#F7BC5C", "#E84851", "#8DCA5F"],
                      seriesData = [],
                      xAxisCategories = [];

                  if (inprogressServices.length > 0){
                    if (inprogressServices.length > 4){
                      for (var i = inprogressServices.length - 1; i >= inprogressServices.length - 4; i--) {
                        var created_at = new Date(inprogressServices[i].created_at).getTime(),
                            today = new Date().getTime(),
                            daysRemain = Math.floor((today - created_at) / (1000 * 60 * 60 * 24));

                        xAxisCategories.push(inprogressServices[i].owner.username.toUpperCase() + '<br>(' + inprogressServices[i].type + ')');

                        seriesData.push({
                          y: daysRemain,
                          color: colors[i]
                        });
                      }
                    }else{
                      for (var i = 0; i < inprogressServices.length; i++) {
                        var created_at = new Date(inprogressServices[i].created_at).getTime(),
                            today = new Date().getTime(),
                            daysRemain = Math.floor((today - created_at) / (1000 * 60 * 60 * 24));

                        xAxisCategories.push(inprogressServices[i].owner.username + '<br>(' + inprogressServices[i].type.persian + ')');

                        seriesData.push({
                          y: daysRemain,
                          color: colors[i]
                        });
                      }
                    }

                    Highcharts.chart('service-time-in-detail', {
                        chart: {
                          type: 'bar',
                          spacingLeft: 40,
                          borderRadius: 4,
                          backgroundColor: '#5b0bbb'
                        },
                        title: {
                          text: 'زمان سرویس‌ها بطور خلاصه',
                          align: 'right',
                          style: {
                            'color': '#ffffff'
                          },
                          margin: 60,
                          y: 40,
                          x: -320
                        },
                        tooltip: {
                          enabled: false
                        },
                        xAxis: {
                          lineWidth: 0,
                          tickWidth: 0,
                          categories: xAxisCategories,
                          labels: {
                            style: {
                              "font-size": "1rem",
                              "color": "#ffffff",
                              "direction": "ltr"
                            }
                          }
                        },
                        yAxis: {
                          min: 0,
                          title: {
                              text: ''
                          },
                          visible: false
                        },
                        legend: {
                          enabled: false
                        },
                        credits: creditsOption,
                        plotOptions: {
                          series: {
                            colorByPoint: true,
                            pointWidth: 10,
                            borderWidth: 0,
                            borderRadius: 6,
                            dataLabels: {
                              enabled: true,
                              style: {
                                color: "#ffffff",
                                "textOutline": "none"
                              },
                              formatter: function(){
                                var value = this.point.y;

                                if (value > 1){
                                  return _convertDigitsToPersian(value.toString()) + ' روز';
                                }else{
                                  return _convertDigitsToPersian(value.toString()) + ' روز';
                                }
                              }
                            }
                          }
                        },
                        series: [{
                          data: seriesData
                        }],
                        navigation: navigationOption,
                        exporting: exportingOption
                    });
                  }
                }else{
                  Materialize.toast(services.meta.error_message, 4000);
                }
              }
            })

            $.ajax({
              url: currentOrigin + "/services/" + hashedToken,
              type: "get",
              success: function(services){
                if (services.meta.code == 200){
                  var servicesData = services.data,
                      seriesData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                  for (var i = 0; i < servicesData.length; i++) {
                    var created_at = new Date(servicesData[i].created_at),
                        jalali_created_at = _gregorian_to_jalali(created_at.getFullYear(), created_at.getMonth(), created_at.getDay());

                    seriesData[jalali_created_at.month]++;
                  }

                  Highcharts.chart('services-count-in-detail', {
                      title: {
                        text: 'تعداد سرویس‌ها بطور خلاصه',
                        align: 'right',
                        margin: 140,
                        y: 40,
                        x: -320,
                        style: {
                          'color': '#ffffff'
                        }
                      },
                      chart: {
                        type: 'areaspline',
                        borderRadius: 4,
                        backgroundColor: '#5b0bbb'
                      },
                      tooltip: {
                        borderWidth: 0,
                        shadow: false,
                        padding: 18,
                        formatter: function () {
                            return '<div style="direction: ltr !important">' +
                            '<span style="font-size: 10px; font-weight: bold;">' + this.key + '</span><br/>' +
                            '<span style="color:' + this.point.color + '">●</span> ' + _convertDigitsToPersian(this.point.y.toString()) +
                            '</div>';
                        }
                      },
                      xAxis: {
                        lineWidth: 0,
                        tickWidth: 0,
                        labels: {
                          y: 70,
                          style: {
                            'color': '#ffffff'
                          }
                        },
                        categories: ['فرو', 'ارد', 'خرد', 'تیر', 'مرد', 'شهر', 'مهر', 'آبا', 'آذر', 'دی', 'بهم', 'اسف']
                      },
                      yAxis: {
                          title: {
                              text: ''
                          },
                          labels: {
                              enabled: false
                          },
                          gridLineWidth: 2,
                          gridLineColor: '#7F7E80',
                          gridLineDashStyle: 'dash'
                      },
                      legend: {
                        rtl: true,
                        align: 'right',
                        verticalAlign: 'top',
                        itemStyle: {
                          'color': '#ffffff'
                        },
                        y: 70,
                        x: -135,
                        symbolWidth: 80
                      },
                      credits: creditsOption,
                      plotOptions: {
                          series: {
                              fillOpacity: 0,
                              lineWidth: 3,
                              marker: {
                                  symbol: 'circle',
                                  radius: 5
                              }
                          }
                      },
                      series: [{
                          name: 'تعداد',
                          data: seriesData,
                          color: '#E84851'
                      }],
                      navigation: navigationOption,
                      exporting: exportingOption,
                      responsive: {
                          rules: [{
                              condition: {
                                  maxWidth: 500
                              },
                              chartOptions: {
                                legend: {
                                  align: 'center',
                                  verticalAlign: 'top',
                                  y: 60,
                                  x: 0
                                }
                              }
                          }]
                      }
                  });
                }else{
                  Materialize.toast(services.meta.error_message, 4000);
                }
              }
            })

            $.ajax({
              url: currentOrigin + "/services/" + hashedToken,
              type: "get",
              success: function(services){
                if (services.meta.code == 200){
                  var colors = ['#6E66E6', '#E84851', '#F7BC5C', '#8DCA5F' ,'#A3B2B8' ,'#41A0F1'],
                      servicesData = services.data,
                      seriesData = [];

                  if (servicesData.length > 0){
                    if (servicesData.length > 6){
                      for (var i = servicesData.length - 1; i >= servicesData.length - 6; i--) {
                        seriesData.push({
                          name: servicesData[i].owner.username,
                          y: servicesData[i].price.total,
                          color: colors[i]
                        });
                      }
                    }else{
                      for (var i = 0; i < servicesData.length; i++) {
                        seriesData.push({
                          name: servicesData[i].owner.username,
                          y: servicesData[i].price.total,
                          color: colors[i]
                        });
                      }
                    }

                    Highcharts.chart('services-price-in-detail', {
                        chart: {
                          plotBackgroundColor: null,
                          plotBorderWidth: 0,
                          plotShadow: false,
                          borderRadius: 4,
                          spacingLeft: 30,
                          events: {
                            load: TotalPricesTitle,
                            redraw: TotalPricesTitle
                          },
                          backgroundColor: '#5b0bbb'
                        },
                        title: {
                          text: 'قیمت سرویس‌ها بطور خلاصه',
                          align: 'right',
                          margin: 60,
                          y: 40,
                          x: -320,
                          style: {
                            'color': '#ffffff'
                          }
                        },
                        tooltip: tooltipOptions,
                        credits: creditsOption,
                        plotOptions: {
                          pie: {
                            dataLabels: {
                              enabled: false
                            },
                            startAngle: 0,
                            endAngle: 360,
                            center: ['50%', '50%'],
                            innerSize: '93%',
                            borderWidth: 3,
                            borderColor: '#5B0BBB',
                            showInLegend: true
                          }
                        },
                        legend: {
                            rtl: true,
                            layout: 'vertical',
                            verticalAlign: 'middle',
                            align: 'right',
                            itemMarginTop: 20,
                            itemStyle: {
                              'color': '#DFDFDF'
                            },
                            itemHoverStyle: {
                              'color': '#FFFFFF'
                            },
                            symbolWidth: 120,
                            x: -180
                        },
                        series: [{
                          type: 'pie',
                          name: 'Price',
                          data: seriesData
                        }],
                        navigation: navigationOption,
                        exporting: exportingOption
                    });
                  }
                }else{
                  Materialize.toast(services.meta.error_message, 4000);
                }
              }
            })
          }
        }
      }
    });
  }else if (currentHref.match(new RegExp(currentOrigin + '/profile/accounts/.{24}/scheduled/media$', 'g')) != null) {
    var hashService = $('#service-scheduled-media-calendar #scheduled-media-calendar').data('hash');

    $.getJSON("/schedules/" + hashService, function(res){
      if (res.meta.code == 200){
        var events = [];

        $.each(res.data, function(i, schedule){
            events.push({
              id: schedule._id,
              title: schedule.media.caption,
              start: schedule.scheduled_at,
              photo: schedule.media.content
            })
        });

        var todayDate = moment().startOf('day'),
            YM = todayDate.format('YYYY-MM'),
            YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD'),
            TODAY = todayDate.format('YYYY-MM-DD'),
            TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

        var scheduler = {
          element: '#scheduled-media-calendar',
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
          },
          events: events,
          editable: true,
          navLinks: true,
          eventDrop: function(event, delta, revertFunc) {
            var today = (new Date()).getTime(),
                _start = (new Date(event.start.format())).getTime(),
                eventDiffer = _start - today,
                eventDifferOnDay = Math.floor(eventDiffer / (1000 * 60 * 60 * 24)),
                element = $(this);

            $('#service-scheduled-media-calendar #change-event-modal').find('.modal-content h4').html(event.title);

            $('#service-scheduled-media-calendar #change-event-modal').find('.modal-content p').html(
              'The event was dropped on ' + ((eventDifferOnDay != 0)? ((eventDifferOnDay > 0)? eventDifferOnDay + ' days later': Math.abs(eventDifferOnDay) + ' days ago') : 'today') + '.'
            );

            $('#service-scheduled-media-calendar #change-event-modal').openModal();

            $('#service-scheduled-media-calendar #change-event-modal .change-agree').on('click', function(){
              var todayObj = new Date(),
                  schedule = {
                    _id: element.data('hash'),
                    scheduled_at: (new Date(event.start)).toISOString(),
                    modified_at: todayObj.toISOString()
                  };

              $.ajax({
                url: "/schedule/" + element.data('hash') + "/set",
                type: "put",
                data: JSON.stringify(schedule),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(res){
                  if (res.meta.code == 200){
                    $('#service-scheduled-media-calendar #scheduled-media-calendar').fullCalendar('updateEvent', event);
                  }else{
                    revertFunc();

                    Materialize.toast(res.meta.error_message, 4000);
                  }
                }
              })
            })

            $('#service-scheduled-media-calendar #change-event-modal .change-disagree').on('click', function(){
              revertFunc();
            })

            $(document).on('click', function(e){
              if ($(e.target).hasClass('lean-overlay')){
                revertFunc();
              }
            })

            $(document).on('keyup', function(e){
              if (e.keyCode == 27){
                revertFunc();
              }
            })
          }
        };

        createScheduler(scheduler);
      }else{
        Materialize.toast(res.meta.error_message, 4000);
      }
    });
  }else if (currentHref.match(new RegExp(currentOrigin + '/profile/accounts/.{24}/scheduled/media/upload$', 'g')) != null) {
    var activeSequence = $('.media-upload-tabs li a.active').html();

    $('.media-upload-page-handler .breadcrumb').on('click', function(){
      if (!$(this).hasClass('activated current')){
        var selectedIndex = $(this).index();

        $('.media-upload-page-handler .breadcrumb.activated.current').removeClass('current');
        $('.media-upload-page-handler .breadcrumb').eq(selectedIndex).addClass('current');

        $('ul.tabs').tabs('select_tab', $(this).attr('value'));
      }
    });

    if (activeSequence === 'MUZ'){
      var mediaUploadZone = $('#media-upload-zone #scheduled-media-upload-zone'),
          mediaUploadZoneHTMLContent = '';

      mediaUploadZoneHTMLContent += '<div class="upload-pulse-container">' +
        '<div class="btn-floating pulse upload-pulse">' +
          '<i class="material-icons">file_upload</i>' +
        '</div>' +
      '</div>' +
      '<label for="upload-trigger" class="btn-floating purple-heart-dark waves-effect browse-media-btn">بارگذاری مدیای تصویری</label>' +
      '<input id="upload-trigger" type="file"/>';

      mediaUploadZone.html(mediaUploadZoneHTMLContent);
      mediaUploadZone.addClass('z-depth-1');

      mediaUploadZone.on('dragenter',function(e){
        e.stopPropagation();
        e.preventDefault();

        mediaUploadZone.removeClass('z-depth-1');
        mediaUploadZone.addClass('z-depth-2');

        mediaUploadZone.find('.upload-pulse-container .upload-pulse').removeClass('pulse');
      });

      mediaUploadZone.on('dragleave',function(e){
        e.stopPropagation();
        e.preventDefault();

        mediaUploadZone.removeClass('z-depth-2');
        mediaUploadZone.addClass('z-depth-1');

        if (!mediaUploadZone.find('.upload-pulse-container .upload-pulse').hasClass('triggered')){
          mediaUploadZone.find('.upload-pulse-container .upload-pulse').addClass('pulse');
        }
      });

      mediaUploadZone.on('dragover',function(e){
        e.stopPropagation();
        e.preventDefault();
      });

      var nonSquareAspectRatio = {
        allow: false,
        ratio: 1.0
      };

      $(window).on('resize', function(){
        var aspectiveModal = $('#media-upload-zone #aspective-crop-modal'),
            aspectivePhoto = aspectiveModal.find('#aspective-photo');

        aspectivePhoto.css({'max-height': aspectiveModal.height() - 180});

        aspectivePhoto.cropper();
      });

      $('#media-upload-zone #aspective-crop-modal #media-upload-crop-photo-btn').on('click', function(){
        var aspectiveModal = $('#media-upload-zone #aspective-crop-modal'),
            aspectivePhoto = aspectiveModal.find('#aspective-photo');

        var croppedAspectivePhoto = aspectivePhoto.cropper('getCroppedCanvas');

        aspectiveModal.find('#media-upload-change-aspect-ratio-btn').fadeOut(300);

        mediaUploadZone.find('.upload-pulse-container .upload-pulse').html('');
        mediaUploadZone.find('.upload-pulse-container .upload-pulse').removeClass('pulse');
        mediaUploadZone.find('.upload-pulse-container .upload-pulse').addClass('triggered');

        mediaUploadZone.find('.upload-pulse-container .upload-pulse').css('background-image', 'url(' + croppedAspectivePhoto.toDataURL('image/jpeg') + ')');

        $('#media-upload-zone #media-upload-write-caption-btn').removeAttr('disabled');
        $('#media-upload-zone #media-upload-write-caption-btn').removeClass('disabled');

      })

      $('#media-upload-zone #aspective-crop-modal #media-upload-change-aspect-ratio-btn').on('click', function(){
        var aspectiveModal = $('#media-upload-zone #aspective-crop-modal'),
            aspectivePhoto = aspectiveModal.find('#aspective-photo');

        if (!nonSquareAspectRatio.allow){
          var aspectivePhotoWidth = aspectivePhoto.width(),
              aspectivePhotoHeight = aspectivePhoto.height(),
              aspectRatio = (aspectivePhotoWidth * 1.0) / (aspectivePhotoHeight * 1.0);

          if (aspectRatio > 1.0 || aspectRatio < 1.0) {
            if (aspectivePhotoWidth > aspectivePhotoHeight){
              if (aspectRatio > 1.5804154303){
                aspectRatio = (600 * 1.0) / (337 * 1.0);
              }
            }else{
              if (aspectRatio > 0.5804154303){
                aspectRatio = (480 * 1.0) / (600 * 1.0);
              }
            }
          }

          nonSquareAspectRatio.allow = true;
          nonSquareAspectRatio.ratio = aspectRatio;
        }else{
          nonSquareAspectRatio.allow = false;
          nonSquareAspectRatio.ratio = 1.0;
        }

        aspectivePhoto.cropper('setAspectRatio', nonSquareAspectRatio.ratio);
      })

      mediaUploadZone.on('drop',function(e){
        e.preventDefault();

        var formData = new FormData(),
            reader = new FileReader(),
            files = e.originalEvent.dataTransfer.files,
            length = files.length;

        mediaUploadZone.css('border-color','#F8F8F8');

        if (length === 1){
          reader.onload = function (event){
            var aspectiveModal = $('#media-upload-zone #aspective-crop-modal'),
                aspectivePhoto = aspectiveModal.find('#aspective-photo');

            aspectivePhoto.cropper('destroy');
            aspectivePhoto.attr({'src': event.target.result});

            aspectivePhoto.css({'max-width': '100%', 'max-height': aspectiveModal.height() - 180});
            aspectiveModal.openModal();

            var aspectivePhotoWidth = aspectivePhoto.width(),
                aspectivePhotoHeight = aspectivePhoto.height(),
                aspectRatio = (aspectivePhotoWidth * 1.0) / (aspectivePhotoHeight * 1.0);

            if (aspectRatio > 1.0 || aspectRatio < 1.0) {
              aspectiveModal.find('#media-upload-change-aspect-ratio-btn').fadeIn(300);
            }

            var options = {
              aspectRatio: nonSquareAspectRatio.ratio,
              viewMode: 1,
              responsive: true
            };

            if (aspectivePhotoHeight > aspectivePhotoWidth + 100){
              options.minContainerHeight = 400;
            }

            aspectivePhoto.cropper(options);

            nonSquareAspectRatio.allow = false;
            nonSquareAspectRatio.ratio = 1.0;
          }

          reader.readAsDataURL(files[0]);
        }
      });

      mediaUploadZone.find('input[type="file"]#upload-trigger').on('change',function(e){
        e.preventDefault();

        var formData = new FormData(),
            reader = new FileReader(),
            files = $(this)[0].files,
            length = files.length;

        mediaUploadZone.css('border-color','#F8F8F8');

        if (length === 1){
          reader.onload = function (event){
            mediaUploadZone.find('.upload-pulse-container .upload-pulse').html('');
            mediaUploadZone.find('.upload-pulse-container .upload-pulse').removeClass('pulse');
            mediaUploadZone.find('.upload-pulse-container .upload-pulse').addClass('triggered');

            mediaUploadZone.find('.upload-pulse-container .upload-pulse').css('background-image', 'url(' + event.target.result + ')');

            $('#media-upload-zone #media-upload-write-caption-btn').removeAttr('disabled');
            $('#media-upload-zone #media-upload-write-caption-btn').removeClass('disabled');
          }

          reader.readAsDataURL(files[0]);
        }
      });

      $('#media-upload-zone #media-upload-write-caption-btn').on('click', function(){
        var lastActivatedIndex = $('.media-upload-page-handler .breadcrumb.activated.current').index();

        $('.media-upload-page-handler .breadcrumb.activated.current').removeClass('current');
        $('.media-upload-page-handler .breadcrumb').eq(lastActivatedIndex + 1).addClass('activated current');

        $('ul.tabs').tabs('select_tab', 'media-upload-caption');
      });

      var linkIsListeningOn = {
        status: false,
        index: -1,
        type: null
      };

      $('#media-upload-caption #scheduled-media-upload-caption').on('keyup', function(){
        var caption = $(this).val();

        if (caption.length > 0){
          switch (caption[caption.length - 1]) {
            case '#':
              var isValidHashtag = false;

              if (caption.length > 1){
                if (caption[caption.length - 2] == ' '){
                  isValidHashtag = true;
                }
              }else{
                isValidHashtag = true;
              }

              if (isValidHashtag){
                linkIsListeningOn.index = caption.length;
                linkIsListeningOn.status = true;
                linkIsListeningOn.type = '#';
              }
              break;

            case '@':
              var isValidMention = false;

              if (caption.length > 1){
                if (caption[caption.length - 2] == ' '){
                  isValidMention = true;
                }
              }else{
                isValidMention = true;
              }

              if (isValidMention){
                linkIsListeningOn.index = caption.length;
                linkIsListeningOn.status = true;
                linkIsListeningOn.type = '@';
              }
              break;

            case ' ':
              linkIsListeningOn.index = -1;
              linkIsListeningOn.status = false;
              linkIsListeningOn.type = null;
              break;
          }

          if (linkIsListeningOn.status == true && (caption.length - linkIsListeningOn.index) >= 2){
            $.getJSON(currentOrigin + '/reveal/tokens/gemflw', function(gem){
              if (gem.meta.code == 200){
                gem = gem.data;

                var ACCESS_TOKEN = gem.access_token;

                switch (linkIsListeningOn.type) {
                  case '#':
                    var requestedHashtag = caption.substr(linkIsListeningOn.index);

                    $.getJSON('/api/instagram/tags/search?q=' + requestedHashtag + '&count=5&access_token=' + ACCESS_TOKEN, function(hashtagsData){
                      if (hashtagsData.meta.code == 200){
                        var hashtags = hashtagsData.data,
                            hashtagsHTMLContent = '';

                        hashtags = hashtags.sort(function(a, b){
                          return b.media_count-a.media_count
                        });

                        for (var i = 0; i < hashtags.length; i++) {
                          var hashtagRegexp = new RegExp('^' + requestedHashtag);

                          hashtagsHTMLContent += '<a title="' + hashtags[i].mediaCount + ' Media" data-value="' + hashtags[i].mediaCount + '" class="collection-item">' +
                            '<headline>#<span class="title">' + requestedHashtag + '</span>' +
                          (hashtags[i].name).replace(hashtagRegexp, '') + '</headline><subline>' + hashtags[i].mediaCount + ' Media</subline></a>';
                        }

                        $('#media-upload-caption #link-request-modal .collection.chips-dropdown').html(hashtagsHTMLContent);

                        $('#media-upload-caption #link-request-modal').openModal();
                      }else{
                        Materialize.toast(hashtagsData.meta.error_message, 4000);
                      }
                    });
                    break;

                  case '@':
                    var requestedMention = caption.substr(linkIsListeningOn.index);

                    $.getJSON('/api/instagram/users/search?q=' + requestedMention + '&count=4&access_token=' + ACCESS_TOKEN, function(mentionsData){
                      if (mentionsData.meta.code == 200){
                        var mentions = mentionsData.data,
                            mentionsHTMLContent = '';

                        mentions = mentions.sort(function(a, b){
                          return b.followerCount-a.followerCount
                        });

                        for (var i = 0; i < mentions.length; i++) {
                          var mentionRegexp = new RegExp('^' + requestedMention),
                              mentionValue = '';

                          if (mentions[i].username.match(mentionRegexp) != null){
                            mentionValue = mentions[i].username;
                          }else{
                            mentionValue = mentions[i].fullName;
                          }

                          mentionsHTMLContent += '<a title="' + mentions[i].followerCount + ' Followers" data-value="' + mentions[i].followerCount + '" class="collection-item">' +
                            '<headline>@<span class="title">' + requestedMention + '</span>' +
                          mentionValue.replace(mentionRegexp, '') + '</headline><subline>' + mentions[i].followerCount + ' Followers</subline></a>';
                        }

                        $('#media-upload-caption #link-request-modal .collection.chips-dropdown').html(mentionsHTMLContent);

                        $('#media-upload-caption #link-request-modal').openModal();
                      }else{
                        Materialize.toast(mentionsData.meta.error_message, 4000);
                      }
                    });
                    break;
                }
              }
            })
          }else{
            $('#media-upload-caption #link-request-modal').closeModal();
          }

          if (caption[caption.length - 1] != '#' && caption[caption.length - 1] != '@'){
            $('#media-upload-caption #media-upload-set-schedule-btn').removeAttr('disabled');
            $('#media-upload-caption #media-upload-set-schedule-btn').removeClass('disabled');
          }
        }else{
          $('#media-upload-caption #media-upload-set-schedule-btn').attr('disabled', 'disabled');
          $('#media-upload-caption #media-upload-set-schedule-btn').addClass('disabled');
        }
      });

      $(document).on('click', '#media-upload-caption #link-request-modal .collection.chips-dropdown a', function(){
        var selectedHashtag = ($(this).find('headline').text().toLowerCase()).replace(/(#|@)/g, ''),
            caption = $('#media-upload-caption #scheduled-media-upload-caption').val();

        caption = caption.replaceAt(linkIsListeningOn.index, selectedHashtag);

        $('#media-upload-caption #scheduled-media-upload-caption').val(caption);

        $('#media-upload-caption #link-request-modal').closeModal();

        linkIsListeningOn.index = -1;
        linkIsListeningOn.status = false;

        $('#media-upload-caption #scheduled-media-upload-caption').focus();
        $('#media-upload-caption #scheduled-media-upload-caption').val($('#media-upload-caption #scheduled-media-upload-caption').val() + ' ');
      });

      $('#media-upload-caption #media-upload-set-schedule-btn').on('click', function(){
        var lastActivatedIndex = $('.media-upload-page-handler .breadcrumb.activated.current').index();

        $('.media-upload-page-handler .breadcrumb.activated.current').removeClass('current');
        $('.media-upload-page-handler .breadcrumb').eq(lastActivatedIndex + 1).addClass('activated current');

        $('ul.tabs').tabs('select_tab', 'media-upload-schedule');

        var hashService = $('#media-upload-schedule #scheduled-media-upload-calendar').data('hash');

        $.getJSON("/schedules/" + hashService, function(res){
          if (res.meta.code == 200){
            var events = [];

            if (res.data.length > 0){
              $.each(res.data, function(i, schedule){
                  events.push({
                    id: schedule._id,
                    title: schedule.media.caption,
                    start: schedule.scheduled_at,
                    photo: schedule.media.content
                  })

                  var todayDate = moment().startOf('day'),
                      YM = todayDate.format('YYYY-MM'),
                      YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD'),
                      TODAY = todayDate.format('YYYY-MM-DD'),
                      TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

                  var media = {
                    content: $('#media-upload-zone #scheduled-media-upload-zone .upload-pulse-container .upload-pulse').css('background-image').replace(/(url\(|\))/g, ''),
                    caption: $('#media-upload-caption #scheduled-media-upload-caption').val()
                  };

                  var scheduler = {
                        element: '#scheduled-media-upload-calendar',
                        customButtons: {
                            currentEventBtn: {
                                text: '<img src="' + media.content + '"></img><span>' + media.caption + '</span>'
                            }
                        },
                        header: {
                    			left: 'prev,next today',
                    			center: 'title currentEventBtn',
                    			right: 'month,agendaWeek,agendaDay,listWeek'
                    		},
                        events: events,
                        eventDrop: function(event, delta, revertFunc) {
                          var today = (new Date()).getTime(),
                              _start = (new Date(event.start.format())).getTime(),
                              eventDiffer = _start - today,
                              eventDifferOnDay = Math.floor(eventDiffer / (1000 * 60 * 60 * 24));

                          $('#media-upload-schedule #change-event-modal').find('.modal-content h4').html(event.title);

                          $('#media-upload-schedule #change-event-modal').find('.modal-content p').html(
                            'رویداد بر روی  ' + ((eventDifferOnDay != 0)? ((eventDifferOnDay > 0)? _convertDigitsToPersian(eventDifferOnDay) + ' روز بعد': _convertDigitsToPersian(Math.abs(eventDifferOnDay)) + ' روز قبل') : 'امروز') + 'تنظیم بشود؟'
                          );

                          $('#media-upload-schedule #change-event-modal').openModal();

                          $('#media-upload-schedule #change-event-modal .change-agree').on('click', function(){
                            $('#media-upload-schedule #scheduled-media-upload-calendar').fullCalendar('updateEvent', event);

                            window.schedule.scheduled_at = new Date(_start).toISOString();
                          })

                          $('#media-upload-schedule #change-event-modal .change-disagree').on('click', function(){
                            revertFunc();
                          })

                          $(document).on('click', function(e){
                            if ($(e.target).hasClass('lean-overlay')){
                              revertFunc();
                            }
                          })

                          $(document).on('keyup', function(e){
                            if (e.keyCode == 27){
                              revertFunc();
                            }
                          })
                        },
                        navLinks: true,
                        droppable: true,
                        drop: function(date) {
                  				$(this).remove();

                          var today = new Date();

                          window.schedule = {
                            media: {
                              content: media.content,
                              caption: media.caption
                            },
                            scheduled_at: (new Date(date)).toISOString(),
                            created_at: today.toISOString(),
                            modified_at: today.toISOString()
                          };

                          $('#media-upload-schedule #save-schedule-btn').removeAttr('disabled');
                          $('#media-upload-schedule #save-schedule-btn').removeClass('disabled');
                  			},
                        editable: true
                    };

                  createScheduler(scheduler);

                  $('#media-upload-schedule #scheduled-media-upload-calendar .fc-currentEventBtn-button').data('event', {
                    title: media.caption,
                    photo: media.content,
                    stick: true
            			})

                  $('#media-upload-schedule #scheduled-media-upload-calendar .fc-currentEventBtn-button').draggable({
                      revert: true,      // immediately snap back to original position
                      revertDuration: 0,  //
                      cancel: false
                  });
              });
            }else{
              var todayDate = moment().startOf('day'),
                  YM = todayDate.format('YYYY-MM'),
                  YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD'),
                  TODAY = todayDate.format('YYYY-MM-DD'),
                  TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

              var media = {
                content: $('#media-upload-zone #scheduled-media-upload-zone .upload-pulse-container .upload-pulse').css('background-image').replace(/(url\(|\))/g, ''),
                caption: $('#media-upload-caption #scheduled-media-upload-caption').val()
              };

              var scheduler = {
                    element: '#scheduled-media-upload-calendar',
                    customButtons: {
                        currentEventBtn: {
                            text: '<img src="' + media.content + '"></img><span>' + media.caption + '</span>'
                        }
                    },
                    header: {
                      left: 'prev,next today',
                      center: 'title currentEventBtn',
                      right: 'month,agendaWeek,agendaDay,listWeek'
                    },
                    events: events,
                    eventDrop: function(event, delta, revertFunc) {
                      var today = (new Date()).getTime(),
                          _start = (new Date(event.start.format())).getTime(),
                          eventDiffer = _start - today,
                          eventDifferOnDay = Math.floor(eventDiffer / (1000 * 60 * 60 * 24));

                      $('#media-upload-schedule #change-event-modal').find('.modal-content h4').html(event.title);

                      $('#media-upload-schedule #change-event-modal').find('.modal-content p').html(
                        'رویداد بر روی  ' + ((eventDifferOnDay != 0)? ((eventDifferOnDay > 0)? _convertDigitsToPersian(eventDifferOnDay) + ' روز بعد': _convertDigitsToPersian(Math.abs(eventDifferOnDay)) + ' روز قبل') : 'امروز') + 'تنظیم بشود؟'
                      );

                      $('#media-upload-schedule #change-event-modal').openModal();

                      $('#media-upload-schedule #change-event-modal .change-agree').on('click', function(){
                        $('#media-upload-schedule #scheduled-media-upload-calendar').fullCalendar('updateEvent', event);

                        window.schedule.scheduled_at = new Date(_start).toISOString();
                      })

                      $('#media-upload-schedule #change-event-modal .change-disagree').on('click', function(){
                        revertFunc();
                      })

                      $(document).on('click', function(e){
                        if ($(e.target).hasClass('lean-overlay')){
                          revertFunc();
                        }
                      })

                      $(document).on('keyup', function(e){
                        if (e.keyCode == 27){
                          revertFunc();
                        }
                      })
                    },
                    navLinks: true,
                    droppable: true,
                    drop: function(date) {
                      $(this).remove();

                      var today = new Date();

                      window.schedule = {
                        media: {
                          content: media.content,
                          caption: media.caption
                        },
                        scheduled_at: (new Date(date)).toISOString(),
                        created_at: today.toISOString(),
                        modified_at: today.toISOString()
                      };

                      $('#media-upload-schedule #save-schedule-btn').removeAttr('disabled');
                      $('#media-upload-schedule #save-schedule-btn').removeClass('disabled');
                    },
                    editable: true
                };

              createScheduler(scheduler);

              $('#media-upload-schedule #scheduled-media-upload-calendar .fc-currentEventBtn-button').data('event', {
                title: media.caption,
                photo: media.content,
                stick: true
              })

              $('#media-upload-schedule #scheduled-media-upload-calendar .fc-currentEventBtn-button').draggable({
                  revert: true,      // immediately snap back to original position
                  revertDuration: 0,  //
                  cancel: false
              });
            }
          }else{
            Materialize.toast(res.meta.error_message, 4000);
          }
        })
    });

    $('#media-upload-schedule #save-schedule-btn').on('click', function(){
      var schedule = window.schedule;

      delete window.schedule;

      schedule.service_id = $(this).data('hash')

      $.ajax({
        url: "/schedule/" + schedule.service_id + "/set",
        type: "post",
        data: JSON.stringify(schedule),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
          if (res.meta.code == 200){
            window.location.replace('/profile/accounts/' + schedule.service_id + '/scheduled/media');
          }else{
            Materialize.toast(res.meta.error_message, 4000);
          }
        }
      })
    });
  }
}




  var map;
  $('#signup-btn').on('click', function(){
    var signupForm = $('#signup'),
        signupEmail = signupForm.find('#email').val(),
        signupPassword = signupForm.find('#password').val(),
        signupRepassword = signupForm.find('#re-password').val(),
        signupTerms = ((signupForm.find('#terms-cond:checked').length > 0)? true: false);

    if (signupTerms){
      signupForm.find('.terms-cond i').fadeOut(300);

      if (signupEmail != '' && signupPassword != ''){
        var alphabeticalyCheck = signupPassword.match(/[a-zA-Z]+/g),
            numericalCheck = signupPassword.match(/[0-9]+/g);

        if (alphabeticalyCheck != null && numericalCheck != null){
          if (signupPassword === signupRepassword){
            var today = (new Date()).toISOString(),
                confirmationId = Math.floor(Math.random() * (999 - 100 + 1) + 100) + '-' + Math.floor(Math.random() * (999 - 100 + 1) + 100),
                subscriber = {
                  email: signupEmail,
                  password: signupPassword,
                  created_at: today,
                  modified_at: today,
                  confirmation: {
                    code: confirmationId,
                    confirmed: false
                  }
                };

            $.ajax({
              url: "/users",
              type: "post",
              data: JSON.stringify(subscriber),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(res){
                if (res.meta.code == 200){
                  signupForm.find('#email+label, #re-password+label, #password+label').removeClass('active');
                  signupForm.find('#email, #password, #re-password').val('');
                  signupForm.find('#terms-cond').removeAttr('checked');

                  $('ul.tabs').tabs('select_tab', 'login');
                  $('#login #email').val(subscriber.email);
                  $('#login #email+label').addClass('active');
                  $('#login #password').trigger('focus');

                  Materialize.toast('حساب کاربری شما با موفقیت ایجاد گردید!<br>لطفا برای تایید حساب کاربری به ایمیل خود مراجعه نمایید.', 4000);
                }else{
                  Materialize.toast(res.meta.error_message, 4000);
                }
              }
            })
          }else{
            Materialize.toast('لطفاً مطمئن شوید که گذرواژه و تایید آن با یکدیگر برابر هستند!', 4000);
          }
        }else{
          Materialize.toast(0, 'حروف بزرگ، کوچک و اعداد مجاز می‌باشند.');
        }
      }else{
        var message = '';

        if (signupEmail == '' && signupPassword == ''){
          message += 'هرد دو فیلد ';
        }else if (signupEmail != '' && signupPassword == '') {
          message += 'فیلد گذرواژه ';
        }else if (signupEmail == '' && signupPassword != '') {
          message += 'فیلد پست الکترونیک ';
        }

        message += 'خالی رها شده است!';

        Materialize.toast(message, 4000);
      }
    }else{
      signupForm.find('.terms-cond i').fadeIn(300);
      Materialize.toast('لطفاً شرایط استفاده از جم‌فالو را ابتدا مطالعه و سپس آن را تایید نمایید.', 4000);
    }
  })
  $('#login-btn').on('click', function(){
    var loginForm = $('#login'),
        loginEmail = loginForm.find('#email').val(),
        loginPassword = loginForm.find('#password').val(),
        loginRemember = ((loginForm.find('#remember:checked').length > 0)? true: false);

    if (loginEmail != '' && loginPassword != ''){
      var auth = {
          email: loginEmail,
          password: loginPassword,
          remember: loginRemember
        };

      $.ajax({
        url: "/users/auth/",
        type: "post",
        data: JSON.stringify(auth),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
          if (res.meta.code == 200){
            window.location.replace('/profile');
          }else{
            Materialize.toast(res.meta.error_message, 4000);
          }
        }
      })
    }else{
      var message = '';

      if (loginEmail == '' && loginPassword == ''){
        message += 'هر دو فیلد ';
      }else if (loginEmail != '' && loginPassword == '') {
        message += 'فیلد گذرواژه ';
      }else if (loginEmail == '' && loginPassword != '') {
        message += 'فیلد پست الکترونیک ';
      }

      message += 'خالی رها شده است!';

      Materialize.toast(message, 4000);
    }
  })
  $('#service-chooser .carousel-item').on('click', function(){
    $(this).parent().attr('data-service', $(this).data('service'));
    $('#choose-service-type-btn span').html($(this).data('service'));
  });

  $('#gateway-chooser .carousel-item').on('click', function(){
    $(this).parent().attr('data-service', $(this).data('service'));
    $('#pay-now-btn span').html($(this).data('service'));
  });

  $('#service-type-chooser .carousel-item').on('click', function(){
    $(this).parent().attr('data-plan-en', $(this).data('plan-en'));
    $(this).parent().attr('data-plan-fa', $(this).data('plan-fa'));
    $('#choose-service-detail-btn span').html($(this).data('plan'));
  });

  $('#choose-service-type-btn').on('click', function(){
    appendServiceSession('type', {
      persian: $('#service-chooser div.carousel').data('service-fa'),
      english: $('#service-chooser div.carousel').data('service-en')
    });
    today = new Date();
    appendServiceSession('created_at', today.toISOString());
    appendServiceSession('modified_at', today.toISOString());

    $('ul.tabs').tabs('select_tab', 'service-type-chooser');
    $('.carousel').carousel();
  });

  $('#choose-service-detail-btn').on('click', function(){
    appendServiceSession('plan', {
      persian: $('#service-type-chooser div.carousel').data('plan-fa'),
      english: $('#service-type-chooser div.carousel').data('plan-en')
    });

    $('ul.tabs').tabs('select_tab', 'service-plan-details');

    var targetFollowerCount = 1;

    switch ($('#service-type-chooser .carousel').data('plan-en').toLowerCase().replace(/ +/ig,'-')) {
      case 'starter':
      default:
        targetFollowerCount = 1;
        $('#target-month-1').attr('checked','checked');
        break;
      case 'semi-starter':
        targetFollowerCount = 3;
        $('#target-month-2').attr('checked','checked');
        break;
      case 'semi-intermediate':
        targetFollowerCount = 8;
        $('#target-month-2').attr('checked','checked');
        break;
      case 'intermediate':
        targetFollowerCount = 15;
        $('#target-month-3').attr('checked','checked');
        break;
      case 'enterprise':
        targetFollowerCount = 25;
        $('#target-month-3').attr('checked','checked');
        break;
      case 'expert':
        targetFollowerCount = 30;
        $('#target-month-3').attr('checked','checked');
        break;
    }

    var targetFollower = document.getElementById('target-follower');

    noUiSlider.create(targetFollower, {
      start: targetFollowerCount,
      direction: 'rtl',
      range: {
        'min': 1,
        'max': 50
      },
      tooltips: wNumb({
        decimals: 0,
        postfix: ' هزار',
        edit: function(value){
          return '<span data-value="' + (value.replace(/ هزار/g, '')) * 1000 + '">' + _convertDigitsToPersian(value.toString()) + '</span>';
        }
      }),
      connect: [true, false],
      pips: {
        mode: 'values',
        stepped: true,
        values: [2, 10, 25, 50],
        density: 6,
        format: wNumb({
          decimals: 0,
          edit: function(value){
            return _convertDigitsToPersian(value.toString());
          },
          postfix: ' هزار'
        })
      }
    });

    targetFollower.noUiSlider.on('change', function(){
      $('#service-plan-details .SPD-title span').html($('#target-follower .noUi-tooltip span').html());
    });
  });

  $('#target-month input[type=radio]').on('change', function(){
    $('#target-month h4.bold span').html($(this).data('value-fa'));
  });

  $('#target-micro-service input[type=checkbox]').on('change', function(){
    if ($(this).attr('checked') == 'checked'){
      $(this).removeAttr('checked');
    }else{
      $(this).attr('checked', 'checked');
    }

    HBSC = $('#hashtag-based-setting-checkbox').attr('checked'),
    LBSC = $('#location-based-setting-checkbox').attr('checked'),
    PBSC = $('#period-based-setting-checkbox').attr('checked');

    if ( HBSC == 'checked' && LBSC == 'checked' && PBSC == 'checked' ){
      $('#define-next-level-type-btn').html('تعییر تنظیمات مربوط به  <span>مایکروسرویس‌ها</span>');
    }else{
      if ( typeof HBSC != 'undefined' || typeof LBSC != 'undefined' || typeof PBSC != 'undefined' ){
        $('#define-next-level-type-btn').html('تعییر تنظیمات مربوط به  <span>مایکروسرویس‌ها</span>');
      }else{
        $('#define-next-level-type-btn').html('احراز حساب کاربری');
      }
    }
  });

  $('#define-third-level-micro-service-btn').on('click', function(){
    $('#hashtag-service-details hashtags .chips').material_chip({
      data: analyzedHashtags(),
    });
    var positions = analyzedLocations();

    var hashtags = [],
        locations = [],
        periods = [];

    for (var i = 0; i < positions.length; i++) {
      $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + positions[i].lat + "," + positions[i].lng + "&sensor=true&key=AIzaSyCQQwxmPEZPNchzrARjmY5RRpr5gzVqSWA",
        type: "get",
        async: false,
        success: function(locs){
          if ( locs.status != 'ZERO_RESULTS' ){
            var locs = locs.results,
                formatted_address = locs[0].formatted_address;

            locations.push({
              text: formatted_address,
              data: {
                latitude: locs[0].geometry.location.lat,
                longitude: locs[0].geometry.location.lng
              }
            })
          }else{
            Materialize.toast('لطفاً یک آدرس صحیح وارد نمایید!', 4000);
          }
        }
      })
    }

    $('#hashtag-service-details hashtags .chips .chip').each(function(){
      var hashtag = $(this),
          hashtagText = hashtag.html().toString().replace(/(#|@)/g, ''),
          strippedHashtagText = hashtagText.replace(/<[^>]*>/g, '');

      hashtags.push({
        text: strippedHashtagText,
        data: hashtag.data('value'),
        type: hashtag.data('type')
      })
    });

    $('#period-service-details hashtags .chips .chip').each(function(){
      var period = $(this),
          periodText = {
            first: period.find('span').eq(0).html().toString(),
            second: period.find('span').eq(1).html().toString()
          },
          strippedPeriodText = {
            first: periodText.first.replace(/<[^>]*>/g, ''),
            second: periodText.second.replace(/<[^>]*>/g, '')
          };

      periods.push({
        text: strippedPeriodText,
        data: {
          first: period.data('first-value'),
          second: period.data('second-value')
        }
      })
    });

    appendServiceSession('hashtags', hashtags);
    appendServiceSession('locations', locations);
    appendServiceSession('periods', periods);

    loadAuthenticationLevel();
  });

  $('#define-first-level-micro-service-btn').on('click', function(){
    var hashtags = [];

    $('#hashtag-service-details hashtags .chips .chip').each(function(){
      var hashtag = $(this),
          hashtagText = hashtag.html().toString().replace(/(#|@)/g, ''),
          strippedHashtagText =  hashtagText.replace(/<[^>]*>/g, '');

      hashtags.push({
        text: strippedHashtagText,
        data: hashtag.data('value'),
        type: hashtag.data('type')
      })
    });

    appendServiceSession('hashtags', hashtags);

    if ( LBSC == 'checked' ){
      loadLocationMicroService(analyzedLocations());
    }else if ( PBSC == 'checked' ){
      loadPeriodMicroService(analyzedPeriods());
    }else{
      loadAuthenticationLevel();
    }
  });
  $('#checkout-micro-service-btn').on('click', function(){
    $('#hashtag-service-details hashtags .chips').material_chip({
      data: analyzedHashtags(),
    });
    var positions = analyzedLocations();

    var hashtags = [],
        locations = [],
        periods = [];

    for (var i = 0; i < positions.length; i++) {
      $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + positions[i].lat + "," + positions[i].lng + "&sensor=true&key=AIzaSyCQQwxmPEZPNchzrARjmY5RRpr5gzVqSWA",
        type: "get",
        async: false,
        success: function(locs){
          if ( locs.status != 'ZERO_RESULTS' ){
            var locs = locs.results,
                formatted_address = locs[0].formatted_address;

            locations.push({
              text: formatted_address,
              data: {
                latitude: locs[0].geometry.location.lat,
                longitude: locs[0].geometry.location.lng
              }
            })
          }else{
            Materialize.toast('لطفاً یک آدرس صحیح وارد نمایید!', 4000);
          }
        }
      })
    }
    var periodsData = analyzedPeriods();

    $('#hashtag-service-details hashtags .chips .chip').each(function(){
      var hashtag = $(this),
          hashtagText = hashtag.html().toString().replace(/(#|@)/g, ''),
          strippedHashtagText = hashtagText.replace(/<[^>]*>/g, '');

      hashtags.push({
        text: strippedHashtagText,
        data: hashtag.data('value'),
        type: hashtag.data('type')
      })
    });
    periods = periodsData;

    appendServiceSession('hashtags', hashtags);
    appendServiceSession('locations', locations);
    appendServiceSession('periods', periods);

    var hashId = $(this).data('hash-id');

    $.getJSON('/invoices/' + hashId, function(res){
      if (res.meta.code == 200){
        var invoices = res.data,
            service = JSON.parse(Cookies.get('service')),
            servicePrice = checkout(service),
            invoiceCreatedAt = new Date(service.created_at),
            jalaliInvoiceCreatedAt = _gregorian_to_jalali(invoiceCreatedAt.getFullYear(), invoiceCreatedAt.getMonth(), invoiceCreatedAt.getDay()),
            invoiceFormattedCreatedAt = jalaliInvoiceCreatedAt.day + ' ' + _getMonthName(jalaliInvoiceCreatedAt.month) + '، ' + jalaliInvoiceCreatedAt.year,
            targetPeriod = (new Date(service.target.period)).getTime(),
            createdAt = (new Date(service.created_at)).getTime(),
            periodDifference = targetPeriod - createdAt,
            defaultMonth = periodDifference / (1000 * 60 * 60 * 24 * 30),
            defaultMonthValue = getDefaultMonthValue(defaultMonth);

        appendServiceSession('price', servicePrice);

        service.invoice = {
          no: parseInt(invoices.length + 1),
          month: defaultMonthValue
        };

        appendServiceSession('invoice', service.invoice);

        $('#checkout-details .checkout-invoice h3.inv-no span').html('#' + _convertDigitsToPersian((parseInt(invoices.length + 1)).toString()));
        $('#checkout-details .checkout-invoice span.inv-date').html(invoiceFormattedCreatedAt);
        $('#checkout-details .checkout-invoice div.inv-photo').css('background-image', $('#authorized-details .aside .photo div.service-photo').css('background-image'));
        if (service.customized){
          $('#checkout-details .checkout-invoice .inv-content td.inv-service').html('شخصی‌سازی شده');
        }else{
          $('#checkout-details .checkout-invoice .inv-content td.inv-service').html(service.plan.persian);
        }
        $('#checkout-details .checkout-invoice .inv-content td.inv-qty').html(_convertDigitsToPersian((service.target.followers / 1000).toString()) + ' هزار');
        $('#checkout-details .checkout-invoice .inv-content td.inv-month').html(defaultMonthValue);
        $('#checkout-details .checkout-invoice .inv-content td.inv-price').html(_convertDigitsToPersian(servicePrice.total.toString()) + ' تومان');

        $('ul.tabs').tabs('select_tab', 'checkout-details');
      }
    })
  });

  $('#choose-payment-gateway-btn').on('click', function(){
    if ($(this).hasClass('credit-payment')){
      var today = new Date(),
          credit_amount = {
            content: {
              price: $('#credit-details #target-credit .noUi-tooltip span').data('value')
            }
          };

      appendCreditSession('payment', credit_amount);
      appendCreditSession('created_at', today.toISOString());
    }

    $('ul.tabs').tabs('select_tab', 'gateway-chooser');
  });

  $('#pay-now-btn').on('click', function(){
    var gateway = $('#gateway-chooser div.carousel').data('service');

    if ($(this).hasClass('credit-payment')){
      var credit = JSON.parse(Cookies.get('credit')),
          gatewayDetails = {
            gateway: gateway,
            price: credit.payment.content.price,
            description: 'A credit payment for your own account',
            callback_url: currentOrigin + '/profile'
          };

      credit.payment.gateway = gateway;

      appendCreditSession('payment', credit.payment);

      $.ajax({
        url: "/payment/" + ((new Date()).getTime()).toString(16),
        type: "post",
        data: JSON.stringify(gatewayDetails),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(paymentResault){
          if (paymentResault.meta.code == 200){
            credit.payment.content.authority = paymentResault.data.authority;

            appendServiceSession('payment', credit.payment);

            $.ajax({
              url: "/session/credit/" + credit.user_id,
              type: "post",
              data: JSON.stringify(credit),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(sessionResault){
                Cookies.remove('credit');

                window.location.replace(paymentResault.data.url);
              }
            })
          }
        }
      })
    }else{
      var service = Cookies.get('service'),
          user_id = $(this).data('hash-id');

      if (!service){
        service = {};
      }else{
        service = JSON.parse(service);
      }

      var servicePrice = checkout(service),
          description = 'پرداختی برای طرح ' + service.type.persian + ' مربوط به حساب کاربری شما.',
          gatewayDetails = {
            gateway: gateway,
            price: servicePrice.total,
            description: description,
            callback_url: currentOrigin + '/profile/accounts/new'
          };

      if (!service.price){
        service.price = servicePrice;
        appendServiceSession('price', service.price);
      }

      $.ajax({
        url: "/payment/" + service.owner.access_token,
        type: "post",
        data: JSON.stringify(gatewayDetails),
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(paymentResault){
          if (paymentResault.meta.code == 200){
            service.payment = {
              gateway: gateway,
              content: {
                authority: paymentResault.data.authority
              }
            };

            appendServiceSession('payment', service.payment);

            $.ajax({
              url: "/session/service/" + service.owner.access_token,
              type: "post",
              data: JSON.stringify(service),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(sessionResault){
                Cookies.remove('service');

                window.location.replace(paymentResault.data.url);
              }
            })
          }else{
            Materialize.toast(paymentResault.meta.error_message, 4000);
          }
        }
      });
    }
  });

  $('#pay-later-btn').on('click', function(){
    if ($(this).hasClass('session-saved')){
      window.location.replace('/profile/accounts');
    }else{
      var service = Cookies.get('service');

      if (!service){
        service = {};
      }else{
        service = JSON.parse(service);
      }

      service.price = checkout(service);
      appendServiceSession('price', service.price);

      $.ajax({
        url: "/session/service/" + service.owner.access_token,
        type: "post",
        data: JSON.stringify(service),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
          Cookies.remove('service');

          window.location.replace('/profile/accounts/');
        }
      })
    }
  })

  $('#edit-profile .profile-uploader').on('change', function(){
    if (this.files && this.files.length === 1) {
        var reader = new FileReader();

        $('#edit-profile .profile-photo').css('background-position', 'center');

        reader.onload = function (e) {
          $('#edit-profile .peoples-photo.profile-photo-bg .profile-photo').remove();
          $('#edit-profile .peoples-photo.profile-photo-bg').addClass('regular');
          $('#edit-profile .peoples-photo.profile-photo-bg form').before('<div class="profile-photo" style="background-image: url(' + e.target.result + ')"></div>');
        }

        reader.readAsDataURL(this.files[0]);
    }
  });

  $('#edit-profile #name, #edit-profile #email').unbind('keyup').on('keyup', function(e) {
    var value = $(this).attr('value');

    value = $(this).val();

    $(this).attr('value', value);
  });

  $('#edit-profile-btn').on('click', function(){
    var account = {
      _id: $(this).data('id'),
      modified_at: (new Date()).toISOString()
    };

    if (!$('#edit-profile .profile-photo').hasClass('no-image')){
      account.profile = $('#edit-profile .profile-photo').css('background-image').replace(/(url\(|\))/g, '');
    }
    if ($('#edit-profile #name').val() != ''){
      account.name = $('#edit-profile #name').val();
    }
    if ($('#edit-profile #email').val() != ''){
      account.email = $('#edit-profile #email').val();
    }else{
      Materialize.toast('Email field can not be empty!', 4000);
    }
    if ($('#edit-profile #email').val() != $('#edit-profile #email').data('value')){
      var confirmationId = Math.floor(Math.random() * (999 - 100 + 1) + 100) + '-' + Math.floor(Math.random() * (999 - 100 + 1) + 100);

      account.confirmation = {
        code: confirmationId,
        confirmed: false
      };
    }

    if ($('#edit-profile #email').val() != ''){
      $.ajax({
        url: "/users",
        type: "put",
        data: JSON.stringify(account),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
          if (res.meta.code == 200){
            if ($('#edit-profile #email').val() != $('#edit-profile #email').data('value')){
              window.location.replace('/logout');
            }else{
              window.location.replace('/profile');
            }
          }
        }
      })
    }
  });

  $('#passwd-btn').on('click', function(){
    var oldPass = $('#edit-password #old-pass').val(),
        newPass = $('#edit-password #new-pass').val(),
        rePass = $('#edit-password #re-pass').val(),
        account = {
          _id: $(this).data('id'),
          password: newPass,
          modified_at: (new Date()).toISOString()
        };

    if (oldPass != '' && newPass != ''){
      if (newPass === rePass){
        var alphabeticalyCheck = newPass.match(/[a-zA-Z]+/g),
            numericalCheck = newPass.match(/[0-9]+/g),
            specialCharsCheck = newPass.match(/[!#$%@^&*()\/_~?><]+/g);

        if (alphabeticalyCheck != null && numericalCheck != null & specialCharsCheck != null){
          $.ajax({
            url: "/users/password",
            type: "put",
            data: JSON.stringify(account),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(res){
              if (res.meta.code == 200){
                window.location.replace('/profile');
              }
            }
          })
        }else{
          Materialize.toast('&mdash; Upper &amp; lowercase letters<br>&mdash; At least one number<br>&mdash; At least one special character', 4000);
        }
      }else{
        Materialize.toast('Please make sure your passwords match!', 4000);
      }
    }else{
      var message = 'Your ';

      if (oldPass == ''){
        message += 'old password field and ';
      }
      if (newPass == ''){
        message += 'new password field ';
      }

      message += 'can not be empty!';

      Materialize.toast(message, 4000);
    }
  });

    $('#define-second-level-micro-service-btn').on('click', function(){
      $('#hashtag-service-details hashtags .chips').material_chip({
        data: analyzedHashtags(),
      });

      var hashtags = [],
          locations = [];

      $('#hashtag-service-details hashtags .chips .chip').each(function(){
        var hashtag = $(this),
            hashtagText = hashtag.html().toString().replace(/(#|@)/g, ''),
            strippedHashtagText = hashtagText.replace(/<[^>]*>/g, '');

        hashtags.push({
          text: strippedHashtagText,
          data: hashtag.data('value'),
          type: hashtag.data('type')
        })
      });

      $('#location-service-details hashtags .chips .chip').each(function(){
        var location = $(this),
            locationText = location.data('value').toString().replace(/(#|@)/g, ''),
            strippedLocationText = locationText.replace(/<[^>]*>/g, '');

        locations.push({
          address: strippedLocationText,
          data: {
            latitude: location.data('latitude'),
            longitude: location.data('longitude')
          }
        })
      });

      appendServiceSession('hashtags', hashtags);
      appendServiceSession('locations', locations);

      if ( PBSC == 'checked' ){
        loadPeriodMicroService(analyzedPeriods());
      }else{
        loadAuthenticationLevel();
      }
    });

    $('#authenticate-service-btn').on('click', function(){
      var user_id = $(this).data('hash-id'),
          username = $('#authentication-level-details #auth-username').val(),
          password = $('#authentication-level-details #auth-password').val();

      if (username != '' && password != ''){
        auth = {
          user_id: user_id,
          username: username,
          password: password
        };

        $.ajax({
          url: "/api/instagram/users",
          type: "post",
          data: JSON.stringify({
            username: auth.username,
            password: auth.password
          }),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function(res){
            if (res.meta.code == 200){
              var seed = res.data;

              seed.username = auth.username;
              seed.password = auth.password;

              $.ajax({
                url: "/profile/accounts/authorization",
                type: "post",
                data: JSON.stringify(seed),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(token){
                  if (token.meta.code == 200){
                    var owner = token.data;

                    appendServiceSession('owner', owner);

                    loadAuthorizationLevel();
                  }
                }
              })
            }else{
              Materialize.toast(res.meta.error_message, 4000);
            }
          }
        })
      }else{
        var message = '';

        if (username == ''){
          if (message != ''){
            message += ' and username';
          }else{
            message += 'Username';
          }
        }

        if (password == ''){
          if (message != ''){
            message += ' and password';
          }else{
            message += 'Password';
          }
        }

        Materialize.toast(message + ' can not be empty!', 4000);
      }
    });

    $('#define-next-level-type-btn').on('click', function(){
      var month = $('#service-plan-details #target-month input[name="target-month"]:checked').val(),
          service_followers = $('#service-plan-details #target-follower .noUi-tooltip span').data('value'),
          service_plan = $('#service-type-chooser div.carousel').data('plan-en'),
          service_period = '',
          serviceCookie = JSON.parse(Cookies.get('service')),
          today = new Date(serviceCookie.created_at);


      if (service_followers != 2000 && service_followers != 5000 && service_followers != 10000){
        appendServiceSession('customized', true);
      }

      switch (month) {
        case '1 Month':
          service_period = (new Date(today.getTime() + (1000 * 60 * 60 * 24 * 30))).toISOString();
          break;
        case '3 Month':
          service_period = (new Date(today.getTime() + (1000 * 60 * 60 * 24 * 30 * 3))).toISOString();
          break;
        case '6 Month':
          service_period = (new Date(today.getTime() + (1000 * 60 * 60 * 24 * 30 * 6))).toISOString();
          break;
        case '1 Year':
          service_period = (new Date(today.getTime() + (1000 * 60 * 60 * 24 * 30 * 12))).toISOString();
          appendServiceSession('customized', true);
          break;
        case '2 Year':
          service_period = (new Date(today.getTime() + (1000 * 60 * 60 * 24 * 30 * 24))).toISOString();
          appendServiceSession('customized', true);
          break;
      }

      appendServiceSession('target', {
        followers: $('#service-plan-details #target-follower .noUi-tooltip span').data('value'),
        period: service_period
      });

      HBSC = $('#hashtag-based-setting-checkbox').attr('checked'),
      LBSC = $('#location-based-setting-checkbox').attr('checked'),
      PBSC = $('#period-based-setting-checkbox').attr('checked');

      if ( HBSC == 'checked' ){
        loadHashtagMicroService(analyzedHashtags());
      }else if ( LBSC == 'checked' ){
        loadLocationMicroService(analyzedLocations());
      }else if ( PBSC == 'checked' ){
        loadPeriodMicroService(analyzedPeriods());
      }else{
        loadAuthenticationLevel();
      }
    });

    $(document).on('keyup', '#hashtag-service-details hashtags .chips input', function(){
      var self = $(this),
          currentChip = self.val();

      if (currentChip.length > 0){
        switch (currentChip[0]) {
          case '#':
          default:
            var isValidHashtag = false;

            if (currentChip.length > 1){
              if (currentChip[currentChip.length - 2] == ' '){
                isValidHashtag = true;
              }
            }else{
              isValidHashtag = true;
            }

            if (isValidHashtag){
              linkIsListeningOn.index = 1;
              linkIsListeningOn.status = true;
              linkIsListeningOn.type = '#';
            }
            break;

          case '@':
            var isValidMention = false;

            if (currentChip.length > 1){
              if (currentChip[currentChip.length - 2] == ' '){
                isValidMention = true;
              }
            }else{
              isValidMention = true;
            }

            if (isValidMention){
              linkIsListeningOn.index = 1;
              linkIsListeningOn.status = true;
              linkIsListeningOn.type = '@';
            }
            break;
        }

      if (linkIsListeningOn.status == true && (currentChip.length - linkIsListeningOn.index) >= 2){
        $.getJSON(currentOrigin + '/reveal/tokens/gemflw', function(gem){
          if (gem.meta.code == 200){
            gem = gem.data;

            var ACCESS_TOKEN = gem.access_token;

            switch (linkIsListeningOn.type) {
              case '#':
                var requestedHashtag = currentChip.substr(linkIsListeningOn.index);

                $.getJSON('/api/instagram/tags/search?q=' + requestedHashtag + '&count=5&access_token=' + ACCESS_TOKEN, function(hashtagsData){
                  if (hashtagsData.meta.code == 200){
                    var hashtags = hashtagsData.data,
                        hashtagsHTMLContent = '';

                    hashtags = hashtags.sort(function(a, b){
                      return b.mediaCount-a.mediaCount
                    });

                    for (var i = 0; i < hashtags.length; i++) {
                      var hashtagRegexp = new RegExp('^' + requestedHashtag);

                      hashtagsHTMLContent += '<a title="' + hashtags[i].mediaCount + ' Media" data-type="hashtag" data-value="' + hashtags[i].mediaCount + '" class="collection-item">' +
                        '<headline>#<span class="title">' + requestedHashtag + '</span>' +
                      (hashtags[i].name).replace(hashtagRegexp, '') + '</headline><subline>' + hashtags[i].mediaCount + ' Media</subline></a>';
                    }

                    self.parent().parent().find('.chips-dropdown').html(hashtagsHTMLContent);

                    self.parent().parent().find('.chips-dropdown').fadeIn(300);
                  }else{
                    Materialize.toast(hashtagsData.meta.error_message, 4000);
                  }
                });
                break;

              case '@':
                var requestedMention = currentChip.substr(linkIsListeningOn.index);

                $.getJSON('/api/instagram/users/search?q=' + requestedMention + '&count=4&access_token=' + ACCESS_TOKEN, function(mentionsData){
                  if (mentionsData.meta.code == 200){
                    var mentions = mentionsData.data,
                        mentionsHTMLContent = '';

                    mentions = mentions.sort(function(a, b){
                      return b.followerCount-a.followerCount
                    });

                    for (var i = 0; i < mentions.length; i++) {
                      var mentionRegexp = new RegExp('^' + requestedMention),
                          mentionValue = '';

                      if (mentions[i].username.match(mentionRegexp) != null){
                        mentionValue = mentions[i].username;
                      }else{
                        mentionValue = mentions[i].fullName;
                      }

                      mentionsHTMLContent += '<a title="' + mentions[i].followerCount + ' Followers" data-type="mention" data-value="' + mentions[i].followerCount + '" class="collection-item">' +
                        '<headline>@<span class="title">' + requestedMention + '</span>' +
                      mentionValue.replace(mentionRegexp, '') + '</headline><subline>' + mentions[i].followerCount + ' Followers</subline></a>';
                    }

                    self.parent().parent().find('.chips-dropdown').html(mentionsHTMLContent);

                    self.parent().parent().find('.chips-dropdown').fadeIn(300);
                  }else{
                    Materialize.toast(mentionsData.meta.error_message, 4000);
                  }
                });
                break;
            }
          }
        })
      }else{
        self.parent().parent().find('.chips-dropdown').fadeOut(300);
      }
    }else{
      self.parent().parent().find('.chips-dropdown').fadeOut(300);
    }
  });

    $(document).on('blur', '#hashtag-service-details hashtags .chips input', function(){
      if ($(this).val() != ''){
        $(this).parent().parent().find('.chips-dropdown').fadeOut(300);
      }
    });

    $(document).on('focus', '#hashtag-service-details hashtags .chips input', function(){
      if ($(this).val() != ''){
        $(this).parent().parent().find('.chips-dropdown').fadeIn(300);
      }
    });

    $(document).on('click', '#hashtag-service-details hashtags .chips-dropdown a', function(){
      $(this).parent().parent().find('.chips input').before('<div class="chip" data-type="' + $(this).data('type') + '" data-value="' + $(this).data('value') + '">' + $(this).find('headline').text().toLowerCase() + '<i class="material-icons close">close</i></div>')
      $(this).parent().parent().find('.chips input').val('');
      $(this).parent().parent().find('.chips-dropdown').fadeOut(300);
    });

    $('#search-location').on('click', function(){
      var location_address = $('#location_search').val();
      location_address = location_address.replace(/ +/g, "+");

      $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=" + location_address + "&sensor=true&key=AIzaSyCQQwxmPEZPNchzrARjmY5RRpr5gzVqSWA", function(locations){
        if ( locations.status != 'ZERO_RESULTS' ){
          var locations = locations.results,
              location = locations[0].geometry.location;

          map.setCenter(location);
        }else{
          $('#location_search').val('');
          Materialize.toast('Please Type a Valid Address!', 4000);
        }
      });
    });

    $('#location_search').on('keyup', function(e){
      if (e.keyCode == 13) {
          $('#search-location').trigger('click');
      }
    });

    $(document).ajaxStart(function(){
      $('#loading-overlay').css({
        'display': 'block',
        'max-height': '5rem',
        'background-color': '#040404'
      });

      $('#pace').css({
        'display': 'block',
        'visibility': 'visible',
        'right': 'calc(50% - 9px)',
        'top': 'calc(2.5rem - 9px)'
      });

      $('#pace .pace-activity').css({
        'border-width': '3px',
        'width': '18px',
        'height': '18px',
        'border-top-color': '#fff',
        'border-left-color': '#fff'
      });
    });

    $(document).ajaxStop(function(){
      $('#loading-overlay').css({
        'display': 'none',
        'max-height': 'none',
        'background-color': '#fff'
      });

      $('#pace').css({
        'display': 'none',
        'visibility': 'hidden',
        'right': '1rem',
        'top': '1rem'
      });

      $('#pace .pace-activity').css({
        'border-width': '2px',
        'width': '14px',
        'height': '14px',
        'border-top-color': '#040404',
        'border-left-color': '#040404'
      });
    });

    $(window).on('resize', function(){
      $('.carousel').carousel();
    });

    /***
    **
    *
    Functions
    *
    **
    ***/

    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
    Date.prototype.getMonthName = function() {
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return months[this.getMonth()];
    }
    function createScheduler(scheduler){
      customButtons = scheduler.customButtons || false;
      editable = scheduler.editable || false;
      droppable = scheduler.droppable || false;
      eventDrop = scheduler.eventDrop || false;
      navLinks = scheduler.navLinks || false;
      drop = scheduler.drop || false;

      var calendarContent = {
        header: scheduler.header,
        eventLimit: true,
        events: scheduler.events,
        eventRender: function(event, element, view) {
          if (typeof event.id != 'undefined'){
            $(element).attr('data-hash', event.id);
          }

          switch (view.type) {
            case 'agendaDay':
              if(event.photo){
                if (event.allDay){
                  $(element).find('.fc-content').prepend('<div class="fc-photo"><img src="' + event.photo + '" /></div>');
                }else{
                  $(element).find('.fc-content').prepend('<div class="fc-photo"><img src="' + event.photo + '" /></div>');
                }
              }
              break;
            case 'agendaWeek':
              if(event.photo){
                if (event.allDay){
                  $(element).find('.fc-content').prepend('<div class="fc-photo"><img src="' + event.photo + '" /></div>');
                }else{
                  $(element).find('.fc-content').prepend('<div class="fc-photo"><img src="' + event.photo + '" /></div>');
                }
              }
              break;
          }
        },
      };

      if (customButtons){
        calendarContent.customButtons = customButtons;
      }

      if (editable){
        calendarContent.editable = editable;
      }

      if (droppable){
        calendarContent.droppable = droppable;
      }

      if (navLinks){
        calendarContent.navLinks = navLinks;
      }

      if (eventDrop){
        calendarContent.eventDrop = eventDrop;
      }

      if (drop){
        calendarContent.drop = drop;
      }

    	$(scheduler.element).fullCalendar(calendarContent);
    }
    function getDefaultMonthValue(defaultMonth){
      var defaultMonthVal = '';

      switch (defaultMonth) {
        case 1:
          defaultMonthVal += 'تا انتهای ماه بعد';
          break;
        case 3:
          defaultMonthVal += 'تا انتهای سه‌ماه بعد';
          break;
        case 6:
          defaultMonthVal += 'تا انتهای شش‌ماه بعد';
          break;
        case 12:
          defaultMonthVal += 'تا انتهای سال بعد';
          break;
        case 24:
          defaultMonthVal += 'تا انتهای دوسال بعد';
          break;
      }

      return defaultMonthVal;
    }
    function coefficientForDifferenceInPeriod(periodDifference, defaultTime){
      var coeff = 1;

      switch (periodDifference) {
        case defaultTime * 3:
          coeff = 0.9;
          break;
        case defaultTime * 6:
          coeff = 0.8;
          break;
        case defaultTime * 12:
          coeff = 0.7;
          break;
        case defaultTime * 24:
          coeff = 0.6;
          break;
      }

      return coeff;
    }
    function coefficientForDifferenceInFollower(followersDifference){
      if (followersDifference <= 15000){
        return 0.75;
      }else if (followersDifference > 15000 && followersDifference <= 25000){
        return 0.80;
      }else if (followersDifference > 25000 && followersDifference <= 35000){
        return 0.85;
      }else{
        return 0.95;
      }
    }
    function pricePeriodMonth(defaultMonth){
      var basePrice;

      switch (defaultMonth) {
        case 1:
          basePrice = 100000;
          break;
        case 3:
          basePrice = 150000;
          break;
        case 6:
          basePrice = 250000;
          break;
        case 12:
          basePrice = 440000;
          break;
        case 24:
          basePrice = 780000;
          break;
      }

      return basePrice;
    }
    function checkout(service){
      var price = {
        total: 0
      },
      targetPeriod = (new Date(service.target.period)).getTime(),
      createdAt = (new Date(service.created_at)).getTime(),
      periodDifference = targetPeriod - createdAt,
      defaultMonth = periodDifference / (1000 * 60 * 60 * 24 * 30),
      defaultTime = 1000 * 60 * 60 * 24 * 30 * defaultMonth,
      periodCoefficient = coefficientForDifferenceInPeriod(periodDifference, defaultTime),
      pricePerPeriodMonth = pricePeriodMonth(defaultMonth);

      price.monthly = {
        raw: pricePerPeriodMonth
      }

      if (!service.customized){
        price.monthly.processed = periodCoefficient * pricePerPeriodMonth;
        price.total += price.monthly.processed;
      }else{
        price.monthly.processed = periodCoefficient * pricePerPeriodMonth;
        price.total += price.monthly.processed;

        var planFollower;

        switch (service.plan.english.toLowerCase().replace(/ +/ig, '-')) {
          case 'starter':
            planFollower = 1000;
            break;
          case 'semi-starter':
            planFollower = 3000;
            break;
          case 'semi-intermediate':
            planFollower = 8000;
            break;
          case 'intermediate':
            planFollower = 15000;
            break;
          case 'enterprise':
            planFollower = 25000;
            break;
          case 'expert':
            planFollower = 30000;
            break;
        }

        if (service.target.followers != planFollower){
          var followersDifference = service.target.followers - planFollower;
              followerCoefficient = coefficientForDifferenceInFollower(followersDifference);

          price.followers = Math.round(followerCoefficient * (followersDifference / 1000))
          price.total += price.followers;
        }
      }

      return price;
    }

    function appendCreditSession(dataKey, dataContent){
      var credit = Cookies.get('credit');

      if (!credit){
        credit = {};
      }else{
        credit = JSON.parse(credit);
      }

      credit[dataKey] = dataContent;

      Cookies.set('credit', JSON.stringify(credit));
    }

    function appendServiceSession(dataKey, dataContent){
      var service = Cookies.get('service');

      if (!service){
        service = {};
      }else{
        service = JSON.parse(service);
      }

      if (dataKey == 'hashtags' || dataKey == 'locations' || dataKey == 'periods'){
        if (!service.micro_services){
          service.micro_services = {};
        }

        service.micro_services[dataKey] = dataContent;
      }else{
        service[dataKey] = dataContent;
      }

      Cookies.set('service', JSON.stringify(service));
    }

    function analyzedHashtags(){
      return [{
        tag: '#instanature',
        data: 3000,
        type: 'hashtag'
      }, {
        tag: '#instaartist',
        data: 24,
        type: 'hashtag'
      }, {
        tag: '#instafitness',
        data: 2,
        type: 'hashtag'
      }];
    }
    function analyzedLocations(){
      return [
        {lat: 35.76909663604188, lng: 51.45969271659851},
        {lat: 35.781631070592056, lng: 51.37935519218445},
        {lat: 35.79611284503807, lng: 51.43291354179382},
        {lat: 35.734825768432756, lng: 51.43325686454773},
        {lat: 35.69356971947041, lng: 51.436346769332886},
        {lat: 35.713364137980875, lng: 51.42124056816101},
        {lat: 35.72395631456603, lng: 51.49024844169617},
        {lat: 35.72451375853924, lng: 51.3381564617157}
      ];
    }
    function analyzedPeriods(){
      return [
        {
          text: {
            first: '۱۲:۰۰ قبل‌ازظهر',
            second: '۰۲:۰۰ قبل‌ازظهر'
          },
          data: {
            first: 0,
            second: 7200
          }
        },
        {
          text: {
            first: '۰۸:۰۰ قبل‌ازظهر',
            second: '۱۰:۰۰ قبل‌ازظهر'
          },
          data: {
            first: 28800,
            second: 36000
          }
        },
        {
          text: {
            first: '۰۵:۰۰ بعدازظهر',
            second: '۰۷:۰۰ بعدازظهر'
          },
          data: {
            first: 61200,
            second: 68400
          }
        }
      ];
    }

    function loadHashtagMicroService(analyzedHashtags){
      $('ul.tabs').tabs('select_tab', 'hashtag-service-details');

      $('#hashtag-service-details hashtags .chips').material_chip({
        data: analyzedHashtags
      });

      if ( LBSC == 'checked' ){
        $('#define-first-level-micro-service-btn').html('تنظمیات مربوط به <span>موقعیت جغرافیایی</span>');
      }else if ( PBSC == 'checked' ){
        $('#define-first-level-micro-service-btn').html('تنظمیات مربوط به <span>سرویس زمان‌بندی</span>');
      }else{
        $('#define-first-level-micro-service-btn').html('احراز حساب کاربری');
      }
    }

    function loadAuthenticationLevel(){
      var service = JSON.parse(Cookies.get('service'));

      $('ul.tabs').tabs('select_tab', 'authentication-level-details');

      $('#authentication-level-details h3.bold span').html(service.type);
    }

    function loadAuthorizationLevel(){
      var service = JSON.parse(Cookies.get('service')),
          params = {};

      switch (service.type.english.toLowerCase()) {
        case 'instagram':
          $.getJSON("/api/instagram/users?access_token=" + service.owner.access_token, function(res){
            if (res.meta.code == 200){
              var authorizedDetails = $('#authorized-details .aside'),
                  user = res.data;

              service.owner = user;
              appendServiceSession('owner', service.owner);

              authorizedDetails.find('.photo .service-photo').css('background-image', 'url(' + user.picture + ')');
              authorizedDetails.find('.details h3.bold').html(user.username);

              if (typeof user.website != 'undefined'){
                authorizedDetails.find('.details').append(
                  '<span>' +
                    '<strong>' +
                      user.website +
                    '</strong>' +
                  '</span>'
                );
              }

              if (typeof user.biography != 'undefined'){
                authorizedDetails.find('.details').append(
                  '<p>' +
                    user.biography +
                  '</p>'
                );
              }

              $('ul.tabs').tabs('select_tab', 'authorized-details');
            }else{
              Materialize.toast(res.meta.error_message, 4000);
            }
          })
          break;
        case 'twitter':
          alert('تعریف نشده است')
          break;
      }
    }

    function ZoomControl(controlDiv, map) {
       var zoominControlUI = document.createElement('div');
       zoominControlUI.className += 'zoomin';
       controlDiv.appendChild(zoominControlUI);

       var zoominControlText = document.createElement('div');
       zoominControlText.innerHTML = '<i class="fa fa-plus" aria-hidden="true"></i>';
       zoominControlUI.appendChild(zoominControlText);

       var zoomoutControlUI = document.createElement('div');
       zoomoutControlUI.className += 'zoomout';
       controlDiv.appendChild(zoomoutControlUI);

       var zoomoutControlText = document.createElement('div');
       zoomoutControlText.innerHTML = '<i class="fa fa-minus" aria-hidden="true"></i>';
       zoomoutControlUI.appendChild(zoomoutControlText);

       zoominControlUI.addEventListener('click', function() {
         map.setZoom(map.getZoom() + 1);
       });

       zoomoutControlUI.addEventListener('click', function() {
         map.setZoom(map.getZoom() - 1);
       });
     }

     function CorporateControl(controlDiv, map) {
        var corporateBrandUI = document.createElement('div');
        corporateBrandUI.className += 'corporate-brand unselectable left';
        corporateBrandUI.innerHTML = '<a href="/">Gem Follow</a>';
        controlDiv.appendChild(corporateBrandUI);

        var corporateDetailUI = document.createElement('div');
        corporateDetailUI.className += 'corporate-detail unselectable';
        corporateDetailUI.innerHTML = 'Map data ©2017 Google, ZENRIN | <a href="https://www.google.com/intl/en-US_US/help/terms_maps.html">Terms of Use</a>';
        controlDiv.appendChild(corporateDetailUI);
      }

      function addHellip(str, len){
        var editedStr = str.substr(0, len - 1);

        if ( editedStr[editedStr.length - 1] != ' ' ){
          return editedStr + ' &hellip;';
        }else{
          return editedStr + '&hellip;';
        }
      }

      function placeMarker(location, map){
        $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + location.lat + "," + location.lng + "&sensor=true&key=AIzaSyCQQwxmPEZPNchzrARjmY5RRpr5gzVqSWA", function(locations){
          if ( locations.status != 'ZERO_RESULTS' ){
            var marker = new google.maps.Marker({
              position: location,
              map: map,
              icon: '/vendors/images/ui/pin.png'
            });

            var locations = locations.results,
                formatted_address = locations[0].formatted_address;

            $('#location-service-details hashtags .chips').append('<div class="chip" title="' + formatted_address + '" data-value="' + formatted_address + '" data-latitude="' + location.lat + '" data-longitude="' + location.lng + '">' + addHellip(formatted_address, 20) + '<i class="material-icons close">close</i></div>');
          }else{
            Materialize.toast('لطفاً یک آدرس صحیح وارد نمایید!', 4000);
          }
        });
      }

      function loadLocationMicroService(analyzedLocations){
        $('ul.tabs').tabs('select_tab', 'location-service-details');

        //$('#location-service-details hashtags .chips').material_chip();

        /*if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var currentLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };*/

            var currentLocation = {
                lat: 35.6935862,
                lng: 51.4426304
            };

            map = new google.maps.Map(document.getElementById('map'), {
              name: '#map',
              zoom: 16,
              center: currentLocation,
              mapTypeControl: false,
              zoomControl: false,
              streetViewControl: false,
              fullscreenControl: false,
              styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
            });

            var zoomControlDiv = document.createElement('div');
                zoomControlDiv.id += 'zoom-control';
            var zoomControl = new ZoomControl(zoomControlDiv, map);

            map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControlDiv);

            var corporateControlDiv = document.createElement('div');
                corporateControlDiv.id += 'corporate';
            var corporateControl = new CorporateControl(corporateControlDiv, map);

            map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(corporateControlDiv);

            google.maps.event.addListener(map, 'click', function(event) {
              var location = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
              };

              placeMarker(location, map);
            });

            placeMarker(currentLocation, map);

            var positions = analyzedLocations;
            for (var i = 0; i < positions.length; i++) {
              placeMarker(positions[i], map);
            }
          /*});
        }*/

        if ( PBSC == 'checked' ){
          $('#define-second-level-micro-service-btn').html('تنظمیات مربوط به <span>سرویس زمان‌بندی</span>');
        }else{
          $('#define-second-level-micro-service-btn').html('احراز حساب کاربری');
        }
      }

      function loadPeriodMicroService(analyzedPeriods){
        $('ul.tabs').tabs('select_tab', 'period-service-details');

        for (var i = 0; i < analyzedPeriods.length; i++) {
          period = analyzedPeriods[i];
          periods = {
            first: {
              value: period.data.first,
              text: period.text.first
            },
            second: {
              value: period.data.second,
              text: period.text.second
            }
          };

          $('#period-service-details hashtags .chips').append('<div class="chip" data-first-value="' +
          period.data.first + '" data-second-value="' +
          period.text.second + '"><span>' + period.text.first + '</span>، <span>' + period.text.second +
          '</span><i class="material-icons close">close</i></div>');
        }

        var today = new Date(),
            now = (today.getHours() * 60 * 60) + today.getMinutes() * 60;

        var targetPeriods = document.getElementById('target-periods');

        noUiSlider.create(targetPeriods, {
          start: [now, 2 * 60 * 60 + now],
          range: {
            'min': 0,
            'max': 60 * 60 * 24
          },
          step: 60 * 60 * 2,
          tooltips: [
            wNumb({
              decimals: 0,
              edit: function(value){
                var hours = Math.floor(value / (60 * 60)),
                    minutes = Math.floor((value % (60 * 60)) / 60),
                    meridiem = '',
                    twelveHours;

                if (hours > 12){
                  twelveHours = hours - 12;
                  meridiem = 'بعدازظهر';
                }else{
                  twelveHours = (hours != 0)? hours: 12;
                  meridiem = 'قبل‌ازظهر';
                }

                twelveHours = (twelveHours.toString().length > 1)? twelveHours: '0' + twelveHours;
                minutes = (minutes.toString().length > 1)? minutes: '0' + minutes;

                return '<span data-value="' + value + '">' + _convertDigitsToPersian(twelveHours + ':' + minutes) + ' ' + meridiem + '</span>';
              }
            }),
            wNumb({
              decimals: 0,
              edit: function(value){
                var hours = Math.floor(value / (60 * 60)),
                    minutes = Math.floor((value % (60 * 60)) / 60),
                    meridiem = '',
                    twelveHours;

                if (hours > 12){
                  twelveHours = hours - 12;
                  meridiem = 'بعدازظهر';
                }else{
                  twelveHours = (hours != 0)? hours: 12;
                  meridiem = 'قبل‌ازظهر';
                }

                twelveHours = (twelveHours.toString().length > 1)? twelveHours: '0' + twelveHours;
                minutes = (minutes.toString().length > 1)? minutes: '0' + minutes;

                return '<span data-value="' + value + '">' + _convertDigitsToPersian(twelveHours + ':' + minutes) + ' ' + meridiem + '</span>';
              }
            })
          ],
          connect: [false, true, false]/*,
          pips: {
            mode: 'values',
            stepped: true,
            values: [2, 10, 25, 50],
            density: 6,
            format: wNumb({
              decimals: 0,
              postfix: 'K'
            })
          }*/
        });

        var overlayID = 0,
            firstPeriod,
            secondPeriod,
            periods = {};

        $('#period-service-details #period-modal').on('click', function(e){
          if ($(e.target).hasClass('modal-set')){
            $(this).closeModal({
              complete: function(){
                $('#period-service-details hashtags .chips').append('<div class="chip" data-first-value="' +
                periods.first.value + '" data-second-value="' +
                periods.second.value + '"><span>' + periods.first.text + '</span>, <span>' + periods.second.text +
                '</span><i class="material-icons close">close</i></div>');

                targetPeriods.noUiSlider.set([now, 2 * 60 * 60 + now]);
                $('#set-period').fadeOut(300);
              }
            });
          }
        });

        $(document).on('click', function(e){
          if ($(e.target).hasClass('lean-overlay')){
            targetPeriods.noUiSlider.set([now, 2 * 60 * 60 + now]);
            $('#set-period').fadeOut(300);
          }
        });

        $(document).on('keyup.leanModalmaterialize-lean-overlay-' + overlayID, function(e){
          if (e.keyCode === 27){
            targetPeriods.noUiSlider.set([now, 2 * 60 * 60 + now]);
            $('#set-period').fadeOut(300);
          }
        });

        targetPeriods.noUiSlider.on('change', function(){
          if ($('#set-period').css('display') == 'none'){
            $('#set-period').fadeIn(300);
          }
        });

        $('#set-period a').on('click', function(){
          firstPeriod = $('#target-periods').find('.noUi-origin').eq(0).find('.noUi-tooltip span'),
          secondPeriod = $('#target-periods').find('.noUi-origin').eq(1).find('.noUi-tooltip span'),
          periods = {
            first: {
              value: firstPeriod.data('value'),
              text: firstPeriod.html()
            },
            second: {
              value: secondPeriod.data('value'),
              text: secondPeriod.html()
            }
          };

          if (periods.second.value - periods.first.value <= 2 * 60 * 60){
            $('#period-service-details #period-modal').find('.modal-content p').html(
              'بازه زمانی انتخابی بین ' +
              '<span>' + periods.first.text + '</span> و ' +
              '<span>' + periods.second.text + '</span> می‌باشد.'
            );

            $('#period-service-details #period-modal').openModal({
              ready: function(){
                overlayID++;
              }
            });
          }else{
            Materialize.toast('شما اجازه انتخاب بازه زمانی بیش از ۲ ساعت را ندارید!', 4000);
          }
        });
      }
}(jQuery));

//============================================================
//
// Copyright (C) 2014 Matthew Wagerfield
//
// Twitter: https://twitter.com/wagerfield
//
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the
// Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute,
// sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do
// so, subject to the following conditions:
//
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions
// of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY
// OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
// LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
// EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
// FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
// AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
// OR OTHER DEALINGS IN THE SOFTWARE.
//
//============================================================

/**
 * Defines the Flat Surface Shader namespace for all the awesomeness to exist upon.
 * @author Matthew Wagerfield
 */
FSS = {
  FRONT  : 0,
  BACK   : 1,
  DOUBLE : 2,
  SVGNS  : 'http://www.w3.org/2000/svg'
};

/**
 * @class Array
 * @author Matthew Wagerfield
 */
FSS.Array = typeof Float32Array === 'function' ? Float32Array : Array;

/**
 * @class Utils
 * @author Matthew Wagerfield
 */
FSS.Utils = {
  isNumber: function(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
};

/**
 * Request Animation Frame Polyfill.
 * @author Paul Irish
 * @see https://gist.github.com/paulirish/1579671
 */
(function() {

  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame  = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currentTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currentTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currentTime + timeToCall);
      }, timeToCall);
      lastTime = currentTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }

}());

/**
 * @object Math Augmentation
 * @author Matthew Wagerfield
 */
Math.PIM2 = Math.PI*2;
Math.PID2 = Math.PI/2;
Math.randomInRange = function(min, max) {
  return min + (max - min) * Math.random();
};
Math.clamp = function(value, min, max) {
  value = Math.max(value, min);
  value = Math.min(value, max);
  return value;
};

/**
 * @object Vector3
 * @author Matthew Wagerfield
 */
FSS.Vector3 = {
  create: function(x, y, z) {
    var vector = new FSS.Array(3);
    this.set(vector, x, y, z);
    return vector;
  },
  clone: function(a) {
    var vector = this.create();
    this.copy(vector, a);
    return vector;
  },
  set: function(target, x, y, z) {
    target[0] = x || 0;
    target[1] = y || 0;
    target[2] = z || 0;
    return this;
  },
  setX: function(target, x) {
    target[0] = x || 0;
    return this;
  },
  setY: function(target, y) {
    target[1] = y || 0;
    return this;
  },
  setZ: function(target, z) {
    target[2] = z || 0;
    return this;
  },
  copy: function(target, a) {
    target[0] = a[0];
    target[1] = a[1];
    target[2] = a[2];
    return this;
  },
  add: function(target, a) {
    target[0] += a[0];
    target[1] += a[1];
    target[2] += a[2];
    return this;
  },
  addVectors: function(target, a, b) {
    target[0] = a[0] + b[0];
    target[1] = a[1] + b[1];
    target[2] = a[2] + b[2];
    return this;
  },
  addScalar: function(target, s) {
    target[0] += s;
    target[1] += s;
    target[2] += s;
    return this;
  },
  subtract: function(target, a) {
    target[0] -= a[0];
    target[1] -= a[1];
    target[2] -= a[2];
    return this;
  },
  subtractVectors: function(target, a, b) {
    target[0] = a[0] - b[0];
    target[1] = a[1] - b[1];
    target[2] = a[2] - b[2];
    return this;
  },
  subtractScalar: function(target, s) {
    target[0] -= s;
    target[1] -= s;
    target[2] -= s;
    return this;
  },
  multiply: function(target, a) {
    target[0] *= a[0];
    target[1] *= a[1];
    target[2] *= a[2];
    return this;
  },
  multiplyVectors: function(target, a, b) {
    target[0] = a[0] * b[0];
    target[1] = a[1] * b[1];
    target[2] = a[2] * b[2];
    return this;
  },
  multiplyScalar: function(target, s) {
    target[0] *= s;
    target[1] *= s;
    target[2] *= s;
    return this;
  },
  divide: function(target, a) {
    target[0] /= a[0];
    target[1] /= a[1];
    target[2] /= a[2];
    return this;
  },
  divideVectors: function(target, a, b) {
    target[0] = a[0] / b[0];
    target[1] = a[1] / b[1];
    target[2] = a[2] / b[2];
    return this;
  },
  divideScalar: function(target, s) {
    if (s !== 0) {
      target[0] /= s;
      target[1] /= s;
      target[2] /= s;
    } else {
      target[0] = 0;
      target[1] = 0;
      target[2] = 0;
    }
    return this;
  },
  cross: function(target, a) {
    var x = target[0];
    var y = target[1];
    var z = target[2];
    target[0] = y*a[2] - z*a[1];
    target[1] = z*a[0] - x*a[2];
    target[2] = x*a[1] - y*a[0];
    return this;
  },
  crossVectors: function(target, a, b) {
    target[0] = a[1]*b[2] - a[2]*b[1];
    target[1] = a[2]*b[0] - a[0]*b[2];
    target[2] = a[0]*b[1] - a[1]*b[0];
    return this;
  },
  min: function(target, value) {
    if (target[0] < value) { target[0] = value; }
    if (target[1] < value) { target[1] = value; }
    if (target[2] < value) { target[2] = value; }
    return this;
  },
  max: function(target, value) {
    if (target[0] > value) { target[0] = value; }
    if (target[1] > value) { target[1] = value; }
    if (target[2] > value) { target[2] = value; }
    return this;
  },
  clamp: function(target, min, max) {
    this.min(target, min);
    this.max(target, max);
    return this;
  },
  limit: function(target, min, max) {
    var length = this.length(target);
    if (min !== null && length < min) {
      this.setLength(target, min);
    } else if (max !== null && length > max) {
      this.setLength(target, max);
    }
    return this;
  },
  dot: function(a, b) {
    return a[0]*b[0] + a[1]*b[1] + a[2]*b[2];
  },
  normalise: function(target) {
    return this.divideScalar(target, this.length(target));
  },
  negate: function(target) {
    return this.multiplyScalar(target, -1);
  },
  distanceSquared: function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return dx*dx + dy*dy + dz*dz;
  },
  distance: function(a, b) {
    return Math.sqrt(this.distanceSquared(a, b));
  },
  lengthSquared: function(a) {
    return a[0]*a[0] + a[1]*a[1] + a[2]*a[2];
  },
  length: function(a) {
    return Math.sqrt(this.lengthSquared(a));
  },
  setLength: function(target, l) {
    var length = this.length(target);
    if (length !== 0 && l !== length) {
      this.multiplyScalar(target, l / length);
    }
    return this;
  }
};

/**
 * @object Vector4
 * @author Matthew Wagerfield
 */
FSS.Vector4 = {
  create: function(x, y, z, w) {
    var vector = new FSS.Array(4);
    this.set(vector, x, y, z);
    return vector;
  },
  set: function(target, x, y, z, w) {
    target[0] = x || 0;
    target[1] = y || 0;
    target[2] = z || 0;
    target[3] = w || 0;
    return this;
  },
  setX: function(target, x) {
    target[0] = x || 0;
    return this;
  },
  setY: function(target, y) {
    target[1] = y || 0;
    return this;
  },
  setZ: function(target, z) {
    target[2] = z || 0;
    return this;
  },
  setW: function(target, w) {
    target[3] = w || 0;
    return this;
  },
  add: function(target, a) {
    target[0] += a[0];
    target[1] += a[1];
    target[2] += a[2];
    target[3] += a[3];
    return this;
  },
  multiplyVectors: function(target, a, b) {
    target[0] = a[0] * b[0];
    target[1] = a[1] * b[1];
    target[2] = a[2] * b[2];
    target[3] = a[3] * b[3];
    return this;
  },
  multiplyScalar: function(target, s) {
    target[0] *= s;
    target[1] *= s;
    target[2] *= s;
    target[3] *= s;
    return this;
  },
  min: function(target, value) {
    if (target[0] < value) { target[0] = value; }
    if (target[1] < value) { target[1] = value; }
    if (target[2] < value) { target[2] = value; }
    if (target[3] < value) { target[3] = value; }
    return this;
  },
  max: function(target, value) {
    if (target[0] > value) { target[0] = value; }
    if (target[1] > value) { target[1] = value; }
    if (target[2] > value) { target[2] = value; }
    if (target[3] > value) { target[3] = value; }
    return this;
  },
  clamp: function(target, min, max) {
    this.min(target, min);
    this.max(target, max);
    return this;
  }
};

/**
 * @class Color
 * @author Matthew Wagerfield
 */
FSS.Color = function(hex, opacity) {
  this.rgba = FSS.Vector4.create();
  this.hex = hex || '#000000';
  this.opacity = FSS.Utils.isNumber(opacity) ? opacity : 1;
  this.set(this.hex, this.opacity);
};

FSS.Color.prototype = {
  set: function(hex, opacity) {
    hex = hex.replace('#', '');
    var size = hex.length / 3;
    this.rgba[0] = parseInt(hex.substring(size*0, size*1), 16) / 255;
    this.rgba[1] = parseInt(hex.substring(size*1, size*2), 16) / 255;
    this.rgba[2] = parseInt(hex.substring(size*2, size*3), 16) / 255;
    this.rgba[3] = FSS.Utils.isNumber(opacity) ? opacity : this.rgba[3];
    return this;
  },
  hexify: function(channel) {
    var hex = Math.ceil(channel*255).toString(16);
    if (hex.length === 1) { hex = '0' + hex; }
    return hex;
  },
  format: function() {
    var r = this.hexify(this.rgba[0]);
    var g = this.hexify(this.rgba[1]);
    var b = this.hexify(this.rgba[2]);
    this.hex = '#' + r + g + b;
    return this.hex;
  }
};

/**
 * @class Object
 * @author Matthew Wagerfield
 */
FSS.Object = function() {
  this.position = FSS.Vector3.create();
};

FSS.Object.prototype = {
  setPosition: function(x, y, z) {
    FSS.Vector3.set(this.position, x, y, z);
    return this;
  }
};

/**
 * @class Light
 * @author Matthew Wagerfield
 */
FSS.Light = function(ambient, diffuse) {
  FSS.Object.call(this);
  this.ambient = new FSS.Color(ambient || '#FFFFFF');
  this.diffuse = new FSS.Color(diffuse || '#FFFFFF');
  this.ray = FSS.Vector3.create();
};

FSS.Light.prototype = Object.create(FSS.Object.prototype);

/**
 * @class Vertex
 * @author Matthew Wagerfield
 */
FSS.Vertex = function(x, y, z) {
  this.position = FSS.Vector3.create(x, y, z);
};

FSS.Vertex.prototype = {
  setPosition: function(x, y, z) {
    FSS.Vector3.set(this.position, x, y, z);
    return this;
  }
};

/**
 * @class Triangle
 * @author Matthew Wagerfield
 */
FSS.Triangle = function(a, b, c) {
  this.a = a || new FSS.Vertex();
  this.b = b || new FSS.Vertex();
  this.c = c || new FSS.Vertex();
  this.vertices = [this.a, this.b, this.c];
  this.u = FSS.Vector3.create();
  this.v = FSS.Vector3.create();
  this.centroid = FSS.Vector3.create();
  this.normal = FSS.Vector3.create();
  this.color = new FSS.Color();
  this.polygon = document.createElementNS(FSS.SVGNS, 'polygon');
  this.polygon.setAttributeNS(null, 'stroke-linejoin', 'round');
  this.polygon.setAttributeNS(null, 'stroke-miterlimit', '1');
  this.polygon.setAttributeNS(null, 'stroke-width', '1');
  this.computeCentroid();
  this.computeNormal();
};

FSS.Triangle.prototype = {
  computeCentroid: function() {
    this.centroid[0] = this.a.position[0] + this.b.position[0] + this.c.position[0];
    this.centroid[1] = this.a.position[1] + this.b.position[1] + this.c.position[1];
    this.centroid[2] = this.a.position[2] + this.b.position[2] + this.c.position[2];
    FSS.Vector3.divideScalar(this.centroid, 3);
    return this;
  },
  computeNormal: function() {
    FSS.Vector3.subtractVectors(this.u, this.b.position, this.a.position);
    FSS.Vector3.subtractVectors(this.v, this.c.position, this.a.position);
    FSS.Vector3.crossVectors(this.normal, this.u, this.v);
    FSS.Vector3.normalise(this.normal);
    return this;
  }
};

/**
 * @class Geometry
 * @author Matthew Wagerfield
 */
FSS.Geometry = function() {
  this.vertices = [];
  this.triangles = [];
  this.dirty = false;
};

FSS.Geometry.prototype = {
  update: function() {
    if (this.dirty) {
      var t,triangle;
      for (t = this.triangles.length - 1; t >= 0; t--) {
        triangle = this.triangles[t];
        triangle.computeCentroid();
        triangle.computeNormal();
      }
      this.dirty = false;
    }
    return this;
  }
};

/**
 * @class Plane
 * @author Matthew Wagerfield
 */
FSS.Plane = function(width, height, segments, slices) {
  FSS.Geometry.call(this);
  this.width = width || 100;
  this.height = height || 100;
  this.segments = segments || 4;
  this.slices = slices || 4;
  this.segmentWidth = this.width / this.segments;
  this.sliceHeight = this.height / this.slices;

  // Cache Variables
  var x, y, v0, v1, v2, v3,
      vertex, triangle, vertices = [],
      offsetX = this.width * -0.5,
      offsetY = this.height * 0.5;

  // Add Vertices
  for (x = 0; x <= this.segments; x++) {
    vertices.push([]);
    for (y = 0; y <= this.slices; y++) {
      vertex = new FSS.Vertex(offsetX + x*this.segmentWidth, offsetY - y*this.sliceHeight);
      vertices[x].push(vertex);
      this.vertices.push(vertex);
    }
  }

  // Add Triangles
  for (x = 0; x < this.segments; x++) {
    for (y = 0; y < this.slices; y++) {
      v0 = vertices[x+0][y+0];
      v1 = vertices[x+0][y+1];
      v2 = vertices[x+1][y+0];
      v3 = vertices[x+1][y+1];
      t0 = new FSS.Triangle(v0, v1, v2);
      t1 = new FSS.Triangle(v2, v1, v3);
      this.triangles.push(t0, t1);
    }
  }
};

FSS.Plane.prototype = Object.create(FSS.Geometry.prototype);

/**
 * @class Material
 * @author Matthew Wagerfield
 */
FSS.Material = function(ambient, diffuse) {
  this.ambient = new FSS.Color(ambient || '#444444');
  this.diffuse = new FSS.Color(diffuse || '#FFFFFF');
  this.slave = new FSS.Color();
};

/**
 * @class Mesh
 * @author Matthew Wagerfield
 */
FSS.Mesh = function(geometry, material) {
  FSS.Object.call(this);
  this.geometry = geometry || new FSS.Geometry();
  this.material = material || new FSS.Material();
  this.side = FSS.FRONT;
  this.visible = true;
};

FSS.Mesh.prototype = Object.create(FSS.Object.prototype);

FSS.Mesh.prototype.update = function(lights, calculate) {
  var t,triangle, l,light, illuminance;

  // Update Geometry
  this.geometry.update();

  // Calculate the triangle colors
  if (calculate) {

    // Iterate through Triangles
    for (t = this.geometry.triangles.length - 1; t >= 0; t--) {
      triangle = this.geometry.triangles[t];

      // Reset Triangle Color
      FSS.Vector4.set(triangle.color.rgba);

      // Iterate through Lights
      for (l = lights.length - 1; l >= 0; l--) {
        light = lights[l];

        // Calculate Illuminance
        FSS.Vector3.subtractVectors(light.ray, light.position, triangle.centroid);
        FSS.Vector3.normalise(light.ray);
        illuminance = FSS.Vector3.dot(triangle.normal, light.ray);
        if (this.side === FSS.FRONT) {
          illuminance = Math.max(illuminance, 0);
        } else if (this.side === FSS.BACK) {
          illuminance = Math.abs(Math.min(illuminance, 0));
        } else if (this.side === FSS.DOUBLE) {
          illuminance = Math.max(Math.abs(illuminance), 0);
        }

        // Calculate Ambient Light
        FSS.Vector4.multiplyVectors(this.material.slave.rgba, this.material.ambient.rgba, light.ambient.rgba);
        FSS.Vector4.add(triangle.color.rgba, this.material.slave.rgba);

        // Calculate Diffuse Light
        FSS.Vector4.multiplyVectors(this.material.slave.rgba, this.material.diffuse.rgba, light.diffuse.rgba);
        FSS.Vector4.multiplyScalar(this.material.slave.rgba, illuminance);
        FSS.Vector4.add(triangle.color.rgba, this.material.slave.rgba);
      }

      // Clamp & Format Color
      FSS.Vector4.clamp(triangle.color.rgba, 0, 1);
    }
  }
  return this;
};

/**
 * @class Scene
 * @author Matthew Wagerfield
 */
FSS.Scene = function() {
  this.meshes = [];
  this.lights = [];
};

FSS.Scene.prototype = {
  add: function(object) {
    if (object instanceof FSS.Mesh && !~this.meshes.indexOf(object)) {
      this.meshes.push(object);
    } else if (object instanceof FSS.Light && !~this.lights.indexOf(object)) {
      this.lights.push(object);
    }
    return this;
  },
  remove: function(object) {
    if (object instanceof FSS.Mesh && ~this.meshes.indexOf(object)) {
      this.meshes.splice(this.meshes.indexOf(object), 1);
    } else if (object instanceof FSS.Light && ~this.lights.indexOf(object)) {
      this.lights.splice(this.lights.indexOf(object), 1);
    }
    return this;
  }
};

/**
 * @class Renderer
 * @author Matthew Wagerfield
 */
FSS.Renderer = function() {
  this.width = 0;
  this.height = 0;
  this.halfWidth = 0;
  this.halfHeight = 0;
};

FSS.Renderer.prototype = {
  setSize: function(width, height) {
    if (this.width === width && this.height === height) return;
    this.width = width;
    this.height = height;
    this.halfWidth = this.width * 0.5;
    this.halfHeight = this.height * 0.5;
    return this;
  },
  clear: function() {
    return this;
  },
  render: function(scene) {
    return this;
  }
};

/**
 * @class Canvas Renderer
 * @author Matthew Wagerfield
 */
FSS.CanvasRenderer = function() {
  FSS.Renderer.call(this);
  this.element = document.createElement('canvas');
  this.element.style.display = 'block';
  this.context = this.element.getContext('2d');
  this.setSize(this.element.width, this.element.height);
};

FSS.CanvasRenderer.prototype = Object.create(FSS.Renderer.prototype);

FSS.CanvasRenderer.prototype.setSize = function(width, height) {
  FSS.Renderer.prototype.setSize.call(this, width, height);
  this.element.width = width;
  this.element.height = height;
  this.context.setTransform(1, 0, 0, -1, this.halfWidth, this.halfHeight);
  return this;
};

FSS.CanvasRenderer.prototype.clear = function() {
  FSS.Renderer.prototype.clear.call(this);
  this.context.clearRect(-this.halfWidth, -this.halfHeight, this.width, this.height);
  return this;
};

FSS.CanvasRenderer.prototype.render = function(scene) {
  FSS.Renderer.prototype.render.call(this, scene);
  var m,mesh, t,triangle, color;

  // Clear Context
  this.clear();

  // Configure Context
  this.context.lineJoin = 'round';
  this.context.lineWidth = 1;

  // Update Meshes
  for (m = scene.meshes.length - 1; m >= 0; m--) {
    mesh = scene.meshes[m];
    if (mesh.visible) {
      mesh.update(scene.lights, true);

      // Render Triangles
      for (t = mesh.geometry.triangles.length - 1; t >= 0; t--) {
        triangle = mesh.geometry.triangles[t];
        color = triangle.color.format();
        this.context.beginPath();
        this.context.moveTo(triangle.a.position[0], triangle.a.position[1]);
        this.context.lineTo(triangle.b.position[0], triangle.b.position[1]);
        this.context.lineTo(triangle.c.position[0], triangle.c.position[1]);
        this.context.closePath();
        this.context.strokeStyle = color;
        this.context.fillStyle = color;
        this.context.stroke();
        this.context.fill();
      }
    }
  }
  return this;
};

/**
 * @class WebGL Renderer
 * @author Matthew Wagerfield
 */
FSS.WebGLRenderer = function() {
  FSS.Renderer.call(this);
  this.element = document.createElement('canvas');
  this.element.style.display = 'block';

  // Set initial vertex and light count
  this.vertices = null;
  this.lights = null;

  // Create parameters object
  var parameters = {
    preserveDrawingBuffer: false,
    premultipliedAlpha: true,
    antialias: true,
    stencil: true,
    alpha: true
  };

  // Create and configure the gl context
  this.gl = this.getContext(this.element, parameters);

  // Set the internal support flag
  this.unsupported = !this.gl;

  // Setup renderer
  if (this.unsupported) {
    return 'WebGL is not supported by your browser.';
  } else {
    this.gl.clearColor(0.0, 0.0, 0.0, 0.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.setSize(this.element.width, this.element.height);
  }
};

FSS.WebGLRenderer.prototype = Object.create(FSS.Renderer.prototype);

FSS.WebGLRenderer.prototype.getContext = function(canvas, parameters) {
  var context = false;
  try {
    if (!(context = canvas.getContext('experimental-webgl', parameters))) {
      throw 'Error creating WebGL context.';
    }
  } catch (error) {
    console.error(error);
  }
  return context;
};

FSS.WebGLRenderer.prototype.setSize = function(width, height) {
  FSS.Renderer.prototype.setSize.call(this, width, height);
  if (this.unsupported) return;

  // Set the size of the canvas element
  this.element.width = width;
  this.element.height = height;

  // Set the size of the gl viewport
  this.gl.viewport(0, 0, width, height);
  return this;
};

FSS.WebGLRenderer.prototype.clear = function() {
  FSS.Renderer.prototype.clear.call(this);
  if (this.unsupported) return;
  this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
  return this;
};

FSS.WebGLRenderer.prototype.render = function(scene) {
  FSS.Renderer.prototype.render.call(this, scene);
  if (this.unsupported) return;
  var m,mesh, t,tl,triangle, l,light,
      attribute, uniform, buffer, data, location,
      update = false, lights = scene.lights.length,
      index, v,vl,vetex,vertices = 0;

  // Clear context
  this.clear();

  // Build the shader program
  if (this.lights !== lights) {
    this.lights = lights;
    if (this.lights > 0) {
      this.buildProgram(lights);
    } else {
      return;
    }
  }

  // Update program
  if (!!this.program) {

    // Increment vertex counter
    for (m = scene.meshes.length - 1; m >= 0; m--) {
      mesh = scene.meshes[m];
      if (mesh.geometry.dirty) update = true;
      mesh.update(scene.lights, false);
      vertices += mesh.geometry.triangles.length*3;
    }

    // Compare vertex counter
    if (update || this.vertices !== vertices) {
      this.vertices = vertices;

      // Build buffers
      for (attribute in this.program.attributes) {
        buffer = this.program.attributes[attribute];
        buffer.data = new FSS.Array(vertices*buffer.size);

        // Reset vertex index
        index = 0;

        // Update attribute buffer data
        for (m = scene.meshes.length - 1; m >= 0; m--) {
          mesh = scene.meshes[m];

          for (t = 0, tl = mesh.geometry.triangles.length; t < tl; t++) {
            triangle = mesh.geometry.triangles[t];

            for (v = 0, vl = triangle.vertices.length; v < vl; v++) {
              vertex = triangle.vertices[v];
              switch (attribute) {
                case 'side':
                  this.setBufferData(index, buffer, mesh.side);
                  break;
                case 'position':
                  this.setBufferData(index, buffer, vertex.position);
                  break;
                case 'centroid':
                  this.setBufferData(index, buffer, triangle.centroid);
                  break;
                case 'normal':
                  this.setBufferData(index, buffer, triangle.normal);
                  break;
                case 'ambient':
                  this.setBufferData(index, buffer, mesh.material.ambient.rgba);
                  break;
                case 'diffuse':
                  this.setBufferData(index, buffer, mesh.material.diffuse.rgba);
                  break;
              }
              index++;
            }
          }
        }

        // Upload attribute buffer data
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer.buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, buffer.data, this.gl.DYNAMIC_DRAW);
        this.gl.enableVertexAttribArray(buffer.location);
        this.gl.vertexAttribPointer(buffer.location, buffer.size, this.gl.FLOAT, false, 0, 0);
      }
    }

    // Build uniform buffers
    this.setBufferData(0, this.program.uniforms.resolution, [this.width, this.height, this.width]);
    for (l = lights-1; l >= 0; l--) {
      light = scene.lights[l];
      this.setBufferData(l, this.program.uniforms.lightPosition, light.position);
      this.setBufferData(l, this.program.uniforms.lightAmbient, light.ambient.rgba);
      this.setBufferData(l, this.program.uniforms.lightDiffuse, light.diffuse.rgba);
    }

    // Update uniforms
    for (uniform in this.program.uniforms) {
      buffer = this.program.uniforms[uniform];
      location = buffer.location;
      data = buffer.data;
      switch (buffer.structure) {
        case '3f':
          this.gl.uniform3f(location, data[0], data[1], data[2]);
          break;
        case '3fv':
          this.gl.uniform3fv(location, data);
          break;
        case '4fv':
          this.gl.uniform4fv(location, data);
          break;
      }
    }
  }

  // Draw those lovely triangles
  this.gl.drawArrays(this.gl.TRIANGLES, 0, this.vertices);
  return this;
};

FSS.WebGLRenderer.prototype.setBufferData = function(index, buffer, value) {
  if (FSS.Utils.isNumber(value)) {
    buffer.data[index*buffer.size] = value;
  } else {
    for (var i = value.length - 1; i >= 0; i--) {
      buffer.data[index*buffer.size+i] = value[i];
    }
  }
};

/**
 * Concepts taken from three.js WebGLRenderer
 * @see https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGLRenderer.js
 */
FSS.WebGLRenderer.prototype.buildProgram = function(lights) {
  if (this.unsupported) return;

  // Create shader source
  var vs = FSS.WebGLRenderer.VS(lights);
  var fs = FSS.WebGLRenderer.FS(lights);

  // Derive the shader fingerprint
  var code = vs + fs;

  // Check if the program has already been compiled
  if (!!this.program && this.program.code === code) return;

  // Create the program and shaders
  var program = this.gl.createProgram();
  var vertexShader = this.buildShader(this.gl.VERTEX_SHADER, vs);
  var fragmentShader = this.buildShader(this.gl.FRAGMENT_SHADER, fs);

  // Attach an link the shader
  this.gl.attachShader(program, vertexShader);
  this.gl.attachShader(program, fragmentShader);
  this.gl.linkProgram(program);

  // Add error handling
  if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
    var error = this.gl.getError();
    var status = this.gl.getProgramParameter(program, this.gl.VALIDATE_STATUS);
    console.error('Could not initialise shader.\nVALIDATE_STATUS: '+status+'\nERROR: '+error);
    return null;
  }

  // Delete the shader
  this.gl.deleteShader(fragmentShader);
  this.gl.deleteShader(vertexShader);

  // Set the program code
  program.code = code;

  // Add the program attributes
  program.attributes = {
    side:     this.buildBuffer(program, 'attribute', 'aSide',     1, 'f' ),
    position: this.buildBuffer(program, 'attribute', 'aPosition', 3, 'v3'),
    centroid: this.buildBuffer(program, 'attribute', 'aCentroid', 3, 'v3'),
    normal:   this.buildBuffer(program, 'attribute', 'aNormal',   3, 'v3'),
    ambient:  this.buildBuffer(program, 'attribute', 'aAmbient',  4, 'v4'),
    diffuse:  this.buildBuffer(program, 'attribute', 'aDiffuse',  4, 'v4')
  };

  // Add the program uniforms
  program.uniforms = {
    resolution:    this.buildBuffer(program, 'uniform', 'uResolution',    3, '3f',  1     ),
    lightPosition: this.buildBuffer(program, 'uniform', 'uLightPosition', 3, '3fv', lights),
    lightAmbient:  this.buildBuffer(program, 'uniform', 'uLightAmbient',  4, '4fv', lights),
    lightDiffuse:  this.buildBuffer(program, 'uniform', 'uLightDiffuse',  4, '4fv', lights)
  };

  // Set the renderer program
  this.program = program;

  // Enable program
  this.gl.useProgram(this.program);

  // Return the program
  return program;
};

FSS.WebGLRenderer.prototype.buildShader = function(type, source) {
  if (this.unsupported) return;

  // Create and compile shader
  var shader = this.gl.createShader(type);
  this.gl.shaderSource(shader, source);
  this.gl.compileShader(shader);

  // Add error handling
  if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
    console.error(this.gl.getShaderInfoLog(shader));
    return null;
  }

  // Return the shader
  return shader;
};

FSS.WebGLRenderer.prototype.buildBuffer = function(program, type, identifier, size, structure, count) {
  var buffer = {buffer:this.gl.createBuffer(), size:size, structure:structure, data:null};

  // Set the location
  switch (type) {
    case 'attribute':
      buffer.location = this.gl.getAttribLocation(program, identifier);
      break;
    case 'uniform':
      buffer.location = this.gl.getUniformLocation(program, identifier);
      break;
  }

  // Create the buffer if count is provided
  if (!!count) {
    buffer.data = new FSS.Array(count*size);
  }

  // Return the buffer
  return buffer;
};

FSS.WebGLRenderer.VS = function(lights) {
  var shader = [

  // Precision
  'precision mediump float;',

  // Lights
  '#define LIGHTS ' + lights,

  // Attributes
  'attribute float aSide;',
  'attribute vec3 aPosition;',
  'attribute vec3 aCentroid;',
  'attribute vec3 aNormal;',
  'attribute vec4 aAmbient;',
  'attribute vec4 aDiffuse;',

  // Uniforms
  'uniform vec3 uResolution;',
  'uniform vec3 uLightPosition[LIGHTS];',
  'uniform vec4 uLightAmbient[LIGHTS];',
  'uniform vec4 uLightDiffuse[LIGHTS];',

  // Varyings
  'varying vec4 vColor;',

  // Main
  'void main() {',

    // Create color
    'vColor = vec4(0.0);',

    // Calculate the vertex position
    'vec3 position = aPosition / uResolution * 2.0;',

    // Iterate through lights
    'for (int i = 0; i < LIGHTS; i++) {',
      'vec3 lightPosition = uLightPosition[i];',
      'vec4 lightAmbient = uLightAmbient[i];',
      'vec4 lightDiffuse = uLightDiffuse[i];',

      // Calculate illuminance
      'vec3 ray = normalize(lightPosition - aCentroid);',
      'float illuminance = dot(aNormal, ray);',
      'if (aSide == 0.0) {',
        'illuminance = max(illuminance, 0.0);',
      '} else if (aSide == 1.0) {',
        'illuminance = abs(min(illuminance, 0.0));',
      '} else if (aSide == 2.0) {',
        'illuminance = max(abs(illuminance), 0.0);',
      '}',

      // Calculate ambient light
      'vColor += aAmbient * lightAmbient;',

      // Calculate diffuse light
      'vColor += aDiffuse * lightDiffuse * illuminance;',
    '}',

    // Clamp color
    'vColor = clamp(vColor, 0.0, 1.0);',

    // Set gl_Position
    'gl_Position = vec4(position, 1.0);',

  '}'

  // Return the shader
  ].join('\n');
  return shader;
};

FSS.WebGLRenderer.FS = function(lights) {
  var shader = [

  // Precision
  'precision mediump float;',

  // Varyings
  'varying vec4 vColor;',

  // Main
  'void main() {',

    // Set gl_FragColor
    'gl_FragColor = vColor;',

  '}'

  // Return the shader
  ].join('\n');
  return shader;
};

/**
 * @class SVG Renderer
 * @author Matthew Wagerfield
 */
FSS.SVGRenderer = function() {
  FSS.Renderer.call(this);
  this.element = document.createElementNS(FSS.SVGNS, 'svg');
  this.element.setAttribute('xmlns', FSS.SVGNS);
  this.element.setAttribute('version', '1.1');
  this.element.style.display = 'block';
  this.setSize(300, 150);
};

FSS.SVGRenderer.prototype = Object.create(FSS.Renderer.prototype);

FSS.SVGRenderer.prototype.setSize = function(width, height) {
  FSS.Renderer.prototype.setSize.call(this, width, height);
  this.element.setAttribute('width', width);
  this.element.setAttribute('height', height);
  return this;
};

FSS.SVGRenderer.prototype.clear = function() {
  FSS.Renderer.prototype.clear.call(this);
  for (var i = this.element.childNodes.length - 1; i >= 0; i--) {
    this.element.removeChild(this.element.childNodes[i]);
  }
  return this;
};

FSS.SVGRenderer.prototype.render = function(scene) {
  FSS.Renderer.prototype.render.call(this, scene);
  var m,mesh, t,triangle, points, style;

  // Update Meshes
  for (m = scene.meshes.length - 1; m >= 0; m--) {
    mesh = scene.meshes[m];
    if (mesh.visible) {
      mesh.update(scene.lights, true);

      // Render Triangles
      for (t = mesh.geometry.triangles.length - 1; t >= 0; t--) {
        triangle = mesh.geometry.triangles[t];
        if (triangle.polygon.parentNode !== this.element) {
          this.element.appendChild(triangle.polygon);
        }
        points  = this.formatPoint(triangle.a)+' ';
        points += this.formatPoint(triangle.b)+' ';
        points += this.formatPoint(triangle.c);
        style = this.formatStyle(triangle.color.format());
        triangle.polygon.setAttributeNS(null, 'points', points);
        triangle.polygon.setAttributeNS(null, 'style', style);
      }
    }
  }
  return this;
};

FSS.SVGRenderer.prototype.formatPoint = function(vertex) {
  return (this.halfWidth+vertex.position[0])+','+(this.halfHeight-vertex.position[1]);
};

FSS.SVGRenderer.prototype.formatStyle = function(color) {
  var style = 'fill:'+color+';';
  style += 'stroke:'+color+';';
  return style;
};

(function () {
    //------------------------------
    // Mesh Properties
    //------------------------------
    var MESH = {
        width: 1.2,
        height: 1.2,
        depth: 10,
        segments: 16,
        slices: 8,
        xRange: 0.8,
        yRange: 0.1,
        zRange: 1.0,
        ambient: '#555555',
        diffuse: '#FFFFFF',
        speed: 0.0003
    };

    //------------------------------
    // Light Properties
    //------------------------------
    var LIGHT = {
        count: 2,
        xyScalar: 1,
        zOffset: 300,
        ambient: '#530f82',
        diffuse: '#5b02ff',
        speed: 0.001,
        gravity: 1200,
        dampening: 0.95,
        minLimit: 10,
        maxLimit: null,
        minDistance: 20,
        maxDistance: 400,
        autopilot: true,
        draw: true,
        bounds: FSS.Vector3.create(),
        step: FSS.Vector3.create(
            Math.randomInRange(0.2, 1.0),
            Math.randomInRange(0.2, 1.0),
            Math.randomInRange(0.2, 1.0)
        )
    };

    //------------------------------
    // Render Properties
    //------------------------------
    var WEBGL = 'webgl';
    var CANVAS = 'canvas';
    var SVG = 'svg';
    var RENDER = {
        renderer: CANVAS
    };

    //------------------------------
    // Global Properties
    //------------------------------
    var now, start = Date.now();
    var center = FSS.Vector3.create();
    var attractor = FSS.Vector3.create();
    var container = document.getElementById('triangles');
    var output = document.getElementById('output');
    var renderer, scene, mesh, geometry, material;
    var webglRenderer, canvasRenderer, svgRenderer;
    var gui, autopilotController;

    //------------------------------
    // Methods
    //------------------------------
    function initialise() {
        createRenderer();
        createScene();
        createMesh();
        createLights();
        addEventListeners();
        resize(container.offsetWidth, container.offsetHeight);
        animate();
    }

    function createRenderer() {
        webglRenderer = new FSS.WebGLRenderer();
        canvasRenderer = new FSS.CanvasRenderer();
        svgRenderer = new FSS.SVGRenderer();
        setRenderer(RENDER.renderer);
    }

    function setRenderer(index) {
        if (renderer) {
            output.removeChild(renderer.element);
        }
        switch (index) {
            case WEBGL:
                renderer = webglRenderer;
                break;
            case CANVAS:
                renderer = canvasRenderer;
                break;
            case SVG:
                renderer = svgRenderer;
                break;
        }
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        output.appendChild(renderer.element);
    }

    function createScene() {
        scene = new FSS.Scene();
    }

    function createMesh() {
        scene.remove(mesh);
        renderer.clear();
        geometry = new FSS.Plane(MESH.width * renderer.width, MESH.height * renderer.height, MESH.segments, MESH.slices);
        material = new FSS.Material(MESH.ambient, MESH.diffuse);
        mesh = new FSS.Mesh(geometry, material);
        scene.add(mesh);

        // Augment vertices for animation
        var v, vertex;
        for (v = geometry.vertices.length - 1; v >= 0; v--) {
            vertex = geometry.vertices[v];
            vertex.anchor = FSS.Vector3.clone(vertex.position);
            vertex.step = FSS.Vector3.create(
                Math.randomInRange(0.2, 1.0),
                Math.randomInRange(0.2, 1.0),
                Math.randomInRange(0.2, 1.0)
            );
            vertex.time = Math.randomInRange(0, Math.PIM2);
        }
    }

    function createLights() {
        var l, light;
        for (l = scene.lights.length - 1; l >= 0; l--) {
            light = scene.lights[l];
            scene.remove(light);
        }
        renderer.clear();
        for (l = 0; l < LIGHT.count; l++) {
            light = new FSS.Light(LIGHT.ambient, LIGHT.diffuse);
            light.ambientHex = light.ambient.format();
            light.diffuseHex = light.diffuse.format();
            scene.add(light);

            // Augment light for animation
            light.mass = Math.randomInRange(0.5, 1);
            light.velocity = FSS.Vector3.create();
            light.acceleration = FSS.Vector3.create();
            light.force = FSS.Vector3.create();

            // Ring SVG Circle


            // Core SVG Circle

        }
    }

    function resize(width, height) {
        renderer.setSize(width, height);
        FSS.Vector3.set(center, renderer.halfWidth, renderer.halfHeight);
        createMesh();
    }

    function animate() {
        now = Date.now() - start;
        update();
        render();
        requestAnimationFrame(animate);
    }

    function update() {
        var ox, oy, oz, l, light, v, vertex, offset = MESH.depth / 2;

        // Update Bounds
        FSS.Vector3.copy(LIGHT.bounds, center);
        FSS.Vector3.multiplyScalar(LIGHT.bounds, LIGHT.xyScalar);

        // Update Attractor
        FSS.Vector3.setZ(attractor, LIGHT.zOffset);

        // Overwrite the Attractor position
        if (LIGHT.autopilot) {
            ox = Math.sin(LIGHT.step[0] * now * LIGHT.speed);
            oy = Math.cos(LIGHT.step[1] * now * LIGHT.speed);
            FSS.Vector3.set(attractor,
                LIGHT.bounds[0] * ox,
                LIGHT.bounds[1] * oy,
                LIGHT.zOffset);
        }

        // Animate Lights
        for (l = scene.lights.length - 1; l >= 0; l--) {
            light = scene.lights[l];

            // Reset the z position of the light
            FSS.Vector3.setZ(light.position, LIGHT.zOffset);

            // Calculate the force Luke!
            var D = Math.clamp(FSS.Vector3.distanceSquared(light.position, attractor), LIGHT.minDistance, LIGHT.maxDistance);
            var F = LIGHT.gravity * light.mass / D;
            FSS.Vector3.subtractVectors(light.force, attractor, light.position);
            FSS.Vector3.normalise(light.force);
            FSS.Vector3.multiplyScalar(light.force, F);

            // Update the light position
            FSS.Vector3.set(light.acceleration);
            FSS.Vector3.add(light.acceleration, light.force);
            FSS.Vector3.add(light.velocity, light.acceleration);
            FSS.Vector3.multiplyScalar(light.velocity, LIGHT.dampening);
            FSS.Vector3.limit(light.velocity, LIGHT.minLimit, LIGHT.maxLimit);
            FSS.Vector3.add(light.position, light.velocity);
        }

        // Animate Vertices
        for (v = geometry.vertices.length - 1; v >= 0; v--) {
            vertex = geometry.vertices[v];
            ox = Math.sin(vertex.time + vertex.step[0] * now * MESH.speed);
            oy = Math.cos(vertex.time + vertex.step[1] * now * MESH.speed);
            oz = Math.sin(vertex.time + vertex.step[2] * now * MESH.speed);
            FSS.Vector3.set(vertex.position,
                MESH.xRange * geometry.segmentWidth * ox,
                MESH.yRange * geometry.sliceHeight * oy,
                MESH.zRange * offset * oz - offset);
            FSS.Vector3.add(vertex.position, vertex.anchor);
        }

        // Set the Geometry to dirty
        //geometry.dirty = true;
    }

    function render() {
        renderer.render(scene);

        // Draw Lights
        if (LIGHT.draw) {
            var l, lx, ly, light;
            for (l = scene.lights.length - 1; l >= 0; l--) {
                light = scene.lights[l];
                lx = light.position[0];
                ly = light.position[1];
                switch (RENDER.renderer) {
                    case CANVAS:

                        break;
                    case SVG:
                        lx += renderer.halfWidth;
                        ly = renderer.halfHeight - ly;
                        light.core.setAttributeNS(null, 'fill', light.diffuseHex);
                        light.core.setAttributeNS(null, 'cx', lx);
                        light.core.setAttributeNS(null, 'cy', ly);
                        renderer.element.appendChild(light.core);

                        //renderer.element.appendChild(light.ring);
                        break;
                }
            }
        }
    }

    function addEventListeners() {
        window.addEventListener('resize', onWindowResize);
    }

    //------------------------------
    // Callbacks
    //------------------------------
    function onWindowResize(event) {
        resize(container.offsetWidth, container.offsetHeight);
        render();
    }

    if (container && output) {
        initialise();
    } else {
        //console.warn('No #container and #output elements found for triangles');
    }

})();
