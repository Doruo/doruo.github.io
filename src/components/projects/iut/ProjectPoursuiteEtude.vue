<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'

import logoIUT from '@/assets/images/projets/IUT/logoIUT.webp'
import accueil from '@/assets/images/projets/poursuiteEtude/poursuite_etude_accueil_responsable.webp'
import agregation from '@/assets/images/projets/poursuiteEtude/poursuite_etude_agregation.webp'
import connexion from '@/assets/images/projets/poursuiteEtude/poursuite_etude_connexion.webp'
import csv from '@/assets/images/projets/poursuiteEtude/poursuite_etude_csv.webp'
import diagramme from '@/assets/images/projets/poursuiteEtude/poursuite_etude_diagramme_classes.webp'
import notes from '@/assets/images/projets/poursuiteEtude/poursuite_etude_notes.webp'

import { Links } from '@/data/Links'
import SkillGit from '@/components/skills/tools/SkillGit.vue'
import SkillDocker from '@/components/skills/tools/SkillDocker.vue'
import SkillMvc from '@/components/skills/tools/SkillMvc.vue'
import SkillLDAP from '@/components/skills/backend/SkillLDAP.vue'
import SkillPHP from '@/components/skills/backend/SkillPHP.vue'
import SkillHTML from '@/components/skills/frontend/SkillHTML.vue'
import SkillBootstrap from '@/components/skills/frontend/SkillBootstrap.vue'
import SkillOOP from '@/components/skills/tools/SkillOOP.vue'
import SkillPostgre from '@/components/skills/database/SkillPostgre.vue'
import SkillPLSql from '@/components/skills/database/SkillPLSql.vue'
import SkillChartJS from '@/components/skills/tools/SkillChartJS.vue'
import LinkGithub from '@/components/links/social/LinkGithub.vue'

</script>

<template>

  <ProjectItem>
    <template #logo_projet>
      <img alt="logoIUT" :src=logoIUT>
    </template>

    <template #title>Application d'avis de poursuite d'étude</template>

    <template #description>
      <p>
        Dans le contexte du suivi de la scolarité au département informatique de l’IUT de Montpellier-Sète,
        le logiciel libre <a :href=Links.scodoc>Scodoc</a> est utilisé pour gérer les absences et les notes
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
        Ce projet a eu lieu dans le cadre des Situations d'Apprentissage et Évaluation de l'IUT Montpellier-Sête.
      </p>

      <p>
        Ces résultats seront visibles par les enseignants,
        et attribueront lors du grand conseil une décision finale à chacun.
        Ces écoles partenaires pourront ensuite s’authentifier,
        accéder aux décisions du conseil, et aux agrégations.
      </p>

      <p>
        Mon rôle fut de concevoir, développer en équipe, et superviser le déroulement du projet, et
        animer la mêlée (<a :href=Links.scrum>Scrum</a>) pour l'équipe dans son ensemble en s'assurant que le framework Scrum est
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
      <SkillGit description="Versioning (gestion des versions) du projet, et collaboration en équipe"/>

      <SkillDocker description="Aide au deploiement de l'application"/>

      <SkillMvc description="Structure globale et pattern architecturale du projet"/>

      <SkillLDAP description="Communication sécurisée avec le service d'annuaire de l'IUT de Montpellier-Sète"/>

      <SkillPHP description="Développement coté serveur de l'application"/>

      <SkillHTML description="Développement de l'interface utilisateur"/>

      <SkillBootstrap description="Mise en page de l'interface visuelle"/>

      <SkillOOP description="Pattern de développement de l'application"/>

      <SkillPostgre description="Réalisation de la base de donnée de l'application"/>

      <SkillPLSql description="Fonctions et triggers dynamiques dans la base de donnée"/>

      <SkillChartJS description="Graphiques comparatifs (Radar Chart) et médianes des résultats des étudiants"/>
    </template>

    <template #assets>

      <div class="projet-grid">

        <div class="projet-images">
          <a :href=accueil>
            <img alt="poursuiteEtude_accueil" :src=accueil>
          </a>
        </div>

        <div class="projet-images">
          <a :href=connexion>
            <img alt="poursuiteEtude_connexion" :src=connexion>
          </a>
        </div>

        <div class="projet-images">
          <a :href=notes>
            <img alt="poursuiteEtude_notes" :src=notes>
          </a>
        </div>

        <div class="projet-images">
          <a :href=agregation>
            <img alt="poursuite_etude_agregation" :src=agregation>
          </a>
        </div>

        <div class="projet-images">
          <a :href=csv>
            <img alt="poursuiteEtude_csv" :src=csv>
          </a>
        </div>

        <div class="projet-images">
          <a :href=diagramme>
            <img alt="poursuite_etude_diagramme_classes" :src=diagramme>
          </a>
        </div>
      </div>
    </template>

    <template #liens>
      <LinkGithub :link=Links.githubPoursuiteEtudes />
    </template>
  </ProjectItem>
</template>
