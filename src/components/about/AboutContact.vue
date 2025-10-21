<script setup lang="ts">
import { Pictures } from '@/data/Pictures'
import { Links } from '@/data/Links'
</script>

<template>
  <!-- CONTACT -->
  <section id="contact" class="contact">
    <div class="conteneur">

      <h2>Contact</h2>
      <p>Si mon profil correspond à ce que vous recherchez, contactez-moi !</p>

      <div class="social-links">

        <div class="social-link-img">
          <a :href=Links.MAIL>
            <img alt="mail" :src=Pictures.MAIL>
          </a>
        </div>

        <div class="social-link-img">
          <a :href=Links.GITHUB>
            <img alt="github" :src=Pictures.GITHUB>
          </a>
        </div>

        <div class="social-link-img">
          <a :href=Links.LINKEDIN>
            <img alt="linkedIn" :src=Pictures.LINKEDIN>
          </a>
        </div>
        <div class="social-link-img">
          <a :href=Links.GRAVATAR>
            <img alt="gravatar" :src=Pictures.GRAVATAR>
          </a>
        </div>

        <div class="social-link-img">
          <a :href=Links.ITCHIO>
            <img alt="itchio" :src=Pictures.ITCHIO>
          </a>
        </div>

      </div>
    </div>
  </section>

</template>

<style scoped>
</style>
