$(".now").mouseenter(function(){
	$(".small").css("display","block");
	$(".big").css("display","block");
	$(document).mousemove(function(event){
		var event = event||window.event;
		var X = event.clientX - $(".now").offset().left-$(".small").width()/2;
		var Y = event.clientY + $(document).scrollTop() - $(".now").offset().top-$(".small").height()/2;
		var maxX = $(".now").innerWidth() - $(".small").width() ;
		var maxY = $(".now").innerHeight() - $(".small").height();
		var times = $(".big").innerWidth()/$(".small").width();
		if (X<0) {
			X = 0;
		}else if(X>maxX){
			X = maxX;
		};
		if(Y<0){
			Y = 0;
		}else if(Y>maxY){
			Y = maxY;
		};
		$(".small").css({
			"left":X,
			"top":Y
		});
		$(".big img").css({
			"left":-X*times,
			"top":-Y*times
		})
	});
}).mouseleave(function(){
	$(".small").css("display","");
	$(".big").css("display","");
});
$(".cont1 ul li").click(function(){
	$(this).addClass("active").siblings().removeClass();
	var nsrc = $(this).find("img").attr("src");
	$(".now img").attr("src",nsrc);
	$(".big img").attr("src",nsrc);
});
$(".procolor li").click(function(){
	var arr=["影黑","丹宁棕","鸢尾蓝黑","温莎红"];
	$(this).addClass("active").siblings().removeClass();
	$(".mini span:eq(1)").html(arr[$(this).index()]);
});
$(".prosize li").click(function(){
	$(this).addClass("active").siblings().removeClass();
	$(".mini span:eq(2)").html($(this).html());
});
$("#txt1").blur(function(){
	if($(this).val()<1){
		$(this).val(1);
	}
});
$("#btnl").click(function(){
	var num = Number($("#txt1").val());
	if(num==1){
		return;
	};
	$("#txt1").val(num-1);
});
$("#btnr").click(function(){
	var num = Number($("#txt1").val());
	if(num>=$("#btnr").siblings('span').find("i").html()){
		return;
	}
	$("#txt1").val(num+1);
});
$("#btn1").click(function(){
	$(".searchword span").html(Number($(".searchword span").html())+Number($("#txt1").val()));
})