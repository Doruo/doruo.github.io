<script setup lang="ts">
import ProjectItem from '@/components/projects/common/ProjectItem.vue'
</script>

<template>

  <ProjectItem>
    <template #logo_projet>
      <img alt="logoIUT" src="../../ressources/images/IUT/logoIUT.webp">
    </template>

    <template #title>Application d'avis de poursuite d'étude</template>

    <template #description>
      <p>
        Dans le contexte du suivi de la scolarité au département informatique de l’IUT de Montpellier-Sète,
        le logiciel libre <a href="https://scodoc.org/">Scodoc</a> est utilisé pour gérer les absences et les notes
        des étudiants tout au long de leur scolarité à l’IUT.
      </p>

      <p>
        Cependant, il n’y a actuellement pas de logiciel permettant aux jurys, aux enseignants,
        ainsi qu’aux écoles recrutant de facilement analyser/comparer ces résultats à la fin de l’année.
        L'IUT avait donc besoin d'une plateforme web sécurisée permettant à chaque partie prenant de la
        poursuite
        d'étude d'un étudiant après son parcours au BUT.
      </p>

      <p>
        Ce projet a pour but de formaliser tous ces résultats pour faire ressortir les
        compétences les plus/moins acquises pour un étudiant donné,
        et de pouvoir le comparer à d’autres peu importe leur parcours.
      </p>

      <p>
        Ces résultats seront visibles par les enseignants,
        et attribueront lors du grand conseil une décision finale à chacun.
        Ces écoles partenaires pourront ensuite s’authentifier,
        accéder aux décisions du conseil, et aux agrégations.
      </p>

      <p>
        Mon rôle fut de superviser le développement du projet,
        animer la mêlée (<a href="https://chef-de-projet.fr/methodologie-scrum/">Scrum</a>) pour l'équipe dans son ensemble en s'assurant que le framework Scrum est
        respecté.
        Mon travail consistait à aider à devenir autonome grâce à des techniques comme l’auto-organisation et la
        résolution des conflits.
      </p>

      <p>
        Contrairement à un chef de projet traditionnel dont l’objectif est de maintenir l’équipe et le projet
        sur la bonne voie, mon but consiste ici, en plus d'avoir contribué au developpement, à faire en sorte que l’équipe soit alignée sur le modèle <a href="https://chef-de-projet.fr/methodologie-scrum/">Scrum</a>.
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
        <p>Aide au deploiement de l'application.</p>
      </div>

      <div class="projet-card">
        <a>
          <img alt="Architecture MVC" src="../../ressources/images/outils/mvc.webp">
        </a>
        <h1>Architecture MVC</h1>
        <p>Structure globale et pattern architecturale du projet.</p>
      </div>

      <div class="projet-card">
        <a href="https://fr.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol">
          <img alt="LDAP" src="../../ressources/images/outils/ldap.webp">
        </a>
        <h1>Protocole LDAP</h1>
        <p>Communication sécurisée avec le service d'annuaire de l'IUT de Montpellier-Sète.</p>
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
        <p>Mise en page de l'interface visuelle.</p>
      </div>

      <div class="projet-card">
        <a>
          <img alt="Programmation orientée objet" src="../../ressources/images/outils/oop.webp">
        </a>

        <h1>Programmation Orientée Objet</h1>
        <p>Pattern de développement de l'application.</p>
      </div>

      <div class="projet-card">
        <a href="https://www.postgresql.org/">
          <img alt="PostgreSQL" src="../../ressources/images/outils/postgresql.webp">
        </a>
        <h1>PostgreSQL</h1>
        <p>Réalisation de la base de donnée de l'application.</p>
      </div>

      <div class="projet-card">
        <a href="https://www.oracle.com/fr/database/technologies/appdev/plsql.html">
          <img alt="PL/SQL" src="../../ressources/images/outils/plsql.webp">
        </a>
        <h1>PL/SQL</h1>
        <p>Fonctionnement dynamique de la base de donnée.</p>
      </div>



      <div class="projet-card">
        <a href="https://www.chartjs.org/">
          <img alt="Chart.JS" src="../../ressources/images/outils/chartjs.webp">
        </a>
        <h1>Chart.JS</h1>
        <p>Graphiques comparatifs (Radar Chart) des résultats des étudiants et des médianes.</p>
      </div>

    </template>

    <template #assets>

      <div class="projet-grid">

        <div class="projet-images">
          <a href="../../ressources/images/poursuiteEtude/poursuite_etude_accueil_responsable.webp">
            <img alt="poursuiteEtude_accueil"
                 src="../../ressources/images/poursuiteEtude/poursuite_etude_accueil_responsable.webp">
          </a>
        </div>

        <div class="projet-images">
          <a href="../../ressources/images/poursuiteEtude/poursuite_etude_connexion.webp">
            <img alt="poursuiteEtude_connexion"
                 src="../../ressources/images/poursuiteEtude/poursuite_etude_connexion.webp">
          </a>
        </div>

        <div class="projet-images">
          <a href="../../ressources/images/poursuiteEtude/poursuite_etude_notes.webp">
            <img alt="poursuiteEtude_notes"
                 src="../../ressources/images/poursuiteEtude/poursuite_etude_notes.webp">
          </a>
        </div>

        <div class="projet-images">
          <a href="../../ressources/images/poursuiteEtude/poursuite_etude_agregation.webp">
            <img alt="poursuite_etude_agregation"
                 src="../../ressources/images/poursuiteEtude/poursuite_etude_agregation.webp">
          </a>
        </div>

        <div class="projet-images">
          <a href="../../ressources/images/poursuiteEtude/poursuite_etude_csv.webp">
            <img alt="poursuiteEtude_csv"
                 src="../../ressources/images/poursuiteEtude/poursuite_etude_csv.webp">
          </a>
        </div>

        <div class="projet-images">
          <a href="../../ressources/images/poursuiteEtude/poursuite_etude_diagramme_classes.webp">
            <img alt="poursuite_etude_diagramme_classes"
                 src="../../ressources/images/poursuiteEtude/poursuite_etude_diagramme_classes.webp">
          </a>
        </div>
      </div>
    </template>

    <template #liens>
      <a href="https://webinfo.iutmontp.univ-montp2.fr/~hayem/web/controleurFrontal.php">Visiter le site</a>
    </template>
  </ProjectItem>
</template>
