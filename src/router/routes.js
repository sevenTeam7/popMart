// @ts-nocheck
import Home from "../views/Home";
import Header from "../components/Header";
import Shop from "../views/Shop";
import Login from "../views/Login";
// @ts-ignore
const routes = [
  { path: "/", component: Home },
  { path: "/shop", component: Shop },
  { path: "/login", component: Login },
  // { path: "/about", component: () => import("../views/About") },
];
export default routes;
