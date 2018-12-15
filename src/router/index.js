import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Board from '@/pages/Board'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/board/:id',
      component: Board
    }
  ]
})
