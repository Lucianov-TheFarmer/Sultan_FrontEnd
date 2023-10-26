<template>
  <div>
    <head></head>
    <body>
      <header>
        <h2 class="logo">Gandalf</h2>
        <div class="search-box">
          <span class="icon">
            <ion-icon name="search-outline"></ion-icon>
          </span>
          <input type="text" />
        </div>

        <nav class="navigation">
          <a v-on:click="goHome" href="#">Home</a>
          <a v-on:click="goAbout" href="#">Categorias</a>
          <a v-on:click="goServices" href="#">Contato</a>
          <a v-on:click="goContact" href="#">Sobre</a>
          <button v-on:click="goLogin" class="bthLogin-popup">Login</button>
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
              <input type="email" required />
              <label>Email</label>
            </div>
            <div class="input-box">
              <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Senha</label>
            </div>
            <div class="remember-forgot">
              <label><input type="checkbox" required /> Lembrar-me</label>
              <a href="#">Esqueci a senha</a>
            </div>
            <button type="submit" class="bth">Login</button>
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
              <input type="text" required />
              <label>Usuário</label>
            </div>
            <div class="input-box">
              <span class="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div class="input-box">
              <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
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
    </body>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      console.log("Go Home");
    },
    goAbout() {
      console.log("Go About");
    },
    goServices() {
      console.log("Go Services");
    },
    goContact() {
      console.log("Go Contact");
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
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
}

.logo {
  font-size: 2em;
  color: #ffffff;
  user-select: none;
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

.navigation a {
  position: relative;
  font-size: 1.1em;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 40px;
}

.navigation a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background: #ffffff;
  border-radius: 5px;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.5s;
}

.navigation a:hover::after {
  transform-origin: left;
  transform: scaleX(1);
}

.navigation .bthLogin-popup {
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
  margin-left: 40px;
  transition: 0.5s;
}

.navigation .bthLogin-popup:hover {
  background: #ffffff;
  color: #162938;
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
