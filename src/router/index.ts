import {createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '@/views/Homeview.vue'
import JobView from '@/views/JobsView.vue'

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'Jobs',
            component: JobView
        }
    ]
})





export default router; 