<template>
  <nav class="nav-container">
    <Sidebar class="sidebar" />
    <div class="content">
      <head></head>
      <body>
        <header>
          <h2 class="logo">Sultan</h2>
          <div class="search-box">
            <span class="icon">
              <ion-icon name="search-outline"></ion-icon>
            </span>
            <input type="text" />
          </div>
          <nav role="navigation" class="primary-navigation">
            <ul>
              <li><a v-on:click="goHome">Projetos</a></li>
              <li>
                <a>Categorias &dtrif;</a>
                <ul class="dropdown">
                  <li><a href="#">Veículos</a></li>
                  <li><a href="#">Supermercado</a></li>
                  <li><a href="#">Tecnologia</a></li>
                  <li><a href="#">Casa e móveis</a></li>
                  <li><a href="#">Esportes e fitness</a></li>
                  <li><a href="#">Construção</a></li>
                  <li><a href="#">Saúde</a></li>
                  <li><a href="#">Moda</a></li>
                </ul>
              </li>
              <li><a v-on:click="goSobre">Quem somos?</a></li>
              <li><a v-on:click="goContato">Contato</a></li>
              <li><a>Bem vindo, vitor.silva7!</a></li>
            </ul>
          </nav>
        </header>

        <!-- Caixas de registros -->
        <div class="wrapper_verPerfil">
          <span v-on:click="iconClose_verPerfil" class="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>
          <div class="divImagem">
            <img style="width: 300px; height: 380px" src="../assets/logo.png" />
          </div>
          <div class="divPerfil">
            <h2>Perfil</h2>
            <div class="divConteudo">
              <strong> Nome: </strong>
              <a> vitor.silva7 </a>
            </div>
            <div class="divConteudo">
              <strong> Email: </strong>
              <a> vitor.silva7@estudante.ufla.br </a>
            </div>
            <div class="divConteudo">
              <strong> Descrição: </strong>
              <a> Criador do Sultan </a>
            </div>
            <div class="divConteudo">
              <strong> Contato: </strong>
              <a> (11) 98128-2163 </a>
            </div>
          </div>
        </div>

        <div class="wrapper_editarPerfil">
          <span v-on:click="iconClose_editarPerfil" class="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>
          <div class="form-box editarPerfil">
            <h2>Alterar perfil</h2>
            <form>
              <h1>Aqui iremos alterar o perfil</h1>
            </form>
          </div>
        </div>

        <div class="wrapper_novoCadastro">
          <span v-on:click="iconClose_novoCadastro" class="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>
          <div class="form-box editarCadastros">
            <h2>Novo registro</h2>
            <form>
              <h1>Aqui serão realizados novos registros</h1>
            </form>
          </div>
        </div>

        <div class="wrapper_editarCadastros">
          <span v-on:click="iconClose_editarCadastros" class="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>
          <div class="form-box editarCadastros">
            <h2>Editar registros</h2>
            <form>
              <h1>Aqui os registros serão editados</h1>
            </form>
          </div>
        </div>
      </body>
    </div>
  </nav>
</template>

<script>
export default {
  name: "LoggedView",
  methods: {
    goHome() {
      console.log("Go Home");
    },
    goContato() {
      console.log("Go Contato");
      this.$router.push("/contato");
    },
    goSobre() {
      console.log("Go Contato");
      this.$router.push("/sobre");
    },
    iconClose_verPerfil() {
      const wrapper_verPerfil = document.querySelector(".wrapper_verPerfil");
      wrapper_verPerfil.classList.remove("active-popup");
    },
    iconClose_editarPerfil() {
      const wrapper_verPerfil = document.querySelector(".wrapper_editarPerfil");
      wrapper_verPerfil.classList.remove("active-popup");
    },
    iconClose_novoCadastro() {
      const wrapper_verPerfil = document.querySelector(".wrapper_novoCadastro");
      wrapper_verPerfil.classList.remove("active-popup");
    },
    iconClose_editarCadastros() {
      const wrapper_verPerfil = document.querySelector(
        ".wrapper_editarCadastros"
      );
      wrapper_verPerfil.classList.remove("active-popup");
    },
  },
};
</script>

<script setup>
import Sidebar from "../components/Sidebar/Sidebar.vue";
</script>

<style scoped>
.nav-container {
  display: flex;
  flex-direction: row-reverse;
}

.sidebar {
  z-index: 100; /* Para garantir que a barra lateral esteja acima da div quando expandida */
}

.content {
  width: 100%; /* Ajuste este valor de acordo com suas necessidades */
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-size: cover;
  background: url("../assets/fundoroxo.png") no-repeat center;
}

header {
  position: fixed;
  top: 1px;
  left: 0;
  width: 100%;
  padding: 20px 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 99;
}

.logo {
  font-size: 2em;
  color: #ffffff;
  user-select: none;
  padding: 0 25px 0 0;
}

/* Barra de navegação do header */

.search-box {
  position: relative;
  width: 40%;
  height: auto;
  border-bottom: 2px solid #ffffff;
}

.search-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  color: #ffffff;
  font-weight: 600;
  padding: 0 35px 0 5px;
}

.search-box .icon {
  position: absolute;
  right: 8px;
  font-size: 1.2em;
  color: #ffffff;
}

nav.primary-navigation {
  margin: 0 0 0 0;
  display: block;
  padding: 0 0 0 0px;
  text-align: center;
  font-size: 14px;
}

nav.primary-navigation ul li button {
  width: 130px;
  height: 50px;
  background: transparent;
  border: 2px solid #ffffff;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  color: #ffffff;
  font-weight: 500;
  transition: 0.5s;
}

nav.primary-navigation ul li button:hover {
  background: #ffffff;
  color: #162938;
}

nav.primary-navigation ul li {
  list-style: none;
  margin: 0 auto;
  display: inline-block;
  padding: 0 20px;
  position: relative;
  text-decoration: none;
  text-align: center;
}
nav.primary-navigation li a {
  position: relative;
  font-size: 1.1em;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
}
nav.primary-navigation li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 3px;
  background: #ffffff;
  transition: width 0.3s;
}

nav.primary-navigation li a:hover::after {
  width: 100%;
}

nav.primary-navigation ul li ul {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  padding-left: 0;
  top: 130%;
  left: 0;
  display: none;
  background: #333;
  border-radius: 4px;
}
nav.primary-navigation ul li:hover > ul,
nav.primary-navigation ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
  min-width: 250px;
  text-align: left;
  padding-top: 20px;
}
nav.primary-navigation ul li ul li {
  clear: both;
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  border-style: none;
}
nav.primary-navigation ul li ul li a:hover {
  padding-left: 10px;
  border-left: 2px solid #3ca0e7;
  color: #3ca0e7;
  transition: all 0.3s ease;
}

ul li ul li a {
  transition: all 0.5s ease;
}

/* Wrapper ver perfil */

.wrapper_verPerfil {
  width: 800px;
  height: 440px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  overflow: hidden;
  border: 2px rgba(255, 255, 255, 0.5) solid;
  backdrop-filter: blur(30px);
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
  flex-direction: row;
  transform: scale(0);
  transition: transform 0.5s ease, height 0.2s ease;
}

.wrapper_verPerfil.active-popup {
  transform: scale(1);
}

.wrapper_verPerfil.active {
  height: 520px;
}

.wrapper_verPerfil .divImagem {
  width: 300px;
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.wrapper_verPerfil .divPerfil {
  width: 440px;
  align-self: stretch;
  padding-top: 4px;
  padding-bottom: 29px;
  padding-left: 17px;
  padding-right: 17px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  display: inline-flex;
}

.wrapper_verPerfil .divPerfil h2 {
  width: 406px;
  height: 55px;
  text-align: center;
  color: white;
  font-size: 2em;
  font-family: Poppins;
  font-weight: 400;
  word-wrap: break-word;
}

.wrapper_verPerfil .divPerfil .divConteudo {
  align-self: stretch;
  height: 58px;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
}

.wrapper_verPerfil .divPerfil .divConteudo strong {
  text-align: center;
  color: black;
  font-size: 1.1em;
  font-family: Poppins;
  font-weight: 400;
  word-wrap: break-word;
}

.wrapper_verPerfil .divPerfil .divConteudo a {
  color: black;
  font-size: 1em;
  font-family: Poppins;
  font-weight: 300;
  word-wrap: break-word;
}

.wrapper_verPerfil .icon-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background: #162938;
  font-size: 2em;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  cursor: pointer;
  z-index: 1;
}

/* Wrapper editar perfil */

.wrapper_editarPerfil {
  position: absolute;
  width: 400px;
  height: 440px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: scale(0);
  transition: transform 0.5s ease, height 0.2s ease;
}

.wrapper_editarPerfil.active-popup {
  transform: scale(1);
}

.wrapper_editarPerfil.active {
  height: 520px;
}

.wrapper_editarPerfil .form-box {
  width: 100%;
  padding: 40px;
}

.wrapper_editarPerfil .icon-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background: #162938;
  font-size: 2em;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  cursor: pointer;
  z-index: 1;
}

/* Wrapper novo cadastro */

.wrapper_novoCadastro {
  position: absolute;
  width: 400px;
  height: 440px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: scale(0);
  transition: transform 0.5s ease, height 0.2s ease;
}

.wrapper_novoCadastro.active-popup {
  transform: scale(1);
}

.wrapper_novoCadastro.active {
  height: 520px;
}

.wrapper_novoCadastro .form-box {
  width: 100%;
  padding: 40px;
}

.wrapper_novoCadastro .icon-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background: #162938;
  font-size: 2em;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  cursor: pointer;
  z-index: 1;
}

/* Wrapper editar cadastros */

.wrapper_editarCadastros {
  position: absolute;
  width: 400px;
  height: 440px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: scale(0);
  transition: transform 0.5s ease, height 0.2s ease;
}

.wrapper_editarCadastros.active-popup {
  transform: scale(1);
}

.wrapper_editarCadastros.active {
  height: 520px;
}

.wrapper_editarCadastros .form-box {
  width: 100%;
  padding: 40px;
}

.wrapper_editarCadastros .icon-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background: #162938;
  font-size: 2em;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  cursor: pointer;
  z-index: 1;
}

.form-box h2 {
  font-size: 2em;
  color: #ffffff;
  text-align: center;
}

.input-box {
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #ffffff;
  margin: 30px 0;
}

.input-box label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1em;
  color: #ffffff;
  font-weight: 500;
  pointer-events: none;
  transition: 0.5s;
}

.input-box input:focus ~ label,
.input-box input:valid ~ label {
  top: -5px;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  color: #ffffff;
  font-weight: 600;
  padding: 0 35px 0 5px;
}

.input-box .icon {
  position: absolute;
  right: 8px;
  font-size: 1.2em;
  color: #ffffff;
  line-height: 57px;
}

.bth {
  width: 100%;
  height: 45px;
  background: #162938;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
  color: #ffffff;
  font-weight: 500;
}
</style>
