<?php
class ConfigurationBaseDeDonnees {

    static private array $configurationBaseDeDonnees = array(

        // Le nom d'hote est webinfo a l'IUT
        // ou localhost sur votre machine
        // ou webinfo.iutmontp.univ-montp2.fr
        // pour accéder à webinfo depuis l'extérieur

        'nomHote' => 'localhost',

        // A l'IUT, vous avez une base de données nommee comme votre login
        // Sur votre machine, vous devrez creer une base de données
        'nomBaseDeDonnees' => 'HAYE',

        // À l'IUT, le port de MySQL est particulier : 3316
        // Ailleurs, on utilise le port par défaut : 3306
        'port' => '3306',

        // A l'IUT, c'est votre login
        // Sur votre machine, vous avez surement un compte 'root'
        'login' => 'root',

        // A l'IUT, c'est le même mdp que PhpMyAdmin
        // Sur votre machine personelle, vous avez creez ce mdp a l'installation
        'motDePasse' => ''
    );

    static public function getLogin() : string {
        return self::$configurationBaseDeDonnees['login'];
    }

    static public function getNomHote() : string{

        return self::$configurationBaseDeDonnees['nomHote'];
    }

    static public function getNomBaseDeDonnees() : string{
        return self::$configurationBaseDeDonnees['nomBaseDeDonnees'];
    }

    static public function getMotDePasse() : string{
        return self::$configurationBaseDeDonnees['motDePasse'];
    }

    static public function getPort() : string{
        return self::$configurationBaseDeDonnees['port'];
    }

    public function __toString()
    {
        return "ConfigurationBaseDeDonnees";
    }
}