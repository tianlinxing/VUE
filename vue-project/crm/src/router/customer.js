export default [
    {
        path: '/myCustomer',
        name: 'myCustomer',
        component: () => import(/* webpackChunkName: "customer" */ '@/components/customer/my.vue')
    },
    {
        path: '/addCustomer',
        name: 'addCustomer',
        component: () => import(/* webpackChunkName: "customer" */ '@/components/customer/add.vue')
    },
    {
        path: '/allCustomer',
        name: 'allCustomer',
        component: () => import(/* webpackChunkName: "customer" */ '@/components/customer/all.vue')
    },
]