<template>
  <h1 class="my-5">Registro de Usuarios</h1>

  <form @submit.prevent="procesarFormulario">
    <input
      class="form-control my-2"
      type="email"
      placeholder="Email"
      v-model.trim="email"
    />
    <input
      class="form-control my-2"
      type="password"
      placeholder="Password"
      v-model.trim="pass1"
    />
    <input
      class="form-control my-2"
      type="password"
      placeholder="Password"
      v-model.trim="pass2"
    />
    <button type="submit" class="btn btn-outline-primary" :disabled="bloquear">
      Registrar
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "rafaelalfonso82@gmail.com",
      pass1: "123123",
      pass2: "123123",
    };
  },
  computed: {
    bloquear() {
      if (!this.email.includes("@")) {
        return true;
      }
      if (this.pass1.length > 5 && this.pass1 === this.pass2) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions(["registrarUsuario"]),
    procesarFormulario() {
      this.registrarUsuario({ email: this.email, password: this.pass1 });

      this.email = "";
      this.pass1 = "";
      this.pass2 = "";
    },
  },
};
</script>

<style>
</style>