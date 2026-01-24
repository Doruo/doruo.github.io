<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons, LanguageIcons } from '@/data/Icons'
import { EldenBuildPictures } from '@/data/Pictures'
import { ToolLinks, GithubLinks, LanguageLinks } from '@/data/Links'
</script>
gxvfs
gxvfs
<template>
  <ProjectItem>
    <template #logo_projet>
      <img :alt=EldenBuildPictures.LOGO :src="EldenBuildPictures.LOGO" />
    </template>

    <template #title>LLM Bigramme</template>

    <template #description>
      <h3>🚧 PAGE EN TRAVAUX 🚧</h3>
      <p>
        Modèle de langage bigramme, IA réalisé de A à Z en Python avec le framework PyTorch
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GITHUB" :link="ToolLinks.GITHUB" description="Gestion des versions du projet" />
      <SkillItem :img="LanguageIcons.PYTHON" :link="LanguageLinks.PYTHON" description="Développement de l'IA" />
      <SkillItem :img="ToolIcons.ANACONDA" :link="ToolIcons.ANACONDA" description="" />
      <SkillItem :img="ToolIcons.PYTORCH" :link="ToolIcons.PYTORCH" description="" />
      <SkillItem :img="ToolIcons.JUPYTER" :link="ToolIcons.JUPYTER" description="" />
    </template>

    <template #assets>
    </template>

    <template #links>
      <LinkItem :link="GithubLinks.LLM_FROM_SCRATCH" :img="SocialIcons.FOOTER_GITHUB" />
    </template>

  </ProjectItem>
</template>
