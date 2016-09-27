confir();
$("ul li").click(function(){
	var arr = ["用户名：","手机号：","卡账号："];
	$("ul li").removeClass("active");
	$(this).addClass("active");
	$("form dt:first").html(arr[$(this).index()]);
})
$(".yan span").css("cursor","pointer").click(function(){
	confir();
});
$(".yan input").blur(function(){
	if ($(this).val()!=$(this).siblings().find("i").html()) {
		$(this).parent().siblings("dd").html("验证码错误").css("color","red");
	} else{
		$(this).parent().siblings("dd").html("");
	};
});
$("form input:first").blur(function(){
	if ($("form dt:first").html()=="手机号：") {
		var reg = /^1[34578]\d{9}$/
		if (!reg.test($(this).val())){
			$(this).parent().siblings("dd").html("手机号错误").css("color","red");
		}else{
			$(this).parent().siblings("dd").html("");
		};
	};
});
$("#btn").click(function(){
	if ($(".lon").val()!=""&&$(".tip:last").html()=="") {
		if ($("form dt:first").html()=="手机号：") {
			if($(".tip").text()==""){
				location.href="../index.html";
			}else{
				alert("填写不正确");
			};
		}else{
			location.href="../index.html";
		};
	}else{
		console.log($(".tip").text())
		alert("填写不正确");
	}
});
$(".close").click(function(){
	$(".bot").animate({
		"left":-810
	},1000);
});
$(".bot").animate({
	"left":0
},1000)
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