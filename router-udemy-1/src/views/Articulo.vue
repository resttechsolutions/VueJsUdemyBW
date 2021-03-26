<template>
  <Titulo texto="Ruta con parametros"/>
  <h2>Parametro: {{$route.params.id}} </h2>
</template>

<script>
import Titulo from '../components/Titulo'
export default {
    components:{
        Titulo
    }
}
</script>

<style>

</style>