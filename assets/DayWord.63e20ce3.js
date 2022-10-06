import{_ as Be,o as Ue,c as ge,d as Le,v as Fe}from"./app.9c0d67b2.js";var X={exports:{}},ve=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},je=ve,K=Object.prototype.toString,Q=function(r){return function(e){var t=K.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return Q(t)===r}}function Y(r){return Array.isArray(r)}function g(r){return typeof r=="undefined"}function Ie(r){return r!==null&&!g(r)&&r.constructor!==null&&!g(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var me=A("ArrayBuffer");function qe(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&me(r.buffer),e}function ke(r){return typeof r=="string"}function Me(r){return typeof r=="number"}function Ee(r){return r!==null&&typeof r=="object"}function B(r){if(Q(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var He=A("Date"),We=A("File"),Je=A("Blob"),Ve=A("FileList");function G(r){return K.call(r)==="[object Function]"}function ze(r){return Ee(r)&&G(r.pipe)}function Xe(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||K.call(r)===e||G(r.toString)&&r.toString()===e)}var Ke=A("URLSearchParams");function Qe(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Ye(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Z(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),Y(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function V(){var r={};function e(n,a){B(r[a])&&B(n)?r[a]=V(r[a],n):B(n)?r[a]=V({},n):Y(n)?r[a]=n.slice():r[a]=n}for(var t=0,i=arguments.length;t<i;t++)Z(arguments[t],e);return r}function Ge(r,e,t){return Z(e,function(n,a){t&&typeof n=="function"?r[a]=je(n,t):r[a]=n}),r}function Ze(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function er(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function rr(r,e,t){var i,n,a,s={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)a=i[n],s[a]||(e[a]=r[a],s[a]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function tr(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function nr(r){if(!r)return null;var e=r.length;if(g(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var ir=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),h={isArray:Y,isArrayBuffer:me,isBuffer:Ie,isFormData:Xe,isArrayBufferView:qe,isString:ke,isNumber:Me,isObject:Ee,isPlainObject:B,isUndefined:g,isDate:He,isFile:We,isBlob:Je,isFunction:G,isStream:ze,isURLSearchParams:Ke,isStandardBrowserEnv:Ye,forEach:Z,merge:V,extend:Ge,trim:Qe,stripBOM:Ze,inherits:er,toFlatObject:rr,kindOf:Q,kindOfTest:A,endsWith:tr,toArray:nr,isTypedArray:ir,isFileList:Ve},S=h;function ie(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ye=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(S.isURLSearchParams(t))n=t.toString();else{var a=[];S.forEach(t,function(f,d){f===null||typeof f=="undefined"||(S.isArray(f)?d=d+"[]":f=[f],S.forEach(f,function(l){S.isDate(l)?l=l.toISOString():S.isObject(l)&&(l=JSON.stringify(l)),a.push(ie(d)+"="+ie(l))}))}),n=a.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},ar=h;function L(){this.handlers=[]}L.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};L.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};L.prototype.forEach=function(e){ar.forEach(this.handlers,function(i){i!==null&&e(i)})};var sr=L,or=h,ur=function(e,t){or.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},Re=h;function C(r,e,t,i,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}Re.inherits(C,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var we=C.prototype,be={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){be[r]={value:r}});Object.defineProperties(C,be);Object.defineProperty(we,"isAxiosError",{value:!0});C.from=function(r,e,t,i,n,a){var s=Object.create(we);return Re.toFlatObject(r,s,function(f){return f!==Error.prototype}),C.call(s,r.message,e,t,i,n),s.name=r.name,a&&Object.assign(s,a),s};var P=C,Oe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},R=h;function fr(r,e){e=e||new FormData;var t=[];function i(a){return a===null?"":R.isDate(a)?a.toISOString():R.isArrayBuffer(a)||R.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,s){if(R.isPlainObject(a)||R.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+s);t.push(a),R.forEach(a,function(f,d){if(!R.isUndefined(f)){var o=s?s+"."+d:d,l;if(f&&!s&&typeof f=="object"){if(R.endsWith(d,"{}"))f=JSON.stringify(f);else if(R.endsWith(d,"[]")&&(l=R.toArray(f))){l.forEach(function(m){!R.isUndefined(m)&&e.append(o,i(m))});return}}n(f,o)}}),t.pop()}else e.append(s,i(a))}return n(r),e}var Ae=fr,M=P,lr=function(e,t,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(new M("Request failed with status code "+i.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},$=h,cr=$.isStandardBrowserEnv()?function(){return{write:function(t,i,n,a,s,u){var f=[];f.push(t+"="+encodeURIComponent(i)),$.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),$.isString(a)&&f.push("path="+a),$.isString(s)&&f.push("domain="+s),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),dr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},hr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},pr=dr,vr=hr,_e=function(e,t){return e&&!pr(t)?vr(e,t):t},H=h,mr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Er=function(e){var t={},i,n,a;return e&&H.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),i=H.trim(u.substr(0,a)).toLowerCase(),n=H.trim(u.substr(a+1)),i){if(t[i]&&mr.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([n]):t[i]=t[i]?t[i]+", "+n:n}}),t},ae=h,yr=ae.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function n(a){var s=a;return e&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=n(window.location.href),function(s){var u=ae.isString(s)?n(s):s;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}(),z=P,Rr=h;function Se(r){z.call(this,r==null?"canceled":r,z.ERR_CANCELED),this.name="CanceledError"}Rr.inherits(Se,z,{__CANCEL__:!0});var F=Se,wr=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},D=h,br=lr,Or=cr,Ar=ye,_r=_e,Sr=Er,xr=yr,Cr=Oe,w=P,Tr=F,Nr=wr,se=function(e){return new Promise(function(i,n){var a=e.data,s=e.headers,u=e.responseType,f;function d(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}D.isFormData(a)&&D.isStandardBrowserEnv()&&delete s["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(l+":"+m)}var p=_r(e.baseURL,e.url);o.open(e.method.toUpperCase(),Ar(p,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function te(){if(!!o){var y="getAllResponseHeaders"in o?Sr(o.getAllResponseHeaders()):null,_=!u||u==="text"||u==="json"?o.responseText:o.response,O={data:_,status:o.status,statusText:o.statusText,headers:y,config:e,request:o};br(function(k){i(k),d()},function(k){n(k),d()},O),o=null}}if("onloadend"in o?o.onloadend=te:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(te)},o.onabort=function(){!o||(n(new w("Request aborted",w.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new w("Network Error",w.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var _=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",O=e.transitional||Cr;e.timeoutErrorMessage&&(_=e.timeoutErrorMessage),n(new w(_,O.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,o)),o=null},D.isStandardBrowserEnv()){var ne=(e.withCredentials||xr(p))&&e.xsrfCookieName?Or.read(e.xsrfCookieName):void 0;ne&&(s[e.xsrfHeaderName]=ne)}"setRequestHeader"in o&&D.forEach(s,function(_,O){typeof a=="undefined"&&O.toLowerCase()==="content-type"?delete s[O]:o.setRequestHeader(O,_)}),D.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(y){!o||(n(!y||y&&y.type?new Tr:y),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),a||(a=null);var q=Nr(p);if(q&&["http","https","file"].indexOf(q)===-1){n(new w("Unsupported protocol "+q+":",w.ERR_BAD_REQUEST,e));return}o.send(a)})},Pr=null,c=h,oe=ur,ue=P,Dr=Oe,$r=Ae,Br={"Content-Type":"application/x-www-form-urlencoded"};function fe(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Ur(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=se),r}function gr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var j={transitional:Dr,adapter:Ur(),transformRequest:[function(e,t){if(oe(t,"Accept"),oe(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e))return e;if(c.isArrayBufferView(e))return e.buffer;if(c.isURLSearchParams(e))return fe(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=c.isObject(e),n=t&&t["Content-Type"],a;if((a=c.isFileList(e))||i&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return $r(a?{"files[]":e}:e,s&&new s)}else if(i||n==="application/json")return fe(t,"application/json"),gr(e);return e}],transformResponse:[function(e){var t=this.transitional||j.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a)throw s.name==="SyntaxError"?ue.from(s,ue.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pr},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){j.headers[e]={}});c.forEach(["post","put","patch"],function(e){j.headers[e]=c.merge(Br)});var ee=j,Lr=h,Fr=ee,jr=function(e,t,i){var n=this||Fr;return Lr.forEach(i,function(s){e=s.call(n,e,t)}),e},xe=function(e){return!!(e&&e.__CANCEL__)},le=h,W=jr,Ir=xe,qr=ee,kr=F;function J(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new kr}var Mr=function(e){J(e),e.headers=e.headers||{},e.data=W.call(e,e.data,e.headers,e.transformRequest),e.headers=le.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),le.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||qr.adapter;return t(e).then(function(n){return J(e),n.data=W.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Ir(n)||(J(e),n&&n.response&&(n.response.data=W.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=h,Ce=function(e,t){t=t||{};var i={};function n(o,l){return E.isPlainObject(o)&&E.isPlainObject(l)?E.merge(o,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function a(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function s(o){if(!E.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function f(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var d={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var m=d[l]||a,p=m(l);E.isUndefined(p)&&m!==f||(i[l]=p)}),i},Te={version:"0.27.2"},Hr=Te.version,b=P,re={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){re[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var ce={};re.transitional=function(e,t,i){function n(a,s){return"[Axios v"+Hr+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return function(a,s,u){if(e===!1)throw new b(n(s," has been removed"+(t?" in "+t:"")),b.ERR_DEPRECATED);return t&&!ce[s]&&(ce[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,s,u):!0}};function Wr(r,e,t){if(typeof r!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var a=i[n],s=e[a];if(s){var u=r[a],f=u===void 0||s(u,a,r);if(f!==!0)throw new b("option "+a+" must be "+f,b.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new b("Unknown option "+a,b.ERR_BAD_OPTION)}}var Jr={assertOptions:Wr,validators:re},Ne=h,Vr=ye,de=sr,he=Mr,I=Ce,zr=_e,Pe=Jr,x=Pe.validators;function T(r){this.defaults=r,this.interceptors={request:new de,response:new de}}T.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=I(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&Pe.assertOptions(i,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(a=a&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var s=[];this.interceptors.response.forEach(function(p){s.push(p.fulfilled,p.rejected)});var u;if(!a){var f=[he,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(s),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var d=t;n.length;){var o=n.shift(),l=n.shift();try{d=o(d)}catch(m){l(m);break}}try{u=he(d)}catch(m){return Promise.reject(m)}for(;s.length;)u=u.then(s.shift(),s.shift());return u};T.prototype.getUri=function(e){e=I(this.defaults,e);var t=zr(e.baseURL,e.url);return Vr(t,e.params,e.paramsSerializer)};Ne.forEach(["delete","get","head","options"],function(e){T.prototype[e]=function(t,i){return this.request(I(i||{},{method:e,url:t,data:(i||{}).data}))}});Ne.forEach(["post","put","patch"],function(e){function t(i){return function(a,s,u){return this.request(I(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}T.prototype[e]=t(),T.prototype[e+"Form"]=t(!0)});var Xr=T,Kr=F;function N(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(i){if(!!t._listeners){var n,a=t._listeners.length;for(n=0;n<a;n++)t._listeners[n](i);t._listeners=null}}),this.promise.then=function(i){var n,a=new Promise(function(s){t.subscribe(s),n=s}).then(i);return a.cancel=function(){t.unsubscribe(n)},a},r(function(n){t.reason||(t.reason=new Kr(n),e(t.reason))})}N.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};N.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};N.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};N.source=function(){var e,t=new N(function(n){e=n});return{token:t,cancel:e}};var Qr=N,Yr=function(e){return function(i){return e.apply(null,i)}},Gr=h,Zr=function(e){return Gr.isObject(e)&&e.isAxiosError===!0},pe=h,et=ve,U=Xr,rt=Ce,tt=ee;function De(r){var e=new U(r),t=et(U.prototype.request,e);return pe.extend(t,U.prototype,e),pe.extend(t,e),t.create=function(n){return De(rt(r,n))},t}var v=De(tt);v.Axios=U;v.CanceledError=F;v.CancelToken=Qr;v.isCancel=xe;v.VERSION=Te.version;v.toFormData=Ae;v.AxiosError=P;v.Cancel=v.CanceledError;v.all=function(e){return Promise.all(e)};v.spread=Yr;v.isAxiosError=Zr;X.exports=v;X.exports.default=v;var nt=X.exports;const it={name:"DayWord",data:()=>({word:""}),created(){nt.get("https://v1.hitokoto.cn").then(r=>{this.word=r.data.hitokoto,console.log(r)})}},at={id:"homeStartAddr",class:"wordBox"},st={id:"wordStr"};function ot(r,e,t,i,n,a){return Ue(),ge("div",at,[Le("p",st,"\u300C "+Fe(r.word)+" \u300D",1)])}var ft=Be(it,[["render",ot],["__scopeId","data-v-05c50dea"],["__file","DayWord.vue"]]);export{ft as default};
