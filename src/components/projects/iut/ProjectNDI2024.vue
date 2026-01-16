<script setup lang="ts">
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons } from '@/data/Icons'
import { CollaboratorPictures, NDI2024Pictures } from '@/data/Pictures'
import { CollaboratorLinks, GithubLinks, ToolLinks, WebsiteLinks } from '@/data/Links'
import PortraitItem from '@/components/portraits/PortraitItem.vue'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="logo ndi 2024" :src="NDI2024Pictures.LOGO" />
    </template>

    <template #title>NUIT DE L'INFO 2024</template>

    <template #description>
      <h3>Race For Water</h3>
      <p>
        Application réalisée en 16h lors de l'évenement nationale de la
        <a :href="WebsiteLinks.NDI">Nuit de l'Info 2024</a>.
      </p>
      <p>
        Nous avons réalisé avec mon équipe une application ludique, faite avec Node.js et le
        framework <a :href="ToolLinks.EXPRESS">Express.js</a>, pour la fondation Race for Water, qui a
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
        <a :href="ToolLinks.EXPRESS">Express.js</a>, chargé de récupérer les réquêtes et de renvoyer la
        page web demandée. J'ai donc dû concevoir cela de façon optimisé, en utilisant les
        différentes notions vus en cours en développement web de sorte d'éviter la surcharge de
        requêtes lorsque l'utilisateur souhaite accéder aux différentes pages lorsqu'il clique sur
        les différents organes.
      </p>
    </template>

    <template #collaborators>
      <PortraitItem name="Mattéo Benhalima" :link="CollaboratorLinks.MATTEO_BENHALIMA" :img="CollaboratorPictures.MATTEO_BENHALIMA" alt="MATTEO_BENHALIMA"/>
      <PortraitItem name="Evan Nunes" :link="CollaboratorLinks.EVAN_NUNES" :img="CollaboratorPictures.EVAN_NUNES" alt="EVAN_NUNES"/>
      <PortraitItem name="Damien Rostaing" :link="CollaboratorLinks.DAMIEN_ROSTAING" :img="CollaboratorPictures.DAMIEN_ROSTAING" alt="DAMIEN_ROSTAING"/>
      <PortraitItem name="Paulo Moreira" :link="CollaboratorLinks.PAULO_MOREIRA" :img="CollaboratorPictures.PAULO_MOREIRA" alt="PAULO_MOREIRA"/>
      <PortraitItem name="Yann Bodiguel" :link="CollaboratorLinks.YANN_BODIGUEL" :img="CollaboratorPictures.YANN_BODIGUEL" alt="YANN_BODIGUEL"/>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GITHUB" :link="ToolLinks.GITHUB" description="Gestion des versions, et collaboration en équipe" />
      <SkillItem :img="ToolIcons.EXPRESS" :link="ToolLinks.EXPRESS" description="Routage et implémentation de l'océan" />
      <SkillItem :img="ToolIcons.BOOTSTRAP" :link="ToolLinks.BOOTSTRAP" description="Mise en page de l'interface des articles" />
    </template>

    <template #assets>
      <ProjectImageItem :link="NDI2024Pictures.OCEAN" alt="Ocean" />
      <ProjectImageItem :link="NDI2024Pictures.PAGE" alt="page" />
      <ProjectImageItem :link="NDI2024Pictures.GROUP" alt="groupe" />
      <ProjectImageItem :link="NDI2024Pictures.WORK_1" alt="photo1" />
      <ProjectImageItem :link="NDI2024Pictures.WORK_2" alt="photo2" />
      <ProjectImageItem :link="NDI2024Pictures.WORK_3" alt="photo3" />
      <ProjectImageItem :link="NDI2024Pictures.WORK_4" alt="photo4" />
      <ProjectImageItem :link="NDI2024Pictures.WORK_5" alt="photo5" />
      <ProjectImageItem :link="NDI2024Pictures.WORK_6" alt="photo6" />
    </template>

    <template #links>
      <LinkItem :link="GithubLinks.NDI2024" :img="SocialIcons.GITHUB" />
    </template>
  </ProjectItem>
</template>
