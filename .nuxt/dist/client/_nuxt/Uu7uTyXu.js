import{_ as h}from"./Av602j4k.js";import{a as y,c as f,z as c,J as s,P as k,Q as g,R as u,U as d,y as i,L as p,A as x}from"./DrosdPGj.js";import{u as w}from"./BbvEMirG.js";import{_ as z}from"./Dh0BTbxv.js";import"./DVwtfn8h.js";const C=["icons/youtube","icons/vk"],I={class:"_icon-container"},S={class:"_icon-search-wrapper"},B={class:"_icon-sprite-title"},N={class:"_icon-card"},V={class:"_icon-svg"},b={class:"_icon-name"},D=["value"],F={__name:"icons-page",props:{size:{type:Number,default:60},onClick:{type:Function,default:()=>()=>{}}},setup(r){const _=r;w({title:"Icons list - @nuxtjs/svg-sprite"});const l=y(""),m=f(()=>C.filter(e=>l.value?e.match(l.value||""):!0).reduce((e,t)=>{const[o,n]=t.split("/");return e[o]=e[o]||{name:o,symbols:[]},e[o].symbols.push({name:n,key:t}),e},{})),v=e=>{const t=e.target;t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),_.onClick(`Icon "${e.target.value}" copied to clipboard`)};return(e,t)=>{const o=h;return i(),c("div",I,[s("div",S,[k(s("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>l.value=n),class:"_icon-search",placeholder:"Search Icons"},null,512),[[g,l.value]])]),s("div",null,[(i(!0),c(u,null,d(m.value,n=>(i(),c("div",{key:n.name,class:"_icon-preview-wrapper"},[s("h2",B,p(n.name),1),(i(!0),c(u,null,d(n.symbols,a=>(i(),c("div",{key:a.key,class:"_icon-preview"},[s("div",N,[s("div",V,[x(o,{name:a.key,title:a.key,class:"icon",width:r.size+"px",height:r.size+"px"},null,8,["name","title","width","height"])]),s("code",b,p(a.name),1),s("input",{class:"_icon-name-input",type:"text",readonly:"",value:a.key,onClick:v},null,8,D)])]))),128))]))),128))])])}}},j=z(F,[["__scopeId","data-v-ada2fcf8"]]);export{j as default};
