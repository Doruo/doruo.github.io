import ViewPortfolio from '@/views/ViewPortfolio.vue';
import { createWebHistory, createRouter } from 'vue-router';
import ViewProjects from '@/views/ViewProjects.vue'
import ViewApprentissages from '@/views/ViewApprentissages.vue'

const routes = [
  {
    path: '/',
    name: 'default',
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
    component: ViewApprentissages,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
