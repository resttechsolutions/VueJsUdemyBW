<template>
  <Titulo texto="Ruta con parametros" />
  <h2>Parametro: {{ $route.params.id }}</h2>

  <h3>{{ articulo.title }}</h3>
  <p> {{articulo.id}} - {{ articulo.body }}</p>
</template>

<script>
import Titulo from "../components/Titulo";
export default {
  components: {
    Titulo,
  },
  data() {
    return {
      articulo: {},
    };
  },
  methods: {
    async consumirArticulo() {
      try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
        );
        this.articulo = await data.json();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.consumirArticulo();
  },
};
</script>

<style>
</style>