import{a as k,aD as S,aC as T,aG as R,a0 as $,m as E,l as D,aI as G,al as m,o as r,c,X as d,u as b,R as p,a3 as M,F as U,ab as z,Q as _,U as f,W as h,a5 as Q,V as W}from"./vue.562ccee8.js";import{a8 as X,u as j,o as q,L}from"./index.ab2bd5b7.js";import{_ as A}from"./_plugin-vue_export-helper.c27b6911.js";const H={key:0,class:"layout-navbars-breadcrumb"},J={key:0,class:"layout-navbars-breadcrumb-span"},K={key:1},O={key:2},P=["onClick"],Y=k({name:"layoutBreadcrumb"}),Z=k({...Y,setup(ee){const B=X(),I=j(),{themeConfig:o}=S(I),{routesList:g}=S(B),i=T(),v=R(),e=$({breadcrumbList:[],routeSplit:[],routeSplitFirst:"",routeSplitIndex:1}),V=E(()=>{u(i.path);const{layout:t,isBreadcrumb:a}=o.value;return t==="classic"||t==="transverse"?!1:!!a}),w=t=>{const{redirect:a,path:n}=t;a?v.push(a):v.push(n)},x=()=>{o.value.isCollapse=!o.value.isCollapse,N()},N=()=>{L.remove("themeConfig"),L.set("themeConfig",o.value)},C=t=>{t.forEach(a=>{e.routeSplit.forEach((n,y,l)=>{e.routeSplitFirst===a.path&&(e.routeSplitFirst+=`/${l[e.routeSplitIndex]}`,e.breadcrumbList.push(a),e.routeSplitIndex++,a.children&&C(a.children))})})},u=t=>{if(!o.value.isBreadcrumb)return!1;e.breadcrumbList=[g.value[0]],e.routeSplit=t.split("/"),e.routeSplit.shift(),e.routeSplitFirst=`/${e.routeSplit[0]}`,e.routeSplitIndex=1,C(g.value),(i.name==="home"||i.name==="notFound"&&e.breadcrumbList.length>1)&&e.breadcrumbList.shift(),e.breadcrumbList.length>0&&(e.breadcrumbList[e.breadcrumbList.length-1].meta.tagsViewName=q.setTagsViewNameI18n(i))};return D(()=>{u(i.path)}),G(t=>{u(t.path)}),(t,a)=>{const n=m("SvgIcon"),y=m("el-breadcrumb-item"),l=m("el-breadcrumb");return V.value?(r(),c("div",H,[d(n,{class:"layout-navbars-breadcrumb-icon",name:b(o).isCollapse?"ele-Expand":"ele-Fold",size:16,onClick:x},null,8,["name"]),d(l,{class:"layout-navbars-breadcrumb-hide"},{default:p(()=>[d(M,{name:"breadcrumb"},{default:p(()=>[(r(!0),c(U,null,z(e.breadcrumbList,(s,F)=>(r(),_(y,{key:s.meta.tagsViewName?s.meta.tagsViewName:s.meta.title},{default:p(()=>[F===e.breadcrumbList.length-1?(r(),c("span",J,[b(o).isBreadcrumbIcon?(r(),_(n,{key:0,name:s.meta.icon,class:"layout-navbars-breadcrumb-iconfont"},null,8,["name"])):f("",!0),s.meta.tagsViewName?(r(),c("div",O,h(s.meta.tagsViewName),1)):(r(),c("div",K,h(t.$t(s.meta.title)),1))])):(r(),c("a",{key:1,onClick:Q(te=>w(s),["prevent"])},[b(o).isBreadcrumbIcon?(r(),_(n,{key:0,name:s.meta.icon,class:"layout-navbars-breadcrumb-iconfont"},null,8,["name"])):f("",!0),W(h(t.$t(s.meta.title)),1)],8,P))]),_:2},1024))),128))]),_:1})]),_:1})])):f("",!0)}}});const oe=A(Z,[["__scopeId","data-v-cc3d7130"]]);export{oe as default};