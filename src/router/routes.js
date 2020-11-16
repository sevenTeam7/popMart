// @ts-nocheck
import Home from "../views/Home";
//引入news
// import News from "@/views/news";
// @ts-ignore
const routes = [
  { path: "/", component: Home },
  // { path: "/about", component: () => import("../views/About") },
  { path: "/news", component: () => import("../views/News") },
  // {
  //   path: "/news",
  //   component: News,
  // },
];
export default routes;
