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

/*
 Highcharts JS v5.0.12 (2017-05-24)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(K,S){"object"===typeof module&&module.exports?module.exports=K.document?S(K):S:K.Highcharts=S(K)})("undefined"!==typeof window?window:this,function(K){K=function(){var a=window,C=a.document,A=a.navigator&&a.navigator.userAgent||"",G=C&&C.createElementNS&&!!C.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,F=/(edge|msie|trident)/i.test(A)&&!window.opera,m=!G,g=/Firefox/.test(A),k=g&&4>parseInt(A.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",
version:"5.0.12",deg2rad:2*Math.PI/360,doc:C,hasBidiBug:k,hasTouch:C&&void 0!==C.documentElement.ontouchstart,isMS:F,isWebKit:/AppleWebKit/.test(A),isFirefox:g,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(A),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:G,vml:m,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){var C=[],A=a.charts,G=a.doc,F=a.win;a.error=function(m,g){m=a.isNumber(m)?"Highcharts error #"+
m+": www.highcharts.com/errors/"+m:m;if(g)throw Error(m);F.console&&console.log(m)};a.Fx=function(a,g,k){this.options=g;this.elem=a;this.prop=k};a.Fx.prototype={dSetter:function(){var a=this.paths[0],g=this.paths[1],k=[],q=this.now,v=a.length,u;if(1===q)k=this.toD;else if(v===g.length&&1>q)for(;v--;)u=parseFloat(a[v]),k[v]=isNaN(u)?a[v]:q*parseFloat(g[v]-u)+u;else k=g;this.elem.attr("d",k,null,!0)},update:function(){var a=this.elem,g=this.prop,k=this.now,q=this.options.step;if(this[g+"Setter"])this[g+
"Setter"]();else a.attr?a.element&&a.attr(g,k,null,!0):a.style[g]=k+this.unit;q&&q.call(a,k,this)},run:function(a,g,k){var m=this,v=function(a){return v.stopped?!1:m.step(a)},u;this.startTime=+new Date;this.start=a;this.end=g;this.unit=k;this.now=this.start;this.pos=0;v.elem=this.elem;v.prop=this.prop;v()&&1===C.push(v)&&(v.timerId=setInterval(function(){for(u=0;u<C.length;u++)C[u]()||C.splice(u--,1);C.length||clearInterval(v.timerId)},13))},step:function(m){var g=+new Date,k,q=this.options,v=this.elem,
u=q.complete,h=q.duration,e=q.curAnim;v.attr&&!v.element?m=!1:m||g>=h+this.startTime?(this.now=this.end,this.pos=1,this.update(),k=e[this.prop]=!0,a.objectEach(e,function(a){!0!==a&&(k=!1)}),k&&u&&u.call(v),m=!1):(this.pos=q.easing((g-this.startTime)/h),this.now=this.start+(this.end-this.start)*this.pos,this.update(),m=!0);return m},initPath:function(m,g,k){function q(a){var b,l;for(y=a.length;y--;)b="M"===a[y]||"L"===a[y],l=/[a-zA-Z]/.test(a[y+3]),b&&l&&a.splice(y+1,0,a[y+1],a[y+2],a[y+1],a[y+2])}
function v(a,b){for(;a.length<w;){a[0]=b[w-a.length];var l=a.slice(0,c);[].splice.apply(a,[0,0].concat(l));D&&(l=a.slice(a.length-c),[].splice.apply(a,[a.length,0].concat(l)),y--)}a[0]="M"}function u(a,l){for(var r=(w-a.length)/c;0<r&&r--;)b=a.slice().splice(a.length/H-c,c*H),b[0]=l[w-c-r*c],d&&(b[c-6]=b[c-2],b[c-5]=b[c-1]),[].splice.apply(a,[a.length/H,0].concat(b)),D&&r--}g=g||"";var h,e=m.startX,n=m.endX,d=-1<g.indexOf("C"),c=d?7:3,w,b,y;g=g.split(" ");k=k.slice();var D=m.isArea,H=D?2:1,l;d&&(q(g),
q(k));if(e&&n){for(y=0;y<e.length;y++)if(e[y]===n[0]){h=y;break}else if(e[0]===n[n.length-e.length+y]){h=y;l=!0;break}void 0===h&&(g=[])}g.length&&a.isNumber(h)&&(w=k.length+h*H*c,l?(v(g,k),u(k,g)):(v(k,g),u(g,k)));return[g,k]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)};a.extend=function(a,g){var m;a||(a={});for(m in g)a[m]=g[m];return a};a.merge=function(){var m,g=arguments,k,q={},v=
function(g,h){"object"!==typeof g&&(g={});a.objectEach(h,function(e,n){!a.isObject(e,!0)||a.isClass(e)||a.isDOMElement(e)?g[n]=h[n]:g[n]=v(g[n]||{},e)});return g};!0===g[0]&&(q=g[1],g=Array.prototype.slice.call(g,2));k=g.length;for(m=0;m<k;m++)q=v(q,g[m]);return q};a.pInt=function(a,g){return parseInt(a,g||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(m,
g){return!!m&&"object"===typeof m&&(!g||!a.isArray(m))};a.isDOMElement=function(m){return a.isObject(m)&&"number"===typeof m.nodeType};a.isClass=function(m){var g=m&&m.constructor;return!(!a.isObject(m,!0)||a.isDOMElement(m)||!g||!g.name||"Object"===g.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=function(a,g){for(var m=a.length;m--;)if(a[m]===g){a.splice(m,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(m,g,k){var q;a.isString(g)?a.defined(k)?
m.setAttribute(g,k):m&&m.getAttribute&&(q=m.getAttribute(g)):a.defined(g)&&a.isObject(g)&&a.objectEach(g,function(a,g){m.setAttribute(g,a)});return q};a.splat=function(m){return a.isArray(m)?m:[m]};a.syncTimeout=function(a,g,k){if(g)return setTimeout(a,g,k);a.call(0,k)};a.pick=function(){var a=arguments,g,k,q=a.length;for(g=0;g<q;g++)if(k=a[g],void 0!==k&&null!==k)return k};a.css=function(m,g){a.isMS&&!a.svg&&g&&void 0!==g.opacity&&(g.filter="alpha(opacity\x3d"+100*g.opacity+")");a.extend(m.style,
g)};a.createElement=function(m,g,k,q,v){m=G.createElement(m);var u=a.css;g&&a.extend(m,g);v&&u(m,{padding:0,border:"none",margin:0});k&&u(m,k);q&&q.appendChild(m);return m};a.extendClass=function(m,g){var k=function(){};k.prototype=new m;a.extend(k.prototype,g);return k};a.pad=function(a,g,k){return Array((g||2)+1-String(a).length).join(k||0)+a};a.relativeLength=function(a,g){return/%$/.test(a)?g*parseFloat(a)/100:parseFloat(a)};a.wrap=function(a,g,k){var q=a[g];a[g]=function(){var a=Array.prototype.slice.call(arguments),
g=arguments,h=this;h.proceed=function(){q.apply(h,arguments.length?arguments:g)};a.unshift(q);a=k.apply(this,a);h.proceed=null;return a}};a.getTZOffset=function(m){var g=a.Date;return 6E4*(g.hcGetTimezoneOffset&&g.hcGetTimezoneOffset(m)||g.hcTimezoneOffset||0)};a.dateFormat=function(m,g,k){if(!a.defined(g)||isNaN(g))return a.defaultOptions.lang.invalidDate||"";m=a.pick(m,"%Y-%m-%d %H:%M:%S");var q=a.Date,v=new q(g-a.getTZOffset(g)),u=v[q.hcGetHours](),h=v[q.hcGetDay](),e=v[q.hcGetDate](),n=v[q.hcGetMonth](),
d=v[q.hcGetFullYear](),c=a.defaultOptions.lang,w=c.weekdays,b=c.shortWeekdays,y=a.pad,q=a.extend({a:b?b[h]:w[h].substr(0,3),A:w[h],d:y(e),e:y(e,2," "),w:h,b:c.shortMonths[n],B:c.months[n],m:y(n+1),y:d.toString().substr(2,2),Y:d,H:y(u),k:u,I:y(u%12||12),l:u%12||12,M:y(v[q.hcGetMinutes]()),p:12>u?"AM":"PM",P:12>u?"am":"pm",S:y(v.getSeconds()),L:y(Math.round(g%1E3),3)},a.dateFormats);a.objectEach(q,function(a,b){for(;-1!==m.indexOf("%"+b);)m=m.replace("%"+b,"function"===typeof a?a(g):a)});return k?m.substr(0,
1).toUpperCase()+m.substr(1):m};a.formatSingle=function(m,g){var k=/\.([0-9])/,q=a.defaultOptions.lang;/f$/.test(m)?(k=(k=m.match(k))?k[1]:-1,null!==g&&(g=a.numberFormat(g,k,q.decimalPoint,-1<m.indexOf(",")?q.thousandsSep:""))):g=a.dateFormat(m,g);return g};a.format=function(m,g){for(var k="{",q=!1,v,u,h,e,n=[],d;m;){k=m.indexOf(k);if(-1===k)break;v=m.slice(0,k);if(q){v=v.split(":");u=v.shift().split(".");e=u.length;d=g;for(h=0;h<e;h++)d=d[u[h]];v.length&&(d=a.formatSingle(v.join(":"),d));n.push(d)}else n.push(v);
m=m.slice(k+1);k=(q=!q)?"}":"{"}n.push(m);return n.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(m,g,k,q,v){var u,h=m;k=a.pick(k,1);u=m/k;g||(g=v?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===q&&(1===k?g=a.grep(g,function(a){return 0===a%1}):.1>=k&&(g=[1/k])));for(q=0;q<g.length&&!(h=g[q],v&&h*k>=m||!v&&u<=(g[q]+(g[q+1]||g[q]))/2);q++);return h=a.correctFloat(h*k,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=
function(a,g){var k=a.length,q,m;for(m=0;m<k;m++)a[m].safeI=m;a.sort(function(a,h){q=g(a,h);return 0===q?a.safeI-h.safeI:q});for(m=0;m<k;m++)delete a[m].safeI};a.arrayMin=function(a){for(var g=a.length,k=a[0];g--;)a[g]<k&&(k=a[g]);return k};a.arrayMax=function(a){for(var g=a.length,k=a[0];g--;)a[g]>k&&(k=a[g]);return k};a.destroyObjectProperties=function(m,g){a.objectEach(m,function(a,q){a&&a!==g&&a.destroy&&a.destroy();delete m[q]})};a.discardElement=function(m){var g=a.garbageBin;g||(g=a.createElement("div"));
m&&g.appendChild(m);g.innerHTML=""};a.correctFloat=function(a,g){return parseFloat(a.toPrecision(g||14))};a.setAnimation=function(m,g){g.renderer.globalAnimation=a.pick(m,g.options.chart.animation,!0)};a.animObject=function(m){return a.isObject(m)?a.merge(m):{duration:m?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(m,g,k,q){m=+m||0;g=+g;var v=a.defaultOptions.lang,u=(m.toString().split(".")[1]||"").length,
h,e;-1===g?g=Math.min(u,20):a.isNumber(g)||(g=2);e=(Math.abs(m)+Math.pow(10,-Math.max(g,u)-1)).toFixed(g);u=String(a.pInt(e));h=3<u.length?u.length%3:0;k=a.pick(k,v.decimalPoint);q=a.pick(q,v.thousandsSep);m=(0>m?"-":"")+(h?u.substr(0,h)+q:"");m+=u.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+q);g&&(m+=k+e.slice(-g));return m};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(m,g,k){if("width"===g)return Math.min(m.offsetWidth,m.scrollWidth)-a.getStyle(m,"padding-left")-
a.getStyle(m,"padding-right");if("height"===g)return Math.min(m.offsetHeight,m.scrollHeight)-a.getStyle(m,"padding-top")-a.getStyle(m,"padding-bottom");if(m=F.getComputedStyle(m,void 0))m=m.getPropertyValue(g),a.pick(k,!0)&&(m=a.pInt(m));return m};a.inArray=function(a,g){return g.indexOf?g.indexOf(a):[].indexOf.call(g,a)};a.grep=function(a,g){return[].filter.call(a,g)};a.find=function(a,g){return[].find.call(a,g)};a.map=function(a,g){for(var k=[],q=0,m=a.length;q<m;q++)k[q]=g.call(a[q],a[q],q,a);
return k};a.offset=function(a){var g=G.documentElement;a=a.getBoundingClientRect();return{top:a.top+(F.pageYOffset||g.scrollTop)-(g.clientTop||0),left:a.left+(F.pageXOffset||g.scrollLeft)-(g.clientLeft||0)}};a.stop=function(a,g){for(var k=C.length;k--;)C[k].elem!==a||g&&g!==C[k].prop||(C[k].stopped=!0)};a.each=function(a,g,k){return Array.prototype.forEach.call(a,g,k)};a.objectEach=function(a,g,k){for(var q in a)a.hasOwnProperty(q)&&g.call(k,a[q],q,a)};a.addEvent=function(m,g,k){function q(a){a.target=
a.srcElement||F;k.call(m,a)}var v=m.hcEvents=m.hcEvents||{};m.addEventListener?m.addEventListener(g,k,!1):m.attachEvent&&(m.hcEventsIE||(m.hcEventsIE={}),m.hcEventsIE[k.toString()]=q,m.attachEvent("on"+g,q));v[g]||(v[g]=[]);v[g].push(k);return function(){a.removeEvent(m,g,k)}};a.removeEvent=function(m,g,k){function q(a,d){m.removeEventListener?m.removeEventListener(a,d,!1):m.attachEvent&&(d=m.hcEventsIE[d.toString()],m.detachEvent("on"+a,d))}function v(){var e,d;m.nodeName&&(g?(e={},e[g]=!0):e=h,
a.objectEach(e,function(a,e){if(h[e])for(d=h[e].length;d--;)q(e,h[e][d])}))}var u,h=m.hcEvents,e;h&&(g?(u=h[g]||[],k?(e=a.inArray(k,u),-1<e&&(u.splice(e,1),h[g]=u),q(g,k)):(v(),h[g]=[])):(v(),m.hcEvents={}))};a.fireEvent=function(m,g,k,q){var v;v=m.hcEvents;var u,h;k=k||{};if(G.createEvent&&(m.dispatchEvent||m.fireEvent))v=G.createEvent("Events"),v.initEvent(g,!0,!0),a.extend(v,k),m.dispatchEvent?m.dispatchEvent(v):m.fireEvent(g,v);else if(v)for(v=v[g]||[],u=v.length,k.target||a.extend(k,{preventDefault:function(){k.defaultPrevented=
!0},target:m,type:g}),g=0;g<u;g++)(h=v[g])&&!1===h.call(m,k)&&k.preventDefault();q&&!k.defaultPrevented&&q(k)};a.animate=function(m,g,k){var q,v="",u,h,e;a.isObject(k)||(e=arguments,k={duration:e[2],easing:e[3],complete:e[4]});a.isNumber(k.duration)||(k.duration=400);k.easing="function"===typeof k.easing?k.easing:Math[k.easing]||Math.easeInOutSine;k.curAnim=a.merge(g);a.objectEach(g,function(e,d){a.stop(m,d);h=new a.Fx(m,k,d);u=null;"d"===d?(h.paths=h.initPath(m,m.d,g.d),h.toD=g.d,q=0,u=1):m.attr?
q=m.attr(d):(q=parseFloat(a.getStyle(m,d))||0,"opacity"!==d&&(v="px"));u||(u=e);u&&u.match&&u.match("px")&&(u=u.replace(/px/g,""));h.run(q,u,v)})};a.seriesType=function(m,g,k,q,v){var u=a.getOptions(),h=a.seriesTypes;if(h[m])return a.error(27);u.plotOptions[m]=a.merge(u.plotOptions[g],k);h[m]=a.extendClass(h[g]||function(){},q);h[m].prototype.type=m;v&&(h[m].prototype.pointClass=a.extendClass(a.Point,v));return h[m]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),g=0;return function(){return"highcharts-"+
a+"-"+g++}}();F.jQuery&&(F.jQuery.fn.highcharts=function(){var m=[].slice.call(arguments);if(this[0])return m[0]?(new (a[a.isString(m[0])?m.shift():"Chart"])(this[0],m[0],m[1]),this):A[a.attr(this[0],"data-highcharts-chart")]});G&&!G.defaultView&&(a.getStyle=function(m,g){var k={width:"clientWidth",height:"clientHeight"}[g];if(m.style[g])return a.pInt(m.style[g]);"opacity"===g&&(g="filter");if(k)return m.style.zoom=1,Math.max(m[k]-2*a.getStyle(m,"padding"),0);m=m.currentStyle[g.replace(/\-(\w)/g,
function(a,g){return g.toUpperCase()})];"filter"===g&&(m=m.replace(/alpha\(opacity=([0-9]+)\)/,function(a,g){return g/100}));return""===m?1:a.pInt(m)});Array.prototype.forEach||(a.each=function(a,g,k){for(var q=0,m=a.length;q<m;q++)if(!1===g.call(k,a[q],q,a))return q});Array.prototype.indexOf||(a.inArray=function(a,g){var k,q=0;if(g)for(k=g.length;q<k;q++)if(g[q]===a)return q;return-1});Array.prototype.filter||(a.grep=function(a,g){for(var k=[],q=0,m=a.length;q<m;q++)g(a[q],q)&&k.push(a[q]);return k});
Array.prototype.find||(a.find=function(a,g){var k,q=a.length;for(k=0;k<q;k++)if(g(a[k],k))return a[k]})})(K);(function(a){var C=a.each,A=a.isNumber,G=a.map,F=a.merge,m=a.pInt;a.Color=function(g){if(!(this instanceof a.Color))return new a.Color(g);this.init(g)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[m(a[1]),m(a[2]),m(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(a){return[m(a[1]),m(a[2]),m(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(g){var k,q,m,u;if((this.input=g=this.names[g&&g.toLowerCase?g.toLowerCase():""]||g)&&g.stops)this.stops=G(g.stops,function(h){return new a.Color(h[1])});else if(g&&"#"===g[0]&&(k=g.length,g=parseInt(g.substr(1),16),7===k?q=[(g&16711680)>>16,(g&65280)>>8,g&255,1]:4===k&&(q=[(g&3840)>>4|(g&3840)>>8,(g&240)>>4|g&240,(g&15)<<4|g&15,1])),!q)for(m=this.parsers.length;m--&&
!q;)u=this.parsers[m],(k=u.regex.exec(g))&&(q=u.parse(k));this.rgba=q||[]},get:function(a){var g=this.input,q=this.rgba,m;this.stops?(m=F(g),m.stops=[].concat(m.stops),C(this.stops,function(g,h){m.stops[h]=[m.stops[h][0],g.get(a)]})):m=q&&A(q[0])?"rgb"===a||!a&&1===q[3]?"rgb("+q[0]+","+q[1]+","+q[2]+")":"a"===a?q[3]:"rgba("+q.join(",")+")":g;return m},brighten:function(a){var g,q=this.rgba;if(this.stops)C(this.stops,function(g){g.brighten(a)});else if(A(a)&&0!==a)for(g=0;3>g;g++)q[g]+=m(255*a),0>
q[g]&&(q[g]=0),255<q[g]&&(q[g]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,k){var g,m;a.rgba.length?(g=this.rgba,a=a.rgba,m=1!==a[3]||1!==g[3],a=(m?"rgba(":"rgb(")+Math.round(a[0]+(g[0]-a[0])*(1-k))+","+Math.round(a[1]+(g[1]-a[1])*(1-k))+","+Math.round(a[2]+(g[2]-a[2])*(1-k))+(m?","+(a[3]+(g[3]-a[3])*(1-k)):"")+")"):a=a.input||"none";return a}};a.color=function(g){return new a.Color(g)}})(K);(function(a){var C,A,G=a.addEvent,F=a.animate,m=a.attr,g=a.charts,
k=a.color,q=a.css,v=a.createElement,u=a.defined,h=a.deg2rad,e=a.destroyObjectProperties,n=a.doc,d=a.each,c=a.extend,w=a.erase,b=a.grep,y=a.hasTouch,D=a.inArray,H=a.isArray,l=a.isFirefox,B=a.isMS,r=a.isObject,z=a.isString,M=a.isWebKit,p=a.merge,E=a.noop,I=a.objectEach,L=a.pick,f=a.pInt,t=a.removeEvent,R=a.stop,J=a.svg,N=a.SVG_NS,O=a.symbolSizes,P=a.win;C=a.SVGElement=function(){return this};c(C.prototype,{opacity:1,SVG_NS:N,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
init:function(a,f){this.element="span"===f?v(f):n.createElementNS(this.SVG_NS,f);this.renderer=a},animate:function(x,f,t){f=a.animObject(L(f,this.renderer.globalAnimation,!0));0!==f.duration?(t&&(f.complete=t),F(this,x,f)):(this.attr(x,null,t),f.step&&f.step.call(this));return this},colorGradient:function(x,f,t){var b=this.renderer,l,c,r,Q,e,h,n,y,E,w,J=[],B;x.radialGradient?c="radialGradient":x.linearGradient&&(c="linearGradient");c&&(r=x[c],e=b.gradients,n=x.stops,w=t.radialReference,H(r)&&(x[c]=
r={x1:r[0],y1:r[1],x2:r[2],y2:r[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===c&&w&&!u(r.gradientUnits)&&(Q=r,r=p(r,b.getRadialAttr(w,Q),{gradientUnits:"userSpaceOnUse"})),I(r,function(a,x){"id"!==x&&J.push(x,a)}),I(n,function(a){J.push(a)}),J=J.join(","),e[J]?w=e[J].attr("id"):(r.id=w=a.uniqueKey(),e[J]=h=b.createElement(c).attr(r).add(b.defs),h.radAttr=Q,h.stops=[],d(n,function(x){0===x[1].indexOf("rgba")?(l=a.color(x[1]),y=l.get("rgb"),E=l.get("a")):(y=x[1],E=1);x=b.createElement("stop").attr({offset:x[0],
"stop-color":y,"stop-opacity":E}).add(h);h.stops.push(x)})),B="url("+b.url+"#"+w+")",t.setAttribute(f,B),t.gradient=J,x.toString=function(){return B})},applyTextOutline:function(x){var f=this.element,t,b,l,c,r;-1!==x.indexOf("contrast")&&(x=x.replace(/contrast/g,this.renderer.getContrast(f.style.fill)));x=x.split(" ");b=x[x.length-1];if((l=x[0])&&"none"!==l&&a.svg){this.fakeTS=!0;x=[].slice.call(f.getElementsByTagName("tspan"));this.ySetter=this.xSetter;l=l.replace(/(^[\d\.]+)(.*?)$/g,function(a,
x,f){return 2*x+f});for(r=x.length;r--;)t=x[r],"highcharts-text-outline"===t.getAttribute("class")&&w(x,f.removeChild(t));c=f.firstChild;d(x,function(a,x){0===x&&(a.setAttribute("x",f.getAttribute("x")),x=f.getAttribute("y"),a.setAttribute("y",x||0),null===x&&f.setAttribute("y",0));a=a.cloneNode(1);m(a,{"class":"highcharts-text-outline",fill:b,stroke:b,"stroke-width":l,"stroke-linejoin":"round"});f.insertBefore(a,c)})}},attr:function(a,f,t,b){var x,l=this.element,c,r=this,d,p;"string"===typeof a&&
void 0!==f&&(x=a,a={},a[x]=f);"string"===typeof a?r=(this[a+"Getter"]||this._defaultGetter).call(this,a,l):(I(a,function(x,f){d=!1;b||R(this,f);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(f)&&(c||(this.symbolAttr(a),c=!0),d=!0);!this.rotation||"x"!==f&&"y"!==f||(this.doTransform=!0);d||(p=this[f+"Setter"]||this._defaultSetter,p.call(this,x,f,l),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(f)&&this.updateShadows(f,x,p))},this),this.afterSetters());
t&&t();return r},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,f,t){for(var x=this.shadows,b=x.length;b--;)t.call(x[b],"height"===a?Math.max(f-(x[b].cutHeight||0),0):"d"===a?this.d:f,a,x[b])},addClass:function(a,f){var x=this.attr("class")||"";-1===x.indexOf(a)&&(f||(a=(x+(x?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==m(this.element,"class").indexOf(a)},removeClass:function(a){m(this.element,
"class",(m(this.element,"class")||"").replace(a,""));return this},symbolAttr:function(a){var x=this;d("x y r start end width height innerR anchorX anchorY".split(" "),function(f){x[f]=L(a[f],x[f])});x.attr({d:x.renderer.symbols[x.symbolName](x.x,x.y,x.width,x.height,x)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,f){var x=this,t={},b;f=f||a.strokeWidth||0;b=Math.round(f)%2/2;a.x=Math.floor(a.x||x.x||0)+b;a.y=Math.floor(a.y||x.y||
0)+b;a.width=Math.floor((a.width||x.width||0)-2*b);a.height=Math.floor((a.height||x.height||0)-2*b);u(a.strokeWidth)&&(a.strokeWidth=f);I(a,function(a,f){x[f]!==a&&(x[f]=t[f]=a)});return t},css:function(a){var x=this.styles,t={},b=this.element,l,r="",d,p=!x,e=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);x&&I(a,function(a,f){a!==x[f]&&(t[f]=a,p=!0)});p&&(x&&(a=c(x,t)),l=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===b.nodeName.toLowerCase()&&f(a.width),this.styles=a,l&&
!J&&this.renderer.forExport&&delete a.width,B&&!J?q(this.element,a):(d=function(a,x){return"-"+x.toLowerCase()},I(a,function(a,x){-1===D(x,e)&&(r+=x.replace(/([A-Z])/g,d)+":"+a+";")}),r&&m(b,"style",r)),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,f){var x=this,t=x.element;y&&"click"===a?(t.ontouchstart=function(a){x.touchEventFired=
Date.now();a.preventDefault();f.call(t,a)},t.onclick=function(a){(-1===P.navigator.userAgent.indexOf("Android")||1100<Date.now()-(x.touchEventFired||0))&&f.call(t,a)}):t["on"+a]=f;return this},setRadialReference:function(a){var x=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;x&&x.radAttr&&x.animate(this.renderer.getRadialAttr(a,x.radAttr));return this},translate:function(a,f){return this.attr({translateX:a,translateY:f})},invert:function(a){this.inverted=a;this.updateTransform();
return this},updateTransform:function(){var a=this.translateX||0,f=this.translateY||0,t=this.scaleX,b=this.scaleY,l=this.inverted,c=this.rotation,r=this.element;l&&(a+=this.width,f+=this.height);a=["translate("+a+","+f+")"];l?a.push("rotate(90) scale(-1,1)"):c&&a.push("rotate("+c+" "+(r.getAttribute("x")||0)+" "+(r.getAttribute("y")||0)+")");(u(t)||u(b))&&a.push("scale("+L(t,1)+" "+L(b,1)+")");a.length&&r.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);
return this},align:function(a,f,t){var x,b,l,c,r={};b=this.renderer;l=b.alignedObjects;var d,p;if(a){if(this.alignOptions=a,this.alignByTranslate=f,!t||z(t))this.alignTo=x=t||"renderer",w(l,this),l.push(this),t=null}else a=this.alignOptions,f=this.alignByTranslate,x=this.alignTo;t=L(t,b[x],b);x=a.align;b=a.verticalAlign;l=(t.x||0)+(a.x||0);c=(t.y||0)+(a.y||0);"right"===x?d=1:"center"===x&&(d=2);d&&(l+=(t.width-(a.width||0))/d);r[f?"translateX":"x"]=Math.round(l);"bottom"===b?p=1:"middle"===b&&(p=
2);p&&(c+=(t.height-(a.height||0))/p);r[f?"translateY":"y"]=Math.round(c);this[this.placed?"animate":"attr"](r);this.placed=!0;this.alignAttr=r;return this},getBBox:function(a,f){var x,t=this.renderer,b,l=this.element,r=this.styles,p,e=this.textStr,n,Q=t.cache,y=t.cacheKeys,E;f=L(f,this.rotation);b=f*h;p=r&&r.fontSize;void 0!==e&&(E=e.toString(),-1===E.indexOf("\x3c")&&(E=E.replace(/[0-9]/g,"0")),E+=["",f||0,p,r&&r.width,r&&r.textOverflow].join());E&&!a&&(x=Q[E]);if(!x){if(l.namespaceURI===this.SVG_NS||
t.forExport){try{(n=this.fakeTS&&function(a){d(l.querySelectorAll(".highcharts-text-outline"),function(x){x.style.display=a})})&&n("none"),x=l.getBBox?c({},l.getBBox()):{width:l.offsetWidth,height:l.offsetHeight},n&&n("")}catch(X){}if(!x||0>x.width)x={width:0,height:0}}else x=this.htmlGetBBox();t.isSVG&&(a=x.width,t=x.height,r&&"11px"===r.fontSize&&17===Math.round(t)&&(x.height=t=14),f&&(x.width=Math.abs(t*Math.sin(b))+Math.abs(a*Math.cos(b)),x.height=Math.abs(t*Math.cos(b))+Math.abs(a*Math.sin(b))));
if(E&&0<x.height){for(;250<y.length;)delete Q[y.shift()];Q[E]||y.push(E);Q[E]=x}}return x},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var x=this;x.animate({opacity:0},{duration:a||150,complete:function(){x.attr({y:-9999})}})},add:function(a){var x=this.renderer,f=this.element,t;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&x.buildText(this);this.added=!0;if(!a||
a.handleZ||this.zIndex)t=this.zIndexSetter();t||(a?a.element:x.box).appendChild(f);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var x=a.parentNode;x&&x.removeChild(a)},destroy:function(){var a=this,f=a.element||{},t=a.renderer.isSVG&&"SPAN"===f.nodeName&&a.parentGroup,b=f.ownerSVGElement;f.onclick=f.onmouseout=f.onmouseover=f.onmousemove=f.point=null;R(a);a.clipPath&&b&&(d(b.querySelectorAll("[clip-path]"),function(x){-1<x.getAttribute("clip-path").indexOf(a.clipPath.element.id+
")")&&x.removeAttribute("clip-path")}),a.clipPath=a.clipPath.destroy());if(a.stops){for(b=0;b<a.stops.length;b++)a.stops[b]=a.stops[b].destroy();a.stops=null}a.safeRemoveChild(f);for(a.destroyShadows();t&&t.div&&0===t.div.childNodes.length;)f=t.parentGroup,a.safeRemoveChild(t.div),delete t.div,t=f;a.alignTo&&w(a.renderer.alignedObjects,a);I(a,function(x,f){delete a[f]});return null},shadow:function(a,f,t){var x=[],b,l,c=this.element,r,d,p,e;if(!a)this.destroyShadows();else if(!this.shadows){d=L(a.width,
3);p=(a.opacity||.15)/d;e=this.parentInverted?"(-1,-1)":"("+L(a.offsetX,1)+", "+L(a.offsetY,1)+")";for(b=1;b<=d;b++)l=c.cloneNode(0),r=2*d+1-2*b,m(l,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":p*b,"stroke-width":r,transform:"translate"+e,fill:"none"}),t&&(m(l,"height",Math.max(m(l,"height")-r,0)),l.cutHeight=r),f?f.element.appendChild(l):c.parentNode.insertBefore(l,c),x.push(l);this.shadows=x}return this},destroyShadows:function(){d(this.shadows||[],function(a){this.safeRemoveChild(a)},
this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=L(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,f,t){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");t.setAttribute(f,a);this[f]=a},dashstyleSetter:function(a){var x,t=this["stroke-width"];"inherit"===t&&(t=1);if(a=a&&a.toLowerCase()){a=
a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(x=a.length;x--;)a[x]=f(a[x])*t;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,f,t){this[f]=
a;t.setAttribute(f,a)},titleSetter:function(a){var f=this.element.getElementsByTagName("title")[0];f||(f=n.createElementNS(this.SVG_NS,"title"),this.element.appendChild(f));f.firstChild&&f.removeChild(f.firstChild);f.appendChild(n.createTextNode(String(L(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,f,t){"string"===typeof a?t.setAttribute(f,a):a&&this.colorGradient(a,f,t)},
visibilitySetter:function(a,f,t){"inherit"===a?t.removeAttribute(f):t.setAttribute(f,a)},zIndexSetter:function(a,t){var x=this.renderer,b=this.parentGroup,l=(b||x).element||x.box,c,r=this.element,d;c=this.added;var p;u(a)&&(r.zIndex=a,a=+a,this[t]===a&&(c=!1),this[t]=a);if(c){(a=this.zIndex)&&b&&(b.handleZ=!0);t=l.childNodes;for(p=0;p<t.length&&!d;p++)b=t[p],c=b.zIndex,b!==r&&(f(c)>a||!u(a)&&u(c)||0>a&&!u(c)&&l!==x.box)&&(l.insertBefore(r,b),d=!0);d||l.appendChild(r)}return d},_defaultSetter:function(a,
f,t){t.setAttribute(f,a)}});C.prototype.yGetter=C.prototype.xGetter;C.prototype.translateXSetter=C.prototype.translateYSetter=C.prototype.rotationSetter=C.prototype.verticalAlignSetter=C.prototype.scaleXSetter=C.prototype.scaleYSetter=function(a,f){this[f]=a;this.doTransform=!0};C.prototype["stroke-widthSetter"]=C.prototype.strokeSetter=function(a,f,t){this[f]=a;this.stroke&&this["stroke-width"]?(C.prototype.fillSetter.call(this,this.stroke,"stroke",t),t.setAttribute("stroke-width",this["stroke-width"]),
this.hasStroke=!0):"stroke-width"===f&&0===a&&this.hasStroke&&(t.removeAttribute("stroke"),this.hasStroke=!1)};A=a.SVGRenderer=function(){this.init.apply(this,arguments)};c(A.prototype,{Element:C,SVG_NS:N,init:function(a,f,t,b,c,r){var x;b=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(b));x=b.element;a.appendChild(x);-1===a.innerHTML.indexOf("xmlns")&&m(x,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=x;this.boxWrapper=b;this.alignedObjects=[];this.url=(l||
M)&&n.getElementsByTagName("base").length?P.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(n.createTextNode("Created with Highcharts 5.0.12"));this.defs=this.createElement("defs").add();this.allowHTML=r;this.forExport=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(f,t,!1);var d;l&&a.getBoundingClientRect&&(f=function(){q(a,{left:0,top:0});d=a.getBoundingClientRect();
q(a,{left:Math.ceil(d.left)-d.left+"px",top:Math.ceil(d.top)-d.top+"px"})},f(),this.unSubPixelFix=G(P,"resize",f))},getStyle:function(a){return this.style=c({fontFamily:'"Vazir", "Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();e(this.gradients||{});this.gradients=
null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var f=new this.Element;f.init(this,a);return f},draw:E,getRadialAttr:function(a,f){return{cx:a[0]-a[2]/2+f.cx*a[2],cy:a[1]-a[2]/2+f.cy*a[2],r:f.r*a[2]}},getSpanWidth:function(a,f){var t=a.getBBox(!0).width;!J&&this.forExport&&(t=this.measureSpanWidth(f.firstChild.data,a.styles));return t},applyEllipsis:function(a,f,t,b){var x=this.getSpanWidth(a,f),l=x>b,x=t,c,r=0,d=
t.length,p=function(a){f.removeChild(f.firstChild);a&&f.appendChild(n.createTextNode(a))};if(l){for(;r<=d;)c=Math.ceil((r+d)/2),x=t.substring(0,c)+"\u2026",p(x),x=this.getSpanWidth(a,f),r===d?r=d+1:x>b?d=c-1:r=c;0===d&&p("")}return l},buildText:function(a){var t=a.element,x=this,l=x.forExport,c=L(a.textStr,"").toString(),r=-1!==c.indexOf("\x3c"),p=t.childNodes,e,h,E,y,w=m(t,"x"),B=a.styles,g=a.textWidth,I=B&&B.lineHeight,z=B&&B.textOutline,D=B&&"ellipsis"===B.textOverflow,k=B&&"nowrap"===B.whiteSpace,
u=B&&B.fontSize,R,H,v=p.length,B=g&&!a.added&&this.box,M=function(a){var b;b=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:u||x.style.fontSize||12;return I?f(I):x.fontMetrics(b,a.getAttribute("style")?a:t).h};R=[c,D,k,I,z,u,g].join();if(R!==a.textCache){for(a.textCache=R;v--;)t.removeChild(p[v]);r||z||D||g||-1!==c.indexOf(" ")?(e=/<.*class="([^"]+)".*>/,h=/<.*style="([^"]+)".*>/,E=/<.*href="([^"]+)".*>/,B&&B.appendChild(t),c=r?c.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,
'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[c],c=b(c,function(a){return""!==a}),d(c,function(f,b){var c,r=0;f=f.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");c=f.split("|||");d(c,function(f){if(""!==f||1===c.length){var d={},p=n.createElementNS(x.SVG_NS,"tspan"),B,I;e.test(f)&&(B=f.match(e)[1],m(p,"class",B));h.test(f)&&(I=f.match(h)[1].replace(/(;| |^)color([ :])/,
"$1fill$2"),m(p,"style",I));E.test(f)&&!l&&(m(p,"onclick",'location.href\x3d"'+f.match(E)[1]+'"'),q(p,{cursor:"pointer"}));f=(f.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==f){p.appendChild(n.createTextNode(f));r?d.dx=0:b&&null!==w&&(d.x=w);m(p,d);t.appendChild(p);!r&&H&&(!J&&l&&q(p,{display:"block"}),m(p,"dy",M(p)));if(g){d=f.replace(/([^\^])-/g,"$1- ").split(" ");B=1<c.length||b||1<d.length&&!k;var z=[],Q,u=M(p),R=a.rotation;for(D&&(y=x.applyEllipsis(a,
p,f,g));!D&&B&&(d.length||z.length);)a.rotation=0,Q=x.getSpanWidth(a,p),f=Q>g,void 0===y&&(y=f),f&&1!==d.length?(p.removeChild(p.firstChild),z.unshift(d.pop())):(d=z,z=[],d.length&&!k&&(p=n.createElementNS(N,"tspan"),m(p,{dy:u,x:w}),I&&m(p,"style",I),t.appendChild(p)),Q>g&&(g=Q)),d.length&&p.appendChild(n.createTextNode(d.join(" ").replace(/- /g,"-")));a.rotation=R}r++}}});H=H||t.childNodes.length}),y&&a.attr("title",a.textStr),B&&B.removeChild(t),z&&a.applyTextOutline&&a.applyTextOutline(z)):t.appendChild(n.createTextNode(c.replace(/&lt;/g,
"\x3c").replace(/&gt;/g,"\x3e")))}},getContrast:function(a){a=k(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,f,t,b,l,r,d,e,h){var x=this.label(a,f,t,h,null,null,null,null,"button"),n=0;x.attr(p({padding:8,r:2},l));var E,y,w,J;l=p({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},l);E=l.style;delete l.style;r=p(l,{fill:"#e6e6e6"},r);y=r.style;delete r.style;d=p(l,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},
d);w=d.style;delete d.style;e=p(l,{style:{color:"#cccccc"}},e);J=e.style;delete e.style;G(x.element,B?"mouseover":"mouseenter",function(){3!==n&&x.setState(1)});G(x.element,B?"mouseout":"mouseleave",function(){3!==n&&x.setState(n)});x.setState=function(a){1!==a&&(x.state=n=a);x.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);x.attr([l,r,d,e][a||0]).css([E,y,w,J][a||0])};x.attr(l).css(c({cursor:"default"},
E));return x.on("click",function(a){3!==n&&b.call(x,a)})},crispLine:function(a,f){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-f%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+f%2/2);return a},path:function(a){var f={fill:"none"};H(a)?f.d=a:r(a)&&c(f,a);return this.createElement("path").attr(f)},circle:function(a,f,t){a=r(a)?a:{x:a,y:f,r:t};f=this.createElement("circle");f.xSetter=f.ySetter=function(a,f,t){t.setAttribute("c"+f,a)};return f.attr(a)},arc:function(a,f,t,b,l,c){r(a)?(b=a,f=b.y,t=b.r,a=b.x):
b={innerR:b,start:l,end:c};a=this.symbol("arc",a,f,t,t,b);a.r=t;return a},rect:function(a,f,t,b,l,c){l=r(a)?a.r:l;var x=this.createElement("rect");a=r(a)?a:void 0===a?{}:{x:a,y:f,width:Math.max(t,0),height:Math.max(b,0)};void 0!==c&&(a.strokeWidth=c,a=x.crisp(a));a.fill="none";l&&(a.r=l);x.rSetter=function(a,f,t){m(t,{rx:a,ry:a})};return x.attr(a)},setSize:function(a,f,t){var b=this.alignedObjects,l=b.length;this.width=a;this.height=f;for(this.boxWrapper.animate({width:a,height:f},{step:function(){this.attr({viewBox:"0 0 "+
this.attr("width")+" "+this.attr("height")})},duration:L(t,!0)?void 0:0});l--;)b[l].align()},g:function(a){var f=this.createElement("g");return a?f.attr({"class":"highcharts-"+a}):f},image:function(a,f,t,b,l){var x={preserveAspectRatio:"none"};1<arguments.length&&c(x,{x:f,y:t,width:b,height:l});x=this.createElement("image").attr(x);x.element.setAttributeNS?x.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):x.element.setAttribute("hc-svg-href",a);return x},symbol:function(a,f,t,b,l,
r){var x=this,p,e=/^url\((.*?)\)$/,h=e.test(a),E=!h&&(this.symbols[a]?a:"circle"),y=E&&this.symbols[E],B=u(f)&&y&&y.call(this.symbols,Math.round(f),Math.round(t),b,l,r),w,J;y?(p=this.path(B),p.attr("fill","none"),c(p,{symbolName:E,x:f,y:t,width:b,height:l}),r&&c(p,r)):h&&(w=a.match(e)[1],p=this.image(w),p.imgwidth=L(O[w]&&O[w].width,r&&r.width),p.imgheight=L(O[w]&&O[w].height,r&&r.height),J=function(){p.attr({width:p.width,height:p.height})},d(["width","height"],function(a){p[a+"Setter"]=function(a,
f){var t={},b=this["img"+f],l="width"===f?"translateX":"translateY";this[f]=a;u(b)&&(this.element&&this.element.setAttribute(f,b),this.alignByTranslate||(t[l]=((this[f]||0)-b)/2,this.attr(t)))}}),u(f)&&p.attr({x:f,y:t}),p.isImg=!0,u(p.imgwidth)&&u(p.imgheight)?J():(p.attr({width:0,height:0}),v("img",{onload:function(){var a=g[x.chartIndex];0===this.width&&(q(this,{position:"absolute",top:"-999em"}),n.body.appendChild(this));O[w]={width:this.width,height:this.height};p.imgwidth=this.width;p.imgheight=
this.height;p.element&&J();this.parentNode&&this.parentNode.removeChild(this);x.imgCount--;if(!x.imgCount&&a&&a.onload)a.onload()},src:w}),this.imgCount++));return p},symbols:{circle:function(a,f,t,b){return this.arc(a+t/2,f+b/2,t/2,b/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,f,t,b){return["M",a,f,"L",a+t,f,a+t,f+b,a,f+b,"Z"]},triangle:function(a,f,t,b){return["M",a+t/2,f,"L",a+t,f+b,a,f+b,"Z"]},"triangle-down":function(a,f,t,b){return["M",a,f,"L",a+t,f,a+t/2,f+b,"Z"]},diamond:function(a,
f,t,b){return["M",a+t/2,f,"L",a+t,f+b/2,a+t/2,f+b,a,f+b/2,"Z"]},arc:function(a,f,t,b,l){var c=l.start,x=l.r||t,r=l.r||b||t,p=l.end-.001;t=l.innerR;b=l.open;var d=Math.cos(c),e=Math.sin(c),h=Math.cos(p),p=Math.sin(p);l=l.end-c<Math.PI?0:1;x=["M",a+x*d,f+r*e,"A",x,r,0,l,1,a+x*h,f+r*p];u(t)&&x.push(b?"M":"L",a+t*h,f+t*p,"A",t,t,0,l,0,a+t*d,f+t*e);x.push(b?"":"Z");return x},callout:function(a,f,t,b,l){var c=Math.min(l&&l.r||0,t,b),r=c+6,p=l&&l.anchorX;l=l&&l.anchorY;var d;d=["M",a+c,f,"L",a+t-c,f,"C",
a+t,f,a+t,f,a+t,f+c,"L",a+t,f+b-c,"C",a+t,f+b,a+t,f+b,a+t-c,f+b,"L",a+c,f+b,"C",a,f+b,a,f+b,a,f+b-c,"L",a,f+c,"C",a,f,a,f,a+c,f];p&&p>t?l>f+r&&l<f+b-r?d.splice(13,3,"L",a+t,l-6,a+t+6,l,a+t,l+6,a+t,f+b-c):d.splice(13,3,"L",a+t,b/2,p,l,a+t,b/2,a+t,f+b-c):p&&0>p?l>f+r&&l<f+b-r?d.splice(33,3,"L",a,l+6,a-6,l,a,l-6,a,f+c):d.splice(33,3,"L",a,b/2,p,l,a,b/2,a,f+c):l&&l>b&&p>a+r&&p<a+t-r?d.splice(23,3,"L",p+6,f+b,p,f+b+6,p-6,f+b,a+c,f+b):l&&0>l&&p>a+r&&p<a+t-r&&d.splice(3,3,"L",p-6,f,p,f-6,p+6,f,t-c,f);return d}},
clipRect:function(f,t,b,l){var c=a.uniqueKey(),r=this.createElement("clipPath").attr({id:c}).add(this.defs);f=this.rect(f,t,b,l,0).add(r);f.id=c;f.clipPath=r;f.count=0;return f},text:function(a,f,t,b){var l=!J&&this.forExport,c={};if(b&&(this.allowHTML||!this.forExport))return this.html(a,f,t);c.x=Math.round(f||0);t&&(c.y=Math.round(t));if(a||0===a)c.text=a;a=this.createElement("text").attr(c);l&&a.css({position:"absolute"});b||(a.xSetter=function(a,f,t){var b=t.getElementsByTagName("tspan"),l,c=
t.getAttribute(f),r;for(r=0;r<b.length;r++)l=b[r],l.getAttribute(f)===c&&l.setAttribute(f,a);t.setAttribute(f,a)});return a},fontMetrics:function(a,t){a=a||t&&t.style&&t.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?f(a):/em/.test(a)?parseFloat(a)*(t?this.fontMetrics(null,t.parentNode).f:16):12;t=24>a?a+3:Math.round(1.2*a);return{h:t,b:Math.round(.8*t),f:a}},rotCorr:function(a,f,t){var b=a;f&&t&&(b=Math.max(b*Math.cos(f*h),4));return{x:-a/3*Math.sin(f*h),y:b}},label:function(f,b,
l,r,e,h,n,E,y){var x=this,B=x.g("button"!==y&&"label"),w=B.text=x.text("",0,0,n).attr({zIndex:1}),J,g,I=0,z=3,D=0,q,k,m,R,H,v={},N,M,L=/^url\((.*?)\)$/.test(r),Q=L,V,U,O,P;y&&B.addClass("highcharts-"+y);Q=L;V=function(){return(N||0)%2/2};U=function(){var a=w.element.style,f={};g=(void 0===q||void 0===k||H)&&u(w.textStr)&&w.getBBox();B.width=(q||g.width||0)+2*z+D;B.height=(k||g.height||0)+2*z;M=z+x.fontMetrics(a&&a.fontSize,w).b;Q&&(J||(B.box=J=x.symbols[r]||L?x.symbol(r):x.rect(),J.addClass(("button"===
y?"":"highcharts-label-box")+(y?" highcharts-"+y+"-box":"")),J.add(B),a=V(),f.x=a,f.y=(E?-M:0)+a),f.width=Math.round(B.width),f.height=Math.round(B.height),J.attr(c(f,v)),v={})};O=function(){var a=D+z,f;f=E?0:M;u(q)&&g&&("center"===H||"right"===H)&&(a+={center:.5,right:1}[H]*(q-g.width));if(a!==w.x||f!==w.y)w.attr("x",a),void 0!==f&&w.attr("y",f);w.x=a;w.y=f};P=function(a,f){J?J.attr(a,f):v[a]=f};B.onAdd=function(){w.add(B);B.attr({text:f||0===f?f:"",x:b,y:l});J&&u(e)&&B.attr({anchorX:e,anchorY:h})};
B.widthSetter=function(f){q=a.isNumber(f)?f:null};B.heightSetter=function(a){k=a};B["text-alignSetter"]=function(a){H=a};B.paddingSetter=function(a){u(a)&&a!==z&&(z=B.padding=a,O())};B.paddingLeftSetter=function(a){u(a)&&a!==D&&(D=a,O())};B.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==I&&(I=a,g&&B.attr({x:m}))};B.textSetter=function(a){void 0!==a&&w.textSetter(a);U();O()};B["stroke-widthSetter"]=function(a,f){a&&(Q=!0);N=this["stroke-width"]=a;P(f,a)};B.strokeSetter=B.fillSetter=B.rSetter=
function(a,f){"fill"===f&&a&&(Q=!0);P(f,a)};B.anchorXSetter=function(a,f){e=B.anchorX=a;P(f,Math.round(a)-V()-m)};B.anchorYSetter=function(a,f){h=B.anchorY=a;P(f,a-R)};B.xSetter=function(a){B.x=a;I&&(a-=I*((q||g.width)+2*z));m=Math.round(a);B.attr("translateX",m)};B.ySetter=function(a){R=B.y=Math.round(a);B.attr("translateY",R)};var W=B.css;return c(B,{css:function(a){if(a){var f={};a=p(a);d(B.textProps,function(t){void 0!==a[t]&&(f[t]=a[t],delete a[t])});w.css(f)}return W.call(B,a)},getBBox:function(){return{width:g.width+
2*z,height:g.height+2*z,x:g.x-z,y:g.y-z}},shadow:function(a){a&&(U(),J&&J.shadow(a));return B},destroy:function(){t(B.element,"mouseenter");t(B.element,"mouseleave");w&&(w=w.destroy());J&&(J=J.destroy());C.prototype.destroy.call(B);B=x=U=O=P=null}})}});a.Renderer=A})(K);(function(a){var C=a.attr,A=a.createElement,G=a.css,F=a.defined,m=a.each,g=a.extend,k=a.isFirefox,q=a.isMS,v=a.isWebKit,u=a.pInt,h=a.SVGRenderer,e=a.win,n=a.wrap;g(a.SVGElement.prototype,{htmlCss:function(a){var c=this.element;if(c=
a&&"SPAN"===c.tagName&&a.width)delete a.width,this.textWidth=c,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=g(this.styles,a);G(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position="absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,c=this.element,e=this.translateX||0,b=this.translateY||
0,h=this.x||0,n=this.y||0,g=this.textAlign||"left",l={left:0,center:.5,right:1}[g],B=this.styles;G(c,{marginLeft:e,marginTop:b});this.shadows&&m(this.shadows,function(a){G(a,{marginLeft:e+1,marginTop:b+1})});this.inverted&&m(c.childNodes,function(b){a.invertChild(b,c)});if("SPAN"===c.tagName){var r=this.rotation,z=u(this.textWidth),q=B&&B.whiteSpace,p=[r,g,c.innerHTML,this.textWidth,this.textAlign].join();p!==this.cTT&&(B=a.fontMetrics(c.style.fontSize).b,F(r)&&this.setSpanRotation(r,l,B),G(c,{width:"",
whiteSpace:q||"nowrap"}),c.offsetWidth>z&&/[ \-]/.test(c.textContent||c.innerText)&&G(c,{width:z+"px",display:"block",whiteSpace:q||"normal"}),this.getSpanCorrection(c.offsetWidth,B,l,r,g));G(c,{left:h+(this.xCorr||0)+"px",top:n+(this.yCorr||0)+"px"});v&&(B=c.offsetHeight);this.cTT=p}}else this.alignOnAdd=!0},setSpanRotation:function(a,c,h){var b={},d=q?"-ms-transform":v?"-webkit-transform":k?"MozTransform":e.opera?"-o-transform":"";b[d]=b.transform="rotate("+a+"deg)";b[d+(k?"Origin":"-origin")]=
b.transformOrigin=100*c+"% "+h+"px";G(this.element,b)},getSpanCorrection:function(a,c,e){this.xCorr=-a*e;this.yCorr=-c}});g(h.prototype,{html:function(a,c,e){var b=this.createElement("span"),d=b.element,h=b.renderer,w=h.isSVG,l=function(a,b){m(["opacity","visibility"],function(l){n(a,l+"Setter",function(a,l,c,r){a.call(this,l,c,r);b[c]=l})})};b.textSetter=function(a){a!==d.innerHTML&&delete this.bBox;d.innerHTML=this.textStr=a;b.htmlUpdateTransform()};w&&l(b,b.element.style);b.xSetter=b.ySetter=b.alignSetter=
b.rotationSetter=function(a,l){"align"===l&&(l="textAlign");b[l]=a;b.htmlUpdateTransform()};b.attr({text:a,x:Math.round(c),y:Math.round(e)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});d.style.whiteSpace="nowrap";b.css=b.htmlCss;w&&(b.add=function(a){var c,e=h.box.parentNode,B=[];if(this.parentGroup=a){if(c=a.div,!c){for(;a;)B.push(a),a=a.parentGroup;m(B.reverse(),function(a){var r,p=C(a.element,"class");p&&(p={className:p});c=a.div=a.div||A("div",p,{position:"absolute",
left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},c||e);r=c.style;g(a,{on:function(){b.on.apply({element:B[0].div},arguments);return a},translateXSetter:function(b,f){r.left=b+"px";a[f]=b;a.doTransform=!0},translateYSetter:function(b,f){r.top=b+"px";a[f]=b;a.doTransform=!0}});l(a,r)})}}else c=e;c.appendChild(d);b.added=!0;b.alignOnAdd&&b.htmlUpdateTransform();return b});return b}})})(K);(function(a){var C,A,G=
a.createElement,F=a.css,m=a.defined,g=a.deg2rad,k=a.discardElement,q=a.doc,v=a.each,u=a.erase,h=a.extend;C=a.extendClass;var e=a.isArray,n=a.isNumber,d=a.isObject,c=a.merge;A=a.noop;var w=a.pick,b=a.pInt,y=a.SVGElement,D=a.SVGRenderer,H=a.win;a.svg||(A={docMode8:q&&8===q.documentMode,init:function(a,b){var l=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],c=["position: ","absolute",";"],d="div"===b;("shape"===b||d)&&c.push("left:0;top:0;width:1px;height:1px;");c.push("visibility: ",d?"hidden":"visible");
l.push(' style\x3d"',c.join(""),'"/\x3e');b&&(l=d||"span"===b||"img"===b?l.join(""):a.prepVML(l),this.element=G(l));this.renderer=a},add:function(a){var b=this.renderer,l=this.element,c=b.box,d=a&&a.inverted,c=a?a.element||a:c;a&&(this.parentGroup=a);d&&b.invertChild(l,c);c.appendChild(l);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:y.prototype.htmlUpdateTransform,
setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*g),c=Math.sin(a*g);F(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",b,", M12\x3d",-c,", M21\x3d",c,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,c,d,e){var l=d?Math.cos(d*g):1,r=d?Math.sin(d*g):0,h=w(this.elemHeight,this.element.offsetHeight),n;this.xCorr=0>l&&-a;this.yCorr=0>r&&-h;n=0>l*r;this.xCorr+=r*b*(n?1-c:c);this.yCorr-=l*b*(d?n?c:1-c:1);e&&"left"!==
e&&(this.xCorr-=a*c*(0>l?-1:1),d&&(this.yCorr-=h*c*(0>r?-1:1)),F(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,l=[];b--;)n(a[b])?l[b]=Math.round(10*a[b])-5:"Z"===a[b]?l[b]="x":(l[b]=a[b],!a.isArc||"wa"!==a[b]&&"at"!==a[b]||(l[b+5]===l[b+7]&&(l[b+7]+=a[b+7]>a[b+5]?1:-1),l[b+6]===l[b+8]&&(l[b+8]+=a[b+8]>a[b+6]?1:-1)));return l.join(" ")||"x"},clip:function(a){var b=this,l;a?(l=a.members,u(l,b),l.push(b),b.destroyClip=function(){u(l,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),
a={clip:b.docMode8?"inherit":"rect(auto)"});return b.css(a)},css:y.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&k(a)},destroy:function(){this.destroyClip&&this.destroyClip();return y.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=H.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,c){var l;a=a.split(/[ ,]/);l=a.length;if(9===l||11===l)a[l-4]=a[l-2]=b(a[l-2])-10*c;return a.join(" ")},shadow:function(a,c,d){var l=[],r,p=this.element,
e=this.renderer,h,n=p.style,f,t=p.path,y,J,g,B;t&&"string"!==typeof t.value&&(t="x");J=t;if(a){g=w(a.width,3);B=(a.opacity||.15)/g;for(r=1;3>=r;r++)y=2*g+1-2*r,d&&(J=this.cutOffPath(t.value,y+.5)),f=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',y,'" filled\x3d"false" path\x3d"',J,'" coordsize\x3d"10 10" style\x3d"',p.style.cssText,'" /\x3e'],h=G(e.prepVML(f),null,{left:b(n.left)+w(a.offsetX,1),top:b(n.top)+w(a.offsetY,1)}),d&&(h.cutOff=y+1),f=['\x3cstroke color\x3d"',a.color||"#000000",'" opacity\x3d"',
B*r,'"/\x3e'],G(e.prepVML(f),null,null,h),c?c.element.appendChild(h):p.parentNode.insertBefore(h,p),l.push(h);this.shadows=l}return this},updateShadows:A,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||G(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var l=this.shadows;
a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(l)for(c=l.length;c--;)l[c].path=l[c].cutOff?this.cutOffPath(a,l[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var l=c.nodeName;"SPAN"===l?c.style.color=a:"IMG"!==l&&(c.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,c,b,this)))},"fill-opacitySetter":function(a,b,c){G(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,c)},opacitySetter:A,rotationSetter:function(a,b,c){c=
c.style;this[b]=c[b]=a;c.left=-Math.round(Math.sin(a*g)+1)+"px";c.top=Math.round(Math.cos(a*g))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;n(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){"inherit"===a&&(a="visible");this.shadows&&v(this.shadows,function(c){c.style[b]=a});"DIV"===c.nodeName&&(a="hidden"===a?"-999em":
0,this.docMode8||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}},A["stroke-opacitySetter"]=A["fill-opacitySetter"],a.VMLElement=A=C(y,A),A.prototype.ySetter=A.prototype.widthSetter=A.prototype.heightSetter=A.prototype.xSetter,A={Element:A,isIE8:-1<H.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,c){var l,
d;this.alignedObjects=[];l=this.createElement("div").css({position:"relative"});d=l.element;a.appendChild(l.element);this.isVML=!0;this.box=d;this.boxWrapper=l;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);if(!q.namespaces.hcv){q.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{q.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(p){q.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},
isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,e){var l=this.createElement(),p=d(a);return h(l,{members:[],count:0,left:(p?a.x:a)+1,top:(p?a.y:b)+1,width:(p?a.width:c)-1,height:(p?a.height:e)-1,getCSS:function(a){var b=a.element,c=b.nodeName,f=a.inverted,t=this.top-("shape"===c?b.offsetTop:0),l=this.left,b=l+this.width,p=t+this.height,t={clip:"rect("+Math.round(f?l:t)+"px,"+Math.round(f?p:b)+"px,"+Math.round(f?b:p)+"px,"+Math.round(f?t:l)+"px)"};!f&&a.docMode8&&"DIV"===c&&
h(t,{width:b+"px",height:p+"px"});return t},updateClipping:function(){v(l.members,function(a){a.element&&a.css(l.getCSS(a))})}})},color:function(b,c,d,e){var l=this,p,r=/^rgba/,h,n,f="none";b&&b.linearGradient?n="gradient":b&&b.radialGradient&&(n="pattern");if(n){var t,y,w=b.linearGradient||b.radialGradient,g,q,B,x,D,z="";b=b.stops;var k,m=[],u=function(){h=['\x3cfill colors\x3d"'+m.join(",")+'" opacity\x3d"',B,'" o:opacity2\x3d"',q,'" type\x3d"',n,'" ',z,'focus\x3d"100%" method\x3d"any" /\x3e'];
G(l.prepVML(h),null,null,c)};g=b[0];k=b[b.length-1];0<g[0]&&b.unshift([0,g[1]]);1>k[0]&&b.push([1,k[1]]);v(b,function(f,b){r.test(f[1])?(p=a.color(f[1]),t=p.get("rgb"),y=p.get("a")):(t=f[1],y=1);m.push(100*f[0]+"% "+t);b?(B=y,x=t):(q=y,D=t)});if("fill"===d)if("gradient"===n)d=w.x1||w[0]||0,b=w.y1||w[1]||0,g=w.x2||w[2]||0,w=w.y2||w[3]||0,z='angle\x3d"'+(90-180*Math.atan((w-b)/(g-d))/Math.PI)+'"',u();else{var f=w.r,H=2*f,A=2*f,C=w.cx,F=w.cy,T=c.radialReference,K,f=function(){T&&(K=e.getBBox(),C+=(T[0]-
K.x)/K.width-.5,F+=(T[1]-K.y)/K.height-.5,H*=T[2]/K.width,A*=T[2]/K.height);z='src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+H+","+A+'" origin\x3d"0.5,0.5" position\x3d"'+C+","+F+'" color2\x3d"'+D+'" ';u()};e.added?f():e.onAdd=f;f=x}else f=t}else r.test(b)&&"IMG"!==c.tagName?(p=a.color(b),e[d+"-opacitySetter"](p.get("a"),d,c),f=p.get("rgb")):(f=c.getElementsByTagName(d),f.length&&(f[0].opacity=1,f[0].type="solid"),f=b);return f},prepVML:function(a){var b=this.isIE8;a=a.join("");
b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:D.prototype.html,path:function(a){var b={coordsize:"10 10"};e(a)?b.d=a:d(a)&&h(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var l=this.symbol("circle");
d(a)&&(c=a.r,b=a.y,a=a.x);l.isCircle=!0;l.r=c;return l.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,c,d,e){var l=this.createElement("img").attr({src:a});1<arguments.length&&l.attr({x:b,y:c,width:d,height:e});return l},createElement:function(a){return"rect"===a?this.symbol(a):D.prototype.createElement.call(this,a)},invertChild:function(a,c){var d=this;c=c.style;var l="IMG"===a.tagName&&a.style;
F(a,{flip:"x",left:b(c.width)-(l?b(l.top):1),top:b(c.height)-(l?b(l.left):1),rotation:-90});v(a.childNodes,function(b){d.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var p=e.start,l=e.end,r=e.r||c||d;c=e.innerR;d=Math.cos(p);var h=Math.sin(p),f=Math.cos(l),t=Math.sin(l);if(0===l-p)return["x"];p=["wa",a-r,b-r,a+r,b+r,a+r*d,b+r*h,a+r*f,b+r*t];e.open&&!c&&p.push("e","M",a,b);p.push("at",a-c,b-c,a+c,b+c,a+c*f,b+c*t,a+c*d,b+c*h,"x","e");p.isArc=!0;return p},circle:function(a,b,c,d,e){e&&m(e.r)&&
(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return D.prototype.symbols[m(e)&&e.r?"callout":"square"].call(0,a,b,c,d,e)}}},a.VMLRenderer=C=function(){this.init.apply(this,arguments)},C.prototype=c(D.prototype,A),a.Renderer=C);D.prototype.measureSpanWidth=function(a,b){var c=q.createElement("span");a=q.createTextNode(a);c.appendChild(a);F(c,b);this.box.appendChild(c);b=c.offsetWidth;k(c);return b}})(K);(function(a){function C(){var g=
a.defaultOptions.global,k=q.moment;if(g.timezone){if(k)return function(a){return-k.tz(a,g.timezone).utcOffset()};a.error(25)}return g.useUTC&&g.getTimezoneOffset}function A(){var g=a.defaultOptions.global,u,h=g.useUTC,e=h?"getUTC":"get",n=h?"setUTC":"set";a.Date=u=g.Date||q.Date;u.hcTimezoneOffset=h&&g.timezoneOffset;u.hcGetTimezoneOffset=C();u.hcMakeTime=function(a,c,e,b,n,g){var d;h?(d=u.UTC.apply(0,arguments),d+=m(d)):d=(new u(a,c,k(e,1),k(b,0),k(n,0),k(g,0))).getTime();return d};F("Minutes Hours Day Date Month FullYear".split(" "),
function(a){u["hcGet"+a]=e+a});F("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),function(a){u["hcSet"+a]=n+a})}var G=a.color,F=a.each,m=a.getTZOffset,g=a.merge,k=a.pick,q=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.12/gfx/vml-radial-gradient.png"},chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},
position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},
itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,
animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:G("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',
shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(q){a.defaultOptions=g(!0,a.defaultOptions,q);A();return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;A()})(K);
(function(a){var C=a.correctFloat,A=a.defined,G=a.destroyObjectProperties,F=a.isNumber,m=a.merge,g=a.pick,k=a.deg2rad;a.Tick=function(a,g,k,h){this.axis=a;this.pos=g;this.type=k||"";this.isNewLabel=this.isNew=!0;k||h||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,k=a.options,u=a.chart,h=a.categories,e=a.names,n=this.pos,d=k.labels,c=a.tickPositions,w=n===c[0],b=n===c[c.length-1],e=h?g(h[n],e[n],n):n,h=this.label,c=c.info,y;a.isDatetimeAxis&&c&&(y=k.dateTimeLabelFormats[c.higherRanks[n]||
c.unitName]);this.isFirst=w;this.isLast=b;k=a.labelFormatter.call({axis:a,chart:u,isFirst:w,isLast:b,dateTimeLabelFormat:y,value:a.isLog?C(a.lin2log(e)):e});A(h)?h&&h.attr({text:k}):(this.labelLength=(this.label=h=A(k)&&d.enabled?u.renderer.text(k,0,0,d.useHTML).css(m(d.style)).add(a.labelGroup):null)&&h.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var q=this.axis,m=a.x,h=q.chart.chartWidth,
e=q.chart.spacing,n=g(q.labelLeft,Math.min(q.pos,e[3])),e=g(q.labelRight,Math.max(q.pos+q.len,h-e[1])),d=this.label,c=this.rotation,w={left:0,center:.5,right:1}[q.labelAlign],b=d.getBBox().width,y=q.getSlotWidth(),D=y,H=1,l,B={};if(c)0>c&&m-w*b<n?l=Math.round(m/Math.cos(c*k)-n):0<c&&m+w*b>e&&(l=Math.round((h-m)/Math.cos(c*k)));else if(h=m+(1-w)*b,m-w*b<n?D=a.x+D*(1-w)-n:h>e&&(D=e-a.x+D*w,H=-1),D=Math.min(y,D),D<y&&"center"===q.labelAlign&&(a.x+=H*(y-D-w*(y-Math.min(b,D)))),b>D||q.autoRotation&&(d.styles||
{}).width)l=D;l&&(B.width=l,(q.options.labels.style||{}).textOverflow||(B.textOverflow="ellipsis"),d.css(B))},getPosition:function(a,g,k,h){var e=this.axis,n=e.chart,d=h&&n.oldChartHeight||n.chartHeight;return{x:a?e.translate(g+k,null,null,h)+e.transB:e.left+e.offset+(e.opposite?(h&&n.oldChartWidth||n.chartWidth)-e.right-e.left:0),y:a?d-e.bottom+e.offset-(e.opposite?e.height:0):d-e.translate(g+k,null,null,h)-e.transB}},getLabelPosition:function(a,g,m,h,e,n,d,c){var w=this.axis,b=w.transA,y=w.reversed,
D=w.staggerLines,q=w.tickRotCorr||{x:0,y:0},l=e.y;A(l)||(l=0===w.side?m.rotation?-8:-m.getBBox().height:2===w.side?q.y+8:Math.cos(m.rotation*k)*(q.y-m.getBBox(!1,0).height/2));a=a+e.x+q.x-(n&&h?n*b*(y?-1:1):0);g=g+l-(n&&!h?n*b*(y?1:-1):0);D&&(m=d/(c||1)%D,w.opposite&&(m=D-m-1),g+=w.labelOffset/D*m);return{x:a,y:Math.round(g)}},getMarkPath:function(a,g,k,h,e,n){return n.crispLine(["M",a,g,"L",a+(e?0:-k),g+(e?k:0)],h)},renderGridLine:function(a,g,k){var h=this.axis,e=h.options,n=this.gridLine,d={},
c=this.pos,w=this.type,b=h.tickmarkOffset,y=h.chart.renderer,D=w?w+"Grid":"grid",q=e[D+"LineWidth"],l=e[D+"LineColor"],e=e[D+"LineDashStyle"];n||(d.stroke=l,d["stroke-width"]=q,e&&(d.dashstyle=e),w||(d.zIndex=1),a&&(d.opacity=0),this.gridLine=n=y.path().attr(d).addClass("highcharts-"+(w?w+"-":"")+"grid-line").add(h.gridGroup));if(!a&&n&&(a=h.getPlotLinePath(c+b,n.strokeWidth()*k,a,!0)))n[this.isNew?"attr":"animate"]({d:a,opacity:g})},renderMark:function(a,k,m){var h=this.axis,e=h.options,n=h.chart.renderer,
d=this.type,c=d?d+"Tick":"tick",w=h.tickSize(c),b=this.mark,y=!b,D=a.x;a=a.y;var q=g(e[c+"Width"],!d&&h.isXAxis?1:0),e=e[c+"Color"];w&&(h.opposite&&(w[0]=-w[0]),y&&(this.mark=b=n.path().addClass("highcharts-"+(d?d+"-":"")+"tick").add(h.axisGroup),b.attr({stroke:e,"stroke-width":q})),b[y?"attr":"animate"]({d:this.getMarkPath(D,a,w[0],b.strokeWidth()*m,h.horiz,n),opacity:k}))},renderLabel:function(a,k,m,h){var e=this.axis,n=e.horiz,d=e.options,c=this.label,w=d.labels,b=w.step,y=e.tickmarkOffset,D=!0,
q=a.x;a=a.y;c&&F(q)&&(c.xy=a=this.getLabelPosition(q,a,c,n,w,y,h,b),this.isFirst&&!this.isLast&&!g(d.showFirstLabel,1)||this.isLast&&!this.isFirst&&!g(d.showLastLabel,1)?D=!1:!n||e.isRadial||w.step||w.rotation||k||0===m||this.handleOverflow(a),b&&h%b&&(D=!1),D&&F(a.y)?(a.opacity=m,c[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(c.attr("y",-9999),this.isNewLabel=!0),this.isNew=!1)},render:function(a,k,m){var h=this.axis,e=h.horiz,n=this.getPosition(e,this.pos,h.tickmarkOffset,k),d=n.x,
c=n.y,h=e&&d===h.pos+h.len||!e&&c===h.pos?-1:1;m=g(m,1);this.isActive=!0;this.renderGridLine(k,m,h);this.renderMark(n,m,h);this.renderLabel(n,k,m,a)},destroy:function(){G(this,this.axis)}}})(K);var S=function(a){var C=a.addEvent,A=a.animObject,G=a.arrayMax,F=a.arrayMin,m=a.color,g=a.correctFloat,k=a.defaultOptions,q=a.defined,v=a.deg2rad,u=a.destroyObjectProperties,h=a.each,e=a.extend,n=a.fireEvent,d=a.format,c=a.getMagnitude,w=a.grep,b=a.inArray,y=a.isArray,D=a.isNumber,H=a.isString,l=a.merge,B=
a.normalizeTickInterval,r=a.objectEach,z=a.pick,M=a.removeEvent,p=a.splat,E=a.syncTimeout,I=a.Tick,L=function(){this.init.apply(this,arguments)};a.extend(L.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,
startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,
formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,t){var f=t.isX,c=this;c.chart=a;c.horiz=
a.inverted&&!c.isZAxis?!f:f;c.isXAxis=f;c.coll=c.coll||(f?"xAxis":"yAxis");c.opposite=t.opposite;c.side=t.side||(c.horiz?c.opposite?0:2:c.opposite?1:3);c.setOptions(t);var d=this.options,e=d.type;c.labelFormatter=d.labels.formatter||c.defaultLabelFormatter;c.userOptions=t;c.minPixelPadding=0;c.reversed=d.reversed;c.visible=!1!==d.visible;c.zoomEnabled=!1!==d.zoomEnabled;c.hasNames="category"===e||!0===d.categories;c.categories=d.categories||c.hasNames;c.names=c.names||[];c.plotLinesAndBandsGroups=
{};c.isLog="logarithmic"===e;c.isDatetimeAxis="datetime"===e;c.positiveValuesOnly=c.isLog&&!c.allowNegativeLog;c.isLinked=q(d.linkedTo);c.ticks={};c.labelEdge=[];c.minorTicks={};c.plotLinesAndBands=[];c.alternateBands={};c.len=0;c.minRange=c.userMinRange=d.minRange||d.maxZoom;c.range=d.range;c.offset=d.offset||0;c.stacks={};c.oldStacks={};c.stacksTouched=0;c.max=null;c.min=null;c.crosshair=z(d.crosshair,p(a.options.tooltip.crosshairs)[f?0:1],!1);t=c.options.events;-1===b(c,a.axes)&&(f?a.axes.splice(a.xAxis.length,
0,c):a.axes.push(c),a[c.coll].push(c));c.series=c.series||[];a.inverted&&!c.isZAxis&&f&&void 0===c.reversed&&(c.reversed=!0);r(t,function(a,f){C(c,f,a)});c.lin2log=d.linearToLogConverter||c.lin2log;c.isLog&&(c.val2lin=c.log2lin,c.lin2val=c.lin2log)},setOptions:function(a){this.options=l(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],l(k[this.coll],a))},
defaultLabelFormatter:function(){var f=this.axis,b=this.value,c=f.categories,p=this.dateTimeLabelFormat,e=k.lang,l=e.numericSymbols,e=e.numericSymbolMagnitude||1E3,r=l&&l.length,x,h=f.options.labels.format,f=f.isLog?Math.abs(b):f.tickInterval;if(h)x=d(h,this);else if(c)x=b;else if(p)x=a.dateFormat(p,b);else if(r&&1E3<=f)for(;r--&&void 0===x;)c=Math.pow(e,r+1),f>=c&&0===10*b%c&&null!==l[r]&&0!==b&&(x=a.numberFormat(b/c,-1)+l[r]);void 0===x&&(x=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,
-1,void 0,""));return x},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();h(a.series,function(f){if(f.visible||!b.options.chart.ignoreHiddenSeries){var c=f.options,t=c.threshold,d;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=t&&(t=null);if(a.isXAxis)c=f.xData,c.length&&(f=F(c),D(f)||f instanceof Date||(c=w(c,function(a){return D(a)}),f=F(c)),a.dataMin=Math.min(z(a.dataMin,c[0]),
f),a.dataMax=Math.max(z(a.dataMax,c[0]),G(c)));else if(f.getExtremes(),d=f.dataMax,f=f.dataMin,q(f)&&q(d)&&(a.dataMin=Math.min(z(a.dataMin,f),f),a.dataMax=Math.max(z(a.dataMax,d),d)),q(t)&&(a.threshold=t),!c.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,b,c,d,p,e){var f=this.linkedParent||this,t=1,l=0,r=d?f.oldTransA:f.transA;d=d?f.oldMin:f.min;var h=f.minPixelPadding;p=(f.isOrdinal||f.isBroken||f.isLog&&p)&&f.lin2val;r||(r=f.transA);c&&(t*=-1,l=f.len);f.reversed&&
(t*=-1,l-=t*(f.sector||f.len));b?(a=(a*t+l-h)/r+d,p&&(a=f.lin2val(a))):(p&&(a=f.val2lin(a)),a=t*(a-d)*r+l+t*h+(D(e)?r*e:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,p){var f=this.chart,t=this.left,e=this.top,l,r,h=c&&f.oldChartHeight||f.chartHeight,n=c&&f.oldChartWidth||f.chartWidth,w;l=this.transB;var g=function(a,f,b){if(a<
f||a>b)d?a=Math.min(Math.max(f,a),b):w=!0;return a};p=z(p,this.translate(a,null,null,c));a=c=Math.round(p+l);l=r=Math.round(h-p-l);D(p)?this.horiz?(l=e,r=h-this.bottom,a=c=g(a,t,t+this.width)):(a=t,c=n-this.right,l=r=g(l,e,e+this.height)):w=!0;return w&&!d?null:f.renderer.crispLine(["M",a,l,"L",c,r],b||1)},getLinearTickPositions:function(a,b,c){var f,t=g(Math.floor(b/a)*a);c=g(Math.ceil(c/a)*a);var d=[];if(this.single)return[b];for(b=t;b<=c;){d.push(b);b=g(b+a);if(b===f)break;f=b}return d},getMinorTickPositions:function(){var a=
this,b=a.options,c=a.tickPositions,d=a.minorTickInterval,p=[],e=a.pointRangePadding||0,l=a.min-e,e=a.max+e,x=e-l;if(x&&x/d<a.len/3)if(a.isLog)h(this.paddedTicks,function(b,f,c){f&&p.push.apply(p,a.getLogTickPositions(d,c[f-1],c[f],!0))});else if(a.isDatetimeAxis&&"auto"===b.minorTickInterval)p=p.concat(a.getTimeTicks(a.normalizeTimeTickInterval(d),l,e,b.startOfWeek));else for(b=l+(c[0]-l)%d;b<=e&&b!==p[0];b+=d)p.push(b);0!==p.length&&a.trimTicks(p);return p},adjustForMinRange:function(){var a=this.options,
b=this.min,c=this.max,d,p,e,l,x,r,n,w;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(q(a.min)||q(a.max)?this.minRange=null:(h(this.series,function(a){r=a.xData;for(l=n=a.xIncrement?1:r.length-1;0<l;l--)if(x=r[l]-r[l-1],void 0===e||x<e)e=x}),this.minRange=Math.min(5*e,this.dataMax-this.dataMin)));c-b<this.minRange&&(p=this.dataMax-this.dataMin>=this.minRange,w=this.minRange,d=(w-c+b)/2,d=[b-d,z(a.min,b-d)],p&&(d[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=G(d),c=[b+w,z(a.max,b+w)],
p&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=F(c),c-b<w&&(d[0]=c-w,d[1]=z(a.min,c-w),b=G(d)));this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:h(this.series,function(b){var f=b.closestPointRange,c=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&q(f)&&c&&(a=q(a)?Math.min(a,f):f)});return a},nameToX:function(a){var f=y(this.categories),c=f?this.categories:this.names,d=a.options.x,p;a.series.requireSorting=!1;q(d)||(d=!1===this.options.uniqueNames?
a.series.autoIncrement():b(a.name,c));-1===d?f||(p=c.length):p=d;void 0!==p&&(this.names[p]=a.name);return p},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=this.userMinRange,h(this.series||[],function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)b.processData(),b.generatePoints();h(b.points,function(f,c){var t;f.options&&(t=a.nameToX(f),void 0!==t&&t!==f.x&&(f.x=t,b.xData[c]=t))})}))},setAxisTranslation:function(a){var b=this,f=b.max-b.min,c=b.axisPointRange||
0,d,p=0,e=0,l=b.linkedParent,r=!!b.categories,n=b.transA,w=b.isXAxis;if(w||r||c)d=b.getClosest(),l?(p=l.minPointOffset,e=l.pointRangePadding):h(b.series,function(a){var f=r?1:w?z(a.options.pointRange,d,0):b.axisPointRange||0;a=a.options.pointPlacement;c=Math.max(c,f);b.single||(p=Math.max(p,H(a)?0:f/2),e=Math.max(e,"on"===a?0:f))}),l=b.ordinalSlope&&d?b.ordinalSlope/d:1,b.minPointOffset=p*=l,b.pointRangePadding=e*=l,b.pointRange=Math.min(c,f),w&&(b.closestPointRange=d);a&&(b.oldTransA=n);b.translationSlope=
b.transA=n=b.options.staticScale||b.len/(f+e||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=n*p},minFromRange:function(){return this.max-this.range},setTickInterval:function(b){var f=this,d=f.chart,p=f.options,e=f.isLog,l=f.log2lin,r=f.isDatetimeAxis,x=f.isXAxis,w=f.isLinked,y=p.maxPadding,E=p.minPadding,k=p.tickInterval,I=p.tickPixelInterval,m=f.categories,H=f.threshold,u=f.softThreshold,L,v,M,A;r||m||w||this.getTickAmount();M=z(f.userMin,p.min);A=z(f.userMax,p.max);w?(f.linkedParent=d[f.coll][p.linkedTo],
d=f.linkedParent.getExtremes(),f.min=z(d.min,d.dataMin),f.max=z(d.max,d.dataMax),p.type!==f.linkedParent.options.type&&a.error(11,1)):(!u&&q(H)&&(f.dataMin>=H?(L=H,E=0):f.dataMax<=H&&(v=H,y=0)),f.min=z(M,L,f.dataMin),f.max=z(A,v,f.dataMax));e&&(f.positiveValuesOnly&&!b&&0>=Math.min(f.min,z(f.dataMin,f.min))&&a.error(10,1),f.min=g(l(f.min),15),f.max=g(l(f.max),15));f.range&&q(f.max)&&(f.userMin=f.min=M=Math.max(f.min,f.minFromRange()),f.userMax=A=f.max,f.range=null);n(f,"foundExtremes");f.beforePadding&&
f.beforePadding();f.adjustForMinRange();!(m||f.axisPointRange||f.usePercentage||w)&&q(f.min)&&q(f.max)&&(l=f.max-f.min)&&(!q(M)&&E&&(f.min-=l*E),!q(A)&&y&&(f.max+=l*y));D(p.softMin)&&(f.min=Math.min(f.min,p.softMin));D(p.softMax)&&(f.max=Math.max(f.max,p.softMax));D(p.floor)&&(f.min=Math.max(f.min,p.floor));D(p.ceiling)&&(f.max=Math.min(f.max,p.ceiling));u&&q(f.dataMin)&&(H=H||0,!q(M)&&f.min<H&&f.dataMin>=H?f.min=H:!q(A)&&f.max>H&&f.dataMax<=H&&(f.max=H));f.tickInterval=f.min===f.max||void 0===f.min||
void 0===f.max?1:w&&!k&&I===f.linkedParent.options.tickPixelInterval?k=f.linkedParent.tickInterval:z(k,this.tickAmount?(f.max-f.min)/Math.max(this.tickAmount-1,1):void 0,m?1:(f.max-f.min)*I/Math.max(f.len,I));x&&!b&&h(f.series,function(a){a.processData(f.min!==f.oldMin||f.max!==f.oldMax)});f.setAxisTranslation(!0);f.beforeSetTickPositions&&f.beforeSetTickPositions();f.postProcessTickInterval&&(f.tickInterval=f.postProcessTickInterval(f.tickInterval));f.pointRange&&!k&&(f.tickInterval=Math.max(f.pointRange,
f.tickInterval));b=z(p.minTickInterval,f.isDatetimeAxis&&f.closestPointRange);!k&&f.tickInterval<b&&(f.tickInterval=b);r||e||k||(f.tickInterval=B(f.tickInterval,null,c(f.tickInterval),z(p.allowDecimals,!(.5<f.tickInterval&&5>f.tickInterval&&1E3<f.max&&9999>f.max)),!!this.tickAmount));this.tickAmount||(f.tickInterval=f.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,d=a.tickPositioner,p=a.startOnTick,l=a.endOnTick;this.tickmarkOffset=this.categories&&
"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.single=this.min===this.max&&q(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,
!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,d&&(d=d.apply(this,[this.min,this.max])))&&(this.tickPositions=b=d);this.paddedTicks=b.slice(0);this.trimTicks(b,p,l);this.isLinked||(this.single&&(this.min-=.5,this.max+=.5),c||d||this.adjustTickAmount())},trimTicks:function(a,b,c){var f=a[0],d=a[a.length-1],p=this.minPointOffset||0;if(!this.isLinked){if(b&&
-Infinity!==f)this.min=f;else for(;this.min-p>a[0];)a.shift();if(c)this.max=d;else for(;this.max+p<a[a.length-1];)a.pop();0===a.length&&q(f)&&a.push((d+f)/2)}},alignToOthers:function(){var a={},b,c=this.options;!1===this.chart.options.chart.alignTicks||!1===c.alignTicks||this.isLog||h(this.chart[this.coll],function(f){var c=f.options,c=[f.horiz?c.left:c.top,c.width,c.height,c.pane].join();f.series.length&&(a[c]?b=!0:a[c]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=
a.tickPixelInterval;!q(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,d=this.finalTickAmt,p=b&&b.length;if(p<c){for(;b.length<c;)b.push(g(b[b.length-1]+a));this.transA*=(p-1)/(c-1);this.max=b[b.length-1]}else p>c&&(this.tickInterval*=2,this.setTickPositions());
if(q(d)){for(a=c=b.length;a--;)(3===d&&1===a%2||2>=d&&0<a&&a<c-1)&&b.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;h(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=
!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,d,p){var f=this,l=f.chart;c=z(c,!0);h(f.series,function(a){delete a.kdTree});p=e(p,{min:a,max:b});n(f,"setExtremes",p,function(){f.userMin=a;f.userMax=b;f.eventArgs=p;c&&l.redraw(d)})},zoom:function(a,b){var f=this.dataMin,c=this.dataMax,d=this.options,
p=Math.min(f,z(d.min,f)),d=Math.max(c,z(d.max,c));if(a!==this.min||b!==this.max)this.allowZoomOutside||(q(f)&&(a<p&&(a=p),a>d&&(a=d)),q(c)&&(b<p&&(b=p),b>d&&(b=d))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsets||[0,0,0,0],d=this.horiz,p=z(b.width,a.plotWidth-c[3]+c[1]),l=z(b.height,a.plotHeight-c[0]+c[2]),e=z(b.top,a.plotTop+c[0]),b=z(b.left,a.plotLeft+c[3]),c=/%$/;c.test(l)&&(l=
Math.round(parseFloat(l)/100*a.plotHeight));c.test(e)&&(e=Math.round(parseFloat(e)/100*a.plotHeight+a.plotTop));this.left=b;this.top=e;this.width=p;this.height=l;this.bottom=a.chartHeight-l-e;this.right=a.chartWidth-p-b;this.len=Math.max(d?p:l,0);this.pos=d?b:e},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?g(b(this.min)):this.min,max:a?g(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=
this.isLog,f=this.lin2log,c=b?f(this.min):this.min,b=b?f(this.max):this.max;null===a?a=c:c>a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(z(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,f=b[a+"Length"],c=z(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(c&&f)return"inside"===b[a+"Position"]&&(f=-f),[f,c]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,d=c,p=this.len/(((this.categories?1:0)+this.max-this.min)/c),l,e=a.rotation,r=this.labelMetrics(),n,w=Number.MAX_VALUE,g,y=function(a){a/=p||1;a=1<a?Math.ceil(a):1;return a*c};b?(g=!a.staggerLines&&!a.step&&(q(e)?[e]:p<z(a.autoRotationLimit,80)&&a.autoRotation))&&h(g,function(a){var b;if(a===e||a&&-90<=a&&90>=a)n=y(Math.abs(r.h/Math.sin(v*a))),b=n+
Math.abs(a/360),b<w&&(w=b,l=a,d=n)}):a.step||(d=y(r.h));this.autoRotation=g;this.labelRotation=z(l,e);return d},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),p=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/d||!b&&(p&&p-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,d=this.ticks,p=this.options.labels,e=this.horiz,
r=this.getSlotWidth(),x=Math.max(1,Math.round(r-2*(p.padding||5))),n={},w=this.labelMetrics(),g=p.style&&p.style.textOverflow,y,E=0,k,I;H(p.rotation)||(n.rotation=p.rotation||0);h(c,function(a){(a=d[a])&&a.labelLength>E&&(E=a.labelLength)});this.maxLabelLength=E;if(this.autoRotation)E>x&&E>w.h?n.rotation=this.labelRotation:this.labelRotation=0;else if(r&&(y={width:x+"px"},!g))for(y.textOverflow="clip",k=c.length;!e&&k--;)if(I=c[k],x=d[I].label)x.styles&&"ellipsis"===x.styles.textOverflow?x.css({textOverflow:"clip"}):
d[I].labelLength>r&&x.css({width:r+"px"}),x.getBBox().height>this.len/c.length-(w.h-w.f)&&(x.specCss={textOverflow:"ellipsis"});n.rotation&&(y={width:(E>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},g||(y.textOverflow="ellipsis"));if(this.labelAlign=p.align||this.autoLabelAlign(this.labelRotation))n.align=this.labelAlign;h(c,function(a){var b=(a=d[a])&&a.label;b&&(b.attr(n),y&&b.css(l(y,b.specCss)),delete b.specCss,a.rotation=n.rotation)});this.tickRotCorr=b.rotCorr(w.b,this.labelRotation||
0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||q(this.min)&&q(this.max)&&!!this.tickPositions},addTitle:function(a){var b=this.chart.renderer,f=this.horiz,c=this.opposite,d=this.options.title,p;this.axisTitle||((p=d.textAlign)||(p=(f?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",middle:"center",high:c?"left":"right"})[d.align]),this.axisTitle=b.text(d.text,0,0,d.useHTML).attr({zIndex:7,rotation:d.rotation||0,align:p}).addClass("highcharts-axis-title").css(d.style).add(this.axisGroup),
this.axisTitle.isNew=!0);this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new I(this,a)},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,p=a.tickPositions,l=a.ticks,e=a.horiz,x=a.side,n=b.inverted&&!a.isZAxis?[1,0,3,2][x]:x,w,g,y=0,E,k=0,I=d.title,D=d.labels,m=0,B=b.axisOffset,b=b.clipOffset,H=[-1,1,1,-1][x],u=d.className,L=a.axisParent,v=this.tickSize("tick");w=a.hasData();a.showAxis=g=w||z(d.showEmpty,!0);a.staggerLines=
a.horiz&&D.staggerLines;a.axisGroup||(a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(u||"")).add(L),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(u||"")).add(L),a.labelGroup=c.g("axis-labels").attr({zIndex:D.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(u||"")).add(L));w||a.isLinked?(h(p,function(b,c){a.generateTick(b,c)}),a.renderUnsquish(),!1===D.reserveSpace||
0!==x&&2!==x&&{1:"left",3:"right"}[x]!==a.labelAlign&&"center"!==a.labelAlign||h(p,function(a){m=Math.max(l[a].getLabelSize(),m)}),a.staggerLines&&(m*=a.staggerLines,a.labelOffset=m*(a.opposite?-1:1))):r(l,function(a,b){a.destroy();delete l[b]});I&&I.text&&!1!==I.enabled&&(a.addTitle(g),g&&!1!==I.reserveSpace&&(a.titleOffset=y=a.axisTitle.getBBox()[e?"height":"width"],E=I.offset,k=q(E)?0:z(I.margin,e?5:10)));a.renderLine();a.offset=H*z(d.offset,B[x]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=0===x?
-a.labelMetrics().h:2===x?a.tickRotCorr.y:0;k=Math.abs(m)+k;m&&(k=k-c+H*(e?z(D.y,a.tickRotCorr.y+8*H):D.x));a.axisTitleMargin=z(E,k);B[x]=Math.max(B[x],a.axisTitleMargin+y+H*a.offset,k,w&&p.length&&v?v[0]+H*a.offset:0);p=2*Math.floor(a.axisLine.strokeWidth()/2);0<d.offset&&(p-=2*d.offset);b[n]=Math.max(b[n]||p,p)},getLinePath:function(a){var b=this.chart,c=this.opposite,f=this.offset,d=this.horiz,p=this.left+(c?this.width:0)+f,f=b.chartHeight-this.bottom-(c?this.height:0)+f;c&&(a*=-1);return b.renderer.crispLine(["M",
d?this.left:p,d?f:this.top,"L",d?b.chartWidth-this.right:p,d?f:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,p=this.options.title,l=a?b:c,e=this.opposite,r=this.offset,h=p.x||0,n=p.y||0,w=this.chart.renderer.fontMetrics(p.style&&
p.style.fontSize,this.axisTitle).f,d={low:l+(a?0:d),middle:l+d/2,high:l+(a?d:0)}[p.align],b=(a?c+this.height:b)+(a?1:-1)*(e?-1:1)*this.axisTitleMargin+(2===this.side?w:0);return{x:a?d+h:b+(e?this.width:0)+r+h,y:a?b+n-(e?this.height:0)+r:d+n}},renderMinorTick:function(a){var b=this.chart.hasRendered&&D(this.oldMin),c=this.minorTicks;c[a]||(c[a]=new I(this,a,"minor"));b&&c[a].isNew&&c[a].render(null,!0);c[a].render(null,!1,1)},renderTick:function(a,b){var c=this.isLinked,f=this.ticks,d=this.chart.hasRendered&&
D(this.oldMin);if(!c||a>=this.min&&a<=this.max)f[a]||(f[a]=new I(this,a)),d&&f[a].isNew&&f[a].render(b,!0,.1),f[a].render(b)},render:function(){var b=this,c=b.chart,d=b.options,p=b.isLog,l=b.lin2log,e=b.isLinked,n=b.tickPositions,x=b.axisTitle,w=b.ticks,g=b.minorTicks,y=b.alternateBands,k=d.stackLabels,m=d.alternateGridColor,q=b.tickmarkOffset,z=b.axisLine,B=b.showAxis,H=A(c.renderer.globalAnimation),u,L;b.labelEdge.length=0;b.overlap=!1;h([w,g,y],function(a){r(a,function(a){a.isActive=!1})});if(b.hasData()||
e)b.minorTickInterval&&!b.categories&&h(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),n.length&&(h(n,function(a,c){b.renderTick(a,c)}),q&&(0===b.min||b.single)&&(w[-1]||(w[-1]=new I(b,-1,null,!0)),w[-1].render(-1))),m&&h(n,function(f,d){L=void 0!==n[d+1]?n[d+1]+q:b.max-q;0===d%2&&f<b.max&&L<=b.max+(c.polar?-q:q)&&(y[f]||(y[f]=new a.PlotLineOrBand(b)),u=f+q,y[f].options={from:p?l(u):u,to:p?l(L):L,color:m},y[f].render(),y[f].isActive=!0)}),b._addedPlotLB||(h((d.plotLines||[]).concat(d.plotBands||
[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);h([w,g,y],function(a){var b,f=[],d=H.duration;r(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,f.push(b))});E(function(){for(b=f.length;b--;)a[f[b]]&&!a[f[b]].isActive&&(a[f[b]].destroy(),delete a[f[b]])},a!==y&&c.hasRendered&&d?d:0)});z&&(z[z.isPlaced?"animate":"attr"]({d:this.getLinePath(z.strokeWidth())}),z.isPlaced=!0,z[B?"show":"hide"](!0));x&&B&&(d=b.getTitlePosition(),D(d.y)?(x[x.isNew?"attr":"animate"](d),x.isNew=!1):
(x.attr("y",-9999),x.isNew=!0));k&&k.enabled&&b.renderStackTotals();b.isDirty=!1},redraw:function(){this.visible&&(this.render(),h(this.plotLinesAndBands,function(a){a.render()}));h(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var c=this,f=c.stacks,d=c.plotLinesAndBands,p;a||M(c);r(f,function(a,b){u(a);f[b]=null});h([c.ticks,c.minorTicks,c.alternateBands],function(a){u(a)});if(d)for(a=d.length;a--;)d[a].destroy();h("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),
function(a){c[a]&&(c[a]=c[a].destroy())});for(p in c.plotLinesAndBandsGroups)c.plotLinesAndBandsGroups[p]=c.plotLinesAndBandsGroups[p].destroy();r(c,function(a,f){-1===b(f,c.keepProps)&&delete c[f]})},drawCrosshair:function(a,b){var c,f=this.crosshair,d=z(f.snap,!0),p,l=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(q(b)||!d)?(d?q(b)&&(p=this.isXAxis?b.plotX:this.len-b.plotY):p=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),q(p)&&(c=this.getPlotLinePath(b&&(this.isXAxis?
b.x:z(b.stackY,b.y)),null,null,null,p)||null),q(c)?(b=this.categories&&!this.isRadial,l||(this.cross=l=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+f.className).attr({zIndex:z(f.zIndex,2)}).add(),l.attr({stroke:f.color||(b?m("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":z(f.width,1)}),f.dashStyle&&l.attr({dashstyle:f.dashStyle})),l.show().attr({d:c}),b&&!f.width&&l.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):
this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=L}(K);(function(a){var C=a.Axis,A=a.Date,G=a.dateFormat,F=a.defaultOptions,m=a.defined,g=a.each,k=a.extend,q=a.getMagnitude,v=a.getTZOffset,u=a.normalizeTickInterval,h=a.pick,e=a.timeUnits;C.prototype.getTimeTicks=function(a,d,c,w){var b=[],n={},D=F.global.useUTC,q,l=new A(d-Math.max(v(d),v(c))),B=A.hcMakeTime,r=a.unitRange,z=a.count,u;if(m(d)){l[A.hcSetMilliseconds](r>=e.second?0:z*Math.floor(l.getMilliseconds()/
z));if(r>=e.second)l[A.hcSetSeconds](r>=e.minute?0:z*Math.floor(l.getSeconds()/z));if(r>=e.minute)l[A.hcSetMinutes](r>=e.hour?0:z*Math.floor(l[A.hcGetMinutes]()/z));if(r>=e.hour)l[A.hcSetHours](r>=e.day?0:z*Math.floor(l[A.hcGetHours]()/z));if(r>=e.day)l[A.hcSetDate](r>=e.month?1:z*Math.floor(l[A.hcGetDate]()/z));r>=e.month&&(l[A.hcSetMonth](r>=e.year?0:z*Math.floor(l[A.hcGetMonth]()/z)),q=l[A.hcGetFullYear]());if(r>=e.year)l[A.hcSetFullYear](q-q%z);if(r===e.week)l[A.hcSetDate](l[A.hcGetDate]()-l[A.hcGetDay]()+
h(w,1));q=l[A.hcGetFullYear]();w=l[A.hcGetMonth]();var p=l[A.hcGetDate](),E=l[A.hcGetHours]();if(A.hcTimezoneOffset||A.hcGetTimezoneOffset)u=(!D||!!A.hcGetTimezoneOffset)&&(c-d>4*e.month||v(d)!==v(c)),l=l.getTime(),l=new A(l+v(l));D=l.getTime();for(d=1;D<c;)b.push(D),D=r===e.year?B(q+d*z,0):r===e.month?B(q,w+d*z):!u||r!==e.day&&r!==e.week?u&&r===e.hour?B(q,w,p,E+d*z):D+r*z:B(q,w,p+d*z*(r===e.day?1:7)),d++;b.push(D);r<=e.hour&&1E4>b.length&&g(b,function(a){0===a%18E5&&"000000000"===G("%H%M%S%L",a)&&
(n[a]="day")})}b.info=k(a,{higherRanks:n,totalRange:r*z});return b};C.prototype.normalizeTimeTickInterval=function(a,d){var c=d||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];d=c[c.length-1];var h=e[d[0]],b=d[1],n;for(n=0;n<c.length&&!(d=c[n],h=e[d[0]],b=d[1],c[n+1]&&a<=(h*b[b.length-1]+e[c[n+1][0]])/2);n++);h===e.year&&a<5*h&&(b=[1,2,5]);a=u(a/h,b,
"year"===d[0]?Math.max(q(a/h),1):1);return{unitRange:h,count:a,unitName:d[0]}}})(K);(function(a){var C=a.Axis,A=a.getMagnitude,G=a.map,F=a.normalizeTickInterval,m=a.pick;C.prototype.getLogTickPositions=function(a,k,q,v){var g=this.options,h=this.len,e=this.lin2log,n=this.log2lin,d=[];v||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),d=this.getLinearTickPositions(a,k,q);else if(.08<=a)for(var h=Math.floor(k),c,w,b,y,D,g=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];h<q+1&&!D;h++)for(w=
g.length,c=0;c<w&&!D;c++)b=n(e(h)*g[c]),b>k&&(!v||y<=q)&&void 0!==y&&d.push(y),y>q&&(D=!0),y=b;else k=e(k),q=e(q),a=g[v?"minorTickInterval":"tickInterval"],a=m("auto"===a?null:a,this._minorAutoInterval,g.tickPixelInterval/(v?5:1)*(q-k)/((v?h/this.tickPositions.length:h)||1)),a=F(a,null,A(a)),d=G(this.getLinearTickPositions(a,k,q),n),v||(this._minorAutoInterval=a/5);v||(this.tickInterval=a);return d};C.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};C.prototype.lin2log=function(a){return Math.pow(10,
a)}})(K);(function(a,C){var A=a.arrayMax,G=a.arrayMin,F=a.defined,m=a.destroyObjectProperties,g=a.each,k=a.erase,q=a.merge,v=a.pick;a.PlotLineOrBand=function(a,h){this.axis=a;h&&(this.options=h,this.id=h.id)};a.PlotLineOrBand.prototype={render:function(){var g=this,h=g.axis,e=h.horiz,n=g.options,d=n.label,c=g.label,w=n.to,b=n.from,y=n.value,k=F(b)&&F(w),m=F(y),l=g.svgElem,B=!l,r=[],z=n.color,M=v(n.zIndex,0),p=n.events,r={"class":"highcharts-plot-"+(k?"band ":"line ")+(n.className||"")},E={},I=h.chart.renderer,
L=k?"bands":"lines",f=h.log2lin;h.isLog&&(b=f(b),w=f(w),y=f(y));m?(r={stroke:z,"stroke-width":n.width},n.dashStyle&&(r.dashstyle=n.dashStyle)):k&&(z&&(r.fill=z),n.borderWidth&&(r.stroke=n.borderColor,r["stroke-width"]=n.borderWidth));E.zIndex=M;L+="-"+M;(z=h.plotLinesAndBandsGroups[L])||(h.plotLinesAndBandsGroups[L]=z=I.g("plot-"+L).attr(E).add());B&&(g.svgElem=l=I.path().attr(r).add(z));if(m)r=h.getPlotLinePath(y,l.strokeWidth());else if(k)r=h.getPlotBandPath(b,w,n);else return;B&&r&&r.length?(l.attr({d:r}),
p&&a.objectEach(p,function(a,b){l.on(b,function(a){p[b].apply(g,[a])})})):l&&(r?(l.show(),l.animate({d:r})):(l.hide(),c&&(g.label=c=c.destroy())));d&&F(d.text)&&r&&r.length&&0<h.width&&0<h.height&&!r.flat?(d=q({align:e&&k&&"center",x:e?!k&&4:10,verticalAlign:!e&&k&&"middle",y:e?k?16:10:k?6:-4,rotation:e&&!k&&90},d),this.renderLabel(d,r,k,M)):c&&c.hide();return g},renderLabel:function(a,h,e,n){var d=this.label,c=this.axis.chart.renderer;d||(d={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+
(e?"band":"line")+"-label "+(a.className||"")},d.zIndex=n,this.label=d=c.text(a.text,0,0,a.useHTML).attr(d).add(),d.css(a.style));n=[h[1],h[4],e?h[6]:h[1]];h=[h[2],h[5],e?h[7]:h[2]];e=G(n);c=G(h);d.align(a,!1,{x:e,y:c,width:A(n)-e,height:A(h)-c});d.show()},destroy:function(){k(this.axis.plotLinesAndBands,this);delete this.axis;m(this)}};a.extend(C.prototype,{getPlotBandPath:function(a,h){var e=this.getPlotLinePath(h,null,null,!0),n=this.getPlotLinePath(a,null,null,!0),d=this.horiz,c=1;a=a<this.min&&
h<this.min||a>this.max&&h>this.max;n&&e?(a&&(n.flat=n.toString()===e.toString(),c=0),n.push(d&&e[4]===n[4]?e[4]+c:e[4],d||e[5]!==n[5]?e[5]:e[5]+c,d&&e[1]===n[1]?e[1]+c:e[1],d||e[2]!==n[2]?e[2]:e[2]+c)):n=null;return n},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(g,h){var e=(new a.PlotLineOrBand(this,g)).render(),n=this.userOptions;e&&(h&&(n[h]=n[h]||[],n[h].push(g)),this.plotLinesAndBands.push(e));
return e},removePlotBandOrLine:function(a){for(var h=this.plotLinesAndBands,e=this.options,n=this.userOptions,d=h.length;d--;)h[d].id===a&&h[d].destroy();g([e.plotLines||[],n.plotLines||[],e.plotBands||[],n.plotBands||[]],function(c){for(d=c.length;d--;)c[d].id===a&&k(c,c[d])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(K,S);(function(a){var C=a.dateFormat,A=a.each,G=a.extend,F=a.format,m=a.isNumber,g=a.map,k=a.merge,q=a.pick,
v=a.splat,u=a.syncTimeout,h=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,h){this.chart=a;this.options=h;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=h.split&&!a.inverted;this.shared=h.shared||this.split},cleanSplit:function(a){A(this.chart.series,function(e){var d=e&&e.tt;d&&(!d.isActive||a?e.tt=d.destroy():d.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,h=this.options;this.label||(this.split?this.label=
a.g("tooltip"):(this.label=a.label("",0,0,h.shape||"callout",null,null,h.useHTML,null,"tooltip").attr({padding:h.padding,r:h.borderRadius}),this.label.attr({fill:h.backgroundColor,"stroke-width":h.borderWidth}).css(h.style).shadow(h.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();k(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,k(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&
(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,h,d,c){var e=this,b=e.now,n=!1!==e.options.animation&&!e.isHidden&&(1<Math.abs(a-b.x)||1<Math.abs(h-b.y)),g=e.followPointer||1<e.len;G(b,{x:n?(2*b.x+a)/3:a,y:n?(b.y+h)/2:h,anchorX:g?void 0:n?(2*b.anchorX+d)/3:d,anchorY:g?void 0:n?(b.anchorY+c)/2:c});e.getLabel().attr(b);n&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,
h,d,c)},32))},hide:function(a){var e=this;clearTimeout(this.hideTimer);a=q(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=u(function(){e.getLabel()[a?"fadeOut":"hide"]();e.isHidden=!0},a))},getAnchor:function(a,h){var d,c=this.chart,e=c.inverted,b=c.plotTop,n=c.plotLeft,k=0,m=0,l,q;a=v(a);d=a[0].tooltipPos;this.followPointer&&h&&(void 0===h.chartX&&(h=c.pointer.normalize(h)),d=[h.chartX-c.plotLeft,h.chartY-b]);d||(A(a,function(a){l=a.series.yAxis;q=a.series.xAxis;k+=a.plotX+(!e&&q?q.left-
n:0);m+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&l?l.top-b:0)}),k/=a.length,m/=a.length,d=[e?c.plotWidth-m:k,this.shared&&!e&&1<a.length&&h?h.chartY-b:e?c.plotHeight-k:m]);return g(d,Math.round)},getPosition:function(a,h,d){var c=this.chart,e=this.distance,b={},n=d.h||0,g,k=["y",c.chartHeight,h,d.plotY+c.plotTop,c.plotTop,c.plotTop+c.plotHeight],l=["x",c.chartWidth,a,d.plotX+c.plotLeft,c.plotLeft,c.plotLeft+c.plotWidth],m=!this.followPointer&&q(d.ttBelow,!c.inverted===!!d.negative),r=function(a,
c,d,f,p,l){var h=d<f-e,r=f+e+d<c,g=f-e-d;f+=e;if(m&&r)b[a]=f;else if(!m&&h)b[a]=g;else if(h)b[a]=Math.min(l-d,0>g-n?g:g-n);else if(r)b[a]=Math.max(p,f+n+d>c?f:f+n);else return!1},z=function(a,c,d,f){var p;f<e||f>c-e?p=!1:b[a]=f<d/2?1:f>c-d/2?c-d-2:f-d/2;return p},v=function(a){var b=k;k=l;l=b;g=a},p=function(){!1!==r.apply(0,k)?!1!==z.apply(0,l)||g||(v(!0),p()):g?b.x=b.y=0:(v(!0),p())};(c.inverted||1<this.len)&&v();p();return b},defaultFormatter:function(a){var e=this.points||v(this),d;d=[a.tooltipFooterHeaderFormatter(e[0])];
d=d.concat(a.bodyFormatter(e));d.push(a.tooltipFooterHeaderFormatter(e[0],!0));return d},refresh:function(a,h){var d,c=this.options,e,b=a,g,n={},k=[];d=c.formatter||this.defaultFormatter;var n=this.shared,l;clearTimeout(this.hideTimer);this.followPointer=v(b)[0].series.tooltipOptions.followPointer;g=this.getAnchor(b,h);h=g[0];e=g[1];!n||b.series&&b.series.noSharedTooltip?n=b.getLabelConfig():(A(b,function(a){a.setState("hover");k.push(a.getLabelConfig())}),n={x:b[0].category,y:b[0].y},n.points=k,
b=b[0]);this.len=k.length;n=d.call(n,this);l=b.series;this.distance=q(l.tooltipOptions.distance,16);!1===n?this.hide():(d=this.getLabel(),this.isHidden&&d.attr({opacity:1}).show(),this.split?this.renderSplit(n,a):(c.style.width||d.css({width:this.chart.spacingBox.width}),d.attr({text:n&&n.join?n.join(""):n}),d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+q(b.colorIndex,l.colorIndex)),d.attr({stroke:c.borderColor||b.color||l.color||"#666666"}),this.updatePosition({plotX:h,plotY:e,
negative:b.negative,ttBelow:b.ttBelow,h:g[2]||0})),this.isHidden=!1)},renderSplit:function(e,h){var d=this,c=[],g=this.chart,b=g.renderer,n=!0,k=this.options,m,l=this.getLabel();A(e.slice(0,h.length+1),function(a,e){e=h[e-1]||{isHeader:!0,plotX:h[0].plotX};var r=e.series||d,w=r.tt,p=e.series||{},y="highcharts-color-"+q(e.colorIndex,p.colorIndex,"none");w||(r.tt=w=b.label(null,null,null,"callout").addClass("highcharts-tooltip-box "+y).attr({padding:k.padding,r:k.borderRadius,fill:k.backgroundColor,
stroke:e.color||p.color||"#333333","stroke-width":k.borderWidth}).add(l));w.isActive=!0;w.attr({text:a});w.css(k.style);a=w.getBBox();p=a.width+w.strokeWidth();e.isHeader?(m=a.height,p=Math.max(0,Math.min(e.plotX+g.plotLeft-p/2,g.chartWidth-p))):p=e.plotX+g.plotLeft-q(k.distance,16)-p;0>p&&(n=!1);a=(e.series&&e.series.yAxis&&e.series.yAxis.pos)+(e.plotY||0);a-=g.plotTop;c.push({target:e.isHeader?g.plotHeight+m:a,rank:e.isHeader?1:0,size:r.tt.getBBox().height+1,point:e,x:p,tt:w})});this.cleanSplit();
a.distribute(c,g.plotHeight+m);A(c,function(a){var b=a.point,c=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:n||b.isHeader?a.x:b.plotX+g.plotLeft+q(k.distance,16),y:a.pos+g.plotTop,anchorX:b.isHeader?b.plotX+g.plotLeft:b.plotX+c.xAxis.pos,anchorY:b.isHeader?a.pos+g.plotTop-15:b.plotY+c.yAxis.pos})})},updatePosition:function(a){var e=this.chart,d=this.getLabel(),d=(this.options.positioner||this.getPosition).call(this,d.width,d.height,a);this.move(Math.round(d.x),Math.round(d.y||
0),a.plotX+e.plotLeft,a.plotY+e.plotTop)},getDateFormat:function(a,g,d,c){var e=C("%m-%d %H:%M:%S.%L",g),b,n,k={millisecond:15,second:12,minute:9,hour:6,day:3},m="millisecond";for(n in h){if(a===h.week&&+C("%w",g)===d&&"00:00:00.000"===e.substr(6)){n="week";break}if(h[n]>a){n=m;break}if(k[n]&&e.substr(k[n])!=="01-01 00:00:00.000".substr(k[n]))break;"week"!==n&&(m=n)}n&&(b=c[n]);return b},getXDateFormat:function(a,h,d){h=h.dateTimeLabelFormats;var c=d&&d.closestPointRange;return(c?this.getDateFormat(c,
a.x,d.options.startOfWeek,h):h.day)||h.year},tooltipFooterHeaderFormatter:function(a,h){var d=h?"footer":"header";h=a.series;var c=h.tooltipOptions,e=c.xDateFormat,b=h.xAxis,g=b&&"datetime"===b.options.type&&m(a.key),d=c[d+"Format"];g&&!e&&(e=this.getXDateFormat(a,c,b));g&&e&&(d=d.replace("{point.key}","{point.key:"+e+"}"));return F(d,{point:a,series:h})},bodyFormatter:function(a){return g(a,function(a){var d=a.series.tooltipOptions;return(d.pointFormatter||a.point.tooltipFormatter).call(a.point,
d.pointFormat)})}}})(K);(function(a){var C=a.addEvent,A=a.attr,G=a.charts,F=a.color,m=a.css,g=a.defined,k=a.doc,q=a.each,v=a.extend,u=a.fireEvent,h=a.offset,e=a.pick,n=a.removeEvent,d=a.splat,c=a.Tooltip,w=a.win;a.Pointer=function(a,c){this.init(a,c)};a.Pointer.prototype={init:function(a,d){this.options=d;this.chart=a;this.runChartClick=d.chart.events&&!!d.chart.events.click;this.pinchDown=[];this.lastValidTouch={};c&&d.tooltip.enabled&&(a.tooltip=new c(a,d.tooltip),this.followTouchMove=e(d.tooltip.followTouchMove,
!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,d=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(d=e(c.pinchType,d));this.zoomX=a=/x/.test(d);this.zoomY=d=/y/.test(d);this.zoomHor=a&&!b||d&&b;this.zoomVert=d&&!b||a&&b;this.hasZoom=a||d},normalize:function(a,c){var b,d;a=a||w.event;a.target||(a.target=a.srcElement);d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;c||(this.chartPosition=c=h(this.chart.container));void 0===d.pageX?(b=Math.max(a.x,
a.clientX-c.left),c=a.y):(b=d.pageX-c.left,c=d.pageY-c.top);return v(a,{chartX:Math.round(b),chartY:Math.round(c)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};q(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},getKDPoints:function(a,c,d){var b=[],l,h,r;q(a,function(a){l=a.noSharedTooltip&&c;h=!c&&a.directTouch;a.visible&&!h&&e(a.options.enableMouseTracking,!0)&&(r=a.searchPoint(d,!l&&0>a.options.findNearestPointBy.indexOf("y")))&&
r.series&&b.push(r)});b.sort(function(a,b){var d=a.distX-b.distX,l=a.dist-b.dist,e=(b.series.group&&b.series.group.zIndex)-(a.series.group&&a.series.group.zIndex);return 0!==d&&c?d:0!==l?l:0!==e?e:a.series.index>b.series.index?-1:1});if(c&&b[0]&&!b[0].series.noSharedTooltip)for(a=b.length;a--;)(b[a].x!==b[0].x||b[a].series.noSharedTooltip)&&b.splice(a,1);return b},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,c){var b=
a.series,d=b.xAxis,b=b.yAxis;if(d&&b)return c?{chartX:d.len+d.pos-a.clientX,chartY:b.len+b.pos-a.plotY}:{chartX:a.clientX+d.pos,chartY:a.plotY+b.pos}},getHoverData:function(b,c,d,e,l,h){var r=b,g=c,r=l?d:[g];e=!(!e||!b);c=g&&!g.stickyTracking;var n=function(a,b){return 0===b},p;e?n=function(a){return a===b}:c?n=function(a){return a.series===g}:r=a.grep(d,function(a){return a.stickyTracking});p=e&&!l?[b]:this.getKDPoints(r,l,h);g=(r=a.find(p,n))&&r.series;e||c||!l||(p=this.getKDPoints(d,l,h));p.sort(function(a,
b){return a.series.index-b.series.index});return{hoverPoint:r,hoverSeries:g,hoverPoints:p}},runPointActions:function(b,c){var d=this.chart,h=d.tooltip,l=h?h.shared:!1,g=c||d.hoverPoint,r=g&&g.series||d.hoverSeries;c=this.getHoverData(g,r,d.series,!!c||r&&r.directTouch&&this.isDirectTouch,l,b);var n,w,g=c.hoverPoint;n=(r=c.hoverSeries)&&r.tooltipOptions.followPointer;w=(l=l&&g&&!g.series.noSharedTooltip)?c.hoverPoints:g?[g]:[];if(g&&(g!==d.hoverPoint||h&&h.isHidden)){q(d.hoverPoints||[],function(b){-1===
a.inArray(b,w)&&b.setState()});q(w||[],function(a){a.setState("hover")});if(d.hoverSeries!==r)r.onMouseOver();d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut");g.firePointEvent("mouseOver");d.hoverPoints=w;d.hoverPoint=g;h&&h.refresh(l?w:g,b)}else n&&h&&!h.isHidden&&(r=h.getAnchor([{}],b),h.updatePosition({plotX:r[0],plotY:r[1]}));this.unDocMouseMove||(this.unDocMouseMove=C(k,"mousemove",function(b){var c=G[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));q(d.axes,function(c){e(c.crosshair.snap,
!0)?a.find(w,function(a){return a.series[c.coll]===c})?c.drawCrosshair(b,g):c.hideCrosshair():c.drawCrosshair(b)})},reset:function(a,c){var b=this.chart,e=b.hoverSeries,l=b.hoverPoint,h=b.hoverPoints,g=b.tooltip,n=g&&g.shared?h:l;a&&n&&q(d(n),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)g&&n&&(g.refresh(n),l&&(l.setState(l.state,!0),q(b.axes,function(a){a.crosshair&&a.drawCrosshair(null,l)})));else{if(l)l.onMouseOut();h&&q(h,function(a){a.setState()});if(e)e.onMouseOut();g&&g.hide(c);
this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());q(b.axes,function(a){a.hideCrosshair()});this.hoverX=b.hoverPoints=b.hoverPoint=null}},scaleGroups:function(a,c){var b=this.chart,d;q(b.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&e.group&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(c?b.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});b.clipRect.attr(c||b.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=
a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,h=this.zoomHor,g=this.zoomVert,n=b.plotLeft,w=b.plotTop,p=b.plotWidth,k=b.plotHeight,m,q=this.selectionMarker,f=this.mouseDownX,t=this.mouseDownY,v=c.panKey&&a[c.panKey+"Key"];q&&q.touch||(d<n?d=n:d>n+p&&(d=n+p),e<w?e=w:e>w+k&&(e=w+k),this.hasDragged=Math.sqrt(Math.pow(f-d,2)+Math.pow(t-e,2)),10<this.hasDragged&&(m=b.isInsidePlot(f-
n,t-w),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&m&&!v&&!q&&(this.selectionMarker=q=b.renderer.rect(n,w,h?1:p,g?1:k,0).attr({fill:c.selectionMarkerFill||F("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),q&&h&&(d-=f,q.attr({width:Math.abs(d),x:(0<d?0:d)+f})),q&&g&&(d=e-t,q.attr({height:Math.abs(d),y:(0<d?0:d)+t})),m&&!q&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,
xAxis:[],yAxis:[]},h=this.selectionMarker,r=h.attr?h.attr("x"):h.x,n=h.attr?h.attr("y"):h.y,w=h.attr?h.attr("width"):h.width,p=h.attr?h.attr("height"):h.height,k;if(this.hasDragged||d)q(c.axes,function(c){if(c.zoomEnabled&&g(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var l=c.horiz,f="touchend"===a.type?c.minPixelPadding:0,h=c.toValue((l?r:n)+f),l=c.toValue((l?r+w:n+p)-f);e[c.coll].push({axis:c,min:Math.min(h,l),max:Math.max(h,l)});k=!0}}),k&&u(c,"selection",e,function(a){c.zoom(v(a,d?
{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();d&&this.scaleGroups()}c&&(m(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){G[a.hoverChartIndex]&&G[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,
c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=G[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;g(a.hoverChartIndex)&&G[a.hoverChartIndex]&&G[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;
"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,c){for(var b;a;){if(b=A(a,"class")){if(-1!==b.indexOf(c))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||
this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(u(c.series,"click",v(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(v(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&u(b,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container;c.onmousedown=
function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};c.onclick=function(a){b.onContainerClick(a)};C(c,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&C(k,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&C(k,"touchend",b.onDocumentTouchEnd))},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();n(b.chart.container,"mouseleave",
b.onContainerMouseLeave);a.chartCount||(n(k,"mouseup",b.onDocumentMouseUp),n(k,"touchend",b.onDocumentTouchEnd));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,c){b[c]=null})}}})(K);(function(a){var C=a.charts,A=a.each,G=a.extend,F=a.map,m=a.noop,g=a.pick;G(a.Pointer.prototype,{pinchTranslate:function(a,g,m,u,h,e){this.zoomHor&&this.pinchTranslateDirection(!0,a,g,m,u,h,e);this.zoomVert&&this.pinchTranslateDirection(!1,a,g,m,u,h,e)},pinchTranslateDirection:function(a,g,m,u,h,e,n,d){var c=
this.chart,w=a?"x":"y",b=a?"X":"Y",k="chart"+b,q=a?"width":"height",v=c["plot"+(a?"Left":"Top")],l,B,r=d||1,z=c.inverted,M=c.bounds[a?"h":"v"],p=1===g.length,E=g[0][k],I=m[0][k],L=!p&&g[1][k],f=!p&&m[1][k],t;m=function(){!p&&20<Math.abs(E-L)&&(r=d||Math.abs(I-f)/Math.abs(E-L));B=(v-I)/r+E;l=c["plot"+(a?"Width":"Height")]/r};m();g=B;g<M.min?(g=M.min,t=!0):g+l>M.max&&(g=M.max-l,t=!0);t?(I-=.8*(I-n[w][0]),p||(f-=.8*(f-n[w][1])),m()):n[w]=[I,f];z||(e[w]=B-v,e[q]=l);e=z?1/r:r;h[q]=l;h[w]=g;u[z?a?"scaleY":
"scaleX":"scale"+b]=r;u["translate"+b]=e*v+(I-e*E)},pinch:function(a){var k=this,v=k.chart,u=k.pinchDown,h=a.touches,e=h.length,n=k.lastValidTouch,d=k.hasZoom,c=k.selectionMarker,w={},b=1===e&&(k.inClass(a.target,"highcharts-tracker")&&v.runTrackerClick||k.runChartClick),y={};1<e&&(k.initiated=!0);d&&k.initiated&&!b&&a.preventDefault();F(h,function(a){return k.normalize(a)});"touchstart"===a.type?(A(h,function(a,b){u[b]={chartX:a.chartX,chartY:a.chartY}}),n.x=[u[0].chartX,u[1]&&u[1].chartX],n.y=[u[0].chartY,
u[1]&&u[1].chartY],A(v.axes,function(a){if(a.zoomEnabled){var b=v.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,d=a.toPixels(g(a.options.min,a.dataMin)),e=a.toPixels(g(a.options.max,a.dataMax)),h=Math.max(d,e);b.min=Math.min(a.pos,Math.min(d,e)-c);b.max=Math.max(a.pos+a.len,h+c)}}),k.res=!0):k.followTouchMove&&1===e?this.runPointActions(k.normalize(a)):u.length&&(c||(k.selectionMarker=c=G({destroy:m,touch:!0},v.plotBox)),k.pinchTranslate(u,h,w,c,y,n),k.hasPinched=d,k.scaleGroups(w,y),k.res&&(k.res=
!1,this.reset(!1,0)))},touch:function(k,m){var q=this.chart,u,h;if(q.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=q.index;1===k.touches.length?(k=this.normalize(k),(h=q.isInsidePlot(k.chartX-q.plotLeft,k.chartY-q.plotTop))&&!q.openMenu?(m&&this.runPointActions(k),"touchmove"===k.type&&(m=this.pinchDown,u=m[0]?4<=Math.sqrt(Math.pow(m[0].chartX-k.chartX,2)+Math.pow(m[0].chartY-k.chartY,2)):!1),g(u,!0)&&this.pinch(k)):m&&this.reset()):2===k.touches.length&&
this.pinch(k)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(g){C[a.hoverChartIndex]&&C[a.hoverChartIndex].pointer.drop(g)}})})(K);(function(a){var C=a.addEvent,A=a.charts,G=a.css,F=a.doc,m=a.extend,g=a.noop,k=a.Pointer,q=a.removeEvent,v=a.win,u=a.wrap;if(!a.hasTouch&&(v.PointerEvent||v.MSPointerEvent)){var h={},e=!!v.PointerEvent,n=function(){var c=[];c.item=function(a){return this[a]};a.objectEach(h,
function(a){c.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return c},d=function(c,d,b,e){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!A[a.hoverChartIndex]||(e(c),e=A[a.hoverChartIndex].pointer,e[d]({type:b,target:c.currentTarget,preventDefault:g,touches:n()}))};m(k.prototype,{onContainerPointerDown:function(a){d(a,"onContainerTouchStart","touchstart",function(a){h[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){d(a,
"onContainerTouchMove","touchmove",function(a){h[a.pointerId]={pageX:a.pageX,pageY:a.pageY};h[a.pointerId].target||(h[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){d(a,"onDocumentTouchEnd","touchend",function(a){delete h[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,e?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,e?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(F,e?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});
u(k.prototype,"init",function(a,d,b){a.call(this,d,b);this.hasZoom&&G(d.container,{"-ms-touch-action":"none","touch-action":"none"})});u(k.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(C)});u(k.prototype,"destroy",function(a){this.batchMSEvents(q);a.call(this)})}})(K);(function(a){var C=a.addEvent,A=a.css,G=a.discardElement,F=a.defined,m=a.each,g=a.isFirefox,k=a.marginNames,q=a.merge,v=a.pick,u=a.setAnimation,h=a.stableSort,e=a.win,n=a.wrap;
a.Legend=function(a,c){this.init(a,c)};a.Legend.prototype={init:function(a,c){this.chart=a;this.setOptions(c);c.enabled&&(this.render(),C(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var c=v(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=q(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=c;this.initialItemY=c-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=v(a.symbolWidth,16);this.pages=
[]},update:function(a,c){var d=this.chart;this.setOptions(q(!0,this.options,a));this.destroy();d.isDirtyLegend=d.isDirtyBox=!0;v(c,!0)&&d.redraw()},colorizeItem:function(d,c){d.legendGroup[c?"removeClass":"addClass"]("highcharts-legend-item-hidden");var e=this.options,b=d.legendItem,h=d.legendLine,g=d.legendSymbol,n=this.itemHiddenStyle.color,e=c?e.itemStyle.color:n,l=c?d.color||n:n,k=d.options&&d.options.marker,r={fill:l};b&&b.css({fill:e,color:e});h&&h.attr({stroke:l});g&&(k&&g.isMarker&&(r=d.pointAttribs(),
c||a.objectEach(r,function(a,b){r[b]=n})),g.attr(r))},positionItem:function(a){var c=this.options,d=c.symbolPadding,c=!c.rtl,b=a._legendItemPos,e=b[0],b=b[1],h=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(c?e:this.legendWidth-e-2*d-4,b);h&&(h.x=e,h.y=b)},destroyItem:function(a){var c=a.checkbox;m(["legendItem","legendLine","legendSymbol","legendGroup"],function(c){a[c]&&(a[c]=a[c].destroy())});c&&G(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}m(this.getAllItems(),
function(c){m(["legendItem","legendGroup"],a,c)});m("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(a){var c=this.group&&this.group.alignAttr,d,b=this.clipHeight||this.legendHeight,e=this.titleHeight;c&&(d=c.translateY,m(this.allItems,function(h){var g=h.checkbox,l;g&&(l=d+e+g.y+(a||0)+3,A(g,{left:c.translateX+h.checkboxOffset+g.x-20+"px",top:l+"px",display:l>d-6&&l<d+b-6?"":"none"}))}))},renderTitle:function(){var a=this.options,c=this.padding,
e=a.title,b=0;e.text&&(this.title||(this.title=this.chart.renderer.label(e.text,c-3,c-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(e.style).add(this.group)),a=this.title.getBBox(),b=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:b}));this.titleHeight=b},setText:function(d){var c=this.options;d.legendItem.attr({text:c.labelFormat?a.format(c.labelFormat,d):c.labelFormatter.call(d)})},renderItem:function(a){var c=this.chart,d=c.renderer,b=this.options,e=
"horizontal"===b.layout,h=this.symbolWidth,g=b.symbolPadding,l=this.itemStyle,n=this.itemHiddenStyle,r=this.padding,k=e?v(b.itemDistance,20):0,m=!b.rtl,p=b.width,E=b.itemMarginBottom||0,I=this.itemMarginTop,u=a.legendItem,f=!a.series,t=!f&&a.series.drawLegendSymbol?a.series:a,A=t.options,J=this.createCheckboxForItem&&A&&A.showCheckbox,A=h+g+k+(J?20:0),N=b.useHTML,C=a.options.className;u||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+t.type+"-series highcharts-color-"+a.colorIndex+(C?" "+
C:"")+(f?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=u=d.text("",m?h+g:-g,this.baseline||0,N).css(q(a.visible?l:n)).attr({align:m?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(h=l.fontSize,this.fontMetrics=d.fontMetrics(h,u),this.baseline=this.fontMetrics.f+3+I,u.attr("y",this.baseline)),this.symbolHeight=b.symbolHeight||this.fontMetrics.f,t.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,u,N),J&&this.createCheckboxForItem(a));
this.colorizeItem(a,a.visible);l.width||u.css({width:(b.itemWidth||c.spacingBox.width)-A});this.setText(a);d=u.getBBox();l=a.checkboxOffset=b.itemWidth||a.legendItemWidth||d.width+A;this.itemHeight=d=Math.round(a.legendItemHeight||d.height||this.symbolHeight);e&&this.itemX-r+l>(p||c.spacingBox.width-2*r-b.x)&&(this.itemX=r,this.itemY+=I+this.lastLineHeight+E,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,l);this.lastItemY=I+this.itemY+E;this.lastLineHeight=Math.max(d,this.lastLineHeight);
a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=l:(this.itemY+=I+d+E,this.lastLineHeight=d);this.offsetWidth=p||Math.max((e?this.itemX-r-k:l)+r,this.offsetWidth)},getAllItems:function(){var a=[];m(this.chart.series,function(c){var d=c&&c.options;c&&v(d.showInLegend,F(d.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===d.legendType?c.data:c)))});return a},adjustMargins:function(a,c){var d=this.chart,b=this.options,e=b.align.charAt(0)+b.verticalAlign.charAt(0)+b.layout.charAt(0);
b.floating||m([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(h,g){h.test(e)&&!F(a[g])&&(d[k[g]]=Math.max(d[k[g]],d.legend[(g+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][g]*b[g%2?"x":"y"]+v(b.margin,12)+c[g]))})},render:function(){var a=this,c=a.chart,e=c.renderer,b=a.group,g,n,k,l,B=a.box,r=a.options,z=a.padding;a.itemX=z;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;b||(a.group=b=e.g("legend").attr({zIndex:7}).add(),a.contentGroup=e.g().attr({zIndex:1}).add(b),a.scrollGroup=
e.g().add(a.contentGroup));a.renderTitle();g=a.getAllItems();h(g,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});r.reversed&&g.reverse();a.allItems=g;a.display=n=!!g.length;a.lastLineHeight=0;m(g,function(b){a.renderItem(b)});k=(r.width||a.offsetWidth)+z;l=a.lastItemY+a.lastLineHeight+a.titleHeight;l=a.handleOverflow(l);l+=z;B||(a.box=B=e.rect().addClass("highcharts-legend-box").attr({r:r.borderRadius}).add(b),B.isNew=!0);B.attr({stroke:r.borderColor,
"stroke-width":r.borderWidth||0,fill:r.backgroundColor||"none"}).shadow(r.shadow);0<k&&0<l&&(B[B.isNew?"attr":"animate"](B.crisp({x:0,y:0,width:k,height:l},B.strokeWidth())),B.isNew=!1);B[n?"show":"hide"]();a.legendWidth=k;a.legendHeight=l;m(g,function(b){a.positionItem(b)});n&&b.align(q(r,{width:k,height:l}),!0,"spacingBox");c.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var c=this,d=this.chart,b=d.renderer,e=this.options,h=e.y,g=this.padding,d=d.spacingBox.height+("top"===e.verticalAlign?
-h:h)-g,h=e.maxHeight,l,n=this.clipRect,r=e.navigation,k=v(r.animation,!0),q=r.arrowSize||12,p=this.nav,E=this.pages,I,u=this.allItems,f=function(a){"number"===typeof a?n.attr({height:a}):n&&(c.clipRect=n.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+g+"px,9999px,"+(g+a)+"px,0)":"auto")};"horizontal"!==e.layout||"middle"===e.verticalAlign||e.floating||(d/=2);h&&(d=Math.min(d,h));E.length=0;a>d&&!1!==r.enabled?(this.clipHeight=l=Math.max(d-20-this.titleHeight-
g,0),this.currentPage=v(this.currentPage,1),this.fullHeight=a,m(u,function(a,b){var c=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);var f=E.length;if(!f||c-E[f-1]>l&&(I||c)!==E[f-1])E.push(I||c),f++;b===u.length-1&&c+a-E[f-1]>l&&E.push(c);c!==I&&(I=c)}),n||(n=c.clipRect=b.clipRect(0,g,9999,0),c.contentGroup.clip(n)),f(l),p||(this.nav=p=b.g().attr({zIndex:1}).add(this.group),this.up=b.symbol("triangle",0,0,q,q).on("click",function(){c.scroll(-1,k)}).add(p),this.pager=b.text("",15,
10).addClass("highcharts-legend-navigation").css(r.style).add(p),this.down=b.symbol("triangle-down",0,0,q,q).on("click",function(){c.scroll(1,k)}).add(p)),c.scroll(0),a=d):p&&(f(),this.nav=p.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,c){var d=this.pages,b=d.length;a=this.currentPage+a;var e=this.clipHeight,h=this.options.navigation,g=this.pager,l=this.padding;a>b&&(a=b);0<a&&(void 0!==c&&u(c,this.chart),this.nav.attr({translateX:l,translateY:e+this.padding+
7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),g.attr({text:a+"/"+b}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===b?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?h.inactiveColor:h.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===b?h.inactiveColor:h.activeColor}).css({cursor:a===b?"default":"pointer"}),c=-d[a-1]+this.initialItemY,
this.scrollGroup.animate({translateY:c}),this.currentPage=a,this.positionCheckboxes(c))}};a.LegendSymbolMixin={drawRectangle:function(a,c){var d=a.symbolHeight,b=a.options.squareSymbol;c.legendSymbol=this.chart.renderer.rect(b?(a.symbolWidth-d)/2:0,a.baseline-d+1,b?d:a.symbolWidth,d,v(a.options.symbolRadius,d/2)).addClass("highcharts-point").attr({zIndex:3}).add(c.legendGroup)},drawLineMarker:function(a){var c=this.options,d=c.marker,b=a.symbolWidth,e=a.symbolHeight,h=e/2,g=this.chart.renderer,l=
this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var n;n={"stroke-width":c.lineWidth||0};c.dashStyle&&(n.dashstyle=c.dashStyle);this.legendLine=g.path(["M",0,a,"L",b,a]).addClass("highcharts-graph").attr(n).add(l);d&&!1!==d.enabled&&(c=Math.min(v(d.radius,h),h),0===this.symbol.indexOf("url")&&(d=q(d,{width:e,height:e}),c=0),this.legendSymbol=d=g.symbol(this.symbol,b/2-c,a-c,2*c,2*c,d).addClass("highcharts-point").add(l),d.isMarker=!0)}};(/Trident\/7\.0/.test(e.navigator.userAgent)||g)&&
n(a.Legend.prototype,"positionItem",function(a,c){var d=this,b=function(){c._legendItemPos&&a.call(d,c)};b();setTimeout(b)})})(K);(function(a){var C=a.addEvent,A=a.animate,G=a.animObject,F=a.attr,m=a.doc,g=a.Axis,k=a.createElement,q=a.defaultOptions,v=a.discardElement,u=a.charts,h=a.css,e=a.defined,n=a.each,d=a.extend,c=a.find,w=a.fireEvent,b=a.getStyle,y=a.grep,D=a.isNumber,H=a.isObject,l=a.isString,B=a.Legend,r=a.marginNames,z=a.merge,M=a.objectEach,p=a.Pointer,E=a.pick,I=a.pInt,L=a.removeEvent,
f=a.seriesTypes,t=a.splat,R=a.svg,J=a.syncTimeout,N=a.win,O=a.Renderer,P=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new P(a,b,c)};d(P.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(l(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var f,d,e=b.series,p=b.plotOptions||{};b.series=null;f=z(q,b);for(d in f.plotOptions)f.plotOptions[d].tooltip=p[d]&&z(p[d].tooltip)||void 0;f.tooltip.userOptions=
b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;f.series=b.series=e;this.userOptions=b;b=f.chart;d=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.callback=c;this.isResizing=0;this.options=f;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var h=this;h.index=u.length;u.push(h);a.chartCount++;d&&M(d,function(a,b){C(h,b,a)});h.xAxis=[];h.yAxis=[];h.pointCount=h.colorCounter=h.symbolCounter=0;h.firstRender()},initSeries:function(b){var c=this.options.chart;
(c=f[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].name||"Series "+(b[a].index+1))},isInsidePlot:function(a,b,c){var f=c?b:a;a=c?a:b;return 0<=f&&f<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var c=this.axes,f=this.series,e=this.pointer,p=this.legend,h=this.isDirtyLegend,l,g,r=this.hasCartesianSeries,t=this.isDirtyBox,x,k=this.renderer,m=
k.isHidden(),E=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);m&&this.temporaryDisplay();this.layOutTitles();for(b=f.length;b--;)if(x=f[b],x.options.stacking&&(l=!0,x.isDirty)){g=!0;break}if(g)for(b=f.length;b--;)x=f[b],x.options.stacking&&(x.isDirty=!0);n(f,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),h=!0);a.isDirtyData&&w(a,"updatedData")});h&&p.options.enabled&&(p.render(),this.isDirtyLegend=!1);l&&this.getStacks();r&&n(c,function(a){a.updateNames();
a.setScale()});this.getMargins();r&&(n(c,function(a){a.isDirty&&(t=!0)}),n(c,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,E.push(function(){w(a,"afterSetExtremes",d(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(t||l)&&a.redraw()}));t&&this.drawChartBox();w(this,"predraw");n(f,function(a){(t||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});e&&e.reset(!0);k.draw();w(this,"redraw");w(this,"render");m&&this.temporaryDisplay(!0);n(E,function(a){a.call()})},get:function(a){function b(b){return b.id===
a||b.options&&b.options.id===a}var f,d=this.series,e;f=c(this.axes,b)||c(this.series,b);for(e=0;!f&&e<d.length;e++)f=c(d[e].points||[],b);return f},getAxes:function(){var a=this,b=this.options,c=b.xAxis=t(b.xAxis||{}),b=b.yAxis=t(b.yAxis||{});n(c,function(a,b){a.index=b;a.isX=!0});n(b,function(a,b){a.index=b});c=c.concat(b);n(c,function(b){new g(a,b)})},getSelectedPoints:function(){var a=[];n(this.series,function(b){a=a.concat(y(b.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return y(this.series,
function(a){return a.selected})},setTitle:function(a,b,c){var f=this,d=f.options,e;e=d.title=z({style:{color:"#333333",fontSize:d.isStock?"16px":"18px"}},d.title,a);d=d.subtitle=z({style:{color:"#666666"}},d.subtitle,b);n([["title",a,e],["subtitle",b,d]],function(a,b){var c=a[0],d=f[c],e=a[1];a=a[2];d&&e&&(f[c]=d=d.destroy());a&&a.text&&!d&&(f[c]=f.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),f[c].update=function(a){f.setTitle(!b&&a,b&&
a)},f[c].css(a.style))});f.layOutTitles(c)},layOutTitles:function(a){var b=0,c,f=this.renderer,e=this.spacingBox;n(["title","subtitle"],function(a){var c=this[a],p=this.options[a];a="title"===a?-3:p.verticalAlign?0:b+2;var h;c&&(h=p.style.fontSize,h=f.fontMetrics(h,c).b,c.css({width:(p.width||e.width+p.widthAdjust)+"px"}).align(d({y:a+h},p),!1,"spacingBox"),p.floating||p.verticalAlign||(b=Math.ceil(b+c.getBBox(p.useHTML).height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&
c&&(this.isDirtyBox=c,this.hasRendered&&E(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var c=this.options.chart,f=c.width,c=c.height,d=this.renderTo;e(f)||(this.containerWidth=b(d,"width"));e(c)||(this.containerHeight=b(d,"height"));this.chartWidth=Math.max(0,f||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(c,this.chartWidth)||this.containerHeight||400)},temporaryDisplay:function(c){var f=this.renderTo;if(c)for(;f&&f.style;)f.hcOrigStyle&&(a.css(f,f.hcOrigStyle),
delete f.hcOrigStyle),f=f.parentNode;else for(;f&&f.style;)"none"===b(f,"display",!1)&&(f.hcOrigStyle={display:f.style.display,height:f.style.height,overflow:f.style.overflow},c={display:"block",overflow:"hidden"},f!==this.renderTo&&(c.height=0),a.css(f,c),f.style.setProperty&&f.style.setProperty("display","block","important")),f=f.parentNode},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,f=c.chart,e,p;b=this.renderTo;
var h=a.uniqueKey(),g;b||(this.renderTo=b=f.renderTo);l(b)&&(this.renderTo=b=m.getElementById(b));b||a.error(13,!0);e=I(F(b,"data-highcharts-chart"));D(e)&&u[e]&&u[e].hasRendered&&u[e].destroy();F(b,"data-highcharts-chart",this.index);b.innerHTML="";f.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();e=this.chartWidth;p=this.chartHeight;g=d({position:"relative",overflow:"hidden",width:e+"px",height:p+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},
f.style);this.container=b=k("div",{id:h},g,b);this._cursor=b.style.cursor;this.renderer=new (a[f.renderer]||O)(b,e,p,null,f.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(f.className);this.renderer.setStyle(f.style);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,f=this.titleOffset;this.resetMargins();f&&!e(c[0])&&(this.plotTop=Math.max(this.plotTop,f+this.options.title.margin+b[0]));this.legend.display&&this.legend.adjustMargins(c,b);
this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&n(a.axes,function(a){a.visible&&a.getOffset()});n(r,function(f,d){e(c[d])||(a[f]+=b[d])});a.setChartSize()},reflow:function(a){var c=this,f=c.options.chart,d=c.renderTo,p=e(f.width),h=f.width||b(d,"width"),f=f.height||b(d,
"height"),d=a?a.target:N;if(!p&&!c.isPrinting&&h&&f&&(d===N||d===m)){if(h!==c.containerWidth||f!==c.containerHeight)clearTimeout(c.reflowTimeout),c.reflowTimeout=J(function(){c.container&&c.setSize(void 0,void 0,!1)},a?100:0);c.containerWidth=h;c.containerHeight=f}},initReflow:function(){var a=this,b;b=C(N,"resize",function(b){a.reflow(b)});C(a,"destroy",b)},setSize:function(b,c,f){var d=this,e=d.renderer;d.isResizing+=1;a.setAnimation(f,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;
void 0!==b&&(d.options.chart.width=b);void 0!==c&&(d.options.chart.height=c);d.getChartSize();b=e.globalAnimation;(b?A:h)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},b);d.setChartSize(!0);e.setSize(d.chartWidth,d.chartHeight,f);n(d.axes,function(a){a.isDirty=!0;a.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(f);d.oldChartHeight=null;w(d,"resize");J(function(){d&&w(d,"endResize",null,function(){--d.isResizing})},G(b).duration)},setChartSize:function(a){function b(a){a=
l[a]||0;return Math.max(m||a,a)/2}var c=this.inverted,f=this.renderer,d=this.chartWidth,e=this.chartHeight,p=this.options.chart,h=this.spacing,l=this.clipOffset,g,r,t,k,m;this.plotLeft=g=Math.round(this.plotLeft);this.plotTop=r=Math.round(this.plotTop);this.plotWidth=t=Math.max(0,Math.round(d-g-this.marginRight));this.plotHeight=k=Math.max(0,Math.round(e-r-this.marginBottom));this.plotSizeX=c?k:t;this.plotSizeY=c?t:k;this.plotBorderWidth=p.plotBorderWidth||0;this.spacingBox=f.spacingBox={x:h[3],y:h[0],
width:d-h[3]-h[1],height:e-h[0]-h[2]};this.plotBox=f.plotBox={x:g,y:r,width:t,height:k};m=2*Math.floor(this.plotBorderWidth/2);c=Math.ceil(b(3));f=Math.ceil(b(0));this.clipBox={x:c,y:f,width:Math.floor(this.plotSizeX-b(1)-c),height:Math.max(0,Math.floor(this.plotSizeY-b(2)-f))};a||n(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;n(["margin","spacing"],function(c){var f=b[c],d=H(f)?f:[f,f,f,f];n(["Top","Right","Bottom","Left"],function(f,
e){a[c][e]=E(b[c+f],d[e])})});n(r,function(b,c){a[b]=E(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,f=this.chartHeight,d=this.chartBackground,e=this.plotBackground,p=this.plotBorder,h,l=this.plotBGImage,g=a.backgroundColor,n=a.plotBackgroundColor,r=a.plotBackgroundImage,t,k=this.plotLeft,m=this.plotTop,E=this.plotWidth,w=this.plotHeight,q=this.plotBox,I=this.clipRect,z=this.clipBox,y="animate";
d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),y="attr");h=a.borderWidth||0;t=h+(a.shadow?8:0);g={fill:g||"none"};if(h||d["stroke-width"])g.stroke=a.borderColor,g["stroke-width"]=h;d.attr(g).shadow(a.shadow);d[y]({x:t/2,y:t/2,width:c-t-h%2,height:f-t-h%2,r:a.borderRadius});y="animate";e||(y="attr",this.plotBackground=e=b.rect().addClass("highcharts-plot-background").add());e[y](q);e.attr({fill:n||"none"}).shadow(a.plotShadow);r&&(l?l.animate(q):this.plotBGImage=b.image(r,
k,m,E,w).add());I?I.animate({width:z.width,height:z.height}):this.clipRect=b.clipRect(z);y="animate";p||(y="attr",this.plotBorder=p=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());p.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});p[y](p.crisp({x:k,y:m,width:E,height:w},-p.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,p;n(["inverted","angular","polar"],function(h){c=f[b.type||b.defaultSeriesType];
p=b[h]||c&&c.prototype[h];for(e=d&&d.length;!p&&e--;)(c=f[d[e].type])&&c.prototype[h]&&(p=!0);a[h]=p})},linkSeries:function(){var a=this,b=a.series;n(b,function(a){a.linkedSeries.length=0});n(b,function(b){var c=b.options.linkedTo;l(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=E(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){n(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=
this,b=a.options.labels;b.items&&n(b.items,function(c){var f=d(b.style,c.style),e=I(f.left)+a.plotLeft,p=I(f.top)+a.plotTop+12;delete f.left;delete f.top;a.renderer.text(c.html,e,p).attr({zIndex:2}).css(f).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,f,d,e;this.setTitle();this.legend=new B(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;f=this.plotHeight-=21;n(a,function(a){a.setScale()});this.getAxisMargins();d=
1.1<c/this.plotWidth;e=1.05<f/this.plotHeight;if(d||e)n(a,function(a){(a.horiz&&d||!a.horiz&&e)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&n(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=z(!0,this.options.credits,a);a.enabled&&!this.credits&&
(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(N.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,f=b.series,d=b.container,e,p=d&&d.parentNode;w(b,"destroy");b.renderer.forExport?a.erase(u,b):u[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");
L(b);for(e=c.length;e--;)c[e]=c[e].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(e=f.length;e--;)f[e]=f[e].destroy();n("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML="",L(d),p&&v(d));M(b,function(a,c){delete b[c]})},isReadyToRender:function(){var a=this;return R||N!=N.top||
"complete"===m.readyState?!0:(m.attachEvent("onreadystatechange",function(){m.detachEvent("onreadystatechange",a.firstRender);"complete"===m.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();w(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();n(b.series||[],function(b){a.initSeries(b)});a.linkSeries();w(a,"beforeRender");p&&(a.pointer=new p(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();
a.temporaryDisplay(!0)}},onload:function(){n([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);w(this,"load");w(this,"render");e(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}})})(K);(function(a){var C,A=a.each,G=a.extend,F=a.erase,m=a.fireEvent,g=a.format,k=a.isArray,q=a.isNumber,v=a.pick,u=a.removeEvent;a.Point=C=function(){};a.Point.prototype={init:function(a,e,g){this.series=a;this.color=a.color;this.applyOptions(e,
g);a.options.colorByPoint?(e=a.options.colors||a.chart.options.colors,this.color=this.color||e[a.colorCounter],e=e.length,g=a.colorCounter,a.colorCounter++,a.colorCounter===e&&(a.colorCounter=0)):g=a.colorIndex;this.colorIndex=v(this.colorIndex,g);a.chart.pointCount++;return this},applyOptions:function(a,e){var h=this.series,d=h.options.pointValKey||h.pointValKey;a=C.prototype.optionsToObject.call(this,a);G(this,a);this.options=this.options?G(this.options,a):a;a.group&&delete this.group;d&&(this.y=
this[d]);this.isNull=v(this.isValid&&!this.isValid(),null===this.x||!q(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===e&&h.xAxis&&h.xAxis.hasNames&&(this.x=h.xAxis.nameToX(this));void 0===this.x&&h&&(this.x=void 0===e?h.autoIncrement(this):e);return this},optionsToObject:function(a){var e={},h=this.series,d=h.options.keys,c=d||h.pointArrayMap||["y"],g=c.length,b=0,m=0;if(q(a)||null===a)e[c[0]]=a;else if(k(a))for(!d&&a.length>g&&(h=typeof a[0],"string"===h?e.name=a[0]:"number"===
h&&(e.x=a[0]),b++);m<g;)d&&void 0===a[b]||(e[c[m]]=a[b]),b++,m++;else"object"===typeof a&&(e=a,a.dataLabels&&(h._hasPointLabels=!0),a.marker&&(h._hasPointMarkers=!0));return e},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?
" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,e=a.zones,a=a.zoneAxis||"y",g=0,d;for(d=e[g];this[a]>=d.value;)d=e[++g];d&&d.color&&!this.options.color&&(this.color=d.color);return d},destroy:function(){var a=this.series.chart,e=a.hoverPoints,g;a.pointCount--;e&&(this.setState(),F(e,this),e.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)u(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);
for(g in this)this[g]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],e,g=6;g--;)e=a[g],this[e]&&(this[e]=this[e].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var e=this.series,h=e.tooltipOptions,d=v(h.valueDecimals,""),
c=h.valuePrefix||"",k=h.valueSuffix||"";A(e.pointArrayMap||["y"],function(b){b="{point."+b;if(c||k)a=a.replace(b+"}",c+b+"}"+k);a=a.replace(b+"}",b+":,."+d+"f}")});return g(a,{point:this,series:this.series})},firePointEvent:function(a,e,g){var d=this,c=this.series.options;(c.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();"click"===a&&c.allowPointSelect&&(g=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});m(this,a,e,g)},visible:!0}})(K);
(function(a){var C=a.addEvent,A=a.animObject,G=a.arrayMax,F=a.arrayMin,m=a.correctFloat,g=a.Date,k=a.defaultOptions,q=a.defaultPlotOptions,v=a.defined,u=a.each,h=a.erase,e=a.extend,n=a.fireEvent,d=a.grep,c=a.isArray,w=a.isNumber,b=a.isString,y=a.merge,D=a.objectEach,H=a.pick,l=a.removeEvent,B=a.splat,r=a.SVGElement,z=a.syncTimeout,M=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,
states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},
halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var c=this,d,f=a.series,p;c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();e(c,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});d=b.events;D(d,function(a,b){C(c,b,a)});if(d&&
d.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();u(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);f.length&&(p=f[f.length-1]);c._i=H(p&&p._i,-1)+1;a.orderSeries(this.insert(f))},insert:function(a){var b=this.options.index,c;if(w(b)){for(c=a.length;c--;)if(b>=H(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return H(c,
a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,e;u(b.axisTypes||[],function(f){u(d[f],function(a){e=a.options;if(c[f]===e.index||void 0!==c[f]&&c[f]===e.id||void 0===c[f]&&0===e.index)b.insert(a.series),b[f]=a,a.isDirty=!0});b[f]||b.optionalAxis===f||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,f=w(b)?function(f){var d="y"===f&&c.toYData?c.toYData(a):a[f];c[f+"Data"][b]=d}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,
2))};u(c.parallelArrays,f)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=H(b,a.pointStart,0);this.pointInterval=c=H(this.pointInterval,a.pointInterval,1);d&&(a=new g(b),"day"===d?a=+a[g.hcSetDate](a[g.hcGetDate]()+c):"month"===d?a=+a[g.hcSetMonth](a[g.hcGetMonth]()+c):"year"===d&&(a=+a[g.hcSetFullYear](a[g.hcGetFullYear]()+c)),c=a-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options,d=c.plotOptions,f=(b.userOptions||{}).plotOptions||
{},e=d[this.type];this.userOptions=a;b=y(e,d.series,a);this.tooltipOptions=y(k.tooltip,k.plotOptions.series&&k.plotOptions.series.tooltip,k.plotOptions[this.type].tooltip,c.tooltip.userOptions,d.series&&d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=H(a.stickyTracking,f[this.type]&&f[this.type].stickyTracking,f.series&&f.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:b.stickyTracking);null===e.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=
(b.zones||[]).slice();!b.negativeColor&&!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&v(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return b},getCyclic:function(a,b,c){var d,f=this.chart,e=this.userOptions,p=a+"Index",h=a+"Counter",l=c?c.length:H(f.options.chart[a+"Count"],f[a+"Count"]);b||(d=H(e[p],e["_"+p]),v(d)||(f.series.length||
(f[h]=0),e["_"+p]=d=f[h]%l,f[h]+=1),c&&(b=c[d]));void 0!==d&&(this[p]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||q[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(d,e,h,l){var f=this,p=f.points,g=p&&p.length||0,r,n=f.options,k=f.chart,m=null,q=f.xAxis,
E=n.turboThreshold,z=this.xData,y=this.yData,I=(r=f.pointArrayMap)&&r.length;d=d||[];r=d.length;e=H(e,!0);if(!1!==l&&r&&g===r&&!f.cropped&&!f.hasGroupedData&&f.visible)u(d,function(a,b){p[b].update&&a!==n.data[b]&&p[b].update(a,!1,null,!1)});else{f.xIncrement=null;f.colorCounter=0;u(this.parallelArrays,function(a){f[a+"Data"].length=0});if(E&&r>E){for(h=0;null===m&&h<r;)m=d[h],h++;if(w(m))for(h=0;h<r;h++)z[h]=this.autoIncrement(),y[h]=d[h];else if(c(m))if(I)for(h=0;h<r;h++)m=d[h],z[h]=m[0],y[h]=m.slice(1,
I+1);else for(h=0;h<r;h++)m=d[h],z[h]=m[0],y[h]=m[1];else a.error(12)}else for(h=0;h<r;h++)void 0!==d[h]&&(m={series:f},f.pointClass.prototype.applyOptions.apply(m,[d[h]]),f.updateParallelArrays(m,h));b(y[0])&&a.error(14,!0);f.data=[];f.options.data=f.userOptions.data=d;for(h=g;h--;)p[h]&&p[h].destroy&&p[h].destroy();q&&(q.minRange=q.userMinRange);f.isDirty=k.isDirtyBox=!0;f.isDirtyData=!!p;h=!1}"point"===n.legendType&&(this.processData(),this.generatePoints());e&&k.redraw(h)},processData:function(b){var c=
this.xData,d=this.yData,e=c.length,f;f=0;var h,p,l=this.xAxis,g,r=this.options;g=r.cropThreshold;var n=this.getExtremesFromAll||r.getExtremesFromAll,k=this.isCartesian,r=l&&l.val2lin,m=l&&l.isLog,q,w;if(k&&!this.isDirty&&!l.isDirty&&!this.yAxis.isDirty&&!b)return!1;l&&(b=l.getExtremes(),q=b.min,w=b.max);if(k&&this.sorted&&!n&&(!g||e>g||this.forceCrop))if(c[e-1]<q||c[0]>w)c=[],d=[];else if(c[0]<q||c[e-1]>w)f=this.cropData(this.xData,this.yData,q,w),c=f.xData,d=f.yData,f=f.start,h=!0;for(g=c.length||
1;--g;)e=m?r(c[g])-r(c[g-1]):c[g]-c[g-1],0<e&&(void 0===p||e<p)?p=e:0>e&&this.requireSorting&&a.error(15);this.cropped=h;this.cropStart=f;this.processedXData=c;this.processedYData=d;this.closestPointRange=p},cropData:function(a,b,c,d){var f=a.length,e=0,h=f,p=H(this.cropShoulder,1),l;for(l=0;l<f;l++)if(a[l]>=c){e=Math.max(0,l-p);break}for(c=l;c<f;c++)if(a[c]>d){h=c+p;break}return{xData:a.slice(e,h),yData:b.slice(e,h),start:e,end:h}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,
d,f=this.processedXData,e=this.processedYData,h=this.pointClass,l=f.length,g=this.cropStart||0,r,n=this.hasGroupedData,a=a.keys,k,m=[],q;c||n||(c=[],c.length=b.length,c=this.data=c);a&&n&&(this.options.keys=!1);for(q=0;q<l;q++)r=g+q,n?(k=(new h).init(this,[f[q]].concat(B(e[q]))),k.dataGroup=this.groupMap[q]):(k=c[r])||void 0===b[r]||(c[r]=k=(new h).init(this,b[r],f[q])),k&&(k.index=r,m[q]=k);this.options.keys=a;if(c&&(l!==(d=c.length)||n))for(q=0;q<d;q++)q!==g||n||(q+=l),c[q]&&(c[q].destroyElements(),
c[q].plotX=void 0);this.data=c;this.points=m},getExtremes:function(a){var b=this.yAxis,d=this.processedXData,e,f=[],h=0;e=this.xAxis.getExtremes();var p=e.min,l=e.max,g,r,n,k;a=a||this.stackedYData||this.processedYData||[];e=a.length;for(k=0;k<e;k++)if(r=d[k],n=a[k],g=(w(n,!0)||c(n))&&(!b.positiveValuesOnly||n.length||0<n),r=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(d[k]||r)>=p&&(d[k]||r)<=l,g&&r)if(g=n.length)for(;g--;)null!==n[g]&&(f[h++]=n[g]);else f[h++]=n;this.dataMin=
F(f);this.dataMax=G(f)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,f=this.yAxis,e=this.points,h=e.length,l=!!this.modifyValue,g=a.pointPlacement,r="between"===g||w(g),n=a.threshold,k=a.startFromThreshold?n:0,q,z,y,B,u=Number.MAX_VALUE;"between"===g&&(g=.5);w(g)&&(g*=H(a.pointRange||c.pointRange));for(a=0;a<h;a++){var D=e[a],M=D.x,A=D.y;z=D.low;var C=b&&f.stacks[(this.negStacks&&A<(k?0:n)?"-":"")+this.stackKey],
F;f.positiveValuesOnly&&null!==A&&0>=A&&(D.isNull=!0);D.plotX=q=m(Math.min(Math.max(-1E5,c.translate(M,0,0,0,1,g,"flags"===this.type)),1E5));b&&this.visible&&!D.isNull&&C&&C[M]&&(B=this.getStackIndicator(B,M,this.index),F=C[M],A=F.points[B.key],z=A[0],A=A[1],z===k&&B.key===C[M].base&&(z=H(n,f.min)),f.positiveValuesOnly&&0>=z&&(z=null),D.total=D.stackTotal=F.total,D.percentage=F.total&&D.y/F.total*100,D.stackY=A,F.setOffset(this.pointXOffset||0,this.barW||0));D.yBottom=v(z)?f.translate(z,0,1,0,1):
null;l&&(A=this.modifyValue(A,D));D.plotY=z="number"===typeof A&&Infinity!==A?Math.min(Math.max(-1E5,f.translate(A,0,1,0,1)),1E5):void 0;D.isInside=void 0!==z&&0<=z&&z<=f.len&&0<=q&&q<=c.len;D.clientX=r?m(c.translate(M,0,0,0,1,g)):q;D.negative=D.y<(n||0);D.category=d&&void 0!==d[D.x]?d[D.x]:D.x;D.isNull||(void 0!==y&&(u=Math.min(u,Math.abs(q-y))),y=q);D.zone=this.zones.length&&D.getZone()}this.closestPointRangePx=u},getValidPoints:function(a,b){var c=this.chart;return d(a||this.points||[],function(a){return b&&
!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,f=b.inverted,e=this.clipBox,h=e||b.clipBox,l=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,h.height,c.xAxis,c.yAxis].join(),g=b[l],p=b[l+"m"];g||(a&&(h.width=0,b[l+"m"]=p=d.clipRect(-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[l]=g=d.clipRect(h),g.count={length:0});a&&!g.count[this.index]&&(g.count[this.index]=!0,g.count.length+=1);!1!==c.clip&&
(this.group.clip(a||e?g:b.clipRect),this.markerGroup.clip(p),this.sharedClipKey=l);a||(g.count[this.index]&&(delete g.count[this.index],--g.count.length),0===g.count.length&&l&&b[l]&&(e||(b[l]=b[l].destroy()),b[l+"m"]&&(b[l+"m"]=b[l+"m"].destroy())))},animate:function(a){var b=this.chart,c=A(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();
n(this,"afterAnimate")},drawPoints:function(){var a=this.points,b=this.chart,c,d,f,e,h=this.options.marker,l,g,r,n,k=this[this.specialGroup]||this.markerGroup,m=H(h.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*h.radius);if(!1!==h.enabled||this._hasPointMarkers)for(d=0;d<a.length;d++)f=a[d],c=f.plotY,e=f.graphic,l=f.marker||{},g=!!f.marker,r=m&&void 0===l.enabled||l.enabled,n=f.isInside,r&&w(c)&&null!==f.y?(c=H(l.symbol,this.symbol),f.hasImage=0===c.indexOf("url"),r=this.markerAttribs(f,
f.selected&&"select"),e?e[n?"show":"hide"](!0).animate(r):n&&(0<r.width||f.hasImage)&&(f.graphic=e=b.renderer.symbol(c,r.x,r.y,r.width,r.height,g?l:h).add(k)),e&&e.attr(this.pointAttribs(f,f.selected&&"select")),e&&e.addClass(f.getClassName(),!0)):e&&(f.graphic=e.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},f=H(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],f=H(b&&b.radius,c&&c.radius,f+(c&&c.radiusPlus||0)));a.hasImage&&(f=0);a={x:Math.floor(a.plotX)-
f,y:a.plotY-f};f&&(a.width=a.height=2*f);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,f=d&&d.marker||{},e=this.color,h=d&&d.color,l=a&&a.color,d=H(f.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;e=h||a||l||e;a=f.fillColor||c.fillColor||e;e=f.lineColor||c.lineColor||e;b&&(c=c.states[b],b=f.states&&f.states[b]||{},d=H(b.lineWidth,c.lineWidth,d+H(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,e=b.lineColor||c.lineColor||e);return{stroke:e,"stroke-width":d,
fill:a}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(M.navigator.userAgent),d,f,e=a.data||[],g,k;n(a,"destroy");l(a);u(a.axisTypes||[],function(b){(k=a[b])&&k.series&&(h(k.series,a),k.isDirty=k.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(f=e.length;f--;)(g=e[f])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);D(a,function(a,b){a instanceof r&&!a.survive&&(d=c&&"group"===b?"hide":"destroy",a[d]())});b.hoverSeries===a&&(b.hoverSeries=
null);h(b.series,a);b.orderSeries();D(a,function(b,c){delete a[c]})},getGraphPath:function(a,b,c){var d=this,f=d.options,e=f.step,h,l=[],g=[],p;a=a||d.points;(h=a.reversed)&&a.reverse();(e={right:1,center:2}[e]||e&&3)&&h&&(e=4-e);!f.connectNulls||b||c||(a=this.getValidPoints(a));u(a,function(h,r){var n=h.plotX,k=h.plotY,m=a[r-1];(h.leftCliff||m&&m.rightCliff)&&!c&&(p=!0);h.isNull&&!v(b)&&0<r?p=!f.connectNulls:h.isNull&&!b?p=!0:(0===r||p?r=["M",h.plotX,h.plotY]:d.getPointSpline?r=d.getPointSpline(a,
h,r):e?(r=1===e?["L",m.plotX,k]:2===e?["L",(m.plotX+n)/2,m.plotY,"L",(m.plotX+n)/2,k]:["L",n,m.plotY],r.push("L",n,k)):r=["L",n,k],g.push(h.x),e&&g.push(h.x),l.push.apply(l,r),p=!1)});l.xMap=g;return d.graphPath=l},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];u(this.zones,function(c,e){d.push(["zone-graph-"+e,"highcharts-graph highcharts-zone-graph-"+e+" "+(c.className||""),c.color||
a.color,c.dashStyle||b.dashStyle])});u(d,function(f,d){var e=f[0],h=a[e];h?(h.endX=c.xMap,h.animate({d:c})):c.length&&(a[e]=a.chart.renderer.path(c).addClass(f[1]).attr({zIndex:1}).add(a.group),h={stroke:f[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},f[3]?h.dashstyle=f[3]:"square"!==b.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),h=a[e].attr(h).shadow(2>d&&b.shadow));h&&(h.startX=c.xMap,h.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,
d=this.zones,f,e,h=this.clips||[],l,g=this.graph,r=this.area,n=Math.max(b.chartWidth,b.chartHeight),k=this[(this.zoneAxis||"y")+"Axis"],m,q,w=b.inverted,z,y,B,v,D=!1;d.length&&(g||r)&&k&&void 0!==k.min&&(q=k.reversed,z=k.horiz,g&&g.hide(),r&&r.hide(),m=k.getExtremes(),u(d,function(d,p){f=q?z?b.plotWidth:0:z?0:k.toPixels(m.min);f=Math.min(Math.max(H(e,f),0),n);e=Math.min(Math.max(Math.round(k.toPixels(H(d.value,m.max),!0)),0),n);D&&(f=e=k.toPixels(m.max));y=Math.abs(f-e);B=Math.min(f,e);v=Math.max(f,
e);k.isXAxis?(l={x:w?v:B,y:0,width:y,height:n},z||(l.x=b.plotHeight-l.x)):(l={x:0,y:w?v:B,width:n,height:y},z&&(l.y=b.plotWidth-l.y));w&&c.isVML&&(l=k.isXAxis?{x:0,y:q?B:v,height:l.width,width:b.chartWidth}:{x:l.y-b.plotLeft-b.spacingBox.x,y:0,width:l.height,height:b.chartHeight});h[p]?h[p].animate(l):(h[p]=c.clipRect(l),g&&a["zone-graph-"+p].clip(h[p]),r&&a["zone-area-"+p].clip(h[p]));D=d.value>m.max}),this.clips=h)},invertGroups:function(a){function b(){u(["group","markerGroup"],function(b){c[b]&&
(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,f;c.xAxis&&(f=C(d,"resize",b),C(c,"destroy",f),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,f){var e=this[a],h=!e;h&&(this[a]=e=this.chart.renderer.g().attr({zIndex:d||.1}).add(f));e.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+" "+(this.options.className||""),
!0);e.attr({visibility:c})[h?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,f=!!a.animate&&b.renderer.isSVG&&A(d.animation).duration,e=a.visible?"inherit":"hidden",h=d.zIndex,l=a.hasRendered,g=b.seriesGroup,r=b.inverted;c=a.plotGroup("group","series",e,h,g);a.markerGroup=
a.plotGroup("markerGroup","markers",e,h,g);f&&a.animate(!0);c.inverted=a.isCartesian?r:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(r);!1===d.clip||a.sharedClipKey||l||c.clip(b.clipRect);f&&a.animate();l||(a.animationTimeout=z(function(){a.afterAnimate()},f));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,
c=this.group,d=this.xAxis,f=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:H(d&&d.left,a.plotLeft),translateY:H(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:f?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,
f,d){var e,h;if(h=c&&c.length)return e=b.kdAxisArray[f%d],c.sort(function(a,b){return a[e]-b[e]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),f+1,d),right:a(c.slice(h+1),f+1,d)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;z(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,l,g){var r=b.point,p=d.kdAxisArray[l%g],n,k,m=r;k=v(a[f])&&v(r[f])?
Math.pow(a[f]-r[f],2):null;n=v(a[e])&&v(r[e])?Math.pow(a[e]-r[e],2):null;n=(k||0)+(n||0);r.dist=v(n)?Math.sqrt(n):Number.MAX_VALUE;r.distX=v(k)?Math.sqrt(k):Number.MAX_VALUE;p=a[p]-r[p];n=0>p?"left":"right";k=0>p?"right":"left";b[n]&&(n=c(a,b[n],l+1,g),m=n[h]<m[h]?n:r);b[k]&&Math.sqrt(p*p)<m[h]&&(a=c(a,b[k],l+1,g),m=a[h]<m[h]?a:m);return m}var d=this,f=this.kdAxisArray[0],e=this.kdAxisArray[1],h=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||
this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(K);(function(a){function C(a,e,g,d,c){var h=a.chart.inverted;this.axis=a;this.isNegative=g;this.options=e;this.x=d;this.total=null;this.points={};this.stack=c;this.rightCliff=this.leftCliff=0;this.alignOptions={align:e.align||(h?g?"left":"right":"center"),verticalAlign:e.verticalAlign||(h?"middle":g?"bottom":"top"),y:u(e.y,h?4:g?14:-6),x:u(e.x,h?g?-6:6:0)};this.textAlign=e.textAlign||(h?g?"right":"left":"center")}var A=a.Axis,G=a.Chart,
F=a.correctFloat,m=a.defined,g=a.destroyObjectProperties,k=a.each,q=a.format,v=a.objectEach,u=a.pick;a=a.Series;C.prototype={destroy:function(){g(this,this.axis)},render:function(a){var e=this.options,h=e.format,h=h?q(h,this):e.formatter.call(this);this.label?this.label.attr({text:h,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(h,null,null,e.useHTML).css(e.style).attr({align:this.textAlign,rotation:e.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,e){var h=this.axis,d=
h.chart,c=d.inverted,g=h.reversed,g=this.isNegative&&!g||!this.isNegative&&g,b=h.translate(h.usePercentage?100:this.total,0,0,0,1),h=h.translate(0),h=Math.abs(b-h);a=d.xAxis[0].translate(this.x)+a;var k=d.plotHeight,c={x:c?g?b:b-h:a,y:c?k-a-e:g?k-b-h:k-b,width:c?h:e,height:c?e:h};if(e=this.label)e.align(this.alignOptions,null,c),c=e.alignAttr,e[!1===this.options.crop||d.isInsidePlot(c.x,c.y)?"show":"hide"](!0)}};G.prototype.getStacks=function(){var a=this;k(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&
(a.oldStacks=a.stacks)});k(a.series,function(e){!e.options.stacking||!0!==e.visible&&!1!==a.options.chart.ignoreHiddenSeries||(e.stackKey=e.type+u(e.options.stack,""))})};A.prototype.buildStacks=function(){var a=this.series,e,g=u(this.options.reversedStacks,!0),d=a.length,c;if(!this.isXAxis){this.usePercentage=!1;for(c=d;c--;)a[g?c:d-c-1].setStackedPoints();for(c=d;c--;)e=a[g?c:d-c-1],e.setStackCliffs&&e.setStackCliffs();if(this.usePercentage)for(c=0;c<d;c++)a[c].setPercentStacks()}};A.prototype.renderStackTotals=
function(){var a=this.chart,e=a.renderer,g=this.stacks,d=this.stackTotalGroup;d||(this.stackTotalGroup=d=e.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());d.translate(a.plotLeft,a.plotTop);v(g,function(a){v(a,function(a){a.render(d)})})};A.prototype.resetStacks=function(){var a=this,e=a.stacks;a.isXAxis||v(e,function(e){v(e,function(d,c){d.touched<a.stacksTouched?(d.destroy(),delete e[c]):(d.total=null,d.cum=null)})})};A.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&
(a=this.stacks=this.oldStacks),v(a,function(a){v(a,function(a){a.cum=a.total})}))};a.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var a=this.processedXData,e=this.processedYData,g=[],d=e.length,c=this.options,k=c.threshold,b=c.startFromThreshold?k:0,q=c.stack,c=c.stacking,v=this.stackKey,H="-"+v,l=this.negStacks,B=this.yAxis,r=B.stacks,z=B.oldStacks,M,p,E,I,A,f,t;B.stacksTouched+=1;for(A=0;A<d;A++)f=a[A],t=e[A],
M=this.getStackIndicator(M,f,this.index),I=M.key,E=(p=l&&t<(b?0:k))?H:v,r[E]||(r[E]={}),r[E][f]||(z[E]&&z[E][f]?(r[E][f]=z[E][f],r[E][f].total=null):r[E][f]=new C(B,B.options.stackLabels,p,f,q)),E=r[E][f],null!==t&&(E.points[I]=E.points[this.index]=[u(E.cum,b)],m(E.cum)||(E.base=I),E.touched=B.stacksTouched,0<M.index&&!1===this.singleStacks&&(E.points[I][0]=E.points[this.index+","+f+",0"][0])),"percent"===c?(p=p?v:H,l&&r[p]&&r[p][f]?(p=r[p][f],E.total=p.total=Math.max(p.total,E.total)+Math.abs(t)||
0):E.total=F(E.total+(Math.abs(t)||0))):E.total=F(E.total+(t||0)),E.cum=u(E.cum,b)+(t||0),null!==t&&(E.points[I].push(E.cum),g[A]=E.cum);"percent"===c&&(B.usePercentage=!0);this.stackedYData=g;B.oldStacks={}}};a.prototype.setPercentStacks=function(){var a=this,e=a.stackKey,g=a.yAxis.stacks,d=a.processedXData,c;k([e,"-"+e],function(e){for(var b=d.length,h,k;b--;)if(h=d[b],c=a.getStackIndicator(c,h,a.index,e),h=(k=g[e]&&g[e][h])&&k.points[c.key])k=k.total?100/k.total:0,h[0]=F(h[0]*k),h[1]=F(h[1]*k),
a.stackedYData[b]=h[1]})};a.prototype.getStackIndicator=function(a,e,g,d){!m(a)||a.x!==e||d&&a.key!==d?a={x:e,index:0,key:d}:a.index++;a.key=[g,e,a.index].join();return a}})(K);(function(a){var C=a.addEvent,A=a.animate,G=a.Axis,F=a.createElement,m=a.css,g=a.defined,k=a.each,q=a.erase,v=a.extend,u=a.fireEvent,h=a.inArray,e=a.isNumber,n=a.isObject,d=a.isArray,c=a.merge,w=a.objectEach,b=a.pick,y=a.Point,D=a.Series,H=a.seriesTypes,l=a.setAnimation,B=a.splat;v(a.Chart.prototype,{addSeries:function(a,c,
d){var e,h=this;a&&(c=b(c,!0),u(h,"addSeries",{options:a},function(){e=h.initSeries(a);h.isDirtyLegend=!0;h.linkSeries();c&&h.redraw(d)}));return e},addAxis:function(a,d,e,h){var g=d?"xAxis":"yAxis",l=this.options;a=c(a,{index:this[g].length,isX:d});new G(this,a);l[g]=B(l[g]||{});l[g].push(a);b(e,!0)&&this.redraw(h)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,h=function(){d&&m(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};
d||(b.loadingDiv=d=F("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=F("span",{className:"highcharts-loading-inner"},null,d),C(b,"redraw",h));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;m(d,v(e.style,{zIndex:10}));m(b.loadingSpan,e.labelStyle);b.loadingShown||(m(d,{opacity:0,display:""}),A(d,{opacity:e.style.opacity||.5},{duration:e.showDuration||0}));b.loadingShown=!0;h()},hideLoading:function(){var a=this.options,b=
this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",A(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){m(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),
update:function(a,d){var l=this,r={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},n=a.chart,m,q;if(n){c(!0,l.options.chart,n);"className"in n&&l.setClassName(n.className);if("inverted"in n||"polar"in n)l.propFromSeries(),m=!0;"alignTicks"in n&&(m=!0);w(n,function(a,b){-1!==h("chart."+b,l.propsRequireUpdateSeries)&&(q=!0);-1!==h(b,l.propsRequireDirtyBox)&&(l.isDirtyBox=!0)});"style"in n&&l.renderer.setStyle(n.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&c(!0,this.options.plotOptions,
a.plotOptions);w(a,function(a,b){if(l[b]&&"function"===typeof l[b].update)l[b].update(a,!1);else if("function"===typeof l[r[b]])l[r[b]](a);"chart"!==b&&-1!==h(b,l.propsRequireUpdateSeries)&&(q=!0)});k("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&k(B(a[b]),function(a,c){(c=g(a.id)&&l.get(a.id)||l[b][c])&&c.coll===b&&c.update(a,!1)})});m&&k(l.axes,function(a){a.update({},!1)});q&&k(l.series,function(a){a.update({},!1)});a.loading&&c(!0,l.options.loading,a.loading);m=n&&n.width;
n=n&&n.height;e(m)&&m!==l.chartWidth||e(n)&&n!==l.chartHeight?l.setSize(m,n):b(d,!0)&&l.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});v(y.prototype,{update:function(a,c,d,e){function h(){l.applyOptions(a);null===l.y&&f&&(l.graphic=f.destroy());n(a,!0)&&(f&&f.element&&a&&a.marker&&a.marker.symbol&&(l.graphic=f.destroy()),a&&a.dataLabels&&l.dataLabel&&(l.dataLabel=l.dataLabel.destroy()));r=l.index;g.updateParallelArrays(l,r);p.data[r]=n(p.data[r],!0)||n(a,!0)?l.options:a;g.isDirty=g.isDirtyData=
!0;!g.fixedBox&&g.hasCartesianSeries&&(k.isDirtyBox=!0);"point"===p.legendType&&(k.isDirtyLegend=!0);c&&k.redraw(d)}var l=this,g=l.series,f=l.graphic,r,k=g.chart,p=g.options;c=b(c,!0);!1===e?h():l.firePointEvent("update",{options:a},h)},remove:function(a,b){this.series.removePoint(h(this,this.series.data),a,b)}});v(D.prototype,{addPoint:function(a,c,d,e){var h=this.options,l=this.data,g=this.chart,f=this.xAxis,f=f&&f.hasNames&&f.names,r=h.data,k,p,n=this.xData,m,q;c=b(c,!0);k={series:this};this.pointClass.prototype.applyOptions.apply(k,
[a]);q=k.x;m=n.length;if(this.requireSorting&&q<n[m-1])for(p=!0;m&&n[m-1]>q;)m--;this.updateParallelArrays(k,"splice",m,0,0);this.updateParallelArrays(k,m);f&&k.name&&(f[q]=k.name);r.splice(m,0,a);p&&(this.data.splice(m,0,null),this.processData());"point"===h.legendType&&this.generatePoints();d&&(l[0]&&l[0].remove?l[0].remove(!1):(l.shift(),this.updateParallelArrays(k,"shift"),r.shift()));this.isDirtyData=this.isDirty=!0;c&&g.redraw(e)},removePoint:function(a,c,d){var e=this,h=e.data,g=h[a],k=e.points,
f=e.chart,r=function(){k&&k.length===h.length&&k.splice(a,1);h.splice(a,1);e.options.data.splice(a,1);e.updateParallelArrays(g||{series:e},"splice",a,1);g&&g.destroy();e.isDirty=!0;e.isDirtyData=!0;c&&f.redraw()};l(d,f);c=b(c,!0);g?g.firePointEvent("remove",null,r):r()},remove:function(a,c,d){function e(){h.destroy();l.isDirtyLegend=l.isDirtyBox=!0;l.linkSeries();b(a,!0)&&l.redraw(c)}var h=this,l=h.chart;!1!==d?u(h,"remove",null,e):e()},update:function(a,d){var e=this,h=e.chart,l=e.userOptions,g=
e.oldType||e.type,r=a.type||l.type||h.options.chart.type,f=H[g].prototype,n=["group","markerGroup","dataLabelsGroup"],m;if(Object.keys&&"data"===Object.keys(a).toString())return this.setData(a.data,d);if(r&&r!==g||void 0!==a.zIndex)n.length=0;k(n,function(a){n[a]=e[a];delete e[a]});a=c(l,{animation:!1,index:e.index,pointStart:e.xData[0]},{data:e.options.data},a);e.remove(!1,null,!1);for(m in f)e[m]=void 0;v(e,H[r||g].prototype);k(n,function(a){e[a]=n[a]});e.init(h,a);e.oldType=g;h.linkSeries();b(d,
!0)&&h.redraw(!1)}});v(G.prototype,{update:function(a,d){var e=this.chart;a=e.options[this.coll][this.options.index]=c(this.userOptions,a);this.destroy(!0);this.init(e,v(a,{events:void 0}));e.isDirtyBox=!0;b(d,!0)&&e.redraw()},remove:function(a){for(var c=this.chart,e=this.coll,h=this.series,l=h.length;l--;)h[l]&&h[l].remove(!1);q(c.axes,this);q(c[e],this);d(c.options[e])?c.options[e].splice(this.options.index,1):delete c.options[e];k(c[e],function(a,b){a.options.index=b});this.destroy();c.isDirtyBox=
!0;b(a,!0)&&c.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(K);(function(a){var C=a.color,A=a.each,G=a.map,F=a.pick,m=a.Series,g=a.seriesType;g("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(){var g=[],m=[],v=this.xAxis,u=this.yAxis,h=u.stacks[this.stackKey],e={},n=this.points,d=this.index,c=u.series,w=c.length,b,y=F(u.options.reversedStacks,!0)?1:-1,D;if(this.options.stacking){for(D=
0;D<n.length;D++)e[n[D].x]=n[D];a.objectEach(h,function(a,b){null!==a.total&&m.push(b)});m.sort(function(a,b){return a-b});b=G(c,function(){return this.visible});A(m,function(a,c){var l=0,k,n;if(e[a]&&!e[a].isNull)g.push(e[a]),A([-1,1],function(l){var g=1===l?"rightNull":"leftNull",r=0,q=h[m[c+l]];if(q)for(D=d;0<=D&&D<w;)k=q.points[D],k||(D===d?e[a][g]=!0:b[D]&&(n=h[a].points[D])&&(r-=n[1]-n[0])),D+=y;e[a][1===l?"rightCliff":"leftCliff"]=r});else{for(D=d;0<=D&&D<w;){if(k=h[a].points[D]){l=k[1];break}D+=
y}l=u.translate(l,0,1,0,1);g.push({isNull:!0,plotX:v.translate(a,0,0,0,1),x:a,plotY:l,yBottom:l})}})}return g},getGraphPath:function(a){var g=m.prototype.getGraphPath,k=this.options,u=k.stacking,h=this.yAxis,e,n,d=[],c=[],w=this.index,b,y=h.stacks[this.stackKey],D=k.threshold,A=h.getThreshold(k.threshold),l,k=k.connectNulls||"percent"===u,B=function(e,l,g){var k=a[e];e=u&&y[k.x].points[w];var n=k[g+"Null"]||0;g=k[g+"Cliff"]||0;var r,m,k=!0;g||n?(r=(n?e[0]:e[1])+g,m=e[0]+g,k=!!n):!u&&a[l]&&a[l].isNull&&
(r=m=D);void 0!==r&&(c.push({plotX:b,plotY:null===r?A:h.getThreshold(r),isNull:k,isCliff:!0}),d.push({plotX:b,plotY:null===m?A:h.getThreshold(m),doCurve:!1}))};a=a||this.points;u&&(a=this.getStackPoints());for(e=0;e<a.length;e++)if(n=a[e].isNull,b=F(a[e].rectPlotX,a[e].plotX),l=F(a[e].yBottom,A),!n||k)k||B(e,e-1,"left"),n&&!u&&k||(c.push(a[e]),d.push({x:e,plotX:b,plotY:l})),k||B(e,e+1,"right");e=g.call(this,c,!0,!0);d.reversed=!0;n=g.call(this,d,!0,!0);n.length&&(n[0]="L");n=e.concat(n);g=g.call(this,
c,!1,k);n.xMap=e.xMap;this.areaPath=n;return g},drawGraph:function(){this.areaPath=[];m.prototype.drawGraph.apply(this);var a=this,g=this.areaPath,v=this.options,u=[["area","highcharts-area",this.color,v.fillColor]];A(this.zones,function(h,e){u.push(["zone-area-"+e,"highcharts-area highcharts-zone-area-"+e+" "+h.className,h.color||a.color,h.fillColor||v.fillColor])});A(u,function(h){var e=h[0],k=a[e];k?(k.endX=g.xMap,k.animate({d:g})):(k=a[e]=a.chart.renderer.path(g).addClass(h[1]).attr({fill:F(h[3],
C(h[2]).setOpacity(F(v.fillOpacity,.75)).get()),zIndex:0}).add(a.group),k.isArea=!0);k.startX=g.xMap;k.shiftUnit=v.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var C=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,G,F){var m=G.plotX,g=G.plotY,k=a[F-1];F=a[F+1];var q,v,u,h;if(k&&!k.isNull&&!1!==k.doCurve&&!G.isCliff&&F&&!F.isNull&&!1!==F.doCurve&&!G.isCliff){a=k.plotY;u=F.plotX;F=F.plotY;var e=0;q=(1.5*m+k.plotX)/2.5;v=(1.5*g+a)/2.5;u=(1.5*
m+u)/2.5;h=(1.5*g+F)/2.5;u!==q&&(e=(h-v)*(u-m)/(u-q)+g-h);v+=e;h+=e;v>a&&v>g?(v=Math.max(a,g),h=2*g-v):v<a&&v<g&&(v=Math.min(a,g),h=2*g-v);h>F&&h>g?(h=Math.max(F,g),v=2*g-h):h<F&&h<g&&(h=Math.min(F,g),v=2*g-h);G.rightContX=u;G.rightContY=h}G=["C",C(k.rightContX,k.plotX),C(k.rightContY,k.plotY),C(q,m),C(v,g),m,g];k.rightContX=k.rightContY=null;return G}})})(K);(function(a){var C=a.seriesTypes.area.prototype,A=a.seriesType;A("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:C.getStackPoints,
getGraphPath:C.getGraphPath,setStackCliffs:C.setStackCliffs,drawGraph:C.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var C=a.animObject,A=a.color,G=a.each,F=a.extend,m=a.isNumber,g=a.merge,k=a.pick,q=a.Series,v=a.seriesType,u=a.svg;v("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},
dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){q.prototype.init.apply(this,arguments);var a=this,e=a.chart;e.hasRendered&&G(e.series,function(e){e.type===a.type&&(e.isDirty=!0)})},getColumnMetrics:function(){var a=this,e=a.options,g=a.xAxis,d=a.yAxis,c=g.reversed,m,b={},q=0;!1===e.grouping?
q=1:G(a.chart.series,function(c){var e=c.options,g=c.yAxis,h;c.type!==a.type||!c.visible&&a.chart.options.chart.ignoreHiddenSeries||d.len!==g.len||d.pos!==g.pos||(e.stacking?(m=c.stackKey,void 0===b[m]&&(b[m]=q++),h=b[m]):!1!==e.grouping&&(h=q++),c.columnIndex=h)});var u=Math.min(Math.abs(g.transA)*(g.ordinalSlope||e.pointRange||g.closestPointRange||g.tickInterval||1),g.len),v=u*e.groupPadding,l=(u-2*v)/(q||1),e=Math.min(e.maxPointWidth||g.len,k(e.pointWidth,l*(1-2*e.pointPadding)));a.columnMetrics=
{width:e,offset:(l-e)/2+(v+((a.columnIndex||0)+(c?1:0))*l-u/2)*(c?-1:1)};return a.columnMetrics},crispCol:function(a,e,g,d){var c=this.chart,h=this.borderWidth,b=-(h%2?.5:0),h=h%2?.5:1;c.inverted&&c.renderer.isVML&&(h+=1);this.options.crisp&&(g=Math.round(a+g)+b,a=Math.round(a)+b,g-=a);d=Math.round(e+d)+h;b=.5>=Math.abs(e)&&.5<d;e=Math.round(e)+h;d-=e;b&&d&&(--e,d+=1);return{x:a,y:e,width:g,height:d}},translate:function(){var a=this,e=a.chart,g=a.options,d=a.dense=2>a.closestPointRange*a.xAxis.transA,
d=a.borderWidth=k(g.borderWidth,d?0:1),c=a.yAxis,m=a.translatedThreshold=c.getThreshold(g.threshold),b=k(g.minPointLength,5),y=a.getColumnMetrics(),u=y.width,v=a.barW=Math.max(u,1+2*d),l=a.pointXOffset=y.offset;e.inverted&&(m-=.5);g.pointPadding&&(v=Math.ceil(v));q.prototype.translate.apply(a);G(a.points,function(d){var g=k(d.yBottom,m),h=999+Math.abs(g),h=Math.min(Math.max(-h,d.plotY),c.len+h),n=d.plotX+l,p=v,q=Math.min(h,g),w,y=Math.max(h,g)-q;Math.abs(y)<b&&b&&(y=b,w=!c.reversed&&!d.negative||
c.reversed&&d.negative,q=Math.abs(q-m)>b?g-b:m-(w?b:0));d.barX=n;d.pointWidth=u;d.tooltipPos=e.inverted?[c.len+c.pos-e.plotLeft-h,a.xAxis.len-n-p/2,y]:[n+p/2,h+c.pos-e.plotTop,y];d.shapeType="rect";d.shapeArgs=a.crispCol.apply(a,d.isNull?[n,m,p,0]:[n,q,p,y])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,e){var h=this.options,d,c=this.pointAttrToOptions||{};
d=c.stroke||"borderColor";var k=c["stroke-width"]||"borderWidth",b=a&&a.color||this.color,m=a[d]||h[d]||this.color||b,q=a[k]||h[k]||this[k]||0,c=h.dashStyle;a&&this.zones.length&&(b=a.getZone(),b=a.options.color||b&&b.color||this.color);e&&(a=g(h.states[e],a.options.states&&a.options.states[e]||{}),e=a.brightness,b=a.color||void 0!==e&&A(b).brighten(a.brightness).get()||b,m=a[d]||m,q=a[k]||q,c=a.dashStyle||c);d={fill:b,stroke:m,"stroke-width":q};h.borderRadius&&(d.r=h.borderRadius);c&&(d.dashstyle=
c);return d},drawPoints:function(){var a=this,e=this.chart,k=a.options,d=e.renderer,c=k.animationLimit||250,q;G(a.points,function(b){var h=b.graphic;if(m(b.plotY)&&null!==b.y){q=b.shapeArgs;if(h)h[e.pointCount<c?"animate":"attr"](g(q));else b.graphic=h=d[b.shapeType](q).add(b.group||a.group);h.attr(a.pointAttribs(b,b.selected&&"select")).shadow(k.shadow,null,k.stacking&&!k.borderRadius);h.addClass(b.getClassName(),!0)}else h&&(b.graphic=h.destroy())})},animate:function(a){var e=this,g=this.yAxis,
d=e.options,c=this.chart.inverted,h={};u&&(a?(h.scaleY=.001,a=Math.min(g.pos+g.len,Math.max(g.pos,g.toPixels(d.threshold))),c?h.translateX=a-g.len:h.translateY=a,e.group.attr(h)):(h[c?"translateX":"translateY"]=g.pos,e.group.animate(h,F(C(e.options.animation),{step:function(a,c){e.group.attr({scaleY:Math.max(.001,c.pos)})}})),e.animate=null))},remove:function(){var a=this,e=a.chart;e.hasRendered&&G(e.series,function(e){e.type===a.type&&(e.isDirty=!0)});q.prototype.remove.apply(a,arguments)}})})(K);
(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(K);(function(a){var C=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,
trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&C.prototype.drawGraph.call(this)}})})(K);(function(a){var C=a.pick,A=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,F=this.chart,m=2*(a.slicedOffset||0),g=F.plotWidth-2*m,F=F.plotHeight-2*m,k=a.center,k=[C(k[0],"50%"),C(k[1],"50%"),a.size||"100%",a.innerSize||0],q=Math.min(g,F),v,u;for(v=0;4>v;++v)u=k[v],a=2>v||2===v&&/%$/.test(u),k[v]=A(u,[g,
F,q,k[2]][v])+(a?m:0);k[3]>k[2]&&(k[3]=k[2]);return k}}})(K);(function(a){var C=a.addEvent,A=a.defined,G=a.each,F=a.extend,m=a.inArray,g=a.noop,k=a.pick,q=a.Point,v=a.Series,u=a.seriesType,h=a.setAnimation;u("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},
borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var e=this,d=e.points,c=e.startAngleRad;a||(G(d,function(a){var b=a.graphic,d=a.shapeArgs;b&&(b.attr({r:a.startR||e.center[3]/2,start:c,end:c}),b.animate({r:d.r,start:d.start,end:d.end},e.options.animation))}),e.animate=null)},
updateTotals:function(){var a,g=0,d=this.points,c=d.length,h,b=this.options.ignoreHiddenPoint;for(a=0;a<c;a++)h=d[a],g+=b&&!h.visible?0:h.isNull?0:h.y;this.total=g;for(a=0;a<c;a++)h=d[a],h.percentage=0<g&&(h.visible||!b)?h.y/g*100:0,h.total=g},generatePoints:function(){v.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var e=0,d=this.options,c=d.slicedOffset,g=c+(d.borderWidth||0),b,h,m,q=d.startAngle||0,l=this.startAngleRad=Math.PI/180*(q-90),q=
(this.endAngleRad=Math.PI/180*(k(d.endAngle,q+360)-90))-l,u=this.points,r,z=d.dataLabels.distance,d=d.ignoreHiddenPoint,v,p=u.length,E;a||(this.center=a=this.getCenter());this.getX=function(b,c,d){m=Math.asin(Math.min((b-a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(m)*(a[2]/2+d.labelDistance)};for(v=0;v<p;v++){E=u[v];E.labelDistance=k(E.options.dataLabels&&E.options.dataLabels.distance,z);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,E.labelDistance);b=l+e*q;if(!d||E.visible)e+=
E.percentage/100;h=l+e*q;E.shapeType="arc";E.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*b)/1E3,end:Math.round(1E3*h)/1E3};m=(h+b)/2;m>1.5*Math.PI?m-=2*Math.PI:m<-Math.PI/2&&(m+=2*Math.PI);E.slicedTranslation={translateX:Math.round(Math.cos(m)*c),translateY:Math.round(Math.sin(m)*c)};h=Math.cos(m)*a[2]/2;r=Math.sin(m)*a[2]/2;E.tooltipPos=[a[0]+.7*h,a[1]+.7*r];E.half=m<-Math.PI/2||m>Math.PI/2?1:0;E.angle=m;b=Math.min(g,E.labelDistance/5);E.labelPos=[a[0]+h+Math.cos(m)*E.labelDistance,
a[1]+r+Math.sin(m)*E.labelDistance,a[0]+h+Math.cos(m)*b,a[1]+r+Math.sin(m)*b,a[0]+h,a[1]+r,0>E.labelDistance?"center":E.half?"right":"left",m]}},drawGraph:null,drawPoints:function(){var a=this,g=a.chart.renderer,d,c,h,b,k=a.options.shadow;k&&!a.shadowGroup&&(a.shadowGroup=g.g("shadow").add(a.group));G(a.points,function(e){if(!e.isNull){c=e.graphic;b=e.shapeArgs;d=e.getTranslate();var m=e.shadowGroup;k&&!m&&(m=e.shadowGroup=g.g("shadow").add(a.shadowGroup));m&&m.attr(d);h=a.pointAttribs(e,e.selected&&
"select");c?c.setRadialReference(a.center).attr(h).animate(F(b,d)):(e.graphic=c=g[e.shapeType](b).setRadialReference(a.center).attr(d).add(a.group),e.visible||c.attr({visibility:"hidden"}),c.attr(h).attr({"stroke-linejoin":"round"}).shadow(k,m));c.addClass(e.getClassName())}})},searchPoint:g,sortByAngle:function(a,g){a.sort(function(a,c){return void 0!==a.angle&&(c.angle-a.angle)*g})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:a.CenteredSeriesMixin.getCenter,getSymbol:g},{init:function(){q.prototype.init.apply(this,
arguments);var a=this,g;a.name=k(a.name,"Slice");g=function(d){a.slice("select"===d.type)};C(a,"select",g);C(a,"unselect",g);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,g){var d=this,c=d.series,e=c.chart,b=c.options.ignoreHiddenPoint;g=k(g,b);a!==d.visible&&(d.visible=d.options.visible=a=void 0===a?!d.visible:a,c.options.data[m(d,c.data)]=d.options,G(["graphic","dataLabel","connector","shadowGroup"],function(b){if(d[b])d[b][a?"show":"hide"](!0)}),d.legendItem&&
e.legend.colorizeItem(d,a),a||"hover"!==d.state||d.setState(""),b&&(c.isDirty=!0),g&&e.redraw())},slice:function(a,g,d){var c=this.series;h(d,c.chart);k(g,!0);this.sliced=this.options.sliced=A(a)?a:!this.sliced;c.options.data[m(this,c.data)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var e=this.shapeArgs;return this.sliced||
!this.visible?[]:this.series.chart.renderer.symbols.arc(e.x,e.y,e.r+a,e.r+a,{innerR:this.shapeArgs.r,start:e.start,end:e.end})}})})(K);(function(a){var C=a.addEvent,A=a.arrayMax,G=a.defined,F=a.each,m=a.extend,g=a.format,k=a.map,q=a.merge,v=a.noop,u=a.pick,h=a.relativeLength,e=a.Series,n=a.seriesTypes,d=a.stableSort;a.distribute=function(a,e){function b(a,b){return a.target-b.target}var c,g=!0,h=a,l=[],m;m=0;for(c=a.length;c--;)m+=a[c].size;if(m>e){d(a,function(a,b){return(b.rank||0)-(a.rank||0)});
for(m=c=0;m<=e;)m+=a[c].size,c++;l=a.splice(c-1,a.length)}d(a,b);for(a=k(a,function(a){return{size:a.size,targets:[a.target]}});g;){for(c=a.length;c--;)g=a[c],m=(Math.min.apply(0,g.targets)+Math.max.apply(0,g.targets))/2,g.pos=Math.min(Math.max(0,m-g.size/2),e-g.size);c=a.length;for(g=!1;c--;)0<c&&a[c-1].pos+a[c-1].size>a[c].pos&&(a[c-1].size+=a[c].size,a[c-1].targets=a[c-1].targets.concat(a[c].targets),a[c-1].pos+a[c-1].size>e&&(a[c-1].pos=e-a[c-1].size),a.splice(c,1),g=!0)}c=0;F(a,function(a){var b=
0;F(a.targets,function(){h[c].pos=a.pos+b;b+=h[c].size;c++})});h.push.apply(h,l);d(h,b)};e.prototype.drawDataLabels=function(){var c=this,d=c.options,b=d.dataLabels,e=c.points,h,k,l=c.hasRendered||0,m,r,n=u(b.defer,!!d.animation),v=c.chart.renderer;if(b.enabled||c._hasPointLabels)c.dlProcessOptions&&c.dlProcessOptions(b),r=c.plotGroup("dataLabelsGroup","data-labels",n&&!l?"hidden":"visible",b.zIndex||6),n&&(r.attr({opacity:+l}),l||C(c,"afterAnimate",function(){c.visible&&r.show(!0);r[d.animation?
"animate":"attr"]({opacity:1},{duration:200})})),k=b,F(e,function(e){var l,p=e.dataLabel,n,f,t=e.connector,w=!p,z;h=e.dlOptions||e.options&&e.options.dataLabels;if(l=u(h&&h.enabled,k.enabled)&&null!==e.y)b=q(k,h),n=e.getLabelConfig(),m=b.format?g(b.format,n):b.formatter.call(n,b),z=b.style,n=b.rotation,z.color=u(b.color,z.color,c.color,"#000000"),"contrast"===z.color&&(e.contrastColor=v.getContrast(e.color||c.color),z.color=b.inside||0>u(e.labelDistance,b.distance)||d.stacking?e.contrastColor:"#000000"),
d.cursor&&(z.cursor=d.cursor),f={fill:b.backgroundColor,stroke:b.borderColor,"stroke-width":b.borderWidth,r:b.borderRadius||0,rotation:n,padding:b.padding,zIndex:1},a.objectEach(f,function(a,b){void 0===a&&delete f[b]});!p||l&&G(m)?l&&G(m)&&(p?f.text=m:(p=e.dataLabel=v[n?"text":"label"](m,0,-9999,b.shape,null,null,b.useHTML,null,"data-label"),p.addClass("highcharts-data-label-color-"+e.colorIndex+" "+(b.className||"")+(b.useHTML?"highcharts-tracker":""))),p.attr(f),p.css(z).shadow(b.shadow),p.added||
p.add(r),c.alignDataLabel(e,p,b,null,w)):(e.dataLabel=p=p.destroy(),t&&(e.connector=t.destroy()))})};e.prototype.alignDataLabel=function(a,d,b,e,g){var c=this.chart,h=c.inverted,k=u(a.plotX,-9999),r=u(a.plotY,-9999),n=d.getBBox(),q,p=b.rotation,w=b.align,v=this.visible&&(a.series.forceDL||c.isInsidePlot(k,Math.round(r),h)||e&&c.isInsidePlot(k,h?e.x+1:e.y+e.height-1,h)),y="justify"===u(b.overflow,"justify");if(v&&(q=b.style.fontSize,q=c.renderer.fontMetrics(q,d).b,e=m({x:h?c.plotWidth-r:k,y:Math.round(h?
c.plotHeight-k:r),width:0,height:0},e),m(b,{width:n.width,height:n.height}),p?(y=!1,k=c.renderer.rotCorr(q,p),k={x:e.x+b.x+e.width/2+k.x,y:e.y+b.y+{top:0,middle:.5,bottom:1}[b.verticalAlign]*e.height},d[g?"attr":"animate"](k).attr({align:w}),r=(p+720)%360,r=180<r&&360>r,"left"===w?k.y-=r?n.height:0:"center"===w?(k.x-=n.width/2,k.y-=n.height/2):"right"===w&&(k.x-=n.width,k.y-=r?0:n.height)):(d.align(b,null,e),k=d.alignAttr),y?a.isLabelJustified=this.justifyDataLabel(d,b,k,n,e,g):u(b.crop,!0)&&(v=c.isInsidePlot(k.x,
k.y)&&c.isInsidePlot(k.x+n.width,k.y+n.height)),b.shape&&!p))d[g?"attr":"animate"]({anchorX:h?c.plotWidth-a.plotY:a.plotX,anchorY:h?c.plotHeight-a.plotX:a.plotY});v||(d.attr({y:-9999}),d.placed=!1)};e.prototype.justifyDataLabel=function(a,d,b,e,g,h){var c=this.chart,k=d.align,m=d.verticalAlign,n,q,p=a.box?0:a.padding||0;n=b.x+p;0>n&&("right"===k?d.align="left":d.x=-n,q=!0);n=b.x+e.width-p;n>c.plotWidth&&("left"===k?d.align="right":d.x=c.plotWidth-n,q=!0);n=b.y+p;0>n&&("bottom"===m?d.verticalAlign=
"top":d.y=-n,q=!0);n=b.y+e.height-p;n>c.plotHeight&&("top"===m?d.verticalAlign="bottom":d.y=c.plotHeight-n,q=!0);q&&(a.placed=!h,a.align(d,null,g));return q};n.pie&&(n.pie.prototype.drawDataLabels=function(){var c=this,d=c.data,b,g=c.chart,h=c.options.dataLabels,k=u(h.connectorPadding,10),l=u(h.connectorWidth,1),m=g.plotWidth,r=g.plotHeight,n,q=c.center,p=q[2]/2,v=q[1],C,L,f,t,K=[[],[]],J,N,O,P,x=[0,0,0,0];c.visible&&(h.enabled||c._hasPointLabels)&&(F(d,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&
(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),e.prototype.drawDataLabels.apply(c),F(d,function(a){a.dataLabel&&a.visible&&(K[a.half].push(a),a.dataLabel._pos=null)}),F(K,function(d,e){var l,n,u=d.length,w=[],z;if(u)for(c.sortByAngle(d,e-.5),0<c.maxLabelDistance&&(l=Math.max(0,v-p-c.maxLabelDistance),n=Math.min(v+p+c.maxLabelDistance,g.plotHeight),F(d,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,v-p-a.labelDistance),a.bottom=
Math.min(v+p+a.labelDistance,g.plotHeight),z=a.dataLabel.getBBox().height||21,a.positionsIndex=w.push({target:a.labelPos[1]-a.top+z/2,size:z,rank:a.y})-1)}),a.distribute(w,n+z-l)),P=0;P<u;P++)b=d[P],n=b.positionsIndex,f=b.labelPos,C=b.dataLabel,O=!1===b.visible?"hidden":"inherit",l=f[1],w&&G(w[n])?void 0===w[n].pos?O="hidden":(t=w[n].size,N=b.top+w[n].pos):N=l,delete b.positionIndex,J=h.justify?q[0]+(e?-1:1)*(p+b.labelDistance):c.getX(N<b.top+2||N>b.bottom-2?l:N,e,b),C._attr={visibility:O,align:f[6]},
C._pos={x:J+h.x+({left:k,right:-k}[f[6]]||0),y:N+h.y-10},f.x=J,f.y=N,L=C.getBBox().width,l=null,J-L<k?(l=Math.round(L-J+k),x[3]=Math.max(l,x[3])):J+L>m-k&&(l=Math.round(J+L-m+k),x[1]=Math.max(l,x[1])),0>N-t/2?x[0]=Math.max(Math.round(-N+t/2),x[0]):N+t/2>r&&(x[2]=Math.max(Math.round(N+t/2-r),x[2])),C.sideOverflow=l}),0===A(x)||this.verifyDataLabelOverflow(x))&&(this.placeDataLabels(),l&&F(this.points,function(a){var b;n=a.connector;if((C=a.dataLabel)&&C._pos&&a.visible&&0<a.labelDistance){O=C._attr.visibility;
if(b=!n)a.connector=n=g.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+a.colorIndex).add(c.dataLabelsGroup),n.attr({"stroke-width":l,stroke:h.connectorColor||a.color||"#666666"});n[b?"attr":"animate"]({d:c.connectorPath(a.labelPos)});n.attr("visibility",O)}else n&&(a.connector=n.destroy())}))},n.pie.prototype.connectorPath=function(a){var c=a.x,b=a.y;return u(this.options.dataLabels.softConnector,!0)?["M",c+("left"===a[6]?5:-5),b,"C",c,b,2*a[2]-a[4],2*a[3]-a[5],a[2],
a[3],"L",a[4],a[5]]:["M",c+("left"===a[6]?5:-5),b,"L",a[2],a[3],"L",a[4],a[5]]},n.pie.prototype.placeDataLabels=function(){F(this.points,function(a){var c=a.dataLabel;c&&a.visible&&((a=c._pos)?(c.sideOverflow&&(c._attr.width=c.getBBox().width-c.sideOverflow,c.css({width:c._attr.width+"px",textOverflow:"ellipsis"}),c.shortened=!0),c.attr(c._attr),c[c.moved?"animate":"attr"](a),c.moved=!0):c&&c.attr({y:-9999}))},this)},n.pie.prototype.alignDataLabel=v,n.pie.prototype.verifyDataLabelOverflow=function(a){var c=
this.center,b=this.options,d=b.center,e=b.minSize||80,g,l=null!==b.size;l||(null!==d[0]?g=Math.max(c[2]-Math.max(a[1],a[3]),e):(g=Math.max(c[2]-a[1]-a[3],e),c[0]+=(a[3]-a[1])/2),null!==d[1]?g=Math.max(Math.min(g,c[2]-Math.max(a[0],a[2])),e):(g=Math.max(Math.min(g,c[2]-a[0]-a[2]),e),c[1]+=(a[0]-a[2])/2),g<c[2]?(c[2]=g,c[3]=Math.min(h(b.innerSize||0,g),g),this.translate(c),this.drawDataLabels&&this.drawDataLabels()):l=!0);return l});n.column&&(n.column.prototype.alignDataLabel=function(a,d,b,g,h){var c=
this.chart.inverted,l=a.series,k=a.dlBox||a.shapeArgs,m=u(a.below,a.plotY>u(this.translatedThreshold,l.yAxis.len)),n=u(b.inside,!!this.options.stacking);k&&(g=q(k),0>g.y&&(g.height+=g.y,g.y=0),k=g.y+g.height-l.yAxis.len,0<k&&(g.height-=k),c&&(g={x:l.yAxis.len-g.y-g.height,y:l.xAxis.len-g.x-g.width,width:g.height,height:g.width}),n||(c?(g.x+=m?0:g.width,g.width=0):(g.y+=m?g.height:0,g.height=0)));b.align=u(b.align,!c||n?"center":m?"right":"left");b.verticalAlign=u(b.verticalAlign,c||n?"middle":m?"top":
"bottom");e.prototype.alignDataLabel.call(this,a,d,b,g,h);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(K);(function(a){var C=a.Chart,A=a.each,G=a.pick,F=a.addEvent;C.prototype.callbacks.push(function(a){function g(){var g=[];A(a.series||[],function(a){var k=a.options.dataLabels,m=a.dataLabelCollections||["dataLabel"];(k.enabled||a._hasPointLabels)&&!k.allowOverlap&&a.visible&&A(m,function(h){A(a.points,function(a){a[h]&&(a[h].labelrank=G(a.labelrank,a.shapeArgs&&
a.shapeArgs.height),g.push(a[h]))})})});a.hideOverlappingLabels(g)}g();F(a,"redraw",g)});C.prototype.hideOverlappingLabels=function(a){var g=a.length,k,m,v,u,h,e,n,d,c,w=function(a,c,d,e,g,h,k,m){return!(g>a+d||g+k<a||h>c+e||h+m<c)};for(m=0;m<g;m++)if(k=a[m])k.oldOpacity=k.opacity,k.newOpacity=1;a.sort(function(a,c){return(c.labelrank||0)-(a.labelrank||0)});for(m=0;m<g;m++)for(v=a[m],k=m+1;k<g;++k)if(u=a[k],v&&u&&v!==u&&v.placed&&u.placed&&0!==v.newOpacity&&0!==u.newOpacity&&(h=v.alignAttr,e=u.alignAttr,
n=v.parentGroup,d=u.parentGroup,c=2*(v.box?0:v.padding),h=w(h.x+n.translateX,h.y+n.translateY,v.width-c,v.height-c,e.x+d.translateX,e.y+d.translateY,u.width-c,u.height-c)))(v.labelrank<u.labelrank?v:u).newOpacity=0;A(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(K);(function(a){var C=a.addEvent,A=a.Chart,G=a.createElement,F=a.css,m=a.defaultOptions,g=
a.defaultPlotOptions,k=a.each,q=a.extend,v=a.fireEvent,u=a.hasTouch,h=a.inArray,e=a.isObject,n=a.Legend,d=a.merge,c=a.pick,w=a.Point,b=a.Series,y=a.seriesTypes,D=a.svg,H;H=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};k(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||
(k(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(u)a[d].on("touchstart",c);a.options.cursor&&a[d].css(F).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,g=a.chart,h=g.pointer,m=g.renderer,n=g.options.tooltip.snap,f=a.tracker,q,v=function(){if(g.hoverSeries!==a)a.onMouseOver()},w=
"rgba(192,192,192,"+(D?.0001:.002)+")";if(e&&!c)for(q=e+1;q--;)"M"===d[q]&&d.splice(q+1,0,d[q+1]-n,d[q+2],"L"),(q&&"M"===d[q]||q===e)&&d.splice(q,0,"L",d[q-2]+n,d[q-1]);f?f.attr({d:d}):a.graph&&(a.tracker=m.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:w,fill:c?w:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*n),zIndex:2}).add(a.group),k([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",v).on("mouseout",function(a){h.onTrackerMouseOut(a)});
b.cursor&&a.css({cursor:b.cursor});if(u)a.on("touchstart",v)}))}};y.column&&(y.column.prototype.drawTracker=H.drawTrackerPoint);y.pie&&(y.pie.prototype.drawTracker=H.drawTrackerPoint);y.scatter&&(y.scatter.prototype.drawTracker=H.drawTrackerPoint);q(n.prototype,{setItemEvents:function(a,b,c){var e=this,g=e.chart.renderer.boxWrapper,h="highcharts-legend-"+(a.series?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");g.addClass(h);b.css(e.options.itemHoverStyle)}).on("mouseout",
function(){b.css(d(a.visible?e.itemStyle:e.itemHiddenStyle));g.removeClass(h);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):v(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=G("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);C(a.checkbox,"click",function(b){v(a.series||a,"checkboxClick",
{checked:b.target.checked,item:a},function(){a.select()})})}});m.legend.itemStyle.cursor="pointer";q(A.prototype,{showResetZoom:function(){var a=this,b=m.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,g="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,g)},zoomOut:function(){var a=this;
v(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,d=this.pointer,g=!1,h;!a||a.resetSelection?k(this.axes,function(a){b=a.zoom()}):k(a.xAxis.concat(a.yAxis),function(a){var c=a.axis;d[c.isXAxis?"zoomX":"zoomY"]&&(b=c.zoom(a.min,a.max),c.displayBtn&&(g=!0))});h=this.resetZoomButton;g&&!h?this.showResetZoom():!g&&e(h)&&(this.resetZoomButton=h.destroy());b&&this.redraw(c(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,
e;d&&k(d,function(a){a.setState()});k("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,g=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",h=c[d],f=(b.pointRange||0)/2,l=b.getExtremes(),k=b.toValue(h-g,!0)+f,f=b.toValue(h+b.len-g,!0)-f,m=f<k,h=m?f:k,k=m?k:f,f=Math.min(l.dataMin,b.toValue(b.toPixels(l.min)-b.minPixelPadding)),m=Math.max(l.dataMax,b.toValue(b.toPixels(l.max)+b.minPixelPadding)),n;n=f-h;0<n&&(k+=n,h=f);n=k-m;0<n&&(k=m,h-=n);b.series.length&&h!==l.min&&k!==l.max&&
(b.setExtremes(h,k,!1,!1,{trigger:"pan"}),e=!0);c[d]=g});e&&c.redraw(!1);F(c.container,{cursor:"move"})}});q(w.prototype,{select:function(a,b){var d=this,e=d.series,g=e.chart;a=c(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:b},function(){d.selected=d.options.selected=a;e.options.data[h(d,e.data)]=d.options;d.setState(a&&"select");b||k(g.getSelectedPoints(),function(a){a.selected&&a!==d&&(a.selected=a.options.selected=!1,e.options.data[h(a,e.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},
onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");k(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=d(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){C(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,
b){var d=Math.floor(this.plotX),e=this.plotY,h=this.series,l=h.options.states[a]||{},k=g[h.type].marker&&h.options.marker,m=k&&!1===k.enabled,n=k&&k.states&&k.states[a]||{},f=!1===n.enabled,t=h.stateMarkerGraphic,u=this.marker||{},v=h.chart,w=h.halo,y,B=k&&h.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===l.enabled||a&&(f||m&&!1===n.enabled)||a&&u.states&&u.states[a]&&!1===u.states[a].enabled)){B&&(y=h.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+
this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.attr(h.pointAttribs(this,a)),y&&this.graphic.animate(y,c(v.options.chart.animation,n.animation,k.animation)),t&&t.hide();else{if(a&&n){k=u.symbol||h.symbol;t&&t.currentSymbol!==k&&(t=t.destroy());if(t)t[b?"animate":"attr"]({x:y.x,y:y.y});else k&&(h.stateMarkerGraphic=t=v.renderer.symbol(k,y.x,y.y,y.width,y.height).add(h.markerGroup),t.currentSymbol=k);t&&t.attr(h.pointAttribs(this,a))}t&&(t[a&&v.isInsidePlot(d,e,v.inverted)?
"show":"hide"](),t.element.point=this)}(d=l.halo)&&d.size?(w||(h.halo=w=v.renderer.path().add((this.graphic||t).parentGroup)),w[b?"animate":"attr"]({d:this.haloPath(d.size)}),w.attr({"class":"highcharts-halo highcharts-color-"+c(this.colorIndex,h.colorIndex)}),w.point=this,w.attr(q({fill:this.color||h.color,"fill-opacity":d.opacity,zIndex:-1},d.attributes))):w&&w.point&&w.point.haloPath&&w.animate({d:w.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
a,this.plotY-a,2*a,2*a)}});q(b.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&v(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&v(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,
d=b.options,e=b.graph,g=d.states,h=d.lineWidth,d=0;a=a||"";if(b.state!==a&&(k([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!g[a]||!1!==g[a].enabled)&&(a&&(h=g[a].lineWidth||h+(g[a].lineWidthPlus||0)),e&&!e.dashstyle))for(h={"stroke-width":h},e.animate(h,c(b.chart.options.chart.animation,g[a]&&g[a].animation));b["zone-graph-"+d];)b["zone-graph-"+d].attr(h),d+=1},setVisible:function(a,
b){var c=this,d=c.chart,e=c.legendItem,g,h=d.options.chart.ignoreHiddenSeries,l=c.visible;g=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!l:a)?"show":"hide";k(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][g]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&k(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});k(c.linkedSeries,function(b){b.setVisible(a,
!1)});h&&(d.isDirtyBox=!0);!1!==b&&d.redraw();v(c,g)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);v(this,a?"select":"unselect")},drawTracker:H.drawTrackerGraph})})(K);(function(a){var C=a.Chart,A=a.each,G=a.inArray,F=a.isArray,m=a.isObject,g=a.pick,k=a.splat;C.prototype.setResponsive=function(g){var k=this.options.responsive,m=[],h=this.currentResponsive;k&&k.rules&&
A(k.rules,function(e){void 0===e._id&&(e._id=a.uniqueKey());this.matchResponsiveRule(e,m,g)},this);var e=a.merge.apply(0,a.map(m,function(e){return a.find(k.rules,function(a){return a._id===e}).chartOptions})),m=m.toString()||void 0;m!==(h&&h.ruleIds)&&(h&&this.update(h.undoOptions,g),m?(this.currentResponsive={ruleIds:m,mergedOptions:e,undoOptions:this.currentOptions(e)},this.update(e,g)):this.currentResponsive=void 0)};C.prototype.matchResponsiveRule=function(a,k){var m=a.condition;(m.callback||
function(){return this.chartWidth<=g(m.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=g(m.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=g(m.minWidth,0)&&this.chartHeight>=g(m.minHeight,0)}).call(this)&&k.push(a._id)};C.prototype.currentOptions=function(g){function q(g,e,n,d){var c;a.objectEach(g,function(a,b){if(!d&&-1<G(b,["series","xAxis","yAxis"]))for(g[b]=k(g[b]),n[b]=[],c=0;c<g[b].length;c++)e[b][c]&&(n[b][c]={},q(a[c],e[b][c],n[b][c],d+1));else m(a)?(n[b]=F(a)?[]:{},q(a,e[b]||{},n[b],d+1)):n[b]=
e[b]||null})}var u={};q(g,this.options,u,0);return u}})(K);return K});

/*
 Highcharts JS v5.0.12 (2017-05-24)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(v){"object"===typeof module&&module.exports?module.exports=v:v(Highcharts)})(function(v){(function(a){function r(a,b){this.init(a,b)}var t=a.CenteredSeriesMixin,w=a.each,p=a.extend,m=a.merge,f=a.splat;p(r.prototype,{coll:"pane",init:function(a,b){this.chart=b;this.background=[];b.pane.push(this);this.setOptions(a)},setOptions:function(a){this.options=m(this.defaultOptions,this.chart.angular?{background:{}}:void 0,a)},render:function(){var a=this.options,b=this.options.background,d=this.chart.renderer;
this.group||(this.group=d.g("pane-group").attr({zIndex:a.zIndex||0}).add());this.updateCenter();if(b)for(b=f(b),a=Math.max(b.length,this.background.length||0),d=0;d<a;d++)b[d]&&this.axis?this.renderBackground(m(this.defaultBackgroundOptions,b[d]),d):this.background[d]&&(this.background[d]=this.background[d].destroy(),this.background.splice(d,1))},renderBackground:function(a,b){var d="animate";this.background[b]||(this.background[b]=this.chart.renderer.path().add(this.group),d="attr");this.background[b][d]({d:this.axis.getPlotBandPath(a.from,
a.to,a)}).attr({fill:a.backgroundColor,stroke:a.borderColor,"stroke-width":a.borderWidth,"class":"highcharts-pane "+(a.className||"")})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"#cccccc",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ffffff"],[1,"#e6e6e6"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"},updateCenter:function(a){this.center=(a||this.axis||{}).center=
t.getCenter.call(this)},update:function(a,b){m(!0,this.options,a);this.setOptions(this.options);this.render();w(this.chart.axes,function(d){d.pane===this&&(d.pane=null,d.update({},b))},this)}});a.Pane=r})(v);(function(a){var r=a.each,t=a.extend,w=a.map,p=a.merge,m=a.noop,f=a.pick,h=a.pInt,b=a.wrap,d,e,k=a.Axis.prototype;a=a.Tick.prototype;d={getOffset:m,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:m,setCategories:m,setTitle:m};e={defaultRadialGaugeOptions:{labels:{align:"center",
x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(c){c=
this.options=p(this.defaultOptions,this.defaultRadialOptions,c);c.plotBands||(c.plotBands=[])},getOffset:function(){k.getOffset.call(this);this.chart.axisOffset[this.side]=0},getLinePath:function(c,b){c=this.center;var d=this.chart,g=f(b,c[2]/2-this.offset);this.isCircular||void 0!==b?b=this.chart.renderer.symbols.arc(this.left+c[0],this.top+c[1],g,g,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0}):(b=this.postTranslate(this.angleRad,g),b=["M",c[0]+d.plotLeft,c[1]+d.plotTop,"L",b.x,
b.y]);return b},setAxisTranslation:function(){k.setAxisTranslation.call(this);this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0)},beforeSetTickPositions:function(){if(this.autoConnect=this.isCircular&&void 0===f(this.userMax,this.options.max)&&this.endAngleRad-this.startAngleRad===2*Math.PI)this.max+=this.categories&&1||this.pointRange||this.closestPointRange||
0},setAxisSize:function(){k.setAxisSize.call(this);this.isRadial&&(this.pane.updateCenter(this),this.isCircular&&(this.sector=this.endAngleRad-this.startAngleRad),this.len=this.width=this.height=this.center[2]*f(this.sector,1)/2)},getPosition:function(c,b){return this.postTranslate(this.isCircular?this.translate(c):this.angleRad,f(this.isCircular?b:this.translate(c),this.center[2]/2)-this.offset)},postTranslate:function(c,b){var d=this.chart,g=this.center;c=this.startAngleRad+c;return{x:d.plotLeft+
g[0]+Math.cos(c)*b,y:d.plotTop+g[1]+Math.sin(c)*b}},getPlotBandPath:function(c,b,d){var g=this.center,n=this.startAngleRad,a=g[2]/2,e=[f(d.outerRadius,"100%"),d.innerRadius,f(d.thickness,10)],k=Math.min(this.offset,0),z=/%$/,m,p=this.isCircular;"polygon"===this.options.gridLineInterpolation?g=this.getPlotLinePath(c).concat(this.getPlotLinePath(b,!0)):(c=Math.max(c,this.min),b=Math.min(b,this.max),p||(e[0]=this.translate(c),e[1]=this.translate(b)),e=w(e,function(b){z.test(b)&&(b=h(b,10)*a/100);return b}),
"circle"!==d.shape&&p?(c=n+this.translate(c),b=n+this.translate(b)):(c=-Math.PI/2,b=1.5*Math.PI,m=!0),e[0]-=k,e[2]-=k,g=this.chart.renderer.symbols.arc(this.left+g[0],this.top+g[1],e[0],e[0],{start:Math.min(c,b),end:Math.max(c,b),innerR:f(e[1],e[0]-e[2]),open:m}));return g},getPlotLinePath:function(b,d){var c=this,g=c.center,e=c.chart,a=c.getPosition(b),k,h,f;c.isCircular?f=["M",g[0]+e.plotLeft,g[1]+e.plotTop,"L",a.x,a.y]:"circle"===c.options.gridLineInterpolation?(b=c.translate(b))&&(f=c.getLinePath(0,
b)):(r(e.xAxis,function(b){b.pane===c.pane&&(k=b)}),f=[],b=c.translate(b),g=k.tickPositions,k.autoConnect&&(g=g.concat([g[0]])),d&&(g=[].concat(g).reverse()),r(g,function(c,d){h=k.getPosition(c,b);f.push(d?"L":"M",h.x,h.y)}));return f},getTitlePosition:function(){var b=this.center,d=this.chart,e=this.options.title;return{x:d.plotLeft+b[0]+(e.x||0),y:d.plotTop+b[1]-{high:.5,middle:.25,low:0}[e.align]*b[2]+(e.y||0)}}};b(k,"init",function(b,g,a){var c=g.angular,n=g.polar,q=a.isX,k=c&&q,h,m=g.options,
r=this.pane=g.pane[a.pane||0],y=r.options;if(c){if(t(this,k?d:e),h=!q)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else n&&(t(this,e),this.defaultRadialOptions=(h=q)?this.defaultRadialXOptions:p(this.defaultYAxisOptions,this.defaultRadialYOptions));c||n?(this.isRadial=!0,g.inverted=!1,m.chart.zoomType=null):this.isRadial=!1;h&&(r.axis=this);b.call(this,g,a);k||!c&&!n||(b=this.options,this.angleRad=(b.angle||0)*Math.PI/180,this.startAngleRad=(y.startAngle-90)*Math.PI/180,this.endAngleRad=
(f(y.endAngle,y.startAngle+360)-90)*Math.PI/180,this.offset=b.offset||0,this.isCircular=h)});b(k,"autoLabelAlign",function(b){if(!this.isRadial)return b.apply(this,[].slice.call(arguments,1))});b(a,"getPosition",function(b,d,e,a,l){var c=this.axis;return c.getPosition?c.getPosition(e):b.call(this,d,e,a,l)});b(a,"getLabelPosition",function(b,d,e,a,l,q,k,h,m){var c=this.axis,g=q.y,n=20,u=q.align,x=(c.translate(this.pos)+c.startAngleRad+Math.PI/2)/Math.PI*180%360;c.isRadial?(b=c.getPosition(this.pos,
c.center[2]/2+f(q.distance,-25)),"auto"===q.rotation?a.attr({rotation:x}):null===g&&(g=c.chart.renderer.fontMetrics(a.styles.fontSize).b-a.getBBox().height/2),null===u&&(c.isCircular?(this.label.getBBox().width>c.len*c.tickInterval/(c.max-c.min)&&(n=0),u=x>n&&x<180-n?"left":x>180+n&&x<360-n?"right":"center"):u="center",a.attr({align:u})),b.x+=q.x,b.y+=g):b=b.call(this,d,e,a,l,q,k,h,m);return b});b(a,"getMarkPath",function(b,d,e,a,l,k,h){var c=this.axis;c.isRadial?(b=c.getPosition(this.pos,c.center[2]/
2+a),d=["M",d,e,"L",b.x,b.y]):d=b.call(this,d,e,a,l,k,h);return d})})(v);(function(a){var r=a.each,t=a.noop,w=a.pick,p=a.Series,m=a.seriesType,f=a.seriesTypes;m("arearange","area",{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{series.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:!1}}},
{pointArrayMap:["low","high"],dataLabelCollections:["dataLabel","dataLabelUpper"],toYData:function(a){return[a.low,a.high]},pointValKey:"low",deferTranslatePolar:!0,highToXY:function(a){var b=this.chart,d=this.xAxis.postTranslate(a.rectPlotX,this.yAxis.len-a.plotHigh);a.plotHighX=d.x-b.plotLeft;a.plotHigh=d.y-b.plotTop},translate:function(){var a=this,b=a.yAxis,d=!!a.modifyValue;f.area.prototype.translate.apply(a);r(a.points,function(e){var k=e.low,c=e.high,g=e.plotY;null===c||null===k?e.isNull=!0:
(e.plotLow=g,e.plotHigh=b.translate(d?a.modifyValue(c,e):c,0,1,0,1),d&&(e.yBottom=e.plotHigh))});this.chart.polar&&r(this.points,function(b){a.highToXY(b)})},getGraphPath:function(a){var b=[],d=[],e,k=f.area.prototype.getGraphPath,c,g,n;n=this.options;var u=this.chart.polar&&!1!==n.connectEnds,l=n.connectNulls,q=n.step;a=a||this.points;for(e=a.length;e--;)c=a[e],c.isNull||u||l||a[e+1]&&!a[e+1].isNull||d.push({plotX:c.plotX,plotY:c.plotY,doCurve:!1}),g={polarPlotY:c.polarPlotY,rectPlotX:c.rectPlotX,
yBottom:c.yBottom,plotX:w(c.plotHighX,c.plotX),plotY:c.plotHigh,isNull:c.isNull},d.push(g),b.push(g),c.isNull||u||l||a[e-1]&&!a[e-1].isNull||d.push({plotX:c.plotX,plotY:c.plotY,doCurve:!1});a=k.call(this,a);q&&(!0===q&&(q="left"),n.step={left:"right",center:"center",right:"left"}[q]);b=k.call(this,b);d=k.call(this,d);n.step=q;n=[].concat(a,b);this.chart.polar||"M"!==d[0]||(d[0]="L");this.graphPath=n;this.areaPath=this.areaPath.concat(a,d);n.isArea=!0;n.xMap=a.xMap;this.areaPath.xMap=a.xMap;return n},
drawDataLabels:function(){var a=this.data,b=a.length,d,e=[],k=p.prototype,c=this.options.dataLabels,g=c.align,n=c.verticalAlign,u=c.inside,l,q,x=this.chart.inverted;if(c.enabled||this._hasPointLabels){for(d=b;d--;)if(l=a[d])q=u?l.plotHigh<l.plotLow:l.plotHigh>l.plotLow,l.y=l.high,l._plotY=l.plotY,l.plotY=l.plotHigh,e[d]=l.dataLabel,l.dataLabel=l.dataLabelUpper,l.below=q,x?g||(c.align=q?"right":"left"):n||(c.verticalAlign=q?"top":"bottom"),c.x=c.xHigh,c.y=c.yHigh;k.drawDataLabels&&k.drawDataLabels.apply(this,
arguments);for(d=b;d--;)if(l=a[d])q=u?l.plotHigh<l.plotLow:l.plotHigh>l.plotLow,l.dataLabelUpper=l.dataLabel,l.dataLabel=e[d],l.y=l.low,l.plotY=l._plotY,l.below=!q,x?g||(c.align=q?"left":"right"):n||(c.verticalAlign=q?"bottom":"top"),c.x=c.xLow,c.y=c.yLow;k.drawDataLabels&&k.drawDataLabels.apply(this,arguments)}c.align=g;c.verticalAlign=n},alignDataLabel:function(){f.column.prototype.alignDataLabel.apply(this,arguments)},setStackedPoints:t,getSymbol:t,drawPoints:t})})(v);(function(a){var r=a.seriesType;
r("areasplinerange","arearange",null,{getPointSpline:a.seriesTypes.spline.prototype.getPointSpline})})(v);(function(a){var r=a.defaultPlotOptions,t=a.each,w=a.merge,p=a.noop,m=a.pick,f=a.seriesType,h=a.seriesTypes.column.prototype;f("columnrange","arearange",w(r.column,r.arearange,{lineWidth:1,pointRange:null}),{translate:function(){var b=this,d=b.yAxis,a=b.xAxis,k=a.startAngleRad,c,g=b.chart,n=b.xAxis.isRadial,u;h.translate.apply(b);t(b.points,function(e){var q=e.shapeArgs,l=b.options.minPointLength,
f,h;e.plotHigh=u=d.translate(e.high,0,1,0,1);e.plotLow=e.plotY;h=u;f=m(e.rectPlotY,e.plotY)-u;Math.abs(f)<l?(l-=f,f+=l,h-=l/2):0>f&&(f*=-1,h-=f);n?(c=e.barX+k,e.shapeType="path",e.shapeArgs={d:b.polarArc(h+f,h,c,c+e.pointWidth)}):(q.height=f,q.y=h,e.tooltipPos=g.inverted?[d.len+d.pos-g.plotLeft-h-f/2,a.len+a.pos-g.plotTop-q.x-q.width/2,f]:[a.left-g.plotLeft+q.x+q.width/2,d.pos-g.plotTop+h+f/2,f])})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:p,crispCol:h.crispCol,drawPoints:h.drawPoints,
drawTracker:h.drawTracker,getColumnMetrics:h.getColumnMetrics,animate:function(){return h.animate.apply(this,arguments)},polarArc:function(){return h.polarArc.apply(this,arguments)},pointAttribs:h.pointAttribs})})(v);(function(a){var r=a.each,t=a.isNumber,w=a.merge,p=a.pick,m=a.pInt,f=a.Series,h=a.seriesType,b=a.TrackerMixin;h("gauge","line",{dataLabels:{enabled:!0,defer:!1,y:15,borderRadius:3,crop:!1,verticalAlign:"top",zIndex:2,borderWidth:1,borderColor:"#cccccc"},dial:{},pivot:{},tooltip:{headerFormat:""},
showInLegend:!1},{angular:!0,directTouch:!0,drawGraph:a.noop,fixedBox:!0,forceDL:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var b=this.yAxis,a=this.options,k=b.center;this.generatePoints();r(this.points,function(c){var d=w(a.dial,c.dial),e=m(p(d.radius,80))*k[2]/200,u=m(p(d.baseLength,70))*e/100,l=m(p(d.rearLength,10))*e/100,q=d.baseWidth||3,f=d.topWidth||1,h=a.overshoot,r=b.startAngleRad+b.translate(c.y,null,null,null,!0);t(h)?(h=h/180*Math.PI,r=Math.max(b.startAngleRad-
h,Math.min(b.endAngleRad+h,r))):!1===a.wrap&&(r=Math.max(b.startAngleRad,Math.min(b.endAngleRad,r)));r=180*r/Math.PI;c.shapeType="path";c.shapeArgs={d:d.path||["M",-l,-q/2,"L",u,-q/2,e,-f/2,e,f/2,u,q/2,-l,q/2,"z"],translateX:k[0],translateY:k[1],rotation:r};c.plotX=k[0];c.plotY=k[1]})},drawPoints:function(){var b=this,a=b.yAxis.center,k=b.pivot,c=b.options,g=c.pivot,n=b.chart.renderer;r(b.points,function(a){var d=a.graphic,e=a.shapeArgs,g=e.d,k=w(c.dial,a.dial);d?(d.animate(e),e.d=g):(a.graphic=n[a.shapeType](e).attr({rotation:e.rotation,
zIndex:1}).addClass("highcharts-dial").add(b.group),a.graphic.attr({stroke:k.borderColor||"none","stroke-width":k.borderWidth||0,fill:k.backgroundColor||"#000000"}))});k?k.animate({translateX:a[0],translateY:a[1]}):(b.pivot=n.circle(0,0,p(g.radius,5)).attr({zIndex:2}).addClass("highcharts-pivot").translate(a[0],a[1]).add(b.group),b.pivot.attr({"stroke-width":g.borderWidth||0,stroke:g.borderColor||"#cccccc",fill:g.backgroundColor||"#000000"}))},animate:function(b){var a=this;b||(r(a.points,function(b){var c=
b.graphic;c&&(c.attr({rotation:180*a.yAxis.startAngleRad/Math.PI}),c.animate({rotation:b.shapeArgs.rotation},a.options.animation))}),a.animate=null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);f.prototype.render.call(this);this.group.clip(this.chart.clipRect)},setData:function(b,a){f.prototype.setData.call(this,b,!1);this.processData();this.generatePoints();p(a,!0)&&this.chart.redraw()},drawTracker:b&&b.drawTrackerPoint},
{setState:function(b){this.state=b}})})(v);(function(a){var r=a.each,t=a.noop,w=a.pick,p=a.seriesType,m=a.seriesTypes;p("boxplot","column",{threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eMaximum: {point.high}\x3cbr/\x3eUpper quartile: {point.q3}\x3cbr/\x3eMedian: {point.median}\x3cbr/\x3eLower quartile: {point.q1}\x3cbr/\x3eMinimum: {point.low}\x3cbr/\x3e'},whiskerLength:"50%",fillColor:"#ffffff",lineWidth:1,
medianWidth:2,states:{hover:{brightness:-.3}},whiskerWidth:2},{pointArrayMap:["low","q1","median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]},pointValKey:"high",pointAttribs:function(a){var f=this.options,b=a&&a.color||this.color;return{fill:a.fillColor||f.fillColor||b,stroke:f.lineColor||b,"stroke-width":f.lineWidth||0}},drawDataLabels:t,translate:function(){var a=this.yAxis,h=this.pointArrayMap;m.column.prototype.translate.apply(this);r(this.points,function(b){r(h,
function(d){null!==b[d]&&(b[d+"Plot"]=a.translate(b[d],0,1,0,1))})})},drawPoints:function(){var a=this,h=a.options,b=a.chart.renderer,d,e,k,c,g,n,u=0,l,q,m,p,z=!1!==a.doQuartiles,t,y=a.options.whiskerLength;r(a.points,function(f){var x=f.graphic,r=x?"animate":"attr",J=f.shapeArgs,v={},C={},H={},I=f.color||a.color;void 0!==f.plotY&&(l=J.width,q=Math.floor(J.x),m=q+l,p=Math.round(l/2),d=Math.floor(z?f.q1Plot:f.lowPlot),e=Math.floor(z?f.q3Plot:f.lowPlot),k=Math.floor(f.highPlot),c=Math.floor(f.lowPlot),
x||(f.graphic=x=b.g("point").add(a.group),f.stem=b.path().addClass("highcharts-boxplot-stem").add(x),y&&(f.whiskers=b.path().addClass("highcharts-boxplot-whisker").add(x)),z&&(f.box=b.path(void 0).addClass("highcharts-boxplot-box").add(x)),f.medianShape=b.path(void 0).addClass("highcharts-boxplot-median").add(x)),v.stroke=f.stemColor||h.stemColor||I,v["stroke-width"]=w(f.stemWidth,h.stemWidth,h.lineWidth),v.dashstyle=f.stemDashStyle||h.stemDashStyle,f.stem.attr(v),y&&(C.stroke=f.whiskerColor||h.whiskerColor||
I,C["stroke-width"]=w(f.whiskerWidth,h.whiskerWidth,h.lineWidth),f.whiskers.attr(C)),z&&(x=a.pointAttribs(f),f.box.attr(x)),H.stroke=f.medianColor||h.medianColor||I,H["stroke-width"]=w(f.medianWidth,h.medianWidth,h.lineWidth),f.medianShape.attr(H),n=f.stem.strokeWidth()%2/2,u=q+p+n,f.stem[r]({d:["M",u,e,"L",u,k,"M",u,d,"L",u,c]}),z&&(n=f.box.strokeWidth()%2/2,d=Math.floor(d)+n,e=Math.floor(e)+n,q+=n,m+=n,f.box[r]({d:["M",q,e,"L",q,d,"L",m,d,"L",m,e,"L",q,e,"z"]})),y&&(n=f.whiskers.strokeWidth()%2/
2,k+=n,c+=n,t=/%$/.test(y)?p*parseFloat(y)/100:y/2,f.whiskers[r]({d:["M",u-t,k,"L",u+t,k,"M",u-t,c,"L",u+t,c]})),g=Math.round(f.medianPlot),n=f.medianShape.strokeWidth()%2/2,g+=n,f.medianShape[r]({d:["M",q,g,"L",m,g]}))})},setStackedPoints:t})})(v);(function(a){var r=a.each,t=a.noop,w=a.seriesType,p=a.seriesTypes;w("errorbar","boxplot",{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},
whiskerWidth:null},{type:"errorbar",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:p.arearange?function(){var a=this.pointValKey;p.arearange.prototype.drawDataLabels.call(this);r(this.data,function(f){f.y=f[a]})}:t,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||p.column.prototype.getColumnMetrics.call(this)}})})(v);(function(a){var r=a.correctFloat,t=a.isNumber,w=a.pick,p=a.Point,m=a.Series,
f=a.seriesType,h=a.seriesTypes;f("waterfall","column",{dataLabels:{inside:!0},lineWidth:1,lineColor:"#333333",dashStyle:"dot",borderColor:"#333333",states:{hover:{lineWidthPlus:0}}},{pointValKey:"y",translate:function(){var b=this.options,a=this.yAxis,e,k,c,g,n,f,l,q,m,p,t=w(b.minPointLength,5),v=t/2,y=b.threshold,D=b.stacking,A;h.column.prototype.translate.apply(this);q=m=y;k=this.points;e=0;for(b=k.length;e<b;e++)c=k[e],l=this.processedYData[e],g=c.shapeArgs,n=D&&a.stacks[(this.negStacks&&l<y?"-":
"")+this.stackKey],A=this.getStackIndicator(A,c.x,this.index),p=n?n[c.x].points[A.key]:[0,l],c.isSum?c.y=r(l):c.isIntermediateSum&&(c.y=r(l-m)),f=Math.max(q,q+c.y)+p[0],g.y=a.translate(f,0,1,0,1),c.isSum?(g.y=a.translate(p[1],0,1,0,1),g.height=Math.min(a.translate(p[0],0,1,0,1),a.len)-g.y):c.isIntermediateSum?(g.y=a.translate(p[1],0,1,0,1),g.height=Math.min(a.translate(m,0,1,0,1),a.len)-g.y,m=p[1]):(g.height=0<l?a.translate(q,0,1,0,1)-g.y:a.translate(q,0,1,0,1)-a.translate(q-l,0,1,0,1),q+=n&&n[c.x]?
n[c.x].total:l),0>g.height&&(g.y+=g.height,g.height*=-1),c.plotY=g.y=Math.round(g.y)-this.borderWidth%2/2,g.height=Math.max(Math.round(g.height),.001),c.yBottom=g.y+g.height,g.height<=t&&!c.isNull?(g.height=t,g.y-=v,c.plotY=g.y,c.minPointLengthOffset=0>c.y?-v:v):c.minPointLengthOffset=0,g=c.plotY+(c.negative?g.height:0),this.chart.inverted?c.tooltipPos[0]=a.len-g:c.tooltipPos[1]=g},processData:function(b){var a=this.yData,e=this.options.data,k,c=a.length,g,n,f,l,q,h;n=g=f=l=this.options.threshold||
0;for(h=0;h<c;h++)q=a[h],k=e&&e[h]?e[h]:{},"sum"===q||k.isSum?a[h]=r(n):"intermediateSum"===q||k.isIntermediateSum?a[h]=r(g):(n+=q,g+=q),f=Math.min(n,f),l=Math.max(n,l);m.prototype.processData.call(this,b);this.options.stacking||(this.dataMin=f,this.dataMax=l)},toYData:function(b){return b.isSum?0===b.x?null:"sum":b.isIntermediateSum?0===b.x?null:"intermediateSum":b.y},pointAttribs:function(b,a){var d=this.options.upColor;d&&!b.options.color&&(b.color=0<b.y?d:null);b=h.column.prototype.pointAttribs.call(this,
b,a);delete b.dashstyle;return b},getGraphPath:function(){return["M",0,0]},getCrispPath:function(){var b=this.data,a=b.length,e=this.graph.strokeWidth()+this.borderWidth,e=Math.round(e)%2/2,f=this.yAxis.reversed,c=[],g,n,u;for(u=1;u<a;u++){n=b[u].shapeArgs;g=b[u-1].shapeArgs;n=["M",g.x+g.width,g.y+b[u-1].minPointLengthOffset+e,"L",n.x,g.y+b[u-1].minPointLengthOffset+e];if(0>b[u-1].y&&!f||0<b[u-1].y&&f)n[2]+=g.height,n[5]+=g.height;c=c.concat(n)}return c},drawGraph:function(){m.prototype.drawGraph.call(this);
this.graph.attr({d:this.getCrispPath()})},setStackedPoints:function(){var b=this.options,a,e;m.prototype.setStackedPoints.apply(this,arguments);a=this.stackedYData?this.stackedYData.length:0;for(e=1;e<a;e++)b.data[e].isSum||b.data[e].isIntermediateSum||(this.stackedYData[e]+=this.stackedYData[e-1])},getExtremes:function(){if(this.options.stacking)return m.prototype.getExtremes.apply(this,arguments)}},{getClassName:function(){var b=p.prototype.getClassName.call(this);this.isSum?b+=" highcharts-sum":
this.isIntermediateSum&&(b+=" highcharts-intermediate-sum");return b},isValid:function(){return t(this.y,!0)||this.isSum||this.isIntermediateSum}})})(v);(function(a){var r=a.Series,t=a.seriesType,v=a.seriesTypes;t("polygon","scatter",{marker:{enabled:!1,states:{hover:{enabled:!1}}},stickyTracking:!1,tooltip:{followPointer:!0,pointFormat:""},trackByArea:!0},{type:"polygon",getGraphPath:function(){for(var a=r.prototype.getGraphPath.call(this),m=a.length+1;m--;)(m===a.length||"M"===a[m])&&0<m&&a.splice(m,
0,"z");return this.areaPath=a},drawGraph:function(){this.options.fillColor=this.color;v.area.prototype.drawGraph.call(this)},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawTracker:r.prototype.drawTracker,setStackedPoints:a.noop})})(v);(function(a){var r=a.arrayMax,t=a.arrayMin,v=a.Axis,p=a.color,m=a.each,f=a.isNumber,h=a.noop,b=a.pick,d=a.pInt,e=a.Point,k=a.Series,c=a.seriesType,g=a.seriesTypes;c("bubble","scatter",{dataLabels:{formatter:function(){return this.point.z},inside:!0,verticalAlign:"middle"},
marker:{lineColor:null,lineWidth:1,radius:null,states:{hover:{radiusPlus:0}},symbol:"circle"},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],specialGroup:"group",bubblePadding:!0,zoneAxis:"z",directTouch:!0,pointAttribs:function(a,c){var d=b(this.options.marker.fillOpacity,
.5);a=k.prototype.pointAttribs.call(this,a,c);1!==d&&(a.fill=p(a.fill).setOpacity(d).get("rgba"));return a},getRadii:function(b,a,c,d){var g,e,f,n=this.zData,k=[],l=this.options,q="width"!==l.sizeBy,h=l.zThreshold,m=a-b;e=0;for(g=n.length;e<g;e++)f=n[e],l.sizeByAbsoluteValue&&null!==f&&(f=Math.abs(f-h),a=Math.max(a-h,Math.abs(b-h)),b=0),null===f?f=null:f<b?f=c/2-1:(f=0<m?(f-b)/m:.5,q&&0<=f&&(f=Math.sqrt(f)),f=Math.ceil(c+f*(d-c))/2),k.push(f);this.radii=k},animate:function(b){var a=this.options.animation;
b||(m(this.points,function(b){var c=b.graphic,d;c&&c.width&&(d={x:c.x,y:c.y,width:c.width,height:c.height},c.attr({x:b.plotX,y:b.plotY,width:1,height:1}),c.animate(d,a))}),this.animate=null)},translate:function(){var b,c=this.data,d,e,k=this.radii;g.scatter.prototype.translate.call(this);for(b=c.length;b--;)d=c[b],e=k?k[b]:0,f(e)&&e>=this.minPxSize/2?(d.marker=a.extend(d.marker,{radius:e,width:2*e,height:2*e}),d.dlBox={x:d.plotX-e,y:d.plotY-e,width:2*e,height:2*e}):d.shapeArgs=d.plotY=d.dlBox=void 0},
alignDataLabel:g.column.prototype.alignDataLabel,buildKDTree:h,applyZones:h},{haloPath:function(b){return e.prototype.haloPath.call(this,0===b?0:(this.marker?this.marker.radius||0:0)+b)},ttBelow:!1});v.prototype.beforePadding=function(){var a=this,c=this.len,e=this.chart,g=0,k=c,h=this.isXAxis,p=h?"xData":"yData",v=this.min,w={},D=Math.min(e.plotWidth,e.plotHeight),A=Number.MAX_VALUE,E=-Number.MAX_VALUE,F=this.max-v,B=c/F,G=[];m(this.series,function(c){var g=c.options;!c.bubblePadding||!c.visible&&
e.options.chart.ignoreHiddenSeries||(a.allowZoomOutside=!0,G.push(c),h&&(m(["minSize","maxSize"],function(b){var a=g[b],c=/%$/.test(a),a=d(a);w[b]=c?D*a/100:a}),c.minPxSize=w.minSize,c.maxPxSize=Math.max(w.maxSize,w.minSize),c=c.zData,c.length&&(A=b(g.zMin,Math.min(A,Math.max(t(c),!1===g.displayNegative?g.zThreshold:-Number.MAX_VALUE))),E=b(g.zMax,Math.max(E,r(c))))))});m(G,function(b){var c=b[p],d=c.length,e;h&&b.getRadii(A,E,b.minPxSize,b.maxPxSize);if(0<F)for(;d--;)f(c[d])&&a.dataMin<=c[d]&&c[d]<=
a.dataMax&&(e=b.radii[d],g=Math.min((c[d]-v)*B-e,g),k=Math.max((c[d]-v)*B+e,k))});G.length&&0<F&&!this.isLog&&(k-=c,B*=(c+g-k)/c,m([["min","userMin",g],["max","userMax",k]],function(c){void 0===b(a.options[c[0]],a[c[1]])&&(a[c[0]]+=c[2]/B)}))}})(v);(function(a){function r(b,a){var d=this.chart,f=this.options.animation,c=this.group,g=this.markerGroup,n=this.xAxis.center,h=d.plotLeft,l=d.plotTop;d.polar?d.renderer.isSVG&&(!0===f&&(f={}),a?(b={translateX:n[0]+h,translateY:n[1]+l,scaleX:.001,scaleY:.001},
c.attr(b),g&&g.attr(b)):(b={translateX:h,translateY:l,scaleX:1,scaleY:1},c.animate(b,f),g&&g.animate(b,f),this.animate=null)):b.call(this,a)}var t=a.each,v=a.pick,p=a.seriesTypes,m=a.wrap,f=a.Series.prototype,h=a.Pointer.prototype;f.searchPointByAngle=function(b){var a=this.chart,e=this.xAxis.pane.center;return this.searchKDTree({clientX:180+-180/Math.PI*Math.atan2(b.chartX-e[0]-a.plotLeft,b.chartY-e[1]-a.plotTop)})};f.getConnectors=function(b,a,e,f){var c,d,k,h,l,m,p,r;d=f?1:0;c=0<=a&&a<=b.length-
1?a:0>a?b.length-1+a:0;a=0>c-1?b.length-(1+d):c-1;d=c+1>b.length-1?d:c+1;k=b[a];d=b[d];h=k.plotX;k=k.plotY;l=d.plotX;m=d.plotY;d=b[c].plotX;c=b[c].plotY;h=(1.5*d+h)/2.5;k=(1.5*c+k)/2.5;l=(1.5*d+l)/2.5;p=(1.5*c+m)/2.5;m=Math.sqrt(Math.pow(h-d,2)+Math.pow(k-c,2));r=Math.sqrt(Math.pow(l-d,2)+Math.pow(p-c,2));h=Math.atan2(k-c,h-d);p=Math.PI/2+(h+Math.atan2(p-c,l-d))/2;Math.abs(h-p)>Math.PI/2&&(p-=Math.PI);h=d+Math.cos(p)*m;k=c+Math.sin(p)*m;l=d+Math.cos(Math.PI+p)*r;p=c+Math.sin(Math.PI+p)*r;d={rightContX:l,
rightContY:p,leftContX:h,leftContY:k,plotX:d,plotY:c};e&&(d.prevPointCont=this.getConnectors(b,a,!1,f));return d};m(f,"buildKDTree",function(b){this.chart.polar&&(this.kdByAngle?this.searchPoint=this.searchPointByAngle:this.options.findNearestPointBy="xy");b.apply(this)});f.toXY=function(b){var a,e=this.chart,f=b.plotX;a=b.plotY;b.rectPlotX=f;b.rectPlotY=a;a=this.xAxis.postTranslate(b.plotX,this.yAxis.len-a);b.plotX=b.polarPlotX=a.x-e.plotLeft;b.plotY=b.polarPlotY=a.y-e.plotTop;this.kdByAngle?(e=
(f/Math.PI*180+this.xAxis.pane.options.startAngle)%360,0>e&&(e+=360),b.clientX=e):b.clientX=b.plotX};p.spline&&(m(p.spline.prototype,"getPointSpline",function(a,d,e,f){this.chart.polar?f?(a=this.getConnectors(d,f,!0,this.connectEnds),a=["C",a.prevPointCont.rightContX,a.prevPointCont.rightContY,a.leftContX,a.leftContY,a.plotX,a.plotY]):a=["M",e.plotX,e.plotY]:a=a.call(this,d,e,f);return a}),p.areasplinerange&&(p.areasplinerange.prototype.getPointSpline=p.spline.prototype.getPointSpline));m(f,"translate",
function(a){var b=this.chart;a.call(this);if(b.polar&&(this.kdByAngle=b.tooltip&&b.tooltip.shared,!this.preventPostTranslate))for(a=this.points,b=a.length;b--;)this.toXY(a[b])});m(f,"getGraphPath",function(a,d){var b=this,f,c,g;if(this.chart.polar){d=d||this.points;for(f=0;f<d.length;f++)if(!d[f].isNull){c=f;break}!1!==this.options.connectEnds&&void 0!==c&&(this.connectEnds=!0,d.splice(d.length,0,d[c]),g=!0);t(d,function(a){void 0===a.polarPlotY&&b.toXY(a)})}f=a.apply(this,[].slice.call(arguments,
1));g&&d.pop();return f});m(f,"animate",r);p.column&&(p=p.column.prototype,p.polarArc=function(a,d,e,f){var b=this.xAxis.center,g=this.yAxis.len;return this.chart.renderer.symbols.arc(b[0],b[1],g-d,null,{start:e,end:f,innerR:g-v(a,g)})},m(p,"animate",r),m(p,"translate",function(a){var b=this.xAxis,e=b.startAngleRad,f,c,g;this.preventPostTranslate=!0;a.call(this);if(b.isRadial)for(f=this.points,g=f.length;g--;)c=f[g],a=c.barX+e,c.shapeType="path",c.shapeArgs={d:this.polarArc(c.yBottom,c.plotY,a,a+
c.pointWidth)},this.toXY(c),c.tooltipPos=[c.plotX,c.plotY],c.ttBelow=c.plotY>b.center[1]}),m(p,"alignDataLabel",function(a,d,e,k,c,g){this.chart.polar?(a=d.rectPlotX/Math.PI*180,null===k.align&&(k.align=20<a&&160>a?"left":200<a&&340>a?"right":"center"),null===k.verticalAlign&&(k.verticalAlign=45>a||315<a?"bottom":135<a&&225>a?"top":"middle"),f.alignDataLabel.call(this,d,e,k,c,g)):a.call(this,d,e,k,c,g)}));m(h,"getCoordinates",function(a,d){var b=this.chart,f={xAxis:[],yAxis:[]};b.polar?t(b.axes,function(a){var c=
a.isXAxis,e=a.center,h=d.chartX-e[0]-b.plotLeft,e=d.chartY-e[1]-b.plotTop;f[c?"xAxis":"yAxis"].push({axis:a,value:a.translate(c?Math.PI-Math.atan2(h,e):Math.sqrt(Math.pow(h,2)+Math.pow(e,2)),!0)})}):f=a.call(this,d);return f});m(a.Chart.prototype,"getAxes",function(b){this.pane||(this.pane=[]);t(a.splat(this.options.pane),function(b){new a.Pane(b,this)},this);b.call(this)});m(a.Chart.prototype,"drawChartBox",function(a){a.call(this);t(this.pane,function(a){a.render()})});m(a.Chart.prototype,"get",
function(b,d){return a.find(this.pane,function(a){return a.options.id===d})||b.call(this,d)})})(v)});

/*
 Highcharts JS v5.0.12 (2017-05-24)
 Exporting module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:k(Highcharts)})(function(k){(function(f){var k=f.defaultOptions,p=f.doc,A=f.Chart,w=f.addEvent,I=f.removeEvent,E=f.fireEvent,t=f.createElement,B=f.discardElement,v=f.css,n=f.merge,C=f.pick,h=f.each,F=f.objectEach,u=f.extend,J=f.isTouchDevice,D=f.win,G=D.navigator.userAgent,K=f.Renderer.prototype.symbols;/Edge\/|Trident\/|MSIE /.test(G);/firefox/i.test(G);u(k.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",
downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});k.navigation={buttonOptions:{theme:{},symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24}};n(!0,k.navigation,{menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",background:"none",color:"#333333",fontSize:J?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",
color:"#ffffff"},buttonOptions:{symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{fill:"#ffffff",stroke:"none",padding:5}}});k.exporting={type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",_titleKey:"contextButtonTitle",menuItems:[{textKey:"printChart",onclick:function(){this.print()}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChart()}},
{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}]}}};f.post=function(a,b,e){var c=t("form",n({method:"post",action:a,enctype:"multipart/form-data"},e),{display:"none"},p.body);F(b,function(a,b){t("input",{type:"hidden",name:b,value:a},null,c)});c.submit();B(c)};u(A.prototype,{sanitizeSVG:function(a,
b){if(b&&b.exporting&&b.exporting.allowHTML){var e=a.match(/<\/svg>(.*?$)/);e&&e[1]&&(e='\x3cforeignObject x\x3d"0" y\x3d"0" width\x3d"'+b.chart.width+'" height\x3d"'+b.chart.height+'"\x3e\x3cbody xmlns\x3d"http://www.w3.org/1999/xhtml"\x3e'+e[1]+"\x3c/body\x3e\x3c/foreignObject\x3e",a=a.replace("\x3c/svg\x3e",e+"\x3c/svg\x3e"))}a=a.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g,
"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'\x3csvg xmlns:xlink\x3d"http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g," xlink:href\x3d").replace(/\n/," ").replace(/<\/svg>.*?$/,"\x3c/svg\x3e").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1\x3d"rgb($2)" $1-opacity\x3d"$3"').replace(/&nbsp;/g,"\u00a0").replace(/&shy;/g,"\u00ad");return a=a.replace(/<IMG /g,"\x3cimage ").replace(/<(\/?)TITLE>/g,"\x3c$1title\x3e").replace(/height=([^" ]+)/g,
'height\x3d"$1"').replace(/width=([^" ]+)/g,'width\x3d"$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href\x3d"$1"/\x3e').replace(/ id=([^" >]+)/g,' id\x3d"$1"').replace(/class=([^" >]+)/g,'class\x3d"$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(a){return a.toLowerCase()})},getChartHTML:function(){return this.container.innerHTML},getSVG:function(a){var b,e,c,r,m,g=n(this.options,a);p.createElementNS||(p.createElementNS=function(a,b){return p.createElement(b)});
e=t("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},p.body);c=this.renderTo.style.width;m=this.renderTo.style.height;c=g.exporting.sourceWidth||g.chart.width||/px$/.test(c)&&parseInt(c,10)||600;m=g.exporting.sourceHeight||g.chart.height||/px$/.test(m)&&parseInt(m,10)||400;u(g.chart,{animation:!1,renderTo:e,forExport:!0,renderer:"SVGRenderer",width:c,height:m});g.exporting.enabled=!1;delete g.data;g.series=[];h(this.series,function(a){r=n(a.userOptions,
{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible});r.isInternal||g.series.push(r)});h(this.axes,function(a){a.userOptions.internalKey||(a.userOptions.internalKey=f.uniqueKey())});b=new f.Chart(g,this.callback);a&&h(["xAxis","yAxis","series"],function(c){var d={};a[c]&&(d[c]=a[c],b.update(d))});h(this.axes,function(a){var c=f.find(b.axes,function(b){return b.options.internalKey===a.userOptions.internalKey}),d=a.getExtremes(),e=d.userMin,d=d.userMax;!c||void 0===e&&void 0===d||
c.setExtremes(e,d,!0,!1)});c=b.getChartHTML();c=this.sanitizeSVG(c,g);g=null;b.destroy();B(e);return c},getSVGForExport:function(a,b){var e=this.options.exporting;return this.getSVG(n({chart:{borderRadius:0}},e.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||e.sourceWidth,sourceHeight:a&&a.sourceHeight||e.sourceHeight}}))},exportChart:function(a,b){b=this.getSVGForExport(a,b);a=n(this.options.exporting,a);f.post(a.url,{filename:a.filename||"chart",type:a.type,width:a.width||0,scale:a.scale,
svg:b},a.formAttributes)},print:function(){var a=this,b=a.container,e=[],c=b.parentNode,f=p.body,m=f.childNodes,g=a.options.exporting.printMaxWidth,d,H;if(!a.isPrinting){a.isPrinting=!0;a.pointer.reset(null,0);E(a,"beforePrint");if(H=g&&a.chartWidth>g)d=[a.options.chart.width,void 0,!1],a.setSize(g,void 0,!1);h(m,function(a,b){1===a.nodeType&&(e[b]=a.style.display,a.style.display="none")});f.appendChild(b);D.focus();D.print();setTimeout(function(){c.appendChild(b);h(m,function(a,b){1===a.nodeType&&
(a.style.display=e[b])});a.isPrinting=!1;H&&a.setSize.apply(a,d);E(a,"afterPrint")},1E3)}},contextMenu:function(a,b,e,c,f,m,g){var d=this,r=d.options.navigation,k=d.chartWidth,q=d.chartHeight,n="cache-"+a,l=d[n],x=Math.max(f,m),y,z;l||(d[n]=l=t("div",{className:a},{position:"absolute",zIndex:1E3,padding:x+"px"},d.container),y=t("div",{className:"highcharts-menu"},null,l),v(y,u({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},r.menuStyle)),z=function(){v(l,
{display:"none"});g&&g.setState(0);d.openMenu=!1},d.exportEvents.push(w(l,"mouseleave",function(){l.hideTimer=setTimeout(z,500)}),w(l,"mouseenter",function(){clearTimeout(l.hideTimer)}),w(p,"mouseup",function(b){d.pointer.inClass(b.target,a)||z()})),h(b,function(a){if(a){var b;a.separator?b=t("hr",null,null,y):(b=t("div",{className:"highcharts-menu-item",onclick:function(b){b&&b.stopPropagation();z();a.onclick&&a.onclick.apply(d,arguments)},innerHTML:a.text||d.options.lang[a.textKey]},null,y),b.onmouseover=
function(){v(this,r.menuItemHoverStyle)},b.onmouseout=function(){v(this,r.menuItemStyle)},v(b,u({cursor:"pointer"},r.menuItemStyle)));d.exportDivElements.push(b)}}),d.exportDivElements.push(y,l),d.exportMenuWidth=l.offsetWidth,d.exportMenuHeight=l.offsetHeight);b={display:"block"};e+d.exportMenuWidth>k?b.right=k-e-f-x+"px":b.left=e-x+"px";c+m+d.exportMenuHeight>q&&"top"!==g.alignOptions.verticalAlign?b.bottom=q-c-x+"px":b.top=c+m-x+"px";v(l,b);d.openMenu=!0},addButton:function(a){var b=this,e=b.renderer,
c=n(b.options.navigation.buttonOptions,a),f=c.onclick,m=c.menuItems,g,d,k=c.symbolSize||12;b.btnCount||(b.btnCount=0);b.exportDivElements||(b.exportDivElements=[],b.exportSVGElements=[]);if(!1!==c.enabled){var h=c.theme,q=h.states,p=q&&q.hover,q=q&&q.select,l;delete h.states;f?l=function(a){a.stopPropagation();f.call(b,a)}:m&&(l=function(){b.contextMenu(d.menuClassName,m,d.translateX,d.translateY,d.width,d.height,d);d.setState(2)});c.text&&c.symbol?h.paddingLeft=C(h.paddingLeft,25):c.text||u(h,{width:c.width,
height:c.height,padding:0});d=e.button(c.text,0,0,l,h,p,q).addClass(a.className).attr({"stroke-linecap":"round",title:b.options.lang[c._titleKey],zIndex:3});d.menuClassName=a.menuClassName||"highcharts-menu-"+b.btnCount++;c.symbol&&(g=e.symbol(c.symbol,c.symbolX-k/2,c.symbolY-k/2,k,k).addClass("highcharts-button-symbol").attr({zIndex:1}).add(d),g.attr({stroke:c.symbolStroke,fill:c.symbolFill,"stroke-width":c.symbolStrokeWidth||1}));d.add().align(u(c,{width:d.width,x:C(c.x,b.buttonOffset)}),!0,"spacingBox");
b.buttonOffset+=(d.width+c.buttonSpacing)*("right"===c.align?-1:1);b.exportSVGElements.push(d,g)}},destroyExport:function(a){var b=a?a.target:this;a=b.exportSVGElements;var e=b.exportDivElements,c=b.exportEvents,f;a&&(h(a,function(a,c){a&&(a.onclick=a.ontouchstart=null,f="cache-"+a.menuClassName,b[f]&&delete b[f],b.exportSVGElements[c]=a.destroy())}),a.length=0);e&&(h(e,function(a,c){clearTimeout(a.hideTimer);I(a,"mouseleave");b.exportDivElements[c]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=
null;B(a)}),e.length=0);c&&(h(c,function(a){a()}),c.length=0)}});K.menu=function(a,b,e,c){return["M",a,b+2.5,"L",a+e,b+2.5,"M",a,b+c/2+.5,"L",a+e,b+c/2+.5,"M",a,b+c-1.5,"L",a+e,b+c-1.5]};A.prototype.renderExporting=function(){var a=this,b=a.options.exporting,e=b.buttons,c=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0;a.isDirtyExporting&&a.destroyExport();c&&!1!==b.enabled&&(a.exportEvents=[],F(e,function(b){a.addButton(b)}),a.isDirtyExporting=!1);w(a,"destroy",a.destroyExport)};A.prototype.callbacks.push(function(a){a.renderExporting();
w(a,"redraw",a.renderExporting);h(["exporting","navigation"],function(b){a[b]={update:function(e,c){a.isDirtyExporting=!0;n(!0,a.options[b],e);C(c,!0)&&a.redraw()}}})})})(k)});

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
