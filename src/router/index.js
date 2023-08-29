import { createRouter, createWebHistory } from 'vue-router'
import ChatGPT from '../views/ChatGPT.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/gpt',
      name: 'index1',
      component: ChatGPT
    },
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue')
    }
  ]
})
//
// const router1 = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '../views',
//       name: 'index'
//     }
//   ]
// })
export default router
// export default router1
