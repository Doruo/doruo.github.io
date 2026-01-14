<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { SocialIcons, ToolIcons } from '@/data/Icons'
 import { MyAvatarPictures, PoursuiteEtudesPictures } from '@/data/Pictures'
import { GithubLinks, IUTLinks, ProjectLinks, ToolLinks, WebsiteLinks } from '@/data/Links'
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img :src="PoursuiteEtudesPictures.LOGO_IUT" :alt="PoursuiteEtudesPictures.LOGO_IUT" />
    </template>

    <template #title>My Avatar</template>

    <template #description>
      <p>
        Application de gestion d’avatar, inspiré de <a target="_blank" :href=WebsiteLinks.GRAVATAR>Gravatar</a>,
        fait avec le framework <a target="_blank" :href=ToolLinks.SYMFONY>Symfony</a>.
      </p>
      <p>
        Ce service permet, en vous inscrivant, d’associer votre adresse mail à une photo de profil.
        Ainsi, à partir de votre adresse, les différents sites web et applications peuvent charger votre image de profil
        depuis ce service sans avoir besoin de stocker cette image de leur côté et sans demander à l’utilisateur d’uploader cette image.
        Il suffit de faire une simple requête au site. Certains sites comme <a target="_blank" :href=WebsiteLinks.BITBUCKET>Bitbucket</a> utilisent ce mécanisme.
      </p>
      <p>
        Ainsi, n’importe quelle application manipulant l’adresse email d’un utilisateur peut facilement d’aller charger une image depuis My Avatar.
      </p>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GITLAB" :link="ToolLinks.GITLAB" description="Gestion des versions, et collaboration en équipe" />
      <SkillItem :img="ToolIcons.SYMFONY" :link="ToolLinks.SYMFONY" description="Développement de l'API" />
      <SkillItem :img="ToolIcons.DOCKER" :link="ToolLinks.DOCKER" description="Aide au déploiement de l'application" />
    </template>

    <template #assets>
      <ProjectImageItem :link="MyAvatarPictures.SIGNUP" alt="signup" />
      <ProjectImageItem :link="MyAvatarPictures.PROFILE" alt="profile" />
      <ProjectImageItem :link="MyAvatarPictures.ADMIN" alt="admin" />
    </template>

    <template #links>
      <LinkItem :link="GithubLinks.MY_AVATAR" :img="SocialIcons.GITHUB" />
      <LinkItem :link="ProjectLinks.MY_AVATAR" text="Voir le site" />
      <LinkItem :link="IUTLinks.IUT_MY_AVATAR" text="Sujet du projet" />
    </template>
  </ProjectItem>
</template>
