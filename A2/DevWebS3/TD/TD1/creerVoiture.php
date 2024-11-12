<?php
    require_once 'Voiture.php';

    $prenom = $_POST['prenom'];
    $immatriculation = $_POST['immatriculation'];
    $marque = $_POST['marque'];
    $couleur = $_POST['couleur'];
    $nbSieges = $_POST['nbSieges']; 

    $voiture = new Voiture(
        $prenom,
        $marque, 
        $couleur, 
        $immatriculation,
        $nbSieges
    );

    echo "Voiture Créé : <br>" . $voiture->__toString();