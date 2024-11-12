
<form method="<?php echo App\Covoiturage\Configuration\ConfigurationSite::getMethodeForm();?>">

    <fieldset>

        <legend>
            <h1>Ajouter un trajet :</h1>
        </legend>

        <input type="hidden" name="controleur" value="trajet">
        <input type="hidden" name="action" value="creerDepuisFormulaire">

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="depart_id">Ville de Départ</label>
            <input class="InputAddOn-field" type="text" name="depart" id="depart_id" required>
        </p>

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="arrivee_id">Ville d'Arrivée</label>
            <input class="InputAddOn-field" type="text" name="arrivee" id="arrivee_id" required>
        </p>

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="date_id">Date</label>
            <input class="InputAddOn-field" type="date" name="date" id="date_id" required>
        </p>

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="nbPlaces_id">Nombre de Places</label>
            <input class="InputAddOn-field" type="number" name="nbPlaces" id="nbPlaces_id" required>
        </p>

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="prix_id">Prix</label>
            <label> </label>
            <input class="InputAddOn-field" type="number" min = "0"  name="prix" id="prix_id" required>
        </p>

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="conducteurLogin_id">ID du Conducteur</label>
            <input class="InputAddOn-field" type="text" name="conducteurLogin" id="conducteurLogin_id" required>
        </p>

        <p>
            <input class="InputAddOn-field" type="submit" value="Envoyer" />
        </p>
    </fieldset>
</form>

