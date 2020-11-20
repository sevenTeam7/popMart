import ajax from "../utils/request";
//获取当前商品信息
export const reqGoodsInfo = (skuid) => {
  return ajax.get(`/detail/goodsdetail?skuid=${skuid}`);
};
//获取好评商品信息列表
export const reqGoodsList = () => {
  return ajax.get(`/shophome/goodslist`);
};
// 获取购物车中的商品信息列表数据
export const getShopImage = () => ajax.get("/shophome/goodslist");
// export const reqMailLogin = (username,code) => ajax.post('/login/mail',{username,code})
// 注册
export const reqRegist = (usermail, password) =>
  ajax.post("/register/mail", { usermail, password });

// 获取购物车列表
export const reqCartList = () => ajax.get("/cart/cartlist");
// 改变商品数量
export const reqChangeCartNum = (skuid, skunum) =>
  ajax.post("/cart/addtocart", { skuid, skunum });
// 切换选中状态
export const reqSwicthIschecked = (skuid, ischecked) =>
  ajax.get(`/cart/checkcart?skuid=${skuid}&ischecked=${ischecked}`);
// 删除商品信息
export const reqDeleteCat = (skuid) => ajax.delete(`/cart/deletecart/${skuid}`);

// 获取订单收件人信息
export const reqTradeProson = () => ajax.get("/address/addressinfo");

// export const reqMailLogin = (username,code) => ajax.post('/login/mail',{username,code}
// 大轮播图片数据
export const reqBanners = () => ajax.get(`/home/banners`);
//首页的新闻
export const reqJournaism = () => ajax.get("/home/homenews");
//news的分页器api 这个是params                                 query
export const reqNews = (page, pageSize) =>
  ajax.get(`/news/getnewslist?page=${page}&pageSize=${pageSize}`);
//登录帐户
// export const reqLogin = (usermail, password) =>
//   ajax.post(`/login/account`, { usermail, password });
// console.log(111111111);

// 账户 密码登录
export const reqGetPassWord = (usermail, password) => {
  return ajax.post("/login/account", {
    usermail,
    password,
  });
};
export const getEmailCode = ({usermail}) => {
  return ajax.post("/login/getmail", {
    usermail,
  });
};
export const getCheckCode = ({usermail, code}) => {
  return  ajax.post("/login/mail",{
    usermail,
    code
  }) 
};

//根据skuid和skunum获取加入购物车商品
export const getAddGood = (skuid, skunum) => {
  return ajax.post(`/cart/addtocart`, { skuid, skunum });
};
