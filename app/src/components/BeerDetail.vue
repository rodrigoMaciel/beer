<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-img
        :src="beer.image_url"
        aspect-ratio="1"
        height="600px"
        contain
    ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{beer.name}}</h3>
            <div>{{beer.description}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange" v-on:click="addToCart(beer)">Add Cart</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// import
import API from "@/lib/API";
import store from "@/store/cart.js";

export default {
  data() {
    return {
      beer: {},
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.load(id);
  },
  methods: {
    load(id) {
      API.getBeer(id).
      then((beer) => {
        this.beer = beer[0];
      });
    },
    addToCart(beer) {
      store.commit("addToCart", beer);
    }
  },
};
</script>
