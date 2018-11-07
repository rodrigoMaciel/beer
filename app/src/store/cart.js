import Vue from 'vue'
import Vuex from 'vuex'

import {
  findIndex
} from 'lodash-es'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: [],
    qty: 0,
    sum: 0
  },
  mutations: {
    addToCart(state, beer) {

      let index = findIndex(state.beers, (o) => o.id == beer.id)

      if (index === -1) {
        state.beers.push({
          id: beer.id,
          name: beer.name,
          tagline: beer.tagline,
          ibu: beer.ibu,
          price: 2.5,
          quantity: 1,
          image_url: beer.image_url
        })
      } else {
        state.beers[index].quantity++;
      }
    },
    removeFromCart(state, beer) {
      let index = findIndex(state.beers, (o) => o.id == beer.id);

      state.beers.splice(state.beers[index], 1);
    },
    decrementQuantity(state, beer) {
      let index = findIndex(state.beers, (o) => o.id == beer.id);

      state.qty = state.beers[index].quantity--;

      if (state.qty <= 1) {
        let index = findIndex(state.beers, (o) => o.id == beer.id);

        state.beers.splice(state.beers[index], 1);
      }

    },
    incrementQuantity(state, beer) {
      let index = findIndex(state.beers, (o) => o.id == beer.id);

      state.qty = state.beers[index].quantity++;

    },
    sumPriceByBeer(state, beer) {
      state.sum = beer.price * state.qty;
      return beer['sum'] = state.sum;
    }
  },
  actions: {
    incrementQuantity ({ commit }) {
      setTimeout(() => {
        commit('incrementQuantity')
      }, 3000)
    }
  }
})
