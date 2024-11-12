<html lang="fr">

<head>
    <meta charset="utf-8" />
    <title>HAYE - TD3 - Supprimer Passager </title>
    <link rel="stylesheet" type="text/css" href="../../../../ressources/css/styles.css">
    <link rel="icon" type="image/x-icon" href="../TDCOVOITURAGE/ressources/images/favicon.png">
</head>

<body>
<form method="post" action="testSupprimerPassager.php">
    <fieldset>
        <legend><h1>Désinscrire un Passager</h1></legend>
        <p>
            <label for="trajetId_id">Identifiant du Trajet</label> :
            <input type="number" placeholder="4" name="trajetId" id="trajetId_id" required/>
        </p>

        <p>
            <label for="passagerLogin_id">Login du Passager</label> :
            <input type="text" placeholder="jdoe" name="passagerLogin" id="passagerLogin_id" required/>
        </p>

        <p>
            <input type="submit" value="Envoyer" />
        </p>
    </fieldset>

</form>
</body>
</html>