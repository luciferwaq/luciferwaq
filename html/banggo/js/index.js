var page = 0;
time = setInterval(pagechange,3000);
function pagechange(){
	page++;
	if (page==6) {
		page=0;
	};
	$(".banrc img").stop().fadeOut(0).eq(page).stop().fadeIn(1000);
	$(".banner li").removeClass().eq(page).addClass("active2");
}
$(".goods").show();
$(".banner li").mouseenter(function(){
	page = $(this).index()-1;
	pagechange();
});
$(".banrc").hover(
	function(){
		clearInterval(time);
	},
	function(){
		time = setInterval(pagechange,3000);
	}
);
$(".down").hover(
	function(){
		$(this).find("div").show().end().css("borderColor","#dcdcdc"  );
	},
	function(){
		$(this).find("div").hide().end().css("borderColor","");
	}
);
$("a").find("img").hover(
	function(){
		$(this).fadeTo(0,0.7).fadeTo(1000,0.8);
	},
	function(){
		$(this).css("opacity","");
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
$("#btn").click(function(){
	location.href="html/sear.html";
})
var now =1000*60*60;
var time1 = setInterval(function(){
	now -= 1000;
	if(now==0){
		clearInterval(time1);
	}
	var ohours = Math.floor(now/1000/60/60);
	var omins = Math.floor(now%(1000*60*60)/60000);
	var osec = Math.floor(now%(60*1000)/1000);
	var arr = [ohours,omins,osec];
	for(var i in arr){
		if (arr[i]<10) {
			arr[i] = "0" + arr[i];
		};
	}
	$(".banr1 p:last").html("<span>仅剩：</span>"+arr[0]+"："+arr[1]+"："+arr[2]);
},1000)