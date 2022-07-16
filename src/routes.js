import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

import HomePage from "@/views/HomeVue";
import AboutPage from "@/views/AboutVue";
import ErorPage from "@/views/404Vue";
const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/about',
            component: AboutPage    
        },
        {
            path: "/:CatchAll(.*)",
            component: ErorPage
        }
    ]
})
export default routers