(function($){
	$("#b_nav .b_p1 a").mouseover(function(){
		$("#b_nav").stop().animate({"height":374});
		$("#b_navContent .b_main").css("height","0");
		var cId=$(this).attr("index");
		$.ajax({
			type:"post",
			url:"../php/b_header.php",
			data:{
				sId:cId
			},
			success(res){
				res=JSON.parse(res);
				
				$("#b_navContent .b_main .b_left").html("");
				for(var i=0;i<res.length;i++){
					var imgArr=JSON.parse(res[i].commodityPic);
					$("#b_navContent .b_main .b_left")[0].appendChild(dlInit(imgArr,res[i].tradeName,res[i].style,res[i].src));
				}
				$("#b_navContent .b_main").animate({"height":306},500);
				if(cId!=7){
					$("#b_navContent .b_main .b_left dt").mouseover(function(){
						$(this).find("img:eq(0)").stop().animate({"left":15});
						$(this).find("img:eq(1)").stop().animate({"left":40});
						$(this).find("img:eq(2)").stop().animate({"left":65});
					})
					$("#b_navContent .b_main .b_left dt").mouseout(function(){
						$(this).find("img:eq(0)").stop().animate({"left":30});
						$(this).find("img:eq(1)").stop().animate({"left":30});
						$(this).find("img:eq(2)").stop().animate({"left":55});
					})
				}
			}
		});
	});
	$("#b_nav .b_p1 a").mouseout(function(){
		$("#b_nav").stop().animate({"height":68});
	})
	$("#b_navContent").mouseover(function(){
		$("#b_nav").stop().animate({"height":374});
	})
	$("#b_navContent").mouseout(function(){
		$("#b_nav").stop().animate({"height":68});
	})
})(jQuery)
function dlInit(imgArr,tradeName,styles,src){
	var a=document.createElement("a");
	a.href=src;
	a.target="_parent";
	var dl=document.createElement("dl");
	var dt=document.createElement("dt");
	var dd=document.createElement("dd");
	for(var i=0;i<imgArr.length;i++){
		var img=document.createElement("img");
		img.src=imgArr[i];
		dt.appendChild(img);
	}
	var p1=document.createElement("p");
	p1.className="b_p1";
	p1.innerHTML=tradeName;
	var p2=document.createElement("p");
	p2.className="b_p2";
	p2.innerHTML=styles||"";
	dd.appendChild(p1);
	dd.appendChild(p2);
	dl.appendChild(dt);
	dl.appendChild(dd);
	a.appendChild(dl);
	return a;
}

