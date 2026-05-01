<script setup lang="ts">
import ProjectImageItem from '../abstract/ProjectImageItem.vue';
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue';
import SkillItem from '@/components/skills/SkillItem.vue';
import LinkItem from '@/components/links/LinkItem.vue';

import { ToolIcons, SocialIcons, LanguageIcons } from '@/data/Icons';
import { CollaboratorsImg, PoursuiteEtudesImg } from '@/data/Pictures';
import { CollaboratorLinks, ForgeLinks, LanguageLinks, ToolLinks, WebsiteLinks } from '@/data/Links';
import PortraitItem from '@/components/portraits/PortraitItem.vue';

</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="logo_iut" :src="PoursuiteEtudesImg.LOGO_IUT" />
    </template>

    <template #title>Application de poursuite d'études</template>

    <template #description>
      <p>
        Dans le contexte du suivi de la scolarité au département informatique de l’IUT de
        Montpellier-Sète, le logiciel libre <a target="_blank" :href="WebsiteLinks.SCODOC">Scodoc</a>
        est utilisé pour gérer les notes des étudiants
        tout au long de leur scolarité.
      </p>
      <p>
        Cependant, il n'existe aucun logiciel permettant aux jurys, aux enseignants,
        ainsi qu’aux écoles recruteuses de facilement analyser les résultats à la fin du diplôme.
      </p>
      <p>  
        L'IUT avait donc besoin d'une plateforme sécurisée permettant à chaque partie
        prenante de gérer la poursuite d'études d'un étudiant.
      </p>
      <p>
        Ces résultats doivent être formalisés pour faire ressortir les compétences
        les plus/moins acquises, et pouvoir comparer les étudiants peu
        importe leur parcours.
      </p>
      <p>
        Ces résultats sont visibles par les enseignants,
        et attribueront lors du grand conseil une décision finale à chacun.
        Les écoles partenaires pourront ensuite s’authentifier, accéder
        aux décisions du conseil, et aux agrégations.
      </p>
      <p>
        Ce projet m'a permit d'établir des connaissances dans l'analyse,
        l'architecture MVC, le travail en équipe avec la gestion des versions,
        ainsi que la sécurisation d'authentification <a target="_blank" :href=ToolLinks.LDAP>LDAP</a>.
      </p>
      <p>
        En parrallèle de développeur, j'ai été amené à être le 'Scrum Master'.
        Mon rôle était de superviser le déroulement du projet, et
        animer les réunions quotidiennes pour l'équipe, en
        s'assurant que le framework <a target="_blank" :href=ToolLinks.SCRUM>Scrum</a> est respecté. J'ai aider mon
        équipe à rester
        autonome grâce à des techniques comme l’auto-organisation et la résolution des conflits.
      </p>

    </template>

    <template #collaborators>
      <PortraitItem name="Paulo Moreira" :link="CollaboratorLinks.PAULO_MOREIRA" :img="CollaboratorsImg.PAULO_MOREIRA"
        alt="PAULO_MOREIRA" />
      <PortraitItem name="Damien Rostaing" :link="CollaboratorLinks.DAMIEN_ROSTAING"
        :img="CollaboratorsImg.DAMIEN_ROSTAING" alt="DAMIEN_ROSTAING" />
      <PortraitItem name="Evan Nunes" :link="CollaboratorLinks.EVAN_NUNES" :img="CollaboratorsImg.EVAN_NUNES"
        alt="EVAN_NUNES" />
      <PortraitItem name="Hicham Ferhani" :link="CollaboratorLinks.HICHAM_FERHANI"
        :img="CollaboratorsImg.HICHAM_FERHANI" alt="HICHAM_FERHANI" />
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GITLAB" :link="ToolLinks.GITLAB"
        description="Gestion des versions du projet, et collaboration en équipe" />
      <SkillItem :img="LanguageIcons.PHP" :link="LanguageLinks.PHP"
        description="Développement coté serveur de l'application" />
      <SkillItem :img="ToolIcons.DOCKER" :link="ToolLinks.DOCKER" description="Aide au déploiement de l'application" />
      <SkillItem :img="ToolIcons.BOOTSTRAP" :link="ToolLinks.BOOTSTRAP"
        description="Mise en page de l'interface utilisateur" />
      <SkillItem :img="ToolIcons.AGILE" :link="ToolLinks.SCRUM"
        description="Auto-organisation entre équipe et client" />
      <SkillItem :img="ToolIcons.LDAP" :link="ToolLinks.LDAP"
        description="Authentification sécurisée avec le service d'annuaire de l'Université de Montpellier" />
      <SkillItem :img="ToolIcons.POSTGRE" :link="ToolLinks.POSTGRE"
        description="Stockage de données sécurisé pour l'application" />
      <SkillItem :img="ToolIcons.PLSQL" :link="ToolLinks.PLSQL"
        description="Fonctions et 'triggers' dynamiques pour la base de données" />
      <SkillItem :img="ToolIcons.CHARTJS" :link="ToolLinks.CHARTJS"
        description="Graphiques comparatifs (Radar Chart) et médianes des résultats des étudiants" />
    </template>

    <template #assets-concept>
      <ProjectImageItem :link="PoursuiteEtudesImg.CASE_DIAGRAM" :alt="PoursuiteEtudesImg.CASE_DIAGRAM" />
      <ProjectImageItem :link="PoursuiteEtudesImg.CLASS_DIAGRAM" :alt="PoursuiteEtudesImg.CLASS_DIAGRAM" />
      <ProjectImageItem :link="PoursuiteEtudesImg.DATABASE" :alt="PoursuiteEtudesImg.DATABASE" />
    </template>

    <template #assets>
      <ProjectImageItem :link="PoursuiteEtudesImg.CONNEXION" />
      <ProjectImageItem :link="PoursuiteEtudesImg.HOME" />
      <ProjectImageItem :link="PoursuiteEtudesImg.NOTES" />
      <ProjectImageItem :link="PoursuiteEtudesImg.AGREGATION" />
      <ProjectImageItem :link="PoursuiteEtudesImg.DETAILS" />
      <ProjectImageItem :link="PoursuiteEtudesImg.CSV" />
    </template>

    <template #links>
      <LinkItem :link="PoursuiteEtudesImg.SUBJECT" :img="ToolIcons.PDF" alt="Sujet" text="Sujet" />
      <LinkItem :link="ForgeLinks.POURSUITE_ETUDES" :img="SocialIcons.CODEBERG" />
    </template>
  </ProjectItem>
</template>
