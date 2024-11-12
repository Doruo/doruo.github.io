<?php

use App\Covoiturage\Lib\ConnexionUtilisateur;
use App\Covoiturage\Modele\DataObject\Trajet;

echo '<h1>~ Trajets ~</h1>';

if (ConnexionUtilisateur::estConnecte())
    echo'<h1><a href="../web/controleurFrontal.php?controleur=trajet&action=afficherFormulaireCreation">Ajouter un Trajet</a></h1>';

/** @var array $trajets */
/** @var Trajet $trajet */
foreach ($trajets as $trajet)
{
    $idHTML = htmlspecialchars($trajet->getId());
    $idURL = rawurlencode($trajet->getId());

    echo "<div class=\"encadre\"> ";
    echo '<h1>ID</h1>';
    echo
        '<h1>'.
        '<a href="../web/controleurFrontal.php?action=afficherDetail&controleur=trajet&id='.$idURL .'">'
        . $idHTML . '</a></h1>';

    echo "</div> ";
}


