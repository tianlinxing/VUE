import HomePage from '@/components/homePage'

export default [
    {
        path: '/homePage',
        name: 'homePage',
        component: HomePage,
        redirect: '/homePage/hot',
        children: [
            {
                path: '/homePage/focus',
                component: () => import(/* webpackChunkName: "Focus" */'../components/homePage/focus')
            },
            {
                path: '/homePage/recommend',
                component: () => import(/* webpackChunkName: "Recommend" */'../components/homePage/recommend')
            },
            {
                path: '/homePage/hot',
                component: () => import(/* webpackChunkName: "Hot" */'../components/homePage/hot')
            },
        ]

    }
]