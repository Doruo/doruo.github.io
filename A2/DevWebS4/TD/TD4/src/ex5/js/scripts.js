const xhr = new XMLHttpRequest();
const div_verbes = document.getElementById("liste_verbes");
const div_input = document.getElementById("input");

function creer_interface() {

  creerBoutonRecherche();
  // 97 est le code ASCII pour 'a' et 122 pour 'z'
  for (let i = 97; i <= 118; i++) {
    creerBoutonLettre(String.fromCharCode(i));
  }

  creerBoutonLettre("z");
  creerBoutonLettre("œ");
  creerBoutonEffacer();

  div_input.addEventListener("click",(event)=>
  {
    console.log(event.target); // Debug
    let classe = event.target.className;

    // Lettre
    if (classe === "letter") charger_verbes(event.target.value,"init");
    // Effacer
    else if (classe === "erase") effacerListe();
  });

  div_input.addEventListener("change",(event) =>{
    charger_verbes(event.target.value,"seq");
  });
}

function creerBoutonRecherche (){

  let inputRecherche = document.createElement("input");
  inputRecherche.type="text";
  inputRecherche.placeholder="entrez une séquence";
  inputRecherche.id = "recherche";
  div_input.appendChild(inputRecherche);
}

function creerBoutonLettre (lettre){

  let inputLettre = document.createElement("input");
  inputLettre.type = "button";
  inputLettre.className = "letter";
  inputLettre.value = lettre;
  div_input.appendChild(inputLettre);
}

function creerBoutonEffacer (){

  let inputEffacer = document.createElement("input");
  inputEffacer.type = "button";
  inputEffacer.className = "erase";
  inputEffacer.value = "effacer la liste";
  div_input.appendChild(inputEffacer);
}

function effacerListe(){
  div_verbes.textContent="";
  document.querySelector("#recherche").value = "";
}

function callback_basique() {
  let xhrJSON = JSON.parse(xhr.responseText);
  console.log(xhrJSON);
}

function callback() {
  let xhrJSON = JSON.parse(xhr.responseText);
  div_verbes.textContent = "";

  xhrJSON.forEach(verbe =>{
    let p = document.createElement("p");
    p.textContent = verbe["libelle"];
    div_verbes.appendChild(p);
  });
}

/**
 * @param {String} lettre Chaîne recherchée dans les verbes
 * @param {String} type Type de recherche ('seq' ou 'init') */
function charger_verbes(lettre,type) {

  let url = "http://marchaye.freeboxos.fr/A2/DevWebS4/TD/TD4/src/ex5/php/recherche.php";
  let lettreURL = encodeURIComponent(lettre);
  let typeURL = encodeURIComponent(type);

  xhr.open("POST",url+"?lettre="+lettreURL+"&type="+typeURL,true);
  xhr.addEventListener("load",callback);

  xhr.send(null);
}

// Création de l'interface
creer_interface();