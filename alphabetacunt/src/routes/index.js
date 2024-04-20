import { createRouter, createWebHistory } from 'vue-router'
import Login from './../views/Login';
import Register from './../views/Register';
import Dashboard from './../views/Dashboard';
import { auth } from '../firebaseConfig'; // Import Firebase auth instance

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true } // Add meta field to indicate authentication requirement
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = auth.currentUser;

    if (requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router
