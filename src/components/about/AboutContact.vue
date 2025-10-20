<script setup lang="ts">
import github from '@/assets/images/contact/github.webp'
import mail  from '@/assets/images/contact/mail.webp'
import gravatar  from '@/assets/images/contact/gravatar.webp'
import linkedin  from '@/assets/images/contact/linkedin.webp'
import itchio  from '@/assets/images/contact/itchio.webp'
</script>

<template>
  <!-- CONTACT -->
  <section id="contact" class="contact">
    <div class="conteneur">

      <h2>Contact</h2>
      <p>Si mon profil correspond à ce que vous recherchez, contactez-moi !</p>

      <div class="social-links">

        <div class="social-link-img">
          <a href="mailto:marc.antonio.haye@gmail.com">
            <img alt="mail" :src=mail>
          </a>
        </div>

        <div class="social-link-img">
          <a href="https://github.com/Doruo">
            <img alt="github" :src=github>
          </a>
        </div>

        <div class="social-link-img">
          <a href="https://www.linkedin.com/in/marc-haye/">
            <img alt="linkedIn" :src=linkedin>
          </a>
        </div>
        <div class="social-link-img">
          <a href="https://fr.gravatar.com/marcantoniohaye">
            <img alt="gravatar" :src=gravatar>
          </a>
        </div>

        <div class="social-link-img">
          <a href="https://doruo.itch.io/">
            <img alt="itchio" :src=itchio>
          </a>
        </div>

      </div>
    </div>
  </section>

</template>

<style scoped>
</style>
