//引入api
import { reqBanners, reqJournaism } from "@/api";

export default {
  //数据
  state: {
    // 大轮播图数据
    banners: [],
    //新闻的数据
    journaism: [],
  },
  //直接修改数据状态的对象
  mutations: {
    //直接修改大轮播数据状态
    RECEIVE_BANNERS(state, banners) {
      state.banners = banners;
    },
    //直接修改新新闻数据状态
    RECEIVE_JOURNAISM(state, journaism) {
      state.journaism = journaism;
    },
  },
  //间接修改数据状态的对象
  actions: {
    //异步
    async getBanners({ commit }) {
      const result = await reqBanners();
      if (result.code === 20000) {
        commit("RECEIVE_BANNERS", result.data);
      }
    },
    //新闻
    async getjournaism({ commit }) {
      const result = await reqJournaism();
      if (result.code === 20000) {
        
        commit("RECEIVE_JOURNAISM", result.data);
      }
    },
  },
  getters: {},
};
