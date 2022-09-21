import {createRouter, createWebHistory} from 'vue-router'
import NotFound from "../components/NotFound.vue";
import Home from "../views/home/Home.vue";
import SinglePostView from "../views/single-post/SinglePostView.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/post/:slug',
        name: 'singlepost',
        props: true,
        component: SinglePostView
    },
    {path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.resolve({
    name: 'not-found',
    params: {pathMatch: ['not', 'found']},
}).href

export default router