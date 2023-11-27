<template>
  <div>
    <div class="image-container">
      <img class="scrolling-image" src="../../src/assets/ContatoFundo.jpg" />
    </div>

    <nav class="nav-container">
      <div class="content">
        <head></head>
        <body>
          <header>
            <h2 class="logo">Fale conosco</h2>
            <nav role="navigation" class="primary-navigation">
              <ul>
                <li><a v-on:click="goHome">Home</a></li>
                <li><a v-on:click="goSobre">Quem somos?</a></li>
              </ul>
            </nav>
          </header>

          <div style="position: absolute; width: 35%; height: 85%; bottom: 0">
            <h2 class="titulo1">Telefone</h2>
            <h2 class="texto1">(35) 3829-5188</h2>
            <h2 class="titulo1">Endereço</h2>
            <h2 class="texto1">
              UFLA Universidade Federal de Lavras <br />
              DCC Departamento de Ciência da Computação <br />
              1º Andar, Sala 14 <br />
              CEP: 37200-000
            </h2>
            <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
          </div>

          <div
            style="
              position: absolute;
              width: 25%;
              height: 88%;
              bottom: 0;
              left: 35%;
            "
          >
            <h2 class="titulo1">Email</h2>
            <h2 class="texto1">contato@compjunior.com.br</h2>
          </div>

          <div
            style="
              position: absolute;
              width: 34%;
              height: 82%;
              bottom: 25px;
              left: 63%;
            "
          >
            <div class="EnviarFeedback-box">
              <h2>Nos envie um feedback!</h2>
              <form @submit.prevent="enviarFeedback">
                <div class="conteudo-EnviarFeedback">
                  <input type="text" v-model="nome" required />
                  <label>Nome</label>
                </div>
                <div class="conteudo-EnviarFeedback">
                  <input type="text" v-model="telefone" required />
                  <label>Telefone</label>
                </div>
                <div class="conteudo-EnviarFeedback">
                  <input type="text" v-model="email" required />
                  <label>Email</label>
                </div>
                <div class="conteudo-EnviarFeedback">
                  <input type="text" v-model="mensagem" required />
                  <label>Mensagem</label>
                </div>
                <button type="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </body>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
export default {
  name: "ContatoView",
  methods: {
    goHome() {
      this.$router.push("/logged");
    },
    goSobre() {
      this.$router.push("/sobre");
    },
    enviarFeedback() {
      const feedbackData = {
        nome: this.nome,
        telefone: this.telefone,
        email: this.email,
        mensagem: this.mensagem,
      };
      axios
        .post("http://localhost:8081/feedback/enviar", feedbackData)
        .then((response) => {
          alert("Feedback enviado com sucesso!");
        })
        .catch((error) => {
          console.error("Erro ao enviar feedback:", error);
        });
    },
  },
  data() {
    return {
      center: { lat: 10, lng: 10 },
      markers: [
        {
          position: { lat: 10, lng: 10 },
        },
      ],

      nome: "",
      descricao: "",
      telefone: "",
      password: "",
    };
  },
  mounted() {
    var setting = {
      query:
        "Comp Júnior - Avenida Central UFLA - Aquenta Sol, Lavras - MG, Brasil",
      width: 600,
      height: 250,
      satellite: false,
      zoom: 18,
      placeId: "ChIJNxeBVoj9nwARr4PLTCOOQew",
      cid: "0xec418e234ccb83af",
      coords: [-21.22786276961605, -44.97852684724222],
      lang: "en",
      queryString: "Comp Júnior",
      centerCoord: [-21.22786276961605, -44.97852684724222],
      id: "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
      embed_id: "1034011",
      markers: [
        {
          position: [-21.227838249246155, -44.97867326504645],
        },
      ],
    };

    var s = document.createElement("script");
    s.src = "https://1map.com/js/script-for-user.js?embed_id=1034011";
    s.async = true;
    s.onload = function (e) {
      if (
        document.getElementById("map-9cd199b9cc5410cd3b1ad21cab2e54d3").children
          .length > 0
      ) {
        return;
      }

      window.OneMap.initMap(setting);

      // Aguarde um pouco para o link ser adicionado ao DOM
      setTimeout(function () {
        var link = [...document.querySelectorAll("a")].find(
          (a) => a.innerText === "1Map"
        );
        if (link) {
          link.remove();
        }
      }, 1000); // Ajuste este valor conforme necessário
    };

    document.body.appendChild(s);
  },
};
</script>

<style scoped>
.image-container {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
}

.scrolling-image {
  position: absolute;
  width: 100%;
  height: 300%; /* Ajuste este valor para controlar a velocidade de rolagem */
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}

#map-9cd199b9cc5410cd3b1ad21cab2e54d3 {
  bottom: 0;
  width: 80%;
  height: 50%;
  margin-top: 30px;
  margin-left: 60px;
}
.nav-container {
  display: flex;
  flex-direction: row-reverse;
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

header {
  position: relative;
  top: 1px;
  left: 0;
  width: 100%;
  height: 90px;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
}
.logo {
  font-size: 2em;
  color: #ffffff;
  user-select: none;
  padding: 0 25px 0 0;
}

.titulo1 {
  font-size: 1.8em;
  color: #ffffff;
  user-select: none;
  padding: 20px 0px 0 60px;
}
.texto1 {
  font-size: 1.2em;
  color: #ffffff;
  user-select: none;
  padding: 20px 0 0 60px;
  text-align: justify;
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

.wrapper_EnviarFeedback {
  width: 800px;
  height: 500px;
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
.wrapper_EnviarFeedback.active-popup {
  transform: scale(1);
  position: absolute;
}
.wrapper_EnviarFeedback.active {
  height: 520px;
}
.EnviarFeedback-box {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 40px;
  background: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  /* box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6); */
  border-radius: 10px;
}
.EnviarFeedback-box h2 {
  margin: 0 0 30px;
  padding: 0;
  font-size: 1.3em;
  color: #fff;
  text-align: center;
}
.EnviarFeedback-box .conteudo-EnviarFeedback {
  position: relative;
}
.EnviarFeedback-box .conteudo-EnviarFeedback input {
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
.EnviarFeedback-box .conteudo-EnviarFeedback label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}
.EnviarFeedback-box .conteudo-EnviarFeedback input:focus ~ label,
.EnviarFeedback-box .conteudo-EnviarFeedback input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}
.EnviarFeedback-box form button {
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

  left: 35%;
}
.EnviarFeedback-box button:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
.EnviarFeedback-box button span {
  position: absolute;
  display: block;
}
.EnviarFeedback-box button span:nth-child(1) {
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
.EnviarFeedback-box button span:nth-child(2) {
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
.EnviarFeedback-box button span:nth-child(3) {
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
.EnviarFeedback-box button span:nth-child(4) {
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
.wrapper_EnviarFeedback .icon-close {
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
