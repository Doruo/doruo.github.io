import { createRouter, createWebHistory } from 'vue-router'

import ViewHome from '@/views/ViewHome.vue'
import ViewError from '@/views/ViewError.vue'
import ViewAbout from '@/views/ViewAbout.vue'
import ViewArchives from '@/views/ViewArchives.vue'
import ViewProjects from '@/views/ViewProjects.vue'

import ProjectNDI2024 from '@/components/projects/iut/ProjectNDI2024.vue'
import ProjectNDI2025 from '@/components/projects/iut/ProjectNDI2025.vue'
import ProjectPoursuiteEtude from '@/components/projects/iut/ProjectPoursuiteEtudes.vue'
import ProjectTrains from '@/components/projects/iut/ProjectTrains.vue'
import ProjectMyAvatar from '@/components/projects/iut/ProjectMyAvatar.vue'

import ProjectEldenBuild from '@/components/projects/perso/ProjectEldenBuild.vue'
import ProjectGol from '@/components/projects/perso/ProjectGol.vue'
import ProjectJellybot from '@/components/projects/perso/ProjectJellybot.vue'

const routes = [
  // views
  { path: '/', name: 'home', component: ViewHome },
  { path: '/about', name: 'about', component: ViewAbout },
  { path: '/projects', name: 'projects', component: ViewProjects },
  { path: '/archives', name: 'archives', component: ViewArchives },
  // projects
  { path: '/projects/poursuite-etudes', name: 'projects-poursuite-etude', component: ProjectPoursuiteEtude },
  { path: '/projects/trains', name: 'projects-trains', component: ProjectTrains },
  { path: '/projects/elden-build', name: 'projects-elden-build', component: ProjectEldenBuild },
  { path: '/projects/nuit-de-linfo-2024', name: 'projects-ndi2024', component: ProjectNDI2024 },
  { path: '/projects/nuit-de-linfo-2025', name: 'projects-ndi2025', component: ProjectNDI2025 },
  { path: '/projects/my-avatar', name: 'projects-my-avatar', component: ProjectMyAvatar },
  { path: '/projects/game-of-life', name: 'projects-gol', component: ProjectGol },
   { path: '/projects/jellybot', name: 'projects-jellybot', component: ProjectJellybot },
  // error
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: ViewError, props: { errorType: '404' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  // hook handling
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

// error handling
router.onError((error) => {
  console.error('Error:', error)
  router.push({ name: 'Error', params: { error: error.message } })
})

export default router
