<template>
  <v-container fluid>

    <!-- Nosso primeiro componente -->
    <carousel />

  </v-container>
</template>

<script>
// Importação do componente
import Carousel from "../components/Carousel.vue";

export default {
  // Registro do componente
  components: {
    Carousel
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
