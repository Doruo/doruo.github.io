<script setup lang="ts">

</script>

<template>
<section class="intro">

    <div class="contenu-intro">

      <h2>Bonjour, je suis Marc Haye !</h2>

      <p>
        Etudiant en Informatique à l'Université de Montpellier,
        je suis passionné depuis toujours par la <b>création de solutions robustes et évolutives</b>.
      </p>
      <p>
        Actuellement en 2ème année, je me suis spécialisé dans le <b>le parcours RACDV:
        Réalisation d'Application - Conception & Déploiement</b>.
      </p>
      <p>
        Souhaitant continuer mes apprentissages dans le réseau et la conception de serveurs webs,
        mon objectif professionel est de <b>devenir développeur Full-Stack</b>.
      </p>

      <h1><a href="../ressources/CV/CV-HAYE.pdf">Voir mon CV</a></h1>
    </div>

    <div class="conteneur-portrait">
      <img class="portrait" src="../ressources/images/portrait/Marc_Haye.webp" alt="Portrait-Haye">
    </div>

  </section>

</template>

<style scoped>

.intro{

display: flex;
align-items: center;
padding: 4rem 0;

background: linear-gradient(-45deg, #bef0ff, #d1d6db, #cbdef0, #bde0ff);
background-size: 200% 200%;
height: 90vh;
}

.contenu-intro{
  max-width: 35%;
}

.contenu-intro p{
  text-align: justify;
}

.contenu-intro img{
  width: 35%;
}


.portrait{
  width: 45%;
  border-radius: 10%;
}
</style>
