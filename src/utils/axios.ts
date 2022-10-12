import axios from "axios";
import { Toast } from "vant";
import router from "../router";

axios.defaults.baseURL = "//backend-api-01.newbee.ltd/api/v1";
axios.defaults.withCredentials = true;
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers["token"] = localStorage.getItem("token") || "";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use((res) => {

    if (res.data.data && window.location.hash == "#/login") {
      localStorage.setItem("token", res.data.data);
      axios.defaults.headers["token"] = res.data.data;
    }
   

  return res.data;
});

export default axios;
