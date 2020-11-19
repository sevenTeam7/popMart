// @ts-nocheck
import Home from "../views/Home";
import Pay from "@/views/Pay";
// @ts-ignore
const routes = [
  { path: "/", component: Home },
  { path: "/pay", component: Pay },
  // { path: "/about", component: () => import("../views/About") },
];
export default routes;
