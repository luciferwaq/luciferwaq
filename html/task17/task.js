/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};
// 用于渲染图表的数据
var chartData = {};
// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: 0,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function rand(max,min){
	return Math.floor(Math.random()*(max-min+1)+min);
}
var options = document.getElementsByTagName("option");
var aqiChartWrap = document.getElementsByClassName("aqi-chart-wrap")[0];
function renderChart() {
	for(var j = 0;j < options.length;j++){
		if(options[j].value == pageState.nowSelectCity&&j != 0){
			var city = options[j].innerHTML;
			var model = pageState.nowGraTime;
			var num = 1;
			if(model == "day"){
				var width = "11px";
				var left = "13";
			}else if(model == "week"){
				var width = "50px";
				var left = "70";
			}else{
				var width = "200px";
				var left = "250";
			}
			aqiChartWrap.innerHTML = "";
			for(var i in chartData[city][model]){
				console.log(1);
				var div = document.createElement("div");
				div.className = "aqi-chart-inner";
				div.style.width = width;
				div.style.left = (left * num) + "px";
				div.style.height = chartData[city][model][i] + "px";
				div.style.backgroundColor = "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")";
				div.title = i;
				aqiChartWrap.appendChild(div);
				num++;
			}
		}
	}
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
var radioField = document.getElementById('form-gra-time');
var graTime = document.getElementsByName("gra-time");
function graTimeChange() {
  // 确定是否选项发生了变化 
  for(var i = 0;i < graTime.length;i++){
  	if(graTime[i].checked){
  		if(graTime[i].value==pageState.nowGraTime){
  			return;
  		}else{
  			pageState.nowGraTime = graTime[i].value;
  			console.log(typeof pageState.nowGraTime);
  			break;
  		}
  	}
  }
  // 设置对应数据
  // 调用图表渲染函数
  renderChart();
}
/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 
  // 设置对应数据
  		pageState.nowSelectCity = citySelect.value;

  // 调用图表渲染函数
  renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
	document.getElementById('form-gra-time').addEventListener("click",graTimeChange);
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
var citySelect = document.getElementById("city-select");
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var str = '<option value="0">请选择城市</options>';
  var num = 1;
  for(var i in aqiSourceData){
  	str += '<option value='+num+'>'+i+'</option>';
  	num ++;
  }
  citySelect.innerHTML = str;
  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  citySelect.onchange = citySelectChange;
}

/**
 * 初始化图表需要的数据格式
 */
 function perWeek(city){
	var now = new Date("2016-01-01")
	var sum = 0;
	var num = 0;
	var weekNow = 1;
	var obj = {};
	for(var i = 0;i < 91;i++){
    datStr = getDateStr(now);
    sum += aqiSourceData[city][datStr];
    num++;
    if(i==90){
    	obj["第"+weekNow+"周"] = Math.round(sum / num);
    }
    if (now.getDay()==0) {
    	obj["第"+weekNow+"周"] = Math.round(sum / num);
    	sum = 0;
    	num =0;
    	weekNow++;
    };
    now.setDate(now.getDate() + 1);
	}
	return obj;
}
function perMonth(city){
	var now = new Date("2016-01-01")
	var sum = 0;
	var num = 0;
	var monthNow = 0;
	var obj = {}
	for(var i = 0;i < 91;i++){
    datStr = getDateStr(now);
    sum += aqiSourceData[city][datStr];
    num++;
    if(i == 90){
    	obj["第"+(monthNow + 1)+"月"] = Math.floor(sum / num);
    }
    if (now.getMonth()!=monthNow) {
    	obj["第"+(monthNow + 1)+"月"] = Math.floor(sum / num);
    	sum = 0;
    	num =0;
    	monthNow++;
    };
    now.setDate(now.getDate() + 1);
	}
	return obj;
}
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
	var city = '';
	for(var i in aqiSourceData){
		chartData[i] = {};
		chartData[i].day = aqiSourceData[i];
		chartData[i].week = perWeek(i);
		chartData[i].month = perMonth(i);
	}
	console.log(chartData)
	renderChart();
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}
init();