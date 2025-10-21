<script setup lang="ts">
import ProjectItem from '@/components/projects/common/ProjectItem.vue'

import logoNDI from '@/assets/images/projets/ndi2024/logo-n2i-2024.webp'
import ocean from '@/assets/images/projets/ndi2024/ndi_ocean.webp'
import page from '@/assets/images/projets/ndi2024/ndi_page.webp'
import photoGroupe from '@/assets/images/projets/ndi2024/ndi_photo_groupe.webp'
import photo1 from '@/assets/images/projets/ndi2024/ndi_photo1.webp'
import photo2 from '@/assets/images/projets/ndi2024/ndi_photo2.webp'
import photo3 from '@/assets/images/projets/ndi2024/ndi_photo3.webp'
import photo4 from '@/assets/images/projets/ndi2024/ndi_photo4.webp'
import photo5 from '@/assets/images/projets/ndi2024/ndi_photo5.webp'
import photo6 from '@/assets/images/projets/ndi2024/ndi_photo6.webp'

import { Links } from '@/data/Links'
import { Pictures } from '@/data/Pictures'
</script>

<template>

  <ProjectItem>
    <template #logo_projet>
      <img alt="ndi2024" :src=logoNDI>
    </template>

    <template #title>NUIT DE L'INFO 2024</template>

    <template #description>
      <h3>Race For Water</h3>
      <p>
        Application réalisée en 16h lors de l'évenement nationale de la
        <a :href=Links.NDI>Nuit de l'Info 2024</a>.
      </p>

      <p>
        Nous avons réalisé avec mon équipe une application ludique, faite avec Node.js et
        le framework <a :href=Links.EXPRESS>Express.js</a>, pour la fondation Race for Water, qui a pour mission de
        préserver l'eau et les océans, en particulier face à la pollution plastique.
      </p>

      <p>
        Le concept de l'application est un océan navigable, similaire au
        fonctionnement de Google Maps, dans laquelle se trouve différents organes interactifs qu'il faut
        trouver.
        Notre objectif était de sensibiliser sur l'état actuel des océans et leurs lien méconnu et
        particulier avec notre corps humain.
      </p>

      <p>
        Mon rôle fut de concevoir le router et l'API REST avec <a :href=Links.EXPRESS>Express.js</a>, chargé de récupérer
        les réquêtes et de renvoyer la page web demandée. J'ai donc dû concevoir
        cela de façon optimisé, en utilisant les différentes notions vus en cours en
        développement web de sorte d'éviter la surcharge de requêtes lorsque l'utilisateur
        souhaite accéder aux différentes pages lorsqu'il clique sur les différents organes.
      </p>
    </template>

    <template #abilities>

      <div class="projet-card">
        <a :href=Links.GIT>
          <img alt="GIT" :src=Pictures.GIT>
        </a>
        <h1>Git</h1>
        <p>Versioning (gestion des versions) du projet, et collaboration en équipe.</p>
      </div>

      <div class="projet-card">
        <a :href=Links.HTML>
          <img alt="HTML" :src=Pictures.HTML>
        </a>
        <h1>HTML</h1>
        <p>Réalisation du contenu rédigé des articles.</p>
      </div>

      <div class="projet-card">
        <a alt="bootstrap" :href=Links.BOOTSTRAP>
          <img alt="Bootstrap" :src=Pictures.BOOTSTRAP>
        </a>
        <h1>Bootstrap</h1>
        <p>Mise en page visuelles des articles.</p>
      </div>

      <div class="projet-card">
        <a :href=Links.JS>
          <img alt="JavaScript" :src=Pictures.JS>
        </a>
        <h1>JavaScript</h1>
        <p>Implémentation de l'océan naviguable.</p>
      </div>

      <div class="projet-card">
        <a :href=Links.NODE>
          <img alt="Node" :src=Pictures.NODE>
        </a>
        <h1>Node.js</h1>
        <p>Réalisation du serveur HTTP.</p>
      </div>

      <div class="projet-card">
        <a :href=Links.EXPRESS>
          <img alt="Express" :src=Pictures.EXPRESS>
        </a>
        <h1>Express.js</h1>
        <p>Routage et Gestion des dépendances de l'API.</p>
      </div>

    </template>

    <template #assets>

      <div class="projet-grid">

        <div class="projet-images">
          <a :href=ocean>
            <img alt="ndi_ocean" :src=ocean>
          </a>
        </div>

        <div class="projet-images">
          <a :href=page>
            <img alt="ndi_page" :src=page>
          </a>
        </div>

        <div class="projet-images">
          <a :href=photoGroupe>
            <img alt="ndi_photo_groupe" :src=photoGroupe>
          </a>
        </div>

        <div class="projet-images">
          <a :href=photo1>
            <img alt="ndi_photo1" :src=photo1>
          </a>
        </div>

        <div class="projet-images">
          <a :href=photo2>
            <img alt="ndi_photo2" :src=photo2>
          </a>
        </div>


        <div class="projet-images">
          <a :href=photo3>
            <img alt="ndi_photo3" :src=photo3>
          </a>
        </div>

        <div class="projet-images">
          <a :href=photo4>
            <img alt="ndi_photo4" :src=photo4>
          </a>
        </div>

        <div class="projet-images">
          <a :href=photo5>
            <img alt="ndi_photo5" :src=photo5>
          </a>
        </div>

        <div class="projet-images">
          <a :href=photo6>
            <img alt="ndi_photo6" :src=photo6>
          </a>
        </div>
      </div>
    </template>

    <template #liens>
      <a href="https://evanattack.fr/feature/nuitInfo.html">Plus d'informations</a>
      <a href="https://github.com/Doruo/NDI-2024-RaceForWater">Page GitHub</a>
    </template>
  </ProjectItem>
</template>
