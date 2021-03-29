<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1
      :style="colorContador"
    > {{titulo}} : {{contador}} </h1>

    <button @click="incrementar">Aumentar</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      titulo: 'Mi contador Vuex'
    }
  },
  computed:{
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 100 ? {'color': 'green'} : {'color': 'red'}]
    }
  },
  methods: {
    ...mapMutations(['incrementar']),
  },
}
</script>
