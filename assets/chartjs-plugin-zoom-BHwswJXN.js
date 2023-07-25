import{H as M}from"./hammerjs-BKGieZPK.js";import{e as b,c as p,v as L,g as v,s as N}from"./chart.js-qLx0x_nK.js";/*!
* chartjs-plugin-zoom v2.0.1
* undefined
 * (c) 2016-2023 chartjs-plugin-zoom Contributors
 * Released under the MIT License
 */const O=n=>n&&n.enabled&&n.modifierKey,W=(n,e)=>n&&e[n+"Key"],T=(n,e)=>n&&!e[n+"Key"];function y(n,e,o){return n===void 0?!0:typeof n=="string"?n.indexOf(e)!==-1:typeof n=="function"?n({chart:o}).indexOf(e)!==-1:!1}function R(n,e){return typeof n=="function"&&(n=n({chart:e})),typeof n=="string"?{x:n.indexOf("x")!==-1,y:n.indexOf("y")!==-1}:{x:!1,y:!1}}function on(n,e){let o;return function(){return clearTimeout(o),o=setTimeout(n,e),e}}function tn({x:n,y:e},o){const t=o.scales,i=Object.keys(t);for(let s=0;s<i.length;s++){const a=t[i[s]];if(e>=a.top&&e<=a.bottom&&n>=a.left&&n<=a.right)return a}return null}function _(n,e,o){const{mode:t="xy",scaleMode:i,overScaleMode:s}=n||{},a=tn(e,o),r=R(t,o),u=R(i,o);if(s){const l=R(s,o);for(const c of["x","y"])l[c]&&(u[c]=r[c],r[c]=!1)}if(a&&u[a.axis])return[a];const d=[];return b(o.scales,function(l){r[l.axis]&&d.push(l)}),d}const Z=new WeakMap;function m(n){let e=Z.get(n);return e||(e={originalScaleLimits:{},updatedScaleLimits:{},handlers:{},panDelta:{}},Z.set(n,e)),e}function sn(n){Z.delete(n)}function U(n,e,o){const t=n.max-n.min,i=t*(e-1),s=n.isHorizontal()?o.x:o.y,a=Math.max(0,Math.min(1,(n.getValueForPixel(s)-n.min)/t||0)),r=1-a;return{min:i*a,max:i*r}}function I(n,e,o,t,i){let s=o[t];if(s==="original"){const a=n.originalScaleLimits[e.id][t];s=L(a.options,a.scale)}return L(s,i)}function an(n,e,o){const t=n.getValueForPixel(e),i=n.getValueForPixel(o);return{min:Math.min(t,i),max:Math.max(t,i)}}function S(n,{min:e,max:o},t,i=!1){const s=m(n.chart),{id:a,axis:r,options:u}=n,d=t&&(t[a]||t[r])||{},{minRange:l=0}=d,c=I(s,n,d,"min",-1/0),f=I(s,n,d,"max",1/0),x=i?Math.max(o-e,l):n.max-n.min,w=(x-o+e)/2;return e-=w,o+=w,e<c?(e=c,o=Math.min(c+x,f)):o>f&&(o=f,e=Math.max(f-x,c)),u.min=e,u.max=o,s.updatedScaleLimits[n.id]={min:e,max:o},n.parse(e)!==n.min||n.parse(o)!==n.max}function rn(n,e,o,t){const i=U(n,e,o),s={min:n.min+i.min,max:n.max-i.max};return S(n,s,t,!0)}function ln(n,e,o,t){S(n,an(n,e,o),t,!0)}const Y=n=>n===0||isNaN(n)?0:n<0?Math.min(Math.round(n),-1):Math.max(Math.round(n),1);function un(n){const o=n.getLabels().length-1;n.min>0&&(n.min-=1),n.max<o&&(n.max+=1)}function dn(n,e,o,t){const i=U(n,e,o);n.min===n.max&&e<1&&un(n);const s={min:n.min+Y(i.min),max:n.max-Y(i.max)};return S(n,s,t,!0)}function fn(n){return n.isHorizontal()?n.width:n.height}function mn(n,e,o){const i=n.getLabels().length-1;let{min:s,max:a}=n;const r=Math.max(a-s,1),u=Math.round(fn(n)/Math.max(r,10)),d=Math.round(Math.abs(e/u));let l;return e<-u?(a=Math.min(a+d,i),s=r===1?a:a-r,l=a===i):e>u&&(s=Math.max(0,s-d),a=r===1?s:s+r,l=s===0),S(n,{min:s,max:a},o)||l}const cn={second:500,minute:30*1e3,hour:30*60*1e3,day:12*60*60*1e3,week:3.5*24*60*60*1e3,month:15*24*60*60*1e3,quarter:60*24*60*60*1e3,year:182*24*60*60*1e3};function A(n,e,o,t=!1){const{min:i,max:s,options:a}=n,r=a.time&&a.time.round,u=cn[r]||0,d=n.getValueForPixel(n.getPixelForValue(i+u)-e),l=n.getValueForPixel(n.getPixelForValue(s+u)-e),{min:c=-1/0,max:f=1/0}=t&&o&&o[n.axis]||{};return isNaN(d)||isNaN(l)||d<c||l>f?!0:S(n,{min:d,max:l},o,t)}function h(n,e,o){return A(n,e,o,!0)}const C={category:dn,default:rn},H={default:ln},k={category:mn,default:A,logarithmic:h,timeseries:h};function pn(n,e,o){const{id:t,options:{min:i,max:s}}=n;if(!e[t]||!o[t])return!0;const a=o[t];return a.min!==i||a.max!==s}function B(n,e){b(n,(o,t)=>{e[t]||delete n[t]})}function z(n,e){const{scales:o}=n,{originalScaleLimits:t,updatedScaleLimits:i}=e;return b(o,function(s){pn(s,t,i)&&(t[s.id]={min:{scale:s.min,options:s.options.min},max:{scale:s.max,options:s.options.max}})}),B(t,o),B(i,o),t}function X(n,e,o,t){const i=C[n.type]||C.default;p(i,[n,e,o,t])}function K(n,e,o,t,i){const s=H[n.type]||H.default;p(s,[n,e,o,t,i])}function gn(n){const e=n.chartArea;return{x:(e.left+e.right)/2,y:(e.top+e.bottom)/2}}function j(n,e,o="none"){const{x:t=1,y:i=1,focalPoint:s=gn(n)}=typeof e=="number"?{x:e,y:e}:e,a=m(n),{options:{limits:r,zoom:u}}=a;z(n,a);const d=t!==1,l=i!==1,c=_(u,s,n);b(c||n.scales,function(f){f.isHorizontal()&&d?X(f,t,s,r):!f.isHorizontal()&&l&&X(f,i,s,r)}),n.update(o),p(u.onZoom,[{chart:n}])}function q(n,e,o,t="none"){const i=m(n),{options:{limits:s,zoom:a}}=i,{mode:r="xy"}=a;z(n,i);const u=y(r,"x",n),d=y(r,"y",n);b(n.scales,function(l){l.isHorizontal()&&u?K(l,e.x,o.x,s):!l.isHorizontal()&&d&&K(l,e.y,o.y,s)}),n.update(t),p(a.onZoom,[{chart:n}])}function xn(n,e,o,t="none"){z(n,m(n));const i=n.scales[e];S(i,o,void 0,!0),n.update(t)}function yn(n,e="default"){const o=m(n),t=z(n,o);b(n.scales,function(i){const s=i.options;t[i.id]?(s.min=t[i.id].min.options,s.max=t[i.id].max.options):(delete s.min,delete s.max)}),n.update(e),p(o.options.zoom.onZoomComplete,[{chart:n}])}function bn(n,e){const o=n.originalScaleLimits[e];if(!o)return;const{min:t,max:i}=o;return L(i.options,i.scale)-L(t.options,t.scale)}function wn(n){const e=m(n);let o=1,t=1;return b(n.scales,function(i){const s=bn(e,i.id);if(s){const a=Math.round(s/(i.max-i.min)*100)/100;o=Math.min(o,a),t=Math.max(t,a)}}),o<1?o:t}function V(n,e,o,t){const{panDelta:i}=t,s=i[n.id]||0;N(s)===N(e)&&(e+=s);const a=k[n.type]||k.default;p(a,[n,e,o])?i[n.id]=0:i[n.id]=e}function G(n,e,o,t="none"){const{x:i=0,y:s=0}=typeof e=="number"?{x:e,y:e}:e,a=m(n),{options:{pan:r,limits:u}}=a,{onPan:d}=r||{};z(n,a);const l=i!==0,c=s!==0;b(o||n.scales,function(f){f.isHorizontal()&&l?V(f,i,u,a):!f.isHorizontal()&&c&&V(f,s,u,a)}),n.update(t),p(d,[{chart:n}])}function J(n){const e=m(n);z(n,e);const o={};for(const t of Object.keys(n.scales)){const{min:i,max:s}=e.originalScaleLimits[t]||{min:{},max:{}};o[t]={min:i.scale,max:s.scale}}return o}function Sn(n){const e=J(n);for(const o of Object.keys(n.scales)){const{min:t,max:i}=e[o];if(t!==void 0&&n.scales[o].min!==t||i!==void 0&&n.scales[o].max!==i)return!0}return!1}function g(n,e){const{handlers:o}=m(n),t=o[e];t&&t.target&&(t.target.removeEventListener(e,t),delete o[e])}function P(n,e,o,t){const{handlers:i,options:s}=m(n),a=i[o];a&&a.target===e||(g(n,o),i[o]=r=>t(n,r,s),i[o].target=e,e.addEventListener(o,i[o]))}function zn(n,e){const o=m(n);o.dragStart&&(o.dragging=!0,o.dragEnd=e,n.update("none"))}function Mn(n,e){const o=m(n);!o.dragStart||e.key!=="Escape"||(g(n,"keydown"),o.dragging=!1,o.dragStart=o.dragEnd=null,n.update("none"))}function Q(n,e,o){const{onZoomStart:t,onZoomRejected:i}=o;if(t){const s=v(e,n);if(p(t,[{chart:n,event:e,point:s}])===!1)return p(i,[{chart:n,event:e}]),!1}}function Pn(n,e){const o=m(n),{pan:t,zoom:i={}}=o.options;if(e.button!==0||W(O(t),e)||T(O(i.drag),e))return p(i.onZoomRejected,[{chart:n,event:e}]);Q(n,e,i)!==!1&&(o.dragStart=e,P(n,n.canvas,"mousemove",zn),P(n,window.document,"keydown",Mn))}function $(n,e,o,t){const i=y(e,"x",n),s=y(e,"y",n);let{top:a,left:r,right:u,bottom:d,width:l,height:c}=n.chartArea;const f=v(o,n),x=v(t,n);i&&(r=Math.min(f.x,x.x),u=Math.max(f.x,x.x)),s&&(a=Math.min(f.y,x.y),d=Math.max(f.y,x.y));const w=u-r,D=d-a;return{left:r,top:a,right:u,bottom:d,width:w,height:D,zoomX:i&&w?1+(l-w)/l:1,zoomY:s&&D?1+(c-D)/c:1}}function On(n,e){const o=m(n);if(!o.dragStart)return;g(n,"mousemove");const{mode:t,onZoomComplete:i,drag:{threshold:s=0}}=o.options.zoom,a=$(n,t,o.dragStart,e),r=y(t,"x",n)?a.width:0,u=y(t,"y",n)?a.height:0,d=Math.sqrt(r*r+u*u);if(o.dragStart=o.dragEnd=null,d<=s){o.dragging=!1,n.update("none");return}q(n,{x:a.left,y:a.top},{x:a.right,y:a.bottom},"zoom"),setTimeout(()=>o.dragging=!1,500),p(i,[{chart:n}])}function En(n,e,o){if(T(O(o.wheel),e)){p(o.onZoomRejected,[{chart:n,event:e}]);return}if(Q(n,e,o)!==!1&&(e.cancelable&&e.preventDefault(),e.deltaY!==void 0))return!0}function Ln(n,e){const{handlers:{onZoomComplete:o},options:{zoom:t}}=m(n);if(!En(n,e,t))return;const i=e.target.getBoundingClientRect(),s=1+(e.deltaY>=0?-t.wheel.speed:t.wheel.speed),a={x:s,y:s,focalPoint:{x:e.clientX-i.left,y:e.clientY-i.top}};j(n,a),o&&o()}function Dn(n,e,o,t){o&&(m(n).handlers[e]=on(()=>p(o,[{chart:n}]),t))}function Rn(n,e){const o=n.canvas,{wheel:t,drag:i,onZoomComplete:s}=e.zoom;t.enabled?(P(n,o,"wheel",Ln),Dn(n,"onZoomComplete",s,250)):g(n,"wheel"),i.enabled?(P(n,o,"mousedown",Pn),P(n,o.ownerDocument,"mouseup",On)):(g(n,"mousedown"),g(n,"mousemove"),g(n,"mouseup"),g(n,"keydown"))}function vn(n){g(n,"mousedown"),g(n,"mousemove"),g(n,"mouseup"),g(n,"wheel"),g(n,"click"),g(n,"keydown")}function Zn(n,e){return function(o,t){const{pan:i,zoom:s={}}=e.options;if(!i||!i.enabled)return!1;const a=t&&t.srcEvent;return a&&!e.panning&&t.pointerType==="mouse"&&(T(O(i),a)||W(O(s.drag),a))?(p(i.onPanRejected,[{chart:n,event:t}]),!1):!0}}function Cn(n,e){const o=Math.abs(n.clientX-e.clientX),t=Math.abs(n.clientY-e.clientY),i=o/t;let s,a;return i>.3&&i<1.7?s=a=!0:o>t?s=!0:a=!0,{x:s,y:a}}function nn(n,e,o){if(e.scale){const{center:t,pointers:i}=o,s=1/e.scale*o.scale,a=o.target.getBoundingClientRect(),r=Cn(i[0],i[1]),u=e.options.zoom.mode,d={x:r.x&&y(u,"x",n)?s:1,y:r.y&&y(u,"y",n)?s:1,focalPoint:{x:t.x-a.left,y:t.y-a.top}};j(n,d),e.scale=o.scale}}function Hn(n,e){e.options.zoom.pinch.enabled&&(e.scale=1)}function kn(n,e,o){e.scale&&(nn(n,e,o),e.scale=null,p(e.options.zoom.onZoomComplete,[{chart:n}]))}function en(n,e,o){const t=e.delta;t&&(e.panning=!0,G(n,{x:o.deltaX-t.x,y:o.deltaY-t.y},e.panScales),e.delta={x:o.deltaX,y:o.deltaY})}function Fn(n,e,o){const{enabled:t,onPanStart:i,onPanRejected:s}=e.options.pan;if(!t)return;const a=o.target.getBoundingClientRect(),r={x:o.center.x-a.left,y:o.center.y-a.top};if(p(i,[{chart:n,event:o,point:r}])===!1)return p(s,[{chart:n,event:o}]);e.panScales=_(e.options.pan,r,n),e.delta={x:0,y:0},clearTimeout(e.panEndTimeout),en(n,e,o)}function Tn(n,e){e.delta=null,e.panning&&(e.panEndTimeout=setTimeout(()=>e.panning=!1,500),p(e.options.pan.onPanComplete,[{chart:n}]))}const F=new WeakMap;function jn(n,e){const o=m(n),t=n.canvas,{pan:i,zoom:s}=e,a=new M.Manager(t);s&&s.pinch.enabled&&(a.add(new M.Pinch),a.on("pinchstart",()=>Hn(n,o)),a.on("pinch",r=>nn(n,o,r)),a.on("pinchend",r=>kn(n,o,r))),i&&i.enabled&&(a.add(new M.Pan({threshold:i.threshold,enable:Zn(n,o)})),a.on("panstart",r=>Fn(n,o,r)),a.on("panmove",r=>en(n,o,r)),a.on("panend",()=>Tn(n,o))),F.set(n,a)}function Nn(n){const e=F.get(n);e&&(e.remove("pinchstart"),e.remove("pinch"),e.remove("pinchend"),e.remove("panstart"),e.remove("pan"),e.remove("panend"),e.destroy(),F.delete(n))}var In="2.0.1";function E(n,e,o){const t=o.zoom.drag,{dragStart:i,dragEnd:s}=m(n);if(t.drawTime!==e||!s)return;const{left:a,top:r,width:u,height:d}=$(n,o.zoom.mode,i,s),l=n.ctx;l.save(),l.beginPath(),l.fillStyle=t.backgroundColor||"rgba(225,225,225,0.3)",l.fillRect(a,r,u,d),t.borderWidth>0&&(l.lineWidth=t.borderWidth,l.strokeStyle=t.borderColor||"rgba(225,225,225)",l.strokeRect(a,r,u,d)),l.restore()}var Bn={id:"zoom",version:In,defaults:{pan:{enabled:!1,mode:"xy",threshold:10,modifierKey:null},zoom:{wheel:{enabled:!1,speed:.1,modifierKey:null},drag:{enabled:!1,drawTime:"beforeDatasetsDraw",modifierKey:null},pinch:{enabled:!1},mode:"xy"}},start:function(n,e,o){const t=m(n);t.options=o,Object.prototype.hasOwnProperty.call(o.zoom,"enabled")&&console.warn("The option `zoom.enabled` is no longer supported. Please use `zoom.wheel.enabled`, `zoom.drag.enabled`, or `zoom.pinch.enabled`."),(Object.prototype.hasOwnProperty.call(o.zoom,"overScaleMode")||Object.prototype.hasOwnProperty.call(o.pan,"overScaleMode"))&&console.warn("The option `overScaleMode` is deprecated. Please use `scaleMode` instead (and update `mode` as desired)."),M&&jn(n,o),n.pan=(i,s,a)=>G(n,i,s,a),n.zoom=(i,s)=>j(n,i,s),n.zoomRect=(i,s,a)=>q(n,i,s,a),n.zoomScale=(i,s,a)=>xn(n,i,s,a),n.resetZoom=i=>yn(n,i),n.getZoomLevel=()=>wn(n),n.getInitialScaleBounds=()=>J(n),n.isZoomedOrPanned=()=>Sn(n)},beforeEvent(n){const e=m(n);if(e.panning||e.dragging)return!1},beforeUpdate:function(n,e,o){const t=m(n);t.options=o,Rn(n,o)},beforeDatasetsDraw(n,e,o){E(n,"beforeDatasetsDraw",o)},afterDatasetsDraw(n,e,o){E(n,"afterDatasetsDraw",o)},beforeDraw(n,e,o){E(n,"beforeDraw",o)},afterDraw(n,e,o){E(n,"afterDraw",o)},stop:function(n){vn(n),M&&Nn(n),sn(n)},panFunctions:k,zoomFunctions:C,zoomRectFunctions:H};export{Bn as p};
