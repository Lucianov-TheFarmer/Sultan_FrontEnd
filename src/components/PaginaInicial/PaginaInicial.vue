<template>
  <div>
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
            <li>
              <button v-on:click="goLogin" class="bthLogin-popup">Login</button>
            </li>
          </ul>
        </nav>
      </header>
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
      <div class="wrapper">
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
              <input v-model="dados_login.password" type="password" required />
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

        <div class="form-box register">
          <h2>Cadastro</h2>
          <form action="#">
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
            <button type="submit" class="bth" @click="registrar">
              Cadastrar
            </button>
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
    </body>
  </div>
</template>

<script>
import { login, registro } from "../../services/api/Auth";
import { setCookie } from "../../utils/cookie";

export default {
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
    registrar() {
      event.preventDefault();

      let user = {
        name: this.dados_registro.name,
        email: this.dados_registro.email,
        password: this.dados_registro.password,
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
  },
  data() {
    return {
      dados_login: {
        email: "",
        password: "",
      },
      dados_registro: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  background: url("../../assets/fundoroxo.png") no-repeat center;
}

header {
  position: fixed;
  top: 0px;
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
}

.wrapper.active-popup {
  transform: scale(1);
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
</style>
