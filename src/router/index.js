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
  {
    path: '/details',
    component: () => import('@/views/Details')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
