import{a as p,r as _,aC as y,m as d,w as m,at as w,o as n,c as o,b as I,F as k,ab as O,S as c,X as v,R as b,Y as R,a3 as x,n as L}from"./vue.562ccee8.js";const S={class:"layout-padding layout-padding-unset layout-iframe"},B={class:"layout-padding-auto layout-padding-view"},C=["src","data-url"],P=p({name:"layoutIframeView"}),V=p({...P,props:{refreshKey:{type:String,default:()=>""},name:{type:String,default:()=>"slide-right"},list:{type:Array,default:()=>[]}},setup(f){const r=f,l=_(),i=y(),h=d(()=>r.list.filter(e=>{var a;return(a=e.meta)==null?void 0:a.isIframeOpen})),g=d(()=>i.path),u=(e,a)=>{L(()=>{if(!l.value)return!1;l.value.forEach(s=>{s.dataset.url===e&&(s.onload=()=>{var t;(t=a.meta)!=null&&t.isIframeOpen&&a.meta.loading&&(a.meta.loading=!1)})})})};return m(()=>i.fullPath,e=>{const a=r.list.find(s=>s.path===e);if(!a)return!1;a.meta.isIframeOpen||(a.meta.isIframeOpen=!0),u(e,a)},{immediate:!0}),m(()=>r.refreshKey,()=>{const e=r.list.find(a=>a.path===i.path);if(!e)return!1;e.meta.isIframeOpen&&(e.meta.isIframeOpen=!1),setTimeout(()=>{e.meta.isIframeOpen=!0,e.meta.loading=!0,u(i.fullPath,e)})},{deep:!0}),(e,a)=>{const s=w("loading");return n(),o("div",S,[I("div",B,[(n(!0),o(k,null,O(h.value,t=>c((n(),o("div",{class:"w100",key:t.path,"element-loading-background":"white"},[v(x,{name:f.name,mode:"out-in"},{default:b(()=>[c((n(),o("iframe",{src:t.meta.isLink,key:t.path,frameborder:"0",height:"100%",width:"100%",style:{position:"absolute"},"data-url":t.path,ref_for:!0,ref_key:"iframeRef",ref:l},null,8,C)),[[R,g.value===t.path]])]),_:2},1032,["name"])])),[[s,t.meta.loading]])),128))])])}}});export{V as default};