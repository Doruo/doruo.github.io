<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { SocialIcons, ToolIcons } from '@/data/Icons'
import { EldenBuildAssets } from '@/data/Assets'
import { GithubLinks, ToolLinks } from '@/data/Links'
</script>

<template>
  <ProjectItem>

    <template #logo_projet>
      <img :src="EldenBuildAssets.LOGO" :alt="EldenBuildAssets.LOGO" />
    </template>

    <template #title>Jellybot</template>

    <template #description>
      <p>
        Bot discord qui notifie le statut d'un serveur Jellyfin et de ses nouveaux contenus.
      </p>
      <p>
        Jellyfin est un serveur multimédia.
        Il s'agit d'un fork de Emby (anciennement Media Browser)
        ce dernier étant devenu officiellement propriétaire en 2018.
      </p>
      <p>
        Il permet de mettre sa médiathèque à disposition sur le web,
        qu'il s'agisse de contenu vidéo (films et séries, télévision),
        audio (musique, livres audio, podcasts).
      </p>
      <p>(PAGE EN TRAVAUX !)</p>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GITHUB" :link="ToolLinks.GITHUB" description="Gestion des versions du projet" />
      <SkillItem :img="ToolIcons.PYTHON" :link="ToolLinks.PYTHON" description="Programmation du bot" />
    </template>

    <template #assets>
    </template>

    <template #links>
      <LinkItem :link="GithubLinks.JELLYBOT" :img="SocialIcons.GITHUB" />
    </template>

  </ProjectItem>
</template>
