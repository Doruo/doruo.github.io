<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'

import { Links } from '@/data/Links'
import { Pictures } from '@/data/Pictures'

import ranni from '@/assets/img/projets/eldenbuild/eldenring_ranni.webp'
import accueil from '@/assets/img/projets/eldenbuild/eldenbuild_accueil.webp'
import build from '@/assets/img/projets/eldenbuild/eldenbuild_build.webp'
import equipement from '@/assets/img/projets/eldenbuild/eldenbuild_getEquipement.webp'
import profile from '@/assets/img/projets/eldenbuild/eldenbuild_profile.webp'
import inscription from '@/assets/img/projets/eldenbuild/eldenbuild_inscription.webp'
import testAPI from '@/assets/img/projets/eldenbuild/eldenbuild_testapi.webp'
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="eldenbuild_logo" :src="ranni" />
    </template>

    <template #title>Elden Build</template>

    <template #description>
      <p>
        Site web de gestion de build à but communautaire du jeu
        <a :href="Links.ELDEN_RING">Elden Ring</a>.
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
        requêtes HTTP asynchrones vers une <a :href="Links.ELDEN_RING_FAN_API">fan API d'Elden Ring</a>.
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
      <SkillItem :img="Pictures.GIT" :link="Links.GIT" description="Versioning (gestion des versions) du projet, et collaboration en équipe" />
      <SkillItem :img="Pictures.PHP" :link="Links.PHP" description="Développement coté serveur de l'application" />
      <SkillItem :img="Pictures.DOCKER" :link="Links.DOCKER" description="Aide au déploiement de l'application" />
      <SkillItem :img="Pictures.HTML" :link="Links.HTML" description="Développement de l'interface utilisateur" />
      <SkillItem :img="Pictures.BOOTSTRAP" :link="Links.BOOTSTRAP" description="Mise en page responsive de l'interface graphique de l'application" />
      <SkillItem :img="Pictures.JS" :link="Links.JS" description="Animations, dynamisme de l'interface, et réalisation des requêtes HTTP asychrones" />
      <SkillItem :img="Pictures.MYSQL" :link="Links.MYSQL" description="Déploiement de la base de donnée sécurisée" />
      <SkillItem :img="Pictures.REST" link="" description="Norme de communication avec l'API Elden Ring" />
    </template>

    <template #assets>
      <ProjectImageItem :link="accueil" alt="accueil" />
      <ProjectImageItem :link="inscription" alt="inscription" />
      <ProjectImageItem :link="build" alt="build" />
      <ProjectImageItem :link="profile" alt="profile" />
      <ProjectImageItem :link="testAPI" alt="testAPI" />
      <ProjectImageItem :link="equipement" alt="equipement" />
    </template>

    <template #liens>
      <LinkItem :link="Links.GITHUB_ELDEN_BUILD" :img="Pictures.GITHUB" />
    </template>

  </ProjectItem>
</template>
