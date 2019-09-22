import Vue from 'vue'
import App from './App'
import '@/assets/css/common.css'
import '@/assets/css/home.css'
import '@/assets/css/my.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
