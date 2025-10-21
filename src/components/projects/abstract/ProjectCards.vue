<script setup lang="ts">
import ProjectCardItem from '@/components/projects/abstract/ProjectCardItem.vue'
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
})
</script>

<template>
  <!-- PROJECTS CARDS -->
  <section id="projets" class="projets">
    <div class="contenu-projets">
      <h2>{{ title }}</h2>

      <div class="projet-grid">

        <ProjectCardItem
          v-for="project in projectsCategory.projects"
          :key="project.id"
          :title="project.title"
          :show-more-info-link="project.showMoreInfoLink"
          :more-info-link=project.moreInfoLink
          :website-link="project.websiteLink"
        >
          <template #description>
            <span v-html="project.description"></span>
          </template>

          <template #techs>
            {{ project.techs }}
          </template>
        </ProjectCardItem>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
