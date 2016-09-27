$(".down").hover(
	function(){
		$(this).find("div").show().end().css("borderColor","#dcdcdc"  );
	},
	function(){
		$(this).find("div").hide().end().css("borderColor","");
	}
);
$(".goods dl").hover(
	function(){
		$(".secmenu").eq($(this).index()).css("display","block");
	},
	function(){
		$(".secmenu").eq($(this).index()).css("display","");
	}
);
$(".ulfir").hover(
	function(){
		$(".goods").show();
	},
	function(){
		$(".goods").hide();
	}
);
$("#btn").click(function(){
	location.href = "sear.html";
});