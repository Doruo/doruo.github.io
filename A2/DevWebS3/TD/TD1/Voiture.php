<?php

use Modele\ConnexionBaseDeDonnees;

class Voiture {

    private string $immatriculation;
    private string $marque;
    private string $couleur;
    private int $nbSieges; // Nombre de places assises

    public function __construct($immatriculation,$marque, $couleur,$nbSieges){
        $this->immatriculation = $immatriculation;
        $this->marque = $marque;
        $this->couleur = $couleur;
        $this->nbSieges = $nbSieges;
    }

    public static function construireDepuisTableau(array $voitureFormatTableau) : Voiture {
        return new Voiture(
            $voitureFormatTableau['immatriculation'],
            $voitureFormatTableau['marque'],
            $voitureFormatTableau['couleur'],
            $voitureFormatTableau['nbSieges'],
        );
    }

    public static function getVoitures() : array{
        $pdoStatement = ConnexionBaseDeDonnees::getInstance()->getPdo()->query("SELECT * FROM voiture");
        $pdoStatement->setFetchMode(PDO::FETCH_ASSOC);

        $voitures = [];
        foreach ($pdoStatement as $voitureTableau) {
            $voitures[] = Voiture::construireDepuisTableau($voitureTableau);
        }
        return $voitures;
    }

    public function __toString() : string{
        return "Voiture " .
            ", immatriculation " . $this->immatriculation
            . " de marque " . $this->marque
            . ", couleur " . $this->couleur
            . ", avec " . $this->nbSieges . " sièges";
    }
}


