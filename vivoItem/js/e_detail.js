
var e_imgList = $(".e_imgList");
var e_banner = $(".e_banner");
var e_bListLi = document.getElementById("e_navlist").children;

/*自动播放*/
var index = 0;
function autoPlay() {
    if(index == 4){
        index = 0;
        e_imgList.css({
            left: 0
        })
    }else{
        index++;
    }
    move();
}
var timer = setInterval(autoPlay,1200);

/*鼠标移入*/
e_banner.mouseover(function () {
    clearInterval(timer);
})
e_banner.mouseout (function(){
    timer = setInterval(autoPlay,1200);
})


/*点击手动轮播*/
var e_toleft = $(".e_toleft");
var e_toright = $(".e_toright");
e_toleft.click(function () {

    if(index == 0){
        index = 3;
        e_imgList.css({
            left: "-7680px"
        })
    }else{
        index--;
    }
    move();
})
e_toright.click(function () {

    if(index == 4){
        index = 1;
        e_imgList.css({
            left: 0
        })
    }else{
        index++;
    }

    move();
})

/*移入小图标*/
for (let i = 0; i < e_bListLi.length; i++) {
    e_bListLi[i].onmouseover = function(){
        index = i;
        move();
    }
}

function move() {
    for (var i = 0; i < e_bListLi.length; i++) {
        e_bListLi[i].className = "";
    }
    e_imgList.animate({left:-1920*index});
    e_bListLi[index == 4 ? 0 : index].className = "e_navactive";
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


