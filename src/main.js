require('es6-promise').polyfill();  //es6 promise
require('isomorphic-fetch');  //fetch

import 'lib-flexible';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './route-config.js';
import App from './views/App.vue';
import store from './store/index.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes
});

 //挂载Vue 根实例
new Vue({
  el: '#application',
  store,
  router,
  render: h => h(App)
});
