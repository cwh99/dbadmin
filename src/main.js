// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
// import routeConfig from './router-config'


// Vue.config.productionTip = false
Vue.use(VueRouter)

// const  router = new VueRouter({
//   routes: routeConfig
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
  // template: '<App/>',
  // components: { App }
})
