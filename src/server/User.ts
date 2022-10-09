import axios from "../utils/axios";
type User = {
  loginName: string;
  passwordMd5: string;
};
export function getUserInfo() {
  return axios.get("/user/info");
}

export function EditUserInfo(params: any) {
  return axios.put("/user/info", params);
}

export function login(params: User) {
  return axios.post("/user/login", params);
}

export function logout() {
  return axios.post("/user/logout");
}

export function register(params: any) {
  return axios.post("/user/register", params);
}
