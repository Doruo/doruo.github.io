<script lang="ts" setup>
import PortfolioIntro from '@/components/portfolio/PortfolioIntro.vue'
import ProjectCards from '@/components/portfolio/ProjectCards.vue'
import PortfolioBio from '@/components/portfolio/PortfolioBio.vue'
import PortfolioFuture from '@/components/portfolio/PortfolioFuture.vue'
import PortfolioContact from '@/components/portfolio/PortfolioContact.vue'
import { projectsData } from '@/data/projectsData.ts';

const { mainProjects } = projectsData;

</script>

<template>
  <PortfolioIntro />

  <ProjectCards
    :title=mainProjects.title
    :projects=mainProjects.projects
    :show-all-projects-link=false
  />

  <PortfolioBio />

  <PortfolioFuture />

  <PortfolioContact />

</template>

<style>

</style>
