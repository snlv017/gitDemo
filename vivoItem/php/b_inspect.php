<?php
	$b_account=$_POST['b_account'];
	$conn=mysqli_connect("localhost","root","","vivo");
    mysqli_query($conn,"set names utf8");
    $sql="select * from tb_user where uaccount='$b_account'";
    $result=mysqli_query($conn,$sql);
    $arr=mysqli_fetch_array($result);
    if(count($arr)){
        echo "0";
    }else{
        echo "1";
    }
?>