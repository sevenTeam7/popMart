import axios from "axios";
import store from "@/store";
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const ajax = axios.create({
  baseURL: "",
  timeout: 20000,
});

ajax.interceptors.request.use((config) => {
  Nprogress.start()
  // 设置token
  // const token = store.
  return config;
});

ajax.interceptors.response.use(
  (res) => {
    Nprogress.done()
    return res.data;
  },
  (error) => {
    if (error) {
      Nprogress.done()
      return Promise.reject(error);
    }
  }
);
export default ajax;
