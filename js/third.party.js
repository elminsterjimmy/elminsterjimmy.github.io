
(function(e){e.fn.extend({slimScroll:function(g){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},g);this.each(function(){function u(d){if(r){d=d||window.event;var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,e,g){k=!1;var f=d,h=b.outerHeight()-c.outerHeight();e&&(f=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),f=Math.min(Math.max(f,0),h),f=0<d?Math.ceil(f):Math.floor(f),c.css({top:f+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());f=l*(b[0].scrollHeight-b.outerHeight());g&&(f=d,d=f/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),h),c.css({top:d+"px"}));b.scrollTop(f);b.trigger("slimscrolling",~~f);v();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",u,!1),this.addEventListener("mousewheel",u,!1)):document.attachEvent("onmousewheel",u)}function w(){s=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:s+"px"});var a=s==b.outerHeight()?"none":"block";c.css({display:a})}
function v(){w();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;s>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&h.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&r||x||y||(c.fadeOut("slow"),h.fadeOut("slow"))},1E3))}var r,x,y,A,z,s,l,B,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),c=b.parent().find("."+a.barClass),h=b.parent().find("."+a.railClass);w();if(e.isPlainObject(g)){if("height"in g&&"auto"==g.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in g)n=parseInt(a.scrollTo);else if("scrollBy"in g)n+=parseInt(a.scrollBy);else if("destroy"in g){c.remove();h.remove();b.unwrap();return}m(n,!1,!0)}}else if(!(e.isPlainObject(g)&&"destroy"in g)){a.height="auto"==a.height?b.parent().height():a.height;n=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var h=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};h.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(h);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});h.hover(function(){v()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){r=!0;v();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});w();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);!function(e,n){"use strict";var o=["ng","oc.lazyLoad"],r={},t=[],i=[],a=[],s=e.noop,u={},c=[],d=e.module("oc.lazyLoad",["ng"]);d.provider("$ocLazyLoad",["$controllerProvider","$provide","$compileProvider","$filterProvider","$injector","$animateProvider",function(d,l,p,g,m,v){function y(n,r,t){if(r){var i,a,d,l=[];for(i=r.length-1;i>=0;i--)if(a=r[i],e.isString(a)||(a=j(a)),a&&-1===c.indexOf(a)){var f=-1===o.indexOf(a);if(d=h(a),f&&(o.push(a),y(n,d.requires,t)),d._runBlocks.length>0)for(u[a]=[];d._runBlocks.length>0;)u[a].push(d._runBlocks.shift());e.isDefined(u[a])&&(f||t.rerun)&&(l=l.concat(u[a])),$(n,d._invokeQueue,a,t.reconfig),$(n,d._configBlocks,a,t.reconfig),s(f?"ocLazyLoad.moduleLoaded":"ocLazyLoad.moduleReloaded",a),r.pop(),c.push(a)}var p=n.getInstanceInjector();e.forEach(l,function(e){p.invoke(e)})}}function L(n,o){function t(n){return e.isArray(n)?D(n.toString()):e.isObject(n)?D(z(n)):e.isDefined(n)&&null!==n?D(n.toString()):n}var i=n[2][0],a=n[1],u=!1;e.isUndefined(r[o])&&(r[o]={}),e.isUndefined(r[o][a])&&(r[o][a]={});var c=function(e,n){r[o][a].hasOwnProperty(e)||(r[o][a][e]=[]),-1===r[o][a][e].indexOf(n)&&(u=!0,r[o][a][e].push(n),s("ocLazyLoad.componentLoaded",[o,a,e]))};if(e.isString(i))c(i,t(n[2][1]));else{if(!e.isObject(i))return!1;e.forEach(i,function(n,o){e.isString(n)?c(n,t(i[1])):c(o,t(n))})}return u}function $(n,o,r,i){if(o){var a,s,u,c;for(a=0,s=o.length;s>a;a++)if(u=o[a],e.isArray(u)){if(null!==n){if(!n.hasOwnProperty(u[0]))throw new Error("unsupported provider "+u[0]);c=n[u[0]]}var d=L(u,r);if("invoke"!==u[1])d&&e.isDefined(c)&&c[u[1]].apply(c,u[2]);else{var l=function(n){var o=t.indexOf(""+r+"-"+n);(-1===o||i)&&(-1===o&&t.push(""+r+"-"+n),e.isDefined(c)&&c[u[1]].apply(c,u[2]))};if(e.isFunction(u[2][0]))l(u[2][0]);else if(e.isArray(u[2][0]))for(var f=0,h=u[2][0].length;h>f;f++)e.isFunction(u[2][0][f])&&l(u[2][0][f])}}}}function j(n){var o=null;return e.isString(n)?o=n:e.isObject(n)&&n.hasOwnProperty("name")&&e.isString(n.name)&&(o=n.name),o}function E(n){if(!e.isString(n))return!1;try{return h(n)}catch(o){if(/No module/.test(o)||o.message.indexOf("$injector:nomod")>-1)return!1}}var _={},w={$controllerProvider:d,$compileProvider:p,$filterProvider:g,$provide:l,$injector:m,$animateProvider:v},x=!1,O=!1,b=[];b.push=function(e){-1===this.indexOf(e)&&Array.prototype.push.apply(this,arguments)},this.config=function(n){e.isDefined(n.modules)&&(e.isArray(n.modules)?e.forEach(n.modules,function(e){_[e.name]=e}):_[n.modules.name]=n.modules),e.isDefined(n.debug)&&(x=n.debug),e.isDefined(n.events)&&(O=n.events)},this._init=function(r){if(0===i.length){var t=[r],s=["ng:app","ng-app","x-ng-app","data-ng-app"],u=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,c=function(e){return e&&t.push(e)};e.forEach(s,function(n){s[n]=!0,c(document.getElementById(n)),n=n.replace(":","\\:"),"undefined"!=typeof r[0]&&r[0].querySelectorAll&&(e.forEach(r[0].querySelectorAll("."+n),c),e.forEach(r[0].querySelectorAll("."+n+"\\:"),c),e.forEach(r[0].querySelectorAll("["+n+"]"),c))}),e.forEach(t,function(n){if(0===i.length){var o=" "+r.className+" ",t=u.exec(o);t?i.push((t[2]||"").replace(/\s+/g,",")):e.forEach(n.attributes,function(e){0===i.length&&s[e.name]&&i.push(e.value)})}})}0!==i.length||(n.jasmine||n.mocha)&&e.isDefined(e.mock)||console.error("No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.");var d=function l(n){if(-1===o.indexOf(n)){o.push(n);var r=e.module(n);$(null,r._invokeQueue,n),$(null,r._configBlocks,n),e.forEach(r.requires,l)}};e.forEach(i,function(e){d(e)}),i=[],a.pop()};var z=function(n){var o=[];return JSON.stringify(n,function(n,r){if(e.isObject(r)&&null!==r){if(-1!==o.indexOf(r))return;o.push(r)}return r})},D=function(e){var n,o,r,t=0;if(0==e.length)return t;for(n=0,r=e.length;r>n;n++)o=e.charCodeAt(n),t=(t<<5)-t+o,t|=0;return t};this.$get=["$log","$rootElement","$rootScope","$cacheFactory","$q",function(n,r,t,u,d){function l(e){var o=d.defer();return n.error(e.message),o.reject(e),o.promise}var p,g=u("ocLazyLoad");return x||(n={},n.error=e.noop,n.warn=e.noop,n.info=e.noop),w.getInstanceInjector=function(){return p?p:p=r.data("$injector")||e.injector()},s=function(e,o){O&&t.$broadcast(e,o),x&&n.info(e,o)},{_broadcast:s,_$log:n,_getFilesCache:function(){return g},toggleWatch:function(e){e?a.push(!0):a.pop()},getModuleConfig:function(n){if(!e.isString(n))throw new Error("You need to give the name of the module to get");return _[n]?e.copy(_[n]):null},setModuleConfig:function(n){if(!e.isObject(n))throw new Error("You need to give the module config object to set");return _[n.name]=n,n},getModules:function(){return o},isLoaded:function(n){var r=function(e){var n=o.indexOf(e)>-1;return n||(n=!!E(e)),n};if(e.isString(n)&&(n=[n]),e.isArray(n)){var t,i;for(t=0,i=n.length;i>t;t++)if(!r(n[t]))return!1;return!0}throw new Error("You need to define the module(s) name(s)")},_getModuleName:j,_getModule:function(e){try{return h(e)}catch(n){throw(/No module/.test(n)||n.message.indexOf("$injector:nomod")>-1)&&(n.message='The module "'+z(e)+'" that you are trying to load does not exist. '+n.message),n}},moduleExists:E,_loadDependencies:function(n,o){var r,t,i,a=[],s=this;if(n=s._getModuleName(n),null===n)return d.when();try{r=s._getModule(n)}catch(u){return l(u)}return t=s.getRequires(r),e.forEach(t,function(r){if(e.isString(r)){var t=s.getModuleConfig(r);if(null===t)return void b.push(r);r=t}if(s.moduleExists(r.name))return i=r.files.filter(function(e){return s.getModuleConfig(r.name).files.indexOf(e)<0}),0!==i.length&&s._$log.warn('Module "',n,'" attempted to redefine configuration for dependency. "',r.name,'"\n Additional Files Loaded:',i),e.isDefined(s.filesLoader)?void a.push(s.filesLoader(r,o).then(function(){return s._loadDependencies(r)})):l(new Error("Error: New dependencies need to be loaded from external files ("+r.files+"), but no loader has been defined."));if(e.isArray(r)?r={files:r}:e.isObject(r)&&r.hasOwnProperty("name")&&r.name&&(s.setModuleConfig(r),b.push(r.name)),e.isDefined(r.files)&&0!==r.files.length){if(!e.isDefined(s.filesLoader))return l(new Error('Error: the module "'+r.name+'" is defined in external files ('+r.files+"), but no loader has been defined."));a.push(s.filesLoader(r,o).then(function(){return s._loadDependencies(r)}))}}),d.all(a)},inject:function(n){var o=void 0===arguments[1]?{}:arguments[1],r=this,t=d.defer();if(e.isDefined(n)&&null!==n){if(e.isArray(n)){var a=[];return e.forEach(n,function(e){a.push(r.inject(e))}),d.all(a)}r._addToLoadList(r._getModuleName(n),!0)}if(i.length>0){var s=i.slice(),u=function l(e){b.push(e),r._loadDependencies(e,o).then(function(){try{c=[],y(w,b,o)}catch(e){return r._$log.error(e.message),void t.reject(e)}i.length>0?l(i.shift()):t.resolve(s)},function(e){t.reject(e)})};u(i.shift())}else t.resolve();return t.promise},getRequires:function(n){var r=[];return e.forEach(n.requires,function(e){-1===o.indexOf(e)&&r.push(e)}),r},_invokeQueue:$,_registerInvokeList:L,_register:y,_addToLoadList:f}}],this._init(e.element(n.document))}]);var l=e.bootstrap;e.bootstrap=function(n,o,r){return e.forEach(o.slice(),function(e){f(e,!0)}),l(n,o,r)};var f=function(n,o){(a.length>0||o)&&e.isString(n)&&-1===i.indexOf(n)&&i.push(n)},h=e.module;e.module=function(e,n,o){return f(e),h(e,n,o)},"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="oc.lazyLoad")}(angular,window),function(e){"use strict";e.module("oc.lazyLoad").directive("ocLazyLoad",["$ocLazyLoad","$compile","$animate","$parse",function(n,o,r,t){return{restrict:"A",terminal:!0,priority:1e3,compile:function(i,a){var s=i[0].innerHTML;return i.html(""),function(a,u,c){var d=t(c.ocLazyLoad);a.$watch(function(){return d(a)||c.ocLazyLoad},function(t){e.isDefined(t)&&n.load(t).then(function(){r.enter(s,u);var n=i.contents();e.forEach(n,function(e){3!==e.nodeType&&o(e)(a)})})},!0)}}}}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q","$window","$interval",function(n,o,r,t){var i=!1,a=!1,s=r.document.getElementsByTagName("head")[0]||r.document.getElementsByTagName("body")[0];return n.buildElement=function(u,c,d){var l,f,h=o.defer(),p=n._getFilesCache(),g=function(e){var n=(new Date).getTime();return e.indexOf("?")>=0?"&"===e.substring(0,e.length-1)?""+e+"_dc="+n:""+e+"&_dc="+n:""+e+"?_dc="+n};switch(e.isUndefined(p.get(c))&&p.put(c,h.promise),u){case"css":l=r.document.createElement("link"),l.type="text/css",l.rel="stylesheet",l.href=d.cache===!1?g(c):c;break;case"js":l=r.document.createElement("script"),l.src=d.cache===!1?g(c):c;break;default:p.remove(c),h.reject(new Error('Requested type "'+u+'" is not known. Could not inject "'+c+'"'))}l.onload=l.onreadystatechange=function(e){l.readyState&&!/^c|loade/.test(l.readyState)||f||(l.onload=l.onreadystatechange=null,f=1,n._broadcast("ocLazyLoad.fileLoaded",c),h.resolve())},l.onerror=function(){p.remove(c),h.reject(new Error("Unable to load "+c))},l.async=d.serie?0:1;var m=s.lastChild;if(d.insertBefore){var v=e.element(e.isDefined(window.jQuery)?d.insertBefore:document.querySelector(d.insertBefore));v&&v.length>0&&(m=v[0])}if(m.parentNode.insertBefore(l,m),"css"==u){if(!i){var y=r.navigator.userAgent.toLowerCase();if(/iP(hone|od|ad)/.test(r.navigator.platform)){var L=r.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),$=parseFloat([parseInt(L[1],10),parseInt(L[2],10),parseInt(L[3]||0,10)].join("."));a=6>$}else if(y.indexOf("android")>-1){var j=parseFloat(y.slice(y.indexOf("android")+8));a=4.4>j}else if(y.indexOf("safari")>-1){var E=y.match(/version\/([\.\d]+)/i);a=E&&E[1]&&parseFloat(E[1])<6}}if(a)var _=1e3,w=t(function(){try{l.sheet.cssRules,t.cancel(w),l.onload()}catch(e){--_<=0&&l.onerror()}},20)}return h.promise},n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,o){return n.filesLoader=function(r){var t=void 0===arguments[1]?{}:arguments[1],i=[],a=[],s=[],u=[],c=null,d=n._getFilesCache();n.toggleWatch(!0),e.extend(t,r);var l=function(o){var r,l=null;if(e.isObject(o)&&(l=o.type,o=o.path),c=d.get(o),e.isUndefined(c)||t.cache===!1){if(null!==(r=/^(css|less|html|htm|js)?(?=!)/.exec(o))&&(l=r[1],o=o.substr(r[1].length+1,o.length)),!l)if(null!==(r=/[.](css|less|html|htm|js)?((\?|#).*)?$/.exec(o)))l=r[1];else{if(n.jsLoader.hasOwnProperty("ocLazyLoadLoader")||!n.jsLoader.hasOwnProperty("load"))return void n._$log.error("File type could not be determined. "+o);l="js"}"css"!==l&&"less"!==l||-1!==i.indexOf(o)?"html"!==l&&"htm"!==l||-1!==a.indexOf(o)?"js"===l||-1===s.indexOf(o)?s.push(o):n._$log.error("File type is not valid. "+o):a.push(o):i.push(o)}else c&&u.push(c)};if(t.serie?l(t.files.shift()):e.forEach(t.files,function(e){l(e)}),i.length>0){var f=o.defer();n.cssLoader(i,function(o){e.isDefined(o)&&n.cssLoader.hasOwnProperty("ocLazyLoadLoader")?(n._$log.error(o),f.reject(o)):f.resolve()},t),u.push(f.promise)}if(a.length>0){var h=o.defer();n.templatesLoader(a,function(o){e.isDefined(o)&&n.templatesLoader.hasOwnProperty("ocLazyLoadLoader")?(n._$log.error(o),h.reject(o)):h.resolve()},t),u.push(h.promise)}if(s.length>0){var p=o.defer();n.jsLoader(s,function(o){e.isDefined(o)&&n.jsLoader.hasOwnProperty("ocLazyLoadLoader")?(n._$log.error(o),p.reject(o)):p.resolve()},t),u.push(p.promise)}if(0===u.length){var g=o.defer(),m="Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.";return n._$log.error(m),g.reject(m),g.promise}return t.serie&&t.files.length>0?o.all(u).then(function(){return n.filesLoader(r,t)}):o.all(u)["finally"](function(e){return n.toggleWatch(!1),e})},n.load=function(r){var t,i=void 0===arguments[1]?{}:arguments[1],a=this,s=null,u=[],c=o.defer(),d=e.copy(r),l=e.copy(i);if(e.isArray(d))return e.forEach(d,function(e){u.push(a.load(e,l))}),o.all(u).then(function(e){c.resolve(e)},function(e){c.reject(e)}),c.promise;if(e.isString(d)?(s=a.getModuleConfig(d),s||(s={files:[d]})):e.isObject(d)&&(s=e.isDefined(d.path)&&e.isDefined(d.type)?{files:[d]}:a.setModuleConfig(d)),null===s){var f=a._getModuleName(d);return t='Module "'+(f||"unknown")+'" is not configured, cannot load.',n._$log.error(t),c.reject(new Error(t)),c.promise}e.isDefined(s.template)&&(e.isUndefined(s.files)&&(s.files=[]),e.isString(s.template)?s.files.push(s.template):e.isArray(s.template)&&s.files.concat(s.template));var h=e.extend({},l,s);return e.isUndefined(s.files)&&e.isDefined(s.name)&&n.moduleExists(s.name)?n.inject(s.name,h):(n.filesLoader(s,h).then(function(){n.inject(null,h).then(function(e){c.resolve(e)},function(e){c.reject(e)})},function(e){c.reject(e)}),c.promise)},n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,o){return n.cssLoader=function(r,t,i){var a=[];e.forEach(r,function(e){a.push(n.buildElement("css",e,i))}),o.all(a).then(function(){t()},function(e){t(e)})},n.cssLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,o){return n.jsLoader=function(r,t,i){var a=[];e.forEach(r,function(e){a.push(n.buildElement("js",e,i))}),o.all(a).then(function(){t()},function(e){t(e)})},n.jsLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$templateCache","$q","$http",function(n,o,r,t){return n.templatesLoader=function(i,a,s){var u=[],c=n._getFilesCache();return e.forEach(i,function(n){var i=r.defer();u.push(i.promise),t.get(n,s).success(function(r){e.isString(r)&&r.length>0&&e.forEach(e.element(r),function(e){"SCRIPT"===e.nodeName&&"text/ng-template"===e.type&&o.put(e.id,e.innerHTML)}),e.isUndefined(c.get(n))&&c.put(n,!0),i.resolve()}).error(function(e){i.reject(new Error('Unable to load template file "'+n+'": '+e))})}),r.all(u).then(function(){a()},function(e){a(e)})},n.templatesLoader.ocLazyLoadLoader=!0,n}])}])}(angular),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,n){var o;if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),t=r.length>>>0;if(0===t)return-1;var i=+n||0;if(Math.abs(i)===1/0&&(i=0),i>=t)return-1;for(o=Math.max(i>=0?i:t-Math.abs(i),0);t>o;){if(o in r&&r[o]===e)return o;o++}return-1});