import axios from "axios";
// import.meta.env.VITE_API_URL ||
const API_BASE_URL = "https://localhost:3000/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
