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
    {
      path: "orders",
      name: "user profile orders",
      component: () => import("@/modules/user/views/orders/index.vue"),
    },
    {
      path: "lists",
      name: "user profile lists",
      component: () => import("@/modules/user/views/lists/index.vue"),
    },
    {
      path: "orders/:id",
      name: "user profile orders show",
      component: () => import("@/modules/user/views/orders/show.vue"),
    },

  ],
};
