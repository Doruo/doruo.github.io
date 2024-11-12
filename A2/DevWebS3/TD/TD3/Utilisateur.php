<?php

require_once 'ConnexionBaseDeDonnees.php';
class Utilisateur {

    private string $login;
    private string $nom;
    private string $prenom;

    public function __construct(string $login, string $nom, string $prenom){
        $this->login = $login;
        $this->nom = $nom;
        $this->prenom = $prenom;
    }

    public static function construireDepuisTableauSQL(array $utilisateurTableau) : Utilisateur {
        return new Utilisateur(
            $utilisateurTableau["login"],
            $utilisateurTableau["nom"],
            $utilisateurTableau["prenom"]
        );
    }

    /**
     * @return Utilisateur[]
     */
    public static function getUtilisateurs() : array
    {
        $pdoStatement = ConnexionBaseDeDonnees::getInstance()->getPdo()->query("SELECT * FROM utilisateur");

        $utilisateurs = [];
        foreach($pdoStatement as $utilisateurFormatTableau) {
            $utilisateurs[] = Utilisateur::construireDepuisTableauSQL($utilisateurFormatTableau);
        }
        return $utilisateurs;
    }

    /**
     * @throws DateMalformedStringException
     */
    public static function getTrajets(string $login): array
    {
        $sql = "SELECT * FROM trajet T JOIN passager P ON T.id = P.trajetId WHERE passagerLogin = :login";
        $valeurs = ["login" => $login];

        $pdoStatement = ConnexionBaseDeDonnees::getInstance()->getPdo()->prepare($sql);
        $pdoStatement->execute($valeurs);

        $utilisateurs = [];
        foreach($pdoStatement as $utilisateurFormatTableau) {
            $utilisateurs[] = Trajet::construireDepuisTableauSQL($utilisateurFormatTableau);
        }
        return $utilisateurs;
    }


    // REQUETES PREPAREES AVEC CONDITION (WHERE)
    static public function recupererUtilisateurParLogin(string $login) : ?Utilisateur {

        $sql = "SELECT * FROM utilisateur WHERE login = :loginTag";

        // Préparation de la requête
        $pdoStatement = ConnexionBaseDeDonnees::getInstance()->getPdo()->prepare($sql);

        $values = array(
            "loginTag" => $login,
        );

        $pdoStatement->execute($values);
        $utilisateurFormatTableau = $pdoStatement->fetch();

        if (!$utilisateurFormatTableau) return null;
        return Utilisateur::construireDepuisTableauSQL($utilisateurFormatTableau);
    }


    public function __toString() : string {
        return "<p> Utilisateur {$this->prenom} {$this->nom} de login {$this->login} </p>";
    }
}