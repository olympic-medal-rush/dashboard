import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Medals from '/src/components/Medals.vue'
import Bots from '/src/components/Bots.vue'

const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home,
  },
  {
    path: '/medals',
    name: 'Medals',
    component: Medals,
  },
  {
    path: '/bots',
    name: 'Bots',
    component: Bots,
  },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router