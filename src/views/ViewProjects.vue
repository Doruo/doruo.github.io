<script setup lang="ts">
import ProjectCards from '@/components/projects/ProjectCards.vue'
import { ProjectsData } from '@/data/ProjectsData.ts'
</script>

<template>

  <ProjectCards
    :title=ProjectsData.getAllProjectsCategory().title
    :projectsCategory=ProjectsData.getAllProjectsCategory()
    :show-all-projects-link=false
  />

</template>
