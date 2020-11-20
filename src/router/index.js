import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach((to, from, next) => {
  //只有在登录的时候才能访问的地址
  // pay views/cartasyc views/trade  detail addToCart
  const targetPath = to.path;
  const checkPath = ["/pay", "/views/cartasyc", "/views/trade", "/addToCart"];
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
});

export default router;
