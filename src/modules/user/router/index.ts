export default {
  path: "/user",
  component: () => import("@/layouts/user.vue"),
  children: [
    {
      path: "profile",
      name: "user profile",
      component: () => import("@/modules/user/views/profile.vue"),
    },
  ],
};
