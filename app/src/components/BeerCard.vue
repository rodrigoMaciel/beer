<template>
  <!-- Adicionando o componente de card -->
  <v-card>
    <!-- Atualizando para melhoria visual -->
    <v-img
      :src="beer.image_url"
      aspect-ratio="1"
      height="200px"
      contain
    ></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{beer.name}}</h3>
        <div>{{beer.tagline}}</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="blue" v-on:click="addToCart(beer)">Add Cart</v-btn>
      <v-btn :to=" {
                name: 'Beer',
                params: {
                  id: beer.id
                } 
              }"
          flat color="orange">View Detail</v-btn>
    </v-card-actions>
  </v-card>
</template>



<script>
import store from "@/store/cart.js";

export default {
  //Recebendo a prop beer
  props: ["beer"],
  data() {
    return {};
  },
  methods: {
    addToCart(beer) {
      store.commit("addToCart", beer);
    },
    sumPriceByBeer(beer) {
      store.commit("sumPriceByBeer", beer);
    }
  }
};
</script>

