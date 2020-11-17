import {reqTradeProson} from '@/api'
export default{
  state: {
    userInfo:[]
  },
  mutations: {
    RECEIVE_USER_INFO(state,userInfo){
      state.userInfo = userInfo
    }
  },
 actions: {
   async getUserInfo({commit}){
      const result = await reqTradeProson()
      if (result.code===20000) {
        commit('RECEIVE_USER_INFO',result.data)
      }
    }
  },
  getters: {
    
  }
}