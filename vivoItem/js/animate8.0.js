function animate(ele,param,callBack,speedTime){
	//callBack没有传递时
	//如果想要传递speedTime
	//这里callBack就是时间
	if(!!callBack && !(callBack instanceof Function)){//!!callBack表示存在并且不是一个函数
		//执行这里说明callBack是一个时间
		speedTime = callBack;
		callBack = undefined;
	}
	speedTime = speedTime ? speedTime : 10;
	console.log(speedTime);
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var flag = true;//表示所有的属性都到达了目标 值
		for(var attr in param){
			if(attr === "zIndex"){
				//zIndex不需要做任何动画，直接赋值就可以 了
				ele.style[attr] = param[attr];
			}else{
				var current = 0;
				if(attr === "opacity"){
					current = getStyle(ele,attr)*100;
				}else{
					current = parseInt(getStyle(ele,attr));
				}
				var speed = (param[attr] - current)/10;
				speed = speed > 0 ?  Math.ceil(speed) : Math.floor(speed);
				if(current != param[attr]){
					//属性没有到达 目标 值
					flag = false;//最少有一个属性没有到达目标 值
					if(attr === "opacity"){
						ele.style[attr] = (current + speed)/100;
					}else{
						ele.style[attr] = current + speed + "px";
					}
				}
			}
		}
		if(flag){
			clearInterval(ele.timer);
			//到达了目标值。
			if(!!callBack){
				callBack();
			}
		}
	},speedTime);
}
//兼容ie8获取元素对应浏览器渲染后的样式值。这个值是一个带单位的字符串
function getStyle(obj,attr){
	return !!window.getComputedStyle ? window.getComputedStyle(obj,null)[attr] : obj.currentStyle[attr];
}