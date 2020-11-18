import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.less";
import "element-ui/lib/theme-chalk/index.css";
// 引入validate
import "./utils/validate";
Vue.config.productionTip = false;
import "./styles/reset.css";
Vue.use(ElementUI);

import Header from "./components/Header";
Vue.component("Header", Header);
import Footer from "./components/Footer";
Vue.component("Footer", Footer);

//引入表单验证插件
import "./utils/validate";

//引入elemetUi
// import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//引入nav
import NavList from "@/components/NavList";
//引入floot
import Floot from "@/components/Floot";

Vue.component("NavList", NavList);
Vue.component("Floot", Floot);

//引入样式swpier
import "swiper/css/swiper.css";

// 导出所有的Api 挂载到vue写原型上
import * as API from "./api";
import "./styles/reset.css";
import "swiper/css/swiper.css";
import "./static/iconfonts/iconfont.css";
Vue.prototype.$API = API;

Vue.prototype.$bus = new Vue();
// import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
