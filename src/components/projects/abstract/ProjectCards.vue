<script setup lang="ts">
import ProjectCardItem from '@/components/projects/abstract/ProjectCardItem.vue'
import { type ProjectCategory } from '@/data/Projects'
import type { PropType } from 'vue'

defineProps({
  title: {type: String, required: true},
  projectsCategory: { type: Object as PropType<ProjectCategory>, required: true},
})
</script>

<template>
  <!-- PROJECTS CARDS -->
  <section class="projects">
    <div class="projects-content">
      <h2>{{ title }}</h2>

      <div class="project-grid">
        <ProjectCardItem
        v-for="project in projectsCategory.projects" v-show="project.show"

        :key="project.id"
        :title="project.title"
        :show-more-info="project.showMoreInfo"
        :more-info-link="project.moreInfoLink"
        :website-link="project.websiteLink"
        :background="project.background">

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
