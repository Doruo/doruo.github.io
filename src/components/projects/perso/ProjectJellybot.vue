<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { LanguageIcons, SocialIcons, ToolIcons } from '@/data/Icons'
import { JellyBotPictures } from '@/data/Pictures'
import { ForgeLinks, LanguageLinks, ToolLinks, WebsiteLinks } from '@/data/Links'
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
</script>

<template>
  <ProjectItem>

    <template #logo_projet>
      <img :src="JellyBotPictures.CARD" :alt="JellyBotPictures.CARD" />
    </template>

    <template #title>Jellybot</template>

    <template #description>
      <p>
        <a target="blank" :href="WebsiteLinks.JELLYFIN">Jellyfin</a> 
        est un serveur multimédia open-source.
        Il s'agit d'un fork de <a target="blank" :href="WebsiteLinks.EMBY">Emby</a> 
        (anciennement Media Browser),
        étant devenu officiellement propriétaire en 2018.
      </p>
      <p>
        Il permet de mettre sa médiathèque à disposition sur le web,
        qu'il s'agisse de contenu vidéo (films et séries, télévision),
        comme audio (musique, livres audio, podcasts).
      </p>      
      <p>
        Hébergant moi même un 
        <a target="blank" :href="WebsiteLinks.JELLYFIN_SERVER">serveur Jellyfin</a>,
        je communique régulièrement sur la plateforme Discord avec mon 
        entourage pour regarder des films ou des séries.
      </p>
      <p>
        J'avais donc besoin d'un robot qui peut accéder à Discord, et nous communiquer dans
        notre chat textuel le statut du serveur ainsi que l'arrivée nouveaux contenus.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="LanguageIcons.PYTHON" :link="LanguageLinks.PYTHON" description="Programmation du robot" />
      <SkillItem :img="ToolIcons.DISCORDPY" :link="ToolLinks.DISCORD_PY" description="Communication avec l'API Discord" />
      <SkillItem :img="JellyBotPictures.CARD" :link="WebsiteLinks.JELLYFIN" description="Routage du serveur Jellyfin" />

      <SkillItem :img="ToolIcons.DISCORD_BOTS" :link="ToolLinks.DISCORD_BOTS" description="Intégration de l'application dans Discord" />
      <SkillItem :img="ToolIcons.CODEBERG" :link="ToolLinks.CODEBERG" description="Gestion des versions du projet" />
      <SkillItem :img="ToolIcons.DOCKER" :link="ToolLinks.DOCKER" description="Conteneurisation du projet" />
    </template>

    <template #assets-concept>      
      <ProjectImageItem :link="JellyBotPictures.WEB" :alt="JellyBotPictures.WEB" />
      <ProjectImageItem :link="JellyBotPictures.CODE" :alt="JellyBotPictures.CODE" />
      <ProjectImageItem :link="JellyBotPictures.DEV_PAGE" :alt="JellyBotPictures.DEV_PAGE" />
    </template>

    <template #assets>
      <ProjectImageItem :link="JellyBotPictures.CHAT" :alt="JellyBotPictures.CHAT" />
      <ProjectImageItem :link="JellyBotPictures.CHAT2" :alt="JellyBotPictures.CHAT2" />
      <ProjectImageItem :link="JellyBotPictures.SUGGESS" :alt="JellyBotPictures.SUGGESS" />
    </template>

    <template #links>
      <LinkItem :link="WebsiteLinks.JELLYFIN" text="Site de Jellyfin"/>
      <LinkItem :link="ForgeLinks.JELLYBOT" :img="SocialIcons.CODEBERG" />
    </template>

  </ProjectItem>
</template>
