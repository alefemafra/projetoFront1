import axios from "axios";

const api = axios.create({
  baseURL: "http://144.217.169.230:8085"
});

export default api;
