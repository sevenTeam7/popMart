import { reqLogin } from "@/api";
console.log(22222);
export default {
  state: {
    userInfo: {},
  },
  mutations: {
    RECEIVE_USER_INFO(state, userInfo) {
      console.log(111111);
      state.userInfo = userInfo;
    },
  },
  actions: {
    async getLogin({ commit }, { usermail, password }) {
      const result = await reqLogin(usermail, password);
      if (result.code === 20000) {
        commit("RECEIVE_USER_INFO", result.data);
      }
      console.log(result);
    },
  },
  getters: {},
};
