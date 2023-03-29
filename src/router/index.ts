import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router";
// @ts-ignore
import app from "./application";
import user from "@/modules/user/router";
import auth from "@/modules/auth/router";
import checkout from "@/modules/checkout/router";
import promotion from "@/modules/promotion/router";
import article from "@/modules/article/router";

const routes: Array<RouteRecordRaw> = [app, auth, user, checkout, promotion, article];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
  // parseQuery(query) {
  //   return qs.parse(query);
  // },
  // stringifyQuery(query) {
  //   const result = qs.stringify(query);

  //   return result ? result : "";
  // },
});

import { useUserStore } from "@/modules/user";

router.beforeEach(async (to, from, next) => {
  const store = useUserStore();

  if (to.name !== "auth") {
    await store.init();
  }

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
