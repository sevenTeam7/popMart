
import Header from "@/components/Header";
import Cart from "@/views/CartAsyc";
import Trade from "@/views/Trade";
import Regist from "@/views/Regist";
import Detail from "@/views/Detail";
import addToCart from "@/views/addToCart";
import Shop from "@/views/Shop";
import News from "@/views/News";
import Home from "@/views/Home";
import Login from "@/views/Login";

const routes = [
  { path: "/", component: Home },
  { path: "/shop", component: Shop },
  { path: "/views/cartasyc", component: Cart },
  { path: "/views/trade", component: Trade },
  { path: "/regist", component: Regist },
  { path: "/detail", component: Detail },
  { path: "/addToCart", component: addToCart },
  { path: "/news", component: News },
  { path: "/login", component: Login },
];

export default routes;
