define(["jquery"],function(a){"use strict";var b="/admin/api/nodes";return{save:function(c,d,e,f,g){var h="POST",i=b,j=[];c.id&&(h="PUT",i+="/"+c.id),d&&j.push("language="+d),e&&j.push("webspace="+e),a.ajax(i+"?"+j.join("&"),{method:h,data:JSON.stringify(c),contentType:"application/json; charset=utf-8",success:f,error:g})}}});