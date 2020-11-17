import { reqGoodsINfo } from "@/api";
export default {
  state: {
    goodsInfo: "", //当前商品信息
    goodsList: [], //好评商品列表
  },
  mutations: {
    //修改商品信息
    RECEIVE_GOODSINFO(state, goodsInfo) {
      state.goodsInfo = goodsInfo;
    },
    //修改好评商品列表
    RECEIVE_GOODSLIST(state, goodsList) {
      state.goodsList = goodsList;
    },
  },
  actions: {
    //请求当前商品信息
    async getGoodsInfo({ commit }, skuid) {
      const result = await reqGoodsINfo(skuid);
      if (result.code === 20000) {
        commit("RECEIVE_GOODSINFO", result.data.goodsInfo);
      }
    },
    //请求好评商品信息
    // async getGoodsList({ commit }) {
    //   // const result = await reqGoodsINfo();
    //   if (result.code === 20000) {
    //     commit("RECEIVE_GOODSINFO", result.data.goodsInfo);
    //   }
    // },
  },
  getters: {
    //好评数量，中评数量，差评数量
    commentsNum(state) {
      return {
        highNum: state.goodsInfo[0].highopinion.length || 30,
        mediumNum: state.goodsInfo[0].mediumopinion.length || 30,
        badNum: state.goodsInfo[0].badopinion.length || 30,
      };
    },
    //总评论数据数组
    totalCommentList(state) {
      //总对象
      const totalList = state.goodsInfo[0];
      //好评
      const highopinion = totalList.highopinion;
      //中评
      const mediumopinion = totalList.mediumopinion;
      //差评
      const badopinion = totalList.badopinion;
      return [...highopinion, ...mediumopinion, ...badopinion];
    },
    // //好评数组
    // highopinion(state) {
    //   return state.goodsInfo[0].highopinion;
    // },
    // //中评数组
    // mediumopinion(state) {
    //   return state.goodsInfo[0].mediumopinion;
    // },
    // //差评数组
    // badopinion(state) {
    //   return state.goodsInfo[0].badopinion;
    // },
  },
};
