import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router";
// @ts-ignore
import user from "@/modules/user/router";
import auth from "@/modules/auth/router";
import checkout from "@/modules/checkout/router";
import promotion from "@/modules/promotion/router";
import article from "@/modules/article/router";
import web from "@/modules/web/router";
import product from "@/modules/product/router";
const routes: Array<RouteRecordRaw> = [auth, product, user, checkout, promotion, article, web];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    let bd = document.body.classList;
    bd.remove("overflow-hidden");
    document.getElementById('app')!.scrollIntoView({ behavior: "smooth" });
    // return { top: 0, behavior: "smooth" };
  },
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
