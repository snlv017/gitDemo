$("iframe:eq(0)").mouseover(function(){
	$(this).height(406);
})
$("iframe:eq(0)").mouseout(function(){
	var _this=this;
	setTimeout(function(){
		$(_this).animate({"height":100});
	},500)
})
var allResource=[],cartResource=[],priceArr=[],numArr=[];
$.ajax({
	type:"post",
	url:"../php/b_getCart.php",
	data:{
		account:getCookieByName("b_account")
	},
	success(cartRes){
		cartResource=cartRes=JSON.parse(cartRes);
		
		$.ajax({
			type:"post",
			url:"../php/b_getAllSource.php",
			success(res){
				allResource=res=JSON.parse(res);
				var str="",resource=[];
				for(var i=0;i<cartResource.length;i++){
					var styleId=cartResource[i].productStyleId||0;
					var colorId=cartResource[i].commodityColorId;
					var num=cartResource[i].num;
					
					for(var j=0;j<allResource.length;j++){
						if(allResource[j].id==cartResource[i].commodityId){
							resource=allResource[j];
							break;
						}
					}
					priceArr.push(JSON.parse(resource.price)[styleId]);
					numArr.push(num);
					var styleObj=[""];
						if(!!resource.productStyle){
							styleObj=JSON.parse(resource.productStyle);
						}
					
					str+=`<ul class='clearfix'><li class='d_price-col'><input type='checkbox' class='d_chekbox'/></li><li><img src='${JSON.parse(resource.commodityPic)[colorId]}'/><a href='#' class='d_goods-link'>${resource.tradeName}${styleObj[styleId]}</a><p>颜色：${JSON.parse(resource.commodityColor)[colorId]}</p></li><li class='d_price-col d_pricet'>${JSON.parse(resource.price)[styleId]}</li><li class='d_price-col d_num_box'><a class='reduce'>-</a><input index='${cartResource[i].id}' type='text' value='${num}'/><a class='add'>+</a></li><li class='d_price-col discount'>0</li><li class='d_price-col d_jifen'>${parseInt(JSON.parse(resource.price)[styleId]*num/10)}</li><li class='d_price-col d_sum'>${JSON.parse(resource.price)[styleId]*num}</li><li class='d_price-col d_delect'><a class='del' href='#'>删除</a></li></ul>`;
					
				}
				$(".d_order-table>div:eq(0)").html(str);
				var del=getAllElementsByClassName("del");
				for(var i=0;i<del.length;i++){
					setPrice(priceArr[i],numArr[i],del[i]);
				}
				getTotal();
				$(".reduce").click(function(){
					var cId=$(this).parent().find("input").attr("index");
					var n=$(this).parent().find("input").val();
					var p=$(this).parents("ul").find("li:eq(2)").html();
					
					if(n>0){
						n--;
						$(this).parent().find("input").val(n);
						setPrice(p,n,this);
						getTotal();
						$.ajax({
							type:"post",
							url:"../php/b_cartAdd.php",
							data:{
								id:cId,
								num:n
							}
						});
					}else{
						if(confirm("确定要从购物车删除该商品吗？")){
							$(this).parents("ul").remove();
							$.ajax({
								type:"post",
								url:"../php/b_delCart.php",
								data:{
									id:cId
								}
							});
						}
					}
					
					
					
				})
				$(".del").click(function(){
					var cId=$(this).parents("ul").find("li:eq(3)").find("input").attr("index");
					if(confirm("确定要从购物车删除该商品吗？")){
							$(this).parents("ul").remove();
							$.ajax({
								type:"post",
								url:"../php/b_delCart.php",
								data:{
									id:cId
								}
							});
							$(this).parents("ul").remove();
						}
					
				})
				$(".add").click(function(){
					var cId=$(this).parent().find("input").attr("index");
					var n=$(this).parent().find("input").val();
					var p=$(this).parents("ul").find("li:eq(2)").html();
					n++;
					setPrice(p,n,this);
					getTotal()
					$(this).parent().find("input").val(n);
					$.ajax({
						type:"post",
						url:"../php/b_cartAdd.php",
						data:{
							id:cId,
							num:n
						}
					});
				})
			}
			
		});
	}
});
$(".d_cart-head input").change(function(){
	$(".d_order-table>div input[type=checkbox]").attr("checked",$(this).prop("checked"));
	getTotal();
})
$(".d_order-table>div").on("click","input[type=checkbox]",function(){
	if($(this).prop("checked")){
		if(isChecked()){
			$(".d_cart-head input").attr("checked",true);
		}
	}else{
		console.log(3)
		$(".d_cart-head input").attr("checked",false);
	}
	getTotal();
})
$(".d_foot ul li:eq(0) a").click(function(){
	if(confirm("确认删除所选商品吗？")){
		var cId="",checkItem=[];
		$(".d_order-table>div input[type=checkbox]").each(function(index,item){
			if($(item).prop("checked")){
				cId+=$(item).parents("ul").find("li:eq(3) input").attr("index")+",";
				checkItem.push($(item).parents("ul"));
			}
		})
		cId=cId.replace(/,$/,"");
		$.ajax({
			type:"post",
			url:"../php/b_delCart.php",
			data:{
				id:cId
			},
			success(res){
				if(res==1){
					for(var i=0;i<checkItem.length;i++){
						checkItem[i].remove();
						getTotal();
					}
				}
			}
		});
	}
})
function isChecked(){
	var flag=true;
	$(".d_order-table>div input[type=checkbox]").each(function(index,item){
		if($(item).prop("checked")){
			
		}else{
			flag=false;
		}
	})
	return flag;
}
function setPrice(up,num,obj){
	up=Number(up);
	num=Number(num);
	var sum=up*num;
	var yh=0;
	var jf=parseInt(sum/10);
	$(obj).parents("ul").find(".d_jifen").html(jf);
	yh=Math.floor(sum/2000)*-400;
	$(obj).parents("ul").find(".discount").html(yh);
	sum+=yh;
	$(obj).parents("ul").find(".d_sum").html(sum);
}
function getTotal(){
	var sum=0,yh=0,index=0;
	var sums=getAllElementsByClassName("d_sum");
	var discount=getAllElementsByClassName("discount");
	for(var i=0;i<sums.length;i++){
		if($(sums[i]).parents("ul").find("input[type=checkbox]").prop("checked")){
			sum+=Number(sums[i].innerText);
			yh+=Number(discount[i].innerText);
			index++;
		}
	}
	$(".d_sum-area .d_num").html(index);
	$(".d_sum_prict").html("￥"+sum);
	$(".settlement span:eq(0)").html("￥"+sum);
	$(".settlement span:eq(1)").html("￥"+yh);
	
}
