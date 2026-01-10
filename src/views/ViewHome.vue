<script lang="ts" setup>
import AboutIntro from '@/components/about/AboutIntro.vue'
import AboutSocialLinks from '@/components/about/AboutSocialLinks.vue';
import ProjectCards from '@/components/projects/abstract/ProjectCards.vue'
import { Projects } from '@/data/Projects'
</script>

<template>
  <!-- VIEW HOME -->
  <AboutIntro />

  <ProjectCards
    :title="Projects.getMainProjectsCategory().title"
    :projectsCategory="Projects.getMainProjectsCategory()"
    :show-all-projects-link="true"
  />

  <section class="contact">
    <h1>
      <router-link :to="{ name: 'projects' }">Voir plus</router-link>
    </h1>
  </section>

  <AboutSocialLinks />
</template>
