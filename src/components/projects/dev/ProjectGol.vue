<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'

import ranni from '@/assets/img/projets/eldenbuild/eldenring_ranni.webp'
import { Links } from '@/data/Links'
import LinkItem from '@/components/links/LinkItem.vue'
import { Pictures } from '@/data/Pictures'
import SkillItem from '@/components/skills/SkillItem.vue'
</script>

<template>
  <ProjectItem>

    <template #logo_projet>
      <img alt="eldenbuild_logo" :src="ranni" />
    </template>

    <template #title>Conway's Game of Life</template>

    <template #description>
      <p>
        Le <a :href=Links.GAME_OF_LIFE target="_blank">Jeu de la vie</a>
        est une simulation mathématique imaginé par <a href="https://fr.wikipedia.org/wiki/John_Horton_Conway"
          target="_blank">John Horton Conway</a> en 1970.
      </p>
      <p>C'est un automate cellulaire ludique utilisé dans la recherche biologique pour simuler la vie.</p>
      <p>
        Il y a une interface graphique fonctionnel sur terminal,
        et je travaille actuellement sur une implémentation en 2D avec le moteur graphique
        <a :href=Links.EBITENGINE target="_blank">Ebitengine</a>.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="Pictures.GO" :link="Links.GO" description="Structure du jeu" />
      <SkillItem :img="Pictures.EBITENGINE" :link="Links.EBITENGINE" description="Interface graphique en 2D" />
      <SkillItem :img="Pictures.GIT" :link="Links.GIT" description="Versionnage du projet" />
    </template>

    <template #assets>
    </template>

    <template #liens>
      <LinkItem :link="Links.GITHUB_GOL" :img="Pictures.GITHUB" />
    </template>

  </ProjectItem>
</template>
