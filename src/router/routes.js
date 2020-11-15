// @ts-nocheck
import Home from "../views/Home";
import Detail from "@/views/Detail";
import Comment from "@/views/Detail/Comment";
import Header from "@/views/Header";
// @ts-ignore
const routes = [
  { path: "/", component: Detail },
  // { path: "/about", component: () => import("../views/About") },
];
export default routes;
