<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <!-- <div class="logo">
      <img :src="logoURL" />
    </div> -->

    <div class="menu-toggle-wrap">
      <img
        class="logo-sidebar"
        src="../../assets/logoCompJunior.svg"
        v-show="is_expanded"
      />
      <h3 class="h3">Made by Comp</h3>
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons"> keyboard_double_arrow_right </span>
      </button>
    </div>

    <div class="menu">
      <router-link to="" class="button" v-on:click="abrirPerfil">
        <span class="material-icons">person</span>
        <span class="text">Ver perfil</span>
      </router-link>
      <router-link to="" class="button" v-on:click="editarPerfil">
        <span class="material-icons">edit</span>
        <span class="text">Editar perfil</span>
      </router-link>
      <router-link to="" class="button" v-on:click="novoCadastro">
        <span class="material-icons">add</span>
        <span class="text">Novo cadastro</span>
      </router-link>
      <router-link to="" class="button" v-on:click="editarCadastros">
        <span class="material-icons">manage_history</span>
        <span class="text">Editar cadastros</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link to="" class="button" v-on:click="abrirConfiguracoes">
        <span class="material-icons">settings</span>
        <span class="text">Configurações</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<script>
import { emitter } from "./eventBus";

export default {
  name: "SidebarComponent",
  created() {
    emitter.on("close-other-wrappers", this.closeWrapper);
  },
  beforeUnmount() {
    emitter.off("close-other-wrappers", this.closeWrapper);
  },
  methods: {
    abrirPerfil() {
      const wrapper = document.querySelector(".wrapper_verPerfil");
      wrapper.classList.add("active-popup");

      const wrapper_editarPerfil = document.querySelector(
        ".wrapper_editarPerfil"
      );
      wrapper_editarPerfil.classList.remove("active-popup");

      const wrapper_novoCadastro = document.querySelector(
        ".wrapper_novoCadastro"
      );
      wrapper_novoCadastro.classList.remove("active-popup");

      const wrapper_editarCadastros = document.querySelector(
        ".wrapper_editarCadastros"
      );
      wrapper_editarCadastros.classList.remove("active-popup");
      const wrapper_configurações = document.querySelector(
        ".wrapper_editarConfigurações"
      );
      wrapper_configurações.classList.remove("active-popup");
      const wrapper_editarCadastroEspecifico = document.querySelector(
        ".wrapper_editarCadastroEspecifico"
      );
      wrapper_editarCadastroEspecifico.classList.remove("active-popup");

      emitter.emit("close-myswiper-wrapper");
    },

    editarPerfil() {
      const wrapper = document.querySelector(".wrapper_editarPerfil");
      wrapper.classList.add("active-popup");

      const wrapper_verPerfil = document.querySelector(".wrapper_verPerfil");
      wrapper_verPerfil.classList.remove("active-popup");

      const wrapper_novoCadastro = document.querySelector(
        ".wrapper_novoCadastro"
      );
      wrapper_novoCadastro.classList.remove("active-popup");

      const wrapper_editarCadastros = document.querySelector(
        ".wrapper_editarCadastros"
      );
      wrapper_editarCadastros.classList.remove("active-popup");
      const wrapper_configurações = document.querySelector(
        ".wrapper_editarConfigurações"
      );
      wrapper_configurações.classList.remove("active-popup");
      const wrapper_editarCadastroEspecifico = document.querySelector(
        ".wrapper_editarCadastroEspecifico"
      );
      wrapper_editarCadastroEspecifico.classList.remove("active-popup");
      emitter.emit("close-myswiper-wrapper");
    },

    novoCadastro() {
      const wrapper = document.querySelector(".wrapper_novoCadastro");
      wrapper.classList.add("active-popup");

      const wrapper_verPerfil = document.querySelector(".wrapper_verPerfil");
      wrapper_verPerfil.classList.remove("active-popup");

      const wrapper_editarPerfil = document.querySelector(
        ".wrapper_editarPerfil"
      );
      wrapper_editarPerfil.classList.remove("active-popup");

      const wrapper_editarCadastros = document.querySelector(
        ".wrapper_editarCadastros"
      );
      wrapper_editarCadastros.classList.remove("active-popup");
      const wrapper_configurações = document.querySelector(
        ".wrapper_editarConfigurações"
      );
      wrapper_configurações.classList.remove("active-popup");

      const wrapper_editarCadastroEspecifico = document.querySelector(
        ".wrapper_editarCadastroEspecifico"
      );
      wrapper_editarCadastroEspecifico.classList.remove("active-popup");
      emitter.emit("close-myswiper-wrapper");
    },

    editarCadastros() {
      const wrapper = document.querySelector(".wrapper_editarCadastros");
      wrapper.classList.add("active-popup");

      const wrapper_verPerfil = document.querySelector(".wrapper_verPerfil");
      wrapper_verPerfil.classList.remove("active-popup");

      const wrapper_editarPerfil = document.querySelector(
        ".wrapper_editarPerfil"
      );
      wrapper_editarPerfil.classList.remove("active-popup");

      const wrapper_novoCadastro = document.querySelector(
        ".wrapper_novoCadastro"
      );
      wrapper_novoCadastro.classList.remove("active-popup");
      const wrapper_configurações = document.querySelector(
        ".wrapper_editarConfigurações"
      );
      wrapper_configurações.classList.remove("active-popup");
      const wrapper_editarCadastroEspecifico = document.querySelector(
        ".wrapper_editarCadastroEspecifico"
      );
      wrapper_editarCadastroEspecifico.classList.remove("active-popup");
      emitter.emit("close-myswiper-wrapper");
    },

    abrirConfiguracoes() {
      const wrapper = document.querySelector(".wrapper_editarConfigurações");
      wrapper.classList.add("active-popup");

      const wrapper_verPerfil = document.querySelector(".wrapper_verPerfil");
      wrapper_verPerfil.classList.remove("active-popup");

      const wrapper_editarPerfil = document.querySelector(
        ".wrapper_editarPerfil"
      );
      wrapper_editarPerfil.classList.remove("active-popup");

      const wrapper_novoCadastro = document.querySelector(
        ".wrapper_novoCadastro"
      );
      wrapper_novoCadastro.classList.remove("active-popup");

      const wrapper_editarCadastros = document.querySelector(
        ".wrapper_editarCadastros"
      );
      wrapper_editarCadastros.classList.remove("active-popup");

      const wrapper_editarCadastroEspecifico = document.querySelector(
        ".wrapper_editarCadastroEspecifico"
      );
      wrapper_editarCadastroEspecifico.classList.remove("active-popup");
      emitter.emit("close-myswiper-wrapper");
    },
    closeWrapper() {
      const wrapper_verPerfil = document.querySelector(".wrapper_verPerfil");
      wrapper_verPerfil.classList.remove("active-popup");
      const wrapper_editarPerfil = document.querySelector(
        ".wrapper_editarPerfil"
      );
      wrapper_editarPerfil.classList.remove("active-popup");

      const wrapper_novoCadastro = document.querySelector(
        ".wrapper_novoCadastro"
      );
      wrapper_novoCadastro.classList.remove("active-popup");

      const wrapper_editarCadastros = document.querySelector(
        ".wrapper_editarCadastros"
      );
      wrapper_editarCadastros.classList.remove("active-popup");
      const wrapper_configurações = document.querySelector(
        ".wrapper_editarConfigurações"
      );
      wrapper_configurações.classList.remove("active-popup");
      const wrapper_editarCadastroEspecifico = document.querySelector(
        ".wrapper_editarCadastroEspecifico"
      );
      wrapper_editarCadastroEspecifico.classList.remove("active-popup");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
  display: flex;
}
.app main {
  flex: 1 1 0;
  padding: 2rem;
}
@media (max-width: 1024px) {
  .app main {
    padding-left: 6rem;
  }
}

.logo-sidebar {
  width: 20px;
  height: 20px;
  margin: 0px 0px 0px 5px;
}

aside {
  display: flex;
  flex-direction: column;
  background-color: #1e293b;
  color: #f1f5f9;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out;
}
aside .flex {
  flex: 1 1 0%;
}
aside .logo {
  margin-bottom: 1rem;
}
aside .logo img {
  width: 2rem;
}
aside .menu-toggle-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
  top: 0;
  transition: 0.2s ease-in-out;
}

aside .menu-toggle-wrap .h3 {
  width: fit-content;
  position: absolute;
  right: 30%;
}

aside .menu-toggle-wrap .menu-toggle {
  transition: 0.2s ease-in-out;
  rotate: 180deg;
  margin-right: 0;
}
aside .menu-toggle-wrap .menu-toggle .material-icons {
  font-size: 2rem;
  color: #f1f5f9;
  transition: 0.2s ease-out;
}
aside .menu-toggle-wrap .menu-toggle:hover .material-icons {
  color: #4ade80;
  transform: translateX(0.5rem);
}
aside h3,
aside .button .text {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  font-family: "Poppins", sans-serif;
}
aside h3 {
  color: #64748b;
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}
aside .menu {
  margin: 0 -1rem;
}
aside .menu .button {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  padding: 0.5rem 1rem;
}
aside .menu .button .material-icons {
  font-size: 2rem;
  color: #f1f5f9;
  transition: 0.2s ease-in-out;
}
aside .menu .button .text {
  color: #f1f5f9;
  transition: 0.2s ease-in-out;
}
aside .menu .button:hover {
  background-color: #334155;
}
aside .menu .button:hover .material-icons,
aside .menu .button:hover .text {
  color: #4ade80;
}

aside .footer {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
aside .footer p {
  font-size: 0.875rem;
  color: #64748b;
}
aside.is-expanded {
  width: 310px;
}

aside.is-expanded .menu-toggle-wrap .menu-toggle {
  transform: rotate(-180deg);
}
aside.is-expanded h3,
aside.is-expanded .button .text {
  opacity: 1;
}
aside.is-expanded .button .material-icons {
  margin-right: 1rem;
}
aside.is-expanded .footer {
  opacity: 0;
}
@media (max-width: 1024px) {
  aside {
    position: absolute;
    z-index: 99;
  }
}
</style>
