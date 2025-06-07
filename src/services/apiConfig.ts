import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_TMDB_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
  },
});

export default api;
