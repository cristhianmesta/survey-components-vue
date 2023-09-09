import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/categorical',
      name: 'Categorical',
      component: () => import('../views/CategoricalView.vue')
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: () => import('../views/RankingView.vue')
    },
    {
      path: '/rating',
      name: 'Rating',
      component: () => import('../views/RatingView.vue')
    },
    {
      path: '/open-ended',
      name: 'OpenEnded',
      component: () => import('../views/OpenEndedView.vue')
    },
    {
      path: '/grid',
      name: 'Grid',
      component: () => import('../views/GridView.vue')
    }
  ]
})

export default router
