<script setup lang="ts">
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons, LanguageIcons } from '@/data/Icons'
import { GameOfLifePictures } from '@/data/Pictures'
import { ForgeLinks, LanguageLinks, ToolLinks, WebsiteLinks } from '@/data/Links'
</script>

<template>
  <ProjectItem>

    <template #logo_projet>
      <img :src="GameOfLifePictures.LOGO" :alt="GameOfLifePictures.LOGO" />
    </template>

    <template #title>Conway's Game of Life</template>

    <template #description>
      <h3>🚧 PAGE EN TRAVAUX 🚧</h3>
      <p>
        Le <a :href=WebsiteLinks.GAME_OF_LIFE target="_blank">Jeu de la Vie</a> est une simulation mathématique imaginé par
        <a href="https://fr.wikipedia.org/wiki/John_Horton_Conway" target="_blank">John Horton Conway</a> en 1970.
      </p>
      <p>C'est un automate cellulaire ludique utilisé dans la recherche biologique pour simuler la vie.</p>
      <p>
        Il y a une interface graphique fonctionnel sur terminal,
        et je travaille actuellement sur une future implémentation graphique en 2D avec le moteur de jeu
        <a :href=ToolLinks.EBITENGINE target="_blank">Ebitengine</a>.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.CODEBERG" :link="ToolLinks.CODEBERG" description="Gestion des versions du projet" />
      <SkillItem :img="LanguageIcons.GO" :link="LanguageLinks.GO" description="Structure du jeu" />
      <SkillItem :img="ToolIcons.EBITENGINE" :link="ToolLinks.EBITENGINE" description="Interface graphique en 2D" />
    </template>

    <template #assets>
      <ProjectImageItem :link="GameOfLifePictures.GAME_1" :alt="GameOfLifePictures.GAME_1" />
      <ProjectImageItem :link="GameOfLifePictures.GAME_2" :alt="GameOfLifePictures.GAME_2" />
      <ProjectImageItem :link="GameOfLifePictures.GAME_3" :alt="GameOfLifePictures.GAME_3" />
    </template>

    <template #links>
      <LinkItem :link="ForgeLinks.GOL" :img="SocialIcons.CODEBERG" />
    </template>

  </ProjectItem>
</template>
