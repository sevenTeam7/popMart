// @ts-nocheck
import Home from "../views/Home";
import Cart from "../views/CartAsyc";
import Trade from "../views/Trade";
import Regist from "../views/Regist";
import Detail from "@/views/Detail";
// @ts-ignore
const routes = [
  { path: "/", component: Home },
  { path: "/views/cartasyc", component: Cart },
  { path: "/views/trade", component: Trade },
  { path: "/views/regist", component: Regist },
  { path: "/views/detail", component: Detail },
];
// @ts-ignore

export default routes;
