$("iframe:eq(0)").mouseover(function(){
	$(this).height(406);
})
$("iframe:eq(0)").mouseout(function(){
	var _this=this;
	setTimeout(function(){
		$(_this).animate({"height":100});
	},500)
})
$(".f-bg").animate({opacity:1},1000)
$(window).scroll(function(){
	if ($(window).scrollTop()>=0 && $(window).scrollTop()<=800) {
		console.log(1);
		$(".f-bg").stop().animate({opacity:1},500)
	}else{
		console.log(2);
		$(".f-bg").stop().animate({opacity:0},10)
	}
})
$("a").mouseenter(function(){
	$(this).css({background:"#415fff"})
})
$("a").mouseleave(function(){
	$(this).css({background:""})
})
$(window).scroll( function(){
	var video = $(".f-future");
	var motor = $("#f-motor").offset().top-$(window).scrollTop();
	var discover = $("#f-discover").offset().top-$(window).scrollTop();
	var discover = $("#f-discover").offset().top-$(window).scrollTop();
	var portrait = $("#f-portrait").offset().top-$(window).scrollTop();
	
	if(video.offset().top-$(window).scrollTop() <= 0){
		video.css({"position": "sticky","top":"0px"});
	}
	
	if (motor<=752 && motor>=-752) {//线性马达
		$(".motor-img").stop().animate({left:"100px"},1000);
	}else{
		$(".motor-img").stop().animate({left:"200px"},1);
	}
	
	if (discover<=752 && discover>=-752) {//升降镜头
		$(".dis-crem").stop().animate({top:"277px"},1000);
	}else{
		$(".dis-crem").stop().animate({top:"353px"},1);
	}
	
	if (portrait<=0 && portrait>=-867) {//人像透明度
		var bfb = -(portrait/1000) + 0.133;
		$(".people-img").show();
		$(".people-img").css({position:"fixed","top":"0px","opacity":bfb});
		
	} else if(portrait<-867){
		$(".people-img").css({position:"absolute","top":"846px"});
	}else{
		$(".people-img").css({position:"absolute","top":"0px","opacity":"13.3%"});
		
	}
	
	var power = $("#f-power").offset().top-$(window).scrollTop();
	console.log(power);
	if (power>0) {
		$(".charge").css({position:"absolute","top":"50px"});
		$(".pow-content1").css({position:"absolute","top":"100px"});
		$(".charge img").eq(1).css({opacity:0});
		$(".charge img").eq(2).css({opacity:0});
		$(".charge img").eq(3).css({opacity:0});
		$(".charge img").eq(4).css({opacity:0});
	}
	
	if (power<=0 && power>=-3867) {//手机充电
		var bfb = -(power/1000);
		$(".charge").css({position:"fixed","top":"50px"});
		$(".pow-content1").css({position:"fixed","top":"100px"});
		
		if (power<=0 && power>=-300) {
			bot(-350-0.6*power+"px",1);
		}
		if (power<=-300 && power>=-1300) {
			change(-power*0.001-0.3);
		}
		if (power<=-1600 && power>=-1700) {
			change(1);
			bot("-170px",1);
		}
		if (power<=-1700 && power>=-1800) {
			change(0.8);
			bot("-230px",1);
		}
		if (power<=-1800 && power>=-1900) {
			change(0.6);
			bot("-260px",1);
		}
		if (power<=-1900 && power>=-2000) {
			change(0.4);
			bot("-290px",1);
			$(".pow-content1").css({opacity:1,top:"100px"});
		}
		if (power<=-2000 && power>=-2100) {
			change(0.2);
			bot("-320px",1);
			$(".pow-content1").css({opacity:0.5,top:"50px"});
		}
		if (power<=-2100 && power>=-2200) {
			change(0);
			bot("-350px",0);
			$(".pow-content1").css({opacity:0,top:"0px"});
			$(".charge img").eq(2).css({opacity:1});
		}
		if(power<=-2300 && power>=-3400){
			$(".pow-content1").css({opacity:0,top:"0px"});
			$(".pow-content2").css({opacity:1,position : "fixed",top:"70px"});
			$(".charge img").eq(7).css({opacity:1});
			$(".charge img").eq(2).css({opacity:0});
			if (index>=24 && index<=46) {
				$(".charge img").eq(7).attr("src","../img/f1_img/finger/finger_"+index+".png");
			}
		}
		if (power<=-2724 || power>=-2300) {
			$(".charge img").eq(7).css({opacity:0});
		}
		if (power<=-2724) {
			$(".charge img").eq(5).css({opacity:1});
		}else{
			$(".charge img").eq(5).css({opacity:0});
		}
		if (power<=-3400 || power>=-2300) {
			
			$(".pow-content2").css({opacity:1,position : "absolute",top:"2434px"});
		}
		
	}
	
	if (power <= -3100) {
		$(".charge").css({position:"absolute","top":"3140px"});
		$(".pow-content2").css({position:"absolute","top":"3140px"});
		$(".pow-content1").css({opacity:0,top:"0px"});
	}
})
var index = 0;
setInterval(function(){
	$(".charge img").eq(1).attr("src","../img/f1_img/change/charge_"+index+".png");

	if(index === 49){
		index=0;
	}else{
		index++;
	}
},50);

function change(val){
	$(".charge img").eq(1).css({opacity:val});
	$(".charge img").eq(3).css({opacity:val});
	$(".charge img").eq(4).css({opacity:val});
}
function bot(val,opa){
	$(".charge img").eq(6).css({bottom:val,opacity:opa});
}
/*var Ptop = 0;
$(window).scroll( function(){
	var phone = $(".f-bigPhone");
	Ptop = (phone.offset().top - $(window).scrollTop());
	var wTop = $(window).scrollTop();
	console.log(Ptop);
	if(Ptop <= 0 && Ptop>-1000){
		console.log($(window).scrollTop());
//		console.log(1);
		phone.css({"position": "sticky","top":"0"});
		$(".f-bp").css({"width":"30%"})
	}
//	if($(window).scrollTop()>2500|| $(window).scrollTop()<1832){
//		console.log(2);
//		phone.css({"width":"40%"});
//	}
})*/