import{r as e}from"./index.ab2bd5b7.js";const a="/api/evaluate/scale/option/";function u(t){return e({url:a,method:"get",params:t})}function n(t){return e({url:a,method:"post",data:t})}function o(t){return e({url:a+t.id+"/",method:"put",data:t})}function d(t){return e({url:a+t+"/",method:"delete",data:{id:t}})}export{n as A,d as D,u as G,o as U};
