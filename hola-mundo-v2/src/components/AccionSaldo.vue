<template>
  <button @click="accion" :disabled="deshabilitar"> {{texto}}  </button>
</template>

<script>
export default {
    name: 'AccionSaldo',
    props:{
        texto: String,
        deshabilitar: {
            type: Boolean,
            default: false
        }
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