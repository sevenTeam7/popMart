import ajax from "../utils/request";
export const getShopImage = () => {
  return ajax.get("/shophome/goodslist");
};
export const getPassWord = (usermail, password) => {
  return ajax.post("/login/account", {
    usermail,
    password,
  });
};
export const getEmailCode = ({usermail}) => {
  return ajax.post("/login/getmail", {usermail});
};
export const getCheckCode = (usermail,code) => {
  return ajax.post("/login/mail", {
    usermail,
    code
  });
};

