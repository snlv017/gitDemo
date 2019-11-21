//实现图片的缩放
function a_zoo(){
	$(".a-shouji ul").on("mouseover","li",function(){
	    $(this).find("img:nth-child(1)").stop().animate({width:"120%",left:"-10%"},500);
	})
	$(".a-shouji ul").on("mouseout","li",function(){
	    $(this).find("img:nth-child(1)").stop().animate({width:"100%",left:"0%"},500);
	})
}
// console.log($(".a-box")[0].offsetHeight);  加载时撑开的box
//获取数据库的图片；
//懒加载图片；
var ulAll="";

function getJSONs(){
    $.getJSON("a_two11.json", function(res){
            //console.log(res);

            for(var i=0;i<res.length-2;i+=3){ 
                 
                ulAll +=`<ul>
                            <li ><img src="${res[i].src}"><img src="${res[i].sc}" alt=""></li>
                            <li ><img src="${res[i+1].src}"><img src="${res[i+1].sc}" alt=""></li>
                            <li ><img src="${res[i+2].src}"><img src="${res[i+2].sc}" alt=""></li>
                            </ul>
                        `;
             
                 $(".main").html(ulAll);
                 a_zoo();
            }
    });
    
}
    var a_ind=0;
    $(window).scroll(a_gd);
    function a_gd(){
        var a_stop = document.documentElement.scrollTop;
        var a_STOP=a_stop+window.innerHeight+10;
        // console.log($(".a-box")[0].offsetHeight);
        // console.log($(".main")[0]);
        if(a_ind<2){
            if(a_STOP>$(".a-box")[0].offsetHeight){
                 getJSONs();
              console.log("到了");
              a_ind++;
            }
        }
         
        }
    




