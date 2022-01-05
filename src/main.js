import Vue from 'vue'
import App from './App.vue'

import marked from 'marked'
import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)





import VueRouter from 'vue-router'


Vue.filter('marked', marked)
Vue.use(VueRouter)


new Vue({
  render: h => h(App),
  el: '#app',
  router,
})
