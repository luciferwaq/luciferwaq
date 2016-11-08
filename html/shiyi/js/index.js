$(".topslide").hover(
	function(){
		$(this).find(".topspace").show(0)
			   .end().find(".tophide").show(0);
	},
	function(){
		$(this).find(".topspace").hide(0)
			   .end().find(".tophide").hide(0);
	}
);
$(".tophide a").click(function(){
	$(this).addClass("topactive")
		   .parent().siblings().find("a").removeClass();
	$(".topslide span").html($(this).html());
});
$(".shopcar").hover(
	function(){
		$(this).find(".shopspace").show(0)
			   .end().find(".inner").show(0);
	},
	function(){
		$(this).find(".shopspace").hide(0)
			   .end().find(".inner").hide(0);
	}
);
$(".nav-cont dd").hover(
	function(){
		$(this).css({
			"background":"#f7f7f7",
			"color":"#B61D1D"
		})
			   .find("a").css("color","#B61D1D");
		$(".sec").eq($(this).index()-1).show(0);
	},
	function(){
		$(this).css({
			"background":"",
			"color":""
		})
			   .find("a").css("color","");
		$(".sec").eq($(this).index()-1).hide(0);
	}
);
var page = -1;
var time = setInterval(pagechage,3000);
function pagechage(){
	page++;
	if(page<0){
		page = 5;
	};
	if(page==6){
		page = 0;
	};
	$(".lunbo li").eq(page).css("background","#B61D1D")
				  .siblings().css("background","");
	$(".lunbo a").eq(page).stop().fadeIn(1000).css("z-index","2")
				 .siblings("a").stop().fadeOut(1000).css("z-index","");
};
$(".lunbo").hover(
	function(){
		clearInterval(time);
		$(this).find("button").show(0);
	},
	function(){
		time = setInterval(pagechage,3000);
		$(this).find("button").hide(0);
	}
);
$(".lunbo li").mouseenter(function(){
	page = $(this).index()-1;
	pagechage();
});
var llock = true;
var rlock = true;
$("#btn2").click(function(){
	if(llock&&rlock){
		llock = false;
		page -= 2;
		pagechage();
		setTimeout(function(){
			llock = true;
		},1000)
	}
});
$("#btn3").click(function(){
	if(llock&&rlock){
		rlock = false;
		pagechage();
		setTimeout(function(){
			rlock = true;
		},1000)
	}
});
for(var i = 0;i < 12;i++){
	$(".ban-r ol i").eq(i).css("backgroundPositionY",-25*i+"px");
}
$(".stair a").mouseenter(function(){
	var wid = $(this).parent().width();
	$(this).parent().css("width",wid+"px");
	$(this).addClass("stair-active");
	$(this).parent().siblings().find("a").removeClass();
});
$(".stair a").eq(0).mouseenter(function(){
	var obj = $(this).parent().parent().parent().next();
	$(obj).find(".cont2r1").css("display","");
	$(obj).find(".cont2r2").css("display","");
})
function rand(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
$(".stair a:not(:eq(0))").mouseenter(function(){
	var obj = $(this).parent().parent().parent().next();
	$(obj).find(".cont2r1").css("display","none");
	$(obj).find(".cont2r2").css("display","block");
	$.ajax({
		type:"get",
		url:"json/pro.json",
		async:true,
		dataType:"json",
		success:function(msg){
			for(var i = 0;i < $(".cont2r2 li").length;i++){
				var num = rand(0,2);
				$(obj).find(".pict img").eq(i).attr("src",msg[num].pict);
				$(obj).find(".name a").eq(i).html(msg[num].name);
				$(obj).find(".price").eq(i).html(msg[num].price);
			}
		}
	});
});
var lock = true;
if(lock){
	$(".jump li").click(function(){
		lock = false;
		var index = $(this).index();
		var num = $(".cont2").outerHeight()+$(".stair").outerHeight();
		$("html,body").animate({
			"scrollTop":num*index+1722+"px"
		},500,function(){
			lock=true;
		});
		$(this).find("span").css("display","none")
							.siblings().css("display","block");
		$(this).siblings().find("span").css("display","")
									   .siblings().css("display","");
	});
};
$(window).scroll(function(){
	if($(window).scrollTop()>1100){
		$(".jump").css("display","block");
	}else{
		$(".jump").css("display","");
	}
	if(lock){
		var num = $(".cont2").outerHeight()+$(".stair").outerHeight();
		var obj = $(".stair").filter(function(){
			return  Math.abs($(window).scrollTop() - $(this).offset().top ) < num/2;
		});
		var index = $('.stair').index(obj);
		console.log(index);
		$(".jump li").eq(index).find("span").css("display","none")
							   .siblings().css("display","block");
		$(".jump li").eq(index).siblings().find("span").css("display","")
										  .siblings().css("display","");
	};
});
$(".right li").hover(
	function(){
		$(this).find("i").css("backgroundColor","#C81623")
			   .end().find("a").css("background","#C81623").stop().animate({
					"left":-58			   	
			   },500);
			   
	},
	function(){
		$(this).find("i").css("backgroundColor","")
			   .end().find("a").css("background","").stop().animate({
					"left":1			   	
			   },500);
			   
	}
);
$(".top").click(function(){
	$("html,body").scrollTop(0);
});
