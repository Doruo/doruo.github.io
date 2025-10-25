import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import ViewProjects from '@/views/ViewProjects.vue'
import ProjectEldenBuild from '@/components/projects/dev/ProjectEldenBuild.vue'
import ProjectNDI from '@/components/projects/iut/ProjectNDI.vue'
import ProjectPoursuiteEtude from '@/components/projects/iut/ProjectPoursuiteEtude.vue'
import ProjectTrains from '@/components/projects/iut/ProjectTrains.vue'
import ViewHome from '@/views/ViewHome.vue'
import ViewError from '@/views/ViewError.vue'
import ViewAbout from '@/views/ViewAbout.vue';
import ViewArchives from '@/views/ViewArchives.vue';

const routes = [
  // views
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
  // error
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

  // hook handling
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

// error handling
router.onError((error) => {
  console.error('Error:', error)
  router.push({ name: 'Error', params: { error: error.message } })
})

export default router
