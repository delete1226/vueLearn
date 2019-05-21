// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as tools from './tools/tools'

Vue.use(VueAxios, axios)
// Vue.use(Vuex)
Object.keys(tools).forEach((key) => {
  Vue.filter(key, tools[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

// 路由拦截
router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path === '/components/Personal') {
    if (!store.state.userName || store.state.userName === '') {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
