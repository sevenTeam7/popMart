import { reqGoodsInfo, reqGoodsList, getAddGood } from "@/api";
export default {
  state: {
    goodsInfo: "", //当前商品信息
    goodsList: [], //好评商品列表
    addCartGood: {}, //加入购物车商品
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
    //直接修改addCartGood
    RECEIVE_ADDCARTGOOD(state, addCartGood) {
      state.addCartGood = addCartGood;
    },
  },
  actions: {
    //请求当前商品信息
    async getGoodsInfo({ commit }, skuid) {
      const result = await reqGoodsInfo(skuid);
      if (result.code === 20000) {
        commit("RECEIVE_GOODSINFO", result.data.goodsInfo);
      }
    },
    //请求好评商品信息
    async getGoodsList({ commit }) {
      const result = await reqGoodsList();
      if (result.code === 20000) {
        commit("RECEIVE_GOODSLIST", result.data.goodslist);
      }
    },
    //获取加入购物车商品
    async getAddCartGood({ commit }, { skuid, skunum }) {
      const result = await getAddGood(skuid, skunum);
      if (result.code === 20000) {
        // 如果成功，返回的是一个空字符串
        commit("RECEIVE_ADDCARTGOOD", result.data);
      }
    },
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
      return [...mediumopinion, ...highopinion, ...badopinion];
    },
  },
};
