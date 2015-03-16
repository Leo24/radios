<?php  

include "apconfig.php";
include "ap_api.php";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

	$logger = new Logger('orders.txt');
	$logger_sms = new Logger('sms.txt');

	$nameto = "WebMaster";
	$namefrom = $nameto;  


	$message ="";
	$sms="";

	$logmessage ="";

	if (isset($_GET['tmes'])){
		$mtitle ='['.htmlspecialchars($_GET['tmes']).']';
	}	
	
	
	$message .=	"<!DOCTYPE html><html><body><HEAD><meta http-equiv='Content-Type' content='text/html; charset=utf-8'>";
	$message .= "<h1>$mtitle</h1><table style=\"width:400px\">";
	
	$logmessage .= date('m-d-Y H:i:s') .' ;;; '.$mtitle.';;;'; 
		
	foreach ($_GET as $param_name => $param_val) {
		
		$ss=" ".$param_name;

		$pieces = explode(":;:", $param_val);//$param_name
		if ($param_name!='tmes'&& $param_name!='p' && $param_name!='callback' && $param_name!='_'){
			$message .= "<tr><td>".htmlspecialchars($pieces[0])."</td><td> ".htmlspecialchars($pieces[1])."</td></tr>";
			$logmessage .= $pieces[0] ." :;: ".  $pieces[1];
			


		}

		if($sms_phone!=''){
			if($pieces[0]==$sms_phone_fild) $sms .= $pieces[1]." ";
			if($pieces[0]==$sms_name_fild) $sms .= $pieces[1]." ";
		}

	}
		
	$message .= "<tr><td>User IP</td><td> ".getRealIpAddr()."</td></tr>";
	$message .= "<tr><td>Site</td><td> ".$_SERVER['HTTP_HOST']."</td></tr>";	
	$message .="</table></body></html>";
	
	$logger->log($logmessage); 

	if (isset($_GET['tmes'])){
		$subject.='['.htmlspecialchars($_GET['tmes']).']';
	}

	$rez = -1;
	
	if ($v_c==1){
		 $headers  = 'MIME-Version: 1.0' . "\r\n";
		 $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
		 $headers .= 'From: '. $from . "\r\n" . 'Reply-To: '. $from . "\r\n" .  'X-Mailer: PHP/' . phpversion();
		 if (mail($to, $subject, $message, $headers)) 
				{$rez = 0;} else { $rez = 1; }	
	}else {
	$rez = authSendEmail($from, $namefrom, $to, $nameto, $subject, $message);}
	
	if($rez==0)
		{echo $_GET["callback"] . "(" . json_encode(array('error'=>'0')) . ")";}
		else
		{echo $_GET["callback"] . "(" . json_encode(array('error'=>'1')) . ")";} 

	if($sms_phone!=''){
			
		
		$logger_sms->log(date('m-d-Y H:i:s'). "  " .sendsms2($sms_api_key , $sms_phone ,$sms)." PHONE:".$sms_phone." SMS:".$sms);

	}
 
	
}
 

?>  
 
 
 
