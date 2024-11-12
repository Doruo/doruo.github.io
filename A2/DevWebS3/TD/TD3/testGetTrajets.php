<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="/A2/DevWebS3/ressources/css/stylesTD.css">
    <link rel="icon" type="image/x-icon" href="/A2/DevWebS3/TD/TDCOVOITURAGE/ressources/images/favicon.png">
    <title> HAYE Marc - TD3 - Query Trajets </title>
</head>

<body>
<?php
require_once 'Utilisateur.php';

echo "<h1>Passager :</h1>";

echo "<br>------------------------------------------------- <br>";

echo "<ul>";

foreach (Utilisateur::getTrajets($_POST['login']) as $trajetCourant)
{
    echo "<li>";

    if (!$trajetCourant) echo "Utilisateur sans informations";
    else echo $trajetCourant->__toString();

    echo "</li>";
}

echo "</ul>";

echo "<br>------------------------------------------------- <br>";
?>

</body>
</html>








