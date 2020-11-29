import { get, post, put, del } from "../utils/request";

// 注册
export function userReg(data) {
  return post("/api/v1/auth/reg", data);
}

// 登录
export function userLogin(data) {
  return post("/api/v1/auth/login", data);
}
