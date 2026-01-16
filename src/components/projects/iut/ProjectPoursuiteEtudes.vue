<script setup lang="ts">
import ProjectImageItem from '../abstract/ProjectImageItem.vue';
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue';
import SkillItem from '@/components/skills/SkillItem.vue';
import LinkItem from '@/components/links/LinkItem.vue';

import { ToolIcons, SocialIcons, LanguageIcons } from '@/data/Icons';
import { CollaboratorPictures, PoursuiteEtudesPictures } from '@/data/Pictures';
import { CollaboratorLinks, GithubLinks, LanguageLinks, ToolLinks, WebsiteLinks } from '@/data/Links';
import PortraitItem from '@/components/portraits/PortraitItem.vue';

</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="logo_iut" :src="PoursuiteEtudesPictures.LOGO_IUT" />
    </template>

    <template #title>Application d'avis de poursuite d'études</template>

    <template #description>
      <p>
        Dans le contexte du suivi de la scolarité au département informatique de l’IUT de
        Montpellier-Sète, le logiciel libre <a target="_blank" :href="WebsiteLinks.SCODOC">Scodoc</a> est utilisé pour
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
        animer la mêlée (<a target="_blank" :href="ToolLinks.SCRUM">Scrum</a>) pour l'équipe dans son ensemble en
        s'assurant que le framework Scrum est respecté. Mon travail consistait à aider à devenir
        autonome grâce à des techniques comme l’auto-organisation et la résolution des conflits.
      </p>

      <p>
        Contrairement à un chef de projet traditionnel dont l’objectif est de maintenir l’équipe et
        le projet sur la bonne voie, mon but consiste ici, en plus d'avoir contribué au
        developpement, à faire en sorte que l’équipe soit alignée sur le modèle
        <a target="_blank" :href=ToolLinks.SCRUM>Scrum</a>.
      </p>
    </template>

    <template #collaborators>
      <PortraitItem :link="CollaboratorLinks.PAULO_MOREIRA" :img="CollaboratorPictures.PAULO_MOREIRA" alt="PAULO_MOREIRA"/>
      <PortraitItem :link="CollaboratorLinks.DAMIEN_ROSTAING" :img="CollaboratorPictures.DAMIEN_ROSTAING" alt="DAMIEN_ROSTAING"/>
      <PortraitItem :link="CollaboratorLinks.EVAN_NUNES" :img="CollaboratorPictures.EVAN_NUNES" alt="EVAN_NUNES"/>
      <PortraitItem :link="CollaboratorLinks.HICHAM_FERHANI" :img="CollaboratorPictures.HICHAM_FERHANI" alt="HICHAM_FERHANI"/>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GITLAB" :link="ToolLinks.GITLAB" description="Gestion des versions du projet, et collaboration en équipe" />
      <SkillItem :img="ToolIcons.DOCKER" :link="ToolLinks.DOCKER" description="Aide au déploiement de l'application" />
      <SkillItem :img="ToolIcons.LDAP" :link="ToolLinks.LDAP" description="Authentification sécurisée avec le service d'annuaire de l'Université de Montpellier" />
      <SkillItem :img="LanguageIcons.PHP" :link="LanguageLinks.PHP" description="Développement coté serveur de l'application" />
      <SkillItem :img="ToolIcons.BOOTSTRAP" :link="ToolLinks.BOOTSTRAP" description="Mise en page de l'interface utilisateur" />
      <SkillItem :img="ToolIcons.POSTGRE" :link="ToolLinks.POSTGRE" description="Stockage de données sécurisé pour l'application" />
      <SkillItem :img="ToolIcons.PLSQL" :link="ToolLinks.PLSQL" description="Fonctions et 'triggers' dynamiques pour la base de données" />
      <SkillItem :img="ToolIcons.CHARTJS" :link="ToolLinks.CHARTJS" description="Graphiques comparatifs (Radar Chart) et médianes des résultats des étudiants" />
    </template>

    <template #assets>
        <ProjectImageItem :link="PoursuiteEtudesPictures.HOME" />
        <ProjectImageItem :link="PoursuiteEtudesPictures.CONNEXION" />
        <ProjectImageItem :link="PoursuiteEtudesPictures.NOTES" />
        <ProjectImageItem :link="PoursuiteEtudesPictures.AGREGATION" />
        <ProjectImageItem :link="PoursuiteEtudesPictures.CSV" />
        <ProjectImageItem :link="PoursuiteEtudesPictures.DIAGRAMME" />
    </template>

    <template #links>
      <LinkItem :link="GithubLinks.POURSUITE_ETUDES" :img="SocialIcons.GITHUB" />
      <LinkItem :link="PoursuiteEtudesPictures.SUBJECT" :img="ToolIcons.PDF" alt="Sujet" text="Sujet"/>
    </template>
  </ProjectItem>
</template>
