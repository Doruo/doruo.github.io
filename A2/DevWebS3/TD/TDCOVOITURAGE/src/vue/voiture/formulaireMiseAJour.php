<form method="<?php echo App\Covoiturage\Configuration\ConfigurationSite::getMethodeForm();?>">

    <fieldset>

        <legend>
            <h1>Modifier une voiture :</h1>
        </legend>

        <input type="hidden" name="controleur" value="voiture">
        <input type="hidden" name="action" value="mettreAJour">

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="immatriculation_id">Immatriculation</label>

            <input class="InputAddOn-field" type="text" readonly name="immatriculation"  id="immatriculation_id" required
                   value="<?=/** @var string $immatriculation */$immatriculation ?>">
        </p>

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="marque_id">Marque</label>

            <input class="InputAddOn-field" type="text" name="marque" id="marque_id" required
                value="<?=/** @var string $marque */$marque ?>">
        </p>

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="couleur_id">Couleur</label>

            <input class="InputAddOn-field" type="text" name="couleur" id="couleur_id" required
                value="<?=/** @var string $couleur */ $couleur ?>">
        </p>

        <p class="InputAddOn">
            <label class="InputAddOn-item" for="nbSieges_id">Nombre de Sièges</label>
            <input class="InputAddOn-field" type="number" name="nbSieges" id="nbSieges_id" required
                value="<?=/** @var int $nbSieges */ $nbSieges ?>">
        </p>

        <p>
            <input class="InputAddOn-field" type="submit" value="Envoyer" />
        </p>
    </fieldset>

</form>

