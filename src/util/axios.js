import axios from "axios";
import store from "../store/index.js";

// const baseUrl =
//   process.env.NODE_ENV == "development"
//     ? "http://139.196.56.192:80/portal/api"
//     : "http://localhost:80/portal/api";
const baseUrl = "http://139.196.56.192:80/portal/api";
console.log(`baseUrl==${baseUrl}`);
//axios全局配置
const instance = axios.create({
  //请求接口
  baseURL: baseUrl,
  //超时设置
  timeout: 20000,
  //请求头设置
  headers: {
    accept: "application/json",
    "Content-Type": "application/json"
  }
});
// 在发送请求之前做些什么("请求拦截器")
console.log("store==", store);
instance.interceptors.request.use(
  config => {
    //假设接口需要对接token，可以用store保存token,在拦截器中设置到header中
    //store需要安装、引入
    // if (store.state.Config.token) {
    //   config.headers.common["Authorization"] = store.state.Config.token;
    // } else {
    //   config.headers.common["Authorization"] = store.state.Config.machine;
    // }
    //console.log('config==', config);
    store.state.loading = true;
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.error("ajax error", error);
  }
);
//respone拦截器==>对响应做处理
instance.interceptors.response.use(
  res => {
    store.state.loading = false;
    //成功请求到数据
    if (res.status === 200) {
      return res;
    } else {
      setTimeout(() => {
        window.vm.$message.warning("请求错误");
      }, 40);
      console.error("ajax error", res);
      return res;
    }
  },
  error => {
    //响应错误处理
    if (
      error.code === "ECONNABORTED" &&
      error.message.indexOf("timeout") !== -1
    ) {
      //let originalRequest = error.config;
      //return instance.request(originalRequest);//例如再重复请求一次
      return "error";
    }
  }
);
export default instance;
