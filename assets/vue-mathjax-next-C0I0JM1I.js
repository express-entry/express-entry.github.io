import{h as s}from"./@babel-DuvU54pN.js";import{r as i}from"./vue-Cgsu6aj0.js";var r={exports:{}},t=i,a=t.defineComponent({name:"VueMathjax",props:{formula:{type:String,default:""},safe:{type:Boolean,default:!0},options:{type:Object,default:function(){return{}}}},setup(e){const n=t.reactive({mathjaxRef:null}),o=()=>{e.safe?n.mathjaxRef.textContent=e.formula:n.mathjaxRef.innerHTML=e.formula,window.MathJax&&(window.MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"],["(",")"]],displayMath:[["$$","$$"],["[","]"]],processEscapes:!0,processEnvironments:!0},displayAlign:"center","HTML-CSS":{styles:{".MathJax_Display":{margin:0}},linebreaks:{automatic:!0}},...e.options}),window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,n.mathjaxRef]))};return t.watch(()=>e.formula,()=>{o()}),t.onMounted(()=>{o()}),{...t.toRefs(n)}}});const l={ref:"mathjaxRef"};a.render=function(e,n,o,p,f,m){return t.openBlock(),t.createElementBlock("span",l,null,512)},a.__file="src/index.vue",a.install=function(e){e.component(a.name,a)},r.exports=a;var u=r.exports;const h=s(u);export{h as V};
