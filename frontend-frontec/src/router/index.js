import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // path: '/about-us',
      name: 'home',
      component: HomeView
    },
    {
      path: '/our-products',
      name: 'our-products',
      component: () => import('../views/OurProducts.vue')
    },
    {
      path: '/spare-parts',
      name: 'spare-parts',
      component: () => import('../views/SpareParts.vue')
    },
    {
      path: '/activities',
      name: 'activities',
      component: () => import('../views/Activities.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
