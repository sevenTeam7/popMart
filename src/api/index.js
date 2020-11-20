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
// 账户 密码登录
export const reqGetPassWord = (usermail, password) => {
  return ajax.post("/login/account", {
    usermail,
    password,
  });
};
export const getEmailCode = (usermail) => {
  return ajax.post("/login/getmail", {
    usermail,
  });
};
export const getCheckCode = (usermail, code) => {
  ajax.post("/login/mail"),
    {
      usermail,
      code,
    };
};
