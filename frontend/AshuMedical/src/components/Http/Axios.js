import axios from "axios";
// import.meta.env.VITE_API_URL ||
// const API_BASE_URL = "http://localhost:3000/";
const API_BASE_URL = import.meta.env.VITE_API_URL;
console.trace(API_BASE_URL);
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
