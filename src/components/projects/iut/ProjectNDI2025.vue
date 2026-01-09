<script setup lang="ts">
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
      <img alt="ndi_logo" :src="Pictures.NDI2024_LOGO" />
    </template>

    <template #title>NUIT DE L'INFO 2025</template>

    <template #description>
      <p>
        Application réalisée en 16h lors de l'évenement nationale de la
        <a :href="Links.NDI">Nuit de l'Info 2025</a>.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="Icons.GIT" :link="Links.GIT" description="Versionnage du projet" />
      <SkillItem :img="Icons.EXPRESS" :link="Links.EXPRESS" description="Routage et implémentation de l'océan" />
    </template>

    <template #assets>

    </template>

    <template #links>
      <LinkItem :link="Links.GITHUB_NDI2025" :img="Icons.GITHUB" />
      <LinkItem :link="Links.NDI2025" alt="Site du projet" />
    </template>
  </ProjectItem>
</template>
