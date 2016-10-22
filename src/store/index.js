import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const state = {
  currentRoute: '/'
};

export default new Vuex.Store({
  state,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
});
