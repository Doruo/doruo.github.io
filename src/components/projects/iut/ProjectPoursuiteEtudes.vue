<script setup lang="ts">
import ProjectImageItem from '../abstract/ProjectImageItem.vue';
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue';
import SkillItem from '@/components/skills/SkillItem.vue';
import LinkItem from '@/components/links/LinkItem.vue';

import { ToolIcons, SocialIcons, LanguageIcons } from '@/data/Icons';
import { CollaboratorPictures, PoursuiteEtudesPictures } from '@/data/Pictures';
import { CollaboratorLinks, ForgeLinks, LanguageLinks, ToolLinks, WebsiteLinks } from '@/data/Links';
import PortraitItem from '@/components/portraits/PortraitItem.vue';

</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="logo_iut" :src="PoursuiteEtudesPictures.LOGO_IUT" />
    </template>

    <template #title>Application de poursuite d'études</template>

    <template #description>
      <p>
        Dans le contexte du suivi de la scolarité au département informatique de l’IUT de
        Montpellier-Sète, le logiciel libre <a target="_blank" :href="WebsiteLinks.SCODOC">Scodoc</a>
        est utilisé pour gérer les absences et les notes des étudiants
        tout au long de leur scolarité à l’IUT.
      </p>
      <p>
        Cependant, il n’y a actuellement pas de logiciel permettant aux jurys, aux enseignants,
        ainsi qu’aux écoles recruteuses de facilement analyser les résultats à la fin du diplôme.
        L'IUT avait donc besoin d'une plateforme sécurisée permettant à chaque partie
        prenante de gérer la poursuite d'études d'un étudiant.
      </p>
      <p>
        Le but est de formaliser tous ces résultats pour faire ressortir les compétences
        les plus/moins acquises pour un étudiant donné, et de pouvoir les comparer peu
        importe leur parcours. Ces résultats seront visibles par les enseignants,
        et attribueront lors du grand conseil une décision finale à chacun.
        Ces écoles partenaires pourront ensuite s’authentifier, accéder
        aux décisions du conseil, et aux agrégations.
      </p>
      <p>
        Ce projet m'a permit d'approfondir mes connaissances en conception, sur le langage PHP,
        l'architecture MVC, le travail en équipe avec la gestion des branches Git,
        et la sécurisation d'authentification LDAP.
      </p>
      <p>
        En parrallèle de développeur, j'ai été amené à être le 'Scrum Master'.
        Mon rôle était de superviser le déroulement du projet, et
        animer les réunions quotidiennes pour l'équipe, en
        s'assurant que le framework <a target="_blank" :href=ToolLinks.SCRUM>Scrum</a> est respecté. J'ai aider mon équipe à rester
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
      <PortraitItem name="Paulo Moreira" :link="CollaboratorLinks.PAULO_MOREIRA" :img="CollaboratorPictures.PAULO_MOREIRA" alt="PAULO_MOREIRA"/>
      <PortraitItem name="Damien Rostaing" :link="CollaboratorLinks.DAMIEN_ROSTAING" :img="CollaboratorPictures.DAMIEN_ROSTAING" alt="DAMIEN_ROSTAING"/>
      <PortraitItem name="Evan Nunes" :link="CollaboratorLinks.EVAN_NUNES" :img="CollaboratorPictures.EVAN_NUNES" alt="EVAN_NUNES"/>
      <PortraitItem name="Hicham Ferhani" :link="CollaboratorLinks.HICHAM_FERHANI" :img="CollaboratorPictures.HICHAM_FERHANI" alt="HICHAM_FERHANI"/>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GITLAB" :link="ToolLinks.GITLAB" description="Gestion des versions du projet, et collaboration en équipe" />
      <SkillItem :img="LanguageIcons.PHP" :link="LanguageLinks.PHP" description="Développement coté serveur de l'application" />
      <SkillItem :img="ToolIcons.DOCKER" :link="ToolLinks.DOCKER" description="Aide au déploiement de l'application" />
      <SkillItem :img="ToolIcons.BOOTSTRAP" :link="ToolLinks.BOOTSTRAP" description="Mise en page de l'interface utilisateur" />
      <SkillItem :img="ToolIcons.AGILE" :link="ToolLinks.SCRUM" description="Auto-organisation entre équipe et client" />
      <SkillItem :img="ToolIcons.LDAP" :link="ToolLinks.LDAP" description="Authentification sécurisée avec le service d'annuaire de l'Université de Montpellier" />
      <SkillItem :img="ToolIcons.POSTGRE" :link="ToolLinks.POSTGRE" description="Stockage de données sécurisé pour l'application" />
      <SkillItem :img="ToolIcons.PLSQL" :link="ToolLinks.PLSQL" description="Fonctions et 'triggers' dynamiques pour la base de données" />
      <SkillItem :img="ToolIcons.CHARTJS" :link="ToolLinks.CHARTJS" description="Graphiques comparatifs (Radar Chart) et médianes des résultats des étudiants" />
    </template>

    <template #assets>
        <ProjectImageItem :link="PoursuiteEtudesPictures.CONNEXION" />
        <ProjectImageItem :link="PoursuiteEtudesPictures.HOME" />
        <ProjectImageItem :link="PoursuiteEtudesPictures.NOTES" />
        <ProjectImageItem :link="PoursuiteEtudesPictures.AGREGATION" />
        <ProjectImageItem :link="PoursuiteEtudesPictures.DETAILS" />
        <ProjectImageItem :link="PoursuiteEtudesPictures.CSV" />
    </template>

    <template #links>
      <LinkItem :link="ForgeLinks.POURSUITE_ETUDES" :img="SocialIcons.CODEBERG" />
      <LinkItem :link="PoursuiteEtudesPictures.SUBJECT" :img="ToolIcons.PDF" alt="Sujet" text="Sujet"/>
    </template>
  </ProjectItem>
</template>
