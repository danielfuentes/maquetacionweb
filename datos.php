<?php 
    //var_dump('<pre>');
    //var_dump($_POST);
    //var_dump('</pre>');
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $pais = $_POST['pais'];

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Archivo en PHP</title>
</head>
<body>
    <h1>Muchas gracias <?php echo $nombre.' '.$apellido ?> </h1>
    <h2>Pronto nos comunicaremos con usted...</h2>
    <hr>
    <a href="./index.html">Inicio</a>
    
</body>
</html>
