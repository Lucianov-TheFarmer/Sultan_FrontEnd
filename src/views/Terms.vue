<template>
  <div v-html="htmlContent"></div>
</template>

<script>
import axios from "axios";

export default {
  name: "TermsView",
  data() {
    return {
      htmlContent: null,
    };
  },
  async mounted() {
    // Carregar o conteúdo do arquivo HTML
    const response = await axios.get("/termos.html");
    this.htmlContent = response.data;
  },
};
</script>

<style></style>
