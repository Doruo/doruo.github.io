<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'

import logoIUT from '@/assets/img/projets/IUT/logoIUT.webp'
import accueil from '@/assets/img/projets/poursuiteEtude/poursuite_etude_accueil_responsable.webp'
import agregation from '@/assets/img/projets/poursuiteEtude/poursuite_etude_agregation.webp'
import connexion from '@/assets/img/projets/poursuiteEtude/poursuite_etude_connexion.webp'
import csv from '@/assets/img/projets/poursuiteEtude/poursuite_etude_csv.webp'
import diagramme from '@/assets/img/projets/poursuiteEtude/poursuite_etude_diagramme_classes.webp'
import notes from '@/assets/img/projets/poursuiteEtude/poursuite_etude_notes.webp'

import sujet from '/IUT/A2/SAE-Poursuite-Etude/lancement_SAE3A_poursuiteEtudes.pdf'

import { Links } from '@/data/Links'
import LinkItem from '@/components/links/LinkItem.vue'
import { Pictures } from '@/data/Pictures'
import SkillItem from '@/components/skills/SkillItem.vue'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="logoIUT" :src="logoIUT" />
    </template>

    <template #title>Application d'avis de poursuite d'étude</template>

    <template #description>
      <p>
        Dans le contexte du suivi de la scolarité au département informatique de l’IUT de
        Montpellier-Sète, le logiciel libre <a :href="Links.SCODOC">Scodoc</a> est utilisé pour
        gérer les absences et les notes des étudiants tout au long de leur scolarité à l’IUT.
      </p>

      <p>
        Cependant, il n’y a actuellement pas de logiciel permettant aux jurys, aux enseignants,
        ainsi qu’aux écoles recrutant de facilement analyser/comparer ces résultats à la fin de
        l’année. L'IUT avait donc besoin d'une plateforme web sécurisée permettant à chaque partie
        prenant de la poursuite d'étude d'un étudiant après son parcours au BUT.
      </p>

      <p>
        Ce projet a pour but de formaliser tous ces résultats pour faire ressortir les compétences
        les plus/moins acquises pour un étudiant donné, et de pouvoir le comparer à d’autres peu
        importe leur parcours. Ce projet a eu lieu dans le cadre des Situations d'Apprentissage et
        Évaluation de l'IUT Montpellier-Sête.
      </p>

      <p>
        Ces résultats seront visibles par les enseignants, et attribueront lors du grand conseil une
        décision finale à chacun. Ces écoles partenaires pourront ensuite s’authentifier, accéder
        aux décisions du conseil, et aux agrégations.
      </p>

      <p>
        Mon rôle fut de concevoir, développer en équipe, et superviser le déroulement du projet, et
        animer la mêlée (<a :href="Links.SCRUM">Scrum</a>) pour l'équipe dans son ensemble en
        s'assurant que le framework Scrum est respecté. Mon travail consistait à aider à devenir
        autonome grâce à des techniques comme l’auto-organisation et la résolution des conflits.
      </p>

      <p>
        Contrairement à un chef de projet traditionnel dont l’objectif est de maintenir l’équipe et
        le projet sur la bonne voie, mon but consiste ici, en plus d'avoir contribué au
        developpement, à faire en sorte que l’équipe soit alignée sur le modèle
        <a href="https://chef-de-projet.fr/methodologie-scrum/">Scrum</a>.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="Pictures.GIT" :link="Links.GIT"
        description="Versioning (gestion des versions) du projet, et collaboration en équipe" />

      <SkillItem :img="Pictures.DOCKER" :link="Links.DOCKER" description="Aide au deploiement de l'application" />

      <SkillItem :img="Pictures.LDAP" :link="Links.LDAP"
        description="Communication sécurisée avec le service d'annuaire de l'IUT de Montpellier-Sète" />

      <SkillItem :img="Pictures.PHP" :link="Links.PHP" description="Développement coté serveur de l'application" />

      <SkillItem :img="Pictures.BOOTSTRAP" :link="Links.BOOTSTRAP" description="Mise en page de l'interface visuelle" />

      <SkillItem :img="Pictures.POSTGRE" :link="Links.POSTGRE" description="Base de donnée de l'application" />

      <SkillItem :img="Pictures.PLSQL" :link="Links.PLSQL"
        description="Fonctions et triggers dynamiques dans la base de donnée" />

      <SkillItem :img="Pictures.CHARTJS" :link="Links.CHARTJS"
        description="Graphiques comparatifs (Radar Chart) et médianes des résultats des étudiants" />
    </template>

    <template #assets>
      <div class="projet-grid">
        <div class="projet-images">
          <a :href="accueil">
            <img alt="poursuiteEtude_accueil" :src="accueil" />
          </a>
        </div>

        <div class="projet-images">
          <a :href="connexion">
            <img alt="poursuiteEtude_connexion" :src="connexion" />
          </a>
        </div>

        <div class="projet-images">
          <a :href="notes">
            <img alt="poursuiteEtude_notes" :src="notes" />
          </a>
        </div>

        <div class="projet-images">
          <a :href="agregation">
            <img alt="poursuite_etude_agregation" :src="agregation" />
          </a>
        </div>

        <div class="projet-images">
          <a :href="csv">
            <img alt="poursuiteEtude_csv" :src="csv" />
          </a>
        </div>

        <div class="projet-images">
          <a :href="diagramme">
            <img alt="poursuite_etude_diagramme_classes" :src="diagramme" />
          </a>
        </div>
      </div>
    </template>

    <template #liens>
      <LinkItem :link="Links.GITHUB_POURSUITE_ETUDES" :img="Pictures.GITHUB" />
      <a :href="sujet" target="blank">Sujet du projet</a>
    </template>
  </ProjectItem>
</template>
