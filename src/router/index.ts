import BasePortfolio from '@/views/BasePortfolio.vue';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
      path: '/',
      name: 'portfolio',
      component: BasePortfolio,
    }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
