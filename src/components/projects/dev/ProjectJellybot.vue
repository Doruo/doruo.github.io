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

    <template #title>Jellybot</template>

    <template #description>
      <p>Bot discord qui notifie le statut d'un serveur Jellyfin et de ses nouveaux contenus.</p>
      <p>Jellyfin est un logiciel de serveur multimédia sous licence libre que vous pouvez héberger chez vous !</p>
    </template>

    <template #abilities>
      <SkillItem :img="Pictures.GIT" :link="Links.GIT" description="Versionnage du projet" />
    </template>

    <template #assets>
    </template>

    <template #liens>
      <LinkItem :link="Links.GITHUB_GOL" :img="Pictures.GITHUB" />
    </template>

  </ProjectItem>
</template>
