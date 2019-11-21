/*
 * author 吕盛楠
 */


//通过id名称传参获取元素
function $id(idName){
	return document.getElementById(idName);
}
//通过class名称传参获取元素
function $getClass(className){
	return document.getElementsByClassName(className);
}
//通过name名称传参获取元素
function $getName(name){
	return document.getElementsByName(name);
}
//通过值区间传参获取区间内随机整数
function getRound(min,max){
	var temp=0;
	if(min>max){
		temp=min;
		min=max;
		max=temp;
	}
	return parseInt(Math.random()*(max-min+1)+min);
}
//随机获取16进制颜色代码
function getColor(){
	var color="#",str="0123456789abcdef",round=0;
	for (var i = 0; i < 6; i++) {
		round=getRound(0,15);
		color+=str.charAt(round);
	}
	return color;
}
//通过长度值传参获取对应长度验证码
function getYZ(num){
	var round,yzm="";
	for (var i = 0; i < num; i++) {
		round=getRound(48,122);
		if(round>57&&round<65||round>90&&round<97){
			i--;
		}else{
			yzm+=String.fromCharCode(round);
		}
	}
	return yzm;
}
/*方法说明
 *@method getDateFormat
 *@for public
 *@param date 一个日期对象
 *@return string 返回一个格式化的日期字符串
*/
function getDateFormat(date){
	var year=date.getFullYear(),
		month=date.getMonth()+1,
		day=date.getDate(),
		hour=date.getHours(),
		min=date.getMinutes(),
		s=date.getSeconds();
		
	return year+"年"+getDB(month)+"月"+getDB(day)+"日 "+getDB(hour)+":"+getDB(min)+":"+getDB(s);
}
//如果一个数为个位数则前缀加上0
function getDB(num){
	return num<10?"0"+num:num;
}
//兼容IE8的通过className名称获取元素集合
function getAllElementsByClassName(className){
	var allArr=document.getElementsByTagName("*"),eleArr=[],arr=[];
	for(var i=0;i<allArr.length;i++){
		arr=allArr[i].className.split(" ");
		if(hasEleInArr(arr,className)){
			eleArr.push(allArr[i]);
		}
	}
	return eleArr;
}
function hasEleInArr(arr,ele){
	for(var i=0;i<arr.length;i++){
		if(arr[i]===ele){
			return true;
		}
	}
	return false;
}

//兼容IE8浏览器获取所有子元素节点对象集合
function getChildren(obj){//obj是所需获取的子元素节点的父节点
	var arr=[];
	var childNodes=obj.childNodes;
	for(var i=0;i<childNodes.length;i++){
		if(childNodes[i].nodeType==1){
			arr.push(childNodes[i]);
		}
	}
	return arr;
}
//兼容IE8浏览器获取下一个元素节点
function getNextNode(tagetNode){
	var parent=tagetNode.parentNode,nextNode=null,childArr=getChildren(parent);
	for(var i=0;i<childArr.length;i++){
		if(childArr[i]===tagetNode){
			for(var j=i+1;j<childArr.length;j++){
				if(childArr[j].nodeType==1){
					nextNode=childArr[j];
					break;
				}
			}
		}
	}
	return nextNode;
}
//兼容IE8浏览器获取上一个元素节点
function getPrevNode(tagetNode){
	var parent=tagetNode.parentNode,prevNode=null,childArr=getChildren(parent);
	for(var i=0;i<childArr.length;i++){
		if(childArr[i]===tagetNode){
			for(var j=i-1;j>=0;j--){
				if(childArr[j].nodeType==1){
					prevNode=childArr[j];
					break;
				}
			}
		}
	}
	return prevNode;
}

//兼容IE8 将一个新节点插入到目标节点的后面
function insertAfter(newNode,tagetNode){
	var parent=getChildren(tagetNode.parentNode);
	var nextNode=null;
	if(parent[parent.length-1]===tagetNode){
		tagetNode.parentNode.appendChild(newNode);
	}else{
		nextNode=getNextNode(tagetNode);
		tagetNode.parentNode.insertBefore(newNode,nextNode);
	}
}

/*兼容IE8获取Button属性(鼠标按下的键位)
 *@method getButton
 *@for public
 *@param e 一个事件绑定自带的event形参
 *@return Number 返回一个数字类型为鼠标按下的键位
*/
function getButton(e){
	if(e){
		return e.button;
	}else{
		var button=window.event.button;
		switch(button){
			case 1:
				return 0;
			case 4:
				return 1;
			case 2:
				return 2;
		}
	}
}

/*兼容IE8实现阻止事件冒泡
 *@method stopEvent
 *@for public
 *@param e 一个事件绑定自带的event形参
*/
function stopProp(e){
	if(!!e.stopPropagation){//e.stopPropagation为true值时说明是现代高版本浏览器
		e.stopPropagation();
	}else{//e.stopPropagation为false值时说明是IE8及以下低版本浏览器
		e.cancelBubble = true;
	}
}

/*兼容IE8实现取消默认事件功能
 *@method stopDefault
 *@for public
 *@param e 一个事件绑定自带的event形参
*/
function stopDefault(e){
	if(!!e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue=false;
	}
}

/*
 * 兼容IE8实现事件的监听
 * @method addEvent
 * @for public
 * @param obj：事件源，event：事件，callBack：事件处理程序（函数），flag：监听器（值为true时事件捕获值为false时事件冒泡） 
 */
function addEvent(obj,event,callBack,flag){
	if(!!obj.addEventListener){
		obj.addEventListener(event,callBack,flag);
	}else{
		obj.attachEvent("on" + event,callBack);
	}
};

/*
 * 兼容IE8实现解除事件的监听
 * @method addEvent
 * @for public
 * @param obj：事件源，event：事件，callBack：事件处理程序（函数），flag：监听器（值为true时事件捕获值为false时事件冒泡） 
 */
function removeEvent(obj,event,callBack,flag){
	if(!!obj.removeEventListener){
		obj.removeEventListener(event,callBack,flag);
	}else{
		obj.detachEvent("on"+event,callBack);
	}
}


//封装一个方法，方法的功能是去掉字符串前后空格。
function myTrimLeft(str){
	return str.replace(/^\s*/,"");
}
function myTrimRight(str){
	return str.replace(/\s*$/,"");
}
function myTrim(str){
	return str.replace(/(^\s*|\s*$)/g,"");
}

//兼容ie8实现page属性的获取
function getPage(e){
	var sTop = document.documentElement.scrollTop || document.body.scrollTop;
	var sLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	return {
		x : e.clientX + sLeft,
		y : e.clientY + sTop
	}
}

//18位身份证号验证
function checkIdCode(idCode){
	var idCodeReg = /^[1-9]\d{5}((19|20|21)\d{2}|2200)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|x)$/;
	if(idCodeReg.test(idCode)){
		//对年月日进行验证
		//获取年份：
		var y = idCode.substr(6,4);
		var m = idCode.substr(10,2);
		var d = idCode.substr(12,2);
		//console.log(y,m,d);
		switch(parseInt(m)){
			case 4:
			case 6:
			case 9:
			case 11:
				if(d>30){
					return false;
				}
				return true;
			case 2:
				if(y % 4 == 0 && y % 100 != 0 || y % 400 == 0){
					if(d > 29){
						return false;
					}else{
						return true;
					}
				}else{
					if(d>28){
						return false;
					}else{
						return true;
					}
				}
		}
		return true;
	}
	return false;
}


//封装一个ajax get
function getAjax(url,data,callBack){
	if(!!data&&data instanceof Function){
		callBack=data;
		data=undefined;
	}
	url+="?date="+new Date().getTime;
	url+=!!data?"&"+fomateData(data):"";
	var aj=new XMLHttpRequest();
	aj.open("get",url);
	aj.send();
	aj.onreadystatechange=function(){
		if(aj.readyState==4){
			if(aj.status==200){
				callBack(aj.responseText);
			}
		}
	}
}
function fomateData(data){
	var arr=[];
	for (var key in data) {
		arr.push(key+"="+data[key]);
	}
	return arr.join("&");
}
//封装一个完整的Ajax

function ajax(obj){
	obj.data=!!obj.data?fomateData(obj.data):"";
	var aj=new XMLHttpRequest();
	if(obj.method.toLowerCase()==="get"){
		obj.url+="?rand="+new Date().getTime()+(!!obj.data?"&"+obj.data:"");
	}
	aj.open(obj.method,obj.url);
	if(obj.method.toLowerCase()==="get"){
		aj.send();
	}else{
		aj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		aj.send(obj.data);
	}
	aj.onreadystatechange=function(){
		if(aj.readyState==4){
			if(aj.status==200){
				obj.success(aj.responseText);
			}else{
				if(!!obj.error){
					obj.error(aj.status,aj.statusText);
				}
			}
		}
	}
}
//封装一个promise的Ajax以解决回调地狱问题
function promiseAjax(obj){
	var pm=new Promise(function(resolved,rejected){
		obj.data=!!obj.data?fomateData(obj.data):"";
		var aj=new XMLHttpRequest();
		if(obj.method.toLowerCase()==="get"){
			obj.url+="?rand="+new Date().getTime()+(!!obj.data?"&"+obj.data:"");
		}
		aj.open(obj.method,obj.url);
		if(obj.method.toLowerCase()==="get"){
			aj.send();
		}else{
			aj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			aj.send(obj.data);
		}
		aj.onreadystatechange=function(){
			if(aj.readyState==4){
				if(aj.status==200){
					resolved(aj.responseText);
				}else{
					
						rejected("错误代码："+aj.status+"错误问题："+aj.statusText);
					
				}
			}
		}
	});
	return pm;
}