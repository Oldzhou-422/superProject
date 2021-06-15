import { ADD_TO_CART, ADD_COUNTER } from "./mutation-types"
export default {
  addCount(context, payload) {
    return new Promise((resolve) => {
      let oldGoods = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldGoods) {
        resolve("该商品的数量加1")
        context.commit(ADD_COUNTER, oldGoods)
      }
      else {
        resolve("已添加该商品进入购物车")
        context.commit(ADD_TO_CART, payload)
      }
    })

  }
}