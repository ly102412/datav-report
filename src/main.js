import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '@/assets/style/index.css'
import * as Echarts from 'echarts'
import VueEcharts from 'vue-echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
Vue.component('v-chart', VueEcharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
