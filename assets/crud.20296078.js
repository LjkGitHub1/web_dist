import{r as i}from"./index.ab2bd5b7.js";import{a as o}from"./authFunction.ff362cdf.js";import"./vue.562ccee8.js";const n="/api/cognitive/task/";function l(e){return i({url:n,method:"get",params:e})}function d(e){return i({url:n,method:"post",data:e})}function s(e){return i({url:n+e.id+"/",method:"put",data:e})}function u(e){return i({url:n+e+"/",method:"delete",data:{id:e}})}const y=function({crudExpose:e}){return{crudOptions:{request:{pageRequest:async t=>await l(t),addRequest:async({form:t})=>await d(t),editRequest:async({form:t,row:r})=>(t.id=r.id,await s(t)),delRequest:async({row:t})=>await u(t.id)},actionbar:{buttons:{add:{show:o("ScaleView:Create")}}},rowHandle:{fixed:"right",width:200,buttons:{view:{type:"text",show:o("ScaleView:Retrieve")},edit:{text:"编辑",type:"text",iconRight:"Edit",show:o("ScaleView:Update")},remove:{type:"text",iconRight:"Delete",show:o("ScaleView:Delete")},gotoTest:{type:"text",text:"开始测试",show:!o("ScaleView:gotoTest")}}},columns:{_index:{title:"序号",form:{show:!1},column:{align:"center",width:"70px",columnSetDisabled:!0,formatter:t=>{let r=t.index??1,a=e.crudBinding.value.pagination;return((a.currentPage??1)-1)*a.pageSize+r+1}}},search:{title:"关键词",column:{show:!1},search:{show:!0,component:{props:{clearable:!0},placeholder:"请输入关键词"}},form:{show:!1,component:{props:{clearable:!0}}}},title:{title:"任务名称",search:{disabled:!0},type:"input",column:{minWidth:120},form:{disabled:!0,component:{placeholder:"任务名称"}}},type:{title:"任务类型",search:{disabled:!0},type:"input",column:{minWidth:120},form:{disabled:!0,component:{placeholder:"任务类型"}},component:{props:{color:"auto"}}},description:{title:"任务描述",search:{disabled:!1},type:"input",column:{minWidth:120},form:{disabled:!0,component:{placeholder:"请输入任务描述"}}},optip:{title:"操作提示",search:{disabled:!1},type:"input",column:{minWidth:120},form:{disabled:!0,component:{placeholder:"请输入操作提示"}}},duration:{title:"预估测试时长",search:{disabled:!0},disabled:!0,type:"input",column:{minWidth:120},form:{component:{placeholder:"预估测试时长"}}},cover:{title:"任务封面",search:{disabled:!1},type:"input",column:{minWidth:120},form:{disabled:!0,component:{placeholder:"任务封面"}}},testCount:{title:"已测试人次",type:"input",column:{minWidth:90},form:{disabled:!0,component:{placeholder:"请输入人次"}},component:{props:{color:"auto"}}}}}}};export{y as createCrudOptions};
