import{u as b,N as C,_ as t}from"./index.ab2bd5b7.js";import{a as p,r as _,aC as L,aD as k,l as w,w as i,al as f,o as A,Q as E,R as n,X as e,u as r,aA as s,n as M}from"./vue.562ccee8.js";const S=p({name:"layoutDefaults"}),B=p({...S,setup(g){const d=s(()=>t(()=>import("./aside.21fecaf1.js"),["assets/aside.21fecaf1.js","assets/index.ab2bd5b7.js","assets/vue.562ccee8.js","assets/index.1f7026e7.css"])),m=s(()=>t(()=>import("./header.39ab5f6c.js"),["assets/header.39ab5f6c.js","assets/index.ab2bd5b7.js","assets/vue.562ccee8.js","assets/index.1f7026e7.css"])),y=s(()=>t(()=>import("./main.a5658791.js"),["assets/main.a5658791.js","assets/index.ab2bd5b7.js","assets/vue.562ccee8.js","assets/index.1f7026e7.css"])),o=_(""),a=_(),R=L(),v=b(),{themeConfig:T}=k(v),l=()=>{o.value.update(),a.value.layoutMainScrollbarRef.update()},c=()=>{M(()=>{setTimeout(()=>{l(),o.value.wrapRef.scrollTop=0,a.value.layoutMainScrollbarRef.wrapRef.scrollTop=0},500)})};return w(()=>{c(),C.done(600)}),i(()=>R.path,()=>{c()}),i(T,()=>{l()},{deep:!0}),(x,D)=>{const h=f("el-scrollbar"),u=f("el-container");return A(),E(u,{class:"layout-container"},{default:n(()=>[e(r(d)),e(u,{class:"layout-container-view h100"},{default:n(()=>[e(h,{ref_key:"layoutScrollbarRef",ref:o,class:"layout-backtop"},{default:n(()=>[e(r(m)),e(r(y),{ref_key:"layoutMainRef",ref:a},null,512)]),_:1},512)]),_:1})]),_:1})}}});export{B as default};