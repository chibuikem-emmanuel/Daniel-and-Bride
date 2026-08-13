import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://wedding-backend-7bt6.onrender.com/api",

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 15000,
});

export default api;