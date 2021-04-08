<template>
  <input
    type="text"
    placeholder="Ingrese Nombre"
    name=""
    id=""
    class="form-control my-2"
    v-model.trim="tarea.nombre"
  />
  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      name=""
      id="check-1"
      class="form-check-input"
      v-model="tarea.categorias"
      value="javascript"
    />
    <label for="check-1" class="form-check-label">Javascript</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      name=""
      id="check-2"
      class="form-check-input"
      v-model="tarea.categorias"
      value="node.js"
    />
    <label for="check-2" class="form-check-label">Node.js</label>
  </div>
  <div class="mt-2">
    <div class="form-check form-check-inline">
      <input
        type="radio"
        name=""
        id="radio-1"
        class="form-check-input"
        v-model="tarea.estado"
        value="urgente"
      />
      <label for="radio-1" class="form-check-input">Urgente</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        type="radio"
        name=""
        id="radio-2"
        class="form-check-input"
        v-model="tarea.estado"
        value="relax"
      />
      <label for="radio-2" class="form-check-input">Relax</label>
    </div>
  </div>
  <div class="mt-2">
    <input
      type="number"
      name=""
      id=""
      v-model.number="tarea.numero"
      class="form-control"
    />
  </div>
  <button
    type="submit"
    class="my-2 btn-block btn btn-outline-dark"
    :disabled="bloquear"
  >
    Procesar
  </button>
</template>

<script>
export default {
  props: {
    tarea: Object,
  },
  computed: {
    bloquear() {
      return this.tarea.nombre.trim() === "" ? true : false;
    },
  },
};
</script>

<style>
</style>