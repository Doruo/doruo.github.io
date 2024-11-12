<?php
namespace App\Covoiturage\Modele\DataObject;

class Trajet extends AbstractDataObject {
    private int $id;  // Notez que l'ID peut maintenant être null
    private string $depart;
    private string $arrivee;
    private string $date;
    private int $nbPlaces;
    private int $prix;
    private string $conducteurLogin;

    public function __construct(int $id, string $depart, string $arrivee, string $date, int $nbPlaces, int $prix, string $conducteurLogin) {
        $this->id = $id;
        $this->depart = $depart;
        $this->arrivee = $arrivee;
        $this->date = $date;
        $this->nbPlaces = $nbPlaces;
        $this->prix = $prix;
        $this->conducteurLogin = $conducteurLogin;
    }

    public function formatTableau(): array{
        return array(
            "idTag" => $this->getId(),
            "departTag" => $this->getDepart(),
            "arriveeTag" => $this->getArrivee(),
            "dateTag" => $this->getDate(),
            "nbPlacesTag" => $this->getNbPlaces(),
            "prixTag" => $this->getPrix(),
            "conducteurLoginTag" => $this->getConducteurLogin(),
        );
    }

    public static function construireDepuisFormulaire(array $tableauFormulaire): AbstractDataObject {
        return new self(
            $tableauFormulaire['id'],
            $tableauFormulaire['depart'],
            $tableauFormulaire['arrivee'],
            $tableauFormulaire['date'],
            $tableauFormulaire['nbPlaces'],
            $tableauFormulaire['prix'],
            $tableauFormulaire['conducteurLogin']
        );
    }

    public function getId(): int{return $this->id;}

    public function getDepart(): string{return $this->depart;}

    public function setDepart(string $depart): void{$this->depart = $depart;}

    public function getArrivee(): string{return $this->arrivee;}

    public function setArrivee(string $arrivee): void{$this->arrivee = $arrivee;}

    public function getDate(): string{return $this->date;}

    public function setDate(string $date): void{$this->date = $date;}

    public function getNbPlaces(): int{return $this->nbPlaces;}

    public function setNbPlaces(int $nbPlaces): void{$this->nbPlaces = $nbPlaces;}

    public function getPrix(): int{return $this->prix;}

    public function setPrix(int $prix): void{$this->prix = $prix;}

    public function getConducteurLogin(): string{return $this->conducteurLogin;}

    public function setConducteurLogin(string $conducteurLogin): void{$this->conducteurLogin = $conducteurLogin;}

}
