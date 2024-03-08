/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'


const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: () =>
                import ('@/pages/index.vue'),
        },
        {
            path: '/game',
            component: () =>
                import ('@/pages/game.vue'),
        },
    ],
})

export default router