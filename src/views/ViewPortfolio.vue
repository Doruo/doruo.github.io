<script lang="ts" setup>
import PortfolioIntro from '@/components/portfolio/PortfolioIntro.vue'
import ProjectCards from '@/components/projects/ProjectCards.vue'
import PortfolioBio from '@/components/portfolio/PortfolioBio.vue'
import PortfolioFuture from '@/components/portfolio/PortfolioFuture.vue'
import PortfolioContact from '@/components/portfolio/PortfolioContact.vue'
import { ProjectsData } from '@/data/ProjectsData.ts'
</script>

<template>
  <PortfolioIntro />

  <ProjectCards
    :title=ProjectsData.getMainProjectsCategory().title
    :projectsCategory=ProjectsData.getMainProjectsCategory()
    :show-all-projects-link=false
  />

  <PortfolioBio />
  <PortfolioFuture />
  <PortfolioContact />
</template>

