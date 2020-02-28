import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 1,
  },
  getters: {
    gegetStateCount: state => {return state.count+1}
  }
})

export default store