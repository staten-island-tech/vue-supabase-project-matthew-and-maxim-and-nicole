import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/store/:id',
      name: 'Store',
      component: () => import('../views/Store.vue'),
      props: true
    }
  ]
})

export default router
