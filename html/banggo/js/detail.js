$(".down").hover(
	function(){
		$(this).find("div").show().end().css("borderColor","#dcdcdc"  );
	},
	function(){
		$(this).find("div").hide().end().css("borderColor","");
	}
);
$("#btn2").click(function(){
	if ($(":radio:checked").length==3) {
		location.href="confirm.html";
	}else{
		alert("请选择方式");
	};
});
$("#btn").click(function(){
	if(Math.floor($(this).siblings("input").val())!=($(this).siblings("input").val())||$(this).siblings("input").val()<0){
		alert("请填写正整数或0")
	}else if($(this).siblings("input").val()>$(this).siblings("span").html().slice(1)){
		alert("余额不足请充值");

	}else{
		$(".pse span").eq(3).html("￥"+$(this).siblings("input").val());
		$(".pse b").html("￥"+($(".pse span:first").html().slice(1)-$(this).siblings("input").val())+".00");
	}
	
});