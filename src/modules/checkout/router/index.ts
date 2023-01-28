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
      component: () =>
        import(
          /* webpackChunkName: "shipping" */ "@/modules/checkout/views/shipping.vue"
        ),
    },
    {
      path: "payment",
      name: "checkout payment",
      component: () =>
        import(
          /* webpackChunkName: "payment" */ "@/modules/checkout/views/payment.vue"
        ),
    },
    {
      path: "confirmation/payment/:id",
      name: "checkout confirmation payment",
      component: () =>
        import(
          /* webpackChunkName: "confirmation" */ "@/modules/checkout/views/confirmation.vue"
        ),
    },
  ],
};
