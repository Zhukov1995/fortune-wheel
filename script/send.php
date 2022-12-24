<?php
$fio = $_POST['fio'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$prize = $_POST['prize'];
$fio = htmlspecialchars($fio);
$tel = htmlspecialchars($tel);
$email = htmlspecialchars($email);
$prize = htmlspecialchars($prize);
$fio = urldecode($fio);
$tel = urldecode($tel);
$email = urldecode($email);
$prize = urldecode($prize);
$fio = trim($fio);
$tel = trim($tel);
$email = trim($email);
$prize = trim($prize);
//echo $fio;
//echo "<br>";
//echo $tel;
//echo "<br>";
//echo $email;
//echo "<br>";
//echo $prize;

$subject = "Заявка с сайта Колесо фортуны";

$message = "
ФИО: $fio \n
Телефон: $tel \n
Почта $email \n
Выигрыш: $prize";
if (mail("romanzhukov561@gmail.com", $subject, $message ,"From: romanzhukov561@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
   
} else {
    echo "при отправке сообщения возникли ошибки";
}?>