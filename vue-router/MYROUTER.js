(function (global, factory) {
    global.VueRouter = factory();
})(this, function () {
    class VueRouter {
        constructor(options) {
            let { routes } = options;
            // routes [{path:'',component:a}]
            // {'/a':a}
            this.routeMap = routes.reduce((obj, cur)=>{
                obj[cur.path] = cur.component;
                return obj;
            }, {})
            window.addEventListener('load', ()=> {
                location.hash = location.hash || '/';
            })
            // Vue 原生方法，把路由变成响应式的
            Vue.util.defineReactive(this, '_route', '/');
            this._route = location.hash.slice(1);
            window.addEventListener('hashchange', ()=>{
                // 去掉#号
                this._route = location.hash.slice(1);
            })
        }
    }
    VueRouter.install = function (_Vue) {
        // 只要Vue.use()执行了  就会执行这个install方法
        console.log(_Vue);
        _Vue.mixin({
            beforeCreate() {
                if (this.$options && this.$options.router) {
                    this._router = this.$options.router;
                } else {
                    this._router = this.$parent._router;
                }
                console.log(this);
            },
        })
        _Vue.component('router-link', {
            props: {
                to: String // 要接收一个to属性 类型需要是一个字符串
            },
            // template:`<a :href='"#"+to'><slot></slot></a>`
            render(h) {
                return h('a', {
                    attrs: {
                        href: '#' + this.to
                    }
                }, this.$slots.default)
            }
        })
        _Vue.component('router-view', {
            render(h) {
                // this 是router-view组件
                return h(this._router.routeMap[this._router._route]);
            }
        })
    }
    return VueRouter;
})

/* 
    history.pushState({key: Math.random()}, '', '/list')
    history.replaceState();
    window.onpopstate
*/