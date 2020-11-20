import Cart from "@/views/CartAsyc";
import Trade from "@/views/Trade";
import Regist from "@/views/Regist";
import Detail from "@/views/Detail";
import addToCart from "@/views/addToCart";
import Shop from "@/views/Shop";
import News from "@/views/News";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Pay from '@/views/Pay'

const routes = [
  { path: '/', component: Home },
  { path: "/shop", component: Shop , name: 'shop' },
  { path: "/cartasyc", component: Cart },
  { path: "/trade", component: Trade,name:'/trade'},
  { path: "/regist", component: Regist },
  {path:"/pay",component:Pay},
  { path: "/detail", component: Detail, name: "detail" },
  { path: "/addToCart", component: addToCart, name: "addToCart" },
  { path: "/login", component: Login },
  { path: '/news', component: News }
];

export default routes;
