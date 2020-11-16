// @ts-nocheck
import Home from "../views/Home";
import Cart from '../views/CartAsyc'
import Trade from '../views/Trade'
import Regist from '../views/Regist'
// @ts-ignore
const routes = [
  { path: "/", component: Home },
  { path: '/views/cartasyc', component: Cart },
  { path: '/views/trade', component: Trade },
  { path: '/views/regist', component: Regist }
  // { path: "/about", component: () => import("../views/About") },
];
export default routes;
