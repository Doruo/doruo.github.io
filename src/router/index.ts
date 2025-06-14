
import { createWebHistory, createRouter } from 'vue-router';
import ViewProjects from '@/views/ViewProjects.vue'
import ProjectEldenBuild from '@/components/projects/ProjectEldenBuild.vue'
import ProjectNDI from '@/components/projects/ProjectNDI.vue'
import ProjectPoursuiteEtude from '@/components/projects/ProjectPoursuiteEtude.vue'
import ProjectTrains from '@/components/projects/ProjectTrains.vue'
import ViewPortfolio from '@/views/ViewPortfolio.vue'
import ViewError from '@/views/ViewError.vue'

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
  // route catch-all pour les 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: ViewError,
    props: { errorType: '404' }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Guard global pour gérer les erreurs
router.onError((error) => {
  console.error('Erreur de navigation:', error)
  router.push({ name: 'Error', params: { error: error.message } })
})

export default router
