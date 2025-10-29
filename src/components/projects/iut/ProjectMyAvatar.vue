<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'

import { Links } from '@/data/Links'
import LinkItem from '@/components/links/LinkItem.vue'
import { Pictures } from '@/data/Pictures'
import SkillItem from '@/components/skills/SkillItem.vue'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>

    </template>

    <template #title>My Avatar</template>

    <template #description>
      <p>
       Projet web inspiré de Gravatar, fait avec le framework PHP Symfony.
      </p>
    </template>

    <template #abilities>
      <SkillItem
        :img="Pictures.GIT"
        :link="Links.GIT"
        description="Versionnage du projet"
      />
      <SkillItem
        :img="Pictures.PHP"
        :link="Links.PHP"
        description="Implémentation de Symfony"
      />
      <SkillItem
        :img="Pictures.BOOTSTRAP"
        :link="Links.BOOTSTRAP"
        description="Mise en page visuelle"
      />
      <SkillItem
        :img="Pictures.JS"
        :link="Links.JS"
        description="Requêtes AJAX"
      />
    </template>

    <template #assets>

    </template>

    <template #liens>
      <LinkItem link="/" :img="Pictures.GITHUB" />
    </template>
  </ProjectItem>
</template>
