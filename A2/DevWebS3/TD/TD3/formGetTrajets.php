
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <title>HAYE - TD3 - Formulaire Trajet </title>
    <link rel="stylesheet" type="text/css" href="../../../../ressources/css/styles.css">
    <link rel="icon" type="image/x-icon" href="../TDCOVOITURAGE/ressources/images/favicon.png">
</head>

<body>
<form method="post" action="testGetTrajets.php">
    <fieldset>
        <legend><h1>Chercher les Trajet d'un Passager</h1></legend>
        <p>
            <label for="login_id">Login du Passager</label> :
            <input type="text" placeholder="cjones" name="login" id="login_id" required/>
        </p>
        <p>
            <input type="submit" value="Envoyer" />
        </p>
    </fieldset>

</form>
</body>
</html>