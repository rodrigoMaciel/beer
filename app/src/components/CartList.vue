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
        <!-- <v-btn icon ripple v-on:click="removeFromCart(beer)">
          <v-icon color="blue lighten-1">info</v-icon>
        </v-btn> -->

<!-- Modal info -->
<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        slot="activator"
        icon
        ripple
      >
        <v-icon 
        color="blue lighten-1"
        >info</v-icon>
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Info {{beer.name}}
        </v-card-title>
        <v-card-text>
          <h4 class="headline mb-0">Tagline: {{beer.tagline}}</h4>
          <h5 class="headline mb-0">IBU: {{beer.ibu}}</h5>
        </v-card-text>
        <v-card-text>
          {{beer.description}}
        </v-card-text>
        <v-card-text>
          <h6 class="headline mb-0">Food Pairing</h6>
            <ul id="v-for-object" class="demo">
              <li v-for="value in beer.food_pairing" :key="value.id">
                {{ value }}
              </li>
            </ul>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            flat
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
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
    <v-divider inset></v-divider>
   <!-- Total -->
</div>
<v-flex xs12>
      <v-card color="cyan darken-2" class="white--text">
        <v-layout>                
            <v-card-text>
              <span class="headline">Total: {{total}}</span>
              <span class="headline"></span>
            </v-card-text>
        </v-layout>
        <v-divider light></v-divider>
      </v-card>
    </v-flex>
  </v-list>
</template>


<script>
import store from "@/store/cart.js";

export default {
  data() {
    return {
      dialog: false
    };
  },
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
    },
    total: function() {
      let total = [];

      Object.entries(this.beers).forEach(([key, val]) => {
        let sum = val.price * val.quantity;
        console.log(sum);
        total.push(sum); // the value of the current key.
      });

      return total.reduce(function(total, num) {
        return total + num;
      }, 0);
    }
  }
};
</script>
