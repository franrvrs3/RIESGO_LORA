<?php  

// Llamando a los campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

// Datos para el correo
$destinatario = "franrivera3@hotmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n\n";
$carta .= "Correo: $correo \n\n";
$carta .= "Teléfono: $telefono \n\n";
$carta .= "Mensaje: $mensaje";

// Enviando Mensaje
mail($destinatario, $asunto, $carta);
header('Location:mensaje-de-envio.html');

?>