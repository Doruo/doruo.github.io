<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="/A2/DevWebS3/ressources/css/stylesTD.css">
        <link rel="icon" type="image/x-icon" href="../TDCOVOITURAGE/ressources/images/favicon.png">
        <title> Mon premier php </title>
    </head>

    <body>
        Voici le résultat du script PHP : 
        <?php
          require_once 'Voiture.php';

          $voiture1 = new Voiture("Marc" , "Renault" , "bleu" , "256AB34" , 5);
          $voiture2 = new Voiture("Polo","Mercedes","rouge","252CD34",4);
          $voiture3 = new Voiture("Pacman","Tesla","noir","321CD58",2);

          $voitures = [
            $voiture1,
            $voiture2,
            $voiture3
        ];

          echo "<br>------------------------------------------------- <br>";
          
          echo "Liste des voitures :";
          echo "<br> ";

          echo "<ul>";
          foreach($voitures as $voitureCourant){
            echo "<li>";
            if (!$voitureCourant){
                echo "<h1>Voiture sans informations</h1>";
            }
            else{
                echo $voitureCourant->__toString();
            }
            echo "</li>";
          }
          echo "</ul>";
          
        echo "<br>------------------------------------------------- <br>";
        ?>

    </body>
</html> 