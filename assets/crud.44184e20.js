import{r as o,P as r}from"./index.ab2bd5b7.js";import"./vue.562ccee8.js";const n="/api/system/login_log/";function a(e){return o({url:n,method:"get",params:e})}function p(e){return o({url:n,method:"post",data:e})}function c(e){return o({url:n+e.id+"/",method:"put",data:e})}function s(e){return o({url:n+e+"/",method:"delete",data:{id:e}})}const w=function({crudExpose:e}){return{crudOptions:{request:{pageRequest:async t=>await a(t),addRequest:async({form:t})=>await p(t),editRequest:async({form:t,row:l})=>(t.id=l.id,await c(t)),delRequest:async({row:t})=>await s(t.id)},actionbar:{buttons:{add:{show:!1}}},rowHandle:{fixed:"right",width:100,buttons:{view:{type:"text"},edit:{show:!1},remove:{show:!1}}},columns:{_index:{title:"序号",form:{show:!1},column:{align:"center",width:"70px",columnSetDisabled:!0,formatter:t=>{let l=t.index??1,i=e.crudBinding.value.pagination;return((i.currentPage??1)-1)*i.pageSize+l+1}}},search:{title:"关键词",column:{show:!1},search:{show:!0,component:{props:{clearable:!0},placeholder:"请输入关键词"}},form:{show:!1,component:{props:{clearable:!0}}}},username:{title:"登录用户名",search:{disabled:!1},type:"input",column:{minWidth:120},form:{disabled:!0,component:{placeholder:"请输入登录用户名"}}},ip:{title:"登录ip",search:{disabled:!1},type:"input",column:{minWidth:120},form:{disabled:!0,component:{placeholder:"请输入登录ip"}}},create_datetime:{title:"时间",search:{disabled:!0},disabled:!0,type:"input",column:{minWidth:120},form:{component:{placeholder:"请输入运营商"}}},continent:{title:"大州",type:"input",column:{show:!1,minWidth:90},form:{disabled:!0,component:{placeholder:"请输入大州"}},component:{props:{color:"auto"}}},country:{title:"国家",type:"input",column:{show:!1,minWidth:90},form:{component:{placeholder:"请输入国家"}},component:{props:{color:"auto"}}},province:{title:"省份",type:"input",column:{show:!1,minWidth:80},form:{component:{placeholder:"请输入省份"}},component:{props:{color:"auto"}}},city:{title:"城市",type:"input",column:{show:!1,minWidth:80},form:{component:{placeholder:"请输入城市"}},component:{props:{color:"auto"}}},district:{title:"县区",key:"",type:"input",column:{show:!1,minWidth:80},form:{component:{placeholder:"请输入县区"}},component:{props:{color:"auto"}}},area_code:{title:"区域代码",type:"input",column:{show:!1,minWidth:90},form:{component:{placeholder:"请输入区域代码"}},component:{props:{color:"auto"}}},country_english:{title:"英文全称",type:"input",column:{show:!1,minWidth:120},form:{component:{placeholder:"请输入英文全称"}},component:{props:{color:"auto"}}},country_code:{title:"简称",type:"input",column:{show:!1,minWidth:100},form:{component:{placeholder:"请输入简称"}},component:{props:{color:"auto"}}},longitude:{title:"经度",type:"input",disabled:!0,column:{show:!1,minWidth:100},form:{component:{placeholder:"请输入经度"}},component:{props:{color:"auto"}}},latitude:{title:"纬度",type:"input",disabled:!0,column:{show:!1,minWidth:100},form:{component:{placeholder:"请输入纬度"}},component:{props:{color:"auto"}}},login_type:{title:"登录类型",type:"dict-select",search:{disabled:!1},dict:r({data:[{label:"普通登录",value:1},{label:"微信扫码登录",value:2}]}),column:{minWidth:120},form:{component:{placeholder:"请选择登录类型"}}},os:{title:"操作系统",type:"input",column:{minWidth:120},form:{component:{placeholder:"请输入操作系统"}}},browser:{title:"浏览器名",type:"input",column:{minWidth:120},form:{component:{placeholder:"请输入浏览器名"}}},agent:{title:"agent信息",disabled:!0,type:"input",column:{minWidth:120},form:{component:{placeholder:"请输入agent信息"}}}}}}};export{w as createCrudOptions};