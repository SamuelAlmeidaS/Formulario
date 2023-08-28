<?php 
require '../config.php';
$name = filter_input(INPUT_POST,'name', FILTER_SANITIZE_SPECIAL_CHARS);
$password = filter_input(INPUT_POST, 'password');


if($name && $password){
    $sql = $pdo->prepare("SELECT * FROM formulario WHERE email =:email");
    $sql->bindValue(":email", $email);
    $sql->execute();

    if($sql->rowCount() > 0){
        header("location: dashboard.php");
        exit;
    } else {
        header("location: index.php");
        exit;
    }
}

?>