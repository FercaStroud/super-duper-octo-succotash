import Vue from 'vue';

import 'promise-polyfill/src/polyfill';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

import beers from './beers';


Vue.use(Vuex);

const modules = {
  beers,
};

const store = new Vuex.Store({
  modules,
  actions,
  getters,
  mutations,
  state,
});

export default store;