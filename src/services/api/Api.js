import axios from "axios";

const Api = () => {
  return axios.create({
    baseURL: "http://localhost:8081",
    headers: {
      Authorization: "Bearer ",
    },
  });
};

export default Api;
