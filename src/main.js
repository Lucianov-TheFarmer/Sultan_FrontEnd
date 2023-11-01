import "@babel/polyfill";
import "mutationobserver-shim";
import { createApp } from "vue";
import App from "./App.vue";
import "./global.css";
import router from "./router";

createApp(App).use(router).mount("#app");
