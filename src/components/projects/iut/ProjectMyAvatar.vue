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
      <img :src="Pictures.ELDENBUILD_LOGO" :alt="Pictures.ELDENBUILD_LOGO" />
    </template>

    <template #title>My Avatar</template>

    <template #description>
      <p>
        Application de gestion d’avatar, inspiré de <a target="_blank" :href=Links.GRAVATAR>Gravatar</a>,
        fait avec le framework <a target="_blank" :href=Links.SYMFONY>Symfony</a>.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="Icons.GIT" :link="Links.GIT" description="Versionnage du projet" />
      <SkillItem :img="Icons.PHP" :link="Links.PHP" description="Implémentation de Symfony" />
      <SkillItem :img="Icons.BOOTSTRAP" :link="Links.BOOTSTRAP" description="Mise en page visuelle" />
      <SkillItem :img="Icons.JS" :link="Links.JS" description="Requêtes AJAX" />
    </template>

    <template #assets>
    </template>

    <template #links>
      <LinkItem :link="Links.IUT_MY_AVATAR" alt="Sujet du projet" />
      <LinkItem :link="Links.MY_AVATAR" alt="Voir le site" />
    </template>
  </ProjectItem>
</template>
