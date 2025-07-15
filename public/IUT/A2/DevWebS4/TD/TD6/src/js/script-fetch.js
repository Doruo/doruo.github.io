/**
 * Affiche la carte d'un pokémon passé en paramètre
 * 
 * @param nameOrIndex nom ou index du pokémon à afficher
 */
function addPokemon(nameOrIndex) {
    fetch(`${ROOT_URL}/pokemon/${nameOrIndex}/`)
        .then(response => response.json())
        .then(data => addPokemonCard(data))
        .catch(error => console.log(error));
}

/**
 * Affiche les cartes correspondant à chacune des espèces apparaissant dans la chaîne d'évolution de l'espèce passée en paramètre
 * 
 * @param nameOrIndex espèce de départ de la chaîne d'évolution
 */

function addEvolutionChain(nameOrIndex) {

    fetch(`${ROOT_URL}/evolution-chain/${nameOrIndex}/`)
        .then( data => data.json())
        .then(data => getSpeciesUrls(data.chain))
        .then(urlSpecies => {
            urlSpecies.forEach(url => {
                fetch(url)
                    .then(speciePokemon => speciePokemon.json())
                    .then(speciePokemon =>addPokemon(speciePokemon.name))
                    .catch(error => console.log(error));
            });
        })
        .catch(error => console.log(error));
}
