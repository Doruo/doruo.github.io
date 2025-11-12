<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import ProjectImageItem from '../abstract/ProjectImageItem.vue'

import gol_logo from '@/assets/img/projets/gol/gol_logo.webp'
import gol1 from '@/assets/img/projets/gol/gol1.webp'
import gol2 from '@/assets/img/projets/gol/gol2.webp'
import gol3 from '@/assets/img/projets/gol/gol3.webp'

import { Links } from '@/data/Links'
import { Pictures } from '@/data/Pictures'

import LinkItem from '@/components/links/LinkItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
</script>

<template>
  <ProjectItem>

    <template #logo_projet>
      <img alt="gameoflife_logo" :src="gol_logo" />
    </template>

    <template #title>Conway's Game of Life</template>

    <template #description>
      <p>
        Le <a :href=Links.GAME_OF_LIFE target="_blank">Jeu de la Vie</a> est une simulation mathématique imaginé par
        <a href="https://fr.wikipedia.org/wiki/John_Horton_Conway" target="_blank">John Horton Conway</a> en 1970.
      </p>
      <p>C'est un automate cellulaire ludique utilisé dans la recherche biologique pour simuler la vie.</p>
      <p>
        Il y a une interface graphique fonctionnel sur terminal,
        et je travaille actuellement sur une future implémentation graphique en 2D avec le moteur de jeu
        <a :href=Links.EBITENGINE target="_blank">Ebitengine</a>.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="Pictures.GO" :link="Links.GO" description="Structure du jeu" />
      <SkillItem :img="Pictures.EBITENGINE" :link="Links.EBITENGINE" description="Interface graphique en 2D" />
      <SkillItem :img="Pictures.GIT" :link="Links.GIT" description="Versionnage du projet" />
    </template>

    <template #assets>
      <ProjectImageItem :link="gol1" alt="gol1" />
      <ProjectImageItem :link="gol2" alt="gol2" />
      <ProjectImageItem :link="gol3" alt="gol3" />
    </template>

    <template #links>
      <LinkItem :link="Links.GITHUB_GOL" :img="Pictures.GITHUB" />
      <LinkItem :link="Links.SAMCODES_GAME_OF_LIFE" alt="Version du jeu de samcodes" />
    </template>

  </ProjectItem>
</template>
