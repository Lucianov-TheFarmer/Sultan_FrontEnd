import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    terms: null,
  },
  mutations: {
    setTerms(state, terms) {
      state.terms = terms;
    },
  },
  actions: {
    getTerms({ commit }) {
      // Aqui você faria a chamada à API para obter os termos
      // Por exemplo:
      axios.get("/api/terms").then((response) => {
        commit("setTerms", response.data);
      });
    },
  },
});

export default store;
