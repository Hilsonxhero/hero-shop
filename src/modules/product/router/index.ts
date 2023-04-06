export default {
    path: "/",

    component: () => import("@/layouts/app.vue"),
    children: [
        {
            path: "product/:id/:slug",
            name: "product detail",
            component: () =>
                import(
                /* webpackChunkName: "product" */ "@/modules/product/views/product/detail.vue"
                ),
        },

    ],
};
