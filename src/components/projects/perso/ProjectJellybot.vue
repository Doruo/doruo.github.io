<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { LanguageIcons, SocialIcons, ToolIcons } from '@/data/Icons'
import { JellyBotPictures } from '@/data/Pictures'
import { ForgeLinks, LanguageLinks, ToolLinks } from '@/data/Links'
</script>

<template>
  <ProjectItem>

    <template #logo_projet>
      <img :src="JellyBotPictures.LOGO" :alt="JellyBotPictures.LOGO" />
    </template>

    <template #title>Jellybot</template>

    <template #description>
      <h3>🚧 PAGE EN TRAVAUX 🚧</h3>
      <p>
        Bot discord qui notifie le statut d'un serveur Jellyfin et de ses nouveaux contenus.
      </p>
      <p>
        <a target="_blank" href="https://jellyfin.org/">Emby</a>Jellyfin est un serveur multimédia open-source.
        Il s'agit d'un fork de <a target="_blank" href="https://emby.media/">Emby</a> (anciennement Media Browser),
        étant devenu officiellement propriétaire en 2018.
      </p>
      <p>
        Il permet de mettre sa médiathèque à disposition sur le web,
        qu'il s'agisse de contenu vidéo (films et séries, télévision),
        comme audio (musique, livres audio, podcasts).
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GITHUB" :link="ToolLinks.GITHUB" description="Gestion des versions du projet" />
      <SkillItem :img="LanguageIcons.PYTHON" :link="LanguageLinks.PYTHON" description="Programmation du bot" />
      <SkillItem :img="ToolIcons.BOTS" :link="ToolLinks.BOTS" description="Intégration dans Discord" />
    </template>

    <template #links>
      <LinkItem :link="ForgeLinks.JELLYBOT" :img="SocialIcons.GITHUB" />
    </template>

  </ProjectItem>
</template>
