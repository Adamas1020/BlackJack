<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = htmlspecialchars(trim(S_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $age = (int)$_POST["age"];
    if(strlen($name) < 3){
        echo "El nombre debe tener al menos 3 caracteres.<br>";
    }elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo "Email no valido.<br>";
    }elseif($age < 10 || $age > 99){
        echo "La edad debe estar entre 10 y 99 años.<br>";
    }else{
        echo "Formulacio enviado con Exito.<br>"
        echo "Nombre: $name<br>Email: $email<br>Edad: $age";
    }
}