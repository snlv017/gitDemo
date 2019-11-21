

setInterval(function(){
    //气泡运动
    $(".a-ban-1>img").animate({
        top:40,opacity:0.6,left:240
    },1000);
    $(".a-ban-1>img").animate({top:70,opacity:1,left:260},1000);
    $(".a-ban-2>img").animate({
        top:-70,opacity:0.8,left:20
    },1200);
    $(".a-ban-2>img").animate({top:-40,opacity:1,left:50},1200);
    $(".a-ban-3>img").animate({
        top:-120,opacity:0.8,
    },1000);
    $(".a-ban-3>img").animate({top:-90,opacity:1},1000);
    $(".a-ban-4>img").animate({top:320},1200);
    $(".a-ban-4>img").animate({top:350},1200);
    $(".a-ban-5>img").animate({top:420},1200);
    $(".a-ban-5>img").animate({top:390},1200);
    
},100)

$(window).scroll(function(){
    var a = document.documentElement.scrollTop;
    //console.log(a);
    if(a>=700){
        //console.log($(document).scrollTop())
        $(".a-con-1>img").animate({left:'1%'},1000);
        $(".a-con-2>img").animate({left:'15%'},1000);
        $(".a-con-3>img").animate({left:'29%'},1000);
        $(".a-con-5>img").animate({left:'57%'},1000);
        $(".a-con-6>img").animate({left:'71%'},1000);
        $(".a-con-7>img").animate({left:'85%'},1000);
    }
    if(a>=1200){
        $(".a-anjian li:nth-child(3)").animate({left:390},1000);
        $(".a-anjian li:nth-child(4)").animate({left:540},1000);
        $(".a-anjian li:nth-child(5)").animate({left:690},1000);

        $(".a-anjian li:nth-child(6)").animate({left:220,top:380},1000);
        $(".a-anjian li:nth-child(7)").animate({left:370,top:380},1000);
        $(".a-anjian li:nth-child(8)").animate({left:520,top:380},1000);
        $(".a-anjian li:nth-child(9)").animate({left:670,top:380},1000);

        $(".a-anjian li:nth-child(10)").animate({left:200,top:480},1000);
        $(".a-anjian li:nth-child(11)").animate({left:350,top:480},1000);
        $(".a-anjian li:nth-child(12)").animate({left:500,top:480},1000);
        $(".a-anjian li:nth-child(13)").animate({left:650,top:480},1000);

        $(".a-anjian li:nth-child(14)").animate({left:180,top:580},1000);
        $(".a-anjian li:nth-child(15)").animate({left:330,top:580},1000);
        $(".a-anjian li:nth-child(16)").animate({left:480,top:580},1000);
        $(".a-anjian li:nth-child(17)").animate({left:630,top:580},1000);
    }
    if(a>=1000){
        $("#a-fanhui").css("display","block");
        $("#a-fanhui").click(function(){
            
            document.documentElement.scrollTop=0;
        })
    }
    if(a<=1000){
        $("#a-fanhui").css("display","none");
        $("#a-fanhui").click(function(){
            
            document.documentElement.scrollTop=0;
        })
    }
    //实现a-mishu-2向上滚走
    if(a>=4700){
        $(".a-mishu-2 div:nth-child(1)").animate({top:-100},1000);
        $(".a-mishu-2 div:nth-child(2)").animate({top:100},1000);
    }
});

$(".a-anjian>li").hover(function(){
    $(this).css("width","13%").siblings("li").css("width","12%");
    //console.log($(this)[0].children[0].src);
    $(".a-anjian>p")[0].children[0].src=$(this)[0].children[0].src;
})

//a-gundong-1的移动

setInterval(function(){
    var a_li1=$(".a-gundong-1 li:nth-child(1)")[0];
    var a_li6=$(".a-gundong-1 li:nth-child(6)")[0];
    $(".a-gundong-1")[0].insertBefore(a_li1,a_li6);
    // $(".a-gundong-1 li:nth-child(3)").animate({width:'17%'},1000);
    // $(".a-gundong-1 li:nth-child(3)").animate({width:'19%'},1000);
    // $(".a-gundong-1 li:nth-child(4)").siblings().css("width","17%");



    
},1500)

//a-mumabanner 的轮播

var a_arr=[
    {
        left:"26%",
        top:"240px",
        zIndex:3
    },
    {
        left:"34%",
        top:"220px",
        zIndex:4
    },
    {
        left:"42%",
        top:"200px",
        zIndex:5
    },
    {
        left:"50%",
        top:"220px",
        zIndex:4
    },
    {
        left:"58%",
        top:"240px",
        zIndex:3
    }
];
//console.log(a_arr);
var a_sum=0; //计数arr下标
var a_index=0;
for (var i = 0; i < 5; i++) {
    a_index=i+3;
    $(".a-mumabanner div:nth-child("+a_index+")").animate(a_arr[i],1000);
}
setInterval(function(){
    a_sum==0?a_sum=4:a_sum--;
    for (var i = 0; i <5; i++) {
        a_index=7-i;
        $(".a-mumabanner div:nth-child("+a_index+")").animate(a_arr[a_sum],100);
        a_sum==4?a_sum=0:a_sum++;
    }
    //console.log($(".a-mumabanner div:nth-child(1)"));
},2000);
// a-Jovi-1-1点击 换图
$(".a-Jovi-1-1 ul li").click(function(){
    var a_ind=$(this).index()*-550+"px";
    console.log(a_ind);
    $(".a-Jovi-1-2").css("background-position-y",a_ind);
    $(this).css("border-top","3px solid steelblue").siblings("li").css("border-top","0")
});
setInterval(function(){
    $(".a-xunzhuang div:nth-child(1)").animate({left:630,top:200},1000,function(){
        $(".a-xunzhuang div:nth-child(1)").animate({left:890,top:350},1000,function(){
            $(".a-xunzhuang div:nth-child(1)").animate({left:630,top:500},1000,function(){
                $(".a-xunzhuang div:nth-child(1)").animate({left:400,top:350},1000)
            })
        })
    })
    $(".a-xunzhuang div:nth-child(2)").animate({right:630,top:500},1000,function(){
        $(".a-xunzhuang div:nth-child(2)").animate({right:890,top:350},1000,function(){
            $(".a-xunzhuang div:nth-child(2)").animate({right:630,top:200},1000,function(){
                $(".a-xunzhuang div:nth-child(2)").animate({right:400,top:350},1000)
            })
        })
    })
},4000)
$(".a-erweima div:nth-child(3)").hover(function(){
    $(".a-erweima div:nth-child(3)").animate({right: 300},1000,function(){
        $(".a-erweima div:nth-child(2)").stop().slideDown(100);
        $(".a-erweima div:nth-child(4)").stop().fadeIn(500);
    })
},function(){
    $(".a-erweima div:nth-child(3)").animate({right: 150},1000,function(){
        $(".a-erweima div:nth-child(2)").stop().slideUp(500);
        $(".a-erweima div:nth-child(4)").stop().fadeOut(100);
    });
})
