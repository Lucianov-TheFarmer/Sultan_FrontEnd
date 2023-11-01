import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import Sobre from "../views/Sobre.vue";
import Contato from "../views/Contato.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: Sobre,
  },
  {
    path: "/contato",
    name: "contato",
    component: Contato,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
