<script setup lang="ts">
import { ToolIcons } from '@/data/Icons';
import LinkItem from '../links/LinkItem.vue';
import PortraitItem from '../portraits/PortraitItem.vue';
import { SocialLinks, WebsiteLinks } from '@/data/Links';
import { CollaboratorPictures } from '@/data/Pictures';
</script>

<template>
  <!-- BIO -->
  <section class="intro">
    <div class="intro-content">
      <p>
        Etudiant à <a :href=WebsiteLinks.IUT>l'Université de Montpellier</a>, je suis passionné par
        <b>l'informatique, la guitare et le sport.</b>
      </p>
      <p>
        Souhaitant faire de l'informatique ma carrière, je suis actuellement en
        <b>3ème année de BUT informatique</b>, spécialisé dans le
        <b> parcours Réalisation d'Application: Conception, Déploiement & Validation</b>.
      </p>
      <p>
        J'envisage à l'avenir de continuer mes apprentissages dans le réseau et la réalisation de logiciels,
        mon objectif professionel est de devenir <b>développeur DevOps</b>.
      </p>

      <h1>
        <LinkItem :link="SocialLinks.CV" :img="ToolIcons.PDF" alt="CV" text="CV"/>
      </h1>
    </div>
    <PortraitItem :link="SocialLinks.LINKEDIN" :img="CollaboratorPictures.MARC_HAYE" alt="portrait intro"/>
  </section>
</template>
