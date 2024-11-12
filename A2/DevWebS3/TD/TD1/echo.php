<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <link href="/A2/DevWebS3/ressources/css/stylesTD.css" rel="stylesheet" type="text/css">
        <link rel="icon" type="image/x-icon" href="../TDCOVOITURAGE/ressources/images/favicon.png">
        <title> Mon premier php </title>
    </head>

    <body>
        Voici le résultat du script PHP : 
        <?php
          require_once 'Voiture.php';

          $voiture1 = new Voiture("256AB34","Renault" , "bleu" , 5);
          $voiture2 = new Voiture("252CD34","Mercedes","rouge",4);
          $voiture3 = new Voiture("321CD58","Tesla","noir",2);

          $voitures = [
            $voiture1,
            $voiture2,
            $voiture3
        ];

          echo "<br>------------------------------------------------- <br>";
          
          echo "Liste des voitures :";
          echo "<br> ";

          echo "<ul>";
          foreach($voitures as $voitureCourant)
          {
            echo "<li>";

            if (!$voitureCourant) echo "Voiture sans informations";
            else echo $voitureCourant->__toString();

            echo "</li>";
          }

            echo "</ul>";
          
        echo "<br>------------------------------------------------- <br>";
        ?>

    </body>
</html> 