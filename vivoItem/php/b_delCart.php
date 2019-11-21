<?php
	$id=$_POST['id'];
	$conn=mysqli_connect("localhost","root","","vivo");
	mysqli_query($conn,"set names utf8");
	$sql="delete from shopcart where id in (".$id.")";
	$res=mysqli_query($conn,$sql);
	if($res){
		echo 1;
	}else{
		echo 0;
	}
?>