import{u as b,_ as o}from"./index.ab2bd5b7.js";import{a as p,r as _,aC as A,aD as E,l as w,w as i,al as f,o as L,Q as k,R as s,X as e,u as a,aA as t,n as M}from"./vue.562ccee8.js";const S=p({name:"layoutColumns"}),I=p({...S,setup(D){const m=t(()=>o(()=>import("./aside.21fecaf1.js"),["assets/aside.21fecaf1.js","assets/index.ab2bd5b7.js","assets/vue.562ccee8.js","assets/index.1f7026e7.css"])),d=t(()=>o(()=>import("./header.39ab5f6c.js"),["assets/header.39ab5f6c.js","assets/index.ab2bd5b7.js","assets/vue.562ccee8.js","assets/index.1f7026e7.css"])),y=t(()=>o(()=>import("./main.a5658791.js"),["assets/main.a5658791.js","assets/index.ab2bd5b7.js","assets/vue.562ccee8.js","assets/index.1f7026e7.css"])),R=t(()=>o(()=>import("./columnsAside.cecff608.js"),["assets/columnsAside.cecff608.js","assets/vue.562ccee8.js","assets/index.ab2bd5b7.js","assets/index.1f7026e7.css","assets/_plugin-vue_export-helper.c27b6911.js","assets/columnsAside.8d96fc45.css"])),n=_(""),r=_(),v=A(),T=b(),{themeConfig:C}=E(T),l=()=>{n.value.update(),r.value.layoutMainScrollbarRef.update()},c=()=>{M(()=>{setTimeout(()=>{l(),n.value.wrapRef.scrollTop=0,r.value.layoutMainScrollbarRef.wrapRef.scrollTop=0},500)})};return w(()=>{c()}),i(()=>v.path,()=>{c()}),i(C,()=>{l()},{deep:!0}),(P,V)=>{const h=f("el-scrollbar"),u=f("el-container");return L(),k(u,{class:"layout-container"},{default:s(()=>[e(a(R)),e(u,{class:"layout-columns-warp layout-container-view h100"},{default:s(()=>[e(a(m)),e(h,{ref_key:"layoutScrollbarRef",ref:n,class:"layout-backtop"},{default:s(()=>[e(a(d)),e(a(y),{ref_key:"layoutMainRef",ref:r},null,512)]),_:1},512)]),_:1})]),_:1})}}});export{I as default};