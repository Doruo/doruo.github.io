<script setup lang="ts">
import ProjectCards from '@/components/projects/abstract/ProjectCards.vue'
import { ProjectsData } from '@/data/ProjectsData.ts'
</script>

<template>
  <!-- VIEW PROJECTS -->
  <ProjectCards :title=ProjectsData.getMainProjectsCategory().title :projectsCategory=ProjectsData.getMainProjectsCategory() />
  <ProjectCards :title=ProjectsData.getAcademicProjectsCategory().title :projectsCategory=ProjectsData.getAcademicProjectsCategory() />
  <ProjectCards :title=ProjectsData.getGameDevProjectsCategory().title :projectsCategory=ProjectsData.getGameDevProjectsCategory() />
  <ProjectCards :title=ProjectsData.getCommunityProjectsCategory().title :projectsCategory=ProjectsData.getCommunityProjectsCategory() />
  <ProjectCards :title=ProjectsData.getCompetitionProjectsCategory().title :projectsCategory=ProjectsData.getCompetitionProjectsCategory() />
</template>
