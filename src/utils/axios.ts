import axios from "axios";
import { ElMessage } from "element-plus";
import router from "../router";

axios.defaults.baseURL = "http://localhost:28019/manage-api/v1";
axios.defaults.withCredentials = true;
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers["token"] = localStorage.getItem("token") || "";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use((res) => {
  if (typeof res.data !== "object") {
    return Promise.reject(res);
  }
  if (res.data.resultCode != 200) {
    if (res.data.message)
      ElMessage({
        message: "服务器异常",
        grouping: true,
        type: "error",
      });
    if (res.data.resultCode == 416) {
      router.push({ path: "/login" });
    }
    if (res.data.data && window.location.hash == "#/login") {
      localStorage.setItem("token", res.data.data);
      axios.defaults.headers["token"] = res.data.data;
    }
    return Promise.reject(res.data);
  }

  return res.data;
});

export default axios;
