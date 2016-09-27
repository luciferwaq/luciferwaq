$(".cont1 ul li").mouseenter(function(){
	var arr = [74,75,76,77];
	$(this).addClass("li-active")
		   .siblings().removeClass();
	$(".cont1 ol li img").attr("src","../image/pic"+arr[$(this).index()]+".jpg");
});
function count(wholetime,obj1,obj2,obj3,obj4){
	var oDay = wholetime;
	time = setInterval(function(){
		oDay -= 1000;
		var oDays = Math.floor(oDay/(1000*60*60*24))
		var oHours = Math.floor(oDay/1000/60/60%24);
		var oMins = Math.floor(oDay/60/1000%60);
		var oSec = Math.floor(oDay/1000%60);
		if (oMins<10) {
			oMins = "0" + oMins;
		};
		if (oSec<10) {
			oSec = "0" + oSec;
		};
		if (oHours<10) {
			oHours = "0" + oHours;
		};
		if(obj4){
			obj4.html(oDays);
		}
		obj3.html(oHours);
		obj2.html(oMins);
		obj1.html(oSec);
	},1000)
}
count(1000*60*60*24,$(".p-fir strong:eq(2)"),$(".p-fir strong:eq(1)"),$(".p-fir strong:eq(0)"));
var arr = new Array(9);
for(var i=0;i<$(".cont2 ol").length;i++){
	var arr1 = [];
	for(var j=0;j<$(".cont2 ol").eq(i).find("dd b").length;j++){
		arr1[j] = $(".cont2 ol").eq(i).find("dd b").eq(j);
	};
	arr[i] = arr1;
};
for(var i=0;i<arr.length;i++){
	count(1000*60*60*24*7,arr[i][3],arr[i][2],arr[i][1],arr[i][0]);
};
var arr2 = new Array(4);
for(var i=0;i<$(".cont3 li").length;i++){
	var arr3 = [];
	for(var j=0;j<$(".cont3 li").eq(i).find("dd b").length;j++){
		arr3[j] = $(".cont3 li").eq(i).find("dd b").eq(j);
	};
	arr2[i] = arr3;
};
for(var i=0;i<arr2.length;i++){
	count(1000*60*60*24*6,arr2[i][3],arr2[i][2],arr2[i][1],arr2[i][0]);
};