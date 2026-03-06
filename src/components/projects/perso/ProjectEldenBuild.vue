<script setup lang="ts">
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons, LanguageIcons } from '@/data/Icons'
import { EldenBuildPictures } from '@/data/Pictures'
import { ToolLinks, ForgeLinks, WebsiteLinks, LanguageLinks } from '@/data/Links'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img :alt=EldenBuildPictures.LOGO :src="EldenBuildPictures.LOGO" />
    </template>

    <template #title>Elden Build</template>

    <template #description>
      <p>
        Site web de gestion de build à but communautaire du jeu vidéo
        <a :href="WebsiteLinks.ELDEN_RING">Elden Ring</a>.
      </p>
      <p>
        Un build est par définition la construction et l'évolution d'un ensemble d'équipement du
        personnage incarné par le joueur. Entre choix (et évolution) des compétences, répartition
        des points d'expérience, bonus, armes, et autres avantages.
      </p>
      <p>
        Le but du site Elden Build était principalement d'en faire une plateforme vivante, et
        entretenue par la communauté internationale du jeu (d'où l'entièreté du site en anglais). Il
        y a actuellement très peu voir pas de site web existant réellement dédié pour créer des
        ensembles d'équipements au thème du jeu, malgré son immense communauté à travers le monde.
      </p>
      <p>
        Le projet, étant incomplet, était plus un exercice amusant pour comprendre PHP, JavaScript,
        les requêtes AJAX, l'architecture MVC et ses limites. L'application communique via des
        requêtes HTTP asynchrones vers une <a target="_blank" :href="WebsiteLinks.ELDEN_RING_FAN_API">fan API d'Elden Ring</a>.
      </p>
      <p>
        Je compte peut-être à l'avenir refaire un projet similaire, mais en concevant la partie
        serveur avec Node.JS, ce qui facilitera l'amélioration du projet, l'optimisation de
        l'asynchronisme des requêtes, optimisera et améliorera son utilisation. Ce dernier pourrait
        également utiliser un système de forum en ligne où chacun pourrait débattre sur des sujets
        au thème du jeu.
      </p>
      <p>
        Le jeu Elden Ring et le personnage de Ranni sont des propriétés de FromSoftware et BANDAI NAMCO INC.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.CODEBERG" :link="ToolLinks.CODEBERG" description="Gestion des versions du projet" />
      <SkillItem :img="LanguageIcons.PHP" :link="LanguageLinks.PHP" description="Développement coté serveur de l'application" />
      <SkillItem :img="LanguageIcons.JS" :link="LanguageLinks.JS" description="Animations, dynamisme de l'interface, et réalisation des requêtes HTTP asychrones" />
      <SkillItem :img="ToolIcons.MYSQL" :link="ToolLinks.MYSQL" description="Déploiement de la base de donnée sécurisée" />
      <SkillItem :img="ToolIcons.REST" link="" description="Norme de communication avec l'API Elden Ring" />
      <SkillItem :img="ToolIcons.BOOTSTRAP" :link="ToolLinks.BOOTSTRAP" description="Mise en page responsive de l'interface graphique de l'application" />
    </template>

    <template #assets>
      <ProjectImageItem :link="EldenBuildPictures.HOME" :alt="EldenBuildPictures.HOME" />
      <ProjectImageItem :link="EldenBuildPictures.INSCRIPTION" :alt="EldenBuildPictures.INSCRIPTION" />
      <ProjectImageItem :link="EldenBuildPictures.PROFILE" :alt="EldenBuildPictures.PROFILE" />
      <ProjectImageItem :link="EldenBuildPictures.BUILD" :alt="EldenBuildPictures.BUILD" />
      <ProjectImageItem :link="EldenBuildPictures.API_CALL" :alt="EldenBuildPictures.API_CALL" />
      <ProjectImageItem :link="EldenBuildPictures.EQUIPMENT" :alt="EldenBuildPictures.EQUIPMENT" />
    </template>

    <template #links>
      <LinkItem :link="ForgeLinks.ELDEN_BUILD" :img="SocialIcons.CODEBERG" />
    </template>

  </ProjectItem>
</template>
