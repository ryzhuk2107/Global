<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$to = 'ryzhuk2107@gmail.com';

$subject = 'Новая заявка с сайта';

$message = "ФИО: " . $name . "\r\n" .
    "Телефон: " . $phone . "\r\n" .
    "E-mail: " . $email ;

// На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
$message = wordwrap($message, 70, "\r\n");

$headers = "From: $email " . "\r\n" .
    "Reply-To: $to " . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);

header('Location: index.html');
?>