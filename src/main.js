import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueGoogleCharts from 'vue-google-charts';

Vue.use(VueGoogleCharts)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
