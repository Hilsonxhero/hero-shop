export default {
  path: "/checkout",
  component: () => import("@/layouts/app.vue"),
  children: [
    {
      path: "cart",
      name: "checkout cart",
      component: () =>
        import(
          /* webpackChunkName: "cart" */ "@/modules/checkout/views/cart.vue"
        ),
    },
    {
      path: "shipping",
      name: "checkout shipping",
      meta: {
        auth: true,
      },
      component: () =>
        import(
          /* webpackChunkName: "shipping" */ "@/modules/checkout/views/shipping.vue"
        ),
    },
    {
      path: "payment",
      name: "checkout payment",
      meta: {
        auth: true,
      },
      component: () =>
        import(
          /* webpackChunkName: "payment" */ "@/modules/checkout/views/payment.vue"
        ),
    },
    {
      path: "confirmation/payment/:id",
      name: "checkout confirmation payment",
      meta: {
        auth: true,
      },
      component: () =>
        import(
          /* webpackChunkName: "confirmation" */ "@/modules/checkout/views/confirmation.vue"
        ),
    },
  ],
};
