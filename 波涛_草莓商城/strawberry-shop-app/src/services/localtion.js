import { get, post, put, del } from "../utils/request";

// 获取地址列表
export function updateLocaltion() {
  return get("/api/v1/addresses");
}

// 获取一个地址
export function updateOneLocaltion(id) {
  return get(`/api/v1/addresses/${id}`);
}

// 新增收获地址
export function addLocalion(data) {
  return post("/api/v1/addresses", data);
}

// 修改收货地址
export function editLocaltion(id, data) {
  return put(`/api/v1/addresses/${id}`, data);
}

// 删除收货地址
export function delLocaltion(id) {
  return del(`/api/v1/addresses/${id}`);
}
