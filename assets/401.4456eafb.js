import{a as m,aD as r,m as _,al as d,o as f,c as p,b as e,W as i,X as u,R as g,V as h,M as v}from"./vue.562ccee8.js";import{u as w,b as T,S as b}from"./index.ab2bd5b7.js";import{_ as y}from"./_plugin-vue_export-helper.c27b6911.js";const C=m({name:"401",setup(){const s=w(),t=T(),{themeConfig:a}=r(s),{isTagsViewCurrenFull:n}=r(t),l=()=>{b.clear(),window.location.reload()},c=_(()=>{let{isTagsview:o}=a.value;return n.value?"30px":o?"114px":"80px"});return{onSetAuth:l,initTagViewHeight:c}}});const V={class:"error-flex"},x={class:"left"},F={class:"left-item"},$={class:"left-item-animation left-item-title"},A={class:"left-item-animation left-item-msg"},S={class:"left-item-animation left-item-btn"};function k(s,t,a,n,l,c){const o=d("el-button");return f(),p("div",{class:"error layout-view-bg-white",style:v({height:`calc(100vh - ${s.initTagViewHeight}`})},[e("div",V,[e("div",x,[e("div",F,[t[0]||(t[0]=e("div",{class:"left-item-animation left-item-num"},"401",-1)),e("div",$,i(s.$t("message.noAccess.accessTitle")),1),e("div",A,i(s.$t("message.noAccess.accessMsg")),1),e("div",S,[u(o,{type:"primary",round:"",onClick:s.onSetAuth},{default:g(()=>[h(i(s.$t("message.noAccess.accessBtn")),1)]),_:1},8,["onClick"])])])]),t[1]||(t[1]=e("div",{class:"right"},[e("img",{src:"https://img-blog.csdnimg.cn/3333f265772a4fa89287993500ecbf96.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_16,color_FFFFFF,t_70,g_se,x_16"})],-1))])],4)}const H=y(C,[["render",k],["__scopeId","data-v-50910138"]]);export{H as default};