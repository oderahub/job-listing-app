import {createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '@/views/Homeview.vue'
import JobsView from '@/views/JobsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import JobView from '@/views/JobView.vue'
import AddJob from '@/views/AddJob.vue'

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
            component: JobsView
        },
        {
            path: '/jobs/:id',
            name: 'Job',
            component: JobView
        },
        {
            path: '/job/add',
            name: 'Add-Job',
            component: AddJob
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFoundView
        },


    ]
})





export default router; 