import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.less";
// 引入validate
// import "./utils/validate";
Vue.config.productionTip = false;
Vue.use(ElementUI);

import Header from "./components/Header";
Vue.component("Header", Header);
import Footer from "./components/Footer";
Vue.component("Footer", Footer);

//引入表单验证插件
import "./utils/validate";

//引入elemetUi

//引入floot
import Floot from "@/components/Floot";

Vue.component("Floot", Floot);

//引入样式swpier
import "swiper/css/swiper.css";

Vue.use(ElementUI);
// 导出所有的Api 挂载到vue写原型上
import * as API from "./api";
import "./styles/reset.css";
import "swiper/css/swiper.css";
import "./static/iconfonts/iconfont.css";

Vue.prototype.$API = API;

Vue.prototype.$bus = new Vue();

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
