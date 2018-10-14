import Vue from 'vue'
import Vuex from 'vuex'

import {
  findIndex
} from 'lodash-es'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: [],
    qty: 0
  },
  mutations: {
    increment: state => state.qty++,
    decrement: state => state.qty--
  },
  actions: {

  }
})
