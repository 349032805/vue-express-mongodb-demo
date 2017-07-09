import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/router'
import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
