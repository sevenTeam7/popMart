import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.less";
Vue.config.productionTip = false;

//引入elemetUi
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//引入nav
import NavList from "@/components/NavList";

Vue.component("NavList", NavList);

//引入样式swpier
import "swiper/css/swiper.css";

Vue.use(ElementUI);

//引入ui样式
// import '@/'

// 导出所有的Api 挂载到vue写原型上
import * as API from "./api";
Vue.prototype.$API = API;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
