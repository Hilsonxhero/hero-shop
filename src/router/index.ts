import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// @ts-ignore
import app from './application'
import auth from './auth'

const routes: Array<RouteRecordRaw> = [
  app,
  auth
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
