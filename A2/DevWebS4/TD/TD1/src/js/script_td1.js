
/** SCRIPT TD1 JS */

const tabTitres = {
    'rose' : 'Galerie de roses',
    'hortensia': 'Galerie d\’hortensias',
    'fruitier': 'Galerie de fruitiers',
    'autre': 'Galerie de fleurs diverses'
};

// Defilement inital bannière
let chb = setInterval(changeBanniereV2, 6000);

// Aff Initial lors de l'appel au serveur
adapterGalerie("rose");

function adapterTitre(nom){
    document.getElementById("titre").innerHTML = nom;
}

function adapterGalerie(nom) {

    adapterTitre(tabTitres[nom]);
    for(let i = 1; i <= 6; i++) {
        const image = document.getElementById('fleur' + i);
        image.src = 'img/fleurs/' + nom + '/' + nom + i + '.jpg';
        image.alt = nom + i;
        image.title = nom;
    }
}

/** @param {HTMLElement} im */
function cacher(im){
    im.classList.remove("visible");
    im.classList.add("cachee");
}

/** @param {HTMLElement} im */
function afficher(im){
    im.classList.remove("cachee");
    im.classList.add("visible");
}

function changeBanniereV1(){
    const imgBanVisible = document.getElementsByClassName("visible")[0];

    let idSuivant = Number(imgBanVisible.id) + 1;
    if (idSuivant > 6) idSuivant = 1;

    cacher(imgBanVisible);
    afficher(document.getElementById(idSuivant.toString()));
}

function changeBanniereV2(){
    const ancBan = document.getElementsByClassName("visible")[0];

    let idSuivant = Number(ancBan.id) + 1;
    if (idSuivant > 6) idSuivant = 1;

    const nvBan = document.getElementById(idSuivant.toString());
    nvBan.style.transition = "opacity 3s";

    cacher(ancBan);
    afficher(nvBan);
}

function lancerDefilement(){
    let chb = setInterval(changeBanniereV2, 6000);
}

function stopperDefilement(){
    clearInterval(chb);
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
    info.style.borderRadius = "100%";
    info.style.padding = "30px";
    info.style.boxShadow = "10px 5px 5px";
    document.body.appendChild(info);
}

function detruitInfobulle() {
    const info = document.getElementById('bulle');
    document.body.removeChild(info);
}

function changerParametres(){

}