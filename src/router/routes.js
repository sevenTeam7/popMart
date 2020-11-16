// @ts-nocheck
import Home from "../views/Home";
import Header from "../components/Header";
import Shop from "../views/Shop";
// @ts-ignore
const routes = [
  { path: "/", component: Home },
  { path: "/shop", component: Shop },
  // { path: "/about", component: () => import("../views/About") },
];
export default routes;
