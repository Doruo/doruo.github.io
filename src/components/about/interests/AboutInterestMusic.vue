<script setup lang="ts">
import { SocialIcons } from '@/data/Icons';
import { IUTLinks } from '@/data/Links';
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
        Mon tout premier concert réalisé à Saint-Martin-de-Londres lors de la Fête de la musique 2025.
      </h3>

      <iframe id="second-concert" title="Second concert" width="1084" height="804"
        src="https://scontent-cdg4-1.cdninstagram.com/v/t51.75761-15/483931505_17852340009409340_2475106490890569914_n.webp?stp=dst-webp_s1080x1080&_nc_cat=104&ig_cache_key=MzU4Njg4NzIzNDc1MDc1OTgyMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA2Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=ixcQy8rBqGkQ7kNvwG0lk5z&_nc_oc=AdplHQZGTDFADzmOTxFFlw6C4j6Lb16MQHrQ8_ZkhuZCc_ufqE4zYTKwfV-nI_NmU_aEAQ7cLuQZkYaCFNs-juHR&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cdg4-1.cdninstagram.com&_nc_gid=9d3ftejbq27Cq9lxfQzmeQ&_nc_ss=7a22e&oh=00_Af6mkJV3s76J55subQ-0cXknF-gfYokfgjnVRGDYi0rvhw&oe=69FA98EC">
      </iframe>

      <p>
        Nous figurons à cette ocassion dans un
        <a target="blank"
          href="https://www.midilibre.fr/2024/06/27/fete-de-la-musique-une-soiree-qui-a-revele-des-talents-12043369.php">article
          sur le Midi Libre</a>.
      </p>

      <p>
        J'ai depuis quitter le groupe courant 2025 et ait toujours en tête de commencer une carrière musicale en
        parallèle de mes études.
      </p>
    </div>
  </section>
</template>
