// import createPersistedState from 'vuex-persistedstate';
import authentication from './authentication'

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict:true,
  state: {
    baseUrl: '/api'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authentication,
  },
  plugins: [
    // createPersistedState(),
  ],
});
