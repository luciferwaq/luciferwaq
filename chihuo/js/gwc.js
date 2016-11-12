
$(function(){
	var pricezj = 0;
//	console.log(localStorage.key(i));
//	var key = localStorage.key(i);
//	var arr = key.split("")[0];
//	console.log(arr)
	if(localStorage.key(0)){
		for(var i = 0;i<localStorage.length;i++){
			var keys = localStorage.key(i);
//			console.log(keys)
			var arr = keys.split("")[0];
			if(arr == "a"){
				var sp = localStorage.getItem(keys);
				var spa = JSON.parse(sp);
				var count = spa.count;
				var price = spa.price.slice(1);
				var allprice = spa.count*price;
	//			console.log(price);
				var html = '';
				html+='<div class="sp">'
				html+='<img src="../'+spa.goodsimg+'">'
				html+='<div>'+
					'<p>'+spa.name+'</p>'+
					'<p class="colors">'+"单价: "+'<span class="jiage">'+price+'</span>'+'</p>'+
					'<p class="colors xiaoji">'+"小计: ￥"+"<span class='pri'>"+allprice+"</span>"+'</p>'+
					'<div>'+
						'<div>'+
							'<input value="-" class="btn1" type="button">'+
							'<input value="'+count+'" class="txt" type="text">'+
							'<input value="+" class="btn2" type="button">'+
						'</div>'+
						'<span class="sanchu" keyss="'+keys+'">✖删除</span>'
					'<div>'+
				'<div>'
				html+='</div>'
				$("#mainc").append(html);
				var pr = $(".pri").eq(i).html();
				var prr = Math.ceil(Number(pr)*100)/100;
				pricezj+=prr;
				pricezj = Math.floor(Number(pricezj)*100)/100;
				
				
				console.log(pricezj);
			}
		}
		
		//数量减少按钮
		$("#mainc").on("click",".btn1",function(){
			var txtval = $(this).siblings(".txt").val();
			var jiage = $(this).parent().parent().parent().find(".jiage").html();
		
			if(txtval>1){
				txtval--;
				allprice = txtval*jiage;
				allprice = Math.floor(Number(allprice)*100)/100;
				$(this).parent().parent().siblings(".xiaoji").find(".pri").html(allprice);
				$(this).siblings(".txt").val(txtval);
				jiage = Number(jiage);
				pricezj -= jiage;
				pricezj = Math.floor(Number(pricezj)*100)/100;
				
				
				console.log(pricezj);
				$("#bottomc #hj").html(pricezj);
			}
		})
		//数量增加按钮
		$("#mainc").on("click",".btn2",function(){
			var txtval = $(this).siblings(".txt").val();
			var jiage = $(this).parent().parent().parent().find(".jiage").html();
				txtval++;
				allprice = txtval*jiage;
				allprice = Math.floor(Number(allprice)*100)/100;
				$(this).parent().parent().siblings(".xiaoji").find(".pri").html(allprice);
				$(this).siblings(".txt").val(txtval);
				jiage = Number(jiage);
				pricezj += jiage;
				pricezj = Math.floor(Number(pricezj)*100)/100;
				
				console.log(pricezj);
				$("#bottomc #hj").html(pricezj);
		})
		//删除按钮
		$("#mainc").on("click",".sanchu",function(){
			var pce = $(this).parent().parent().find(".pri").html();		
			pricezj-=pce;
			pricezj = Math.floor(Number(pricezj)*100)/100;
			
			console.log(pricezj);
			$("#bottomc #hj").html(pricezj);
			var keyss = $(this).attr("keyss");
			localStorage.removeItem(keyss);
			$(this).parent().parent().parent().remove();			
			if(localStorage.key(0)){
				
			}else{
				var str = '';
			    str += '<div id="kong">'
				str += '<img src="../img/gwcpic1.png">'
				str += '</div>'
			$("#mainc").append(str);
			$("#bottomc #hj").html(0);
			}
		})
		//加载时自动计算合计
		$("#bottomc #hj").html(pricezj);
		//清空按钮
		$("#emp").on("click",function(){
			$("#mainc").empty();
			localStorage.clear();
			$("#bottomc #hj").html(0);
			var str = '';
			    str += '<div id="kong">'
				str += '<img src="../img/gwcpic1.png">'
				str += '</div>'
			$("#mainc").append(str);
		})
	}else{
		var str = '';
		    str += '<div id="kong">'
			str += '<img src="../img/gwcpic1.png">'
			str += '</div>'
		$("#mainc").append(str);
	}
	
})
