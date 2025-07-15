
/** URL de l'API */
const ROOT_URL = 'https://pokeapi.co/api/v2';

/** @returns la valeur du champ d'input, ou un nombre aléatoire entre 1 et 1025 si l'input est vide (index aléatoire d'une espèce) */
function getSearchInput() {
    let searchInput = document.getElementById('search-input').value;
    if (searchInput === '') searchInput = Math.floor(Math.random() * 1025) + 1;
    return searchInput;
}

/**
 * Ajoute sur la page une carte correspondant à un pokémon décrit par les données passées en paramètre
 * @param data données du pokémon à afficher (résultat d'une requête à l'endpoint [pokemon] de l'API)
 */
function addPokemonCard(data) {

    // div principal
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    // ajoute un event listener pour supprimer la carte si on clique dessus
    pokemon.addEventListener('click', function () {
        pokemon.parentElement.removeChild(pokemon);
    });

    // Ajoute div principal dans la liste
    document.getElementById('pokemon-list').appendChild(pokemon);

    // nom
    const name = document.createElement('div');

    // Remarque : sécurisé car textContent échappe le texte reçu
    name.textContent = `${data.species.name}`; // affiche le nom de l'espèce du pokémon
    name.classList.add('name');
    pokemon.appendChild(name);

    // types
    const type = document.createElement('p');
    type.textContent = `Type: ${data.types.map(type => type.type.name).join(', ')}`;
    pokemon.appendChild(type);

    // sprite
    const sprite = document.createElement('img');
    // Remarque : sécurisé car .src échappe l'attribut reçu
    sprite.src = data.sprites.front_default;
    pokemon.appendChild(sprite);
}

/**
 * Fonction utilitaire qui renvoie la liste des URL de requêtes des espèces qui apparaissent dans la chaîne d'évolution à partir du nœud passé en paramètre.
 *
 * @param evolutionLink nœud de la chaîne d'évolution (initialement, c'est `data.chain` où `data` est le résultat de la requête à l'API sur une chaîne d'évolution)
 * @returns un tableau contenant les URL de requêtes des espèces de la chaîne d'évolution
 */
function getSpeciesUrls(evolutionLink) {
    const urls = [evolutionLink.species.url];
    for (const link of evolutionLink.evolves_to) {
        urls.push(...getSpeciesUrls(link));
    }
    return urls;
}

// Ajoute les event listeners sur les boutons et affiche un pokémon
document.getElementById('button1').addEventListener('click', () => addPokemon(getSearchInput()));
document.getElementById('button2').addEventListener('click', () => addEvolutionChain(getSearchInput()));
addPokemon(4);
