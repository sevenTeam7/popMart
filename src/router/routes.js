// @ts-nocheck
import Home from "../views/Home";
//引入news
// import News from "@/views/news";
// @ts-ignore
const routes = [
  { path: "/", component: Home },
  // { path: "/about", component: () => import("../views/About") },
  //新闻页面
  { path: "/news", component: () => import("../views/News") },
    //登录页面
  {path:"/login",component:()=>import("../views/Login")}
];
export default routes;
