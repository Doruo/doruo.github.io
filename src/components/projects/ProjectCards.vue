<script setup lang="ts">
import ProjectCardItem from '@/components/projects/ProjectCardItem.vue'
import { type ProjectCategory } from '@/data/ProjectsData.ts'
import type { PropType } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  projectsCategory: {
    type: Object as PropType<ProjectCategory>,
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
    default: 'Voir mes autres projets'
  }
})
</script>

<template>
  <section id="projets" class="projets">
    <div class="contenu-projets">
      <h2>- {{ title }} -</h2>

      <div class="projet-grid">

        <ProjectCardItem
          v-for="project in projectsCategory.projects"
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
