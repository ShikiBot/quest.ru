<?php
	$route = $_GET['route'];
	require 'engine/includes/head.php';

	switch ($route)
	{
		case '':
			//require 'engine/includes/main.php';
			//require 'engine/includes/mainbutt.php';
			require 'engine/includes/game.php';
			require 'engine/includes/butt.php';
			break;
		
		case 'result':
			require 'engine/includes/result.php';
			require 'engine/includes/resultbutt.php';
			break;			
	}
?>