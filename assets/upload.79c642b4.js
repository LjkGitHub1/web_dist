import{E as u,q as f}from"./index.ab2bd5b7.js";import{a as c,r as _,al as s,o as g,Q as v,R as t,b as h,X as x,V as b}from"./vue.562ccee8.js";const C=c({__name:"upload",setup(w){const l=_([]),n=(o,e)=>{console.log(o,e)},a=o=>{console.log(o)},i=(o,e)=>{u.warning(`The limit is 3, you selected ${o.length} files this time, add up to ${o.length+e.length} totally`)},r=(o,e)=>f.confirm(`Cancel the transfer of ${o.name} ?`).then(()=>!0,()=>!1);return(o,e)=>{const p=s("el-button"),d=s("el-upload");return g(),v(d,{"file-list":l.value,"onUpdate:fileList":e[0]||(e[0]=m=>l.value=m),class:"upload-demo",multiple:"","on-preview":a,"on-remove":n,"before-remove":r,limit:3,"on-exceed":i},{tip:t(()=>e[2]||(e[2]=[h("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500KB. ",-1)])),default:t(()=>[x(p,{type:"primary"},{default:t(()=>e[1]||(e[1]=[b("上传")])),_:1})]),_:1},8,["file-list"])}}});export{C as default};
