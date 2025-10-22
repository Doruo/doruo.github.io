<script setup lang="ts">
import { Pictures } from '@/data/Pictures'
import { Links } from '@/data/Links'
import LinkMail from '../links/LinkMail.vue';
</script>

<template>
  <!-- CONTACT -->
  <section id="contact" class="contact">
    <div class="conteneur">

      <h2>Contact</h2>
      <p>Si mon profil correspond à ce que vous recherchez, contactez-moi !</p>

      <div class="social-links">

        <LinkMail :link=Links.mail />

        <div class="social-link-img">
          <a :href=Links.github>
            <img alt="github" :src=Pictures.GITHUB>
          </a>
        </div>

        <div class="social-link-img">
          <a :href=Links.linkedin>
            <img alt="linkedIn" :src=Pictures.LINKEDIN>
          </a>
        </div>
        <div class="social-link-img">
          <a :href=Links.gravatar>
            <img alt="gravatar" :src=Pictures.GRAVATAR>
          </a>
        </div>

        <div class="social-link-img">
          <a :href=Links.itchio>
            <img alt="itchio" :src=Pictures.ITCHIO>
          </a>
        </div>

      </div>
    </div>
  </section>

</template>

<style scoped>
</style>
