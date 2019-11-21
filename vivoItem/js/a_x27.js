//滚动条事件
var resource=[],styleId=0,colorId=0,num=1;
var slog=["../img/a_3/a_3 (6).webp","../img/a_3/a_3 (4).webp","../img/a_3/a_3slog (1)","../img/a_3/a_3slog (2)","../img/a_3/a_3slog (3)","../img/a_3/a_3slog (4)","../img/a_3/a_3slog (5)","../img/a_3/a_3slog (6)","../img/a_3/a_3slog (7)","../img/a_3/a_3slog (8)"]
$(window).scroll(function(){
    var a_T=$(window).scrollTop();
    //console.log($(".a-right-nav").find("p").eq(3)[0]);
    //console.log(a_T);
    if(a_T>1000){
        $(".a-right-nav").find("p").eq(3).css("display","block");
    }
    if(a_T<1000){
        $(".a-right-nav").find("p").eq(3).css("display","none");
    }
});

//点击返回
$(".a-right-nav").find("p").eq(3).click(function(){
    document.documentElement.scrollTop=0;
})

//hover事件
$(".a-conner-right>dl>dd>p").find("a").hover(function(){
    
    $(".a-conner-zengpin").stop().fadeToggle();
});
//手机切换
$(".a-conner-left ul li").hover(function(){
	
	var src=$(this).find("img").attr("src");
    $(".a-conner-left div img").attr("src",src);
});




//获取选择
var a_banbenVal = "";
var a_yiansheVal= "";
var a_num = 1;

//span 的点击事件
$(".a-banben").on("click","span",function(){

    $(this).css({borderColor:"red",color:"red"}).siblings().css({borderColor:"#e4e4e4",color:"black"});
    a_banbenVal=$(this).text();
    a_jishu();
    styleId=$(this).attr("index");
    vInit();
});
$(".a-yianshe").on("click","span",function(){
    $(this).css({borderColor:"red",color:"red"}).siblings().css({borderColor:"#e4e4e4",color:"black"});

    a_yiansheVal=$(this).text();
    a_jishu();
    colorId=$(this).attr("index");
    cInit();
});
$(".a-taochan").on("click","span",function(){
    $(this).css({borderColor:"red",color:"red"}).siblings().css({borderColor:"#e4e4e4",color:"black"});
});

//判断数量的限制

//console.log($("input[name='jia']")); 加号
$("input[name='jia']").click(function(){
    a_num++;
    $(".a-num span").html(a_num);
    if(a_num>1){
        $("input[name='jian']").attr("disabled",false);
    }
    a_jishu();
    $(".a-gowuche b").html(JSON.parse(resource[0].price)[styleId]*a_num);
});
$("input[name='jian']").click(function(){
    a_num--;
    if(a_num<=1){
        $("input[name='jian']").attr("disabled","disabled");
        a_num=1;
    }
    $(".a-num span").html(a_num);
    a_jishu();
    $(".a-gowuche b").html(JSON.parse(resource[0].price)[styleId]*a_num);
});
//获取当前的手机选择样式
function a_jishu(){
    $(".a-gowuche p").html(a_banbenVal+a_yiansheVal+a_num+"件");
}

$.ajax({
	type:"post",
	url:"../php/b_getSource.php",
	data:{
		cId:10005
	},
	success(res){
		resource=res=JSON.parse(res);
		console.log(res);
		$(".a-conner-right h2 span:eq(0)").html(res[0].tradeName);
		for(var i=0;i<JSON.parse(res[0].commodityColor).length;i++){
			if(i<JSON.parse(res[0].productStyle).length){
				$(".a-banben span:eq("+i+")").html(JSON.parse(res[0].productStyle)[i]);
			}
			$(".a-yianshe span:eq("+i+")").html(JSON.parse(res[0].commodityColor)[i]);
		}
		cInit();
		vInit();
		a_banbenVal=$(".a-banben span:eq(0)").text();
		a_yiansheVal=$(".a-yianshe span:eq(0)").text();
		a_jishu();
	}
});
$(".a-gowuche span:eq(0)").click(function(){
	if(getCookieByName("b_account")){
		$.ajax({
			type:"post",
			url:"../php/b_addCart.php",
			data:{
				account:getCookieByName("b_account"),
				cId:10005,
				num:a_num,
				sId:styleId,
				coId:colorId
			},
			success(res){
				console.log(res);
				if(res==1){
					location.href="d_chart.html";
				}
			}
		});
	}else{
		location.href="b_regist.html";
	}
})
function vInit(){
	$(".a-conner-right dl dt b").html(JSON.parse(resource[0].price)[styleId]);
	$(".a-gowuche b").html(JSON.parse(resource[0].price)[styleId]*a_num);
	$(".a-conner-right h2 span:eq(1)").html(JSON.parse(resource[0].productStyle)[styleId]);
	
}
function cInit(){
	$(".a-conner-right h2 span:eq(2)").html(JSON.parse(resource[0].commodityColor)[colorId]);
	$(".a-conner-left div img").attr("src",JSON.parse(resource[0].commodityPic)[colorId]);
	$(".a-conner-left ul li:eq(0) img").attr("src",JSON.parse(resource[0].commodityPic)[colorId]);
	$(".a-conner-left ul li:eq(1) img").attr("src",slog[colorId*2]);
	$(".a-conner-left ul li:eq(2) img").attr("src",slog[colorId*2+1]);
}
$("iframe:eq(0)").mouseover(function(){
					$(this).height(406);
				})
				$("iframe:eq(0)").mouseout(function(){
					var _this=this;
					setTimeout(function(){
						$(_this).animate({"height":100});
					},500)
				})