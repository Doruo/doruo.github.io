<script setup lang="ts">
import ProjectItem from '@/components/projects/abstract/ProjectItem.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import LinkItem from '@/components/links/LinkItem.vue'

import { ToolIcons, SocialIcons, LanguageIcons } from '@/data/Icons'
import { CollaboratorPictures, NDI2025Pictures } from '@/data/Pictures'
import { CollaboratorLinks, GithubLinks, LanguageLinks, ProjectLinks, ToolLinks, WebsiteLinks } from '@/data/Links'
import PortraitItem from '@/components/portraits/PortraitItem.vue'
</script>

<template>
  <ProjectItem>
    <template #logo_projet>
      <img alt="logo ndi 2025" :src="NDI2025Pictures.LOGO" />
    </template>

    <template #description>
      <h2>Numérique Inclusif, Responsable et Durable</h2>
      <h3>🚧 PAGE EN TRAVAUX 🚧</h3>
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
    </template>

    <template #collaborators>
      <PortraitItem name="Cyprien Bons" :link="CollaboratorLinks.CYPRIEN_BONS" :img="CollaboratorPictures.CYPRIEN_BONS" alt="CYPRIEN_BONS" />
      <PortraitItem name="Maël Nicolas" :link="CollaboratorLinks.MAEL_NICOLAS" :img="CollaboratorPictures.MAEL_NICOLAS" alt="MAEL_NICOLAS" />
      <PortraitItem name="Raphaël Rivas" :link="CollaboratorLinks.RAPHAEL_RIVAS" :img="CollaboratorPictures.RAPHAEL_RIVAS" alt="RAPHAEL_RIVAS" />
      <PortraitItem name="Killian Ramus" :link="CollaboratorLinks.KILLIAN_RAMUS" :img="CollaboratorPictures.KILLIAN_RAMUS" alt="KILLIAN_RAMUS" />
    </template>

    <template #abilities>
      <SkillItem :img="ToolIcons.GITHUB" :link="ToolLinks.GITHUB"
        description="Gestion des versions, et collaboration en équipe" />
      <SkillItem :img="ToolIcons.DOCKER" :link="ToolLinks.DOCKER" description="Conteneurisation du projet" />
      <SkillItem :img="LanguageIcons.TS" :link="LanguageLinks.TS" description="Implémentation du site et des jeux" />
      <SkillItem :img="ToolIcons.NEXT" :link="ToolLinks.NEXT" description="Réalisation de l'interface utilisateur" />
      <SkillItem :img="ToolIcons.TAILWIND" :link="ToolLinks.TAILWIND" description="Mise en page du site" />
    </template>

    <template #links>
      <LinkItem :link="GithubLinks.NDI2025" :img="SocialIcons.GITHUB" />
      <LinkItem :link="ProjectLinks.NDI2025" text="Notre site" />
      <LinkItem :link="WebsiteLinks.NDI_2025_SUBJECT" text="Sujet de la compétition" />
      <LinkItem :link="WebsiteLinks.NDI_CHALLENGES" text="Liste des défis" />
    </template>
  </ProjectItem>
</template>
