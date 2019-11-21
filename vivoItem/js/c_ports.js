var ct,resource=[],i=1;
var mask = $id("c_mask"),
big = $id("c_big"),
bigImg = $id("bigImg"),
bigImg = $id("bigImg"),
fimg = $id("fimg"),
acount = $id("acount"),
span = acount.children;
fimg = $id("fimg");
var select = document.getElementsByClassName("select")[0],
span1 = select.children;
fimg.onmouseover = function(){
    mask.style.display = "block";
    big.style.display = "block";
    big.style.zIndex=999;
    fimg.onmousemove = function(e){
        var e = e || event;
        var tmpX=fimg.offsetLeft;
        var tmpY=fimg.offsetTop;
        var node=fimg.offsetParent;
        while(node!=null){
            tmpX+=node.offsetLeft;
            tmpY+=node.offsetTop;
            node=node.offsetParent
        }
        var x = e.clientX-tmpX;
        
        var y = e.clientY-tmpY;
        // console.log(x,y) 
        l = x < 88 ? 0 : (x > 320-88 ? 320-178 : x-88); 
        t = y < 88 ? 0 : (y > 320-88 ? 320-178 : y-88); 
        mask.style.left = l + "px";  
        mask.style.top = t + "px";  
        bigImg.style.left = -2*l + "px";  
        bigImg.style.top = -2*t + "px";  
    }

    fimg.onmouseout = function(){
        mask.style.display = "none";
        big.style.display = "none";

    }
}

span[0].onclick = function(){
    n = span[1].innerHTML;
    if(n == 0){
        span[1].innerHTML = 0;
    }else{
        n--;
        span[1].innerHTML = n;
    }
    span1[0].innerHTML = n*999; 
    span1[1].innerHTML = "已选："+ct+n+"件"; 
}
span[2].onclick = function(){
    n = span[1].innerHTML;
    if(n == 5){
        span[1].innerHTML = 5;
    }else{
        n++;
        span[1].innerHTML = n;
    }
    span1[0].innerHTML = n*999;
    span1[1].innerHTML = "已选："+ct+n+"件";
}

var n = span[1].innerHTML;
$("#uli li").click(function(){
    $(this).addClass("on").siblings().removeClass();
    i=Number($(this).attr("index"));
    ct=$(this)[0].innerText;
    $(".select span:eq(1)").html("已选："+ct+n+"件");
    $("#fimg>img").attr("src",JSON.parse(resource[0].commodityPic)[i]);
    $("#c_big img").attr("src",JSON.parse(resource[0].commodityPic)[i]);
    
})
$.ajax({
	type:"post",
	url:"../php/b_getSource.php",
	data:{
		cId:10004
	},
	success(res){
		resource=res=JSON.parse(res);
		console.log(res);
		$(".c_lright>.white").html(res[0].tradeName);
		$(".price span:eq(0)").html("￥"+JSON.parse(res[0].price)[0]);
		$("#uli li:eq(0)").append(JSON.parse(res[0].commodityColor)[0]);
		$("#uli li:eq(1)").append(JSON.parse(res[0].commodityColor)[1]);
	}
});
$(".addcar button:eq(0)").click(function(){
	if(getCookieByName("b_account")){
		$.ajax({
			type:"post",
			url:"../php/b_addCart.php",
			data:{
				account:getCookieByName("b_account"),
				cId:10004,
				num:n,
				sId:"",
				coId:i
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