confir();
$("input").first().blur(function(){
	var len = 0;
	for(var i = 0;i<$(this).val().length;i++){
		if ($(this).val().charCodeAt(i)>32&&$(this).val().charCodeAt(i)<127) {
			len+=1;
		}else{
			len+=2;
		};
	};
	if (len<4||len>20) {
		$(this).parent().siblings("dd").html("字符长度不合法").css("color","red");
	}else{
		$(this).parent().siblings("dd").html("");
	}
});
$("input").eq(1).blur(function(){
	same();
	if ($(this).val().length<6||$(this).val().length>16) {
		$(this).parent().siblings("dd").html("字符长度不合法").css("color","red");
	} else{
		$(this).parent().siblings("dd").html("");
	};
});
$("input").eq(2).blur(function(){
	same();
});
$("input").eq(3).blur(function(){
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!reg.test($(this).val())) {
		$(this).parent().siblings("dd").html("邮箱格式错误").css("color","red");
	}else{
		$(this).parent().siblings("dd").html("");
	};
});
$(".yan span").click(function(){
	confir();
});
$(".yan input").blur(function(){
	if ($(this).val()!=$(this).siblings().find("i").html()) {
		$(this).parent().siblings("dd").html("验证码错误").css("color","red");
	} else{
		$(this).parent().siblings("dd").html("");
	};
});
$("#btn").click(function(){
	if($(".tip").text()==""){
		location.href="regok.html";
	}else{
		alert("填写不正确");
	};
});
function same(){
	if ($("input").eq(1).val()!=$("input").eq(2).val()) {
		$("input").eq(2).parent().siblings("dd").html("两次密码不一致").css("color","red");
	}else{
		$("input").eq(2).parent().siblings("dd").html("")
	};
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