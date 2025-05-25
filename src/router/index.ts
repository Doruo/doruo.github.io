import Portfolio from '@/views/Portfolio.vue';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
      path: '/',
      name: 'portfolio',
      component: Portfolio,
    }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
