<?php

require_once 'ConnexionBaseDeDonnees.php';

class Voiture {

    private string $immatriculation;
    private string $marque;
    private string $couleur;
    private int $nbSieges;

    public function __construct($immatriculation,$marque, $couleur, $nbSieges){
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

    public function ajouter() : bool {

        try {
            $sql = "INSERT INTO voiture VALUES (:immatriculation, :marque,:couleur, :nbSieges)";
            $pdoStatement = ConnexionBaseDeDonnees::getInstance()->getPdo()->prepare($sql);

            $values = array(
                "immatriculation" => $this->immatriculation,
                "marque" => $this->marque,
                "couleur" => $this->couleur,
                "nbSieges" => $this->nbSieges,
            );

            $pdoStatement->execute($values);
        }
        catch (PDOException $PDOException) {return false;}

        return true;
    }

    // REQUETES BASIQUES
    public static function getVoitures() : array{
        $pdoStatement = ConnexionBaseDeDonnees::getInstance()->getPdo()->query("SELECT * FROM voiture");
        $pdoStatement->setFetchMode(PDO::FETCH_ASSOC);

        $voitures = [];
        foreach ($pdoStatement as $voitureTableau)
            $voitures[] = Voiture::construireDepuisTableau($voitureTableau);

        return $voitures;
    }

    // REQUETES PREPAREES AVEC CONDITION (WHERE)
    static public function getVoitureParImmatriculation(string $immatriculation) : ?Voiture {

        $sql = "SELECT * FROM voiture WHERE immatriculation = :immatriculationTag";

        // Préparation de la requête
        $pdoStatement = ConnexionBaseDeDonnees::getInstance()->getPdo()->prepare($sql);

        $values = array(
            "immatriculationTag" => $immatriculation,
        );

        $pdoStatement->execute($values);
        $voitureFormatTableau = $pdoStatement->fetch();

        if (!$voitureFormatTableau) return null;
        return Voiture::construireDepuisTableau($voitureFormatTableau);
    }

    public function __toString() : string{
        return "Voiture " .
            ", immatriculation " . $this->immatriculation
            . " de marque " . $this->marque
            . ", couleur " . $this->couleur
            . ", avec " . $this->nbSieges . " sièges";
    }
}