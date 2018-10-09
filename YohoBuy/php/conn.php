<?php  
	/* header('content-type:text/html;charset=utf-8');
	//定义常量：值不能改变
	define('HOSTNAME','localhost');
	define('USERNAME','root');
	define('PASSWORD','');
	$conn=@mysql_connect(HOSTNAME,USERNAME,PASSWORD);
	if(!$conn){
		die('数据库链接失败:'.mysql_error());
	}

	mysql_select_db('yoho');
	mysql_query('SET NAMES UTF8'); */
	header('content-type:text/html;charset=utf-8');
	define('HOSTNAME','localhost');
	define('USERNAME','root');
	define('PASSWORD','');
	$conn=@mysql_connect(HOSTNAME,USERNAME,PASSWORD);
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}
	mysql_select_db('yoho');
	mysql_query('set names utf8');

?>