var btn1 = document.getElementsByClassName("btn1")[0];
var btn2 = document.getElementsByClassName("btn2")[0];
var btn3 = document.getElementsByClassName("btn3")[0];
var btn4 = document.getElementsByClassName("btn4")[0];
var btn5 = document.getElementsByClassName("btn5")[0];
var btn6 = document.getElementsByClassName("btn6")[0];
var btn7 = document.getElementsByClassName("btn7")[0];
var btn8 = document.getElementsByClassName("btn8")[0];

var tbtn1 = document.getElementsByClassName("tbtn1")[0];
var tbtn2 = document.getElementsByClassName("tbtn2")[0];
var tbtn3 = document.getElementsByClassName("tbtn3")[0];
var tbtn4 = document.getElementsByClassName("tbtn4")[0];
var tbtn5 = document.getElementsByClassName("tbtn5")[0];
var tbtn6 = document.getElementsByClassName("tbtn6")[0];
var tbtn7 = document.getElementsByClassName("tbtn7")[0];
var tbtn8 = document.getElementsByClassName("tbtn8")[0];

var ebtn1 = document.getElementsByClassName("ebtn1")[0];
var ebtn2 = document.getElementsByClassName("ebtn1")[0];
var ebtn3 = document.getElementsByClassName("ebtn3")[0];
var ebtn4 = document.getElementsByClassName("ebtn4")[0];
var ebtn5 = document.getElementsByClassName("ebtn5")[0];

var uuu = document.getElementsByClassName("uuu")[0];
var im = document.getElementsByClassName("c_im")[0];
// console.log(uuu)
var ooo = document.getElementsByClassName("ooo")[0];
var lli1 = uuu.children;
var lli2 = ooo.children;
function liw(){
    for(let i = 0; i < this.lli1.length; i++){
      lli1[i].style.width = document.body.clientWidth + 'px'
    }
    uuu.style.width = lli1[0].clientWidth * lli1.length + "px"
  }
  liw()
  window.onresize = function(){
    liw()
  }

// function liwidth(){
//     for(let i = 0; i < lli1.length; i++){
//         lli1[i].style.width =  document.body.clientWidth + "px";
//     }
//     uuu.style.width = lli1[0].clientWidth * lli1.length + "px";
// }
//     window.onresize = function(){
//         liwidth();
//     }
    // lli1[i].style.width = document.documentElement.clientWidth || document.body.clientWidth + "px";
var p1 = $id("p1");
var p2 = $id("p2");




    // var w = uuu.clientWidth;
    // console.log(w)
    var time = setInterval(aotoplay,1000)
    var index = 0;
    var w;
function aotoplay(){
    w = lli1[0].clientWidth;
    if(index == 4){
        // animate(uuu,{left:-index*w})
        uuu.style.left = 0;
        index = 1;
    }else{
        index++;
    }
       
    animate(uuu,{left:-index*w})
    
    for(var i = 0; i < 4; i++){
        lli2[i].className = null;
    }
    
    lli2[index == 4? 0 : index].className = "active";
}

im.onmouseover = function(){
    animate(p1,{opacity:100},30)
    animate(p2,{opacity:100},30)
    clearInterval(time);
    
}
im.onmouseout = function(){
    animate(p1,{opacity:0},30)
    animate(p2,{opacity:0},30)
    time = setInterval(aotoplay,1000)
}
p1.onclick = function(){
    // var e = e || event;
    // !!e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
    if(index == 4){
        index = 0;

    }else if(index == 0) {
        index = 0;
    }else{
        index--;
    }
    move();
}
p2.onclick = function(){
    if(index == 4){
        index = 1;
    }else if(index == 3){
        index = 3;
    }else{
        index++;
    }
    move();
}
for(let i = 0 ; i < 4; i++){
    lli2[i].onmouseover = function(){
        index = i;
        move();
    }
}
function move(){
    for(var i = 0 ; i < 4; i++){
        lli2[i].className = null;
    }
    animate(uuu,{left:-index*w});
    lli2[index].className = "active";
}

btn1.onclick = function(){
    // var h = document.documentElement.scrollTop || document.body.scrollTop;
    // h = 4830;
    location.href="#a1";
}
// window.onscroll = function(){
//     var h = document.documentElement.scrollTop || document.body.scrollTop;
//     console.log(h)
// }
btn2.onclick = function(){
    location.href="#a1";
}
btn3.onclick = function(){
    location.href="#a1";
}
btn4.onclick = function(){
    location.href="#a1";
}
btn5.onclick = function(){
    location.href="#a1";
}
btn6.onclick = function(){
    location.href="#a1";
}
btn7.onclick = function(){
    location.href="#a1";
}
btn8.onclick = function(){
    location.href="#a1";
}

tbtn1.onclick = function(){
    location.href="https://shop.vivo.com.cn/laser/confirm?num=1&skuId=102016&laser=true&sourceReferUrl=https%3A%2F%2Fshop.vivo.com.cn%2Fproduct%2F10001518%3FskuId%3D102016#source_from=3";
}
tbtn2.onclick = function(){
    location.href="https://shop.vivo.com.cn/laser/confirm?num=1&skuId=102017&laser=true&sourceReferUrl=https%3A%2F%2Fshop.vivo.com.cn%2Fproduct%2F10001518%3FskuId%3D102016#source_from=3";
}
tbtn3.onclick = function(){
    location.href="https://shop.vivo.com.cn/laser/confirm?num=1&skuId=101959&laser=true&sourceReferUrl=https%3A%2F%2Fshop.vivo.com.cn%2Fproduct%2F10001477%3FskuId%3D101959#source_from=3";
}
tbtn4.onclick = function(){
    location.href="https://shop.vivo.com.cn/laser/confirm?num=1&skuId=102010&laser=true&sourceReferUrl=https%3A%2F%2Fshop.vivo.com.cn%2Fproduct%2F10001477%3FskuId%3D101959#source_from=3";
}
tbtn5.onclick = function(){
    location.href="https://shop.vivo.com.cn/laser/confirm?num=1&skuId=101929&laser=true&sourceReferUrl=https%3A%2F%2Fshop.vivo.com.cn%2Fproduct%2F10001477%3FskuId%3D101959&actCode=QG16e2289c7947698#source_from=3";
}
tbtn6.onclick = function(){
    location.href="https://shop.vivo.com.cn/laser/confirm?num=1&skuId=101960&laser=true&sourceReferUrl=https%3A%2F%2Fshop.vivo.com.cn%2Fproduct%2F10001477%3FskuId%3D101959&actCode=QG16e2289c7947698#source_from=3";
}
tbtn7.onclick = function(){
    location.href="https://shop.vivo.com.cn/laser/confirm?num=1&skuId=100647&laser=true&sourceReferUrl=https%3A%2F%2Fshop.vivo.com.cn%2Fproduct%2F10000467%3FskuId%3D100647#source_from=3";
}
tbtn8.onclick = function(){
    location.href="https://shop.vivo.com.cn/laser/confirm?num=1&skuId=100648&laser=true&sourceReferUrl=https%3A%2F%2Fshop.vivo.com.cn%2Fproduct%2F10000467%3FskuId%3D100647#source_from=3";
}

ebtn1.onclick = function(){
    location.href="https://shop.vivo.com.cn/laser/confirm?num=1&skuId=100792&laser=true&sourceReferUrl=https%3A%2F%2Fshop.vivo.com.cn%2Fproduct%2F10000534%3FskuId%3D100792#source_from=3";
}
ebtn2.onclick = function(){
    location.href="https://shop.vivo.com.cn/laser/confirm?num=1&skuId=100794&laser=true&sourceReferUrl=https%3A%2F%2Fshop.vivo.com.cn%2Fproduct%2F10000534%3FskuId%3D100739&actCode=QG16e1a5ffed00267#source_from=3";
}
ebtn3.onclick = function(){
    location.href="https://shop.vivo.com.cn/laser/confirm?num=1&skuId=101337&laser=true&sourceReferUrl=https%3A%2F%2Fshop.vivo.com.cn%2Fproduct%2F10000759%3FskuId%3D100953#source_from=3";
}
ebtn4.onclick = function(){
    location.href="https://shop.vivo.com.cn/laser/confirm?num=1&skuId=100580&laser=true&sourceReferUrl=https%3A%2F%2Fshop.vivo.com.cn%2Fproduct%2F10000443%3FskuId%3D100579#source_from=3";
}
ebtn5.onclick = function(){
    location.href="https://shop.vivo.com.cn/laser/confirm?num=1&skuId=100579&laser=true&sourceReferUrl=https%3A%2F%2Fshop.vivo.com.cn%2Fproduct%2F10000443%3FskuId%3D100579#source_from=3";
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