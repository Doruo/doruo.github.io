<script setup lang="ts">
import portrait from '@/assets/images/portrait/Marc_Haye.webp';
</script>

<template>
<section class="intro">

    <div class="contenu-intro">

      <h2>Marc Haye</h2>

      <p>
        Etudiant en Informatique à l'Université de Montpellier,
        je suis passionné par <b>l'informatique, la musique et le sport.</b>
      </p>
      <p>
        Souhaitant faire de l'information ma carrière, je suis actuellement en 2ème année, spécialisé dans le <b> parcours
        Réalisation d'Application - Conception & Déploiement</b>.
      </p>
      <p>
        Souhaitant continuer mes apprentissages en particulier dans le réseau et la conception de serveurs webs,
        mon objectif professionel est de <b>devenir développeur Full-Stack</b>.
      </p>

      <h1><a href="">Téléchargez mon CV</a></h1>
    </div>

    <div class="conteneur-portrait">
      <img class="portrait" :src="portrait" alt="Portrait-Haye-Marc">
    </div>

  </section>

</template>

<style scoped>

</style>
