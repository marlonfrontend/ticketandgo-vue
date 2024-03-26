import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/HomeView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart/CartView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/product/ProductView.vue')
    }
  ]
})

export default router
