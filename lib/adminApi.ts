import axios from "axios";

const adminApi = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://wedding-backend-7bt6.onrender.com/api",

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 15000,
});

adminApi.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default adminApi;