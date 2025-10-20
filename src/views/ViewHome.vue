<script lang="ts" setup>
import AboutIntro from '@/components/about/AboutIntro.vue';
import ProjectCards from '@/components/projects/common/ProjectCards.vue'
import { ProjectsData } from '@/data/ProjectsData.ts'
</script>

<template>
  <AboutIntro/>
  <ProjectCards
    :title=ProjectsData.getMainProjectsCategory().title
    :projectsCategory=ProjectsData.getMainProjectsCategory()
    :show-all-projects-link=true
  />
  <h1>
    <router-link :to="{ name: 'projects' }">Tous les projets</router-link>
  </h1>
</template>

