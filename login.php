<?php

	header("Content-type","text/html;charset=utf-8");
	
	//接收用户的数据（用户名）；
	$userName=$GET.["userName"];
	
	//建立连接 搭桥；
	$con = myaql_connect("localhost:3306","xcy","123456");
	
	//选择数据库
	mysql_select_db("xcy",$con);
	
	//执行SQl语句；
	
	$sql = "select * form userInfo where usreName='".userName."'";
	$result = mysql_query($sql,$con);
	$rows = mysql_num_rows($result);


	//关闭数据库；
	mysql_close($con);
	if($rows=0){
		echo="1";
	}else{
		echo="0";
	}
	
	
?>