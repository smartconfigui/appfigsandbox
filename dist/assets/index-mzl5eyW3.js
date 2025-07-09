(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Md={exports:{}},Sl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function zS(){if(M_)return Sl;M_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Sl.Fragment=e,Sl.jsx=n,Sl.jsxs=n,Sl}var V_;function jS(){return V_||(V_=1,Md.exports=zS()),Md.exports}var W=jS(),Vd={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function BS(){if(x_)return Ce;x_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),C=Symbol.iterator;function I(O){return O===null||typeof O!="object"?null:(O=C&&O[C]||O["@@iterator"],typeof O=="function"?O:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,re={};function Z(O,X,ie){this.props=O,this.context=X,this.refs=re,this.updater=ie||q}Z.prototype.isReactComponent={},Z.prototype.setState=function(O,X){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,X,"setState")},Z.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Se(){}Se.prototype=Z.prototype;function le(O,X,ie){this.props=O,this.context=X,this.refs=re,this.updater=ie||q}var ae=le.prototype=new Se;ae.constructor=le,J(ae,Z.prototype),ae.isPureReactComponent=!0;var Ve=Array.isArray,ge={H:null,A:null,T:null,S:null,V:null},De=Object.prototype.hasOwnProperty;function N(O,X,ie,ee,me,Oe){return ie=Oe.ref,{$$typeof:r,type:O,key:X,ref:ie!==void 0?ie:null,props:Oe}}function S(O,X){return N(O.type,X,void 0,void 0,void 0,O.props)}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function M(O){var X={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ie){return X[ie]})}var V=/\/+/g;function k(O,X){return typeof O=="object"&&O!==null&&O.key!=null?M(""+O.key):X.toString(36)}function b(){}function It(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(b,b):(O.status="pending",O.then(function(X){O.status==="pending"&&(O.status="fulfilled",O.value=X)},function(X){O.status==="pending"&&(O.status="rejected",O.reason=X)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function lt(O,X,ie,ee,me){var Oe=typeof O;(Oe==="undefined"||Oe==="boolean")&&(O=null);var Ee=!1;if(O===null)Ee=!0;else switch(Oe){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(O.$$typeof){case r:case e:Ee=!0;break;case E:return Ee=O._init,lt(Ee(O._payload),X,ie,ee,me)}}if(Ee)return me=me(O),Ee=ee===""?"."+k(O,0):ee,Ve(me)?(ie="",Ee!=null&&(ie=Ee.replace(V,"$&/")+"/"),lt(me,X,ie,"",function(cn){return cn})):me!=null&&(R(me)&&(me=S(me,ie+(me.key==null||O&&O.key===me.key?"":(""+me.key).replace(V,"$&/")+"/")+Ee)),X.push(me)),1;Ee=0;var Tt=ee===""?".":ee+":";if(Ve(O))for(var Ze=0;Ze<O.length;Ze++)ee=O[Ze],Oe=Tt+k(ee,Ze),Ee+=lt(ee,X,ie,Oe,me);else if(Ze=I(O),typeof Ze=="function")for(O=Ze.call(O),Ze=0;!(ee=O.next()).done;)ee=ee.value,Oe=Tt+k(ee,Ze++),Ee+=lt(ee,X,ie,Oe,me);else if(Oe==="object"){if(typeof O.then=="function")return lt(It(O),X,ie,ee,me);throw X=String(O),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function F(O,X,ie){if(O==null)return O;var ee=[],me=0;return lt(O,ee,"","",function(Oe){return X.call(ie,Oe,me++)}),ee}function ne(O){if(O._status===-1){var X=O._result;X=X(),X.then(function(ie){(O._status===0||O._status===-1)&&(O._status=1,O._result=ie)},function(ie){(O._status===0||O._status===-1)&&(O._status=2,O._result=ie)}),O._status===-1&&(O._status=0,O._result=X)}if(O._status===1)return O._result.default;throw O._result}var he=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function He(){}return Ce.Children={map:F,forEach:function(O,X,ie){F(O,function(){X.apply(this,arguments)},ie)},count:function(O){var X=0;return F(O,function(){X++}),X},toArray:function(O){return F(O,function(X){return X})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ce.Component=Z,Ce.Fragment=n,Ce.Profiler=o,Ce.PureComponent=le,Ce.StrictMode=s,Ce.Suspense=p,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ge,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(O){return ge.H.useMemoCache(O)}},Ce.cache=function(O){return function(){return O.apply(null,arguments)}},Ce.cloneElement=function(O,X,ie){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ee=J({},O.props),me=O.key,Oe=void 0;if(X!=null)for(Ee in X.ref!==void 0&&(Oe=void 0),X.key!==void 0&&(me=""+X.key),X)!De.call(X,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&X.ref===void 0||(ee[Ee]=X[Ee]);var Ee=arguments.length-2;if(Ee===1)ee.children=ie;else if(1<Ee){for(var Tt=Array(Ee),Ze=0;Ze<Ee;Ze++)Tt[Ze]=arguments[Ze+2];ee.children=Tt}return N(O.type,me,void 0,void 0,Oe,ee)},Ce.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},Ce.createElement=function(O,X,ie){var ee,me={},Oe=null;if(X!=null)for(ee in X.key!==void 0&&(Oe=""+X.key),X)De.call(X,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(me[ee]=X[ee]);var Ee=arguments.length-2;if(Ee===1)me.children=ie;else if(1<Ee){for(var Tt=Array(Ee),Ze=0;Ze<Ee;Ze++)Tt[Ze]=arguments[Ze+2];me.children=Tt}if(O&&O.defaultProps)for(ee in Ee=O.defaultProps,Ee)me[ee]===void 0&&(me[ee]=Ee[ee]);return N(O,Oe,void 0,void 0,null,me)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(O){return{$$typeof:m,render:O}},Ce.isValidElement=R,Ce.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:ne}},Ce.memo=function(O,X){return{$$typeof:y,type:O,compare:X===void 0?null:X}},Ce.startTransition=function(O){var X=ge.T,ie={};ge.T=ie;try{var ee=O(),me=ge.S;me!==null&&me(ie,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(He,he)}catch(Oe){he(Oe)}finally{ge.T=X}},Ce.unstable_useCacheRefresh=function(){return ge.H.useCacheRefresh()},Ce.use=function(O){return ge.H.use(O)},Ce.useActionState=function(O,X,ie){return ge.H.useActionState(O,X,ie)},Ce.useCallback=function(O,X){return ge.H.useCallback(O,X)},Ce.useContext=function(O){return ge.H.useContext(O)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(O,X){return ge.H.useDeferredValue(O,X)},Ce.useEffect=function(O,X,ie){var ee=ge.H;if(typeof ie=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ee.useEffect(O,X)},Ce.useId=function(){return ge.H.useId()},Ce.useImperativeHandle=function(O,X,ie){return ge.H.useImperativeHandle(O,X,ie)},Ce.useInsertionEffect=function(O,X){return ge.H.useInsertionEffect(O,X)},Ce.useLayoutEffect=function(O,X){return ge.H.useLayoutEffect(O,X)},Ce.useMemo=function(O,X){return ge.H.useMemo(O,X)},Ce.useOptimistic=function(O,X){return ge.H.useOptimistic(O,X)},Ce.useReducer=function(O,X,ie){return ge.H.useReducer(O,X,ie)},Ce.useRef=function(O){return ge.H.useRef(O)},Ce.useState=function(O){return ge.H.useState(O)},Ce.useSyncExternalStore=function(O,X,ie){return ge.H.useSyncExternalStore(O,X,ie)},Ce.useTransition=function(){return ge.H.useTransition()},Ce.version="19.1.0",Ce}var k_;function bm(){return k_||(k_=1,Vd.exports=BS()),Vd.exports}var Vt=bm(),xd={exports:{}},bl={},kd={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function qS(){return P_||(P_=1,function(r){function e(F,ne){var he=F.length;F.push(ne);e:for(;0<he;){var He=he-1>>>1,O=F[He];if(0<o(O,ne))F[He]=ne,F[he]=O,he=He;else break e}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var ne=F[0],he=F.pop();if(he!==ne){F[0]=he;e:for(var He=0,O=F.length,X=O>>>1;He<X;){var ie=2*(He+1)-1,ee=F[ie],me=ie+1,Oe=F[me];if(0>o(ee,he))me<O&&0>o(Oe,ee)?(F[He]=Oe,F[me]=he,He=me):(F[He]=ee,F[ie]=he,He=ie);else if(me<O&&0>o(Oe,he))F[He]=Oe,F[me]=he,He=me;else break e}}return ne}function o(F,ne){var he=F.sortIndex-ne.sortIndex;return he!==0?he:F.id-ne.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],E=1,C=null,I=3,q=!1,J=!1,re=!1,Z=!1,Se=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function Ve(F){for(var ne=n(y);ne!==null;){if(ne.callback===null)s(y);else if(ne.startTime<=F)s(y),ne.sortIndex=ne.expirationTime,e(p,ne);else break;ne=n(y)}}function ge(F){if(re=!1,Ve(F),!J)if(n(p)!==null)J=!0,De||(De=!0,k());else{var ne=n(y);ne!==null&&lt(ge,ne.startTime-F)}}var De=!1,N=-1,S=5,R=-1;function M(){return Z?!0:!(r.unstable_now()-R<S)}function V(){if(Z=!1,De){var F=r.unstable_now();R=F;var ne=!0;try{e:{J=!1,re&&(re=!1,le(N),N=-1),q=!0;var he=I;try{t:{for(Ve(F),C=n(p);C!==null&&!(C.expirationTime>F&&M());){var He=C.callback;if(typeof He=="function"){C.callback=null,I=C.priorityLevel;var O=He(C.expirationTime<=F);if(F=r.unstable_now(),typeof O=="function"){C.callback=O,Ve(F),ne=!0;break t}C===n(p)&&s(p),Ve(F)}else s(p);C=n(p)}if(C!==null)ne=!0;else{var X=n(y);X!==null&&lt(ge,X.startTime-F),ne=!1}}break e}finally{C=null,I=he,q=!1}ne=void 0}}finally{ne?k():De=!1}}}var k;if(typeof ae=="function")k=function(){ae(V)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,It=b.port2;b.port1.onmessage=V,k=function(){It.postMessage(null)}}else k=function(){Se(V,0)};function lt(F,ne){N=Se(function(){F(r.unstable_now())},ne)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_next=function(F){switch(I){case 1:case 2:case 3:var ne=3;break;default:ne=I}var he=I;I=ne;try{return F()}finally{I=he}},r.unstable_requestPaint=function(){Z=!0},r.unstable_runWithPriority=function(F,ne){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var he=I;I=F;try{return ne()}finally{I=he}},r.unstable_scheduleCallback=function(F,ne,he){var He=r.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?He+he:He):he=He,F){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=he+O,F={id:E++,callback:ne,priorityLevel:F,startTime:he,expirationTime:O,sortIndex:-1},he>He?(F.sortIndex=he,e(y,F),n(p)===null&&F===n(y)&&(re?(le(N),N=-1):re=!0,lt(ge,he-He))):(F.sortIndex=O,e(p,F),J||q||(J=!0,De||(De=!0,k()))),F},r.unstable_shouldYield=M,r.unstable_wrapCallback=function(F){var ne=I;return function(){var he=I;I=ne;try{return F.apply(this,arguments)}finally{I=he}}}}(Pd)),Pd}var U_;function HS(){return U_||(U_=1,kd.exports=qS()),kd.exports}var Ud={exports:{}},Jt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function FS(){if(L_)return Jt;L_=1;var r=bm();function e(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:C==null?null:""+C,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Jt.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(p,y,null,E)},Jt.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},Jt.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Jt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Jt.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,C=m(E,y.crossOrigin),I=typeof y.integrity=="string"?y.integrity:void 0,q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:C,integrity:I,fetchPriority:q}):E==="script"&&s.d.X(p,{crossOrigin:C,integrity:I,fetchPriority:q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Jt.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Jt.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,C=m(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Jt.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Jt.requestFormReset=function(p){s.d.r(p)},Jt.unstable_batchedUpdates=function(p,y){return p(y)},Jt.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},Jt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Jt.version="19.1.0",Jt}var z_;function GS(){if(z_)return Ud.exports;z_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ud.exports=FS(),Ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function YS(){if(j_)return bl;j_=1;var r=HS(),e=bm(),n=GS();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),t;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var E=Object.assign,C=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),le=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),Ve=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),De=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var b=Symbol.for("react.client.reference");function It(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===b?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case J:return"Fragment";case Z:return"Profiler";case re:return"StrictMode";case ge:return"Suspense";case De:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case q:return"Portal";case ae:return(t.displayName||"Context")+".Provider";case le:return(t._context.displayName||"Context")+".Consumer";case Ve:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return i=t.displayName||null,i!==null?i:It(t.type)||"Memo";case S:i=t._payload,t=t._init;try{return It(t(i))}catch{}}return null}var lt=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},He=[],O=-1;function X(t){return{current:t}}function ie(t){0>O||(t.current=He[O],He[O]=null,O--)}function ee(t,i){O++,He[O]=t.current,t.current=i}var me=X(null),Oe=X(null),Ee=X(null),Tt=X(null);function Ze(t,i){switch(ee(Ee,i),ee(Oe,t),ee(me,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?a_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=a_(i),t=o_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(me),ee(me,t)}function cn(){ie(me),ie(Oe),ie(Ee)}function ri(t){t.memoizedState!==null&&ee(Tt,t);var i=me.current,a=o_(i,t.type);i!==a&&(ee(Oe,t),ee(me,a))}function Fn(t){Oe.current===t&&(ie(me),ie(Oe)),Tt.current===t&&(ie(Tt),_l._currentValue=he)}var Gn=Object.prototype.hasOwnProperty,Ni=r.unstable_scheduleCallback,Mi=r.unstable_cancelCallback,H=r.unstable_shouldYield,ue=r.unstable_requestPaint,se=r.unstable_now,be=r.unstable_getCurrentPriorityLevel,Ie=r.unstable_ImmediatePriority,Je=r.unstable_UserBlockingPriority,Fe=r.unstable_NormalPriority,pn=r.unstable_LowPriority,yn=r.unstable_IdlePriority,Yn=r.log,as=r.unstable_setDisableYieldValue,rt=null,Ye=null;function _n(t){if(typeof Yn=="function"&&as(t),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(rt,t)}catch{}}var Wt=Math.clz32?Math.clz32:os,au=Math.log,Vh=Math.LN2;function os(t){return t>>>=0,t===0?32:31-(au(t)/Vh|0)|0}var ls=256,us=4194304;function Kn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function aa(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Kn(l):(v&=T,v!==0?h=Kn(v):a||(a=T&~t,a!==0&&(h=Kn(a))))):(T=l&~d,T!==0?h=Kn(T):v!==0?h=Kn(v):a||(a=l&~t,a!==0&&(h=Kn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function cs(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function _o(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vo(){var t=ls;return ls<<=1,(ls&4194048)===0&&(ls=256),t}function To(){var t=us;return us<<=1,(us&62914560)===0&&(us=4194304),t}function Vi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function xi(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Eo(t,i,a,l,h,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,w=t.expirationTimes,L=t.hiddenUpdates;for(a=v&~a;0<a;){var G=31-Wt(a),K=1<<G;T[G]=0,w[G]=-1;var z=L[G];if(z!==null)for(L[G]=null,G=0;G<z.length;G++){var j=z[G];j!==null&&(j.lane&=-536870913)}a&=~K}l!==0&&si(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~i))}function si(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Wt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Ao(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Wt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function dr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function oa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function mr(){var t=ne.p;return t!==0?t:(t=window.event,t===void 0?32:R_(t.type))}function ou(t,i){var a=ne.p;try{return ne.p=t,i()}finally{ne.p=a}}var ut=Math.random().toString(36).slice(2),Ct="__reactFiber$"+ut,Et="__reactProps$"+ut,Cn="__reactContainer$"+ut,So="__reactEvents$"+ut,xh="__reactListeners$"+ut,gr="__reactHandles$"+ut,lu="__reactResources$"+ut,hs="__reactMarker$"+ut;function pr(t){delete t[Ct],delete t[Et],delete t[So],delete t[xh],delete t[gr]}function ki(t){var i=t[Ct];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Cn]||a[Ct]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=h_(t);t!==null;){if(a=t[Ct])return a;t=h_(t)}return i}t=a,a=t.parentNode}return null}function ai(t){if(t=t[Ct]||t[Cn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function oi(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function sn(t){var i=t[lu];return i||(i=t[lu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function pt(t){t[hs]=!0}var bo=new Set,la={};function Qn(t,i){Pi(t,i),Pi(t+"Capture",i)}function Pi(t,i){for(la[t]=i,t=0;t<i.length;t++)bo.add(i[t])}var uu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cu={},fs={};function hu(t){return Gn.call(fs,t)?!0:Gn.call(cu,t)?!1:uu.test(t)?fs[t]=!0:(cu[t]=!0,!1)}function yr(t,i,a){if(hu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function li(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Ht(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}var ds,fu;function Ui(t){if(ds===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ds=i&&i[1]||"",fu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ds+t+fu}var ua=!1;function ca(t,i){if(!t||ua)return"";ua=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(j){var z=j}Reflect.construct(t,[],K)}else{try{K.call()}catch(j){z=j}t.call(K.prototype)}}else{try{throw Error()}catch(j){z=j}(K=t())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var w=v.split(`
`),L=T.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===L.length)for(l=w.length-1,h=L.length-1;1<=l&&0<=h&&w[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==L[h]){var G=`
`+w[l].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=l&&0<=h);break}}}finally{ua=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ui(a):""}function wo(t){switch(t.tag){case 26:case 27:case 5:return Ui(t.type);case 16:return Ui("Lazy");case 13:return Ui("Suspense");case 19:return Ui("SuspenseList");case 0:case 15:return ca(t.type,!1);case 11:return ca(t.type.render,!1);case 1:return ca(t.type,!0);case 31:return Ui("Activity");default:return""}}function ha(t){try{var i="";do i+=wo(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function an(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ro(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function kh(t){var i=Ro(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function fa(t){t._valueTracker||(t._valueTracker=kh(t))}function Io(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ro(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ms(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ph=/[\n"\\]/g;function At(t){return t.replace(Ph,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function vn(t,i,a,l,h,d,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+an(i)):t.value!==""+an(i)&&(t.value=""+an(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?_r(t,v,an(i)):a!=null?_r(t,v,an(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+an(T):t.removeAttribute("name")}function gs(t,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+an(a):"",i=i!=null?""+an(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function _r(t,i,a){i==="number"&&ms(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Li(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+an(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function et(t,i,a){if(i!=null&&(i=""+an(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+an(a):""}function ps(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(lt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=an(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function On(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var ys=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function du(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||ys.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Co(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&du(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&du(t,d,i[d])}function Oo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function da(t){return Lh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var zi=null;function Dn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ji=null,Bi=null;function Do(t){var i=ai(t);if(i&&(t=i.stateNode)){var a=t[Et]||null;e:switch(t=i.stateNode,i.type){case"input":if(vn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+At(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[Et]||null;if(!h)throw Error(s(90));vn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Io(l)}break e;case"textarea":et(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Li(t,!!a.multiple,i,!1)}}}var ui=!1;function mu(t,i,a){if(ui)return t(i,a);ui=!0;try{var l=t(i);return l}finally{if(ui=!1,(ji!==null||Bi!==null)&&(oc(),ji&&(i=ji,t=Bi,Bi=ji=null,Do(i),t)))for(i=0;i<t.length;i++)Do(t[i])}}function _s(t,i){var a=t.stateNode;if(a===null)return null;var l=a[Et]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nn=!1;if(Xn)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){Nn=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{Nn=!1}var ci=null,vr=null,qi=null;function No(){if(qi)return qi;var t,i=vr,a=i.length,l,h="value"in ci?ci.value:ci.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var v=a-t;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return qi=h.slice(t,1<l?1-l:void 0)}function hi(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function fi(){return!0}function Mo(){return!1}function Pt(t){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?fi:Mo,this.isPropagationStopped=Mo,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),i}var Qe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ma=Pt(Qe),Ts=E({},Qe,{view:0,detail:0}),gu=Pt(Ts),ga,pa,di,Es=E({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==di&&(di&&t.type==="mousemove"?(ga=t.screenX-di.screenX,pa=t.screenY-di.screenY):pa=ga=0,di=t),ga)},movementY:function(t){return"movementY"in t?t.movementY:pa}}),Mn=Pt(Es),pu=E({},Es,{dataTransfer:0}),zh=Pt(pu),As=E({},Ts,{relatedTarget:0}),ya=Pt(As),Vo=E({},Qe,{animationName:0,elapsedTime:0,pseudoElement:0}),_a=Pt(Vo),yu=E({},Qe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),va=Pt(yu),jh=E({},Qe,{data:0}),xo=Pt(jh),Ss={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_u={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ko(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=vu[t])?!!i[t]:!1}function bs(){return ko}var Tu=E({},Ts,{key:function(t){if(t.key){var i=Ss[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=hi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_u[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bs,charCode:function(t){return t.type==="keypress"?hi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ta=Pt(Tu),Eu=E({},Es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Po=Pt(Eu),Hi=E({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bs}),Au=Pt(Hi),Su=E({},Qe,{propertyName:0,elapsedTime:0,pseudoElement:0}),bu=Pt(Su),wu=E({},Es,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ea=Pt(wu),on=E({},Qe,{newState:0,oldState:0}),Ru=Pt(on),Iu=[9,13,27,32],mi=Xn&&"CompositionEvent"in window,c=null;Xn&&"documentMode"in document&&(c=document.documentMode);var g=Xn&&"TextEvent"in window&&!c,_=Xn&&(!mi||c&&8<c&&11>=c),A=" ",P=!1;function B(t,i){switch(t){case"keyup":return Iu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function te(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ze=!1;function Ot(t,i){switch(t){case"compositionend":return te(i);case"keypress":return i.which!==32?null:(P=!0,A);case"textInput":return t=i.data,t===A&&P?null:t;default:return null}}function je(t,i){if(ze)return t==="compositionend"||!mi&&B(t,i)?(t=No(),qi=vr=ci=null,ze=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Ut={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dt(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ut[t.type]:i==="textarea"}function Fi(t,i,a,l){ji?Bi?Bi.push(l):Bi=[l]:ji=l,i=dc(i,"onChange"),0<i.length&&(a=new ma("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var Ft=null,gi=null;function Uo(t){t_(t,0)}function Cu(t){var i=oi(t);if(Io(i))return t}function Ag(t,i){if(t==="change")return i}var Sg=!1;if(Xn){var Bh;if(Xn){var qh="oninput"in document;if(!qh){var bg=document.createElement("div");bg.setAttribute("oninput","return;"),qh=typeof bg.oninput=="function"}Bh=qh}else Bh=!1;Sg=Bh&&(!document.documentMode||9<document.documentMode)}function wg(){Ft&&(Ft.detachEvent("onpropertychange",Rg),gi=Ft=null)}function Rg(t){if(t.propertyName==="value"&&Cu(gi)){var i=[];Fi(i,gi,t,Dn(t)),mu(Uo,i)}}function gA(t,i,a){t==="focusin"?(wg(),Ft=i,gi=a,Ft.attachEvent("onpropertychange",Rg)):t==="focusout"&&wg()}function pA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cu(gi)}function yA(t,i){if(t==="click")return Cu(i)}function _A(t,i){if(t==="input"||t==="change")return Cu(i)}function vA(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Tn=typeof Object.is=="function"?Object.is:vA;function Lo(t,i){if(Tn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Gn.call(i,h)||!Tn(t[h],i[h]))return!1}return!0}function Ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cg(t,i){var a=Ig(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ig(a)}}function Og(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Og(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Dg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ms(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ms(t.document)}return i}function Hh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var TA=Xn&&"documentMode"in document&&11>=document.documentMode,Aa=null,Fh=null,zo=null,Gh=!1;function Ng(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gh||Aa==null||Aa!==ms(l)||(l=Aa,"selectionStart"in l&&Hh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),zo&&Lo(zo,l)||(zo=l,l=dc(Fh,"onSelect"),0<l.length&&(i=new ma("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Aa)))}function ws(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Sa={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionrun:ws("Transition","TransitionRun"),transitionstart:ws("Transition","TransitionStart"),transitioncancel:ws("Transition","TransitionCancel"),transitionend:ws("Transition","TransitionEnd")},Yh={},Mg={};Xn&&(Mg=document.createElement("div").style,"AnimationEvent"in window||(delete Sa.animationend.animation,delete Sa.animationiteration.animation,delete Sa.animationstart.animation),"TransitionEvent"in window||delete Sa.transitionend.transition);function Rs(t){if(Yh[t])return Yh[t];if(!Sa[t])return t;var i=Sa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Mg)return Yh[t]=i[a];return t}var Vg=Rs("animationend"),xg=Rs("animationiteration"),kg=Rs("animationstart"),EA=Rs("transitionrun"),AA=Rs("transitionstart"),SA=Rs("transitioncancel"),Pg=Rs("transitionend"),Ug=new Map,Kh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kh.push("scrollEnd");function $n(t,i){Ug.set(t,i),Qn(i,[t])}var Lg=new WeakMap;function Vn(t,i){if(typeof t=="object"&&t!==null){var a=Lg.get(t);return a!==void 0?a:(i={value:t,source:i,stack:ha(i)},Lg.set(t,i),i)}return{value:t,source:i,stack:ha(i)}}var xn=[],ba=0,Qh=0;function Ou(){for(var t=ba,i=Qh=ba=0;i<t;){var a=xn[i];xn[i++]=null;var l=xn[i];xn[i++]=null;var h=xn[i];xn[i++]=null;var d=xn[i];if(xn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&zg(a,h,d)}}function Du(t,i,a,l){xn[ba++]=t,xn[ba++]=i,xn[ba++]=a,xn[ba++]=l,Qh|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Xh(t,i,a,l){return Du(t,i,a,l),Nu(t)}function wa(t,i){return Du(t,null,null,i),Nu(t)}function zg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-Wt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Nu(t){if(50<cl)throw cl=0,nd=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ra={};function bA(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,i,a,l){return new bA(t,i,a,l)}function $h(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gi(t,i){var a=t.alternate;return a===null?(a=En(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function jg(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Mu(t,i,a,l,h,d){var v=0;if(l=t,typeof t=="function")$h(t)&&(v=1);else if(typeof t=="string")v=RS(t,a,me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=En(31,a,i,h),t.elementType=R,t.lanes=d,t;case J:return Is(a.children,h,d,i);case re:v=8,h|=24;break;case Z:return t=En(12,a,i,h|2),t.elementType=Z,t.lanes=d,t;case ge:return t=En(13,a,i,h),t.elementType=ge,t.lanes=d,t;case De:return t=En(19,a,i,h),t.elementType=De,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Se:case ae:v=10;break e;case le:v=9;break e;case Ve:v=11;break e;case N:v=14;break e;case S:v=16,l=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=En(v,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Is(t,i,a,l){return t=En(7,t,l,i),t.lanes=a,t}function Wh(t,i,a){return t=En(6,t,null,i),t.lanes=a,t}function Zh(t,i,a){return i=En(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Ia=[],Ca=0,Vu=null,xu=0,kn=[],Pn=0,Cs=null,Yi=1,Ki="";function Os(t,i){Ia[Ca++]=xu,Ia[Ca++]=Vu,Vu=t,xu=i}function Bg(t,i,a){kn[Pn++]=Yi,kn[Pn++]=Ki,kn[Pn++]=Cs,Cs=t;var l=Yi;t=Ki;var h=32-Wt(l)-1;l&=~(1<<h),a+=1;var d=32-Wt(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Yi=1<<32-Wt(i)+h|a<<h|l,Ki=d+t}else Yi=1<<d|a<<h|l,Ki=t}function Jh(t){t.return!==null&&(Os(t,1),Bg(t,1,0))}function ef(t){for(;t===Vu;)Vu=Ia[--Ca],Ia[Ca]=null,xu=Ia[--Ca],Ia[Ca]=null;for(;t===Cs;)Cs=kn[--Pn],kn[Pn]=null,Ki=kn[--Pn],kn[Pn]=null,Yi=kn[--Pn],kn[Pn]=null}var ln=null,mt=null,Ke=!1,Ds=null,pi=!1,tf=Error(s(519));function Ns(t){var i=Error(s(418,""));throw qo(Vn(i,t)),tf}function qg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[Ct]=t,i[Et]=l,a){case"dialog":Pe("cancel",i),Pe("close",i);break;case"iframe":case"object":case"embed":Pe("load",i);break;case"video":case"audio":for(a=0;a<fl.length;a++)Pe(fl[a],i);break;case"source":Pe("error",i);break;case"img":case"image":case"link":Pe("error",i),Pe("load",i);break;case"details":Pe("toggle",i);break;case"input":Pe("invalid",i),gs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),fa(i);break;case"select":Pe("invalid",i);break;case"textarea":Pe("invalid",i),ps(i,l.value,l.defaultValue,l.children),fa(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||s_(i.textContent,a)?(l.popover!=null&&(Pe("beforetoggle",i),Pe("toggle",i)),l.onScroll!=null&&Pe("scroll",i),l.onScrollEnd!=null&&Pe("scrollend",i),l.onClick!=null&&(i.onclick=mc),i=!0):i=!1,i||Ns(t)}function Hg(t){for(ln=t.return;ln;)switch(ln.tag){case 5:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:ln=ln.return}}function jo(t){if(t!==ln)return!1;if(!Ke)return Hg(t),Ke=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||_d(t.type,t.memoizedProps)),a=!a),a&&mt&&Ns(t),Hg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){mt=Zn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}mt=null}}else i===27?(i=mt,kr(t.type)?(t=Ad,Ad=null,mt=t):mt=i):mt=ln?Zn(t.stateNode.nextSibling):null;return!0}function Bo(){mt=ln=null,Ke=!1}function Fg(){var t=Ds;return t!==null&&(dn===null?dn=t:dn.push.apply(dn,t),Ds=null),t}function qo(t){Ds===null?Ds=[t]:Ds.push(t)}var nf=X(null),Ms=null,Qi=null;function Tr(t,i,a){ee(nf,i._currentValue),i._currentValue=a}function Xi(t){t._currentValue=nf.current,ie(nf)}function rf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function sf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var w=0;w<i.length;w++)if(T.context===i[w]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),rf(d.return,a,t),l||(v=null);break e}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),rf(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Ho(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;Tn(h.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(h===Tt.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(_l):t=[_l])}h=h.return}t!==null&&sf(i,t,a,l),i.flags|=262144}function ku(t){for(t=t.firstContext;t!==null;){if(!Tn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Vs(t){Ms=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Zt(t){return Gg(Ms,t)}function Pu(t,i){return Ms===null&&Vs(t),Gg(t,i)}function Gg(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(s(308));Qi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Qi=Qi.next=i;return a}var wA=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},RA=r.unstable_scheduleCallback,IA=r.unstable_NormalPriority,Nt={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function af(){return{controller:new wA,data:new Map,refCount:0}}function Fo(t){t.refCount--,t.refCount===0&&RA(IA,function(){t.controller.abort()})}var Go=null,of=0,Oa=0,Da=null;function CA(t,i){if(Go===null){var a=Go=[];of=0,Oa=ud(),Da={status:"pending",value:void 0,then:function(l){a.push(l)}}}return of++,i.then(Yg,Yg),i}function Yg(){if(--of===0&&Go!==null){Da!==null&&(Da.status="fulfilled");var t=Go;Go=null,Oa=0,Da=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function OA(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Kg=F.S;F.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&CA(t,i),Kg!==null&&Kg(t,i)};var xs=X(null);function lf(){var t=xs.current;return t!==null?t:at.pooledCache}function Uu(t,i){i===null?ee(xs,xs.current):ee(xs,i.pool)}function Qg(){var t=lf();return t===null?null:{parent:Nt._currentValue,pool:t}}var Yo=Error(s(460)),Xg=Error(s(474)),Lu=Error(s(542)),uf={then:function(){}};function $g(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zu(){}function Wg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(zu,zu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Jg(t),t;default:if(typeof i.status=="string")i.then(zu,zu);else{if(t=at,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Jg(t),t}throw Ko=i,Yo}}var Ko=null;function Zg(){if(Ko===null)throw Error(s(459));var t=Ko;return Ko=null,t}function Jg(t){if(t===Yo||t===Lu)throw Error(s(483))}var Er=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ar(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,($e&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Nu(t),zg(t,null,a),i}return Du(t,l,i,a),Nu(t)}function Qo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ao(t,a)}}function ff(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var df=!1;function Xo(){if(df){var t=Da;if(t!==null)throw t}}function $o(t,i,a,l){df=!1;var h=t.updateQueue;Er=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var w=T,L=w.next;w.next=null,v===null?d=L:v.next=L,v=w;var G=t.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=L:T.next=L,G.lastBaseUpdate=w))}if(d!==null){var K=h.baseState;v=0,G=L=w=null,T=d;do{var z=T.lane&-536870913,j=z!==T.lane;if(j?(Be&z)===z:(l&z)===z){z!==0&&z===Oa&&(df=!0),G!==null&&(G=G.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ae=t,ye=T;z=i;var it=a;switch(ye.tag){case 1:if(Ae=ye.payload,typeof Ae=="function"){K=Ae.call(it,K,z);break e}K=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=ye.payload,z=typeof Ae=="function"?Ae.call(it,K,z):Ae,z==null)break e;K=E({},K,z);break e;case 2:Er=!0}}z=T.callback,z!==null&&(t.flags|=64,j&&(t.flags|=8192),j=h.callbacks,j===null?h.callbacks=[z]:j.push(z))}else j={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(L=G=j,w=K):G=G.next=j,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;j=T,T=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);G===null&&(w=K),h.baseState=w,h.firstBaseUpdate=L,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),Nr|=v,t.lanes=v,t.memoizedState=K}}function ep(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function tp(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ep(a[t],i)}var Na=X(null),ju=X(0);function np(t,i){t=nr,ee(ju,t),ee(Na,i),nr=t|i.baseLanes}function mf(){ee(ju,nr),ee(Na,Na.current)}function gf(){nr=ju.current,ie(Na),ie(ju)}var br=0,Ne=null,tt=null,St=null,Bu=!1,Ma=!1,ks=!1,qu=0,Wo=0,Va=null,DA=0;function yt(){throw Error(s(321))}function pf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Tn(t[a],i[a]))return!1;return!0}function yf(t,i,a,l,h,d){return br=d,Ne=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=t===null||t.memoizedState===null?zp:jp,ks=!1,d=a(l,h),ks=!1,Ma&&(d=rp(i,a,l,h)),ip(t),d}function ip(t){F.H=Qu;var i=tt!==null&&tt.next!==null;if(br=0,St=tt=Ne=null,Bu=!1,Wo=0,Va=null,i)throw Error(s(300));t===null||Lt||(t=t.dependencies,t!==null&&ku(t)&&(Lt=!0))}function rp(t,i,a,l){Ne=t;var h=0;do{if(Ma&&(Va=null),Wo=0,Ma=!1,25<=h)throw Error(s(301));if(h+=1,St=tt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=UA,d=i(a,l)}while(Ma);return d}function NA(){var t=F.H,i=t.useState()[0];return i=typeof i.then=="function"?Zo(i):i,t=t.useState()[0],(tt!==null?tt.memoizedState:null)!==t&&(Ne.flags|=1024),i}function _f(){var t=qu!==0;return qu=0,t}function vf(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Tf(t){if(Bu){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Bu=!1}br=0,St=tt=Ne=null,Ma=!1,Wo=qu=0,Va=null}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?Ne.memoizedState=St=t:St=St.next=t,St}function bt(){if(tt===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var i=St===null?Ne.memoizedState:St.next;if(i!==null)St=i,tt=t;else{if(t===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},St===null?Ne.memoizedState=St=t:St=St.next=t}return St}function Ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(t){var i=Wo;return Wo+=1,Va===null&&(Va=[]),t=Wg(Va,t,i),i=Ne,(St===null?i.memoizedState:St.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?zp:jp),t}function Hu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zo(t);if(t.$$typeof===ae)return Zt(t)}throw Error(s(438,String(t)))}function Af(t){var i=null,a=Ne.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Ef(),Ne.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=M;return i.index++,a}function $i(t,i){return typeof i=="function"?i(t):i}function Fu(t){var i=bt();return Sf(i,tt,t)}function Sf(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=v=null,w=null,L=i,G=!1;do{var K=L.lane&-536870913;if(K!==L.lane?(Be&K)===K:(br&K)===K){var z=L.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),K===Oa&&(G=!0);else if((br&z)===z){L=L.next,z===Oa&&(G=!0);continue}else K={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(T=w=K,v=d):w=w.next=K,Ne.lanes|=z,Nr|=z;K=L.action,ks&&a(d,K),d=L.hasEagerState?L.eagerState:a(d,K)}else z={lane:K,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(T=w=z,v=d):w=w.next=z,Ne.lanes|=K,Nr|=K;L=L.next}while(L!==null&&L!==i);if(w===null?v=d:w.next=T,!Tn(d,t.memoizedState)&&(Lt=!0,G&&(a=Da,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function bf(t){var i=bt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=t(d,v.action),v=v.next;while(v!==h);Tn(d,i.memoizedState)||(Lt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function sp(t,i,a){var l=Ne,h=bt(),d=Ke;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!Tn((tt||h).memoizedState,a);v&&(h.memoizedState=a,Lt=!0),h=h.queue;var T=lp.bind(null,l,h,t);if(Jo(2048,8,T,[t]),h.getSnapshot!==i||v||St!==null&&St.memoizedState.tag&1){if(l.flags|=2048,xa(9,Gu(),op.bind(null,l,h,a,i),null),at===null)throw Error(s(349));d||(br&124)!==0||ap(l,i,a)}return a}function ap(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Ne.updateQueue,i===null?(i=Ef(),Ne.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function op(t,i,a,l){i.value=a,i.getSnapshot=l,up(i)&&cp(t)}function lp(t,i,a){return a(function(){up(i)&&cp(t)})}function up(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Tn(t,a)}catch{return!0}}function cp(t){var i=wa(t,2);i!==null&&Rn(i,t,2)}function wf(t){var i=hn();if(typeof t=="function"){var a=t;if(t=a(),ks){_n(!0);try{a()}finally{_n(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},i}function hp(t,i,a,l){return t.baseState=a,Sf(t,tt,typeof l=="function"?l:$i)}function MA(t,i,a,l,h){if(Ku(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,fp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function fp(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=F.T,v={};F.T=v;try{var T=a(h,l),w=F.S;w!==null&&w(v,T),dp(t,i,T)}catch(L){Rf(t,i,L)}finally{F.T=d}}else try{d=a(h,l),dp(t,i,d)}catch(L){Rf(t,i,L)}}function dp(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){mp(t,i,l)},function(l){return Rf(t,i,l)}):mp(t,i,a)}function mp(t,i,a){i.status="fulfilled",i.value=a,gp(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,fp(t,a)))}function Rf(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,gp(i),i=i.next;while(i!==l)}t.action=null}function gp(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function pp(t,i){return i}function yp(t,i){if(Ke){var a=at.formState;if(a!==null){e:{var l=Ne;if(Ke){if(mt){t:{for(var h=mt,d=pi;h.nodeType!==8;){if(!d){h=null;break t}if(h=Zn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){mt=Zn(h.nextSibling),l=h.data==="F!";break e}}Ns(l)}l=!1}l&&(i=a[0])}}return a=hn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pp,lastRenderedState:i},a.queue=l,a=Pp.bind(null,Ne,l),l.dispatch=a,l=wf(!1),d=Nf.bind(null,Ne,!1,l.queue),l=hn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=MA.bind(null,Ne,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function _p(t){var i=bt();return vp(i,tt,t)}function vp(t,i,a){if(i=Sf(t,i,pp)[0],t=Fu($i)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Zo(i)}catch(v){throw v===Yo?Lu:v}else l=i;i=bt();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Ne.flags|=2048,xa(9,Gu(),VA.bind(null,h,a),null)),[l,d,t]}function VA(t,i){t.action=i}function Tp(t){var i=bt(),a=tt;if(a!==null)return vp(i,a,t);bt(),i=i.memoizedState,a=bt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function xa(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=Ne.updateQueue,i===null&&(i=Ef(),Ne.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function Gu(){return{destroy:void 0,resource:void 0}}function Ep(){return bt().memoizedState}function Yu(t,i,a,l){var h=hn();l=l===void 0?null:l,Ne.flags|=t,h.memoizedState=xa(1|i,Gu(),a,l)}function Jo(t,i,a,l){var h=bt();l=l===void 0?null:l;var d=h.memoizedState.inst;tt!==null&&l!==null&&pf(l,tt.memoizedState.deps)?h.memoizedState=xa(i,d,a,l):(Ne.flags|=t,h.memoizedState=xa(1|i,d,a,l))}function Ap(t,i){Yu(8390656,8,t,i)}function Sp(t,i){Jo(2048,8,t,i)}function bp(t,i){return Jo(4,2,t,i)}function wp(t,i){return Jo(4,4,t,i)}function Rp(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ip(t,i,a){a=a!=null?a.concat([t]):null,Jo(4,4,Rp.bind(null,i,t),a)}function If(){}function Cp(t,i){var a=bt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&pf(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Op(t,i){var a=bt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&pf(i,l[1]))return l[0];if(l=t(),ks){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[l,i],l}function Cf(t,i,a){return a===void 0||(br&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=My(),Ne.lanes|=t,Nr|=t,a)}function Dp(t,i,a,l){return Tn(a,i)?a:Na.current!==null?(t=Cf(t,a,l),Tn(t,i)||(Lt=!0),t):(br&42)===0?(Lt=!0,t.memoizedState=a):(t=My(),Ne.lanes|=t,Nr|=t,i)}function Np(t,i,a,l,h){var d=ne.p;ne.p=d!==0&&8>d?d:8;var v=F.T,T={};F.T=T,Nf(t,!1,i,a);try{var w=h(),L=F.S;if(L!==null&&L(T,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var G=OA(w,l);el(t,i,G,wn(t))}else el(t,i,l,wn(t))}catch(K){el(t,i,{then:function(){},status:"rejected",reason:K},wn())}finally{ne.p=d,F.T=v}}function xA(){}function Of(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=Mp(t).queue;Np(t,h,i,he,a===null?xA:function(){return Vp(t),a(l)})}function Mp(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:he},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Vp(t){var i=Mp(t).next.queue;el(t,i,{},wn())}function Df(){return Zt(_l)}function xp(){return bt().memoizedState}function kp(){return bt().memoizedState}function kA(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=wn();t=Ar(a);var l=Sr(i,t,a);l!==null&&(Rn(l,i,a),Qo(l,i,a)),i={cache:af()},t.payload=i;return}i=i.return}}function PA(t,i,a){var l=wn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ku(t)?Up(i,a):(a=Xh(t,i,a,l),a!==null&&(Rn(a,t,l),Lp(a,i,l)))}function Pp(t,i,a){var l=wn();el(t,i,a,l)}function el(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ku(t))Up(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,Tn(T,v))return Du(t,i,h,0),at===null&&Ou(),!1}catch{}finally{}if(a=Xh(t,i,h,l),a!==null)return Rn(a,t,l),Lp(a,i,l),!0}return!1}function Nf(t,i,a,l){if(l={lane:2,revertLane:ud(),action:l,hasEagerState:!1,eagerState:null,next:null},Ku(t)){if(i)throw Error(s(479))}else i=Xh(t,a,l,2),i!==null&&Rn(i,t,2)}function Ku(t){var i=t.alternate;return t===Ne||i!==null&&i===Ne}function Up(t,i){Ma=Bu=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Lp(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ao(t,a)}}var Qu={readContext:Zt,use:Hu,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useInsertionEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useSyncExternalStore:yt,useId:yt,useHostTransitionStatus:yt,useFormState:yt,useActionState:yt,useOptimistic:yt,useMemoCache:yt,useCacheRefresh:yt},zp={readContext:Zt,use:Hu,useCallback:function(t,i){return hn().memoizedState=[t,i===void 0?null:i],t},useContext:Zt,useEffect:Ap,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,Yu(4194308,4,Rp.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Yu(4194308,4,t,i)},useInsertionEffect:function(t,i){Yu(4,2,t,i)},useMemo:function(t,i){var a=hn();i=i===void 0?null:i;var l=t();if(ks){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=hn();if(a!==void 0){var h=a(i);if(ks){_n(!0);try{a(i)}finally{_n(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=PA.bind(null,Ne,t),[l.memoizedState,t]},useRef:function(t){var i=hn();return t={current:t},i.memoizedState=t},useState:function(t){t=wf(t);var i=t.queue,a=Pp.bind(null,Ne,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:If,useDeferredValue:function(t,i){var a=hn();return Cf(a,t,i)},useTransition:function(){var t=wf(!1);return t=Np.bind(null,Ne,t.queue,!0,!1),hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Ne,h=hn();if(Ke){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),at===null)throw Error(s(349));(Be&124)!==0||ap(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Ap(lp.bind(null,l,d,t),[t]),l.flags|=2048,xa(9,Gu(),op.bind(null,l,d,a,i),null),a},useId:function(){var t=hn(),i=at.identifierPrefix;if(Ke){var a=Ki,l=Yi;a=(l&~(1<<32-Wt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=qu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=DA++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Df,useFormState:yp,useActionState:yp,useOptimistic:function(t){var i=hn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Nf.bind(null,Ne,!0,a),a.dispatch=i,[t,i]},useMemoCache:Af,useCacheRefresh:function(){return hn().memoizedState=kA.bind(null,Ne)}},jp={readContext:Zt,use:Hu,useCallback:Cp,useContext:Zt,useEffect:Sp,useImperativeHandle:Ip,useInsertionEffect:bp,useLayoutEffect:wp,useMemo:Op,useReducer:Fu,useRef:Ep,useState:function(){return Fu($i)},useDebugValue:If,useDeferredValue:function(t,i){var a=bt();return Dp(a,tt.memoizedState,t,i)},useTransition:function(){var t=Fu($i)[0],i=bt().memoizedState;return[typeof t=="boolean"?t:Zo(t),i]},useSyncExternalStore:sp,useId:xp,useHostTransitionStatus:Df,useFormState:_p,useActionState:_p,useOptimistic:function(t,i){var a=bt();return hp(a,tt,t,i)},useMemoCache:Af,useCacheRefresh:kp},UA={readContext:Zt,use:Hu,useCallback:Cp,useContext:Zt,useEffect:Sp,useImperativeHandle:Ip,useInsertionEffect:bp,useLayoutEffect:wp,useMemo:Op,useReducer:bf,useRef:Ep,useState:function(){return bf($i)},useDebugValue:If,useDeferredValue:function(t,i){var a=bt();return tt===null?Cf(a,t,i):Dp(a,tt.memoizedState,t,i)},useTransition:function(){var t=bf($i)[0],i=bt().memoizedState;return[typeof t=="boolean"?t:Zo(t),i]},useSyncExternalStore:sp,useId:xp,useHostTransitionStatus:Df,useFormState:Tp,useActionState:Tp,useOptimistic:function(t,i){var a=bt();return tt!==null?hp(a,tt,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Af,useCacheRefresh:kp},ka=null,tl=0;function Xu(t){var i=tl;return tl+=1,ka===null&&(ka=[]),Wg(ka,t,i)}function nl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function $u(t,i){throw i.$$typeof===C?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Bp(t){var i=t._init;return i(t._payload)}function qp(t){function i(x,D){if(t){var U=x.deletions;U===null?(x.deletions=[D],x.flags|=16):U.push(D)}}function a(x,D){if(!t)return null;for(;D!==null;)i(x,D),D=D.sibling;return null}function l(x){for(var D=new Map;x!==null;)x.key!==null?D.set(x.key,x):D.set(x.index,x),x=x.sibling;return D}function h(x,D){return x=Gi(x,D),x.index=0,x.sibling=null,x}function d(x,D,U){return x.index=U,t?(U=x.alternate,U!==null?(U=U.index,U<D?(x.flags|=67108866,D):U):(x.flags|=67108866,D)):(x.flags|=1048576,D)}function v(x){return t&&x.alternate===null&&(x.flags|=67108866),x}function T(x,D,U,Y){return D===null||D.tag!==6?(D=Wh(U,x.mode,Y),D.return=x,D):(D=h(D,U),D.return=x,D)}function w(x,D,U,Y){var ce=U.type;return ce===J?G(x,D,U.props.children,Y,U.key):D!==null&&(D.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===S&&Bp(ce)===D.type)?(D=h(D,U.props),nl(D,U),D.return=x,D):(D=Mu(U.type,U.key,U.props,null,x.mode,Y),nl(D,U),D.return=x,D)}function L(x,D,U,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=Zh(U,x.mode,Y),D.return=x,D):(D=h(D,U.children||[]),D.return=x,D)}function G(x,D,U,Y,ce){return D===null||D.tag!==7?(D=Is(U,x.mode,Y,ce),D.return=x,D):(D=h(D,U),D.return=x,D)}function K(x,D,U){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Wh(""+D,x.mode,U),D.return=x,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case I:return U=Mu(D.type,D.key,D.props,null,x.mode,U),nl(U,D),U.return=x,U;case q:return D=Zh(D,x.mode,U),D.return=x,D;case S:var Y=D._init;return D=Y(D._payload),K(x,D,U)}if(lt(D)||k(D))return D=Is(D,x.mode,U,null),D.return=x,D;if(typeof D.then=="function")return K(x,Xu(D),U);if(D.$$typeof===ae)return K(x,Pu(x,D),U);$u(x,D)}return null}function z(x,D,U,Y){var ce=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ce!==null?null:T(x,D,""+U,Y);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case I:return U.key===ce?w(x,D,U,Y):null;case q:return U.key===ce?L(x,D,U,Y):null;case S:return ce=U._init,U=ce(U._payload),z(x,D,U,Y)}if(lt(U)||k(U))return ce!==null?null:G(x,D,U,Y,null);if(typeof U.then=="function")return z(x,D,Xu(U),Y);if(U.$$typeof===ae)return z(x,D,Pu(x,U),Y);$u(x,U)}return null}function j(x,D,U,Y,ce){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return x=x.get(U)||null,T(D,x,""+Y,ce);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case I:return x=x.get(Y.key===null?U:Y.key)||null,w(D,x,Y,ce);case q:return x=x.get(Y.key===null?U:Y.key)||null,L(D,x,Y,ce);case S:var xe=Y._init;return Y=xe(Y._payload),j(x,D,U,Y,ce)}if(lt(Y)||k(Y))return x=x.get(U)||null,G(D,x,Y,ce,null);if(typeof Y.then=="function")return j(x,D,U,Xu(Y),ce);if(Y.$$typeof===ae)return j(x,D,U,Pu(D,Y),ce);$u(D,Y)}return null}function Ae(x,D,U,Y){for(var ce=null,xe=null,fe=D,_e=D=0,jt=null;fe!==null&&_e<U.length;_e++){fe.index>_e?(jt=fe,fe=null):jt=fe.sibling;var Ge=z(x,fe,U[_e],Y);if(Ge===null){fe===null&&(fe=jt);break}t&&fe&&Ge.alternate===null&&i(x,fe),D=d(Ge,D,_e),xe===null?ce=Ge:xe.sibling=Ge,xe=Ge,fe=jt}if(_e===U.length)return a(x,fe),Ke&&Os(x,_e),ce;if(fe===null){for(;_e<U.length;_e++)fe=K(x,U[_e],Y),fe!==null&&(D=d(fe,D,_e),xe===null?ce=fe:xe.sibling=fe,xe=fe);return Ke&&Os(x,_e),ce}for(fe=l(fe);_e<U.length;_e++)jt=j(fe,x,_e,U[_e],Y),jt!==null&&(t&&jt.alternate!==null&&fe.delete(jt.key===null?_e:jt.key),D=d(jt,D,_e),xe===null?ce=jt:xe.sibling=jt,xe=jt);return t&&fe.forEach(function(jr){return i(x,jr)}),Ke&&Os(x,_e),ce}function ye(x,D,U,Y){if(U==null)throw Error(s(151));for(var ce=null,xe=null,fe=D,_e=D=0,jt=null,Ge=U.next();fe!==null&&!Ge.done;_e++,Ge=U.next()){fe.index>_e?(jt=fe,fe=null):jt=fe.sibling;var jr=z(x,fe,Ge.value,Y);if(jr===null){fe===null&&(fe=jt);break}t&&fe&&jr.alternate===null&&i(x,fe),D=d(jr,D,_e),xe===null?ce=jr:xe.sibling=jr,xe=jr,fe=jt}if(Ge.done)return a(x,fe),Ke&&Os(x,_e),ce;if(fe===null){for(;!Ge.done;_e++,Ge=U.next())Ge=K(x,Ge.value,Y),Ge!==null&&(D=d(Ge,D,_e),xe===null?ce=Ge:xe.sibling=Ge,xe=Ge);return Ke&&Os(x,_e),ce}for(fe=l(fe);!Ge.done;_e++,Ge=U.next())Ge=j(fe,x,_e,Ge.value,Y),Ge!==null&&(t&&Ge.alternate!==null&&fe.delete(Ge.key===null?_e:Ge.key),D=d(Ge,D,_e),xe===null?ce=Ge:xe.sibling=Ge,xe=Ge);return t&&fe.forEach(function(LS){return i(x,LS)}),Ke&&Os(x,_e),ce}function it(x,D,U,Y){if(typeof U=="object"&&U!==null&&U.type===J&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case I:e:{for(var ce=U.key;D!==null;){if(D.key===ce){if(ce=U.type,ce===J){if(D.tag===7){a(x,D.sibling),Y=h(D,U.props.children),Y.return=x,x=Y;break e}}else if(D.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===S&&Bp(ce)===D.type){a(x,D.sibling),Y=h(D,U.props),nl(Y,U),Y.return=x,x=Y;break e}a(x,D);break}else i(x,D);D=D.sibling}U.type===J?(Y=Is(U.props.children,x.mode,Y,U.key),Y.return=x,x=Y):(Y=Mu(U.type,U.key,U.props,null,x.mode,Y),nl(Y,U),Y.return=x,x=Y)}return v(x);case q:e:{for(ce=U.key;D!==null;){if(D.key===ce)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(x,D.sibling),Y=h(D,U.children||[]),Y.return=x,x=Y;break e}else{a(x,D);break}else i(x,D);D=D.sibling}Y=Zh(U,x.mode,Y),Y.return=x,x=Y}return v(x);case S:return ce=U._init,U=ce(U._payload),it(x,D,U,Y)}if(lt(U))return Ae(x,D,U,Y);if(k(U)){if(ce=k(U),typeof ce!="function")throw Error(s(150));return U=ce.call(U),ye(x,D,U,Y)}if(typeof U.then=="function")return it(x,D,Xu(U),Y);if(U.$$typeof===ae)return it(x,D,Pu(x,U),Y);$u(x,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,D!==null&&D.tag===6?(a(x,D.sibling),Y=h(D,U),Y.return=x,x=Y):(a(x,D),Y=Wh(U,x.mode,Y),Y.return=x,x=Y),v(x)):a(x,D)}return function(x,D,U,Y){try{tl=0;var ce=it(x,D,U,Y);return ka=null,ce}catch(fe){if(fe===Yo||fe===Lu)throw fe;var xe=En(29,fe,null,x.mode);return xe.lanes=Y,xe.return=x,xe}finally{}}}var Pa=qp(!0),Hp=qp(!1),Un=X(null),yi=null;function wr(t){var i=t.alternate;ee(Mt,Mt.current&1),ee(Un,t),yi===null&&(i===null||Na.current!==null||i.memoizedState!==null)&&(yi=t)}function Fp(t){if(t.tag===22){if(ee(Mt,Mt.current),ee(Un,t),yi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(yi=t)}}else Rr()}function Rr(){ee(Mt,Mt.current),ee(Un,Un.current)}function Wi(t){ie(Un),yi===t&&(yi=null),ie(Mt)}var Mt=X(0);function Wu(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ed(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Mf(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Vf={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=wn(),h=Ar(l);h.payload=i,a!=null&&(h.callback=a),i=Sr(t,h,l),i!==null&&(Rn(i,t,l),Qo(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=wn(),h=Ar(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Sr(t,h,l),i!==null&&(Rn(i,t,l),Qo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=wn(),l=Ar(a);l.tag=2,i!=null&&(l.callback=i),i=Sr(t,l,a),i!==null&&(Rn(i,t,a),Qo(i,t,a))}};function Gp(t,i,a,l,h,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Lo(a,l)||!Lo(h,d):!0}function Yp(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Vf.enqueueReplaceState(i,i.state,null)}function Ps(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=E({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var Zu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Kp(t){Zu(t)}function Qp(t){console.error(t)}function Xp(t){Zu(t)}function Ju(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function $p(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function xf(t,i,a){return a=Ar(a),a.tag=3,a.payload={element:null},a.callback=function(){Ju(t,i)},a}function Wp(t){return t=Ar(t),t.tag=3,t}function Zp(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){$p(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){$p(i,a,l),typeof h!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function LA(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Ho(i,a,h,!0),a=Un.current,a!==null){switch(a.tag){case 13:return yi===null?rd():a.alternate===null&&gt===0&&(gt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===uf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),ad(t,l,h)),!1;case 22:return a.flags|=65536,l===uf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),ad(t,l,h)),!1}throw Error(s(435,a.tag))}return ad(t,l,h),rd(),!1}if(Ke)return i=Un.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==tf&&(t=Error(s(422),{cause:l}),qo(Vn(t,a)))):(l!==tf&&(i=Error(s(423),{cause:l}),qo(Vn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Vn(l,a),h=xf(t.stateNode,l,h),ff(t,h),gt!==4&&(gt=2)),!1;var d=Error(s(520),{cause:l});if(d=Vn(d,a),ul===null?ul=[d]:ul.push(d),gt!==4&&(gt=2),i===null)return!0;l=Vn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=xf(a.stateNode,l,t),ff(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Mr===null||!Mr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Wp(h),Zp(h,t,a,l),ff(a,h),!1}a=a.return}while(a!==null);return!1}var Jp=Error(s(461)),Lt=!1;function Gt(t,i,a,l){i.child=t===null?Hp(i,null,a,l):Pa(i,t.child,a,l)}function ey(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Vs(i),l=yf(t,i,a,v,d,h),T=_f(),t!==null&&!Lt?(vf(t,i,h),Zi(t,i,h)):(Ke&&T&&Jh(i),i.flags|=1,Gt(t,i,l,h),i.child)}function ty(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!$h(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,ny(t,i,d,l,h)):(t=Mu(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!qf(t,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Lo,a(v,l)&&t.ref===i.ref)return Zi(t,i,h)}return i.flags|=1,t=Gi(d,l),t.ref=i.ref,t.return=i,i.child=t}function ny(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(Lo(d,l)&&t.ref===i.ref)if(Lt=!1,i.pendingProps=l=d,qf(t,h))(t.flags&131072)!==0&&(Lt=!0);else return i.lanes=t.lanes,Zi(t,i,h)}return kf(t,i,a,l,h)}function iy(t,i,a){var l=i.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return ry(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Uu(i,d!==null?d.cachePool:null),d!==null?np(i,d):mf(),Fp(i);else return i.lanes=i.childLanes=536870912,ry(t,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Uu(i,d.cachePool),np(i,d),Rr(),i.memoizedState=null):(t!==null&&Uu(i,null),mf(),Rr());return Gt(t,i,h,a),i.child}function ry(t,i,a,l){var h=lf();return h=h===null?null:{parent:Nt._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&Uu(i,null),mf(),Fp(i),t!==null&&Ho(t,i,l,!0),null}function ec(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function kf(t,i,a,l,h){return Vs(i),a=yf(t,i,a,l,void 0,h),l=_f(),t!==null&&!Lt?(vf(t,i,h),Zi(t,i,h)):(Ke&&l&&Jh(i),i.flags|=1,Gt(t,i,a,h),i.child)}function sy(t,i,a,l,h,d){return Vs(i),i.updateQueue=null,a=rp(i,l,a,h),ip(t),l=_f(),t!==null&&!Lt?(vf(t,i,d),Zi(t,i,d)):(Ke&&l&&Jh(i),i.flags|=1,Gt(t,i,a,d),i.child)}function ay(t,i,a,l,h){if(Vs(i),i.stateNode===null){var d=Ra,v=a.contextType;typeof v=="object"&&v!==null&&(d=Zt(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Vf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},cf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Zt(v):Ra,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Mf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Vf.enqueueReplaceState(d,d.state,null),$o(i,l,d,h),Xo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,w=Ps(a,T);d.props=w;var L=d.context,G=a.contextType;v=Ra,typeof G=="object"&&G!==null&&(v=Zt(G));var K=a.getDerivedStateFromProps;G=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||L!==v)&&Yp(i,d,l,v),Er=!1;var z=i.memoizedState;d.state=z,$o(i,l,d,h),Xo(),L=i.memoizedState,T||z!==L||Er?(typeof K=="function"&&(Mf(i,a,K,l),L=i.memoizedState),(w=Er||Gp(i,a,w,l,z,L,v))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,hf(t,i),v=i.memoizedProps,G=Ps(a,v),d.props=G,K=i.pendingProps,z=d.context,L=a.contextType,w=Ra,typeof L=="object"&&L!==null&&(w=Zt(L)),T=a.getDerivedStateFromProps,(L=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==K||z!==w)&&Yp(i,d,l,w),Er=!1,z=i.memoizedState,d.state=z,$o(i,l,d,h),Xo();var j=i.memoizedState;v!==K||z!==j||Er||t!==null&&t.dependencies!==null&&ku(t.dependencies)?(typeof T=="function"&&(Mf(i,a,T,l),j=i.memoizedState),(G=Er||Gp(i,a,G,l,z,j,w)||t!==null&&t.dependencies!==null&&ku(t.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,j,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,j,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=w,l=G):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,ec(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Pa(i,t.child,null,h),i.child=Pa(i,null,a,h)):Gt(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Zi(t,i,h),t}function oy(t,i,a,l){return Bo(),i.flags|=256,Gt(t,i,a,l),i.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(t){return{baseLanes:t,cachePool:Qg()}}function Lf(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Ln),t}function ly(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(Mt.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ke){if(h?wr(i):Rr(),Ke){var T=mt,w;if(w=T){e:{for(w=T,T=pi;w.nodeType!==8;){if(!T){T=null;break e}if(w=Zn(w.nextSibling),w===null){T=null;break e}}T=w}T!==null?(i.memoizedState={dehydrated:T,treeContext:Cs!==null?{id:Yi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},w=En(18,null,null,0),w.stateNode=T,w.return=i,i.child=w,ln=i,mt=null,w=!0):w=!1}w||Ns(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Ed(T)?i.lanes=32:i.lanes=536870912,null;Wi(i)}return T=l.children,l=l.fallback,h?(Rr(),h=i.mode,T=tc({mode:"hidden",children:T},h),l=Is(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=Uf(a),h.childLanes=Lf(t,v,a),i.memoizedState=Pf,l):(wr(i),zf(i,T))}if(w=t.memoizedState,w!==null&&(T=w.dehydrated,T!==null)){if(d)i.flags&256?(wr(i),i.flags&=-257,i=jf(t,i,a)):i.memoizedState!==null?(Rr(),i.child=t.child,i.flags|=128,i=null):(Rr(),h=l.fallback,T=i.mode,l=tc({mode:"visible",children:l.children},T),h=Is(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Pa(i,t.child,null,a),l=i.child,l.memoizedState=Uf(a),l.childLanes=Lf(t,v,a),i.memoizedState=Pf,i=h);else if(wr(i),Ed(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,qo({value:l,source:null,stack:null}),i=jf(t,i,a)}else if(Lt||Ho(t,i,a,!1),v=(a&t.childLanes)!==0,Lt||v){if(v=at,v!==null&&(l=a&-a,l=(l&42)!==0?1:dr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,wa(t,l),Rn(v,t,l),Jp;T.data==="$?"||rd(),i=jf(t,i,a)}else T.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=w.treeContext,mt=Zn(T.nextSibling),ln=i,Ke=!0,Ds=null,pi=!1,t!==null&&(kn[Pn++]=Yi,kn[Pn++]=Ki,kn[Pn++]=Cs,Yi=t.id,Ki=t.overflow,Cs=i),i=zf(i,l.children),i.flags|=4096);return i}return h?(Rr(),h=l.fallback,T=i.mode,w=t.child,L=w.sibling,l=Gi(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,L!==null?h=Gi(L,h):(h=Is(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T===null?T=Uf(a):(w=T.cachePool,w!==null?(L=Nt._currentValue,w=w.parent!==L?{parent:L,pool:L}:w):w=Qg(),T={baseLanes:T.baseLanes|a,cachePool:w}),h.memoizedState=T,h.childLanes=Lf(t,v,a),i.memoizedState=Pf,l):(wr(i),a=t.child,t=a.sibling,a=Gi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=a,i.memoizedState=null,a)}function zf(t,i){return i=tc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function tc(t,i){return t=En(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function jf(t,i,a){return Pa(i,t.child,null,a),t=zf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function uy(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),rf(t.return,i,a)}function Bf(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function cy(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Gt(t,i,l.children,a),l=Mt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&uy(t,a,i);else if(t.tag===19)uy(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(ee(Mt,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Wu(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Bf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Wu(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Bf(i,!0,a,null,d);break;case"together":Bf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Zi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Nr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(Ho(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Gi(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Gi(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function qf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ku(t)))}function zA(t,i,a){switch(i.tag){case 3:Ze(i,i.stateNode.containerInfo),Tr(i,Nt,t.memoizedState.cache),Bo();break;case 27:case 5:ri(i);break;case 4:Ze(i,i.stateNode.containerInfo);break;case 10:Tr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(wr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?ly(t,i,a):(wr(i),t=Zi(t,i,a),t!==null?t.sibling:null);wr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Ho(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return cy(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ee(Mt,Mt.current),l)break;return null;case 22:case 23:return i.lanes=0,iy(t,i,a);case 24:Tr(i,Nt,t.memoizedState.cache)}return Zi(t,i,a)}function hy(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Lt=!0;else{if(!qf(t,a)&&(i.flags&128)===0)return Lt=!1,zA(t,i,a);Lt=(t.flags&131072)!==0}else Lt=!1,Ke&&(i.flags&1048576)!==0&&Bg(i,xu,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")$h(l)?(t=Ps(l,t),i.tag=1,i=ay(null,i,l,t,a)):(i.tag=0,i=kf(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===Ve){i.tag=11,i=ey(null,i,l,t,a);break e}else if(h===N){i.tag=14,i=ty(null,i,l,t,a);break e}}throw i=It(l)||l,Error(s(306,i,""))}}return i;case 0:return kf(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Ps(l,i.pendingProps),ay(t,i,l,h,a);case 3:e:{if(Ze(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,hf(t,i),$o(i,l,null,a);var v=i.memoizedState;if(l=v.cache,Tr(i,Nt,l),l!==d.cache&&sf(i,[Nt],a,!0),Xo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=oy(t,i,l,a);break e}else if(l!==h){h=Vn(Error(s(424)),i),qo(h),i=oy(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(mt=Zn(t.firstChild),ln=i,Ke=!0,Ds=null,pi=!0,a=Hp(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Bo(),l===h){i=Zi(t,i,a);break e}Gt(t,i,l,a)}i=i.child}return i;case 26:return ec(t,i),t===null?(a=g_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ke||(a=i.type,t=i.pendingProps,l=gc(Ee.current).createElement(a),l[Ct]=i,l[Et]=t,Kt(l,a,t),pt(l),i.stateNode=l):i.memoizedState=g_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ri(i),t===null&&Ke&&(l=i.stateNode=f_(i.type,i.pendingProps,Ee.current),ln=i,pi=!0,h=mt,kr(i.type)?(Ad=h,mt=Zn(l.firstChild)):mt=h),Gt(t,i,i.pendingProps.children,a),ec(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ke&&((h=l=mt)&&(l=dS(l,i.type,i.pendingProps,pi),l!==null?(i.stateNode=l,ln=i,mt=Zn(l.firstChild),pi=!1,h=!0):h=!1),h||Ns(i)),ri(i),h=i.type,d=i.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,_d(h,d)?l=null:v!==null&&_d(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=yf(t,i,NA,null,null,a),_l._currentValue=h),ec(t,i),Gt(t,i,l,a),i.child;case 6:return t===null&&Ke&&((t=a=mt)&&(a=mS(a,i.pendingProps,pi),a!==null?(i.stateNode=a,ln=i,mt=null,t=!0):t=!1),t||Ns(i)),null;case 13:return ly(t,i,a);case 4:return Ze(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Pa(i,null,l,a):Gt(t,i,l,a),i.child;case 11:return ey(t,i,i.type,i.pendingProps,a);case 7:return Gt(t,i,i.pendingProps,a),i.child;case 8:return Gt(t,i,i.pendingProps.children,a),i.child;case 12:return Gt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Tr(i,i.type,l.value),Gt(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Vs(i),h=Zt(h),l=l(h),i.flags|=1,Gt(t,i,l,a),i.child;case 14:return ty(t,i,i.type,i.pendingProps,a);case 15:return ny(t,i,i.type,i.pendingProps,a);case 19:return cy(t,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},t===null?(a=tc(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Gi(t.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return iy(t,i,a);case 24:return Vs(i),l=Zt(Nt),t===null?(h=lf(),h===null&&(h=at,d=af(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},cf(i),Tr(i,Nt,h)):((t.lanes&a)!==0&&(hf(t,i),$o(i,null,null,a),Xo()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Tr(i,Nt,l)):(l=d.cache,Tr(i,Nt,l),l!==h.cache&&sf(i,[Nt],a,!0))),Gt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Ji(t){t.flags|=4}function fy(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!T_(i)){if(i=Un.current,i!==null&&((Be&4194048)===Be?yi!==null:(Be&62914560)!==Be&&(Be&536870912)===0||i!==yi))throw Ko=uf,Xg;t.flags|=8192}}function nc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?To():536870912,t.lanes|=i,ja|=i)}function il(t,i){if(!Ke)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ht(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function jA(t,i,a){var l=i.pendingProps;switch(ef(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(i),null;case 1:return ht(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Xi(Nt),cn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(jo(i)?Ji(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Fg())),ht(i),null;case 26:return a=i.memoizedState,t===null?(Ji(i),a!==null?(ht(i),fy(i,a)):(ht(i),i.flags&=-16777217)):a?a!==t.memoizedState?(Ji(i),ht(i),fy(i,a)):(ht(i),i.flags&=-16777217):(t.memoizedProps!==l&&Ji(i),ht(i),i.flags&=-16777217),null;case 27:Fn(i),a=Ee.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}t=me.current,jo(i)?qg(i):(t=f_(h,l,a),i.stateNode=t,Ji(i))}return ht(i),null;case 5:if(Fn(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}if(t=me.current,jo(i))qg(i);else{switch(h=gc(Ee.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[Ct]=i,t[Et]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(Kt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ji(i)}}return ht(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ji(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=Ee.current,jo(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=ln,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[Ct]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||s_(t.nodeValue,a)),t||Ns(i)}else t=gc(t).createTextNode(l),t[Ct]=i,i.stateNode=t}return ht(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=jo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ct]=i}else Bo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ht(i),h=!1}else h=Fg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Wi(i),i):(Wi(i),null)}if(Wi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),nc(i,i.updateQueue),ht(i),null;case 4:return cn(),t===null&&dd(i.stateNode.containerInfo),ht(i),null;case 10:return Xi(i.type),ht(i),null;case 19:if(ie(Mt),h=i.memoizedState,h===null)return ht(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)il(h,!1);else{if(gt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Wu(t),d!==null){for(i.flags|=128,il(h,!1),t=d.updateQueue,i.updateQueue=t,nc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)jg(a,t),a=a.sibling;return ee(Mt,Mt.current&1|2),i.child}t=t.sibling}h.tail!==null&&se()>sc&&(i.flags|=128,l=!0,il(h,!1),i.lanes=4194304)}else{if(!l)if(t=Wu(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,nc(i,t),il(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ke)return ht(i),null}else 2*se()-h.renderingStartTime>sc&&a!==536870912&&(i.flags|=128,l=!0,il(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=se(),i.sibling=null,t=Mt.current,ee(Mt,l?t&1|2:t&1),i):(ht(i),null);case 22:case 23:return Wi(i),gf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ht(i),i.subtreeFlags&6&&(i.flags|=8192)):ht(i),a=i.updateQueue,a!==null&&nc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&ie(xs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Xi(Nt),ht(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function BA(t,i){switch(ef(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Xi(Nt),cn(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Fn(i),null;case 13:if(Wi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Bo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ie(Mt),null;case 4:return cn(),null;case 10:return Xi(i.type),null;case 22:case 23:return Wi(i),gf(),t!==null&&ie(xs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Xi(Nt),null;case 25:return null;default:return null}}function dy(t,i){switch(ef(i),i.tag){case 3:Xi(Nt),cn();break;case 26:case 27:case 5:Fn(i);break;case 4:cn();break;case 13:Wi(i);break;case 19:ie(Mt);break;case 10:Xi(i.type);break;case 22:case 23:Wi(i),gf(),t!==null&&ie(xs);break;case 24:Xi(Nt)}}function rl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){st(i,i.return,T)}}function Ir(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var w=a,L=T;try{L()}catch(G){st(h,w,G)}}}l=l.next}while(l!==d)}}catch(G){st(i,i.return,G)}}function my(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{tp(i,a)}catch(l){st(t,t.return,l)}}}function gy(t,i,a){a.props=Ps(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){st(t,i,l)}}function sl(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){st(t,i,h)}}function _i(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){st(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){st(t,i,h)}else a.current=null}function py(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){st(t,t.return,h)}}function Hf(t,i,a){try{var l=t.stateNode;lS(l,t.type,a,i),l[Et]=i}catch(h){st(t,t.return,h)}}function yy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&kr(t.type)||t.tag===4}function Ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&kr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gf(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=mc));else if(l!==4&&(l===27&&kr(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(Gf(t,i,a),t=t.sibling;t!==null;)Gf(t,i,a),t=t.sibling}function ic(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&kr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ic(t,i,a),t=t.sibling;t!==null;)ic(t,i,a),t=t.sibling}function _y(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Kt(i,l,a),i[Ct]=t,i[Et]=a}catch(d){st(t,t.return,d)}}var er=!1,_t=!1,Yf=!1,vy=typeof WeakSet=="function"?WeakSet:Set,zt=null;function qA(t,i){if(t=t.containerInfo,pd=Ec,t=Dg(t),Hh(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,w=-1,L=0,G=0,K=t,z=null;t:for(;;){for(var j;K!==a||h!==0&&K.nodeType!==3||(T=v+h),K!==d||l!==0&&K.nodeType!==3||(w=v+l),K.nodeType===3&&(v+=K.nodeValue.length),(j=K.firstChild)!==null;)z=K,K=j;for(;;){if(K===t)break t;if(z===a&&++L===h&&(T=v),z===d&&++G===l&&(w=v),(j=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=j}a=T===-1||w===-1?null:{start:T,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(yd={focusedElem:t,selectionRange:a},Ec=!1,zt=i;zt!==null;)if(i=zt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,zt=t;else for(;zt!==null;){switch(i=zt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Ae=Ps(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(Ae,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ye){st(a,a.return,ye)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Td(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Td(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,zt=t;break}zt=i.return}}function Ty(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Cr(t,a),l&4&&rl(5,a);break;case 1:if(Cr(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(v){st(a,a.return,v)}else{var h=Ps(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(v){st(a,a.return,v)}}l&64&&my(a),l&512&&sl(a,a.return);break;case 3:if(Cr(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{tp(t,i)}catch(v){st(a,a.return,v)}}break;case 27:i===null&&l&4&&_y(a);case 26:case 5:Cr(t,a),i===null&&l&4&&py(a),l&512&&sl(a,a.return);break;case 12:Cr(t,a);break;case 13:Cr(t,a),l&4&&Sy(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=WA.bind(null,a),gS(t,a))));break;case 22:if(l=a.memoizedState!==null||er,!l){i=i!==null&&i.memoizedState!==null||_t,h=er;var d=_t;er=l,(_t=i)&&!d?Or(t,a,(a.subtreeFlags&8772)!==0):Cr(t,a),er=h,_t=d}break;case 30:break;default:Cr(t,a)}}function Ey(t){var i=t.alternate;i!==null&&(t.alternate=null,Ey(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&pr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ct=null,fn=!1;function tr(t,i,a){for(a=a.child;a!==null;)Ay(t,i,a),a=a.sibling}function Ay(t,i,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(rt,a)}catch{}switch(a.tag){case 26:_t||_i(a,i),tr(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_t||_i(a,i);var l=ct,h=fn;kr(a.type)&&(ct=a.stateNode,fn=!1),tr(t,i,a),ml(a.stateNode),ct=l,fn=h;break;case 5:_t||_i(a,i);case 6:if(l=ct,h=fn,ct=null,tr(t,i,a),ct=l,fn=h,ct!==null)if(fn)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(a.stateNode)}catch(d){st(a,i,d)}else try{ct.removeChild(a.stateNode)}catch(d){st(a,i,d)}break;case 18:ct!==null&&(fn?(t=ct,c_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Al(t)):c_(ct,a.stateNode));break;case 4:l=ct,h=fn,ct=a.stateNode.containerInfo,fn=!0,tr(t,i,a),ct=l,fn=h;break;case 0:case 11:case 14:case 15:_t||Ir(2,a,i),_t||Ir(4,a,i),tr(t,i,a);break;case 1:_t||(_i(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&gy(a,i,l)),tr(t,i,a);break;case 21:tr(t,i,a);break;case 22:_t=(l=_t)||a.memoizedState!==null,tr(t,i,a),_t=l;break;default:tr(t,i,a)}}function Sy(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Al(t)}catch(a){st(i,i.return,a)}}function HA(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new vy),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new vy),i;default:throw Error(s(435,t.tag))}}function Kf(t,i){var a=HA(t);i.forEach(function(l){var h=ZA.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function An(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(kr(T.type)){ct=T.stateNode,fn=!1;break e}break;case 5:ct=T.stateNode,fn=!1;break e;case 3:case 4:ct=T.stateNode.containerInfo,fn=!0;break e}T=T.return}if(ct===null)throw Error(s(160));Ay(d,v,h),ct=null,fn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)by(i,t),i=i.sibling}var Wn=null;function by(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:An(i,t),Sn(t),l&4&&(Ir(3,t,t.return),rl(3,t),Ir(5,t,t.return));break;case 1:An(i,t),Sn(t),l&512&&(_t||a===null||_i(a,a.return)),l&64&&er&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Wn;if(An(i,t),Sn(t),l&512&&(_t||a===null||_i(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[hs]||d[Ct]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Kt(d,l,a),d[Ct]=t,pt(d),l=d;break e;case"link":var v=__("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=h.createElement(l),Kt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=__("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=h.createElement(l),Kt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Ct]=t,pt(d),l=d}t.stateNode=l}else v_(h,t.type,t.stateNode);else t.stateNode=y_(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?v_(h,t.type,t.stateNode):y_(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Hf(t,t.memoizedProps,a.memoizedProps)}break;case 27:An(i,t),Sn(t),l&512&&(_t||a===null||_i(a,a.return)),a!==null&&l&4&&Hf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(An(i,t),Sn(t),l&512&&(_t||a===null||_i(a,a.return)),t.flags&32){h=t.stateNode;try{On(h,"")}catch(j){st(t,t.return,j)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Hf(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Yf=!0);break;case 6:if(An(i,t),Sn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(j){st(t,t.return,j)}}break;case 3:if(_c=null,h=Wn,Wn=pc(i.containerInfo),An(i,t),Wn=h,Sn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Al(i.containerInfo)}catch(j){st(t,t.return,j)}Yf&&(Yf=!1,wy(t));break;case 4:l=Wn,Wn=pc(t.stateNode.containerInfo),An(i,t),Sn(t),Wn=l;break;case 12:An(i,t),Sn(t);break;case 13:An(i,t),Sn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jf=se()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Kf(t,l)));break;case 22:h=t.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,L=er,G=_t;if(er=L||h,_t=G||w,An(i,t),_t=G,er=L,Sn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||er||_t||Us(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=w.stateNode;var K=w.memoizedProps.style,z=K!=null&&K.hasOwnProperty("display")?K.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(j){st(w,w.return,j)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(j){st(w,w.return,j)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Kf(t,a))));break;case 19:An(i,t),Sn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Kf(t,l)));break;case 30:break;case 21:break;default:An(i,t),Sn(t)}}function Sn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(yy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Ff(t);ic(t,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(On(v,""),a.flags&=-33);var T=Ff(t);ic(t,T,v);break;case 3:case 4:var w=a.stateNode.containerInfo,L=Ff(t);Gf(t,L,w);break;default:throw Error(s(161))}}catch(G){st(t,t.return,G)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function wy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;wy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Cr(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ty(t,i.alternate,i),i=i.sibling}function Us(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ir(4,i,i.return),Us(i);break;case 1:_i(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&gy(i,i.return,a),Us(i);break;case 27:ml(i.stateNode);case 26:case 5:_i(i,i.return),Us(i);break;case 22:i.memoizedState===null&&Us(i);break;case 30:Us(i);break;default:Us(i)}t=t.sibling}}function Or(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Or(h,d,a),rl(4,d);break;case 1:if(Or(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){st(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)ep(w[h],T)}catch(L){st(l,l.return,L)}}a&&v&64&&my(d),sl(d,d.return);break;case 27:_y(d);case 26:case 5:Or(h,d,a),a&&l===null&&v&4&&py(d),sl(d,d.return);break;case 12:Or(h,d,a);break;case 13:Or(h,d,a),a&&v&4&&Sy(h,d);break;case 22:d.memoizedState===null&&Or(h,d,a),sl(d,d.return);break;case 30:break;default:Or(h,d,a)}i=i.sibling}}function Qf(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Fo(a))}function Xf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Fo(t))}function vi(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ry(t,i,a,l),i=i.sibling}function Ry(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:vi(t,i,a,l),h&2048&&rl(9,i);break;case 1:vi(t,i,a,l);break;case 3:vi(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Fo(t)));break;case 12:if(h&2048){vi(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(w){st(i,i.return,w)}}else vi(t,i,a,l);break;case 13:vi(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?vi(t,i,a,l):al(t,i):d._visibility&2?vi(t,i,a,l):(d._visibility|=2,Ua(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Qf(v,i);break;case 24:vi(t,i,a,l),h&2048&&Xf(i.alternate,i);break;default:vi(t,i,a,l)}}function Ua(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,v=i,T=a,w=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ua(d,v,T,w,h),rl(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?Ua(d,v,T,w,h):al(d,v):(G._visibility|=2,Ua(d,v,T,w,h)),h&&L&2048&&Qf(v.alternate,v);break;case 24:Ua(d,v,T,w,h),h&&L&2048&&Xf(v.alternate,v);break;default:Ua(d,v,T,w,h)}i=i.sibling}}function al(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:al(a,l),h&2048&&Qf(l.alternate,l);break;case 24:al(a,l),h&2048&&Xf(l.alternate,l);break;default:al(a,l)}i=i.sibling}}var ol=8192;function La(t){if(t.subtreeFlags&ol)for(t=t.child;t!==null;)Iy(t),t=t.sibling}function Iy(t){switch(t.tag){case 26:La(t),t.flags&ol&&t.memoizedState!==null&&CS(Wn,t.memoizedState,t.memoizedProps);break;case 5:La(t);break;case 3:case 4:var i=Wn;Wn=pc(t.stateNode.containerInfo),La(t),Wn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ol,ol=16777216,La(t),ol=i):La(t));break;default:La(t)}}function Cy(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ll(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,Dy(l,t)}Cy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Oy(t),t=t.sibling}function Oy(t){switch(t.tag){case 0:case 11:case 15:ll(t),t.flags&2048&&Ir(9,t,t.return);break;case 3:ll(t);break;case 12:ll(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,rc(t)):ll(t);break;default:ll(t)}}function rc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,Dy(l,t)}Cy(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ir(8,i,i.return),rc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,rc(i));break;default:rc(i)}t=t.sibling}}function Dy(t,i){for(;zt!==null;){var a=zt;switch(a.tag){case 0:case 11:case 15:Ir(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Fo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,zt=l;else e:for(a=t;zt!==null;){l=zt;var h=l.sibling,d=l.return;if(Ey(l),l===a){zt=null;break e}if(h!==null){h.return=d,zt=h;break e}zt=d}}}var FA={getCacheForType:function(t){var i=Zt(Nt),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},GA=typeof WeakMap=="function"?WeakMap:Map,$e=0,at=null,ke=null,Be=0,We=0,bn=null,Dr=!1,za=!1,$f=!1,nr=0,gt=0,Nr=0,Ls=0,Wf=0,Ln=0,ja=0,ul=null,dn=null,Zf=!1,Jf=0,sc=1/0,ac=null,Mr=null,Yt=0,Vr=null,Ba=null,qa=0,ed=0,td=null,Ny=null,cl=0,nd=null;function wn(){if(($e&2)!==0&&Be!==0)return Be&-Be;if(F.T!==null){var t=Oa;return t!==0?t:ud()}return mr()}function My(){Ln===0&&(Ln=(Be&536870912)===0||Ke?vo():536870912);var t=Un.current;return t!==null&&(t.flags|=32),Ln}function Rn(t,i,a){(t===at&&(We===2||We===9)||t.cancelPendingCommit!==null)&&(Ha(t,0),xr(t,Be,Ln,!1)),xi(t,a),(($e&2)===0||t!==at)&&(t===at&&(($e&2)===0&&(Ls|=a),gt===4&&xr(t,Be,Ln,!1)),Ti(t))}function Vy(t,i,a){if(($e&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&t.expiredLanes)===0||cs(t,i),h=l?QA(t,i):sd(t,i,!0),d=l;do{if(h===0){za&&!l&&xr(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!YA(a)){h=sd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var T=t;h=ul;var w=T.current.memoizedState.isDehydrated;if(w&&(Ha(T,v).flags|=256),v=sd(T,v,!1),v!==2){if($f&&!w){T.errorRecoveryDisabledLanes|=d,Ls|=d,h=4;break e}d=dn,dn=h,d!==null&&(dn===null?dn=d:dn.push.apply(dn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Ha(t,0),xr(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:xr(l,i,Ln,!Dr);break e;case 2:dn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Jf+300-se(),10<h)){if(xr(l,i,Ln,!Dr),aa(l,0,!0)!==0)break e;l.timeoutHandle=l_(xy.bind(null,l,a,dn,ac,Zf,i,Ln,Ls,ja,Dr,d,2,-0,0),h);break e}xy(l,a,dn,ac,Zf,i,Ln,Ls,ja,Dr,d,0,-0,0)}}break}while(!0);Ti(t)}function xy(t,i,a,l,h,d,v,T,w,L,G,K,z,j){if(t.timeoutHandle=-1,K=i.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(yl={stylesheets:null,count:0,unsuspend:IS},Iy(i),K=OS(),K!==null)){t.cancelPendingCommit=K(By.bind(null,t,i,d,a,l,h,v,T,w,G,1,z,j)),xr(t,d,v,!L);return}By(t,i,d,a,l,h,v,T,w)}function YA(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!Tn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function xr(t,i,a,l){i&=~Wf,i&=~Ls,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Wt(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&si(t,a,i)}function oc(){return($e&6)===0?(hl(0),!1):!0}function id(){if(ke!==null){if(We===0)var t=ke.return;else t=ke,Qi=Ms=null,Tf(t),ka=null,tl=0,t=ke;for(;t!==null;)dy(t.alternate,t),t=t.return;ke=null}}function Ha(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,cS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),id(),at=t,ke=a=Gi(t.current,null),Be=i,We=0,bn=null,Dr=!1,za=cs(t,i),$f=!1,ja=Ln=Wf=Ls=Nr=gt=0,dn=ul=null,Zf=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Wt(l),d=1<<h;i|=t[h],l&=~d}return nr=i,Ou(),a}function ky(t,i){Ne=null,F.H=Qu,i===Yo||i===Lu?(i=Zg(),We=3):i===Xg?(i=Zg(),We=4):We=i===Jp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,bn=i,ke===null&&(gt=1,Ju(t,Vn(i,t.current)))}function Py(){var t=F.H;return F.H=Qu,t===null?Qu:t}function Uy(){var t=F.A;return F.A=FA,t}function rd(){gt=4,Dr||(Be&4194048)!==Be&&Un.current!==null||(za=!0),(Nr&134217727)===0&&(Ls&134217727)===0||at===null||xr(at,Be,Ln,!1)}function sd(t,i,a){var l=$e;$e|=2;var h=Py(),d=Uy();(at!==t||Be!==i)&&(ac=null,Ha(t,i)),i=!1;var v=gt;e:do try{if(We!==0&&ke!==null){var T=ke,w=bn;switch(We){case 8:id(),v=6;break e;case 3:case 2:case 9:case 6:Un.current===null&&(i=!0);var L=We;if(We=0,bn=null,Fa(t,T,w,L),a&&za){v=0;break e}break;default:L=We,We=0,bn=null,Fa(t,T,w,L)}}KA(),v=gt;break}catch(G){ky(t,G)}while(!0);return i&&t.shellSuspendCounter++,Qi=Ms=null,$e=l,F.H=h,F.A=d,ke===null&&(at=null,Be=0,Ou()),v}function KA(){for(;ke!==null;)Ly(ke)}function QA(t,i){var a=$e;$e|=2;var l=Py(),h=Uy();at!==t||Be!==i?(ac=null,sc=se()+500,Ha(t,i)):za=cs(t,i);e:do try{if(We!==0&&ke!==null){i=ke;var d=bn;t:switch(We){case 1:We=0,bn=null,Fa(t,i,d,1);break;case 2:case 9:if($g(d)){We=0,bn=null,zy(i);break}i=function(){We!==2&&We!==9||at!==t||(We=7),Ti(t)},d.then(i,i);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:$g(d)?(We=0,bn=null,zy(i)):(We=0,bn=null,Fa(t,i,d,7));break;case 5:var v=null;switch(ke.tag){case 26:v=ke.memoizedState;case 5:case 27:var T=ke;if(!v||T_(v)){We=0,bn=null;var w=T.sibling;if(w!==null)ke=w;else{var L=T.return;L!==null?(ke=L,lc(L)):ke=null}break t}}We=0,bn=null,Fa(t,i,d,5);break;case 6:We=0,bn=null,Fa(t,i,d,6);break;case 8:id(),gt=6;break e;default:throw Error(s(462))}}XA();break}catch(G){ky(t,G)}while(!0);return Qi=Ms=null,F.H=l,F.A=h,$e=a,ke!==null?0:(at=null,Be=0,Ou(),gt)}function XA(){for(;ke!==null&&!H();)Ly(ke)}function Ly(t){var i=hy(t.alternate,t,nr);t.memoizedProps=t.pendingProps,i===null?lc(t):ke=i}function zy(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=sy(a,i,i.pendingProps,i.type,void 0,Be);break;case 11:i=sy(a,i,i.pendingProps,i.type.render,i.ref,Be);break;case 5:Tf(i);default:dy(a,i),i=ke=jg(i,nr),i=hy(a,i,nr)}t.memoizedProps=t.pendingProps,i===null?lc(t):ke=i}function Fa(t,i,a,l){Qi=Ms=null,Tf(i),ka=null,tl=0;var h=i.return;try{if(LA(t,h,i,a,Be)){gt=1,Ju(t,Vn(a,t.current)),ke=null;return}}catch(d){if(h!==null)throw ke=h,d;gt=1,Ju(t,Vn(a,t.current)),ke=null;return}i.flags&32768?(Ke||l===1?t=!0:za||(Be&536870912)!==0?t=!1:(Dr=t=!0,(l===2||l===9||l===3||l===6)&&(l=Un.current,l!==null&&l.tag===13&&(l.flags|=16384))),jy(i,t)):lc(i)}function lc(t){var i=t;do{if((i.flags&32768)!==0){jy(i,Dr);return}t=i.return;var a=jA(i.alternate,i,nr);if(a!==null){ke=a;return}if(i=i.sibling,i!==null){ke=i;return}ke=i=t}while(i!==null);gt===0&&(gt=5)}function jy(t,i){do{var a=BA(t.alternate,t);if(a!==null){a.flags&=32767,ke=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){ke=t;return}ke=t=a}while(t!==null);gt=6,ke=null}function By(t,i,a,l,h,d,v,T,w){t.cancelPendingCommit=null;do uc();while(Yt!==0);if(($e&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Qh,Eo(t,a,d,v,T,w),t===at&&(ke=at=null,Be=0),Ba=i,Vr=t,qa=a,ed=d,td=h,Ny=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,JA(Fe,function(){return Yy(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=ne.p,ne.p=2,v=$e,$e|=4;try{qA(t,i,a)}finally{$e=v,ne.p=h,F.T=l}}Yt=1,qy(),Hy(),Fy()}}function qy(){if(Yt===1){Yt=0;var t=Vr,i=Ba,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=ne.p;ne.p=2;var h=$e;$e|=4;try{by(i,t);var d=yd,v=Dg(t.containerInfo),T=d.focusedElem,w=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&Og(T.ownerDocument.documentElement,T)){if(w!==null&&Hh(T)){var L=w.start,G=w.end;if(G===void 0&&(G=L),"selectionStart"in T)T.selectionStart=L,T.selectionEnd=Math.min(G,T.value.length);else{var K=T.ownerDocument||document,z=K&&K.defaultView||window;if(z.getSelection){var j=z.getSelection(),Ae=T.textContent.length,ye=Math.min(w.start,Ae),it=w.end===void 0?ye:Math.min(w.end,Ae);!j.extend&&ye>it&&(v=it,it=ye,ye=v);var x=Cg(T,ye),D=Cg(T,it);if(x&&D&&(j.rangeCount!==1||j.anchorNode!==x.node||j.anchorOffset!==x.offset||j.focusNode!==D.node||j.focusOffset!==D.offset)){var U=K.createRange();U.setStart(x.node,x.offset),j.removeAllRanges(),ye>it?(j.addRange(U),j.extend(D.node,D.offset)):(U.setEnd(D.node,D.offset),j.addRange(U))}}}}for(K=[],j=T;j=j.parentNode;)j.nodeType===1&&K.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<K.length;T++){var Y=K[T];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Ec=!!pd,yd=pd=null}finally{$e=h,ne.p=l,F.T=a}}t.current=i,Yt=2}}function Hy(){if(Yt===2){Yt=0;var t=Vr,i=Ba,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=ne.p;ne.p=2;var h=$e;$e|=4;try{Ty(t,i.alternate,i)}finally{$e=h,ne.p=l,F.T=a}}Yt=3}}function Fy(){if(Yt===4||Yt===3){Yt=0,ue();var t=Vr,i=Ba,a=qa,l=Ny;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Yt=5:(Yt=0,Ba=Vr=null,Gy(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Mr=null),oa(a),i=i.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(rt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=ne.p,ne.p=2,F.T=null;try{for(var d=t.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{F.T=i,ne.p=h}}(qa&3)!==0&&uc(),Ti(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===nd?cl++:(cl=0,nd=t):cl=0,hl(0)}}function Gy(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Fo(i)))}function uc(t){return qy(),Hy(),Fy(),Yy()}function Yy(){if(Yt!==5)return!1;var t=Vr,i=ed;ed=0;var a=oa(qa),l=F.T,h=ne.p;try{ne.p=32>a?32:a,F.T=null,a=td,td=null;var d=Vr,v=qa;if(Yt=0,Ba=Vr=null,qa=0,($e&6)!==0)throw Error(s(331));var T=$e;if($e|=4,Oy(d.current),Ry(d,d.current,v,a),$e=T,hl(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(rt,d)}catch{}return!0}finally{ne.p=h,F.T=l,Gy(t,i)}}function Ky(t,i,a){i=Vn(a,i),i=xf(t.stateNode,i,2),t=Sr(t,i,2),t!==null&&(xi(t,2),Ti(t))}function st(t,i,a){if(t.tag===3)Ky(t,t,a);else for(;i!==null;){if(i.tag===3){Ky(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Mr===null||!Mr.has(l))){t=Vn(a,t),a=Wp(2),l=Sr(i,a,2),l!==null&&(Zp(a,l,i,t),xi(l,2),Ti(l));break}}i=i.return}}function ad(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new GA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||($f=!0,h.add(a),t=$A.bind(null,t,i,a),i.then(t,t))}function $A(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,at===t&&(Be&a)===a&&(gt===4||gt===3&&(Be&62914560)===Be&&300>se()-Jf?($e&2)===0&&Ha(t,0):Wf|=a,ja===Be&&(ja=0)),Ti(t)}function Qy(t,i){i===0&&(i=To()),t=wa(t,i),t!==null&&(xi(t,i),Ti(t))}function WA(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Qy(t,a)}function ZA(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Qy(t,a)}function JA(t,i){return Ni(t,i)}var cc=null,Ga=null,od=!1,hc=!1,ld=!1,zs=0;function Ti(t){t!==Ga&&t.next===null&&(Ga===null?cc=Ga=t:Ga=Ga.next=t),hc=!0,od||(od=!0,tS())}function hl(t,i){if(!ld&&hc){ld=!0;do for(var a=!1,l=cc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Wt(42|t)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Zy(l,d))}else d=Be,d=aa(l,l===at?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||cs(l,d)||(a=!0,Zy(l,d));l=l.next}while(a);ld=!1}}function eS(){Xy()}function Xy(){hc=od=!1;var t=0;zs!==0&&(uS()&&(t=zs),zs=0);for(var i=se(),a=null,l=cc;l!==null;){var h=l.next,d=$y(l,i);d===0?(l.next=null,a===null?cc=h:a.next=h,h===null&&(Ga=a)):(a=l,(t!==0||(d&3)!==0)&&(hc=!0)),l=h}hl(t)}function $y(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Wt(d),T=1<<v,w=h[v];w===-1?((T&a)===0||(T&l)!==0)&&(h[v]=_o(T,i)):w<=i&&(t.expiredLanes|=T),d&=~T}if(i=at,a=Be,a=aa(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(We===2||We===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Mi(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||cs(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&Mi(l),oa(a)){case 2:case 8:a=Je;break;case 32:a=Fe;break;case 268435456:a=yn;break;default:a=Fe}return l=Wy.bind(null,t),a=Ni(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&Mi(l),t.callbackPriority=2,t.callbackNode=null,2}function Wy(t,i){if(Yt!==0&&Yt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(uc()&&t.callbackNode!==a)return null;var l=Be;return l=aa(t,t===at?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Vy(t,l,i),$y(t,se()),t.callbackNode!=null&&t.callbackNode===a?Wy.bind(null,t):null)}function Zy(t,i){if(uc())return null;Vy(t,i,!0)}function tS(){hS(function(){($e&6)!==0?Ni(Ie,eS):Xy()})}function ud(){return zs===0&&(zs=vo()),zs}function Jy(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:da(""+t)}function e_(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function nS(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=Jy((h[Et]||null).action),v=l.submitter;v&&(i=(i=v[Et]||null)?Jy(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new ma("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(zs!==0){var w=v?e_(h,v):new FormData(h);Of(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(T.preventDefault(),w=v?e_(h,v):new FormData(h),Of(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var cd=0;cd<Kh.length;cd++){var hd=Kh[cd],iS=hd.toLowerCase(),rS=hd[0].toUpperCase()+hd.slice(1);$n(iS,"on"+rS)}$n(Vg,"onAnimationEnd"),$n(xg,"onAnimationIteration"),$n(kg,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(EA,"onTransitionRun"),$n(AA,"onTransitionStart"),$n(SA,"onTransitionCancel"),$n(Pg,"onTransitionEnd"),Pi("onMouseEnter",["mouseout","mouseover"]),Pi("onMouseLeave",["mouseout","mouseover"]),Pi("onPointerEnter",["pointerout","pointerover"]),Pi("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function t_(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],w=T.instance,L=T.currentTarget;if(T=T.listener,w!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=L;try{d(h)}catch(G){Zu(G)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(T=l[v],w=T.instance,L=T.currentTarget,T=T.listener,w!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=L;try{d(h)}catch(G){Zu(G)}h.currentTarget=null,d=w}}}}function Pe(t,i){var a=i[So];a===void 0&&(a=i[So]=new Set);var l=t+"__bubble";a.has(l)||(n_(i,t,2,!1),a.add(l))}function fd(t,i,a){var l=0;i&&(l|=4),n_(a,t,l,i)}var fc="_reactListening"+Math.random().toString(36).slice(2);function dd(t){if(!t[fc]){t[fc]=!0,bo.forEach(function(a){a!=="selectionchange"&&(sS.has(a)||fd(a,!1,t),fd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fc]||(i[fc]=!0,fd("selectionchange",!1,i))}}function n_(t,i,a,l){switch(R_(i)){case 2:var h=MS;break;case 8:h=VS;break;default:h=Id}a=h.bind(null,i,a,t),h=void 0,!Nn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function md(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=ki(T),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue e}T=T.parentNode}}l=l.return}mu(function(){var L=d,G=Dn(a),K=[];e:{var z=Ug.get(t);if(z!==void 0){var j=ma,Ae=t;switch(t){case"keypress":if(hi(a)===0)break e;case"keydown":case"keyup":j=Ta;break;case"focusin":Ae="focus",j=ya;break;case"focusout":Ae="blur",j=ya;break;case"beforeblur":case"afterblur":j=ya;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Au;break;case Vg:case xg:case kg:j=_a;break;case Pg:j=bu;break;case"scroll":case"scrollend":j=gu;break;case"wheel":j=Ea;break;case"copy":case"cut":case"paste":j=va;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Po;break;case"toggle":case"beforetoggle":j=Ru}var ye=(i&4)!==0,it=!ye&&(t==="scroll"||t==="scrollend"),x=ye?z!==null?z+"Capture":null:z;ye=[];for(var D=L,U;D!==null;){var Y=D;if(U=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||U===null||x===null||(Y=_s(D,x),Y!=null&&ye.push(dl(D,Y,U))),it)break;D=D.return}0<ye.length&&(z=new j(z,Ae,null,a,G),K.push({event:z,listeners:ye}))}}if((i&7)===0){e:{if(z=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",z&&a!==zi&&(Ae=a.relatedTarget||a.fromElement)&&(ki(Ae)||Ae[Cn]))break e;if((j||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,j?(Ae=a.relatedTarget||a.toElement,j=L,Ae=Ae?ki(Ae):null,Ae!==null&&(it=u(Ae),ye=Ae.tag,Ae!==it||ye!==5&&ye!==27&&ye!==6)&&(Ae=null)):(j=null,Ae=L),j!==Ae)){if(ye=Mn,Y="onMouseLeave",x="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(ye=Po,Y="onPointerLeave",x="onPointerEnter",D="pointer"),it=j==null?z:oi(j),U=Ae==null?z:oi(Ae),z=new ye(Y,D+"leave",j,a,G),z.target=it,z.relatedTarget=U,Y=null,ki(G)===L&&(ye=new ye(x,D+"enter",Ae,a,G),ye.target=U,ye.relatedTarget=it,Y=ye),it=Y,j&&Ae)t:{for(ye=j,x=Ae,D=0,U=ye;U;U=Ya(U))D++;for(U=0,Y=x;Y;Y=Ya(Y))U++;for(;0<D-U;)ye=Ya(ye),D--;for(;0<U-D;)x=Ya(x),U--;for(;D--;){if(ye===x||x!==null&&ye===x.alternate)break t;ye=Ya(ye),x=Ya(x)}ye=null}else ye=null;j!==null&&i_(K,z,j,ye,!1),Ae!==null&&it!==null&&i_(K,it,Ae,ye,!0)}}e:{if(z=L?oi(L):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var ce=Ag;else if(Dt(z))if(Sg)ce=_A;else{ce=pA;var xe=gA}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&Oo(L.elementType)&&(ce=Ag):ce=yA;if(ce&&(ce=ce(t,L))){Fi(K,ce,a,G);break e}xe&&xe(t,z,L),t==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&_r(z,"number",z.value)}switch(xe=L?oi(L):window,t){case"focusin":(Dt(xe)||xe.contentEditable==="true")&&(Aa=xe,Fh=L,zo=null);break;case"focusout":zo=Fh=Aa=null;break;case"mousedown":Gh=!0;break;case"contextmenu":case"mouseup":case"dragend":Gh=!1,Ng(K,a,G);break;case"selectionchange":if(TA)break;case"keydown":case"keyup":Ng(K,a,G)}var fe;if(mi)e:{switch(t){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else ze?B(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(_&&a.locale!=="ko"&&(ze||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&ze&&(fe=No()):(ci=G,vr="value"in ci?ci.value:ci.textContent,ze=!0)),xe=dc(L,_e),0<xe.length&&(_e=new xo(_e,t,null,a,G),K.push({event:_e,listeners:xe}),fe?_e.data=fe:(fe=te(a),fe!==null&&(_e.data=fe)))),(fe=g?Ot(t,a):je(t,a))&&(_e=dc(L,"onBeforeInput"),0<_e.length&&(xe=new xo("onBeforeInput","beforeinput",null,a,G),K.push({event:xe,listeners:_e}),xe.data=fe)),nS(K,t,L,a,G)}t_(K,i)})}function dl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function dc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=_s(t,a),h!=null&&l.unshift(dl(t,h,d)),h=_s(t,i),h!=null&&l.push(dl(t,h,d))),t.tag===3)return l;t=t.return}return[]}function Ya(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function i_(t,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,w=T.alternate,L=T.stateNode;if(T=T.tag,w!==null&&w===l)break;T!==5&&T!==26&&T!==27||L===null||(w=L,h?(L=_s(a,d),L!=null&&v.unshift(dl(a,L,w))):h||(L=_s(a,d),L!=null&&v.push(dl(a,L,w)))),a=a.return}v.length!==0&&t.push({event:i,listeners:v})}var aS=/\r\n?/g,oS=/\u0000|\uFFFD/g;function r_(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(oS,"")}function s_(t,i){return i=r_(i),r_(t)===i}function mc(){}function nt(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||On(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&On(t,""+l);break;case"className":li(t,"class",l);break;case"tabIndex":li(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":li(t,a,l);break;case"style":Co(t,l,d);break;case"data":if(i!=="object"){li(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=da(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&nt(t,i,"name",h.name,h,null),nt(t,i,"formEncType",h.formEncType,h,null),nt(t,i,"formMethod",h.formMethod,h,null),nt(t,i,"formTarget",h.formTarget,h,null)):(nt(t,i,"encType",h.encType,h,null),nt(t,i,"method",h.method,h,null),nt(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=da(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=mc);break;case"onScroll":l!=null&&Pe("scroll",t);break;case"onScrollEnd":l!=null&&Pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=da(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Pe("beforetoggle",t),Pe("toggle",t),yr(t,"popover",l);break;case"xlinkActuate":Ht(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ht(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ht(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ht(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ht(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ht(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":yr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Uh.get(a)||a,yr(t,a,l))}}function gd(t,i,a,l,h,d){switch(a){case"style":Co(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?On(t,l):(typeof l=="number"||typeof l=="bigint")&&On(t,""+l);break;case"onScroll":l!=null&&Pe("scroll",t);break;case"onScrollEnd":l!=null&&Pe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=mc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!la.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[Et]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):yr(t,a,l)}}}function Kt(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",t),Pe("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:nt(t,i,d,v,a,null)}}h&&nt(t,i,"srcSet",a.srcSet,a,null),l&&nt(t,i,"src",a.src,a,null);return;case"input":Pe("invalid",t);var T=d=v=h=null,w=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":v=G;break;case"checked":w=G;break;case"defaultChecked":L=G;break;case"value":d=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:nt(t,i,l,G,a,null)}}gs(t,d,T,w,L,v,h,!1),fa(t);return;case"select":Pe("invalid",t),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:nt(t,i,h,T,a,null)}i=d,a=v,t.multiple=!!l,i!=null?Li(t,!!l,i,!1):a!=null&&Li(t,!!l,a,!0);return;case"textarea":Pe("invalid",t),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:nt(t,i,v,T,a,null)}ps(t,l,h,d),fa(t);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:nt(t,i,w,l,a,null)}return;case"dialog":Pe("beforetoggle",t),Pe("toggle",t),Pe("cancel",t),Pe("close",t);break;case"iframe":case"object":Pe("load",t);break;case"video":case"audio":for(l=0;l<fl.length;l++)Pe(fl[l],t);break;case"image":Pe("error",t),Pe("load",t);break;case"details":Pe("toggle",t);break;case"embed":case"source":case"link":Pe("error",t),Pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:nt(t,i,L,l,a,null)}return;default:if(Oo(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&gd(t,i,G,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&nt(t,i,T,l,a,null))}function lS(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,w=null,L=null,G=null;for(j in a){var K=a[j];if(a.hasOwnProperty(j)&&K!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":w=K;default:l.hasOwnProperty(j)||nt(t,i,j,null,l,K)}}for(var z in l){var j=l[z];if(K=a[z],l.hasOwnProperty(z)&&(j!=null||K!=null))switch(z){case"type":d=j;break;case"name":h=j;break;case"checked":L=j;break;case"defaultChecked":G=j;break;case"value":v=j;break;case"defaultValue":T=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:j!==K&&nt(t,i,z,j,l,K)}}vn(t,v,T,w,L,G,d,h);return;case"select":j=v=T=z=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":j=w;default:l.hasOwnProperty(d)||nt(t,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==w&&nt(t,i,h,d,l,w)}i=T,a=v,l=j,z!=null?Li(t,!!a,z,!1):!!l!=!!a&&(i!=null?Li(t,!!a,i,!0):Li(t,!!a,a?[]:"",!1));return;case"textarea":j=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:nt(t,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&nt(t,i,v,h,l,d)}et(t,z,j);return;case"option":for(var Ae in a)if(z=a[Ae],a.hasOwnProperty(Ae)&&z!=null&&!l.hasOwnProperty(Ae))switch(Ae){case"selected":t.selected=!1;break;default:nt(t,i,Ae,null,l,z)}for(w in l)if(z=l[w],j=a[w],l.hasOwnProperty(w)&&z!==j&&(z!=null||j!=null))switch(w){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:nt(t,i,w,z,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in a)z=a[ye],a.hasOwnProperty(ye)&&z!=null&&!l.hasOwnProperty(ye)&&nt(t,i,ye,null,l,z);for(L in l)if(z=l[L],j=a[L],l.hasOwnProperty(L)&&z!==j&&(z!=null||j!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:nt(t,i,L,z,l,j)}return;default:if(Oo(i)){for(var it in a)z=a[it],a.hasOwnProperty(it)&&z!==void 0&&!l.hasOwnProperty(it)&&gd(t,i,it,void 0,l,z);for(G in l)z=l[G],j=a[G],!l.hasOwnProperty(G)||z===j||z===void 0&&j===void 0||gd(t,i,G,z,l,j);return}}for(var x in a)z=a[x],a.hasOwnProperty(x)&&z!=null&&!l.hasOwnProperty(x)&&nt(t,i,x,null,l,z);for(K in l)z=l[K],j=a[K],!l.hasOwnProperty(K)||z===j||z==null&&j==null||nt(t,i,K,z,l,j)}var pd=null,yd=null;function gc(t){return t.nodeType===9?t:t.ownerDocument}function a_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function _d(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var vd=null;function uS(){var t=window.event;return t&&t.type==="popstate"?t===vd?!1:(vd=t,!0):(vd=null,!1)}var l_=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,u_=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof u_<"u"?function(t){return u_.resolve(null).then(t).catch(fS)}:l_;function fS(t){setTimeout(function(){throw t})}function kr(t){return t==="head"}function c_(t,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=t.ownerDocument;if(a&1&&ml(v.documentElement),a&2&&ml(v.body),a&4)for(a=v.head,ml(a),v=a.firstChild;v;){var T=v.nextSibling,w=v.nodeName;v[hs]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){t.removeChild(d),Al(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Al(i)}function Td(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Td(a),pr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function dS(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[hs])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Zn(t.nextSibling),t===null)break}return null}function mS(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Zn(t.nextSibling),t===null))return null;return t}function Ed(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function gS(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Zn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Ad=null;function h_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function f_(t,i,a){switch(i=gc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function ml(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);pr(t)}var zn=new Map,d_=new Set;function pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ir=ne.d;ne.d={f:pS,r:yS,D:_S,C:vS,L:TS,m:ES,X:SS,S:AS,M:bS};function pS(){var t=ir.f(),i=oc();return t||i}function yS(t){var i=ai(t);i!==null&&i.tag===5&&i.type==="form"?Vp(i):ir.r(t)}var Ka=typeof document>"u"?null:document;function m_(t,i,a){var l=Ka;if(l&&typeof i=="string"&&i){var h=At(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),d_.has(h)||(d_.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Kt(i,"link",t),pt(i),l.head.appendChild(i)))}}function _S(t){ir.D(t),m_("dns-prefetch",t,null)}function vS(t,i){ir.C(t,i),m_("preconnect",t,i)}function TS(t,i,a){ir.L(t,i,a);var l=Ka;if(l&&t&&i){var h='link[rel="preload"][as="'+At(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+At(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+At(a.imageSizes)+'"]')):h+='[href="'+At(t)+'"]';var d=h;switch(i){case"style":d=Qa(t);break;case"script":d=Xa(t)}zn.has(d)||(t=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),zn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(gl(d))||i==="script"&&l.querySelector(pl(d))||(i=l.createElement("link"),Kt(i,"link",t),pt(i),l.head.appendChild(i)))}}function ES(t,i){ir.m(t,i);var a=Ka;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+At(l)+'"][href="'+At(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Xa(t)}if(!zn.has(d)&&(t=E({rel:"modulepreload",href:t},i),zn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pl(d)))return}l=a.createElement("link"),Kt(l,"link",t),pt(l),a.head.appendChild(l)}}}function AS(t,i,a){ir.S(t,i,a);var l=Ka;if(l&&t){var h=sn(l).hoistableStyles,d=Qa(t);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(gl(d)))T.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":i},a),(a=zn.get(d))&&Sd(t,a);var w=v=l.createElement("link");pt(w),Kt(w,"link",t),w._p=new Promise(function(L,G){w.onload=L,w.onerror=G}),w.addEventListener("load",function(){T.loading|=1}),w.addEventListener("error",function(){T.loading|=2}),T.loading|=4,yc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function SS(t,i){ir.X(t,i);var a=Ka;if(a&&t){var l=sn(a).hoistableScripts,h=Xa(t),d=l.get(h);d||(d=a.querySelector(pl(h)),d||(t=E({src:t,async:!0},i),(i=zn.get(h))&&bd(t,i),d=a.createElement("script"),pt(d),Kt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function bS(t,i){ir.M(t,i);var a=Ka;if(a&&t){var l=sn(a).hoistableScripts,h=Xa(t),d=l.get(h);d||(d=a.querySelector(pl(h)),d||(t=E({src:t,async:!0,type:"module"},i),(i=zn.get(h))&&bd(t,i),d=a.createElement("script"),pt(d),Kt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function g_(t,i,a,l){var h=(h=Ee.current)?pc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Qa(a.href),a=sn(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Qa(a.href);var d=sn(h).hoistableStyles,v=d.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=h.querySelector(gl(t)))&&!d._p&&(v.instance=d,v.state.loading=5),zn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zn.set(t,a),d||wS(h,t,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Xa(a),a=sn(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Qa(t){return'href="'+At(t)+'"'}function gl(t){return'link[rel="stylesheet"]['+t+"]"}function p_(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function wS(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Kt(i,"link",a),pt(i),t.head.appendChild(i))}function Xa(t){return'[src="'+At(t)+'"]'}function pl(t){return"script[async]"+t}function y_(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+At(a.href)+'"]');if(l)return i.instance=l,pt(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),pt(l),Kt(l,"style",h),yc(l,a.precedence,t),i.instance=l;case"stylesheet":h=Qa(a.href);var d=t.querySelector(gl(h));if(d)return i.state.loading|=4,i.instance=d,pt(d),d;l=p_(a),(h=zn.get(h))&&Sd(l,h),d=(t.ownerDocument||t).createElement("link"),pt(d);var v=d;return v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),Kt(d,"link",l),i.state.loading|=4,yc(d,a.precedence,t),i.instance=d;case"script":return d=Xa(a.src),(h=t.querySelector(pl(d)))?(i.instance=h,pt(h),h):(l=a,(h=zn.get(d))&&(l=E({},a),bd(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),pt(h),Kt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,yc(l,a.precedence,t));return i.instance}function yc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function Sd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function bd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var _c=null;function __(t,i,a){if(_c===null){var l=new Map,h=_c=new Map;h.set(a,l)}else h=_c,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[hs]||d[Ct]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=t+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function v_(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function RS(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function T_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var yl=null;function IS(){}function CS(t,i,a){if(yl===null)throw Error(s(475));var l=yl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Qa(a.href),d=t.querySelector(gl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=vc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,pt(d);return}d=t.ownerDocument||t,a=p_(a),(h=zn.get(h))&&Sd(a,h),d=d.createElement("link"),pt(d);var v=d;v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),Kt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=vc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function OS(){if(yl===null)throw Error(s(475));var t=yl;return t.stylesheets&&t.count===0&&wd(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&wd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function vc(){if(this.count--,this.count===0){if(this.stylesheets)wd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Tc=null;function wd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Tc=new Map,i.forEach(DS,t),Tc=null,vc.call(t))}function DS(t,i){if(!(i.state.loading&4)){var a=Tc.get(t);if(a)var l=a.get(null);else{a=new Map,Tc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=vc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var _l={$$typeof:ae,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function NS(t,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.hiddenUpdates=Vi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function E_(t,i,a,l,h,d,v,T,w,L,G,K){return t=new NS(t,i,a,v,T,w,L,K),i=1,d===!0&&(i|=24),d=En(3,null,null,i),t.current=d,d.stateNode=t,i=af(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},cf(d),t}function A_(t){return t?(t=Ra,t):Ra}function S_(t,i,a,l,h,d){h=A_(h),l.context===null?l.context=h:l.pendingContext=h,l=Ar(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Sr(t,l,i),a!==null&&(Rn(a,t,i),Qo(a,t,i))}function b_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Rd(t,i){b_(t,i),(t=t.alternate)&&b_(t,i)}function w_(t){if(t.tag===13){var i=wa(t,67108864);i!==null&&Rn(i,t,67108864),Rd(t,67108864)}}var Ec=!0;function MS(t,i,a,l){var h=F.T;F.T=null;var d=ne.p;try{ne.p=2,Id(t,i,a,l)}finally{ne.p=d,F.T=h}}function VS(t,i,a,l){var h=F.T;F.T=null;var d=ne.p;try{ne.p=8,Id(t,i,a,l)}finally{ne.p=d,F.T=h}}function Id(t,i,a,l){if(Ec){var h=Cd(l);if(h===null)md(t,i,l,Ac,a),I_(t,l);else if(kS(h,t,i,a,l))l.stopPropagation();else if(I_(t,l),i&4&&-1<xS.indexOf(t)){for(;h!==null;){var d=ai(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Kn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var w=1<<31-Wt(v);T.entanglements[1]|=w,v&=~w}Ti(d),($e&6)===0&&(sc=se()+500,hl(0))}}break;case 13:T=wa(d,2),T!==null&&Rn(T,d,2),oc(),Rd(d,2)}if(d=Cd(l),d===null&&md(t,i,l,Ac,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else md(t,i,l,null,a)}}function Cd(t){return t=Dn(t),Od(t)}var Ac=null;function Od(t){if(Ac=null,t=ki(t),t!==null){var i=u(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ac=t,null}function R_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(be()){case Ie:return 2;case Je:return 8;case Fe:case pn:return 32;case yn:return 268435456;default:return 32}default:return 32}}var Dd=!1,Pr=null,Ur=null,Lr=null,vl=new Map,Tl=new Map,zr=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I_(t,i){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":vl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(i.pointerId)}}function El(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=ai(i),i!==null&&w_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function kS(t,i,a,l,h){switch(i){case"focusin":return Pr=El(Pr,t,i,a,l,h),!0;case"dragenter":return Ur=El(Ur,t,i,a,l,h),!0;case"mouseover":return Lr=El(Lr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return vl.set(d,El(vl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Tl.set(d,El(Tl.get(d)||null,t,i,a,l,h)),!0}return!1}function C_(t){var i=ki(t.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,ou(t.priority,function(){if(a.tag===13){var l=wn();l=dr(l);var h=wa(a,l);h!==null&&Rn(h,a,l),Rd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Cd(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);zi=l,a.target.dispatchEvent(l),zi=null}else return i=ai(a),i!==null&&w_(i),t.blockedOn=a,!1;i.shift()}return!0}function O_(t,i,a){Sc(t)&&a.delete(i)}function PS(){Dd=!1,Pr!==null&&Sc(Pr)&&(Pr=null),Ur!==null&&Sc(Ur)&&(Ur=null),Lr!==null&&Sc(Lr)&&(Lr=null),vl.forEach(O_),Tl.forEach(O_)}function bc(t,i){t.blockedOn===i&&(t.blockedOn=null,Dd||(Dd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,PS)))}var wc=null;function D_(t){wc!==t&&(wc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){wc===t&&(wc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(Od(l||a)===null)continue;break}var d=ai(a);d!==null&&(t.splice(i,3),i-=3,Of(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Al(t){function i(w){return bc(w,t)}Pr!==null&&bc(Pr,t),Ur!==null&&bc(Ur,t),Lr!==null&&bc(Lr,t),vl.forEach(i),Tl.forEach(i);for(var a=0;a<zr.length;a++){var l=zr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<zr.length&&(a=zr[0],a.blockedOn===null);)C_(a),a.blockedOn===null&&zr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[Et]||null;if(typeof d=="function")v||D_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[Et]||null)T=v.formAction;else if(Od(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),D_(a)}}}function Nd(t){this._internalRoot=t}Rc.prototype.render=Nd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=wn();S_(a,l,t,i,null,null)},Rc.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;S_(t.current,2,null,t,null,null),oc(),i[Cn]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var i=mr();t={blockedOn:null,target:t,priority:i};for(var a=0;a<zr.length&&i!==0&&i<zr[a].priority;a++);zr.splice(a,0,t),a===0&&C_(t)}};var N_=e.version;if(N_!=="19.1.0")throw Error(s(527,N_,"19.1.0"));ne.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var US={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{rt=Ic.inject(US),Ye=Ic}catch{}}return bl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Kp,d=Qp,v=Xp,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=E_(t,1,!1,null,null,a,l,h,d,v,T,null),t[Cn]=i.current,dd(t),new Nd(i)},bl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Kp,v=Qp,T=Xp,w=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=E_(t,1,!0,i,a??null,l,h,d,v,T,w,L),i.context=A_(null),a=i.current,l=wn(),l=dr(l),h=Ar(l),h.callback=null,Sr(a,h,l),a=l,i.current.lanes=a,xi(i,a),Ti(i),t[Cn]=i.current,dd(t),new Rc(i)},bl.version="19.1.0",bl}var B_;function KS(){if(B_)return xd.exports;B_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xd.exports=YS(),xd.exports}var QS=KS();const XS=()=>{};var q_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},$S=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},w0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,C=(u&3)<<4|m>>4;let I=(m&15)<<2|y>>6,q=y&63;p||(q=64,f||(I=64)),s.push(n[E],n[C],n[I],n[q])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(b0(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):$S(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const C=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||C==null)throw new WS;const I=u<<2|m>>4;if(s.push(I),y!==64){const q=m<<4&240|y>>2;if(s.push(q),C!==64){const J=y<<6&192|C;s.push(J)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class WS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZS=function(r){const e=b0(r);return w0.encodeByteArray(e,!0)},Yc=function(r){return ZS(r).replace(/\./g,"")},R0=function(r){try{return w0.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=()=>JS().__FIREBASE_DEFAULTS__,tb=()=>{if(typeof process>"u"||typeof q_>"u")return;const r=q_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},nb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&R0(r[1]);return e&&JSON.parse(e)},mh=()=>{try{return XS()||eb()||tb()||nb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},I0=r=>{var e,n;return(n=(e=mh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},ib=r=>{const e=I0(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},C0=()=>{var r;return(r=mh())===null||r===void 0?void 0:r.config},O0=r=>{var e;return(e=mh())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function D0(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Yc(JSON.stringify(n)),Yc(JSON.stringify(f)),""].join(".")}const Nl={};function ab(){const r={prod:[],emulator:[]};for(const e of Object.keys(Nl))Nl[e]?r.emulator.push(e):r.prod.push(e);return r}function ob(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let H_=!1;function N0(r,e){if(typeof window>"u"||typeof document>"u"||!co(window.location.host)||Nl[r]===e||Nl[r]||H_)return;Nl[r]=e;function n(I){return`__firebase__banner__${I}`}const s="__firebase__banner",u=ab().prod.length>0;function f(){const I=document.getElementById(s);I&&I.remove()}function m(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function p(I,q){I.setAttribute("width","24"),I.setAttribute("id",q),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{H_=!0,f()},I}function E(I,q){I.setAttribute("id",q),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function C(){const I=ob(s),q=n("text"),J=document.getElementById(q)||document.createElement("span"),re=n("learnmore"),Z=document.getElementById(re)||document.createElement("a"),Se=n("preprendIcon"),le=document.getElementById(Se)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ae=I.element;m(ae),E(Z,re);const Ve=y();p(le,Se),ae.append(le,J,Z,Ve),document.body.appendChild(ae)}u?(J.innerText="Preview backend disconnected.",le.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(le.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,J.innerText="Preview backend running in this workspace."),J.setAttribute("id",q)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function ub(){var r;const e=(r=mh())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wm(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function hb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fb(){const r=rn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function db(){return!ub()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rm(){try{return typeof indexedDB=="object"}catch{return!1}}function Im(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function M0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="FirebaseError";class ii extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mb,Object.setPrototypeOf(this,ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?gb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new ii(o,m,s)}}function gb(r,e){return r.replace(pb,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const pb=/\{\$([^}]+)}/g;function yb(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function $r(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(F_(u)&&F_(f)){if(!$r(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function F_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function wl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Rl(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function _b(r,e){const n=new vb(r,e);return n.subscribe.bind(n)}class vb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Tb(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Ld),o.error===void 0&&(o.error=Ld),o.complete===void 0&&(o.complete=Ld);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tb(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Ld(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=1e3,Ab=2,Sb=4*60*60*1e3,bb=.5;function G_(r,e=Eb,n=Ab){const s=e*Math.pow(n,r),o=Math.round(bb*s*(Math.random()-.5)*2);return Math.min(Sb,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(r){return r&&r._delegate?r._delegate:r}class ti{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),o=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ib(e))try{this.getOrInitializeService({instanceIdentifier:Hs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hs){return this.instances.has(e)}getOptions(e=Hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&e(f,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Hs){return this.component?this.component.multipleInstances?e:Hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rb(r){return r===Hs?void 0:r}function Ib(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ue||(Ue={}));const Ob={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},Db=Ue.INFO,Nb={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},Mb=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=Nb[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gh{constructor(e){this.name=e,this._logLevel=Db,this._logHandler=Mb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ob[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const Vb=(r,e)=>e.some(n=>r instanceof n);let Y_,K_;function xb(){return Y_||(Y_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kb(){return K_||(K_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const V0=new WeakMap,Zd=new WeakMap,x0=new WeakMap,zd=new WeakMap,Cm=new WeakMap;function Pb(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Yr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&V0.set(n,r)}).catch(()=>{}),Cm.set(e,r),e}function Ub(r){if(Zd.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Zd.set(r,e)}let Jd={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Zd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||x0.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Lb(r){Jd=r(Jd)}function zb(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(jd(this),e,...n);return x0.set(s,e.sort?e.sort():[e]),Yr(s)}:kb().includes(r)?function(...e){return r.apply(jd(this),e),Yr(V0.get(this))}:function(...e){return Yr(r.apply(jd(this),e))}}function jb(r){return typeof r=="function"?zb(r):(r instanceof IDBTransaction&&Ub(r),Vb(r,xb())?new Proxy(r,Jd):r)}function Yr(r){if(r instanceof IDBRequest)return Pb(r);if(zd.has(r))return zd.get(r);const e=jb(r);return e!==r&&(zd.set(r,e),Cm.set(e,r)),e}const jd=r=>Cm.get(r);function k0(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=Yr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Yr(f.result),p.oldVersion,p.newVersion,Yr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const Bb=["get","getKey","getAll","getAllKeys","count"],qb=["put","add","delete","clear"],Bd=new Map;function Q_(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Bd.get(e))return Bd.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=qb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Bb.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return Bd.set(e,u),u}Lb(r=>({...r,get:(e,n,s)=>Q_(e,n)||r.get(e,n,s),has:(e,n)=>!!Q_(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Fb(r){const e=r.getComponent();return e?.type==="VERSION"}const em="@firebase/app",X_="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new gh("@firebase/app"),Gb="@firebase/app-compat",Yb="@firebase/analytics-compat",Kb="@firebase/analytics",Qb="@firebase/app-check-compat",Xb="@firebase/app-check",$b="@firebase/auth",Wb="@firebase/auth-compat",Zb="@firebase/database",Jb="@firebase/data-connect",e1="@firebase/database-compat",t1="@firebase/functions",n1="@firebase/functions-compat",i1="@firebase/installations",r1="@firebase/installations-compat",s1="@firebase/messaging",a1="@firebase/messaging-compat",o1="@firebase/performance",l1="@firebase/performance-compat",u1="@firebase/remote-config",c1="@firebase/remote-config-compat",h1="@firebase/storage",f1="@firebase/storage-compat",d1="@firebase/firestore",m1="@firebase/ai",g1="@firebase/firestore-compat",p1="firebase",y1="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="[DEFAULT]",_1={[em]:"fire-core",[Gb]:"fire-core-compat",[Kb]:"fire-analytics",[Yb]:"fire-analytics-compat",[Xb]:"fire-app-check",[Qb]:"fire-app-check-compat",[$b]:"fire-auth",[Wb]:"fire-auth-compat",[Zb]:"fire-rtdb",[Jb]:"fire-data-connect",[e1]:"fire-rtdb-compat",[t1]:"fire-fn",[n1]:"fire-fn-compat",[i1]:"fire-iid",[r1]:"fire-iid-compat",[s1]:"fire-fcm",[a1]:"fire-fcm-compat",[o1]:"fire-perf",[l1]:"fire-perf-compat",[u1]:"fire-rc",[c1]:"fire-rc-compat",[h1]:"fire-gcs",[f1]:"fire-gcs-compat",[d1]:"fire-fst",[g1]:"fire-fst-compat",[m1]:"fire-vertex","fire-js":"fire-js",[p1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new Map,v1=new Map,nm=new Map;function $_(r,e){try{r.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function Ci(r){const e=r.name;if(nm.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;nm.set(e,r);for(const n of Kc.values())$_(n,r);for(const n of v1.values())$_(n,r);return!0}function ea(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function jn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kr=new Js("app","Firebase",T1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=y1;function P0(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:tm,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw Kr.create("bad-app-name",{appName:String(o)});if(n||(n=C0()),!n)throw Kr.create("no-options");const u=Kc.get(o);if(u){if($r(n,u.options)&&$r(s,u.config))return u;throw Kr.create("duplicate-app",{appName:o})}const f=new Cb(o);for(const p of nm.values())f.addComponent(p);const m=new E1(n,s,f);return Kc.set(o,m),m}function Om(r=tm){const e=Kc.get(r);if(!e&&r===tm&&C0())return P0();if(!e)throw Kr.create("no-app",{appName:r});return e}function Hn(r,e,n){var s;let o=(s=_1[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=e.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(m.join(" "));return}Ci(new ti(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1="firebase-heartbeat-database",S1=1,zl="firebase-heartbeat-store";let qd=null;function U0(){return qd||(qd=k0(A1,S1,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(zl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Kr.create("idb-open",{originalErrorMessage:r.message})})),qd}async function b1(r){try{const n=(await U0()).transaction(zl),s=await n.objectStore(zl).get(L0(r));return await n.done,s}catch(e){if(e instanceof ii)ur.warn(e.message);else{const n=Kr.create("idb-get",{originalErrorMessage:e?.message});ur.warn(n.message)}}}async function W_(r,e){try{const s=(await U0()).transaction(zl,"readwrite");await s.objectStore(zl).put(e,L0(r)),await s.done}catch(n){if(n instanceof ii)ur.warn(n.message);else{const s=Kr.create("idb-set",{originalErrorMessage:n?.message});ur.warn(s.message)}}}function L0(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=1024,R1=30;class I1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new O1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Z_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>R1){const f=D1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ur.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Z_(),{heartbeatsToSend:s,unsentEntries:o}=C1(this._heartbeatsCache.heartbeats),u=Yc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return ur.warn(n),""}}}function Z_(){return new Date().toISOString().substring(0,10)}function C1(r,e=w1){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),J_(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),J_(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class O1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rm()?Im().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await b1(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return W_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return W_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function J_(r){return Yc(JSON.stringify({version:2,heartbeats:r})).length}function D1(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(r){Ci(new ti("platform-logger",e=>new Hb(e),"PRIVATE")),Ci(new ti("heartbeat",e=>new I1(e),"PRIVATE")),Hn(em,X_,r),Hn(em,X_,"esm2017"),Hn("fire-js","")}N1("");var M1="firebase",V1="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(M1,V1,"app");function Dm(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function z0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const x1=z0,j0=new Js("auth","Firebase",z0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new gh("@firebase/auth");function k1(r,...e){Qc.logLevel<=Ue.WARN&&Qc.warn(`Auth (${ho}): ${r}`,...e)}function Pc(r,...e){Qc.logLevel<=Ue.ERROR&&Qc.error(`Auth (${ho}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(r,...e){throw Nm(r,...e)}function Ai(r,...e){return Nm(r,...e)}function B0(r,e,n){const s=Object.assign(Object.assign({},x1()),{[e]:n});return new Js("auth","Firebase",s).create(e,{appName:r.name})}function or(r){return B0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nm(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return j0.create(r,...e)}function ve(r,e,...n){if(!r)throw Nm(e,...n)}function sr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Pc(e),new Error(e)}function cr(r,e){r||sr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function P1(){return ev()==="http:"||ev()==="https:"}function ev(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(P1()||wm()||"connection"in navigator)?navigator.onLine:!0}function L1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.shortDelay=e,this.longDelay=n,cr(n>e,"Short delay should be less than long delay!"),this.isMobile=lb()||hb()}get(){return U1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(r,e){cr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],B1=new Wl(3e4,6e4);function rs(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ss(r,e,n,s,o={}){return H0(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=$l(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:p},u);return cb()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&co(r.emulatorConfig.host)&&(y.credentials="include"),q0.fetch()(await F0(r,r.config.apiHost,n,m),y)})}async function H0(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},z1),e);try{const o=new H1(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Cc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw Cc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw Cc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw B0(r,E,y);ni(r,E)}}catch(o){if(o instanceof ii)throw o;ni(r,"network-request-failed",{message:String(o)})}}async function Zl(r,e,n,s,o={}){const u=await ss(r,e,n,s,o);return"mfaPendingCredential"in u&&ni(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function F0(r,e,n,s){const o=`${e}${n}?${s}`,u=r,f=u.config.emulator?Mm(r.config,o):`${r.config.apiScheme}://${o}`;return j1.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function q1(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class H1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ai(this.auth,"network-request-failed")),B1.get())})}}function Cc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Ai(r,e,s);return o.customData._tokenResponse=n,o}function tv(r){return r!==void 0&&r.enterprise!==void 0}class F1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return q1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function G1(r,e){return ss(r,"GET","/v2/recaptchaConfig",rs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y1(r,e){return ss(r,"POST","/v1/accounts:delete",e)}async function Xc(r,e){return ss(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function K1(r,e=!1){const n=un(r),s=await n.getIdToken(e),o=Vm(s);ve(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:Ml(Hd(o.auth_time)),issuedAtTime:Ml(Hd(o.iat)),expirationTime:Ml(Hd(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Hd(r){return Number(r)*1e3}function Vm(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Pc("JWT malformed, contained fewer than 3 sections"),null;try{const o=R0(n);return o?JSON.parse(o):(Pc("Failed to decode base64 JWT payload"),null)}catch(o){return Pc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function nv(r){const e=Vm(r);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ii&&Q1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function Q1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ml(this.lastLoginAt),this.creationTime=Ml(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(r){var e;const n=r.auth,s=await r.getIdToken(),o=await jl(r,Xc(n,{idToken:s}));ve(o?.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?G0(u.providerUserInfo):[],m=W1(r.providerData,f),p=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!m?.length,E=p?y:!1,C={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new rm(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,C)}async function $1(r){const e=un(r);await $c(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function W1(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function G0(r){return r.map(e=>{var{providerId:n}=e,s=Dm(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(r,e){const n=await H0(r,{},async()=>{const s=$l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await F0(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return r.emulatorConfig&&co(r.emulatorConfig.host)&&(p.credentials="include"),q0.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function J1(r,e){return ss(r,"POST","/v2/accounts:revokeToken",rs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=nv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await Z1(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new to;return s&&(ve(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(ve(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(r,e){ve(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,u=Dm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new rm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await jl(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return K1(this,e)}reload(){return $1(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $c(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(or(this.auth));const e=await this.getIdToken();return await jl(this,Y1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,u,f,m,p,y,E;const C=(s=n.displayName)!==null&&s!==void 0?s:void 0,I=(o=n.email)!==null&&o!==void 0?o:void 0,q=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,J=(f=n.photoURL)!==null&&f!==void 0?f:void 0,re=(m=n.tenantId)!==null&&m!==void 0?m:void 0,Z=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Se=(y=n.createdAt)!==null&&y!==void 0?y:void 0,le=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ae,emailVerified:Ve,isAnonymous:ge,providerData:De,stsTokenManager:N}=n;ve(ae&&N,e,"internal-error");const S=to.fromJSON(this.name,N);ve(typeof ae=="string",e,"internal-error"),Br(C,e.name),Br(I,e.name),ve(typeof Ve=="boolean",e,"internal-error"),ve(typeof ge=="boolean",e,"internal-error"),Br(q,e.name),Br(J,e.name),Br(re,e.name),Br(Z,e.name),Br(Se,e.name),Br(le,e.name);const R=new Jn({uid:ae,auth:e,email:I,emailVerified:Ve,displayName:C,isAnonymous:ge,photoURL:J,phoneNumber:q,tenantId:re,stsTokenManager:S,createdAt:Se,lastLoginAt:le});return De&&Array.isArray(De)&&(R.providerData=De.map(M=>Object.assign({},M))),Z&&(R._redirectEventId=Z),R}static async _fromIdTokenResponse(e,n,s=!1){const o=new to;o.updateFromServerResponse(n);const u=new Jn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await $c(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];ve(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?G0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,m=new to;m.updateFromIdToken(s);const p=new Jn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new rm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=new Map;function ar(r){cr(r instanceof Function,"Expected a class definition");let e=iv.get(r);return e?(cr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,iv.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Y0.type="NONE";const rv=Y0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(r,e,n){return`firebase:${r}:${e}:${n}`}class no{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Uc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Uc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Xc(this.auth,{idToken:e}).catch(()=>{});return n?Jn._fromGetAccountInfoResponse(this.auth,n,e):null}return Jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new no(ar(rv),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||ar(rv);const f=Uc(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){let C;if(typeof E=="string"){const I=await Xc(e,{idToken:E}).catch(()=>{});if(!I)break;C=await Jn._fromGetAccountInfoResponse(e,I,E)}else C=Jn._fromJSON(e,E);y!==u&&(m=C),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new no(u,e,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new no(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(K0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Z0(e))return"Blackberry";if(J0(e))return"Webos";if(Q0(e))return"Safari";if((e.includes("chrome/")||X0(e))&&!e.includes("edge/"))return"Chrome";if(W0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function K0(r=rn()){return/firefox\//i.test(r)}function Q0(r=rn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function X0(r=rn()){return/crios\//i.test(r)}function $0(r=rn()){return/iemobile/i.test(r)}function W0(r=rn()){return/android/i.test(r)}function Z0(r=rn()){return/blackberry/i.test(r)}function J0(r=rn()){return/webos/i.test(r)}function xm(r=rn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ew(r=rn()){var e;return xm(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tw(){return fb()&&document.documentMode===10}function eT(r=rn()){return xm(r)||W0(r)||J0(r)||Z0(r)||/windows phone/i.test(r)||$0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(r,e=[]){let n;switch(r){case"Browser":n=sv(rn());break;case"Worker":n=`${sv(rn())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ho}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(r,e={}){return ss(r,"GET","/v2/passwordPolicy",rs(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=6;class sw{constructor(e){var n,s,o,u;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:rw,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,u,f,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new av(this),this.idTokenSubscription=new av(this),this.beforeStateQueue=new nw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ar(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Xc(this,{idToken:e}),s=await Jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o?._redirectEventId,p=await this.tryRedirectSignIn(e);(!f||f===m)&&p?.user&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $c(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=L1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(or(this));const n=e?un(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iw(this),n=new sw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await J1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ar(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&k1(`Error while retrieving App Check token: ${n.error}`),n?.token}}function ta(r){return un(r)}class av{constructor(e){this.auth=e,this.observer=null,this.addObserver=_b(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ph={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ow(r){ph=r}function nT(r){return ph.loadJS(r)}function lw(){return ph.recaptchaEnterpriseScript}function uw(){return ph.gapiScript}function cw(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class hw{constructor(){this.enterprise=new fw}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class fw{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const dw="recaptcha-enterprise",iT="NO_RECAPTCHA";class mw{constructor(e){this.type=dw,this.auth=ta(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{G1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new F1(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;tv(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(y=>{f(y)}).catch(()=>{f(iT)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hw().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&tv(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=lw();p.length!==0&&(p+=m),nT(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function ov(r,e,n,s=!1,o=!1){const u=new mw(r);let f;if(o)f=iT;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function sm(r,e,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await ov(r,e,n,n==="getOobCode");return s(r,f)}else return s(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await ov(r,e,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(r,e){const n=ea(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if($r(u,e??{}))return o;ni(o,"already-initialized")}return n.initialize({options:e})}function pw(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(ar);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function yw(r,e,n){const s=ta(r);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=rT(e),{host:f,port:m}=_w(e),p=m===null?"":`:${m}`,y={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve($r(y,s.config.emulator)&&$r(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,co(f)?(D0(`${u}//${f}${p}`),N0("Auth",!0)):vw()}function rT(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function _w(r){const e=rT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:lv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:lv(f)}}}function lv(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function vw(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sr("not implemented")}_getIdTokenResponse(e){return sr("not implemented")}_linkToIdToken(e,n){return sr("not implemented")}_getReauthenticationResolver(e){return sr("not implemented")}}async function Tw(r,e){return ss(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(r,e){return Zl(r,"POST","/v1/accounts:signInWithPassword",rs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(r,e){return Zl(r,"POST","/v1/accounts:signInWithEmailLink",rs(r,e))}async function Sw(r,e){return Zl(r,"POST","/v1/accounts:signInWithEmailLink",rs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends km{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Bl(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Bl(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sm(e,n,"signInWithPassword",Ew);case"emailLink":return Aw(e,{email:this._email,oobCode:this._password});default:ni(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sm(e,s,"signUpPassword",Tw);case"emailLink":return Sw(e,{idToken:n,email:this._email,oobCode:this._password});default:ni(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(r,e){return Zl(r,"POST","/v1/accounts:signInWithIdp",rs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="http://localhost";class Ks extends km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ni("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,u=Dm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Ks(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return io(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,io(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,io(e,n)}buildRequest(){const e={requestUri:bw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$l(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rw(r){const e=wl(Rl(r)).link,n=e?wl(Rl(e)).deep_link_id:null,s=wl(Rl(r)).deep_link_id;return(s?wl(Rl(s)).link:null)||s||n||e||r}class Pm{constructor(e){var n,s,o,u,f,m;const p=wl(Rl(e)),y=(n=p.apiKey)!==null&&n!==void 0?n:null,E=(s=p.oobCode)!==null&&s!==void 0?s:null,C=ww((o=p.mode)!==null&&o!==void 0?o:null);ve(y&&E&&C,"argument-error"),this.apiKey=y,this.operation=C,this.code=E,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=p.lang)!==null&&f!==void 0?f:null,this.tenantId=(m=p.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const n=Rw(e);try{return new Pm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.providerId=fo.PROVIDER_ID}static credential(e,n){return Bl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Pm.parseLink(n);return ve(s,"argument-error"),Bl._fromEmailAndCode(e,s.code,s.tenantId)}}fo.PROVIDER_ID="password";fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends sT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Jl{constructor(){super("facebook.com")}static credential(e){return Ks._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Jl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ks._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return rr.credential(n,s)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Jl{constructor(){super("github.com")}static credential(e){return Ks._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Jl{constructor(){super("twitter.com")}static credential(e,n){return Ks._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Fr.credential(n,s)}catch{return null}}}Fr.TWITTER_SIGN_IN_METHOD="twitter.com";Fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(r,e){return Zl(r,"POST","/v1/accounts:signUp",rs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await Jn._fromIdTokenResponse(e,s,o),f=uv(s);return new Qs({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=uv(s);return new Qs({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function uv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends ii{constructor(e,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Wc.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Wc(e,n,s,o)}}function aT(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Wc._fromErrorAndOperation(r,u,e,s):u})}async function Cw(r,e,n=!1){const s=await jl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Qs._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow(r,e,n=!1){const{auth:s}=r;if(jn(s.app))return Promise.reject(or(s));const o="reauthenticate";try{const u=await jl(r,aT(s,o,e,r),n);ve(u.idToken,s,"internal-error");const f=Vm(u.idToken);ve(f,s,"internal-error");const{sub:m}=f;return ve(r.uid===m,s,"user-mismatch"),Qs._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&ni(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(r,e,n=!1){if(jn(r.app))return Promise.reject(or(r));const s="signIn",o=await aT(r,s,e),u=await Qs._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function Dw(r,e){return oT(ta(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lT(r){const e=ta(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Nw(r,e,n){if(jn(r.app))return Promise.reject(or(r));const s=ta(r),f=await sm(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Iw).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&lT(r),p}),m=await Qs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function Mw(r,e,n){return jn(r.app)?Promise.reject(or(r)):Dw(un(r),fo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&lT(r),s})}function Vw(r,e,n,s){return un(r).onIdTokenChanged(e,n,s)}function xw(r,e,n){return un(r).beforeAuthStateChanged(e,n)}function kw(r,e,n,s){return un(r).onAuthStateChanged(e,n,s)}function Pw(r){return un(r).signOut()}const Zc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zc,"1"),this.storage.removeItem(Zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=1e3,Lw=10;class cT extends uT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);tw()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Lw):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Uw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cT.type="LOCAL";const zw=cT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT extends uT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hT.type="SESSION";const fT=hT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new yh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await jw(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=Um("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(C){const I=C;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(I.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(){return window}function qw(r){Si().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(){return typeof Si().WorkerGlobalScope<"u"&&typeof Si().importScripts=="function"}async function Hw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fw(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Gw(){return dT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="firebaseLocalStorageDb",Yw=1,Jc="firebaseLocalStorage",gT="fbase_key";class eu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _h(r,e){return r.transaction([Jc],e?"readwrite":"readonly").objectStore(Jc)}function Kw(){const r=indexedDB.deleteDatabase(mT);return new eu(r).toPromise()}function am(){const r=indexedDB.open(mT,Yw);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Jc,{keyPath:gT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Jc)?e(s):(s.close(),await Kw(),e(await am()))})})}async function cv(r,e,n){const s=_h(r,!0).put({[gT]:e,value:n});return new eu(s).toPromise()}async function Qw(r,e){const n=_h(r,!1).get(e),s=await new eu(n).toPromise();return s===void 0?null:s.value}function hv(r,e){const n=_h(r,!0).delete(e);return new eu(n).toPromise()}const Xw=800,$w=3;class pT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await am(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>$w)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yh._getInstance(Gw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Hw(),!this.activeServiceWorker)return;this.sender=new Bw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await am();return await cv(e,Zc,"1"),await hv(e,Zc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>cv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Qw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=_h(o,!1).getAll();return new eu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pT.type="LOCAL";const Ww=pT;new Wl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(r,e){return e?ar(e):(ve(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return io(e,this._buildIdpRequest())}_linkToIdToken(e,n){return io(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return io(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jw(r){return oT(r.auth,new Lm(r),r.bypassAuthState)}function eR(r){const{auth:e,user:n}=r;return ve(n,e,"internal-error"),Ow(n,new Lm(r),r.bypassAuthState)}async function tR(r){const{auth:e,user:n}=r;return ve(n,e,"internal-error"),Cw(n,new Lm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jw;case"linkViaPopup":case"linkViaRedirect":return tR;case"reauthViaPopup":case"reauthViaRedirect":return eR;default:ni(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=new Wl(2e3,1e4);class eo extends yT{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,eo.currentPopupAction&&eo.currentPopupAction.cancel(),eo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=Um();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ai(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ai(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,eo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ai(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nR.get())};e()}}eo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="pendingRedirect",Lc=new Map;class rR extends yT{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Lc.get(this.auth._key());if(!e){try{const s=await sR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Lc.set(this.auth._key(),e)}return this.bypassAuthState||Lc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sR(r,e){const n=lR(e),s=oR(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function aR(r,e){Lc.set(r._key(),e)}function oR(r){return ar(r._redirectPersistence)}function lR(r){return Uc(iR,r.config.apiKey,r.name)}async function uR(r,e,n=!1){if(jn(r.app))return Promise.reject(or(r));const s=ta(r),o=Zw(s,e),f=await new rR(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=10*60*1e3;class hR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!_T(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ai(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cR&&this.cachedEventUids.clear(),this.cachedEventUids.has(fv(e))}saveEventToCache(e){this.cachedEventUids.add(fv(e)),this.lastProcessedEventTime=Date.now()}}function fv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function _T({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function fR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _T(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(r,e={}){return ss(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gR=/^https?/;async function pR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await dR(r);for(const n of e)try{if(yR(n))return}catch{}ni(r,"unauthorized-domain")}function yR(r){const e=im(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!gR.test(n))return!1;if(mR.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new Wl(3e4,6e4);function dv(){const r=Si().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function vR(r){return new Promise((e,n)=>{var s,o,u;function f(){dv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dv(),n(Ai(r,"network-request-failed"))},timeout:_R.get()})}if(!((o=(s=Si().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Si().gapi)===null||u===void 0)&&u.load)f();else{const m=cw("iframefcb");return Si()[m]=()=>{gapi.load?f():n(Ai(r,"network-request-failed"))},nT(`${uw()}?onload=${m}`).catch(p=>n(p))}}).catch(e=>{throw zc=null,e})}let zc=null;function TR(r){return zc=zc||vR(r),zc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=new Wl(5e3,15e3),AR="__/auth/iframe",SR="emulator/auth/iframe",bR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RR(r){const e=r.config;ve(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Mm(e,SR):`https://${r.config.authDomain}/${AR}`,s={apiKey:e.apiKey,appName:r.name,v:ho},o=wR.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${$l(s).slice(1)}`}async function IR(r){const e=await TR(r),n=Si().gapi;return ve(n,r,"internal-error"),e.open({where:document.body,url:RR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bR,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Ai(r,"network-request-failed"),m=Si().setTimeout(()=>{u(f)},ER.get());function p(){Si().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OR=500,DR=600,NR="_blank",MR="http://localhost";class mv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VR(r,e,n,s=OR,o=DR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},CR),{width:s.toString(),height:o.toString(),top:u,left:f}),y=rn().toLowerCase();n&&(m=X0(y)?NR:n),K0(y)&&(e=e||MR,p.scrollbars="yes");const E=Object.entries(p).reduce((I,[q,J])=>`${I}${q}=${J},`,"");if(ew(y)&&m!=="_self")return xR(e||"",m),new mv(null);const C=window.open(e||"",m,E);ve(C,r,"popup-blocked");try{C.focus()}catch{}return new mv(C)}function xR(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="__/auth/handler",PR="emulator/auth/handler",UR=encodeURIComponent("fac");async function gv(r,e,n,s,o,u){ve(r.config.authDomain,r,"auth-domain-config-required"),ve(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:ho,eventId:o};if(e instanceof sT){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",yb(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,C]of Object.entries({}))f[E]=C}if(e instanceof Jl){const E=e.getScopes().filter(C=>C!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),y=p?`#${UR}=${encodeURIComponent(p)}`:"";return`${LR(r)}?${$l(m).slice(1)}${y}`}function LR({config:r}){return r.emulator?Mm(r,PR):`https://${r.authDomain}/${kR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="webStorageSupport";class zR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fT,this._completeRedirectFn=uR,this._overrideRedirectResult=aR}async _openPopup(e,n,s,o){var u;cr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await gv(e,n,s,im(),o);return VR(e,f,Um())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await gv(e,n,s,im(),o);return qw(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(cr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await IR(e),s=new hR(e);return n.register("authEvent",o=>(ve(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fd,{type:Fd},o=>{var u;const f=(u=o?.[0])===null||u===void 0?void 0:u[Fd];f!==void 0&&n(!!f),ni(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eT()||Q0()||xm()}}const jR=zR;var pv="@firebase/auth",yv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HR(r){Ci(new ti("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;ve(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tT(r)},y=new aw(s,o,u,p);return pw(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ci(new ti("auth-internal",e=>{const n=ta(e.getProvider("auth").getImmediate());return(s=>new BR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(pv,yv,qR(r)),Hn(pv,yv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=5*60,GR=O0("authIdTokenMaxAge")||FR;let _v=null;const YR=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>GR)return;const o=n?.token;_v!==o&&(_v=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function KR(r=Om()){const e=ea(r,"auth");if(e.isInitialized())return e.getImmediate();const n=gw(r,{popupRedirectResolver:jR,persistence:[Ww,zw,fT]}),s=O0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=YR(u.toString());xw(n,f,()=>f(n.currentUser)),Vw(n,m=>f(m))}}const o=I0("auth");return o&&yw(n,`http://${o}`),n}function QR(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}ow({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Ai("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",QR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HR("Browser");var vv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qr,vT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function R(){}R.prototype=S.prototype,N.D=S.prototype,N.prototype=new R,N.prototype.constructor=N,N.C=function(M,V,k){for(var b=Array(arguments.length-2),It=2;It<arguments.length;It++)b[It-2]=arguments[It];return S.prototype[V].apply(M,b)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,S,R){R||(R=0);var M=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)M[V]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(V=0;16>V;++V)M[V]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=N.g[0],R=N.g[1],V=N.g[2];var k=N.g[3],b=S+(k^R&(V^k))+M[0]+3614090360&4294967295;S=R+(b<<7&4294967295|b>>>25),b=k+(V^S&(R^V))+M[1]+3905402710&4294967295,k=S+(b<<12&4294967295|b>>>20),b=V+(R^k&(S^R))+M[2]+606105819&4294967295,V=k+(b<<17&4294967295|b>>>15),b=R+(S^V&(k^S))+M[3]+3250441966&4294967295,R=V+(b<<22&4294967295|b>>>10),b=S+(k^R&(V^k))+M[4]+4118548399&4294967295,S=R+(b<<7&4294967295|b>>>25),b=k+(V^S&(R^V))+M[5]+1200080426&4294967295,k=S+(b<<12&4294967295|b>>>20),b=V+(R^k&(S^R))+M[6]+2821735955&4294967295,V=k+(b<<17&4294967295|b>>>15),b=R+(S^V&(k^S))+M[7]+4249261313&4294967295,R=V+(b<<22&4294967295|b>>>10),b=S+(k^R&(V^k))+M[8]+1770035416&4294967295,S=R+(b<<7&4294967295|b>>>25),b=k+(V^S&(R^V))+M[9]+2336552879&4294967295,k=S+(b<<12&4294967295|b>>>20),b=V+(R^k&(S^R))+M[10]+4294925233&4294967295,V=k+(b<<17&4294967295|b>>>15),b=R+(S^V&(k^S))+M[11]+2304563134&4294967295,R=V+(b<<22&4294967295|b>>>10),b=S+(k^R&(V^k))+M[12]+1804603682&4294967295,S=R+(b<<7&4294967295|b>>>25),b=k+(V^S&(R^V))+M[13]+4254626195&4294967295,k=S+(b<<12&4294967295|b>>>20),b=V+(R^k&(S^R))+M[14]+2792965006&4294967295,V=k+(b<<17&4294967295|b>>>15),b=R+(S^V&(k^S))+M[15]+1236535329&4294967295,R=V+(b<<22&4294967295|b>>>10),b=S+(V^k&(R^V))+M[1]+4129170786&4294967295,S=R+(b<<5&4294967295|b>>>27),b=k+(R^V&(S^R))+M[6]+3225465664&4294967295,k=S+(b<<9&4294967295|b>>>23),b=V+(S^R&(k^S))+M[11]+643717713&4294967295,V=k+(b<<14&4294967295|b>>>18),b=R+(k^S&(V^k))+M[0]+3921069994&4294967295,R=V+(b<<20&4294967295|b>>>12),b=S+(V^k&(R^V))+M[5]+3593408605&4294967295,S=R+(b<<5&4294967295|b>>>27),b=k+(R^V&(S^R))+M[10]+38016083&4294967295,k=S+(b<<9&4294967295|b>>>23),b=V+(S^R&(k^S))+M[15]+3634488961&4294967295,V=k+(b<<14&4294967295|b>>>18),b=R+(k^S&(V^k))+M[4]+3889429448&4294967295,R=V+(b<<20&4294967295|b>>>12),b=S+(V^k&(R^V))+M[9]+568446438&4294967295,S=R+(b<<5&4294967295|b>>>27),b=k+(R^V&(S^R))+M[14]+3275163606&4294967295,k=S+(b<<9&4294967295|b>>>23),b=V+(S^R&(k^S))+M[3]+4107603335&4294967295,V=k+(b<<14&4294967295|b>>>18),b=R+(k^S&(V^k))+M[8]+1163531501&4294967295,R=V+(b<<20&4294967295|b>>>12),b=S+(V^k&(R^V))+M[13]+2850285829&4294967295,S=R+(b<<5&4294967295|b>>>27),b=k+(R^V&(S^R))+M[2]+4243563512&4294967295,k=S+(b<<9&4294967295|b>>>23),b=V+(S^R&(k^S))+M[7]+1735328473&4294967295,V=k+(b<<14&4294967295|b>>>18),b=R+(k^S&(V^k))+M[12]+2368359562&4294967295,R=V+(b<<20&4294967295|b>>>12),b=S+(R^V^k)+M[5]+4294588738&4294967295,S=R+(b<<4&4294967295|b>>>28),b=k+(S^R^V)+M[8]+2272392833&4294967295,k=S+(b<<11&4294967295|b>>>21),b=V+(k^S^R)+M[11]+1839030562&4294967295,V=k+(b<<16&4294967295|b>>>16),b=R+(V^k^S)+M[14]+4259657740&4294967295,R=V+(b<<23&4294967295|b>>>9),b=S+(R^V^k)+M[1]+2763975236&4294967295,S=R+(b<<4&4294967295|b>>>28),b=k+(S^R^V)+M[4]+1272893353&4294967295,k=S+(b<<11&4294967295|b>>>21),b=V+(k^S^R)+M[7]+4139469664&4294967295,V=k+(b<<16&4294967295|b>>>16),b=R+(V^k^S)+M[10]+3200236656&4294967295,R=V+(b<<23&4294967295|b>>>9),b=S+(R^V^k)+M[13]+681279174&4294967295,S=R+(b<<4&4294967295|b>>>28),b=k+(S^R^V)+M[0]+3936430074&4294967295,k=S+(b<<11&4294967295|b>>>21),b=V+(k^S^R)+M[3]+3572445317&4294967295,V=k+(b<<16&4294967295|b>>>16),b=R+(V^k^S)+M[6]+76029189&4294967295,R=V+(b<<23&4294967295|b>>>9),b=S+(R^V^k)+M[9]+3654602809&4294967295,S=R+(b<<4&4294967295|b>>>28),b=k+(S^R^V)+M[12]+3873151461&4294967295,k=S+(b<<11&4294967295|b>>>21),b=V+(k^S^R)+M[15]+530742520&4294967295,V=k+(b<<16&4294967295|b>>>16),b=R+(V^k^S)+M[2]+3299628645&4294967295,R=V+(b<<23&4294967295|b>>>9),b=S+(V^(R|~k))+M[0]+4096336452&4294967295,S=R+(b<<6&4294967295|b>>>26),b=k+(R^(S|~V))+M[7]+1126891415&4294967295,k=S+(b<<10&4294967295|b>>>22),b=V+(S^(k|~R))+M[14]+2878612391&4294967295,V=k+(b<<15&4294967295|b>>>17),b=R+(k^(V|~S))+M[5]+4237533241&4294967295,R=V+(b<<21&4294967295|b>>>11),b=S+(V^(R|~k))+M[12]+1700485571&4294967295,S=R+(b<<6&4294967295|b>>>26),b=k+(R^(S|~V))+M[3]+2399980690&4294967295,k=S+(b<<10&4294967295|b>>>22),b=V+(S^(k|~R))+M[10]+4293915773&4294967295,V=k+(b<<15&4294967295|b>>>17),b=R+(k^(V|~S))+M[1]+2240044497&4294967295,R=V+(b<<21&4294967295|b>>>11),b=S+(V^(R|~k))+M[8]+1873313359&4294967295,S=R+(b<<6&4294967295|b>>>26),b=k+(R^(S|~V))+M[15]+4264355552&4294967295,k=S+(b<<10&4294967295|b>>>22),b=V+(S^(k|~R))+M[6]+2734768916&4294967295,V=k+(b<<15&4294967295|b>>>17),b=R+(k^(V|~S))+M[13]+1309151649&4294967295,R=V+(b<<21&4294967295|b>>>11),b=S+(V^(R|~k))+M[4]+4149444226&4294967295,S=R+(b<<6&4294967295|b>>>26),b=k+(R^(S|~V))+M[11]+3174756917&4294967295,k=S+(b<<10&4294967295|b>>>22),b=V+(S^(k|~R))+M[2]+718787259&4294967295,V=k+(b<<15&4294967295|b>>>17),b=R+(k^(V|~S))+M[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(V+(b<<21&4294967295|b>>>11))&4294967295,N.g[2]=N.g[2]+V&4294967295,N.g[3]=N.g[3]+k&4294967295}s.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var R=S-this.blockSize,M=this.B,V=this.h,k=0;k<S;){if(V==0)for(;k<=R;)o(this,N,k),k+=this.blockSize;if(typeof N=="string"){for(;k<S;)if(M[V++]=N.charCodeAt(k++),V==this.blockSize){o(this,M),V=0;break}}else for(;k<S;)if(M[V++]=N[k++],V==this.blockSize){o(this,M),V=0;break}}this.h=V,this.o+=S},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var R=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=R&255,R/=256;for(this.u(N),N=Array(16),S=R=0;4>S;++S)for(var M=0;32>M;M+=8)N[R++]=this.g[S]>>>M&255;return N};function u(N,S){var R=m;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=S(N)}function f(N,S){this.h=S;for(var R=[],M=!0,V=N.length-1;0<=V;V--){var k=N[V]|0;M&&k==S||(R[V]=k,M=!1)}this.g=R}var m={};function p(N){return-128<=N&&128>N?u(N,function(S){return new f([S|0],0>S?-1:0)}):new f([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return C;if(0>N)return Z(y(-N));for(var S=[],R=1,M=0;N>=R;M++)S[M]=N/R|0,R*=4294967296;return new f(S,0)}function E(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return Z(E(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),M=C,V=0;V<N.length;V+=8){var k=Math.min(8,N.length-V),b=parseInt(N.substring(V,V+k),S);8>k?(k=y(Math.pow(S,k)),M=M.j(k).add(y(b))):(M=M.j(R),M=M.add(y(b)))}return M}var C=p(0),I=p(1),q=p(16777216);r=f.prototype,r.m=function(){if(re(this))return-Z(this).m();for(var N=0,S=1,R=0;R<this.g.length;R++){var M=this.i(R);N+=(0<=M?M:4294967296+M)*S,S*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(J(this))return"0";if(re(this))return"-"+Z(this).toString(N);for(var S=y(Math.pow(N,6)),R=this,M="";;){var V=Ve(R,S).g;R=Se(R,V.j(S));var k=((0<R.g.length?R.g[0]:R.h)>>>0).toString(N);if(R=V,J(R))return k+M;for(;6>k.length;)k="0"+k;M=k+M}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function J(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function re(N){return N.h==-1}r.l=function(N){return N=Se(this,N),re(N)?-1:J(N)?0:1};function Z(N){for(var S=N.g.length,R=[],M=0;M<S;M++)R[M]=~N.g[M];return new f(R,~N.h).add(I)}r.abs=function(){return re(this)?Z(this):this},r.add=function(N){for(var S=Math.max(this.g.length,N.g.length),R=[],M=0,V=0;V<=S;V++){var k=M+(this.i(V)&65535)+(N.i(V)&65535),b=(k>>>16)+(this.i(V)>>>16)+(N.i(V)>>>16);M=b>>>16,k&=65535,b&=65535,R[V]=b<<16|k}return new f(R,R[R.length-1]&-2147483648?-1:0)};function Se(N,S){return N.add(Z(S))}r.j=function(N){if(J(this)||J(N))return C;if(re(this))return re(N)?Z(this).j(Z(N)):Z(Z(this).j(N));if(re(N))return Z(this.j(Z(N)));if(0>this.l(q)&&0>N.l(q))return y(this.m()*N.m());for(var S=this.g.length+N.g.length,R=[],M=0;M<2*S;M++)R[M]=0;for(M=0;M<this.g.length;M++)for(var V=0;V<N.g.length;V++){var k=this.i(M)>>>16,b=this.i(M)&65535,It=N.i(V)>>>16,lt=N.i(V)&65535;R[2*M+2*V]+=b*lt,le(R,2*M+2*V),R[2*M+2*V+1]+=k*lt,le(R,2*M+2*V+1),R[2*M+2*V+1]+=b*It,le(R,2*M+2*V+1),R[2*M+2*V+2]+=k*It,le(R,2*M+2*V+2)}for(M=0;M<S;M++)R[M]=R[2*M+1]<<16|R[2*M];for(M=S;M<2*S;M++)R[M]=0;return new f(R,0)};function le(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function ae(N,S){this.g=N,this.h=S}function Ve(N,S){if(J(S))throw Error("division by zero");if(J(N))return new ae(C,C);if(re(N))return S=Ve(Z(N),S),new ae(Z(S.g),Z(S.h));if(re(S))return S=Ve(N,Z(S)),new ae(Z(S.g),S.h);if(30<N.g.length){if(re(N)||re(S))throw Error("slowDivide_ only works with positive integers.");for(var R=I,M=S;0>=M.l(N);)R=ge(R),M=ge(M);var V=De(R,1),k=De(M,1);for(M=De(M,2),R=De(R,2);!J(M);){var b=k.add(M);0>=b.l(N)&&(V=V.add(R),k=b),M=De(M,1),R=De(R,1)}return S=Se(N,V.j(S)),new ae(V,S)}for(V=C;0<=N.l(S);){for(R=Math.max(1,Math.floor(N.m()/S.m())),M=Math.ceil(Math.log(R)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),k=y(R),b=k.j(S);re(b)||0<b.l(N);)R-=M,k=y(R),b=k.j(S);J(k)&&(k=I),V=V.add(k),N=Se(N,b)}return new ae(V,N)}r.A=function(N){return Ve(this,N).h},r.and=function(N){for(var S=Math.max(this.g.length,N.g.length),R=[],M=0;M<S;M++)R[M]=this.i(M)&N.i(M);return new f(R,this.h&N.h)},r.or=function(N){for(var S=Math.max(this.g.length,N.g.length),R=[],M=0;M<S;M++)R[M]=this.i(M)|N.i(M);return new f(R,this.h|N.h)},r.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),R=[],M=0;M<S;M++)R[M]=this.i(M)^N.i(M);return new f(R,this.h^N.h)};function ge(N){for(var S=N.g.length+1,R=[],M=0;M<S;M++)R[M]=N.i(M)<<1|N.i(M-1)>>>31;return new f(R,N.h)}function De(N,S){var R=S>>5;S%=32;for(var M=N.g.length-R,V=[],k=0;k<M;k++)V[k]=0<S?N.i(k+R)>>>S|N.i(k+R+1)<<32-S:N.i(k+R);return new f(V,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,vT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,Qr=f}).apply(typeof vv<"u"?vv:typeof self<"u"?self:typeof window<"u"?window:{});var Oc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var TT,Il,ET,jc,om,AT,ST,bT;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oc=="object"&&Oc];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)e:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var P=c[A];if(!(P in _))break e;_=_[P]}c=c[c.length-1],A=_[c],g=g(A),g!=A&&g!=null&&e(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,A=!1,P={next:function(){if(!A&&_<c.length){var B=_++;return{value:g(B,c[B]),done:!1}}return A=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,_){return c.call.apply(c.bind,arguments)}function C(c,g,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,A),c.apply(g,P)}}return function(){return c.apply(g,arguments)}}function I(c,g,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:C,I.apply(null,arguments)}function q(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function J(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,P,B){for(var te=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)te[ze-2]=arguments[ze];return g.prototype[P].apply(A,te)}}function re(c){const g=c.length;if(0<g){const _=Array(g);for(let A=0;A<g;A++)_[A]=c[A];return _}return[]}function Z(c,g){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const P=c.length||0,B=A.length||0;c.length=P+B;for(let te=0;te<B;te++)c[P+te]=A[te]}else c.push(A)}}class Se{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function le(c){return/^[\s\xa0]*$/.test(c)}function ae(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function Ve(c){return Ve[" "](c),c}Ve[" "]=function(){};var ge=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function De(c,g,_){for(const A in c)g.call(_,c[A],A,c)}function N(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function S(c){const g={};for(const _ in c)g[_]=c[_];return g}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(c,g){let _,A;for(let P=1;P<arguments.length;P++){A=arguments[P];for(_ in A)c[_]=A[_];for(let B=0;B<R.length;B++)_=R[B],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function V(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function k(c){m.setTimeout(()=>{throw c},0)}function b(){var c=He;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class It{constructor(){this.h=this.g=null}add(g,_){const A=lt.get();A.set(g,_),this.h?this.h.next=A:this.g=A,this.h=A}}var lt=new Se(()=>new F,c=>c.reset());class F{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,he=!1,He=new It,O=()=>{const c=m.Promise.resolve(void 0);ne=()=>{c.then(X)}};var X=()=>{for(var c;c=b();){try{c.h.call(c.g)}catch(_){k(_)}var g=lt;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}he=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c}();function Oe(c,g){if(ee.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(ge){e:{try{Ve(g.nodeName);var P=!0;break e}catch{}P=!1}P||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ee[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Oe.aa.h.call(this)}}J(Oe,ee);var Ee={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Tt="closure_listenable_"+(1e6*Math.random()|0),Ze=0;function cn(c,g,_,A,P){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!A,this.ha=P,this.key=++Ze,this.da=this.fa=!1}function ri(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Fn(c){this.src=c,this.g={},this.h=0}Fn.prototype.add=function(c,g,_,A,P){var B=c.toString();c=this.g[B],c||(c=this.g[B]=[],this.h++);var te=Ni(c,g,A,P);return-1<te?(g=c[te],_||(g.fa=!1)):(g=new cn(g,this.src,B,!!A,P),g.fa=_,c.push(g)),g};function Gn(c,g){var _=g.type;if(_ in c.g){var A=c.g[_],P=Array.prototype.indexOf.call(A,g,void 0),B;(B=0<=P)&&Array.prototype.splice.call(A,P,1),B&&(ri(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Ni(c,g,_,A){for(var P=0;P<c.length;++P){var B=c[P];if(!B.da&&B.listener==g&&B.capture==!!_&&B.ha==A)return P}return-1}var Mi="closure_lm_"+(1e6*Math.random()|0),H={};function ue(c,g,_,A,P){if(Array.isArray(g)){for(var B=0;B<g.length;B++)ue(c,g[B],_,A,P);return null}return _=as(_),c&&c[Tt]?c.K(g,_,y(A)?!!A.capture:!1,P):se(c,g,_,!1,A,P)}function se(c,g,_,A,P,B){if(!g)throw Error("Invalid event type");var te=y(P)?!!P.capture:!!P,ze=yn(c);if(ze||(c[Mi]=ze=new Fn(c)),_=ze.add(g,_,A,te,B),_.proxy)return _;if(A=be(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)me||(P=te),P===void 0&&(P=!1),c.addEventListener(g.toString(),A,P);else if(c.attachEvent)c.attachEvent(Fe(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function be(){function c(_){return g.call(c.src,c.listener,_)}const g=pn;return c}function Ie(c,g,_,A,P){if(Array.isArray(g))for(var B=0;B<g.length;B++)Ie(c,g[B],_,A,P);else A=y(A)?!!A.capture:!!A,_=as(_),c&&c[Tt]?(c=c.i,g=String(g).toString(),g in c.g&&(B=c.g[g],_=Ni(B,_,A,P),-1<_&&(ri(B[_]),Array.prototype.splice.call(B,_,1),B.length==0&&(delete c.g[g],c.h--)))):c&&(c=yn(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Ni(g,_,A,P)),(_=-1<c?g[c]:null)&&Je(_))}function Je(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Tt])Gn(g.i,c);else{var _=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(_,A,c.capture):g.detachEvent?g.detachEvent(Fe(_),A):g.addListener&&g.removeListener&&g.removeListener(A),(_=yn(g))?(Gn(_,c),_.h==0&&(_.src=null,g[Mi]=null)):ri(c)}}}function Fe(c){return c in H?H[c]:H[c]="on"+c}function pn(c,g){if(c.da)c=!0;else{g=new Oe(g,this);var _=c.listener,A=c.ha||c.src;c.fa&&Je(c),c=_.call(A,g)}return c}function yn(c){return c=c[Mi],c instanceof Fn?c:null}var Yn="__closure_events_fn_"+(1e9*Math.random()>>>0);function as(c){return typeof c=="function"?c:(c[Yn]||(c[Yn]=function(g){return c.handleEvent(g)}),c[Yn])}function rt(){ie.call(this),this.i=new Fn(this),this.M=this,this.F=null}J(rt,ie),rt.prototype[Tt]=!0,rt.prototype.removeEventListener=function(c,g,_,A){Ie(this,c,g,_,A)};function Ye(c,g){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new ee(g,c);else if(g instanceof ee)g.target=g.target||c;else{var P=g;g=new ee(A,c),M(g,P)}if(P=!0,_)for(var B=_.length-1;0<=B;B--){var te=g.g=_[B];P=_n(te,A,!0,g)&&P}if(te=g.g=c,P=_n(te,A,!0,g)&&P,P=_n(te,A,!1,g)&&P,_)for(B=0;B<_.length;B++)te=g.g=_[B],P=_n(te,A,!1,g)&&P}rt.prototype.N=function(){if(rt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],A=0;A<_.length;A++)ri(_[A]);delete c.g[g],c.h--}}this.F=null},rt.prototype.K=function(c,g,_,A){return this.i.add(String(c),g,!1,_,A)},rt.prototype.L=function(c,g,_,A){return this.i.add(String(c),g,!0,_,A)};function _n(c,g,_,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var P=!0,B=0;B<g.length;++B){var te=g[B];if(te&&!te.da&&te.capture==_){var ze=te.listener,Ot=te.ha||te.src;te.fa&&Gn(c.i,te),P=ze.call(Ot,A)!==!1&&P}}return P&&!A.defaultPrevented}function Wt(c,g,_){if(typeof c=="function")_&&(c=I(c,_));else if(c&&typeof c.handleEvent=="function")c=I(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function au(c){c.g=Wt(()=>{c.g=null,c.i&&(c.i=!1,au(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Vh extends ie{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:au(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function os(c){ie.call(this),this.h=c,this.g={}}J(os,ie);var ls=[];function us(c){De(c.g,function(g,_){this.g.hasOwnProperty(_)&&Je(g)},c),c.g={}}os.prototype.N=function(){os.aa.N.call(this),us(this)},os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kn=m.JSON.stringify,aa=m.JSON.parse,cs=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function _o(){}_o.prototype.h=null;function vo(c){return c.h||(c.h=c.i())}function To(){}var Vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xi(){ee.call(this,"d")}J(xi,ee);function Eo(){ee.call(this,"c")}J(Eo,ee);var si={},Ao=null;function dr(){return Ao=Ao||new rt}si.La="serverreachability";function oa(c){ee.call(this,si.La,c)}J(oa,ee);function mr(c){const g=dr();Ye(g,new oa(g))}si.STAT_EVENT="statevent";function ou(c,g){ee.call(this,si.STAT_EVENT,c),this.stat=g}J(ou,ee);function ut(c){const g=dr();Ye(g,new ou(g,c))}si.Ma="timingevent";function Ct(c,g){ee.call(this,si.Ma,c),this.size=g}J(Ct,ee);function Et(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function Cn(){this.g=!0}Cn.prototype.xa=function(){this.g=!1};function So(c,g,_,A,P,B){c.info(function(){if(c.g)if(B)for(var te="",ze=B.split("&"),Ot=0;Ot<ze.length;Ot++){var je=ze[Ot].split("=");if(1<je.length){var Ut=je[0];je=je[1];var Dt=Ut.split("_");te=2<=Dt.length&&Dt[1]=="type"?te+(Ut+"="+je+"&"):te+(Ut+"=redacted&")}}else te=null;else te=B;return"XMLHTTP REQ ("+A+") [attempt "+P+"]: "+g+`
`+_+`
`+te})}function xh(c,g,_,A,P,B,te){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+P+"]: "+g+`
`+_+`
`+B+" "+te})}function gr(c,g,_,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+hs(c,_)+(A?" "+A:"")})}function lu(c,g){c.info(function(){return"TIMEOUT: "+g})}Cn.prototype.info=function(){};function hs(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var P=A[1];if(Array.isArray(P)&&!(1>P.length)){var B=P[0];if(B!="noop"&&B!="stop"&&B!="close")for(var te=1;te<P.length;te++)P[te]=""}}}}return Kn(_)}catch{return g}}var pr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ki={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ai;function oi(){}J(oi,_o),oi.prototype.g=function(){return new XMLHttpRequest},oi.prototype.i=function(){return{}},ai=new oi;function sn(c,g,_,A){this.j=c,this.i=g,this.l=_,this.R=A||1,this.U=new os(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pt}function pt(){this.i=null,this.g="",this.h=!1}var bo={},la={};function Qn(c,g,_){c.L=1,c.v=ps(vn(g)),c.m=_,c.P=!0,Pi(c,null)}function Pi(c,g){c.F=Date.now(),fs(c),c.A=vn(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Do(_.i,"t",A),c.C=0,_=c.j.J,c.h=new pt,c.g=bu(c.j,_?g:null,!c.m),0<c.O&&(c.M=new Vh(I(c.Y,c,c.g),c.O)),g=c.U,_=c.g,A=c.ca;var P="readystatechange";Array.isArray(P)||(P&&(ls[0]=P.toString()),P=ls);for(var B=0;B<P.length;B++){var te=ue(_,P[B],A||g.handleEvent,!1,g.h||g);if(!te)break;g.g[te.key]=te}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),mr(),So(c.i,c.u,c.A,c.l,c.R,c.m)}sn.prototype.ca=function(c){c=c.target;const g=this.M;g&&Mn(c)==3?g.j():this.Y(c)},sn.prototype.Y=function(c){try{if(c==this.g)e:{const Dt=Mn(this.g);var g=this.g.Ba();const Fi=this.g.Z();if(!(3>Dt)&&(Dt!=3||this.g&&(this.h.h||this.g.oa()||pu(this.g)))){this.J||Dt!=4||g==7||(g==8||0>=Fi?mr(3):mr(2)),yr(this);var _=this.g.Z();this.X=_;t:if(uu(this)){var A=pu(this.g);c="";var P=A.length,B=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),li(this);var te="";break t}this.h.i=new m.TextDecoder}for(g=0;g<P;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!(B&&g==P-1)});A.length=0,this.h.g+=c,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=_==200,xh(this.i,this.u,this.A,this.l,this.R,Dt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,Ot=this.g;if((ze=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!le(ze)){var je=ze;break t}}je=null}if(_=je)gr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ds(this,_);else{this.o=!1,this.s=3,ut(12),Ht(this),li(this);break e}}if(this.P){_=!0;let Ft;for(;!this.J&&this.C<te.length;)if(Ft=cu(this,te),Ft==la){Dt==4&&(this.s=4,ut(14),_=!1),gr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==bo){this.s=4,ut(15),gr(this.i,this.l,te,"[Invalid Chunk]"),_=!1;break}else gr(this.i,this.l,Ft,null),ds(this,Ft);if(uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Dt!=4||te.length!=0||this.h.h||(this.s=1,ut(16),_=!1),this.o=this.o&&_,!_)gr(this.i,this.l,te,"[Invalid Chunked Response]"),Ht(this),li(this);else if(0<te.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),bs(Ut),Ut.M=!0,ut(11))}}else gr(this.i,this.l,te,null),ds(this,te);Dt==4&&Ht(this),this.o&&!this.J&&(Dt==4?Eu(this.j,this):(this.o=!1,fs(this)))}else zh(this.g),_==400&&0<te.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Ht(this),li(this)}}}catch{}finally{}};function uu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function cu(c,g){var _=c.C,A=g.indexOf(`
`,_);return A==-1?la:(_=Number(g.substring(_,A)),isNaN(_)?bo:(A+=1,A+_>g.length?la:(g=g.slice(A,A+_),c.C=A+_,g)))}sn.prototype.cancel=function(){this.J=!0,Ht(this)};function fs(c){c.S=Date.now()+c.I,hu(c,c.I)}function hu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Et(I(c.ba,c),g)}function yr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}sn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(lu(this.i,this.A),this.L!=2&&(mr(),ut(17)),Ht(this),this.s=2,li(this)):hu(this,this.S-c)};function li(c){c.j.G==0||c.J||Eu(c.j,c)}function Ht(c){yr(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,us(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function ds(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||wo(_.h,c))){if(!c.K&&wo(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var P=A;if(P[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Ta(_),_a(_);else break e;ko(_),ut(18)}}else _.za=P[1],0<_.za-_.T&&37500>P[2]&&_.F&&_.v==0&&!_.C&&(_.C=Et(I(_.Za,_),6e3));if(1>=ca(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Hi(_,11)}else if((c.K||_.g==c)&&Ta(_),!le(g))for(P=_.Da.g.parse(g),g=0;g<P.length;g++){let je=P[g];if(_.T=je[0],je=je[1],_.G==2)if(je[0]=="c"){_.K=je[1],_.ia=je[2];const Ut=je[3];Ut!=null&&(_.la=Ut,_.j.info("VER="+_.la));const Dt=je[4];Dt!=null&&(_.Aa=Dt,_.j.info("SVER="+_.Aa));const Fi=je[5];Fi!=null&&typeof Fi=="number"&&0<Fi&&(A=1.5*Fi,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Ft=c.g;if(Ft){const gi=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gi){var B=A.h;B.g||gi.indexOf("spdy")==-1&&gi.indexOf("quic")==-1&&gi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(ha(B,B.h),B.h=null))}if(A.D){const Uo=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(A.ya=Uo,et(A.I,A.D,Uo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var te=c;if(A.qa=Su(A,A.J?A.ia:null,A.W),te.K){an(A.h,te);var ze=te,Ot=A.L;Ot&&(ze.I=Ot),ze.B&&(yr(ze),fs(ze)),A.g=te}else vu(A);0<_.i.length&&va(_)}else je[0]!="stop"&&je[0]!="close"||Hi(_,7);else _.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?Hi(_,7):Vo(_):je[0]!="noop"&&_.l&&_.l.ta(je),_.v=0)}}mr(4)}catch{}}var fu=class{constructor(c,g){this.g=c,this.map=g}};function Ui(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ua(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ca(c){return c.h?1:c.g?c.g.size:0}function wo(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function ha(c,g){c.g?c.g.add(g):c.h=g}function an(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Ui.prototype.cancel=function(){if(this.i=Ro(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ro(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return re(c.i)}function kh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],_=c.length,A=0;A<_;A++)g.push(c[A]);return g}g=[],_=0;for(A in c)g[_++]=c[A];return g}function fa(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const A in c)g[_++]=A;return g}}}function Io(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=fa(c),A=kh(c),P=A.length,B=0;B<P;B++)g.call(void 0,A[B],_&&_[B],c)}var ms=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ph(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),P=null;if(0<=A){var B=c[_].substring(0,A);P=c[_].substring(A+1)}else B=c[_];g(B,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function At(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof At){this.h=c.h,gs(this,c.j),this.o=c.o,this.g=c.g,_r(this,c.s),this.l=c.l;var g=c.i,_=new zi;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),Li(this,_),this.m=c.m}else c&&(g=String(c).match(ms))?(this.h=!1,gs(this,g[1]||"",!0),this.o=On(g[2]||""),this.g=On(g[3]||"",!0),_r(this,g[4]),this.l=On(g[5]||"",!0),Li(this,g[6]||"",!0),this.m=On(g[7]||"")):(this.h=!1,this.i=new zi(null,this.h))}At.prototype.toString=function(){var c=[],g=this.j;g&&c.push(ys(g,Co,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(ys(g,Co,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(ys(_,_.charAt(0)=="/"?Uh:Oo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",ys(_,da)),c.join("")};function vn(c){return new At(c)}function gs(c,g,_){c.j=_?On(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function _r(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Li(c,g,_){g instanceof zi?(c.i=g,mu(c.i,c.h)):(_||(g=ys(g,Lh)),c.i=new zi(g,c.h))}function et(c,g,_){c.i.set(g,_)}function ps(c){return et(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function On(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ys(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,du),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function du(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Co=/[#\/\?@]/g,Oo=/[#\?:]/g,Uh=/[#\?]/g,Lh=/[#\?@]/g,da=/#/g;function zi(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Dn(c){c.g||(c.g=new Map,c.h=0,c.i&&Ph(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=zi.prototype,r.add=function(c,g){Dn(this),this.i=null,c=ui(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function ji(c,g){Dn(c),g=ui(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Bi(c,g){return Dn(c),g=ui(c,g),c.g.has(g)}r.forEach=function(c,g){Dn(this),this.g.forEach(function(_,A){_.forEach(function(P){c.call(g,P,A,this)},this)},this)},r.na=function(){Dn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let A=0;A<g.length;A++){const P=c[A];for(let B=0;B<P.length;B++)_.push(g[A])}return _},r.V=function(c){Dn(this);let g=[];if(typeof c=="string")Bi(this,c)&&(g=g.concat(this.g.get(ui(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return Dn(this),this.i=null,c=ui(this,c),Bi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Do(c,g,_){ji(c,g),0<_.length&&(c.i=null,c.g.set(ui(c,g),re(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var A=g[_];const B=encodeURIComponent(String(A)),te=this.V(A);for(A=0;A<te.length;A++){var P=B;te[A]!==""&&(P+="="+encodeURIComponent(String(te[A]))),c.push(P)}}return this.i=c.join("&")};function ui(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function mu(c,g){g&&!c.j&&(Dn(c),c.i=null,c.g.forEach(function(_,A){var P=A.toLowerCase();A!=P&&(ji(this,A),Do(this,P,_))},c)),c.j=g}function _s(c,g){const _=new Cn;if(m.Image){const A=new Image;A.onload=q(Nn,_,"TestLoadImage: loaded",!0,g,A),A.onerror=q(Nn,_,"TestLoadImage: error",!1,g,A),A.onabort=q(Nn,_,"TestLoadImage: abort",!1,g,A),A.ontimeout=q(Nn,_,"TestLoadImage: timeout",!1,g,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function Xn(c,g){const _=new Cn,A=new AbortController,P=setTimeout(()=>{A.abort(),Nn(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(B=>{clearTimeout(P),B.ok?Nn(_,"TestPingServer: ok",!0,g):Nn(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(P),Nn(_,"TestPingServer: error",!1,g)})}function Nn(c,g,_,A,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),A(_)}catch{}}function vs(){this.g=new cs}function ci(c,g,_){const A=_||"";try{Io(c,function(P,B){let te=P;y(P)&&(te=Kn(P)),g.push(A+B+"="+encodeURIComponent(te))})}catch(P){throw g.push(A+"type="+encodeURIComponent("_badmap")),P}}function vr(c){this.l=c.Ub||null,this.j=c.eb||!1}J(vr,_o),vr.prototype.g=function(){return new qi(this.l,this.j)},vr.prototype.i=function(c){return function(){return c}}({});function qi(c,g){rt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}J(qi,rt),r=qi.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,fi(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;No(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function No(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?hi(this):fi(this),this.readyState==3&&No(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,hi(this))},r.Qa=function(c){this.g&&(this.response=c,hi(this))},r.ga=function(){this.g&&hi(this)};function hi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,fi(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function fi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Mo(c){let g="";return De(c,function(_,A){g+=A,g+=":",g+=_,g+=`\r
`}),g}function Pt(c,g,_){e:{for(A in _){var A=!1;break e}A=!0}A||(_=Mo(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):et(c,g,_))}function Qe(c){rt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}J(Qe,rt);var ma=/^https?$/i,Ts=["POST","PUT"];r=Qe.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ai.g(),this.v=this.o?vo(this.o):vo(ai),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(B){gu(this,B);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var P in A)_.set(P,A[P]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const B of A.keys())_.set(B,A.get(B));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),P=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Ts,g,void 0))||A||P||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,te]of _)this.g.setRequestHeader(B,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Es(this),this.u=!0,this.g.send(c),this.u=!1}catch(B){gu(this,B)}};function gu(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,ga(c),di(c)}function ga(c){c.A||(c.A=!0,Ye(c,"complete"),Ye(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ye(this,"complete"),Ye(this,"abort"),di(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),di(this,!0)),Qe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?pa(this):this.bb())},r.bb=function(){pa(this)};function pa(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Mn(c)!=4||c.Z()!=2)){if(c.u&&Mn(c)==4)Wt(c.Ea,0,c);else if(Ye(c,"readystatechange"),Mn(c)==4){c.h=!1;try{const te=c.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var _;if(!(_=g)){var A;if(A=te===0){var P=String(c.D).match(ms)[1]||null;!P&&m.self&&m.self.location&&(P=m.self.location.protocol.slice(0,-1)),A=!ma.test(P?P.toLowerCase():"")}_=A}if(_)Ye(c,"complete"),Ye(c,"success");else{c.m=6;try{var B=2<Mn(c)?c.g.statusText:""}catch{B=""}c.l=B+" ["+c.Z()+"]",ga(c)}}finally{di(c)}}}}function di(c,g){if(c.g){Es(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ye(c,"ready");try{_.onreadystatechange=A}catch{}}}function Es(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Mn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),aa(g)}};function pu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function zh(c){const g={};c=(c.g&&2<=Mn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(le(c[A]))continue;var _=V(c[A]);const P=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=g[P]||[];g[P]=B,B.push(_)}N(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function ya(c){this.Aa=0,this.i=[],this.j=new Cn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=As("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=As("baseRetryDelayMs",5e3,c),this.cb=As("retryDelaySeedMs",1e4,c),this.Wa=As("forwardChannelMaxRetries",2,c),this.wa=As("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ui(c&&c.concurrentRequestLimit),this.Da=new vs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ya.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,A){ut(0),this.W=c,this.H=g||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=Su(this,null,this.W),va(this)};function Vo(c){if(yu(c),c.G==3){var g=c.U++,_=vn(c.I);if(et(_,"SID",c.K),et(_,"RID",g),et(_,"TYPE","terminate"),Ss(c,_),g=new sn(c,c.j,g),g.L=2,g.v=ps(vn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=bu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),fs(g)}Au(c)}function _a(c){c.g&&(bs(c),c.g.cancel(),c.g=null)}function yu(c){_a(c),c.u&&(m.clearTimeout(c.u),c.u=null),Ta(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function va(c){if(!ua(c.h)&&!c.s){c.s=!0;var g=c.Ga;ne||O(),he||(ne(),he=!0),He.add(g,c),c.B=0}}function jh(c,g){return ca(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Et(I(c.Ga,c,g),Po(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const P=new sn(this,this.j,c);let B=this.o;if(this.S&&(B?(B=S(B),M(B,this.S)):B=this.S),this.m!==null||this.O||(P.H=B,B=null),this.P)e:{for(var g=0,_=0;_<this.i.length;_++){t:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=_;break e}if(g===4096||_===this.i.length-1){g=_+1;break e}}g=1e3}else g=1e3;g=_u(this,P,g),_=vn(this.I),et(_,"RID",c),et(_,"CVER",22),this.D&&et(_,"X-HTTP-Session-Id",this.D),Ss(this,_),B&&(this.O?g="headers="+encodeURIComponent(String(Mo(B)))+"&"+g:this.m&&Pt(_,this.m,B)),ha(this.h,P),this.Ua&&et(_,"TYPE","init"),this.P?(et(_,"$req",g),et(_,"SID","null"),P.T=!0,Qn(P,_,null)):Qn(P,_,g),this.G=2}}else this.G==3&&(c?xo(this,c):this.i.length==0||ua(this.h)||xo(this))};function xo(c,g){var _;g?_=g.l:_=c.U++;const A=vn(c.I);et(A,"SID",c.K),et(A,"RID",_),et(A,"AID",c.T),Ss(c,A),c.m&&c.o&&Pt(A,c.m,c.o),_=new sn(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=_u(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ha(c.h,_),Qn(_,A,g)}function Ss(c,g){c.H&&De(c.H,function(_,A){et(g,A,_)}),c.l&&Io({},function(_,A){et(g,A,_)})}function _u(c,g,_){_=Math.min(c.i.length,_);var A=c.l?I(c.l.Na,c.l,c):null;e:{var P=c.i;let B=-1;for(;;){const te=["count="+_];B==-1?0<_?(B=P[0].g,te.push("ofs="+B)):B=0:te.push("ofs="+B);let ze=!0;for(let Ot=0;Ot<_;Ot++){let je=P[Ot].g;const Ut=P[Ot].map;if(je-=B,0>je)B=Math.max(0,P[Ot].g-100),ze=!1;else try{ci(Ut,te,"req"+je+"_")}catch{A&&A(Ut)}}if(ze){A=te.join("&");break e}}}return c=c.i.splice(0,_),g.D=c,A}function vu(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;ne||O(),he||(ne(),he=!0),He.add(g,c),c.v=0}}function ko(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Et(I(c.Fa,c),Po(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Tu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Et(I(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),_a(this),Tu(this))};function bs(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Tu(c){c.g=new sn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=vn(c.qa);et(g,"RID","rpc"),et(g,"SID",c.K),et(g,"AID",c.T),et(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&et(g,"TO",c.ja),et(g,"TYPE","xmlhttp"),Ss(c,g),c.m&&c.o&&Pt(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=ps(vn(g)),_.m=null,_.P=!0,Pi(_,c)}r.Za=function(){this.C!=null&&(this.C=null,_a(this),ko(this),ut(19))};function Ta(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Eu(c,g){var _=null;if(c.g==g){Ta(c),bs(c),c.g=null;var A=2}else if(wo(c.h,g))_=g.D,an(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var P=c.B;A=dr(),Ye(A,new Ct(A,_)),va(c)}else vu(c);else if(P=g.s,P==3||P==0&&0<g.X||!(A==1&&jh(c,g)||A==2&&ko(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),P){case 1:Hi(c,5);break;case 4:Hi(c,10);break;case 3:Hi(c,6);break;default:Hi(c,2)}}}function Po(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Hi(c,g){if(c.j.info("Error code "+g),g==2){var _=I(c.fb,c),A=c.Xa;const P=!A;A=new At(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||gs(A,"https"),ps(A),P?_s(A.toString(),_):Xn(A.toString(),_)}else ut(2);c.G=0,c.l&&c.l.sa(g),Au(c),yu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Au(c){if(c.G=0,c.ka=[],c.l){const g=Ro(c.h);(g.length!=0||c.i.length!=0)&&(Z(c.ka,g),Z(c.ka,c.i),c.h.i.length=0,re(c.i),c.i.length=0),c.l.ra()}}function Su(c,g,_){var A=_ instanceof At?vn(_):new At(_);if(A.g!="")g&&(A.g=g+"."+A.g),_r(A,A.s);else{var P=m.location;A=P.protocol,g=g?g+"."+P.hostname:P.hostname,P=+P.port;var B=new At(null);A&&gs(B,A),g&&(B.g=g),P&&_r(B,P),_&&(B.l=_),A=B}return _=c.D,g=c.ya,_&&g&&et(A,_,g),et(A,"VER",c.la),Ss(c,A),A}function bu(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Qe(new vr({eb:_})):new Qe(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function wu(){}r=wu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ea(){}Ea.prototype.g=function(c,g){return new on(c,g)};function on(c,g){rt.call(this),this.g=new ya(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!le(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!le(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new mi(this)}J(on,rt),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){Vo(this.g)},on.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Kn(c),c=_);g.i.push(new fu(g.Ya++,c)),g.G==3&&va(g)},on.prototype.N=function(){this.g.l=null,delete this.j,Vo(this.g),delete this.g,on.aa.N.call(this)};function Ru(c){xi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const _ in g){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}J(Ru,xi);function Iu(){Eo.call(this),this.status=1}J(Iu,Eo);function mi(c){this.g=c}J(mi,wu),mi.prototype.ua=function(){Ye(this.g,"a")},mi.prototype.ta=function(c){Ye(this.g,new Ru(c))},mi.prototype.sa=function(c){Ye(this.g,new Iu)},mi.prototype.ra=function(){Ye(this.g,"b")},Ea.prototype.createWebChannel=Ea.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,bT=function(){return new Ea},ST=function(){return dr()},AT=si,om={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pr.NO_ERROR=0,pr.TIMEOUT=8,pr.HTTP_ERROR=6,jc=pr,ki.COMPLETE="complete",ET=ki,To.EventType=Vi,Vi.OPEN="a",Vi.CLOSE="b",Vi.ERROR="c",Vi.MESSAGE="d",rt.prototype.listen=rt.prototype.K,Il=To,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,TT=Qe}).apply(typeof Oc<"u"?Oc:typeof self<"u"?self:typeof window<"u"?window:{});const Tv="@firebase/firestore",Ev="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tn.UNAUTHENTICATED=new tn(null),tn.GOOGLE_CREDENTIALS=new tn("google-credentials-uid"),tn.FIRST_PARTY=new tn("first-party-uid"),tn.MOCK_USER=new tn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new gh("@firebase/firestore");function $a(){return Xs.logLevel}function oe(r,...e){if(Xs.logLevel<=Ue.DEBUG){const n=e.map(zm);Xs.debug(`Firestore (${mo}): ${r}`,...n)}}function hr(r,...e){if(Xs.logLevel<=Ue.ERROR){const n=e.map(zm);Xs.error(`Firestore (${mo}): ${r}`,...n)}}function Wr(r,...e){if(Xs.logLevel<=Ue.WARN){const n=e.map(zm);Xs.warn(`Firestore (${mo}): ${r}`,...n)}}function zm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,wT(r,s,n)}function wT(r,e,n){let s=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw hr(s),new Error(s)}function Xe(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||wT(e,o,s)}function Re(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends ii{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tn.UNAUTHENTICATED))}shutdown(){}}class $R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WR{constructor(e){this.t=e,this.currentUser=tn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Xe(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new Xr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Xr,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Xr)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string",31837,{l:s}),new RT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string",2055,{h:e}),new tn(e)}}class ZR{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=tn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class JR{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new ZR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(tn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Av{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Xe(this.o===void 0,3512);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Av(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Xe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Av(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=tI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function Me(r,e){return r<e?-1:r>e?1:0}function lm(r,e){let n=0;for(;n<r.length&&n<e.length;){const s=r.codePointAt(n),o=e.codePointAt(n);if(s!==o){if(s<128&&o<128)return Me(s,o);{const u=IT(),f=nI(u.encode(Sv(r,n)),u.encode(Sv(e,n)));return f!==0?f:Me(s,o)}}n+=s>65535?2:1}return Me(r.length,e.length)}function Sv(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function nI(r,e){for(let n=0;n<r.length&&n<e.length;++n)if(r[n]!==e[n])return Me(r[n],e[n]);return Me(r.length,e.length)}function so(r,e,n){return r.length===e.length&&r.every((s,o)=>n(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv="__name__";class Ei{constructor(e,n,s){n===void 0?n=0:n>e.length&&Te(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Te(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ei.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ei?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=Ei.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Me(e.length,n.length)}static compareSegments(e,n){const s=Ei.isNumericId(e),o=Ei.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?Ei.extractNumericId(e).compare(Ei.extractNumericId(n)):lm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qr.fromString(e.substring(4,e.length-2))}}class ft extends Ei{construct(e,n,s){return new ft(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new de($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new ft(n)}static emptyPath(){return new ft([])}}const iI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xt extends Ei{construct(e,n,s){return new Xt(e,n,s)}static isValidIdentifier(e){return iI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bv}static keyField(){return new Xt([bv])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new de($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new de($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new de($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new de($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xt(n)}static emptyPath(){return new Xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(ft.fromString(e))}static fromName(e){return new pe(ft.fromString(e).popFirst(5))}static empty(){return new pe(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ft.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new ft(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(r,e,n){if(!n)throw new de($.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function sI(r,e,n,s){if(e===!0&&s===!0)throw new de($.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function wv(r){if(!pe.isDocumentKey(r))throw new de($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function CT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Bm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Te(12329,{type:typeof r})}function ql(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new de($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bm(r);throw new de($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(r,e){const n={typeString:r};return e&&(n.value=e),n}function tu(r,e){if(!CT(r))throw new de($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new de($.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=-62135596800,Iv=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Iv);return new ot(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new de($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new de($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Rv)throw new de($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Iv}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ot._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(tu(e,ot._jsonSchema))return new ot(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ot._jsonSchemaVersion="firestore/timestamp/1.0",ot._jsonSchema={type:Rt("string",ot._jsonSchemaVersion),seconds:Rt("number"),nanoseconds:Rt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new ot(0,0))}static max(){return new we(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=-1;function aI(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new ot(n+1,0):new ot(n,s));return new Zr(o,pe.empty(),e)}function oI(r){return new Zr(r.readTime,r.key,Hl)}class Zr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Zr(we.min(),pe.empty(),Hl)}static max(){return new Zr(we.max(),pe.empty(),Hl)}}function lI(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=pe.comparator(r.documentKey,e.documentKey),n!==0?n:Me(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(r){if(r.code!==$.FAILED_PRECONDITION||r.message!==uI)throw r;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Q((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):Q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):Q.reject(n)}static resolve(e){return new Q((n,s)=>{n(e)})}static reject(e){return new Q((n,s)=>{s(e)})}static waitFor(e){return new Q((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(e){let n=Q.resolve(!1);for(const s of e)n=n.next(o=>o?Q.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new Q((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(e[y]).next(E=>{f[y]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(e,n){return new Q((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function hI(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function po(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this._e(s),this.ae=s=>n.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}vh.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=-1;function Th(r){return r==null}function eh(r){return r===0&&1/r==-1/0}function fI(r){return typeof r=="number"&&Number.isInteger(r)&&!eh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="";function dI(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=Cv(e)),e=mI(r.get(n),e);return Cv(e)}function mI(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case OT:n+="";break;default:n+=u}}return n}function Cv(r){return r+OT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function na(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function DT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){this.comparator=e,this.root=n||Qt.EMPTY}insert(e,n){return new dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qt.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dc(this.root,e,this.comparator,!0)}}class Dc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Qt.RED,this.left=o??Qt.EMPTY,this.right=u??Qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Qt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Qt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Qt.EMPTY=null,Qt.RED=!0,Qt.BLACK=!1;Qt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new Qt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dv(this.data.getIterator())}getIteratorFrom(e){return new Dv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class Dv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.fields=e,e.sort(Xt.comparator)}static empty(){return new ei([])}unionWith(e){let n=new kt(Xt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ei(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return so(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new NT("Invalid base64 string: "+u):u}}(e);return new $t(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new $t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$t.EMPTY_BYTE_STRING=new $t("");const gI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(r){if(Xe(!!r,39018),typeof r=="string"){let e=0;const n=gI.exec(r);if(Xe(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:vt(r.seconds),nanos:vt(r.nanos)}}function vt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function es(r){return typeof r=="string"?$t.fromBase64String(r):$t.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="server_timestamp",VT="__type__",xT="__previous_value__",kT="__local_write_time__";function Hm(r){var e,n;return((n=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[VT])===null||n===void 0?void 0:n.stringValue)===MT}function Eh(r){const e=r.mapValue.fields[xT];return Hm(e)?Eh(e):e}function Fl(r){const e=Jr(r.mapValue.fields[kT].timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n,s,o,u,f,m,p,y,E){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=E}}const th="(default)";class Gl{constructor(e,n){this.projectId=e,this.database=n||th}static empty(){return new Gl("","")}get isDefaultDatabase(){return this.database===th}isEqual(e){return e instanceof Gl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="__type__",yI="__max__",Nc={mapValue:{}},UT="__vector__",nh="value";function ts(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Hm(r)?4:vI(r)?9007199254740991:_I(r)?10:11:Te(28295,{value:r})}function Oi(r,e){if(r===e)return!0;const n=ts(r);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Fl(r).isEqual(Fl(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Jr(o.timestampValue),m=Jr(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return es(o.bytesValue).isEqual(es(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return vt(o.geoPointValue.latitude)===vt(u.geoPointValue.latitude)&&vt(o.geoPointValue.longitude)===vt(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return vt(o.integerValue)===vt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=vt(o.doubleValue),m=vt(u.doubleValue);return f===m?eh(f)===eh(m):isNaN(f)&&isNaN(m)}return!1}(r,e);case 9:return so(r.arrayValue.values||[],e.arrayValue.values||[],Oi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ov(f)!==Ov(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Oi(f[p],m[p])))return!1;return!0}(r,e);default:return Te(52216,{left:r})}}function Yl(r,e){return(r.values||[]).find(n=>Oi(n,e))!==void 0}function ao(r,e){if(r===e)return 0;const n=ts(r),s=ts(e);if(n!==s)return Me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(r.booleanValue,e.booleanValue);case 2:return function(u,f){const m=vt(u.integerValue||u.doubleValue),p=vt(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,e);case 3:return Nv(r.timestampValue,e.timestampValue);case 4:return Nv(Fl(r),Fl(e));case 5:return lm(r.stringValue,e.stringValue);case 6:return function(u,f){const m=es(u),p=es(f);return m.compareTo(p)}(r.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=Me(m[y],p[y]);if(E!==0)return E}return Me(m.length,p.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,f){const m=Me(vt(u.latitude),vt(f.latitude));return m!==0?m:Me(vt(u.longitude),vt(f.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Mv(r.arrayValue,e.arrayValue);case 10:return function(u,f){var m,p,y,E;const C=u.fields||{},I=f.fields||{},q=(m=C[nh])===null||m===void 0?void 0:m.arrayValue,J=(p=I[nh])===null||p===void 0?void 0:p.arrayValue,re=Me(((y=q?.values)===null||y===void 0?void 0:y.length)||0,((E=J?.values)===null||E===void 0?void 0:E.length)||0);return re!==0?re:Mv(q,J)}(r.mapValue,e.mapValue);case 11:return function(u,f){if(u===Nc.mapValue&&f===Nc.mapValue)return 0;if(u===Nc.mapValue)return 1;if(f===Nc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let C=0;C<p.length&&C<E.length;++C){const I=lm(p[C],E[C]);if(I!==0)return I;const q=ao(m[p[C]],y[E[C]]);if(q!==0)return q}return Me(p.length,E.length)}(r.mapValue,e.mapValue);default:throw Te(23264,{le:n})}}function Nv(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Me(r,e);const n=Jr(r),s=Jr(e),o=Me(n.seconds,s.seconds);return o!==0?o:Me(n.nanos,s.nanos)}function Mv(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=ao(n[o],s[o]);if(u)return u}return Me(n.length,s.length)}function oo(r){return um(r)}function um(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Jr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return es(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return pe.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=um(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${um(n.fields[f])}`;return o+"}"}(r.mapValue):Te(61005,{value:r})}function Bc(r){switch(ts(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Eh(r);return e?16+Bc(e):16;case 5:return 2*r.stringValue.length;case 6:return es(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Bc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return na(s.fields,(u,f)=>{o+=u.length+Bc(f)}),o}(r.mapValue);default:throw Te(13486,{value:r})}}function cm(r){return!!r&&"integerValue"in r}function Fm(r){return!!r&&"arrayValue"in r}function Vv(r){return!!r&&"nullValue"in r}function xv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function qc(r){return!!r&&"mapValue"in r}function _I(r){var e,n;return((n=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[PT])===null||n===void 0?void 0:n.stringValue)===UT}function Vl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return na(r.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Vl(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vl(r.arrayValue.values[n]);return e}return Object.assign({},r)}function vI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===yI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.value=e}static empty(){return new Bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!qc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vl(n)}setAll(e){let n=Xt.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Vl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());qc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Oi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];qc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){na(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Bn(Vl(this.value))}}function LT(r){const e=[];return na(r.fields,(n,s)=>{const o=new Xt([n]);if(qc(s)){const u=LT(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)}),new ei(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new nn(e,0,we.min(),we.min(),we.min(),Bn.empty(),0)}static newFoundDocument(e,n,s,o){return new nn(e,1,n,we.min(),s,o,0)}static newNoDocument(e,n){return new nn(e,2,n,we.min(),we.min(),Bn.empty(),0)}static newUnknownDocument(e,n){return new nn(e,3,n,we.min(),we.min(),Bn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n){this.position=e,this.inclusive=n}}function kv(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=pe.comparator(pe.fromName(f.referenceValue),n.key):s=ao(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Pv(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Oi(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n="asc"){this.field=e,this.dir=n}}function TI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{}class xt extends zT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new AI(e,n,s):n==="array-contains"?new wI(e,s):n==="in"?new RI(e,s):n==="not-in"?new II(e,s):n==="array-contains-any"?new CI(e,s):new xt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new SI(e,s):new bI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ao(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(ao(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Di extends zT{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Di(e,n)}matches(e){return jT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function jT(r){return r.op==="and"}function BT(r){return EI(r)&&jT(r)}function EI(r){for(const e of r.filters)if(e instanceof Di)return!1;return!0}function hm(r){if(r instanceof xt)return r.field.canonicalString()+r.op.toString()+oo(r.value);if(BT(r))return r.filters.map(e=>hm(e)).join(",");{const e=r.filters.map(n=>hm(n)).join(",");return`${r.op}(${e})`}}function qT(r,e){return r instanceof xt?function(s,o){return o instanceof xt&&s.op===o.op&&s.field.isEqual(o.field)&&Oi(s.value,o.value)}(r,e):r instanceof Di?function(s,o){return o instanceof Di&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&qT(f,o.filters[m]),!0):!1}(r,e):void Te(19439)}function HT(r){return r instanceof xt?function(n){return`${n.field.canonicalString()} ${n.op} ${oo(n.value)}`}(r):r instanceof Di?function(n){return n.op.toString()+" {"+n.getFilters().map(HT).join(" ,")+"}"}(r):"Filter"}class AI extends xt{constructor(e,n,s){super(e,n,s),this.key=pe.fromName(s.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class SI extends xt{constructor(e,n){super(e,"in",n),this.keys=FT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bI extends xt{constructor(e,n){super(e,"not-in",n),this.keys=FT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function FT(r,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>pe.fromName(s.referenceValue))}class wI extends xt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fm(n)&&Yl(n.arrayValue,this.value)}}class RI extends xt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yl(this.value.arrayValue,n)}}class II extends xt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Yl(this.value.arrayValue,n)}}class CI extends xt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Yl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Pe=null}}function Uv(r,e=null,n=[],s=[],o=null,u=null,f=null){return new OI(r,e,n,s,o,u,f)}function Gm(r){const e=Re(r);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>hm(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Th(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>oo(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>oo(s)).join(",")),e.Pe=n}return e.Pe}function Ym(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!TI(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!qT(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Pv(r.startAt,e.startAt)&&Pv(r.endAt,e.endAt)}function fm(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function DI(r,e,n,s,o,u,f,m){return new Ah(r,e,n,s,o,u,f,m)}function Km(r){return new Ah(r)}function Lv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function NI(r){return r.collectionGroup!==null}function xl(r){const e=Re(r);if(e.Te===null){e.Te=[];const n=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new kt(Xt.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.Te.push(new rh(u,s))}),n.has(Xt.keyField().canonicalString())||e.Te.push(new rh(Xt.keyField(),s))}return e.Te}function bi(r){const e=Re(r);return e.Ie||(e.Ie=MI(e,xl(r))),e.Ie}function MI(r,e){if(r.limitType==="F")return Uv(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new rh(o.field,u)});const n=r.endAt?new ih(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ih(r.startAt.position,r.startAt.inclusive):null;return Uv(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function dm(r,e,n){return new Ah(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Sh(r,e){return Ym(bi(r),bi(e))&&r.limitType===e.limitType}function GT(r){return`${Gm(bi(r))}|lt:${r.limitType}`}function Wa(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>HT(o)).join(", ")}]`),Th(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>oo(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>oo(o)).join(",")),`Target(${s})`}(bi(r))}; limitType=${r.limitType})`}function bh(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of xl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(f,m,p){const y=kv(f,m,p);return f.inclusive?y<=0:y<0}(s.startAt,xl(s),o)||s.endAt&&!function(f,m,p){const y=kv(f,m,p);return f.inclusive?y>=0:y>0}(s.endAt,xl(s),o))}(r,e)}function VI(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function YT(r){return(e,n)=>{let s=!1;for(const o of xl(r)){const u=xI(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function xI(r,e,n){const s=r.field.isKeyField()?pe.comparator(e.key,n.key):function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?ao(p,y):Te(42886)}(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Te(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){na(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return DT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new dt(pe.comparator);function fr(){return kI}const KT=new dt(pe.comparator);function Cl(...r){let e=KT;for(const n of r)e=e.insert(n.key,n);return e}function QT(r){let e=KT;return r.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Fs(){return kl()}function XT(){return kl()}function kl(){return new ia(r=>r.toString(),(r,e)=>r.isEqual(e))}const PI=new dt(pe.comparator),UI=new kt(pe.comparator);function Le(...r){let e=UI;for(const n of r)e=e.add(n);return e}const LI=new kt(Me);function zI(){return LI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eh(e)?"-0":e}}function $T(r){return{integerValue:""+r}}function jI(r,e){return fI(e)?$T(e):Qm(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this._=void 0}}function BI(r,e,n){return r instanceof sh?function(o,u){const f={fields:{[VT]:{stringValue:MT},[kT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Hm(u)&&(u=Eh(u)),u&&(f.fields[xT]=u),{mapValue:f}}(n,e):r instanceof Kl?ZT(r,e):r instanceof Ql?JT(r,e):function(o,u){const f=WT(o,u),m=zv(f)+zv(o.Ee);return cm(f)&&cm(o.Ee)?$T(m):Qm(o.serializer,m)}(r,e)}function qI(r,e,n){return r instanceof Kl?ZT(r,e):r instanceof Ql?JT(r,e):n}function WT(r,e){return r instanceof ah?function(s){return cm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class sh extends wh{}class Kl extends wh{constructor(e){super(),this.elements=e}}function ZT(r,e){const n=eE(e);for(const s of r.elements)n.some(o=>Oi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Ql extends wh{constructor(e){super(),this.elements=e}}function JT(r,e){let n=eE(e);for(const s of r.elements)n=n.filter(o=>!Oi(o,s));return{arrayValue:{values:n}}}class ah extends wh{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function zv(r){return vt(r.integerValue||r.doubleValue)}function eE(r){return Fm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function HI(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Kl&&o instanceof Kl||s instanceof Ql&&o instanceof Ql?so(s.elements,o.elements,Oi):s instanceof ah&&o instanceof ah?Oi(s.Ee,o.Ee):s instanceof sh&&o instanceof sh}(r.transform,e.transform)}class FI{constructor(e,n){this.version=e,this.transformResults=n}}class lr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new lr}static exists(e){return new lr(void 0,e)}static updateTime(e){return new lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Rh{}function tE(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new iE(r.key,lr.none()):new nu(r.key,r.data,lr.none());{const n=r.data,s=Bn.empty();let o=new kt(Xt.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new ra(r.key,s,new ei(o.toArray()),lr.none())}}function GI(r,e,n){r instanceof nu?function(o,u,f){const m=o.value.clone(),p=Bv(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,e,n):r instanceof ra?function(o,u,f){if(!Hc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=Bv(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(nE(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function Pl(r,e,n,s){return r instanceof nu?function(u,f,m,p){if(!Hc(u.precondition,f))return m;const y=u.value.clone(),E=qv(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,e,n,s):r instanceof ra?function(u,f,m,p){if(!Hc(u.precondition,f))return m;const y=qv(u.fieldTransforms,p,f),E=f.data;return E.setAll(nE(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(C=>C.field))}(r,e,n,s):function(u,f,m){return Hc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,e,n)}function YI(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=WT(s.transform,o||null);u!=null&&(n===null&&(n=Bn.empty()),n.set(s.field,u))}return n||null}function jv(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&so(s,o,(u,f)=>HI(u,f))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class nu extends Rh{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ra extends Rh{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function nE(r){const e=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}}),e}function Bv(r,e,n){const s=new Map;Xe(r.length===n.length,32656,{Ae:n.length,Re:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,qI(f,m,n[o]))}return s}function qv(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,BI(u,f,e))}return s}class iE extends Rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KI extends Rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&GI(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Pl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Pl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=XT();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=tE(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Le())}isEqual(e){return this.batchId===e.batchId&&so(this.mutations,e.mutations,(n,s)=>jv(n,s))&&so(this.baseMutations,e.baseMutations,(n,s)=>jv(n,s))}}class Xm{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){Xe(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=function(){return PI}();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Xm(e,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,qe;function WI(r){switch(r){case $.OK:return Te(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return Te(15467,{code:r})}}function rE(r){if(r===void 0)return hr("GRPC error has no .code"),$.UNKNOWN;switch(r){case wt.OK:return $.OK;case wt.CANCELLED:return $.CANCELLED;case wt.UNKNOWN:return $.UNKNOWN;case wt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case wt.INTERNAL:return $.INTERNAL;case wt.UNAVAILABLE:return $.UNAVAILABLE;case wt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case wt.NOT_FOUND:return $.NOT_FOUND;case wt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case wt.ABORTED:return $.ABORTED;case wt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case wt.DATA_LOSS:return $.DATA_LOSS;default:return Te(39323,{code:r})}}(qe=wt||(wt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new Qr([4294967295,4294967295],0);function Hv(r){const e=IT().encode(r),n=new vT;return n.update(e),new Uint8Array(n.digest())}function Fv(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Qr([n,s],0),new Qr([o,u],0)]}class $m{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ol(`Invalid padding: ${n}`);if(s<0)throw new Ol(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ol(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ol(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Qr.fromNumber(this.fe)}pe(e,n,s){let o=e.add(n.multiply(Qr.fromNumber(s)));return o.compare(ZI)===1&&(o=new Qr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Hv(e),[s,o]=Fv(n);for(let u=0;u<this.hashCount;u++){const f=this.pe(s,o,u);if(!this.ye(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new $m(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.fe===0)return;const n=Hv(e),[s,o]=Fv(n);for(let u=0;u<this.hashCount;u++){const f=this.pe(s,o,u);this.we(f)}}we(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ol extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,iu.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ih(we.min(),o,new dt(Me),fr(),Le())}}class iu{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new iu(s,n,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,s,o){this.Se=e,this.removedTargetIds=n,this.key=s,this.be=o}}class sE{constructor(e,n){this.targetId=e,this.De=n}}class aE{constructor(e,n,s=$t.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Gv{constructor(){this.ve=0,this.Ce=Yv(),this.Fe=$t.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Le(),n=Le(),s=Le();return this.Ce.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Te(38017,{changeType:u})}}),new iu(this.Fe,this.Me,e,n,s)}ke(){this.xe=!1,this.Ce=Yv()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Xe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class JI{constructor(e){this.We=e,this.Ge=new Map,this.ze=fr(),this.je=Mc(),this.Je=Mc(),this.He=new dt(Me)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const s=this.tt(n);switch(e.state){case 0:this.nt(n)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),s.Be(e.resumeToken));break;default:Te(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((s,o)=>{this.nt(o)&&n(o)})}it(e){const n=e.targetId,s=e.De.count,o=this.st(n);if(o){const u=o.target;if(fm(u))if(s===0){const f=new pe(u.path);this.Xe(n,f,nn.newNoDocument(f,we.min()))}else Xe(s===1,20013,{expectedCount:s});else{const f=this.ot(n);if(f!==s){const m=this._t(e),p=m?this.ut(m,e,f):1;if(p!==0){this.rt(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,y)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=es(s).toUint8Array()}catch(p){if(p instanceof NT)return Wr("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new $m(f,o,u)}catch(p){return Wr(p instanceof Ol?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.fe===0?null:m}ut(e,n,s){return n.De.count===s-this.ht(e,n.targetId)?0:2}ht(e,n){const s=this.We.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.We.lt(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(n,u,null),o++)}),o}Pt(e){const n=new Map;this.Ge.forEach((u,f)=>{const m=this.st(f);if(m){if(u.current&&fm(m.target)){const p=new pe(m.target.path);this.Tt(p).has(f)||this.It(f,p)||this.Xe(f,p,nn.newNoDocument(p,e))}u.Ne&&(n.set(f,u.Le()),u.ke())}});let s=Le();this.Je.forEach((u,f)=>{let m=!0;f.forEachWhile(p=>{const y=this.st(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ze.forEach((u,f)=>f.setReadTime(e));const o=new Ih(e,n,this.He,this.ze,s);return this.ze=fr(),this.je=Mc(),this.Je=Mc(),this.He=new dt(Me),o}Ze(e,n){if(!this.nt(e))return;const s=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,s),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,n)?o.qe(n,1):o.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),s&&(this.ze=this.ze.insert(n,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Gv,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new kt(Me),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new kt(Me),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||oe("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Gv),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Mc(){return new dt(pe.comparator)}function Yv(){return new dt(pe.comparator)}const eC={asc:"ASCENDING",desc:"DESCENDING"},tC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nC={and:"AND",or:"OR"};class iC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mm(r,e){return r.useProto3Json||Th(e)?e:{value:e}}function oh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oE(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function rC(r,e){return oh(r,e.toTimestamp())}function wi(r){return Xe(!!r,49232),we.fromTimestamp(function(n){const s=Jr(n);return new ot(s.seconds,s.nanos)}(r))}function Wm(r,e){return gm(r,e).canonicalString()}function gm(r,e){const n=function(o){return new ft(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?n:n.child(e)}function lE(r){const e=ft.fromString(r);return Xe(dE(e),10190,{key:e.toString()}),e}function pm(r,e){return Wm(r.databaseId,e.path)}function Gd(r,e){const n=lE(e);if(n.get(1)!==r.databaseId.projectId)throw new de($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new de($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new pe(cE(n))}function uE(r,e){return Wm(r.databaseId,e)}function sC(r){const e=lE(r);return e.length===4?ft.emptyPath():cE(e)}function ym(r){return new ft(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function cE(r){return Xe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Kv(r,e,n){return{name:pm(r,e),fields:n.value.mapValue.fields}}function aC(r,e){let n;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Te(39313,{state:y})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(Xe(E===void 0||typeof E=="string",58123),$t.fromBase64String(E||"")):(Xe(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),$t.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(y){const E=y.code===void 0?$.UNKNOWN:rE(y.code);return new de(E,y.message||"")}(f);n=new aE(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Gd(r,s.document.name),u=wi(s.document.updateTime),f=s.document.createTime?wi(s.document.createTime):we.min(),m=new Bn({mapValue:{fields:s.document.fields}}),p=nn.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new Fc(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Gd(r,s.document),u=s.readTime?wi(s.readTime):we.min(),f=nn.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Fc([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Gd(r,s.document),u=s.removedTargetIds||[];n=new Fc([],u,o,null)}else{if(!("filter"in e))return Te(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new $I(o,u),m=s.targetId;n=new sE(m,f)}}return n}function oC(r,e){let n;if(e instanceof nu)n={update:Kv(r,e.key,e.value)};else if(e instanceof iE)n={delete:pm(r,e.key)};else if(e instanceof ra)n={update:Kv(r,e.key,e.data),updateMask:pC(e.fieldMask)};else{if(!(e instanceof KI))return Te(16599,{Rt:e.type});n={verify:pm(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof sh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Kl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ql)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ah)return{fieldPath:f.field.canonicalString(),increment:m.Ee};throw Te(20930,{transform:f.transform})}(0,s))),e.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:rC(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Te(27497)}(r,e.precondition)),n}function lC(r,e){return r&&r.length>0?(Xe(e!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?wi(o.updateTime):wi(u);return f.isEqual(we.min())&&(f=wi(u)),new FI(f,o.transformResults||[])}(n,e))):[]}function uC(r,e){return{documents:[uE(r,e.path)]}}function cC(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=uE(r,o);const u=function(y){if(y.length!==0)return fE(Di.create(y,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(E=>function(I){return{field:Za(I.field),direction:dC(I.dir)}}(E))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=mm(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{Vt:n,parent:o}}function hC(r){let e=sC(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Xe(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=function(C){const I=hE(C);return I instanceof Di&&BT(I)?I.getFilters():[I]}(n.where));let f=[];n.orderBy&&(f=function(C){return C.map(I=>function(J){return new rh(Ja(J.field),function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(J.direction))}(I))}(n.orderBy));let m=null;n.limit&&(m=function(C){let I;return I=typeof C=="object"?C.value:C,Th(I)?null:I}(n.limit));let p=null;n.startAt&&(p=function(C){const I=!!C.before,q=C.values||[];return new ih(q,I)}(n.startAt));let y=null;return n.endAt&&(y=function(C){const I=!C.before,q=C.values||[];return new ih(q,I)}(n.endAt)),DI(e,o,f,u,m,"F",p,y)}function fC(r,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:o})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hE(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ja(n.unaryFilter.field);return xt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ja(n.unaryFilter.field);return xt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ja(n.unaryFilter.field);return xt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ja(n.unaryFilter.field);return xt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}}(r):r.fieldFilter!==void 0?function(n){return xt.create(Ja(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Di.create(n.compositeFilter.filters.map(s=>hE(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te(1026)}}(n.compositeFilter.op))}(r):Te(30097,{filter:r})}function dC(r){return eC[r]}function mC(r){return tC[r]}function gC(r){return nC[r]}function Za(r){return{fieldPath:r.canonicalString()}}function Ja(r){return Xt.fromServerFormat(r.fieldPath)}function fE(r){return r instanceof xt?function(n){if(n.op==="=="){if(xv(n.value))return{unaryFilter:{field:Za(n.field),op:"IS_NAN"}};if(Vv(n.value))return{unaryFilter:{field:Za(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xv(n.value))return{unaryFilter:{field:Za(n.field),op:"IS_NOT_NAN"}};if(Vv(n.value))return{unaryFilter:{field:Za(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Za(n.field),op:mC(n.op),value:n.value}}}(r):r instanceof Di?function(n){const s=n.getFilters().map(o=>fE(o));return s.length===1?s[0]:{compositeFilter:{op:gC(n.op),filters:s}}}(r):Te(54877,{filter:r})}function pC(r){const e=[];return r.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,s,o,u=we.min(),f=we.min(),m=$t.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.gt=e}}function _C(r){const e=hC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?dm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(){this.Dn=new TC}addToCollectionParentIndex(e,n){return this.Dn.add(n),Q.resolve()}getCollectionParents(e,n){return Q.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return Q.resolve()}deleteFieldIndex(e,n){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,n){return Q.resolve()}getDocumentsMatchingTarget(e,n){return Q.resolve(null)}getIndexType(e,n){return Q.resolve(0)}getFieldIndexes(e,n){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,n){return Q.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return Q.resolve(Zr.min())}updateCollectionGroup(e,n,s){return Q.resolve()}updateIndexEntries(e,n){return Q.resolve()}}class TC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new kt(ft.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new kt(ft.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mE=41943040;class mn{static withCacheSize(e){return new mn(e,mn.DEFAULT_COLLECTION_PERCENTILE,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn.DEFAULT_COLLECTION_PERCENTILE=10,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mn.DEFAULT=new mn(mE,mn.DEFAULT_COLLECTION_PERCENTILE,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mn.DISABLED=new mn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new lo(0)}static ur(){return new lo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="LruGarbageCollector",EC=1048576;function $v([r,e],[n,s]){const o=Me(r,n);return o===0?Me(e,s):o}class AC{constructor(e){this.Tr=e,this.buffer=new kt($v),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();$v(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class SC{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){oe(Xv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){po(n)?oe(Xv,"Ignoring IndexedDB error during garbage collection: ",n):await go(n)}await this.Rr(3e5)})}}class bC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return Q.resolve(vh.ue);const s=new AC(n);return this.Vr.forEachTarget(e,o=>s.Er(o.sequenceNumber)).next(()=>this.Vr.gr(e,o=>s.Er(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(Qv)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qv):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let s,o,u,f,m,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),o=this.params.maximumSequenceNumbersToCollect):o=C,f=Date.now(),this.nthSequenceNumber(e,o))).next(C=>(s=C,m=Date.now(),this.removeTargets(e,s,n))).next(C=>(u=C,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(C=>(y=Date.now(),$a()<=Ue.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${C} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:C})))}}function wC(r,e){return new bC(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.changes=new ia(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Q.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&Pl(s.mutation,o,ei.empty(),ot.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Le()){const o=Fs();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=Cl();return u.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=Fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Le()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=fr();const f=kl(),m=function(){return kl()}();return n.forEach((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof ra)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),Pl(E.mutation,y,E.mutation.getFieldMask(),ot.now())):f.set(y.key,ei.empty())}),this.recalculateAndSaveOverlays(e,u).next(p=>(p.forEach((y,E)=>f.set(y,E)),n.forEach((y,E)=>{var C;return m.set(y,new IC(E,(C=f.get(y))!==null&&C!==void 0?C:null))}),m))}recalculateAndSaveOverlays(e,n){const s=kl();let o=new dt((f,m)=>f-m),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||ei.empty();E=m.applyToLocalView(y,E),s.set(p,E);const C=(o.get(m.batchId)||Le()).add(p);o=o.insert(m.batchId,C)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,C=XT();E.forEach(I=>{if(!u.has(I)){const q=tE(n.get(I),s.get(I));q!==null&&C.set(I,q),u=u.add(I)}}),f.push(this.documentOverlayCache.saveOverlays(e,y,C))}return Q.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return pe.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):NI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):Q.resolve(Fs());let m=Hl,p=u;return f.next(y=>Q.forEach(y,(E,C)=>(m<C.largestBatchId&&(m=C.largestBatchId),u.get(E)?Q.resolve():this.remoteDocumentCache.getEntry(e,E).next(I=>{p=p.insert(E,I)}))).next(()=>this.populateOverlays(e,y,u)).next(()=>this.computeViews(e,p,y,Le())).next(E=>({batchId:m,changes:QT(E)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new pe(n)).next(s=>{let o=Cl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Cl();return this.indexManager.getCollectionParents(e,u).next(m=>Q.forEach(m,p=>{const y=function(C,I){return new Ah(I,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(E=>{E.forEach((C,I)=>{f=f.insert(C,I)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,nn.newInvalidDocument(E)))});let m=Cl();return f.forEach((p,y)=>{const E=u.get(p);E!==void 0&&Pl(E.mutation,y,ei.empty(),ot.now()),bh(n,y)&&(m=m.insert(p,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return Q.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(o){return{id:o.id,version:o.version,createTime:wi(o.createTime)}}(n)),Q.resolve()}getNamedQuery(e,n){return Q.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(o){return{name:o.name,query:_C(o.bundledQuery),readTime:wi(o.readTime)}}(n)),Q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(){this.overlays=new dt(pe.comparator),this.kr=new Map}getOverlay(e,n){return Q.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Fs();return Q.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.wt(e,n,u)}),Q.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.kr.delete(s)),Q.resolve()}getOverlaysForCollection(e,n,s){const o=Fs(),u=n.length+1,f=new pe(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new dt((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Fs(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=Fs(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>m.set(y,E)),!(m.size()>=o)););return Q.resolve(m)}wt(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new XI(n,s));let u=this.kr.get(n);u===void 0&&(u=Le(),this.kr.set(n,u)),this.kr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.sessionToken=$t.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.qr=new kt(Bt.Qr),this.$r=new kt(Bt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const s=new Bt(e,n);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Wr(new Bt(e,n))}Gr(e,n){e.forEach(s=>this.removeReference(s,n))}zr(e){const n=new pe(new ft([])),s=new Bt(n,e),o=new Bt(n,e+1),u=[];return this.$r.forEachInRange([s,o],f=>{this.Wr(f),u.push(f.key)}),u}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new pe(new ft([])),s=new Bt(n,e),o=new Bt(n,e+1);let u=Le();return this.$r.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new Bt(e,0),s=this.qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Bt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return pe.comparator(e.key,n.key)||Me(e.Hr,n.Hr)}static Ur(e,n){return Me(e.Hr,n.Hr)||pe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new kt(Bt.Qr)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new QI(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Yr=this.Yr.add(new Bt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return Q.resolve(f)}lookupMutationBatch(e,n){return Q.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.Xr(s),u=o<0?0:o;return Q.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?qm:this.er-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Bt(n,0),o=new Bt(n,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],f=>{const m=this.Zr(f.Hr);u.push(m)}),Q.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new kt(Me);return n.forEach(o=>{const u=new Bt(o,0),f=new Bt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,f],m=>{s=s.add(m.Hr)})}),Q.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;pe.isDocumentKey(u)||(u=u.child(""));const f=new Bt(new pe(u),0);let m=new kt(Me);return this.Yr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Hr)),!0)},f),Q.resolve(this.ei(m))}ei(e){const n=[];return e.forEach(s=>{const o=this.Zr(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Xe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return Q.forEach(n.mutations,o=>{const u=new Bt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,n){const s=new Bt(n,0),o=this.Yr.firstAfterOrEqual(s);return Q.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.ni=e,this.docs=function(){return new dt(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ni(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return Q.resolve(s?s.document.mutableCopy():nn.newInvalidDocument(n))}getEntries(e,n){let s=fr();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():nn.newInvalidDocument(o))}),Q.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=fr();const f=n.path,m=new pe(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||lI(oI(E),s)<=0||(o.has(E.key)||bh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return Q.resolve(u)}getAllFromCollectionGroup(e,n,s,o){Te(9500)}ri(e,n){return Q.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new xC(this)}getSize(e){return Q.resolve(this.size)}}class xC extends RC{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)}),Q.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.persistence=e,this.ii=new ia(n=>Gm(n),Ym),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new Zm,this.targetCount=0,this._i=lo.ar()}forEachTarget(e,n){return this.ii.forEach((s,o)=>n(o)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.si&&(this.si=n),Q.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new lo(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,Q.resolve()}updateTargetData(e,n){return this.hr(n),Q.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.ii.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.ii.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),Q.waitFor(u).next(()=>o)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,n){const s=this.ii.get(n)||null;return Q.resolve(s)}addMatchingKeys(e,n,s){return this.oi.Kr(n,s),Q.resolve()}removeMatchingKeys(e,n,s){this.oi.Gr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),Q.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),Q.resolve()}getMatchingKeysForTargetId(e,n){const s=this.oi.Jr(n);return Q.resolve(s)}containsKey(e,n){return Q.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n){this.ai={},this.overlays={},this.ui=new vh(0),this.ci=!1,this.ci=!0,this.li=new NC,this.referenceDelegate=e(this),this.hi=new kC(this),this.indexManager=new vC,this.remoteDocumentCache=function(o){return new VC(o)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new yC(n),this.Ti=new OC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ai[e.toKey()];return s||(s=new MC(n,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,s){oe("MemoryPersistence","Starting transaction:",e);const o=new PC(this.ui.next());return this.referenceDelegate.Ii(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ei(e,n){return Q.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,n)))}}class PC extends cI{constructor(e){super(),this.currentSequenceNumber=e}}class Jm{constructor(e){this.persistence=e,this.Ai=new Zm,this.Ri=null}static Vi(e){return new Jm(e)}get mi(){if(this.Ri)return this.Ri;throw Te(60996)}addReference(e,n,s){return this.Ai.addReference(s,n),this.mi.delete(s.toString()),Q.resolve()}removeReference(e,n,s){return this.Ai.removeReference(s,n),this.mi.add(s.toString()),Q.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),Q.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(o=>this.mi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.mi.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.mi,s=>{const o=pe.fromPath(s);return this.fi(e,o).next(u=>{u||n.removeEntry(o,we.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(s=>{s?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return Q.or([()=>Q.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class lh{constructor(e,n){this.persistence=e,this.gi=new ia(s=>dI(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=wC(this,n)}static Vi(e,n){return new lh(e,n)}Ii(){}di(e){return Q.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}yr(e){let n=0;return this.gr(e,s=>{n++}).next(()=>n)}gr(e,n){return Q.forEach(this.gi,(s,o)=>this.Sr(e,s,o).next(u=>u?Q.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,f=>this.Sr(e,f,n).next(m=>{m||(s++,u.removeEntry(f,we.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),Q.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),Q.resolve()}removeReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),Q.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Bc(e.data.value)),n}Sr(e,n,s){return Q.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.gi.get(n);return Q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Is=s,this.ds=o}static Es(e,n){let s=Le(),o=Le();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new eg(e,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return db()?8:hI(rn())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.ps(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ys(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new UC;return this.ws(e,n,f).next(m=>{if(u.result=m,this.Rs)return this.Ss(e,n,f,m.size)})}).next(()=>u.result)}Ss(e,n,s,o){return s.documentReadCount<this.Vs?($a()<=Ue.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Wa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Q.resolve()):($a()<=Ue.DEBUG&&oe("QueryEngine","Query:",Wa(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?($a()<=Ue.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Wa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bi(n))):Q.resolve())}ps(e,n){if(Lv(n))return Q.resolve(null);let s=bi(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=dm(n,null,"F"),s=bi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=Le(...u);return this.gs.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(p=>{const y=this.bs(n,m);return this.Ds(n,y,f,p.readTime)?this.ps(e,dm(n,null,"F")):this.vs(e,y,n,p)}))})))}ys(e,n,s,o){return Lv(n)||o.isEqual(we.min())?Q.resolve(null):this.gs.getDocuments(e,s).next(u=>{const f=this.bs(n,u);return this.Ds(n,f,s,o)?Q.resolve(null):($a()<=Ue.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Wa(n)),this.vs(e,f,n,aI(o,Hl)).next(m=>m))})}bs(e,n){let s=new kt(YT(e));return n.forEach((o,u)=>{bh(e,u)&&(s=s.add(u))}),s}Ds(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,n,s){return $a()<=Ue.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Wa(n)),this.gs.getDocumentsMatchingQuery(e,n,Zr.min(),s)}vs(e,n,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="LocalStore",zC=3e8;class jC{constructor(e,n,s,o){this.persistence=e,this.Cs=n,this.serializer=o,this.Fs=new dt(Me),this.Ms=new ia(u=>Gm(u),Ym),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function BC(r,e,n,s){return new jC(r,e,n,s)}async function pE(r,e){const n=Re(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Ns(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let p=Le();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next(y=>({Bs:y,removedBatchIds:f,addedBatchIds:m}))})})}function qC(r,e){const n=Re(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=n.Os.newChangeBuffer({trackRemovals:!0});return function(m,p,y,E){const C=y.batch,I=C.keys();let q=Q.resolve();return I.forEach(J=>{q=q.next(()=>E.getEntry(p,J)).next(re=>{const Z=y.docVersions.get(J);Xe(Z!==null,48541),re.version.compareTo(Z)<0&&(C.applyToRemoteDocument(re,y),re.isValidDocument()&&(re.setReadTime(y.commitVersion),E.addEntry(re)))})}),q.next(()=>m.mutationQueue.removeMutationBatch(p,C))}(n,s,e,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=Le();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p}(e))).next(()=>n.localDocuments.getDocuments(s,o))})}function yE(r){const e=Re(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function HC(r,e){const n=Re(r),s=e.snapshotVersion;let o=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Os.newChangeBuffer({trackRemovals:!0});o=n.Fs;const m=[];e.targetChanges.forEach((E,C)=>{const I=o.get(C);if(!I)return;m.push(n.hi.removeMatchingKeys(u,E.removedDocuments,C).next(()=>n.hi.addMatchingKeys(u,E.addedDocuments,C)));let q=I.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(C)!==null?q=q.withResumeToken($t.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(E.resumeToken,s)),o=o.insert(C,q),function(re,Z,Se){return re.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-re.snapshotVersion.toMicroseconds()>=zC?!0:Se.addedDocuments.size+Se.modifiedDocuments.size+Se.removedDocuments.size>0}(I,q,E)&&m.push(n.hi.updateTargetData(u,q))});let p=fr(),y=Le();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(FC(u,f,e.documentUpdates).next(E=>{p=E.Ls,y=E.ks})),!s.isEqual(we.min())){const E=n.hi.getLastRemoteSnapshotVersion(u).next(C=>n.hi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return Q.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(n.Fs=o,u))}function FC(r,e,n){let s=Le(),o=Le();return n.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let f=fr();return n.forEach((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):oe(tg,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{Ls:f,ks:o}})}function GC(r,e){const n=Re(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=qm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function YC(r,e){const n=Re(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.hi.getTargetData(s,e).next(u=>u?(o=u,Q.resolve(o)):n.hi.allocateTargetId(s).next(f=>(o=new Gr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.hi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(s.targetId,s),n.Ms.set(e,s.targetId)),s})}async function _m(r,e,n){const s=Re(r),o=s.Fs.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!po(f))throw f;oe(tg,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function Wv(r,e,n){const s=Re(r);let o=we.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,E){const C=Re(p),I=C.Ms.get(E);return I!==void 0?Q.resolve(C.Fs.get(I)):C.hi.getTargetData(y,E)}(s,f,bi(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(f,m.targetId).next(p=>{u=p})}).next(()=>s.Cs.getDocumentsMatchingQuery(f,e,n?o:we.min(),n?u:Le())).next(m=>(KC(s,VI(e),m),{documents:m,qs:u})))}function KC(r,e,n){let s=r.xs.get(e)||we.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.xs.set(e,s)}class Zv{constructor(){this.activeTargetIds=zI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QC{constructor(){this.Fo=new Zv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,s){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Zv,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="ConnectivityMonitor";class e0{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){oe(Jv,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){oe(Jv,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc=null;function vm(){return Vc===null?Vc=function(){return 268435456+Math.round(2147483648*Math.random())}():Vc++,"0x"+Vc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="RestConnection",$C={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class WC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===th?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,n,s,o,u){const f=vm(),m=this.Go(e,n.toUriEncodedString());oe(Yd,`Sending RPC '${e}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,u);const{host:y}=new URL(m),E=co(y);return this.jo(e,m,p,s,E).then(C=>(oe(Yd,`Received RPC '${e}' ${f}: `,C),C),C=>{throw Wr(Yd,`RPC '${e}' ${f} failed with error: `,C,"url: ",m,"request:",s),C})}Jo(e,n,s,o,u,f){return this.Wo(e,n,s,o,u)}zo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}Go(e,n){const s=$C[e];return`${this.$o}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="WebChannelConnection";class JC extends WC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,s,o,u){const f=vm();return new Promise((m,p)=>{const y=new TT;y.setWithCredentials(!0),y.listenOnce(ET.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case jc.NO_ERROR:const C=y.getResponseJson();oe(en,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(C)),m(C);break;case jc.TIMEOUT:oe(en,`RPC '${e}' ${f} timed out`),p(new de($.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const I=y.getStatus();if(oe(en,`RPC '${e}' ${f} failed with status:`,I,"response text:",y.getResponseText()),I>0){let q=y.getResponseJson();Array.isArray(q)&&(q=q[0]);const J=q?.error;if(J&&J.status&&J.message){const re=function(Se){const le=Se.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(le)>=0?le:$.UNKNOWN}(J.status);p(new de(re,J.message))}else p(new de($.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new de($.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{c_:e,streamId:f,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{oe(en,`RPC '${e}' ${f} completed.`)}});const E=JSON.stringify(o);oe(en,`RPC '${e}' ${f} sending request:`,o),y.send(n,"POST",E,s,15)})}P_(e,n,s){const o=vm(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=bT(),m=ST(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");oe(en,`Creating RPC '${e}' stream ${o}: ${E}`,p);const C=f.createWebChannel(E,p);this.T_(C);let I=!1,q=!1;const J=new ZC({Ho:Z=>{q?oe(en,`Not sending because RPC '${e}' stream ${o} is closed:`,Z):(I||(oe(en,`Opening RPC '${e}' stream ${o} transport.`),C.open(),I=!0),oe(en,`RPC '${e}' stream ${o} sending:`,Z),C.send(Z))},Yo:()=>C.close()}),re=(Z,Se,le)=>{Z.listen(Se,ae=>{try{le(ae)}catch(Ve){setTimeout(()=>{throw Ve},0)}})};return re(C,Il.EventType.OPEN,()=>{q||(oe(en,`RPC '${e}' stream ${o} transport opened.`),J.s_())}),re(C,Il.EventType.CLOSE,()=>{q||(q=!0,oe(en,`RPC '${e}' stream ${o} transport closed`),J.__(),this.I_(C))}),re(C,Il.EventType.ERROR,Z=>{q||(q=!0,Wr(en,`RPC '${e}' stream ${o} transport errored. Name:`,Z.name,"Message:",Z.message),J.__(new de($.UNAVAILABLE,"The operation could not be completed")))}),re(C,Il.EventType.MESSAGE,Z=>{var Se;if(!q){const le=Z.data[0];Xe(!!le,16349);const ae=le,Ve=ae?.error||((Se=ae[0])===null||Se===void 0?void 0:Se.error);if(Ve){oe(en,`RPC '${e}' stream ${o} received error:`,Ve);const ge=Ve.status;let De=function(R){const M=wt[R];if(M!==void 0)return rE(M)}(ge),N=Ve.message;De===void 0&&(De=$.INTERNAL,N="Unknown error status: "+ge+" with message "+Ve.message),q=!0,J.__(new de(De,N)),C.close()}else oe(en,`RPC '${e}' stream ${o} received:`,le),J.a_(le)}}),re(m,AT.STAT_EVENT,Z=>{Z.stat===om.PROXY?oe(en,`RPC '${e}' stream ${o} detected buffering proxy`):Z.stat===om.NOPROXY&&oe(en,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{J.o_()},0),J}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Kd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(r){return new iC(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=n,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,n-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="PersistentStream";class vE{constructor(e,n,s,o,u,f,m,p){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new _E(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.b_===n&&this.W_(s,o)},s=>{e(()=>{const o=new de($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)})})}W_(e,n){const s=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{s(()=>this.G_(o))}),this.stream.onMessage(o=>{s(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return oe(t0,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(oe(t0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class e2 extends vE{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=aC(this.serializer,e),s=function(u){if(!("targetChange"in u))return we.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?we.min():f.readTime?wi(f.readTime):we.min()}(e);return this.listener.J_(n,s)}H_(e){const n={};n.database=ym(this.serializer),n.addTarget=function(u,f){let m;const p=f.target;if(m=fm(p)?{documents:uC(u,p)}:{query:cC(u,p).Vt},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=oE(u,f.resumeToken);const y=mm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(we.min())>0){m.readTime=oh(u,f.snapshotVersion.toTimestamp());const y=mm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,e);const s=fC(this.serializer,e);s&&(n.labels=s),this.k_(n)}Y_(e){const n={};n.database=ym(this.serializer),n.removeTarget=e,this.k_(n)}}class t2 extends vE{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=lC(e.writeResults,e.commitTime),s=wi(e.commitTime);return this.listener.ta(s,n)}na(){const e={};e.database=ym(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>oC(this.serializer,s))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{}class i2 extends n2{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new de($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Wo(e,gm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new de($.UNKNOWN,u.toString())})}Jo(e,n,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Jo(e,gm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new de($.UNKNOWN,f.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class r2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(hr(n),this._a=!1):oe("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="RemoteStore";class s2{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo(f=>{s.enqueueAndForget(async()=>{sa(this)&&(oe($s,"Restarting streams for network reachability change."),await async function(p){const y=Re(p);y.Ia.add(4),await ru(y),y.Aa.set("Unknown"),y.Ia.delete(4),await Oh(y)}(this))})}),this.Aa=new r2(s,o)}}async function Oh(r){if(sa(r))for(const e of r.da)await e(!0)}async function ru(r){for(const e of r.da)await e(!1)}function TE(r,e){const n=Re(r);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),sg(n)?rg(n):yo(n).x_()&&ig(n,e))}function ng(r,e){const n=Re(r),s=yo(n);n.Ta.delete(e),s.x_()&&EE(n,e),n.Ta.size===0&&(s.x_()?s.B_():sa(n)&&n.Aa.set("Unknown"))}function ig(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}yo(r).H_(e)}function EE(r,e){r.Ra.$e(e),yo(r).Y_(e)}function rg(r){r.Ra=new JI({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),yo(r).start(),r.Aa.aa()}function sg(r){return sa(r)&&!yo(r).M_()&&r.Ta.size>0}function sa(r){return Re(r).Ia.size===0}function AE(r){r.Ra=void 0}async function a2(r){r.Aa.set("Online")}async function o2(r){r.Ta.forEach((e,n)=>{ig(r,e)})}async function l2(r,e){AE(r),sg(r)?(r.Aa.la(e),rg(r)):r.Aa.set("Unknown")}async function u2(r,e,n){if(r.Aa.set("Online"),e instanceof aE&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ta.delete(m),o.Ra.removeTarget(m))}(r,e)}catch(s){oe($s,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await uh(r,s)}else if(e instanceof Fc?r.Ra.Ye(e):e instanceof sE?r.Ra.it(e):r.Ra.et(e),!n.isEqual(we.min()))try{const s=await yE(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.Ra.Pt(f);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.Ta.get(y);E&&u.Ta.set(y,E.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,y)=>{const E=u.Ta.get(p);if(!E)return;u.Ta.set(p,E.withResumeToken($t.EMPTY_BYTE_STRING,E.snapshotVersion)),EE(u,p);const C=new Gr(E.target,p,y,E.sequenceNumber);ig(u,C)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){oe($s,"Failed to raise snapshot:",s),await uh(r,s)}}async function uh(r,e,n){if(!po(e))throw e;r.Ia.add(1),await ru(r),r.Aa.set("Offline"),n||(n=()=>yE(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{oe($s,"Retrying IndexedDB access"),await n(),r.Ia.delete(1),await Oh(r)})}function SE(r,e){return e().catch(n=>uh(r,n,e))}async function Dh(r){const e=Re(r),n=ns(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:qm;for(;c2(e);)try{const o=await GC(e.localStore,s);if(o===null){e.Pa.length===0&&n.B_();break}s=o.batchId,h2(e,o)}catch(o){await uh(e,o)}bE(e)&&wE(e)}function c2(r){return sa(r)&&r.Pa.length<10}function h2(r,e){r.Pa.push(e);const n=ns(r);n.x_()&&n.Z_&&n.X_(e.mutations)}function bE(r){return sa(r)&&!ns(r).M_()&&r.Pa.length>0}function wE(r){ns(r).start()}async function f2(r){ns(r).na()}async function d2(r){const e=ns(r);for(const n of r.Pa)e.X_(n.mutations)}async function m2(r,e,n){const s=r.Pa.shift(),o=Xm.from(s,e,n);await SE(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Dh(r)}async function g2(r,e){e&&ns(r).Z_&&await async function(s,o){if(function(f){return WI(f)&&f!==$.ABORTED}(o.code)){const u=s.Pa.shift();ns(s).N_(),await SE(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Dh(s)}}(r,e),bE(r)&&wE(r)}async function n0(r,e){const n=Re(r);n.asyncQueue.verifyOperationInProgress(),oe($s,"RemoteStore received new credentials");const s=sa(n);n.Ia.add(3),await ru(n),s&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Oh(n)}async function p2(r,e){const n=Re(r);e?(n.Ia.delete(2),await Oh(n)):e||(n.Ia.add(2),await ru(n),n.Aa.set("Unknown"))}function yo(r){return r.Va||(r.Va=function(n,s,o){const u=Re(n);return u.ia(),new e2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:a2.bind(null,r),e_:o2.bind(null,r),n_:l2.bind(null,r),J_:u2.bind(null,r)}),r.da.push(async e=>{e?(r.Va.N_(),sg(r)?rg(r):r.Aa.set("Unknown")):(await r.Va.stop(),AE(r))})),r.Va}function ns(r){return r.ma||(r.ma=function(n,s,o){const u=Re(n);return u.ia(),new t2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:f2.bind(null,r),n_:g2.bind(null,r),ea:d2.bind(null,r),ta:m2.bind(null,r)}),r.da.push(async e=>{e?(r.ma.N_(),await Dh(r)):(await r.ma.stop(),r.Pa.length>0&&(oe($s,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new ag(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function og(r,e){if(hr("AsyncQueue",`${e}: ${r}`),po(r))return new de($.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{static emptySet(e){return new ro(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||pe.comparator(n.key,s.key):(n,s)=>pe.comparator(n.key,s.key),this.keyedMap=Cl(),this.sortedSet=new dt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ro)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ro;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.fa=new dt(pe.comparator)}track(e){const n=e.doc.key,s=this.fa.get(n);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(n,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(n):e.type===1&&s.type===2?this.fa=this.fa.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):Te(63341,{At:e,ga:s}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,s)=>{e.push(s)}),e}}class uo{constructor(e,n,s,o,u,f,m,p,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new uo(e,n,ro.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class _2{constructor(){this.queries=r0(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,s){const o=Re(n),u=o.queries;o.queries=r0(),u.forEach((f,m)=>{for(const p of m.wa)p.onError(s)})})(this,new de($.ABORTED,"Firestore shutting down"))}}function r0(){return new ia(r=>GT(r),Sh)}async function v2(r,e){const n=Re(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new y2,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await n.onListen(o,!0);break;case 1:u.ya=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=og(f,`Initialization of query '${Wa(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.wa.push(e),e.va(n.onlineState),u.ya&&e.Ca(u.ya)&&lg(n)}async function T2(r,e){const n=Re(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.wa.indexOf(e);f>=0&&(u.wa.splice(f,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function E2(r,e){const n=Re(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.wa)m.Ca(o)&&(s=!0);f.ya=o}}s&&lg(n)}function A2(r,e,n){const s=Re(r),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(n);s.queries.delete(e)}function lg(r){r.Da.forEach(e=>{e.next()})}var Tm,s0;(s0=Tm||(Tm={})).Fa="default",s0.Cache="cache";class S2{constructor(e,n,s){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new uo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const s=n!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Tm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e){this.key=e}}class IE{constructor(e){this.key=e}}class b2{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Le(),this.mutatedKeys=Le(),this.Xa=YT(e),this.eu=new ro(this.Xa)}get tu(){return this.Ha}nu(e,n){const s=n?n.ru:new i0,o=n?n.eu:this.eu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,C)=>{const I=o.get(E),q=bh(this.query,C)?C:null,J=!!I&&this.mutatedKeys.has(I.key),re=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let Z=!1;I&&q?I.data.isEqual(q.data)?J!==re&&(s.track({type:3,doc:q}),Z=!0):this.iu(I,q)||(s.track({type:2,doc:q}),Z=!0,(p&&this.Xa(q,p)>0||y&&this.Xa(q,y)<0)&&(m=!0)):!I&&q?(s.track({type:0,doc:q}),Z=!0):I&&!q&&(s.track({type:1,doc:I}),Z=!0,(p||y)&&(m=!0)),Z&&(q?(f=f.add(q),u=re?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{eu:f,ru:s,Ds:m,mutatedKeys:u}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const f=e.ru.pa();f.sort((E,C)=>function(q,J){const re=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{At:Z})}};return re(q)-re(J)}(E.type,C.type)||this.Xa(E.doc,C.doc)),this.su(s),o=o!=null&&o;const m=n&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,y=p!==this.Ya;return this.Ya=p,f.length!==0||y?{snapshot:new uo(this.query,e.eu,u,f,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new i0,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Le(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const n=[];return e.forEach(s=>{this.Za.has(s)||n.push(new IE(s))}),this.Za.forEach(s=>{e.has(s)||n.push(new RE(s))}),n}uu(e){this.Ha=e.qs,this.Za=Le();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return uo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ug="SyncEngine";class w2{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class R2{constructor(e){this.key=e,this.lu=!1}}class I2{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.hu={},this.Pu=new ia(m=>GT(m),Sh),this.Tu=new Map,this.Iu=new Set,this.du=new dt(pe.comparator),this.Eu=new Map,this.Au=new Zm,this.Ru={},this.Vu=new Map,this.mu=lo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function C2(r,e,n=!0){const s=VE(r);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await CE(s,e,n,!0),o}async function O2(r,e){const n=VE(r);await CE(n,e,!0,!1)}async function CE(r,e,n,s){const o=await YC(r.localStore,bi(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await D2(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&TE(r.remoteStore,o),m}async function D2(r,e,n,s,o){r.gu=(C,I,q)=>async function(re,Z,Se,le){let ae=Z.view.nu(Se);ae.Ds&&(ae=await Wv(re.localStore,Z.query,!1).then(({documents:N})=>Z.view.nu(N,ae)));const Ve=le&&le.targetChanges.get(Z.targetId),ge=le&&le.targetMismatches.get(Z.targetId)!=null,De=Z.view.applyChanges(ae,re.isPrimaryClient,Ve,ge);return o0(re,Z.targetId,De._u),De.snapshot}(r,C,I,q);const u=await Wv(r.localStore,e,!0),f=new b2(e,u.qs),m=f.nu(u.documents),p=iu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);o0(r,n,y._u);const E=new w2(e,n,f);return r.Pu.set(e,E),r.Tu.has(n)?r.Tu.get(n).push(e):r.Tu.set(n,[e]),y.snapshot}async function N2(r,e,n){const s=Re(r),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter(f=>!Sh(f,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await _m(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&ng(s.remoteStore,o.targetId),Em(s,o.targetId)}).catch(go)):(Em(s,o.targetId),await _m(s.localStore,o.targetId,!0))}async function M2(r,e){const n=Re(r),s=n.Pu.get(e),o=n.Tu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),ng(n.remoteStore,s.targetId))}async function V2(r,e,n){const s=j2(r);try{const o=await function(f,m){const p=Re(f),y=ot.now(),E=m.reduce((q,J)=>q.add(J.key),Le());let C,I;return p.persistence.runTransaction("Locally write mutations","readwrite",q=>{let J=fr(),re=Le();return p.Os.getEntries(q,E).next(Z=>{J=Z,J.forEach((Se,le)=>{le.isValidDocument()||(re=re.add(Se))})}).next(()=>p.localDocuments.getOverlayedDocuments(q,J)).next(Z=>{C=Z;const Se=[];for(const le of m){const ae=YI(le,C.get(le.key).overlayedDocument);ae!=null&&Se.push(new ra(le.key,ae,LT(ae.value.mapValue),lr.exists(!0)))}return p.mutationQueue.addMutationBatch(q,y,Se,m)}).next(Z=>{I=Z;const Se=Z.applyToLocalDocumentSet(C,re);return p.documentOverlayCache.saveOverlays(q,Z.batchId,Se)})}).then(()=>({batchId:I.batchId,changes:QT(C)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,p){let y=f.Ru[f.currentUser.toKey()];y||(y=new dt(Me)),y=y.insert(m,p),f.Ru[f.currentUser.toKey()]=y}(s,o.batchId,n),await su(s,o.changes),await Dh(s.remoteStore)}catch(o){const u=og(o,"Failed to persist write");n.reject(u)}}async function OE(r,e){const n=Re(r);try{const s=await HC(n.localStore,e);e.targetChanges.forEach((o,u)=>{const f=n.Eu.get(u);f&&(Xe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.lu=!0:o.modifiedDocuments.size>0?Xe(f.lu,14607):o.removedDocuments.size>0&&(Xe(f.lu,42227),f.lu=!1))}),await su(n,s,e)}catch(s){await go(s)}}function a0(r,e,n){const s=Re(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Pu.forEach((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=Re(f);p.onlineState=m;let y=!1;p.queries.forEach((E,C)=>{for(const I of C.wa)I.va(m)&&(y=!0)}),y&&lg(p)}(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function x2(r,e,n){const s=Re(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Eu.get(e),u=o&&o.key;if(u){let f=new dt(pe.comparator);f=f.insert(u,nn.newNoDocument(u,we.min()));const m=Le().add(u),p=new Ih(we.min(),new Map,new dt(Me),f,m);await OE(s,p),s.du=s.du.remove(u),s.Eu.delete(e),cg(s)}else await _m(s.localStore,e,!1).then(()=>Em(s,e,n)).catch(go)}async function k2(r,e){const n=Re(r),s=e.batch.batchId;try{const o=await qC(n.localStore,e);NE(n,s,null),DE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await su(n,o)}catch(o){await go(o)}}async function P2(r,e,n){const s=Re(r);try{const o=await function(f,m){const p=Re(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,m).next(C=>(Xe(C!==null,37113),E=C.keys(),p.mutationQueue.removeMutationBatch(y,C))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(s.localStore,e);NE(s,e,n),DE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await su(s,o)}catch(o){await go(o)}}function DE(r,e){(r.Vu.get(e)||[]).forEach(n=>{n.resolve()}),r.Vu.delete(e)}function NE(r,e,n){const s=Re(r);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Em(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),n&&r.hu.pu(s,n);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach(s=>{r.Au.containsKey(s)||ME(r,s)})}function ME(r,e){r.Iu.delete(e.path.canonicalString());const n=r.du.get(e);n!==null&&(ng(r.remoteStore,n),r.du=r.du.remove(e),r.Eu.delete(n),cg(r))}function o0(r,e,n){for(const s of n)s instanceof RE?(r.Au.addReference(s.key,e),U2(r,s)):s instanceof IE?(oe(ug,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||ME(r,s.key)):Te(19791,{yu:s})}function U2(r,e){const n=e.key,s=n.path.canonicalString();r.du.get(n)||r.Iu.has(s)||(oe(ug,"New document in limbo: "+n),r.Iu.add(s),cg(r))}function cg(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const n=new pe(ft.fromString(e)),s=r.mu.next();r.Eu.set(s,new R2(n)),r.du=r.du.insert(n,s),TE(r.remoteStore,new Gr(bi(Km(n.path)),s,"TargetPurposeLimboResolution",vh.ue))}}async function su(r,e,n){const s=Re(r),o=[],u=[],f=[];s.Pu.isEmpty()||(s.Pu.forEach((m,p)=>{f.push(s.gu(p,e,n).then(y=>{var E;if((y||n)&&s.isPrimaryClient){const C=y?!y.fromCache:(E=n?.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,C?"current":"not-current")}if(y){o.push(y);const C=eg.Es(p.targetId,y);u.push(C)}}))}),await Promise.all(f),s.hu.J_(o),await async function(p,y){const E=Re(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>Q.forEach(y,I=>Q.forEach(I.Is,q=>E.persistence.referenceDelegate.addReference(C,I.targetId,q)).next(()=>Q.forEach(I.ds,q=>E.persistence.referenceDelegate.removeReference(C,I.targetId,q)))))}catch(C){if(!po(C))throw C;oe(tg,"Failed to update sequence numbers: "+C)}for(const C of y){const I=C.targetId;if(!C.fromCache){const q=E.Fs.get(I),J=q.snapshotVersion,re=q.withLastLimboFreeSnapshotVersion(J);E.Fs=E.Fs.insert(I,re)}}}(s.localStore,u))}async function L2(r,e){const n=Re(r);if(!n.currentUser.isEqual(e)){oe(ug,"User change. New user:",e.toKey());const s=await pE(n.localStore,e);n.currentUser=e,function(u,f){u.Vu.forEach(m=>{m.forEach(p=>{p.reject(new de($.CANCELLED,f))})}),u.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await su(n,s.Bs)}}function z2(r,e){const n=Re(r),s=n.Eu.get(e);if(s&&s.lu)return Le().add(s.key);{let o=Le();const u=n.Tu.get(e);if(!u)return o;for(const f of u){const m=n.Pu.get(f);o=o.unionWith(m.view.tu)}return o}}function VE(r){const e=Re(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=OE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=z2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=x2.bind(null,e),e.hu.J_=E2.bind(null,e.eventManager),e.hu.pu=A2.bind(null,e.eventManager),e}function j2(r){const e=Re(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=k2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=P2.bind(null,e),e}class ch{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ch(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return BC(this.persistence,new LC,e.initialUser,this.serializer)}Du(e){return new gE(Jm.Vi,this.serializer)}bu(e){return new QC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ch.provider={build:()=>new ch};class B2 extends ch{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Xe(this.persistence.referenceDelegate instanceof lh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new SC(s,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?mn.withCacheSize(this.cacheSizeBytes):mn.DEFAULT;return new gE(s=>lh.Vi(s,n),this.serializer)}}class Am{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>a0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=L2.bind(null,this.syncEngine),await p2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _2}()}createDatastore(e){const n=Ch(e.databaseInfo.databaseId),s=function(u){return new JC(u)}(e.databaseInfo);return function(u,f,m,p){return new i2(u,f,m,p)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new s2(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>a0(this.syncEngine,n,0),function(){return e0.C()?new e0:new XC}())}createSyncEngine(e,n){return function(o,u,f,m,p,y,E){const C=new I2(o,u,f,m,p,y);return E&&(C.fu=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=Re(o);oe($s,"RemoteStore shutting down."),u.Ia.add(5),await ru(u),u.Ea.shutdown(),u.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Am.provider={build:()=>new Am};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="FirestoreClient";class H2{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=tn.UNAUTHENTICATED,this.clientId=jm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{oe(is,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(oe(is,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=og(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Qd(r,e){r.asyncQueue.verifyOperationInProgress(),oe(is,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await pE(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>{Wr("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{oe("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{Wr("Terminating Firestore due to IndexedDb database deletion failed",o)})}),r._offlineComponents=e}async function l0(r,e){r.asyncQueue.verifyOperationInProgress();const n=await F2(r);oe(is,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener(s=>n0(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>n0(e.remoteStore,o)),r._onlineComponents=e}async function F2(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){oe(is,"Using user provided OfflineComponentProvider");try{await Qd(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Wr("Error using user provided cache. Falling back to memory cache: "+n),await Qd(r,new ch)}}else oe(is,"Using default OfflineComponentProvider"),await Qd(r,new B2(void 0));return r._offlineComponents}async function xE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(oe(is,"Using user provided OnlineComponentProvider"),await l0(r,r._uninitializedComponentsProvider._online)):(oe(is,"Using default OnlineComponentProvider"),await l0(r,new Am))),r._onlineComponents}function G2(r){return xE(r).then(e=>e.syncEngine)}async function Y2(r){const e=await xE(r),n=e.eventManager;return n.onListen=C2.bind(null,e.syncEngine),n.onUnlisten=N2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=O2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=M2.bind(null,e.syncEngine),n}function K2(r,e,n={}){const s=new Xr;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,y){const E=new q2({next:I=>{E.Ou(),f.enqueueAndForget(()=>T2(u,C));const q=I.docs.has(m);!q&&I.fromCache?y.reject(new de($.UNAVAILABLE,"Failed to get document because the client is offline.")):q&&I.fromCache&&p&&p.source==="server"?y.reject(new de($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),C=new S2(Km(m.path),E,{includeMetadataChanges:!0,ka:!0});return v2(u,C)}(await Y2(r),r.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="firestore.googleapis.com",c0=!0;class h0{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new de($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=PE,this.ssl=c0}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:c0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=mE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<EC)throw new de($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kE((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new de($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new de($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new de($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hg{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new h0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new h0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new XR;switch(s.type){case"firstParty":return new JR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=u0.get(n);s&&(oe("ComponentProvider","Removing Datastore"),u0.delete(n),s.terminate())}(this),Promise.resolve()}}function Q2(r,e,n,s={}){var o;r=ql(r,hg);const u=co(e),f=r._getSettings(),m=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),p=`${e}:${n}`;u&&(D0(`https://${p}`),N0("Firestore",!0)),f.host!==PE&&f.host!==p&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},f),{host:p,ssl:u,emulatorOptions:s});if(!$r(y,m)&&(r._setSettings(y),s.mockUserToken)){let E,C;if(typeof s.mockUserToken=="string")E=s.mockUserToken,C=tn.MOCK_USER;else{E=sb(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new de($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new tn(I)}r._authCredentials=new $R(new RT(E,C))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new fg(this.firestore,e,this._query)}}class qt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}toJSON(){return{type:qt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(tu(n,qt._jsonSchema))return new qt(e,s||null,new pe(ft.fromString(n.referencePath)))}}qt._jsonSchemaVersion="firestore/documentReference/1.0",qt._jsonSchema={type:Rt("string",qt._jsonSchemaVersion),referencePath:Rt("string")};class Xl extends fg{constructor(e,n,s){super(e,n,Km(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new pe(e))}withConverter(e){return new Xl(this.firestore,e,this._path)}}function js(r,e,...n){if(r=un(r),arguments.length===1&&(e=jm.newId()),rI("doc","path",e),r instanceof hg){const s=ft.fromString(e,...n);return wv(s),new qt(r,null,new pe(s))}{if(!(r instanceof qt||r instanceof Xl))throw new de($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ft.fromString(e,...n));return wv(s),new qt(r.firestore,r instanceof Xl?r.converter:null,new pe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="AsyncQueue";class d0{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new _E(this,"async_queue_retry"),this.oc=()=>{const s=Kd();s&&oe(f0,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const n=Kd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Kd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Xr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!po(e))throw e;oe(f0,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,hr("INTERNAL UNHANDLED ERROR: ",m0(s)),s}).then(s=>(this.nc=!1,s))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const o=ag.createAndSchedule(this,e,n,s,u=>this.lc(u));return this.ec.push(o),o}ac(){this.tc&&Te(47125,{hc:m0(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function m0(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class dg extends hg{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new d0,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new d0(e),this._firestoreClient=void 0,await e}}}function X2(r,e){const n=typeof r=="object"?r:Om(),s=typeof r=="string"?r:th,o=ea(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=ib("firestore");u&&Q2(o,...u)}return o}function UE(r){if(r._terminated)throw new de($.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||$2(r),r._firestoreClient}function $2(r){var e,n,s;const o=r._freezeSettings(),u=function(m,p,y,E){return new pI(m,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,kE(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new H2(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const p=m?._online.build();return{_offline:m?._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qn($t.fromBase64String(e))}catch(n){throw new de($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qn($t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(tu(e,qn._jsonSchema))return qn.fromBase64String(e.bytes)}}qn._jsonSchemaVersion="firestore/bytes/1.0",qn._jsonSchema={type:Rt("string",qn._jsonSchemaVersion),bytes:Rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new de($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new de($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new de($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ri._jsonSchemaVersion}}static fromJSON(e){if(tu(e,Ri._jsonSchema))return new Ri(e.latitude,e.longitude)}}Ri._jsonSchemaVersion="firestore/geoPoint/1.0",Ri._jsonSchema={type:Rt("string",Ri._jsonSchemaVersion),latitude:Rt("number"),longitude:Rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ii._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(tu(e,Ii._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ii(e.vectorValues);throw new de($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ii._jsonSchemaVersion="firestore/vectorValue/1.0",Ii._jsonSchema={type:Rt("string",Ii._jsonSchemaVersion),vectorValues:Rt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=/^__.*__$/;class Z2{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ra(e,this.data,this.fieldMask,n,this.fieldTransforms):new nu(e,this.data,n,this.fieldTransforms)}}function zE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ec:r})}}class gg{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new gg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return hh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(zE(this.Ec)&&W2.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class J2{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ch(e)}Dc(e,n,s,o=!1){return new gg({Ec:e,methodName:n,bc:s,path:Xt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eO(r){const e=r._freezeSettings(),n=Ch(r._databaseId);return new J2(r._databaseId,!!e.ignoreUndefinedProperties,n)}function tO(r,e,n,s,o,u={}){const f=r.Dc(u.merge||u.mergeFields?2:0,e,n,o);HE("Data must be an object, but it was:",f,s);const m=BE(s,f);let p,y;if(u.merge)p=new ei(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const C of u.mergeFields){const I=nO(e,C,n);if(!f.contains(I))throw new de($.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);rO(E,I)||E.push(I)}p=new ei(E),y=f.fieldTransforms.filter(C=>p.covers(C.field))}else p=null,y=f.fieldTransforms;return new Z2(new Bn(m),p,y)}function jE(r,e){if(qE(r=un(r)))return HE("Unsupported field value:",e,r),BE(r,e);if(r instanceof LE)return function(s,o){if(!zE(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let p=jE(m,o.yc(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=un(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return jI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ot.fromDate(s);return{timestampValue:oh(o.serializer,u)}}if(s instanceof ot){const u=new ot(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:oh(o.serializer,u)}}if(s instanceof Ri)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof qn)return{bytesValue:oE(o.serializer,s._byteString)};if(s instanceof qt){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.wc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Wm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ii)return function(f,m){return{mapValue:{fields:{[PT]:{stringValue:UT},[nh]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.wc("VectorValues must only contain numeric values.");return Qm(m.serializer,y)})}}}}}}(s,o);throw o.wc(`Unsupported field value: ${Bm(s)}`)}(r,e)}function BE(r,e){const n={};return DT(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):na(r,(s,o)=>{const u=jE(o,e.Vc(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function qE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ot||r instanceof Ri||r instanceof qn||r instanceof qt||r instanceof LE||r instanceof Ii)}function HE(r,e,n){if(!qE(n)||!CT(n)){const s=Bm(n);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function nO(r,e,n){if((e=un(e))instanceof mg)return e._internalPath;if(typeof e=="string")return FE(r,e);throw hh("Field path arguments must be of type string or ",r,!1,void 0,n)}const iO=new RegExp("[~\\*/\\[\\]]");function FE(r,e,n){if(e.search(iO)>=0)throw hh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new mg(...e.split("."))._internalPath}catch{throw hh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function hh(r,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new de($.INVALID_ARGUMENT,m+r+p)}function rO(r,e){return r.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(YE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sO extends GE{data(){return super.data()}}function YE(r,e){return typeof e=="string"?FE(r,e):e instanceof mg?e._internalPath:e._delegate._internalPath}class aO{convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return na(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){var n,s,o;const u=(o=(s=(n=e.fields)===null||n===void 0?void 0:n[nh].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>vt(f.doubleValue));return new Ii(u)}convertGeoPoint(e){return new Ri(vt(e.latitude),vt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Eh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Fl(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ft.fromString(e);Xe(dE(s),9688,{name:e});const o=new Gl(s.get(1),s.get(3)),u=new pe(s.popFirst(5));return o.isEqual(n)||hr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(r,e,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(e,n):r.toFirestore(e):e,s}class Dl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ys extends GE{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(YE("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ys._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ys._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ys._jsonSchema={type:Rt("string",Ys._jsonSchemaVersion),bundleSource:Rt("string","DocumentSnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class Gc extends Ys{data(e={}){return super.data(e)}}class Ul{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Dl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Gc(this._firestore,this._userDataWriter,s.key,s,new Dl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new de($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const p=new Gc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Dl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new Gc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Dl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:lO(m.type),doc:p,oldIndex:y,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ul._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(r){r=ql(r,qt);const e=ql(r.firestore,dg);return K2(UE(e),r._key).then(n=>hO(e,r,n))}Ul._jsonSchemaVersion="firestore/querySnapshot/1.0",Ul._jsonSchema={type:Rt("string",Ul._jsonSchemaVersion),bundleSource:Rt("string","QuerySnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class uO extends aO{constructor(e){super(),this.firestore=e}convertBytes(e){return new qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function xc(r,e,n){r=ql(r,qt);const s=ql(r.firestore,dg),o=oO(r.converter,e,n);return cO(s,[tO(eO(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,lr.none())])}function cO(r,e){return function(s,o){const u=new Xr;return s.asyncQueue.enqueueAndForget(async()=>V2(await G2(s),o,u)),u.promise}(UE(r),e)}function hO(r,e,n){const s=n.docs.get(e._key),o=new uO(r);return new Ys(r,o,e._key,s,new Dl(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(o){mo=o})(ho),Ci(new ti("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new dg(new WR(s.getProvider("auth-internal")),new eI(f,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new de($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gl(y.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Hn(Tv,Ev,e),Hn(Tv,Ev,"esm2017")})();const KE="@firebase/installations",pg="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=1e4,XE=`w:${pg}`,$E="FIS_v2",fO="https://firebaseinstallations.googleapis.com/v1",dO=60*60*1e3,mO="installations",gO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ws=new Js(mO,gO,pO);function WE(r){return r instanceof ii&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE({projectId:r}){return`${fO}/projects/${r}/installations`}function JE(r){return{token:r.token,requestStatus:2,expiresIn:_O(r.expiresIn),creationTime:Date.now()}}async function eA(r,e){const s=(await e.json()).error;return Ws.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function tA({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function yO(r,{refreshToken:e}){const n=tA(r);return n.append("Authorization",vO(e)),n}async function nA(r){const e=await r();return e.status>=500&&e.status<600?r():e}function _O(r){return Number(r.replace("s","000"))}function vO(r){return`${$E} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TO({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=ZE(r),o=tA(r),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:$E,appId:r.appId,sdkVersion:XE},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await nA(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:JE(y.authToken)}}else throw await eA("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=/^[cdef][\w-]{21}$/,Sm="";function SO(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=bO(r);return AO.test(n)?n:Sm}catch{return Sm}}function bO(r){return EO(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=new Map;function sA(r,e){const n=Nh(r);aA(n,e),wO(n,e)}function aA(r,e){const n=rA.get(r);if(n)for(const s of n)s(e)}function wO(r,e){const n=RO();n&&n.postMessage({key:r,fid:e}),IO()}let Gs=null;function RO(){return!Gs&&"BroadcastChannel"in self&&(Gs=new BroadcastChannel("[Firebase] FID Change"),Gs.onmessage=r=>{aA(r.data.key,r.data.fid)}),Gs}function IO(){rA.size===0&&Gs&&(Gs.close(),Gs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO="firebase-installations-database",OO=1,Zs="firebase-installations-store";let Xd=null;function yg(){return Xd||(Xd=k0(CO,OO,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Zs)}}})),Xd}async function fh(r,e){const n=Nh(r),o=(await yg()).transaction(Zs,"readwrite"),u=o.objectStore(Zs),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&sA(r,e.fid),e}async function oA(r){const e=Nh(r),s=(await yg()).transaction(Zs,"readwrite");await s.objectStore(Zs).delete(e),await s.done}async function Mh(r,e){const n=Nh(r),o=(await yg()).transaction(Zs,"readwrite"),u=o.objectStore(Zs),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&sA(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(r){let e;const n=await Mh(r.appConfig,s=>{const o=DO(s),u=NO(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===Sm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function DO(r){const e=r||{fid:SO(),registrationStatus:0};return lA(e)}function NO(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ws.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=MO(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:VO(r)}:{installationEntry:e}}async function MO(r,e){try{const n=await TO(r,e);return fh(r.appConfig,n)}catch(n){throw WE(n)&&n.customData.serverCode===409?await oA(r.appConfig):await fh(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function VO(r){let e=await g0(r.appConfig);for(;e.registrationStatus===1;)await iA(100),e=await g0(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await _g(r);return s||n}return e}function g0(r){return Mh(r,e=>{if(!e)throw Ws.create("installation-not-found");return lA(e)})}function lA(r){return xO(r)?{fid:r.fid,registrationStatus:0}:r}function xO(r){return r.registrationStatus===1&&r.registrationTime+QE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kO({appConfig:r,heartbeatServiceProvider:e},n){const s=PO(r,n),o=yO(r,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:XE,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await nA(()=>fetch(s,m));if(p.ok){const y=await p.json();return JE(y)}else throw await eA("Generate Auth Token",p)}function PO(r,{fid:e}){return`${ZE(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(r,e=!1){let n;const s=await Mh(r.appConfig,u=>{if(!uA(u))throw Ws.create("not-registered");const f=u.authToken;if(!e&&zO(f))return u;if(f.requestStatus===1)return n=UO(r,e),u;{if(!navigator.onLine)throw Ws.create("app-offline");const m=BO(u);return n=LO(r,m),m}});return n?await n:s.authToken}async function UO(r,e){let n=await p0(r.appConfig);for(;n.authToken.requestStatus===1;)await iA(100),n=await p0(r.appConfig);const s=n.authToken;return s.requestStatus===0?vg(r,e):s}function p0(r){return Mh(r,e=>{if(!uA(e))throw Ws.create("not-registered");const n=e.authToken;return qO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function LO(r,e){try{const n=await kO(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await fh(r.appConfig,s),n}catch(n){if(WE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await oA(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fh(r.appConfig,s)}throw n}}function uA(r){return r!==void 0&&r.registrationStatus===2}function zO(r){return r.requestStatus===2&&!jO(r)}function jO(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+dO}function BO(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function qO(r){return r.requestStatus===1&&r.requestTime+QE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(r){const e=r,{installationEntry:n,registrationPromise:s}=await _g(e);return s?s.catch(console.error):vg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(r,e=!1){const n=r;return await GO(n),(await vg(n,e)).token}async function GO(r){const{registrationPromise:e}=await _g(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(r){if(!r||!r.options)throw $d("App Configuration");if(!r.name)throw $d("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw $d(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function $d(r){return Ws.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA="installations",KO="installations-internal",QO=r=>{const e=r.getProvider("app").getImmediate(),n=YO(e),s=ea(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},XO=r=>{const e=r.getProvider("app").getImmediate(),n=ea(e,cA).getImmediate();return{getId:()=>HO(n),getToken:o=>FO(n,o)}};function $O(){Ci(new ti(cA,QO,"PUBLIC")),Ci(new ti(KO,XO,"PRIVATE"))}$O();Hn(KE,pg);Hn(KE,pg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="analytics",WO="firebase_id",ZO="origin",JO=60*1e3,eD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Tg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new gh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},In=new Js("analytics","Analytics",tD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(r){if(!r.startsWith(Tg)){const e=In.create("invalid-gtag-resource",{gtagURL:r});return gn.warn(e.message),""}return r}function hA(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function iD(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function rD(r,e){const n=iD("firebase-js-sdk-policy",{createScriptURL:nD}),s=document.createElement("script"),o=`${Tg}?l=${r}&id=${e}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function sD(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function aD(r,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const p=(await hA(n)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(m){gn.error(m)}r("config",o,u)}async function oD(r,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await hA(n);for(const p of f){const y=m.find(C=>C.measurementId===p),E=y&&e[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){gn.error(u)}}function lD(r,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await oD(r,e,n,m,p)}else if(u==="config"){const[m,p]=f;await aD(r,e,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){gn.error(m)}}return o}function uD(r,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=lD(u,r,e,n),{gtagCore:u,wrappedGtag:window[o]}}function cD(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Tg)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=30,fD=1e3;class dD{constructor(e={},n=fD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const fA=new dD;function mD(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function gD(r){var e;const{appId:n,apiKey:s}=r,o={method:"GET",headers:mD(s)},u=eD.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((e=p.error)===null||e===void 0)&&e.message&&(m=p.error.message)}catch{}throw In.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function pD(r,e=fA,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw In.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw In.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new vD;return setTimeout(async()=>{m.abort()},JO),dA({appId:s,apiKey:o,measurementId:u},f,m,e)}async function dA(r,{throttleEndTimeMillis:e,backoffCount:n},s,o=fA){var u;const{appId:f,measurementId:m}=r;try{await yD(s,e)}catch(p){if(m)return gn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:f,measurementId:m};throw p}try{const p=await gD(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!_D(y)){if(o.deleteThrottleMetadata(f),m)return gn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:f,measurementId:m};throw p}const E=Number((u=y?.customData)===null||u===void 0?void 0:u.httpStatus)===503?G_(n,o.intervalMillis,hD):G_(n,o.intervalMillis),C={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(f,C),gn.debug(`Calling attemptFetch again in ${E} millis`),dA(r,C,s,o)}}function yD(r,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(In.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _D(r){if(!(r instanceof ii)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class vD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function TD(r,e,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await e,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ED(){if(Rm())try{await Im()}catch(r){return gn.warn(In.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return gn.warn(In.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AD(r,e,n,s,o,u,f){var m;const p=pD(r);p.then(q=>{n[q.measurementId]=q.appId,r.options.measurementId&&q.measurementId!==r.options.measurementId&&gn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${q.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(q=>gn.error(q)),e.push(p);const y=ED().then(q=>{if(q)return s.getId()}),[E,C]=await Promise.all([p,y]);cD(u)||rD(u,E.measurementId),o("js",new Date);const I=(m=f?.config)!==null&&m!==void 0?m:{};return I[ZO]="firebase",I.update=!0,C!=null&&(I[WO]=C),o("config",E.measurementId,I),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e){this.app=e}_delete(){return delete Ll[this.app.options.appId],Promise.resolve()}}let Ll={},y0=[];const _0={};let Wd="dataLayer",bD="gtag",v0,mA,T0=!1;function wD(){const r=[];if(wm()&&r.push("This is a browser extension environment."),M0()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=In.create("invalid-analytics-context",{errorInfo:e});gn.warn(n.message)}}function RD(r,e,n){wD();const s=r.options.appId;if(!s)throw In.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)gn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw In.create("no-api-key");if(Ll[s]!=null)throw In.create("already-exists",{id:s});if(!T0){sD(Wd);const{wrappedGtag:u,gtagCore:f}=uD(Ll,y0,_0,Wd,bD);mA=u,v0=f,T0=!0}return Ll[s]=AD(r,y0,_0,e,v0,Wd,n),new SD(r)}function ID(r=Om()){r=un(r);const e=ea(r,dh);return e.isInitialized()?e.getImmediate():CD(r)}function CD(r,e={}){const n=ea(r,dh);if(n.isInitialized()){const o=n.getImmediate();if($r(e,n.getOptions()))return o;throw In.create("already-initialized")}return n.initialize({options:e})}async function OD(){if(wm()||!M0()||!Rm())return!1;try{return await Im()}catch{return!1}}function DD(r,e,n,s){r=un(r),TD(mA,Ll[r.app.options.appId],e,n,s).catch(o=>gn.error(o))}const E0="@firebase/analytics",A0="0.10.17";function ND(){Ci(new ti(dh,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return RD(s,o,n)},"PUBLIC")),Ci(new ti("analytics-internal",r,"PRIVATE")),Hn(E0,A0),Hn(E0,A0,"esm2017");function r(e){try{const n=e.getProvider(dh).getImmediate();return{logEvent:(s,o,u)=>DD(n,s,o,u)}}catch(n){throw In.create("interop-component-reg-failed",{reason:n})}}}ND();console.log("🔥 Firebase ENV:",{apiKey:void 0,projectId:void 0});const MD={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0},Eg=P0(MD),kc=KR(Eg),qs=X2(Eg);new rr;OD().then(r=>{r&&ID(Eg)});const VD=["level_complete","level_failed","watch_ad"],xD={level_failed:["level"],level_complete:["level"],watch_ad:["ad_type"]},kD=["==",">=","<=",">","<"],PD=["==",">=","<=",">","<"],S0=[{featureName:"example_feature",label:"Example Feature Template",ruleSets:[{value:"true",sequential:!1,conditions:[{event:"level_complete",count:"1",countOperator:">=",match:[{key:"level",value:"1",operator:">="}]}]}]}];function UD(){const[r,e]=Vt.useState(null),[n,s]=Vt.useState(""),[o,u]=Vt.useState(""),[f,m]=Vt.useState(""),[p,y]=Vt.useState([]),[E,C]=Vt.useState(""),[I,q]=Vt.useState(""),[J,re]=Vt.useState(!1),[Z,Se]=Vt.useState(""),[le,ae]=Vt.useState([]),[Ve,ge]=Vt.useState(""),[De,N]=Vt.useState(""),[S,R]=Vt.useState([]),[M,V]=Vt.useState(""),k=S.includes(I),b=E&&p.includes(E);Vt.useEffect(()=>kw(kc,e),[]),Vt.useEffect(()=>{if(!r)return;(async()=>{try{const ue=js(qs,"acl",r.email),se=await Bs(ue);if(se.exists()){const be=se.data();y(be.tenants||[]),V("")}else y([]),V("No access permissions found. Contact admin.")}catch(ue){console.error("Failed to fetch ACL:",ue),V("Failed to load permissions. Contact admin."),y([])}})()},[r]),Vt.useEffect(()=>{E&&b?ne():(R([]),q(""),ae([]),ge(""))},[E,b]),Vt.useEffect(()=>{!r||!E||!b||I!==""&&(S.includes(I)?(he(I),Se(I)):(ae([]),ge("")))},[I,S,r,E,b]);const It=async()=>{try{await Mw(kc,n,o),m("")}catch(H){m(H.message)}},lt=async()=>{try{await Nw(kc,n,o),m("")}catch(H){m(H.message)}},F=async()=>{await Pw(kc),C(""),q(""),y([])},ne=async()=>{if(!r||!E||!b)return;const H=js(qs,"rules",E),ue=await Bs(H);if(ue.exists()){const se=ue.data()?.rules||{},be=Object.keys(se);R(be)}else R([])},he=async H=>{if(!r||!E||!b)return;const ue=js(qs,"rules",E),se=await Bs(ue);if(se.exists()){const be=se.data()?.rules?.[H];if(Array.isArray(be)){const Ie=be.map(Je=>({value:String(Je.value??""),sequential:!!Je.sequential,conditions:(Je.conditions||[]).map(Fe=>({event:Fe.event,count:Fe.count?String(Object.values(Fe.count)[0]):"",countOperator:Fe.count?Object.keys(Fe.count)[0]:"==",match:Fe.match?Object.entries(Fe.match).map(([pn,yn])=>({key:pn,operator:Object.keys(yn)[0],value:String(Object.values(yn)[0])})):[]}))}));ae(Ie),ge(JSON.stringify({[H]:be},null,2))}else ae([]),ge("")}},He=async()=>{if(!I.trim()||!E||!b){alert("Please enter a feature name and ensure you have access to the selected package.");return}if(S.includes(I)){alert("Feature already exists. Use the dropdown to select it or choose a different name.");return}const H=[{sequential:!1,value:"true",conditions:[]}],ue=js(qs,"rules",E),se=await Bs(ue);let be=se.exists()?se.data().rules||{}:{};be[I]=H;try{await xc(ue,{rules:be},{merge:!0}),N("✅ Rule created successfully! Now add conditions."),ae([{value:"true",sequential:!1,conditions:[]}]),ge(JSON.stringify({[I]:H},null,2)),R(Ie=>[...Ie,I])}catch(Ie){console.error(Ie),N("❌ Failed to create rule.")}},O=async()=>{if(!I||le.length===0||!E||!b){alert("Please ensure you have a feature name, at least one rule set with conditions, and access to the selected package.");return}const H=le.map(Je=>{const Fe=Je.conditions.map(pn=>{const yn={event:pn.event};if(pn.count&&(yn.count={[pn.countOperator]:Number(pn.count)}),pn.match.length>0&&pn.match.some(Yn=>Yn.key&&Yn.value)){const Yn={};pn.match.forEach(({key:as,value:rt,operator:Ye})=>{as&&rt!==""&&(Yn[as]={[Ye]:isNaN(Number(rt))?rt:Number(rt)})}),yn.match=Yn}return yn});return{sequential:Je.sequential,value:isNaN(Number(Je.value))?Je.value:Number(Je.value),conditions:Fe}}),ue=js(qs,"rules",E),se=await Bs(ue);let be=se.exists()?se.data().rules||{}:{};be[I]=H;const Ie={[I]:H};ge(JSON.stringify(Ie,null,2));try{await xc(ue,{rules:be},{merge:!0}),N("✅ Rule saved to Firestore!"),await ne()}catch(Je){console.error(Je),N("❌ Failed to save rule.")}},X=async()=>{if(!I||!Z||I===Z||!E||!b){alert("Please provide a valid new feature name and ensure you have access.");return}if(S.includes(Z)){alert("A feature with that name already exists. Please choose a different name.");return}const H=js(qs,"rules",E),ue=await Bs(H);if(ue.exists()){const se=ue.data().rules||{},be=se[I];if(be){se[Z]=be,delete se[I];try{await xc(H,{rules:se},{merge:!0}),R(Ie=>[...Ie.filter(Fe=>Fe!==I),Z]),q(Z),re(!1),N("✅ Feature renamed successfully!")}catch(Ie){console.error(Ie),N("❌ Failed to rename feature.")}}}},ie=async()=>{if(!I||!E||!b||!confirm(`Are you sure you want to delete the feature "${I}"?`))return;const H=js(qs,"rules",E),ue=await Bs(H);if(ue.exists()){const se=ue.data().rules||{};delete se[I];try{await xc(H,{rules:se},{merge:!0}),R(be=>be.filter(Ie=>Ie!==I)),q(""),Se(""),ae([]),ge(""),N("✅ Feature deleted successfully!")}catch(be){console.error(be),N("❌ Failed to delete feature.")}}},ee=H=>{q(H.featureName),ae(H.ruleSets),ge(JSON.stringify({[H.featureName]:H.ruleSets},null,2))},me=()=>{ae([...le,{value:"",sequential:!1,conditions:[]}])},Oe=H=>{const ue=le[H],se=JSON.parse(JSON.stringify(ue)),be=[...le];be.splice(H+1,0,se),ae(be)},Ee=H=>{ae(le.filter((ue,se)=>se!==H))},Tt=H=>{const ue=[...le];ue[H].conditions.push({event:"",match:[],count:"",countOperator:"=="}),ae(ue)},Ze=(H,ue)=>{const se=[...le];se[H].conditions.splice(ue,1),ae(se)},cn=(H,ue,se,be)=>{const Ie=[...le];Ie[H].conditions[ue][se]=be,ae(Ie)},ri=(H,ue)=>{const se=[...le];se[H].conditions[ue].match.push({key:"",value:"",operator:"=="}),ae(se)},Fn=(H,ue,se)=>{const be=[...le];be[H].conditions[ue].match.splice(se,1),ae(be)},Gn=(H,ue,se,be,Ie)=>{const Je=[...le];Je[H].conditions[ue].match[se][be]=Ie,ae(Je)},Ni=(H,ue)=>{const se=[...le];se[H].value=ue,ae(se)},Mi=H=>{const ue=[...le];ue[H].sequential=!ue[H].sequential,ae(ue)};return r?W.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",padding:"2rem"},children:W.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[W.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem",background:"white",padding:"1.5rem 2rem",borderRadius:"16px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.1)",border:"1px solid rgba(255, 255, 255, 0.8)"},children:[W.jsx("h2",{style:{margin:0,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"1.8rem",fontWeight:"700"},children:"⚡ SmartConfig Rule Builder"}),W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[W.jsxs("span",{style:{color:"#666",fontSize:"0.9rem"},children:["👤 ",r.email]}),W.jsx("button",{onClick:F,style:{padding:"0.75rem 1.5rem",borderRadius:"10px",border:"none",background:"linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",color:"white",fontSize:"0.9rem",fontWeight:"600",cursor:"pointer",transition:"transform 0.2s ease",boxShadow:"0 2px 10px rgba(255, 107, 107, 0.3)"},onMouseOver:H=>H.currentTarget.style.transform="translateY(-2px)",onMouseOut:H=>H.currentTarget.style.transform="translateY(0)",children:"Logout"})]})]}),W.jsxs("div",{style:{background:"white",padding:"1.5rem 2rem",borderRadius:"16px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.1)",border:"1px solid rgba(255, 255, 255, 0.8)",marginBottom:"2rem"},children:[W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap"},children:[W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[W.jsx("span",{style:{fontSize:"0.9rem",fontWeight:"600",color:"#555",minWidth:"60px"},children:"📦 Package:"}),W.jsxs("select",{value:E,onChange:H=>C(H.target.value),style:{padding:"0.75rem 1rem",borderRadius:"10px",border:"2px solid #e1e8ed",background:"white",color:"#333",fontSize:"0.9rem",fontWeight:"500",cursor:"pointer",transition:"all 0.2s ease",minWidth:"180px"},onFocus:H=>H.currentTarget.style.borderColor="#667eea",onBlur:H=>H.currentTarget.style.borderColor="#e1e8ed",children:[W.jsx("option",{value:"",children:"Select Package"}),p.map(H=>W.jsx("option",{value:H,children:H},H))]}),E&&W.jsx("span",{style:{padding:"0.5rem 1rem",borderRadius:"20px",fontSize:"0.8rem",fontWeight:"600",background:b?"#d4edda":"#f8d7da",color:b?"#155724":"#721c24",border:`1px solid ${b?"#c3e6cb":"#f5c6cb"}`},children:b?"✅ Access Granted":"❌ No Access"})]}),b&&W.jsxs(W.Fragment,{children:[W.jsx("div",{style:{width:"1px",height:"30px",background:"#e1e8ed",margin:"0 0.5rem"}}),W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[W.jsx("span",{style:{fontSize:"0.9rem",fontWeight:"600",color:"#555",minWidth:"60px"},children:"🎯 Feature:"}),W.jsxs("select",{value:I,onChange:H=>q(H.target.value),style:{padding:"0.75rem 1rem",borderRadius:"10px",border:"2px solid #e1e8ed",background:"white",color:"#333",fontSize:"0.9rem",fontWeight:"500",cursor:"pointer",transition:"all 0.2s ease",minWidth:"200px"},onFocus:H=>H.currentTarget.style.borderColor="#667eea",onBlur:H=>H.currentTarget.style.borderColor="#e1e8ed",children:[W.jsx("option",{value:"",children:"Select or Create Feature"}),S.map(H=>W.jsxs("option",{value:H,children:[H," (existing)"]},H))]}),!k&&W.jsx("input",{placeholder:"Enter new feature name",value:I,onChange:H=>q(H.target.value),style:{padding:"0.75rem 1rem",borderRadius:"10px",border:"2px solid #e1e8ed",background:"white",fontSize:"0.9rem",minWidth:"200px",transition:"all 0.2s ease"},onFocus:H=>H.currentTarget.style.borderColor="#667eea",onBlur:H=>H.currentTarget.style.borderColor="#e1e8ed"})]}),W.jsx("div",{style:{display:"flex",gap:"0.5rem",marginLeft:"auto"},children:k?W.jsx(W.Fragment,{children:J?W.jsxs(W.Fragment,{children:[W.jsx("input",{placeholder:"New feature name",value:Z,onChange:H=>Se(H.target.value),style:{padding:"0.75rem 1rem",borderRadius:"10px",border:"2px solid #e1e8ed",background:"white",fontSize:"0.9rem",width:"150px"}}),W.jsx("button",{onClick:X,style:{padding:"0.75rem 1rem",borderRadius:"10px",border:"none",background:"linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",color:"white",fontSize:"0.9rem",fontWeight:"600",cursor:"pointer"},children:"✓"}),W.jsx("button",{onClick:()=>{re(!1),Se(I)},style:{padding:"0.75rem 1rem",borderRadius:"10px",border:"none",background:"linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",color:"white",fontSize:"0.9rem",fontWeight:"600",cursor:"pointer"},children:"✕"})]}):W.jsxs(W.Fragment,{children:[W.jsx("button",{onClick:()=>{re(!0),Se(I)},style:{padding:"0.75rem 1rem",borderRadius:"10px",border:"none",background:"linear-gradient(135deg, #ffa726 0%, #ff9800 100%)",color:"white",fontSize:"0.9rem",fontWeight:"600",cursor:"pointer",transition:"transform 0.2s ease"},onMouseOver:H=>H.currentTarget.style.transform="translateY(-2px)",onMouseOut:H=>H.currentTarget.style.transform="translateY(0)",children:"✏️ Rename"}),W.jsx("button",{onClick:ie,style:{padding:"0.75rem 1rem",borderRadius:"10px",border:"none",background:"linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",color:"white",fontSize:"0.9rem",fontWeight:"600",cursor:"pointer",transition:"transform 0.2s ease"},onMouseOver:H=>H.currentTarget.style.transform="translateY(-2px)",onMouseOut:H=>H.currentTarget.style.transform="translateY(0)",children:"🗑 Delete"}),W.jsxs("div",{style:{position:"relative"},children:[W.jsx("button",{onClick:O,style:{padding:"0.75rem 1.5rem",borderRadius:"10px",border:"none",background:"linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",color:"white",fontSize:"0.9rem",fontWeight:"600",cursor:"pointer",transition:"transform 0.2s ease"},onMouseOver:H=>H.currentTarget.style.transform="translateY(-2px)",onMouseOut:H=>H.currentTarget.style.transform="translateY(0)",children:"💾 Save Changes"}),De&&W.jsx("div",{style:{position:"absolute",top:"-35px",left:"50%",transform:"translateX(-50%)",background:De.includes("❌")?"#ff6b6b":"#4CAF50",color:"white",padding:"0.5rem 1rem",borderRadius:"6px",fontSize:"0.8rem",fontWeight:"500",whiteSpace:"nowrap",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.2)",zIndex:1e3},children:De})]})]})}):W.jsx("button",{onClick:He,disabled:!I.trim(),style:{padding:"0.75rem 1.5rem",borderRadius:"10px",border:"none",background:I.trim()?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"#ccc",color:"white",fontSize:"0.9rem",fontWeight:"600",cursor:I.trim()?"pointer":"not-allowed",transition:"transform 0.2s ease"},onMouseOver:H=>{I.trim()&&(H.currentTarget.style.transform="translateY(-2px)")},onMouseOut:H=>H.currentTarget.style.transform="translateY(0)",children:"💾 Create Feature"})})]})]}),M&&W.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f8d7da",color:"#721c24",borderRadius:"10px",border:"1px solid #f5c6cb",fontSize:"0.9rem"},children:["⚠️ ",M]})]}),b&&W.jsx("div",{style:{background:"white",padding:"1.5rem 2rem",borderRadius:"16px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.1)",border:"1px solid rgba(255, 255, 255, 0.8)",marginBottom:"2rem"},children:W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[W.jsx("span",{style:{fontSize:"1rem",fontWeight:"600",color:"#555"},children:"📦 Quick Start Templates:"}),W.jsxs("select",{onChange:H=>{const ue=S0.find(se=>se.featureName===H.target.value);ue&&ee(ue)},defaultValue:"",style:{padding:"0.75rem 1rem",borderRadius:"10px",border:"2px solid #e1e8ed",background:"white",fontSize:"0.9rem",cursor:"pointer",transition:"all 0.2s ease"},children:[W.jsx("option",{value:"",children:"-- Select a Template --"}),S0.map(H=>W.jsx("option",{value:H.featureName,children:H.label},H.featureName))]})]})}),b&&le.length>0&&W.jsxs("div",{style:{background:"white",padding:"2rem",borderRadius:"16px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.1)",border:"1px solid rgba(255, 255, 255, 0.8)",marginBottom:"2rem"},children:[W.jsx("h3",{style:{margin:"0 0 1.5rem 0",color:"#333",fontSize:"1.3rem",fontWeight:"600"},children:"🎛️ Rule Configuration"}),le.map((H,ue)=>W.jsxs("div",{style:{border:"2px solid #f0f2f5",padding:"1.5rem",marginBottom:"1.5rem",borderRadius:"12px",background:"#fafbfc",transition:"all 0.2s ease"},children:[W.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"1.5rem",alignItems:"center",flexWrap:"wrap"},children:[W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[W.jsx("label",{style:{fontSize:"0.9rem",fontWeight:"600",color:"#555"},children:"Return Value:"}),W.jsx("input",{value:H.value,onChange:se=>Ni(ue,se.target.value),placeholder:"Value (e.g., true, 1, retro)",style:{padding:"0.75rem",borderRadius:"8px",border:"2px solid #e1e8ed",fontSize:"0.9rem"}})]}),W.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",fontWeight:"600",color:"#555",cursor:"pointer"},children:[W.jsx("input",{type:"checkbox",checked:H.sequential,onChange:()=>Mi(ue),style:{transform:"scale(1.2)"}}),"Sequential Order"]}),W.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:"0.5rem"},children:[W.jsx("button",{onClick:()=>Oe(ue),style:{padding:"0.5rem 1rem",borderRadius:"8px",border:"none",background:"linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",color:"white",fontSize:"0.8rem",fontWeight:"600",cursor:"pointer",transition:"transform 0.2s ease"},onMouseOver:se=>se.currentTarget.style.transform="translateY(-2px)",onMouseOut:se=>se.currentTarget.style.transform="translateY(0)",children:"📄 Duplicate"}),W.jsx("button",{onClick:()=>Ee(ue),style:{padding:"0.5rem 1rem",borderRadius:"8px",border:"none",background:"linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",color:"white",fontSize:"0.8rem",fontWeight:"600",cursor:"pointer",transition:"transform 0.2s ease"},onMouseOver:se=>se.currentTarget.style.transform="translateY(-2px)",onMouseOut:se=>se.currentTarget.style.transform="translateY(0)",children:"🗑 Remove"})]})]}),W.jsx("h4",{style:{margin:"0 0 1rem 0",color:"#555",fontSize:"1.1rem",fontWeight:"600"},children:"📋 Conditions:"}),H.conditions.map((se,be)=>W.jsxs("div",{style:{marginBottom:"1rem",padding:"1rem",border:"1px solid #e1e8ed",borderRadius:"10px",background:"white"},children:[W.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1rem",alignItems:"center",flexWrap:"wrap"},children:[W.jsxs("select",{value:se.event,onChange:Ie=>cn(ue,be,"event",Ie.target.value),style:{padding:"0.5rem",borderRadius:"6px",border:"1px solid #ddd",fontSize:"0.9rem"},children:[W.jsx("option",{value:"",children:"Select Event"}),VD.map(Ie=>W.jsx("option",{value:Ie,children:Ie},Ie))]}),W.jsx("span",{style:{fontSize:"0.9rem",fontWeight:"600",color:"#555"},children:"Count:"}),W.jsx("select",{value:se.countOperator,onChange:Ie=>cn(ue,be,"countOperator",Ie.target.value),style:{padding:"0.5rem",borderRadius:"6px",border:"1px solid #ddd",fontSize:"0.9rem"},children:PD.map(Ie=>W.jsx("option",{value:Ie,children:Ie},Ie))}),W.jsx("input",{type:"number",placeholder:"Count",value:se.count,onChange:Ie=>cn(ue,be,"count",Ie.target.value),style:{padding:"0.5rem",borderRadius:"6px",border:"1px solid #ddd",width:"80px",fontSize:"0.9rem"}}),W.jsx("button",{onClick:()=>Ze(ue,be),style:{padding:"0.5rem 1rem",borderRadius:"6px",border:"none",background:"linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",color:"white",fontSize:"0.8rem",fontWeight:"600",cursor:"pointer",marginLeft:"auto"},children:"🗑"})]}),W.jsxs("div",{style:{marginLeft:"1rem"},children:[W.jsx("strong",{style:{fontSize:"0.9rem",color:"#555"},children:"Match Parameters:"}),se.match.map((Ie,Je)=>W.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem",alignItems:"center"},children:[W.jsxs("select",{value:Ie.key,onChange:Fe=>Gn(ue,be,Je,"key",Fe.target.value),style:{padding:"0.5rem",borderRadius:"6px",border:"1px solid #ddd",fontSize:"0.9rem"},children:[W.jsx("option",{value:"",children:"Select Param"}),(xD[se.event]||[]).map(Fe=>W.jsx("option",{value:Fe,children:Fe},Fe))]}),W.jsx("select",{value:Ie.operator,onChange:Fe=>Gn(ue,be,Je,"operator",Fe.target.value),style:{padding:"0.5rem",borderRadius:"6px",border:"1px solid #ddd",fontSize:"0.9rem"},children:kD.map(Fe=>W.jsx("option",{value:Fe,children:Fe},Fe))}),W.jsx("input",{value:Ie.value,placeholder:"Value",onChange:Fe=>Gn(ue,be,Je,"value",Fe.target.value),style:{padding:"0.5rem",borderRadius:"6px",border:"1px solid #ddd",fontSize:"0.9rem"}}),W.jsx("button",{onClick:()=>Fn(ue,be,Je),style:{padding:"0.5rem",borderRadius:"6px",border:"none",background:"linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",color:"white",fontSize:"0.8rem",cursor:"pointer"},children:"❌"})]},Je)),W.jsx("button",{onClick:()=>ri(ue,be),style:{padding:"0.5rem 1rem",borderRadius:"6px",border:"none",background:"linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",color:"white",fontSize:"0.8rem",fontWeight:"600",cursor:"pointer",marginTop:"0.5rem"},children:"+ Add Match"})]})]},be)),W.jsx("button",{onClick:()=>Tt(ue),style:{padding:"0.75rem 1.5rem",borderRadius:"8px",border:"none",background:"linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",color:"white",fontSize:"0.9rem",fontWeight:"600",cursor:"pointer",transition:"transform 0.2s ease"},onMouseOver:se=>se.currentTarget.style.transform="translateY(-2px)",onMouseOut:se=>se.currentTarget.style.transform="translateY(0)",children:"+ Add Condition"})]},ue)),W.jsx("button",{onClick:me,style:{padding:"1rem 2rem",borderRadius:"12px",border:"none",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"1rem",fontWeight:"600",cursor:"pointer",transition:"transform 0.2s ease",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.3)"},onMouseOver:H=>H.currentTarget.style.transform="translateY(-2px)",onMouseOut:H=>H.currentTarget.style.transform="translateY(0)",children:"+ Add Rule Set"})]}),b&&Ve&&W.jsxs("div",{style:{background:"white",padding:"2rem",borderRadius:"16px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.1)",border:"1px solid rgba(255, 255, 255, 0.8)"},children:[W.jsx("h3",{style:{margin:"0 0 1rem 0",color:"#333",fontSize:"1.3rem",fontWeight:"600"},children:"📄 Generated JSON Preview"}),W.jsx("pre",{style:{background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"1.5rem",borderRadius:"12px",maxHeight:"400px",overflow:"auto",fontSize:"0.85rem",lineHeight:"1.4",border:"1px solid #dee2e6",fontFamily:'Monaco, Consolas, "Lucida Console", monospace'},children:Ve})]})]})}):W.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},children:W.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",borderRadius:"20px",padding:"3rem",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.1)",width:"100%",maxWidth:"400px"},children:[W.jsx("h2",{style:{color:"white",textAlign:"center",marginBottom:"2rem",fontSize:"1.8rem",fontWeight:"600"},children:"🔐 SmartConfig Access"}),W.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:H=>s(H.target.value),style:{display:"block",marginBottom:"1rem",padding:"1rem",width:"100%",borderRadius:"12px",border:"1px solid rgba(255, 255, 255, 0.3)",background:"rgba(255, 255, 255, 0.1)",color:"white",fontSize:"1rem",backdropFilter:"blur(5px)",boxSizing:"border-box"}}),W.jsx("input",{type:"password",placeholder:"Password",value:o,onChange:H=>u(H.target.value),style:{display:"block",marginBottom:"1.5rem",padding:"1rem",width:"100%",borderRadius:"12px",border:"1px solid rgba(255, 255, 255, 0.3)",background:"rgba(255, 255, 255, 0.1)",color:"white",fontSize:"1rem",backdropFilter:"blur(5px)",boxSizing:"border-box"}}),W.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[W.jsx("button",{onClick:It,style:{flex:1,padding:"1rem",borderRadius:"12px",border:"none",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"1rem",fontWeight:"600",cursor:"pointer",transition:"transform 0.2s ease",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.2)"},onMouseOver:H=>H.currentTarget.style.transform="translateY(-2px)",onMouseOut:H=>H.currentTarget.style.transform="translateY(0)",children:"Sign In"}),W.jsx("button",{onClick:lt,style:{flex:1,padding:"1rem",borderRadius:"12px",border:"2px solid rgba(255, 255, 255, 0.3)",background:"transparent",color:"white",fontSize:"1rem",fontWeight:"600",cursor:"pointer",transition:"all 0.2s ease"},onMouseOver:H=>{H.currentTarget.style.background="rgba(255, 255, 255, 0.1)",H.currentTarget.style.transform="translateY(-2px)"},onMouseOut:H=>{H.currentTarget.style.background="transparent",H.currentTarget.style.transform="translateY(0)"},children:"Register"})]}),f&&W.jsx("p",{style:{color:"#ff6b6b",marginTop:"1rem",textAlign:"center",fontSize:"0.9rem"},children:f})]})})}function LD(){return W.jsx(UD,{})}QS.createRoot(document.getElementById("root")).render(W.jsx(Vt.StrictMode,{children:W.jsx(LD,{})}));
