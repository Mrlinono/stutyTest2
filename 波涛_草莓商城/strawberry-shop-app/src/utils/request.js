import axios from "axios";
import { getToken } from "./auth";
const instance = axios.create({
  timeout: 5000,
  baseURL: "http://localhost:3009",
});

export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const del = (url) => instance.delete(url);

// 全局拦截

// 请求拦截
instance.interceptors.request.use(
  function(config) {
    config.headers.authorization = `Bearer ${getToken()}`;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    if (error.response && error.response.status === 401) {
      window.location.href = "/#/login";
    }
    return Promise.reject(error);
  }
);

export default axios;
