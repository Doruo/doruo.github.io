<?php

use App\Covoiturage\Lib\ConnexionUtilisateur;
use App\Covoiturage\Modele\DataObject\Voiture;

/** @var Voiture $voiture */
$immatriculationHTML = htmlspecialchars($voiture->formatTableau()['immatriculationTag']);
$immatriculationURL = urlencode($voiture->formatTableau()['immatriculationTag']);
$marqueHTML = htmlspecialchars($voiture->formatTableau()['marqueTag']);
$couleurHTML = htmlspecialchars($voiture->formatTableau()['couleurTag']);
$nbSiegesHTML = htmlspecialchars($voiture->formatTableau()['nbSiegesTag']);

echo "<h1>~ Voiture ~</h1>" .
    "<h2>Immatriculation : " . $immatriculationHTML ."</h2>"
    . "<h2>Marque : " . $marqueHTML ."</h2>"
    . "<h2>Couleur " . $couleurHTML ."</h2>"
    . "<h2>Avec " . $nbSiegesHTML . " sièges </h2>";

if (ConnexionUtilisateur::estConnecte() && ConnexionUtilisateur::estAdministrateur()){
    echo'<h1><a href="../web/controleurFrontal.php?controleur=voiture&action=afficherFormulaireMiseAJour&immatriculation='
        . $immatriculationURL . '">Modifier</a></h1>';

    echo'<h1><a href="../web/controleurFrontal.php?controleur=voiture&action=supprimer&immatriculation='
        . $immatriculationURL . '">Supprimer</a></h1>';
}