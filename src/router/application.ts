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
        ]
    }

