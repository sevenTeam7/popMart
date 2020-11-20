import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
  // 页面滚动行为 页面跳转回到顶部
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
