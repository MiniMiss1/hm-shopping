import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
    // 个人凭证相关
    //   userInfo: {
    //     token: '',
    //     userId: ''
    // }
      userInfo: getInfo()
    }
  },
  mutations: {
    // 所有mutations 的第一个参数，都是state
    setUserInfo (state, obj) {
    // 存入vuex的同时，存入到本地
      state.userInfo = obj
      setInfo(obj)
    }
  },
  actions: {
    logout (context) {
      // 个人信息重置
      context.commit('setUserInfo', {})
      // 购物车信息重置 （跨模块调用 mutation）cart/setCartList
      context.commit('cart/setCartList', [], { root: true })
    }
  },
  getters: {}
}
