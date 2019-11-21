var e_mask = $("#mask");
var bigImg = $(".bigimg");
var big = $(".f-big-img");

var resource=[],styleId=0,colorId=0,num=1;
//粘性定位
$(window).scroll( function(){
	var sticky = $(".f-s-left");
	if(sticky.offset().top-$(window).scrollTop() <= 0){
		sticky.css({"position": "sticky","top":"0px"});
	}
})

$(".f-img").mouseenter(function(){
	$("#mask").show();
	$(".f-big-img").show();
})
$(".f-img").mouseleave(function(){
	$("#mask").hide();
	$(".f-big-img").hide();
})
//放大镜
$(".f-img").mousemove(function(e){
	
	var l = e.pageX - e_mask.outerWidth()/2 - $(this).offset().left;
	var t = e.pageY - e_mask.outerHeight()/2 - $(this).offset().top;
	var maxL = $(this).innerWidth() - e_mask.outerWidth();
	var maxT = $(this).innerHeight() - e_mask.outerHeight();
	
	l = l < 0 ? 0 : (l > maxL ? maxL : l);
	t = t < 0 ? 0 : (t > maxT ? maxT : t);

	$("#mask").css({top:t+"px",left:l+"px"});
	bigImg.css({
		left:-l*(bigImg.innerWidth()-big.outerWidth())/maxL +"px",
		top:-t*(bigImg.innerHeight()-big.outerHeight())/maxT +"px"
	})
	
})

//选择产品服务

$(".d_specs button").click(function(){
	$(this).addClass("f-select").siblings().removeClass("f-select");
	$(".f-info h2 span").eq(0).html($(this).html());
	$(".d_settle p span").eq(0).html($(this).html());
	styleId=$(this).attr("index");
	$(".d_settle h3 b").html(Number(JSON.parse(resource[0].price)[styleId])*val);
	$(".f-price-left span:eq(1)").html(JSON.parse(resource[0].price)[styleId]);
})
$(".f-color button").click(function(){
	$(this).addClass("f-select").siblings().removeClass("f-select");
	$(".f-info h2 span").eq(1).html($(this).html());
	$(".d_settle p span").eq(1).html($(this).html());
	colorId=$(this).attr("index");
	$(".f-img img:eq(0)").attr("src",JSON.parse(resource[0].commodityPic)[colorId]);
})
$(".d_suites button").click(function(){
	$(this).addClass("f-select").siblings().removeClass("f-select");
})

//选择不同颜色展示不同手机



//加减
var val = Number($(".d_content input").val());
var price = Number($(".d_settle h3 b").html());

$(".d_content span").eq(0).click(function(){
	if(val ===1){
		$(".d_content span").eq(0).css({cursor: "not-allowed",color: "#ddd"})
		$(".d_content input").val(1);
	}else{
		$(".d_content input").val(--val);
		$(".d_settle b").html(price*val);
		$(".d_settle p b").html(val);
	}
	$(".d_settle h3 b").html(Number(JSON.parse(resource[0].price)[styleId])*val);
})
$(".d_content span").eq(1).click(function(){
	$(".d_content span").eq(0).css({cursor: "pointer",color: "#000"})
	$(".d_content input").val(++val);
	$(".d_settle h3 b").html(price*val);
	$(".d_settle p b").html(val);
	$(".d_settle h3 b").html(Number(JSON.parse(resource[0].price)[styleId])*val);
})
$.ajax({
	type:"post",
	url:"../php/b_getSource.php",
	data:{
		cId:10002
	},
	success(res){
		resource=res=JSON.parse(res);
		console.log(res);
		$(".f-info>h2>b").html(res[0].tradeName);
		$(".f-info>h2>span:eq(0)").html(JSON.parse(res[0].productStyle)[0]);
		$(".f-info>h2>span:eq(1)").html(JSON.parse(res[0].commodityColor)[0]);
		$(".f-price-left span:eq(1)").html(JSON.parse(res[0].price)[0]);
		$(".d_settle h3 b").html(Number(JSON.parse(res[0].price)[0])*val);
		for(var i=0;i<JSON.parse(res[0].productStyle).length;i++){
			$(".d_specs button:eq("+i+")").html(JSON.parse(res[0].productStyle)[i]);
			if(i<2){
				$(".f-color button:eq("+i+")").html(JSON.parse(res[0].commodityColor)[i]);
			}
			
		}
		$(".f-img img:eq(0)").attr("src",JSON.parse(res[0].commodityPic)[0]);
	}
});
$(".d_action_tips").click(function(){
	if(getCookieByName("b_account")){
		$.ajax({
			type:"post",
			url:"../php/b_addCart.php",
			data:{
				account:getCookieByName("b_account"),
				cId:10002,
				num:val,
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
$("iframe:eq(0)").mouseover(function(){
	$(this).height(406);
})
$("iframe:eq(0)").mouseout(function(){
	var _this=this;
	setTimeout(function(){
		$(_this).animate({"height":100});
	},500)
})