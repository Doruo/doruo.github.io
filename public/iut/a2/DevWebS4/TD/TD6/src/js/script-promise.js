/**
 * @param url adresse à laquelle envoyer la requête GET
 * @returns une promesse représentant let données JSON récupérées depuis l'URL passée en paramètre
 */
function getData(url) {
    return new Promise(function (resolve, reject) {

    });
}

/**
 * Affiche la carte d'un pokémon passé en paramètre
 * @param nameOrIndex nom ou index du pokémon à afficher
 */
function addPokemon(nameOrIndex) {
    getData(`${ROOT_URL}/pokemon/${nameOrIndex}/`)
        .then(data => addPokemonCard(data))
        .catch(error => console.log(error));
}

/**
 * Affiche les cartes correspondant à chacune des espèces apparaissant dans la chaîne d'évolution de l'espèce passée en paramètre
 * @param nameOrIndex espèce de départ de la chaîne d'évolution
 */
/*
function addEvolutionChain(nameOrIndex) {

}*/