<?php

namespace App\Covoiturage\Controleur;
use App\Covoiturage\Lib\MessageFlash;
use App\Covoiturage\Modele\DataObject\Trajet;
use App\Covoiturage\Modele\Repository\TrajetRepository;

class ControleurTrajet extends ControleurGenerique
{

    /** ------------------- READ ------------------- */
    public static function afficherListe(): void
    {
        $trajets = (new TrajetRepository())->recuperer(); //appel au modèle pour gérer la BD

        if (!$trajets){
            MessageFlash::ajouter("warning","Aucun Trajet");
            self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=trajet');
            return;
        }

        $parametres = array(
            "trajets" => $trajets,
            "pagetitle" => "Liste des Trajets",
            "cheminVueBody" => "/../trajet/liste.php"
        );

        self::afficherVue('web/vueGenerale.php', $parametres);
    }

    /** ------------------- READ ------------------- */
    public static function afficherDetail(): void
    {
        $id = $_REQUEST["id"];

        if (is_null($id)){
            MessageFlash::ajouter("warning","Aucun ID Trajet");
            self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=trajet');
            return;
        }

        $trajet = (new TrajetRepository())->recupererParClePrimaire($id);

        if (is_null($trajet)) {
            MessageFlash::ajouter("warning","Trajet inconnu");
            self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=trajet');
            return;
        }

        $parametres = array(
            "trajet" => $trajet,
            "pagetitle" => "Details Trajet",
            "cheminVueBody" => "/../trajet/detail.php"
        );

        self::afficherVue('web/vueGenerale.php', $parametres);
    }

    /** ------------------- CREATE ------------------- */
    public static function afficherFormulaireCreation(): void
    {
        $parametres = array(
            "pagetitle" => "Formulaire Trajet",
            "cheminVueBody" =>  "/../trajet/formulaireCreation.php"
        );
        self::afficherVue("web/vueGenerale.php", $parametres);
    }

    /** ------------------- CREATE ------------------- */
    public static function creerDepuisFormulaire(): void
    {
        $trajetTableau = array(
            "id" => $_REQUEST["id"],
            "depart" => $_REQUEST["depart"],
            "arrive" => $_REQUEST["arrivee"],
            "date" => $_REQUEST["date"],
            "nbPlaces" => $_REQUEST["nbPlaces"],
            "prix" => $_REQUEST["prix"],
            "conducteurLogin" => $_REQUEST["conducteurLogin"]
        );

        foreach ($trajetTableau as $cle){
            if (is_null($cle)) {
                MessageFlash::ajouter("danger",$cle." manquant.");
                self::redirectionVersURL('controleurFrontal.php?action=creerDepuisFormulaire&controleur=trajet');
                return;
            }
        }

        $trajet = Trajet::construireDepuisFormulaire($trajetTableau);
        (new TrajetRepository)->ajouter($trajet); // Ajoute trajet dans BD

        $id = $trajetTableau['id'];
        MessageFlash::ajouter("danger","Trajet ".$id." creee !");
        self::redirectionVersURL('controleurFrontal.php?action=afficherDetail&controleur=trajet&id='.$id);
    }

    /** ------------------- UPDATE ------------------- */
    public static function afficherFormulaireMiseAJour(): void
    {
        $id = $_REQUEST['id'];
        $trajet = (new TrajetRepository)->recupererParClePrimaire($id);

        if (is_null($trajet)){
            MessageFlash::ajouter("warning","Erreur : Aucune trajet trouvé");
            self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=trajet');
            return;
        }

        $parametres = array(
            "pagetitle" => "Modifier une trajet",
            "cheminVueBody" => "/../trajet/formulaireMiseAJour.php",

            "id" => $id,
            "depart" => $trajet->formatTableau()['departTag'],
            "arrivee" => $trajet->formatTableau()['arriveeTag'],
            "date" => $trajet->formatTableau()['dateTag'],
            "nbPlaces" => $trajet->formatTableau()['nbPlacesTag'],
            "prix" => $trajet->formatTableau()['prixTag'],
            "conducteurLogin" => $trajet->formatTableau()['conducteurLoginTag']
        );

        self::afficherVue("web/vueGenerale.php",$parametres);
    }

    /** ------------------- UPDATE ------------------- */
    public static function mettreAJour(): void
    {
        $id = $_REQUEST["id"];
        $depart = $_REQUEST["depart"];
        $arrive = $_REQUEST["arrive"];
        $date = $_REQUEST["date"];
        $nbPlaces = $_REQUEST["nbPlaces"];
        $prix = $_REQUEST["prix"];
        $conducteurLogin = $_REQUEST["conducteurLogin"];

        $trajetTableau = array(
            "id" => $id,
            "depart" => $depart,
            "arrive" => $arrive,
            "date" => $date,
            "nbPlaces" => $nbPlaces,
            "prix" => $prix,
            "conducteurLogin" => $conducteurLogin
        );

        /** @var Trajet $trajet */
        $trajet = (new TrajetRepository)->recupererParClePrimaire($id);

        if (is_null($trajet)){
            MessageFlash::ajouter("warning","Aucune trajet d'id ".$id);
            self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=trajet');
            return;
        }

        foreach ($trajetTableau as $cle){
            if (is_null($cle)) {
                MessageFlash::ajouter("danger",$cle." manquant.");
                self::redirectionVersURL('controleurFrontal.php?action=afficherFormulaireMiseAJour&controleur=trajet&id='.$trajet->getId());
                return;
            }
        }

        $trajet->setDepart($depart);
        $trajet->setArrivee($arrive);
        $trajet->setDate($date);
        $trajet->setNbPlaces($nbPlaces);
        $trajet->setPrix($prix);
        $trajet->setConducteurLogin($conducteurLogin);

        (new TrajetRepository)->mettreAJour($trajet);
        MessageFlash::ajouter("success","Trajet mis à jour !");
        self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=trajet');
    }

    /** ------------------- DELETE ------------------- */
    public static function supprimer(): void
    {
        $id = $_REQUEST['id'];

        if (is_null((new TrajetRepository())->recupererParClePrimaire($id))){
            MessageFlash::ajouter("success","Aucune trajet d'ID ".$id);
            self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=trajet');
            return;
        }

        (new TrajetRepository())->supprimer($id);
        MessageFlash::ajouter("success","Trajet supprimée !");
        self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=trajet');
    }
}