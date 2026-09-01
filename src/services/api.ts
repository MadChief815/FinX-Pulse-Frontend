import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  baseURL: Config.API_URL,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  // attach auth token here once you have an auth store
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // centralize error logging / token refresh here
    return Promise.reject(err);
  }
);

export default api;