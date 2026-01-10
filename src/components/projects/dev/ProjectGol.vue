<script setup lang="ts">
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons } from '@/data/Icons'
import { Pictures } from '@/data/Pictures'
import { GithubLinks, ToolLinks, WebsiteLinks } from '@/data/Links'
</script>

<template>
  <ProjectItem>

    <template #logo_projet>
      <img :src="Pictures.GOL_LOGO" :alt="Pictures.GOL_LOGO" />
    </template>

    <template #title>Conway's Game of Life</template>

    <template #description>
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
      <SkillItem :img="ToolIcons.GO" :link="ToolLinks.GO" description="Structure du jeu" />
      <SkillItem :img="ToolIcons.EBITENGINE" :link="ToolLinks.EBITENGINE" description="Interface graphique en 2D" />
      <SkillItem :img="ToolIcons.GIT" :link="ToolLinks.GIT" description="Versionnage du projet" />
    </template>

    <template #assets>
      <ProjectImageItem :link="Pictures.GOL_1" :alt="Pictures.GOL_1" />
      <ProjectImageItem :link="Pictures.GOL_2" :alt="Pictures.GOL_2" />
      <ProjectImageItem :link="Pictures.GOL_3" :alt="Pictures.GOL_3" />
    </template>

    <template #links>
      <LinkItem :link="GithubLinks.GOL" :img="SocialIcons.GITHUB" />
    </template>

  </ProjectItem>
</template>
