<script setup lang="ts">

import ProjectItem from '@/components/projects/common/ProjectItem.vue'
</script>

<template>

  <ProjectItem>
    <template #logo_projet>
      <img alt="eldenbuild_logo" src="../../ressources/images/eldenbuild/eldenring_ranni.webp">
    </template>

    <template #title>Elden Build</template>

    <template #description>
      <p>
        Site web de gestion de build à but communautaire du jeu <a
        href=" https://fr.bandainamcoent.eu/elden-ring/elden-ring">Elden Ring</a>.
      </p>
      <p>
        Un build est par définition la construction et l'évolution d'un ensemble d'équipement du personnage
        incarné par le joueur.
        Entre choix (et évolution) des compétences, répartition des points d'expérience, bonus, armes, et autres
        avantages.
      </p>
      <p>
        Le but du site Elden Build était principalement d'en faire une plateforme vivante,
        et entretenue par la communauté internationale du jeu (d'où l'entièreté du site en anglais).
        Il y a actuellement très peu voir pas de site web existant réellement dédié pour créer des ensembles
        d'équipements au thème du jeu, malgré son immense communauté à travers le monde.
      </p>
      <p>
        Le projet, étant incomplet, était plus un exercice amusant pour comprendre PHP, JavaScript, les requêtes
        AJAX, l'architecture MVC et ses limites.
        L'application communique via des requêtes HTTP asynchrones à l'<a href="https://eldenring.fanapis.com/">API
        Elden Ring</a>.
      </p>
      <p>
        Je compte peut-être à l'avenir refaire un projet similaire, mais en concevant la partie serveur avec
        Node.JS,
        ce qui facilitera l'amélioration du projet, l'optimisation de l'asynchronisme des requêtes, optimisera et améliorera son utilisation.
        Ce dernier pourrait également utiliser un système de forum en ligne où chacun pourrait débattre sur des
        sujets au thème du jeu.
      </p>
    </template>

    <template #abilities>

      <div class="projet-card">
        <a href="https://git-scm.com/">
          <img alt="GIT" src="../../ressources/images/outils/git.webp">
        </a>
        <h1>Git</h1>
        <p>Versioning (gestion des versions) du projet, et collaboration en équipe.</p>
      </div>

      <div class="projet-card">
        <a href="https://www.docker.com/">
          <img alt="Docker" src="../../ressources/images/outils/docker.webp">
        </a>
        <h1>Docker</h1>
        <p>Aide au déploiement de l'application.</p>
      </div>

      <div class="projet-card">
        <a>
          <img alt="Architecture MVC" src="../../ressources/images/outils/mvc.webp">
        </a>
        <h1>Architecture MVC</h1>
        <p>Structure globale et pattern architecturale du projet.</p>
      </div>

      <div class="projet-card">
        <a href="https://www.php.net/">
          <img alt="PHP" src="../../ressources/images/outils/php.webp">
        </a>
        <h1>PHP</h1>
        <p>Développement coté serveur de l'application.</p>
      </div>

      <div class="projet-card">
        <a href="https://www.w3schools.com/html/">
          <img alt="HTML" src="../../ressources/images/outils/html.webp">
        </a>
        <h1>HTML</h1>
        <p>Développement de l'interface utilisateur.</p>
      </div>

      <div class="projet-card">
        <a alt="bootstrap" href="https://getbootstrap.com/">
          <img alt="Bootstrap" src="../../ressources/images/outils/bootstrap.webp">
        </a>
        <h1>Bootstrap</h1>
        <p>Mise en page responsive de l'interface graphique de l'application.</p>
      </div>

      <div class="projet-card">
        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript">
          <img alt="JavaScript" src="../../ressources/images/outils/js.webp">
        </a>
        <h1>JavaScript</h1>
        <p>Animations, dynamisme de l'interface, et réalisation des requêtes HTTP asychrones.</p>
      </div>

      <div class="projet-card">
        <a>
          <img alt="Programmation orientée objet" src="../../ressources/images/outils/oop.webp">
        </a>

        <h1>Programmation Orientée Objet</h1>
        <p>Pattern de développement de l'application.</p>
      </div>

      <div class="projet-card">
        <a href="https://www.mysql.com/fr/">
          <img alt="MySQL" src="../../ressources/images/outils/mysql.webp">
        </a>
        <h1>MySQL</h1>
        <p>Déploiement de la base de donnée sécurisée.</p>
      </div>

      <div class="projet-card">
        <a>
          <img alt="ApiREST" src="../../ressources/images/outils/apirest.webp">
        </a>
        <h1>API REST</h1>
        <p>Norme de communication avec l'interface de programmation de l'<a href="https://eldenring.fanapis.com/">API
          Elden Ring</a>.</p>
      </div>

      <div class="projet-card">
        <a>
          <img alt="JSON" src="../../ressources/images/outils/json.webp">
        </a>
        <h1>JSON</h1>
        <p>Format de données utilisées lors des communications faites à l'API via des requêtes HTTP.</p>
      </div>

    </template>

    <template #assets>

      <div class="projet-grid">

        <div class="projet-images">
          <a href="../../ressources/images/eldenbuild/eldenbuild_accueil.webp">
            <img alt="eldenbuild_accueil" src="../../ressources/images/eldenbuild/eldenbuild_accueil.webp">
          </a>
        </div>

        <div class="projet-images">
          <a href="../../ressources/images/eldenbuild/eldenbuild_inscription.webp">
            <img alt="eldenbuild_inscription"
                 src="../../ressources/images/eldenbuild/eldenbuild_inscription.webp">
          </a>
        </div>

        <div class="projet-images">
          <a href="../../ressources/images/eldenbuild/eldenbuild_build.webp">
            <img alt="eldenbuild_build" src="../../ressources/images/eldenbuild/eldenbuild_build.webp">
          </a>
        </div>

        <div class="projet-images">
          <a href="../../ressources/images/eldenbuild/eldenbuild_testapi.webp">
            <img alt="eldenbuild_testapi" src="../../ressources/images/eldenbuild/eldenbuild_testapi.webp">
          </a>
        </div>

        <div class="projet-images">
          <a href="../../ressources/images/eldenbuild/eldenbuild_profile.webp">
            <img alt="eldenbuild_profile" src="../../ressources/images/eldenbuild/eldenbuild_profile.webp">
          </a>
        </div>

        <div class="projet-images">
          <a href="../../ressources/images/eldenbuild/eldenbuild_getEquipement.webp">
            <img alt="eldenbuild_getEquipement"
                 src="../../ressources/images/eldenbuild/eldenbuild_getEquipement.webp">
          </a>
        </div>
      </div>
    </template>

    <template #liens>
      <a href="https://github.com/Doruo/EldenBuild">Page GitHub</a>
    </template>
  </ProjectItem>
</template>
