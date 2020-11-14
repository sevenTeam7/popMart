import Vue from "vue";
import Vuex from "vuex";
// 引入vuex 核心对象
import state from "./state";
import mutation from "./mutations";
import actions from "./actions";
import getters from "./getters";
// 引入modules 模块
import modules from "./modules";
// 声明使用vuex
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutation,
  actions,
  getters,
  modules,
});
