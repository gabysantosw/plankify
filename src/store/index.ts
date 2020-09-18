import Vue from 'vue';
import Vuex from 'vuex';
// import { Plank } from '@/types/index';

Vue.use(Vuex);

const SET_USER = 'set user';
const ADD_PLANK = 'add plank';

export default new Vuex.Store({
  state: {
    username: 'Gaby',
    planks: [{}],
  },
  mutations: {
    [SET_USER](state, username) {
      state.username = username;
    },
    [ADD_PLANK](state, plank) {
      state.planks.push(plank);
    },
  },
  actions: {
    logUser({ commit }, username) {
      commit(SET_USER, username);
    },
    addPlank({ commit }, plank) {
      commit(ADD_PLANK, plank);
    },
  },
  modules: {},
});
