<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="/A2/DevWebS3/ressources/css/stylesTD.css">
    <link rel="icon" type="image/x-icon" href="/A2/DevWebS3/TD/TDCOVOITURAGE/ressources/images/favicon.png">
    <title> HAYE Marc - TD3 - Query Trajet </title>
</head>

<body>

<h1>TD3 - Requêtes Table Trajet </h1>

<?php
require_once 'Trajet.php';

echo "<h1>SELECT * FROM trajet;</h1>";

echo "<br>------------------------------------------------- <br>";

echo "Liste des Trajets :";
echo "<br> ";

echo "<ul>";

foreach (Trajet::getTrajets() as $trajetCourant)
{
    echo "<li>";

    if (!$trajetCourant) echo "Trajet sans informations";
    else echo $trajetCourant->__toString();

    echo "</li>";
}

echo "</ul>";

echo "<br>------------------------------------------------- <br>";
?>

</body>
</html>








