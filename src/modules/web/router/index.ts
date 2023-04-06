export default {
    path: "",
    component: () => import("@/layouts/app.vue"),
    children: [
        {
            path: "",
            name: "landing",
            component: () =>
                import(/* webpackChunkName: "web-home" */ "@/modules/web/views/landing.vue"),
        },
        {
            path: "search",
            name: "search",
            component: () =>
                import(/* webpackChunkName: "search" */ "@/modules/web/views/search.vue"),
        },
        {
            path: "search/:category",
            name: "search-category",
            component: () =>
                import(/* webpackChunkName: "search-category" */ "@/modules/web/views/search/category.vue"),
        },

        {
            path: "categories",
            name: "categories",
            component: () =>
                import(
                /* webpackChunkName: "categories" */ "@/modules/web/views/categories/landing.vue"
                ),
        },
        {
            path: "main/:slug",
            name: "main category",
            component: () => import("@/modules/web/views/categories/main.vue"),
        },

    ],
};
