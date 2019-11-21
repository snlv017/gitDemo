<?php
	$account=$_POST['account'];
    $cid=$_POST['cId'];
    $num=$_POST['num'];
    $styleId=$_POST['sId'];
    $colorId=$_POST['coId'];
    $conn=mysqli_connect("localhost","root","","vivo");
    mysqli_query($conn,"set names utf8");
    $selectSql="select * from shopcart where userAccount='$account' and commodityId='$cid' and productStyleId='$styleId' and commodityColorId='$colorId'";
    $selectRes=mysqli_query($conn,$selectSql);
    $selectArr=mysqli_fetch_array($selectRes);
    // print_r($selectArr['amount']);
    
    if(count($selectArr)){
        $amount=intval($selectArr['num'])+$num;
        $updateSql="update shopcart set num='$amount' where userAccount='$account' and commodityId='$cid' and productStyleId='$styleId' and commodityColorId='$colorId'";
        $updateRes=mysqli_query($conn,$updateSql);
        if($updateRes){
            echo 1;
        }else{
            echo 0;
        }
    }else{
    	
        $sql="insert into shopcart(userAccount,commodityId,num,productStyleId,commodityColorId) values('$account','$cid',$num,'$styleId',$colorId)";
        
        $result=mysqli_query($conn,$sql);
        if($result){
            echo 1;
        }else{
            echo 0;
        }
    }
?>