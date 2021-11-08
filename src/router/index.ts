import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Recommend = () => import('@/views/recommend.vue'/* webpackChunkName: "recommend" */)
const Toplist = () => import('@/views/toplist.vue'/* webpackChunkName: "toplist" */)
const Singer = () => import('@/views/singer.vue'/* webpackChunkName: "singer" */)
const Search = () => import('@/views/search.vue'/* webpackChunkName: "search" */)

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/recommend'
    },
    {
        path: '/recommend',
        component: Recommend
    },
    {
        path: '/top-list',
        component: Toplist
    },
    {
        path: '/singer',
        component: Singer
    },
    {
        path: '/search',
        component: Search
    }
]
// import.meta.env.BASE_URL
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({left: 0, top: 0})
})

export default router