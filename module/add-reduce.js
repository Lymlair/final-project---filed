"use strict";define(["jquery","onePrc","allPrc"],function(r,t){r.fn.extend({addReduce:function(){var t=r(this).prev(),e=r(this).next(),o=parseInt(r(this).html());t.on("click",function(){if(1!==o){r(this).next().html(--o);for(var t=r(this).parents(".one").attr("id"),e=JSON.parse(r.cookie("cart")),n=0;n<e.length;n++)if(t==e[n].no){e[n].num=o;break}var i=JSON.stringify(e);r.cookie("cart",i,{expires:3,path:"/"}),r(this).onePrc()}}),e.on("click",function(){r(this).prev().html(++o);for(var t=r(this).parents(".one").attr("id"),e=JSON.parse(r.cookie("cart")),n=0;n<e.length;n++)if(t==e[n].no){e[n].num=o;break}var i=JSON.stringify(e);r.cookie("cart",i,{expires:3,path:"/"}),r(this).onePrc()}),t.on("mousedown",function(t){t.preventDefault()}),e.on("mousedown",function(t){t.preventDefault()}),r(this).on("mousedown",function(t){t.preventDefault()})}})});