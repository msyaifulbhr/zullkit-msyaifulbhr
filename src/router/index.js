import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: () => import('../views/DetailView.vue')
    },
    {
      path: '/Pricing',
      name: 'Pricing',
      component: () => import('../views/PricingView.vue')
    },
    {
      path: '/Success',
      name: 'Success',
      component: () => import('../views/SuccessView.vue')
    },
  ]
})

export default router