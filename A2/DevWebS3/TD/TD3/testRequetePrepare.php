<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="/A2/DevWebS3/ressources/css/stylesTD.css">
    <link rel="icon" type="image/x-icon" href="/A2/DevWebS3/TD/TDCOVOITURAGE/ressources/images/favicon.png">
    <title> HAYE Marc - Test Query PHP </title>
</head>

<body>

<h1>TD3 - Requêtes Préparées </h1>

<?php

require_once 'Voiture.php';

$voiture = new Voiture("MTP34","Tesla","Rose",5);

echo '<h1>SELECT * FROM voiture WHERE immatriculation = KL890MB</h1>';

var_dump(Voiture::getVoitureParImmatriculation("KL890MN"));
?>

</body>
</html>








