import axios from 'axios';

const baseURL = 'http://localhost:3333'; // Substitua pelo endereço do seu servidor

// Cria uma instância do axios com a URL base da API
const api = axios.create({ baseURL: baseURL });

api.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject((error.response && error.response.data) || "Wrong Services")
);

export default api;