<script setup lang="ts">
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { Icons } from '@/data/Icons'
import { Pictures } from '@/data/Pictures'
import { Links } from '@/data/Links'
</script>

<template>
  <ProjectItem>

    <template #logo_projet>
      <img :src="Pictures.GOL_LOGO" :alt="Pictures.GOL_LOGO" />
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
      <SkillItem :img="Icons.GO" :link="Links.GO" description="Structure du jeu" />
      <SkillItem :img="Icons.EBITENGINE" :link="Links.EBITENGINE" description="Interface graphique en 2D" />
      <SkillItem :img="Icons.GIT" :link="Links.GIT" description="Versionnage du projet" />
    </template>

    <template #assets>
      <ProjectImageItem :link="Pictures.GOL_1" :alt="Pictures.GOL_1" />
      <ProjectImageItem :link="Pictures.GOL_2" :alt="Pictures.GOL_2" />
      <ProjectImageItem :link="Pictures.GOL_3" :alt="Pictures.GOL_3" />
    </template>

    <template #links>
      <LinkItem :link="Links.GITHUB_GOL" :img="Icons.GITHUB" />
      <LinkItem :link="Links.SAMCODES_GAME_OF_LIFE" alt="Version du jeu de samcodes" />
    </template>

  </ProjectItem>
</template>
