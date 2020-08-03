var paper=function(C,q){var A=(C=C||require("./node/self.js")).window,T=C.document,U=new function(){function n(t,e,n){var i;return t&&((i=f(t,"length"))&&"number"==typeof i.value?r:function(t,e){for(var n in this)this.hasOwnProperty(n)&&t.call(e,this[n],n,this)}).call(t,e,n=n||t),n}var s=/^(statics|enumerable|beans|preserve)$/,t=[],i=t.slice,a=Object.create,f=Object.getOwnPropertyDescriptor,d=Object.defineProperty,r=t.forEach||function(t,e){for(var n=0,i=this.length;n<i;n++)t.call(e,this[n],n,this)},o=Object.assign||function(t){for(var e=1,n=arguments.length;e<n;e++){var i=arguments[e];for(var r in i)i.hasOwnProperty(r)&&(t[r]=i[r])}return t};function h(a,o,h,u,l){var c={};function t(t,e){"string"==typeof(e=e||(e=f(o,t))&&(e.get?e:e.value))&&"#"===e[0]&&(e=a[e.substring(1)]||e);var n,i="function"==typeof e,r=e,s=l||i&&!e.base?e&&e.get?t in a:a[t]:null;l&&s||(i&&s&&(e.base=s),i&&!1!==u&&(n=t.match(/^([gs]et|is)(([A-Z])(.*))$/))&&(c[n[3].toLowerCase()+n[4]]=n[2]),r&&!i&&r.get&&"function"==typeof r.get&&_.isPlainObject(r)||(r={value:r,writable:!0}),(f(a,t)||{configurable:!0}).configurable&&(r.configurable=!0,r.enumerable=null!=h?h:!n),d(a,t,r))}if(o){for(var e in o)o.hasOwnProperty(e)&&!s.test(e)&&t(e);for(var e in c){var n=c[e],i=a["set"+n],r=a["get"+n]||i&&a["is"+n];!r||!0!==u&&0!==r.length||t(e,{get:r,set:i})}}return a}function _(){for(var t=0,e=arguments.length;t<e;t++){var n=arguments[t];n&&o(this,n)}return this}return h(_,{inject:function(t){var e,n,i;t&&(e=!0===t.statics?t:t.statics,n=t.beans,i=t.preserve,e!==t&&h(this.prototype,t,t.enumerable,n,i),h(this,e,null,n,i));for(var r=1,s=arguments.length;r<s;r++)this.inject(arguments[r]);return this},extend:function(){for(var t,e,n,i=this,r=0,s=arguments.length;r<s&&(!t||!e);r++)n=arguments[r],t=t||n.initialize,e=e||n.prototype;return e=(t=t||function(){i.apply(this,arguments)}).prototype=e||a(this.prototype),d(e,"constructor",{value:t,writable:!0,configurable:!0}),h(t,this),arguments.length&&this.inject.apply(t,arguments),t.base=i,t}}).inject({enumerable:!1,initialize:_,set:_,inject:function(){for(var t=0,e=arguments.length;t<e;t++){var n=arguments[t];n&&h(this,n,n.enumerable,n.beans,n.preserve)}return this},extend:function(){var t=a(this);return t.inject.apply(t,arguments)},each:function(t,e){return n(this,t,e)},clone:function(){return new this.constructor(this)},statics:{set:o,each:n,create:a,define:d,describe:f,clone:function(t){return o(new t.constructor,t)},isPlainObject:function(t){var e=null!=t&&t.constructor;return e&&(e===Object||e===_||"Object"===e.name)},pick:function(t,e){return t!==q?t:e},slice:function(t,e,n){return i.call(t,e,n)}}})};"undefined"!=typeof module&&(module.exports=U),U.inject({enumerable:!1,toString:function(){return null!=this._id?(this._class||"Object")+(this._name?" '"+this._name+"'":" @"+this._id):"{ "+U.each(this,function(t,e){var n;/^_/.test(e)||(n=typeof t,this.push(e+": "+("number"==n?b.instance.number(t):"string"==n?"'"+t+"'":t)))},[]).join(", ")+" }"},getClassName:function(){return this._class||""},importJSON:function(t){return U.importJSON(t,this)},exportJSON:function(t){return U.exportJSON(this,t)},toJSON:function(){return U.serialize(this)},set:function(t,e){return t&&U.filter(this,t,e,this._prioritize),this}},{beans:!1,statics:{exports:{},extend:function t(){var e=t.base.apply(this,arguments),n=e.prototype._class;return n&&!U.exports[n]&&(U.exports[n]=e),e},equals:function(t,e){if(t===e)return!0;if(t&&t.equals)return t.equals(e);if(e&&e.equals)return e.equals(t);if(t&&e&&"object"==typeof t&&"object"==typeof e){if(Array.isArray(t)&&Array.isArray(e)){if((n=t.length)!==e.length)return!1;for(;n--;)if(!U.equals(t[n],e[n]))return!1}else{var n,i=Object.keys(t);if((n=i.length)!==Object.keys(e).length)return!1;for(;n--;){var r=i[n];if(!e.hasOwnProperty(r)||!U.equals(t[r],e[r]))return!1}}return!0}return!1},read:function(t,e,n,i){if(this===U){var r=this.peek(t,e);return t.__index++,r}var s,a=this.prototype,o=a._readIndex,h=e||o&&t.__index||0,u=t.length,l=t[h];return i=i||u-h,l instanceof this||n&&n.readNull&&null==l&&i<=1?(o&&(t.__index=h+1),l&&n&&n.clone?l.clone():l):(l=U.create(a),o&&(l.__read=!0),l=l.initialize.apply(l,0<h||h+i<u?U.slice(t,h,h+i):t)||l,o&&(t.__index=h+l.__read,(s=l.__filtered)&&(t.__filtered=s,l.__filtered=q),l.__read=q),l)},peek:function(t,e){return t[t.__index=e||t.__index||0]},remain:function(t){return t.length-(t.__index||0)},readList:function(t,e,n,i){for(var r,s=[],a=e||0,o=i?a+i:t.length,h=a;h<o;h++)s.push(Array.isArray(r=t[h])?this.read(r,0,n):this.read(t,h,n,1));return s},readNamed:function(t,e,n,i,r){var s,a,o=this.getNamed(t,e),h=o!==q;return h&&((a=t.__filtered)||(s=this.getSource(t),(a=t.__filtered=U.create(s)).__unfiltered=s),a[e]=q),this.read(h?[o]:t,n,i,r)},readSupported:function(n,i){var t=this.getSource(n),r=this,s=!1;return t&&Object.keys(t).forEach(function(t){var e;t in i&&((e=r.readNamed(n,t))!==q&&(i[t]=e),s=!0)}),s},getSource:function(t){var e,n=t.__source;return n===q&&(e=1===t.length&&t[0],n=t.__source=e&&U.isPlainObject(e)?e:null),n},getNamed:function(t,e){var n=this.getSource(t);if(n)return e?n[e]:t.__filtered||n},hasNamed:function(t,e){return!!this.getNamed(t,e)},filter:function(n,i,r,t){var s;function e(t){var e;r&&t in r||s&&t in s||(e=i[t])!==q&&(n[t]=e)}if(t){for(var a,o={},h=0,u=t.length;h<u;h++)(a=t[h])in i&&(e(a),o[a]=!0);s=o}return Object.keys(i.__unfiltered||i).forEach(e),n},isPlainValue:function(t,e){return U.isPlainObject(t)||Array.isArray(t)||e&&"string"==typeof t},serialize:function(t,e,n,i){e=e||{};var r,s=!i;if(s&&(e.formatter=new b(e.precision),i={length:0,definitions:{},references:{},add:function(t,e){var n,i,r="#"+t._id,s=this.references[r];return s||(this.length++,n=e.call(t),(i=t._class)&&n[0]!==i&&n.unshift(i),this.definitions[r]=n,s=this.references[r]=[r]),s}}),t&&t._serialize){r=t._serialize(e,i);var a=t._class;!a||t._compactSerialize||!s&&n||r[0]===a||r.unshift(a)}else if(Array.isArray(t)){r=[];for(var o=0,h=t.length;o<h;o++)r[o]=U.serialize(t[o],e,n,i)}else if(U.isPlainObject(t)){r={};for(var u=Object.keys(t),o=0,h=u.length;o<h;o++){var l=u[o];r[l]=U.serialize(t[l],e,n,i)}}else r="number"==typeof t?e.formatter.number(t,e.precision):t;return s&&0<i.length?[["dictionary",i.definitions],r]:r},deserialize:function(t,e,n,i,r){var s=t,a=!n,o=a&&t&&t.length&&"dictionary"===t[0][0];if(n=n||{},Array.isArray(t)){var h=t[0],u="dictionary"===h;if(1==t.length&&/^#/.test(h))return n.dictionary[h];s=[];for(var l,c=(h=U.exports[h])?1:0,f=t.length;c<f;c++)s.push(U.deserialize(t[c],e,n,u,o));h&&(l=s,s=e?e(h,l,a||r):new h(l))}else if(U.isPlainObject(t))for(var d in s={},i&&(n.dictionary=s),t)s[d]=U.deserialize(t[d],e,n);return o?s[1]:s},exportJSON:function(t,e){var n=U.serialize(t,e);return e&&0==e.asString?n:JSON.stringify(n)},importJSON:function(t,a){return U.deserialize("string"==typeof t?JSON.parse(t):t,function(t,e,n){var i,r=n&&a&&a.constructor===t,s=r?a:U.create(t.prototype);return!(1===e.length&&s instanceof D)||!r&&s instanceof o||(i=e[0],U.isPlainObject(i)&&(i.insert=!1,r&&(e=e.concat([{insert:!0}])))),(r?s.set:t).apply(s,e),r&&(a=null),s})},push:function(t,e){var n=e.length;if(n<4096)t.push.apply(t,e);else{var i=t.length;t.length+=n;for(var r=0;r<n;r++)t[i+r]=e[r]}return t},splice:function(t,e,n,i){var r=e&&e.length,s=n===q;(n=s?t.length:n)>t.length&&(n=t.length);for(var a=0;a<r;a++)e[a]._index=n+a;if(s)return U.push(t,e),[];var o=[n,i];e&&U.push(o,e);for(var h=t.splice.apply(t,o),a=0,u=h.length;a<u;a++)h[a]._index=q;for(a=n+r,u=t.length;a<u;a++)t[a]._index=a;return h},capitalize:function(t){return t.replace(/\b[a-z]/g,function(t){return t.toUpperCase()})},camelize:function(t){return t.replace(/-(.)/g,function(t,e){return e.toUpperCase()})},hyphenate:function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}}});var t={on:function(t,e){var n,i,r;return"string"!=typeof t?U.each(t,function(t,e){this.on(e,t)},this):(i=(n=this._eventTypes)&&n[t],-1===(r=(r=this._callbacks=this._callbacks||{})[t]=r[t]||[]).indexOf(e)&&(r.push(e),i&&i.install&&1===r.length&&i.install.call(this,t))),this},off:function(t,e){if("string"==typeof t){var n,i=this._eventTypes,r=i&&i[t],s=this._callbacks&&this._callbacks[t];return s&&(!e||-1!==(n=s.indexOf(e))&&1===s.length?(r&&r.uninstall&&r.uninstall.call(this,t),delete this._callbacks[t]):-1!==n&&s.splice(n,1)),this}U.each(t,function(t,e){this.off(e,t)},this)},once:function(e,n){return this.on(e,function t(){n.apply(this,arguments),this.off(e,t)})},emit:function(t,e){if(!(r=this._callbacks&&this._callbacks[t]))return!1;var n=U.slice(arguments,1),i=e&&e.target&&!e.currentTarget,r=r.slice();i&&(e.currentTarget=this);for(var s=0,a=r.length;s<a;s++)if(0==r[s].apply(this,n)){e&&e.stop&&e.stop();break}return i&&delete e.currentTarget,!0},responds:function(t){return!(!this._callbacks||!this._callbacks[t])},attach:"#on",detach:"#off",fire:"#emit",_installEvents:function(t){var e,n,i=this._eventTypes,r=this._callbacks,s=t?"install":"uninstall";if(i)for(var a in r){0<r[a].length&&((n=(e=i[a])&&e[s])&&n.call(this,a))}},statics:{inject:function t(a){var o,e=a._events;return e&&(o={},U.each(e,function(t,e){var n="string"==typeof t,i=n?t:e,r=U.capitalize(i),s=i.substring(2).toLowerCase();o[s]=n?{}:t,i="_"+i,a["get"+r]=function(){return this[i]},a["set"+r]=function(t){var e=this[i];e&&this.off(s,e),t&&this.on(s,t),this[i]=t}}),a._eventTypes=o),t.base.apply(this,arguments)}}},c=U.extend({_class:"PaperScope",initialize:function t(){(at=this).settings=new U({applyMatrix:!0,insertItems:!0,handleSize:4,hitTolerance:0}),this.project=null,this.projects=[],this.tools=[],this._id=t._id++,t._scopes[this._id]=this;var e,n,i,r,a,s=t.prototype;this.support||(e=it.getContext(1,1)||{},s.support={nativeDash:"setLineDash"in e||"mozDash"in e,nativeBlendModes:x.nativeModes},it.release(e)),this.agent||(n=C.navigator.userAgent.toLowerCase(),r="darwin"===(i=(/(darwin|win|mac|linux|freebsd|sunos)/.exec(n)||[])[0])?"mac":i,a=s.agent=s.browser={platform:r},r&&(a[r]=!0),n.replace(/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node|jsdom)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g,function(t,e,n,i,r){var s;a.chrome||(s="opera"===e?i:/^(node|trident)$/.test(e)?r:n,a.version=s,a.versionNumber=parseFloat(s),e={trident:"msie",jsdom:"node"}[e]||e,a.name=e,a[e]=!0)}),a.chrome&&delete a.webkit,a.atom&&delete a.chrome)},version:"0.12.8",getView:function(){var t=this.project;return t&&t._view},getPaper:function(){return this},execute:function(t,e){var n=at.PaperScript.execute(t,this,e);return j.updateFocus(),n},install:function(e){var n=this;for(var t in U.each(["project","view","tool"],function(t){U.define(e,t,{configurable:!0,get:function(){return n[t]}})}),this)!/^_/.test(t)&&this[t]&&(e[t]=this[t])},setup:function(t){return(at=this).project=new l(t),this},createCanvas:function(t,e){return it.getCanvas(t,e)},activate:function(){at=this},clear:function(){for(var t=this.projects,e=this.tools,n=t.length-1;0<=n;n--)t[n].remove();for(n=e.length-1;0<=n;n--)e[n].remove()},remove:function(){this.clear(),delete c._scopes[this._id]},statics:new function(){function t(n){return n+="Attribute",function(t,e){return t[n](e)||t[n]("data-paper-"+e)}}return{_scopes:{},_id:0,get:function(t){return this._scopes[t]||null},getAttribute:t("get"),hasAttribute:t("has")}}}),e=U.extend(t,{initialize:function(t){this._scope=at,this._index=this._scope[this._list].push(this)-1,!t&&this._scope[this._reference]||this.activate()},activate:function(){if(!this._scope)return!1;var t=this._scope[this._reference];return t&&t!==this&&t.emit("deactivate"),(this._scope[this._reference]=this).emit("activate",t),!0},isActive:function(){return this._scope[this._reference]===this},remove:function(){return null!=this._index&&(U.splice(this._scope[this._list],null,this._index,1),this._scope[this._reference]==this&&(this._scope[this._reference]=null),!(this._scope=null))},getView:function(){return this._scope.getView()}}),V={findItemBoundsCollisions:function(t,e,n){function i(t){for(var e=new Array(t.length),n=0;n<t.length;n++){var i=t[n].getBounds();e[n]=[i.left,i.top,i.right,i.bottom]}return e}var r=i(t),s=e&&e!==t?i(e):r;return this.findBoundsCollisions(r,s,n||0)},findCurveBoundsCollisions:function(t,e,n,i){function r(t){for(var e=Math.min,n=Math.max,i=new Array(t.length),r=0;r<t.length;r++){var s=t[r];i[r]=[e(s[0],s[2],s[4],s[6]),e(s[1],s[3],s[5],s[7]),n(s[0],s[2],s[4],s[6]),n(s[1],s[3],s[5],s[7])]}return i}var s=r(t),a=e&&e!==t?r(e):s;if(i){for(var o=this.findBoundsCollisions(s,a,n||0,!1,!0),h=this.findBoundsCollisions(s,a,n||0,!0,!0),u=[],l=0,c=o.length;l<c;l++)u[l]={hor:o[l],ver:h[l]};return u}return this.findBoundsCollisions(s,a,n||0)},findBoundsCollisions:function(t,e,n,i,r){var s=!e||t===e,a=s?t:t.concat(e),o=t.length,h=a.length;function u(t,e,n){for(var i=0,r=t.length;i<r;){var s=r+i>>>1;a[t[s]][e]<n?i=1+s:r=s}return i-1}for(var l=i?1:0,c=2+l,f=i?0:1,d=2+f,_=new Array(h),g=0;g<h;g++)_[g]=g;_.sort(function(t,e){return a[t][l]-a[e][l]});for(var p=[],v=new Array(o),g=0;g<h;g++){var m,y=_[g],w=a[y],x=s?y:y-o,b=y<o,C=s||!b,S=b?[]:null;if(p.length){var k=u(p,c,w[l]-n)+1;if(p.splice(0,k),s&&r){S=S.concat(p);for(var I=0;I<p.length;I++){v[A=p[I]].push(x)}}else for(var P=w[d],M=w[f],I=0;I<p.length;I++){var A=p[I],T=a[A],O=A<o,z=s||o<=A;(r||(b&&z||C&&O)&&P>=T[f]-n&&M<=T[d]+n)&&(b&&z&&S.push(s?A:A-o),C&&O&&v[A].push(x))}}b&&(t===e&&S.push(y),v[y]=S),p.length?(m=u(p,c,w[c]),p.splice(m+1,0,y)):p.push(y)}for(g=0;g<v.length;g++){var E=v[g];E&&E.sort(function(t,e){return t-e})}return v}},b=U.extend({initialize:function(t){this.precision=U.pick(t,5),this.multiplier=Math.pow(10,this.precision)},number:function(t){return this.precision<16?Math.round(t*this.multiplier)/this.multiplier:t},pair:function(t,e,n){return this.number(t)+(n||",")+this.number(e)},point:function(t,e){return this.number(t.x)+(e||",")+this.number(t.y)},size:function(t,e){return this.number(t.width)+(e||",")+this.number(t.height)},rectangle:function(t,e){return this.point(t,e)+(e||",")+this.size(t,e)}});b.instance=new b;var H=new function(){var f=[[.5773502691896257],[0,.7745966692414834],[.33998104358485626,.8611363115940526],[0,.5384693101056831,.906179845938664],[.2386191860831969,.6612093864662645,.932469514203152],[0,.4058451513773972,.7415311855993945,.9491079123427585],[.1834346424956498,.525532409916329,.7966664774136267,.9602898564975363],[0,.3242534234038089,.6133714327005904,.8360311073266358,.9681602395076261],[.14887433898163122,.4333953941292472,.6794095682990244,.8650633666889845,.9739065285171717],[0,.26954315595234496,.5190961292068118,.7301520055740494,.8870625997680953,.978228658146057],[.1252334085114689,.3678314989981802,.5873179542866175,.7699026741943047,.9041172563704749,.9815606342467192],[0,.2304583159551348,.44849275103644687,.6423493394403402,.8015780907333099,.9175983992229779,.9841830547185881],[.10805494870734367,.31911236892788974,.5152486363581541,.6872929048116855,.827201315069765,.9284348836635735,.9862838086968123],[0,.20119409399743451,.3941513470775634,.5709721726085388,.7244177313601701,.8482065834104272,.937273392400706,.9879925180204854],[.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]],d=[[1],[.8888888888888888,.5555555555555556],[.6521451548625461,.34785484513745385],[.5688888888888889,.47862867049936647,.23692688505618908],[.46791393457269104,.3607615730481386,.17132449237917036],[.4179591836734694,.3818300505051189,.27970539148927664,.1294849661688697],[.362683783378362,.31370664587788727,.22238103445337448,.10122853629037626],[.3302393550012598,.31234707704000286,.26061069640293544,.1806481606948574,.08127438836157441],[.29552422471475287,.26926671930999635,.21908636251598204,.1494513491505806,.06667134430868814],[.2729250867779006,.26280454451024665,.23319376459199048,.18629021092773426,.1255803694649046,.05566856711617366],[.24914704581340277,.2334925365383548,.20316742672306592,.16007832854334622,.10693932599531843,.04717533638651183],[.2325515532308739,.22628318026289723,.2078160475368885,.17814598076194574,.13887351021978725,.09212149983772845,.04048400476531588],[.2152638534631578,.2051984637212956,.18553839747793782,.15720316715819355,.12151857068790319,.08015808715976021,.03511946033175186],[.2025782419255613,.19843148532711158,.1861610000155622,.16626920581699392,.13957067792615432,.10715922046717194,.07036604748810812,.03075324199611727],[.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.062253523938647894,.027152459411754096]],b=Math.abs,C=Math.sqrt,S=Math.pow,e=Math.log2||function(t){return Math.log(t)*Math.LOG2E},k=1e-12,I=112e-18;function P(t,e,n){return t<e?e:n<t?n:t}function p(t,e,n){function i(t){var e=134217729*t,n=t-e+e;return[n,t-n]}var r,s,a,o,h,u=e*e-t*n,l=e*e+t*n;return 3*b(u)<l&&(r=i(t),s=i(e),a=i(n),u=(o=e*e)-(h=t*n)+(s[0]*s[0]-o+2*s[0]*s[1]+s[1]*s[1]-(r[0]*a[0]-h+r[0]*a[1]+r[1]*a[0]+r[1]*a[1]))),u}function M(){var t=Math.max.apply(Math,arguments);return t&&(t<1e-8||1e8<t)?S(2,-Math.round(e(t))):0}return{EPSILON:k,MACHINE_EPSILON:I,CURVETIME_EPSILON:1e-8,GEOMETRIC_EPSILON:1e-7,TRIGONOMETRIC_EPSILON:1e-8,KAPPA:4*(C(2)-1)/3,isZero:function(t){return-k<=t&&t<=k},isMachineZero:function(t){return-I<=t&&t<=I},clamp:P,integrate:function(t,e,n,i){for(var r=f[i-2],s=d[i-2],a=.5*(n-e),o=a+e,h=0,u=i+1>>1,l=1&i?s[h++]*t(o):0;h<u;){var c=a*r[h];l+=s[h++]*(t(o+c)+t(o-c))}return a*l},findRoot:function(t,e,n,i,r,s,a){for(var o=0;o<s;o++){var h=t(n),u=h/e(n),l=n-u;if(b(u)<a){n=l;break}n=0<h?(r=n,l<=i?.5*(i+r):l):(i=n,r<=l?.5*(i+r):l)}return P(n,i,r)},solveQuadratic:function(t,e,n,i,r,s){var a,o=1/0;if(b(t)<k){if(b(e)<k)return b(n)<k?-1:0;a=-n/e}else{var h,u,l,c=p(t,e*=-.5,n);c&&b(c)<I&&((h=M(b(t),b(e),b(n)))&&(c=p(t*=h,e*=h,n*=h))),-I<=c&&(u=c<0?0:C(c),o=0===(l=e+(e<0?-u:u))?-(a=n/t):(a=l/t,n/l))}var f=0,d=null==r,_=r-k,g=s+k;return isFinite(a)&&(d||_<a&&a<g)&&(i[f++]=d?a:P(a,r,s)),o!==a&&isFinite(o)&&(d||_<o&&o<g)&&(i[f++]=d?o:P(o,r,s)),f},solveCubic:function(n,i,r,s,t,e,a){var o,h,u,l,c,f=M(b(n),b(i),b(r),b(s));function d(t){var e=n*(o=t);l=(e+(h=e+i))*o+(u=h*o+r),c=u*o+s}if(f&&(n*=f,i*=f,r*=f,s*=f),b(n)<k)n=i,h=r,u=s,o=1/0;else if(b(s)<k)h=i,u=r,o=0;else{d(-i/n/3);var _=c/n,g=S(b(_),1/3),p=_<0?-1:1,v=-l/n,m=0<v?1.324717957244746*Math.max(g,C(v)):g,y=o-p*m;if(y!==o){for(;d(y),p*o<p*(y=0===l?o:o-c/l/(1+I)););b(n)*o*o>b(s/o)&&(h=((u=-s/o)-r)/o)}}var w=H.solveQuadratic(n,h,u,t,e,a),x=null==e;return isFinite(o)&&(0===w||0<w&&o!==t[0]&&o!==t[1])&&(x||e-k<o&&o<a+k)&&(t[w++]=x?o:P(o,e,a)),w}}},u={_id:1,_pools:{},get:function(t){if(t){var e=this._pools[t];return(e=e||(this._pools[t]={_id:1}))._id++}return this._id++}},Z=U.extend({_class:"Point",_readIndex:!0,initialize:function(t,e){var n,i,r=typeof t,s=this.__read,a=0;return"number"==r?(n="number"==typeof e,this._set(t,n?e:t),s&&(a=n?2:1)):"undefined"==r||null===t?(this._set(0,0),s&&(a=null===t?1:0)):(i="string"==r?t.split(/[\s,]+/)||[]:t,a=1,Array.isArray(i)?this._set(+i[0],+(1<i.length?i[1]:i[0])):"x"in i?this._set(i.x||0,i.y||0):"width"in i?this._set(i.width||0,i.height||0):"angle"in i?(this._set(i.length||0,0),this.setAngle(i.angle||0)):(this._set(0,0),a=0)),s&&(this.__read=a),this},set:"#initialize",_set:function(t,e){return this.x=t,this.y=e,this},equals:function(t){return this===t||t&&(this.x===t.x&&this.y===t.y||Array.isArray(t)&&this.x===t[0]&&this.y===t[1])||!1},clone:function(){return new Z(this.x,this.y)},toString:function(){var t=b.instance;return"{ x: "+t.number(this.x)+", y: "+t.number(this.y)+" }"},_serialize:function(t){var e=t.formatter;return[e.number(this.x),e.number(this.y)]},getLength:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},setLength:function(t){var e,n;this.isZero()?(e=this._angle||0,this._set(Math.cos(e)*t,Math.sin(e)*t)):(n=t/this.getLength(),H.isZero(n)&&this.getAngle(),this._set(this.x*n,this.y*n))},getAngle:function(){return 180*this.getAngleInRadians.apply(this,arguments)/Math.PI},setAngle:function(t){this.setAngleInRadians.call(this,t*Math.PI/180)},getAngleInDegrees:"#getAngle",setAngleInDegrees:"#setAngle",getAngleInRadians:function(){if(arguments.length){var t=Z.read(arguments),e=this.getLength()*t.getLength();if(H.isZero(e))return NaN;var n=this.dot(t)/e;return Math.acos(n<-1?-1:1<n?1:n)}return this.isZero()?this._angle||0:this._angle=Math.atan2(this.y,this.x)},setAngleInRadians:function(t){var e;this._angle=t,this.isZero()||(e=this.getLength(),this._set(Math.cos(t)*e,Math.sin(t)*e))},getQuadrant:function(){return 0<=this.x?0<=this.y?1:4:0<=this.y?2:3}},{beans:!1,getDirectedAngle:function(){var t=Z.read(arguments);return 180*Math.atan2(this.cross(t),this.dot(t))/Math.PI},getDistance:function(){var t=arguments,e=Z.read(t),n=e.x-this.x,i=e.y-this.y,r=n*n+i*i;return U.read(t)?r:Math.sqrt(r)},normalize:function(t){t===q&&(t=1);var e=this.getLength(),n=0!==e?t/e:0,i=new Z(this.x*n,this.y*n);return 0<=n&&(i._angle=this._angle),i},rotate:function(t,e){if(0===t)return this.clone();t=t*Math.PI/180;var n=e?this.subtract(e):this,i=Math.sin(t),r=Math.cos(t),n=new Z(n.x*r-n.y*i,n.x*i+n.y*r);return e?n.add(e):n},transform:function(t){return t?t._transformPoint(this):this},add:function(){var t=Z.read(arguments);return new Z(this.x+t.x,this.y+t.y)},subtract:function(){var t=Z.read(arguments);return new Z(this.x-t.x,this.y-t.y)},multiply:function(){var t=Z.read(arguments);return new Z(this.x*t.x,this.y*t.y)},divide:function(){var t=Z.read(arguments);return new Z(this.x/t.x,this.y/t.y)},modulo:function(){var t=Z.read(arguments);return new Z(this.x%t.x,this.y%t.y)},negate:function(){return new Z(-this.x,-this.y)},isInside:function(){return M.read(arguments).contains(this)},isClose:function(){var t=arguments,e=Z.read(t),n=U.read(t);return this.getDistance(e)<=n},isCollinear:function(){var t=Z.read(arguments);return Z.isCollinear(this.x,this.y,t.x,t.y)},isColinear:"#isCollinear",isOrthogonal:function(){var t=Z.read(arguments);return Z.isOrthogonal(this.x,this.y,t.x,t.y)},isZero:function(){var t=H.isZero;return t(this.x)&&t(this.y)},isNaN:function(){return isNaN(this.x)||isNaN(this.y)},isInQuadrant:function(t){return 0<=this.x*(1<t&&t<4?-1:1)&&0<=this.y*(2<t?-1:1)},dot:function(){var t=Z.read(arguments);return this.x*t.x+this.y*t.y},cross:function(){var t=Z.read(arguments);return this.x*t.y-this.y*t.x},project:function(){var t=Z.read(arguments),e=t.isZero()?0:this.dot(t)/t.dot(t);return new Z(t.x*e,t.y*e)},statics:{min:function(){var t=arguments,e=Z.read(t),n=Z.read(t);return new Z(Math.min(e.x,n.x),Math.min(e.y,n.y))},max:function(){var t=arguments,e=Z.read(t),n=Z.read(t);return new Z(Math.max(e.x,n.x),Math.max(e.y,n.y))},random:function(){return new Z(Math.random(),Math.random())},isCollinear:function(t,e,n,i){return Math.abs(t*i-e*n)<=1e-8*Math.sqrt((t*t+e*e)*(n*n+i*i))},isOrthogonal:function(t,e,n,i){return Math.abs(t*n+e*i)<=1e-8*Math.sqrt((t*t+e*e)*(n*n+i*i))}}},U.each(["round","ceil","floor","abs"],function(t){var e=Math[t];this[t]=function(){return new Z(e(this.x),e(this.y))}},{})),f=Z.extend({initialize:function(t,e,n,i){this._x=t,this._y=e,this._owner=n,this._setter=i},_set:function(t,e,n){return this._x=t,this._y=e,n||this._owner[this._setter](this),this},getX:function(){return this._x},setX:function(t){this._x=t,this._owner[this._setter](this)},getY:function(){return this._y},setY:function(t){this._y=t,this._owner[this._setter](this)},isSelected:function(){return!!(this._owner._selection&this._getSelection())},setSelected:function(t){this._owner._changeSelection(this._getSelection(),t)},_getSelection:function(){return"setPosition"===this._setter?4:0}}),W=U.extend({_class:"Size",_readIndex:!0,initialize:function(t,e){var n,i,r=typeof t,s=this.__read,a=0;return"number"==r?(n="number"==typeof e,this._set(t,n?e:t),s&&(a=n?2:1)):"undefined"==r||null===t?(this._set(0,0),s&&(a=null===t?1:0)):(i="string"==r?t.split(/[\s,]+/)||[]:t,a=1,Array.isArray(i)?this._set(+i[0],+(1<i.length?i[1]:i[0])):"width"in i?this._set(i.width||0,i.height||0):"x"in i?this._set(i.x||0,i.y||0):(this._set(0,0),a=0)),s&&(this.__read=a),this},set:"#initialize",_set:function(t,e){return this.width=t,this.height=e,this},equals:function(t){return t===this||t&&(this.width===t.width&&this.height===t.height||Array.isArray(t)&&this.width===t[0]&&this.height===t[1])||!1},clone:function(){return new W(this.width,this.height)},toString:function(){var t=b.instance;return"{ width: "+t.number(this.width)+", height: "+t.number(this.height)+" }"},_serialize:function(t){var e=t.formatter;return[e.number(this.width),e.number(this.height)]},add:function(){var t=W.read(arguments);return new W(this.width+t.width,this.height+t.height)},subtract:function(){var t=W.read(arguments);return new W(this.width-t.width,this.height-t.height)},multiply:function(){var t=W.read(arguments);return new W(this.width*t.width,this.height*t.height)},divide:function(){var t=W.read(arguments);return new W(this.width/t.width,this.height/t.height)},modulo:function(){var t=W.read(arguments);return new W(this.width%t.width,this.height%t.height)},negate:function(){return new W(-this.width,-this.height)},isZero:function(){var t=H.isZero;return t(this.width)&&t(this.height)},isNaN:function(){return isNaN(this.width)||isNaN(this.height)},statics:{min:function(t,e){return new W(Math.min(t.width,e.width),Math.min(t.height,e.height))},max:function(t,e){return new W(Math.max(t.width,e.width),Math.max(t.height,e.height))},random:function(){return new W(Math.random(),Math.random())}}},U.each(["round","ceil","floor","abs"],function(t){var e=Math[t];this[t]=function(){return new W(e(this.width),e(this.height))}},{})),n=W.extend({initialize:function(t,e,n,i){this._width=t,this._height=e,this._owner=n,this._setter=i},_set:function(t,e,n){return this._width=t,this._height=e,n||this._owner[this._setter](this),this},getWidth:function(){return this._width},setWidth:function(t){this._width=t,this._owner[this._setter](this)},getHeight:function(){return this._height},setHeight:function(t){this._height=t,this._owner[this._setter](this)}}),M=U.extend({_class:"Rectangle",_readIndex:!0,beans:!0,initialize:function(t,e,n,i){var r,s,a,o,h,u,l,c,f,d=arguments,_=typeof t;"number"==_?(this._set(t,e,n,i),r=4):"undefined"==_||null===t?(this._set(0,0,0,0),r=null===t?1:0):1===d.length&&(Array.isArray(t)?(this._set.apply(this,t),r=1):t.x!==q||t.width!==q?(this._set(t.x||0,t.y||0,t.width||0,t.height||0),r=1):t.from===q&&t.to===q&&(this._set(0,0,0,0),U.readSupported(d,this)&&(r=1))),r===q&&(s=Z.readNamed(d,"from"),a=U.peek(d),o=s.x,h=s.y,a&&a.x!==q||U.hasNamed(d,"to")?(l=(u=Z.readNamed(d,"to")).x-o,c=u.y-h,l<0&&(o=u.x,l=-l),c<0&&(h=u.y,c=-c)):(l=(f=W.read(d)).width,c=f.height),this._set(o,h,l,c),r=d.__index);var g=d.__filtered;return g&&(this.__filtered=g),this.__read&&(this.__read=r),this},set:"#initialize",_set:function(t,e,n,i){return this.x=t,this.y=e,this.width=n,this.height=i,this},clone:function(){return new M(this.x,this.y,this.width,this.height)},equals:function(t){var e=U.isPlainValue(t)?M.read(arguments):t;return e===this||e&&this.x===e.x&&this.y===e.y&&this.width===e.width&&this.height===e.height||!1},toString:function(){var t=b.instance;return"{ x: "+t.number(this.x)+", y: "+t.number(this.y)+", width: "+t.number(this.width)+", height: "+t.number(this.height)+" }"},_serialize:function(t){var e=t.formatter;return[e.number(this.x),e.number(this.y),e.number(this.width),e.number(this.height)]},getPoint:function(t){return new(t?Z:f)(this.x,this.y,this,"setPoint")},setPoint:function(){var t=Z.read(arguments);this.x=t.x,this.y=t.y},getSize:function(t){return new(t?W:n)(this.width,this.height,this,"setSize")},_fw:1,_fh:1,setSize:function(){var t=W.read(arguments),e=this._sx,n=this._sy,i=t.width,r=t.height;e&&(this.x+=(this.width-i)*e),n&&(this.y+=(this.height-r)*n),this.width=i,this.height=r,this._fw=this._fh=1},getLeft:function(){return this.x},setLeft:function(t){var e;this._fw||(e=t-this.x,this.width-=.5===this._sx?2*e:e),this.x=t,this._sx=this._fw=0},getTop:function(){return this.y},setTop:function(t){var e;this._fh||(e=t-this.y,this.height-=.5===this._sy?2*e:e),this.y=t,this._sy=this._fh=0},getRight:function(){return this.x+this.width},setRight:function(t){var e;this._fw||(e=t-this.x,this.width=.5===this._sx?2*e:e),this.x=t-this.width,this._sx=1,this._fw=0},getBottom:function(){return this.y+this.height},setBottom:function(t){var e;this._fh||(e=t-this.y,this.height=.5===this._sy?2*e:e),this.y=t-this.height,this._sy=1,this._fh=0},getCenterX:function(){return this.x+this.width/2},setCenterX:function(t){this._fw||.5===this._sx?this.x=t-this.width/2:(this._sx&&(this.x+=2*(t-this.x)*this._sx),this.width=2*(t-this.x)),this._sx=.5,this._fw=0},getCenterY:function(){return this.y+this.height/2},setCenterY:function(t){this._fh||.5===this._sy?this.y=t-this.height/2:(this._sy&&(this.y+=2*(t-this.y)*this._sy),this.height=2*(t-this.y)),this._sy=.5,this._fh=0},getCenter:function(t){return new(t?Z:f)(this.getCenterX(),this.getCenterY(),this,"setCenter")},setCenter:function(){var t=Z.read(arguments);return this.setCenterX(t.x),this.setCenterY(t.y),this},getArea:function(){return this.width*this.height},isEmpty:function(){return 0===this.width||0===this.height},contains:function(t){return t&&t.width!==q||4===(Array.isArray(t)?t:arguments).length?this._containsRectangle(M.read(arguments)):this._containsPoint(Z.read(arguments))},_containsPoint:function(t){var e=t.x,n=t.y;return e>=this.x&&n>=this.y&&e<=this.x+this.width&&n<=this.y+this.height},_containsRectangle:function(t){var e=t.x,n=t.y;return e>=this.x&&n>=this.y&&e+t.width<=this.x+this.width&&n+t.height<=this.y+this.height},intersects:function(){var t=M.read(arguments),e=U.read(arguments)||0;return t.x+t.width>this.x-e&&t.y+t.height>this.y-e&&t.x<this.x+this.width+e&&t.y<this.y+this.height+e},intersect:function(){var t=M.read(arguments),e=Math.max(this.x,t.x),n=Math.max(this.y,t.y),i=Math.min(this.x+this.width,t.x+t.width),r=Math.min(this.y+this.height,t.y+t.height);return new M(e,n,i-e,r-n)},unite:function(){var t=M.read(arguments),e=Math.min(this.x,t.x),n=Math.min(this.y,t.y),i=Math.max(this.x+this.width,t.x+t.width),r=Math.max(this.y+this.height,t.y+t.height);return new M(e,n,i-e,r-n)},include:function(){var t=Z.read(arguments),e=Math.min(this.x,t.x),n=Math.min(this.y,t.y),i=Math.max(this.x+this.width,t.x),r=Math.max(this.y+this.height,t.y);return new M(e,n,i-e,r-n)},expand:function(){var t=W.read(arguments),e=t.width,n=t.height;return new M(this.x-e/2,this.y-n/2,this.width+e,this.height+n)},scale:function(t,e){return this.expand(this.width*t-this.width,this.height*(e===q?t:e)-this.height)}},U.each([["Top","Left"],["Top","Right"],["Bottom","Left"],["Bottom","Right"],["Left","Center"],["Top","Center"],["Right","Center"],["Bottom","Center"]],function(t,e){var n=t.join(""),i=/^[RL]/.test(n);4<=e&&(t[1]+=i?"Y":"X");var r=t[i?0:1],s=t[i?1:0],a="get"+r,o="get"+s,h="set"+r,u="set"+s,l="set"+n;this["get"+n]=function(t){return new(t?Z:f)(this[a](),this[o](),this,l)},this[l]=function(){var t=Z.read(arguments);this[h](t.x),this[u](t.y)}},{beans:!0})),s=M.extend({initialize:function(t,e,n,i,r,s){this._set(t,e,n,i,!0),this._owner=r,this._setter=s},_set:function(t,e,n,i,r){return this._x=t,this._y=e,this._width=n,this._height=i,r||this._owner[this._setter](this),this}},new function(){var n=M.prototype;return U.each(["x","y","width","height"],function(t){var e=U.capitalize(t),n="_"+t;this["get"+e]=function(){return this[n]},this["set"+e]=function(t){this[n]=t,this._dontNotify||this._owner[this._setter](this)}},U.each(["Point","Size","Center","Left","Top","Right","Bottom","CenterX","CenterY","TopLeft","TopRight","BottomLeft","BottomRight","LeftCenter","TopCenter","RightCenter","BottomCenter"],function(t){var e="set"+t;this[e]=function(){this._dontNotify=!0,n[e].apply(this,arguments),this._dontNotify=!1,this._owner[this._setter](this)}},{isSelected:function(){return!!(2&this._owner._selection)},setSelected:function(t){var e=this._owner;e._changeSelection&&e._changeSelection(2,t)}}))}),$=U.extend({_class:"Matrix",initialize:function t(e,n){var i=arguments,r=i.length,s=!0;if(6<=r?this._set.apply(this,i):1===r||2===r?e instanceof t?this._set(e._a,e._b,e._c,e._d,e._tx,e._ty,n):Array.isArray(e)?this._set.apply(this,n?e.concat([n]):e):s=!1:r?s=!1:this.reset(),!s)throw new Error("Unsupported matrix parameters");return this},set:"#initialize",_set:function(t,e,n,i,r,s,a){return this._a=t,this._b=e,this._c=n,this._d=i,this._tx=r,this._ty=s,a||this._changed(),this},_serialize:function(t,e){return U.serialize(this.getValues(),t,!0,e)},_changed:function(){var t=this._owner;t&&(t._applyMatrix?t.transform(null,!0):t._changed(25))},clone:function(){return new $(this._a,this._b,this._c,this._d,this._tx,this._ty)},equals:function(t){return t===this||t&&this._a===t._a&&this._b===t._b&&this._c===t._c&&this._d===t._d&&this._tx===t._tx&&this._ty===t._ty},toString:function(){var t=b.instance;return"[["+[t.number(this._a),t.number(this._c),t.number(this._tx)].join(", ")+"], ["+[t.number(this._b),t.number(this._d),t.number(this._ty)].join(", ")+"]]"},reset:function(t){return this._a=this._d=1,this._b=this._c=this._tx=this._ty=0,t||this._changed(),this},apply:function(t,e){var n=this._owner;return!!n&&(n.transform(null,U.pick(t,!0),e),this.isIdentity())},translate:function(){var t=Z.read(arguments),e=t.x,n=t.y;return this._tx+=e*this._a+n*this._c,this._ty+=e*this._b+n*this._d,this._changed(),this},scale:function(){var t=arguments,e=Z.read(t),n=Z.read(t,0,{readNull:!0});return n&&this.translate(n),this._a*=e.x,this._b*=e.x,this._c*=e.y,this._d*=e.y,n&&this.translate(n.negate()),this._changed(),this},rotate:function(t){t*=Math.PI/180;var e=Z.read(arguments,1),n=e.x,i=e.y,r=Math.cos(t),s=Math.sin(t),a=n-n*r+i*s,o=i-n*s-i*r,h=this._a,u=this._b,l=this._c,c=this._d;return this._a=r*h+s*l,this._b=r*u+s*c,this._c=-s*h+r*l,this._d=-s*u+r*c,this._tx+=a*h+o*l,this._ty+=a*u+o*c,this._changed(),this},shear:function(){var t=arguments,e=Z.read(t),n=Z.read(t,0,{readNull:!0});n&&this.translate(n);var i=this._a,r=this._b;return this._a+=e.y*this._c,this._b+=e.y*this._d,this._c+=e.x*i,this._d+=e.x*r,n&&this.translate(n.negate()),this._changed(),this},skew:function(){var t=arguments,e=Z.read(t),n=Z.read(t,0,{readNull:!0}),i=Math.PI/180,r=new Z(Math.tan(e.x*i),Math.tan(e.y*i));return this.shear(r,n)},append:function(t,e){var n,i,r,s,a,o,h,u,l,c;return t&&(n=this._a,i=this._b,r=this._c,s=this._d,a=t._a,o=t._c,h=t._b,u=t._d,l=t._tx,c=t._ty,this._a=a*n+h*r,this._c=o*n+u*r,this._b=a*i+h*s,this._d=o*i+u*s,this._tx+=l*n+c*r,this._ty+=l*i+c*s,e||this._changed()),this},prepend:function(t,e){var n,i,r,s,a,o,h,u,l,c,f,d;return t&&(n=this._a,i=this._b,r=this._c,s=this._d,a=this._tx,o=this._ty,h=t._a,u=t._c,l=t._b,c=t._d,f=t._tx,d=t._ty,this._a=h*n+u*i,this._c=h*r+u*s,this._b=l*n+c*i,this._d=l*r+c*s,this._tx=h*a+u*o+f,this._ty=l*a+c*o+d,e||this._changed()),this},appended:function(t){return this.clone().append(t)},prepended:function(t){return this.clone().prepend(t)},invert:function(){var t=this._a,e=this._b,n=this._c,i=this._d,r=this._tx,s=this._ty,a=t*i-e*n,o=null;return a&&!isNaN(a)&&isFinite(r)&&isFinite(s)&&(this._a=i/a,this._b=-e/a,this._c=-n/a,this._d=t/a,this._tx=(n*s-i*r)/a,this._ty=(e*r-t*s)/a,o=this),o},inverted:function(){return this.clone().invert()},concatenate:"#append",preConcatenate:"#prepend",chain:"#appended",_shiftless:function(){return new $(this._a,this._b,this._c,this._d,0,0)},_orNullIfIdentity:function(){return this.isIdentity()?null:this},isIdentity:function(){return 1===this._a&&0===this._b&&0===this._c&&1===this._d&&0===this._tx&&0===this._ty},isInvertible:function(){var t=this._a*this._d-this._c*this._b;return t&&!isNaN(t)&&isFinite(this._tx)&&isFinite(this._ty)},isSingular:function(){return!this.isInvertible()},transform:function(t,e,n){return arguments.length<3?this._transformPoint(Z.read(arguments)):this._transformCoordinates(t,e,n)},_transformPoint:function(t,e,n){var i=t.x,r=t.y;return(e=e||new Z)._set(i*this._a+r*this._c+this._tx,i*this._b+r*this._d+this._ty,n)},_transformCoordinates:function(t,e,n){for(var i=0,r=2*n;i<r;i+=2){var s=t[i],a=t[i+1];e[i]=s*this._a+a*this._c+this._tx,e[i+1]=s*this._b+a*this._d+this._ty}return e},_transformCorners:function(t){var e=t.x,n=t.y,i=e+t.width,r=n+t.height,s=[e,n,i,n,i,r,e,r];return this._transformCoordinates(s,s,4)},_transformBounds:function(t,e,n){for(var i=this._transformCorners(t),r=i.slice(0,2),s=r.slice(),a=2;a<8;a++){var o=i[a],h=1&a;o<r[h]?r[h]=o:o>s[h]&&(s[h]=o)}return(e=e||new M)._set(r[0],r[1],s[0]-r[0],s[1]-r[1],n)},inverseTransform:function(){return this._inverseTransform(Z.read(arguments))},_inverseTransform:function(t,e,n){var i,r,s=this._a,a=this._b,o=this._c,h=this._d,u=this._tx,l=this._ty,c=s*h-a*o,f=null;return c&&!isNaN(c)&&isFinite(u)&&isFinite(l)&&(i=t.x-this._tx,r=t.y-this._ty,f=(e=e||new Z)._set((i*h-r*o)/c,(r*s-i*a)/c,n)),f},decompose:function(){var t,e,n,i,r,s=this._a,a=this._b,o=this._c,h=this._d,u=s*h-a*o,l=Math.sqrt,c=Math.atan2,f=180/Math.PI;return i=0!==s||0!==a?(t=l(s*s+a*a),e=Math.acos(s/t)*(0<a?1:-1),n=[t,u/t],[c(s*o+a*h,t*t),0]):0!==o||0!==h?(r=l(o*o+h*h),e=Math.asin(o/r)*(0<h?1:-1),n=[u/r,r],[0,c(s*o+a*h,r*r)]):n=[e=0,0],{translation:this.getTranslation(),rotation:e*f,scaling:new Z(n),skewing:new Z(i[0]*f,i[1]*f)}},getValues:function(){return[this._a,this._b,this._c,this._d,this._tx,this._ty]},getTranslation:function(){return new Z(this._tx,this._ty)},getScaling:function(){return this.decompose().scaling},getRotation:function(){return this.decompose().rotation},applyToContext:function(t){this.isIdentity()||t.transform(this._a,this._b,this._c,this._d,this._tx,this._ty)}},U.each(["a","b","c","d","tx","ty"],function(t){var e=U.capitalize(t),n="_"+t;this["get"+e]=function(){return this[n]},this["set"+e]=function(t){this[n]=t,this._changed()}},{})),G=U.extend({_class:"Line",initialize:function(t,e,n,i,r){(4<=arguments.length?(this._px=t,this._py=e,this._vx=n,this._vy=i,r):(this._px=t.x,this._py=t.y,this._vx=e.x,this._vy=e.y,n))||(this._vx-=this._px,this._vy-=this._py)},getPoint:function(){return new Z(this._px,this._py)},getVector:function(){return new Z(this._vx,this._vy)},getLength:function(){return this.getVector().getLength()},intersect:function(t,e){return G.intersect(this._px,this._py,this._vx,this._vy,t._px,t._py,t._vx,t._vy,!0,e)},getSide:function(t,e){return G.getSide(this._px,this._py,this._vx,this._vy,t.x,t.y,!0,e)},getDistance:function(t){return Math.abs(this.getSignedDistance(t))},getSignedDistance:function(t){return G.getSignedDistance(this._px,this._py,this._vx,this._vy,t.x,t.y,!0)},isCollinear:function(t){return Z.isCollinear(this._vx,this._vy,t._vx,t._vy)},isOrthogonal:function(t){return Z.isOrthogonal(this._vx,this._vy,t._vx,t._vy)},statics:{intersect:function(t,e,n,i,r,s,a,o,h,u){h||(n-=t,i-=e,a-=r,o-=s);var l=n*o-i*a;if(!H.isMachineZero(l)){var c=t-r,f=e-s,d=(a*f-o*c)/l,_=(n*f-i*c)/l;if(u||-1e-12<d&&d<1+1e-12&&-1e-12<_&&_<1+1e-12)return u||(d=d<=0?0:1<=d?1:d),new Z(t+d*n,e+d*i)}},getSide:function(t,e,n,i,r,s,a,o){a||(n-=t,i-=e);var h=r-t,u=h*i-(s-e)*n;return!o&&H.isMachineZero(u)&&0<=(u=(h*n+h*n)/(n*n+i*i))&&u<=1&&(u=0),u<0?-1:0<u?1:0},getSignedDistance:function(t,e,n,i,r,s,a){return a||(n-=t,i-=e),0===n?0<i?r-t:t-r:0===i?n<0?s-e:e-s:((r-t)*i-(s-e)*n)/(n<i?i*Math.sqrt(1+n*n/(i*i)):n*Math.sqrt(1+i*i/(n*n)))},getDistance:function(t,e,n,i,r,s,a){return Math.abs(G.getSignedDistance(t,e,n,i,r,s,a))}}}),l=e.extend({_class:"Project",_list:"projects",_reference:"project",_compactSerialize:!0,initialize:function(t){e.call(this,!0),this._children=[],this._namedChildren={},this._activeLayer=null,this._currentStyle=new g(null,null,this),this._view=j.create(this,t||it.getCanvas(1,1)),this._selectionItems={},this._selectionCount=0,this._updateVersion=0},_serialize:function(t,e){return U.serialize(this._children,t,!0,e)},_changed:function(t,e){var n;1&t&&((n=this._view)&&(n._needsUpdate=!0,!n._requested&&n._autoUpdate&&n.requestUpdate()));var i,r,s,a=this._changes;a&&e&&((s=(i=this._changesById)[r=e._id])?s.flags|=t:a.push(i[r]={item:e,flags:t}))},clear:function(){for(var t=this._children,e=t.length-1;0<=e;e--)t[e].remove()},isEmpty:function(){return!this._children.length},remove:function t(){return!!t.base.call(this)&&(this._view&&this._view.remove(),!0)},getView:function(){return this._view},getCurrentStyle:function(){return this._currentStyle},setCurrentStyle:function(t){this._currentStyle.set(t)},getIndex:function(){return this._index},getOptions:function(){return this._scope.settings},getLayers:function(){return this._children},getActiveLayer:function(){return this._activeLayer||new o({project:this,insert:!0})},getSymbolDefinitions:function(){var i=[],r={};return this.getItems({class:a,match:function(t){var e=t._definition,n=e._id;return r[n]||(r[n]=!0,i.push(e)),!1}}),i},getSymbols:"getSymbolDefinitions",getSelectedItems:function(){var t=this._selectionItems,e=[];for(var n in t){var i=t[n],r=i._selection;1&r&&i.isInserted()?e.push(i):r||this._updateSelection(i)}return e},_updateSelection:function(t){var e=t._id,n=this._selectionItems;t._selection?n[e]!==t&&(this._selectionCount++,n[e]=t):n[e]===t&&(this._selectionCount--,delete n[e])},selectAll:function(){for(var t=this._children,e=0,n=t.length;e<n;e++)t[e].setFullySelected(!0)},deselectAll:function(){var t=this._selectionItems;for(var e in t)t[e].setFullySelected(!1)},addLayer:function(t){return this.insertLayer(q,t)},insertLayer:function(t,e){var n;return e instanceof o?(e._remove(!1,!0),U.splice(this._children,[e],t,0),e._setProject(this,!0),(n=e._name)&&e.setName(n),this._changes&&e._changed(5),this._activeLayer||(this._activeLayer=e)):e=null,e},_insertItem:function(t,e,n){return e=this.insertLayer(t,e)||(this._activeLayer||this._insertItem(q,new o(D.NO_INSERT),!0)).insertChild(t,e),n&&e.activate&&e.activate(),e},getItems:function(t){return D._getItems(this,t)},getItem:function(t){return D._getItems(this,t,null,null,!0)[0]||null},importJSON:function(t){this.activate();var e=this._activeLayer;return U.importJSON(t,e&&e.isEmpty()&&e)},removeOn:function(t){var e=this._removeSets;if(e){"mouseup"===t&&(e.mousedrag=null);var n=e[t];if(n){for(var i in n){var r=n[i];for(var s in e){var a=e[s];a&&a!=n&&delete a[r._id]}r.remove()}e[t]=null}}},draw:function(t,e,n){this._updateVersion++,t.save(),e.applyToContext(t);for(var i=this._children,r=new U({offset:new Z(0,0),pixelRatio:n,viewMatrix:e.isIdentity()?null:e,matrices:[new $],updateMatrix:!0}),s=0,a=i.length;s<a;s++)i[s].draw(t,r);if(t.restore(),0<this._selectionCount){t.save(),t.strokeWidth=1;var o=this._selectionItems,h=this._scope.settings.handleSize,u=this._updateVersion;for(var l in o)o[l]._drawSelection(t,e,h,o,u);t.restore()}}}),D=U.extend(t,{statics:{extend:function t(e){return e._serializeFields&&(e._serializeFields=U.set({},this.prototype._serializeFields,e._serializeFields)),t.base.apply(this,arguments)},NO_INSERT:{insert:!1}},_class:"Item",_name:null,_applyMatrix:!0,_canApplyMatrix:!0,_canScaleStroke:!1,_pivot:null,_visible:!0,_blendMode:"normal",_opacity:1,_locked:!1,_guide:!1,_clipMask:!1,_selection:0,_selectBounds:!0,_selectChildren:!1,_serializeFields:{name:null,applyMatrix:null,matrix:new $,pivot:null,visible:!0,blendMode:"normal",opacity:1,locked:!1,guide:!1,clipMask:!1,selected:!1,data:{}},_prioritize:["applyMatrix"]},new function(){var t=["onMouseDown","onMouseUp","onMouseDrag","onClick","onDoubleClick","onMouseMove","onMouseEnter","onMouseLeave"];return U.each(t,function(t){this._events[t]={install:function(t){this.getView()._countItemEvent(t,1)},uninstall:function(t){this.getView()._countItemEvent(t,-1)}}},{_events:{onFrame:{install:function(){this.getView()._animateItem(this,!0)},uninstall:function(){this.getView()._animateItem(this,!1)}},onLoad:{},onError:{}},statics:{_itemHandlers:t}})},{initialize:function(){},_initialize:function(t,e){var n=t&&U.isPlainObject(t),i=n&&!0===t.internal,r=this._matrix=new $,s=n&&t.project||at.project,a=at.settings;return this._id=i?null:u.get(),this._parent=this._index=null,this._applyMatrix=this._canApplyMatrix&&a.applyMatrix,e&&r.translate(e),(r._owner=this)._style=new g(s._currentStyle,this,s),i||n&&0==t.insert||!a.insertItems&&(!n||!0!==t.insert)?this._setProject(s):(n&&t.parent||s)._insertItem(q,this,!0),n&&t!==D.NO_INSERT&&this.set(t,{internal:!0,insert:!0,project:!0,parent:!0}),n},_serialize:function(i,r){var s={},a=this;function t(t){for(var e in t){var n=a[e];U.equals(n,"leading"===e?1.2*t.fontSize:t[e])||(s[e]=U.serialize(n,i,"data"!==e,r))}}return t(this._serializeFields),this instanceof S||t(this._style._defaults),[this._class,s]},_changed:function(t){var e=this._symbol,n=this._parent||e,i=this._project;8&t&&(this._bounds=this._position=this._decomposed=q),16&t&&(this._globalMatrix=q),n&&72&t&&D._clearBoundsCache(n),2&t&&D._clearBoundsCache(this),i&&i._changed(t,this),e&&e._changed(t)},getId:function(){return this._id},getName:function(){return this._name},setName:function(t){if(this._name&&this._removeNamed(),t===+t+"")throw new Error("Names consisting only of numbers are not supported.");var e,n,i=this._getOwner();t&&i&&(e=i._children,((n=i._namedChildren)[t]=n[t]||[]).push(this),t in e||(e[t]=this)),this._name=t||q,this._changed(256)},getStyle:function(){return this._style},setStyle:function(t){this.getStyle().set(t)}},U.each(["locked","visible","blendMode","opacity","guide"],function(e){var t=U.capitalize(e),n="_"+e,i={locked:256,visible:265};this["get"+t]=function(){return this[n]},this["set"+t]=function(t){t!=this[n]&&(this[n]=t,this._changed(i[e]||257))}},{}),{beans:!0,getSelection:function(){return this._selection},setSelection:function(t){var e;t!==this._selection&&(this._selection=t,(e=this._project)&&(e._updateSelection(this),this._changed(257)))},_changeSelection:function(t,e){var n=this._selection;this.setSelection(e?n|t:n&~t)},isSelected:function(){if(this._selectChildren)for(var t=this._children,e=0,n=t.length;e<n;e++)if(t[e].isSelected())return!0;return!!(1&this._selection)},setSelected:function(t){if(this._selectChildren)for(var e=this._children,n=0,i=e.length;n<i;n++)e[n].setSelected(t);this._changeSelection(1,t)},isFullySelected:function(){var t=this._children,e=!!(1&this._selection);if(t&&e){for(var n=0,i=t.length;n<i;n++)if(!t[n].isFullySelected())return!1;return!0}return e},setFullySelected:function(t){var e=this._children;if(e)for(var n=0,i=e.length;n<i;n++)e[n].setFullySelected(t);this._changeSelection(1,t)},isClipMask:function(){return this._clipMask},setClipMask:function(t){this._clipMask!=(t=!!t)&&((this._clipMask=t)&&(this.setFillColor(null),this.setStrokeColor(null)),this._changed(257),this._parent&&this._parent._changed(2048))},getData:function(){return this._data||(this._data={}),this._data},setData:function(t){this._data=t},getPosition:function(t){var e=t?Z:f,n=this._position||(this._position=this._getPositionFromBounds());return new e(n.x,n.y,this,"setPosition")},setPosition:function(){this.translate(Z.read(arguments).subtract(this.getPosition(!0)))},_getPositionFromBounds:function(t){return this._pivot?this._matrix._transformPoint(this._pivot):(t||this.getBounds()).getCenter(!0)},getPivot:function(){var t=this._pivot;return t?new f(t.x,t.y,this,"setPivot"):null},setPivot:function(){this._pivot=Z.read(arguments,0,{clone:!0,readNull:!0}),this._position=q}},U.each({getStrokeBounds:{stroke:!0},getHandleBounds:{handle:!0},getInternalBounds:{internal:!0}},function(e,t){this[t]=function(t){return this.getBounds(t,e)}},{beans:!0,getBounds:function(t,e){var n=e||t instanceof $,i=U.set({},n?e:t,this._boundsOptions);i.stroke&&!this.getStrokeScaling()||(i.cacheItem=this);var r=this._getCachedBounds(n&&t,i).rect;return arguments.length?r:new s(r.x,r.y,r.width,r.height,this,"setBounds")},setBounds:function(){var t=M.read(arguments),e=this.getBounds(),n=this._matrix,i=new $,r=t.getCenter();i.translate(r),t.width==e.width&&t.height==e.height||(n.isInvertible()||(n.set(n._backup||(new $).translate(n.getTranslation())),e=this.getBounds()),i.scale(0!==e.width?t.width/e.width:0,0!==e.height?t.height/e.height:0)),r=e.getCenter(),i.translate(-r.x,-r.y),this.transform(i)},_getBounds:function(t,e){var n=this._children;return n&&n.length?(D._updateBoundsCache(this,e.cacheItem),D._getBounds(n,t,e)):new M},_getBoundsCacheKey:function(t,e){return[t.stroke?1:0,t.handle?1:0,e?1:0].join("")},_getCachedBounds:function(t,e,n){t=t&&t._orNullIfIdentity();var i=e.internal&&!n,r=e.cacheItem,s=i?null:this._matrix._orNullIfIdentity(),a=r&&(!t||t.equals(s))&&this._getBoundsCacheKey(e,i),o=this._bounds;if(D._updateBoundsCache(this._parent||this._symbol,r),a&&o&&a in o)return{rect:(h=o[a]).rect.clone(),nonscaling:h.nonscaling};var h,u=this._getBounds(t||s,e),l=u.rect||u,c=this._style,f=u.nonscaling||c.hasStroke()&&!c.getStrokeScaling();return a&&(o||(this._bounds=o={}),h=o[a]={rect:l.clone(),nonscaling:f,internal:i}),{rect:l,nonscaling:f}},_getStrokeMatrix:function(t,e){var n=this.getStrokeScaling()?null:e&&e.internal?this:this._parent||this._symbol&&this._symbol._item,i=n?n.getViewMatrix().invert():t;return i&&i._shiftless()},statics:{_updateBoundsCache:function(t,e){var n,i;t&&e&&(n=e._id,(i=t._boundsCache=t._boundsCache||{ids:{},list:[]}).ids[n]||(i.list.push(e),i.ids[n]=e))},_clearBoundsCache:function(t){var e=t._boundsCache;if(e){t._bounds=t._position=t._boundsCache=q;for(var n=0,i=e.list,r=i.length;n<r;n++){var s=i[n];s!==t&&(s._bounds=s._position=q,s._boundsCache&&D._clearBoundsCache(s))}}},_getBounds:function(t,e,n){var i=l=1/0,r=c=-l,s=!1;n=n||{};for(var a=0,o=t.length;a<o;a++){var h,u,l,c,f=t[a];f._visible&&!f.isEmpty(!0)&&(u=(h=f._getCachedBounds(e&&e.appended(f._matrix),n,!0)).rect,l=Math.min(u.x,l),i=Math.min(u.y,i),c=Math.max(u.x+u.width,c),r=Math.max(u.y+u.height,r),h.nonscaling&&(s=!0))}return{rect:isFinite(l)?new M(l,i,c-l,r-i):new M,nonscaling:s}}}}),{beans:!0,_decompose:function(){return this._applyMatrix?null:this._decomposed||(this._decomposed=this._matrix.decompose())},getRotation:function(){var t=this._decompose();return t?t.rotation:0},setRotation:function(t){var e,n=this.getRotation();null!=n&&null!=t&&(e=this._decomposed,this.rotate(t-n),e&&(e.rotation=t,this._decomposed=e))},getScaling:function(){var t=this._decompose(),e=t&&t.scaling;return new f(e?e.x:1,e?e.y:1,this,"setScaling")},setScaling:function(){var t,e,n,i,r,s=this.getScaling(),a=Z.read(arguments,0,{clone:!0,readNull:!0});s&&a&&!s.equals(a)&&(t=this.getRotation(),e=this._decomposed,n=new $,(i=H.isZero)(s.x)||i(s.y)?(n.translate(e.translation),t&&n.rotate(t),n.scale(a.x,a.y),this._matrix.set(n)):(r=this.getPosition(!0),n.translate(r),t&&n.rotate(t),n.scale(a.x/s.x,a.y/s.y),t&&n.rotate(-t),n.translate(r.negate()),this.transform(n)),e&&(e.scaling=a,this._decomposed=e))},getMatrix:function(){return this._matrix},setMatrix:function(){var t=this._matrix;t.set.apply(t,arguments)},getGlobalMatrix:function(t){var e=this._globalMatrix;if(e)for(var n=this._parent,i=[];n;){if(!n._globalMatrix){e=null;for(var r=0,s=i.length;r<s;r++)i[r]._globalMatrix=null;break}i.push(n),n=n._parent}return e||(e=this._globalMatrix=this._matrix.clone(),(n=this._parent)&&e.prepend(n.getGlobalMatrix(!0))),t?e:e.clone()},getViewMatrix:function(){return this.getGlobalMatrix().prepend(this.getView()._matrix)},getApplyMatrix:function(){return this._applyMatrix},setApplyMatrix:function(t){(this._applyMatrix=this._canApplyMatrix&&!!t)&&this.transform(null,!0)},getTransformContent:"#getApplyMatrix",setTransformContent:"#setApplyMatrix"},{getProject:function(){return this._project},_setProject:function(t,e){if(this._project!==t){this._project&&this._installEvents(!1),this._project=t;for(var n=this._children,i=0,r=n&&n.length;i<r;i++)n[i]._setProject(t);e=!0}e&&this._installEvents(!0)},getView:function(){return this._project._view},_installEvents:function t(e){t.base.call(this,e);for(var n=this._children,i=0,r=n&&n.length;i<r;i++)n[i]._installEvents(e)},getLayer:function(){for(var t=this;t=t._parent;)if(t instanceof o)return t;return null},getParent:function(){return this._parent},setParent:function(t){return t.addChild(this)},_getOwner:"#getParent",getChildren:function(){return this._children},setChildren:function(t){this.removeChildren(),this.addChildren(t)},getFirstChild:function(){return this._children&&this._children[0]||null},getLastChild:function(){return this._children&&this._children[this._children.length-1]||null},getNextSibling:function(){var t=this._getOwner();return t&&t._children[this._index+1]||null},getPreviousSibling:function(){var t=this._getOwner();return t&&t._children[this._index-1]||null},getIndex:function(){return this._index},equals:function(t){return t===this||t&&this._class===t._class&&this._style.equals(t._style)&&this._matrix.equals(t._matrix)&&this._locked===t._locked&&this._visible===t._visible&&this._blendMode===t._blendMode&&this._opacity===t._opacity&&this._clipMask===t._clipMask&&this._guide===t._guide&&this._equals(t)||!1},_equals:function(t){return U.equals(this._children,t._children)},clone:function(t){var e=new this.constructor(D.NO_INSERT),n=this._children,i=U.pick(t?t.insert:q,t===q||!0===t),r=U.pick(t?t.deep:q,!0);n&&e.copyAttributes(this),n&&!r||e.copyContent(this),n||e.copyAttributes(this),i&&e.insertAbove(this);var s=this._name,a=this._parent;if(s&&a){for(var n=a._children,o=s,h=1;n[s];)s=o+" "+h++;s!==o&&e.setName(s)}return e},copyContent:function(t){for(var e=t._children,n=0,i=e&&e.length;n<i;n++)this.addChild(e[n].clone(!1),!0)},copyAttributes:function(t,e){this.setStyle(t._style);for(var n=["_locked","_visible","_blendMode","_opacity","_clipMask","_guide"],i=0,r=n.length;i<r;i++){var s=n[i];t.hasOwnProperty(s)&&(this[s]=t[s])}e||this._matrix.set(t._matrix,!0),this.setApplyMatrix(t._applyMatrix),this.setPivot(t._pivot),this.setSelection(t._selection);var a=t._data,o=t._name;this._data=a?U.clone(a):null,o&&this.setName(o)},rasterize:function(t,e){var n,i,r,s=this.getStrokeBounds(),a=(t||this.getView().getResolution())/72,o=s.getTopLeft().floor(),h=s.getBottomRight().ceil(),u=new W(h.subtract(o)),l=new I(D.NO_INSERT);return u.isZero()||(i=(n=it.getCanvas(u.multiply(a))).getContext("2d"),r=(new $).scale(a).translate(o.negate()),i.save(),r.applyToContext(i),this.draw(i,new U({matrices:[r]})),i.restore(),l.setCanvas(n)),l.transform((new $).translate(o.add(u.divide(2))).scale(1/a)),e!==q&&!e||l.insertAbove(this),l},contains:function(){var t=this._matrix;return t.isInvertible()&&!!this._contains(t._inverseTransform(Z.read(arguments)))},_contains:function(t){var e=this._children;if(e){for(var n=e.length-1;0<=n;n--)if(e[n].contains(t))return!0;return!1}return t.isInside(this.getInternalBounds())},isInside:function(){return M.read(arguments).contains(this.getBounds())},_asPathItem:function(){return new Q.Rectangle({rectangle:this.getInternalBounds(),matrix:this._matrix,insert:!1})},intersects:function(t,e){return t instanceof D&&0<this._asPathItem().getIntersections(t._asPathItem(),null,e,!0).length}},new function(){function t(){var t=arguments;return this._hitTest(Z.read(t),O.getOptions(t))}function e(){var t=arguments,e=Z.read(t),n=O.getOptions(t),i=[];return this._hitTest(e,new U({all:i},n)),i}function n(t,e,n,i){var r=this._children;if(r)for(var s=r.length-1;0<=s;s--){var a=r[s],o=a!==i&&a._hitTest(t,e,n);if(o&&!e.all)return o}return null}return l.inject({hitTest:t,hitTestAll:e,_hitTest:n}),{hitTest:t,hitTestAll:e,_hitTestChildren:n}},{_hitTest:function(i,e,t){if(this._locked||!this._visible||this._guide&&!e.guides||this.isEmpty())return null;var n=this._matrix,r=t?t.appended(n):this.getGlobalMatrix().prepend(this.getView()._matrix),s=Math.max(e.tolerance,1e-12),a=e._tolerancePadding=new W(Q._getStrokePadding(s,n._shiftless().invert()));if(!(i=n._inverseTransform(i))||!this._children&&!this.getBounds({internal:!0,stroke:!0,handle:!0}).expand(a.multiply(2))._containsPoint(i))return null;var o,h,u=!(e.guides&&!this._guide||e.selected&&!this.isSelected()||e.type&&e.type!==U.hyphenate(this._class)||e.class&&!(this instanceof e.class)),l=e.match,c=this;function f(t){return t&&l&&!l(t)&&(t=null),t&&e.all&&e.all.push(t),t}function d(t,e){var n=e?o["get"+e]():c.getPosition();if(i.subtract(n).divide(a).length<=1)return new O(t,c,{name:e?U.hyphenate(e):t,point:n})}var _=e.position,g=e.center,p=e.bounds;if(u&&this._parent&&(_||g||p)){if((g||p)&&(o=this.getInternalBounds()),!(h=_&&d("position")||g&&d("center","Center"))&&p)for(var v=["TopLeft","TopRight","BottomLeft","BottomRight","LeftCenter","TopCenter","RightCenter","BottomCenter"],m=0;m<8&&!h;m++)h=d("bounds",v[m]);h=f(h)}return(h=h||(this._hitTestChildren(i,e,r)||u&&f(this._hitTestSelf(i,e,r,this.getStrokeScaling()?null:r._shiftless().invert()))||null))&&h.point&&(h.point=n.transform(h.point)),h},_hitTestSelf:function(t,e){if(e.fill&&this.hasFill()&&this._contains(t))return new O("fill",this)},matches:function(t,e){var n=typeof t;if("object"==n){for(var i in t)if(t.hasOwnProperty(i)&&!this.matches(i,t[i]))return!1;return!0}if("function"==n)return t(this);if("match"===t)return e(this);var r=/^(empty|editable)$/.test(t)?this["is"+U.capitalize(t)]():"type"===t?U.hyphenate(this._class):this[t];if("class"===t){if("function"==typeof e)return this instanceof e;r=this._class}if("function"==typeof e)return!!e(r);if(e){if(e.test)return e.test(r);if(U.isPlainObject(e))return function t(e,n){for(var i in e)if(e.hasOwnProperty(i)){var r=e[i],s=n[i];if(U.isPlainObject(r)&&U.isPlainObject(s)){if(!t(r,s))return!1}else if(!U.equals(r,s))return!1}return!0}(e,r)}return U.equals(r,e)},getItems:function(t){return D._getItems(this,t,this._matrix)},getItem:function(t){return D._getItems(this,t,this._matrix,null,!0)[0]||null},statics:{_getItems:function t(e,n,i,r,s){var a,o,h;r||(o=(a="object"==typeof n&&n)&&a.overlapping,h=a&&a.inside,u=(v=o||h)&&M.read([v]),r={items:[],recursive:a&&!1!==a.recursive,inside:!!h,overlapping:!!o,rect:u,path:o&&new Q.Rectangle({rectangle:u,insert:!1})},a&&(n=U.filter({},n,{recursive:!0,inside:!0,overlapping:!0})));var u,l=e._children,c=r.items;i=(u=r.rect)&&(i||new $);for(var f=0,d=l&&l.length;f<d;f++){var _=l[f],g=i&&i.appended(_._matrix),p=!0;if(u){var v=_.getBounds(g);if(!u.intersects(v))continue;u.contains(v)||r.overlapping&&(v.contains(u)||r.path.intersects(_,g))||(p=!1)}if(p&&_.matches(n)&&(c.push(_),s))break;if(!1!==r.recursive&&t(_,n,g,r,s),s&&0<c.length)break}return c}}},{importJSON:function(t){var e=U.importJSON(t,this);return e!==this?this.addChild(e):e},addChild:function(t){return this.insertChild(q,t)},insertChild:function(t,e){var n=e?this.insertChildren(t,[e]):null;return n&&n[0]},addChildren:function(t){return this.insertChildren(this._children.length,t)},insertChildren:function(t,e){var n=this._children;if(n&&e&&0<e.length){for(var i={},r=(e=U.slice(e)).length-1;0<=r;r--){var s=(u=e[r])&&u._id;!u||i[s]?e.splice(r,1):(u._remove(!1,!0),i[s]=!0)}U.splice(n,e,t,0);for(var a=this._project,o=a._changes,r=0,h=e.length;r<h;r++){var u,l=(u=e[r])._name;u._parent=this,u._setProject(a,!0),l&&u.setName(l),o&&u._changed(5)}this._changed(11)}else e=null;return e},_insertItem:"#insertChild",_insertAt:function(t,e){var n=t&&t._getOwner(),i=t!==this&&n?this:null;return i&&(i._remove(!1,!0),n._insertItem(t._index+e,i)),i},insertAbove:function(t){return this._insertAt(t,1)},insertBelow:function(t){return this._insertAt(t,0)},sendToBack:function(){var t=this._getOwner();return t?t._insertItem(0,this):null},bringToFront:function(){var t=this._getOwner();return t?t._insertItem(q,this):null},appendTop:"#addChild",appendBottom:function(t){return this.insertChild(0,t)},moveAbove:"#insertAbove",moveBelow:"#insertBelow",addTo:function(t){return t._insertItem(q,this)},copyTo:function(t){return this.clone(!1).addTo(t)},reduce:function(t){var e=this._children;if(e&&1===e.length){var n=e[0].reduce(t);return this._parent?(n.insertAbove(this),this.remove()):n.remove(),n}return this},_removeNamed:function(){var t,e,n,i,r,s=this._getOwner();s&&(t=s._children,-1!==(r=(i=(e=s._namedChildren)[n=this._name])?i.indexOf(this):-1)&&(t[n]==this&&delete t[n],i.splice(r,1),i.length?t[n]=i[0]:delete e[n]))},_remove:function(t,e){var n=this._getOwner(),i=this._project,r=this._index;return this._style&&this._style._dispose(),!!n&&(this._name&&this._removeNamed(),null!=r&&(i._activeLayer===this&&(i._activeLayer=this.getNextSibling()||this.getPreviousSibling()),U.splice(n._children,null,r,1)),this._installEvents(!1),t&&i._changes&&this._changed(5),e&&n._changed(11,this),!(this._parent=null))},remove:function(){return this._remove(!0,!0)},replaceWith:function(t){var e=t&&t.insertBelow(this);return e&&this.remove(),e},removeChildren:function(t,e){if(!this._children)return null;t=t||0,e=U.pick(e,this._children.length);for(var n=U.splice(this._children,null,t,e-t),i=n.length-1;0<=i;i--)n[i]._remove(!0,!1);return 0<n.length&&this._changed(11),n},clear:"#removeChildren",reverseChildren:function(){if(this._children){this._children.reverse();for(var t=0,e=this._children.length;t<e;t++)this._children[t]._index=t;this._changed(11)}},isEmpty:function(t){var e=this._children,n=e?e.length:0;if(t){for(var i=0;i<n;i++)if(!e[i].isEmpty(t))return!1;return!0}return!n},isEditable:function(){for(var t=this;t;){if(!t._visible||t._locked)return!1;t=t._parent}return!0},hasFill:function(){return this.getStyle().hasFill()},hasStroke:function(){return this.getStyle().hasStroke()},hasShadow:function(){return this.getStyle().hasShadow()},_getOrder:function(t){function e(t){for(var e=[];e.unshift(t),t=t._parent;);return e}for(var n=e(this),i=e(t),r=0,s=Math.min(n.length,i.length);r<s;r++)if(n[r]!=i[r])return n[r]._index<i[r]._index?1:-1;return 0},hasChildren:function(){return this._children&&0<this._children.length},isInserted:function(){return!!this._parent&&this._parent.isInserted()},isAbove:function(t){return-1===this._getOrder(t)},isBelow:function(t){return 1===this._getOrder(t)},isParent:function(t){return this._parent===t},isChild:function(t){return t&&t._parent===this},isDescendant:function(t){for(var e=this;e=e._parent;)if(e===t)return!0;return!1},isAncestor:function(t){return!!t&&t.isDescendant(this)},isSibling:function(t){return this._parent===t._parent},isGroupedWith:function(t){for(var e=this._parent;e;){if(e._parent&&/^(Group|Layer|CompoundPath)$/.test(e._class)&&t.isDescendant(e))return!0;e=e._parent}return!1}},U.each(["rotate","scale","shear","skew"],function(i){var r="rotate"===i;this[i]=function(){var t=arguments,e=(r?U:Z).read(t),n=Z.read(t,0,{readNull:!0});return this.transform((new $)[i](e,n||this.getPosition(!0)))}},{translate:function(){var t=new $;return this.transform(t.translate.apply(t,arguments))},transform:function(t,e,n){var i,r,s,a,o=this._matrix,h=t&&!t.isIdentity(),u=n&&this._canApplyMatrix||this._applyMatrix&&(h||!o.isIdentity()||e&&this._children);if(!h&&!u)return this;h&&(!t.isInvertible()&&o.isInvertible()&&(o._backup=o.getValues()),o.prepend(t,!0),r=(i=this._style).getFillColor(!0),s=i.getStrokeColor(!0),r&&r.transform(t),s&&s.transform(t)),(u=u&&this._transformContent(o,e,n))&&((a=this._pivot)&&o._transformPoint(a,a,!0),o.reset(!0),n&&this._canApplyMatrix&&(this._applyMatrix=!0));var l=this._bounds,c=this._position;(h||u)&&this._changed(25);var f=h&&l&&t.decompose();if(f&&f.skewing.isZero()&&f.rotation%90==0){for(var d in l){var _,g=l[d];g.nonscaling?delete l[d]:!u&&g.internal||(_=g.rect,t._transformBounds(_,_))}var p=(this._bounds=l)[this._getBoundsCacheKey(this._boundsOptions||{})];p&&(this._position=this._getPositionFromBounds(p.rect))}else h&&c&&this._pivot&&(this._position=t._transformPoint(c,c));return this},_transformContent:function(t,e,n){var i=this._children;if(i){for(var r=0,s=i.length;r<s;r++)i[r].transform(t,e,n);return!0}},globalToLocal:function(){return this.getGlobalMatrix(!0)._inverseTransform(Z.read(arguments))},localToGlobal:function(){return this.getGlobalMatrix(!0)._transformPoint(Z.read(arguments))},parentToLocal:function(){return this._matrix._inverseTransform(Z.read(arguments))},localToParent:function(){return this._matrix._transformPoint(Z.read(arguments))},fitBounds:function(t,e){t=M.read(arguments);var n=this.getBounds(),i=n.height/n.width,r=t.height/t.width,s=(e?r<i:i<r)?t.width/n.width:t.height/n.height,a=new M(new Z,new W(n.width*s,n.height*s));a.setCenter(t.getCenter()),this.setBounds(a)}}),{_setStyles:function(t,e,n){var i,r,s,a,o,h,u,l,c,f=this._style,d=this._matrix;f.hasFill()&&(t.fillStyle=f.getFillColor().toCanvasStyle(t,d)),f.hasStroke()&&(t.strokeStyle=f.getStrokeColor().toCanvasStyle(t,d),t.lineWidth=f.getStrokeWidth(),i=f.getStrokeJoin(),r=f.getStrokeCap(),s=f.getMiterLimit(),i&&(t.lineJoin=i),r&&(t.lineCap=r),s&&(t.miterLimit=s),at.support.nativeDash&&(a=f.getDashArray(),o=f.getDashOffset(),a&&a.length&&("setLineDash"in t?(t.setLineDash(a),t.lineDashOffset=o):(t.mozDash=a,t.mozDashOffset=o)))),f.hasShadow()&&(h=e.pixelRatio||1,l=(u=n._shiftless().prepend((new $).scale(h,h))).transform(new Z(f.getShadowBlur(),0)),c=u.transform(this.getShadowOffset()),t.shadowColor=f.getShadowColor().toCanvasStyle(t),t.shadowBlur=l.getLength(),t.shadowOffsetX=c.x,t.shadowOffsetY=c.y)},draw:function(t,e,n){this._updateVersion=this._project._updateVersion;if(this._visible&&0!==this._opacity){var i=e.matrices,r=e.viewMatrix,s=this._matrix,a=i[i.length-1].appended(s);if(a.isInvertible()){r=r?r.appended(a):a,i.push(a),e.updateMatrix&&(this._globalMatrix=a);var o,h,u,l=this._blendMode,c=H.clamp(this._opacity,0,1),f="normal"===l,d=x.nativeModes[l],_=f&&1===c||e.dontStart||e.clip||(d||f&&c<1)&&this._canComposite(),g=e.pixelRatio||1;if(!_){var p=this.getStrokeBounds(r);if(!p.width||!p.height)return void i.pop();u=e.offset,h=e.offset=p.getTopLeft().floor(),o=t,t=it.getContext(p.getSize().ceil().add(1).multiply(g)),1!==g&&t.scale(g,g)}t.save();var v,m=n?n.appended(s):this._canScaleStroke&&!this.getStrokeScaling(!0)&&r,y=!_&&e.clipItem,w=!m||y;_?(t.globalAlpha=c,d&&(t.globalCompositeOperation=l)):w&&t.translate(-h.x,-h.y),w&&(_?s:r).applyToContext(t),y&&e.clipItem.draw(t,e.extend({clip:!0})),m&&(t.setTransform(g,0,0,g,0,0),(v=e.offset)&&t.translate(-v.x,-v.y)),this._draw(t,e,r,m),t.restore(),i.pop(),e.clip&&!e.dontFinish&&t.clip(this.getFillRule()),_||(x.process(l,t,o,c,h.subtract(u).multiply(g)),it.release(t),e.offset=u)}}},_isUpdated:function(t){var e=this._parent;if(e instanceof Y)return e._isUpdated(t);var n=this._updateVersion===t;return!n&&e&&e._visible&&e._isUpdated(t)&&(this._updateVersion=t,n=!0),n},_drawSelection:function(t,e,n,i,r){var s=this._selection,a=1&s,o=2&s||a&&this._selectBounds,h=4&s;if(this._drawSelected||(a=!1),(a||o||h)&&this._isUpdated(r)){var u,l=this.getSelectedColor(!0)||(u=this.getLayer())&&u.getSelectedColor(!0),c=e.appended(this.getGlobalMatrix(!0)),f=n/2;if(t.strokeStyle=t.fillStyle=l?l.toCanvasStyle(t):"#009dec",a&&this._drawSelected(t,c,i),h){var d=this.getPosition(!0),_=this._parent,g=_?_.localToGlobal(d):d,p=g.x,v=g.y;t.beginPath(),t.arc(p,v,f,0,2*Math.PI,!0),t.stroke();for(var m=[[0,-1],[1,0],[0,1],[-1,0]],y=f,w=n+1,x=0;x<4;x++){var b=m[x],C=b[0],S=b[1];t.moveTo(p+C*y,v+S*y),t.lineTo(p+C*w,v+S*w),t.stroke()}}if(o){var k=c._transformCorners(this.getInternalBounds());t.beginPath();for(x=0;x<8;x++)t[x?"lineTo":"moveTo"](k[x],k[++x]);t.closePath(),t.stroke();for(x=0;x<8;x++)t.fillRect(k[x]-f,k[++x]-f,n,n)}}},_canComposite:function(){return!1}},U.each(["down","drag","up","move"],function(e){this["removeOn"+U.capitalize(e)]=function(){var t={};return t[e]=!0,this.removeOn(t)}},{removeOn:function(t){for(var e in t){var n,i,r;t[e]&&(n="mouse"+e,(r=(i=this._project)._removeSets=i._removeSets||{})[n]=r[n]||{},r[n][this._id]=this)}return this}}),{tween:function(t,e,n){n||(n=e,e=t,t=null,n||(n=e,e=null));var i=n&&n.easing,r=n&&n.start,s=null!=n&&("number"==typeof n?n:n.duration),a=new w(this,t,e,s,i,r);return s&&this.on("frame",function t(e){a._handleFrame(1e3*e.time),a.running||this.off("frame",t)}),a},tweenTo:function(t,e){return this.tween(null,t,e)},tweenFrom:function(t,e){return this.tween(t,null,e)}}),S=D.extend({_class:"Group",_selectBounds:!1,_selectChildren:!0,_serializeFields:{children:[]},initialize:function(t){this._children=[],this._namedChildren={},this._initialize(t)||this.addChildren(Array.isArray(t)?t:arguments)},_changed:function t(e){t.base.call(this,e),2050&e&&(this._clipItem=q)},_getClipItem:function(){var t=this._clipItem;if(t===q){t=null;for(var e=this._children,n=0,i=e.length;n<i;n++)if(e[n]._clipMask){t=e[n];break}this._clipItem=t}return t},isClipped:function(){return!!this._getClipItem()},setClipped:function(t){var e=this.getFirstChild();e&&e.setClipMask(t)},_getBounds:function t(e,n){var i=this._getClipItem();return i?i._getCachedBounds(i._matrix.prepended(e),U.set({},n,{stroke:!1})):t.base.call(this,e,n)},_hitTestChildren:function t(e,n,i){var r=this._getClipItem();return(!r||r.contains(e))&&t.base.call(this,e,n,i,r)},_draw:function(t,e){var n=e.clip,i=!n&&this._getClipItem();e=e.extend({clipItem:i,clip:!1}),n?(t.beginPath(),e.dontStart=e.dontFinish=!0):i&&i.draw(t,e.extend({clip:!0}));for(var r=this._children,s=0,a=r.length;s<a;s++){var o=r[s];o!==i&&o.draw(t,e)}}}),o=S.extend({_class:"Layer",initialize:function(){S.apply(this,arguments)},_getOwner:function(){return this._parent||null!=this._index&&this._project},isInserted:function t(){return this._parent?t.base.call(this):null!=this._index},activate:function(){this._project._activeLayer=this},_hitTestSelf:function(){}}),k=D.extend({_class:"Shape",_applyMatrix:!1,_canApplyMatrix:!1,_canScaleStroke:!0,_serializeFields:{type:null,size:null,radius:null},initialize:function(t,e){this._initialize(t,e)},_equals:function(t){return this._type===t._type&&this._size.equals(t._size)&&U.equals(this._radius,t._radius)},copyContent:function(t){this.setType(t._type),this.setSize(t._size),this.setRadius(t._radius)},getType:function(){return this._type},setType:function(t){this._type=t},getShape:"#getType",setShape:"#setType",getSize:function(){var t=this._size;return new n(t.width,t.height,this,"setSize")},setSize:function(){var t,e,n,i=W.read(arguments);this._size?this._size.equals(i)||(t=this._type,e=i.width,n=i.height,"rectangle"===t?this._radius.set(W.min(this._radius,i.divide(2).abs())):"circle"===t?(e=n=(e+n)/2,this._radius=e/2):"ellipse"===t&&this._radius._set(e/2,n/2),this._size._set(e,n),this._changed(9)):this._size=i.clone()},getRadius:function(){var t=this._radius;return"circle"===this._type?t:new n(t.width,t.height,this,"setRadius")},setRadius:function(t){var e=this._type;if("circle"===e){if(t===this._radius)return;var n=2*t;this._radius=t,this._size._set(n,n)}else if(t=W.read(arguments),this._radius){if(this._radius.equals(t))return;this._radius.set(t),"rectangle"===e?(n=W.max(this._size,t.multiply(2)),this._size.set(n)):"ellipse"===e&&this._size._set(2*t.width,2*t.height)}else this._radius=t.clone();this._changed(9)},isEmpty:function(){return!1},toPath:function(t){var e=new(Q[U.capitalize(this._type)])({center:new Z,size:this._size,radius:this._radius,insert:!1});return e.copyAttributes(this),at.settings.applyMatrix&&e.setApplyMatrix(!0),t!==q&&!t||e.insertAbove(this),e},toShape:"#clone",_asPathItem:function(){return this.toPath(!1)},_draw:function(t,e,n,i){var r,s,a,o,h,u,l,c,f,d,_,g,p,v,m=this._style,y=m.hasFill(),w=m.hasStroke(),x=e.dontFinish||e.clip,b=!i;(y||w||x)&&(r=this._type,s=this._radius,a="circle"===r,e.dontStart||t.beginPath(),b&&a?t.arc(0,0,s,0,2*Math.PI,!0):(o=a?s:s.width,h=a?s:s.height,l=(u=this._size).width,c=u.height,b&&"rectangle"===r&&0===o&&0===h?t.rect(-l/2,-c/2,l,c):(v=[-(f=l/2),-(d=c/2)+h,-f,(p=h*(_=.44771525016920644))-d,(g=o*_)-f,-d,-f+o,-d,f-o,-d,f-g,-d,f,p-d,f,-d+h,f,d-h,f,d-p,f-g,d,f-o,d,-f+o,d,g-f,d,-f,d-p,-f,d-h],i&&i.transform(v,v,32),t.moveTo(v[0],v[1]),t.bezierCurveTo(v[2],v[3],v[4],v[5],v[6],v[7]),f!==o&&t.lineTo(v[8],v[9]),t.bezierCurveTo(v[10],v[11],v[12],v[13],v[14],v[15]),d!==h&&t.lineTo(v[16],v[17]),t.bezierCurveTo(v[18],v[19],v[20],v[21],v[22],v[23]),f!==o&&t.lineTo(v[24],v[25]),t.bezierCurveTo(v[26],v[27],v[28],v[29],v[30],v[31]))),t.closePath()),x||!y&&!w||(this._setStyles(t,e,n),y&&(t.fill(m.getFillRule()),t.shadowColor="rgba(0,0,0,0)"),w&&t.stroke())},_canComposite:function(){return!(this.hasFill()&&this.hasStroke())},_getBounds:function(t,e){var n=new M(this._size).setCenter(0,0),i=this._style,r=e.stroke&&i.hasStroke()&&i.getStrokeWidth();return t&&(n=t._transformBounds(n)),r?n.expand(Q._getStrokePadding(r,this._getStrokeMatrix(t,e))):n}},new function(){function m(t,e,n){var i=t._radius;if(!i.isZero())for(var r=t._size.divide(2),s=1;s<=4;s++){var a=new Z(1<s&&s<4?-1:1,2<s?-1:1),o=a.multiply(r),h=o.subtract(a.multiply(i));if(new M(n?o.add(a.multiply(n)):o,h).contains(e))return{point:h,quadrant:s}}}function y(t,e,n,i){var r=t.divide(e);return(!i||r.isInQuadrant(i))&&r.subtract(r.normalize()).multiply(e).divide(n).length<=1}return{_contains:function t(e){if("rectangle"!==this._type)return e.divide(this.size).getLength()<=.5;var n=m(this,e);return n?e.subtract(n.point).divide(this._radius).getLength()<=1:t.base.call(this,e)},_hitTestSelf:function t(e,n,i,r){var s,a,o,h,u,l,c,f,d,_=!1,g=this._style,p=n.stroke&&g.hasStroke(),v=n.fill&&g.hasFill();return(p||v)&&(s=this._type,a=this._radius,o=p?g.getStrokeWidth()/2:0,h=n._tolerancePadding.add(Q._getStrokePadding(o,!g.getStrokeScaling()&&r)),_="rectangle"===s?(l=m(this,e,u=h.multiply(2)))?y(e.subtract(l.point),a,h,l.quadrant):(f=(c=new M(this._size).setCenter(0,0)).expand(u),d=c.expand(u.negate()),f._containsPoint(e)&&!d._containsPoint(e)):y(e,a,h)),_?new O(p?"stroke":"fill",this):t.base.apply(this,arguments)}}},{statics:new function(){function i(t,e,n,i,r){var s=U.create(k.prototype);return s._type=t,s._size=n,s._radius=i,s._initialize(U.getNamed(r),e),s}return{Circle:function(){var t=arguments,e=Z.readNamed(t,"center"),n=U.readNamed(t,"radius");return i("circle",e,new W(2*n),n,t)},Rectangle:function(){var t=arguments,e=M.readNamed(t,"rectangle"),n=W.min(W.readNamed(t,"radius"),e.getSize(!0).divide(2));return i("rectangle",e.getCenter(!0),e.getSize(!0),n,t)},Ellipse:function(){var t=arguments,e=k._readEllipse(t),n=e.radius;return i("ellipse",e.center,n.multiply(2),n,t)},_readEllipse:function(t){var e,n,i;return i=U.hasNamed(t,"radius")?(n=Z.readNamed(t,"center"),W.readNamed(t,"radius")):(n=(e=M.readNamed(t,"rectangle")).getCenter(!0),e.getSize(!0).divide(2)),{center:n,radius:i}}}}}),I=D.extend({_class:"Raster",_applyMatrix:!1,_canApplyMatrix:!1,_boundsOptions:{stroke:!1,handle:!1},_serializeFields:{crossOrigin:null,source:null},_prioritize:["crossOrigin"],_smoothing:!0,beans:!0,initialize:function(t,e){var n,i,r,s;this._initialize(t,e!==q&&Z.read(arguments))||((r="string"==(i=typeof t)?T.getElementById(t):"object"==i?t:null)&&r!==D.NO_INSERT&&(r.getContext||null!=r.naturalHeight?n=r:r&&((s=W.read(arguments)).isZero()||(n=it.getCanvas(s)))),n?this.setImage(n):this.setSource(t)),this._size||(this._size=new W,this._loaded=!1)},_equals:function(t){return this.getSource()===t.getSource()},copyContent:function(t){var e,n=t._image,i=t._canvas;n?this._setImage(n):i&&((e=it.getCanvas(t._size)).getContext("2d").drawImage(i,0,0),this._setImage(e)),this._crossOrigin=t._crossOrigin},getSize:function(){var t=this._size;return new n(t?t.width:0,t?t.height:0,this,"setSize")},setSize:function(){var t,e=W.read(arguments);e.equals(this._size)||(0<e.width&&0<e.height?(t=this.getElement(),this._setImage(it.getCanvas(e)),t&&this.getContext(!0).drawImage(t,0,0,e.width,e.height)):(this._canvas&&it.release(this._canvas),this._size=e.clone()))},getWidth:function(){return this._size?this._size.width:0},setWidth:function(t){this.setSize(t,this.getHeight())},getHeight:function(){return this._size?this._size.height:0},setHeight:function(t){this.setSize(this.getWidth(),t)},getLoaded:function(){return this._loaded},isEmpty:function(){var t=this._size;return!t||0===t.width&&0===t.height},getResolution:function(){var t=this._matrix,e=new Z(0,0).transform(t),n=new Z(1,0).transform(t).subtract(e),i=new Z(0,1).transform(t).subtract(e);return new W(72/n.getLength(),72/i.getLength())},getPpi:"#getResolution",getImage:function(){return this._image},setImage:function(e){var i=this;function n(t){var e=i.getView(),n=t&&t.type||"load";e&&i.responds(n)&&(at=e._scope,i.emit(n,new p(t)))}this._setImage(e),this._loaded?setTimeout(n,0):e&&F.add(e,{load:function(t){i._setImage(e),n(t)},error:n})},_setImage:function(t){this._canvas&&it.release(this._canvas),t&&t.getContext?(this._image=null,this._canvas=t,this._loaded=!0):(this._image=t,this._canvas=null,this._loaded=!!(t&&t.src&&t.complete)),this._size=new W(t?t.naturalWidth||t.width:0,t?t.naturalHeight||t.height:0),this._context=null,this._changed(1033)},getCanvas:function(){if(!this._canvas){var e=it.getContext(this._size);try{this._image&&e.drawImage(this._image,0,0),this._canvas=e.canvas}catch(t){it.release(e)}}return this._canvas},setCanvas:"#setImage",getContext:function(t){return this._context||(this._context=this.getCanvas().getContext("2d")),t&&(this._image=null,this._changed(1025)),this._context},setContext:function(t){this._context=t},getSource:function(){var t=this._image;return t&&t.src||this.toDataURL()},setSource:function(t){var e=new C.Image,n=this._crossOrigin;n&&(e.crossOrigin=n),t&&(e.src=t),this.setImage(e)},getCrossOrigin:function(){var t=this._image;return t&&t.crossOrigin||this._crossOrigin||""},setCrossOrigin:function(t){this._crossOrigin=t;var e=this._image;e&&(e.crossOrigin=t)},getSmoothing:function(){return this._smoothing},setSmoothing:function(t){this._smoothing=t,this._changed(257)},getElement:function(){return this._canvas||this._loaded&&this._image}},{beans:!1,getSubCanvas:function(){var t=M.read(arguments),e=it.getContext(t.getSize());return e.drawImage(this.getCanvas(),t.x,t.y,t.width,t.height,0,0,t.width,t.height),e.canvas},getSubRaster:function(){var t=M.read(arguments),e=new I(D.NO_INSERT);return e._setImage(this.getSubCanvas(t)),e.translate(t.getCenter().subtract(this.getSize().divide(2))),e._matrix.prepend(this._matrix),e.insertAbove(this),e},toDataURL:function(){var t=this._image,e=t&&t.src;if(/^data:/.test(e))return e;var n=this.getCanvas();return n?n.toDataURL.apply(n,arguments):null},drawImage:function(t){var e=Z.read(arguments,1);this.getContext(!0).drawImage(t,e.x,e.y)},getAverageColor:function(t){var e,n;if(t?t instanceof z?e=(n=t).getBounds():"object"==typeof t&&("width"in t?e=new M(t):"x"in t&&(e=new M(t.x-.5,t.y-.5,1,1))):e=this.getBounds(),!e)return null;var i=Math.min(e.width,32),r=Math.min(e.height,32),s=I._sampleContext;s?s.clearRect(0,0,33,33):s=I._sampleContext=it.getContext(new W(32)),s.save();var a=(new $).scale(i/e.width,r/e.height).translate(-e.x,-e.y);a.applyToContext(s),n&&n.draw(s,new U({clip:!0,matrices:[a]})),this._matrix.applyToContext(s);var o=this.getElement(),h=this._size;o&&s.drawImage(o,-h.width/2,-h.height/2),s.restore();for(var u=s.getImageData(.5,.5,Math.ceil(i),Math.ceil(r)).data,l=[0,0,0],c=0,f=0,d=u.length;f<d;f+=4){var _=u[f+3];c+=_,_/=255,l[0]+=u[f]*_,l[1]+=u[f+1]*_,l[2]+=u[f+2]*_}for(f=0;f<3;f++)l[f]/=c;return c?E.read(l):null},getPixel:function(){var t=Z.read(arguments),e=this.getContext().getImageData(t.x,t.y,1,1).data;return new E("rgb",[e[0]/255,e[1]/255,e[2]/255],e[3]/255)},setPixel:function(){var t=arguments,e=Z.read(t),n=E.read(t),i=n._convert("rgb"),r=n._alpha,s=this.getContext(!0),a=s.createImageData(1,1),o=a.data;o[0]=255*i[0],o[1]=255*i[1],o[2]=255*i[2],o[3]=null!=r?255*r:255,s.putImageData(a,e.x,e.y)},clear:function(){var t=this._size;this.getContext(!0).clearRect(0,0,t.width+1,t.height+1)},createImageData:function(){var t=W.read(arguments);return this.getContext().createImageData(t.width,t.height)},getImageData:function(){var t=M.read(arguments);return t.isEmpty()&&(t=new M(this._size)),this.getContext().getImageData(t.x,t.y,t.width,t.height)},setImageData:function(t){var e=Z.read(arguments,1);this.getContext(!0).putImageData(t,e.x,e.y)},_getBounds:function(t,e){var n=new M(this._size).setCenter(0,0);return t?t._transformBounds(n):n},_hitTestSelf:function(t){if(this._contains(t)){var e=this;return new O("pixel",e,{offset:t.add(e._size.divide(2)).round(),color:{get:function(){return e.getPixel(this.offset)}}})}},_draw:function(t,e,n){var i=this.getElement();i&&0<i.width&&0<i.height&&(t.globalAlpha=H.clamp(this._opacity,0,1),this._setStyles(t,e,n),B.setPrefixed(t,"imageSmoothingEnabled",this._smoothing),t.drawImage(i,-this._size.width/2,-this._size.height/2))},_canComposite:function(){return!0}}),a=D.extend({_class:"SymbolItem",_applyMatrix:!1,_canApplyMatrix:!1,_boundsOptions:{stroke:!0},_serializeFields:{symbol:null},initialize:function(t,e){this._initialize(t,e!==q&&Z.read(arguments,1))||this.setDefinition(t instanceof P?t:new P(t))},_equals:function(t){return this._definition===t._definition},copyContent:function(t){this.setDefinition(t._definition)},getDefinition:function(){return this._definition},setDefinition:function(t){this._definition=t,this._changed(9)},getSymbol:"#getDefinition",setSymbol:"#setDefinition",isEmpty:function(){return this._definition._item.isEmpty()},_getBounds:function(t,e){var n=this._definition._item;return n._getCachedBounds(n._matrix.prepended(t),e)},_hitTestSelf:function(t,e,n){var i=e.extend({all:!1}),r=this._definition._item._hitTest(t,i,n);return r&&(r.item=this),r},_draw:function(t,e){this._definition._item.draw(t,e)}}),P=U.extend({_class:"SymbolDefinition",initialize:function(t,e){this._id=u.get(),this.project=at.project,t&&this.setItem(t,e)},_serialize:function(t,e){return e.add(this,function(){return U.serialize([this._class,this._item],t,!1,e)})},_changed:function(t){8&t&&D._clearBoundsCache(this),1&t&&this.project._changed(t)},getItem:function(){return this._item},setItem:function(t,e){t._symbol&&(t=t.clone()),this._item&&(this._item._symbol=null),(this._item=t).remove(),t.setSelected(!1),e||t.setPosition(new Z),(t._symbol=this)._changed(9)},getDefinition:"#getItem",setDefinition:"#setItem",place:function(t){return new a(this,t)},clone:function(){return new P(this._item.clone(!1))},equals:function(t){return t===this||t&&this._item.equals(t._item)||!1}}),O=U.extend({_class:"HitResult",initialize:function(t,e,n){this.type=t,this.item=e,n&&this.inject(n)},statics:{getOptions:function(t){var e=t&&U.read(t);return new U({type:null,tolerance:at.settings.hitTolerance,fill:!e,stroke:!e,segments:!e,handles:!1,ends:!1,position:!1,center:!1,bounds:!1,guides:!1,selected:!1},e)}}}),J=U.extend({_class:"Segment",beans:!0,_selection:0,initialize:function(t,e,n,i,r,s){var a,o,h,u,l=arguments.length;0<l&&(null==t||"object"==typeof t?u=1===l&&t&&"point"in t?(a=t.point,o=t.handleIn,h=t.handleOut,t.selection):(a=t,o=e,h=n,i):(a=[t,e],o=n!==q?[n,i]:null,h=r!==q?[r,s]:null)),new d(a,this,"_point"),new d(o,this,"_handleIn"),new d(h,this,"_handleOut"),u&&this.setSelection(u)},_serialize:function(t,e){var n=this._point,i=this._selection,r=i||this.hasHandles()?[n,this._handleIn,this._handleOut]:n;return i&&r.push(i),U.serialize(r,t,!0,e)},_changed:function(t){var e,n,i,r=this._path;r&&(e=r._curves,n=this._index,e&&(t&&t!==this._point&&t!==this._handleIn||!(i=0<n?e[n-1]:r._closed?e[e.length-1]:null)||i._changed(),t&&t!==this._point&&t!==this._handleOut||!(i=e[n])||i._changed()),r._changed(41))},getPoint:function(){return this._point},setPoint:function(){this._point.set(Z.read(arguments))},getHandleIn:function(){return this._handleIn},setHandleIn:function(){this._handleIn.set(Z.read(arguments))},getHandleOut:function(){return this._handleOut},setHandleOut:function(){this._handleOut.set(Z.read(arguments))},hasHandles:function(){return!this._handleIn.isZero()||!this._handleOut.isZero()},isSmooth:function(){var t=this._handleIn,e=this._handleOut;return!t.isZero()&&!e.isZero()&&t.isCollinear(e)},clearHandles:function(){this._handleIn._set(0,0),this._handleOut._set(0,0)},getSelection:function(){return this._selection},setSelection:function(t){var e=this._selection,n=this._path;this._selection=t=t||0,n&&t!==e&&(n._updateSelection(this,e,t),n._changed(257))},_changeSelection:function(t,e){var n=this._selection;this.setSelection(e?n|t:n&~t)},isSelected:function(){return!!(7&this._selection)},setSelected:function(t){this._changeSelection(7,t)},getIndex:function(){return this._index!==q?this._index:null},getPath:function(){return this._path||null},getCurve:function(){var t=this._path,e=this._index;return t?(0<e&&!t._closed&&e===t._segments.length-1&&e--,t.getCurves()[e]||null):null},getLocation:function(){var t=this.getCurve();return t?new K(t,this===t._segment1?0:1):null},getNext:function(){var t=this._path&&this._path._segments;return t&&(t[this._index+1]||this._path._closed&&t[0])||null},smooth:function(t,e,n){var i,r,s,a=t||{},o=a.type,h=a.factor,u=this.getPrevious(),l=this.getNext(),c=(u||this)._point,f=this._point,d=(l||this)._point,_=c.getDistance(f),g=f.getDistance(d);if(o&&"catmull-rom"!==o){if("geometric"!==o)throw new Error("Smoothing method '"+o+"' not supported.");u&&l&&(i=c.subtract(d),s=(r=h===q?.4:h)*_/(_+g),e||this.setHandleIn(i.multiply(s)),n||this.setHandleOut(i.multiply(s-r)))}else{var p,v,m=h===q?.5:h,y=Math.pow(_,m),w=y*y,x=Math.pow(g,m),b=x*x;!e&&u&&(p=2*b+3*x*y+w,v=3*x*(x+y),this.setHandleIn(0!==v?new Z((b*c._x+p*f._x-w*d._x)/v-f._x,(b*c._y+p*f._y-w*d._y)/v-f._y):new Z)),!n&&l&&(p=2*w+3*y*x+b,v=3*y*(y+x),this.setHandleOut(0!==v?new Z((w*d._x+p*f._x-b*c._x)/v-f._x,(w*d._y+p*f._y-b*c._y)/v-f._y):new Z))}},getPrevious:function(){var t=this._path&&this._path._segments;return t&&(t[this._index-1]||this._path._closed&&t[t.length-1])||null},isFirst:function(){return!this._index},isLast:function(){var t=this._path;return t&&this._index===t._segments.length-1||!1},reverse:function(){var t=this._handleIn,e=this._handleOut,n=t.clone();t.set(e),e.set(n)},reversed:function(){return new J(this._point,this._handleOut,this._handleIn)},remove:function(){return!!this._path&&!!this._path.removeSegment(this._index)},clone:function(){return new J(this._point,this._handleIn,this._handleOut)},equals:function(t){return t===this||t&&this._class===t._class&&this._point.equals(t._point)&&this._handleIn.equals(t._handleIn)&&this._handleOut.equals(t._handleOut)||!1},toString:function(){var t=["point: "+this._point];return this._handleIn.isZero()||t.push("handleIn: "+this._handleIn),this._handleOut.isZero()||t.push("handleOut: "+this._handleOut),"{ "+t.join(", ")+" }"},transform:function(t){this._transformCoordinates(t,new Array(6),!0),this._changed()},interpolate:function(t,e,n){var i=1-n,r=n,s=t._point,a=e._point,o=t._handleIn,h=e._handleIn,u=e._handleOut,l=t._handleOut;this._point._set(i*s._x+r*a._x,i*s._y+r*a._y,!0),this._handleIn._set(i*o._x+r*h._x,i*o._y+r*h._y,!0),this._handleOut._set(i*l._x+r*u._x,i*l._y+r*u._y,!0),this._changed()},_transformCoordinates:function(t,e,n){var i=this._point,r=n&&this._handleIn.isZero()?null:this._handleIn,s=n&&this._handleOut.isZero()?null:this._handleOut,a=i._x,o=i._y,h=2;return e[0]=a,e[1]=o,r&&(e[h++]=r._x+a,e[h++]=r._y+o),s&&(e[h++]=s._x+a,e[h++]=s._y+o),t&&(t._transformCoordinates(e,e,h/2),a=e[0],o=e[1],n?(i._x=a,i._y=o,h=2,r&&(r._x=e[h++]-a,r._y=e[h++]-o),s&&(s._x=e[h++]-a,s._y=e[h++]-o)):(r||(e[h++]=a,e[h++]=o),s||(e[h++]=a,e[h++]=o))),e}}),d=Z.extend({initialize:function(t,e,n){var i,r,s,a;t?(i=t[0])!==q?r=t[1]:((i=(a=t).x)===q&&(i=(a=Z.read(arguments)).x),r=a.y,s=a.selected):i=r=0,this._x=i,this._y=r,(this._owner=e)[n]=this,s&&this.setSelected(!0)},_set:function(t,e){return this._x=t,this._y=e,this._owner._changed(this),this},getX:function(){return this._x},setX:function(t){this._x=t,this._owner._changed(this)},getY:function(){return this._y},setY:function(t){this._y=t,this._owner._changed(this)},isZero:function(){var t=H.isZero;return t(this._x)&&t(this._y)},isSelected:function(){return!!(this._owner._selection&this._getSelection())},setSelected:function(t){this._owner._changeSelection(this._getSelection(),t)},_getSelection:function(){var t=this._owner;return this===t._point?1:this===t._handleIn?2:this===t._handleOut?4:0}}),X=U.extend({_class:"Curve",beans:!0,initialize:function(t,e,n,i,r,s,a,o){var h,u,l,c,f,d,_=arguments.length;3===_?(this._path=t,h=e,u=n):_?1===_?"segment1"in t?(h=new J(t.segment1),u=new J(t.segment2)):"point1"in t?(l=t.point1,f=t.handle1,d=t.handle2,c=t.point2):Array.isArray(t)&&(l=[t[0],t[1]],c=[t[6],t[7]],f=[t[2]-t[0],t[3]-t[1]],d=[t[4]-t[6],t[5]-t[7]]):2===_?(h=new J(t),u=new J(e)):4===_?(l=t,f=e,d=n,c=i):8===_&&(l=[t,e],c=[a,o],f=[n-t,i-e],d=[r-a,s-o]):(h=new J,u=new J),this._segment1=h||new J(l,null,f),this._segment2=u||new J(c,d,null)},_serialize:function(t,e){return U.serialize(this.hasHandles()?[this.getPoint1(),this.getHandle1(),this.getHandle2(),this.getPoint2()]:[this.getPoint1(),this.getPoint2()],t,!0,e)},_changed:function(){this._length=this._bounds=q},clone:function(){return new X(this._segment1,this._segment2)},toString:function(){var t=["point1: "+this._segment1._point];return this._segment1._handleOut.isZero()||t.push("handle1: "+this._segment1._handleOut),this._segment2._handleIn.isZero()||t.push("handle2: "+this._segment2._handleIn),t.push("point2: "+this._segment2._point),"{ "+t.join(", ")+" }"},classify:function(){return X.classify(this.getValues())},remove:function(){var t,e,n=!1;return this._path&&(e=(t=this._segment2)._handleOut,(n=t.remove())&&this._segment1._handleOut.set(e)),n},getPoint1:function(){return this._segment1._point},setPoint1:function(){this._segment1._point.set(Z.read(arguments))},getPoint2:function(){return this._segment2._point},setPoint2:function(){this._segment2._point.set(Z.read(arguments))},getHandle1:function(){return this._segment1._handleOut},setHandle1:function(){this._segment1._handleOut.set(Z.read(arguments))},getHandle2:function(){return this._segment2._handleIn},setHandle2:function(){this._segment2._handleIn.set(Z.read(arguments))},getSegment1:function(){return this._segment1},getSegment2:function(){return this._segment2},getPath:function(){return this._path},getIndex:function(){return this._segment1._index},getNext:function(){var t=this._path&&this._path._curves;return t&&(t[this._segment1._index+1]||this._path._closed&&t[0])||null},getPrevious:function(){var t=this._path&&this._path._curves;return t&&(t[this._segment1._index-1]||this._path._closed&&t[t.length-1])||null},isFirst:function(){return!this._segment1._index},isLast:function(){var t=this._path;return t&&this._segment1._index===t._curves.length-1||!1},isSelected:function(){return this.getPoint1().isSelected()&&this.getHandle1().isSelected()&&this.getHandle2().isSelected()&&this.getPoint2().isSelected()},setSelected:function(t){this.getPoint1().setSelected(t),this.getHandle1().setSelected(t),this.getHandle2().setSelected(t),this.getPoint2().setSelected(t)},getValues:function(t){return X.getValues(this._segment1,this._segment2,t)},getPoints:function(){for(var t=this.getValues(),e=[],n=0;n<8;n+=2)e.push(new Z(t[n],t[n+1]));return e}},{getLength:function(){return null==this._length&&(this._length=X.getLength(this.getValues(),0,1)),this._length},getArea:function(){return X.getArea(this.getValues())},getLine:function(){return new G(this._segment1._point,this._segment2._point)},getPart:function(t,e){return new X(X.getPart(this.getValues(),t,e))},getPartLength:function(t,e){return X.getLength(this.getValues(),t,e)},divideAt:function(t){return this.divideAtTime(t&&t.curve===this?t.time:this.getTimeAt(t))},divideAtTime:function(t,e){var n,i,r,s,a,o,h,u,l,c,f=null;return 1e-8<=t&&t<=1-1e-8&&(i=(n=X.subdivide(this.getValues(),t))[0],r=n[1],s=e||this.hasHandles(),a=this._segment1,o=this._segment2,h=this._path,s&&(a._handleOut._set(i[2]-i[0],i[3]-i[1]),o._handleIn._set(r[4]-r[6],r[5]-r[7])),u=i[6],l=i[7],c=new J(new Z(u,l),s&&new Z(i[4]-u,i[5]-l),s&&new Z(r[2]-u,r[3]-l)),f=h?(h.insert(a._index+1,c),this.getNext()):(this._segment2=c,this._changed(),new X(c,o))),f},splitAt:function(t){var e=this._path;return e?e.splitAt(t):null},splitAtTime:function(t){return this.splitAt(this.getLocationAtTime(t))},divide:function(t,e){return this.divideAtTime(t===q?.5:e?t:this.getTimeAt(t))},split:function(t,e){return this.splitAtTime(t===q?.5:e?t:this.getTimeAt(t))},reversed:function(){return new X(this._segment2.reversed(),this._segment1.reversed())},clearHandles:function(){this._segment1._handleOut._set(0,0),this._segment2._handleIn._set(0,0)},statics:{getValues:function(t,e,n,i){var r=t._point,s=t._handleOut,a=e._handleIn,o=e._point,h=r.x,u=r.y,l=o.x,c=o.y,f=i?[h,u,h,u,l,c,l,c]:[h,u,h+s._x,u+s._y,l+a._x,c+a._y,l,c];return n&&n._transformCoordinates(f,f,4),f},subdivide:function(t,e){var n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],h=t[6],u=t[7];e===q&&(e=.5);var l=1-e,c=l*n+e*r,f=l*i+e*s,d=l*r+e*a,_=l*s+e*o,g=l*a+e*h,p=l*o+e*u,v=l*c+e*d,m=l*f+e*_,y=l*d+e*g,w=l*_+e*p,x=l*v+e*y,b=l*m+e*w;return[[n,i,c,f,v,m,x,b],[x,b,y,w,g,p,h,u]]},getMonoCurves:function(t,e){var n,i,r,s,a,o,h,u=[],l=e?0:1,c=t[0+l],f=t[2+l],d=t[4+l],_=t[6+l];return f<=c==d<=f&&d<=f==_<=d||X.isStraight(t)?u.push(t):(n=3*(f-d)-c+_,i=2*(c+d)-4*f,r=f-c,0,s=[],(a=H.solveQuadratic(n,i,r,s,1e-8,1-1e-8))?(s.sort(),o=s[0],h=X.subdivide(t,o),u.push(h[0]),1<a&&(o=(s[1]-o)/(1-o),h=X.subdivide(h[1],o),u.push(h[0])),u.push(h[1])):u.push(t)),u},solveCubic:function(t,e,n,i,r,s){var a,o,h,u=t[e],l=t[e+2],c=t[e+4],f=t[e+6],d=0;return u<n&&f<n&&l<n&&c<n||n<u&&n<f&&n<l&&n<c||(h=f-u-(a=3*(l-u))-(o=3*(c-l)-a),d=H.solveCubic(h,o,a,u-n,i,r,s)),d},getTimeOf:function(t,e){var n=new Z(t[0],t[1]),i=new Z(t[6],t[7]);if(null===(e.isClose(n,1e-12)?0:e.isClose(i,1e-12)?1:null))for(var r=[e.x,e.y],s=[],a=0;a<2;a++)for(var o=X.solveCubic(t,a,r[a],s,0,1),h=0;h<o;h++){var u=s[h];if(e.isClose(X.getPoint(t,u),1e-7))return u}return e.isClose(n,1e-7)?0:e.isClose(i,1e-7)?1:null},getNearestTime:function(n,i){if(X.isStraight(n)){var t=n[0],e=n[1],r=n[6]-t,s=n[7]-e,a=r*r+s*s;if(0==a)return 0;var o=((i.x-t)*r+(i.y-e)*s)/a;return o<1e-12?0:.999999999999<o?1:X.getTimeOf(n,new Z(t+o*r,e+o*s))}var h=1/0,u=0;function l(t){if(0<=t&&t<=1){var e=i.getDistance(X.getPoint(n,t),!0);if(e<h)return h=e,u=t,1}}for(var c=0;c<=100;c++)l(c/100);for(var f=.005;1e-8<f;)l(u-f)||l(u+f)||(f/=2);return u},getPart:function(t,e,n){var i,r=n<e;return r&&(i=e,e=n,n=i),0<e&&(t=X.subdivide(t,e)[1]),n<1&&(t=X.subdivide(t,(n-e)/(1-e))[0]),r?[t[6],t[7],t[4],t[5],t[2],t[3],t[0],t[1]]:t},isFlatEnough:function(t,e){var n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],h=t[6],u=t[7],l=3*r-2*n-h,c=3*s-2*i-u,f=3*a-2*h-n,d=3*o-2*u-i;return Math.max(l*l,f*f)+Math.max(c*c,d*d)<=16*e*e},getArea:function(t){var e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],h=t[7];return 3*((h-n)*(i+s)-(o-e)*(r+a)+r*(e-s)-i*(n-a)+h*(s+e/3)-o*(a+n/3))/20},getBounds:function(t){for(var e=t.slice(0,2),n=e.slice(),i=[0,0],r=0;r<2;r++)X._addBounds(t[r],t[r+2],t[r+4],t[r+6],r,0,e,n,i);return new M(e[0],e[1],n[0]-e[0],n[1]-e[1])},_addBounds:function(t,e,n,i,r,s,a,o,h){function u(t,e){var n=t-e,i=t+e;n<a[r]&&(a[r]=n),i>o[r]&&(o[r]=i)}s/=2;var l=a[r]-s,c=o[r]+s;if(t<l||e<l||n<l||i<l||c<t||c<e||c<n||c<i)if(e<t!=e<i&&n<t!=n<i)u(t,0),u(i,0);else{var f=3*(e-n)-t+i,d=2*(t+n)-4*e,_=e-t,g=H.solveQuadratic(f,d,_,h);u(i,0);for(var p=0;p<g;p++){var v=h[p],m=1-v;1e-8<=v&&v<=1-1e-8&&u(m*m*m*t+3*m*m*v*e+3*m*v*v*n+v*v*v*i,s)}}}}},U.each(["getBounds","getStrokeBounds","getHandleBounds"],function(t){this[t]=function(){return this._bounds||(this._bounds={}),(this._bounds[t]||(this._bounds[t]=Q[t]([this._segment1,this._segment2],!1,this._path))).clone()}},{}),U.each({isStraight:function(t,e,n,i){if(e.isZero()&&n.isZero())return!0;var r=i.subtract(t);if(r.isZero())return!1;if(r.isCollinear(e)&&r.isCollinear(n)){var s=new G(t,i);if(s.getDistance(t.add(e))<1e-7&&s.getDistance(i.add(n))<1e-7){var a=r.dot(r),o=r.dot(e)/a,h=r.dot(n)/a;return 0<=o&&o<=1&&h<=0&&-1<=h}}return!1},isLinear:function(t,e,n,i){var r=i.subtract(t).divide(3);return e.equals(r)&&n.negate().equals(r)}},function(a,t){this[t]=function(t){var e=this._segment1,n=this._segment2;return a(e._point,e._handleOut,n._handleIn,n._point,t)},this.statics[t]=function(t,e){var n=t[0],i=t[1],r=t[6],s=t[7];return a(new Z(n,i),new Z(t[2]-n,t[3]-i),new Z(t[4]-r,t[5]-s),new Z(r,s),e)}},{statics:{},hasHandles:function(){return!this._segment1._handleOut.isZero()||!this._segment2._handleIn.isZero()},hasLength:function(t){return(!this.getPoint1().equals(this.getPoint2())||this.hasHandles())&&this.getLength()>(t||0)},isCollinear:function(t){return t&&this.isStraight()&&t.isStraight()&&this.getLine().isCollinear(t.getLine())},isHorizontal:function(){return this.isStraight()&&Math.abs(this.getTangentAtTime(.5).y)<1e-8},isVertical:function(){return this.isStraight()&&Math.abs(this.getTangentAtTime(.5).x)<1e-8}}),{beans:!1,getLocationAt:function(t,e){return this.getLocationAtTime(e?t:this.getTimeAt(t))},getLocationAtTime:function(t){return null!=t&&0<=t&&t<=1?new K(this,t):null},getTimeAt:function(t,e){return X.getTimeAt(this.getValues(),t,e)},getParameterAt:"#getTimeAt",getTimesWithTangent:function(){var t=Z.read(arguments);return t.isZero()?[]:X.getTimesWithTangent(this.getValues(),t)},getOffsetAtTime:function(t){return this.getPartLength(0,t)},getLocationOf:function(){return this.getLocationAtTime(this.getTimeOf(Z.read(arguments)))},getOffsetOf:function(){var t=this.getLocationOf.apply(this,arguments);return t?t.getOffset():null},getTimeOf:function(){return X.getTimeOf(this.getValues(),Z.read(arguments))},getParameterOf:"#getTimeOf",getNearestLocation:function(){var t=Z.read(arguments),e=this.getValues(),n=X.getNearestTime(e,t),i=X.getPoint(e,n);return new K(this,n,i,null,t.getDistance(i))},getNearestPoint:function(){var t=this.getNearestLocation.apply(this,arguments);return t?t.getPoint():t}},new function(){var t=["getPoint","getTangent","getNormal","getWeightedTangent","getWeightedNormal","getCurvature"];return U.each(t,function(i){this[i+"At"]=function(t,e){var n=this.getValues();return X[i](n,e?t:X.getTimeAt(n,t))},this[i+"AtTime"]=function(t){return X[i](this.getValues(),t)}},{statics:{_evaluateMethods:t}})},new function(){function f(t){var e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],h=t[7],u=9*(i-s)+3*(o-e),l=6*(e+s)-12*i,c=3*(i-e),f=9*(r-a)+3*(h-n),d=6*(n+a)-12*r,_=3*(r-n);return function(t){var e=(u*t+l)*t+c,n=(f*t+d)*t+_;return Math.sqrt(e*e+n*n)}}function d(t,e){return Math.max(2,Math.min(16,Math.ceil(32*Math.abs(e-t))))}function n(t,e,n,i){if(null==e||e<0||1<e)return null;var r=t[0],s=t[1],a=t[2],o=t[3],h=t[4],u=t[5],l=t[6],c=t[7],f=H.isZero;f(a-r)&&f(o-s)&&(a=r,o=s),f(h-l)&&f(u-c)&&(h=l,u=c);var d,_,g,p,v=3*(a-r),m=3*(h-a)-v,y=l-r-v-m,w=3*(o-s),x=3*(u-o)-w,b=c-s-w-x;return 0===n?(g=0===e?r:1===e?l:((y*e+m)*e+v)*e+r,p=0===e?s:1===e?c:((b*e+x)*e+w)*e+s):(0,p=e<1e-8?(g=v,w):1-1e-8<e?(g=3*(l-h),3*(c-u)):(g=(3*y*e+2*m)*e+v,(3*b*e+2*x)*e+w),i&&(0===g&&0===p&&(e<1e-8||1-1e-8<e)&&(g=h-a,p=u-o),(d=Math.sqrt(g*g+p*p))&&(g/=d,p/=d)),3===n&&(h=6*y*e+2*m,u=6*b*e+2*x,g=0!==(_=Math.pow(g*g+p*p,1.5))?(g*u-p*h)/_:0,p=0)),2===n?new Z(p,-g):new Z(g,p)}return{statics:{classify:function(t){var e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],h=t[7],u=i*(n-h)+r*(o-e)+e*h-n*o,l=3*(s*(r-n)+a*(e-i)+i*n-r*e),c=l-u,f=c-u+(e*(h-a)+n*(s-o)+o*a-h*s),d=Math.sqrt(f*f+c*c+l*l),_=0!==d?1/d:0,g=H.isZero,p="serpentine";function v(t,e,n){var i=e!==q,r=i&&0<e&&e<1,s=i&&0<n&&n<1;return!i||(r||s)&&("loop"!==t||r&&s)||(r=s=!(t="arch")),{type:t,roots:r||s?r&&s?e<n?[e,n]:[n,e]:[r?e:n]:null}}if(c*=_,l*=_,g(f*=_))return g(c)?v(g(l)?"line":"quadratic"):v(p,l/(3*c));var m=3*c*c-4*f*l;if(g(m))return v("cusp",c/(2*f));var y=0<m?Math.sqrt(m/3):Math.sqrt(-m),w=2*f;return v(0<m?p:"loop",(c+y)/w,(c-y)/w)},getLength:function(t,e,n,i){if(e===q&&(e=0),n===q&&(n=1),X.isStraight(t)){var r=t;n<1&&(r=X.subdivide(r,n)[0],e/=n),0<e&&(r=X.subdivide(r,e)[1]);var s=r[6]-r[0],a=r[7]-r[1];return Math.sqrt(s*s+a*a)}return H.integrate(i||f(t),e,n,d(e,n))},getTimeAt:function(t,e,n){if(n===q&&(n=e<0?1:0),0===e)return n;var i=Math.abs,r=0<e,s=r?n:0,a=r?1:n,o=f(t),h=X.getLength(t,s,a,o),u=i(e)-h;if(i(u)<1e-12)return r?a:s;if(1e-12<u)return null;var l=e/h,c=0;return H.findRoot(function(t){return c+=H.integrate(o,n,t,d(n,t)),n=t,c-e},o,n+l,s,a,32,1e-12)},getPoint:function(t,e){return n(t,e,0,!1)},getTangent:function(t,e){return n(t,e,1,!0)},getWeightedTangent:function(t,e){return n(t,e,1,!1)},getNormal:function(t,e){return n(t,e,2,!0)},getWeightedNormal:function(t,e){return n(t,e,2,!1)},getCurvature:function(t,e){return n(t,e,3,!1).x},getPeaks:function(t){var e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=3*i-e-3*s+t[6],h=3*e-6*i+3*s,u=-3*e+3*i,l=3*r-n-3*a+t[7],c=3*n-6*r+3*a,f=-3*n+3*r,d=[];return H.solveCubic(9*(o*o+l*l),9*(o*h+c*l),2*(h*h+c*c)+3*(u*o+f*l),u*h+c*f,d,1e-8,1-1e-8),d.sort()}}}},new function(){function j(t,e,n,i,r,s,a){var o,h,u=!a&&n.getPrevious()===r,l=!a&&n!==r&&n.getNext()===r;null!==i&&(u?1e-8:0)<=i&&i<=(l?1-1e-8:1)&&null!==s&&(l?1e-8:0)<=s&&s<=(u?1-1e-8:1)&&(o=new K(n,i,null,a),h=new K(r,s,null,a),(o._intersection=h)._intersection=o,e&&!e(o)||K.insert(t,o,!0))}function R(t,e,n,i,r,s,a,o,h,u,l,c,f){if(4096<=++h||40<=++o)return h;var d,_,g=e[0],p=e[1],v=e[6],m=e[7],y=G.getSignedDistance,w=y(g,p,v,m,e[2],e[3]),x=y(g,p,v,m,e[4],e[5]),b=0<w*x?.75:4/9,C=b*Math.min(0,w,x),S=b*Math.max(0,w,x),k=y(g,p,v,m,t[0],t[1]),I=y(g,p,v,m,t[2],t[3]),P=y(g,p,v,m,t[4],t[5]),M=y(g,p,v,m,t[6],t[7]),A=function(t,e,n,i){var r,s=[0,t],a=[1/3,e],o=[2/3,n],h=[1,i],u=e-(2*t+i)/3,l=n-(t+2*i)/3;{var c;r=u*l<0?[[s,a,h],[s,o,h]]:[2<=(c=u/l)?[s,a,h]:c<=.5?[s,o,h]:[s,a,o,h],[s,h]]}return(u||l)<0?r.reverse():r}(k,I,P,M),T=A[0],O=A[1];if(0===w&&0===x&&0===k&&0===I&&0===P&&0===M||null==(d=D(T,O,C,S))||null==(_=D(T.reverse(),O.reverse(),C,S)))return h;var z,E,L,N,B=u+(l-u)*d,F=u+(l-u)*_;return Math.max(f-c,F-B)<1e-9?(E=(B+F)/2,N=(c+f)/2,j(r,s,a?i:n,a?N:E,a?n:i,a?E:N)):(t=X.getPart(t,d,_),z=f-c,h=.8<_-d?z<F-B?(E=(B+F)/2,h=R(e,(L=X.subdivide(t,.5))[0],i,n,r,s,!a,o,h,c,f,B,E),R(e,L[1],i,n,r,s,!a,o,h,c,f,E,F)):(N=(c+f)/2,h=R((L=X.subdivide(e,.5))[0],t,i,n,r,s,!a,o,h,c,N,B,F),R(L[1],t,i,n,r,s,!a,o,h,N,f,B,F)):0==z||1e-9<=z?R(e,t,i,n,r,s,!a,o,h,c,f,B,F):R(t,e,n,i,r,s,a,o,h,B,F,c,f)),h}function D(t,e,n,i){return t[0][1]<n?r(t,!0,n):e[0][1]>i?r(e,!1,i):t[0][0]}function r(t,e,n){for(var i=t[0][0],r=t[0][1],s=1,a=t.length;s<a;s++){var o=t[s][0],h=t[s][1];if(e?n<=h:h<=n)return h===n?o:i+(n-r)*(o-i)/(h-r);i=o,r=h}return null}function C(t,e,n,i,r){var s=H.isZero;if(s(i)&&s(r)){var a=X.getTimeOf(t,new Z(e,n));return null===a?[]:[a]}for(var o=Math.atan2(-r,i),h=Math.sin(o),u=Math.cos(o),l=[],c=[],f=0;f<8;f+=2){var d=t[f]-e,_=t[f+1]-n;l.push(d*u-_*h,d*h+_*u)}return X.solveCubic(l,1,0,c,0,1),c}function x(t,e,n,i,r,s){var a=1e-12,o=Math.min,h=Math.max;if(h(t[0],t[2],t[4],t[6])+a>o(e[0],e[2],e[4],e[6])&&o(t[0],t[2],t[4],t[6])-a<h(e[0],e[2],e[4],e[6])&&h(t[1],t[3],t[5],t[7])+a>o(e[1],e[3],e[5],e[7])&&o(t[1],t[3],t[5],t[7])-a<h(e[1],e[3],e[5],e[7])){var u=S(t,e);if(u)for(var l=0;l<2;l++){var c=u[l];j(r,s,n,c[0],i,c[1],!0)}else{var f=X.isStraight(t),d=X.isStraight(e),_=f&&d,g=f&&!d,p=r.length;if((_?function(t,e,n,i,r,s){var a=G.intersect(t[0],t[1],t[6],t[7],e[0],e[1],e[6],e[7]);a&&j(r,s,n,X.getTimeOf(t,a),i,X.getTimeOf(e,a))}:f||d?function(t,e,n,i,r,s,a){for(var o=e[0],h=e[1],u=C(t,o,h,e[6]-o,e[7]-h),l=0,c=u.length;l<c;l++){var f=u[l],d=X.getPoint(t,f),_=X.getTimeOf(e,d);null!==_&&j(r,s,a?i:n,a?_:f,a?n:i,a?f:_)}}:R)(g?e:t,g?t:e,g?i:n,g?n:i,r,s,g,0,0,0,1,0,1),!_||r.length===p)for(l=0;l<4;l++){var v=l>>1,m=1&l,y=6*v,w=6*m,x=new Z(t[y],t[1+y]),b=new Z(e[w],e[1+w]);x.isClose(b,a)&&j(r,s,n,v,i,m)}}}return r}function b(t,e,n,i){var r,s=X.classify(t);return"loop"===s.type&&j(n,i,e,(r=s.roots)[0],e,r[1]),n}function S(t,e){function n(t){var e=t[6]-t[0],n=t[7]-t[1];return e*e+n*n}var i=Math.abs,r=G.getDistance,s=1e-7,a=X.isStraight(t),o=X.isStraight(e),h=a&&o,u=n(t)<n(e),l=u?e:t,c=u?t:e,f=l[0],d=l[1],_=l[6]-f,g=l[7]-d;if(r(f,d,_,g,c[0],c[1],!0)<s&&r(f,d,_,g,c[6],c[7],!0)<s)!h&&r(f,d,_,g,l[2],l[3],!0)<s&&r(f,d,_,g,l[4],l[5],!0)<s&&r(f,d,_,g,c[2],c[3],!0)<s&&r(f,d,_,g,c[4],c[5],!0)<s&&(a=o=h=!0);else if(h)return null;if(a^o)return null;for(var p,v,m=[t,e],y=[],w=0;w<4&&y.length<2;w++){var x,b=1&w,C=1^b,S=w>>1,k=X.getTimeOf(m[b],new Z(m[C][S?6:0],m[C][S?7:1]));if(null!=k&&(x=b?[S,k]:[k,S],(!y.length||1e-8<i(x[0]-y[0][0])&&1e-8<i(x[1]-y[0][1]))&&y.push(x)),2<w&&!y.length)break}return 2!==y.length?y=null:h||(p=X.getPart(t,y[0][0],y[1][0]),(i((v=X.getPart(e,y[0][1],y[1][1]))[2]-p[2])>s||i(v[3]-p[3])>s||i(v[4]-p[4])>s||i(v[5]-p[5])>s)&&(y=null)),y}return{getIntersections:function(t){var e=this.getValues(),n=t&&t!==this&&t.getValues();return n?x(e,n,this,t,[]):b(e,this,[])},statics:{getOverlaps:S,getIntersections:function(t,e,n,i,r,s){var a=!e;a&&(e=t);for(var o=t.length,h=e.length,u=new Array(o),l=a?u:new Array(h),c=[],f=0;f<o;f++)u[f]=t[f].getValues(i);if(!a)for(f=0;f<h;f++)l[f]=e[f].getValues(r);for(var d=V.findCurveBoundsCollisions(u,l,1e-7),_=0;_<o;_++){var g=t[_],p=u[_];a&&b(p,g,c,n);var v=d[_];if(v)for(var m=0;m<v.length;m++){if(s&&c.length)return c;var y,w=v[m];(!a||_<w)&&(y=e[w],x(p,l[w],g,y,c,n))}}return c},getCurveLineIntersections:C,getTimesWithTangent:function(t,e){var n,i,r,s,a,o,h=t[0],u=t[1],l=t[2],c=t[3],f=t[4],d=t[5],_=t[6],g=t[7],p=e.normalize(),v=p.x,m=p.y,y=3*_-9*f+9*l-3*h,w=3*g-9*d+9*c-3*u,x=6*f-12*l+6*h,b=6*d-12*c+6*u,C=3*l-3*h,S=3*c-3*u,k=2*y*m-2*w*v,I=[];return Math.abs(k)<H.CURVETIME_EPSILON?0==(k=y*b-w*x)||0<=(n=-(y*S-w*C)/k)&&n<=1&&I.push(n):(r=x*m-b*v,0<=(i=(x*x-4*y*C)*m*m+(-2*x*b+4*w*C+4*y*S)*v*m+(b*b-4*w*S)*v*v)&&0!=k&&(o=(-r+(s=Math.sqrt(i)))/k,0<=(a=-(r+s)/k)&&a<=1&&I.push(a),0<=o&&o<=1&&I.push(o))),I}}}}),K=U.extend({_class:"CurveLocation",initialize:function(t,e,n,i,r){var s;.99999999<=e&&((s=t.getNext())&&(e=0,t=s)),this._setCurve(t),this._time=e,this._point=n||t.getPointAtTime(e),this._overlap=i,this._distance=r,this._intersection=this._next=this._previous=null},_setPath:function(t){this._path=t,this._version=t?t._version:0},_setCurve:function(t){this._setPath(t._path),this._curve=t,this._segment=null,this._segment1=t._segment1,this._segment2=t._segment2},_setSegment:function(t){var e=t.getCurve();e?this._setCurve(e):(this._setPath(t._path),this._segment1=t,this._segment2=null),this._segment=t,this._time=t===this._segment1?0:1,this._point=t._point.clone()},getSegment:function(){var t,e,n=this._segment;return n||(t=this.getCurve(),0===(e=this.getTime())?n=t._segment1:1===e?n=t._segment2:null!=e&&(n=t.getPartLength(0,e)<t.getPartLength(e,1)?t._segment1:t._segment2),this._segment=n),n},getCurve:function(){var t=this._path,n=this;function e(t){var e=t&&t.getCurve();if(e&&null!=(n._time=e.getTimeOf(n._point)))return n._setCurve(e),e}return t&&t._version!==this._version&&(this._time=this._offset=this._curveOffset=this._curve=null),this._curve||e(this._segment)||e(this._segment1)||e(this._segment2.getPrevious())},getPath:function(){var t=this.getCurve();return t&&t._path},getIndex:function(){var t=this.getCurve();return t&&t.getIndex()},getTime:function(){var t=this.getCurve(),e=this._time;return t&&null==e?this._time=t.getTimeOf(this._point):e},getParameter:"#getTime",getPoint:function(){return this._point},getOffset:function(){var t=this._offset;if(null==t){t=0;var e=this.getPath(),n=this.getIndex();if(e&&null!=n)for(var i=e.getCurves(),r=0;r<n;r++)t+=i[r].getLength();this._offset=t+=this.getCurveOffset()}return t},getCurveOffset:function(){var t,e,n=this._curveOffset;return null==n&&(t=this.getCurve(),e=this.getTime(),this._curveOffset=n=null!=e&&t&&t.getPartLength(0,e)),n},getIntersection:function(){return this._intersection},getDistance:function(){return this._distance},divide:function(){var t=this.getCurve(),e=t&&t.divideAtTime(this.getTime());return e&&this._setSegment(e._segment1),e},split:function(){var t=this.getCurve(),e=t._path,n=t&&t.splitAtTime(this.getTime());return n&&this._setSegment(e.getLastSegment()),n},equals:function(t,e){var n,i,r,s,a,o,h,u=this===t;return!u&&t instanceof K&&(n=this.getCurve(),i=t.getCurve(),(r=n._path)===i._path&&(a=(s=Math.abs)(this.getOffset()-t.getOffset()),o=!e&&this._intersection,h=!e&&t._intersection,u=(a<1e-7||r&&s(r.getLength()-a)<1e-7)&&(!o&&!h||o&&h&&o.equals(h,!0)))),u},toString:function(){var t=[],e=this.getPoint(),n=b.instance;e&&t.push("point: "+e);var i=this.getIndex();null!=i&&t.push("index: "+i);var r=this.getTime();return null!=r&&t.push("time: "+n.number(r)),null!=this._distance&&t.push("distance: "+n.number(this._distance)),"{ "+t.join(", ")+" }"},isTouching:function(){var t=this._intersection;if(t&&this.getTangent().isCollinear(t.getTangent())){var e=this.getCurve(),n=t.getCurve();return!(e.isStraight()&&n.isStraight()&&e.getLine().intersect(n.getLine()))}return!1},isCrossing:function(){var t=this._intersection;if(!t)return!1;var e=this.getTime(),n=t.getTime(),i=1e-8,r=1-i,s=i<=e&&e<=r,a=i<=n&&n<=r;if(s&&a)return!this.isTouching();var o=this.getCurve(),h=o&&e<i?o.getPrevious():o,u=t.getCurve(),l=u&&n<i?u.getPrevious():u;if(r<e&&(o=o.getNext()),r<n&&(u=u.getNext()),!(h&&o&&l&&u))return!1;var c=[];function f(t,e){var n=t.getValues(),i=X.classify(n).roots||X.getPeaks(n),r=i.length,s=X.getLength(n,e&&r?i[r-1]:0,!e&&r?i[0]:1);c.push(r?s:s/32)}function d(t,e,n){return e<n?e<t&&t<n:e<t||t<n}s||(f(h,!0),f(o,!1)),a||(f(l,!0),f(u,!1));var _=this.getPoint(),g=Math.min.apply(Math,c),p=s?o.getTangentAtTime(e):o.getPointAt(g).subtract(_),v=s?p.negate():h.getPointAt(-g).subtract(_),m=a?u.getTangentAtTime(n):u.getPointAt(g).subtract(_),y=a?m.negate():l.getPointAt(-g).subtract(_),w=v.getAngle(),x=p.getAngle(),b=y.getAngle(),C=m.getAngle();return!!(s?d(w,b,C)^d(x,b,C)&&d(w,C,b)^d(x,C,b):d(b,w,x)^d(C,w,x)&&d(b,x,w)^d(C,x,w))},hasOverlap:function(){return!!this._overlap}},U.each(X._evaluateMethods,function(t){var n=t+"At";this[t]=function(){var t=this.getCurve(),e=this.getTime();return null!=e&&t&&t[n](e,!0)}},{preserve:!0}),new function(){function i(r,s,t){var a=r.length,e=0,n=a-1;function i(t,e){for(var n=t+e;-1<=n&&n<=a;n+=e){var i=r[(n%a+a)%a];if(!s.getPoint().isClose(i.getPoint(),1e-7))break;if(s.equals(i))return i}return null}for(;e<=n;){var o,h=e+n>>>1,u=r[h];if(t&&(o=s.equals(u)?u:i(h,-1)||i(h,1)))return s._overlap&&(o._overlap=o._intersection._overlap=!0),o;var l=s.getPath(),c=u.getPath();(l!==c?l._id-c._id:s.getIndex()+s.getTime()-(u.getIndex()+u.getTime()))<0?n=h-1:e=1+h}return r.splice(e,0,s),s}return{statics:{insert:i,expand:function(t){for(var e=t.slice(),n=t.length-1;0<=n;n--)i(e,t[n]._intersection,!1);return e}}}}),z=D.extend({_class:"PathItem",_selectBounds:!1,_canScaleStroke:!0,beans:!0,initialize:function(){},statics:{create:function(t){var e,n,i,r;return U.isPlainObject(t)?(n=t.segments,e=t.pathData):Array.isArray(t)?n=t:"string"==typeof t&&(e=t),n?r=(i=n[0])&&Array.isArray(i[0]):e&&(r=1<(e.match(/m/gi)||[]).length||/z\s*\S+/i.test(e)),new(r?Y:Q)(t)}},_asPathItem:function(){return this},isClockwise:function(){return 0<=this.getArea()},setClockwise:function(t){this.isClockwise()!=(t=!!t)&&this.reverse()},setPathData:function(t){var e,n,i=t&&t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi),r=!1,s=new Z,a=new Z;function o(t,e){var n=+c[t];return r&&(n+=s[e]),n}function h(t){return new Z(o(t,"x"),o(t+1,"y"))}this.clear();for(var u=0,l=i&&i.length;u<l;u++){var c,f=i[u],d=f[0],_=d.toLowerCase(),g=(c=f.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g))&&c.length,r=d===_;switch("z"!==e||/[mz]/.test(_)||this.moveTo(s),_){case"m":case"l":for(var p="m"===_,v=0;v<g;v+=2)this[p?"moveTo":"lineTo"](s=h(v)),p&&(a=s,p=!1);n=s;break;case"h":case"v":for(var m="h"===_?"x":"y",s=s.clone(),v=0;v<g;v++)s[m]=o(v,m),this.lineTo(s);n=s;break;case"c":for(v=0;v<g;v+=6)this.cubicCurveTo(h(v),n=h(v+2),s=h(v+4));break;case"s":for(v=0;v<g;v+=4)this.cubicCurveTo(/[cs]/.test(e)?s.multiply(2).subtract(n):s,n=h(v),s=h(v+2)),e=_;break;case"q":for(v=0;v<g;v+=4)this.quadraticCurveTo(n=h(v),s=h(v+2));break;case"t":for(v=0;v<g;v+=2)this.quadraticCurveTo(n=/[qt]/.test(e)?s.multiply(2).subtract(n):s,s=h(v)),e=_;break;case"a":for(v=0;v<g;v+=7)this.arcTo(s=h(v+5),new W(+c[v],+c[v+1]),+c[v+2],+c[v+4],+c[v+3]);break;case"z":this.closePath(1e-12),s=a}e=_}},_canComposite:function(){return!(this.hasFill()&&this.hasStroke())},_contains:function(t){var e=t.isInside(this.getBounds({internal:!0,handle:!0}))?this._getWinding(t):{};return e.onPath||!!("evenodd"===this.getFillRule()?1&e.windingL||1&e.windingR:e.winding)},getIntersections:function(t,e,n,i){var r=this===t||!t,s=this._matrix._orNullIfIdentity(),a=r?s:(n||t._matrix)._orNullIfIdentity();return r||this.getBounds(s).intersects(t.getBounds(a),1e-12)?X.getIntersections(this.getCurves(),!r&&t.getCurves(),e,s,a,i):[]},getCrossings:function(t){return this.getIntersections(t,function(t){return t.isCrossing()})},getNearestLocation:function(){for(var t=Z.read(arguments),e=this.getCurves(),n=1/0,i=null,r=0,s=e.length;r<s;r++){var a=e[r].getNearestLocation(t);a._distance<n&&(n=a._distance,i=a)}return i},getNearestPoint:function(){var t=this.getNearestLocation.apply(this,arguments);return t?t.getPoint():t},interpolate:function(t,e,n){var i=!this._children,r=i?"_segments":"_children",s=t[r],a=e[r],o=this[r];if(!s||!a||s.length!==a.length)throw new Error("Invalid operands in interpolate() call: "+t+", "+e);var h=o.length,u=a.length;if(h<u)for(var l=i?J:Q,c=h;c<u;c++)this.add(new l);else u<h&&this[i?"removeSegments":"removeChildren"](u,h);for(c=0;c<u;c++)o[c].interpolate(s[c],a[c],n);i&&(this.setClosed(t._closed),this._changed(9))},compare:function(t){var e=!1;if(t){var n=this._children||[this],i=t._children?t._children.slice():[t],r=n.length,s=i.length,a=[],o=0;e=!0;for(var h=V.findItemBoundsCollisions(n,i,H.GEOMETRIC_EPSILON),u=r-1;0<=u&&e;u--){var l=n[u],e=!1,c=h[u];if(c)for(var f=c.length-1;0<=f&&!e;f--)l.compare(i[c[f]])&&(a[c[f]]||(a[c[f]]=!0,o++),e=!0)}e=e&&o===s}return e}}),Q=z.extend({_class:"Path",_serializeFields:{segments:[],closed:!1},initialize:function(t){this._closed=!1,this._segments=[],this._version=0;var e=arguments,n=Array.isArray(t)?"object"==typeof t[0]?t:e:!t||t.size!==q||t.x===q&&t.point===q?null:e;n&&0<n.length?this.setSegments(n):(this._curves=q,this._segmentSelection=0,n||"string"!=typeof t||(this.setPathData(t),t=null)),this._initialize(!n&&t)},_equals:function(t){return this._closed===t._closed&&U.equals(this._segments,t._segments)},copyContent:function(t){this.setSegments(t._segments),this._closed=t._closed},_changed:function t(e){if(t.base.call(this,e),8&e){if(this._length=this._area=q,32&e)this._version++;else if(this._curves)for(var n=0,i=this._curves.length;n<i;n++)this._curves[n]._changed()}else 64&e&&(this._bounds=q)},getStyle:function(){var t=this._parent;return(t instanceof Y?t:this)._style},getSegments:function(){return this._segments},setSegments:function(t){var e,n=this.isFullySelected(),i=t&&t.length;this._segments.length=0,this._segmentSelection=0,this._curves=q,i&&("boolean"==typeof(e=t[i-1])&&(this.setClosed(e),i--),this._add(J.readList(t,0,{},i))),n&&this.setFullySelected(!0)},getFirstSegment:function(){return this._segments[0]},getLastSegment:function(){return this._segments[this._segments.length-1]},getCurves:function(){var t=this._curves,e=this._segments;if(!t)for(var n=this._countCurves(),t=this._curves=new Array(n),i=0;i<n;i++)t[i]=new X(this,e[i],e[i+1]||e[0]);return t},getFirstCurve:function(){return this.getCurves()[0]},getLastCurve:function(){var t=this.getCurves();return t[t.length-1]},isClosed:function(){return this._closed},setClosed:function(t){var e;this._closed!=(t=!!t)&&(this._closed=t,this._curves&&(e=this._curves.length=this._countCurves(),t&&(this._curves[e-1]=new X(this,this._segments[e-1],this._segments[0]))),this._changed(41))}},{beans:!0,getPathData:function(r,t){var s,a,o,h,u,l,c,f,e=this._segments,n=e.length,d=new b(t),_=new Array(6),g=!0,p=[];function i(t,e){var n,i;t._transformCoordinates(r,_),s=_[0],a=_[1],g?(p.push("M"+d.pair(s,a)),g=!1):(u=_[2],l=_[3],u===s&&l===a&&c===o&&f===h?e||(n=s-o,i=a-h,p.push(0==n?"v"+d.number(i):0==i?"h"+d.number(n):"l"+d.pair(n,i))):p.push("c"+d.pair(c-o,f-h)+" "+d.pair(u-o,l-h)+" "+d.pair(s-o,a-h))),o=s,h=a,c=_[4],f=_[5]}if(!n)return"";for(var v=0;v<n;v++)i(e[v]);return this._closed&&0<n&&(i(e[0],!0),p.push("z")),p.join("")},isEmpty:function(){return!this._segments.length},_transformContent:function(t){for(var e=this._segments,n=new Array(6),i=0,r=e.length;i<r;i++)e[i]._transformCoordinates(t,n,!0);return!0},_add:function(t,e){for(var n=this._segments,i=this._curves,r=t.length,s=null==e,e=s?n.length:e,a=0;a<r;a++){var o=t[a];o._path&&(o=t[a]=o.clone()),o._path=this,o._index=e+a,o._selection&&this._updateSelection(o,0,o._selection)}if(s)U.push(n,t);else{n.splice.apply(n,[e,0].concat(t));for(var a=e+r,h=n.length;a<h;a++)n[a]._index=a}if(i){var u=this._countCurves(),l=0<e&&e+r-1===u?e-1:e,c=l,f=Math.min(l+r,u);t._curves&&(i.splice.apply(i,[l,0].concat(t._curves)),c+=t._curves.length);for(a=c;a<f;a++)i.splice(a,0,new X(this,null,null));this._adjustCurves(l,f)}return this._changed(41),t},_adjustCurves:function(t,e){for(var n,i=this._segments,r=this._curves,s=t;s<e;s++)(n=r[s])._path=this,n._segment1=i[s],n._segment2=i[s+1]||i[0],n._changed();(n=r[this._closed&&!t?i.length-1:t-1])&&(n._segment2=i[t]||i[0],n._changed()),(n=r[e])&&(n._segment1=i[e],n._changed())},_countCurves:function(){var t=this._segments.length;return!this._closed&&0<t?t-1:t},add:function(t){var e=arguments;return 1<e.length&&"number"!=typeof t?this._add(J.readList(e)):this._add([J.read(e)])[0]},insert:function(t,e){var n=arguments;return 2<n.length&&"number"!=typeof e?this._add(J.readList(n,1),t):this._add([J.read(n,1)],t)[0]},addSegment:function(){return this._add([J.read(arguments)])[0]},insertSegment:function(t){return this._add([J.read(arguments,1)],t)[0]},addSegments:function(t){return this._add(J.readList(t))},insertSegments:function(t,e){return this._add(J.readList(e),t)},removeSegment:function(t){return this.removeSegments(t,t+1)[0]||null},removeSegments:function(t,e,n){t=t||0,e=U.pick(e,this._segments.length);var i=this._segments,r=this._curves,s=i.length,a=i.splice(t,e-t),o=a.length;if(!o)return a;for(var h=0;h<o;h++){var u=a[h];u._selection&&this._updateSelection(u,u._selection,0),u._index=u._path=null}for(var h=t,l=i.length;h<l;h++)i[h]._index=h;if(r){for(var c=0<t&&e===s+(this._closed?1:0)?t-1:t,h=(r=r.splice(c,o)).length-1;0<=h;h--)r[h]._path=null;n&&(a._curves=r.slice(1)),this._adjustCurves(c,c)}return this._changed(41),a},clear:"#removeSegments",hasHandles:function(){for(var t=this._segments,e=0,n=t.length;e<n;e++)if(t[e].hasHandles())return!0;return!1},clearHandles:function(){for(var t=this._segments,e=0,n=t.length;e<n;e++)t[e].clearHandles()},getLength:function(){if(null==this._length){for(var t=this.getCurves(),e=0,n=0,i=t.length;n<i;n++)e+=t[n].getLength();this._length=e}return this._length},getArea:function(){if(null==(n=this._area)){for(var t=this._segments,e=this._closed,n=0,i=0,r=t.length;i<r;i++){var s=i+1===r;n+=X.getArea(X.getValues(t[i],t[s?0:i+1],null,s&&!e))}this._area=n}return n},isFullySelected:function(){var t=this._segments.length;return this.isSelected()&&0<t&&this._segmentSelection===7*t},setFullySelected:function(t){t&&this._selectSegments(!0),this.setSelected(t)},setSelection:function t(e){1&e||this._selectSegments(!1),t.base.call(this,e)},_selectSegments:function(t){var e=this._segments,n=e.length,i=t?7:0;this._segmentSelection=i*n;for(var r=0;r<n;r++)e[r]._selection=i},_updateSelection:function(t,e,n){t._selection=n,0<(this._segmentSelection+=n-e)&&this.setSelected(!0)},divideAt:function(t){var e,n=this.getLocationAt(t);return n&&(e=n.getCurve().divideAt(n.getCurveOffset()))?e._segment1:null},splitAt:function(t){var e=this.getLocationAt(t),n=e&&e.index,i=e&&e.time;1-1e-8<i&&(n++,i=0);var r=this.getCurves();if(0<=n&&n<r.length){1e-8<=i&&r[n++].divideAtTime(i);var s,a=this.removeSegments(n,this._segments.length,!0);return this._closed?(this.setClosed(!1),s=this):((s=new Q(D.NO_INSERT)).insertAbove(this),s.copyAttributes(this)),s._add(a,0),this.addSegment(a[0]),s}return null},split:function(t,e){var n,i=e===q?t:(n=this.getCurves()[t])&&n.getLocationAtTime(e);return null!=i?this.splitAt(i):null},join:function(t,e){var n=e||0;if(t&&t!==this){var i=t._segments,r=this.getLastSegment(),s=t.getLastSegment();if(!s)return this;r&&r._point.isClose(s._point,n)&&t.reverse();var a,o=t.getFirstSegment();r&&r._point.isClose(o._point,n)?(r.setHandleOut(o._handleOut),this._add(i.slice(1))):((a=this.getFirstSegment())&&a._point.isClose(o._point,n)&&t.reverse(),s=t.getLastSegment(),a&&a._point.isClose(s._point,n)?(a.setHandleIn(s._handleIn),this._add(i.slice(0,i.length-1),0)):this._add(i.slice())),t._closed&&this._add([i[0]]),t.remove()}var h=this.getFirstSegment(),u=this.getLastSegment();return h!==u&&h._point.isClose(u._point,n)&&(h.setHandleIn(u._handleIn),u.remove(),this.setClosed(!0)),this},reduce:function(t){for(var e=this.getCurves(),n=t&&t.simplify,i=n?1e-7:0,r=e.length-1;0<=r;r--){var s=e[r];!s.hasHandles()&&(!s.hasLength(i)||n&&s.isCollinear(s.getNext()))&&s.remove()}return this},reverse:function(){this._segments.reverse();for(var t=0,e=this._segments.length;t<e;t++){var n=this._segments[t],i=n._handleIn;n._handleIn=n._handleOut,n._handleOut=i,n._index=t}this._curves=null,this._changed(9)},flatten:function(t){for(var e=new m(this,t||.25,256,!0).parts,n=e.length,i=[],r=0;r<n;r++)i.push(new J(e[r].curve.slice(0,2)));!this._closed&&0<n&&i.push(new J(e[n-1].curve.slice(6))),this.setSegments(i)},simplify:function(t){var e=new i(this).fit(t||2.5);return e&&this.setSegments(e),!!e},smooth:function(t){var r=this,e=t||{},n=e.type||"asymmetric",i=this._segments,s=i.length,a=this._closed;function o(t,e){var n=t&&t.index;if(null!=n){var i=t.path;if(i&&i!==r)throw new Error(t._class+" "+n+" of "+i+" is not part of "+r);e&&t instanceof X&&n++}else n="number"==typeof t?t:e;return Math.min(n<0&&a?n%s:n<0?n+s:n,s-1)}var h,u=a&&e.from===q&&e.to===q,l=o(e.from,0),c=o(e.to,s-1);if(c<l&&(a?l-=s:(h=l,l=c,c=h)),/^(?:asymmetric|continuous)$/.test(n)){var f="asymmetric"===n,d=Math.min,_=c-l+1,g=_-1,p=u?d(_,4):1,v=p,m=p,y=[];if(a||(v=d(1,l),m=d(1,s-c-1)),(g+=v+m)<=1)return;for(var w=0,x=l-v;w<=g;w++,x++)y[w]=i[(x<0?x+s:x)%s]._point;for(var b=g-1,C=[L=y[0]._x+2*y[1]._x],S=[N=y[0]._y+2*y[1]._y],k=[E=2],I=[],P=[],w=1;w<g;w++)var M=w<b,A=M?4:f?2:7,T=M?4:f?3:8,O=M?2:f?0:1,z=(M||f?1:2)/E,E=k[w]=A-z,L=C[w]=T*y[w]._x+O*y[w+1]._x-z*L,N=S[w]=T*y[w]._y+O*y[w+1]._y-z*N;I[b]=C[b]/k[b],P[b]=S[b]/k[b];for(w=g-2;0<=w;w--)I[w]=(C[w]-I[w+1])/k[w],P[w]=(S[w]-P[w+1])/k[w];I[g]=(3*y[g]._x-I[b])/2,P[g]=(3*y[g]._y-P[b])/2;for(var w=v,B=g-m,x=l;w<=B;w++,x++){var F=i[x<0?x+s:x],j=F._point,R=I[w]-j._x,D=P[w]-j._y;(u||w<B)&&F.setHandleOut(R,D),(u||v<w)&&F.setHandleIn(-R,-D)}}else for(w=l;w<=c;w++)i[w<0?w+s:w].smooth(e,!u&&w===l,!u&&w===c)},toShape:function(t){if(!this._closed)return null;var e,n,i,r,s,a,o,u=this._segments;function h(t,e){var n=u[t],i=n.getNext(),r=u[e],s=r.getNext();return n._handleOut.isZero()&&i._handleIn.isZero()&&r._handleOut.isZero()&&s._handleIn.isZero()&&i._point.subtract(n._point).isCollinear(s._point.subtract(r._point))}function l(t){var e=u[t],n=e.getNext(),i=e._handleOut,r=n._handleIn,s=.5522847498307936;if(i.isOrthogonal(r)){var a=e._point,o=n._point,h=new G(a,i,!0).intersect(new G(o,r,!0),!0);return h&&H.isZero(i.getLength()/h.subtract(a).getLength()-s)&&H.isZero(r.getLength()/h.subtract(o).getLength()-s)}}function c(t,e){return u[t]._point.getDistance(u[e]._point)}if(!this.hasHandles()&&4===u.length&&h(0,2)&&h(1,3)&&(s=u[1],a=s.getPrevious(),o=s.getNext(),a._handleOut.isZero()&&s._handleIn.isZero()&&s._handleOut.isZero()&&o._handleIn.isZero()&&s._point.subtract(a._point).isOrthogonal(o._point.subtract(s._point)))?(e=k.Rectangle,n=new W(c(0,3),c(0,1)),r=u[1]._point.add(u[2]._point).divide(2)):8===u.length&&l(0)&&l(2)&&l(4)&&l(6)&&h(1,5)&&h(3,7)?(e=k.Rectangle,i=(n=new W(c(1,6),c(0,3))).subtract(new W(c(0,7),c(1,2))).divide(2),r=u[3]._point.add(u[4]._point).divide(2)):4===u.length&&l(0)&&l(1)&&l(2)&&l(3)&&(i=H.isZero(c(0,2)-c(1,3))?(e=k.Circle,c(0,2)/2):(e=k.Ellipse,new W(c(2,0)/2,c(3,1)/2)),r=u[1]._point),e){var f=this.getPosition(!0),d=new e({center:f,size:n,radius:i,insert:!1});return d.copyAttributes(this,!0),d._matrix.prepend(this._matrix),d.rotate(r.subtract(f).getAngle()+90),t!==q&&!t||d.insertAbove(this),d}return null},toPath:"#clone",compare:function t(e){if(!e||e instanceof Y)return t.base.call(this,e);var n=this.getCurves(),i=e.getCurves(),r=n.length,s=i.length;if(!r||!s)return r==s;for(var a,o,h=n[0].getValues(),u=[],l=0,c=0,f=0;f<s;f++){var d=i[f].getValues();if(u.push(d),g=X.getOverlaps(h,d)){a=!f&&0<g[0][0]?s-1:f,o=g[0][1];break}}for(var _,g,p=Math.abs,d=u[a];h&&d;){if(g=X.getOverlaps(h,d))if(p(g[0][0]-c)<1e-8){1===(c=g[1][0])&&(h=++l<r?n[l].getValues():null,c=0);var v=g[0][1];if(p(v-o)<1e-8){if(_=_||[a,v],1===(o=g[1][1])&&(++a>=s&&(a=0),d=u[a]||i[a].getValues(),o=0),!h)return _[0]===a&&_[1]===o;continue}}break}return!1},_hitTestSelf:function(i,r,t,s){var a,o,h,u,e,n,l,c=this,f=this.getStyle(),d=this._segments,_=d.length,g=this._closed,p=r._tolerancePadding,v=p,m=r.stroke&&f.hasStroke(),y=r.fill&&f.hasFill(),w=r.curves,x=m?f.getStrokeWidth()/2:y&&0<r.tolerance||w?0:null;function b(t,e){return i.subtract(t).divide(e).length<=1}function C(t,e,n){if(!r.selected||e.isSelected()){var i=t._point;if(e!==i&&(e=e.add(i)),b(e,v))return new O(n,c,{segment:t,point:e})}}function S(t,e){return(e||r.segments)&&C(t,t._point,"segment")||!e&&r.handles&&(C(t,t._handleIn,"handle-in")||C(t,t._handleOut,"handle-out"))}function k(t){u.add(t)}function I(t){var e,n=g||0<t._index&&t._index<_-1;return"round"===(n?a:o)?b(t._point,v):(u=new Q({internal:!0,closed:!0}),n?t.isSmooth()||Q._addBevelJoin(t,a,x,h,null,s,k,!0):"square"===o&&Q._addSquareCap(t,o,x,null,s,k,!0),!u.isEmpty()&&(u.contains(i)||(e=u.getNearestLocation(i))&&b(e.getPoint(),p)))}if(null!==x&&(0<x?(a=f.getStrokeJoin(),o=f.getStrokeCap(),h=f.getMiterLimit(),v=v.add(Q._getStrokePadding(x,s))):a=o="round"),!r.ends||r.segments||g){if(r.segments||r.handles)for(var P=0;P<_;P++)if(e=S(d[P]))return e}else if(e=S(d[0],!0)||S(d[_-1],!0))return e;if(null!==x&&((l=this.getNearestLocation(i))&&(0===(n=l.getTime())||1===n&&1<_?I(l.getSegment())||(l=null):b(l.getPoint(),v)||(l=null)),!l&&"miter"===a&&1<_))for(P=0;P<_;P++){var M=d[P];if(i.getDistance(M._point)<=h*x&&I(M)){l=M.getLocation();break}}return!l&&y&&this._contains(i)||l&&!m&&!w?new O("fill",this):l?new O(m?"stroke":"curve",this,{location:l,point:l.getPoint()}):null}},U.each(X._evaluateMethods,function(n){this[n+"At"]=function(t){var e=this.getLocationAt(t);return e&&e[n]()}},{beans:!1,getLocationOf:function(){for(var t=Z.read(arguments),e=this.getCurves(),n=0,i=e.length;n<i;n++){var r=e[n].getLocationOf(t);if(r)return r}return null},getOffsetOf:function(){var t=this.getLocationOf.apply(this,arguments);return t?t.getOffset():null},getLocationAt:function(t){if("number"==typeof t){for(var e=this.getCurves(),n=0,i=0,r=e.length;i<r;i++){var s=n,a=e[i];if(t<(n+=a.getLength()))return a.getLocationAt(t-s)}if(0<e.length&&t<=this.getLength())return new K(e[e.length-1],1)}else if(t&&t.getPath&&t.getPath()===this)return t;return null},getOffsetsWithTangent:function(){var t=Z.read(arguments);if(t.isZero())return[];for(var e=[],n=0,i=this.getCurves(),r=0,s=i.length;r<s;r++){for(var a=i[r],o=a.getTimesWithTangent(t),h=0,u=o.length;h<u;h++){var l=n+a.getOffsetAtTime(o[h]);e.indexOf(l)<0&&e.push(l)}n+=a.length}return e}}),new function(){function v(i,t,r){var s,a,o,h,u,l,c,f,e=t._segments,n=e.length,d=new Array(6),_=!0;function g(t){var e,n;a=r?(t._transformCoordinates(r,d),s=d[0],d[1]):(e=t._point,s=e._x,e._y),_?(i.moveTo(s,a),_=!1):(l=r?(u=d[2],d[3]):(n=t._handleIn,u=s+n._x,a+n._y),u===s&&l===a&&c===o&&f===h?i.lineTo(s,a):i.bezierCurveTo(c,f,u,l,s,a)),o=s,h=a,f=r?(c=d[4],d[5]):(n=t._handleOut,c=o+n._x,h+n._y)}for(var p=0;p<n;p++)g(e[p]);t._closed&&0<n&&g(e[0])}return{_draw:function(t,e,n,i){var r=e.dontStart,s=e.dontFinish||e.clip,a=this.getStyle(),o=a.hasFill(),h=a.hasStroke(),u=a.getDashArray(),l=!at.support.nativeDash&&h&&u&&u.length;function c(t){return u[(t%l+l)%l]}if(r||t.beginPath(),(o||h&&!l||s)&&(v(t,this,i),this._closed&&t.closePath()),!s&&(o||h)&&(this._setStyles(t,e,n),o&&(t.fill(a.getFillRule()),t.shadowColor="rgba(0,0,0,0)"),h)){if(l){r||t.beginPath();for(var f,d=new m(this,.25,32,!1,i),_=d.length,g=-a.getDashOffset(),p=0;0<g;)g-=c(p--)+c(p--);for(;g<_;)f=g+c(p++),(0<g||0<f)&&d.drawPart(t,Math.max(g,0),Math.max(f,0)),g=f+c(p++)}t.stroke()}},_drawSelected:function(t,e){t.beginPath(),v(t,this,e),t.stroke(),function(i,t,e,n){if(!(n<=0))for(var r,s,a=n/2,o=n-2,h=a-1,u=new Array(6),l=0,c=t.length;l<c;l++){var f,d=t[l],_=d._selection;d._transformCoordinates(e,u),r=u[0],s=u[1],2&_&&g(2),4&_&&g(4),i.fillRect(r-a,s-a,n,n),0<o&&!(1&_)&&(f=i.fillStyle,i.fillStyle="#ffffff",i.fillRect(r-h,s-h,o,o),i.fillStyle=f)}function g(t){var e=u[t],n=u[t+1];r==e&&s==n||(i.beginPath(),i.moveTo(r,s),i.lineTo(e,n),i.stroke(),i.beginPath(),i.arc(e,n,a,0,2*Math.PI,!0),i.fill())}}(t,this._segments,e,at.settings.handleSize)}}},new function(){function V(t){var e=t._segments;if(!e.length)throw new Error("Use a moveTo() command first");return e[e.length-1]}return{moveTo:function(){var t=this._segments;1===t.length&&this.removeSegment(0),t.length||this._add([new J(Z.read(arguments))])},moveBy:function(){throw new Error("moveBy() is unsupported on Path items.")},lineTo:function(){this._add([new J(Z.read(arguments))])},cubicCurveTo:function(){var t=arguments,e=Z.read(t),n=Z.read(t),i=Z.read(t),r=V(this);r.setHandleOut(e.subtract(r._point)),this._add([new J(i,n.subtract(i))])},quadraticCurveTo:function(){var t=arguments,e=Z.read(t),n=Z.read(t),i=V(this)._point;this.cubicCurveTo(e.add(i.subtract(e).multiply(1/3)),e.add(n.subtract(e).multiply(1/3)),n)},curveTo:function(){var t=arguments,e=Z.read(t),n=Z.read(t),i=U.pick(U.read(t),.5),r=1-i,s=V(this)._point,a=e.subtract(s.multiply(r*r)).subtract(n.multiply(i*i)).divide(2*i*r);if(a.isNaN())throw new Error("Cannot put a curve through points with parameter = "+i);this.quadraticCurveTo(a,n)},arcTo:function(){var t,e,n,i=arguments,r=Math.abs,s=Math.sqrt,a=V(this),o=a._point,h=Z.read(i),u=U.peek(i);if("boolean"==typeof(_=U.pick(u,!0)))var l=(p=o.add(h).divide(2)).add(p.subtract(o).rotate(_?-90:90));else if(U.remain(i)<=2)l=h,h=Z.read(i);else if(!o.equals(h)){var c=W.read(i),f=H.isZero;if(f(c.width)||f(c.height))return this.lineTo(h);var d=U.read(i),_=!!U.read(i),g=!!U.read(i),p=o.add(h).divide(2),v=(D=o.subtract(p).rotate(-d)).x,m=D.y,y=r(c.width),w=r(c.height),x=y*y,b=w*w,C=v*v,S=m*m,k=s(C/x+S/b);if(1<k&&(x=(y*=k)*y,b=(w*=k)*w),r(k=(x*b-x*S-b*C)/(x*S+b*C))<1e-12&&(k=0),k<0)throw new Error("Cannot create an arc with the given arguments");I=new Z(y*m/w,-w*v/y).multiply((g===_?-1:1)*s(k)).rotate(d).add(p),t=(e=(n=(new $).translate(I).rotate(d).scale(y,w))._inverseTransform(o)).getDirectedAngle(n._inverseTransform(h)),!_&&0<t?t-=360:_&&t<0&&(t+=360)}if(l){var I,P=new G(o.add(l).divide(2),l.subtract(o).rotate(90),!0),M=new G(l.add(h).divide(2),h.subtract(l).rotate(90),!0),A=new G(o,h),T=A.getSide(l);if(!(I=P.intersect(M,!0))){if(!T)return this.lineTo(h);throw new Error("Cannot create an arc with the given arguments")}t=(e=o.subtract(I)).getDirectedAngle(h.subtract(I));var O=A.getSide(I,!0);0===O?t=T*r(t):T===O&&(t+=t<0?360:-360)}if(t){for(var z=r(t),E=360<=z?4:Math.ceil((z-1e-7)/90),L=t/E,N=L*Math.PI/360,B=4/3*Math.sin(N)/(1+Math.cos(N)),F=[],j=0;j<=E;j++){var R,D=h,q=null;j<E&&(q=e.rotate(90).multiply(B),n?(D=n._transformPoint(e),q=n._transformPoint(e.add(q)).subtract(D)):D=I.add(e)),j?(R=e.rotate(-90).multiply(B),n&&(R=n._transformPoint(e.add(R)).subtract(D)),F.push(new J(D,R,q))):a.setHandleOut(q),e=e.rotate(L)}this._add(F)}},lineBy:function(){var t=Z.read(arguments),e=V(this)._point;this.lineTo(e.add(t))},curveBy:function(){var t=arguments,e=Z.read(t),n=Z.read(t),i=U.read(t),r=V(this)._point;this.curveTo(r.add(e),r.add(n),i)},cubicCurveBy:function(){var t=arguments,e=Z.read(t),n=Z.read(t),i=Z.read(t),r=V(this)._point;this.cubicCurveTo(r.add(e),r.add(n),r.add(i))},quadraticCurveBy:function(){var t=arguments,e=Z.read(t),n=Z.read(t),i=V(this)._point;this.quadraticCurveTo(i.add(e),i.add(n))},arcBy:function(){var t=arguments,e=V(this)._point,n=e.add(Z.read(t)),i=U.pick(U.peek(t),!0);"boolean"==typeof i?this.arcTo(n,i):this.arcTo(n,e.add(Z.read(t)))},closePath:function(t){this.setClosed(!0),this.join(this,t)}}},{_getBounds:function(t,e){var n=e.handle?"getHandleBounds":e.stroke?"getStrokeBounds":"getBounds";return Q[n](this._segments,this._closed,this,t,e)},statics:{getBounds:function(t,e,n,i,r,s){var a=t[0];if(!a)return new M;var o=new Array(6),h=a._transformCoordinates(i,new Array(6)),u=h.slice(0,2),l=u.slice(),c=new Array(2);function f(t){t._transformCoordinates(i,o);for(var e=0;e<2;e++)X._addBounds(h[e],h[e+4],o[e+2],o[e],e,s?s[e]:0,u,l,c);var n=h;h=o,o=n}for(var d=1,_=t.length;d<_;d++)f(t[d]);return e&&f(a),new M(u[0],u[1],l[0]-u[0],l[1]-u[1])},getStrokeBounds:function(t,e,n,i,r){var s=n.getStyle(),a=s.hasStroke(),o=s.getStrokeWidth(),h=a&&n._getStrokeMatrix(i,r),u=a&&Q._getStrokePadding(o,h),l=Q.getBounds(t,e,n,i,r,u);if(!a)return l;var c=o/2,f=s.getStrokeJoin(),d=s.getStrokeCap(),_=s.getMiterLimit(),g=new M(new W(u));function p(t){l=l.include(t)}function v(t){l=l.unite(g.setCenter(t._point.transform(i)))}function m(t,e){"round"===e||t.isSmooth()?v(t):Q._addBevelJoin(t,e,c,_,i,h,p)}function y(t,e){"round"===e?v(t):Q._addSquareCap(t,e,c,i,h,p)}var w=t.length-(e?0:1);if(0<w){for(var x=1;x<w;x++)m(t[x],f);e?m(t[0],f):(y(t[0],d),y(t[t.length-1],d))}return l},_getStrokePadding:function(t,e){if(!e)return[t,t];var n=new Z(t,0).transform(e),i=new Z(0,t).transform(e),r=n.getAngleInRadians(),s=n.getLength(),a=i.getLength(),o=Math.sin(r),h=Math.cos(r),u=Math.tan(r),l=Math.atan2(a*u,s),c=Math.atan2(a,u*s);return[Math.abs(s*Math.cos(l)*h+a*Math.sin(l)*o),Math.abs(a*Math.sin(c)*h+s*Math.cos(c)*o)]},_addBevelJoin:function(t,e,n,i,r,s,a,o){var h,u=t.getCurve(),l=u.getPrevious(),c=u.getPoint1().transform(r),f=l.getNormalAtTime(1).multiply(n).transform(s),d=u.getNormalAtTime(0).multiply(n).transform(s),_=f.getDirectedAngle(d);(_<0||180<=_)&&(f=f.negate(),d=d.negate()),o&&a(c),a(c.add(f)),"miter"!==e||(h=new G(c.add(f),new Z(-f.y,f.x),!0).intersect(new G(c.add(d),new Z(-d.y,d.x),!0),!0))&&c.getDistance(h)<=i*n&&a(h),a(c.add(d))},_addSquareCap:function(t,e,n,i,r,s,a){var o=t._point.transform(i),h=t.getLocation(),u=h.getNormal().multiply(0===h.getTime()?n:-n).transform(r);"square"===e&&(a&&(s(o.subtract(u)),s(o.add(u))),o=o.add(u.rotate(-90))),s(o.add(u)),s(o.subtract(u))},getHandleBounds:function(t,e,n,i,r){var s,a,o,h,u,l=n.getStyle();r.stroke&&l.hasStroke()&&(o=n._getStrokeMatrix(i,r),u=h=l.getStrokeWidth()/2,"miter"===l.getStrokeJoin()&&(u=h*l.getMiterLimit()),"square"===l.getStrokeCap()&&(u=Math.max(u,h*Math.SQRT2)),s=Q._getStrokePadding(h,o),a=Q._getStrokePadding(u,o));for(var c=new Array(6),f=1/0,d=-f,_=f,g=d,p=0,v=t.length;p<v;p++){t[p]._transformCoordinates(i,c);for(var m=0;m<6;m+=2){var y=m?s:a,w=y?y[0]:0,x=y?y[1]:0,b=c[m],C=c[m+1],S=b-w,k=b+w,I=C-x,P=C+x;S<f&&(f=S),d<k&&(d=k),I<_&&(_=I),g<P&&(g=P)}}return new M(f,_,d-f,g-_)}}});Q.inject({statics:new function(){var c=.5522847498307936,a=[new J([-1,0],[0,c],[0,-c]),new J([0,-1],[-c,0],[c,0]),new J([1,0],[0,-c],[0,c]),new J([0,1],[c,0],[-c,0])];function f(t,e,n){var i=U.getNamed(n),r=new Q(i&&0==i.insert&&D.NO_INSERT);return r._add(t),r._closed=e,r.set(i,{insert:!0})}function i(t,e,n){for(var i=new Array(4),r=0;r<4;r++){var s=a[r];i[r]=new J(s._point.multiply(e).add(t),s._handleIn.multiply(e),s._handleOut.multiply(e))}return f(i,!0,n)}return{Line:function(){var t=arguments;return f([new J(Z.readNamed(t,"from")),new J(Z.readNamed(t,"to"))],!1,t)},Circle:function(){var t=arguments,e=Z.readNamed(t,"center"),n=U.readNamed(t,"radius");return i(e,new W(n),t)},Rectangle:function(){var t,e,n,i,r=arguments,s=M.readNamed(r,"rectangle"),a=W.readNamed(r,"radius",0,{readNull:!0}),o=s.getBottomLeft(!0),h=s.getTopLeft(!0),u=s.getTopRight(!0),l=s.getBottomRight(!0);return f(!a||a.isZero()?[new J(o),new J(h),new J(u),new J(l)]:(t=(a=W.min(a,s.getSize(!0).divide(2))).width,e=a.height,n=t*c,i=e*c,[new J(o.add(t,0),null,[-n,0]),new J(o.subtract(0,e),[0,i]),new J(h.add(0,e),null,[0,-i]),new J(h.add(t,0),[-n,0],null),new J(u.subtract(t,0),null,[n,0]),new J(u.add(0,e),[0,-i],null),new J(l.subtract(0,e),null,[0,i]),new J(l.subtract(t,0),[n,0])]),!0,r)},RoundRectangle:"#Rectangle",Ellipse:function(){var t=arguments,e=k._readEllipse(t);return i(e.center,e.radius,t)},Oval:"#Ellipse",Arc:function(){var t=arguments,e=Z.readNamed(t,"from"),n=Z.readNamed(t,"through"),i=Z.readNamed(t,"to"),r=U.getNamed(t),s=new Q(r&&0==r.insert&&D.NO_INSERT);return s.moveTo(e),s.arcTo(n,i),s.set(r)},RegularPolygon:function(){for(var t=arguments,e=Z.readNamed(t,"center"),n=U.readNamed(t,"sides"),i=U.readNamed(t,"radius"),r=360/n,s=n%3==0,a=new Z(0,s?-i:i),o=s?-1:.5,h=new Array(n),u=0;u<n;u++)h[u]=new J(e.add(a.rotate((u+o)*r)));return f(h,!0,t)},Star:function(){for(var t=arguments,e=Z.readNamed(t,"center"),n=2*U.readNamed(t,"points"),i=U.readNamed(t,"radius1"),r=U.readNamed(t,"radius2"),s=360/n,a=new Z(0,-1),o=new Array(n),h=0;h<n;h++)o[h]=new J(e.add(a.rotate(s*h).multiply(h%2?r:i)));return f(o,!0,t)}}}});var Y=z.extend({_class:"CompoundPath",_serializeFields:{children:[]},beans:!0,initialize:function(t){this._children=[],this._namedChildren={},this._initialize(t)||("string"==typeof t?this.setPathData(t):this.addChildren(Array.isArray(t)?t:arguments))},insertChildren:function t(e,n){var i=n,r=i[0];r&&"number"==typeof r[0]&&(i=[i]);for(var s=n.length-1;0<=s;s--){var a=i[s];i!==n||a instanceof Q||(i=U.slice(i)),Array.isArray(a)?i[s]=new Q({segments:a,insert:!1}):a instanceof Y&&(i.splice.apply(i,[s,1].concat(a.removeChildren())),a.remove())}return t.base.call(this,e,i)},reduce:function t(e){for(var n,i=this._children,r=i.length-1;0<=r;r--){(n=i[r].reduce(e)).isEmpty()&&n.remove()}return i.length?t.base.call(this):((n=new Q(D.NO_INSERT)).copyAttributes(this),n.insertAbove(this),this.remove(),n)},isClosed:function(){for(var t=this._children,e=0,n=t.length;e<n;e++)if(!t[e]._closed)return!1;return!0},setClosed:function(t){for(var e=this._children,n=0,i=e.length;n<i;n++)e[n].setClosed(t)},getFirstSegment:function(){var t=this.getFirstChild();return t&&t.getFirstSegment()},getLastSegment:function(){var t=this.getLastChild();return t&&t.getLastSegment()},getCurves:function(){for(var t=this._children,e=[],n=0,i=t.length;n<i;n++)U.push(e,t[n].getCurves());return e},getFirstCurve:function(){var t=this.getFirstChild();return t&&t.getFirstCurve()},getLastCurve:function(){var t=this.getLastChild();return t&&t.getLastCurve()},getArea:function(){for(var t=this._children,e=0,n=0,i=t.length;n<i;n++)e+=t[n].getArea();return e},getLength:function(){for(var t=this._children,e=0,n=0,i=t.length;n<i;n++)e+=t[n].getLength();return e},getPathData:function(t,e){for(var n=this._children,i=[],r=0,s=n.length;r<s;r++){var a=n[r],o=a._matrix;i.push(a.getPathData(t&&!o.isIdentity()?t.appended(o):t,e))}return i.join("")},_hitTestChildren:function t(e,n,i){return t.base.call(this,e,n.class===Q||"path"===n.type?n:U.set({},n,{fill:!1}),i)},_draw:function(t,e,n,i){var r=this._children;if(r.length){e=e.extend({dontStart:!0,dontFinish:!0}),t.beginPath();for(var s,a=0,o=r.length;a<o;a++)r[a].draw(t,e,i);e.clip||(this._setStyles(t,e,n),(s=this._style).hasFill()&&(t.fill(s.getFillRule()),t.shadowColor="rgba(0,0,0,0)"),s.hasStroke()&&t.stroke())}},_drawSelected:function(t,e,n){for(var i=this._children,r=0,s=i.length;r<s;r++){var a=i[r],o=a._matrix;n[a._id]||a._drawSelected(t,o.isIdentity()?e:e.appended(o))}}},new function(){function i(t,e){var n=t._children;if(e&&!n.length)throw new Error("Use a moveTo() command first");return n[n.length-1]}return U.each(["lineTo","cubicCurveTo","quadraticCurveTo","curveTo","arcTo","lineBy","cubicCurveBy","quadraticCurveBy","curveBy","arcBy"],function(e){this[e]=function(){var t=i(this,!0);t[e].apply(t,arguments)}},{moveTo:function(){var t=i(this),e=t&&t.isEmpty()?t:new Q(D.NO_INSERT);e!==t&&this.addChild(e),e.moveTo.apply(e,arguments)},moveBy:function(){var t=i(this,!0),e=t&&t.getLastSegment(),n=Z.read(arguments);this.moveTo(e?n.add(e._point):n)},closePath:function(t){i(this,!0).closePath(t)}})},U.each(["reverse","flatten","simplify","smooth"],function(s){this[s]=function(t){for(var e,n=this._children,i=0,r=n.length;i<r;i++)e=n[i][s](t)||e;return e}},{}));z.inject(new function(){var L=Math.min,N=Math.max,B=Math.abs,S={unite:{1:!0,2:!0},intersect:{2:!0},subtract:{1:!0},exclude:{1:!0,"-1":!0}};function k(t){return t._children||[t]}function I(t,e){var n=t.clone(!1).reduce({simplify:!0}).transform(null,!0,!0);if(e){for(var i=k(n),r=0,s=i.length;r<s;r++){(t=i[r])._closed||t.isEmpty()||(t.closePath(1e-12),t.getFirstSegment().setHandleIn(0,0),t.getLastSegment().setHandleOut(0,0))}n=n.resolveCrossings().reorient("nonzero"===n.getFillRule(),!0)}return n}function P(t,e,n,i,r){var s=new Y(D.NO_INSERT);return s.addChildren(t,!0),s=s.reduce({simplify:e}),r&&0==r.insert||s.insertAbove(i&&n.isSibling(i)&&n.getIndex()<i.getIndex()?i:n),s.copyAttributes(n,!0),s}function M(t){return t.hasOverlap()||t.isCrossing()}function n(t,e,n,i){if(i&&(0==i.trace||i.stroke)&&/^(subtract|intersect)$/.test(n))return A(t,e,n);var r=I(t,!0),s=e&&t!==e&&I(e,!0),a=S[n];a[n]=!0,s&&(a.subtract||a.exclude)^(s.isClockwise()^r.isClockwise())&&s.reverse();var o,h=E(K.expand(r.getIntersections(s,M))),u=k(r),l=s&&k(s),c=[],f=[];function d(t){for(var e=0,n=t.length;e<n;e++){var i=t[e];U.push(c,i._segments),U.push(f,i.getCurves()),i._overlapsOnly=!0}}function _(t){for(var e=[],n=0,i=t&&t.length;n<i;n++)e.push(f[t[n]]);return e}if(h.length){d(u),l&&d(l);for(var g=new Array(f.length),p=0,v=f.length;p<v;p++)g[p]=f[p].getValues();for(var m=V.findCurveBoundsCollisions(g,g,0,!0),y={},p=0;p<f.length;p++){var w=f[p],x=w._path._id;(y[x]=y[x]||{})[w.getIndex()]={hor:_(m[p].hor),ver:_(m[p].ver)}}for(p=0,v=h.length;p<v;p++)j(h[p]._segment,r,s,y,a);for(p=0,v=c.length;p<v;p++){var b=c[p],C=b._intersection;b._winding||j(b,r,s,y,a),C&&C._overlap||(b._path._overlapsOnly=!1)}o=R(c,a)}else o=z(l?u.concat(l):u.slice(),function(t){return!!a[t]});return P(o,!0,t,e,i)}function A(t,e,n){var i=I(t),r=I(e),s=i.getIntersections(r,M),a="subtract"===n,o="divide"===n,h={},u=[];function l(t){return!h[t._id]&&(o||r.contains(t.getPointAt(t.getLength()/2))^a)&&(u.unshift(t),h[t._id]=!0)}for(var c=s.length-1;0<=c;c--){var f=s[c].split();f&&(l(f)&&f.getFirstSegment().setHandleIn(0,0),i.getLastSegment().setHandleOut(0,0))}return l(i),P(u,!1,t,e)}function T(t,e){for(var n=t;n;){if(n===e)return;n=n._previous}for(;t._next&&t._next!==e;)t=t._next;if(!t._next){for(;e._previous;)e=e._previous;(t._next=e)._previous=t}}function O(t){for(var e=t.length-1;0<=e;e--)t[e].clearHandles()}function z(t,e,n){var i=t&&t.length;if(i){var r=U.each(t,function(t,e){this[t._id]={container:null,winding:t.isClockwise()?1:-1,index:e}},{}),s=t.slice().sort(function(t,e){return B(e.getArea())-B(t.getArea())}),a=s[0],o=V.findItemBoundsCollisions(s,null,H.GEOMETRIC_EPSILON);null==n&&(n=a.isClockwise());for(var h=0;h<i;h++){var u,l=s[h],c=r[l._id],f=0,d=o[h];if(d)for(var _=null,g=d.length-1;0<=g;g--)if(d[g]<h){_=_||l.getInteriorPoint();var p=s[d[g]];if(p.contains(_)){var v=r[p._id],f=v.winding;c.winding+=f,c.container=v.exclude?v.container:p;break}}e(c.winding)===e(f)?(c.exclude=!0,t[c.index]=null):(u=c.container,l.setClockwise(u?!u.isClockwise():n))}}return t}function E(t,e,n){var i,r,s,a=e&&[],o=!1,h=n||[],u=n&&{};function l(t){return t._path._id+"."+t._segment1._index}for(var c=(n&&n.length)-1;0<=c;c--){(f=n[c])._path&&(u[l(f)]=!0)}for(c=t.length-1;0<=c;c--){var f,d,_=t[c],g=_._time,p=g,v=e&&!e(_);if((f=_._curve)&&(f!==r?(o=!f.hasHandles()||u&&u[l(f)],i=[],s=null,r=f):1e-8<=s&&(g/=s)),v)i&&i.push(_);else{if(e&&a.unshift(_),s=p,g<1e-8)d=f._segment1;else if(1-1e-8<g)d=f._segment2;else{var m=f.divideAtTime(g,!0);o&&h.push(f,m),d=m._segment1;for(var y=i.length-1;0<=y;y--){var w=i[y];w._time=(w._time-g)/(1-g)}}_._setSegment(d);var x=d._intersection,b=_._intersection;if(x){T(x,b);for(var C=x;C;)T(C._intersection,x),C=C._next}else d._intersection=b}}return n||O(h),a||t}function F(f,d,_,g,p){var v,t,e=Array.isArray(d)?d:d[_?"hor":"ver"],m=_?1:0,y=1^m,n=[f.x,f.y],w=n[m],x=n[y],b=1e-6,C=w-1e-9,S=w+1e-9,i=0,r=0,k=0,I=0,P=!1,s=!1,M=1,A=[];function T(t){var e=t[y+0],n=t[y+6];if(!(x<L(e,n)||x>N(e,n))){var i=t[m+0],r=t[m+2],s=t[m+4],a=t[m+6];if(e!==n){var o=x===e?0:x!==n&&!(C>N(i,r,s,a)||S<L(i,r,s,a))&&0<X.solveCubic(t,y,x,A,0,1)?A[0]:1,h=0===o?i:1===o?a:X.getPoint(t,o)[_?"y":"x"],u=n<e?1:-1,l=v[y]>v[y+6]?1:-1,c=v[m+6];return x!==e?(h<C?k+=u:S<h?I+=u:P=!0,w-b<h&&h<w+b&&(M/=2)):(u!=l?i<C?k+=u:S<i&&(I+=u):i!=c&&(c<S&&S<h?(I+=u,P=!0):C<c&&h<C&&(k+=u,P=!0)),M/=4),v=t,!p&&C<h&&h<S&&0===X.getTangent(t,o)[_?"x":"y"]&&F(f,d,!_,g,!0)}(i<S&&C<a||a<S&&C<i)&&(P=!0)}}function a(t){var e=t[y+0],n=t[y+2],i=t[y+4],r=t[y+6];if(x<=N(e,n,i,r)&&x>=L(e,n,i,r))for(var s,a=t[m+0],o=t[m+2],h=t[m+4],u=t[m+6],l=C>N(a,o,h,u)||S<L(a,o,h,u)?[t]:X.getMonoCurves(t,_),c=0,f=l.length;c<f;c++)if(s=T(l[c]))return s}for(var o=0,h=e.length;o<h;o++){var u,l=e[o],c=l._path,O=l.getValues();if(!(o&&e[o-1]._path===c||(v=null,c._closed||(t=X.getValues(c.getLastCurve().getSegment2(),l.getSegment1(),null,!g))[y]!==t[y+6]&&(v=t),v))){v=O;for(var z=c.getLastCurve();z&&z!==l;){var E=z.getValues();if(E[y]!==E[y+6]){v=E;break}z=z.getPrevious()}}if(u=a(O))return u;if(o+1===h||e[o+1]._path!==c){if(t&&(u=a(t)))return u;!P||k||I||(k=I=c.isClockwise(g)^_?1:-1),i+=k,r+=I,k=I=0,P=P&&!(s=!0),t=null}}return i=B(i),r=B(r),{winding:N(i,r),windingL:i,windingR:r,quality:M,onPath:s}}function j(t,e,n,i,r){var s=[],a=t,o=0;do{(p=t.getCurve())&&(c=p.getLength(),s.push({segment:t,curve:p,length:c}),o+=c),t=t.getNext()}while(t&&!t._intersection&&t!==a);for(var h=[.5,.25,.75],u={winding:0,quality:-1},l=0;l<h.length&&u.quality<.5;l++)for(var c=o*h[l],f=0,d=s.length;f<d;f++){var _=s[f],g=_.length;if(c<=g){var p,v=(p=_.curve)._path,m=v._parent,y=m instanceof Y?m:v,w=H.clamp(p.getTimeAt(c),.001,.999),x=p.getPointAtTime(w),b=B(p.getTangentAtTime(w).y)<Math.SQRT1_2,C=null;if(r.subtract&&n){var S=(y===e?n:e)._getWinding(x,b,!0);if(y===e&&S.winding||y===n&&!S.winding){if(S.quality<1)continue;C={winding:0,quality:1}}}(C=C||F(x,i[v._id][p.getIndex()],b,!0)).quality>u.quality&&(u=C);break}c-=g}for(f=s.length-1;0<=f;f--)s[f].segment._winding=u}function R(t,n){var u,e=[];function l(t){var e;return!(!t||t._visited||n&&(!n[(e=t._winding||{}).winding]||n.unite&&2===e.winding&&e.windingL&&e.windingR))}function c(t){if(t)for(var e=0,n=u.length;e<n;e++)if(t===u[e])return!0;return!1}function i(t){for(var e=t._segments,n=0,i=e.length;n<i;n++)e[n]._visited=!0}function r(a,o){var t=a._intersection,e=t,h=[];function n(t,e){for(;t&&t!==e;){var n,i,r=t._segment,s=r&&r._path;s&&(i=(n=r.getNext()||s.getFirstSegment())._intersection,r!==a&&(c(r)||c(n)||n&&l(r)&&(l(n)||i&&l(i._segment)))&&h.push(r),o&&u.push(r)),t=t._next}}if(o&&(u=[a]),t){for(n(t);t&&t._previous;)t=t._previous;n(t,e)}return h}t.sort(function(t,e){var n=t._intersection,i=e._intersection,r=!(!n||!n._overlap),s=!(!i||!i._overlap),a=t._path,o=e._path;return r^s?r?1:-1:!n^!i?n?1:-1:a!==o?a._id-o._id:t._index-e._index});for(var s=0,a=t.length;s<a;s++){var o,h,f,d,_,g=t[s],p=l(g),v=null,m=!1,y=!0,w=[];for(p&&g._path._overlapsOnly&&(d=g._path,_=g._intersection._segment._path,d.compare(_)&&(d.getArea()&&e.push(d.clone(!1)),i(d),i(_),p=!1));p;){var x=!v,b=r(g,x),C=b.shift(),S=!(m=!x&&(c(g)||c(C)))&&C;if(x&&(v=new Q(D.NO_INSERT),o=null),m){(g.isFirst()||g.isLast())&&(y=g._path._closed),g._visited=!0;break}if(S&&o&&(w.push(o),o=null),o||(S&&b.push(g),o={start:v._segments.length,crossings:b,visited:h=[],handleIn:f}),S&&(g=C),!l(g)){v.removeSegments(o.start);for(var k=0,I=h.length;k<I;k++)h[k]._visited=!1;for(h.length=0;(g=o&&o.crossings.shift())&&g._path||(g=null,(o=w.pop())&&(h=o.visited,f=o.handleIn)),o&&!l(g););if(!g)break}var P=g.getNext();v.add(new J(g._point,f,P&&g._handleOut)),g._visited=!0,h.push(g),g=P||g._path.getFirstSegment(),f=P&&P._handleIn}m&&(y&&(v.getFirstSegment().setHandleIn(f),v.setClosed(y)),0!==v.getArea()&&e.push(v))}return e}return{_getWinding:function(t,e,n){return F(t,this.getCurves(),e,n)},unite:function(t,e){return n(this,t,"unite",e)},intersect:function(t,e){return n(this,t,"intersect",e)},subtract:function(t,e){return n(this,t,"subtract",e)},exclude:function(t,e){return n(this,t,"exclude",e)},divide:function(t,e){return e&&(0==e.trace||e.stroke)?A(this,t,"divide"):P([this.subtract(t,e),this.intersect(t,e)],!0,this,t,e)},resolveCrossings:function(){var t=this._children,e=t||[this];function n(t,e){var n=t&&t._intersection;return n&&n._overlap&&n._path===e}var i=!1,r=!1,s=this.getIntersections(null,function(t){return t.hasOverlap()?i=!0:t.isCrossing()&&(r=!0)}),a=i&&r&&[],s=K.expand(s);if(i)for(var o=E(s,function(t){return t.hasOverlap()},a),h=o.length-1;0<=h;h--){var u=o[h],l=u._path,c=u._segment,f=c.getPrevious(),d=c.getNext();n(f,l)&&n(d,l)&&(c.remove(),f._handleOut._set(0,0),d._handleIn._set(0,0),f===c||f.getCurve().hasLength()||(d._handleIn.set(f._handleIn),f.remove()))}r&&(E(s,i&&function(t){var e=t.getCurve(),n=t.getSegment(),i=t._intersection,r=i._curve,s=i._segment;if(e&&r&&e._path&&r._path)return!0;n&&(n._intersection=null),s&&(s._intersection=null)},a),a&&O(a),e=R(U.each(e,function(t){U.push(this,t._segments)},[])));var _,g=e.length;return 1<g&&t?(e!==t&&this.setChildren(e),_=this):1!==g||t||(e[0]!==this&&this.setSegments(e[0].removeSegments()),_=this),_||((_=new Y(D.NO_INSERT)).addChildren(e),(_=_.reduce()).copyAttributes(this),this.replaceWith(_)),_},reorient:function(e,t){var n=this._children;return n&&n.length?this.setChildren(z(this.removeChildren(),function(t){return!!(e?t:1&t)},t)):t!==q&&this.setClockwise(t),this},getInteriorPoint:function(){var t=this.getBounds().getCenter(!0);if(!this.contains(t)){for(var e=this.getCurves(),n=t.y,i=[],r=[],s=0,a=e.length;s<a;s++){var o=e[s].getValues(),h=o[1],u=o[3],l=o[5],c=o[7];if(n>=L(h,u,l,c)&&n<=N(h,u,l,c))for(var f=X.getMonoCurves(o),d=0,_=f.length;d<_;d++){var g,p=f[d],v=p[1],m=p[7];v!==m&&(v<=n&&n<=m||m<=n&&n<=v)&&(g=n===v?p[0]:n===m?p[6]:1===X.solveCubic(p,1,n,r,0,1)?X.getPoint(p,r[0]).x:(p[0]+p[6])/2,i.push(g))}}1<i.length&&(i.sort(function(t,e){return t-e}),t.x=(i[0]+i[1])/2)}return t}}});var m=U.extend({_class:"PathFlattener",initialize:function(t,l,e,c,i){var n,r=[],f=[],d=0,_=1/(e||32),s=t._segments,a=s[0];function o(t,e){var n=X.getValues(t,e,i);r.push(n),function t(e,n,i,r){{var s,a,o,h,u;!(_<r-i)||c&&X.isStraight(e)||X.isFlatEnough(e,l||.25)?(s=e[6]-e[0],a=e[7]-e[1],0<(o=Math.sqrt(s*s+a*a))&&(d+=o,f.push({offset:d,curve:e,index:n,time:r}))):(h=X.subdivide(e,.5),u=(i+r)/2,t(h[0],n,i,u),t(h[1],n,u,r))}}(n,t._index,0,1)}for(var h=1,u=s.length;h<u;h++)o(a,n=s[h]),a=n;t._closed&&o(n||a,s[0]),this.curves=r,this.parts=f,this.length=d,this.index=0},_get:function(t){for(var e,n=this.parts,i=n.length,r=this.index;(e=r)&&!(n[--r].offset<t););for(;e<i;e++){var s=n[e];if(s.offset>=t){var a=n[(this.index=e)-1],o=a&&a.index===s.index?a.time:0,h=a?a.offset:0;return{index:s.index,time:o+(s.time-o)*(t-h)/(s.offset-h)}}}return{index:n[i-1].index,time:1}},drawPart:function(t,e,n){for(var i=this._get(e),r=this._get(n),s=i.index,a=r.index;s<=a;s++){var o=X.getPart(this.curves[s],s===i.index?i.time:0,s===r.index?r.time:1);s===i.index&&t.moveTo(o[0],o[1]),t.bezierCurveTo.apply(t,o.slice(2))}}},U.each(X._evaluateMethods,function(n){this[n+"At"]=function(t){var e=this._get(t);return X[n](this.curves[e.index],e.time)}},{})),i=U.extend({initialize:function(t){for(var e,n=this.points=[],i=t._segments,r=t._closed,s=0,a=i.length;s<a;s++){var o=i[s].point;e&&e.equals(o)||n.push(e=o.clone())}r&&(n.unshift(n[n.length-1]),n.push(n[1])),this.closed=r},fit:function(t){var e=this.points,n=e.length,i=null;return 0<n&&(i=[new J(e[0])],1<n&&(this.fitCubic(i,t,0,n-1,e[1].subtract(e[0]),e[n-2].subtract(e[n-1])),this.closed&&(i.shift(),i.pop()))),i},fitCubic:function(t,e,n,i,r,s){var a=this.points;if(i-n!=1){for(var o,h=this.chordLengthParameterize(n,i),u=Math.max(e,e*e),l=!0,c=0;c<=4;c++){var f=this.generateBezier(n,i,h,r,s),d=this.findMaxError(n,i,f,h);if(d.error<e&&l)return void this.addCurve(t,f);if(o=d.index,d.error>=u)break;l=this.reparameterize(n,i,h,f),u=d.error}var _=a[o-1].subtract(a[o+1]);this.fitCubic(t,e,n,o,r,_),this.fitCubic(t,e,o,i,_.negate(),s)}else{var g=a[n],p=a[i],v=g.getDistance(p)/3;this.addCurve(t,[g,g.add(r.normalize(v)),p.add(s.normalize(v)),p])}},addCurve:function(t,e){t[t.length-1].setHandleOut(e[1].subtract(e[0])),t.push(new J(e[3],e[2].subtract(e[3])))},generateBezier:function(t,e,n,i,r){for(var s=Math.abs,a=this.points,o=a[t],h=a[e],u=[[0,0],[0,0]],l=[0,0],c=0,f=e-t+1;c<f;c++){var d=n[c],_=1-d,g=3*d*_,p=_*_*_,v=g*_,m=g*d,y=d*d*d,w=i.normalize(v),x=r.normalize(m),b=a[t+c].subtract(o.multiply(p+v)).subtract(h.multiply(m+y));u[0][0]+=w.dot(w),u[0][1]+=w.dot(x),u[1][0]=u[0][1],u[1][1]+=x.dot(x),l[0]+=w.dot(b),l[1]+=x.dot(b)}var C,S,k,I,P,M=u[0][0]*u[1][1]-u[1][0]*u[0][1];1e-12<s(M)?(C=u[0][0]*l[1]-u[1][0]*l[0],S=(l[0]*u[1][1]-l[1]*u[0][1])/M,k=C/M):(I=u[0][0]+u[0][1],P=u[1][0]+u[1][1],S=k=1e-12<s(I)?l[0]/I:1e-12<s(P)?l[1]/P:0);var A,T,O,z=h.getDistance(o),E=1e-12*z;return S<E||k<E?S=k=z/3:(A=h.subtract(o),T=i.normalize(S),O=r.normalize(k),T.dot(A)-O.dot(A)>z*z&&(S=k=z/3,T=O=null)),[o,o.add(T||i.normalize(S)),h.add(O||r.normalize(k)),h]},reparameterize:function(t,e,n,i){for(var r=t;r<=e;r++)n[r-t]=this.findRoot(i,this.points[r],n[r-t]);for(var r=1,s=n.length;r<s;r++)if(n[r]<=n[r-1])return!1;return!0},findRoot:function(t,e,n){for(var i=[],r=[],s=0;s<=2;s++)i[s]=t[s+1].subtract(t[s]).multiply(3);for(s=0;s<=1;s++)r[s]=i[s+1].subtract(i[s]).multiply(2);var a=this.evaluate(3,t,n),o=this.evaluate(2,i,n),h=this.evaluate(1,r,n),u=a.subtract(e),l=o.dot(o)+u.dot(h);return H.isMachineZero(l)?n:n-u.dot(o)/l},evaluate:function(t,e,n){for(var i=e.slice(),r=1;r<=t;r++)for(var s=0;s<=t-r;s++)i[s]=i[s].multiply(1-n).add(i[s+1].multiply(n));return i[0]},chordLengthParameterize:function(t,e){for(var n=[0],i=t+1;i<=e;i++)n[i-t]=n[i-t-1]+this.points[i].getDistance(this.points[i-1]);for(var i=1,r=e-t;i<=r;i++)n[i]/=n[r];return n},findMaxError:function(t,e,n,i){for(var r=Math.floor((e-t+1)/2),s=0,a=t+1;a<e;a++){var o=this.evaluate(3,n,i[a-t]).subtract(this.points[a]),h=o.x*o.x+o.y*o.y;s<=h&&(s=h,r=a)}return{error:s,index:r}}}),_=D.extend({_class:"TextItem",_applyMatrix:!1,_canApplyMatrix:!1,_serializeFields:{content:null},_boundsOptions:{stroke:!1,handle:!1},initialize:function(t){this._content="",this._lines=[];var e=t&&U.isPlainObject(t)&&t.x===q&&t.y===q;this._initialize(e&&t,!e&&Z.read(arguments))},_equals:function(t){return this._content===t._content},copyContent:function(t){this.setContent(t._content)},getContent:function(){return this._content},setContent:function(t){this._content=""+t,this._lines=this._content.split(/\r\n|\n|\r/gm),this._changed(521)},isEmpty:function(){return!this._content},getCharacterStyle:"#getStyle",setCharacterStyle:"#setStyle",getParagraphStyle:"#getStyle",setParagraphStyle:"#setStyle"}),h=_.extend({_class:"PointText",initialize:function(){_.apply(this,arguments)},getPoint:function(){var t=this._matrix.getTranslation();return new f(t.x,t.y,this,"setPoint")},setPoint:function(){var t=Z.read(arguments);this.translate(t.subtract(this._matrix.getTranslation()))},_draw:function(t,e,n){if(this._content){this._setStyles(t,e,n);var i=this._lines,r=this._style,s=r.hasFill(),a=r.hasStroke(),o=r.getLeading(),h=t.shadowColor;t.font=r.getFontStyle(),t.textAlign=r.getJustification();for(var u=0,l=i.length;u<l;u++){t.shadowColor=h;var c=i[u];s&&(t.fillText(c,0,0),t.shadowColor="rgba(0,0,0,0)"),a&&t.strokeText(c,0,0),t.translate(0,o)}}},_getBounds:function(t,e){var n=this._style,i=this._lines,r=i.length,s=n.getJustification(),a=n.getLeading(),o=this.getView().getTextWidth(n.getFontStyle(),i),h=0;"left"!==s&&(h-=o/("center"===s?2:1));var u=new M(h,r?-.75*a:0,o,r*a);return t?t._transformBounds(u,u):u}}),E=U.extend(new function(){var m,y={gray:["gray"],rgb:["red","green","blue"],hsb:["hue","saturation","brightness"],hsl:["hue","saturation","lightness"],gradient:["gradient","origin","destination","highlight"]},w={},x={transparent:[0,0,0,0]};var a=[[0,3,1],[2,0,1],[1,0,3],[1,2,0],[3,1,0],[0,1,2]],n={"rgb-hsb":function(t,e,n){var i=Math.max(t,e,n),r=i-Math.min(t,e,n);return[0==r?0:60*(i==t?(e-n)/r+(e<n?6:0):i==e?(n-t)/r+2:(t-e)/r+4),0===i?0:r/i,i]},"hsb-rgb":function(t,e,n){t=(t/60%6+6)%6;var i=Math.floor(t),r=t-i,s=[n,n*(1-e),n*(1-e*r),n*(1-e*(1-r))];return[s[(i=a[i])[0]],s[i[1]],s[i[2]]]},"rgb-hsl":function(t,e,n){var i=Math.max(t,e,n),r=Math.min(t,e,n),s=i-r,a=0==s,o=(i+r)/2;return[a?0:60*(i==t?(e-n)/s+(e<n?6:0):i==e?(n-t)/s+2:(t-e)/s+4),a?0:o<.5?s/(i+r):s/(2-i-r),o]},"hsl-rgb":function(t,e,n){if(0===e)return[n,n,n];for(var i=[(t=(t/360%1+1)%1)+1/3,t,t-1/3],r=n<.5?n*(1+e):n+e-n*e,s=2*n-r,a=[],o=0;o<3;o++){var h=i[o];h<0&&(h+=1),1<h&&--h,a[o]=6*h<1?s+6*(r-s)*h:2*h<1?r:3*h<2?s+(r-s)*(2/3-h)*6:s}return a},"rgb-gray":function(t,e,n){return[.2989*t+.587*e+.114*n]},"gray-rgb":function(t){return[t,t,t]},"gray-hsb":function(t){return[0,0,t]},"gray-hsl":function(t){return[0,0,t]},"gradient-rgb":function(){return[]},"rgb-gradient":function(){return[]}};return U.each(y,function(t,s){w[s]=[],U.each(t,function(t,e){var n=U.capitalize(t),i=/^(hue|saturation)$/.test(t),r=w[s][e]="gradient"===s?"gradient"===t?function(t){var e=this._components[0];return e!==(t=L.read(Array.isArray(t)?t:arguments,0,{readNull:!0}))&&(e&&e._removeOwner(this),t&&t._addOwner(this)),t}:function(){return Z.read(arguments,0,{readNull:"highlight"===t,clone:!0})}:function(t){return null==t||isNaN(t)?0:+t};this["get"+n]=function(){return this._type===s||i&&/^hs[bl]$/.test(this._type)?this._components[e]:this._convert(s)[e]},this["set"+n]=function(t){this._type===s||i&&/^hs[bl]$/.test(this._type)||(this._components=this._convert(s),this._properties=y[s],this._type=s),this._components[e]=r.call(this,t),this._changed()}},this)},{_class:"Color",_readIndex:!0,initialize:function t(e){var n,i=arguments,r=this.__read,s=0;Array.isArray(e)&&(e=(i=e)[0]);var a=null!=e&&typeof e;if("string"===a&&e in y&&(c=e,e=i[1],Array.isArray(e)?(u=e,h=i[2]):(r&&(s=1),i=U.slice(i,1),a=typeof e)),!u){if(n="number"===a?i:"object"===a&&null!=e.length?e:null){c=c||(3<=n.length?"rgb":"gray");var o=y[c].length,h=n[o];r&&(s+=n===arguments?o+(null!=h?1:0):1),n.length>o&&(n=U.slice(n,0,o))}else if("string"===a){var u,l=function(t){var e=t.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?$/i)||t.match(/^#([\da-f])([\da-f])([\da-f])([\da-f])?$/i),n="rgb";if(e)for(var i=e[4]?4:3,r=new Array(i),s=0;s<i;s++){var a=e[s+1];r[s]=parseInt(1==a.length?a+a:a,16)/255}else if(e=t.match(/^(rgb|hsl)a?\((.*)\)$/)){n=e[1],r=e[2].trim().split(/[,\s]+/g);for(var o="hsl"===n,s=0,h=Math.min(r.length,4);s<h;s++){var u,l=r[s],a=parseFloat(l);o?0===s?(u=l.match(/([a-z]*)$/)[1],a*={turn:360,rad:180/Math.PI,grad:.9}[u]||1):s<3&&(a/=100):s<3&&(a/=/%$/.test(l)?100:255),r[s]=a}}else{var c,f=x[t];r=(f=f||(A?(m||((m=it.getContext(1,1)).globalCompositeOperation="copy"),m.fillStyle="rgba(0,0,0,0)",m.fillStyle=t,m.fillRect(0,0,1,1),c=m.getImageData(0,0,1,1).data,x[t]=[c[0]/255,c[1]/255,c[2]/255]):[0,0,0])).slice()}return[n,r]}(e),c=l[0];4===(u=l[1]).length&&(h=u[3],u.length--)}else if("object"===a)if(e.constructor===t){if(c=e._type,u=e._components.slice(),h=e._alpha,"gradient"===c)for(var f=1,d=u.length;f<d;f++){var _=u[f];_&&(u[f]=_.clone())}}else if(e.constructor===L)c="gradient",n=i;else{var g=y[c="hue"in e?"lightness"in e?"hsl":"hsb":"gradient"in e||"stops"in e||"radial"in e?"gradient":"gray"in e?"gray":"rgb"],p=w[c];this._components=u=[];for(f=0,d=g.length;f<d;f++){null==(v=e[g[f]])&&!f&&"gradient"===c&&"stops"in e&&(v={stops:e.stops,radial:e.radial}),null!=(v=p[f].call(this,v))&&(u[f]=v)}h=e.alpha}r&&c&&(s=1)}if(this._type=c||"rgb",!u){this._components=u=[];for(var v,f=0,d=(p=w[this._type]).length;f<d;f++){null!=(v=p[f].call(this,n&&n[f]))&&(u[f]=v)}}return this._components=u,this._properties=y[this._type],this._alpha=h,r&&(this.__read=s),this},set:"#initialize",_serialize:function(t,e){var n=this.getComponents();return U.serialize(/^(gray|rgb)$/.test(this._type)?n:[this._type].concat(n),t,!0,e)},_changed:function(){this._canvasStyle=null,this._owner&&(this._setter?this._owner[this._setter](this):this._owner._changed(129))},_convert:function(t){var e;return this._type===t?this._components.slice():(e=n[this._type+"-"+t])?e.apply(this,this._components):n["rgb-"+t].apply(this,n[this._type+"-rgb"].apply(this,this._components))},convert:function(t){return new E(t,this._convert(t),this._alpha)},getType:function(){return this._type},setType:function(t){this._components=this._convert(t),this._properties=y[t],this._type=t},getComponents:function(){var t=this._components.slice();return null!=this._alpha&&t.push(this._alpha),t},getAlpha:function(){return null!=this._alpha?this._alpha:1},setAlpha:function(t){this._alpha=null==t?null:Math.min(Math.max(t,0),1),this._changed()},hasAlpha:function(){return null!=this._alpha},equals:function(t){var e=U.isPlainValue(t,!0)?E.read(arguments):t;return e===this||e&&this._class===e._class&&this._type===e._type&&this.getAlpha()===e.getAlpha()&&U.equals(this._components,e._components)||!1},toString:function(){for(var t=this._properties,e=[],n="gradient"===this._type,i=b.instance,r=0,s=t.length;r<s;r++){var a=this._components[r];null!=a&&e.push(t[r]+": "+(n?a:i.number(a)))}return null!=this._alpha&&e.push("alpha: "+i.number(this._alpha)),"{ "+e.join(", ")+" }"},toCSS:function(t){var e=this._convert("rgb"),n=t||null==this._alpha?1:this._alpha;function i(t){return Math.round(255*(t<0?0:1<t?1:t))}return e=[i(e[0]),i(e[1]),i(e[2])],n<1&&e.push(n<0?0:n),t?"#"+((1<<24)+(e[0]<<16)+(e[1]<<8)+e[2]).toString(16).slice(1):(4==e.length?"rgba(":"rgb(")+e.join(",")+")"},toCanvasStyle:function(t,e){if(this._canvasStyle)return this._canvasStyle;if("gradient"!==this._type)return this._canvasStyle=this.toCSS();var n,i,r,s,a=this._components,o=a[0],h=o._stops,u=a[1],l=a[2],c=a[3],f=e&&e.inverted();f&&(u=f._transformPoint(u),l=f._transformPoint(l),c=c&&f._transformPoint(c)),s=o._radial?(n=l.getDistance(u),!c||(i=c.subtract(u)).getLength()>n&&(c=u.add(i.normalize(n-.1))),r=c||u,t.createRadialGradient(r.x,r.y,0,u.x,u.y,n)):t.createLinearGradient(u.x,u.y,l.x,l.y);for(var d=0,_=h.length;d<_;d++){var g=h[d],p=g._offset;s.addColorStop(null==p?d/(_-1):p,g._color.toCanvasStyle())}return this._canvasStyle=s},transform:function(t){if("gradient"===this._type){for(var e=this._components,n=1,i=e.length;n<i;n++){var r=e[n];t._transformPoint(r,r,!0)}this._changed()}},statics:{_types:y,random:function(){var t=Math.random;return new E(t(),t(),t())},_setOwner:function(t,e,n){return t&&(t._owner&&e&&t._owner!==e&&(t=t.clone()),!t._owner^!e&&(t._owner=e||null,t._setter=n||null)),t}}})},new function(){return U.each({add:function(t,e){return t+e},subtract:function(t,e){return t-e},multiply:function(t,e){return t*e},divide:function(t,e){return t/e}},function(a,t){this[t]=function(t){t=E.read(arguments);for(var e=this._type,n=this._components,i=t._convert(e),r=0,s=n.length;r<s;r++)i[r]=a(n[r],i[r]);return new E(e,i,null!=this._alpha?a(this._alpha,t.getAlpha()):null)}},{})}),L=U.extend({_class:"Gradient",initialize:function(t,e){this._id=u.get(),t&&U.isPlainObject(t)&&(this.set(t),t=e=null),null==this._stops&&this.setStops(t||["white","black"]),null==this._radial&&this.setRadial("string"==typeof e&&"radial"===e||e||!1)},_serialize:function(t,e){return e.add(this,function(){return U.serialize([this._stops,this._radial],t,!0,e)})},_changed:function(){for(var t=0,e=this._owners&&this._owners.length;t<e;t++)this._owners[t]._changed()},_addOwner:function(t){this._owners||(this._owners=[]),this._owners.push(t)},_removeOwner:function(t){var e=this._owners?this._owners.indexOf(t):-1;-1!=e&&(this._owners.splice(e,1),this._owners.length||(this._owners=q))},clone:function(){for(var t=[],e=0,n=this._stops.length;e<n;e++)t[e]=this._stops[e].clone();return new L(t,this._radial)},getStops:function(){return this._stops},setStops:function(t){if(t.length<2)throw new Error("Gradient stop list needs to contain at least two stops.");var e=this._stops;if(e)for(var n=0,i=e.length;n<i;n++)e[n]._owner=q;for(n=0,i=(e=this._stops=N.readList(t,0,{clone:!0})).length;n<i;n++)e[n]._owner=this;this._changed()},getRadial:function(){return this._radial},setRadial:function(t){this._radial=t,this._changed()},equals:function(t){if(t===this)return!0;if(t&&this._class===t._class){var e=this._stops,n=t._stops,i=e.length;if(i===n.length){for(var r=0;r<i;r++)if(!e[r].equals(n[r]))return!1;return!0}}return!1}}),N=U.extend({_class:"GradientStop",initialize:function(t,e){var n=t,i=e;"object"==typeof t&&e===q&&(Array.isArray(t)&&"number"!=typeof t[0]?(n=t[0],i=t[1]):("color"in t||"offset"in t||"rampPoint"in t)&&(n=t.color,i=t.offset||t.rampPoint||0)),this.setColor(n),this.setOffset(i)},clone:function(){return new N(this._color.clone(),this._offset)},_serialize:function(t,e){var n=this._color,i=this._offset;return U.serialize(null==i?[n]:[n,i],t,!0,e)},_changed:function(){this._owner&&this._owner._changed(129)},getOffset:function(){return this._offset},setOffset:function(t){this._offset=t,this._changed()},getRampPoint:"#getOffset",setRampPoint:"#setOffset",getColor:function(){return this._color},setColor:function(){E._setOwner(this._color,null),this._color=E._setOwner(E.read(arguments,0),this,"setColor"),this._changed()},equals:function(t){return t===this||t&&this._class===t._class&&this._color.equals(t._color)&&this._offset==t._offset||!1}}),g=U.extend(new function(){var i={fillColor:null,fillRule:"nonzero",strokeColor:null,strokeWidth:1,strokeCap:"butt",strokeJoin:"miter",strokeScaling:!0,miterLimit:10,dashOffset:0,dashArray:[],shadowColor:null,shadowBlur:0,shadowOffset:new Z,selectedColor:null},r=U.set({},i,{fontFamily:"sans-serif",fontWeight:"normal",fontSize:12,leading:null,justification:"left"}),s=U.set({},r,{fillColor:new E}),n={strokeWidth:193,strokeCap:193,strokeJoin:193,strokeScaling:201,miterLimit:193,fontFamily:9,fontWeight:9,fontSize:9,font:9,leading:9,justification:9},a={beans:!0},h={_class:"Style",beans:!0,initialize:function(t,e,n){this._values={},this._owner=e,this._project=e&&e._project||n||at.project,this._defaults=!e||e instanceof S?r:e instanceof _?s:i,t&&this.set(t)}};return U.each(r,function(t,u){var l=/Color$/.test(u),c="shadowOffset"===u,e=U.capitalize(u),o=n[u],f="set"+e,d="get"+e;h[f]=function(t){var e,n=this._owner,i=n&&n._children,r=i&&0<i.length&&!(n instanceof Y);if(r)for(var s=0,a=i.length;s<a;s++)i[s]._style[f](t);"selectedColor"!==u&&r||!(u in this._defaults)||(e=this._values[u])!==t&&(l&&(e&&(E._setOwner(e,null),e._canvasStyle=null),t&&t.constructor===E&&(t=E._setOwner(t,n,r&&f))),this._values[u]=t,n&&n._changed(o||129))},h[d]=function(t){var e,n,i=this._owner,r=i&&i._children,s=r&&0<r.length&&!(i instanceof Y);if(s&&!t)for(var a=0,o=r.length;a<o;a++){var h=r[a]._style[d]();if(a){if(!U.equals(e,h))return q}else e=h}else u in this._defaults&&((e=this._values[u])===q?(e=this._defaults[u])&&e.clone&&(e=e.clone()):!(n=l?E:c?Z:null)||e&&e.constructor===n||(this._values[u]=e=n.read([e],0,{readNull:!0,clone:!0})));return e&&l&&(e=E._setOwner(e,i,s&&f)),e},a[d]=function(t){return this._style[d](t)},a[f]=function(t){this._style[f](t)}}),U.each({Font:"FontFamily",WindingRule:"FillRule"},function(t,e){var n="get"+e,i="set"+e;h[n]=a[n]="#get"+t,h[i]=a[i]="#set"+t}),D.inject(a),h},{set:function(t){var e,n=t instanceof g,i=n?t._values:t;if(i)for(var r in i){r in this._defaults&&(e=i[r],this[r]=e&&n&&e.clone?e.clone():e)}},equals:function(t){function e(t,e,n){var i=t._values,r=e._values,s=e._defaults;for(var a in i){var o=i[a],h=r[a];if(!(n&&a in r||U.equals(o,h===q?s[a]:h)))return!1}return!0}return t===this||t&&this._class===t._class&&e(this,t)&&e(t,this,!0)||!1},_dispose:function(){var t=this.getFillColor();t&&(t._canvasStyle=null),(t=this.getStrokeColor())&&(t._canvasStyle=null),(t=this.getShadowColor())&&(t._canvasStyle=null)},hasFill:function(){var t=this.getFillColor();return!!t&&0<t.alpha},hasStroke:function(){var t=this.getStrokeColor();return!!t&&0<t.alpha&&0<this.getStrokeWidth()},hasShadow:function(){var t=this.getShadowColor();return!!t&&0<t.alpha&&(0<this.getShadowBlur()||!this.getShadowOffset().isZero())},getView:function(){return this._project._view},getFontStyle:function(){var t=this.getFontSize();return this.getFontWeight()+" "+t+(/[a-z]/i.test(t+"")?" ":"px ")+this.getFontFamily()},getFont:"#getFontFamily",setFont:"#setFontFamily",getLeading:function t(){var e=t.base.call(this),n=this.getFontSize();return/pt|em|%|px/.test(n)&&(n=this.getView().getPixelSize(n)),null!=e?e:1.2*n}}),B=new function(){function r(t,e,n,i){for(var r=["","webkit","moz","Moz","ms","o"],s=e[0].toUpperCase()+e.substring(1),a=0;a<6;a++){var o=r[a],h=o?o+s:e;if(h in t){if(!n)return t[h];t[h]=i;break}}}return{getStyles:function(t){var e=t&&9!==t.nodeType?t.ownerDocument:t,n=e&&e.defaultView;return n&&n.getComputedStyle(t,"")},getBounds:function(t,e){var n,i=t.ownerDocument,r=i.body,s=i.documentElement;try{n=t.getBoundingClientRect()}catch(t){n={left:0,top:0,width:0,height:0}}var a,o=n.left-(s.clientLeft||r.clientLeft||0),h=n.top-(s.clientTop||r.clientTop||0);return e||(o+=(a=i.defaultView).pageXOffset||s.scrollLeft||r.scrollLeft,h+=a.pageYOffset||s.scrollTop||r.scrollTop),new M(o,h,n.width,n.height)},getViewportBounds:function(t){var e=t.ownerDocument,n=e.defaultView,i=e.documentElement;return new M(0,0,n.innerWidth||i.clientWidth,n.innerHeight||i.clientHeight)},getOffset:function(t,e){return B.getBounds(t,e).getPoint()},getSize:function(t){return B.getBounds(t,!0).getSize()},isInvisible:function(t){return B.getSize(t).equals(new W(0,0))},isInView:function(t){return!B.isInvisible(t)&&B.getViewportBounds(t).intersects(B.getBounds(t,!0))},isInserted:function(t){return T.body.contains(t)},getPrefixed:function(t,e){return t&&r(t,e)},setPrefixed:function(t,e,n){if("object"==typeof e)for(var i in e)r(t,i,!0,e[i]);else r(t,e,!0,n)}}},F={add:function(t,e){if(t)for(var n in e)for(var i=e[n],r=n.split(/[\s,]+/g),s=0,a=r.length;s<a;s++){var o=r[s],h=t===T&&("touchstart"===o||"touchmove"===o)&&{passive:!1};t.addEventListener(o,i,h)}},remove:function(t,e){if(t)for(var n in e)for(var i=e[n],r=n.split(/[\s,]+/g),s=0,a=r.length;s<a;s++)t.removeEventListener(r[s],i,!1)},getPoint:function(t){var e=t.targetTouches?t.targetTouches.length?t.targetTouches[0]:t.changedTouches[0]:t;return new Z(e.pageX||e.clientX+T.documentElement.scrollLeft,e.pageY||e.clientY+T.documentElement.scrollTop)},getTarget:function(t){return t.target||t.srcElement},getRelatedTarget:function(t){return t.relatedTarget||t.toElement},getOffset:function(t,e){return F.getPoint(t).subtract(B.getOffset(e||F.getTarget(t)))}};F.requestAnimationFrame=new function(){var e,i=B.getPrefixed(A,"requestAnimationFrame"),r=!1,s=[];function a(){var t=s;s=[];for(var e=0,n=t.length;e<n;e++)t[e]();(r=i&&s.length)&&i(a)}return function(t){s.push(t),i?r||(i(a),r=!0):e=e||setInterval(a,1e3/60)}};var j=U.extend(t,{_class:"View",initialize:function t(e,n){function i(t){return n[t]||parseInt(n.getAttribute(t),10)}function r(){var t=B.getSize(n);return t.isNaN()||t.isZero()?new W(i("width"),i("height")):t}var s,a,o,h,u,l;A&&n?(this._id=n.getAttribute("id"),null==this._id&&n.setAttribute("id",this._id="paper-view-"+t._id++),F.add(n,this._viewEvents),a="none",B.setPrefixed(n.style,{userDrag:a,userSelect:a,touchCallout:a,contentZooming:a,tapHighlightColor:"rgba(0,0,0,0)"}),c.hasAttribute(n,"resize")&&(o=this,F.add(A,this._windowEvents={resize:function(){o.setViewSize(r())}})),s=r(),c.hasAttribute(n,"stats")&&"undefined"!=typeof Stats&&(this._stats=new Stats,u=(h=this._stats.domElement).style,l=B.getOffset(n),u.position="absolute",u.left=l.x+"px",u.top=l.y+"px",T.body.appendChild(h))):(s=new W(n),n=null),this._project=e,this._scope=e._scope,this._element=n,this._pixelRatio||(this._pixelRatio=A&&A.devicePixelRatio||1),this._setElementSize(s.width,s.height),this._viewSize=s,t._views.push(this),((t._viewsById[this._id]=this)._matrix=new $)._owner=this,t._focused||(t._focused=this),this._frameItems={},this._frameItemCount=0,this._itemEvents={native:{},virtual:{}},this._autoUpdate=!at.agent.node,this._needsUpdate=!1},remove:function(){if(!this._project)return!1;j._focused===this&&(j._focused=null),j._views.splice(j._views.indexOf(this),1),delete j._viewsById[this._id];var t=this._project;return t._view===this&&(t._view=null),F.remove(this._element,this._viewEvents),F.remove(A,this._windowEvents),this._element=this._project=null,this.off("frame"),this._animate=!1,this._frameItems={},!0},_events:U.each(D._itemHandlers.concat(["onResize","onKeyDown","onKeyUp"]),function(t){this[t]={}},{onFrame:{install:function(){this.play()},uninstall:function(){this.pause()}}}),_animate:!1,_time:0,_count:0,getAutoUpdate:function(){return this._autoUpdate},setAutoUpdate:function(t){(this._autoUpdate=t)&&this.requestUpdate()},update:function(){},draw:function(){this.update()},requestUpdate:function(){var e;this._requested||(e=this,F.requestAnimationFrame(function(){var t;e._requested=!1,e._animate&&(e.requestUpdate(),t=e._element,B.getPrefixed(T,"hidden")&&"true"!==c.getAttribute(t,"keepalive")||!B.isInView(t)||e._handleFrame()),e._autoUpdate&&e.update()}),this._requested=!0)},play:function(){this._animate=!0,this.requestUpdate()},pause:function(){this._animate=!1},_handleFrame:function(){at=this._scope;var t=Date.now()/1e3,e=this._last?t-this._last:0;this._last=t,this.emit("frame",new U({delta:e,time:this._time+=e,count:this._count++})),this._stats&&this._stats.update()},_animateItem:function(t,e){var n=this._frameItems;e?(n[t._id]={item:t,time:0,count:0},1==++this._frameItemCount&&this.on("frame",this._handleFrameItems)):(delete n[t._id],0==--this._frameItemCount&&this.off("frame",this._handleFrameItems))},_handleFrameItems:function(t){for(var e in this._frameItems){var n=this._frameItems[e];n.item.emit("frame",new U(t,{time:n.time+=t.delta,count:n.count++}))}},_changed:function(){this._project._changed(4097),this._bounds=this._decomposed=q},getElement:function(){return this._element},getPixelRatio:function(){return this._pixelRatio},getResolution:function(){return 72*this._pixelRatio},getViewSize:function(){var t=this._viewSize;return new n(t.width,t.height,this,"setViewSize")},setViewSize:function(){var t=W.read(arguments),e=t.subtract(this._viewSize);e.isZero()||(this._setElementSize(t.width,t.height),this._viewSize.set(t),this._changed(),this.emit("resize",{size:t,delta:e}),this._autoUpdate&&this.update())},_setElementSize:function(t,e){var n=this._element;n&&(n.width!==t&&(n.width=t),n.height!==e&&(n.height=e))},getBounds:function(){return this._bounds||(this._bounds=this._matrix.inverted()._transformBounds(new M(new Z,this._viewSize))),this._bounds},getSize:function(){return this.getBounds().getSize()},isVisible:function(){return B.isInView(this._element)},isInserted:function(){return B.isInserted(this._element)},getPixelSize:function(t){var e,n,i,r=this._element;return r?(n=r.parentNode,(i=T.createElement("div")).style.fontSize=t,n.appendChild(i),e=parseFloat(B.getStyles(i).fontSize),n.removeChild(i)):e=parseFloat(e),e},getTextWidth:function(t,e){return 0}},U.each(["rotate","scale","shear","skew"],function(i){var r="rotate"===i;this[i]=function(){var t=arguments,e=(r?U:Z).read(t),n=Z.read(t,0,{readNull:!0});return this.transform((new $)[i](e,n||this.getCenter(!0)))}},{_decompose:function(){return this._decomposed||(this._decomposed=this._matrix.decompose())},translate:function(){var t=new $;return this.transform(t.translate.apply(t,arguments))},getCenter:function(){return this.getBounds().getCenter()},setCenter:function(){var t=Z.read(arguments);this.translate(this.getCenter().subtract(t))},getZoom:function(){var t=this._decompose().scaling;return(t.x+t.y)/2},setZoom:function(t){this.transform((new $).scale(t/this.getZoom(),this.getCenter()))},getRotation:function(){return this._decompose().rotation},setRotation:function(t){var e=this.getRotation();null!=e&&null!=t&&this.rotate(t-e)},getScaling:function(){var t=this._decompose().scaling;return new f(t.x,t.y,this,"setScaling")},setScaling:function(){var t=this.getScaling(),e=Z.read(arguments,0,{clone:!0,readNull:!0});t&&e&&this.scale(e.x/t.x,e.y/t.y)},getMatrix:function(){return this._matrix},setMatrix:function(){var t=this._matrix;t.set.apply(t,arguments)},transform:function(t){this._matrix.append(t)},scrollBy:function(){this.translate(Z.read(arguments).negate())}}),{projectToView:function(){return this._matrix._transformPoint(Z.read(arguments))},viewToProject:function(){return this._matrix._inverseTransform(Z.read(arguments))},getEventPoint:function(t){return this.viewToProject(F.getOffset(t,this._element))}},{statics:{_views:[],_viewsById:{},_id:0,create:function(t,e){return T&&"string"==typeof e&&(e=T.getElementById(e)),new(A?r:j)(t,e)}}},new function(){if(A){var i,r,t,e,n,g=!1,s=!1,a=A.navigator;a.pointerEnabled||a.msPointerEnabled?(t="pointerdown MSPointerDown",e="pointermove MSPointerMove",n="pointerup pointercancel MSPointerUp MSPointerCancel"):(t="touchstart",e="touchmove",n="touchend touchcancel","ontouchstart"in A&&a.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android|silk/i)||(t+=" mousedown",e+=" mousemove",n+=" mouseup"));var o={},h={mouseout:function(t){var e,n,i,r,s,a=j._focused,o=F.getRelatedTarget(t);!a||o&&"HTML"!==o.nodeName||(n=(e=F.getOffset(t,a._element)).x,s=(r=(i=Math.abs)(n))-(1<<25),e.x=i(s)<r?s*(n<0?-1:1):n,d(a,t,a.viewToProject(e)))},scroll:f};o[t]=function(t){var e=j._focused=c(t);g||(g=!0,e._handleMouseEvent("mousedown",t))},h[e]=function(t){var e,n=j._focused;s||((e=c(t))?n!==e&&(n&&d(n,t),i=i||n,n=j._focused=r=e):r&&r===n&&(i&&!i.isInserted()&&(i=null),n=j._focused=i,i=null,f())),n&&d(n,t)},h[t]=function(){s=!0},h[n]=function(t){var e=j._focused;e&&g&&e._handleMouseEvent("mouseup",t),s=g=!1},F.add(T,h),F.add(A,{load:f});var p,v,m,y,w,x,b,C,S=!1,k=!1,l={doubleclick:"click",mousedrag:"mousemove"},I=!1,u={mousedown:{mousedown:1,mousedrag:1,click:1,doubleclick:1},mouseup:{mouseup:1,mousedrag:1,click:1,doubleclick:1},mousemove:{mousedrag:1,mousemove:1,mouseenter:1,mouseleave:1}};return{_viewEvents:o,_handleMouseEvent:function(t,e,n){var i=this._itemEvents,r=i.native[t],s="mousemove"===t,a=this._scope.tool,o=this;function h(t){return i.virtual[t]||o.responds(t)||a&&a.responds(t)}s&&g&&h("mousedrag")&&(t="mousedrag"),n=n||this.getEventPoint(e);var u=this.getBounds().contains(n),l=r&&u&&o._project.hitTest(n,{tolerance:0,fill:!0,stroke:!0}),c=l&&l.item||null,f=!1,d={};if(d[t.substr(5)]=!0,r&&c!==y&&(y&&P(y,null,"mouseleave",e,n),c&&P(c,null,"mouseenter",e,n),y=c),I^u&&(P(this,null,u?"mouseenter":"mouseleave",e,n),f=!0),!u&&!d.drag||n.equals(v)||(M(this,c,s?t:"mousemove",e,n,v),f=!0),I=u,d.down&&u||d.up&&p){if(M(this,c,t,e,n,p),d.down){if(C=c===x&&Date.now()-b<300,m=x=c,!k&&c){for(var _=c;_&&!_.responds("mousedrag");)_=_._parent;_&&(w=c)}p=n}else d.up&&(k||c!==m||(b=Date.now(),M(this,c,C?"doubleclick":"click",e,n,p),C=!1),m=w=null);f=!(I=!1)}v=n,f&&a&&(S=a._handleMouseEvent(t,e,n,d)||S),!1!==e.cancelable&&(S&&!d.move||d.down&&h("mouseup"))&&e.preventDefault()},_handleKeyEvent:function(e,n,i,r){var s,a=this._scope,t=a.tool;function o(t){t.responds(e)&&(at=a,t.emit(e,s=s||new R(e,n,i,r)))}this.isVisible()&&(o(this),t&&t.responds(e)&&o(t))},_countItemEvent:function(t,e){var n=this._itemEvents,i=n.native,r=n.virtual;for(var s in u)i[s]=(i[s]||0)+(u[s][t]||0)*e;r[t]=(r[t]||0)+e},statics:{updateFocus:f,_resetState:function(){g=s=S=I=!1,i=r=p=v=m=y=w=x=b=C=null}}}}function c(t){var e=F.getTarget(t);return e.getAttribute&&j._viewsById[e.getAttribute("id")]}function f(){var t=j._focused;if(!t||!t.isVisible())for(var e=0,n=j._views.length;e<n;e++)if((t=j._views[e]).isVisible()){j._focused=r=t;break}}function d(t,e,n){t._handleMouseEvent("mousemove",e,n)}function P(t,i,e,r,s,a,n){var o,h=!1;function u(t,e){if(t.responds(e)){if(o=o||new tt(e,r,s,i||t,a?s.subtract(a):null),t.emit(e,o)&&(S=!0,o.prevented&&(k=!0),o.stopped))return h=!0}else{var n=l[e];if(n)return u(t,n)}}for(;t&&t!==n&&!u(t,e);)t=t._parent;return h}function M(t,e,n,i,r,s){return t._project.removeOn(n),k=S=!1,w&&P(w,null,n,i,r,s)||e&&e!==w&&!e.isDescendant(w)&&P(e,null,"mousedrag"===n?"mousemove":n,i,r,s,w)||P(t,w||e||t,n,i,r,s)}}),r=j.extend({_class:"CanvasView",initialize:function(t,e){if(!(e instanceof A.HTMLCanvasElement)){var n=W.read(arguments,1);if(n.isZero())throw new Error("Cannot create CanvasView with the provided argument: "+U.slice(arguments,1));e=it.getCanvas(n)}var i,r,s=this._context=e.getContext("2d");s.save(),this._pixelRatio=1,/^off|false$/.test(c.getAttribute(e,"hidpi"))||(i=A.devicePixelRatio||1,r=B.getPrefixed(s,"backingStorePixelRatio")||1,this._pixelRatio=i/r),j.call(this,t,e),this._needsUpdate=!0},remove:function t(){return this._context.restore(),t.base.call(this)},_setElementSize:function t(e,n){var i,r,s,a=this._pixelRatio;t.base.call(this,e*a,n*a),1!==a&&(i=this._element,r=this._context,c.hasAttribute(i,"resize")||((s=i.style).width=e+"px",s.height=n+"px"),r.restore(),r.save(),r.scale(a,a))},getContext:function(){return this._context},getPixelSize:function t(e){var n,i,r,s=at.agent;return s&&s.firefox?n=t.base.call(this,e):(r=(i=this._context).font,i.font=e+" serif",n=parseFloat(i.font),i.font=r),n},getTextWidth:function(t,e){var n=this._context,i=n.font,r=0;n.font=t;for(var s=0,a=e.length;s<a;s++)r=Math.max(r,n.measureText(e[s]).width);return n.font=i,r},update:function(){if(!this._needsUpdate)return!1;var t=this._project,e=this._context,n=this._viewSize;return e.clearRect(0,0,n.width+1,n.height+1),t&&t.draw(e,this._matrix,this._pixelRatio),!(this._needsUpdate=!1)}}),p=U.extend({_class:"Event",initialize:function(t){this.event=t,this.type=t&&t.type},prevented:!1,stopped:!1,preventDefault:function(){this.prevented=!0,this.event.preventDefault()},stopPropagation:function(){this.stopped=!0,this.event.stopPropagation()},stop:function(){this.stopPropagation(),this.preventDefault()},getTimeStamp:function(){return this.event.timeStamp},getModifiers:function(){return v.modifiers}}),R=p.extend({_class:"KeyEvent",initialize:function(t,e,n,i){this.type=t,this.event=e,this.key=n,this.character=i},toString:function(){return"{ type: '"+this.type+"', key: '"+this.key+"', character: '"+this.character+"', modifiers: "+this.getModifiers()+" }"}}),v=new function(){var h,r,n={"\t":"tab"," ":"space","\b":"backspace","":"delete",Spacebar:"space",Del:"delete",Win:"meta",Esc:"escape"},i={tab:"\t",space:" ",enter:"\r"},u={},l={},c=new U({shift:!1,control:!1,alt:!1,meta:!1,capsLock:!1,space:!1}).inject({option:{get:function(){return this.alt}},command:{get:function(){var t=at&&at.agent;return t&&t.mac?this.meta:this.control}}});function s(t){var e=t.key||t.keyIdentifier,e=/^U\+/.test(e)?String.fromCharCode(parseInt(e.substr(2),16)):/^Arrow[A-Z]/.test(e)?e.substr(5):"Unidentified"===e||e===q?String.fromCharCode(t.keyCode):e;return n[e]||(1<e.length?U.hyphenate(e):e.toLowerCase())}function f(t,e,n,i){var r,s=j._focused;if((u[e]=t)?l[e]=n:delete l[e],1<e.length&&(r=U.camelize(e))in c){c[r]=t;var a=at&&at.agent;if("meta"===r&&a&&a.mac)if(t)h={};else{for(var o in h)o in l&&f(!1,o,h[o],i);h=null}}else t&&h&&(h[e]=n);s&&s._handleKeyEvent(t?"keydown":"keyup",i,e,n)}return F.add(T,{keydown:function(t){var e=s(t),n=at&&at.agent;1<e.length||n&&n.chrome&&(t.altKey||n.mac&&t.metaKey||!n.mac&&t.ctrlKey)?f(!0,e,i[e]||(1<e.length?"":e),t):r=e},keypress:function(t){var e,n,i;r&&(e=s(t),i=32<=(n=t.charCode)?String.fromCharCode(n):1<e.length?"":e,e!==r&&(e=i.toLowerCase()),f(!0,e,i,t),r=null)},keyup:function(t){var e=s(t);e in l&&f(!1,e,l[e],t)}}),F.add(A,{blur:function(t){for(var e in l)f(!1,e,l[e],t)}}),{modifiers:c,isDown:function(t){return!!u[t]}}},tt=p.extend({_class:"MouseEvent",initialize:function(t,e,n,i,r){this.type=t,this.event=e,this.point=n,this.target=i,this.delta=r},toString:function(){return"{ type: '"+this.type+"', point: "+this.point+", target: "+this.target+(this.delta?", delta: "+this.delta:"")+", modifiers: "+this.getModifiers()+" }"}}),y=p.extend({_class:"ToolEvent",_item:null,initialize:function(t,e,n){this.tool=t,this.type=e,this.event=n},_choosePoint:function(t,e){return t||(e?e.clone():null)},getPoint:function(){return this._choosePoint(this._point,this.tool._point)},setPoint:function(t){this._point=t},getLastPoint:function(){return this._choosePoint(this._lastPoint,this.tool._lastPoint)},setLastPoint:function(t){this._lastPoint=t},getDownPoint:function(){return this._choosePoint(this._downPoint,this.tool._downPoint)},setDownPoint:function(t){this._downPoint=t},getMiddlePoint:function(){return!this._middlePoint&&this.tool._lastPoint?this.tool._point.add(this.tool._lastPoint).divide(2):this._middlePoint},setMiddlePoint:function(t){this._middlePoint=t},getDelta:function(){return!this._delta&&this.tool._lastPoint?this.tool._point.subtract(this.tool._lastPoint):this._delta},setDelta:function(t){this._delta=t},getCount:function(){return this.tool[/^mouse(down|up)$/.test(this.type)?"_downCount":"_moveCount"]},setCount:function(t){this.tool[/^mouse(down|up)$/.test(this.type)?"downCount":"count"]=t},getItem:function(){if(!this._item){var t=this.tool._scope.project.hitTest(this.getPoint());if(t){for(var e=t.item,n=e._parent;/^(Group|CompoundPath)$/.test(n._class);)n=(e=n)._parent;this._item=e}}return this._item},setItem:function(t){this._item=t},toString:function(){return"{ type: "+this.type+", point: "+this.getPoint()+", count: "+this.getCount()+", modifiers: "+this.getModifiers()+" }"}}),et=e.extend({_class:"Tool",_list:"tools",_reference:"tool",_events:["onMouseDown","onMouseUp","onMouseDrag","onMouseMove","onActivate","onDeactivate","onEditOptions","onKeyDown","onKeyUp"],initialize:function(t){e.call(this),this._moveCount=-1,this._downCount=-1,this.set(t)},getMinDistance:function(){return this._minDistance},setMinDistance:function(t){null!=(this._minDistance=t)&&null!=this._maxDistance&&t>this._maxDistance&&(this._maxDistance=t)},getMaxDistance:function(){return this._maxDistance},setMaxDistance:function(t){this._maxDistance=t,null!=this._minDistance&&null!=t&&t<this._minDistance&&(this._minDistance=t)},getFixedDistance:function(){return this._minDistance==this._maxDistance?this._minDistance:null},setFixedDistance:function(t){this._minDistance=this._maxDistance=t},_handleMouseEvent:function(t,e,a,o){at=this._scope,o.drag&&!this.responds(t)&&(t="mousemove");var h=o.move||o.drag,n=this.responds(t),i=this.minDistance,r=this.maxDistance,s=!1,u=this;function l(t,e){var n=a,i=h?u._point:u._downPoint||n;if(h){if(0<=u._moveCount&&n.equals(i))return;if(i&&(null!=t||null!=e)){var r=n.subtract(i),s=r.getLength();if(s<(t||0))return;e&&(n=i.add(r.normalize(Math.min(s,e))))}u._moveCount++}return u._point=n,u._lastPoint=i||n,o.down&&(u._moveCount=-1,u._downPoint=n,u._downCount++),1}function c(){n&&(s=u.emit(t,new y(u,t,e))||s)}if(o.down)l(),c();else if(o.up)l(null,r),c();else if(n)for(;l(i,r);)c();return s}}),w=U.extend(t,{_class:"Tween",statics:{easings:{linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:2*(2-t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}},initialize:function t(e,n,i,r,s,a){this.object=e;var o=typeof s,h="function"==o;this.type=h?o:"string"==o?s:"linear",this.easing=h?s:t.easings[this.type],this.duration=r,this.running=!1,this._then=null,this._startTime=null;var u=n||i;this._keys=u?Object.keys(u):[],this._parsedKeys=this._parseKeys(this._keys),this._from=u&&this._getState(n),this._to=u&&this._getState(i),!1!==a&&this.start()},then:function(t){return this._then=t,this},start:function(){return this._startTime=null,this.running=!0,this},stop:function(){return this.running=!1,this},update:function(e){if(this.running){1<=e&&(e=1,this.running=!1);function t(t){return"function"==typeof t?t(n,e):t}for(var n=this.easing(e),i=this._keys,r=0,s=i&&i.length;r<s;r++){var a=i[r],o=t(this._from[a]),h=t(this._to[a]),u=o&&h&&o.__add&&h.__add?h.__subtract(o).__multiply(n).__add(o):(h-o)*n+o;this._setProperty(this._parsedKeys[a],u)}this.responds("update")&&this.emit("update",new U({progress:e,factor:n})),!this.running&&this._then&&this._then(this.object)}return this},_events:{onUpdate:{}},_handleFrame:function(t){var e=this._startTime,n=e?(t-e)/this.duration:0;e||(this._startTime=t),this.update(n)},_getState:function(t){for(var e=this._keys,n={},i=0,r=e.length;i<r;i++){var s,a,o=e[i],h=this._parsedKeys[o],u=this._getProperty(h);t?(a=this._resolveValue(u,t[o]),this._setProperty(h,a),s=(s=this._getProperty(h))&&s.clone?s.clone():s,this._setProperty(h,u)):s=u&&u.clone?u.clone():u,n[o]=s}return n},_resolveValue:function(t,e){if(e){if(Array.isArray(e)&&2===e.length){var n=e[0];return n&&n.match&&n.match(/^[+\-\*\/]=/)?this._calculate(t,n[0],e[1]):e}if("string"==typeof e){var i=e.match(/^[+\-*/]=(.*)/);if(i){var r=JSON.parse(i[1].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": '));return this._calculate(t,e[0],r)}}}return e},_calculate:function(t,e,n){return at.PaperScript.calculateBinary(t,e,n)},_parseKeys:function(t){for(var e={},n=0,i=t.length;n<i;n++){var r=t[n],s=r.replace(/\.([^.]*)/g,"/$1").replace(/\[['"]?([^'"\]]*)['"]?\]/g,"/$1");e[r]=s.split("/")}return e},_getProperty:function(t,e){for(var n=this.object,i=0,r=t.length-(e||0);i<r&&n;i++)n=n[t[i]];return n},_setProperty:function(t,e){var n=this._getProperty(t,1);n&&(n[t[t.length-1]]=e)}}),nt=function(n){var i=new C.XMLHttpRequest;return i.open((n.method||"get").toUpperCase(),n.url,U.pick(n.async,!0)),n.mimeType&&i.overrideMimeType(n.mimeType),i.onload=function(){var t=i.status;0===t||200===t?n.onLoad&&n.onLoad.call(i,i.responseText):i.onerror()},i.onerror=function(){var t=i.status,e='Could not load "'+n.url+'" (Status: '+t+")";if(!n.onError)throw new Error(e);n.onError(e,t)},i.send(null)},it={canvases:[],getCanvas:function(t,e){if(!A)return null;var n,i=!0;"object"==typeof t&&(e=t.height,t=t.width),this.canvases.length?n=this.canvases.pop():(n=T.createElement("canvas"),i=!1);var r=n.getContext("2d");if(!r)throw new Error("Canvas "+n+" is unable to provide a 2D context.");return n.width===t&&n.height===e?i&&r.clearRect(0,0,t+1,e+1):(n.width=t,n.height=e),r.save(),n},getContext:function(t,e){var n=this.getCanvas(t,e);return n?n.getContext("2d"):null},release:function(t){var e=t&&t.canvas?t.canvas:t;e&&e.getContext&&(e.getContext("2d").restore(),this.canvases.push(e))}},x=new function(){var g,p,v,m,y,w,x,b,C,S,k,l=Math.min,c=Math.max,t=Math.abs;function f(t,e,n){return.2989*t+.587*e+.114*n}function e(t,e,n,i){var r,s,a,o=i-f(t,e,n),i=f(C=t+o,S=e+o,k=n+o),h=l(C,S,k),u=c(C,S,k);h<0&&(C=i+(C-i)*i/(r=i-h),S=i+(S-i)*i/r,k=i+(k-i)*i/r),255<u&&(C=i+(C-i)*(s=255-i)/(a=u-i),S=i+(S-i)*s/a,k=i+(k-i)*s/a)}function n(t,e,n){return c(t,e,n)-l(t,e,n)}function i(t,e,n,i){var r=[t,e,n],s=c(t,e,n),a=l(t,e,n),o=0===l(a=a===t?0:a===e?1:2,s=s===t?0:s===e?1:2)?1===c(a,s)?2:1:0;r[s]>r[a]?(r[o]=(r[o]-r[a])*i/(r[s]-r[a]),r[s]=i):r[o]=r[s]=0,r[a]=0,C=r[0],S=r[1],k=r[2]}var I={multiply:function(){C=y*g/255,S=w*p/255,k=x*v/255},screen:function(){C=y+g-y*g/255,S=w+p-w*p/255,k=x+v-x*v/255},overlay:function(){C=y<128?2*y*g/255:255-2*(255-y)*(255-g)/255,S=w<128?2*w*p/255:255-2*(255-w)*(255-p)/255,k=x<128?2*x*v/255:255-2*(255-x)*(255-v)/255},"soft-light":function(){var t=g*y/255;C=t+y*(255-(255-y)*(255-g)/255-t)/255,S=(t=p*w/255)+w*(255-(255-w)*(255-p)/255-t)/255,k=(t=v*x/255)+x*(255-(255-x)*(255-v)/255-t)/255},"hard-light":function(){C=g<128?2*g*y/255:255-2*(255-g)*(255-y)/255,S=p<128?2*p*w/255:255-2*(255-p)*(255-w)/255,k=v<128?2*v*x/255:255-2*(255-v)*(255-x)/255},"color-dodge":function(){C=0===y?0:255===g?255:l(255,255*y/(255-g)),S=0===w?0:255===p?255:l(255,255*w/(255-p)),k=0===x?0:255===v?255:l(255,255*x/(255-v))},"color-burn":function(){C=255===y?255:0===g?0:c(0,255-255*(255-y)/g),S=255===w?255:0===p?0:c(0,255-255*(255-w)/p),k=255===x?255:0===v?0:c(0,255-255*(255-x)/v)},darken:function(){C=y<g?y:g,S=w<p?w:p,k=x<v?x:v},lighten:function(){C=g<y?y:g,S=p<w?w:p,k=v<x?x:v},difference:function(){(C=y-g)<0&&(C=-C),(S=w-p)<0&&(S=-S),(k=x-v)<0&&(k=-k)},exclusion:function(){C=y+g*(255-y-y)/255,S=w+p*(255-w-w)/255,k=x+v*(255-x-x)/255},hue:function(){i(g,p,v,n(y,w,x)),e(C,S,k,f(y,w,x))},saturation:function(){i(y,w,x,n(g,p,v)),e(C,S,k,f(y,w,x))},luminosity:function(){e(y,w,x,f(g,p,v))},color:function(){e(g,p,v,f(y,w,x))},add:function(){C=l(y+g,255),S=l(w+p,255),k=l(x+v,255)},subtract:function(){C=c(y-g,0),S=c(w-p,0),k=c(x-v,0)},average:function(){C=(y+g)/2,S=(w+p)/2,k=(x+v)/2},negation:function(){C=255-t(255-g-y),S=255-t(255-p-w),k=255-t(255-v-x)}},P=this.nativeModes=U.each(["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","darker","copy","xor"],function(t){this[t]=!0},{}),r=it.getContext(1,1);r&&(U.each(I,function(t,e){var n="darken"===e,i=!1;r.save();try{r.fillStyle=n?"#300":"#a00",r.fillRect(0,0,1,1),r.globalCompositeOperation=e,r.globalCompositeOperation===e&&(r.fillStyle=n?"#a00":"#300",r.fillRect(0,0,1,1),i=r.getImageData(0,0,1,1).data[0]!==n?170:51)}catch(t){}r.restore(),P[e]=i}),it.release(r)),this.process=function(t,e,n,i,r){var s=e.canvas,a="normal"===t;if(a||P[t])n.save(),n.setTransform(1,0,0,1,0,0),n.globalAlpha=i,a||(n.globalCompositeOperation=t),n.drawImage(s,r.x,r.y),n.restore();else{var o=I[t];if(!o)return;for(var h=n.getImageData(r.x,r.y,s.width,s.height),u=h.data,l=e.getImageData(0,0,s.width,s.height).data,c=0,f=u.length;c<f;c+=4){g=l[c],y=u[c],p=l[c+1],w=u[c+1],v=l[c+2],x=u[c+2],m=l[c+3],b=u[c+3],o();var d=m*i/255,_=1-d;u[c]=d*C+_*y,u[c+1]=d*S+_*w,u[c+2]=d*k+_*x,u[c+3]=m*i+_*b}n.putImageData(h,r.x,r.y)}}},rt=new function(){var i="http://www.w3.org/2000/svg",t="http://www.w3.org/2000/xmlns",e="http://www.w3.org/1999/xlink",a={href:e,xlink:t,xmlns:t+"/","xmlns:xlink":t+"/"};function r(t,e,n){for(var i in e){var r=e[i],s=a[i];"number"==typeof r&&n&&(r=n.number(r)),s?t.setAttributeNS(s,i,r):t.setAttribute(i,r)}return t}return{svg:i,xmlns:t,xlink:e,create:function(t,e,n){return r(T.createElementNS(i,t),e,n)},get:function(t,e){var n=a[e],i=n?t.getAttributeNS(n,e):t.getAttribute(e);return"null"===i?null:i},set:r}},st=U.each({fillColor:["fill","color"],fillRule:["fill-rule","string"],strokeColor:["stroke","color"],strokeWidth:["stroke-width","number"],strokeCap:["stroke-linecap","string"],strokeJoin:["stroke-linejoin","string"],strokeScaling:["vector-effect","lookup",{true:"none",false:"non-scaling-stroke"},function(t,e){return!e&&(t instanceof z||t instanceof k||t instanceof _)}],miterLimit:["stroke-miterlimit","number"],dashArray:["stroke-dasharray","array"],dashOffset:["stroke-dashoffset","number"],fontFamily:["font-family","string"],fontWeight:["font-weight","string"],fontSize:["font-size","number"],justification:["text-anchor","lookup",{left:"start",center:"middle",right:"end"}],opacity:["opacity","number"],blendMode:["mix-blend-mode","style"]},function(t,e){var n=U.capitalize(e),i=t[2];this[e]={type:t[1],property:e,attribute:t[0],toSVG:i,fromSVG:i&&U.each(i,function(t,e){this[t]=e},{}),exportFilter:t[3],get:"get"+n,set:"set"+n}},{});new function(){var g;function f(t,e,n){var i,r,s,a,o,h,u=new U,l=t.getTranslation();return e&&(t.isInvertible()?(i=(t=t._shiftless())._inverseTransform(l),l=null):i=new Z,u[n?"cx":"x"]=i.x,u[n?"cy":"y"]=i.y),t.isIdentity()||((r=t.decompose())?(s=[],a=r.rotation,o=r.scaling,h=r.skewing,l&&!l.isZero()&&s.push("translate("+g.point(l)+")"),a&&s.push("rotate("+g.number(a)+")"),H.isZero(o.x-1)&&H.isZero(o.y-1)||s.push("scale("+g.point(o)+")"),h.x&&s.push("skewX("+g.number(h.x)+")"),h.y&&s.push("skewY("+g.number(h.y)+")"),u.transform=s.join(" ")):u.transform="matrix("+t.getValues().join(",")+")"),u}function t(t,e){for(var n=f(t._matrix),i=t._children,r=rt.create("g",n,g),s=0,a=i.length;s<a;s++){var o,h=i[s],u=m(h,e);u&&(h.isClipMask()?((o=rt.create("clipPath")).appendChild(u),v(h,o,"clip"),rt.set(r,{"clip-path":"url(#"+o.id+")"})):r.appendChild(u))}return r}function d(t){var e,n,i,r=t._type,s=t._radius,a=f(t._matrix,!0,"rectangle"!==r);return"rectangle"===r&&(r="rect",n=(e=t._size).width,i=e.height,a.x-=n/2,a.y-=i/2,a.width=n,a.height=i,s.isZero()&&(s=null)),s&&("circle"===r?a.r=s:(a.rx=s.width,a.ry=s.height)),rt.create(r,a,g)}var s,o={Group:t,Layer:t,Raster:function(t,e){var n=f(t._matrix,!0),i=t.getSize(),r=t.getImage();return n.x-=i.width/2,n.y-=i.height/2,n.width=i.width,n.height=i.height,n.href=0==e.embedImages&&r&&r.src||t.toDataURL(),rt.create("image",n,g)},Path:function(t,e){var n=e.matchShapes;if(n){var i=t.toShape(!1);if(i)return d(i)}var r,s=t._segments,a=s.length,o=f(t._matrix);if(n&&2<=a&&!t.hasHandles())if(2<a){r=t._closed?"polygon":"polyline";for(var h=[],u=0;u<a;u++)h.push(g.point(s[u]._point));o.points=h.join(" ")}else{r="line";var l=s[0]._point,c=s[1]._point;o.set({x1:l.x,y1:l.y,x2:c.x,y2:c.y})}else r="path",o.d=t.getPathData(null,e.precision);return rt.create(r,o,g)},Shape:d,CompoundPath:function(t,e){var n=f(t._matrix),i=t.getPathData(null,e.precision);return i&&(n.d=i),rt.create("path",n,g)},SymbolItem:function(t,e){var n=f(t._matrix,!0),i=t._definition,r=p(i,"symbol"),s=i._item,a=s.getStrokeBounds();return r||((r=rt.create("symbol",{viewBox:g.rectangle(a)})).appendChild(m(s,e)),v(i,r,"symbol")),n.href="#"+r.id,n.x+=a.x,n.y+=a.y,n.width=a.width,n.height=a.height,n.overflow="visible",rt.create("use",n,g)},PointText:function(t){var e=rt.create("text",f(t._matrix,!0),g);return e.textContent=t._content,e}};function h(s,t,e){var a={},o=!e&&s.getParent(),h=[];return null!=s._name&&(a.id=s._name),U.each(st,function(t){var e,n=t.get,i=t.type,r=s[n]();(t.exportFilter?!t.exportFilter(s,r):o&&U.equals(o[n](),r))||("color"!==i||null==r||(e=r.getAlpha())<1&&(a[t.attribute+"-opacity"]=e),"style"===i?h.push(t.attribute+": "+r):a[t.attribute]=null==r?"none":"color"===i?r.gradient?function(t){var e=p(t,"color");if(!e){var n,i=t.getGradient(),r=i._radial,s=t.getOrigin(),a=t.getDestination();r?(_={cx:s.x,cy:s.y,r:s.getDistance(a)},(n=t.getHighlight())&&(_.fx=n.x,_.fy=n.y)):_={x1:s.x,y1:s.y,x2:a.x,y2:a.y},_.gradientUnits="userSpaceOnUse",e=rt.create((r?"radial":"linear")+"Gradient",_,g);for(var o=i._stops,h=0,u=o.length;h<u;h++){var l=o[h],c=l._color,f=c.getAlpha(),d=l._offset,_={offset:null==d?h/(u-1):d};c&&(_["stop-color"]=c.toCSS(!0)),f<1&&(_["stop-opacity"]=f),e.appendChild(rt.create("stop",_,g))}v(t,e,"color")}return"url(#"+e.id+")"}(r):r.toCSS(!0):"array"===i?r.join(","):"lookup"===i?t.toSVG[r]:r)}),h.length&&(a.style=h.join(";")),1===a.opacity&&delete a.opacity,s._visible||(a.visibility="hidden"),rt.set(t,a,g)}function p(t,e){return s=s||{ids:{},svgs:{}},t&&s.svgs[e+"-"+(t._id||t.__id||(t.__id=u.get("svg")))]}function v(t,e,n){s||p();var i=s.ids[n]=(s.ids[n]||0)+1;e.id=n+"-"+i,s.svgs[n+"-"+(t._id||t.__id)]=e}function _(t,e){var n=t,i=null;if(s){for(var r in n="svg"===t.nodeName.toLowerCase()&&t,s.svgs)i||(n||(n=rt.create("svg")).appendChild(t),i=n.insertBefore(rt.create("defs"),n.firstChild)),i.appendChild(s.svgs[r]);s=null}return e.asString?(new C.XMLSerializer).serializeToString(n):n}function m(t,e,n){var i,r,s=o[t._class],a=s&&s(t,e);return a&&((i=e.onExport)&&(a=i(t,a,e)||a),(r=JSON.stringify(t._data))&&"{}"!==r&&"null"!==r&&a.setAttribute("data-paper-data",r)),a&&h(t,a,n)}function y(t){return g=new b((t=t||{}).precision),t}D.inject({exportSVG:function(t){return _(m(this,t=y(t),!0),t)}}),l.inject({exportSVG:function(t){t=y(t);var e=this._children,n=this.getView(),i=U.pick(t.bounds,"view"),r=t.matrix||"view"===i&&n._matrix,s=r&&$.read([r]),a="view"===i?new M([0,0],n.getViewSize()):"content"===i?D._getBounds(e,s,{stroke:!0}).rect:M.read([i],0,{readNull:!0}),o={version:"1.1",xmlns:rt.svg,"xmlns:xlink":rt.xlink};a&&(o.width=a.width,o.height=a.height,(a.x||0===a.x||a.y||0===a.y)&&(o.viewBox=g.rectangle(a)));var h=rt.create("svg",o,g),u=h;s&&!s.isIdentity()&&(u=h.appendChild(rt.create("g",f(s),g)));for(var l=0,c=e.length;l<c;l++)u.appendChild(m(e[l],t,!0));return _(h,t)}})},new function(){var p,v={};function _(t,e,n,i,r,s){var a=rt.get(t,e)||s,o=null==a?i?null:n?"":0:n?a:parseFloat(a);return/%\s*$/.test(a)?o/100*(r?1:p[/x|^width/.test(e)?"width":"height"]):o}function g(t,e,n,i,r,s,a){return e=_(t,e||"x",!1,i,r,s),n=_(t,n||"y",!1,i,r,a),!i||null!=e&&null!=n?new Z(e,n):null}function m(t,e,n,i,r){return e=_(t,e||"width",!1,i,r),n=_(t,n||"height",!1,i,r),!i||null!=e&&null!=n?new W(e,n):null}function c(t,e,n){return"none"===t?null:"number"===e?parseFloat(t):"array"===e?t?t.split(/[\s,]+/g).map(parseFloat):[]:"color"===e?s(t)||t:"lookup"===e?n[t]:t}function r(t,e,n,i){var r=t.childNodes,s="clippath"===e,a="defs"===e,o=new S,h=o._project,u=h._currentStyle,l=[];if(s||a||(o=w(o,t,i),h._currentStyle=o._style.clone()),i)for(var c=t.querySelectorAll("defs"),f=0,d=c.length;f<d;f++)x(c[f],n,!1);for(f=0,d=r.length;f<d;f++){var _,g=r[f];1!==g.nodeType||/^defs$/i.test(g.nodeName)||!(_=x(g,n,!1))||_ instanceof P||l.push(_)}return o.addChildren(l),s&&(o=w(o.reduce(),t,i)),h._currentStyle=u,(s||a)&&(o.remove(),o=null),o}function t(t,e){for(var n=t.getAttribute("points").match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g),i=[],r=0,s=n.length;r<s;r+=2)i.push(new Z(parseFloat(n[r]),parseFloat(n[r+1])));var a=new Q(i);return"polygon"===e&&a.closePath(),a}function e(t,e){var n,i=(_(t,"href",!0)||"").substring(1),r="radialgradient"===e;if(i)(n=v[i].getGradient())._radial^r&&((n=n.clone())._radial=r);else{for(var s=t.childNodes,a=[],o=0,h=s.length;o<h;o++){var u=s[o];1===u.nodeType&&a.push(w(new N,u))}n=new L(a,r)}var l,c,f,d="userSpaceOnUse"!==_(t,"gradientUnits",!0);return r?(c=(l=g(t,"cx","cy",!1,d,"50%","50%")).add(_(t,"r",!1,!1,d,"50%"),0),f=g(t,"fx","fy",!0,d)):(l=g(t,"x1","y1",!1,d,"0%","0%"),c=g(t,"x2","y2",!1,d,"100%","0%")),w(new E(n,l,c,f),t)._scaleToBounds=d,null}var y={"#document":function(t,e,n,i){for(var r=t.childNodes,s=0,a=r.length;s<a;s++){var o=r[s];if(1===o.nodeType)return x(o,n,i)}},g:r,svg:r,clippath:r,polygon:t,polyline:t,path:function(t){return z.create(t.getAttribute("d"))},lineargradient:e,radialgradient:e,image:function(n){var t=new I(_(n,"href",!0));return t.on("load",function(){var t=m(n);this.setSize(t);var e=g(n).add(t.divide(2));this._matrix.append((new $).translate(e))}),t},symbol:function(t,e,n,i){return new P(r(t,e,n,i),!0)},defs:r,use:function(t){var e=(_(t,"href",!0)||"").substring(1),n=v[e],i=g(t);return n?n instanceof P?n.place(i):n.clone().translate(i):null},circle:function(t){return new k.Circle(g(t,"cx","cy"),_(t,"r"))},ellipse:function(t){return new k.Ellipse({center:g(t,"cx","cy"),radius:m(t,"rx","ry")})},rect:function(t){return new k.Rectangle(new M(g(t),m(t)),m(t,"rx","ry"))},line:function(t){return new Q.Line(g(t,"x1","y1"),g(t,"x2","y2"))},text:function(t){var e=new h(g(t).add(g(t,"dx","dy")));return e.setContent(t.textContent.trim()||""),e},switch:r};function n(t,e,n,i){if(t.transform){for(var r=(i.getAttribute(n)||"").split(/\)\s*/g),s=new $,a=0,o=r.length;a<o;a++){var h=r[a];if(!h)break;for(var u=h.split(/\(\s*/),l=u[0],c=u[1].split(/[\s,]+/g),f=0,d=c.length;f<d;f++)c[f]=parseFloat(c[f]);switch(l){case"matrix":s.append(new $(c[0],c[1],c[2],c[3],c[4],c[5]));break;case"rotate":s.rotate(c[0],c[1]||0,c[2]||0);break;case"translate":s.translate(c[0],c[1]||0);break;case"scale":s.scale(c);break;case"skewX":s.skew(c[0],0);break;case"skewY":s.skew(0,c[0])}}t.transform(s)}}function i(t,e,n){var i="fill-opacity"===n?"getFillColor":"getStrokeColor",r=t[i]&&t[i]();r&&r.setAlpha(parseFloat(e))}var a=U.set(U.each(st,function(r){this[r.attribute]=function(t,e){var n,i;t[r.set]&&(t[r.set](c(e,r.type,r.fromSVG)),"color"!==r.type||(n=t[r.get]())&&n._scaleToBounds&&(i=t.getBounds(),n.transform((new $).translate(i.getPoint()).scale(i.getSize()))))}},{}),{id:function(t,e){(v[e]=t).setName&&t.setName(e)},"clip-path":function(t,e){var n=s(e);if(n){if((n=n.clone()).setClipMask(!0),!(t instanceof S))return new S(n,t);t.insertChild(0,n)}},gradientTransform:n,transform:n,"fill-opacity":i,"stroke-opacity":i,visibility:function(t,e){t.setVisible&&t.setVisible("visible"===e)},display:function(t,e){t.setVisible&&t.setVisible(null!==e)},"stop-color":function(t,e){t.setColor&&t.setColor(e)},"stop-opacity":function(t,e){t._color&&t._color.setAlpha(parseFloat(e))},offset:function(t,e){var n;t.setOffset&&(n=e.match(/(.*)%$/),t.setOffset(n?n[1]/100:parseFloat(e)))},viewBox:function(t,e,n,i,r){var s,a,o,h,u=new M(c(e,"array")),l=m(i,null,null,!0);t instanceof S?(s=l?l.divide(u.getSize()):1,a=(new $).scale(s).translate(u.getPoint().negate()),o=t):t instanceof P&&(l&&u.setSize(l),o=t._item),o&&("visible"!==f(i,"overflow",r)&&((h=new k.Rectangle(u)).setClipMask(!0),o.addChild(h)),a&&o.transform(a))}});function f(t,e,n){var i,r=t.attributes[e],s=r&&r.value;return!s&&t.style&&(i=U.camelize(e),(s=t.style[i])||n.node[i]===n.parent[i]||(s=n.node[i])),s?"none"===s?null:s:q}function w(i,r,t){var e=r.parentNode,s={node:B.getStyles(r)||{},parent:!t&&!/^defs$/i.test(e.tagName)&&B.getStyles(e)||{}};return U.each(a,function(t,e){var n=f(r,e,s);i=n!==q&&t(i,n,e,r,s)||i}),i}function s(t){var e=t&&t.match(/\((?:["'#]*)([^"')]+)/),n=e&&e[1],i=n&&v[A?n.replace(A.location.href.split("#")[0]+"#",""):n];return i&&i._scaleToBounds&&((i=i.clone())._scaleToBounds=!0),i}function x(t,e,n){var i,r,s,a=t.nodeName.toLowerCase(),o="#document"!==a,h=T.body;n&&o&&(p=at.getView().getSize(),p=m(t,null,null,!0)||p,i=rt.create("svg",{style:"stroke-width: 1px; stroke-miterlimit: 10"}),r=t.parentNode,s=t.nextSibling,i.appendChild(t),h.appendChild(i));var u=at.settings,l=u.applyMatrix,c=u.insertItems;u.applyMatrix=!1,u.insertItems=!1;var f,d,_=y[a],g=_&&_(t,a,e,n)||null;return u.insertItems=c,u.applyMatrix=l,g&&(!o||g instanceof S||(g=w(g,t,n)),f=e.onImport,d=o&&t.getAttribute("data-paper-data"),f&&(g=f(t,g,e)||g),e.expandShapes&&g instanceof k&&(g.remove(),g=g.toPath()),d&&(g._data=JSON.parse(d))),i&&(h.removeChild(i),r&&(s?r.insertBefore(t,s):r.appendChild(t))),n&&(v={},g&&U.pick(e.applyMatrix,l)&&g.matrix.apply(!0,!0)),g}function o(i,r,s){if(!i)return null;r="function"==typeof r?{onLoad:r}:r||{};var a=at,o=null;function t(t){try{var e="object"==typeof t?t:(new C.DOMParser).parseFromString(t.trim(),"image/svg+xml");if(!e.nodeName)throw e=null,new Error("Unsupported SVG source: "+i);at=a,o=x(e,r,!0),r&&!1===r.insert||s._insertItem(q,o);var n=r.onLoad;n&&n(o,t)}catch(t){h(t)}}function h(t,e){var n=r.onError;if(!n)throw new Error(t);n(t,e)}if("string"!=typeof i||/^[\s\S]*</.test(i)){if("undefined"!=typeof File&&i instanceof File){var e=new FileReader;return e.onload=function(){t(e.result)},e.onerror=function(){h(e.error)},e.readAsText(i)}t(i)}else{var n=T.getElementById(i);n?t(n):nt({url:i,async:!0,onLoad:t,onError:h})}return o}D.inject({importSVG:function(t,e){return o(t,e,this)}}),l.inject({importSVG:function(t,e){return this.activate(),o(t,e,this)}})},U.exports.PaperScript=function(){var t,e,n,i,r=this,s=r.acorn;if(!s&&"undefined"!=typeof require)try{s=require("acorn")}catch(t){}function y(t,e){return(r.acorn||s).parse(t,e)}s||(s=t=e={},n=this,i=function(t){"use strict";var d,_,f,n;t.version="0.5.0",t.parse=function(t,e){return _=String(t),f=_.length,r(e),Wt(),function(t){b=C=g,d.locations&&(h=new Zt);S=I=null,k=[],Qt();var e=t||le(),n=!0;t||(e.body=[]);for(;v!==c;){var i=be();e.body.push(i),n&&de(i)&&oe(!0),n=!1}return fe(e,"Program")}(d.program)};var i=t.defaultOptions={ecmaVersion:5,strictSemicolons:!1,allowTrailingCommas:!0,forbidReserved:!1,allowReturnOutsideFunction:!1,locations:!1,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null};function r(t){for(var e in d=t||{},i)Object.prototype.hasOwnProperty.call(d,e)||(d[e]=i[e]);n=d.sourceFile||null}var g,p,s,a,o,v,m,y,w,x,b,C,h,S,k,I,u=t.getLineInfo=function(t,e){for(var n=1,i=0;;){Vt.lastIndex=i;var r=Vt.exec(t);if(!(r&&r.index<e))break;++n,i=r.index+r[0].length}return{line:n,column:e-i}};function P(t,e){var n=u(_,t);e+=" ("+n.line+":"+n.column+")";var i=new SyntaxError(e);throw i.pos=t,i.loc=n,i.raisedAt=g,i}t.tokenize=function(t,e){_=String(t),f=_.length,r(e),Wt();var n={};function i(t){return C=s,Qt(t),n.start=p,n.end=s,n.startLoc=a,n.endLoc=o,n.type=v,n.value=m,n}return i.jumpTo=function(t,e){var n;if(g=t,d.locations)for(w=1,x=Vt.lastIndex=0;(n=Vt.exec(_))&&n.index<t;)++w,x=n.index+n[0].length;y=e,Xt()},i};var M=[],A={type:"num"},l={type:"regexp"},T={type:"string"},O={type:"name"},c={type:"eof"},z={keyword:"break"},E={keyword:"case",beforeExpr:!0},L={keyword:"catch"},N={keyword:"continue"},B={keyword:"debugger"},F={keyword:"default"},j={keyword:"do",isLoop:!0},R={keyword:"else",beforeExpr:!0},D={keyword:"finally"},q={keyword:"for",isLoop:!0},V={keyword:"function"},U={keyword:"if"},H={keyword:"return",beforeExpr:!0},Z={keyword:"switch"},W={keyword:"throw",beforeExpr:!0},$={keyword:"try"},G={keyword:"var"},J={keyword:"while",isLoop:!0},X={keyword:"with"},K={keyword:"new",beforeExpr:!0},Q={keyword:"this"},Y={keyword:"null",atomValue:null},tt={keyword:"true",atomValue:!0},et={keyword:"false",atomValue:!1},nt={keyword:"in",binop:7,beforeExpr:!0},it={break:z,case:E,catch:L,continue:N,debugger:B,default:F,do:j,else:R,finally:D,for:q,function:V,if:U,return:H,switch:Z,throw:W,try:$,var:G,while:J,with:X,null:Y,true:tt,false:et,new:K,in:nt,instanceof:{keyword:"instanceof",binop:7,beforeExpr:!0},this:Q,typeof:{keyword:"typeof",prefix:!0,beforeExpr:!0},void:{keyword:"void",prefix:!0,beforeExpr:!0},delete:{keyword:"delete",prefix:!0,beforeExpr:!0}},rt={type:"[",beforeExpr:!0},st={type:"]"},at={type:"{",beforeExpr:!0},ot={type:"}"},ht={type:"(",beforeExpr:!0},ut={type:")"},lt={type:",",beforeExpr:!0},ct={type:";",beforeExpr:!0},ft={type:":",beforeExpr:!0},dt={type:"."},_t={type:"?",beforeExpr:!0},gt={binop:10,beforeExpr:!0},pt={isAssign:!0,beforeExpr:!0},vt={isAssign:!0,beforeExpr:!0},mt={postfix:!0,prefix:!0,isUpdate:!0},yt={prefix:!0,beforeExpr:!0},wt={binop:1,beforeExpr:!0},xt={binop:2,beforeExpr:!0},bt={binop:3,beforeExpr:!0},Ct={binop:4,beforeExpr:!0},St={binop:5,beforeExpr:!0},kt={binop:6,beforeExpr:!0},It={binop:7,beforeExpr:!0},Pt={binop:8,beforeExpr:!0},Mt={binop:9,prefix:!0,beforeExpr:!0},At={binop:10,beforeExpr:!0};for(var e in t.tokTypes={bracketL:rt,bracketR:st,braceL:at,braceR:ot,parenL:ht,parenR:ut,comma:lt,semi:ct,colon:ft,dot:dt,question:_t,slash:gt,eq:pt,name:O,eof:c,num:A,regexp:l,string:T},it)t.tokTypes["_"+e]=it[e];function Tt(t){t=t.split(" ");var n="",e=[];t:for(var i=0;i<t.length;++i){for(var r=0;r<e.length;++r)if(e[r][0].length==t[i].length){e[r].push(t[i]);continue t}e.push([t[i]])}function s(t){if(1==t.length)return n+="return str === "+JSON.stringify(t[0])+";";n+="switch(str){";for(var e=0;e<t.length;++e)n+="case "+JSON.stringify(t[e])+":";n+="return true}return false;"}if(3<e.length){e.sort(function(t,e){return e.length-t.length}),n+="switch(str.length){";for(i=0;i<e.length;++i){var a=e[i];n+="case "+a[0].length+":",s(a)}n+="}"}else s(t);return new Function("str",n)}var Ot,zt=Tt("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"),Et=Tt("class enum extends super const export import"),Lt=Tt("implements interface let package private protected public static yield"),Nt=Tt("eval arguments"),Bt=Tt("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),Ft=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,jt="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",Rt=new RegExp("["+jt+"]"),Dt=new RegExp("["+jt+"̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]"),qt=/[\n\r\u2028\u2029]/,Vt=/\r\n|[\n\r\u2028\u2029]/g,Ut=t.isIdentifierStart=function(t){return t<65?36===t:t<91||(t<97?95===t:t<123||170<=t&&Rt.test(String.fromCharCode(t)))},Ht=t.isIdentifierChar=function(t){return t<48?36===t:t<58||!(t<65)&&(t<91||(t<97?95===t:t<123||170<=t&&Dt.test(String.fromCharCode(t))))};function Zt(){this.line=w,this.column=g-x}function Wt(){w=1,g=x=0,y=!0,Xt()}function $t(t,e){s=g,d.locations&&(o=new Zt),v=t,Xt(),m=e,y=t.beforeExpr}function Gt(){var t,e=d.onComment&&d.locations&&new Zt,n=g,i=_.indexOf("*/",g+=2);if(-1===i&&P(g-2,"Unterminated comment"),g=i+2,d.locations)for(Vt.lastIndex=n;(t=Vt.exec(_))&&t.index<g;)++w,x=t.index+t[0].length;d.onComment&&d.onComment(!0,_.slice(n+2,i),n,g,e,d.locations&&new Zt)}function Jt(){for(var t=g,e=d.onComment&&d.locations&&new Zt,n=_.charCodeAt(g+=2);g<f&&10!==n&&13!==n&&8232!==n&&8233!==n;)++g,n=_.charCodeAt(g);d.onComment&&d.onComment(!1,_.slice(t+2,g),t,g,e,d.locations&&new Zt)}function Xt(){for(;g<f;){var t,e=_.charCodeAt(g);if(32===e)++g;else if(13===e){++g,10===(t=_.charCodeAt(g))&&++g,d.locations&&(++w,x=g)}else if(10===e||8232===e||8233===e)++g,d.locations&&(++w,x=g);else if(8<e&&e<14)++g;else if(47===e){if(42===(t=_.charCodeAt(g+1)))Gt();else{if(47!==t)break;Jt()}}else if(160===e)++g;else{if(!(5760<=e&&Ft.test(String.fromCharCode(e))))break;++g}}}function Kt(t){switch(t){case 46:return 48<=(c=_.charCodeAt(g+1))&&c<=57?ne(!0):(++g,$t(dt));case 40:return++g,$t(ht);case 41:return++g,$t(ut);case 59:return++g,$t(ct);case 44:return++g,$t(lt);case 91:return++g,$t(rt);case 93:return++g,$t(st);case 123:return++g,$t(at);case 125:return++g,$t(ot);case 58:return++g,$t(ft);case 63:return++g,$t(_t);case 48:var e=_.charCodeAt(g+1);if(120===e||88===e)return function(){g+=2;var t=ee(16);null==t&&P(p+2,"Expected hexadecimal number");Ut(_.charCodeAt(g))&&P(g,"Identifier directly after number");return $t(A,t)}();case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return ne(!1);case 34:case 39:return function(t){g++;for(var e="";;){f<=g&&P(p,"Unterminated string constant");var n=_.charCodeAt(g);if(n===t)return++g,$t(T,e);if(92===n){n=_.charCodeAt(++g);var i=/^[0-7]+/.exec(_.slice(g,g+3));for(i=i&&i[0];i&&255<parseInt(i,8);)i=i.slice(0,-1);if("0"===i&&(i=null),++g,i)I&&P(g-2,"Octal literal in strict mode"),e+=String.fromCharCode(parseInt(i,8)),g+=i.length-1;else switch(n){case 110:e+="\n";break;case 114:e+="\r";break;case 120:e+=String.fromCharCode(ie(2));break;case 117:e+=String.fromCharCode(ie(4));break;case 85:e+=String.fromCharCode(ie(8));break;case 116:e+="\t";break;case 98:e+="\b";break;case 118:e+="\v";break;case 102:e+="\f";break;case 48:e+="\0";break;case 13:10===_.charCodeAt(g)&&++g;case 10:d.locations&&(x=g,++w);break;default:e+=String.fromCharCode(n)}}else 13!==n&&10!==n&&8232!==n&&8233!==n||P(p,"Unterminated string constant"),e+=String.fromCharCode(n),++g}}(t);case 47:return l=_.charCodeAt(g+1),y?(++g,te()):61===l?Yt(vt,2):Yt(gt,1);case 37:case 42:return 61===_.charCodeAt(g+1)?Yt(vt,2):Yt(At,1);case 124:case 38:return h=t,(u=_.charCodeAt(g+1))===h?Yt(124===h?wt:xt,2):61===u?Yt(vt,2):Yt(124===h?bt:St,1);case 94:return 61===_.charCodeAt(g+1)?Yt(vt,2):Yt(Ct,1);case 43:case 45:return a=t,(o=_.charCodeAt(g+1))===a?45==o&&62==_.charCodeAt(g+2)&&qt.test(_.slice(C,g))?(g+=3,Jt(),Xt(),Qt()):Yt(mt,2):61===o?Yt(vt,2):Yt(Mt,1);case 60:case 62:return i=t,r=_.charCodeAt(g+1),s=1,r===i?(s=62===i&&62===_.charCodeAt(g+2)?3:2,61===_.charCodeAt(g+s)?Yt(vt,s+1):Yt(Pt,s)):33==r&&60==i&&45==_.charCodeAt(g+2)&&45==_.charCodeAt(g+3)?(g+=4,Jt(),Xt(),Qt()):(61===r&&(s=61===_.charCodeAt(g+2)?3:2),Yt(It,s));case 61:case 33:return n=t,61===_.charCodeAt(g+1)?Yt(kt,61===_.charCodeAt(g+2)?3:2):Yt(61===n?pt:yt,1);case 126:return Yt(yt,1)}var n,i,r,s,a,o,h,u,l,c;return!1}function Qt(t){if(t?g=p+1:p=g,d.locations&&(a=new Zt),t)return te();if(f<=g)return $t(c);var e=_.charCodeAt(g);if(Ut(e)||92===e)return se();var n=Kt(e);if(!1===n){var i=String.fromCharCode(e);if("\\"===i||Rt.test(i))return se();P(g,"Unexpected character '"+i+"'")}return n}function Yt(t,e){var n=_.slice(g,g+e);g+=e,$t(t,n)}function te(){for(var t,e,n=g;;){f<=g&&P(n,"Unterminated regular expression");var i=_.charAt(g);if(qt.test(i)&&P(n,"Unterminated regular expression"),t)t=!1;else{if("["===i)e=!0;else if("]"===i&&e)e=!1;else if("/"===i&&!e)break;t="\\"===i}++g}var r=_.slice(n,g);++g;var s=re();s&&!/^[gmsiy]*$/.test(s)&&P(n,"Invalid regexp flag");try{var a=new RegExp(r,s)}catch(t){t instanceof SyntaxError&&P(n,t.message),P(t)}return $t(l,a)}function ee(t,e){for(var n=g,i=0,r=0,s=null==e?1/0:e;r<s;++r){var a=_.charCodeAt(g),o=97<=a?a-97+10:65<=a?a-65+10:48<=a&&a<=57?a-48:1/0;if(t<=o)break;++g,i=i*t+o}return g===n||null!=e&&g-n!==e?null:i}function ne(t){var e=g,n=!1,i=48===_.charCodeAt(g);t||null!==ee(10)||P(e,"Invalid number"),46===_.charCodeAt(g)&&(++g,ee(10),n=!0);var r=_.charCodeAt(g);69!==r&&101!==r||(43!==(r=_.charCodeAt(++g))&&45!==r||++g,null===ee(10)&&P(e,"Invalid number"),n=!0),Ut(_.charCodeAt(g))&&P(g,"Identifier directly after number");var s,a=_.slice(e,g);return n?s=parseFloat(a):i&&1!==a.length?/[89]/.test(a)||I?P(e,"Invalid number"):s=parseInt(a,8):s=parseInt(a,10),$t(A,s)}function ie(t){var e=ee(16,t);return null===e&&P(p,"Bad character escape sequence"),e}function re(){for(var t,e=!(Ot=!1),n=g;;){var i=_.charCodeAt(g);if(Ht(i))Ot&&(t+=_.charAt(g)),++g;else{if(92!==i)break;Ot||(t=_.slice(n,g)),Ot=!0,117!=_.charCodeAt(++g)&&P(g,"Expecting Unicode escape sequence \\uXXXX"),++g;var r=ie(4),s=String.fromCharCode(r);s||P(g-1,"Invalid Unicode escape"),(e?Ut:Ht)(r)||P(g-4,"Invalid Unicode escape"),t+=s}e=!1}return Ot?t:_.slice(n,g)}function se(){var t=re(),e=O;return!Ot&&Bt(t)&&(e=it[t]),$t(e,t)}function ae(){b=p,C=s,h=o,Qt()}function oe(t){if(I=t,g=p,d.locations)for(;g<x;)x=_.lastIndexOf("\n",x-2)+1,--w;Xt(),Qt()}function he(){this.type=null,this.start=p,this.end=null}function ue(){this.start=a,(this.end=null)!==n&&(this.source=n)}function le(){var t=new he;return d.locations&&(t.loc=new ue),d.directSourceFile&&(t.sourceFile=d.directSourceFile),d.ranges&&(t.range=[p,0]),t}function ce(t){var e=new he;return e.start=t.start,d.locations&&(e.loc=new ue,e.loc.start=t.loc.start),d.ranges&&(e.range=[t.range[0],0]),e}function fe(t,e){return t.type=e,t.end=C,d.locations&&(t.loc.end=h),d.ranges&&(t.range[1]=C),t}function de(t){return 5<=d.ecmaVersion&&"ExpressionStatement"===t.type&&"Literal"===t.expression.type&&"use strict"===t.expression.value}function _e(t){return v===t&&(ae(),1)}function ge(){return!d.strictSemicolons&&(v===c||v===ot||qt.test(_.slice(C,p)))}function pe(){_e(ct)||ge()||me()}function ve(t){(v===t?ae:me)()}function me(){P(p,"Unexpected token")}function ye(t){"Identifier"!==t.type&&"MemberExpression"!==t.type&&P(t.start,"Assigning to rvalue"),I&&"Identifier"===t.type&&Nt(t.name)&&P(t.start,"Assigning to "+t.name+" in strict mode")}var we={kind:"loop"},xe={kind:"switch"};function be(){(v===gt||v===vt&&"/="==m)&&Qt(!0);var t,e,n,i,r=v,s=le();switch(r){case z:case N:ae();var a=r===z;_e(ct)||ge()?s.label=null:v!==O?me():(s.label=Be(),pe());for(var o=0;o<k.length;++o){var h=k[o];if(null==s.label||h.name===s.label.name){if(null!=h.kind&&(a||"loop"===h.kind))break;if(s.label&&a)break}}return o===k.length&&P(s.start,"Unsyntactic "+r.keyword),fe(s,a?"BreakStatement":"ContinueStatement");case B:return ae(),pe(),fe(s,"DebuggerStatement");case j:return ae(),k.push(we),s.body=be(),k.pop(),ve(J),s.test=Ce(),pe(),fe(s,"DoWhileStatement");case q:if(ae(),k.push(we),ve(ht),v===ct)return ke(s,null);if(v===G){var u=le();return ae(),Pe(u,!0),fe(u,"VariableDeclaration"),(1===u.declarations.length&&_e(nt)?Ie:ke)(s,u)}u=Me(!1,!0);return _e(nt)?(ye(u),Ie(s,u)):ke(s,u);case V:return ae(),Le(s,!0);case U:return ae(),s.test=Ce(),s.consequent=be(),s.alternate=_e(R)?be():null,fe(s,"IfStatement");case H:return S||d.allowReturnOutsideFunction||P(p,"'return' outside of function"),ae(),_e(ct)||ge()?s.argument=null:(s.argument=Me(),pe()),fe(s,"ReturnStatement");case Z:ae(),s.discriminant=Ce(),s.cases=[],ve(at),k.push(xe);for(;v!=ot;){v===E||v===F?(n=v===E,t&&fe(t,"SwitchCase"),s.cases.push(t=le()),t.consequent=[],ae(),n?t.test=Me():(e&&P(b,"Multiple default clauses"),e=!0,t.test=null),ve(ft)):(t||me(),t.consequent.push(be()))}return t&&fe(t,"SwitchCase"),ae(),k.pop(),fe(s,"SwitchStatement");case W:return ae(),qt.test(_.slice(C,p))&&P(C,"Illegal newline after throw"),s.argument=Me(),pe(),fe(s,"ThrowStatement");case $:return ae(),s.block=Se(),s.handler=null,v===L&&(i=le(),ae(),ve(ht),i.param=Be(),I&&Nt(i.param.name)&&P(i.param.start,"Binding "+i.param.name+" in strict mode"),ve(ut),i.guard=null,i.body=Se(),s.handler=fe(i,"CatchClause")),s.guardedHandlers=M,s.finalizer=_e(D)?Se():null,s.handler||s.finalizer||P(s.start,"Missing catch or finally clause"),fe(s,"TryStatement");case G:return ae(),Pe(s),pe(),fe(s,"VariableDeclaration");case J:return ae(),s.test=Ce(),k.push(we),s.body=be(),k.pop(),fe(s,"WhileStatement");case X:return I&&P(p,"'with' in strict mode"),ae(),s.object=Ce(),s.body=be(),fe(s,"WithStatement");case at:return Se();case ct:return ae(),fe(s,"EmptyStatement");default:var l=m,c=Me();if(r===O&&"Identifier"===c.type&&_e(ft)){for(o=0;o<k.length;++o)k[o].name===l&&P(c.start,"Label '"+l+"' is already declared");var f=v.isLoop?"loop":v===Z?"switch":null;return k.push({name:l,kind:f}),s.body=be(),k.pop(),s.label=c,fe(s,"LabeledStatement")}return s.expression=c,pe(),fe(s,"ExpressionStatement")}}function Ce(){ve(ht);var t=Me();return ve(ut),t}function Se(t){var e,n=le(),i=!0,r=!1;for(n.body=[],ve(at);!_e(ot);){var s=be();n.body.push(s),i&&t&&de(s)&&(e=r,oe(r=!0)),i=!1}return r&&!e&&oe(!1),fe(n,"BlockStatement")}function ke(t,e){return t.init=e,ve(ct),t.test=v===ct?null:Me(),ve(ct),t.update=v===ut?null:Me(),ve(ut),t.body=be(),k.pop(),fe(t,"ForStatement")}function Ie(t,e){return t.left=e,t.right=Me(),ve(ut),t.body=be(),k.pop(),fe(t,"ForInStatement")}function Pe(t,e){for(t.declarations=[],t.kind="var";;){var n=le();if(n.id=Be(),I&&Nt(n.id.name)&&P(n.id.start,"Binding "+n.id.name+" in strict mode"),n.init=_e(pt)?Me(!0,e):null,t.declarations.push(fe(n,"VariableDeclarator")),!_e(lt))break}return t}function Me(t,e){var n=Ae(e);if(t||v!==lt)return n;var i=ce(n);for(i.expressions=[n];_e(lt);)i.expressions.push(Ae(e));return fe(i,"SequenceExpression")}function Ae(t){var e=function(t){var e=function(t){return function t(e,n,i){var r=v.binop;if(null!=r&&(!i||v!==nt)&&n<r){var s=ce(e);s.left=e,s.operator=m;var a=v;ae(),s.right=t(Te(),r,i);var o=fe(s,a===wt||a===xt?"LogicalExpression":"BinaryExpression");return t(o,n,i)}return e}(Te(),-1,t)}(t);if(_e(_t)){var n=ce(e);return n.test=e,n.consequent=Me(!0),ve(ft),n.alternate=Me(!0,t),fe(n,"ConditionalExpression")}return e}(t);if(v.isAssign){var n=ce(e);return n.operator=m,n.left=e,ae(),n.right=Ae(t),ye(e),fe(n,"AssignmentExpression")}return e}function Te(){if(v.prefix){var t=le(),e=v.isUpdate;return t.operator=m,t.prefix=!0,y=!0,ae(),t.argument=Te(),e?ye(t.argument):I&&"delete"===t.operator&&"Identifier"===t.argument.type&&P(t.start,"Deleting local variable in strict mode"),fe(t,e?"UpdateExpression":"UnaryExpression")}for(var n=Oe(ze());v.postfix&&!ge();){(t=ce(n)).operator=m,t.prefix=!1,ye(t.argument=n),ae(),n=fe(t,"UpdateExpression")}return n}function Oe(t,e){var n;return _e(dt)?((n=ce(t)).object=t,n.property=Be(!0),n.computed=!1,Oe(fe(n,"MemberExpression"),e)):_e(rt)?((n=ce(t)).object=t,n.property=Me(),n.computed=!0,ve(st),Oe(fe(n,"MemberExpression"),e)):e||!_e(ht)?t:((n=ce(t)).callee=t,n.arguments=Ne(ut,!1),Oe(fe(n,"CallExpression"),e))}function ze(){switch(v){case Q:var t=le();return ae(),fe(t,"ThisExpression");case O:return Be();case A:case T:case l:return(t=le()).value=m,t.raw=_.slice(p,s),ae(),fe(t,"Literal");case Y:case tt:case et:return(t=le()).value=v.atomValue,t.raw=v.keyword,ae(),fe(t,"Literal");case ht:var e=a,n=p;ae();var i=Me();return i.start=n,i.end=s,d.locations&&(i.loc.start=e,i.loc.end=o),d.ranges&&(i.range=[n,s]),ve(ut),i;case rt:t=le();return ae(),t.elements=Ne(st,!0,!0),fe(t,"ArrayExpression");case at:return function(){var t=le(),e=!0,n=!1;t.properties=[],ae();for(;!_e(ot);){if(e)e=!1;else if(ve(lt),d.allowTrailingCommas&&_e(ot))break;var i,r={key:Ee()},s=!1;if(_e(ft)?(r.value=Me(!0),i=r.kind="init"):5<=d.ecmaVersion&&"Identifier"===r.key.type&&("get"===r.key.name||"set"===r.key.name)?(s=n=!0,i=r.kind=r.key.name,r.key=Ee(),v!==ht&&me(),r.value=Le(le(),!1)):me(),"Identifier"===r.key.type&&(I||n))for(var a=0;a<t.properties.length;++a){var o,h=t.properties[a];h.key.name===r.key.name&&((o=i==h.kind||s&&"init"===h.kind||"init"===i&&("get"===h.kind||"set"===h.kind))&&!I&&"init"===i&&"init"===h.kind&&(o=!1),o&&P(r.key.start,"Redefinition of property"))}t.properties.push(r)}return fe(t,"ObjectExpression")}();case V:t=le();return ae(),Le(t,!1);case K:return function(){var t=le();ae(),t.callee=Oe(ze(),!0),_e(ht)?t.arguments=Ne(ut,!1):t.arguments=M;return fe(t,"NewExpression")}();default:me()}}function Ee(){return v===A||v===T?ze():Be(!0)}function Le(t,e){v===O?t.id=Be():e?me():t.id=null,t.params=[];var n=!0;for(ve(ht);!_e(ut);)n?n=!1:ve(lt),t.params.push(Be());var i=S,r=k;if(S=!0,k=[],t.body=Se(!0),S=i,k=r,I||t.body.body.length&&de(t.body.body[0]))for(var s=t.id?-1:0;s<t.params.length;++s){var a=s<0?t.id:t.params[s];if((Lt(a.name)||Nt(a.name))&&P(a.start,"Defining '"+a.name+"' in strict mode"),0<=s)for(var o=0;o<s;++o)a.name===t.params[o].name&&P(a.start,"Argument name clash in strict mode")}return fe(t,e?"FunctionDeclaration":"FunctionExpression")}function Ne(t,e,n){for(var i=[],r=!0;!_e(t);){if(r)r=!1;else if(ve(lt),e&&d.allowTrailingCommas&&_e(t))break;n&&v===lt?i.push(null):i.push(Me(!0))}return i}function Be(t){var e=le();return t&&"everywhere"==d.forbidReserved&&(t=!1),v===O?(!t&&(d.forbidReserved&&(3===d.ecmaVersion?zt:Et)(m)||I&&Lt(m))&&-1==_.slice(p,s).indexOf("\\")&&P(p,"The keyword '"+m+"' is reserved"),e.name=m):t&&v.keyword?e.name=v.keyword:me(),y=!1,ae(),fe(e,"Identifier")}},"object"==typeof t&&"object"==typeof e?i(t):"function"==typeof define&&define.amd?define(["exports"],i):i(n.acorn||(n.acorn={})),s.version||(s=null));var w={"+":"__add","-":"__subtract","*":"__multiply","/":"__divide","%":"__modulo","==":"__equals","!=":"__equals"},x={"-":"__negate","+":"__self"},a=U.each(["add","subtract","multiply","divide","modulo","equals","negate"],function(t){this["__"+t]="#"+t},{__self:function(){return this}});function v(t,e,n){var i=w[e];if(t&&t[i]){var r=t[i](n);return"!="===e?!r:r}switch(e){case"+":return t+n;case"-":return t-n;case"*":return t*n;case"/":return t/n;case"%":return t%n;case"==":return t==n;case"!=":return t!=n}}function m(t,e){var n=x[t];if(e&&e[n])return e[n]();switch(t){case"+":return+e;case"-":return-e}}function b(f,t){if(!f)return"";var a=[];function d(t){for(var e=0,n=a.length;e<n;e++){var i=a[e];if(i[0]>=t)break;t+=i[1]}return t}function _(t){return f.substring(d(t.range[0]),d(t.range[1]))}function g(t,e){for(var n=d(t.range[0]),i=d(t.range[1]),r=0,s=a.length-1;0<=s;s--)if(n>a[s][0]){r=s+1;break}a.splice(r,0,[n,e.length-i+n]),f=f.substring(0,n)+e+f.substring(i)}function h(t,e){switch(t.type){case"UnaryExpression":t.operator in x&&"Literal"!==t.argument.type&&(r=_(t.argument),g(t,'$__("'+t.operator+'", '+r+")"));break;case"BinaryExpression":var n,i;t.operator in w&&"Literal"!==t.left.type&&(a=_(t.left),o=_(t.right),l=t.left,c=t.right,n=f.substring(d(l.range[1]),d(c.range[0])),i=t.operator,g(t,"__$__("+a+","+n.replace(new RegExp("\\"+i),'"'+i+'"')+", "+o+")"));break;case"UpdateExpression":case"AssignmentExpression":var r,s,a,o,h,u=e&&e.type;"ForStatement"===u||"BinaryExpression"===u&&/^[=!<>]/.test(e.operator)||"MemberExpression"===u&&e.computed||("UpdateExpression"===t.type?(s=(r=_(t.argument))+" = "+(h="__$__("+r+', "'+t.operator[0]+'", 1)'),t.prefix?s="("+s+")":"AssignmentExpression"!==u&&"VariableDeclarator"!==u&&"BinaryExpression"!==u||(_(e.left||e.id)===r&&(s=h),s=r+"; "+s),g(t,s)):/^.=$/.test(t.operator)&&"Literal"!==t.left.type&&(a=_(t.left),o=_(t.right),h=a+" = __$__("+a+', "'+t.operator[0]+'", '+o+")",g(t,/^\(.*\)$/.test(_(t))?"("+h+")":h)))}var l,c}var e,n,i,r=(t=t||{}).url||"",s=t.sourceMaps,o=t.paperFeatures||{},u=t.source||f,l=t.offset||0,c=at.agent,p=c.versionNumber,v=!1,m=/\r\n|\n|\r/gm;return s&&(c.chrome&&30<=p||c.webkit&&537.76<=p||c.firefox&&23<=p||c.node)&&(c.node?l-=2:A&&r&&!A.location.href.indexOf(r)&&(l=(n=T.getElementsByTagName("html")[0].innerHTML).substr(0,n.indexOf(f)+1).match(m).length+1),(i=["AA"+function(t){var e="";for(t=(Math.abs(t)<<1)+(t<0?1:0);t||!e;){var n=31&t;(t>>=5)&&(n|=32),e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[n]}return e}((v=0<l&&!(c.chrome&&36<=p||c.safari&&600<=p||c.firefox&&40<=p||c.node))?0:l)+"A"]).length=(f.match(m)||[]).length+1+(v?l:0),e={version:3,file:r,names:[],mappings:i.join(";AACA"),sourceRoot:"",sources:[r],sourcesContent:[u]}),!1===o.operatorOverloading&&!1===o.moduleExports||function t(e,n,i){if(e){for(var r in e)if("range"!==r&&"loc"!==r){var s=e[r];if(Array.isArray(s))for(var a=0,o=s.length;a<o;a++)t(s[a],e,i);else s&&"object"==typeof s&&t(s,e,i)}!1!==i.operatorOverloading&&h(e,n),!1!==i.moduleExports&&function(t){switch(t.type){case"ExportDefaultDeclaration":g({range:[t.start,t.declaration.start]},"module.exports = ");break;case"ExportNamedDeclaration":var e,n,i=t.declaration,r=t.specifiers;i?(e=i.declarations)&&(e.forEach(function(t){g(t,"module.exports."+_(t))}),g({range:[t.start,i.start+i.kind.length]},"")):!r||(n=r.map(function(t){var e=_(t);return"module.exports."+e+" = "+e+"; "}).join(""))&&g(t,n)}}(e)}}(y(f,{ranges:!0,preserveParens:!0,sourceType:"module"}),null,o),e&&(v&&(f=new Array(l+1).join("\n")+f),/^(inline|both)$/.test(s)&&(f+="\n//# sourceMappingURL=data:application/json;base64,"+C.btoa(unescape(encodeURIComponent(JSON.stringify(e))))),f+="\n//# sourceURL="+(r||"paperscript")),{url:r,source:u,code:f,map:e}}function o(i,t,e){var n,r=(at=t).getView(),s=/\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/.test(i)&&!/\bnew\s+Tool\b/.test(i)?new et:null,a=s?s._events:[],o=["onFrame","onResize"].concat(a),h=[],u=[],l="object"==typeof i?i:b(i,e);function c(t,e){for(var n in t)!e&&/^_/.test(n)||!new RegExp("([\\b\\s\\W]|^)"+n.replace(/\$/g,"\\$")+"\\b").test(i)||(h.push(n),u.push(t[n]))}i=l.code,c({__$__:v,$__:m,paper:t,tool:s},!0),c(t),i="var module = { exports: {} }; "+i;var f=U.each(o,function(t){new RegExp("\\s+"+t+"\\b").test(i)&&(h.push(t),this.push("module.exports."+t+" = "+t+";"))},[]).join("\n");f&&(i+="\n"+f),i+="\nreturn module.exports;";var d,_,g=at.agent;T&&(g.chrome||g.firefox&&g.versionNumber<40)?(d=T.createElement("script"),_=T.head||T.getElementsByTagName("head")[0],g.firefox&&(i="\n"+i),d.appendChild(T.createTextNode("document.__paperscript__ = function("+h+") {"+i+"\n}")),_.appendChild(d),n=T.__paperscript__,delete T.__paperscript__,_.removeChild(d)):n=Function(h,i);var p=(f=n&&n.apply(t,u))||{};return U.each(a,function(t){var e=p[t];e&&(s[t]=e)}),r&&(p.onResize&&r.setOnResize(p.onResize),r.emit("resize",{size:r.size,delta:new Z}),p.onFrame&&r.setOnFrame(p.onFrame),r.requestUpdate()),f}function h(t){if(/^text\/(?:x-|)paperscript$/.test(t.type)&&"true"!==c.getAttribute(t,"ignore")){var e=c.getAttribute(t,"canvas"),n=T.getElementById(e),i=t.src||t.getAttribute("data-src"),r=c.hasAttribute(t,"async"),s="data-paper-scope";if(!n)throw new Error('Unable to find canvas with id "'+e+'"');var a=c.get(n.getAttribute(s))||(new c).setup(n);return n.setAttribute(s,a._id),i?nt({url:i,async:r,mimeType:"text/plain",onLoad:function(t){o(t,a,i)}}):o(t.innerHTML,a,t.baseURI),t.setAttribute("data-paper-ignore","true"),a}}function u(){U.each(T&&T.getElementsByTagName("script"),h)}return Z.inject(a),W.inject(a),E.inject(a),A&&("complete"===T.readyState?setTimeout(u):F.add(A,{load:u})),{compile:b,execute:o,load:function(t){return t?h(t):u()},parse:y,calculateBinary:v,calculateUnary:m}}.call(this);var at=new(c.inject(U.exports,{Base:U,Numerical:H,Key:v,DomEvent:F,DomElement:B,document:T,window:A,Symbol:P,PlacedSymbol:a}));return at.agent.node&&require("./node/extend.js")(at),"function"==typeof define&&define.amd?define("paper",at):"object"==typeof module&&module&&(module.exports=at),at}.call(this,"object"==typeof self?self:null);


/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


var MIN_POSE_SCORE = 0.1;
var MIN_FACE_SCORE = 0.8;

var posePartNames = ['leftAnkle', 'leftKnee', 'leftHip', 'leftWrist', 'leftElbow', 'leftShoulder',
    'rightAnkle', 'rightKnee', 'rightHip', 'rightWrist', 'rightElbow', 'rightShoulder',
    'leftEar', 'rightEar'];

// Mapping between face part names and their vertex indices in TF face mesh.
var facePartName2Index = {
//    'topMid': 10,
//    'leftTop0': 67,
//    'leftTop1': 54,
//    'rightTop0': 297,
//    'rightTop1': 284,
    'leftJaw0': 0,
    'leftJaw1': 1,
    'leftJaw2': 2,
    'leftJaw3': 3,
    'leftJaw4': 4,
    'leftJaw5': 5,
    'leftJaw6': 6,
    'leftJaw7': 7,
    'jawMid': 8,   // 0 - 8
    'rightJaw7': 9,
    'rightJaw6': 10,
    'rightJaw5': 11,
    'rightJaw4': 12,
    'rightJaw3': 13,
    'rightJaw2': 14,
    'rightJaw1': 15,
    'rightJaw0': 16, // 9 - 16
    'leftBrow0': 17,
    'leftBrow1': 18,
    'leftBrow2': 19,
    'leftBrow3': 20,
    'leftBrow4': 21, // 17 - 21
    'rightBrow4': 22,
    'rightBrow3': 23,
    'rightBrow2': 24,
    'rightBrow1': 25,
    'rightBrow0': 26, // 22 - 26
    'nose0': 27,
    'nose1': 28,
    'nose2': 29,
    'nose3': 30, // 27 - 30
    'leftNose0': 31,
    'leftNose1': 32,
    'nose4': 33,
    'rightNose1': 34,
    'rightNose0': 35, // 31 - 35
    'leftEye0': 36,
    'leftEye1': 37,
    'leftEye2': 38,
    'leftEye3': 39,
    'leftEye4': 40,
    'leftEye5': 41, // 36 - 41
    'rightEye3': 42,
    'rightEye2': 43,
    'rightEye1': 44,
    'rightEye0': 45,
    'rightEye5': 46,
    'rightEye4': 47, // 42 - 47
    'leftMouthCorner': 48,
    'leftUpperLipTop0': 49,
    'leftUpperLipTop1': 50,
    'upperLipTopMid': 51,
    'rightUpperLipTop1': 52,
    'rightUpperLipTop0': 53,
    'rightMouthCorner': 54, // 48 - 54
    'rightLowerLipBottom0': 55,
    'rightLowerLipBottom1': 56,
    'lowerLipBottomMid': 57,
    'leftLowerLipBottom1': 58,
    'leftLowerLipBottom0': 59, // 55 - 59
    'leftMiddleLip': 60,
    'leftUpperLipBottom1': 61,
    'upperLipBottomMid': 62,
    'rightUpperLipBottom1': 63,
    'rightMiddleLip': 64, // 60 - 64
    'rightLowerLipTop0': 65,
    'lowerLipTopMid': 66,
    'leftLowerLipTop0': 67, // 65 - 67
};

var facePartNames = [
//    'topMid', 'rightTop0', 'rightTop1', 'leftTop0', 'leftTop1',
    'rightJaw0', 'rightJaw1', 'rightJaw2', 'rightJaw3', 'rightJaw4', 'rightJaw5', 'rightJaw6', 'rightJaw7', 'jawMid',   // 0 - 8
    'leftJaw7', 'leftJaw6', 'leftJaw5', 'leftJaw4', 'leftJaw3', 'leftJaw2', 'leftJaw1', 'leftJaw0', // 9 - 16
    'rightBrow0', 'rightBrow1', 'rightBrow2', 'rightBrow3', 'rightBrow4', // 17 - 21
    'leftBrow4', 'leftBrow3', 'leftBrow2', 'leftBrow1', 'leftBrow0', // 22 - 26
    'nose0', 'nose1', 'nose2', 'nose3', // 27 - 30
    'rightNose0', 'rightNose1', 'nose4', 'leftNose1', 'leftNose0', // 31 - 35
    'rightEye0', 'rightEye1', 'rightEye2', 'rightEye3', 'rightEye4', 'rightEye5', // 36 - 41
    'leftEye3', 'leftEye2', 'leftEye1', 'leftEye0', 'leftEye5', 'leftEye4', // 42 - 47
    'rightMouthCorner', 'rightUpperLipTop0', 'rightUpperLipTop1', 'upperLipTopMid', 'leftUpperLipTop1', 'leftUpperLipTop0', 'leftMouthCorner', // 48 - 54
    'leftLowerLipBottom0', 'leftLowerLipBottom1', 'lowerLipBottomMid', 'rightLowerLipBottom1', 'rightLowerLipBottom0', // 55 - 59
    'rightMiddleLip', 'rightUpperLipBottom1', 'upperLipBottomMid', 'leftUpperLipBottom1', 'leftMiddleLip', // 60 - 64
    'leftLowerLipTop0', 'lowerLipTopMid', 'rightLowerLipTop0', // 65 - 67
];

var allPartNames = posePartNames.concat(facePartNames);

// Represents a bone formed by two part keypoints.
class Bone {
  set(kp0, kp1, skeleton, type) {
      this.name = `${kp0.name}-${kp1.name}`;
      this.kp0 = kp0;
      this.kp1 = kp1;
      this.skeleton = skeleton;
      this.type = type;
      this.boneColor = ColorUtils.fromStringHash(this.name);
      this.boneColor.saturation += 0.5;
      return this;
  };

  // Finds a point's bone transform.
  // Let anchor be the closest point on the bone to the point.
  // A point's bone transformation is the transformation from anchor to the point.
  getPointTransform(p) {
      let dir = this.kp1.position.subtract(this.kp0.position).normalize();
      let n = dir.clone();
      n.angle += 90;
      let closestP = MathUtils.getClosestPointOnSegment(this.kp0.position, this.kp1.position, p);
      let v = p.subtract(closestP);
      let dirProjD = v.dot(dir);
      let dirProjN = v.dot(n);
      let d = this.kp0.position.subtract(this.kp1.position).length;
      let anchorPerc = closestP.subtract(this.kp0.position).length / d;
      return {
          transform: new paper.Point(dirProjD, dirProjN),
          anchorPerc: anchorPerc,
      };
  }

  // Finds a point's current position from the current bone position.
  transform(trans) {
      if (!this.kp1.currentPosition || !this.kp0.currentPosition) {
          return;
      }
      // Scale distance from anchor point base on bone type.
      // All face bones will share one distance scale. All body bones share another.
      let scale = this.type === 'face' ? this.skeleton.currentFaceScale : this.skeleton.currentBodyScale;
      let dir = this.kp1.currentPosition.subtract(this.kp0.currentPosition).normalize();
      let n = dir.clone();
      n.angle += 90;
      let anchor = this.kp0.currentPosition.multiply(1 - trans.anchorPerc).add(this.kp1.currentPosition.multiply(trans.anchorPerc));
      let p = anchor.add(dir.multiply(trans.transform.x * scale)).add(n.multiply(trans.transform.y * scale));
      return p;
  }
}

function getKeyPointFromSVG(group, partName) {
    let shape = SVGUtils.findFirstItemWithPrefix(group, partName);
    return {
        position: shape.bounds.center,
        name: partName,
    };
}

function getPartFromPose(pose, name) {
    if (!pose || !pose.keypoints) {
        return null;
    }
    let part = pose.keypoints.find(kp => kp.part === name);
    return {
        position: new paper.Point(part.position.x, part.position.y),
        score: part.score,
    }
}

function getKeypointFromFaceFrame(face, i) {
    if (!face || !face.scaledMesh || !face.scaledMesh.length);
    return new paper.Point(face.positions[i * 2], face.positions[i * 2 + 1]);
}

// Represents a full body skeleton.
class Skeleton {
    constructor(scope) {
        let skeletonGroup = SVGUtils.findFirstItemWithPrefix(scope.project, 'skeleton');
        // Pose
        let leftAnkle = getKeyPointFromSVG(skeletonGroup, 'leftAnkle');
        let leftKnee = getKeyPointFromSVG(skeletonGroup, 'leftKnee');
        let leftHip = getKeyPointFromSVG(skeletonGroup, 'leftHip');
        let leftWrist = getKeyPointFromSVG(skeletonGroup, 'leftWrist');
        let leftElbow = getKeyPointFromSVG(skeletonGroup, 'leftElbow');
        let leftShoulder = getKeyPointFromSVG(skeletonGroup, 'leftShoulder');
        let rightAnkle = getKeyPointFromSVG(skeletonGroup, 'rightAnkle');
        let rightKnee = getKeyPointFromSVG(skeletonGroup, 'rightKnee');
        let rightHip = getKeyPointFromSVG(skeletonGroup, 'rightHip');
        let rightWrist = getKeyPointFromSVG(skeletonGroup, 'rightWrist');
        let rightElbow = getKeyPointFromSVG(skeletonGroup, 'rightElbow');
        let rightShoulder = getKeyPointFromSVG(skeletonGroup, 'rightShoulder');

        // Face
//        let topMid = getKeyPointFromSVG(skeletonGroup, 'topMid');
//        let rightTop0 = getKeyPointFromSVG(skeletonGroup, 'rightTop0');
//        let rightTop1 = getKeyPointFromSVG(skeletonGroup, 'rightTop1');
//        let leftTop0 = getKeyPointFromSVG(skeletonGroup, 'leftTop0');
//        let leftTop1 = getKeyPointFromSVG(skeletonGroup, 'leftTop1');
      
        let leftJaw2 = getKeyPointFromSVG(skeletonGroup, 'leftJaw2');
        let leftJaw3 = getKeyPointFromSVG(skeletonGroup, 'leftJaw3');
        let leftJaw4 = getKeyPointFromSVG(skeletonGroup, 'leftJaw4');
        let leftJaw5 = getKeyPointFromSVG(skeletonGroup, 'leftJaw5');
        let leftJaw6 = getKeyPointFromSVG(skeletonGroup, 'leftJaw6');
        let leftJaw7 = getKeyPointFromSVG(skeletonGroup, 'leftJaw7');
        let jawMid = getKeyPointFromSVG(skeletonGroup, 'jawMid');
        let rightJaw2 = getKeyPointFromSVG(skeletonGroup, 'rightJaw2');
        let rightJaw3 = getKeyPointFromSVG(skeletonGroup, 'rightJaw3');
        let rightJaw4 = getKeyPointFromSVG(skeletonGroup, 'rightJaw4');
        let rightJaw5 = getKeyPointFromSVG(skeletonGroup, 'rightJaw5');
        let rightJaw6 = getKeyPointFromSVG(skeletonGroup, 'rightJaw6');
        let rightJaw7 = getKeyPointFromSVG(skeletonGroup, 'rightJaw7');
        let nose0 = getKeyPointFromSVG(skeletonGroup, 'nose0');
        let nose1 = getKeyPointFromSVG(skeletonGroup, 'nose1');
        let nose2 = getKeyPointFromSVG(skeletonGroup, 'nose2');
        let nose3 = getKeyPointFromSVG(skeletonGroup, 'nose3');
        let nose4 = getKeyPointFromSVG(skeletonGroup, 'nose4');
        let leftNose0 = getKeyPointFromSVG(skeletonGroup, 'leftNose0');
        let leftNose1 = getKeyPointFromSVG(skeletonGroup, 'leftNose1');
        let rightNose0 = getKeyPointFromSVG(skeletonGroup, 'rightNose0');
        let rightNose1 = getKeyPointFromSVG(skeletonGroup, 'rightNose1');
        let leftEye0 = getKeyPointFromSVG(skeletonGroup, 'leftEye0');
        let leftEye1 = getKeyPointFromSVG(skeletonGroup, 'leftEye1');
        let leftEye2 = getKeyPointFromSVG(skeletonGroup, 'leftEye2');
        let leftEye3 = getKeyPointFromSVG(skeletonGroup, 'leftEye3');
        let leftEye4 = getKeyPointFromSVG(skeletonGroup, 'leftEye4');
        let leftEye5 = getKeyPointFromSVG(skeletonGroup, 'leftEye5');
        let rightEye0 = getKeyPointFromSVG(skeletonGroup, 'rightEye0');
        let rightEye1 = getKeyPointFromSVG(skeletonGroup, 'rightEye1');
        let rightEye2 = getKeyPointFromSVG(skeletonGroup, 'rightEye2');
        let rightEye3 = getKeyPointFromSVG(skeletonGroup, 'rightEye3');
        let rightEye4 = getKeyPointFromSVG(skeletonGroup, 'rightEye4');
        let rightEye5 = getKeyPointFromSVG(skeletonGroup, 'rightEye5');
        let leftBrow0 = getKeyPointFromSVG(skeletonGroup, 'leftBrow0');
        let leftBrow1 = getKeyPointFromSVG(skeletonGroup, 'leftBrow1');
        let leftBrow2 = getKeyPointFromSVG(skeletonGroup, 'leftBrow2');
        let leftBrow3 = getKeyPointFromSVG(skeletonGroup, 'leftBrow3');
        let leftBrow4 = getKeyPointFromSVG(skeletonGroup, 'leftBrow4');
        let rightBrow0 = getKeyPointFromSVG(skeletonGroup, 'rightBrow0');
        let rightBrow1 = getKeyPointFromSVG(skeletonGroup, 'rightBrow1');
        let rightBrow2 = getKeyPointFromSVG(skeletonGroup, 'rightBrow2');
        let rightBrow3 = getKeyPointFromSVG(skeletonGroup, 'rightBrow3');
        let rightBrow4 = getKeyPointFromSVG(skeletonGroup, 'rightBrow4');
        let leftMouthCorner = getKeyPointFromSVG(skeletonGroup, 'leftMouthCorner');
        let leftUpperLipTop0 = getKeyPointFromSVG(skeletonGroup, 'leftUpperLipTop0');
        let leftUpperLipTop1 = getKeyPointFromSVG(skeletonGroup, 'leftUpperLipTop1');
        let upperLipTopMid = getKeyPointFromSVG(skeletonGroup, 'upperLipTopMid');
        let rightMouthCorner = getKeyPointFromSVG(skeletonGroup, 'rightMouthCorner');
        let rightUpperLipTop0 = getKeyPointFromSVG(skeletonGroup, 'rightUpperLipTop0');
        let rightUpperLipTop1 = getKeyPointFromSVG(skeletonGroup, 'rightUpperLipTop1');
        let rightMiddleLip = getKeyPointFromSVG(skeletonGroup, 'rightMiddleLip');
        let rightUpperLipBottom1 = getKeyPointFromSVG(skeletonGroup, 'rightUpperLipBottom1');
        let leftMiddleLip = getKeyPointFromSVG(skeletonGroup, 'leftMiddleLip');
        let leftUpperLipBottom1 = getKeyPointFromSVG(skeletonGroup, 'leftUpperLipBottom1');
        let upperLipBottomMid = getKeyPointFromSVG(skeletonGroup, 'upperLipBottomMid');
        let rightLowerLipTop0 = getKeyPointFromSVG(skeletonGroup, 'rightLowerLipTop0');
        let leftLowerLipTop0 = getKeyPointFromSVG(skeletonGroup, 'leftLowerLipTop0');
        let lowerLipTopMid = getKeyPointFromSVG(skeletonGroup, 'lowerLipTopMid');
        let rightLowerLipBottom0 = getKeyPointFromSVG(skeletonGroup, 'rightLowerLipBottom0');
        let rightLowerLipBottom1 = getKeyPointFromSVG(skeletonGroup, 'rightLowerLipBottom1');
        let leftLowerLipBottom0 = getKeyPointFromSVG(skeletonGroup, 'leftLowerLipBottom0');
        let leftLowerLipBottom1 = getKeyPointFromSVG(skeletonGroup, 'leftLowerLipBottom1');
        let lowerLipBottomMid = getKeyPointFromSVG(skeletonGroup, 'lowerLipBottomMid');

        this.bLeftShoulderRightShoulder = new Bone().set(leftShoulder, rightShoulder, this, 'body');
        this.bRightShoulderRightHip = new Bone().set(rightShoulder, rightHip, this, 'body');
        this.bLeftHipRightHip = new Bone().set(leftHip, rightHip, this, 'body');
        this.bLeftShoulderLeftHip = new Bone().set(leftShoulder, leftHip, this, 'body');
        this.bLeftShoulderLeftElbow = new Bone().set(leftShoulder, leftElbow, this, 'body');
        this.bLeftElbowLeftWrist = new Bone().set(leftElbow, leftWrist, this, 'body');
        this.bRightShoulderRightElbow = new Bone().set(rightShoulder, rightElbow, this, 'body');
        this.bRightElbowRightWrist = new Bone().set(rightElbow, rightWrist, this, 'body');
        this.bLeftHipLeftKnee = new Bone().set(leftHip, leftKnee, this, 'body');
        this.bLeftKneeLeftAnkle = new Bone().set(leftKnee, leftAnkle, this, 'body');
        this.bRightHipRightKnee = new Bone().set(rightHip, rightKnee, this, 'body');
        this.bRightKneeRightAnkle = new Bone().set(rightKnee, rightAnkle, this, 'body');
//
//        this.bTopMidRightTop0 = new Bone().set(topMid, rightTop0, this, 'face');
//        this.bTopMidLeftTop0 = new Bone().set(topMid, leftTop0, this, 'face');
//        this.bLeftTop0LeftTop1 = new Bone().set(leftTop0, leftTop1, this, 'face');
//        this.bLeftTop1LeftJaw2 = new Bone().set(leftTop1, leftJaw2, this, 'face');
        this.bLeftJaw2LeftJaw3 = new Bone().set(leftJaw2, leftJaw3, this, 'face');
        this.bLeftJaw3LeftJaw4 = new Bone().set(leftJaw3, leftJaw4, this, 'face');
        this.bLeftJaw4LeftJaw5 = new Bone().set(leftJaw4, leftJaw5, this, 'face');
        this.bLeftJaw5LeftJaw6 = new Bone().set(leftJaw5, leftJaw6, this, 'face');
        this.bLeftJaw6LeftJaw7 = new Bone().set(leftJaw6, leftJaw7, this, 'face');
        this.bLeftJaw7JawMid = new Bone().set(leftJaw7, jawMid, this, 'face');
//        this.bRightTop0RightTop1 = new Bone().set(rightTop0, rightTop1, this, 'face');
//        this.bRightTop1RightJaw2 = new Bone().set(rightTop1, rightJaw2, this, 'face');
        this.bRightJaw2RightJaw3 = new Bone().set(rightJaw2, rightJaw3, this, 'face');
        this.bRightJaw3RightJaw4 = new Bone().set(rightJaw3, rightJaw4, this, 'face');
        this.bRightJaw4RightJaw5 = new Bone().set(rightJaw4, rightJaw5, this, 'face');
        this.bRightJaw5RightJaw6 = new Bone().set(rightJaw5, rightJaw6, this, 'face');
        this.bRightJaw6RightJaw7 = new Bone().set(rightJaw6, rightJaw7, this, 'face');
        this.bRightJaw7JawMid = new Bone().set(rightJaw7, jawMid, this, 'face');
        this.bLeftEye0LeftEye1 = new Bone().set(leftEye0, leftEye1, this, 'face');
        this.bLeftEye1LeftEye2 = new Bone().set(leftEye1, leftEye2, this, 'face');
        this.bLeftEye2LeftEye3 = new Bone().set(leftEye2, leftEye3, this, 'face');
        this.bLeftEye3LeftEye4 = new Bone().set(leftEye3, leftEye4, this, 'face');
        this.bLeftEye4LeftEye5 = new Bone().set(leftEye4, leftEye5, this, 'face');
        this.bLeftEye5LeftEye0 = new Bone().set(leftEye5, leftEye0, this, 'face');
        this.bRightEye0RightEye1 = new Bone().set(rightEye0, rightEye1, this, 'face');
        this.bRightEye1RightEye2 = new Bone().set(rightEye1, rightEye2, this, 'face');
        this.bRightEye2RightEye3 = new Bone().set(rightEye2, rightEye3, this, 'face');
        this.bRightEye3RightEye4 = new Bone().set(rightEye3, rightEye4, this, 'face');
        this.bRightEye4RightEye5 = new Bone().set(rightEye4, rightEye5, this, 'face');
        this.bRightEye5RightEye0 = new Bone().set(rightEye5, rightEye0, this, 'face');
        this.bLeftBrow0LeftBrow1 = new Bone().set(leftBrow0, leftBrow1, this, 'face');
        this.bLeftBrow1LeftBrow2 = new Bone().set(leftBrow1, leftBrow2, this, 'face');
        this.bLeftBrow2LeftBrow3 = new Bone().set(leftBrow2, leftBrow3, this, 'face');
        this.bLeftBrow3LeftBrow4 = new Bone().set(leftBrow3, leftBrow4, this, 'face');
        this.bRightBrow0RightBrow1 = new Bone().set(rightBrow0, rightBrow1, this, 'face');
        this.bRightBrow1RightBrow2 = new Bone().set(rightBrow1, rightBrow2, this, 'face');
        this.bRightBrow2RightBrow3 = new Bone().set(rightBrow2, rightBrow3, this, 'face');
        this.bRightBrow3RightBrow4 = new Bone().set(rightBrow3, rightBrow4, this, 'face');
        this.bNose0Nose1 = new Bone().set(nose0, nose1, this, 'face');
        this.bNose1Nose2 = new Bone().set(nose1, nose2, this, 'face');
        this.bNose2Nose3 = new Bone().set(nose2, nose3, this, 'face');
        this.bNose3Nose4 = new Bone().set(nose3, nose4, this, 'face');
        this.bLeftNose0LeftNose1 = new Bone().set(leftNose0, leftNose1, this, 'face');
        this.bLeftNose1Nose4 = new Bone().set(leftNose1, nose4, this, 'face');
        this.bRightNose0RightNose1 = new Bone().set(rightNose0, rightNose1, this, 'face');
        this.bRightNose1Nose4 = new Bone().set(rightNose1, nose4, this, 'face');
        this.bLeftMouthCornerLeftUpperLipTop0 = new Bone().set(leftMouthCorner, leftUpperLipTop0, this, 'face');
        this.bLeftUpperLipTop0LeftUpperLipTop1 = new Bone().set(leftUpperLipTop0, leftUpperLipTop1, this, 'face');
        this.bLeftUpperLipTop1UpperLipTopMid = new Bone().set(leftUpperLipTop1, upperLipTopMid, this, 'face');
        this.bRigthMouthCornerRigthUpperLipTop0 = new Bone().set(rightMouthCorner, rightUpperLipTop0, this, 'face');
        this.bRigthUpperLipTop0RigthUpperLipTop1 = new Bone().set(rightUpperLipTop0, rightUpperLipTop1, this, 'face');
        this.bRigthUpperLipTop1UpperLipTopMid = new Bone().set(rightUpperLipTop1, upperLipTopMid, this, 'face');
        this.bLeftMouthCornerLeftMiddleLip = new Bone().set(leftMouthCorner, leftMiddleLip, this, 'face');
        this.bLeftMiddleLipLeftUpperLipBottom1 = new Bone().set(leftMiddleLip, leftUpperLipBottom1, this, 'face');
        this.bLeftUpperLipBottom1UpperLipBottomMid = new Bone().set(leftUpperLipBottom1, upperLipBottomMid, this, 'face');
        this.bRightMouthCornerRightMiddleLip = new Bone().set(rightMouthCorner, rightMiddleLip, this, 'face');
        this.bRightMiddleLipRightUpperLipBottom1 = new Bone().set(rightMiddleLip, rightUpperLipBottom1, this, 'face');
        this.bRightUpperLipBottom1UpperLipBototmMid = new Bone().set(rightUpperLipBottom1, upperLipBottomMid, this, 'face');
        this.bLeftMiddleLipLeftLowerLipTop0 = new Bone().set(leftMiddleLip, leftLowerLipTop0, this, 'face');
        this.bLeftLowerLipTop0LowerLipTopMid = new Bone().set(leftLowerLipTop0, lowerLipTopMid, this, 'face');
        this.bRightMiddleLipRightLowerLipTop0 = new Bone().set(rightMiddleLip, rightLowerLipTop0, this, 'face');
        this.bRightLowerLipTop0LowerLipTopMid = new Bone().set(rightLowerLipTop0, lowerLipTopMid, this, 'face');
        this.bLeftMouthCornerLeftLowerLipBottom0 = new Bone().set(leftMouthCorner, leftLowerLipBottom0, this, 'face');
        this.bLeftLowerLipBottom0LeftLowerLipBottom1 = new Bone().set(leftLowerLipBottom0, leftLowerLipBottom1, this, 'face');
        this.bLeftLowerLipBottom1LowerLipBottomMid = new Bone().set(leftLowerLipBottom1, lowerLipBottomMid, this, 'face');
        this.bRightMouthCornerRightLowerLipBottom0 = new Bone().set(rightMouthCorner, rightLowerLipBottom0, this, 'face');
        this.bRightLowerLipBottom0RightLowerLipBottom1 = new Bone().set(rightLowerLipBottom0, rightLowerLipBottom1, this, 'face');
        this.bRightLowerLipBottom1LowerLipBottomMid = new Bone().set(rightLowerLipBottom1, lowerLipBottomMid, this, 'face');

        this.faceBones = [
            // Face
//            this.bTopMidRightTop0,
//            this.bRightTop0RightTop1,
//            this.bTopMidLeftTop0,
//            this.bLeftTop0LeftTop1,
//            this.bLeftTop1LeftJaw2,
            this.bLeftJaw2LeftJaw3,
            this.bLeftJaw3LeftJaw4,
            this.bLeftJaw4LeftJaw5,
            this.bLeftJaw5LeftJaw6,
            this.bLeftJaw6LeftJaw7,
            this.bLeftJaw7JawMid,
//            this.bRightTop1RightJaw2,
            this.bRightJaw2RightJaw3,
            this.bRightJaw3RightJaw4,
            this.bRightJaw4RightJaw5,
            this.bRightJaw5RightJaw6,
            this.bRightJaw6RightJaw7,
            this.bRightJaw7JawMid,
            this.bLeftEye0LeftEye1,
            this.bLeftEye1LeftEye2,
            this.bLeftEye2LeftEye3,
            this.bLeftEye3LeftEye4,
            this.bLeftEye4LeftEye5,
            this.bLeftEye5LeftEye0,
            this.bRightEye0RightEye1,
            this.bRightEye1RightEye2,
            this.bRightEye2RightEye3,
            this.bRightEye3RightEye4,
            this.bRightEye4RightEye5,
            this.bRightEye5RightEye0,
            this.bLeftBrow0LeftBrow1,
            this.bLeftBrow1LeftBrow2,
            this.bLeftBrow2LeftBrow3,
            this.bLeftBrow3LeftBrow4,
            this.bRightBrow0RightBrow1,
            this.bRightBrow1RightBrow2,
            this.bRightBrow2RightBrow3,
            this.bRightBrow3RightBrow4,
            this.bNose0Nose1,
            this.bNose1Nose2,
            this.bNose2Nose3,
            this.bNose3Nose4,
            this.bLeftNose0LeftNose1,
            this.bLeftNose1Nose4,
            this.bRightNose0RightNose1,
            this.bRightNose1Nose4,
            this.bLeftMouthCornerLeftUpperLipTop0,
            this.bLeftUpperLipTop0LeftUpperLipTop1,
            this.bLeftUpperLipTop1UpperLipTopMid,
            this.bRigthMouthCornerRigthUpperLipTop0,
            this.bRigthUpperLipTop0RigthUpperLipTop1,
            this.bRigthUpperLipTop1UpperLipTopMid,
            this.bLeftMouthCornerLeftMiddleLip,
            this.bLeftMiddleLipLeftUpperLipBottom1,
            this.bLeftUpperLipBottom1UpperLipBottomMid,
            this.bRightMouthCornerRightMiddleLip,
            this.bRightMiddleLipRightUpperLipBottom1,
            this.bRightUpperLipBottom1UpperLipBototmMid,
            this.bLeftMiddleLipLeftLowerLipTop0,
            this.bLeftLowerLipTop0LowerLipTopMid,
            this.bRightMiddleLipRightLowerLipTop0,
            this.bRightLowerLipTop0LowerLipTopMid,
            this.bLeftMouthCornerLeftLowerLipBottom0,
            this.bLeftLowerLipBottom0LeftLowerLipBottom1,
            this.bLeftLowerLipBottom1LowerLipBottomMid,
            this.bRightMouthCornerRightLowerLipBottom0,
            this.bRightLowerLipBottom0RightLowerLipBottom1,
            this.bRightLowerLipBottom1LowerLipBottomMid,
        ]
        this.bodyBones = [
            // Body
            this.bLeftShoulderRightShoulder,
            this.bRightShoulderRightHip,
            this.bLeftHipRightHip,
            this.bLeftShoulderLeftHip,
            this.bLeftShoulderLeftElbow,
            this.bLeftElbowLeftWrist,
            this.bRightShoulderRightElbow,
            this.bRightElbowRightWrist,
            this.bLeftHipLeftKnee,
            this.bLeftKneeLeftAnkle,
            this.bRightHipRightKnee,
            this.bRightKneeRightAnkle
        ];
        this.bones = this.faceBones.concat(this.bodyBones);
        this.secondaryBones = [];
        this.parts = {};
        this.bodyLen0 = this.getTotalBoneLength(this.bodyBones);
        this.faceLen0 = this.getTotalBoneLength(this.faceBones);

        this.boneGroups = {
            'torso': [
                this.bLeftShoulderRightShoulder,
                this.bRightShoulderRightHip,
                this.bLeftHipRightHip,
                this.bLeftShoulderLeftHip,
            ],
            'leftLeg': [
                this.bLeftHipLeftKnee,
                this.bLeftKneeLeftAnkle,
            ],
            'rightLeg': [
                this.bRightHipRightKnee,
                this.bRightKneeRightAnkle
            ],
            'leftArm': [
                this.bLeftShoulderLeftElbow,
                this.bLeftElbowLeftWrist,
            ],
            'rightArm': [
                this.bRightElbowRightWrist,
                this.bRightShoulderRightElbow,
            ],
            'face': this.faceBones,
        };

        this.faceBones.forEach(bone => {
            let parts = [bone.kp0, bone.kp1];
            parts.forEach(part => {
                part.baseTransFunc = MathUtils.getTransformFunc(this.bLeftJaw2LeftJaw3.kp0.position,
                    this.bRightJaw2RightJaw3.kp0.position, part.position);
            });
        });
    }

    update(pose, face) {
        if (pose.score < MIN_POSE_SCORE) {
            this.isValid = false;
            return;
        }

        this.isValid = this.updatePoseParts(pose);
        if (!this.isValid) return;

        this.isValid = this.updateFaceParts(face);
        if (!this.isValid) return;

        // Update bones.
        this.bones.forEach(bone => {
            let part0 = this.parts[bone.kp0.name];
            let part1 = this.parts[bone.kp1.name];
            bone.kp0.currentPosition = part0.position;
            bone.kp1.currentPosition = part1.position;
            bone.score = (part0.score + part1.score) / 2;
            bone.latestCenter = bone.kp1.currentPosition.add(bone.kp0.currentPosition).divide(2);
        });
        // Update secondary bones.
        let nosePos = this.bNose3Nose4.kp1.currentPosition;
        this.secondaryBones.forEach(bone => {
            bone.kp0.currentPosition = bone.kp0.transformFunc(bone.parent.kp0.currentPosition, nosePos);
            bone.kp1.currentPosition = bone.kp1.transformFunc(bone.parent.kp1.currentPosition, nosePos);
            bone.score = bone.parent.score;
            bone.latestCenter = bone.kp1.currentPosition.add(bone.kp0.currentPosition).divide(2);
        });
        // Recompute face & body bone scale.
        this.currentFaceScale = this.getTotalBoneLength(this.faceBones) / this.faceLen0;
        this.currentBodyScale = this.getTotalBoneLength(this.bodyBones) / this.bodyLen0;
        this.isValid = true;
    }

    updatePoseParts(pose) {
        posePartNames.forEach(partName => {
            // Use new and old pose's confidence scores as weights to compute the new part position.
            let part1 = getPartFromPose(pose, partName);
            let part0 = (this.parts[partName] || part1);
            let weight0 = part0.score / (part1.score + part0.score);
            let weight1 = part1.score / (part1.score + part0.score);
            let pos = part0.position.multiply(weight0).add(part1.position.multiply(weight1));
            this.parts[partName] = {
                position: pos,
                score: part0.score * weight0 + part1.score * weight1,
            };
        });
        if (!this.parts['rightEar'] || !this.parts['leftEar']) {
            return false;
        }
        return true;
    }
    
    updateFaceParts(face) {
        let posLeftEar = this.parts['leftEar'].position;
        let posRightEar = this.parts['rightEar'].position;
        if (face && face.positions && face.positions.length && face.faceInViewConfidence > MIN_FACE_SCORE) {
            // Valid face results.
            for (let i = 0; i < facePartNames.length; i++) {
                let partName = facePartNames[i];
                let pos = getKeypointFromFaceFrame(face, i);
                if (!pos) continue;
                this.parts[partName] = {
                    position: pos,
                    score: face.faceInViewConfidence
                };
            }
            // Keep track of the transformation from pose ear positions to face ear positions.
            // This can be used to infer face position when face tracking is lost.
            this.leftEarP2FFunc = MathUtils.getTransformFunc(posLeftEar, posRightEar, this.parts['leftJaw2'].position);
            this.rightEarP2FFunc = MathUtils.getTransformFunc(posLeftEar, posRightEar, this.parts['rightJaw2'].position);
        } else {
            // Invalid face keypoints. Infer face keypoints from pose.
            let fLeftEar = this.leftEarP2FFunc ? this.leftEarP2FFunc(posLeftEar, posRightEar) : posLeftEar;
            let fRightEar = this.rightEarP2FFunc ? this.rightEarP2FFunc(posLeftEar, posRightEar) : posRightEar;
            // Also infer face scale from pose.
            this.currentFaceScale = this.currentBodyScale;
            this.faceBones.forEach(bone => {
                let parts = [bone.kp0, bone.kp1];
                parts.forEach(part => {
                    this.parts[part.name] = {
                        position: part.baseTransFunc(fLeftEar, fRightEar),
                        score: 1,
                    };
                });
            });
        }
        return true;
    }

    findBoneGroup(point) {
        let minDistances = {};
        Object.keys(this.boneGroups).forEach(boneGroupKey => {
            let minDistance = Infinity;
            let boneGroup = this.boneGroups[boneGroupKey];
            boneGroup.forEach(bone => {
                let d = MathUtils.getClosestPointOnSegment(bone.kp0.position, bone.kp1.position, point)
                    .getDistance(point);
                minDistance = Math.min(minDistance, d);
            });
            minDistances[boneGroupKey] = minDistance;
        });
        let minDistance = Math.min(...Object.values(minDistances));
        let selectedGroups = [];
        Object.keys(minDistances).forEach(key => {
            let distance = minDistances[key];
            if (distance <= minDistance) {
                selectedGroups.push(this.boneGroups[key]);
            }
        });
        // was previously flatten(), changed it to flat()
        return selectedGroups.flat();
    }

    getTotalBoneLength(bones) {
        let totalLen = 0;
        bones.forEach(bone => {
            let d = (bone.kp0.currentPosition || bone.kp0.position).subtract(bone.kp1.currentPosition || bone.kp1.position);
            totalLen += d.length;
        });
        return totalLen;
    }

    debugDraw(scope) {
        let group = new scope.Group();
        scope.project.activeLayer.addChild(group);
        this.bones.forEach(bone => {
            let path = new scope.Path({
                segments: [bone.kp0.currentPosition, bone.kp1.currentPosition],
                strokeWidth: 2,
                strokeColor: bone.boneColor
            });
            group.addChild(path);
        });
        // this.secondaryBones.forEach(bone => {
        //     let path = new scope.Path({
        //         segments: [bone.kp0.currentPosition, bone.kp1.currentPosition],
        //         strokeColor: '#00ff00',
        //         strokeWidth: 5,
        //     });
        //     group.addChild(path);
        // });
    }

    debugDrawLabels(scope) {
        let group = new scope.Group();
        scope.project.activeLayer.addChild(group);
        this.bones.forEach(bone => {
            let addLabel = (kp, name) => {
                let text = new scope.PointText({
                    point: [kp.currentPosition.x, kp.currentPosition.y],
                    content: name,
                    fillColor: 'black',
                    fontSize: 7
                });
                group.addChild(text);
            };
            addLabel(bone.kp0, bone.kp0.name);
            addLabel(bone.kp1, bone.kp1.name);
        });
    }

    reset() {
        this.parts = [];
    }

    static getCurrentPosition(segment) {
        let position = new paper.Point();
        Object.keys(segment.skinning).forEach(boneName => {
            let bt = segment.skinning[boneName];
            position = position.add(bt.bone.transform(bt.transform).multiply(bt.weight));
        });
        return position;
    }

    static flipPose(pose) {
        pose.keypoints.forEach(kp => {
            if (kp.part && kp.part.startsWith('left')) {
                kp.part = 'right' + kp.part.substring('left'.length, kp.part.length);
            } else if (kp.part && kp.part.startsWith('right')) {
                kp.part = 'left' + kp.part.substring('right'.length, kp.part.length);
            }
        });
    }

    static flipFace(face) {
        Object.keys(facePartName2Index).forEach(partName => {
            if (partName.startsWith('left')) {
                let rightName = 'right' + partName.substr('left'.length, partName.length);
                let temp = face.scaledMesh[facePartName2Index[partName]];
                face.scaledMesh[facePartName2Index[partName]] = face.scaledMesh[facePartName2Index[rightName]];
                face.scaledMesh[facePartName2Index[rightName]] = temp;
            }
        });
    }

    static getBoundingBox(pose) {
        let minX = 100000;
        let maxX = -100000;
        let minY = 100000;
        let maxY = -100000;
        let updateMinMax = (x, y) => {
            minX = Math.min(x, minX);
            maxX = Math.max(x, maxX);
            minY = Math.min(y, minY);
            maxY = Math.max(y, maxY);
        }
        pose.frames.forEach(frame => {
            frame.pose.keypoints.forEach(kp => {
                updateMinMax(kp.position.x, kp.position.y);
            });
            let faceKeypoints = frame.face.positions;
            for (let i = 0; i < faceKeypoints.length; i += 2) {
                updateMinMax(faceKeypoints[i], faceKeypoints[i+1]);
            }
        });
        return [minX, maxX, minY, maxY];
    }

    static translatePose(pose, d) {
        pose.frames.forEach(frame => {
            frame.pose.keypoints.forEach(kp => {
                kp.position.x += d.x;
                kp.position.y += d.y;
            });
            let faceKeypoints = frame.face.positions;
            for (let i = 0; i < faceKeypoints.length; i += 2) {
                faceKeypoints[i] += d.x;
                faceKeypoints[i+1] += d.y;
            }
        });
    }

    static resizePose(pose, origin, scale) {
        pose.frames.forEach(frame => {
            frame.pose.keypoints.forEach(kp => {
                kp.position.x = origin.x + (kp.position.x - origin.x) * scale.x;
                kp.position.y = origin.y + (kp.position.y - origin.y) * scale.y;
            });
            let faceKeypoints = frame.face.positions;
            for (let i = 0; i < faceKeypoints.length; i += 2) {
                faceKeypoints[i] = origin.x + (faceKeypoints[i] - origin.x) * scale.x;
                faceKeypoints[i+1] = origin.y + (faceKeypoints[i+1] - origin.y) * scale.y;
            }
        });
    }

    static toFaceFrame(faceDetection) {
        let frame = {
            positions: [],
            faceInViewConfidence: faceDetection.faceInViewConfidence,
        };
        for (let i = 0; i < facePartNames.length; i++) {
            let partName = facePartNames[i];
            let p = faceDetection.scaledMesh[facePartName2Index[partName]];
            frame.positions.push(p[0]);
            frame.positions.push(p[1]);
        }
        return frame;
    }

    
}


/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

const allPartNamesMap = {};
allPartNames.forEach(name => allPartNamesMap[name] = 1);

const MIN_CONFIDENCE_PATH_SCORE = 0.3;

// Represents a skinned illustration.
class PoseIllustration {
    constructor(scope) {
        this.scope = scope;
        this.frames = [];
    }

    updateSkeleton(pose, face) {
        this.pose = pose;
        this.face = face;
        this.skeleton.update(pose, face);
        if (!this.skeleton.isValid) {
            return;
        }

        let getConfidenceScore = (p) => {
            return Object.keys(p.skinning).reduce((totalScore, boneName) => {
                let bt = p.skinning[boneName];
                return totalScore + bt.bone.score * bt.weight;
            }, 0);
        }
      
        this.skinnedPaths.forEach(skinnedPath => {
            let confidenceScore = 0;
            skinnedPath.segments.forEach(seg => {
                // Compute confidence score.

                confidenceScore += getConfidenceScore(seg.point);
                // Compute new positions for curve point and handles.
                seg.point.currentPosition = Skeleton.getCurrentPosition(seg.point);
                if (seg.handleIn) {
                    seg.handleIn.currentPosition = Skeleton.getCurrentPosition(seg.handleIn);
                }
                if (seg.handleOut) {
                    seg.handleOut.currentPosition = Skeleton.getCurrentPosition(seg.handleOut);
                }
            });
            skinnedPath.confidenceScore = confidenceScore / (skinnedPath.segments.length || 1);
        });
    }

    draw() {
        if (!this.skeleton.isValid) {
            return;
        }
        let scope = this.scope;
        // Add paths
        this.skinnedPaths.forEach(skinnedPath => {
            // Do not render paths with low confidence scores.
            if (!skinnedPath.confidenceScore || skinnedPath.confidenceScore < MIN_CONFIDENCE_PATH_SCORE) {
                return;
            }
            let path = new scope.Path({
                fillColor: skinnedPath.fillColor,
                strokeColor: skinnedPath.strokeColor,
                strokeWidth: skinnedPath.strokeWidth,
                closed: skinnedPath.closed,
            });
            skinnedPath.segments.forEach(seg => {
                path.addSegment(seg.point.currentPosition,
                    seg.handleIn ? seg.handleIn.currentPosition.subtract(seg.point.currentPosition) : null,
                    seg.handleOut ? seg.handleOut.currentPosition.subtract(seg.point.currentPosition) : null);
            });
            if (skinnedPath.closed) {
                path.closePath();
            }
            scope.project.activeLayer.addChild(path);
        });
    }

    debugDraw() {
        let scope = this.scope;
        let group = new scope.Group();
        scope.project.activeLayer.addChild(group);
        let drawCircle = (p, opt = {}) => {
            group.addChild(new scope.Path.Circle({
                center: [p.x, p.y],
                radius: opt.radius || 2,
                fillColor: opt.fillColor || 'red',
            }));
        }
        let drawLine = (p0, p1, opt = {}) => {
            group.addChild(new scope.Path({
                segments: [p0, p1],
                strokeColor: opt.strokeColor || 'red',
                strokeWidth: opt.strokeWidth || 1
            }));
        }
        // Draw skeleton.
        this.skeleton.debugDraw(scope);
        // Draw curve and handles.
        this.skinnedPaths.forEach(skinnedPath => {
            skinnedPath.segments.forEach(seg => {
                // Color represents weight influence from bones.
                let color = new scope.Color(0);
                Object.keys(seg.point.skinning).forEach((boneName) => {
                    let bt = seg.point.skinning[boneName];
                    ColorUtils.addRGB(color,
                        bt.weight * bt.bone.boneColor.red,
                        bt.weight * bt.bone.boneColor.green,
                        bt.weight * bt.bone.boneColor.blue);
                        let anchor = bt.bone.kp0.currentPosition.multiply(1 - bt.transform.anchorPerc).add(bt.bone.kp1.currentPosition.multiply(bt.transform.anchorPerc));
                        drawLine(anchor, seg.point.currentPosition, {strokeColor: 'blue', strokeWidth: bt.weight});
                });

                drawCircle(seg.point.currentPosition, {fillColor: color});
                drawCircle(seg.handleIn.currentPosition, {fillColor: color});
                drawLine(seg.point.currentPosition, seg.handleIn.currentPosition, {strokeColor: color});
                drawCircle(seg.handleOut.currentPosition, {fillColor: color}, {strokeColor: color});
                drawLine(seg.point.currentPosition, seg.handleOut.currentPosition);
            });
        });
    }

    debugDrawLabel(scope) {
        this.skeleton.debugDrawLabels(scope);
    }

    bindSkeleton(skeleton, skeletonScope) {
        let items = skeletonScope.project.getItems({ recursive: true });
        items = items.filter(item => item.parent && item.parent.name && item.parent.name.startsWith('illustration'));
        this.skeleton = skeleton;
        this.skinnedPaths = [];

        // Only support rendering path and shapes for now.
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (SVGUtils.isGroup(item)) {
                this.bindGroup(item, skeleton);
            } else if (SVGUtils.isPath(item)) {
                this.bindPathToBones(item);
            } else if (SVGUtils.isShape(item)) {
                this.bindPathToBones(item.toPath());
            }
        }
    }

    bindGroup(group, skeleton) {
        let paths = [];
        let keypoints = {};
        let items = group.getItems({recursive: true});
        // Find all paths and included keypoints.
        items.forEach(item => {
            let partName = item.name ? allPartNames.find(partName => item.name.startsWith(partName)) : null;
            if (partName) {
                keypoints[partName] = {
                    position: item.bounds.center,
                    name: partName,
                };
            } else if (SVGUtils.isPath(item)) {
                paths.push(item);
            } else if (SVGUtils.isShape(item)) {
                paths.push(item.toPath());
            }
        });
        let secondaryBones = [];
        // Find all parent bones of the included keypoints.
        let parentBones = skeleton.bones.filter(bone => keypoints[bone.kp0.name] && keypoints[bone.kp1.name]);
        let nosePos = skeleton.bNose3Nose4.kp1.position;
        if (!parentBones.length) {
            return;
        }

        // Crete secondary bones for the included keypoints.
        parentBones.forEach(parentBone => {
            let kp0 = keypoints[parentBone.kp0.name];
            let kp1 = keypoints[parentBone.kp1.name];
            let secondaryBone = new Bone().set(kp0, kp1, parentBone.skeleton, parentBone.type);
            kp0.transformFunc = MathUtils.getTransformFunc(parentBone.kp0.position, nosePos, kp0.position);
            kp1.transformFunc = MathUtils.getTransformFunc(parentBone.kp1.position, nosePos, kp1.position);
            secondaryBone.parent = parentBone;
            secondaryBones.push(secondaryBone);
        });
        skeleton.secondaryBones = skeleton.secondaryBones.concat(secondaryBones);
        paths.forEach(path => {
            this.bindPathToBones(path, secondaryBones);
        });
    }

    // Assign weights from bones for point.
    // Weight calculation is roughly based on linear blend skinning model.
    getWeights(point, bones) {
        let totalW = 0;
        let weights = {};
        bones.forEach(bone => {
            let d = MathUtils.getClosestPointOnSegment(bone.kp0.position, bone.kp1.position, point)
                .getDistance(point);
            // Absolute weight = 1 / (distance * distance)
            let w = 1 / (d * d);
            weights[bone.name] = {
                value: w,
                bone: bone,
            }
        });

        let values = Object.values(weights).sort((v0, v1) => {
            return v1.value - v0.value;
        });
        weights = {};
        totalW = 0;
        values.forEach(v => {
            weights[v.bone.name] = v;
            totalW += v.value;
        });
        if (totalW === 0) {
            // Point is outside of the influence zone of all bones. It will not be influence by any bone.
            return {};
        }

        // Normalize weights to sum up to 1.
        Object.values(weights).forEach(weight => {
            weight.value /= totalW;
        });

        return weights;
    }

    // Binds a path to bones by compute weight contribution from each bones for each path segment.
    // If selectedBones are set, bind directly to the selected bones. Otherwise auto select the bone group closest to each segment.
    bindPathToBones(path, selectedBones) {
        // Compute bone weights for each segment.
        let segs = path.segments.map(s => {
            // Check if control points are collinear.
            // If so, use the middle point's weight for all three points (curve point, handleIn, handleOut).
            // This makes sure smooth curves remain smooth after deformation.
            let collinear = MathUtils.isCollinear(s.handleIn, s.handleOut);
            let bones = selectedBones || this.skeleton.findBoneGroup(s.point);
            let weightsP = this.getWeights(s.point, bones);
            let segment = {
                point: this.getSkinning(s.point, weightsP),
            };
            // For handles, compute transformation in world space.
            if (s.handleIn) {
                let pHandleIn = s.handleIn.add(s.point);
                segment.handleIn = this.getSkinning(pHandleIn, collinear ? weightsP : this.getWeights(pHandleIn, bones));
            }
            if (s.handleOut) {
                let pHandleOut = s.handleOut.add(s.point);
                segment.handleOut = this.getSkinning(pHandleOut, collinear ? weightsP : this.getWeights(pHandleOut, bones));
            }
            return segment;
        });
        this.skinnedPaths.push({
            segments: segs,
            fillColor: path.fillColor,
            strokeColor: 'black', // path.strokeColor,
            strokeWidth: path.strokeWidth,
            closed: path.closed
        });
    }

    getSkinning(point, weights) {
        let skinning = {};
        Object.keys(weights).forEach(boneName => {
            skinning[boneName] = {
                bone: weights[boneName].bone,
                weight: weights[boneName].value,
                transform: weights[boneName].bone.getPointTransform(point),
            };
        });
        return {
            skinning: skinning,
            position: point,
            currentPosition: new this.scope.Point(0, 0),
        }
    };
}


/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

//import * as paper from 'paper';

class SVGUtils {
    static importSVG(file) {
        let svgScope = new paper.PaperScope();
        svgScope.activate()
        let canvas_svg = svgScope.createCanvas(0, 0);
        svgScope.setup(canvas_svg);
        return new Promise((resolve, reject) => {
            svgScope.project.importSVG(file, () => {
                console.log('** SVG imported **');
                resolve(svgScope);
            }, (e) => {
                console.log('** SVG improt error: ', e);
                reject(svgScope);
            });
        })
    }

  static drawEllipse(p, va, vb, ctrlDA, ctrlDB, scope, options) {
        let va1 = va.multiply(-1);
        let vb1 = vb.multiply(-1);
        let p0 = p.add(va);
        let p1 = p.add(vb);
        let p2 = p.add(va1);
        let p3 = p.add(vb1);
        let path = new scope.Path(options);
        path.addSegment(p0, vb1.normalize().multiply(ctrlDB), vb.normalize().multiply(ctrlDB));
        path.addSegment(p1, va.normalize().multiply(ctrlDA), va1.normalize().multiply(ctrlDA));
        path.addSegment(p2, vb.normalize().multiply(ctrlDB), vb1.normalize().multiply(ctrlDB));
        path.addSegment(p3, va1.normalize().multiply(ctrlDA), va.normalize().multiply(ctrlDA));
        path.closePath();
        return path;
    }
  
//    static genPathWithSpline(path, spline, height, options, scope) {
//        let pathLen = path.length;
//        if (pathLen == 0) {
//            return path.clone();
//        }
//        let to = [];
//        let back = [];;
//        let segCount = Math.max(pathLen / 3, 1.0);
//        for (let i = 0; i < segCount; i++) {
//            let perc = i / (segCount - 1);
//            let p = path.getPointAt(perc * pathLen);
//            let n = path.getNormalAt(perc * pathLen);
//            let easeHeight = spline.get(perc);
//            if (!p || !n) continue;
//            let pp0 = p.add(n.multiply(height * easeHeight));
//            let pp1 = p.subtract(n.multiply(height * easeHeight));
//            to.push(pp0);
//            back.unshift(pp1);
//        }
//
//        let outPath = new scope.Path(options);
//        outPath.addSegments(to.concat(back));
//        outPath.simplify();
//        return outPath;
//    }

    static isPath(item) {
        return item.constructor === item.project._scope.Path;
    }

    static isShape(item) {
        return item.constructor === item.project._scope.Shape;
    }

    static isGroup(item) {
        return item.constructor === item.project._scope.Group;
    }

    static findFirstItemWithPrefix(root, prefix) {
        let items = root.getItems({ recursive: true });
        for (let i = 0; i < items.length; i++) {
            if (items[i].name && items[i].name.startsWith(prefix)) {
            return items[i];
            }
        }
        return null;
    }
}


/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

function getDistance(p0, p1) {
    return Math.sqrt((p0.x - p1.x) * (p0.x - p1.x) + (p0.y - p1.y) * (p0.y - p1.y));
}

class MathUtils {
    static lerp(v0, v1, perc) {
        return v0 + (v1 - v0) * perc;
    }

    static random(v0, v1) {
        return v0 + Math.random() * (v1 - v0);
    }

    static smoothStep(v, min, max) {
        var x = Math.max(0, Math.min(1, (v-min)/(max-min)));
        return x*x*(3 - 2*x);
    }

    // Generate a transform function of p in the coordinate system defined by p0 and p1.
    static getTransformFunc(p0, p1, p) {
        let d = p1.subtract(p0);
        let dir = d.normalize();
        let l0 = d.length;
        let n = dir.clone();
        n.angle += 90;
        let v = p.subtract(p0);
        let x = v.dot(dir);
        let y = v.dot(n);
        return (p0New, p1New) => {
            let d = p1New.subtract(p0New);
            if (d.length === 0) {
                return p0New.clone();
            }
            let scale = d.length / l0;
            let dirNew = d.normalize();
            let nNew = dirNew.clone();
            nNew.angle += 90;
            return p0New.add(dirNew.multiply(x * scale)).add(nNew.multiply(y * scale));
        }
    }

    static getClosestPointOnSegment(p0, p1, p) {
        let d = p1.subtract(p0);
        let c = p.subtract(p0).dot(d) / (d.dot(d));
        if (c >= 1) {
            return p1.clone();
        } else if (c <= 0) {
            return p0.clone();
        } else {
            return p0.add(d.multiply(c));
        }
    }

    // Check if v0 and v1 are collinear.
    // Returns true if cosine of the angle between v0 and v1 is within threshold to 1.
    static isCollinear(v0, v1, threshold = 0.01) {
        let colinear = false;
        if (v0 && v1) {
            let n0 = v0.normalize();
            let n1 = v1.normalize();
            colinear = Math.abs(n0.dot(n1)) > 1 - threshold;
        }
        return colinear;
    }

    static gaussian(mean, variance) {
        var u = 0, v = 0;
        while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random();
        let value = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
        return value * variance + mean;
    }

    static clamp(v, minV, maxV) {
        return Math.min(Math.max(v, minV), maxV);
    }

    static selectSegments(selectPerc, count, selectVar, segVar) {
        let segments = [];
        let totalSeg = 0;
        for (let i = 0; i < count; i++) {
            let seg = MathUtils.gaussian(1, segVar);
            segments.push(seg);
            totalSeg += seg;
        }
        for (let i = 0; i < segments.length; i++) {
            segments[i] = segments[i] / totalSeg;
        }
        let cursor = 0;
        let selected = [];
        for (let i = 0; i < count; i++) {
            let s0 = cursor;
            let s1 = cursor + segments[i] * MathUtils.clamp(MathUtils.gaussian(1, selectVar) * selectPerc, 0, 1);
            selected.push([s0, s1]);
            cursor += segments[i];
        }
        return selected;
    }

    static isLeft(p0, p1, p){
        return ((p1.x - p0.x)*(p.y - p0.y) - (p1.y - p0.y)*(p.x - p0.x)) > 0;
   }

    static packCircles(center, radius, seedCount, maxR, minR, maxIter = 10) {
        let circles = [];
        let iterCount = 0;
        while (circles.length < seedCount && iterCount < maxIter) {
            while (circles.length < seedCount) {
                let c = {
                    x: radius * (Math.random() * 2 - 1) + center.x,
                    y: radius * (Math.random() * 2 - 1) + center.y,
                };
                if (getDistance(c, center) > radius || circles.some(circle => getDistance(circle, c) < circle.radius)) continue;
                circles.push({
                    c: c,
                    r: 0,
                });
            }
            let growthIterCount = 20;
            let intersects = (c0, c1) => {
                let d = getDistance(c0.c, c1.c);
                return (d < c0.r + c1.r) && (d > Math.abs(c0.r - c1.r));
            }
            let bound = {
                c: center,
                r: radius,
            };
            for (let i = 0; i < growthIterCount; i++) {
                let grew = false;
                circles.forEach(s => {
                    let intersecting = circles.some(other => (s !== other) && (intersects(s, other) || intersects(s, bound)));
                    if (!intersecting && s.r < maxR) {
                        s.r += maxR / growthIterCount;
                        grew = true;
                    }
                });
                if (!grew) break;
            }
            circles = circles.filter(c => c.r >= minR);
            iterCount++;
        }
        return circles;
    }
}

class KeySpline {
    constructor(mX1, mY1, mX2, mY2) {
        this.mX1 = mX1;
        this.mY1 = mY1;
        this.mX2 = mX2;
        this.mY2 = mY2;
    }

    get(aX) {
        if (this.mX1 == this.mY1 && this.mX2 == this.mY2) return aX; // linear
        return this.CalcBezier(this.GetTForX(aX), this.mY1, this.mY2);
    }
    
    A( aA1,  aA2)  { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
    B( aA1,  aA2)  { return 3.0 * aA2 - 6.0 * aA1; }
    C( aA1)  { return 3.0 * aA1; }
    
    // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
    CalcBezier( aT,  aA1,  aA2)  {
        return ((this.A(aA1, aA2) * aT + this.B(aA1, aA2)) * aT + this.C(aA1)) * aT;
    }
    
    // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
    GetSlope( aT,  aA1,  aA2)  {
        return 3.0 * this.A(aA1, aA2) * aT * aT + 2.0 * this.B(aA1, aA2) * aT + this.C(aA1);
    }
    
    GetTForX( aX)  {
        // Newton raphson iteration
        let aGuessT = aX;
        for (let i = 0; i < 4; ++i) {
            let currentSlope = this.GetSlope(aGuessT, this.mX1, this.mX2);
            if (currentSlope == 0.0) return aGuessT;
            let currentX = this.CalcBezier(aGuessT, this.mX1, this.mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    }
};

class MultiSpline {
    constructor() {
        this.keySplines = [];
        this.segments = [];
        this.x0 = 0;
        this.y0 = 0;
    }

    add(mX1, mY1, mX2, mY2, x1, y1) {
        let ks = new KeySpline(mX1, mY1, mX2, mY2);
        let x0 = this.x0;
        let y0 = this.y0;
        if (this.segments.length) {
            x0 = this.segments[this.segments.length - 1][1].x;
            y0 = this.segments[this.segments.length - 1][1].y;
        }
        this.keySplines.push(ks);
        this.segments.push([{x: x0, y: y0}, {x: x1, y: y1}]);
    }

    get(x) {
        let index = -1;
        for (let i = 0; i < this.segments.length; i++) {
            if (x >= this.segments[i][0].x && x < this.segments[i][1].x) {
                index = i;
                break;
            }
        }
        if (index < 0) {
            return 0;
        }
        let seg = this.segments[index];
        let ks = this.keySplines[index];
        let perc = (x - seg[0].x) / (seg[1].x - seg[0].x);
        if (index % 2 == 0) {
            return MathUtils.lerp(seg[0].y, seg[1].y, ks.get(perc));
        } else {
            return MathUtils.lerp(seg[1].y, seg[0].y, ks.get(1 - perc));
        }
    }
}


/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

class Palette {
    constructor(colors) {
        let scope = paper;
        this.colors = colors.map(c => ({
            light: new scope.Color(c[0]).convert('hsb'),
            dark: new scope.Color(c[1]).convert('hsb'),
        }));
    }

    select(variance) {
        let scope = paper;
        let pair = this.colors[Math.floor(Math.random() * this.colors.length)];
        let varColor = (c) => new scope.Color({
            hue: c.hue + 360 * MathUtils.gaussian(0, variance),
            saturation: c.saturation + MathUtils.gaussian(0, variance),
            brightness: c.brightness + MathUtils.gaussian(0, variance),
        });
        return {
            light: varColor(pair.light),
            dark: varColor(pair.dark),
        };
    }
}

class ColorUtils {
    static addRGB(color, red, green, blue) {
        color.red = color.red + red;
        color.green = color.green + green;
        color.blue = color.blue + blue;
    }

    static lerp(color0, color1, amt) {
        return new paper.Color(
            MathUtils.lerp(color0.red, color1.red, amt),
            MathUtils.lerp(color0.green, color1.green, amt),
            MathUtils.lerp(color0.blue, color1.blue, amt),
        );
    }

    // Generates random color from string hash.
    static fromStringHash(str) {
        // Compute hash from string
        // Source http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
        var hash = 0, i, chr;
        for (i = 0; i < str.length; i++) {
        chr   = str.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
        }
        // Hash to rgb color.
        let r = hash & 255;
        let g = (hash & (255 << 8)) >> 8;
        let b = (hash & (255 << 16)) >> 16;
        return new paper.Color(r / 255, g / 255, b / 255);
    }
}




//paper.install(window);

var meta = document.createElement('meta');
meta.setAttribute('name', 'viewport');
meta.setAttribute('content', 'width=device-width');
document.getElementsByTagName('head')[0].appendChild(meta);

var faceDetection = null;
var paper_already_setup = false;
var canvasWidth;
var canvasHeight;

var canvasScope;
var svgScope;

var skeleton;

var svg = document.getElementById("Layer_1");
svg.parentNode.removeChild(svg);

var illustration;
var poses_new;
var faces_new;

async function setupPaper() {
  if (!paper_already_setup) {
    svgScope = await SVGUtils.importSVG(svg);
    skeleton = new Skeleton(svgScope);


    var canvas = document.getElementById("myCanvas");


    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  
    canvasScope = new paper.PaperScope();
    canvasScope.activate()
    canvasScope.setup(canvas)
    
    illustration = new PoseIllustration(canvasScope);
    illustration.bindSkeleton(skeleton, svgScope);
    paper_already_setup = true;
  }
}


function drawAnimatedPerson(poses, faces) {
  poses = JSON.parse(poses);
  faces = JSON.parse(faces);
  canvasScope.project.clear();
  if (Object.keys(faces).length != 0) {
    face = Skeleton.toFaceFrame(faces);
  } else {
    face = null;
  }
  illustration.updateSkeleton(poses, face);
  illustration.draw(canvasScope, canvasWidth, canvasHeight);
  canvasScope.project.activeLayer.scale(1, 1, new canvasScope.Point(0, 0));
}


setupPaper();true
