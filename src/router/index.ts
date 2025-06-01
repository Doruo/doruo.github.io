
import { createWebHistory, createRouter } from 'vue-router';
import ViewProjects from '@/views/ViewProjects.vue'
import ViewAbilities from '@/views/ViewAbilities.vue'
import ProjectEldenBuild from '@/components/projects/ProjectEldenBuild.vue'
import ProjectNDI from '@/components/projects/ProjectNDI.vue'
import ProjectPoursuiteEtude from '@/components/projects/ProjectPoursuiteEtude.vue'
import ProjectTrains from '@/components/projects/ProjectTrains.vue'
import ViewPortfolio from '@/views/ViewPortfolio.vue'

const routes = [
  {
    path: '/',
    name: 'portfolio',
    component: ViewPortfolio,
  },
  {
    path: '/projets',
    name: 'projects',
    component: ViewProjects,
  },
  {
    path: '/apprentissages',
    name: 'apprentissages',
    component: ViewAbilities,
  },
  // Routes des projets (à l'avenir automatiser avec "/projets/{id}")
  {
    path: '/projets/poursuite-etude',
    name: 'poursuite-etude',
    component: ProjectPoursuiteEtude,
  },
  {
    path: '/projets/trains',
    name: 'trains',
    component: ProjectTrains,
  },
  {
    path: '/projets/elden-build',
    name: 'elden-build',
    component: ProjectEldenBuild,
  },
  {
    path: '/projets/nuitdelinfo',
    name: 'ndi2024',
    component: ProjectNDI,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
