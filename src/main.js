import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import "./styles/index.less";
Vue.config.productionTip = false;

// 导出所有的Api 挂载到vue写原型上
import * as API from "./api";
Vue.prototype.$API = API;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
