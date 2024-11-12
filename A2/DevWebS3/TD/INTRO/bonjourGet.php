<!DOCTYPE html>
<html lang="fr">

    <head>
        <title> HAYE - Découverte php </title>
        <link rel="icon" type="image/x-icon" href="../TDCOVOITURAGE/ressources/images/favicon.png">
        <link href="/A2/DevWebS3/ressources/css/stylesTD.css" rel="stylesheet" type="text/css">
    </head>
    
    <body>

        <h1> 
            Bonjour <?php echo $_GET['name'] ?> !
        </h1>

        <a href="bonjourGet.php?name=Marc">
            Dis-moi bonjour par mon prenom !
        </a>

        <form method="get" action="traitement.php">
           <h2>(METHODE GET) Quel est ton nom de famille ?</h2>

            <label>
                <input type="text" name="surname" />
            </label>

            <input type="submit" />
        </form>
        
        <form method="post" action="traitePost.php">
            <h2>(METHODE POST) Quel est ton âge ?</h2>

            <label>
                <input type="text" name="age" />
            </label>

            <input type="submit" />
        </form>

    </body>

</html>