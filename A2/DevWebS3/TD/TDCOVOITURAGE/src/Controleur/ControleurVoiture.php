<?php

namespace App\Covoiturage\Controleur;
use App\Covoiturage\Lib\MessageFlash;
use App\Covoiturage\Modele\DataObject\Voiture;
use App\Covoiturage\Modele\Repository\VoitureRepository;

class ControleurVoiture extends ControleurGenerique
{

    /** ------------------- READ ------------------- */
    public static function afficherListe(): void
    {
        $voitures = (new VoitureRepository())->recuperer(); //appel au modèle pour gérer la BD

        if (!$voitures) {
            MessageFlash::ajouter("warning","Aucune Voiture");
            self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=voiture');
            return;
        }

        $parametres = array(
            "voitures" => $voitures,
            "pagetitle" => "Liste des Voitures",
            "cheminVueBody" => "/../voiture/liste.php"
        );
        self::afficherVue('web/vueGenerale.php', $parametres);
    }

    public static function afficherDetail(): void
    {
        $immatriculation = $_REQUEST["immatriculation"];

        // Vérif Immatriculation
        if (is_null($immatriculation)){
            MessageFlash::ajouter("warning","Aucune Immatriculation");
            self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=voiture');
            return;
        }

        $voiture = (new VoitureRepository())->recupererParClePrimaire($immatriculation);

        // Immatriculation inconnu
        if (!$voiture) {
            MessageFlash::ajouter("warning","Immatriculation inconnu");
            self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=voiture');
            return;
        }

        $parametres = array(
            "voiture" => $voiture,
            "pagetitle" => "Details Voiture",
            "cheminVueBody" => "/../voiture/detail.php"
        );
        self::afficherVue('web/vueGenerale.php', $parametres);
    }

    /** ------------------- CREATE ------------------- */
    public static function afficherFormulaireCreation(): void
    {
        $parametres = array(
            "pagetitle" => "Formulaire Voiture",
            "cheminVueBody" =>  "/../voiture/formulaireCreation.php"
        );
        self::afficherVue("web/vueGenerale.php", $parametres);
    }

    public static function creerDepuisFormulaire(): void
    {
        $voitureTableau = array(
            'immatriculation' => $_REQUEST['immatriculation'],
            'marque' => $_REQUEST['marque'],
            'couleur' => $_REQUEST['couleur'],
            'nbSieges' => $_REQUEST['nbSieges']
        );

        foreach ($voitureTableau as $cle){
            if (is_null($cle)) {
                MessageFlash::ajouter("danger",$cle." manquant.");
                self::redirectionVersURL('controleurFrontal.php?action=creerDepuisFormulaire&controleur=voiture');
                return;
            }
        }

        $voiture = Voiture::construireDepuisFormulaire($voitureTableau);
        (new VoitureRepository)->ajouter($voiture); // Ajoute voiture dans BD

        MessageFlash::ajouter("success","Voiture creee !");
        self::redirectionVersURL('controleurFrontal.php?action=afficherDetail&controleur=voiture&immatriculation='.$voitureTableau['immatriculation']);
    }

    /** ------------------- UPDATE ------------------- */
    public static function afficherFormulaireMiseAJour(): void
    {
        $immatriculation = $_REQUEST['immatriculation'];

        if (is_null($immatriculation)) {
            MessageFlash::ajouter("warning","Immatriculation invalide .");
            self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=voiture');
            return;
        }

        $voiture = (new VoitureRepository)->recupererParClePrimaire($immatriculation);

        if (is_null($voiture)) {
            MessageFlash::ajouter("warning","Aucune voiture d'immatriculation ".$immatriculation);
            self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=voiture');
            return;
        }

        $parametres = array(
            "pagetitle" => "Modifier une voiture",
            "cheminVueBody" => "/../voiture/formulaireMiseAJour.php",

            "immatriculation" => $immatriculation,
            "marque" => $voiture->formatTableau()['marqueTag'],
            "couleur" => $voiture->formatTableau()['couleurTag'],
            "nbSieges" => $voiture->formatTableau()['nbSiegesTag']
        );
        self::afficherVue("web/vueGenerale.php",$parametres);
    }

    public static function mettreAJour(): void
    {
        $immatriculation = $_REQUEST['immatriculation'];
        $marque = $_REQUEST['marque'];
        $couleur = $_REQUEST['couleur'];
        $nbSieges = $_REQUEST['nbSieges'];

        $tableauVoiture = array(
            "immatriculation" => $immatriculation,
            "marque" => $marque,
            "couleur" => $couleur,
            "nbSieges" => $nbSieges
        );

        foreach ($tableauVoiture as $cle){
            if (is_null($cle)) {
                MessageFlash::ajouter("danger",$cle." manquant.");
                self::redirectionVersURL('controleurFrontal.php?action=creerDepuisFormulaire&controleur=trajet');
                return;
            }
        }

        /** @var Voiture $voiture */
        $voiture = (new VoitureRepository)->recupererParClePrimaire($immatriculation);

        if (is_null($voiture)){
            MessageFlash::ajouter("warning","Aucune voiture d'immatriculation ".$immatriculation);
            self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=voiture');
            return;
        }

        $voiture->setMarque($marque);
        $voiture->setCouleur($couleur);
        $voiture->setNbSieges($nbSieges);

        (new VoitureRepository)->mettreAJour($voiture);
        MessageFlash::ajouter("success","Voiture mise à jour !");
        self::redirectionVersURL('controleurFrontal.php?action=afficherDetail&controleur=voiture&immatriculation='.$immatriculation);
    }

    /** ------------------- DELETE ------------------- */

    public static function supprimer(): void
    {
        $immatriculation = $_REQUEST['immatriculation'];

        if (is_null((new VoitureRepository())->recupererParClePrimaire($immatriculation))){
            MessageFlash::ajouter("warning","Aucune voiture d'immatriculation ".$immatriculation);
            self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=voiture');
            return;
        }

        (new VoitureRepository())->supprimer($immatriculation);
        MessageFlash::ajouter("success","Voiture ".$immatriculation." supprimée !");
        self::redirectionVersURL('controleurFrontal.php?action=afficherListe&controleur=voiture');
    }
}
