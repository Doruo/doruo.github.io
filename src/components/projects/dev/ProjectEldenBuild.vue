<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'

import { Links } from '@/data/Links'
import SkillGit from '@/components/skills/tools/SkillGit.vue'
import SkillPHP from '@/components/skills/backend/SkillPHP.vue'
import SkillDocker from '@/components/skills/tools/SkillDocker.vue'
import SkillHTML from '@/components/skills/frontend/SkillHTML.vue'
import SkillBootstrap from '@/components/skills/frontend/SkillBootstrap.vue'
import SkillJS from '@/components/skills/frontend/SkillJS.vue'
import SkillMySql from '@/components/skills/database/SkillMySql.vue'
import SkillAPI from '@/components/skills/backend/SkillAPI.vue'

import ranni from '@/assets/img/projets/eldenbuild/eldenring_ranni.webp'
import accueil from '@/assets/img/projets/eldenbuild/eldenbuild_accueil.webp'
import build from '@/assets/img/projets/eldenbuild/eldenbuild_build.webp'
import equipement from '@/assets/img/projets/eldenbuild/eldenbuild_getEquipement.webp'
import profile from '@/assets/img/projets/eldenbuild/eldenbuild_profile.webp'
import inscription from '@/assets/img/projets/eldenbuild/eldenbuild_inscription.webp'

import testAPI from '@/assets/img/projets/eldenbuild/eldenbuild_testapi.webp'
import LinkItem from '@/components/links/LinkItem.vue'
import { Pictures } from '@/data/Pictures'
</script>

<template>

  <ProjectItem>
    <template #logo_projet>
      <img alt="eldenbuild_logo" :src=ranni>
    </template>

    <template #title>Elden Build</template>

    <template #description>
      <p>
        Site web de gestion de build à but communautaire du jeu
        <a :href=Links.eldenring>Elden Ring</a>.
      </p>
      <p>
        Un build est par définition la construction et l'évolution d'un ensemble d'équipement du personnage
        incarné par le joueur.
        Entre choix (et évolution) des compétences, répartition des points d'expérience, bonus, armes, et autres
        avantages.
      </p>
      <p>
        Le but du site Elden Build était principalement d'en faire une plateforme vivante,
        et entretenue par la communauté internationale du jeu (d'où l'entièreté du site en anglais).
        Il y a actuellement très peu voir pas de site web existant réellement dédié pour créer des ensembles
        d'équipements au thème du jeu, malgré son immense communauté à travers le monde.
      </p>
      <p>
        Le projet, étant incomplet, était plus un exercice amusant pour comprendre PHP, JavaScript, les requêtes
        AJAX, l'architecture MVC et ses limites.
        L'application communique via des requêtes HTTP asynchrones à une<a :href=Links.eldenringapi>fan API Elden
          Ring</a>.
      </p>
      <p>
        Je compte peut-être à l'avenir refaire un projet similaire, mais en concevant la partie serveur avec
        Node.JS,
        ce qui facilitera l'amélioration du projet, l'optimisation de l'asynchronisme des requêtes, optimisera et
        améliorera son utilisation.
        Ce dernier pourrait également utiliser un système de forum en ligne où chacun pourrait débattre sur des
        sujets au thème du jeu.
      </p>
    </template>

    <template #abilities>
      <SkillGit description="Versioning (gestion des versions) du projet, et collaboration en équipe" />

      <SkillPHP description="Développement coté serveur de l'application" />

      <SkillDocker description="Aide au déploiement de l'application" />

      <SkillHTML description="Développement de l'interface utilisateur" />

      <SkillBootstrap description="Mise en page responsive de l'interface graphique de l'application" />

      <SkillJS description="Animations, dynamisme de l'interface, et réalisation des requêtes HTTP asychrones" />

      <SkillMySql description="Déploiement de la base de donnée sécurisée" />

      <SkillAPI description="Norme de communication avec l'API Elden Ring" />
    </template>

    <template #assets>
      <div class="projet-grid">
        <div class="projet-images">
          <a :href=accueil>
            <img alt="eldenbuild_accueil" :src=accueil>
          </a>
        </div>

        <div class="projet-images">
          <a :href=inscription>
            <img alt="eldenbuild_inscription" :src=inscription>
          </a>
        </div>

        <div class="projet-images">
          <a :href=build>
            <img alt="eldenbuild_build" :src=build>
          </a>
        </div>

        <div class="projet-images">
          <a :href=testAPI>
            <img alt="eldenbuild_testapi" :src=testAPI>
          </a>
        </div>

        <div class="projet-images">
          <a :href=profile>
            <img alt="eldenbuild_profile" :src=profile>
          </a>
        </div>

        <div class="projet-images">
          <a :href=equipement>
            <img alt="eldenbuild_getEquipement" :src=equipement>
          </a>
        </div>
      </div>
    </template>
    <template #liens>
      <LinkItem :link=Links.githubEldenbuild :img=Pictures.GITHUB />
    </template>
  </ProjectItem>

</template>
