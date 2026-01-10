<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons } from '@/data/Icons'
import { Pictures } from '@/data/Pictures'
import { GithubLinks, ToolLinks } from '@/data/Links'
</script>

<template>
  <ProjectItem>

    <template #logo_projet>
      <img :src="Pictures.ELDENBUILD_LOGO" :alt="Pictures.ELDENBUILD_LOGO" />
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
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GIT" :link="ToolLinks.GIT" description="Versionnage du projet" />
    </template>

    <template #assets>
    </template>

    <template #links>
      <LinkItem :link="GithubLinks.JELLYBOT" :img="SocialIcons.GITHUB" />
    </template>

  </ProjectItem>
</template>
