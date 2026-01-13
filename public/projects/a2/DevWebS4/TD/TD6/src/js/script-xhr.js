/**
 * Affiche la carte d'un pokémon passé en paramètre
 *
 * @param nameOrIndex nom ou index du pokémon à afficher
 */
function addPokemon(nameOrIndex) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${ROOT_URL}/pokemon/${nameOrIndex}/`, true);
    xhr.addEventListener("load",
        function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                addPokemonCard(data);
            }
            else {console.log(Error(xhr.statusText));}
        }
    )
    xhr.send();
}

/**
 * Affiche les cartes correspondant à chacune des espèces apparaissant dans la chaîne d'évolution de l'espèce passée en paramètre
 *
 * @param nameOrIndex espèce de départ de la chaîne d'évolution
 */
function addEvolutionChain(nameOrIndex) {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${ROOT_URL}/evolution-chain/${nameOrIndex}/`, true);

    xhr.addEventListener("load",() => {

            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);

                getSpeciesUrls(data.chain).forEach(urlSpecie => {
                    console.log(urlSpecie);
                    const xhrSpecies = new XMLHttpRequest();
                    xhrSpecies.open("GET",urlSpecie,true);

                    xhrSpecies.addEventListener("load",()=>{
                        if (xhrSpecies.status === 200){

                            const data = JSON.parse(xhrSpecies.responseText);

                            const espece = document.createElement('div');
                            espece.classList.add('pokemon');
                            espece.textContent = data['name'];

                            // ajoute un event listener pour supprimer la carte si on clique dessus
                            espece.addEventListener('click', function () {
                                espece.parentElement.removeChild(espece);
                            });

                            // Ajoute div principal dans la liste
                            document.getElementById('pokemon-list').appendChild(espece);
                        }
                    });

                    xhrSpecies.send();
                });
            }
            else { console.log(Error(xhr.statusText)); }
        }
    )
    xhr.send();
}
