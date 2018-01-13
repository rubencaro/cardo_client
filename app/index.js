import Vue from 'vue'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

import Cardo from './Cardo'

window.cardoClient = new Vue({
  el: '#app',
  store,
  components: {
    'cardo': Cardo
  },
  render: (h) => h(Cardo),
})
