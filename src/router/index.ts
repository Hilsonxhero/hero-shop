import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import("@/layout/app/Layout.vue"),
    children: [
      {
        path: '/',
        name: 'landing',
        component: () => import(/* webpackChunkName: "home" */ "@/views/app/landing.vue"),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
