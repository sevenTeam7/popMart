import ajax from "../utils/request";
//获取好评
export const reqGoodsINfo = (skuid) => {
  return ajax.get(`/detail/goodsdetail?skuid=${skuid}`);
};
// export const reqMailLogin = (username,code) => ajax.post('/login/mail',{username,code})
