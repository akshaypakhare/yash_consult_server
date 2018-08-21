<?php
require("PHPMailerAutoload.php");
require("class.phpmailer.php");
require("class.smtp.php");
  //session_start();

  
  $name = $_SESSION['name'];
  $email = $_SESSION['email'];
  $mobile = $_SESSION['mobile']; 
  $file1 = $_SESSION['file1']; 


// sending email to user.
$mail = new PHPMailer;

/*$mail->SMTPDebug = 3;    
$mail->SMTPDebug = 1;                           
$mail->isSMTP();            
$mail->Host = "relay-hosting.secureserver.net";
$mail->SMTPAuth = false;      

$mail->sslAuth= false;   
//$mail->Host = "relay-hosting.secureserver.net";
  */                       
 // Your Gmail credentials
$mail->Username = "yashconsult29@gmail.com";                 
$mail->Password = "Mhealthy09@";                           
/*
$mail->SMTPSecure = "ssl";                           
$mail->Port = 25;   
*/                               
$mail->From = 'yashconsult29@gmail.com';
$mail->FromName = "yashconsult.com";
$mail->addAddress($email , "Recepient Name");
$mail->isHTML(true);
$mail->Subject = "Thank you for approaching Yash Consult.";
$mail->Body =  'Thank you '. $name.' for uploading your CV on Yash Consult.' ;

if(!$mail->send()) 
{ 

// echo "Mailer Error: " . $mail->ErrorInfo;
} 
else
{
 
   // echo "Mail Sent Successfully";
}

// sending email to admin.
$adminMail = new PHPMailer;  

                            
//$adminMail->Host = "relay-hosting.secureserver.net";       
/*
$adminMail->SMTPDebug = 3;    
$adminMail->SMTPDebug = 1;                           
$adminMail->isSMTP();            
$adminMail->Host = "relay-hosting.secureserver.net";
$adminMail->SMTPAuth = false;      
$adminMail->sslAuth= false;  */                
 // Your Gmail credentials
$adminMail->Username = "yashconsult29@gmail.com";                 
$adminMail->Password = "Mhealthy09@";                           
/*
$adminMail->SMTPSecure = "ssl";                           
$adminMail->Port = 25;        */                               
$adminMail->From = 'yashconsult29@gmail.com';
$adminMail->FromName = "yashconsult.com";
$adminId = "yashconsult29@gmail.com";
$adminMail->addAddress($adminId , "Recepient Name");
$fileToUpload='uploads/'.$file1;
if(file_exists($fileToUpload)){
$adminMail->AddAttachment($fileToUpload);
}
$adminMail->isHTML(true);
$adminMail->Subject = "Congratulations! " . $name. " has approached Yash Consult." ;
$adminMail->Body =  'Name :'. $name.'<br>' . 'Email :' . $email. '<br>' . 'Mobile :' . $mobile;

	if(!$adminMail->send()){
		 //echo "Mailer Error: " . $adminMail->ErrorInfo;
	}
   
?>