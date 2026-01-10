<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons } from '@/data/Icons'
import { Pictures } from '@/data/Pictures'
import { GithubLinks, ProjectLinks, ToolLinks, WebsiteLinks } from '@/data/Links'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="ndi_logo" :src="Pictures.NDI2024_LOGO" />
    </template>

    <template #title>NUIT DE L'INFO 2025</template>

    <template #description>
      <p>
        Application réalisée en 16h lors de l'évenement nationale de la
        <a :href="WebsiteLinks.NDI">Nuit de l'Info 2025</a>.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GIT" :link="ToolLinks.GIT" description="Versionnage du projet" />
      <SkillItem :img="ToolIcons.EXPRESS" :link="ToolLinks.EXPRESS" description="Routage et implémentation de l'océan" />
    </template>

    <template #assets>

    </template>

    <template #links>
      <LinkItem :link="GithubLinks.NDI2025" :img="SocialIcons.GITHUB" />
      <LinkItem :link="ProjectLinks.NDI2025" alt="Site du projet" />
    </template>
  </ProjectItem>
</template>
