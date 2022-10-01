export default {
  path: "/user",
  meta: {
    auth: true,
  },
  component: () => import("@/layouts/user.vue"),
  children: [
    {
      path: "profile",
      name: "user profile",
      component: () => import("@/modules/user/views/profile.vue"),
    },

    {
      path: "addresses",
      name: "user profile addresses",
      component: () => import("@/modules/user/views/addresses.vue"),
    },
  ],
};
