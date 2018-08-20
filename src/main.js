import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import {routes} from './routes';

import Vuelidate from 'vuelidate';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(Vuelidate);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
