export default [
    {
        path: '/crm/myCustomer',
        name: 'myCustomer',
        component: () => import(/* webpackChunkName: "customer" */ '@/components/customer/my.vue'),
        meta: {
            type: 'crm',
            rootTil: "客户管理",
            til: '我的客户',
            icon: 'el-icon-user',
            power: ''
        }
    },
    {
        path: '/crm/addCustomer',
        name: 'addCustomer',
        component: () => import(/* webpackChunkName: "customer" */ '@/components/customer/add.vue'),
        meta: {
            type: 'crm',
            rootTil: "客户管理",
            til: '新增客户',
            icon: 'el-icon-user',
            power: ''
        }
    },
    {
        path: '/crm/allCustomer',
        name: 'allCustomer',
        component: () => import(/* webpackChunkName: "customer" */ '@/components/customer/all.vue'),
        meta: {
            type: 'crm',
            rootTil: "客户管理",
            til: '全部客户',
            icon: 'el-icon-user',
            power: 'allcustomer'
        }
    },
]