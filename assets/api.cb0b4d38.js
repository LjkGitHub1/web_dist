import{r as e}from"./index.ab2bd5b7.js";const r="/api/system/menu/";function u(t){return e({url:r,method:"get",params:t})}function o(t){return e({url:r,method:"post",data:t})}function a(t){return e({url:r+t.id+"/",method:"put",data:t})}function d(t){return e({url:r+t+"/",method:"delete"})}function m(t){return e({url:r,method:"get",params:t})}function s(t){return e({url:r+"move_up/",method:"post",data:t})}function i(t){return e({url:r+"move_down/",method:"post",data:t})}export{o as A,d as D,u as G,a as U,i as a,m as l,s as m};
