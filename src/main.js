import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.less";
import "element-ui/lib/theme-chalk/index.css";
// 引入懒加载
import Vuelazyload from 'vue-lazyload'
// 引入懒加载图片
import loading from './assets/loading.gif'
// 使用懒加载
Vue.use(Vuelazyload,{
  loading
})
// 引入validate
// import "./utils/validate";
Vue.config.productionTip = false;
// 导出所有的Api 挂载到vue写原型上
import * as API from "./api";
import "./styles/reset.css";
import "swiper/css/swiper.css";
import "./static/iconfonts/iconfont.css";
Vue.prototype.$API = API;

Vue.prototype.$bus = new Vue();
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";


Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
