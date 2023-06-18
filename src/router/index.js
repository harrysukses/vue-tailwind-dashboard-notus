import { createWebHistory, createRouter } from "vue-router";

import dashboard from "../pages/master/dashboard"
import home from "../pages/home"
import profile from "../pages/profile"

import Admin from "@/layouts/Admin.vue"

const routes = [
    {
        name: 'LayoutAdmin',
        path: '/admin',
        component: Admin
    },
    {
        name: 'Home',
        path: '/home',
        component: home
    },
    {
        name: 'Profile',
        path: '/profile',
        component: profile
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;