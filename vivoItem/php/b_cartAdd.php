<?php
	$id=$_POST['id'];
	$num=$_POST['num'];
	$conn=mysqli_connect("localhost","root","","vivo");
    mysqli_query($conn,"set names utf8");
    $sql="update shopcart set num='$num' where id='$id'";
    $res=mysqli_query($conn,$sql);
    if($res){
    	echo 1;
    }else{
    	echo 0;
    }
?>