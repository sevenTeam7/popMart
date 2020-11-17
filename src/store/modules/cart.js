import {
  reqCartList,
  reqChangeCartNum,
  reqSwicthIschecked,
  reqDeleteCat,
} from "@/api";
export default {
  state: {
    cartList: [],
  },
  mutations: {
    RECEIVE_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },

  },
  actions: {
    // 获取商品列表
    async getCartList({ commit }) {
      const result = await reqCartList();
      // console.log(result);
      if (result.code === 20000) {
        commit("RECEIVE_CART_LIST", result.data.cartlist);
      }
    },
    // 改变商品数量
    async getCartNum({ commit, dispatch }, { skuid, skunum }) {
      const result = await reqChangeCartNum(skuid, skunum);
      // console.log(result);
      if (result.code === 20000) {
        dispatch("getCartList");
      }
    },
    // 切换选中状态
    async getIschecked({ commit }, { skuid, ischecked }) {
      const result = await reqSwicthIschecked(skuid, ischecked);
      // console.log(result);
    },
    // 删除商品数据
    async getDeleteCart({ commit }, skuid) {
      const result = await reqDeleteCat(skuid);
      console.log(result);
    },
  },
  getters: {
    // 总数量
    totalCartNum(state) {
      return state.cartList.reduce((pre, item) => {
        return item.ischecked === 1 ? pre + item.skunum : pre;
      }, 0);
    },
    // 总价钱
    totalCartPrice(state) {
      return state.cartList.reduce((pre, item) => {
        return item.ischecked === 1 ? pre + item.skunum * item.price : pre;
      }, 0);
    },
    // 选中的商品信息
    delSelectedCart(state) {
      return state.cartList.filter((item) => item.ischecked === 1);
    },
    // 全选/全不选
    isCheckedAll(state) {
        // every()方法判断一个数组中所有元素是否可以通过某个指定函数的测试 返回值是布尔值
      return (
        state.cartList.length > 0 &&
        state.cartList.every((item) => item.ischecked === 1)
      );
    },
  },
};
