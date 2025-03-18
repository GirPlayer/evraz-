import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import index from './views/index.vue'
import second from './views/second.vue'
import third from './views/third.vue'
import four from './views/four.vue'
import five from './views/five.vue'
import six from './views/six.vue'
import seven from './views/seven.vue'

let routes = [
    {
        path: '/',
        component: index,
    },

    {
        path: '/second',
        component: second,
    },

    {
        path: '/third',
        component: third,
    },

    {
        path: '/four',
        component: four,
    },

    {
        path: '/five',
        component: five,
    },

    {
        path: '/six',
        component: six,
    },

    {
        path: '/seven',
        component: seven,
    }
]

let  router = createRouter({
    history: createWebHistory(),
    routes: routes
})

createApp(App).use(router).mount('#app')
