<script setup lang="ts">
import ProjectImageItem from '../abstract/ProjectImageItem.vue';
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue';
import SkillItem from '@/components/skills/SkillItem.vue';
import LinkItem from '@/components/links/LinkItem.vue';

import { Icons, SocialIcons } from '@/data/Icons';
import { Pictures } from '@/data/Pictures';
import { Links } from '@/data/Links';

import sujet from '/IUT/A2/SAE-Poursuite-Etude/lancement_SAE3A_poursuiteEtudes.pdf';

</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="logoIUT" :src="Pictures.POURSUITE_ETUDES_LOGO_IUT" />
    </template>

    <template #title>Application d'avis de poursuite d'études</template>

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
      <SkillItem :img="Icons.GIT" :link="Links.GIT" description="Versioning (gestion des versions) du projet, et collaboration en équipe" />
      <SkillItem :img="Icons.DOCKER" :link="Links.DOCKER" description="Aide au deploiement de l'application" />
      <SkillItem :img="Icons.LDAP" :link="Links.LDAP" description="Communication sécurisée avec le service d'annuaire de l'IUT de Montpellier-Sète" />
      <SkillItem :img="Icons.PHP" :link="Links.PHP" description="Développement coté serveur de l'application" />
      <SkillItem :img="Icons.BOOTSTRAP" :link="Links.BOOTSTRAP" description="Mise en page de l'interface visuelle" />
      <SkillItem :img="Icons.POSTGRE" :link="Links.POSTGRE" description="Base de données de l'application" />
      <SkillItem :img="Icons.PLSQL" :link="Links.PLSQL" description="Fonctions et triggers dynamiques dans la base de donnée" />
      <SkillItem :img="Icons.CHARTJS" :link="Links.CHARTJS" description="Graphiques comparatifs (Radar Chart) et médianes des résultats des étudiants" />
    </template>

    <template #assets>
        <ProjectImageItem :link="Pictures.POURSUITE_ETUDES_HOME" />
        <ProjectImageItem :link="Pictures.POURSUITE_ETUDES_CONNEXION" />
        <ProjectImageItem :link="Pictures.POURSUITE_ETUDES_NOTES" />
        <ProjectImageItem :link="Pictures.POURSUITE_ETUDES_AGREGATION" />
        <ProjectImageItem :link="Pictures.POURSUITE_ETUDES_CSV" />
        <ProjectImageItem :link="Pictures.POURSUITE_ETUDES_DIAGRAMME" />
    </template>

    <template #links>
      <LinkItem :link="Links.GITHUB_POURSUITE_ETUDES" :img="SocialIcons.GITHUB" />
      <LinkItem :link="sujet" alt="Sujet du projet" />
    </template>
  </ProjectItem>
</template>
