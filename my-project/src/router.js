import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (componentName) {
    return () => import(`@/components/${componentName}`)

}

const router = new VueRouter({
    mode: 'history', //seo frendly
    routes: [
        {
            path: '/',
            name: 'Home',
            component: load("Home")
        },
        {
            path: '/blog',
            name: 'Blog',
            component: load('Blog')
        }
    ]
})

export default router