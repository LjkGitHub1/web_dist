import{r as a,P as o}from"./index.ab2bd5b7.js";import{d}from"./dictionary.100483c1.js";import"./vue.562ccee8.js";const n="/api/evaluate/scale/question/";function l(e){return a({url:n,method:"get",params:e})}function s(e){return a({url:n,method:"post",data:e})}function u(e){return a({url:n+e.id+"/",method:"put",data:e})}function c(e){return a({url:n+e+"/",method:"delete",data:{id:e}})}const y=function({crudExpose:e}){return{crudOptions:{request:{pageRequest:async t=>await l(t),addRequest:async({form:t})=>await s(t),editRequest:async({form:t,row:r})=>(t.id=r.id,await u(t)),delRequest:async({row:t})=>await c(t.id)},actionbar:{buttons:{add:{show:!0}}},rowHandle:{fixed:"right",width:200,buttons:{view:{type:"text"},edit:{text:"编辑",type:"text",iconRight:"Edit",show:!0},remove:{type:"text",iconRight:"Delete",show:!0}}},columns:{$expand:{title:"展开",form:{show:!1},column:{type:"expand",align:"center",width:"55px",columnSetDisabled:!0}},_index:{title:"序号",form:{show:!1},column:{align:"center",width:"70px",columnSetDisabled:!0,formatter:t=>{let r=t.index??1,i=e.crudBinding.value.pagination;return((i.currentPage??1)-1)*i.pageSize+r+1}}},search:{title:"关键词",column:{show:!1},search:{show:!0,component:{props:{clearable:!0},placeholder:"请输入关键词"}},form:{show:!1,component:{props:{clearable:!0}}}},scale:{title:"量表",search:{disabled:!0},type:"dict-select",dict:o({url:"/api/evaluate/scale",value:"id",label:"title"}),column:{minWidth:120},form:{disabled:!0,component:{placeholder:"选择量表",name:"fs-dict-select"}}},text:{title:"题目",search:{disabled:!1},type:"input",column:{minWidth:120},form:{component:{placeholder:"请输入题目"}}},type:{title:"题目类型",search:{disabled:!0},disabled:!0,type:"dict-select",column:{minWidth:120},dict:o({data:d("question_type")}),form:{component:{placeholder:"题目类型"}}}}}}};export{y as createCrudOptions};
