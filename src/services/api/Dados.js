import Api from "./Api";

const getDados = () => {
  return Api().get("/");
};

export { getDados };
