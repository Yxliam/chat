import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store =  new Vuex.Store({
  state: {
    showDagger: '我是vuex'
  },
  mutations: {// 定义 mutation ，更改 Vuex 的 store 中的状态的唯一方法是提交mutation
    daggerCtrl (state, value) { // 一定要传入state，并且是第一个参数
      state.showDagger = value
    }
  }
})

export default store;
