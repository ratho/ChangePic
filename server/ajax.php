<?php



class ajaxValidate {

	function formValidate() {
		
		require 'config.php';	
		
		$return = "Error";
		$pw = @$_POST['pw'];
		$bereich = @$_POST['b'];
		$offen = @$_POST['o'];

		if($pass == $pw && $bereich == 'klettern' && $offen == 'closed') 
		{
			if (copy($path.$file_kletter_closed, $path.$file_kletter_target)) {
			    $return = "OK";
			}
		}		
		if($pass == $pw && $bereich == 'klettern' && $offen == 'open') 
		{
			if (copy($path.$file_kletter_open, $path.$file_kletter_target)) {
			    $return = "OK";
			}
		}
			
		if($pass == $pw && $bereich == 'tierpark' && $offen == 'closed') 
		{
			if (copy($path.$file_park_closed, $path.$file_park_target)) {
			    $return = "OK";
			}
		}	
		if($pass == $pw && $bereich == 'tierpark' && $offen == 'open') 
		{
			if (copy($path.$file_park_open, $path.$file_park_target)) {
			    $return = "OK";
			}
		}

		//Return json encoded results
		return json_encode($return);
	}

}

$ajaxValidate = new ajaxValidate;
echo $ajaxValidate->formValidate();
?>
