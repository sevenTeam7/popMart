
// @ts-nocheck
import Home from "../views/Home";
import Cart from "../views/CartAsyc";
import Trade from "../views/Trade";
import Regist from "../views/Regist";
import Detail from "@/views/Detail";
import addToCart from "../views/addToCart";
// @ts-ignore
const routes = [
  /* 主页 */
  { path: "/", component: Home },
  /* 购物车页面 */
  { path: "/views/cartasyc", component: Cart },
  { path: "/views/trade", component: Trade },
  /* 注册界面 */
  { path: "/views/regist", component: Regist },
  /* 商品详情页面 */
  { path: "/detail", component: Detail },
  /* 加入购物车成功 页面*/
  {path:"/addToCart",component:addToCart}
]
// @ts-ignore

export default routes;
