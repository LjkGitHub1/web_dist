import{A as k}from"./api.f3a6db2e.js";import{s as b}from"./index.ab2bd5b7.js";import{a as g,a0 as f,r as v,G as x,al as u,o as w,c as C,X as t,R as o,u as s,V as p}from"./vue.562ccee8.js";const A={style:{padding:"20px"}},N=g({__name:"addTabs",setup(R){let l=f({title:null,key:null});const i=v(),_=f({title:[{required:!0,message:"请输入"}],key:[{required:!0,message:"请输入"},{pattern:/^[A-Za-z0-9]+$/,message:"只能是英文和数字"}]}),c=x("refreshView"),y=async m=>{m&&await m.validate((e,r)=>{e?k(l).then(n=>{n.code==2e3&&(b("新增成功"),c())}):console.log("error submit!",r)})};return(m,e)=>{const r=u("el-input"),n=u("el-form-item"),d=u("el-button"),V=u("el-form");return w(),C("div",A,[t(V,{ref_key:"formRef",ref:i,model:s(l),rules:_,"label-width":"80px"},{default:o(()=>[t(n,{label:"标题",prop:"title"},{default:o(()=>[t(r,{modelValue:s(l).title,"onUpdate:modelValue":e[0]||(e[0]=a=>s(l).title=a)},null,8,["modelValue"])]),_:1}),t(n,{label:"key值",prop:"key"},{default:o(()=>[t(r,{modelValue:s(l).key,"onUpdate:modelValue":e[1]||(e[1]=a=>s(l).key=a)},null,8,["modelValue"])]),_:1}),t(n,null,{default:o(()=>[t(d,{type:"primary",onClick:e[2]||(e[2]=a=>y(i.value))},{default:o(()=>e[3]||(e[3]=[p("立即创建")])),_:1}),t(d,null,{default:o(()=>e[4]||(e[4]=[p("取消")])),_:1})]),_:1})]),_:1},8,["model","rules"])])}}});export{N as _};