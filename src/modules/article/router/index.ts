export default {
  path: "/",
  meta: {

  },
  component: () => import("@/layouts/app.vue"),
  children: [
    {
      path: "articles",
      name: "articles index",
      component: () =>
        import(/* webpackChunkName: "articles-page" */ "@/modules/article/views/articles.vue"),
    },
    {
      path: "articles/:id/:slug",
      name: "articles show",
      component: () =>
        import(/* webpackChunkName: "articles-show-page" */ "@/modules/article/views/show.vue"),
    },
  ],
};
