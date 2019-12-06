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
Vue.filter('trans', function (val) {
  let ary = val.split('|');
  let obj = {
    userhandle: "员工操作权",
    departhandle: "部门操作权",
    jobhandle: "职务操作权",
    departcustomer: "部门全部客户",
    allcustomer: "公司全部客户",
    resetpassword: "重置密码"
  }
  return ary.map(item => obj[item]).join(' | ')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
