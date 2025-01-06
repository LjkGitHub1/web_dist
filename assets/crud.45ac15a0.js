import{r,I as b,h as _,P as a,n as v,s as u}from"./index.ab2bd5b7.js";import{d as i}from"./dictionary.100483c1.js";import{a as n}from"./authFunction.ff362cdf.js";import{aD as x,m as c}from"./vue.562ccee8.js";import{M as q}from"./md5.b5efbca3.js";import{c as R}from"./commonCrud.c7d22987.js";const o="/api/system/user/";function z(t){return r({url:"/api/system/dept/dept_lazy_tree/",method:"get",params:t})}function D(t){return r({url:o,method:"get",params:t})}function S(t){return r({url:o,method:"post",data:t})}function d(t){return r({url:o+t.id+"/",method:"put",data:t})}function C(t){return r({url:o+t+"/",method:"delete",data:{id:t}})}function P(t){return b({url:o+"export_data/",params:t,method:"get"})}function O(t){return r({url:o+t+"/reset_to_default_password/",method:"put"})}const T=function({crudExpose:t}){const m=async e=>await D(e),p=async({form:e,row:s})=>(e.id=s.id,await d(e)),h=async({row:e})=>await C(e.id),f=async({form:e})=>await S(e),w=async e=>await P(e),y=async e=>{await O(e.id),u("重置密码成功")},g=_(),{systemConfig:l}=x(g);return c(()=>l.value),{crudOptions:{table:{remove:{confirmMessage:"是否删除该用户？"}},request:{pageRequest:m,addRequest:f,editRequest:p,delRequest:h},form:{initialForm:{password:c(()=>l.value["base.default_password"])}},actionbar:{buttons:{add:{show:n("user:Create")},export:{text:"导出",title:"导出",show:n("user:Export"),click(){return w(t.getSearchFormData())}}}},rowHandle:{fixed:"right",width:200,buttons:{view:{show:!1},edit:{iconRight:"Edit",type:"text",show:n("user:Update")},remove:{iconRight:"Delete",type:"text",show:n("user:Delete")},custom:{text:"重设密码",type:"text",show:n("user:ResetPassword"),tooltip:{placement:"top",content:"重设密码"},click:e=>{const{row:s}=e;y(s)}}}},columns:{_index:{title:"序号",form:{show:!1},column:{type:"index",align:"center",width:"70px",columnSetDisabled:!0}},username:{title:"账号",search:{show:!0},type:"input",column:{minWidth:100},form:{rules:[{required:!0,message:"账号必填项"}],component:{placeholder:"请输入账号"}}},password:{title:"密码",type:"password",column:{show:!1},editForm:{show:!1},form:{rules:[{required:!0,message:"密码必填项"}],component:{span:12,showPassword:!0,placeholder:"请输入密码"}},valueResolve({form:e}){e.password&&(e.password=q.hashStr(e.password))}},name:{title:"姓名",search:{show:!0},type:"input",column:{minWidth:100},form:{rules:[{required:!0,message:"姓名必填项"}],component:{span:12,placeholder:"请输入姓名"}}},dept:{title:"部门",search:{disabled:!0},type:"dict-tree",dict:a({isTree:!0,url:"/api/system/dept/all_dept/",value:"id",label:"name"}),column:{minWidth:150},form:{rules:[{required:!0,message:"必填项"}],component:{filterable:!0,placeholder:"请选择",props:{checkStrictly:!0,props:{value:"id",label:"name"}}}}},role:{title:"角色",search:{disabled:!0},type:"dict-select",dict:a({url:"/api/system/role/",value:"id",label:"name"}),column:{minWidth:100},form:{rules:[{required:!0,message:"必填项"}],component:{multiple:!0,filterable:!0,placeholder:"请选择角色"}}},mobile:{title:"手机号码",search:{show:!0},type:"input",column:{minWidth:120},form:{rules:[{max:20,message:"请输入正确的手机号码",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号码"}],component:{placeholder:"请输入手机号码"}}},email:{title:"邮箱",column:{width:260},form:{rules:[{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],component:{placeholder:"请输入邮箱"}}},gender:{title:"性别",type:"dict-select",dict:a({data:i("gender")}),form:{value:1,component:{span:12}},component:{props:{color:"auto"}}},user_type:{title:"用户类型",search:{show:!0},type:"dict-select",dict:a({data:i("user_type")}),column:{minWidth:100},form:{show:!1,value:0,component:{span:12}}},is_active:{title:"状态",search:{show:!0},type:"dict-radio",column:{component:{name:"fs-dict-switch",activeText:"",inactiveText:"",style:"--el-switch-on-color: var(--el-color-primary); --el-switch-off-color: #dcdfe6",onChange:v(e=>()=>{d(e.row).then(s=>{u(s.msg)})})}},dict:a({data:i("button_status_bool")})},avatar:{title:"头像",type:"avatar-cropper",form:{show:!1},column:{minWidth:400}},...R({dept_belong_id:{form:!0,table:!0}})}}}},E=Object.freeze(Object.defineProperty({__proto__:null,createCrudOptions:T},Symbol.toStringTag,{value:"Module"}));export{z as G,E as a,T as c};
