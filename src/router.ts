import { createRouter, createWebHistory } from 'vue-router'

import Start from './pages/Start.vue'
import Settings from './pages/Settings.vue'
import Logs from './pages/Logs.vue'

const routes = [
  {
      path: '/',
      name: 'Start',
      component: Start,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/logs',
    name: 'Logs',
    component: Logs,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router