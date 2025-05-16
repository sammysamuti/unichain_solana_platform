import axios from 'axios';

const api = axios.create({
  baseURL: 'https://unichain-backend.vercel.app/',
});

export default api;
