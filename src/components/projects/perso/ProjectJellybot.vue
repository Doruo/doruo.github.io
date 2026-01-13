<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { SocialIcons, ToolIcons } from '@/data/Icons'
import { JellyBotAssets } from '@/data/Assets'
import { GithubLinks, ToolLinks } from '@/data/Links'
</script>

<template>
  <ProjectItem>

    <template #logo_projet>
      <img :src="JellyBotAssets.LOGO" :alt="JellyBotAssets.LOGO" />
    </template>

    <template #title>Jellybot</template>

    <template #description>
      <p>
        Bot discord qui notifie le statut d'un serveur Jellyfin et de ses nouveaux contenus.
      </p>
      <p>
        Jellyfin est un serveur multimédia open-source.
        Il s'agit d'un fork de <a href="https://emby.media/">Emby</a> (anciennement Media Browser),
        étant devenu officiellement propriétaire en 2018.
      </p>
      <p>
        Il permet de mettre sa médiathèque à disposition sur le web,
        qu'il s'agisse de contenu vidéo (films et séries, télévision),
        comme audio (musique, livres audio, podcasts).
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
