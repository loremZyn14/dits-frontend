import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css';

import axios from 'axios';
import store from './store';

import Vue from 'vue';
import App from './App.vue';
import router from './route'

const SERVER = 'http://localhost:8000/api';

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
Vue.prototype.$SERVER = SERVER;
Vue.prototype.$addToCartProduct;

export const bus = new Vue();
new Vue({
  render: h => h(App),
  store,
  router,
  


}).$mount('#app')
