// variables correspondant à des balises importantes
const listeEquipes = document.getElementById('liste-equipes');
const equipesEngagees = document.getElementById('equipes-engagees');
const boutonLancer = document.getElementById('lancer-championnat');
const boutonJourneeSuivante = document.getElementById('journee-suivante');
const boutonJouerJournee = document.getElementById('jouer-journee');
const blocEquipes = document.getElementById('bloc-equipes');
const blocJournee = document.getElementById('bloc-journee');
const blocClassement = document.getElementById('bloc-classement');
const numJournee = document.getElementById('num-journee');
const boutonPlus = document.getElementById('plus');
const boutonMoins = document.getElementById('moins');

// la variable tableau des nom des équipes par défaut
let tabNomEquipes = ["PSG", "ASM", "OM", "ASSE", "OL", "FCN", "EAG", "RCS"];

/** La variable Championnat
 * @type {Championnat} chp
 */
let chp;

// Fonctions utiles
function afficher (element) {
    // à compléter
}

function cacher (element) {
    // à compléter
}

// les styles d'affichages initiaux

// Blocs équipes, journée et classement
// à compléter

// div equipesEngagees et listeEquipes
// à compléter

// les images plus et moins
// à compléter

// les boutons journée suivante et jouer journée
// à compléter

// on remplit les div des équipes engagées
// à compléter


// programmation des gestions d'événements par des fonctions anonymes

// clic sur l'image plus
boutonPlus.addEventListener("click", function () {
    // à compléter
});

// clic sur l'image moins
boutonMoins.addEventListener("click", function () {
    // à compléter
});

// clic sur le bouton lancer championnat
boutonLancer.addEventListener("click", function () {
    // à compléter
});

boutonJouerJournee.addEventListener("click", function () {
    // à compléter
});

boutonJourneeSuivante.addEventListener("click", function () {
    // à compléter
});
