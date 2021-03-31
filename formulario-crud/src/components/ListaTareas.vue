<template>
  <!-- Listing Tasks -->
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Categorias</th>
        <th scope="col">Estado</th>
        <th scope="col">Numero</th>
        <th scope="col">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tareas" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.nombre }}</td>
        <td>
          <!-- Listing Categories -->
          {{ item.categorias.join(", ") }}
        </td>
        <td>{{ item.estado }}</td>
        <td>{{ item.numero }}</td>
        <td>
          <!-- Delete Action -->
          <button
            class="btn btn-outline-danger btn-sm"
            @click="deleteTareas(item.id)"
          >
            Eliminar
          </button>
          <router-link class="btn btn-outline-warning ml-2 btn-sm" :to="{
              name:'Editar',
              params: {
                  id: item.id
              }
          }">Editar</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["tareas"]),
  },
  methods: {
    ...mapActions(["deleteTareas"]),
  },
};
</script>
