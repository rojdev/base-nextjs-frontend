import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9201',
  withCredentials: true,
});

export default api;
