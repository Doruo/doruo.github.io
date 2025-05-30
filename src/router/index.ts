import ViewPortfolio from '@/views/ViewPortfolio.vue';
import { createWebHistory, createRouter } from 'vue-router';
import ViewProjects from '@/views/ViewProjects.vue'

const routes = [
  {
    path: '/',
    name: 'default',
    component: ViewPortfolio,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: ViewPortfolio,
  },
  {
    path: '/projets',
    name: 'projects',
    component: ViewProjects,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
