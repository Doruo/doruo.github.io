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
        Durant la fin de ma première année d'études, j'ai conçu dans mon temps libre 
        <b>Elden Build</b> :
        un site web de gestion de build à but communautaire du jeu vidéo
        <a :href="WebsiteLinks.ELDEN_RING">Elden Ring</a>.
      </p>
      
      <p>
        Un build est un ensemble d'équipements utilisables dans le jeu: armes, armures, 
        compétences, points d'expérience, etc.
      </p>
      
      <p>
        Le concept du site est une plateforme vivante et
        entretenue par la communauté internationale du jeu. 
      </p>
      
      <p>     
        Il y a actuellement très peu voir pas de site web existant réellement dédié pour créer des
        ensembles d'équipements au thème du jeu, malgré son immense communauté à travers le monde.
      </p>

      <p>
        Le projet, étant incomplet, était plus un défi personnel pour comprendre PHP, JavaScript,
        les requêtes AJAX, et l'architecture MVC. 
        L'application communique en temps réel avec une <a target="_blank" :href="WebsiteLinks.ELDEN_RING_FAN_API">API</a>.
      </p>
      <p>
        Je compte peut-être à l'avenir reconstruit le projet avec Node.JS, 
        et implémenter un forum en ligne où chacun pourrait débattre autour du jeu.
      </p>
      <p>
        Le jeu Elden Ring est propriété exclusive de FromSoftware et BANDAI NAMCO INC.
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
