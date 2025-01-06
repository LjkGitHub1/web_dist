import{a as j,r as u,w as q,al as a,o as w,c as x,X as t,u as c,H as S,b as v,R as n,S as C,Y as g,V as E,W as y,F as A,ak as J,ah as K}from"./vue.562ccee8.js";import{g as Q}from"./index.es.d2375c1e.js";import{G as Z,H as ee,w as N}from"./index.ab2bd5b7.js";import{l as te,d as oe,a as ne}from"./api.4013b156.js";import{_ as le}from"./_plugin-vue_export-helper.c27b6911.js";const ae={class:"dept-tree-com"},se={class:"tc-head"},ie={key:0,class:"text-center font-black font-normal"},de={key:1,color:"var(--el-color-primary)"},ce={class:"tree-tags"},re=j({__name:"index",props:{treeData:{default:()=>[]}},emits:["treeClick","deleteDept","updateDept"],setup(ue,{expose:H,emit:B}){const F=Q(J),R={children:"children",label:"name",isLeaf:(o,e)=>!e.data.hasChild},h=B;let p=u(""),r=u(!1),f=u(!1),s=u({}),V=u(null);const D=u();q(p,o=>{D.value.filter(o)});const I=(o,e)=>{var l;return o?((l=K(e).name)==null?void 0:l.indexOf(o))!==-1:!0},M=(o,e)=>{o.level!==0&&te({parent:o.data.id}).then(l=>{e(l.data)})},P=(o,e)=>{s.value=o,V.value=e,h("treeClick",o)},z=o=>{if(o==="update"){if(!s.value.id){N("请选择菜单！");return}h("updateDept",o,s.value)}else h("updateDept",o)},U=()=>{if(!s.value.id){N("请选择菜单！");return}h("deleteDept",s.value.id,()=>{s.value={}})},L=async o=>{var i;if(!s.value.id){N("请选择菜单！");return}if(f.value)return;const e=((i=V.value)==null?void 0:i.parent.childNodes)||[],l=e.findIndex(_=>_.data.id===s.value.id),k=e.find(_=>_.data.id===s.value.id);if(o==="up"){if(l===0)return;e.splice(l-1,0,k),e.splice(l+1,1),f.value=!0,await oe({dept_id:s.value.id}),f.value=!1}o==="down"&&(e.splice(l+2,0,k),e.splice(l,1),f.value=!0,await ne({dept_id:s.value.id}),f.value=!1)};return H({treeRef:D}),(o,e)=>{const l=a("el-input"),k=a("HomeFilled"),i=a("el-icon"),_=a("View"),$=a("Hide"),T=a("SvgIcon"),G=a("Plus"),m=a("el-tooltip"),O=a("Edit"),W=a("Top"),X=a("Bottom"),Y=a("Delete");return w(),x(A,null,[t(l,{modelValue:c(p),"onUpdate:modelValue":e[0]||(e[0]=d=>S(p)?p.value=d:p=d),"prefix-icon":c(Z),placeholder:"请输入部门名称"},null,8,["modelValue","prefix-icon"]),v("div",ae,[v("div",se,[t(i,{size:"16",color:"#606266",class:"tc-head-icon"},{default:n(()=>[t(k)]),_:1}),e[6]||(e[6]=v("span",{class:"tc-head-txt"},"部门架构",-1)),t(i,{size:"16",color:"#606266",onClick:e[1]||(e[1]=()=>S(r)?r.value=!c(r):r=!c(r)),class:"tc-head-icon"},{default:n(()=>[C(t(_,null,null,512),[[g,!c(r)]]),C(t($,null,null,512),[[g,c(r)]])]),_:1})]),t(c(ee),{ref_key:"treeRef",ref:D,data:o.treeData,props:R,"filter-node-method":I,load:M,lazy:"",indent:38,onNodeClick:P,"highlight-current":""},{default:n(({node:d,data:b})=>[t(c(F),{node:d,showLabelLine:!1,indent:32},{default:n(()=>[b.status?(w(),x("span",ie,[t(T,{name:"iconfont icon-shouye",color:"var(--el-color-primary)"}),E(" "+y(d.label)+" ",1),C(v("span",null,"（"+y(b.dept_user_count)+"人）",513),[[g,c(r)]])])):(w(),x("span",de,[t(T,{name:"iconfont icon-shouye"}),E(" "+y(d.label),1)]))]),_:2},1032,["node"])]),_:1},8,["data"]),v("div",ce,[t(m,{effect:"dark",content:"新增"},{default:n(()=>[t(i,{size:"16",onClick:e[2]||(e[2]=d=>z("create")),class:"mlt-icon"},{default:n(()=>[t(G)]),_:1})]),_:1}),t(m,{effect:"dark",content:"编辑"},{default:n(()=>[t(i,{size:"16",onClick:e[3]||(e[3]=d=>z("update")),class:"mlt-icon"},{default:n(()=>[t(O)]),_:1})]),_:1}),t(m,{effect:"dark",content:"上移"},{default:n(()=>[t(i,{size:"16",onClick:e[4]||(e[4]=d=>L("up")),class:"mlt-icon"},{default:n(()=>[t(W)]),_:1})]),_:1}),t(m,{effect:"dark",content:"下移"},{default:n(()=>[t(i,{size:"16",onClick:e[5]||(e[5]=d=>L("down")),class:"mlt-icon"},{default:n(()=>[t(X)]),_:1})]),_:1}),t(m,{effect:"dark",content:"删除"},{default:n(()=>[t(i,{size:"16",onClick:U,class:"mlt-icon"},{default:n(()=>[t(Y)]),_:1})]),_:1})])])],64)}}});const he=le(re,[["__scopeId","data-v-0a1dffe4"]]);export{he as default};
