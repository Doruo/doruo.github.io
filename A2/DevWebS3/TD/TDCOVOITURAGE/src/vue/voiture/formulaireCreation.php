<form method="<?php echo App\Covoiturage\Configuration\ConfigurationSite::getMethodeForm();?>">

    <fieldset>

        <legend>
            <h1>Ajouter une voiture :</h1>
        </legend>

        <input type="hidden" name="controleur" value="voiture">
        <input type="hidden" name="action" value="creerDepuisFormulaire">

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="immatriculation_id">Immatriculation</label>
            <input class="InputAddOn-field" type="text" placeholder="l0cKl3aR" name="immatriculation" id="immatriculation_id" required>
        </p>

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="marque_id">Marque</label>
            <input class="InputAddOn-field" type="text" placeholder="Tesla" name="marque" id="marque_id" required>
        </p>

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="couleur_id">Couleur</label>
            <input class="InputAddOn-field" type="text" placeholder="rose" name="couleur" id="couleur_id" required>
        </p>

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="nbSieges_id">Nombre de Sièges</label>
            <input class="InputAddOn-field" type="number" placeholder="4" name="nbSieges" id="nbSieges_id" required>
        </p>

        <p>
            <input class="InputAddOn-field" type="submit" value="Envoyer" />
        </p>
    </fieldset>

</form>

