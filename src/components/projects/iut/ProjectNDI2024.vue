<script setup lang="ts">
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { Icons, SocialIcons } from '@/data/Icons'
import { Pictures } from '@/data/Pictures'
import { Links } from '@/data/Links'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="ndi2024" :src="Pictures.NDI2024_LOGO" />
    </template>

    <template #title>NUIT DE L'INFO 2024</template>

    <template #description>
      <h3>Race For Water</h3>
      <p>
        Application réalisée en 16h lors de l'évenement nationale de la
        <a :href="Links.NDI">Nuit de l'Info 2024</a>.
      </p>
      <p>
        Nous avons réalisé avec mon équipe une application ludique, faite avec Node.js et le
        framework <a :href="Links.EXPRESS">Express.js</a>, pour la fondation Race for Water, qui a
        pour mission de préserver l'eau et les océans, en particulier face à la pollution plastique.
      </p>
      <p>
        Le concept de l'application est un océan navigable, similaire au fonctionnement de Google
        Maps, dans laquelle se trouve différents organes interactifs qu'il faut trouver. Notre
        objectif était de sensibiliser sur l'état actuel des océans et leurs lien méconnu et
        particulier avec notre corps humain.
      </p>
      <p>
        Mon rôle fut de concevoir le router et l'API REST avec
        <a :href="Links.EXPRESS">Express.js</a>, chargé de récupérer les réquêtes et de renvoyer la
        page web demandée. J'ai donc dû concevoir cela de façon optimisé, en utilisant les
        différentes notions vus en cours en développement web de sorte d'éviter la surcharge de
        requêtes lorsque l'utilisateur souhaite accéder aux différentes pages lorsqu'il clique sur
        les différents organes.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="Icons.GIT" :link="Links.GIT" description="Versionnage du projet" />
      <SkillItem :img="Icons.HTML" :link="Links.HTML" description="Rédaction des articles" />
      <SkillItem :img="Icons.BOOTSTRAP" :link="Links.BOOTSTRAP" description="Mise en page visuelle des articles" />
      <SkillItem :img="Icons.EXPRESS" :link="Links.EXPRESS" description="Routage et implémentation de l'océan" />
    </template>

    <template #assets>
      <ProjectImageItem :link="Pictures.NDI2024_OCEAN" alt="Ocean" />
      <ProjectImageItem :link="Pictures.NDI2024_page" alt="page" />
      <ProjectImageItem :link="Pictures.NDI2024_GROUP" alt="groupe" />
      <ProjectImageItem :link="Pictures.NDI2024_WORK_1" alt="photo1" />
      <ProjectImageItem :link="Pictures.NDI2024_WORK_2" alt="photo2" />
      <ProjectImageItem :link="Pictures.NDI2024_WORK_3" alt="photo3" />
      <ProjectImageItem :link="Pictures.NDI2024_WORK_4" alt="photo4" />
      <ProjectImageItem :link="Pictures.NDI2024_WORK_5" alt="photo5" />
      <ProjectImageItem :link="Pictures.NDI2024_WORK_6" alt="photo6" />
    </template>

    <template #links>
      <LinkItem :link="Links.GITHUB_NDI2024" :img="SocialIcons.GITHUB" />
    </template>
  </ProjectItem>
</template>
