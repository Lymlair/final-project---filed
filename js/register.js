"use strict";require(["config"],function(){require(["jquery","cookie","header"],function(n,s,l){new Promise(function(s,l){n("header").load("/html/component/header.html",function(){s()})}).then(function(){l.init()}).then(function(){var l=!1,t=n("input"),e=n(".remind"),a=/^1[35678]\d{9}$/,c=/^\d{1,4}$/,i=/^\d{6}$/,o=/^\w{6,20}$/;t.eq(1).val(),t.eq(2).val(),t.eq(3).val(),t.eq(4).val(),t.eq(5).val();t.eq(1).on("blur",function(){n.ajax({type:"get",url:"http://localhost/final project/api/check.php",data:{phoneNumber:t.eq(1).val()},dataType:"json",success:function(s){l=1===s.code?(e.css("display","block").html("该手机号已注册"),!1):(e.css("display","none"),!0)}}),""===n(this).val()?(e.css("display","block").html("手机号必填"),l=!1):a.test(n(this).val())?a.test(n(this).val())&&(e.css("display","none"),l=!0):(e.css("display","block").html("请填写正确的手机号码"),l=!1)}),t.eq(2).on("blur",function(){""===n(this).val()?(e.css("display","block").html("图形验证码必填"),l=!1):c.test(n(this).val())?c.test(n(this).val())&&(e.css("display","none"),l=!0):(e.css("display","block").html("请填写正确的图形验证码"),l=!1)}),t.eq(3).on("blur",function(){""===n(this).val()?(e.css("display","block").html("短信验证码必填"),l=!1):i.test(n(this).val())?i.test(n(this).val())&&(e.css("display","none"),l=!0):(e.css("display","block").html("请填写正确的短信验证码"),l=!1)}),t.eq(4).on("blur",function(){""===n(this).val()?(e.css("display","block").html("密码必填"),l=!1):o.test(n(this).val())?o.test(n(this).val())&&(e.css("display","none"),l=!0):(e.css("display","block").html("密码只能由6-20位的数字字母和下划线组成"),l=!1)}),t.eq(5).on("blur",function(){l=n(this).val()!==t.eq(4).val()?(e.css("display","block").html("两次密码不一致"),!1):(e.css("display","none"),!0)}),t.eq(7).on("click",function(s){""===t.eq(1).val()?e.css("display","block").html("手机号必填"):a.test(t.eq(1).val())?""===t.eq(2).val()?e.css("display","block").html("图形验证码必填"):c.test(t.eq(2).val())?""===t.eq(3).val()?e.css("display","block").html("短信验证码必填"):i.test(t.eq(3).val())?""===t.eq(4).val()?e.css("display","block").html("密码必填"):o.test(t.eq(4).val())?t.eq(5).val()!==t.eq(4).val()?e.css("display","block").html("两次密码不一致"):t.eq(6).is(":checked")||e.css("display","block").html("请同意我们的条款！"):e.css("display","block").html("请填写正确格式的密码"):e.css("display","block").html("请填写正确的短信验证码"):e.css("display","block").html("请填写正确的图形验证码"):e.css("display","block").html("请填写正确的手机号码"),l&&n.ajax({type:"get",url:"http://localhost/final project/api/register.php",data:{phoneNumber:t.eq(1).val(),password:t.eq(4).val()},dataType:"json",success:function(s){1===s.code&&(n.cookie("phoneNumber",t.eq(1).val(),{path:"/",expires:3}),alert("注册成功，即将跳转到主页面"),n(location).attr("href","//localhost:2333"))}}),s.preventDefault()})})})});