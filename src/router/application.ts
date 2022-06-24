export default {
  path: "/",
  component: () => import("@/layout/app/Layout.vue"),
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
      path: "checkout/cart",
      name: "checkout cart",
      component: () =>
        import(/* webpackChunkName: "cart" */ "@/views/checkout/cart.vue"),
    },
    {
      path: "checkout/shipping",
      name: "checkout shipping",
      component: () =>
        import(
          /* webpackChunkName: "shipping" */ "@/views/checkout/shipping.vue"
        ),
    },

    {
      path: "checkout/payment",
      name: "checkout payment",
      component: () =>
        import(
          /* webpackChunkName: "payment" */ "@/views/checkout/payment.vue"
        ),
    },
  ],
};
