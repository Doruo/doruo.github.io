<?php
    require_once 'Voiture.php';

    $immatriculation = $_GET['immatriculation'];
    $marque = $_GET['marque'];
    $couleur = $_GET['couleur'];
    $nbSieges = $_GET['nbSieges'];

    $voiture = new Voiture(
        $immatriculation,
        $marque, 
        $couleur,
        $nbSieges
    );

    $voiture->ajouter();
    echo "Voiture Créé : <br>" . $voiture->__toString();