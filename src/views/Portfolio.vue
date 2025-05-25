<script setup lang="ts">
defineProps<{
  msg: string,
  requiered: false
}>()
</script>

<template>
  <!DOCTYPE html>
  <html lang="fr">

  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="../ressources/css/porfolio.css">

    <title>Marc Haye</title>
  </head>

  <body>
  <!-- ENTETE -->
  <header>
    <nav class="entete">
      <h1><a href="./portfolio.html">Marc Haye</a></h1>
      <p>Futur Développeur Full-Stack</p>
    </nav>
  </header>

  <!-- INTRO -->

  <section class="intro">

    <div class="contenu-intro">

      <h2>Bonjour, je suis Marc Haye !</h2>

      <p>
        Etudiant en Informatique à l'Université de Montpellier,
        je suis passionné depuis toujours par la <b>création de solutions robustes et évolutives</b>.
      </p>
      <p>
        Actuellement en 2ème année, je me suis spécialisé dans le <b>le parcours RACDV:
        Réalisation d'Application - Conception & Déploiement</b>.
      </p>
      <p>
        Souhaitant continuer mes apprentissages dans le réseau et la conception de serveurs webs,
        mon objectif professionel est de <b>devenir développeur Full-Stack</b>.
      </p>

      <h1><a href="../ressources/CV/CV-HAYE.pdf">Voir mon CV</a></h1>
    </div>

    <div class="conteneur-portrait">
      <img class="portrait" src="../ressources/images/portrait/Marc_Haye.webp" alt="Portrait-Haye">
    </div>

  </section>

  <!-- PROJETS -->

  <section class="projets">
    <div class="contenu-projets">

      <h2>- Projets Réalisés -</h2>

      <div class="projet-grid">

        <!-- Application de Poursuite d'Etude -->

        <div class="projet-card">
          <h3>Application d'avis de poursuite d'étude</h3>
          <p>Logiciel d'aide à la décision de la poursuite d'étude des étudiants diplômés du BUT Informatique.
          </p>
          <p><b>Technologies:</b> MVC, POO, PHP, JavaScript, PL/SQL, ChartJS, LDAP</p>

          <div class="projet-liens">
            <a href="./projets/poursuiteEtude.html">En savoir plus</a>
            <a href="https://webinfo.iutmontp.univ-montp2.fr/~rostaingd/sae3a-base/web/controleurFrontal.php">Visiter le site</a>
          </div>
        </div>

        <!-- Trains -->

        <div class="projet-card">
          <h3>Jeu de plateau Trains</h3>
          <p>Portage digital du jeu de deck building japonais "Trains" d'Hisashi Hayashi, jouable à 4 joueurs.
          </p>
          <p>Fonctionnement du jeu fait en java, et interface du plateau en JavaFX.</p>
          <p><b>Technologies:</b> POO, Java, JavaFX</p>

          <div class="projet-liens">
            <a href="./projets/trains.html">En savoir plus</a>
            <a href="https://github.com/Doruo/Trains">Page Github</a>
          </div>
        </div>

        <!-- Elden Build -->

        <div class="projet-card">
          <h3>Elden Build</h3>

          <p>
            Site web de gestion de build à but communautaire du jeu <a
            href=" https://fr.bandainamcoent.eu/elden-ring/elden-ring">Elden Ring</a>,
            avec requêtes asynchrones à l'<a href="https://eldenring.fanapis.com/">API Elden Ring</a>.
          </p>

          <p>Exercice ludique pour comprendre PHP, JS, et l'architecture MVC.</p>

          <p><b>Technologies:</b> PHP, JavaScript, HTML, CSS, JSON</p>

          <div class="projet-liens">
            <a href="./projets/eldenbuild.html">En savoir plus</a>
            <a href="https://github.com/Doruo/EldenBuild">Page GitHub</a>
          </div>
        </div>

        <!-- Nuit de L'Info 2024 - RaceForWater -->

        <div class="projet-card">
          <h3>Nuit de L'Info 2024 - Race For Water</h3>
          <p>Application ludique réalisée en 16h lors de l'évenement nationale de la <a
            href="https://nuitdelinfo.com/">Nuit de l'Info 2024</a>.</p>
          <p>Océan interactif, avec dessins en pixel art décrivant l'écosystème marin et leur équivalent du
            corps humain.</p>
          <p><b>Technologies:</b> HTML, JavaScript, ExpressJS</p>

          <div class="projet-liens">
            <a href="./projets/ndi2024.html">En savoir plus</a>
            <a href="https://github.com/Doruo/NDI-2024-RaceForWater">Page GitHub</a>
          </div>
        </div>

        <!-- Code Game Jam 2023-2024 -->

        <div class="projet-card">
          <h3>CGJ 2023 - Time Mage Tournament</h3>

          <p>
            Jeu vidéo de tir en 2D isométrique réalisé en 24h à l'occasion de la 7ème édition de la <a href="https://codegamejam.extragames.fr/">Code Game Jam de l'IUT
            Montpellier-Sête</a>.
          </p>
          <p>
            Gagnant du Prix Design.
          </p>

          <p><b>Technologies:</b> LUA, PICO-8</p>

          <div class="projet-liens">
            <a href="https://doruo.itch.io/time-mage-tournament">En savoir plus</a>
          </div>
        </div>

        <h1><a href="https://github.com/Doruo?tab=repositories">Voir tous mes autres projets</a></h1>

      </div>

    </div>

  </section>

  <!-- BIOGRAPHIE -->

  <section class="biographie">
    <div class="conteneur">
      <h2>- Biographie -</h2>
      <p>
        Depuis toujours, je suis passionnée pour l'informatique, au départ par le jeu vidéo, puis par le <b>domaine web</b>.
      </p>
      <p>
        J'ai d'abord obtenu mon <b>Baccalauréat STI2D</b>, option Systèmes d'Information et Numérique (SIN).
        J'ai pus y apprendre les bases de l’électronique, de la programmation lié aux systèmes embarqués,
        ainsi que l'étude des forces sur des projets architecturaux (Principe Fondamental de la Dynamique).
      </p>

      <p>
        Afin d'approfondir ce parcours, je choisis d'intégrer l'Université de Montpellier en
        rejoignant le <b>BUT Informatique de l'IUT Montpellier-Sête</b>.
        Durant ma formation j'ai été amené à maitriser les différentes notions de <b>développement full-stack efficace</b>,
        donc coté serveur mais également côté interface client fonctionnel et ergonomique.
      </p>

      <p>
        D’un point de vue managériale, j'ai été amené à <b>gérer des équipes pour différents projets informatiques</b>,
        les coacher, proposer des solutions efficaces face aux obstacles,
        afin de permettre de <b>satisfaire au maximum les exigences du client</b>, et dans les délais imposés.
      </p>
    </div>
  </section>

  <!-- FUTUR -->

  <section class="futur">
    <div class="conteneur">
      <h2>- Objectifs Futurs -</h2>
      <p>
        Je compte tout d'abord entamer après mes études une carrière en <b>développement web back-end</b>,
        puis envisage ensuite de prolonger mes acquis en <b>systèmes réseaux</b>.
        Me passionant de plus en plus pour <b>les sciences et les mathématiques informatiques</b>,
        je continuerais d'étudier, après le BUT, de nouveau domaines scientifiques.
      </p>

      <p>
        Cela s'effectuera soi en intégrant une <b>école d'ingénieur</b> si j'obtiens mon diplôme du BUT Informatique,
        sinon j'étudierais plus concrêtement dans mon temps libre différents domaines informatiques
        auquelles je m'interesse déjà, comme les systèmes réseaux, la théorie des graphes,
        l'intelligence artificiel, ou la physique quantique.
      </p>
    </div>
  </section>

  <!-- CONTACT -->

  <section class="contact">

    <div class="conteneur">

      <h2>Contact</h2>

      <p>
        Si mon profil correspond à ce que vous recherchez, contactez-moi !
      </p>

      <div class="social-links">
        <a href="mailto:marc.antonio.haye@gmail.com">Mail</a>
        <a href="https://github.com/Doruo">GitHub</a>
        <a href="https://www.linkedin.com/in/marc-haye/">LinkedIn</a>
        <a href="https://fr.gravatar.com/marcantoniohaye">Gravatar</a>
        <a href="https://doruo.itch.io/time-mage-tournament">Itch.io</a>
      </div>

    </div>
  </section>

  <!-- FOOTER -->

  <footer>
    <div class="conteneur">
      <p>Design réalisé avec l'aide amicale de <a href="https://estebanremond.github.io/portfolio/">Esteban
        Rémond</a></p>
      <p>&copy; 2025 Haye Marc</p>
    </div>
  </footer>
  </body>

  </html>
</template>

<style scoped>

/* HAYE MARC - PORTFOLIO 2E ANNEE STYLES */

/* STRUCTURE */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.3s ease;

}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

header {
  display: flex;
  flex-direction: column;

  align-items: center;

  background-color: #2c3e50;
  color: white;
  padding: 10px 0;
  text-align: center;
}

/* TEXTES */

* a{
  color: rgb(39, 183, 199);
}

* a:hover {
  color: rgb(6, 136, 175);
  text-decoration:underline;
}

p:not(footer .conteneur p):not(.entete p){
  color: #666;
  margin-bottom: 1rem;
}

.contenu-intro p{
  text-align: justify;
}

h2 {
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

h3{
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}


/* SECTIONS */
section{
  text-align: center;
  margin: 0 auto;
}

section:nth-child(even) {
  background-color: #f9f9f9;
}

section:nth-child(odd) {
  background-color: white;
}

.entete{
  max-width: 20%;
  padding: 0 2rem;
}


.entete p {
  color: white;
}

.contenu-intro, .conteneur, .contenu-projets, .projet-contenu-images, .contenu-competences{
  margin: 0 auto;
  padding: 0 2rem;
}

.conteneur, .contenu-projets, .projet-contenu-images, .contenu-competences{
  max-width: 65%;
}


.contenu-intro{
  max-width: 35%;
}

/* INTRO, BIO & FUTUR */

.intro, .biographie ,.futur{
  display: flex;
  align-items: center;
  padding: 4rem 0;
}

.intro{
  background: linear-gradient(-45deg, #bef0ff, #d1d6db, #cbdef0, #bde0ff);
  background-size: 200% 200%;
  height: 90vh;
}

/* PROJETS */

.projets {
  padding: 4rem 0;
}

.contenu-projets{
  max-width: 55%;
}

/* TABLEAUX */

.projet-grid, .competences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
}

.competences-grid{
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}


/* --------- */

.projet-card, .projet-images, .competence-card {
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid #eaeaea;
}

.projet-card p{
  text-align: center;
}


.projet-images{
  padding: 0;
  max-height: 200px;
}

.projet-images img{
  width:100%;
  height:100%;
}

.projet-card:hover, .projet-images:hover{
  transform: scale(1.04);
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.329);
}

.projet-card a img:hover{
  transform: scale(1.3);
}

.projet-liens a{

  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
}

/* COMPETENCES */

.competences {
  padding: 4rem 0;
}

/* CONTACT */

.contact {
  padding: 4rem 0;
  text-align: center;
}

/* FOOTER */

footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem 0;
}

footer .containter {
  color: white;
}

/* LIENS */

.social-links a, .competences .conteneur p a, .entete h1 a, .projet-liens a{
  text-decoration: none;
}

/* LIENS RESEAUX*/

.social-links {
  margin-top: 2rem;
}

.social-links a {
  margin: 0 1rem;
}

/* IMAGES */

.portrait{
  width: 45%;
  border-radius: 10%;
}

.contenu-intro img{
  width: 35%;
}


.projet-card a img{
  width:90px;
}

/* MEDIA QUERIES */

@media (max-width:1820px){

  #accueil, .projets-grid {
    flex-direction: column;
    grid-template-columns: 1fr;
  }

  .portrait{
    display: none;
    width: 5%;
    max-height: 2%;
  }

  .intro{
    height: 100%;
  }

  .conteneur {
    flex-direction: column !important;
    padding: 20px;
  }

  .contenu-intro {
    max-width: 98%;
    max-height: 100%;
  }

  .contenu-intro p{
    font-size: 1.2rem;
  }

  .contenu-intro h1, .contenu-intro h2 {
    font-size: 2.2rem;
  }

  header{
    display: flex;
  }

  .entete {
    max-width: 100%;
  }

  .entete h1{
    font-size: 3rem;
  }

  .entete p{
    font-size: 2.2rem;
  }

  .biographie .conteneur h2, .futur .conteneur h2, .projet-card h3, .contenu-projets h2{
    font-size: 2.2rem;
  }

  .biographie .conteneur p, .futur .conteneur p, footer .conteneur p, .projet-card p, .projet-card a{
    font-size: 1.6rem;
  }

  .contact .conteneur h2{
    font-size: 2.6rem;
  }

  .contact .conteneur p{
    font-size: 1.6rem;
  }

  .social-links a{
    font-size: 1.6rem;
  }
}
</style>
