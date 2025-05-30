<script setup lang="ts">
import ProjectCards from '@/components/portfolio/ProjectCards.vue'
import { ProjectsData } from '@/data/projectsData.ts'
</script>

<template>

  <ProjectCards
    title="Tout mes projets"
    :projectsCategory=ProjectsData.getAllProjectsCategory()
    :show-all-projects-link=false
  />

</template>
