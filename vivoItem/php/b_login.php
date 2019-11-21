<?php
	$token = empty($_COOKIE["token"]) ? null : $_COOKIE["token"];
	
	
	if(empty($_POST["b_account"])){//如果返回1说明uname没有值，说明是自动登录过来的
		//获取token的cookie信息，利用token信息来登录操作
		//只要能到这里执行，说明$token一定存在 
		//查询这个$token在数据库中是否存在，如果存在 ，说明是可以通过这个信息登录成功
		$sql = "select * from tb_user where token='$token'";
//		echo $sql;
		$conn=mysqli_connect("localhost","root","","vivo");
		mysqli_query($conn,"set names utf8");
		$result=mysqli_query($conn,$sql);
		$arr = mysqli_fetch_array($result);
		if($arr){//登录成功
			//设置cookie
			setCookie("b_account",$arr["uaccount"],null,"/");
			
			echo "<script>location.href='../index.html';</script>";
		}else{//登录失败
			//说明cookie中原来 的token没有存在 的意义 
			//删除原有的token
			setCookie("token","",time(),"/");
			echo "<script>alert('登录失败');location.href='../index.html';</script>";
		}
		//echo "<script>alert('$text');location.href='../productList.html';</script>";
	}else{//如果返回空说明是从登录框过来的登录操作
		//从登录框 过来的有两种情况
		$b_account = $_POST["b_account"];
		$b_pwd = $_POST["b_pwd"];
		$sql = "select * from tb_user where uaccount='$b_account'";
		$conn=mysqli_connect("localhost","root","","vivo");
		mysqli_query($conn,"set names utf8");
		$result=mysqli_query($conn,$sql);
		$arr = mysqli_fetch_assoc($result);
		if($arr){
			if($arr["pwd"] === $b_pwd){
				//设置cookie
				setCookie("b_account",$b_account,null,"/");
				//判断是否有token的cookie信息
				//如果有修改$uname这个用户名下的toden字段
				if(!!$token){//表示token存在 
					$updateSql = "UPDATE `tb_user` SET `token`='$token' WHERE uaccount='$b_account'";
					$conn=mysqli_connect("localhost","root","","vivo");
					mysqli_query($conn,"set names utf8");
					$res=mysqli_query($conn,$updateSql);
				}
				//如果没有，不作处理，直接登录
				//登录成功
				echo "<script>alert('登录成功');location.href='../index.html';</script>";
			}else{
				//密码有误
				echo "<script>alert('密码有误，请重新登录！');location.href='../lib/b_login.html';</script>";
			}
		}else{
			//用户名不存在 
			echo "<script>alert('用户名不存在，请重新登录！');location.href='../lib/b_login.html';</script>";
		}
		
	}
	
?>