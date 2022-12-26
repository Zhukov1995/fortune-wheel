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

$email1 = "dadadancecalendar@gmail.com";
$email2 = "zevs322013@gmail.com";
$email3 = "romanzhukov561@gmail.com";

$message = "
ФИО: $fio \n
Телефон: $tel \n
Почта $email \n
Выигрыш: $prize";
if (mail($email1, $subject, $message ,"From: $email1\r\n"))
    mail($email2, $subject, $message ,"From: $email2 \r\n");
    mail($email3, $subject, $message ,"From: $email3 \r\n");
    header("Location: thanks.html");
} else {
    echo "при отправке сообщения возникли ошибки";
}?>