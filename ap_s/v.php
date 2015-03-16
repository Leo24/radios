<?php
include "apconfig.php";
include "ap_api.php";

$logger = new Logger('v.txt');

$ip = getRealIpAddr();
$browser = $_SERVER['HTTP_USER_AGENT']; 
$server = $_SERVER['SERVER_NAME'];

$logger->log(date('m-d-Y H:i:s').';;;'.$server.';;;'.$ip.';;;'.$browser.';;;'.$_GET['ref']); 

echo $_GET["callback"] . "(" . json_encode(array('data'=>'1')) . ")";
?>
