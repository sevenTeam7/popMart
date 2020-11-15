import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入公共组件
import Header from '@/component/Header'
// 全局注册组件
Vue.component('Header', Header)


import "./styles/index.less";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


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
