function afficheVilles(tableau) {

    videVilles();
    tableau.forEach(valeur => {
        console.log(valeur);
        let p = document.createElement("p");
        p.textContent = valeur.name;
        document.getElementById("autocompletion").appendChild(p)
    });
}

function videVilles(){
    document.getElementById("autocompletion").textContent = "";
}

function requeteAJAX(stringVille,callback) {
    let url = "http://marchaye.freeboxos.fr/A2/DevWebS4/TD/TD5/src/php/requeteVille.php?ville=" + encodeURIComponent(stringVille);
    let requete = new XMLHttpRequest();
    requete.open("GET", url, true);
    requete.addEventListener("load", function () {
        callback(requete);
    });
    requete.send(null);
}

function callback_1(req) {
    console.log(req);
}

function callback_2(req) {
    // Parse le texte JSON en un objet JavaScript
    let tableau = JSON.parse(req.responseText);
    // Affiche les données dans la console
    console.log(tableau);
    // Appelle la fonction afficheVilles pour afficher les données
    afficheVilles(tableau);
}

function callback_3(req) {
    // Parse le texte JSON en un objet JavaScript
    let tableau = JSON.parse(req.responseText);
    // Affiche les données dans la console
    tableau.forEach(ville => console.log(ville.name));
}

// Gestion Event Input
let input = document.getElementById("ville");
input.addEventListener("input",()=> requeteAJAX(input.value,callback_2));

// Gestion Event Elements Autocompletion
let div = document.getElementById("autocompletion");
div.addEventListener("click", (event) => {
    if (event.target.tagName === 'P' && event.target.parentNode.id === 'autocompletion') {
        input.value = event.target.textContent; // Récupère le texte du paragraphe
        videVilles();
    }
});