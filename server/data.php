<?php



class ajaxValidate {

	function formValidate() {
		
		require 'config.php';	
		
		$return = "Error";
		$pw = @$_POST['pw'];
		$bereich = @$_POST['b'];

		if($pass == $pw && $bereich == 'tierpark') 
		{
			$return = $path.$file_park_target;
		}		

		if($pass == $pw && $bereich == 'klettern') 
		{
			$return = $path.$file_kletter_target;
		}
		//Return json encoded results
		return ($return);
	}

}

$ajaxValidate = new ajaxValidate;
echo $ajaxValidate->formValidate();
?>
