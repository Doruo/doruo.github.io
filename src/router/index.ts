import { createRouter, createWebHashHistory } from 'vue-router';
import ViewProjects from '@/views/ViewProjects.vue'
import ProjectEldenBuild from '@/components/projects/ProjectEldenBuild.vue'
import ProjectNDI from '@/components/projects/ProjectNDI.vue'
import ProjectPoursuiteEtude from '@/components/projects/ProjectPoursuiteEtude.vue'
import ProjectTrains from '@/components/projects/ProjectTrains.vue'
import ViewHome from '@/views/ViewHome.vue'
import ViewError from '@/views/ViewError.vue'
import ViewAbout from '@/views/ViewAbout.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: ViewHome,
  },
  {
    path: '/about',
    name: 'about',
    component: ViewAbout,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ViewProjects,
  },
  // Routes des projets (à l'avenir automatiser avec "/projets/{id}")
  {
    path: '/projects/poursuite-etude',
    name: 'projects-poursuite-etude',
    component: ProjectPoursuiteEtude,
  },
  {
    path: '/projects/trains',
    name: 'projects-trains',
    component: ProjectTrains,
  },
  {
    path: '/projects/elden-build',
    name: 'projects-elden-build',
    component: ProjectEldenBuild,
  },
  {
    path: '/projects/nuitdelinfo',
    name: 'projects-ndi2024',
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

  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,

  // Configuration du scroll behavior pour gérer les ancres
  scrollBehavior(to, from, savedPosition) {

    // Si l'utilisateur utilise les boutons précédent/suivant
    if (savedPosition) {
      return savedPosition
    }

    // Si il y a une ancre dans l'URL
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    // Sinon retourner en haut de la page
    return { top: 0 }
  }
})

// gérer les erreurs
router.onError((error) => {
  console.error('Erreur de navigation:', error)
  router.push({ name: 'Error', params: { error: error.message } })
})

export default router
