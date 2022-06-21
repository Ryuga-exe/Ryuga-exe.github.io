<?php
   $name =  $_POST['name'];
   $visitor_email = $_POST["email"];
   $message = $_POST['message'];

   $email_from = 'HonkaiImpact3Fandom.com'
   $email_subject = "new Form Submission"
   $email_body = "User Name: $name.\n".
                 "User Email: $visitor_email.\n".
                 "user message: $message.\n";
   $to = "captainhonkaiimpact@gmail.com";
   $headers = "from : $email_from \r\n";
   $headers .= "Reply-to: $visitor_email \r\n";
   
   mail($to,$email_subject,$email_body,$headers);
   header("location: index.html");
?>