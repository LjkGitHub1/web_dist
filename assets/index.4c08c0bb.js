import{$ as p}from"./index.ab2bd5b7.js";import{createCrudOptions as d}from"./crud.80eb4821.js";import{a as s,l as f,al as e,o as l,Q as _,R as i,X as m,O as g,u as q}from"./vue.562ccee8.js";import"./api.214b983a.js";const x=s({name:"loginLog"}),O=s({...x,props:["questionId"],setup(n){const o=n,{crudBinding:t,crudRef:r,crudExpose:a}=p({createCrudOptions:d});return f(()=>{console.log("questionId",o.questionId),a.doRefresh(o.questionId)}),(C,I)=>{const c=e("fs-crud"),u=e("fs-page");return l(),_(u,null,{default:i(()=>[m(c,g({ref_key:"crudRef",ref:r},q(t)),null,16)]),_:1})}}});export{O as default};
