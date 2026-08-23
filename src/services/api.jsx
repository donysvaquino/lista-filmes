import axios from "axios";
// Base da URL: https://api.themoviedb.org/3/

// URL DA API: 

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
