<script setup lang="ts">
import ProjectCards from '@/components/projects/common/ProjectCards.vue'
import { ProjectsData } from '@/data/ProjectsData.ts'
</script>

<template>
  <!-- VIEW PROJECTS -->
  <!-- MAIN PROJECTS -->
  <ProjectCards
    :title=ProjectsData.getMainProjectsCategory().title
    :projectsCategory=ProjectsData.getMainProjectsCategory()
  />
  <!-- GAME PROJECTS -->
  <ProjectCards
    :title=ProjectsData.getGameDevProjectsCategory().title
    :projectsCategory=ProjectsData.getGameDevProjectsCategory()
  />
  <!-- ACADEMIC PROJECTS -->
  <ProjectCards
    :title=ProjectsData.getAcademicProjectsCategory().title
    :projectsCategory=ProjectsData.getAcademicProjectsCategory()
  />
  <!-- COMMUNITY PROJECTS -->
  <ProjectCards
    :title=ProjectsData.getCommunityProjectsCategory().title
    :projectsCategory=ProjectsData.getCommunityProjectsCategory()
  />

  <!-- WEB PROJECTS -->
  <ProjectCards
    :title=ProjectsData.getCompetitionProjectsCategory().title
    :projectsCategory=ProjectsData.getCompetitionProjectsCategory()
  />
</template>
