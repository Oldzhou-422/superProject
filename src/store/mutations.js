import {ADD_TO_CART,ADD_COUNTER} from "./mutation-types"
export default {
  [ADD_TO_CART](state,payload){
    payload.ischecked = true
    payload.count = 1
    state.cartList.push(payload)
  },
  [ADD_COUNTER](state,payload){
    payload.count+=1
  }
}