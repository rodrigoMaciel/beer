<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <!-- Laço com os dados de cervejas -->
        <!-- Notem que usamos a id devido ao object observer -->
        <v-flex v-for="beer in beers" :key="beer.id" xs4>
          <!-- Passamos a prop com a nossa cerveja específica para ser renderizada no card. -->
          <BeerCard :beer="beer" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import API from "@/lib/API";
// Como padrão, importamos nosso componente de card.
import BeerCard from "../components/BeerCard.vue";

export default {
  mounted() {
    this.load();
  },
  methods: {
    load() {
      API.getBeers().then(beers => {
        this.beers = beers;
      });
    }
  },
  data() {
    return {
      // Criamos um dado para fazer o storage das nossas cervejas
      beers: []
    };
  },
  components: {
    // Como padrão, registramos o componente
    BeerCard
  }
};
</script>
