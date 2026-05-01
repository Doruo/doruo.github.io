<script setup lang="ts">
import { ToolIcons } from '@/data/Icons';
import LinkItem from '../links/LinkItem.vue';
import PortraitItem from '../portraits/PortraitItem.vue';
import { SocialLinks, WebsiteLinks } from '@/data/Links';
import { CollaboratorsImg } from '@/data/Pictures';
</script>

<template>
  <!-- BIO -->
  <section class="intro">
    <div class="intro-content">

      <h1>Hello !</h1>
      <p>
        Etudiant à l'<a :href=WebsiteLinks.IUT target="blank">Université de Montpellier</a>,
        et alternant à <a :href=WebsiteLinks.ITESOFT target="blank">ITESOFT</a>,
        je suis passionné par <b>l'informatique, la musique et le sport.</b>
      </p>

      <p>
        Souhaitant faire de l'informatique ma carrière, je suis actuellement en
        <b>3ème année de BUT informatique</b>, spécialisé dans le
        <b> parcours Réalisation d'Application: Conception, Déploiement & Validation</b>.
      </p>

      <p>
        Au quotidien je me tourne vers l'avenir, un internet libre, décentralisé et bienveillant.
        Mon parcours informatique est engagé, anti-<a target="blank"
          href="https://fr.wikipedia.org/wiki/GAFAM">GAFAM</a>
        et <router-link :to="{ name: 'degoogle' }">DeGooglisé</router-link>.
      </p>

      <h2>
        Voir mon CV:
      </h2>

      <LinkItem :link="SocialLinks.CV" :img="ToolIcons.PDF" alt="CV" />

    </div>

    <PortraitItem :link="SocialLinks.LINKEDIN" :img="CollaboratorsImg.MARC_HAYE" alt="portrait intro"
      :isMain="true" />

  </section>
</template>
