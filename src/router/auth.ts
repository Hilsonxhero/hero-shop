export default
    {
        path: '/auth',
        component: () => import("@/layout/auth/Layout.vue"),
        children: [
            {
                path: '',
                name: 'auth',
                component: () => import(/* webpackChunkName: "auth" */ "@/views/auth/auth.vue"),
            },
        ]
    }

