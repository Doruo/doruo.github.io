/**
 * Affiche la carte d'un pokémon passé en paramètre
 * 
 * @param nameOrIndex nom ou index du pokémon à afficher
 */
async function addPokemon(nameOrIndex) {
    try {
        let req = await fetch(`${ROOT_URL}/pokemon/${nameOrIndex}/`);
        let data = await req.json();
        addPokemonCard(data);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Affiche les cartes correspondant à chacune des espèces apparaissant dans la chaîne d'évolution de l'espèce passée en paramètre
 * 
 * @param nameOrIndex espèce de départ de la chaîne d'évolution
 */

async function addEvolutionChain(nameOrIndex) {

    const reponse = await fetch(`${ROOT_URL}/evolution-chain/${nameOrIndex}/`);
    const data = await reponse.json();
    const urlEspeces = getSpeciesUrls(data.chain);

    for (const url of urlEspeces) {
        const especePokemon = await fetch(url);
        const dataEspece = await especePokemon.json();
        await addPokemon(dataEspece.name);
    }
}