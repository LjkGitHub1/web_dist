import{G as B,A as G}from"./api.f3a6db2e.js";import{_ as N}from"./associationTable.vue_vue_type_script_setup_true_lang.76222c4b.js";import{s as $}from"./index.ab2bd5b7.js";import{d as F}from"./dictionary.100483c1.js";import{a as M,a0 as U,r as V,G as P,l as S,al as m,o as u,c as f,X as o,R as r,u as t,F as c,ab as g,Q as y,U as x,V as z}from"./vue.562ccee8.js";const Q={style:{padding:"20px"}},X={key:1},K=M({__name:"addContent",setup(Z){let a=U({parent:null,title:null,key:null,form_item_type:"",rule:null,placeholder:null});const k=V(),_=V(),R=U({parent:[{required:!0,message:"请选择"}],title:[{required:!0,message:"请输入"}],key:[{required:!0,message:"请输入"},{pattern:/^[A-Za-z0-9_]+$/,message:"请输入数字、字母或下划线"}],form_item_type:[{required:!0,message:"请输入"}]});let v=V([]),q=V([{label:"必填项",value:'{"required": true, "message": "必填项不能为空"}'},{label:"邮箱",value:'{ "type": "email", "message": "请输入正确的邮箱地址"}'},{label:"URL地址",value:'{ "type": "url", "message": "请输入正确的URL地址"}'}]);const w=()=>{B({parent__isnull:!0,limit:999}).then(s=>{v.value=s.data})},C=P("refreshView"),O=async s=>{s&&await s.validate((l,d)=>{l?G(a).then(i=>{i.code==2e3&&($("新增成功"),C())}):console.log("error submit!",d)})},L=()=>new Promise(function(s,l){if(_){if(!_.onSubmit())return l(!1);const{formObj:d}=_;return a.setting=d,s(!0)}else return s(!0)});return S(()=>{w()}),(s,l)=>{const d=m("el-option"),i=m("el-select"),n=m("el-form-item"),b=m("el-input"),T=m("el-input-number"),j=m("el-button"),A=m("el-form");return u(),f("div",Q,[o(A,{ref_key:"formRef",ref:k,model:t(a),rules:R,"label-width":"80px"},{default:r(()=>[o(n,{label:"所属分组",prop:"parent"},{default:r(()=>[o(i,{modelValue:t(a).parent,"onUpdate:modelValue":l[0]||(l[0]=e=>t(a).parent=e),placeholder:"请选择分组",clearable:""},{default:r(()=>[(u(!0),f(c,null,g(t(v),(e,p)=>(u(),y(d,{label:e.title,value:e.id,key:p},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(n,{label:"标题",prop:"title"},{default:r(()=>[o(b,{modelValue:t(a).title,"onUpdate:modelValue":l[1]||(l[1]=e=>t(a).title=e),placeholder:"请输入",clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"key值",prop:"key"},{default:r(()=>[o(b,{modelValue:t(a).key,"onUpdate:modelValue":l[2]||(l[2]=e=>t(a).key=e),placeholder:"请输入",clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"表单类型",prop:"form_item_type"},{default:r(()=>[o(i,{modelValue:t(a).form_item_type,"onUpdate:modelValue":l[3]||(l[3]=e=>t(a).form_item_type=e),placeholder:"请选择",clearable:""},{default:r(()=>[(u(!0),f(c,null,g(t(F)("config_form_type"),(e,p)=>(u(),y(d,{label:e.label,value:e.value,key:p},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),[4,5,6].indexOf(t(a).form_item_type)>-1?(u(),y(n,{key:0,label:"字典key",prop:"setting",rules:[{required:!0,message:"不能为空"}]},{default:r(()=>[o(b,{modelValue:t(a).setting,"onUpdate:modelValue":l[4]||(l[4]=e=>t(a).setting=e),placeholder:"请输入dictionary中key值",clearable:""},null,8,["modelValue"])]),_:1})):x("",!0),[13,14].indexOf(t(a).form_item_type)>-1?(u(),f("div",X,[o(N,{ref_key:"associationTableRef",ref:_,modelValue:t(a).setting,"onUpdate:modelValue":l[5]||(l[5]=e=>t(a).setting=e),onUpdateVal:L},null,8,["modelValue"])])):x("",!0),o(n,{label:"校验规则"},{default:r(()=>[o(i,{modelValue:t(a).rule,"onUpdate:modelValue":l[6]||(l[6]=e=>t(a).rule=e),multiple:"",placeholder:"请选择(可多选)",clearable:""},{default:r(()=>[(u(!0),f(c,null,g(t(q),(e,p)=>(u(),y(d,{label:e.label,value:e.value,key:p},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(n,{label:"提示信息",prop:"placeholder"},{default:r(()=>[o(b,{modelValue:t(a).placeholder,"onUpdate:modelValue":l[7]||(l[7]=e=>t(a).placeholder=e),placeholder:"请输入",clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"排序",prop:"sort"},{default:r(()=>[o(T,{modelValue:t(a).sort,"onUpdate:modelValue":l[8]||(l[8]=e=>t(a).sort=e),min:0,max:99},null,8,["modelValue"])]),_:1}),o(n,null,{default:r(()=>[o(j,{type:"primary",onClick:l[9]||(l[9]=e=>O(k.value))},{default:r(()=>l[10]||(l[10]=[z("立即创建")])),_:1})]),_:1})]),_:1},8,["model","rules"])])}}});export{K as _};
