<?php

if (isset($_POST['submit'])) {
    $name =$_POST['name'];
    $emailForm =$_POST['mail'];
    $message =$_POST['message'];

    $mailTo = "captainhonkaiimpact@gmail.com";
    $header = "From: ".$mailFrom;
    $txt = "You have a message".$name".\n\n".$message;

    mail($mailTo, $name, $txt, $headers);
} 
?>