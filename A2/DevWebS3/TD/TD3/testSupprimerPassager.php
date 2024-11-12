<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="/A2/DevWebS3/ressources/css/stylesTD.css">
    <link rel="icon" type="image/x-icon" href="/A2/DevWebS3/TD/TDCOVOITURAGE/ressources/images/favicon.png">
    <title> HAYE Marc - TD3 - Suppression Passager </title>
</head>

<body>
<?php
require_once 'Trajet.php';

echo "<h1>Suppression Passager :</h1>";

echo "<br>------------------------------------------------- <br>";

if (Trajet::supprimerPassager($_POST['trajetId'],$_POST['passagerLogin']))
    echo "Suppresion du passager " . $_POST['passagerLogin'] . " du trajet " . $_POST['trajetId'];

else echo "Erreur en essayant de supprimer passager " . $_POST['passagerLogin'] . " du trajet " . $_POST['trajetId'];

echo "<br>------------------------------------------------- <br>";
?>

</body>
</html>








