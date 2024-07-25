import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.tu-dominio.com', // Reemplaza con la URL de tu API
});

export default api;
