import Api from "./Api";

const login = (dados) => {
  return Api().post("/auth/login", dados);
};

const registro = (dados) => {
  return Api().post("/auth/register", dados);
};
export { login, registro };
