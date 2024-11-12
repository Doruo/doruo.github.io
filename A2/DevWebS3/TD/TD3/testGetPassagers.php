<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="/A2/DevWebS3/ressources/css/stylesTD.css">
    <link rel="icon" type="image/x-icon" href="/A2/DevWebS3/TD/TDCOVOITURAGE/ressources/images/favicon.png">
    <title> HAYE Marc - TD3 - Query Passagers </title>
</head>

<body>
<?php
require_once 'Trajet.php';

echo "<h1>Passager :</h1>";

echo "<br>------------------------------------------------- <br>";

echo "<ul>";

foreach (Trajet::getPassagers($_POST['id']) as $utilisateurCourant)
{
    echo "<li>";

    if (!$utilisateurCourant) echo "Utilisateur sans informations";
    else echo $utilisateurCourant->__toString();

    echo "</li>";
}

echo "</ul>";

echo "<br>------------------------------------------------- <br>";
?>

</body>
</html>








