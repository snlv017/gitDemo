<?php
	$conn=mysqli_connect("localhost","root","","vivo");
	$sql="select * from `commodityinfo`";
	mysqli_query($conn,"set names utf8");
	$res=mysqli_query($conn,$sql);
	while($arr = mysqli_fetch_assoc($res)){
		$brr[]=$arr;
	}
	if(empty($brr)){
        echo 0;
	  }else{
	    echo json_encode($brr);
	  }
?>