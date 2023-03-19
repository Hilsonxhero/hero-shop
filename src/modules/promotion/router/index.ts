export default {
  path: "/",
  meta: {

  },
  component: () => import("@/layouts/app.vue"),
  children: [
    {
      path: "promotion",
      name: "promotion index",
      component: () =>
        import(/* webpackChunkName: "promotion-page" */ "@/modules/promotion/views/promotion.vue"),
    },
  ],
};
