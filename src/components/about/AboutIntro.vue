<script setup lang="ts">
import AboutCV from './AboutCV.vue'
import AboutPortrait from './AboutPortrait.vue'
</script>

<template>
  <!-- BIO -->
  <section class="intro">
    <div class="contenu-intro">
      <p>
        Etudiant à l'Université de Montpellier, je suis passionné par
        <b>l'informatique, la guitare et le sport.</b>
      </p>
      <p>
        Souhaitant faire de l'informatique ma carrière, je suis actuellement en
        <b>3ème année de BUT informatique</b>, spécialisé dans le
        <b> parcours Réalisation d'Application - Conception & Déploiement</b>.
      </p>
      <p>
        J'envisage à l'avenir de continuer mes apprentissages dans le réseau et la conception de
        serveurs webs, mon objectif professionel étant de <b>devenir développeur Full-Stack</b>.
      </p>

      <AboutCV />
    </div>
    <AboutPortrait />
  </section>
</template>
