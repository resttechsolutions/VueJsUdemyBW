<template>
  <button @click="accion"> {{texto}}  </button>
</template>

<script>
export default {
    name: 'AccionSaldo',
    props:{
        texto: String
    },
    data() {
        return {
            
        }
    },
    methods:{
        accion(){
            this.$emit('accion')
        }
    }

}
</script>

<style>

</style>