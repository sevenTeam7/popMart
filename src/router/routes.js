// @ts-nocheck
import Home from "../views/Home";
import Detail from "@/views/Detail";
// @ts-ignore
const routes = [
  { path: "/", component: Home },
  { path: "/detail", component: Detail },

  // { path: "/about", component: () => import("../views/About") },
];
export default routes;
