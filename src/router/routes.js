import Header from "@/components/Header";
import Cart from "@/views/CartAsyc";
import Trade from "@/views/Trade";
import Regist from "@/views/Regist";
import Detail from "@/views/Detail";
import addToCart from "@/views/addToCart";
import Shop from "@/views/Shop";
import Login from "@/views/Login";
import Home from '@/views/Home'
import News from '@/views/News'

const routes = [
  { path: '/', component: Home },
  { path: "/shop", component: Shop , name: 'shop' },
  { path: "/views/cartasyc", component: Cart },
  { path: "/views/trade", component: Trade,name:'/views/trade'},
  { path: "/regist", component: Regist },
  { path: "/detail", component: Detail },
  { path: "/addToCart", component: addToCart },
  { path: "/login", component: Login },
  { path: '/news', component: News }
];

export default routes;
