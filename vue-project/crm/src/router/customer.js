export default [
    {
        path: '/crm/myCustomer',
        name: 'myCustomer',
        component: () => import(/* webpackChunkName: "customer" */ '@/components/customer/my.vue')
    },
    {
        path: '/crm/addCustomer',
        name: 'addCustomer',
        component: () => import(/* webpackChunkName: "customer" */ '@/components/customer/add.vue')
    },
    {
        path: '/crm/allCustomer',
        name: 'allCustomer',
        component: () => import(/* webpackChunkName: "customer" */ '@/components/customer/all.vue')
    },
]