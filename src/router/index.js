import store from "@/store";
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
/* router.beforeEach((to, from, next) => {
  //只有在登录的时候才能访问的地址
  // pay views/cartasyc views/trade  detail addToCart
  const targetPath = to.path;
  const checkPath = ["/pay", "/cartasyc", "/trade", "/addToCart"];
  if (checkPath.indexOf(targetPath) == -1) {
    //不存在
    next();
  } else {
    if (store.state.user.usernameInfo) {
      next();
    } else {
      next("/login");
    }
  }
}); */

export default router;
