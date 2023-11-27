<template>
  <div
    style="
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <my-swiper
      v-if="dados.length > 0 && isSwiperVisible"
      ref="mySwiper"
      :effect="'coverflow'"
      :loop="true"
      :centeredSlides="true"
      :slidesPerView="4"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(data, index) in dados"
        :key="index"
        @click="selectCadastro(data)"
      >
        <img
          :src="'http://localhost:8081/' + data.imagemPrincipal"
          @mouseover="showName(index)"
          @mouseout="hideName"
        />
        <div v-show="hoveredIndex === index" class="image-name">
          {{ data.nome }}
        </div>
      </swiper-slide>
    </my-swiper>

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
          v-if="selectedCadastro && selectedCadastro.outrasImagens.length > 0"
          :centeredSlides="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          :simulateTouch="false"
          :navigation="true"
          :loop="true"
          :modules="modules"
          class="mySwiper2"
        >
          <swiper-slide
            v-for="(image, index) in selectedCadastro.outrasImagens"
            :key="index"
          >
            <img
              :src="'http://localhost:8081/' + image"
              style="width: 300px; border-radius: 8px"
            />
          </swiper-slide>
        </my-swiper>
        <img
          v-if="selectedCadastro && selectedCadastro.outrasImagens.length === 0"
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
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper as MySwiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { emitter } from "../Sidebar/eventBus";
import { ref } from "vue";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  components: {
    MySwiper,
    SwiperSlide,
  },
  data() {
    return {
      dados: [],
      modules: [EffectCoverflow, Pagination, Navigation],
      isSwiperVisible: true,
      hoveredIndex: null,
      selectedCadastro: null,
      showWrapper: false,
    };
  },
  watch: {
    dados() {
      this.isSwiperVisible = false;
      this.$nextTick(() => {
        this.isSwiperVisible = true;
      });
    },
  },
  mounted() {
    fetch("http://localhost:8081/dados")
      .then((response) => response.json())
      .then((data) => {
        this.dados = data;
      });
  },
  created() {
    emitter.on("close-myswiper-wrapper", this.iconClose_verCadastro);
    emitter.on("item-selected", (item) => {
      this.selectedCadastro = item;
      this.showWrapper = true;
    });
  },
  beforeUnmount() {
    emitter.off("close-myswiper-wrapper", this.iconClose_verCadastro);
  },
  methods: {
    showName(index) {
      this.hoveredIndex = index;
    },
    hideName() {
      this.hoveredIndex = null;
    },
    iconClose_verCadastro() {
      this.showWrapper = false;
    },
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
    selectCadastro(cadastro) {
      this.selectedCadastro = cadastro;
      this.showWrapper = true;
      this.fetchCadastroData(cadastro._id);
      emitter.emit("close-other-wrappers");
    },
  },
};
</script>

<style scoped>
#app {
  height: 100%;
  z-index: 0;
}
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.mySwiper {
  width: 80%; /* Define a largura do Swiper */
  height: 300px; /* Define a altura do Swiper */
  background-color: rgba(
    255,
    255,
    255,
    0
  ); /* Define a cor de fundo do Swiper para branco semi-transparente */
  position: absolute; /* Posiciona o Swiper de forma absoluta */
  top: 50%; /* Posiciona o Swiper no meio do seu container */
  left: 50%; /* Posiciona o Swiper no meio do seu container */
  transform: translate(
    -50%,
    -50%
  ); /* Desloca o Swiper para cima e para a esquerda pela metade de sua própria altura e largura, respectivamente, efetivamente centralizando-o */
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
</style>
