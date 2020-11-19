import { getShopImage } from "@/api";
/*
根据路由权限列表生成路由列表
主要工作就是将组件路径转换为对应的异步路由组件
*/
const state = {
  goodslist:[],
};

const mutations = {
  GET_SHOP_IMAGE: (state, goodslist) => {
    // 保存异步路由
    state.goodslist = goodslist
  },
};

const actions = {
  async get_ShopImage({ commit }) {
    // 异步获取当前用户权限数据
    const result = await getShopImage();
    console.log(result);
    if (result.code === 20000) {
      commit("GET_SHOP_IMAGE", result.data);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
