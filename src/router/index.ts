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

import { useAuthStore } from "@/modules/auth";

router.beforeEach(async (to, from, next) => {
  const store = useAuthStore();

  if (to.name !== "auth") await store.init();
  // if (to.meta.auth || to.matched.some((parent) => parent.meta.auth)) {
  //   await store.init();
  // }
  console.log("here");

  if (
    (to.meta.auth || to.matched.some((parent) => parent.meta.auth)) &&
    !store.loggedIn
  ) {
    next({ name: "auth" });
  }

  if (to.meta.guest && store.loggedIn) {
    next({ name: "user profile" });
  }

  next();
});

export default router;
