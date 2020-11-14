// @ts-nocheck
import Home from "../views/Home";
import Header from "../components/Header";
// @ts-ignore
const routes = [
  { path: "/", component: Home },
  { path: "/header", component: Header },
  // { path: "/about", component: () => import("../views/About") },
];
export default routes;
