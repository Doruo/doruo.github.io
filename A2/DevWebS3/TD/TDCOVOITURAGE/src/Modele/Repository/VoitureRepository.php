<?php
namespace App\Covoiturage\Modele\Repository;
use App\Covoiturage\Modele\DataObject\Voiture;

class VoitureRepository extends AbstractRepository {

    /** ------------------- CREATE ------------------- */

    protected function construireDepuisTableau(array $objetFormatTableau): Voiture {
        return new Voiture(
            $objetFormatTableau['immatriculation'],
            $objetFormatTableau['marque'],
            $objetFormatTableau['couleur'],
            $objetFormatTableau['nbSieges'],
        );
    }

    protected function getNomTable(): string {return "voiture";}

    protected function getNomClePrimaire(): string {return "immatriculation";}

    protected function getNomsColonnes(): array {return ["immatriculation", "marque", "couleur", "nbSieges"];}
}