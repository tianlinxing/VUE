export default [
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "login" */ '@/components/home')
    }
]