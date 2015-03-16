<?php


require 'phpmailer/PHPMailerAutoload.php';

class Logger {
     
    protected $fh;
     
    public function __construct($flogname) {
	$fname = date("Y")."_".date("m")."_".$flogname; 	
	$this->fh = fopen($fname, 'a+');
    }
     
    public function log($msg) {
    if(!$this->fh) {
    throw new Exception('Unable to open log file for writing');
    }
    if(fwrite($this->fh, $msg . "\n") === false) {
    throw new Exception('Unable to write to log file.');
    }
    }
     
    public function __destruct() {
    fclose($this->fh);
    }
}

function authSendEmail($from, $namefrom, $to, $nameto, $subject, $message)  
{ 

$date = date('m/d/Y h:i:s a ', time());

global $smtpServer ;  
global $port;  
global $username ;  
global $password ; 
global  $is_ssl;

$mail = new PHPMailer();

$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->Debugoutput = 'html';
$mail->CharSet = 'UTF-8';
$mail->Host = $smtpServer;
$mail->Port = $port;  

if ($is_ssl==1)
$mail->SMTPSecure = "ssl"; 

$mail->SMTPAuth = true;
$mail->Username = $username;
$mail->Password = $password;
$mail->setFrom($from,$namefrom);
$mail->addReplyTo($from);
$mail->addAddress($to, $nameto);
$mail->Subject = $subject;
$mail->msgHTML($message);
 


	if (!$mail->send()) {

		//echo "Mailer Error: " . $mail->ErrorInfo;
		file_put_contents('send_.log', $date.$mail->ErrorInfo.'\t\n', FILE_APPEND | LOCK_EX);
		return 1;
	} else {
		return 0;
	}
}


function sendsms2($api,$cellphone,$text){

$text =  rus2translit($text);

if  (strlen($text)>150){
	$text  = substr($text, 0, 150);
}

$body = file_get_contents("http://sms.ru/sms/send?api_id=".$api."&to=".$cellphone."&text=".urlencode($text));

} 

function rus2translit($string) {

    $converter = array(

        'а' => 'a',   'б' => 'b',   'в' => 'v',

        'г' => 'g',   'д' => 'd',   'е' => 'e',

        'ё' => 'e',   'ж' => 'zh',  'з' => 'z',

        'и' => 'i',   'й' => 'y',   'к' => 'k',

        'л' => 'l',   'м' => 'm',   'н' => 'n',

        'о' => 'o',   'п' => 'p',   'р' => 'r',

        'с' => 's',   'т' => 't',   'у' => 'u',

        'ф' => 'f',   'х' => 'h',   'ц' => 'c',

        'ч' => 'ch',  'ш' => 'sh',  'щ' => 'sch',

        'ь' => '\'',  'ы' => 'y',   'ъ' => '\'',

        'э' => 'e',   'ю' => 'yu',  'я' => 'ya',

        

        'А' => 'A',   'Б' => 'B',   'В' => 'V',

        'Г' => 'G',   'Д' => 'D',   'Е' => 'E',

        'Ё' => 'E',   'Ж' => 'Zh',  'З' => 'Z',

        'И' => 'I',   'Й' => 'Y',   'К' => 'K',

        'Л' => 'L',   'М' => 'M',   'Н' => 'N',

        'О' => 'O',   'П' => 'P',   'Р' => 'R',

        'С' => 'S',   'Т' => 'T',   'У' => 'U',

        'Ф' => 'F',   'Х' => 'H',   'Ц' => 'C',

        'Ч' => 'Ch',  'Ш' => 'Sh',  'Щ' => 'Sch',

        'Ь' => '\'',  'Ы' => 'Y',   'Ъ' => '\'',

        'Э' => 'E',   'Ю' => 'Yu',  'Я' => 'Ya',

    );

    return strtr($string, $converter);

}


function getRealIpAddr()
{
  if (!empty($_SERVER['HTTP_CLIENT_IP']))
  //check ip from share internet
  {
    $ip=$_SERVER['HTTP_CLIENT_IP'];
  }
  elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
  //to check ip is pass from proxy
  {
    $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
  }
  else
  {
    $ip=$_SERVER['REMOTE_ADDR'];
  }
  return $ip;
}
