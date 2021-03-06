import Vue from 'vue'
import App from './App'
import store from './vuex/store'


const myVue = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
