import axios from "axios";
import { getCookie } from "../../utils/cookie";

const Api = () => {
  return axios.create({
    baseURL: "http://localhost:8081",
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export default Api;
