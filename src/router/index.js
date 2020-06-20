import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import externalComponent from '@/utils/external-component';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/module1',
    name: 'Module A',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => externalComponent(/* webpackChunkName: "module1" */ '/module1/Home.5df6d51ae69c1517c7d4.umd.min.js')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
