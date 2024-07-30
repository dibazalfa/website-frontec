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
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/our-companies',
      name: 'our-companies',
      component: () => import('../views/OurCompanies.vue')
    },
    {
      path: '/parallax',
      name: 'pempek',
      component: () => import('../views/Parallax.vue')
    },
    {
      path: '/pvc-solid-woven',
      name: 'pvc-solid-woven',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBelt/PVCSolidWoven.vue')
    },
    {
      path: '/elevator-belt',
      name: 'elevator-belt',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBelt/ElevatorBelt.vue')
    },
    {
      path: '/rubber-belt',
      name: 'rubber-belt',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBelt/Rubber.vue')
    },
    {
      path: '/oil-fire',
      name: 'oil-fire',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBelt/OilFireResistant.vue')
    },
    {
      path: '/bolt-sets',
      name: 'bolt-sets',
      component: () => import('../views/SpareParts/BucketElevatorComponents/BoltSetsFastener/BoltSetsFastener.vue')
    },
    {
      path: '/elevator-bucket',
      name: 'elevator-bucket',
      component: () => import('../views/SpareParts/BucketElevatorComponents/ElevatorBucket/ElevatorBucket.vue')
    },
    {
      path: '/pulley-slide-lagging',
      name: 'pulley-slide-lagging',
      component: () => import('../views/SpareParts/BucketElevatorComponents/PulleySlideLagging/PulleySlideLagging.vue')
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
