import axios, { AxiosInstance } from 'axios';
import { getUserToken } from '../../helpers/auth';

const ApiInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 5000,
});

// Add a request interceptor
ApiInstance.interceptors.request.use(
  function (config) {
    if (typeof window !== 'undefined') {
      const token = getUserToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
ApiInstance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default ApiInstance;
