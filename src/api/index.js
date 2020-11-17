import ajax from "../utils/request";
// export const reqMailLogin = (username,code) => ajax.post('/login/mail',{username,code})
// 注册
export const reqRegist = (usermail, password) =>
  ajax.post("/register/mail", { usermail, password });

// 获取购物车列表
export const reqCartList = () => ajax.get("/cart/cartlist");
// 改变商品数量
export const reqChangeCartNum=(skuid,skunum)=>ajax.post('/cart/addtocart',{skuid,skunum});
// 切换选中状态
export const reqSwicthIschecked=(skuid,ischecked)=>ajax.get(`/cart/checkcart?skuid=${skuid}&ischecked=${ischecked}`)
// 删除
export const reqDeleteCat = (skuid) =>ajax.delete(`/cart/deletecart/${skuid}`)
