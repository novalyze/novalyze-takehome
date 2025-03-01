
const apiConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://reqres.in/api",
  headers: {
    "Content-Type": "application/json",
  },
};

export default apiConfig;
