import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import actions from './actions/index.js';
import mutations from './mutations/index.js';

Vue.use(Vuex);

const state = {
  currentRoute: '/',
  count: 0,
  pageData: {}
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
});
