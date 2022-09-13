import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// @ts-ignore
import app from "./application";
import user from "@/modules/user/router";
import auth from "@/modules/auth/router";
import checkout from "@/modules/checkout/router";
const routes: Array<RouteRecordRaw> = [app, auth, user, checkout];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
