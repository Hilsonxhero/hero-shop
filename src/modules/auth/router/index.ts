export default {
  path: "/auth",
  meta: {
    guest: true,
  },
  component: () => import("@/layouts/auth.vue"),
  children: [
    {
      path: "",
      name: "auth",
      component: () =>
        import(/* webpackChunkName: "auth" */ "@/modules/auth/views/auth.vue"),
    },
  ],
};
