<template>
  <div class="navbar navbar-dark bg-dark text-white">
    <router-link to="/" class="navbar-brand"> Formularios </router-link>
    <div class="d-flex">
      <router-link class="btn btn-outline-info" to="/"> Tareas </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
