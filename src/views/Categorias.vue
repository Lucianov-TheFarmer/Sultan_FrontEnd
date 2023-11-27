<template>
  <nav class="nav-container">
    <Sidebar class="sidebar" v-if="isLoggedIn" />

    <!-- Sem swiper aqui -->

    <div class="content">
      <head></head>
      <body>
        <header>
          <!-- Cabeçalho -->

          <h2 class="logo" @click="goHome">Sultan</h2>

          <div class="search-box">
            <form @submit.prevent="searchItems">
              <span class="icon">
                <ion-icon name="search-outline"></ion-icon>
              </span>
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Pesquise algo..."
                @input="searchItems"
              />
            </form>

            <div v-if="searchResults.length" class="search-results">
              <ul>
                <li
                  v-for="item in searchResults"
                  :key="item._id"
                  @click="selectCadastro(item)"
                >
                  {{ item.nome }}
                </li>
              </ul>
            </div>
          </div>

          <nav role="navigation" class="primary-navigation">
            <ul>
              <li>
                <a>Categorias &dtrif;</a>
                <ul class="dropdown">
                  <li @click="goToCategory('Veículos')">
                    <a href="#">Veículos</a>
                  </li>
                  <li @click="goToCategory('Supermercado')">
                    <a href="#">Supermercado</a>
                  </li>
                  <li @click="goToCategory('Restaurante')">
                    <a href="#">Restaurante</a>
                  </li>
                  <li @click="goToCategory('Tecnologia')">
                    <a href="#">Tecnologia</a>
                  </li>
                  <li @click="goToCategory('Casa e móveis')">
                    <a href="#">Casa e móveis</a>
                  </li>
                  <li @click="goToCategory('Esportes e fitness')">
                    <a href="#">Esportes e fitness</a>
                  </li>
                  <li @click="goToCategory('Construção')">
                    <a href="#">Construção</a>
                  </li>
                  <li @click="goToCategory('Saúde')"><a href="#">Saúde</a></li>
                  <li @click="goToCategory('Moda')"><a href="#">Moda</a></li>
                </ul>
              </li>
              <li><a v-on:click="goSobre">Quem somos?</a></li>
              <li><a v-on:click="goContato">Contato</a></li>
              <li v-if="isLoggedIn">
                <a>Bem vindo, {{ user.name }}</a>
              </li>
              <li v-else>
                <button v-on:click="goLogin" class="bthLogin-popup">
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <!-- Vagalumes -->
        <div class="container">
          <div class="bubbles">
            <span style="--i: 11"></span>
            <span style="--i: 12"></span>
            <span style="--i: 24"></span>
            <span style="--i: 10"></span>
            <span style="--i: 14"></span>
            <span style="--i: 23"></span>
            <span style="--i: 18"></span>
            <span style="--i: 16"></span>
            <span style="--i: 19"></span>
            <span style="--i: 20"></span>
            <span style="--i: 22"></span>
            <span style="--i: 25"></span>
            <span style="--i: 18"></span>
            <span style="--i: 21"></span>
            <span style="--i: 15"></span>
            <span style="--i: 13"></span>
            <span style="--i: 26"></span>
            <span style="--i: 17"></span>
            <span style="--i: 13"></span>
            <span style="--i: 28"></span>
            <span style="--i: 11"></span>
            <span style="--i: 12"></span>
            <span style="--i: 24"></span>
            <span style="--i: 10"></span>
            <span style="--i: 14"></span>
            <span style="--i: 23"></span>
            <span style="--i: 18"></span>
            <span style="--i: 16"></span>
            <span style="--i: 19"></span>
            <span style="--i: 20"></span>
            <span style="--i: 22"></span>
            <span style="--i: 25"></span>
            <span style="--i: 18"></span>
            <span style="--i: 21"></span>
            <span style="--i: 15"></span>
            <span style="--i: 13"></span>
            <span style="--i: 26"></span>
            <span style="--i: 17"></span>
            <span style="--i: 13"></span>
            <span style="--i: 28"></span>
            <span style="--i: 11"></span>
            <span style="--i: 12"></span>
            <span style="--i: 24"></span>
            <span style="--i: 10"></span>
            <span style="--i: 14"></span>
            <span style="--i: 23"></span>
            <span style="--i: 18"></span>
            <span style="--i: 16"></span>
            <span style="--i: 19"></span>
            <span style="--i: 20"></span>
            <span style="--i: 22"></span>
            <span style="--i: 25"></span>
            <span style="--i: 18"></span>
            <span style="--i: 21"></span>
            <span style="--i: 15"></span>
            <span style="--i: 13"></span>
            <span style="--i: 26"></span>
          </div>
        </div>

        <!-- Tela de fazer login -->
        <div class="wrapper" v-if="!isLoggedIn">
          <span v-on:click="iconClose" class="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>
          <div class="form-box login">
            <h2>Login</h2>
            <form action="#">
              <div class="input-box">
                <span class="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input v-model="dados_login.email" type="email" required />
                <label>Email</label>
              </div>
              <div class="input-box">
                <span class="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input
                  v-model="dados_login.password"
                  type="password"
                  required
                />
                <label>Senha</label>
              </div>
              <div class="remember-forgot">
                <label><input type="checkbox" /> Lembrar-me</label>
                <a href="#">Esqueci a senha</a>
              </div>
              <button type="submit" class="bth" @click="logar">Login</button>
              <div class="login-register">
                <p>
                  Não tem uma conta?
                  <a v-on:click="goRegister" href="#" class="register-link"
                    >Cadastrar</a
                  >
                </p>
              </div>
            </form>
          </div>

          <!-- Tela de fazer registro -->
          <div class="form-box register">
            <h2>Cadastro</h2>
            <form action="#" @submit.prevent="registrar">
              <div class="input-box">
                <span class="icon">
                  <ion-icon name="person"></ion-icon>
                </span>
                <input v-model="dados_registro.name" type="text" required />
                <label>Usuário</label>
              </div>
              <div class="input-box">
                <span class="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input v-model="dados_registro.email" type="email" required />
                <label>Email</label>
              </div>
              <div class="input-box">
                <span class="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input
                  v-model="dados_registro.password"
                  type="password"
                  required
                />
                <label>Senha</label>
              </div>
              <div class="remember-forgot">
                <p>
                  <input type="checkbox" required /> Concordo com os
                  <a href="terms" class="login-link">termos e condições</a>
                </p>
              </div>
              <button type="submit" class="bth">Cadastrar</button>
              <div class="login-register">
                <p>
                  Já tem uma conta?
                  <a v-on:click="goBackLogin" href="#" class="login-link"
                    >Login</a
                  >
                </p>
              </div>
            </form>
          </div>
        </div>

        <!-- Caixas de registros -->
        <div class="wrapper_verPerfil">
          <span v-on:click="iconClose_verPerfil" class="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>
          <div class="divImagem">
            <img
              v-if="user.image"
              :src="'http://localhost:8081/' + user.image"
              style="
                width: 300px;
                height: 380px;
                border-radius: 8px;
                border: 2px solid black;
              "
            />
            <img
              v-else
              src="../assets/add-image.png"
              style="width: 100px; height: 100px"
            />
          </div>
          <div class="divPerfil">
            <h2>Perfil</h2>
            <div class="divConteudo">
              <strong> Nome: </strong>
              <a> {{ user.name }} </a>
            </div>
            <div class="divConteudo">
              <strong> Email: </strong>
              <a> {{ user.email }} </a>
            </div>
            <div class="divConteudo">
              <strong> Descrição: </strong>
              <a> {{ user.descricao }} </a>
            </div>
            <div class="divConteudo">
              <strong> Contato: </strong>
              <a> {{ user.telefone }} </a>
            </div>
          </div>
        </div>

        <div class="wrapper_editarPerfil">
          <span v-on:click="iconClose_editarPerfil" class="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>

          <div class="EditarPerfil-box">
            <h2>Alterar perfil</h2>
            <form @submit.prevent="verificarSenhaEditarPerfil">
              <div class="conteudo-EditarPerfil">
                <input type="text" v-model="nome" required />
                <label>Mudar nome</label>
              </div>
              <div class="conteudo-EditarPerfil">
                <input type="text" v-model="descricao" required />
                <label>Mudar descrição</label>
              </div>
              <div class="conteudo-EditarPerfil">
                <input type="text" v-model="telefone" required />
                <label>Telefone de contato</label>
              </div>

              <div style="padding-bottom: 1.5em">
                <label
                  style="padding-right: 1em; color: white; font-family: Poppins"
                  >Imagem de perfil:</label
                >
                <input
                  type="file"
                  name="myFile"
                  multiple
                  @change="handleFileUploadPerfil"
                />
              </div>

              <div class="conteudo-EditarPerfil">
                <input type="password" v-model="password" required />
                <label>Senha atual</label>
              </div>
              <button type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Salvar
              </button>
            </form>
          </div>
        </div>

        <div class="wrapper_novoCadastro">
          <span v-on:click="iconClose_novoCadastro" class="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>

          <div class="NovoCadastro-box">
            <h2>Novo cadastro</h2>
            <form @submit.prevent="salvarNovoCadastro">
              <div class="conteudo-NovoCadastro">
                <input type="text" v-model="formNovoCadastro.nome" required />
                <label>Mudar nome</label>
              </div>
              <div class="conteudo-NovoCadastro">
                <input
                  type="text"
                  v-model="formNovoCadastro.descricao"
                  required
                />
                <label>Mudar descrição</label>
              </div>
              <div class="conteudo-NovoCadastro">
                <input
                  type="text"
                  v-model="formNovoCadastro.telefone"
                  required
                />
                <label>Telefone de contato</label>
              </div>
              <div class="conteudo-NovoCadastro">
                <input
                  type="text"
                  v-model="formNovoCadastro.endereco"
                  required
                />
                <label>Endereço</label>
              </div>

              <div class="conteudo-NovoCadastro">
                <select
                  v-model="formNovoCadastro.categoria"
                  name="Categorias"
                  required
                >
                  <option selected disabled>Categorias</option>
                  <option value="Veículos">Veículos</option>
                  <option value="Supermercado">Supermercado</option>
                  <option value="Restaurante">Restaurante</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Casa e móveis">Casa e móveis</option>
                  <option value="Esportes e fitness">Esportes e fitness</option>
                  <option value="Construção">Construção</option>
                  <option value="Saúde">Saúde</option>
                  <option value="Moda">Moda</option>
                </select>
              </div>
              <div
                style="padding-bottom: 1em; display: flex; flex-direction: row"
              >
                <label
                  style="padding-right: 1em; color: white; font-family: Poppins"
                  >Imagem principal:</label
                >
                <input type="file" name="myFile" @change="handleFileUpload" />
              </div>
              <div style="padding-bottom: 1.5em">
                <label
                  style="padding-right: 1em; color: white; font-family: Poppins"
                  >Outras imagens:</label
                >
                <input
                  type="file"
                  name="myFile"
                  multiple
                  @change="handleMultipleFileUpload"
                />
              </div>
              <div class="conteudo-NovoCadastro">
                <input
                  type="password"
                  v-model="formNovoCadastro.password"
                  required
                />
                <label>Senha atual</label>
              </div>
              <button type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Salvar
              </button>
            </form>
          </div>
        </div>

        <div class="wrapper_editarCadastros">
          <span v-on:click="iconClose_editarCadastros" class="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>
          <div class="editarCadastro-box">
            <h2>Editar cadastros</h2>
            <ul class="responsive-table">
              <li class="table-header">
                <div class="col col-1">Nome</div>
                <div class="col col-2">Descrição</div>
                <div class="col col-3">Telefone</div>
                <div class="col col-4">Endereço</div>
                <div class="col col-5">Categoria</div>
                <button
                  @click="editItem(cadastro)"
                  style="
                    margin-left: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    visibility: hidden;
                  "
                >
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button
                  @click="deleteItem(cadastro)"
                  style="
                    margin-left: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    visibility: hidden;
                  "
                >
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </li>
              <li
                class="table-row"
                v-for="cadastro in cadastros"
                :key="cadastro.id"
              >
                <div class="col col-1" data-label="Nome">
                  {{ cadastro.nome }}
                </div>
                <div class="col col-2" data-label="Descrição">
                  {{ cadastro.descricao }}
                </div>
                <div class="col col-3" data-label="Telefone">
                  {{ cadastro.telefone }}
                </div>
                <div class="col col-4" data-label="Endereço">
                  {{ cadastro.endereco }}
                </div>
                <div class="col col-5" data-label="Categoria">
                  {{ cadastro.categoria }}
                </div>
                <button
                  @click="editItem(cadastro)"
                  style="
                    margin-left: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button
                  @click="deleteItem(cadastro)"
                  style="
                    margin-left: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div class="wrapper_editarConfigurações">
          <span v-on:click="iconClose_editarConfiguracoes" class="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>
          <div class="editarConfigurações-box">
            <h2>Configurações</h2>
            <button type="submit" @click="logout">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Deslogar
            </button>
            <button type="submit" @click="deleteAccount">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Excluir conta
            </button>
          </div>
        </div>

        <div class="wrapper_editarCadastroEspecifico">
          <span
            v-on:click="iconClose_editarCadastroEspecifico"
            class="icon-close"
          >
            <ion-icon name="close"></ion-icon>
          </span>

          <div class="editarCadastroEspecifico-box">
            <h2>Editar cadastro</h2>
            <form @submit.prevent="salvareditarCadastroEspecifico">
              <div class="conteudo-editarCadastroEspecifico">
                <input type="text" v-model="formEditarCadastro.nome" required />
                <label>Mudar nome</label>
              </div>
              <div class="conteudo-editarCadastroEspecifico">
                <input
                  type="text"
                  v-model="formEditarCadastro.descricao"
                  required
                />
                <label>Mudar descrição</label>
              </div>
              <div class="conteudo-editarCadastroEspecifico">
                <input
                  type="text"
                  v-model="formEditarCadastro.telefone"
                  required
                />
                <label>Telefone de contato</label>
              </div>
              <div class="conteudo-editarCadastroEspecifico">
                <input
                  type="text"
                  v-model="formEditarCadastro.endereco"
                  required
                />
                <label>Endereço</label>
              </div>

              <div class="conteudo-editarCadastroEspecifico">
                <select
                  v-model="formEditarCadastro.categoria"
                  name="Categorias"
                >
                  <option selected value="">Categorias</option>
                  <option value="Veículos">Veículos</option>
                  <option value="Supermercado">Supermercado</option>
                  <option value="Restaurante">Restaurante</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Casa e móveis">Casa e móveis</option>
                  <option value="Esportes e fitness">Esportes e fitness</option>
                  <option value="Construção">Construção</option>
                  <option value="Saúde">Saúde</option>
                  <option value="Moda">Moda</option>
                </select>
              </div>
              <div
                style="padding-bottom: 1em; display: flex; flex-direction: row"
              >
                <label
                  style="padding-right: 1em; color: white; font-family: Poppins"
                  >Imagem principal:</label
                >
                <input
                  type="file"
                  name="myFile"
                  @change="handleFileUploadEditar"
                />
              </div>
              <div style="padding-bottom: 1.5em">
                <label
                  style="padding-right: 1em; color: white; font-family: Poppins"
                  >Outras imagens:</label
                >
                <input
                  type="file"
                  name="myFile"
                  multiple
                  @change="handleMultipleFileUploadEditar"
                />
              </div>
              <div class="conteudo-editarCadastroEspecifico">
                <input
                  type="password"
                  v-model="formEditarCadastro.password"
                  required
                />
                <label>Senha atual</label>
              </div>
              <button type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Salvar
              </button>
            </form>
          </div>
        </div>

        <!-- Cards selecionáveis -->
        <div class="card-container">
          <div
            class="card"
            v-for="(data, index) in filteredDados"
            :key="index"
            @mouseover="hoveredIndex = index"
            @mouseout="hoveredIndex = null"
            @click="selectCadastro(data)"
          >
            <div v-show="hoveredIndex === index" class="image-name">
              {{ data.nome }}
            </div>
            <img :src="'http://localhost:8081/' + data.imagemPrincipal" />
          </div>
        </div>

        <!-- Ver cadastro -->
        <div
          class="wrapper_verCadastro"
          v-if="showWrapper"
          :class="{ 'active-popup': showWrapper }"
        >
          <span v-on:click="iconClose_verCadastro" class="icon-close">
            <ion-icon name="close"></ion-icon>
          </span>

          <div class="divImagem">
            <my-swiper
              v-if="
                selectedCadastro && selectedCadastro.outrasImagens.length > 0
              "
              :centeredSlides="true"
              :spaceBetween="30"
              :autoplay="{ delay: 2500, disableOnInteraction: false }"
              :pagination="{ clickable: true }"
              :simulateTouch="false"
              :navigation="true"
              :loop="true"
              :modules="modules"
              class="mySwiper2"
            >
              <swiper-slide
                v-for="(image, index) in selectedCadastro.outrasImagens"
                :key="index"
                class="swiper-slide"
              >
                <img
                  :src="'http://localhost:8081/' + image"
                  style="width: 300px; border-radius: 8px"
                />
              </swiper-slide>
            </my-swiper>
            <img
              v-if="
                selectedCadastro && selectedCadastro.outrasImagens.length === 0
              "
              :src="'http://localhost:8081/' + selectedCadastro.imagemPrincipal"
              style="width: 300px; height: 300px"
            />
          </div>

          <div class="divPerfil">
            <div class="divConteudo">
              <strong> Nome: </strong>
              <a> {{ selectedCadastro.nome }} </a>
            </div>
            <div class="divConteudo">
              <strong> Endereço: </strong>
              <a> {{ selectedCadastro.endereco }} </a>
            </div>
            <div class="divConteudo">
              <strong> Descrição: </strong>
              <a> {{ selectedCadastro.descricao }} </a>
            </div>
            <div class="divConteudo">
              <strong> Contato: </strong>
              <a> {{ selectedCadastro.telefone }} </a>
            </div>
            <div class="divConteudo">
              <strong> Categoria: </strong>
              <a> {{ selectedCadastro.categoria }} </a>
            </div>
          </div>
        </div>

        <ion-icon
          name="scan-outline"
          class="fullscreen-icon"
          @click="requestFullscreen"
          style="
            position: absolute;
            bottom: 20px;
            right: 80px;
            color: white;
            font-size: 2em;
            cursor: pointer;
            z-index: 2;
          "
        ></ion-icon>
      </body>
    </div>
  </nav>
</template>

<script setup>
import Sidebar from "../components/Sidebar/Sidebar.vue";
const isLoggedIn = !!Cookies.get("token");
</script>

<script>
import Cookies from "js-cookie";
import axios from "axios";
import { emitter } from "../components/Sidebar/eventBus";
import { login, registro } from "../services/api/Auth";
import { setCookie } from "../utils/cookie";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper as MySwiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";

export default {
  name: "CategoriasView",

  data() {
    return {
      user: {},
      image: null,
      searchQuery: "",
      searchResults: [],
      formNovoCadastro: {
        nome: "",
        descricao: "",
        telefone: "",
        endereco: "",
        categoria: "",
        imagemPrincipal: null,
        outrasImagens: [],
        password: "",
      },
      formEditarCadastro: {
        nome: "",
        descricao: "",
        telefone: "",
        endereco: "",
        categoria: "",
        imagemPrincipal: null,
        outrasImagens: [],
        password: "",
      },
      cadastros: [],
      dados_login: {
        email: "",
        password: "",
      },
      dados_registro: {
        name: "",
        email: "",
        password: "",
        telefone: null,
        descricao: null,
      },
      selectedCadastro: null,
      showWrapper: false,
      hoveredIndex: null,
      dados: [],
      modules: [Pagination, Navigation],
    };
  },
  async mounted() {
    const token = Cookies.get("token");
    try {
      const response = await axios.get("http://127.0.0.1:8081/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      this.user = response.data;
    } catch (error) {
      console.error("Error getting user data", error);
    }
    try {
      const response = await axios.get("http://127.0.0.1:8081/dados/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      this.cadastros = response.data.dados;
    } catch (error) {
      console.error(error);
    }
    fetch("http://localhost:8081/dados")
      .then((response) => response.json())
      .then((data) => {
        this.dados = data;
      });
  },
  methods: {
    goHome() {
      this.$router.push("/logged");
    },
    goContato() {
      this.$router.push("/contato");
    },
    goSobre() {
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
    iconClose_editarConfiguracoes() {
      const wrapper_configurações = document.querySelector(
        ".wrapper_editarConfigurações"
      );
      wrapper_configurações.classList.remove("active-popup");
    },
    iconClose_editarCadastroEspecifico() {
      const wrapper_verPerfil = document.querySelector(
        ".wrapper_editarCadastroEspecifico"
      );
      wrapper_verPerfil.classList.remove("active-popup");
    },
    // Funções para o usuários deslogado
    goLogin() {
      const wrapper = document.querySelector(".wrapper");
      wrapper.classList.add("active-popup");
    },
    goForgotPassword() {
      console.log("Forgot password");
    },
    goRegister() {
      const wrapper = document.querySelector(".wrapper");
      wrapper.classList.add("active");
    },
    goBackLogin() {
      const wrapper = document.querySelector(".wrapper");
      wrapper.classList.remove("active");
    },
    iconClose() {
      const wrapper = document.querySelector(".wrapper");
      wrapper.classList.remove("active-popup");
    },
    logar() {
      event.preventDefault();
      login(this.dados_login)
        .then((res) => {
          console.log(res);
          setCookie("token", res.data.token, res.data.tokenExpiration);
          // alert("Logado!");
          localStorage.setItem("user", JSON.stringify(this.dados_login.email));
          this.$router.push("/logged");
        })
        .catch((err) => {
          console.log(err);
          alert("Usuário ou senha incorretos");
        });
    },
    registrar(event) {
      event.preventDefault();

      let user = {
        name: this.dados_registro.name,
        email: this.dados_registro.email,
        password: this.dados_registro.password,
        telefone: null,
        descricao: null,
      };

      registro(user)
        .then((res) => {
          console.log(res.data);
          alert("Cadastro realizado com sucesso!");
          const wrapper = document.querySelector(".wrapper");
          wrapper.classList.remove("active");
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // Funções para o usuário logado
    salvarEditarPerfil() {
      const token = Cookies.get("token");
      const formData = new FormData();

      formData.append("name", this.nome);
      formData.append("descricao", this.descricao);
      formData.append("telefone", this.telefone);
      formData.append("password", this.password);
      if (this.image) {
        formData.append("image", this.image);
      }

      axios
        .put("http://localhost:8081/auth/update", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          alert("Dados atualizados");
          this.$router.go();
        })
        .catch((error) => {
          console.error(error);
        });

      const wrapper_verPerfil = document.querySelector(".wrapper_editarPerfil");
      wrapper_verPerfil.classList.remove("active-popup");
    },
    async verificarSenhaEditarPerfil() {
      const token = Cookies.get("token");
      try {
        const response = await axios.post(
          "http://localhost:8081/auth/verifyPassword",
          {
            password: this.password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.success) {
          // A senha está correta, permitir que o usuário edite suas informações
          this.salvarEditarPerfil();
        } else {
          alert("Senha incorreta");
        }
      } catch (error) {
        alert("Senha incorreta");
        console.error(error);
      }
    },
    handleFileUploadPerfil(event) {
      this.image = event.target.files[0];
      console.log("Selected file:", this.image); // Log the selected file
    },
    handleFileUpload(event) {
      this.formNovoCadastro.imagemPrincipal = event.target.files[0];
    },
    handleMultipleFileUpload(event) {
      this.formNovoCadastro.outrasImagens = [...event.target.files];
    },
    handleFileUploadEditar(event) {
      this.formEditarCadastro.imagemPrincipal = event.target.files[0];
    },
    handleMultipleFileUploadEditar(event) {
      this.formEditarCadastro.outrasImagens = [...event.target.files];
    },
    async salvarNovoCadastro() {
      const token = Cookies.get("token");

      const formData = new FormData();

      formData.append("nome", this.formNovoCadastro.nome);
      formData.append("descricao", this.formNovoCadastro.descricao);
      formData.append("telefone", this.formNovoCadastro.telefone);
      formData.append("endereco", this.formNovoCadastro.endereco);
      formData.append("categoria", this.formNovoCadastro.categoria);
      formData.append("password", this.formNovoCadastro.password);

      // Verifique se a imagem principal existe antes de anexá-la
      if (this.formNovoCadastro.imagemPrincipal) {
        formData.append(
          "imagemPrincipal",
          this.formNovoCadastro.imagemPrincipal
        );
      }

      // Verifique se outras imagens existem antes de anexá-las
      if (
        this.formNovoCadastro.outrasImagens &&
        this.formNovoCadastro.outrasImagens.length > 0
      ) {
        this.formNovoCadastro.outrasImagens.forEach((imagem) => {
          formData.append("outrasImagens", imagem);
        });
      }

      console.log([...formData.entries()]); // Verifique o FormData
      try {
        const response = await axios.post(
          "http://localhost:8081/dados",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        alert("Cadastro realizado com sucesso");
        this.$router.go();
      } catch (error) {
        console.error(error);
        alert("Senha incorreta!");
      }
    },
    async deleteItem(cadastro) {
      const token = Cookies.get("token");
      const password = window.prompt(
        "Por favor, insira sua senha para excluir este cadastro"
      );

      if (password) {
        try {
          const response = await axios.delete(
            `http://localhost:8081/dados/${cadastro._id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              data: {
                password: password,
              },
            }
          );

          if (response.status === 200) {
            this.cadastros = this.cadastros.filter(
              (item) => item._id !== cadastro._id
            );
            alert("Cadastro removido com sucesso");
            this.$router.go();
          }
        } catch (error) {
          if (error.response && error.response.status === 400) {
            alert("Senha inválida");
          } else {
            console.error(error);
          }
        }
      } else {
        alert("A exclusão foi cancelada");
      }
    },
    async editItem(cadastro) {
      this.formEditarCadastro = { ...cadastro };
      const wrapper = document.querySelector(
        ".wrapper_editarCadastroEspecifico"
      );
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
    },
    async salvareditarCadastroEspecifico() {
      const token = Cookies.get("token");

      const formData = new FormData();

      formData.append("nome", this.formEditarCadastro.nome);
      formData.append("descricao", this.formEditarCadastro.descricao);
      formData.append("telefone", this.formEditarCadastro.telefone);
      formData.append("endereco", this.formEditarCadastro.endereco);
      formData.append("categoria", this.formEditarCadastro.categoria);
      formData.append("password", this.formEditarCadastro.password);

      // Verifique se a imagem principal existe antes de anexá-la
      if (this.formEditarCadastro.imagemPrincipal) {
        formData.append(
          "imagemPrincipal",
          this.formEditarCadastro.imagemPrincipal
        );
      }

      // Verifique se outras imagens existem antes de anexá-las
      if (
        this.formEditarCadastro.outrasImagens &&
        this.formEditarCadastro.outrasImagens.length > 0
      ) {
        this.formEditarCadastro.outrasImagens.forEach((imagem) => {
          formData.append("outrasImagens", imagem);
        });
      }

      try {
        const response = await axios.patch(
          `http://localhost:8081/dados/${this.formEditarCadastro._id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        // Atualize o estado do seu componente com a resposta do servidor
        this.formEditarCadastro = response.data;
        alert("Cadastro editado com sucesso");
        this.$router.go();
      } catch (error) {
        alert("Senha incorreta!");
        console.error(error);
      }
    },
    logout() {
      Cookies.remove("token"); // remove o token
      this.$router.push("/"); // redireciona para a página inicial
    },
    async deleteAccount() {
      const password = window.prompt(
        "Digite sua senha para confirmar a exclusão da conta"
      );
      if (!password) return;

      try {
        const { data } = await axios.post(
          "http://localhost:8081/auth/verifyPassword",
          { password },
          {
            headers: { Authorization: `Bearer ${Cookies.get("token")}` },
          }
        );

        if (!data.success) {
          alert("Senha incorreta");
          return;
        }

        await axios.delete("http://localhost:8081/auth/delete", {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        });

        Cookies.remove("token");
        this.$router.push("/");
      } catch (error) {
        console.error(error);
        alert("Erro ao excluir conta");
      }
    },
    async searchItems() {
      if (this.searchQuery === "") {
        this.searchResults = [];
        return;
      }

      const token = Cookies.get("token");
      try {
        const response = await axios.get(
          `http://localhost:8081/dados?search=${this.searchQuery}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.searchResults = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    goToCategory(category) {
      this.$router.push({ name: "categorias", params: { category: category } });
    },
    // Interagir com o backend
    fetchCadastroData(cadastroId) {
      fetch(`http://localhost:8081/dados/${cadastroId}`)
        .then((response) => response.json())
        .then((data) => {
          this.formNovoCadastro = data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    // Cards selecionáveis
    selectCadastro(cadastro) {
      this.selectedCadastro = cadastro;
      this.showWrapper = true;
      this.fetchCadastroData(cadastro._id);
      emitter.emit("close-other-wrappers");
    },
    iconClose_verCadastro() {
      this.showWrapper = false;
    },
    showName(index) {
      this.hoveredIndex = index;
    },
    hideName() {
      this.hoveredIndex = null;
    },
    requestFullscreen() {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    },
  },
  computed: {
    categoriaAtual() {
      return this.$route.params.category;
    },
    filteredDados() {
      if (!this.categoriaAtual) {
        return this.dados;
      }
      return this.dados.filter(
        (data) => data.categoria === this.categoriaAtual
      );
    },
  },
};
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
  width: 100%;
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
  height: 100%;
  width: 100%;
}
header {
  position: fixed;
  top: 1px;
  left: 0;
  width: 100%;
  padding: 20px 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 99;
}
.logo {
  font-size: 2em;
  color: #ffffff;
  user-select: none;
  padding: 0 25px 0 0;
}

/* Vagalumes */
.container {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.bubbles {
  position: relative;
  display: flex;
}

.bubbles span {
  position: relative;
  width: 20px;
  height: 20px;
  background: #4fc3dc;
  margin: 0 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc;
  animation: animate 15s linear infinite;
  animation-duration: calc(360s / var(--i));
}
.bubbles span:nth-child(even) {
  background: #ff2d75;
  box-shadow: 0 0 0 10px #ff2d7544, 0 0 50px #ff2d75, 0 0 100px #ff2d75;
}

@keyframes animate {
  0% {
    transform: translateY(100vh) scale(0);
  }
  100% {
    transform: translateY(-10vh) scale(1);
  }
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
.search-results {
  position: absolute;
  width: 100%;
  z-index: 1;
  background: #ffffff3b;
  color: #ffffff;
  font-size: 0.9em;
  font-weight: 300;
  padding: 0 35px 0 5px;
}
nav.primary-navigation {
  margin: 0 0 0 0;
  display: block;
  padding: 0 0 0 0px;
  text-align: center;
  font-size: 14px;
}
nav.primary-navigation ul {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
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
  width: max-content;
  height: auto;
}
nav.primary-navigation li a {
  position: relative;
  font-size: 1.1em;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  max-width: 175px;
  word-wrap: break-word;
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

/* Wrapper das telas de login e registro */
.wrapper {
  position: relative;
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
  z-index: 1;
}

.wrapper.active-popup {
  transform: scale(1);
  z-index: 1;
}

.wrapper.active {
  height: 520px;
}

.wrapper .form-box {
  width: 100%;
  padding: 40px;
}

.wrapper .form-box.login {
  transition: transfrom 0.18s ease;
  transform: translateX(0);
}

.wrapper.active .form-box.login {
  transition: none;
  transform: translateX(-400px);
}

.wrapper .form-box.register {
  position: absolute;
  transition: none;
  transform: translateX(400px);
}

.wrapper.active .form-box.register {
  transition: transfrom 0.18s ease;
  transform: translateX(0);
}

.wrapper .icon-close {
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

.remember-forgot {
  font-size: 0.9em;
  color: #ffffff;
  font-weight: 500;
  margin: -15px 0 15px;
  display: flex;
  justify-content: space-between;
}

.remember-forgot label input {
  accent-color: #ffffff;
  margin-right: 3px;
}

.remember-forgot a {
  color: #ffffff;
  text-decoration: none;
}

.remember-forgot a:hover {
  text-decoration: underline;
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

.login-register {
  font-size: 0.9em;
  color: #ffffff;
  text-align: center;
  font-weight: 500;
  margin: 25px 0 10px;
}

.login-register p a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
}

.login-register p a:hover {
  text-decoration: underline;
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
  position: absolute;
  z-index: 1;
}
.wrapper_verPerfil.active-popup {
  transform: scale(1);
  position: absolute;
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
  padding-left: 10px;
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
  width: 800px;
  height: 550px;
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
  position: absolute;
  z-index: 1;
}
.wrapper_editarPerfil.active-popup {
  transform: scale(1);
  position: absolute;
}
.wrapper_editarPerfil.active {
  height: 520px;
}
.EditarPerfil-box {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}
.EditarPerfil-box h2 {
  margin: 0 0 30px;
  padding: 0;
  font-size: 1.3em;
  color: #fff;
  text-align: center;
}
.EditarPerfil-box .conteudo-EditarPerfil {
  position: relative;
}
.EditarPerfil-box .conteudo-EditarPerfil input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.EditarPerfil-box .conteudo-EditarPerfil label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}
.EditarPerfil-box .conteudo-EditarPerfil input:focus ~ label,
.EditarPerfil-box .conteudo-EditarPerfil input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}
.EditarPerfil-box form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;

  border: none; /* Remove default button border */
  background: none; /* Remove default button background */
  cursor: pointer;
}
.EditarPerfil-box button:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
.EditarPerfil-box button span {
  position: absolute;
  display: block;
}
.EditarPerfil-box button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}
@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
.EditarPerfil-box button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
.EditarPerfil-box button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}
.EditarPerfil-box button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
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
  width: 950px;
  height: 560px;
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
  position: absolute;
  z-index: 1;
}
.wrapper_novoCadastro.active-popup {
  transform: scale(1);
  position: absolute;
}
.wrapper_novoCadastro.active {
  height: 520px;
}
.NovoCadastro-box {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}
.NovoCadastro-box h2 {
  margin: 0 0 30px;
  padding: 0;
  font-size: 1.3em;
  color: #fff;
  text-align: center;
}
.NovoCadastro-box .conteudo-NovoCadastro {
  position: relative;
  margin-bottom: 1.5em;
}
.NovoCadastro-box .conteudo-NovoCadastro input {
  width: 100%;
  padding: 2px 0;
  font-size: 16px;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.NovoCadastro-box .conteudo-NovoCadastro label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 2px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}
.NovoCadastro-box .conteudo-NovoCadastro input:focus ~ label,
.NovoCadastro-box .conteudo-NovoCadastro input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}
.NovoCadastro-box form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;

  border: none; /* Remove default button border */
  background: none; /* Remove default button background */
  cursor: pointer;
}
.NovoCadastro-box button:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
.NovoCadastro-box button span {
  position: absolute;
  display: block;
}
.NovoCadastro-box button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}
@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
.NovoCadastro-box button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
.NovoCadastro-box button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}
.NovoCadastro-box button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
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
  width: 80%;
  height: 560px;
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
  position: absolute;
  z-index: 1;
}

.wrapper_editarCadastros.active-popup {
  transform: scale(1);
}

.wrapper_editarCadastros.active {
  height: 520px;
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

.wrapper_editarCadastros div h2 {
  margin: 0 0 30px;
  padding: 0;
  font-size: 1.3em;
  color: #fff;
  text-align: center;
}

.editarCadastro-box {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.editarCadastro-box::-webkit-scrollbar {
  display: none;
}

.responsive-table li {
  border-radius: 3px;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.responsive-table .table-header {
  background-color: #95a5a6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.responsive-table .table-row {
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
}
.responsive-table .col-1 {
  flex-basis: 15%;
}
.responsive-table .col-2 {
  flex-basis: 30%;
}
.responsive-table .col-3 {
  flex-basis: 20%;
}
.responsive-table .col-4 {
  flex-basis: 20%;
}
.responsive-table .col-5 {
  flex-basis: 15%;
}
@media all and (max-width: 767px) {
  .responsive-table .table-header {
    display: none;
  }
  .responsive-table li {
    display: block;
  }
  .responsive-table .col {
    flex-basis: 100%;
  }
  .responsive-table .col {
    display: flex;
    padding: 10px 0;
  }
  .responsive-table .col:before {
    color: #6c7a89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 50%;
    text-align: right;
  }
}

/* Wrapper Configurações */

.wrapper_editarConfigurações {
  width: 50%;
  height: 280px;
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
  position: absolute;
  z-index: 1;
}

.wrapper_editarConfigurações.active-popup {
  transform: scale(1);
}

.wrapper_editarConfigurações.active {
  height: 520px;
}

.wrapper_editarConfigurações .icon-close {
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

.wrapper_editarConfigurações div h2 {
  margin: 0 0 30px;
  padding: 0;
  font-size: 1.3em;
  color: #fff;
  text-align: center;
}

.editarConfigurações-box {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.editarConfigurações-box::-webkit-scrollbar {
  display: none;
}

.editarConfigurações-box button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;

  border: none; /* Remove default button border */
  background: none; /* Remove default button background */
  cursor: pointer;
  width: fit-content;
  margin-top: 10px;
}
.editarConfigurações-box button:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
.editarConfigurações-box button span {
  position: absolute;
  display: block;
}
.editarConfigurações-box button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}
@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
.editarConfigurações-box button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
.editarConfigurações-box button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}
.editarConfigurações-box button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

/* Wrapper Editar Cadastro Específico */
.wrapper_editarCadastroEspecifico {
  width: 950px;
  height: 560px;
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
  position: absolute;
  z-index: 1;
}
.wrapper_editarCadastroEspecifico.active-popup {
  transform: scale(1);
  position: absolute;
}
.wrapper_editarCadastroEspecifico.active {
  height: 520px;
}
.editarCadastroEspecifico-box {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}
.editarCadastroEspecifico-box h2 {
  margin: 0 0 30px;
  padding: 0;
  font-size: 1.3em;
  color: #fff;
  text-align: center;
}
.editarCadastroEspecifico-box .conteudo-editarCadastroEspecifico {
  position: relative;
  margin-bottom: 1.5em;
}
.editarCadastroEspecifico-box .conteudo-editarCadastroEspecifico input {
  width: 100%;
  padding: 2px 0;
  font-size: 16px;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.editarCadastroEspecifico-box .conteudo-editarCadastroEspecifico label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 2px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}
.editarCadastroEspecifico-box
  .conteudo-editarCadastroEspecifico
  input:focus
  ~ label,
.editarCadastroEspecifico-box
  .conteudo-editarCadastroEspecifico
  input:valid
  ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}
.editarCadastroEspecifico-box form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;

  border: none; /* Remove default button border */
  background: none; /* Remove default button background */
  cursor: pointer;
}
.editarCadastroEspecifico-box button:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
.editarCadastroEspecifico-box button span {
  position: absolute;
  display: block;
}
.editarCadastroEspecifico-box button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}
@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
.editarCadastroEspecifico-box button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
.editarCadastroEspecifico-box button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}
.editarCadastroEspecifico-box button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
.wrapper_editarCadastroEspecifico .icon-close {
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

/* Cards selecionáveis */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 85%;
}
.card {
  margin-bottom: 8px;
  margin-right: 8px;
  width: 200px;
  height: 200px;
  position: relative;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image-name {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  text-align: center;
}
.wrapper_verCadastro {
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
  position: absolute;
  z-index: 1;
}
.wrapper_verCadastro.active-popup {
  transform: scale(1);
  position: absolute;
}
.wrapper_verCadastro.active {
  height: 520px;
}
.wrapper_verCadastro .divImagem {
  width: 300px;
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.wrapper_verCadastro .divPerfil {
  width: 440px;
  align-self: stretch;
  padding-left: 17px;
  padding-right: 17px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  display: inline-flex;
}
.wrapper_verCadastro .divPerfil h2 {
  width: 406px;
  height: 55px;
  text-align: center;
  color: white;
  font-size: 2em;
  font-family: Poppins;
  font-weight: 400;
  word-wrap: break-word;
}
.wrapper_verCadastro .divPerfil .divConteudo {
  align-self: stretch;
  height: 58px;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  padding-left: 10px;
}
.wrapper_verCadastro .divPerfil .divConteudo strong {
  text-align: center;
  color: black;
  font-size: 1.1em;
  font-family: Poppins;
  font-weight: 400;
  word-wrap: break-word;
}
.wrapper_verCadastro .divPerfil .divConteudo a {
  color: black;
  font-size: 1em;
  font-family: Poppins;
  font-weight: 300;
  word-wrap: break-word;
}
.wrapper_verCadastro .icon-close {
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

.mySwiper2 {
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0);
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 20%;
  height: 300px;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
