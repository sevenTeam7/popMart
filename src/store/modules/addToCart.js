// 引入Api接口函数
import { getShopImage } from "@/api";
export default {
  state: {
    getShopImage: [], //购物车的商品信息数据数组
  },
  mutations: {
    // 直接修改 getShopImage  数据
    RECEIVE_SHOP_LIST(state, getShopImage) {
      state.getShopImage = getShopImage;
    },
  },
  actions: {
    // 添加购物车操作
    async get_ShopImage({ commit }) {
      const result = await getShopImage();
      if (result.code === 20000) {
        // 如果成功，返回的是一个空字符串
        commit("RECEIVE_SHOP_LIST",result.data);
      }
    },
  },
  getters: {},
};
