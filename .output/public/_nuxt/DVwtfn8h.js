import{f as a}from"./Dh0BTbxv.js";const r={icons:()=>a(()=>import("./EqxIGigq.js"),[],import.meta.url).then(e=>e.default||e)},o="",n="",c="icons";function p(e){return e.toLowerCase().replace(/\.svg$/,"").replace(/[^a-z0-9-:]/g,"-").replace(/:/g,"--")}const u=async e=>{let[t,s]=e.split("/");s||(s=t,t=c);const i=r[t]?await r[t]():"";return{sprite:t,icon:s,url:i+`#${p(s)}`,class:`${o} ${n}${t}`}};export{u};
