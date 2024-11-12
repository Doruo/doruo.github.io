
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <title>HAYE - TD3 - Formulaire Passager </title>
    <link rel="stylesheet" type="text/css" href="../../../../ressources/css/styles.css">
    <link rel="icon" type="image/x-icon" href="../TDCOVOITURAGE/ressources/images/favicon.png">
</head>

<body>
    <form method="post" action="testGetPassagers.php">
        <fieldset>
            <legend><h1>Chercher un Passager</h1></legend>

            <p>
                <label for="id_id">Identifiant du trajet</label> :
                <input type="text" placeholder="1" name="id" id="id_id" required/>
            </p>

            <p>
                <input type="submit" value="Envoyer" />
            </p>
        </fieldset>

    </form>
</body>



</html>