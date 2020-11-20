import { reqGetPassWord } from "@/api";
export default {
  state: {
    usernameInfo: "",
  },
  mutations: {
    RECEIVE_USERNAME_INFO(state, usernameInfo) {
      state.usernameInfo = usernameInfo;
    },
  },
  actions: {
    async getPassWord({ commit }, { usermail, password }) {
      const result = await reqGetPassWord(usermail, password);
      if (result.code === 20000) {
        commit("RECEIVE_USERNAME_INFO", result.msg);
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    },
  },
  getters: {},
};
