import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
import AddDel from './components/AddDel.vue'
import UpdateDel from './components/UpdateDel.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login'
    },
    {
        name: 'AddDel',
        component: AddDel,
        path: '/add'
    },
    {
        name: 'UpdateDel',
        component: UpdateDel,
        path: '/update/:id'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router