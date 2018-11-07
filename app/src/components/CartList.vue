<template>
  <v-list two-line subheader>
    <v-subheader inset>Shopping Cart</v-subheader>

  <div 
    v-for="beer in beers"
    :key="beer.id"
    avatar>
    <v-list-tile
    >
      <v-list-tile-avatar>
        <img :src="beer.image_url">
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ beer.name }}</v-list-tile-title>
        <v-list-tile-sub-title>Price: {{ beer.price }}</v-list-tile-sub-title>
        <v-list-tile-sub-title>Quant.: {{ beer.quantity }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-divider vertical></v-divider>
      <v-list-tile-action>
        <v-btn icon ripple v-on:click="removeFromCart(beer)">
          <v-icon color="grey lighten-1">delete</v-icon>
        </v-btn>
      </v-list-tile-action>
      <v-list-tile-action>
        <v-btn icon ripple v-on:click="incrementQuantity(beer)">
          <v-icon color="blue darken-2">add_circle</v-icon>
        </v-btn>
        <v-btn icon ripple v-on:click="decrementQuantity(beer)">
          <v-icon color="pink darken-2">remove_circle</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
     <v-list-tile
    >
      <v-list-tile-content>
          <v-list-tile-title>Tagline: {{ beer.tagline }}</v-list-tile-title>
          <v-list-tile-sub-title>IBU: {{ beer.ibu }}</v-list-tile-sub-title>
      </v-list-tile-content>
     </v-list-tile>
    <v-divider inset></v-divider>
   <!-- Total -->
   <v-flex xs12>
      <v-card color="cyan darken-2" class="white--text">
        <v-layout>                
            <v-card-text primary-title>
              <span class="headline">Total: {{beer.sum}}</span>
              <span class="headline"></span>
            </v-card-text>
        </v-layout>
        <v-divider light></v-divider>
      </v-card>
    </v-flex>
</div>
  </v-list>
</template>


<script>
import store from "@/store/cart.js";

export default {
  methods: {
    removeFromCart(beer) {
      store.commit("removeFromCart", beer);
    },
    incrementQuantity(beer) {
      store.commit("incrementQuantity", beer);
    },
    decrementQuantity(beer) {
      store.commit("decrementQuantity", beer);
    },
    sumPriceByBeer(beer) {
      store.commit("sumPriceByBeer", beer);
    }
  },
  computed: {
    beers() {
      return store.state.beers;
    }
  }
};
</script>
