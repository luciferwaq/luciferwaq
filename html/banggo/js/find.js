confir();
$(".yan span").css("cursor","pointer").click(function(){
	confir();
});
$(".yan input").blur(function(){
	if ($(this).val()!=$(this).siblings("i").html()) {
		$(this).parent().siblings("dd").html("验证码错误").css("color","red");
	} else{
		$(this).parent().siblings("dd").html("");
	};
});
$(".ways input").click(function(){
	$("dl:eq(2) dt").html($(this).val()+"：")
});
$("dl:eq(2) input").blur(function(){
	theway();
});
$("#btn").click(function(){
	theway();
	if($(".tip").text()==""){
		alert("找回成功");
	}else{
		alert("填写不正确");
	};
});
$(".close").click(function(){
	$(".bot").animate({
		"left":-810
	},1000);
});
$(".bot").animate({
	"left":0
},1000)
function theway(fn){
	if ($(":checked").val()=="电子邮箱") {
		var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!reg.test($("dl:eq(2) input").val())) {
			$("dl:eq(2) input").parent().siblings("dd").html("邮箱格式错误").css("color","red");
		}else{
			$("dl:eq(2) input").parent().siblings("dd").html("");
		};
	} else if($(":checked").val()=="手机号码"){
		var reg = /^1[34578]\d{9}$/
		if (!reg.test($("dl:eq(2) input").val())){
			$("dl:eq(2) input").parent().siblings("dd").html("手机号错误").css("color","red");
		}else{
			$("dl:eq(2) input").parent().siblings("dd").html("");
		};
	}else{
		if($(":checked")){
			$("dl:eq(2) input").parent().siblings("dd").html("请选择找回方式").css("color","red");
		}else{
			$("dl:eq(2) input").parent().siblings("dd").html("");
		}
	}
};
function rand(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
};
function confir(){
	var ver = "";
	for(var i=0;i<4;i++){
		var arr = [rand(48,57),rand(65,90),rand(97,122)];
		ver += String.fromCharCode(arr[rand(0,2)]);
	};
	$(".yan i").html(ver);
};