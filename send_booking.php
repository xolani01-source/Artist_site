<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "Mandlamswazi10@gmail.com "; // <-- Your email here
    $subject = "New Booking Request";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $date = $_POST['event-date'];
    $type = $_POST['event-type'];
    $message = $_POST['message'];

    $body = "Name: $name\nEmail: $email\nDate: $date\nEvent Type: $type\nMessage: $message";

    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)){
        echo "Thanks $name! Your booking request has been sent.";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
}
?>
