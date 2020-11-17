//引入api
import { reqNews } from "@/api";
export default {
  state: {
    pagination: [],
  },
  mutations: {
    RECEIVE_PAGINATION(state, pagination) {
      state.pagination = pagination;
    },
  },
  actions: {
    async getPagination({ commit }, { page, pageSize }) {
      // console.log(3333, page, pageSize);
      const result = await reqNews(page, pageSize);
      if (result.code === 20000) {
        commit("RECEIVE_PAGINATION", result.data);
      }
    },
  },
  getters: {},
};
