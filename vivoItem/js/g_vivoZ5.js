$(function(){
	var scrollTop; 
	$(window).scroll(function(){
		scrollTop = $("html").scrollTop() || $("body").scrollTop();
		console.log(scrollTop)
		//固定
		if(scrollTop > 160){
			$("#g_2main").css("border-bottom",0);
			$("#g_2Z5").css("border-bottom","1px solid #ccc").css("position","fixed").css("top",-100).css("z-index",3).css("opacity",0.9);
		}else{
			$("#g_2Z5").css("border-bottom",0);
			$("#g_2main").css("border-bottom","1px solid #ccc");
			$("#g_2Z5").css("position","static").css("top",0)
		}
		
		//三摄
		if(scrollTop > 667 && scrollTop < 2000){
			$("#g_2photography").children("#g_2-2").stop().animate({bottom:0},1000,"swing");
		}else{
			$("#g_2photography").children("#g_2-2").stop().animate({bottom:-100},1000,"swing");
		}

		//夜景
		if(scrollTop > 1800 && scrollTop < 3000){
			$("#g_2nightView").children("#g_2nightViewImg1").stop().animate({bottom:160},1000,"swing");
			$("#g_2nightView").children("#g_2nightViewImg2").stop().animate({bottom:160},1000,"swing");
		}else{
			$("#g_2nightView").children("#g_2nightViewImg1").stop().animate({bottom:110},1000,"swing");
			$("#g_2nightView").children("#g_2nightViewImg2").stop().animate({bottom:210},1000,"swing");
		}
		
		//前置
		if(scrollTop > 2500 && scrollTop < 4000){
			$("#g_2pre").children("img").stop().animate({top:150},1000,"swing");
		}else{
			$("#g_2pre").children("img").stop().animate({top:190},1000,"swing");
		}
		
		//处理器
		if(scrollTop > 5000 && scrollTop < 6200){
			$("#g_2processor").children("img").stop().animate({top:100},1000,"swing");
		}else{
			$("#g_2processor").children("img").stop().animate({top:150},1000,"swing");
		}
		
		//全面屏
		if(scrollTop > 6200 && scrollTop < 7300){
			$("#g_2allScreen").children("img").stop().animate({top:500},1000,"swing");
		}else{
			$("#g_2allScreen").children("img").stop().animate({top:550},1000,"swing");
		}
		
		//指纹解锁
		if(scrollTop > 6800 && scrollTop < 8200){
			$("#g_2fingerprint").children("img").stop().animate({left:800},1000,"swing");
		}else{
			$("#g_2fingerprint").children("img").stop().animate({left:900},1000,"swing");
		}
		
		//配色
		if(scrollTop > 7600 && scrollTop < 9150){
			$("#g_2color").children("img").stop().animate({left:40},1000,"swing");
		}else{
			$("#g_2color").children("img").stop().animate({left:90},1000,"swing");
		}
		
		//色彩美学
		if(scrollTop > 8500 && scrollTop < 10000){
			$("#g_2aesthetic").children("img").stop().animate({left:400},1000,"swing");
		}else{
			$("#g_2aesthetic").children("img").stop().animate({left:300},1000,"swing");
		}
		
		//手机性能
		if(scrollTop > 10000 && scrollTop < 11300){
			$("#g_2performance").children("img").stop().animate({bottom:40},1000,"swing");
		}else{
			$("#g_2performance").children("img").stop().animate({bottom:-18},1000,"swing");
		}
		
		//游戏空间
		if(scrollTop > 11200 && scrollTop < 12200){
			$("#g_2game").children("img").stop().animate({top:540},1000,"swing");
		}else{
			$("#g_2game").children("img").stop().animate({top:600},1000,"swing");
		}
		
		//jovi助手
		if(scrollTop > 12266 && scrollTop < 13774){
			$("#g_2jovi").children("img").stop().animate({top:550},1000,"swing");
		}else{
			$("#g_2jovi").children("img").stop().animate({top:650},1000,"swing");
		}
		
		//锚点滚动
		if(scrollTop > 1000){
			$("#g_2maodian").css("display","block");
		}else{
			$("#g_2maodian").css("display","none");
		}
	})
	//锚点
	$("#g_2maodian").children("a").children("img").hover(function(){
		//console.log($("#g_2maodian").children("a"))
		$("#g_2maodian").children("a").children("img").attr({src:"../img/g_2/g_2-19.svg"});
		$("#g_2maodian").children("a").children("img").css("cursor","pointer")
	},function(){
		$("#g_2maodian").children("a").children("img").attr({src:"../img/g_2/g_2-21.svg"});
	});
	$("iframe:eq(0)").mouseover(function(){
		$(this).height(406);
	})
	$("iframe:eq(0)").mouseout(function(){
		var _this=this;
	setTimeout(function(){
		$(_this).animate({"height":100});
	},500)
	})
	
})
