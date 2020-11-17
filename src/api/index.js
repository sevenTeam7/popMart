import ajax from "../utils/request";
export const getShopImage = () => {
  return ajax.get('/shophome/goodslist');
};
