import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Carousel,
  Input,
  Select,
  message,
  Radio,
  Modal,
  Spin,
  Icon
} from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';

Vue.use(Carousel);
Vue.use(Input);
Vue.use(Select);
Vue.use(Radio);
Vue.use(Modal);
Vue.use(Spin);
Vue.use(Icon);
Vue.prototype.$message = message;
let { confirm } = Modal;
Vue.prototype.$confirm = confirm;

// 引入地图
import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "eBRLlQlHgoayk0sfP2mg8G3sLIqZyLPg"
});
// iocnfont
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1525425_49fo7wfj1ek.js', // 在 iconfont.cn 上生成
});
Vue.component('iconfont', MyIcon);
// 引入css
//import "./assets/style/default.styl";

//将axios挂载到Vue的原型上
//Vue.prototype.axios = instance;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
