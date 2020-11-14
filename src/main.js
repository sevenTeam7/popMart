import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.less";
Vue.config.productionTip = false;

// 导出所有的Api 挂载到vue写原型上
import * as API from "./api";
import "./styles/reset.css";
import "swiper/swiper-bundle.css";
Vue.prototype.$API = API;
Vue.prototype.$bus = new Vue();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
