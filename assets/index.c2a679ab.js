import{C as G,y as I}from"./index.ab2bd5b7.js";import{G as R}from"./api.f3a6db2e.js";import{_ as E}from"./addTabs.vue_vue_type_script_setup_true_lang.64cdb0a6.js";import{_ as k}from"./addContent.vue_vue_type_script_setup_true_lang.f805f3b5.js";import H from"./formContent.42a01c17.js";import{a as w,r as p,l as M,al as o,o as r,Q as i,R as l,b as d,X as n,V as f,u,H as _,U as c,c as g,ab as Q,L as X,F as $}from"./vue.562ccee8.js";import"./associationTable.vue_vue_type_script_setup_true_lang.76222c4b.js";import"./dictionary.100483c1.js";import"./_plugin-vue_export-helper.c27b6911.js";const j={class:"yxt-flex-between"},q={key:0,slot:"label"},A=w({name:"config"}),te=w({...A,setup(J){let a=p(!1),s=p(!1),m=p("base"),b=p([]);const x=()=>{R({limit:999,parent__isnull:!0}).then(y=>{let e=y.data;e.push({title:"无",icon:"el-icon-plus",key:"null"}),b.value=e})};return M(()=>{x()}),(y,e)=>{const C=o("el-tag"),V=o("el-button"),z=o("el-button-group"),T=o("el-header"),v=o("el-drawer"),B=o("el-col"),N=o("el-row"),U=o("el-tab-pane"),L=o("el-tabs"),D=o("el-card");return r(),i(D,null,{default:l(()=>[d("div",null,[n(T,null,{default:l(()=>[d("div",j,[d("div",null,[n(C,null,{default:l(()=>e[5]||(e[5]=[f("系统配置:您可以对您的网站进行自定义配置")])),_:1})]),d("div",null,[n(z,null,{default:l(()=>[n(V,{type:"primary",size:"small",icon:u(G),onClick:e[0]||(e[0]=t=>_(a)?a.value=!0:a=!0)},{default:l(()=>e[6]||(e[6]=[f(" 添加分组 ")])),_:1},8,["icon"]),n(V,{size:"small",type:"warning",icon:u(I),onClick:e[1]||(e[1]=t=>_(s)?s.value=!0:s=!0)},{default:l(()=>e[7]||(e[7]=[f(" 添加内容 ")])),_:1},8,["icon"])]),_:1})])])]),_:1})]),d("div",null,[u(a)?(r(),i(v,{key:0,title:"添加分组",modelValue:u(a),"onUpdate:modelValue":e[2]||(e[2]=t=>_(a)?a.value=t:a=t),direction:"rtl",size:"30%"},{default:l(()=>[n(E)]),_:1},8,["modelValue"])):c("",!0)]),d("div",null,[u(s)?(r(),i(v,{key:0,title:"添加内容",modelValue:u(s),"onUpdate:modelValue":e[3]||(e[3]=t=>_(s)?s.value=t:s=t),direction:"rtl",size:"30%"},{default:l(()=>[n(k)]),_:1},8,["modelValue"])):c("",!0)]),n(L,{type:"border-card",modelValue:u(m),"onUpdate:modelValue":e[4]||(e[4]=t=>_(m)?m.value=t:m=t)},{default:l(()=>[(r(!0),g($,null,Q(u(b),(t,F)=>(r(),i(U,{key:F,label:t.title,name:t.key},{default:l(()=>[t.icon?(r(),g("span",q,[d("i",{class:X(t.icon),style:{"font-weight":"1000","font-size":"16px"}},null,2)])):c("",!0),t.icon?(r(),i(N,{key:1},{default:l(()=>[n(B,{offset:4,span:8},{default:l(()=>[n(k)]),_:1})]),_:1})):(r(),i(H,{key:2,options:t,editableTabsItem:t},null,8,["options","editableTabsItem"]))]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1})}}});export{te as default};
