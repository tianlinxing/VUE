import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

// 导入子映射表
import org from './org.js'
import crm from './customer.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect: '/org',
    children: [
      {
        path: '/org',
        name: 'org',
        component: () => import(/* webpackChunkName: "ORG" */ '../views/ORG.vue'),
        children: org
      },
      {
        path: '/crm',
        name: 'crm',
        component: () => import(/* webpackChunkName: "CRM" */ '../views/CRM.vue'),
        children: crm
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
