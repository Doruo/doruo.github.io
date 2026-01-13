<script setup lang="ts">
import { ToolIcons } from '@/data/Icons';
import AboutPortrait from './AboutPortrait.vue'
import LinkItem from '../links/LinkItem.vue';
</script>

<template>
  <!-- BIO -->
  <section class="intro">
    <div class="intro-content">
      <p>
        Etudiant à l'Université de Montpellier, je suis passionné par
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
        <LinkItem link="/CV/CV-MARC-HAYE.pdf" :img="ToolIcons.PDF" alt="CV" text="CV"/>
      </h1>
    </div>
    <AboutPortrait />
  </section>
</template>
