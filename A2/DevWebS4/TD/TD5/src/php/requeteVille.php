<?php

require_once('Model.php');

// A COMPLETER

// récupération du contenu du champ, passé en get
// ...
$ville = isset($_GET['ville']) ? $_GET['ville'] : '';

// lancement de la requête SQL avec selectByName et
// récupération du résultat de la requête SQL
// ...
$tableau = Model::selectByName($ville);

// affichage en format JSON du résultat précédent
// ...
echo json_encode($tableau);