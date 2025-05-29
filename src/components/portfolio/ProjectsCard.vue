<script setup lang="ts">
import ProjectCardItem from '@/components/portfolio/ProjectCardItem.vue'
</script>

<template>

<section class="projets">
    <div class="contenu-projets">

      <h2>- Projets Réalisés -</h2>

      <div class="projet-grid">

        <!-- Application de Poursuite d'Etude -->
        <ProjectCardItem
          title="Application d'avis de poursuite d'étude"
          techs="MVC, POO, PHP, JavaScript, PL/SQL, ChartJS, LDAP"
          more-info-link="https://webinfo.iutmontp.univ-montp2.fr/~rostaingd/sae3a-base/web/controleurFrontal.php"
          website-link="./projets/poursuiteEtude.html">

          <template #description>
            Logiciel d'aide à la décision de la poursuite d'étude des étudiants diplômés du BUT Informatique.
          </template>
        </ProjectCardItem>

        <!-- Trains -->
        <ProjectCardItem
          title="Jeu de plateau Trains"
          techs="POO, Java, JavaFX"
          more-info-link="./projets/trains.html"
          website-link="https://github.com/Doruo/Trains">

          <template #description>
            Portage digital du jeu de deck building japonais "Trains" d'Hisashi Hayashi, jouable à 4 joueurs.
            Fonctionnement du jeu fait en java, et interface du plateau en JavaFX.
          </template>
        </ProjectCardItem>

        <!-- Elden Build -->
        <ProjectCardItem
          title="Elden Build"
          techs="PHP, JavaScript, HTML, CSS, JSON"
          more-info-link="./projets/eldenbuild.html"
          website-link="https://github.com/Doruo/EldenBuild">

          <template #description>
            Exercice ludique pour comprendre PHP, JS, et l'architecture MVC.
            Site web de gestion de build à but communautaire du jeu
            <a href="https://fr.bandainamcoent.eu/elden-ring/elden-ring">Elden Ring</a>,
            avec requêtes asynchrones à l'<a href="https://eldenring.fanapis.com/">API Elden Ring</a>.
          </template>
        </ProjectCardItem>

        <!-- Nuit de L'Info 2024 - RaceForWater -->
        <ProjectCardItem
          title="Nuit de L'Info 2024 - Race For Water"
          techs="HTML, JavaScript, ExpressJS"
          more-info-link="./projets/ndi2024.html"
          website-link="https://github.com/Doruo/NDI-2024-RaceForWater">

          <template #description>
            Océan interactif, avec dessins en pixel art décrivant l'écosystème marin et leur équivalent du
            corps humain. Application ludique réalisée en 16h lors de l'évenement nationale de la <a
            href="https://nuitdelinfo.com/">Nuit de l'Info 2024</a>.
          </template>
        </ProjectCardItem>

        <!-- Code Game Jam 2023-2024 -->
        <ProjectCardItem
          title="CGJ 2023 - Time Mage Tournament"
          techs="LUA, PICO-8"
          more-info-link=" "
          website-link="https://doruo.itch.io/time-mage-tournament">

          <template #description>
            Jeu vidéo de tir en 2D isométrique réalisé en 24h à l'occasion de la 7ème édition de la <a href="https://codegamejam.extragames.fr/">Code Game Jam de l'IUT
            Montpellier-Sête</a>. Gagnant du Prix Design.
          </template>
        </ProjectCardItem>

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
