<script setup lang="ts">
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons, LanguageIcons } from '@/data/Icons'
import { GameOfLifeImg } from '@/data/Pictures'
import { ForgeLinks, LanguageLinks, ToolLinks, WebsiteLinks } from '@/data/Links'
</script>

<template>
  <ProjectItem>

    <template #logo_projet>
      <img :src="GameOfLifeImg.LOGO" :alt="GameOfLifeImg.LOGO" />
    </template>

    <template #title>Conway's Game of Life</template>

    <template #description>
      <h3>Période: Octobre 2025 - Janvier 2026</h3>
      
      <p>
        Le <a :href=WebsiteLinks.GOL target="_blank">Jeu de la Vie</a> est une simulation mathématique imaginé par
        <a :href=WebsiteLinks.CONWAY target="_blank">John Horton Conway</a> en 1970.
      </p>
      <p>C'est un automate cellulaire ludique utilisé dans la recherche biologique pour simuler la vie.</p>
      <p>
        J'ai réalisé la logique algorithmique du programme en Go, ainsi qu'une interface graphique fonctionnel sur terminal.
        Je travaille actuellement sur une future implémentation graphique web avec le moteur de jeu
        <a :href=ToolLinks.EBITENGINE target="_blank">Ebitengine</a>.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.CODEBERG" :link="ToolLinks.CODEBERG" description="Gestion des versions du projet" />
      <SkillItem :img="LanguageIcons.GO" :link="LanguageLinks.GO" description="Structure du jeu" />
      <SkillItem :img="ToolIcons.EBITENGINE" :link="ToolLinks.EBITENGINE" description="Interface graphique en 2D" />
    </template>

    <template #assets>
      <ProjectImageItem :link="GameOfLifeImg.GAME_1" :alt="GameOfLifeImg.GAME_1" />
      <ProjectImageItem :link="GameOfLifeImg.GAME_2" :alt="GameOfLifeImg.GAME_2" />
      <ProjectImageItem :link="GameOfLifeImg.GAME_3" :alt="GameOfLifeImg.GAME_3" />
    </template>

    <template #links>
      <LinkItem :link="ForgeLinks.GOL" :img="SocialIcons.CODEBERG" />
    </template>

  </ProjectItem>
</template>
