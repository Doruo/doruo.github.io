<script setup lang="ts">

</script>

<template>

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
</template>

<style scoped>
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

</style>
