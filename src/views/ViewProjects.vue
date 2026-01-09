<script setup lang="ts">
import ProjectCards from '@/components/projects/abstract/ProjectCards.vue'
import { Projects } from '@/data/Projects'
</script>

<template>
  <!-- VIEW PROJECTS -->
  <ProjectCards
    :title="Projects.getMainProjectsCategory().title"
    :projectsCategory="Projects.getMainProjectsCategory()"
  />
  <ProjectCards
    :title="Projects.getCommunityProjectsCategory().title"
    :projectsCategory="Projects.getCommunityProjectsCategory()"
  />
  <ProjectCards
    :title="Projects.getAcademicProjectsCategory().title"
    :projectsCategory="Projects.getAcademicProjectsCategory()"
  />
  <ProjectCards
    :title="Projects.getCompetitionProjectsCategory().title"
    :projectsCategory="Projects.getCompetitionProjectsCategory()"
  />
  <ProjectCards
    :title="Projects.getGameProjectsCategory().title"
    :projectsCategory="Projects.getGameProjectsCategory()"
  />
</template>
