<?php
namespace App\Covoiturage\Modele\Repository;
use App\Covoiturage\Modele\DataObject\Trajet;

class TrajetRepository extends AbstractRepository{

    /** ------------------- CREATE ------------------- */

    protected function construireDepuisTableau(array $objetFormatTableau) : Trajet {
        return new Trajet(
            $objetFormatTableau["id"],
            $objetFormatTableau["depart"],
            $objetFormatTableau["arrivee"],
            $objetFormatTableau["date"],
            $objetFormatTableau["nbPlaces"],
            $objetFormatTableau["prix"],
            $objetFormatTableau["conducteurLogin"]
        );
    }

    protected function getNomTable(): string {return "trajet";}

    protected function getNomClePrimaire(): string {return "id";}

    protected function getNomsColonnes(): array {
        return ["id", "depart", "arrivee","date","nbPlaces","prix","conducteurLogin"];
    }
}