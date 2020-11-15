// @ts-nocheck
import Home from "../views/Home";
import Cart from '../views/CartAsyc'
import Trade from '../views/Trade'
// @ts-ignore
const routes = [
  // { path: "/", component: Home },
  { path: '/views/cartasyc', component: Cart },
  { path: '/views/trade', component: Trade }
  // { path: "/about", component: () => import("../views/About") },
];
export default routes;
