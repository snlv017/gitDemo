window.onload = function(){
	var g_1fix3 = document.getElementById("g_1fix3");
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop > 800){
//			g_1fix3.style.display = "block";
			animate(g_1fix3,{opacity:100});
		}else{
//			g_1fix3.style.display = "none";
			animate(g_1fix3,{opacity:0})
		}
	}
	var scrollTop1 = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop1 > 800){
		g_1fix3.style.opacity = 1;
	}else{
		g_1fix3.style.opacity = 0;
	}
	
	
	//轮播图
	var p = document.getElementById("lunbo").firstElementChild;
	var leftA = document.getElementById("leftA");
	var rightA = document.getElementById("rightA");
	var lunbo = document.getElementById("lunbo");
	var l = 0;
	var timer;
	function setTimer(){
		return setInterval(function(){
			if(l <= -9515){
				l = 0;
				p.style.left = 0;
			}
			l += -1903;
			p.style.left = l + "px";
		
		},1500);
	}
	timer = setTimer();
	
	lunbo.onmouseover = function(){
		clearInterval(timer);
	}
	lunbo.onmouseout = function(){
		timer = setTimer();
	}
	
	leftA.onclick = function(){
		if(l > -1903){
			l = -9515;
			p.style.left = -9515 + "px";
		}
		l += 1903;
		p.style.left = l + "px";
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
	}
	
	rightA.onclick = function(){
		if(l < -7612){
			l = 0;
			p.style.left = 0 + "px";
		}
		l += -1903;
		p.style.left = l + "px";
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
	}
	
	
	//放大镜
	var toBig = document.getElementById("toBig");
	var minBox = document.getElementById("minBox");
	var minImg = document.getElementById("minBox").firstElementChild;
	var zheZhao = document.getElementById("zheZhao");
	var maxBox = document.getElementById("maxBox")
	var maxImg = maxBox.firstElementChild;
	minBox.onmouseover = function(){
		zheZhao.style.display = "block";
		maxBox.style.display = "block";
		
	}
	minBox.onmousemove = function(e){
		var e = e || event;
		var l = e.pageX - minBox.offsetLeft - zheZhao.offsetWidth/2;
		var t = e.pageY - toBig.offsetTop - zheZhao.offsetHeight/2;
		
		var maxL = this.clientWidth - zheZhao.offsetWidth;
		var maxT = this.clientHeight - zheZhao.offsetHeight;
		
		l = l < 0 ? 0 : (l > maxL ? maxL : l);
		t = t < 0 ? 0 : (t > maxT ? maxT : t);
		console.log(l,t)
		zheZhao.style.left = l + "px";
		zheZhao.style.top = t + "px";
		
		//大图除以大盒子的比等于小图除以遮罩的比
		// MaxImgLeft / x = (大图的宽度-大图可视区宽度)/(小图宽度-mask的宽度) = 大图宽度/小图宽度 = 大图可视区宽度 / 小图可视区（mask）宽度
		var bigImgLeft = l * (maxImg.clientWidth - maxBox.clientWidth)/(minBox.clientWidth - zheZhao.offsetWidth);
		var bigImgTop = t * (maxImg.clientHeight - maxBox.clientHeight)/(minBox.clientHeight - zheZhao.clientHeight);
		maxImg.style.left = -bigImgLeft + "px";
		maxImg.style.top = -bigImgTop + "px";
	}

	
	minBox.onmouseout = function(){
		zheZhao.style.display = "none";
		maxBox.style.display = "none";
	}

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
	