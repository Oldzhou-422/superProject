import Vue from "vue"
import Vuex from "vuex"

//引入store各类型文件
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
Vue.use(Vuex)
 const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:mutations,
  actions:actions,
  getters
})
export default store
