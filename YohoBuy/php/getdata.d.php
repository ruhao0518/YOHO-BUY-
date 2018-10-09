<?php  
	require "conn.php";
/* 
	$result=mysql_query("select * from hot-list");

	$arrdata=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arrdata[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
	}

	echo json_encode($arrdata); */
	$result=mysql_query('select * from details');

	$arrdata=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arrdata[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
	}
	echo json_encode($arrdata);
?>