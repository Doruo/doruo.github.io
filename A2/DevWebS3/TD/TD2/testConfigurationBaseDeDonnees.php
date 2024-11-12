<!DOCTYPE html>
<html lang="fr">

    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="/A2/DevWebS3/ressources/css/stylesTD.css">
        <title> TD2 - Config BD</title>
    </head>

    <body>
        <h1>Test Configuration Base de Données</h1>

        <?php

        use Configuration\ConfigurationBaseDeDonnees;
        use Modele\ConnexionBaseDeDonnees;

        require_once 'ConfigurationBaseDeDonnees.php'; // Uniquement pour afficher infos Config BD
        require_once 'ConnexionBaseDeDonnees.php';

        echo "Nom Hôte :<br />";
        echo ConfigurationBaseDeDonnees::getNomHote();

        echo "<br /><br />Login :<br />";
        echo ConfigurationBaseDeDonnees::getLogin();

        echo "<br /><br />Nom Base de Données :<br />";
        echo ConfigurationBaseDeDonnees::getNomBaseDeDonnees();

        echo "<br /><br />Port :<br />";
        echo ConfigurationBaseDeDonnees::getPort();

        echo "<br /><br />TEST CONNECTON AU SERVEUR : ";

        $connectionBD = new ConnexionBaseDeDonnees();

        $connectionStatut = $connectionBD->getPdo()->getAttribute(PDO::ATTR_CONNECTION_STATUS);

        if (!is_null($connectionStatut)) echo" REUSSI<br />";
        echo $connectionStatut;
        ?>

    </body>
</html>














