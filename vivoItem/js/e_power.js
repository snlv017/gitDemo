

var e_position = $(".e_positipn");
var e_info_left = $(".e_info_left");
var e_info_right = $(".e_info_right");
var resource=[],styleId=1,colorId=2,i=1;





/*滚动事件*/
var e_det_head = $(".e_det_head");
$(document).scroll(function () {
    if (e_info_left.scrollTop() < 980){
        e_info_left.css({
            top:20,
            position: "sticky"
        })
    }


    if($("html,body").scrollTop() > 1906){
        $(".e_det_head").css({
            position:"fixed",
            top: 0
        })
    }else{
        $(".e_det_head").css({
            position:"static",
            top: 0
        })
    }


})


/*小图标*/
//console.log($(".e_side a"))
$(".e_side a").hover(function () {
    $(this).find("div").show();
    $(this).attr("class","e_active");
},function () {
    $(this).find("div").hide();
    $(this).removeAttr("class");
})


/*放大镜*/
var e_mask = $("#e_mask");
var e_bigImg = $("#e_bigImg");
var e_imgposi = $(".e_imgposi");
e_imgposi.mouseover(function () {
    e_mask.css({
        display:"block"
    });
    e_bigImg.css({
        display:"block"
    });
    //e_bigImg.find("img")[0].src="../img/e_img2/e_power1.png";


    e_imgposi.mousemove(function (e) {
        var l = e.pageX - e_mask.outerWidth()/2 - $(this).offset().left;
        var t = e.pageY - e_mask.outerHeight()/2 - $(this).offset().top;

        var maxL = $(this).innerWidth() - e_mask.outerWidth();
        var maxT = $(this).innerHeight() - e_mask.outerHeight();

        l = l < 0 ? 0 : (l > maxL ? maxL : l);
        t = t < 0 ? 0 : (t > maxT ? maxT : t);

        e_mask.css({
            left:l + "px",
            top:t + "px"
        })
        //console.log(l,t)

        var bigImgLeft = l * (e_bigImg.find("img").innerWidth()-e_bigImg.innerWidth())/($(".e_img_big").innerWidth()-e_mask.outerWidth());
        var bigImgHeight = t * (e_bigImg.find("img").innerHeight()-e_bigImg.innerHeight())/($(".e_img_big").height()-e_mask.outerHeight());

        //console.log(bigImgLeft,bigImgHeight)
        e_bigImg.find("img").css({
            position:"absolute",
            width:"200%",
            height:"200%",
            left:  -bigImgLeft + "px",
            top:  -bigImgHeight + "px"
        })

    })
})
e_imgposi.mouseout(function () {
    e_mask.css({
        display:"none"
    });
    e_bigImg.css({
        display:"none"
    });
})


/*点击添加数量*/
var e_addnum = $("#e_addnum");
var e_cutnum = $("#e_cutnum");
var inputnum = $(".e_info_num input")
e_addnum.click(function () {
    i = inputnum.val();
    if (i < 5){
        i++;
    }
    inputnum.val(i);
    $(".e_hasChoose").html("已选："+JSON.parse(resource[0].productStyle)[styleId]+JSON.parse(resource[0].commodityColor)[colorId]+i+"件");
    $(".e_allPrice .e_buyprice").html("￥"+(Number(JSON.parse(resource[0].price)[styleId])*i));
})
e_cutnum.click(function () {
    i = inputnum.val();
    if (i > 0){
        i--;
    }
    inputnum.val(i);
    $(".e_hasChoose").html("已选："+JSON.parse(resource[0].productStyle)[styleId]+JSON.parse(resource[0].commodityColor)[colorId]+i+"件");
    $(".e_allPrice .e_buyprice").html("￥"+(Number(JSON.parse(resource[0].price)[styleId])*i));
})

/*点击选择功率*/
$(".e_choose1 li").click(function () {
    $(this).css({
        borderColor:"#e90f23",
        color:"#e90f23"
    }).siblings().css({
        borderColor:"#ddd",
        color:"#777"
    })
    styleId=$(this).attr("index");
    $(".e_hasChoose").html("已选："+JSON.parse(resource[0].productStyle)[styleId]+JSON.parse(resource[0].commodityColor)[colorId]+i+"件");
    $(".e_price h3").html("￥"+JSON.parse(resource[0].price)[styleId]);
	$(".e_allPrice .e_buyprice").html("￥"+(Number(JSON.parse(resource[0].price)[styleId])*i));
})

/*点击选择颜色*/
$(".e_choose2 li").click(function () {
    $(this).css({
        borderColor:"#e90f23",
        color:"#e90f23"
    }).siblings().css({
        borderColor:"#ddd",
        color:"#777"
    })
    colorId=$(this).attr("index");
    $(".e_imgposi .e_img_big img").attr("src",JSON.parse(resource[0].commodityPic)[colorId]);
    e_bigImg.find("img").attr("src",JSON.parse(resource[0].commodityPic)[colorId]);
     $(".e_hasChoose").html("已选："+JSON.parse(resource[0].productStyle)[styleId]+JSON.parse(resource[0].commodityColor)[colorId]+i+"件");
})

/*点击选择套餐*/
$(".e_info_taocan li").click(function () {
    $(this).css({
        borderColor:"#e90f23",
        color:"#e90f23"
    }).siblings().css({
        borderColor:"#ddd",
        color:"#777"
    })
})

$.ajax({
	type:"post",
	url:"../php/b_getSource.php",
	data:{
		cId:10001
	},
	success(res){
		resource=res=JSON.parse(res);
		console.log(res);
		$(".e_info_right .e_info_feature>h2").html(res[0].tradeName);
		$(".e_price h3").html("￥"+JSON.parse(res[0].price)[styleId]);
		$(".e_allPrice .e_buyprice").html("￥"+(Number(JSON.parse(res[0].price)[1])*i));
		$(".e_rate .e_choose1>li:eq(0)").html(JSON.parse(res[0].productStyle)[0]);
		$(".e_rate .e_choose1>li:eq(1)").html(JSON.parse(res[0].productStyle)[1]);
		$(".e_choose2 li:eq(0)").html(JSON.parse(res[0].commodityColor)[0]);
		$(".e_choose2 li:eq(1)").html(JSON.parse(res[0].commodityColor)[1]);
		$(".e_choose2 li:eq(2)").html(JSON.parse(res[0].commodityColor)[2]);
		$(".e_choose2 li:eq(3)").html(JSON.parse(res[0].commodityColor)[3]);
		e_bigImg.find("img").attr("src",JSON.parse(resource[0].commodityPic)[0]);
		$(".e_hasChoose").html("已选："+JSON.parse(resource[0].productStyle)[styleId]+JSON.parse(resource[0].commodityColor)[colorId]+i+"件");
	}
});
$(".e_buyBtn .e_car").click(function(){
	if(getCookieByName("b_account")){
		$.ajax({
			type:"post",
			url:"../php/b_addCart.php",
			data:{
				account:getCookieByName("b_account"),
				cId:10001,
				num:i,
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


