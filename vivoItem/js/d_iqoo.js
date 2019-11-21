	
var resource=[],styleId=0,colorId=0,i=1;
	//左栏固定
	$(window).scroll(function(){
		if($("body,html").scrollTop()>0){
			scrollTop=$("body,html").scrollTop();
		}else{
			scrollTop=$("body").scrollTop();
		}
		var lHeight = $(".d_base-info_right").outerHeight()-$(".d_base-info_left").outerHeight();
		if(scrollTop > $(".d_crumbs").height() && scrollTop < lHeight){
			$(".d_base-info_left").css({
				"position":"fixed",
				"top":0
				
			});
		}else if(scrollTop >= lHeight){
			
			$(".d_base-info_left").css({
				"position":"sticky",
				"top":lHeight +"px"
			});
		}else{
			$(".d_base-info_left").css({
				"position":"static",				
			});
		}
		if(scrollTop >($(".d_crumbs").outerHeight()+$(".d_base-info").outerHeight()+$(".d_section_wrapper").outerHeight())){
			$(".d_mini-settle").css({
				"display":"block"
			})
			$(".d_detail_bar").css({
				"position":"fixed",
				"left":0,
				"top":0,
				"right":0
			});
		}else{
			$(".d_detail_bar").css({
				"position":"static"
			})
			$(".d_mini-settle").css({
				"display":"none"
			})
		}
	});
	//放大镜效果
	$(".d_base-info_img").mouseover(function(){
		$(".d_pox").css({
			"display":"block"
		});
		$(".d_box").css({
			"display":"block"
		})
	})
	$(".d_base-info_img").mouseout(function(){
		$(".d_pox").css({
			"display":"none"
		})
		$(".d_box").css({
			"display":"none"
		})
	})
	$(".d_base-info_img").mousemove(function(e){
		var x = e.pageX-$(".d_box").outerWidth()/2-$(this).offset().left;
		var y = e.pageY-$(".d_box").outerHeight()/2-$(this).offset().top;
		var maxX= $(this).outerWidth()-$(".d_box").outerWidth();
		var maxY = $(this).outerHeight()-$(".d_box").outerHeight();
		x = x < 0 ? 0 : (x > maxX ? maxX : x);
		y = y < 0 ? 0 : (y > maxX ? maxY : y);
		$(".d_box").css({
			"left":x+"px",
			"top":y+"px"
		})
		var d_imgLeft = ($(".d_img").outerWidth()-$(".d_pox").outerWidth())/($(".d_bimg").outerWidth()-$(".d_box").outerWidth())*x;
		var d_imgTop = ($(".d_img").outerHeight()-$(".d_pox").outerHeight())/($(".d_bimg").outerHeight()-$(".d_box").outerHeight())*y;
		$(".d_img").css({
			"left":-d_imgLeft+"px",
			"top":-d_imgTop+"px"
		})
	})
	//点击选着不同的套餐
	
	
	$(".d_suites ol").delegate("li","click",function(){
		$.each($(".d_suites ol li"),function(index,n){
			
			$(n).css({
				"border-color":"#ddd"
			})
		})
		$(this).css({
			"border-color":"red"
		})
	})
	var prict = Number($(".d_settle h3 span").text());
	
	$(".d_jia").click(function(){
		i++;
		$(".d_jian").css({
			"color":"#333"
		});
		$(".d_snum").val(i);
		$(".d_settle h3 span").text(prict*$(".d_snum").val());
		statistics();
		$(".d_settle h3 span").html(JSON.parse(resource[0].price)[styleId]*i);
	})
	$(".d_jian").click(function(){
		i--;
		if(i<=0){
			i=0;
		}
		$(".d_snum").val(i);
		statistics();
		$(".d_settle h3 span").html(JSON.parse(resource[0].price)[styleId]*i);
	})
	$(".d_wrapper_a").click(function(){
		$(".d_wrapper_a span").css({
			"opacity": 1
		})
		$(".d_section_wrapper_a span").css({
			"opacity": 0
		})
		$(".d_peijian").show();
		$(".d_tonglei").hide();
	})
	var l = $(".d_peijian").outerWidth();
	$(".d_section_wrapper_a").click(function(){
		$(".d_wrapper_a span").css({
			"opacity": 0
		})
		$(".d_section_wrapper_a span").css({
			"opacity": 1
		})
		
		$(".d_tonglei").show();
		$(".d_peijian").hide();
	})
	$(".d_specs>button").click(function(){
		$(this).css("borderColor","red").siblings().css("borderColor","#ddd");
		styleId=$(this).attr("index");
		vInit();
		statistics();
	})
	$(".d_colorbtn button").click(function(){
		$(this).css("borderColor","red").siblings().css("borderColor","#ddd");
		colorId=$(this).attr("index");
		cInit();
		statistics();
	})
	function statistics(){
		var s=JSON.parse(resource[0].productStyle)[styleId];
		var c=JSON.parse(resource[0].commodityColor)[colorId];
		$(".d_settle p").html("已选："+s+" "+c+" "+i+"件");
	}
$.ajax({
	type:"post",
	url:"../php/b_getSource.php",
	data:{
		cId:10003
	},
	success(res){
		resource=res=JSON.parse(res);
		console.log(res);
		$(".d_base-info_right h1 span:eq(0)").html(res[0].tradeName);
		for(var i=0;i<JSON.parse(res[0].productStyle).length;i++){
			$(".d_specs>button:eq("+i+")").html(JSON.parse(res[0].productStyle)[i]);
			if(i<3){
				$(".d_colorbtn button:eq("+i+")").html(JSON.parse(res[0].commodityColor)[i]);
			}
		}
		vInit();
		cInit();
	}
});
$(".d_action_tips").click(function(){
	if(getCookieByName("b_account")){
		$.ajax({
			type:"post",
			url:"../php/b_addCart.php",
			data:{
				account:getCookieByName("b_account"),
				cId:10003,
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
function vInit(){
	$(".d_base-info_right h1 span:eq(1)").html(JSON.parse(resource[0].productStyle)[styleId]);
	$(".d_summary h2 span:eq(1)").html(JSON.parse(resource[0].price)[styleId]);
	$(".d_settle h3 span").html(JSON.parse(resource[0].price)[styleId]*i);
}
function cInit(){
	$(".d_base-info_right h1 span:eq(2)").html(JSON.parse(resource[0].commodityColor)[colorId]);
	$(".d_bimg img").attr("src",JSON.parse(resource[0].commodityPic)[colorId]);
	$(".d_pox img").attr("src",JSON.parse(resource[0].commodityPic)[colorId]);
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