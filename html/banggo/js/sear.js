$("dl.choose dd").click(function(){
	$(this).css("backgroundColor","lightblue")
		   .siblings().css("backgroundColor","");
});
var oldsrc = new Array;
for(var i=0;i<$(".big").length;i++){
	oldsrc[i] = $(".big").eq(i).attr("src");
};
$(".cont2 li p img").hover(
	function(){
		$(this).parent().siblings("img").attr("src",$(this).attr("src"));
	},
	function(){
		$(this).parent().siblings("img").attr("src",oldsrc[$(this).parent().siblings("img").index()]);
	}
);
$(".cont2 dd").click(function(){
	$(this).addClass("active")
		   .siblings().removeClass("active");
});
$(".cont2 dd:not(:eq(0))").click(function(){
	$(this).toggleClass("down");
});
$(".cont ol li:not(:eq(7),:eq(8))").click(function(){
	$(this).addClass("active1")
		   .siblings().removeClass();
	$(".cont2 dl dt span").html($(this).html());
});
$(".cont2 ol li:eq(7)").click(function(){
	var oldpage = Number($(".cont2 dl dt span").html());
	if(oldpage==7){
		return;
	}
	$(".cont2 dl dt span").html(oldpage+1);
	$(".cont2 ol li").eq(oldpage).addClass("active1")
					 .siblings().removeClass();
});
$(".cont2 dl dt a").click(function(){
	var oldpage = Number($(".cont2 dl dt span").html());
	if(oldpage==7){
		return;
	}
	$(".cont2 dl dt span").html(oldpage+1);
	$(".cont2 ol li").eq(oldpage).addClass("active1")
					 .siblings().removeClass();
});
$(".cont2 ol li:eq(8)").click(function(){
	$(".cont2 dl dt span").html(7);
	$(".cont2 ol li").eq(6).addClass("active1")
					 .siblings().removeClass();
});