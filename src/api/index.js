import ajax from "../utils/request";
//获取当前商品信息
export const reqGoodsINfo = (skuid) => {
  return ajax.get(`/detail/goodsdetail?skuid=${skuid}`);
};
//获取好评商品信息列表
export const reqCoodsList = () => {
  return ajax.getUri(`/shophome/goodslist`);
};
// export const reqMailLogin = (username,code) => ajax.post('/login/mail',{username,code})
