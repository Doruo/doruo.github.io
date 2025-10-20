<script setup lang="ts">
import ProjectCards from '@/components/projects/common/ProjectCards.vue'
import { ProjectsData } from '@/data/ProjectsData.ts'
</script>

<template>

  <!-- main -->
  <ProjectCards
    :title=ProjectsData.getMainProjectsCategory().title
    :projectsCategory=ProjectsData.getMainProjectsCategory()
  />
  <!-- academic -->
  <ProjectCards
    :title=ProjectsData.getAcademicProjectsCategory().title
    :projectsCategory=ProjectsData.getAcademicProjectsCategory()
  />
  <!-- video games -->
  <ProjectCards
    :title=ProjectsData.getCommunityProjectsCategory().title
    :projectsCategory=ProjectsData.getCommunityProjectsCategory()
  />
  <!-- video games -->
  <ProjectCards
    :title=ProjectsData.getGameDevProjectsCategory().title
    :projectsCategory=ProjectsData.getGameDevProjectsCategory()
  />
  <!-- competitive -->
  <ProjectCards
    :title=ProjectsData.getCompetitionProjectsCategory().title
    :projectsCategory=ProjectsData.getCompetitionProjectsCategory()
  />
</template>
