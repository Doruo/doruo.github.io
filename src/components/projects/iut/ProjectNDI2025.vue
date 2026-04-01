<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons, LanguageIcons } from '@/data/Icons'
import { CollaboratorPictures, NDI2025Pictures } from '@/data/Pictures'
import { CollaboratorLinks, ForgeLinks, LanguageLinks, ProjectLinks, ToolLinks, WebsiteLinks } from '@/data/Links'
import PortraitItem from '@/components/portraits/PortraitItem.vue'
import ProjectImageItem from '../abstract/ProjectImageItem.vue'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="logo ndi 2025" :src="NDI2025Pictures.LOGO" />
    </template>

    <template #title>Numérique Inclusif, Responsable et Durable</template>

    <template #description>
      <p>
        Application réalisée en 16h lors de l'évenement nationale de la
        <a :href="WebsiteLinks.NDI">Nuit de l'Info 2025</a>.
      </p>
      <p>
        À l’heure où la fin du support de Windows 10 met en
        évidence la dépendance structurelle aux Big Tech, les
        établissements scolaires se retrouvent confrontés à un
        empire numérique puissant : matériel rendu obsolète
        alors qu’il fonctionne encore, licences coûteuses,
        stockage de données hors UE, écosystèmes fermés,
        abonnements indispensables…
      </p>
      <p>
        Face à ce Goliath numérique, l’École peut devenir un
        village résistant, ingénieux, autonome et créatif, à
        l’image du célèbre village d’Astérix.
        C’est précisément l’ambition de la démarche NIRD :
        permettre aux établissements scolaires d’adopter
        progressivement un Numérique Inclusif,
      </p>
      <p>
        Responsable et Durable, en redonnant du pouvoir
        d’agir aux équipes éducatives et en renforçant leur
        autonomie technologique.
      </p>
      <p>
        Avec <a target="_blank" :href="CollaboratorLinks.CYPRIEN_BONS">Cyprien Bons</a>, j'ai réalisé pour ce projet un
        <a target="_blank" href="https://killianrms.github.io/NDI2025/password-game">Password Game</a>,
        pour le défi "Simplifier pour mieux vivre".
        Le but est de créer un mot de passe sécurisé tout
        en passant tous les tests et les nombreuses pop-ups
        qui rendent l'expérience insupportable !
      </p>
      <p>
        J'ai également partiellement aidé à la réalisation de
        <a target="_blank" href="https://github.com/Mael-Nicolas/SafeLink">SafeLink</a>,
        une extension de navigateur, permettant de détecter si un lien
        sur votre page web est sécurisé ou non, pour le défi "La Ligue des Extensions".
      </p>
    </template>

    <template #collaborators>
      <PortraitItem name="Cyprien Bons" :link="CollaboratorLinks.CYPRIEN_BONS" :img="CollaboratorPictures.CYPRIEN_BONS"
        alt="CYPRIEN BONS" />
      <PortraitItem name="Maël Nicolas" :link="CollaboratorLinks.MAEL_NICOLAS" :img="CollaboratorPictures.MAEL_NICOLAS"
        alt="MAEL NICOLAS" />
      <PortraitItem name="Raphaël Rivas" :link="CollaboratorLinks.RAPHAEL_RIVAS"
        :img="CollaboratorPictures.RAPHAEL_RIVAS" alt="RAPHAEL RIVAS" />
      <PortraitItem name="Killian Ramus" :link="CollaboratorLinks.KILLIAN_RAMUS"
        :img="CollaboratorPictures.KILLIAN_RAMUS" alt="KILLIAN RAMUS" />
      <PortraitItem name="Galdric Desert" :link="CollaboratorLinks.GALDRIC_DESERT"
        :img="CollaboratorPictures.GALDRIC_DESERT" alt="GALDRIC DESERT" />
      <PortraitItem name="Nicolas Lyfong" :link="CollaboratorLinks.NICOLAS_LYFONG"
        :img="CollaboratorPictures.NICOLAS_LYFONG" alt="NICOLAS LYFONG" />
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GITHUB" :link="ToolLinks.GITHUB"
        description="Gestion des versions, et collaboration en équipe" />
      <SkillItem :img="ToolIcons.DOCKER" :link="ToolLinks.DOCKER" description="Conteneurisation du projet" />
      <SkillItem :img="LanguageIcons.TS" :link="LanguageLinks.TS" description="Implémentation du site et des jeux" />
      <SkillItem :img="ToolIcons.NEXT" :link="ToolLinks.NEXT" description="Réalisation de l'interface utilisateur" />
      <SkillItem :img="ToolIcons.TAILWIND" :link="ToolLinks.TAILWIND" description="Mise en page du site" />
    </template>

    <template #assets>
      <ProjectImageItem :link="NDI2025Pictures.GROUP" alt="group" />
      <ProjectImageItem :link="NDI2025Pictures.HOME" alt="home" />
      <ProjectImageItem :link="NDI2025Pictures.SIMULATOR" alt="simulator" />
      <ProjectImageItem :link="NDI2025Pictures.TEST" alt="test" />
      <ProjectImageItem :link="NDI2025Pictures.PASSWORD" alt="password" />
      <ProjectImageItem :link="NDI2025Pictures.AI" alt="ai chat" />
    </template>

    <template #links>
      <LinkItem :link="ForgeLinks.NDI2025" :img="SocialIcons.GITHUB" />
      <LinkItem :link="WebsiteLinks.NDI_2025_SUBJECT" :img="ToolIcons.PDF" text="Sujet" />
      <LinkItem :link="WebsiteLinks.NDI_CHALLENGES" text="Liste des défis" />
      <LinkItem :link="ProjectLinks.NDI2025" text="Notre site" />
    </template>
  </ProjectItem>
</template>
