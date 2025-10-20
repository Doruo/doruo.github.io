<script setup lang="ts">
  import portrait_path from '@/assets/images/portrait/portrait.webp';
  import cv_path from '/CV/CV-MARC-HAYE.pdf';
</script>

<template>

  <!-- BIO -->
  <section class="intro">

      <div class="contenu-intro">

        <p>
          Etudiant à l'Université de Montpellier,
          je suis passionné par <b>l'informatique, la guitare et le sport.</b>
        </p>
        <p>
          Souhaitant faire de l'informatique ma carrière, je suis actuellement en <b>3ème Année de DUT Informatique</b>, spécialisé dans le <b> parcours
          Réalisation d'Application - Conception & Déploiement</b>.
        </p>
        <p>
          J'envisage à l'avenir de continuer mes apprentissages dans le réseau et la conception de serveurs webs,
          mon objectif professionel étant de <b>devenir développeur Full-Stack</b>.
        </p>

        <h1><a :href="cv_path">Téléchargez mon CV</a></h1>
    </div>

    <div class="conteneur-portrait">
      <img class="portrait" :src="portrait_path" alt="portrait">
    </div>
  </section>

</template>

<style scoped>

</style>
