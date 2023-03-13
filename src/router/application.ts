export default {
  path: "/",
  // meta: {
  //   guest: true,
  // },
  component: () => import("@/layouts/app.vue"),
  children: [
    {
      path: "/",
      name: "landing",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/app/landing.vue"),
    },

    {
      path: "product/:id/:slug",
      name: "product detail",
      component: () =>
        import(
          /* webpackChunkName: "product" */ "@/views/app/product/detail.vue"
        ),
    },

    {
      path: "search",
      name: "search",
      component: () =>
        import(/* webpackChunkName: "search" */ "@/views/app/search.vue"),
    },

    {
      path: "search/:category",
      name: "search-category",
      component: () =>
        import(/* webpackChunkName: "search-category" */ "@/views/app/search/category.vue"),
    },

    {
      path: "categories",
      name: "categories",
      component: () =>
        import(
          /* webpackChunkName: "categories" */ "@/views/app/categories/landing.vue"
        ),
    },

    {
      path: "main/:slug",
      name: "main category",
      component: () => import("@/views/app/categories/main.vue"),
    },
  ],
};
