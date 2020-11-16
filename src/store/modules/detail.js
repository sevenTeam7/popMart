import { reqGoodsINfo } from "@/api";
export default {
  state: {
    goodsInfo: [], //好评
  },
  mutations: {
    //好评
    RECEIVE_GOODSINFO(state, goodsInfo) {
      state.goodsInfo = goodsInfo;
    },
  },
  actions: {
    //请求好评
    async getGoodsInfo({ commit }, skuid) {
      const result = await reqGoodsINfo(skuid);
      if (result.code === 20000) {
        commit("RECEIVE_GOODSINFO", result.data);
      }
    },
  },
  getters: {},
};
