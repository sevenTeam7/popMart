import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.less";
import "./styles/reset.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);

// 导出所有的Api 挂载到vue写原型上
import * as API from "./api";
Vue.prototype.$API = API;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
