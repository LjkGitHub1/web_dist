import{$ as i,q as _}from"./index.ab2bd5b7.js";import{createCrudOptions as x}from"./crud.ae4722a3.js";import{a as h,r as B,l as w,al as n,o as C,Q as R,R as g,X as V,O as k,u as v}from"./vue.562ccee8.js";import"./dictionary.100483c1.js";const $=h({__name:"index",setup(y,{expose:s}){const e=B(!1),a=r=>{_.confirm("您确定要关闭?",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{r()}).catch(()=>{})},{crudBinding:c,crudRef:l,crudExpose:o}=i({createCrudOptions:x,context:{}}),{setSearchFormData:d,doRefresh:u}=o;return s({drawer:e,setSearchFormData:d,doRefresh:u}),w(()=>{o.doRefresh()}),(r,t)=>{const f=n("fs-crud"),m=n("el-drawer");return C(),R(m,{size:"70%",modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=p=>e.value=p),direction:"rtl","destroy-on-close":"","before-close":a},{default:g(()=>[V(f,k({ref_key:"crudRef",ref:l},v(c)),null,16)]),_:1},8,["modelValue"])}}});export{$ as default};
