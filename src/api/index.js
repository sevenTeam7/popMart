import ajax from "../utils/request";
// 获取购物车中的商品信息列表数据
export const  getShopImage  = ()=>ajax.get('/shophome/goodslist')
// export const reqMailLogin = (username,code) => ajax.post('/login/mail',{username,code})
