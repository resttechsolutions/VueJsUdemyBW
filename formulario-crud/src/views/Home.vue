<template>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea"/>
  </form>
</template>

<script>
import Input from '../components/Input'
import {mapActions} from 'vuex'
const shortid = require('shortid');

export default {
  name: 'Home',
  components: {
    Input
  },
  data() {
    return {
      tarea:{
        id: '',
        nombre:'',
        categorias: [],
        estado:'',
        numero: 0
      }
    }
  },
  methods: {
    ...mapActions(['setTareas']),

    procesarFormulario(){
      console.log(this.tarea)

      if (this.tarea.nombre.trim() === '') {
        console.log('Campo Vacio')
        return
      }

      console.log('Campo no esta vacio')

      //generar id
      this.tarea.id = shortid.generate()

      console.log(this.tarea + '*******************')

      //enviar los datos
      this.setTareas(this.tarea)

      //Limpiar datos

      this.tarea = {
        nombre:'',
        categorias: [],
        estado:'',
        numero: 0
      }
    }
  }
}
</script>
