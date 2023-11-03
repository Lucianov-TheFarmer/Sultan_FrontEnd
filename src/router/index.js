import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import HomeView from "../views/HomeView";
import Sobre from "../views/Sobre.vue";
import Contato from "../views/Contato.vue";
import Logged from "../views/Logged.vue";

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
  {
    path: "/logged",
    name: "logged",
    component: Logged,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!Cookies.get("token")) {
      console.log("Token não encontrado");
      next(from.path); // redirecionar para a página anterior
    } else {
      next(); // caso contrário, continue normalmente
    }
  } else {
    next(); // caso contrário, continue normalmente
  }
});

export default router;
