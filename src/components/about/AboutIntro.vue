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
        <b>l'informatique, la musique et le sport.</b>
      </p>
      <p>
        Souhaitant faire de l'informatique ma carrière, je suis actuellement en
        <b>3ème année de BUT informatique</b>, spécialisé dans le
        <b> parcours Réalisation d'Application: Conception, Déploiement & Validation</b>.
      </p>
      <p>
        Au quotidien je me tourne vers l'avenir, un internet libre, décentralisé et bienveillant.
        Mon parcours informatique est engagé, anti-<a target="blank" href="https://fr.wikipedia.org/wiki/GAFAM">GAFAM</a>
        et <router-link :to="{ name: 'degoogle' }">DeGooglisé</router-link>.
     </p>

      <h1>
        <LinkItem :link="SocialLinks.CV" :img="ToolIcons.PDF" alt="CV" text="CV"/>
      </h1>
    </div>
    <PortraitItem :link="SocialLinks.LINKEDIN" :img="CollaboratorPictures.MARC_HAYE" alt="portrait intro" :isMain="true"/>
  </section>
</template>
