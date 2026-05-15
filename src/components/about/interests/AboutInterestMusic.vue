<script setup lang="ts">
import { SocialIcons } from '@/data/Icons';
</script>

<template>
  <!-- BIO -->
  <section id="biographie" class="biographie">
    <div class="container">

      <h2>Musique</h2>

      <p>
        J'ai commencé à apprendre la guitare et le piano peu avant le confinement en 2020.      
      </p>
      
      <p>
        Depuis, en parallèle de mes études, j'ai rejoins en 2024 au côté de mon ami Maël le groupe Dry Otters.
      </p>
      
      <img :src="SocialIcons.DRYOTTERS" alt="Dry Otters" />

      <p>
        J'ai pus vivre mes premières expériences musicales à plusieurs à leurs côtés. 
        On interpreta de nombreuses reprises de groupes de Hard-Rock, 
        de Nirvana à AC/DC en passant par System of a Down.
      </p>

      <iframe id="first-concert" title="Premier concert" width="890" height="504"
        src="https://images.midilibre.fr/api/v1/images/view/667cd7ef0869bb10eb4beaeb/large/image.jpg?v=1">
      </iframe>

      <h3>
        Mon premier concert à Saint-Martin-de-Londres lors de la Fête de la Musique 2024.
      </h3>

      <p>
        Nous figurons à cette ocassion dans un
        <a target="blank"
          href="https://www.midilibre.fr/2024/06/27/fete-de-la-musique-une-soiree-qui-a-revele-des-talents-12043369.php">article
          du Midi Libre</a>.
      </p>

      <p>
        J'ai depuis quitter le groupe courant 2025 et ait toujours en tête de commencer une carrière musicale en
        parallèle de mes études.
      </p>
    </div>
  </section>
</template>
