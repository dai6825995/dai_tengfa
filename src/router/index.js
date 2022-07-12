import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/views/Index')
  },
  {
    path: '/twocar',
    component: () => import('@/views/Twocar')
  },
  {
    path: '/newcar',
    component: () => import('@/views/Newcar')
  },
  {
    path: '/buycar',
    component: () => import('@/views/Buycar')
  },
  {
    path: '/finance',
    component: () => import('@/views/Finance')
  },
  {
    path: '/serve',
    component: () => import('@/views/Serve')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
