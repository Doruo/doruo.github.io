<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'

import logoNDI from '@/assets/img/projets/ndi2024/logo-n2i-2024.webp'
import ocean from '@/assets/img/projets/ndi2024/ndi_ocean.webp'
import page from '@/assets/img/projets/ndi2024/ndi_page.webp'
import photoGroupe from '@/assets/img/projets/ndi2024/ndi_photo_groupe.webp'
import photo1 from '@/assets/img/projets/ndi2024/ndi_photo1.webp'
import photo2 from '@/assets/img/projets/ndi2024/ndi_photo2.webp'
import photo3 from '@/assets/img/projets/ndi2024/ndi_photo3.webp'
import photo4 from '@/assets/img/projets/ndi2024/ndi_photo4.webp'
import photo5 from '@/assets/img/projets/ndi2024/ndi_photo5.webp'
import photo6 from '@/assets/img/projets/ndi2024/ndi_photo6.webp'

import { Links } from '@/data/Links'
import LinkItem from '@/components/links/LinkItem.vue'
import { Pictures } from '@/data/Pictures'
import SkillItem from '@/components/skills/SkillItem.vue'
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="ndi2024" :src="logoNDI" />
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
      <SkillItem :img="Pictures.GIT" :link="Links.GIT" description="Versionnage du projet" />
      <SkillItem :img="Pictures.HTML" :link="Links.HTML" description="Rédaction des articles" />
      <SkillItem :img="Pictures.BOOTSTRAP" :link="Links.BOOTSTRAP" description="Mise en page visuelle des articles" />
      <SkillItem :img="Pictures.EXPRESS" :link="Links.EXPRESS" description="Routage et implémentation de l'océan" />
    </template>

    <template #assets>
      <ProjectImageItem :link="ocean" alt="Ocean" />
      <ProjectImageItem :link="page" alt="page" />
      <ProjectImageItem :link="photoGroupe" alt="groupe" />
      <ProjectImageItem :link="photo1" alt="photo1" />
      <ProjectImageItem :link="photo2" alt="photo2" />
      <ProjectImageItem :link="photo3" alt="photo3" />
      <ProjectImageItem :link="photo3" alt="photo3" />
      <ProjectImageItem :link="photo4" alt="photo4" />
      <ProjectImageItem :link="photo5" alt="photo5" />
      <ProjectImageItem :link="photo6" alt="photo6" />
    </template>

    <template #links>
      <LinkItem :link="Links.GITHUB_NDI" :img="Pictures.GITHUB" />
    </template>
  </ProjectItem>
</template>
