// 引入购物车组件
import addToCart from "../views/addToCart";
// @ts-ignore
const routes = [
  { path: "/", component: addToCart },
  // { path: "/about", component: () => import("../views/About") },
];
export default routes;
