import Vue from 'vue'
import App from './App'
import router from './router'


const myVue = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
