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

//懒加载
import loading from "./static/images/01.gif";
import Vuelazyload from "vue-lazyload";
Vue.use(Vuelazyload, {
  loading,
});

// 导出所有的Api 挂载到vue写原型上
import * as API from "./api";
import "./styles/reset.css";
import "swiper/css/swiper.css";
import "./static/iconfonts/iconfont.css";

Vue.prototype.$API = API;

//定义事件总线
Vue.prototype.$bus = new Vue();

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
