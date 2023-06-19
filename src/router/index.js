import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: () => (
                import ('../views/dashboard/Login.vue'))
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => (
                import ('../views/dashboard/Dashboard.vue'))
        },

    ]
})

export default router