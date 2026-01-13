<script setup lang="ts">
import { IUTLinks } from '@/data/Links';
</script>

<template>
  <!-- BIO -->
  <section id="biographie" class="biographie">
    <div class="container">
      <h2>À propos de moi</h2>
      <p>
        Depuis très tôt dans mon enfance, je suis passionné par <b>l'informatique</b> et <b>internet</b>.
      </p>
      <p>
        J'ai d'abord obtenu mon <b>diplôme du Baccalauréat STI2D</b>, option Systèmes d'Information et
        Numérique (SIN). J'ai pus y apprendre les bases de l’électronique, de la programmation lié
        aux systèmes embarqués, ainsi que l'étude des forces sur des projets architecturaux
        (Principe Fondamental de la Dynamique).
      </p>
      <p>
        Afin d'approfondir mon parcours, j'intégre <a :href="IUTLinks.IUT"><b>l'IUT Montpellier-Sête</b></a>.
        Durant ma formation, j'ai été amené à maitriser les différentes notions du <b>développement full-stack efficace</b>.
      </p>
      <p>
        D’un point de vue managériale, j'ai été amené à <b>gérer des équipes pour différents projets informatiques</b>, proposer des
        solutions efficaces face aux obstacles, et dans les délais imposés.
      </p>
    </div>
  </section>
</template>
