import { createRouter, createMemoryHistory } from 'vue-router';

import ViewHome from '@/views/ViewHome.vue';
import ViewError from '@/views/ViewError.vue';
import ViewAbout from '@/views/ViewAbout.vue';
import ViewArchives from '@/views/ViewArchives.vue';
import ViewProjects from '@/views/ViewProjects.vue';
import ViewApprentissages from '@/views/ViewApprentissages.vue';

import ProjectNDI2024 from '@/components/projects/iut/ProjectNDI2024.vue';
import ProjectNDI2025 from '@/components/projects/iut/ProjectNDI2025.vue';
import ProjectPoursuiteEtude from '@/components/projects/iut/ProjectPoursuiteEtudes.vue';
import ProjectTrains from '@/components/projects/iut/ProjectTrains.vue';
import ProjectMyAvatar from '@/components/projects/iut/ProjectMyAvatar.vue';

import ProjectEldenBuild from '@/components/projects/perso/ProjectEldenBuild.vue';
import ProjectGol from '@/components/projects/perso/ProjectGol.vue';
import ProjectJellybot from '@/components/projects/perso/ProjectJellybot.vue';
import ProjectLLMBigram from '@/components/projects/perso/ProjectLLMBigram.vue';
import ViewDegoogle from '@/views/ViewDegoogle.vue';

const mainRoutes = [
  { path: '/', name: 'home', component: ViewHome },
  { path: '/about', name: 'about', component: ViewAbout },
  { path: '/projects', name: 'projects', component: ViewProjects },
  { path: '/degoogle', name: 'degoogle', component: ViewDegoogle },
  { path: '/archives', name: 'archives', component: ViewArchives },
  { path: '/apprentissages', name: 'apprentissages', component: ViewApprentissages},
]

const academicProjectRoutes = [
  { path: '/poursuite-etudes', name: 'projects-poursuite-etude', component: ProjectPoursuiteEtude, props: { group: true } },
  { path: '/trains', name: 'projects-trains', component: ProjectTrains, props: { group: true } },
  { path: '/nuit-de-linfo-2024', name: 'projects-ndi2024', component: ProjectNDI2024, props: { group: true } },
  { path: '/nuit-de-linfo-2025', name: 'projects-ndi2025', component: ProjectNDI2025, props: { group: true } },
];

const personnalProjectRoutes = [
  { path: '/elden-build', name: 'projects-elden-build', component: ProjectEldenBuild },
  { path: '/my-avatar', name: 'projects-my-avatar', component: ProjectMyAvatar, props: { group: true } },
  { path: '/game-of-life', name: 'projects-gol', component: ProjectGol },
  { path: '/jellybot', name: 'projects-jellybot', component: ProjectJellybot },
  { path: '/llm-bigram', name: 'projects-llm-bigram', component: ProjectLLMBigram },
];

const projectRoutes = [
  ...academicProjectRoutes,
  ...personnalProjectRoutes,
];

const errorRoute = { path: '/:pathMatch(.*)*', name: 'NotFound', component: ViewError, props: { errorType: '404' } };

const routes = [
  ...mainRoutes,
  ...projectRoutes,
  errorRoute,
];

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,

  // hook handling
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
});

// error handling
router.onError((error) => {
  console.error('Error:', error)
  router.push({ name: 'Error', params: { error: error.message } })
});

export default router;
