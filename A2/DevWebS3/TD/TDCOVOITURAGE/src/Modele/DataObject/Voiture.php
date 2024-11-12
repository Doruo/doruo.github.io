<?php
namespace App\Covoiturage\Modele\DataObject;

class Voiture extends AbstractDataObject {
    private string $immatriculation;
    private string $marque;
    private string $couleur;
    private int $nbSieges;

    public function __construct($immatriculation, $marque, $couleur, $nbSieges){
        $this->immatriculation = $immatriculation;
        $this->marque = $marque;
        $this->couleur = $couleur;
        $this->nbSieges = $nbSieges;
    }

    public function formatTableau(): array{
        return array(
            "immatriculationTag" => $this->getImmatriculation(),
            "marqueTag" => $this->getMarque(),
            "couleurTag" => $this->getCouleur(),
            "nbSiegesTag" => $this->getNbSieges());
    }

    public static function construireDepuisFormulaire(array $tableauFormulaire): AbstractDataObject
    {
        return new self(
            $tableauFormulaire['immatriculation'],
            $tableauFormulaire['marque'],
            $tableauFormulaire['couleur'],
            $tableauFormulaire['nbSieges']
        );
    }

    /** GETTERS */
    public function getImmatriculation(): string {return $this->immatriculation;}

    public function getMarque(): string {return $this->marque;}

    public function getCouleur(): string {return $this->couleur;}

    public function getNbSieges(): int {return $this->nbSieges;}

    /** SETTERS */
    public function setMarque(string $marque): void {$this->marque = $marque;}

    public function setCouleur(string $couleur): void {$this->couleur = $couleur;}

    public function setNbSieges(int $nbSieges): void {$this->nbSieges = $nbSieges;}
}