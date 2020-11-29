import { get, post, put, del } from "../utils/request";

export function getData() {
  return get(`/api/v1/products`);
}

export function getDataById(id) {
  return get(`/api/v1/products/${id}`);
}

// 加入购物车++
export function addCar(data) {
  return post("/api/v1/shop_carts", data);
}

// 获取购物车列表
export function carList() {
  return get("/api/v1/shop_carts");
}

// 删除购物车商品
export function delCar(id) {
  return del(`/api/v1/shop_carts/${id}`);
}
