import Vue from 'vue'
import App from './App'

import './base.css'

const myVue = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
