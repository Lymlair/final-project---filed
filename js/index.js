"use strict";require(["config"],function(){require(["jquery","header","cookie","lunbo"],function(o,n,e){o("footer").load("/html/component/footer.html"),new Promise(function(n,e){o("header").load("/html/component/header.html",function(){n()})}).then(function(){o(".products").css("display","block")}).then(function(){n.searchInput(),n.listMenuMove(),n.init()}).then(function(){o(".banner").eq(0).lunbo({goPrev:"goPrev",goNext:"goNext"})}).then(function(){o(".ad").find("span").click(function(){o(".ad").css("display","none")})})})});