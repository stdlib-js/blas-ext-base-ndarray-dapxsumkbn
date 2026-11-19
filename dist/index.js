"use strict";var u=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var t=u(function(p,i){
var n=require('@stdlib/ndarray-base-numel-dimension/dist'),s=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),q=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/blas-ext-base-dapxsumkbn/dist').ndarray,c=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function l(a){var r,e;return e=a[0],r=c(a[1]),d(n(e,0),r,q(e),s(e,0),v(e))}i.exports=l
});var m=t();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
