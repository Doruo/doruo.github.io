import { createRouter, createWebHashHistory } from 'vue-router';
import ViewProjects from '@/views/ViewProjects.vue'
import ProjectEldenBuild from '@/components/projects/ProjectEldenBuild.vue'
import ProjectNDI from '@/components/projects/ProjectNDI.vue'
import ProjectPoursuiteEtude from '@/components/projects/ProjectPoursuiteEtude.vue'
import ProjectTrains from '@/components/projects/ProjectTrains.vue'
import ViewHome from '@/views/ViewHome.vue'
import ViewError from '@/views/ViewError.vue'
import ViewAbout from '@/views/ViewAbout.vue';
import ViewArchives from '@/views/ViewArchives.vue';

const routes = [
  // main
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
  {
    path: '/archives',
    name: 'archives',
    component: ViewArchives,
  },
  // projects
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

  // hook handling
  scrollBehavior(to, from, savedPosition) {

    // if previous/next used
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    // return at the top
    return { top: 0 }
  }
})

// error handling
router.onError((error) => {
  console.error('Erreur de navigation:', error)
  router.push({ name: 'Error', params: { error: error.message } })
})

export default router
