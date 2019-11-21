<?php
	$account=$_POST['account'];
    $conn=mysqli_connect("localhost","root","","vivo");
    mysqli_query($conn,"set names utf8");
    $sql="select * from shopcart where userAccount='$account'";
    $result=mysqli_query($conn,$sql);
    //if($result){
      while($arr = mysqli_fetch_assoc($result)){
        $brr[] = $arr;
      }

      if(empty($brr)){
        echo 0;
      }else{
        echo json_encode($brr);
      }
?>