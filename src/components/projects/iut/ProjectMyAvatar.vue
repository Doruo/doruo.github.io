<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { SocialIcons, ToolIcons } from '@/data/Icons'
import { Pictures } from '@/data/Pictures'
import { GithubLinks, IUTLinks, ProjectLinks, ToolLinks, WebsiteLinks } from '@/data/Links'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img :src="Pictures.ELDENBUILD_LOGO" :alt="Pictures.ELDENBUILD_LOGO" />
    </template>

    <template #title>My Avatar</template>

    <template #description>
      <p>
        Application de gestion d’avatar, inspiré de <a target="_blank" :href=WebsiteLinks.GRAVATAR>Gravatar</a>,
        fait avec le framework <a target="_blank" :href=ToolLinks.SYMFONY>Symfony</a>.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GIT" :link="ToolLinks.GIT" description="Versionnage du projet" />
      <SkillItem :img="ToolIcons.PHP" :link="ToolLinks.PHP" description="Implémentation de Symfony" />
      <SkillItem :img="ToolIcons.BOOTSTRAP" :link="ToolLinks.BOOTSTRAP" description="Mise en page visuelle" />
      <SkillItem :img="ToolIcons.JS" :link="ToolLinks.JS" description="Requêtes AJAX" />
    </template>

    <template #assets>
    </template>

    <template #links>
      <LinkItem :link="GithubLinks.MY_AVATAR" :img="SocialIcons.GITHUB" />
      <LinkItem :link="IUTLinks.IUT_MY_AVATAR" alt="Sujet du projet" />
      <LinkItem :link="ProjectLinks.MY_AVATAR" alt="Voir le site" />
    </template>
  </ProjectItem>
</template>
