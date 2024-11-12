<?php

use App\Covoiturage\Lib\ConnexionUtilisateur;
use App\Covoiturage\Modele\DataObject\Voiture;

echo '<h1>~ Voitures ~</h1>';

if (ConnexionUtilisateur::estConnecte())
    echo '<h1><a href="../web/controleurFrontal.php?action=afficherFormulaireCreation">Ajouter une Voiture</a></h1>';

/** @var array $voitures */
/** @var Voiture $voiture */
foreach ($voitures as $voiture)
{
    $immatrictulationHTML = htmlspecialchars($voiture->formatTableau()['immatriculationTag']);
    $immatrictulationURL = rawurlencode($voiture->getImmatriculation());

    echo "<div class=\"encadre\"> ";
    echo '<h1>Immatriculation</h1>';
    echo
        '<h1>'.
        '<a href="../web/controleurFrontal.php?action=afficherDetail&controleur=voiture&immatriculation='.$immatrictulationURL .'">'
        . $immatrictulationHTML . '</a></h1>';

    echo "</div> ";
}


