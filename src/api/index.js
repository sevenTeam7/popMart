import ajax from "../utils/request";

// export const reqMailLogin = (username,code) => ajax.post('/login/mail',{username,code}
// 大轮播图片数据
export const reqBanners = () => ajax.get("/home/banners");
//首页的新闻
export const reqJournaism = () => ajax.get("/home/homenews");
