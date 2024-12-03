<?php

$userName = $_POST["name"];
$userPassword = $_POST["password"];

if($userName == "utilisateur" && $userPassword == "password") {
    header("Location : pages/accueil.html");
}else{
    header("Location : pages/accueil.html");
}