

import Home from "../views/Home";
import Cart from "../views/CartAsyc";
import Trade from "../views/Trade";
import Regist from "../views/Regist";
import Detail from "@/views/Detail";
import addToCart from "../views/addToCart";
import Shop from "../views/Shop";

const routes = [
  { path: "/", component: Home },
  { path: "/shop", component: Shop },
  { path: "/views/cartasyc", component: Cart },
  { path: "/views/trade", component: Trade },
  { path: "/views/regist", component: Regist },
  { path: "/detail", component: Detail },
  {path:"/addToCart",component:addToCart}
]

//引入news
// import News from "@/views/news";
// @ts-ignore
const routes = [
  { path: "/", component: Home },
  // { path: "/about", component: () => import("../views/About") },
  //新闻页面
  { path: "/news", component: () => import("../views/News") },
    //登录页面
  {path:"/login",component:()=>import("../views/Login")}
];
export default routes;
