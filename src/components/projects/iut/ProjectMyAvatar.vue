<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { FrameworkIcons, LanguageIcons, SocialIcons, ToolIcons } from '@/data/Icons'
import { CollaboratorsImg, MyAvatarImg, PoursuiteEtudesImg } from '@/data/Pictures'
import { CollaboratorLinks, ForgeLinks, FrameworkLinks, IUTLinks, LanguageLinks, ProjectLinks, ToolLinks, WebsiteLinks } from '@/data/Links'
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
import PortraitItem from '@/components/portraits/PortraitItem.vue'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img :src="PoursuiteEtudesImg.LOGO_IUT" :alt="PoursuiteEtudesImg.LOGO_IUT" />
    </template>

    <template #title>My Avatar</template>

    <template #description>
      <h3>Période: Octobre - Novembre 2025</h3>

      <p>
        Application de gestion d’avatar, inspiré de <a target="_blank" :href=WebsiteLinks.GRAVATAR>Gravatar</a>,
        fait avec le framework <a target="_blank" :href=FrameworkLinks.SYMFONY>Symfony</a>.
      </p>
      <p>
        Ce service permet, en vous inscrivant, d’associer votre adresse mail à une photo de profil.
        Ainsi, à partir de votre adresse, les différents sites web et applications peuvent charger votre image de profil
        depuis ce service sans avoir besoin de stocker cette image de leur côté et sans demander à l’utilisateur d’uploader cette image.      
      </p>
      <p>
        Il suffit de faire une simple requête au site. Certains sites comme <a target="_blank" :href=WebsiteLinks.BITBUCKET>Bitbucket</a> utilisent ce mécanisme.
        N’importe quelle application manipulant l’adresse email d’un utilisateur peut facilement d’aller charger une image depuis My Avatar.
      </p>
    </template>

    <template #collaborators>
      <PortraitItem name="Mattéo Benhalima" :link="CollaboratorLinks.MATTEO_BENHALIMA" :img="CollaboratorsImg.MATTEO_BENHALIMA" alt="MATTEO_BENHALIMA"/>
      <PortraitItem name="Hicham Ferhani" :link="CollaboratorLinks.HICHAM_FERHANI" :img="CollaboratorsImg.HICHAM_FERHANI" alt="HICHAM_FERHANI"/>
      <PortraitItem name="Yann Bodiguel" :link="CollaboratorLinks.YANN_BODIGUEL" :img="CollaboratorsImg.YANN_BODIGUEL" alt="YANN_BODIGUEL"/>
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GITLAB" :link="ToolLinks.GITLAB" description="Gestion des versions, et collaboration en équipe" />
      <SkillItem :img="FrameworkIcons.SYMFONY" :link="FrameworkLinks.SYMFONY" description="Développement de l'API" />
      <SkillItem :img="ToolIcons.DOCKER" :link="ToolLinks.DOCKER" description="Conteneurisation de l'application" />

      <SkillItem :img="ToolIcons.BOOTSTRAP" :link="ToolLinks.BOOTSTRAP" description="Visuel de l'interface" />
      <SkillItem :img="LanguageIcons.JS" :link="LanguageLinks.JS" description="Asynchronisme de l'interface" />
      <SkillItem :img="ToolIcons.TWIG" :link="ToolLinks.TWIG" description="Pages dynamiques et sécurisées" />
    </template>

    <template #assets>
      <ProjectImageItem :link="MyAvatarImg.SIGNUP" alt="signup" />
      <ProjectImageItem :link="MyAvatarImg.PROFILE" alt="profile" />
      <ProjectImageItem :link="MyAvatarImg.ADMIN" alt="admin" />
    </template>

    <template #links>
      <LinkItem :link="ForgeLinks.MY_AVATAR" :img="SocialIcons.GITHUB" />
      <LinkItem :link="ProjectLinks.MY_AVATAR" text="Voir le site" />
      <LinkItem :link="IUTLinks.IUT_MY_AVATAR" text="Sujet du projet" />
    </template>
  </ProjectItem>
</template>
