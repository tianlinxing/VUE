import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './utils/reset.min.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
