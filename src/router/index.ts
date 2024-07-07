import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: { name: 'Main' },
      component: () => import('@/layouts/main-layout.vue'),
      children: [
        {
          path: '/',
          name: 'Main',
          component: () => import('@/views/home.vue'),
        },
      ],
    },
  ],
});

export default router;
