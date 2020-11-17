import ajax from "../utils/request";

// export const reqMailLogin = (username,code) => ajax.post('/login/mail',{username,code}
// 大轮播图片数据
export const reqBanners = () => ajax.get(`/home/banners`);
//首页的新闻
export const reqJournaism = () => ajax.get("/home/homenews");
//news的分页器api 这个是params                                 query
export const reqNews = (page, pageSize) =>
  ajax.get(`/news/getnewslist?page=${page}&pageSize=${pageSize}`);
//登录帐户
export const reqLogin = (usermail, password) =>
  ajax.post(`/login/account`, { usermail, password });
console.log(111111111);
