// lib/axios.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9201',
    withCredentials: true, // ¡Muy importante! Para enviar cookies
});

export default api;