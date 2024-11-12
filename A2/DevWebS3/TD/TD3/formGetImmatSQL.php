<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>HAYE - TD4 - Test Injection SQL</title>
        <link rel="stylesheet" type="text/css" href="../../../../ressources/css/styles.css">
        <link rel="icon" type="image/x-icon" href="../TDCOVOITURAGE/ressources/images/favicon.png">
    </head>
    <body>
        <div>
            <form method="get" action="formGetImmatSQL.php">
                <fieldset>
                    <legend><h1>Trouve une voiture par son immatriculation :</h1></legend>
                    <p>
                        <h1><label for="immat_id">Immatriculation</label> </h1>
                        <h1><input type="text" placeholder="Ex : 256AB34" name="immatriculation" id="immat_id" required/></h1>
                        <h1><input type="submit" value="Envoyer" /></h1>
                    </p>
                </fieldset>
            </form>
        </div>

        <?php

        use Modele\ConnexionBaseDeDonnees;

        require_once 'ConnexionBaseDeDonnees.php';
        require_once 'Voiture.php';

        function getVoitureParImmatriculation(string $immat) : ?Voiture {

            $sql = "SELECT * from voiture2 WHERE immatriculation='$immat'";

            echo "<p>J'effectue la requête <pre>\"$sql\"</pre></p>";

            $pdoStatement = ConnexionBaseDeDonnees::getInstance()->getPdo()->query($sql);
            $voitureTableau = $pdoStatement->fetch();

            if ($voitureTableau !== false) return Voiture::construireDepuisTableau($voitureTableau);
            return null;
        }

        if (isset($_GET['immatriculation'])) echo getVoitureParImmatriculation($_GET['immatriculation']);
        ?>
    </body>
</html>
