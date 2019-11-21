<?php
	
	$b_account=$_POST['b_account'];
	$b_pwd=$_POST['b_pwd'];
	$b_phone=$_POST['b_phone'];
	$conn=mysqli_connect("localhost","root","","vivo");
	mysqli_query($conn,"set names utf8");
	$sql="INSERT INTO `tb_user`(`uaccount`, `phone`, `pwd`) VALUES ('$b_account','$b_phone','$b_pwd')";
	$result=mysqli_query($conn,$sql);
    if($result){
        $message="注册成功";
    }else{
        $message="注册失败";
    }
    echo "<script>alert('$message');location.href='../index.html';</script>";
?>