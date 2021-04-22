import Vue from 'vue'

import router from '@/router'
import store from '@/store'

import App from '@/components/App'

window.errors = []
window.onerror = err => {
  console.error(err)
  window.errors.push(err)
}
Vue.config.errorHandler = window.onerror


const app = new Vue({ router, store, render: h => h(App) })


app.$mount('#app')
