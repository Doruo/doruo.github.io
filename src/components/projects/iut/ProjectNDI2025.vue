<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons } from '@/data/Icons'
import { NDI2025Assets } from '@/data/Assets'
import { GithubLinks, ProjectLinks, ToolLinks, WebsiteLinks } from '@/data/Links'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="ndi_logo" :src="NDI2025Assets.LOGO" />
    </template>

    <template #title>NUIT DE L'INFO 2025</template>

    <template #description>
      <p>
        Application réalisée en 16h lors de l'évenement nationale de la
        <a :href="WebsiteLinks.NDI">Nuit de l'Info 2025</a>.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GITHUB" :link="ToolLinks.GITHUB" description="Gestion des versions, et collaboration en équipe" />
      <SkillItem :img="ToolIcons.TS" :link="ToolLinks.TS" description="Implémentation du site et des jeux" />
      <SkillItem :img="ToolIcons.NEXT" :link="ToolLinks.NEXT" description="Réalisation de l'interface visuelle" />
      <SkillItem :img="ToolIcons.TAILWIND" :link="ToolLinks.TAILWIND" description="Mise en page du site" />
    </template>

    <template #assets>

    </template>

    <template #links>
      <LinkItem :link="GithubLinks.NDI2025" :img="SocialIcons.GITHUB" />
      <LinkItem :link="ProjectLinks.NDI2025" alt="Site du projet" />
    </template>
  </ProjectItem>
</template>
