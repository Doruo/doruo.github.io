<script setup lang="ts">
import ProjectCardItem from '@/components/portfolio/ProjectCardItem.vue'
import { projectsData } from '@/data/projectsData.ts';

defineProps({
  title: {
    type: String,
    required: true
  },
  projects: {
    type: Array,
    required: true
  },
  showAllProjectsLink: {
    type: Boolean,
    default: false
  },
  allProjectsLink: {
    type: String,
    default: 'https://github.com/Doruo?tab=repositories'
  },
  allProjectsText: {
    type: String,
    default: 'Voir tous mes autres projets'
  }
})
</script>

<template>
  <section class="projets">
    <div class="contenu-projets">
      <h2>- {{ title }} -</h2>

      <div class="projet-grid">
        <ProjectCardItem
          v-for="project in projectsData.mainProjects.projects"
          :key="project.id"
          :title="project.title"
          :more-info-link="project.moreInfoLink"
          :website-link="project.websiteLink"
        >
          <template #description>
            <span v-html="project.description"></span>
          </template>

          <template #techs>
            {{ project.techs }}
          </template>
        </ProjectCardItem>

        <h1 v-if="showAllProjectsLink">
          <a :href="allProjectsLink">{{ allProjectsText }}</a>
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
