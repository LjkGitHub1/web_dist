import{$ as _}from"./index.ab2bd5b7.js";import{createCrudOptions as d}from"./crud.3dcc3558.js";import f from"./option.f090da86.js";import{a as t,l as i,al as e,o as m,Q as l,R as o,X as r,O as g,u as x}from"./vue.562ccee8.js";import"./dictionary.100483c1.js";import"./api.214b983a.js";const C=t({name:"loginLog"}),v=t({...C,setup(R){const{crudBinding:n,crudRef:s,crudExpose:a}=_({createCrudOptions:d});return i(()=>{a.doRefresh()}),(h,k)=>{const c=e("fs-crud"),p=e("fs-page");return m(),l(p,null,{default:o(()=>[r(c,g({ref_key:"crudRef",ref:s},x(n)),{cell_$expand:o(u=>[r(f,{questionId:u.row.id},null,8,["questionId"])]),_:1},16)]),_:1})}}});export{v as default};