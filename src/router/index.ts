import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// @ts-ignore
import app from "./application";
import auth from "./auth";

const routes: Array<RouteRecordRaw> = [app, auth];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
