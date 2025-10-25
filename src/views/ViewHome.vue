<script lang="ts" setup>
import AboutIntro from '@/components/about/AboutIntro.vue'
import ProjectCards from '@/components/projects/abstract/ProjectCards.vue'
import { ProjectsData } from '@/data/ProjectsData.ts'
</script>

<template>
  <!-- VIEW HOME -->
  <AboutIntro />
  <ProjectCards
    :title="ProjectsData.getMainProjectsCategory().title"
    :projectsCategory="ProjectsData.getMainProjectsCategory()"
    :show-all-projects-link="true"
  />
  <section class="contact">
    <h1>
      <router-link :to="{ name: 'projects' }">Voir plus de projets</router-link>
    </h1>
  </section>
</template>
