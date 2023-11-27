<template>
  <div style="position: relative; overflow: hidden; width: 100%; height: 100vh">
    <video
      autoplay
      loop
      style="position: absolute; width: 100%; height: 100%; object-fit: cover"
    >
      <source src="../assets/Sobre.mp4" type="video/mp4" />
    </video>

    <div
      style="position: relative; overflow: hidden; width: 100%; height: 100vh"
    >
      <div
        style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          pointer-events: none;
        "
      ></div>
      <div class="logo">
        <img
          src="../assets/logoCompJunior.svg"
          class="fade-in-delayed"
          style="
            bottom: 60px;
            left: 30px;
            width: 75px;
            height: 75px;
            opacity: 0;
          "
        />
        <a class="contato" href="/contato" v-on:click="goContato">Contato</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "SobreView",
};
</script>

<style scoped>
.fade-in {
  animation: fadeIn 12s;
}

.fade-in-delayed {
  animation: fadeIn 20s 3s forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.contato {
  bottom: 20px;
  left: 35px;
  color: rgba(255, 255, 255, 0.4);
  font-family: "Poppins";
  font-size: 1em;
  text-decoration: none;
  opacity: 0;
  animation: fadeIn 20s 5s forwards;
}

.logo {
  position: absolute;
  bottom: 30px;
  left: 25px;
  flex-direction: column;
  display: flex;
  align-items: center;
}
</style>
