<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'

import ranni from '@/assets/img/projets/eldenbuild/eldenring_ranni.webp'
import { Links } from '@/data/Links'
import { Pictures } from '@/data/Pictures'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="eldenbuild_logo" :src="ranni" />
    </template>

    <template #title>My Avatar</template>

    <template #description>
      <p>
        Application de gestion d’avatar, inspiré de <a target="_blank" :href=Links.GRAVATAR>Gravatar</a>,
        fait avec le framework <a target="_blank" :href=Links.SYMFONY>Symfony</a>.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="Pictures.GIT" :link="Links.GIT" description="Versionnage du projet" />
      <SkillItem :img="Pictures.PHP" :link="Links.PHP" description="Implémentation de Symfony" />
      <SkillItem :img="Pictures.BOOTSTRAP" :link="Links.BOOTSTRAP" description="Mise en page visuelle" />
      <SkillItem :img="Pictures.JS" :link="Links.JS" description="Requêtes AJAX" />
    </template>

    <template #assets>
    </template>

    <template #links>
      <LinkItem :link="Links.IUT_MY_AVATAR" alt="Sujet du projet" />
      <LinkItem :link="Links.MY_AVATAR" alt="Voir le site" />
    </template>
  </ProjectItem>
</template>
