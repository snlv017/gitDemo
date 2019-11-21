<?php
	$sId=$_POST['sId'];
	$conn=mysqli_connect("localhost","root","","vivo");
	mysqli_query($conn,"set names utf8");
	$sql="select * from headInfo where series='$sId'";
	$result=mysqli_query($conn,$sql);
    while($arr = mysqli_fetch_assoc($result)){
      $brr[] = $arr;
    }

    if(empty($brr)){
      echo 0;
    }else{
      echo json_encode($brr);
    }
?>