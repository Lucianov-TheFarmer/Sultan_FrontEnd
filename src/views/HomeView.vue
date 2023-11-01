<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/PaginaInicial/PaginaInicial.vue";
import { getDados } from "../services/api/Dados";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  mounted() {
    getDados()
      .then((res) => {
        console.log(res.data);
      })
      .catch();
  },
};
</script>
