import{a8 as A,u as P,e as d,_ as r}from"./index.ab2bd5b7.js";import{a as C,aD as p,aC as V,a0 as O,m as f,l as F,$ as M,o as _,c as U,Q as h,u as a,U as v,X as L,aA as i}from"./vue.562ccee8.js";import{_ as w}from"./_plugin-vue_export-helper.c27b6911.js";const H={class:"layout-navbars-breadcrumb-index"},N=C({name:"layoutBreadcrumbIndex"}),$=C({...N,setup(j){const y=i(()=>r(()=>import("./breadcrumb.62b59f35.js"),["assets/breadcrumb.62b59f35.js","assets/vue.562ccee8.js","assets/index.ab2bd5b7.js","assets/index.1f7026e7.css","assets/_plugin-vue_export-helper.c27b6911.js","assets/breadcrumb.9ac6d349.css"])),R=i(()=>r(()=>import("./user.b8768c70.js"),["assets/user.b8768c70.js","assets/index.ab2bd5b7.js","assets/vue.562ccee8.js","assets/index.1f7026e7.css","assets/_plugin-vue_export-helper.c27b6911.js","assets/user.b59a191c.css"])),b=i(()=>r(()=>import("./index.1ef25aaa.js"),["assets/index.1ef25aaa.js","assets/vue.562ccee8.js","assets/index.ab2bd5b7.js","assets/index.1f7026e7.css","assets/logo-mini.a051fed9.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/index.ad93e0d6.css"])),g=i(()=>r(()=>import("./horizontal.e2f318e4.js"),["assets/horizontal.e2f318e4.js","assets/index.ab2bd5b7.js","assets/vue.562ccee8.js","assets/index.1f7026e7.css","assets/_plugin-vue_export-helper.c27b6911.js","assets/horizontal.f075ceb8.css"])),x=A(),E=P(),{themeConfig:c}=p(E),{routesList:u}=p(x),I=V(),l=O({menuList:[]}),S=f(()=>{let{isShowLogo:t,layout:e}=c.value;return t&&e==="classic"||t&&e==="transverse"}),T=f(()=>{let{layout:t,isClassicSplitMenu:e}=c.value;return t==="transverse"||e&&t==="classic"}),m=()=>{let{layout:t,isClassicSplitMenu:e}=c.value;if(t==="classic"&&e){l.menuList=B(o(u.value));const s=D(I.path);d.emit("setSendClassicChildren",s)}else l.menuList=o(u.value)},B=t=>(t.map(e=>{e.children&&delete e.children}),t),o=t=>t.filter(e=>{var s;return!((s=e.meta)!=null&&s.isHide)}).map(e=>(e=Object.assign({},e),e.children&&(e.children=o(e.children)),e)),D=t=>{const e=t.split("/");let s={children:[]};return o(u.value).map((n,k)=>{n.path===`/${e[1]}`&&(n.k=k,s.item={...n},s.children=[{...n}],n.children&&(s.children=n.children))}),s};return F(()=>{m(),d.on("getBreadcrumbIndexSetFilterRoutes",()=>{m()})}),M(()=>{d.off("getBreadcrumbIndexSetFilterRoutes",()=>{})}),(t,e)=>(_(),U("div",H,[S.value?(_(),h(a(b),{key:0})):v("",!0),L(a(y)),T.value?(_(),h(a(g),{key:1,menuList:l.menuList},null,8,["menuList"])):v("",!0),L(a(R))]))}});const q=w($,[["__scopeId","data-v-3b707f43"]]);export{q as default};
