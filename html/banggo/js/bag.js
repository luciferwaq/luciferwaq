$(".down").hover(
	function(){
		$(this).find("div").show().end().css("borderColor","#dcdcdc"  );
	},
	function(){
		$(this).find("div").hide().end().css("borderColor","");
	}
);
$("input[type=checkbox]:first").click(function(){
	$("input[type=checkbox]").eq(1).attr("checked",$(this).attr("checked"));
});
$("input[type=checkbox]:last").click(function(){
	$("input[type=checkbox]").eq(0).attr("checked",$(this).attr("checked"));
	$("input[type=checkbox]").eq(1).attr("checked",$(this).attr("checked"));
});
$("#btnr").click(function(){
	var num = Number($("table span").html());
	$("table span").html(num+1+"");
	equal();
});
$("#btnl").click(function(){
	var num = Number($("table span").html());
	if (num==0) {
		return;
	};
	$("table span").html(num-1+"");
	equal();
});
$(".mini2 li").eq(0).mouseover(function(){
	$(this).addClass("active").siblings().removeClass();
		$(".mini2 p").eq(0).removeClass().siblings("p").addClass("hide");
});
$(".mini2 li").eq(1).mouseover(function(){
	$(this).addClass("active").siblings().removeClass();
	$(".mini2 p").eq(1).removeClass().siblings("p").addClass("hide");
});
function equal(){
	var num = $("table span").html();
	$(".cont p:eq(0) b").html(num);
	$(".cont p:eq(1) b").eq(0).html("￥"+num*119+".00");
	$(".cont p:eq(2) i").html("￥"+num*119+".00");
	$(".much:first b").html("￥"+num*119);
	$(".much:last").html("￥"+num*119);
};