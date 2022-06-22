export default
    {
        path: '/',
        component: () => import("@/layout/app/Layout.vue"),
        children: [
            {
                path: '/',
                name: 'landing',
                component: () => import(/* webpackChunkName: "home" */ "@/views/app/landing.vue"),
            },

            {
                path: 'product/:id/:slug',
                name: 'product detail',
                component: () => import(/* webpackChunkName: "product" */ "@/views/app/product/detail.vue"),
            },
            {
                path: 'checkout/cart',
                name: 'checkout cart',
                component: () => import(/* webpackChunkName: "cart" */ "@/views/checkout/cart.vue"),
            },
        ]
    }

