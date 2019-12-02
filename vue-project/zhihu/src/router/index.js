import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Login from '../pages/Login'

// 引入子映射表
import homePage from './homePage'
import notify from './notify'
import user from './user'
import vip from './vip'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/homePage', // 进入home之后重定向到 hot页
    children: homePage.concat(notify, user, vip)
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    redirect: '/'
  }
]

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import(/* webpackChunkName: "About" */'../views/About.vue')
//   }
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
