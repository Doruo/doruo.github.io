
let chb = setInterval(changeBanniereV2, 6000);

const tabTitres = {
    'rose' : 'Galerie de roses',
    'hortensia': 'Galerie d\’hortensias',
    'fruitier': 'Galerie de fruitiers',
    'autre': 'Galerie de fleurs diverses'
};

function adapterGalerie(nom) {
  for(let i = 1; i <= 6; i++) {
    const image = document.getElementById('fleur' + i);
    image.src = 'img/fleurs/' + nom + '/' + nom + i + '.jpg';
    // ou avec la syntaxe `` qui permet le remplacement de variables
    // image.src = `img/fleurs/${nom}/${nom}${i}.jpg`
  }
}

/**
 * Affiche l'element `im` donné en paramètre.
 * @param {HTMLElement} im - élement image
 */
function afficher (im){
    im.classList.remove('cachee');
    im.classList.add('visible');
}

/**
 * Cache l'element `im` donné en paramètre.
* @param {HTMLElement} im - élement image
*/
function cacher (im){
    im.classList.remove('visible');
    im.classList.add('cachee');
}

function suivant(n){
    if (n>=6) return 1;
    return n+1;
}

function changeBanniereV1(){
    const banniere = document.getElementsByClassName('visible')[0];
    const { id } = banniere;

    const idSuiv = suivant(id);
    const banniereSuiv = document.getElementById(idSuiv);
    cacher(banniere);
    afficher(banniereSuiv);
}

function changeBanniereV2(){
    const banniere = document.getElementsByClassName('visible')[0];
    const { id } = banniere;

    const idSuiv = suivant(id);
    const banniereSuiv = document.getElementById(idSuiv);
    cacher(banniere);
    afficher(banniereSuiv);
    banniere.style.transition = "";
    banniereSuiv.style.transition = "opacity 3s";
}

function adapterTitre(nom){
    const span = document.getElementById('titre');
}

function lancerDefilement(){
    chb = setInterval(changeBanniereV2, 6000);
}

function stopperDefilement(){
    chb = 0;
}

function construitInfobulle() {
    const info = document.createElement('div');
    info.innerHTML = "<p>c'est moi la bulle !</p>";
    info.id = "bulle";
    info.style.position = "fixed";
    info.style.top = "100px";
    info.style.right = "150px";
    info.style.backgroundColor = "darkblue";
    info.style.color = "white";
    document.body.appendChild(info);
}

function changerParametres(){
    const number = getRandomNumber(1,4,);
    document.body.backgroundImage = `img/background/bg-${number}.jpg`;
}

function getRandomNumber(min, max, excludedNumber) {
    let random;
    do {
        random = Math.floor(Math.random() * (max - min) ) + min;
    }while (random === excludedNumber);
    return random;
}