<?php

use App\Covoiturage\Lib\ConnexionUtilisateur;
use App\Covoiturage\Modele\DataObject\Trajet;

/** @var Trajet $trajet */
$idHTML = htmlspecialchars($trajet->getId());
$idURL = urlencode($trajet->getId());
$departHTML = htmlspecialchars($trajet->getDepart());
$arriveeHTML = htmlspecialchars($trajet->getArrivee());
$dateHTML = htmlspecialchars($trajet->getDate());
$prixHTML = htmlspecialchars( $trajet->getPrix());
$nbPlacesHTML = htmlspecialchars($trajet->getNbPlaces());
$conducteurLoginHTML = htmlspecialchars($trajet->getConducteurLogin());

echo "<h1>~ Trajet ~</h1>" .
    "<h2>Id : " . $idHTML .",</h2>"
    . "<h2>Depart de " . $departHTML ."<h2>"
    . "<h2>Arrivee à " . $arriveeHTML ."<h2>"
    . "<h2>Date : " . $dateHTML ."<h2>"
    . "<h2>Prix : " . $prixHTML . " €<h2>"
    . "<h2>" . $nbPlacesHTML ." Places<h2>"
    . "<h2>Conducteur : " . $conducteurLoginHTML ."<h2>";

if (ConnexionUtilisateur::estConnecte() && ConnexionUtilisateur::estAdministrateur())
{
    echo'<h1><a href="../web/controleurFrontal.php?controleur=trajet&action=afficherFormulaireMiseAJour&id='
        . $idURL . '">Modifier</a></h1>';

    echo'<h1><a href="../web/controleurFrontal.php?controleur=trajet&action=supprimer&id='
        . $idURL . '">Supprimer</a></h1>';
}



