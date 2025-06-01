<script setup lang="ts">
import portrait from '@/assets/images/portrait/Marc_Haye.webp';
</script>

<template>
<section class="intro">

    <div class="contenu-intro">

      <h2 id="titre">Marc Haye</h2>

      <p>
        Etudiant à l'Université de Montpellier,
        je suis passionné par <b>l'informatique, la guitare et le sport.</b>
      </p>
      <p>
        Souhaitant faire de l'informatique ma carrière, je suis actuellement en <b>2ème Année de DUT Informatique</b>, spécialisé dans le <b> parcours
        Réalisation d'Application - Conception & Déploiement</b>.
      </p>
      <p>
        J'envisage à l'avenir de continuer mes apprentissages dans le réseau et la conception de serveurs webs,
        mon objectif professionel étant de <b>devenir développeur Full-Stack</b>.
      </p>

      <h1><a href="/CV/CV-MARC-HAYE.pdf">Téléchargez mon CV ici !</a></h1>
    </div>

    <div class="conteneur-portrait">
      <img class="portrait" :src="portrait" alt="Portrait-Haye-Marc">
    </div>

  </section>

</template>

<style scoped>

</style>
