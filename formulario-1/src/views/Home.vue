<template>
  <form @submit.prevent="procesarFormulario">
    <input type="text" placeholder="Ingrese Nombre" name="" id="" class="form-control my-2" v-model.trim="tarea.nombre">
    <div class="form-check form-check-inline">
      <input type="checkbox" name="" id="check-1" class="form-check-input" v-model="tarea.categorias" value="javascript">
      <label for="check-1" class="form-check-label">Javascript</label>
    </div>
    <div class="form-check form-check-inline">
      <input type="checkbox" name="" id="check-2" class="form-check-input" v-model="tarea.categorias" value="node.js">
      <label for="check-2" class="form-check-label">Node.js</label>
    </div>
    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input type="radio" name="" id="radio-1" class="form-check-input" v-model="tarea.estado" value="urgente">
        <label for="radio-1" class="form-check-input">Urgente</label>
      </div>
      <div class="form-check form-check-inline">
        <input type="radio" name="" id="radio-2" class="form-check-input" v-model="tarea.estado" value="relax">
        <label for="radio-2" class="form-check-input">Relax</label>
      </div>
    </div>
    <div class="mt-2">
      <input type="number" name="" id="" v-model.number="tarea.numero" class="form-control">
      </div>
    <button type="submit" class="my-2 btn-block btn btn-outline-dark" :disabled="bloquear">Procesar</button>
    <p class="form-control">{{tarea}}</p>
  </form>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      tarea:{
        nombre:'',
        categorias: [],
        estado:'',
        numero: 0
      }
    }
  },
  methods: {
    procesarFormulario(){
      console.log(this.tarea)

      if (this.tarea.nombre.trim() === '') {
        console.log('Campo Vacio')
        return
      }

      console.log('Campo no esta vacio')

      //enviar datos

      this.tarea = {
        nombre:'',
        categorias: [],
        estado:'',
        numero: 0
      }
    }
  },
  computed: {
    bloquear(){
      return this.tarea.nombre.trim() === "" ? true: false
    }
  }
}
</script>
