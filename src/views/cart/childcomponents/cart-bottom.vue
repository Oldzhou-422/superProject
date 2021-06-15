<template>
  <div class="cart-bottom">
    <div class="choose-all">
      <Checkbutton
        class="choose-All"
        @click.native="clickbutton"
        :ischecked="isselectAll"
      />
      <span class="choose-All-text">全选</span>
    </div>
    <div class="total-price">
      <span class="totalprice-1">总计为:</span>
      <span class="totalprice-2">￥{{ totalPrice }}</span>
    </div>
    <div class="toPay">
      <span class="toPay-text">去支付</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Checkbutton from "./cart-checkbutton.vue";
export default {
  name: "",
  components: {
    Checkbutton,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"]),
    //此处采用先过滤后累加，最后的toFixed(2)保留两位小数
    totalPrice() {
      return this.cartList
        .filter((item) => item.ischecked === true)
        .reduce((prevalue, item) => {
          return prevalue + item.realprice * item.count;
        }, 0)
        .toFixed(2);
    },
    isselectAll() {
      //先加购物车里没有商品时的情况
      if (this.cartList.length === 0) {
        return false;
      }
      //这个为数组过滤器的使用方式
      /* else{
        return !(this.cartList.filter(item=>!item.ischecked).length)
      } */
      //这个为find数组查询器的方式，性能更高
      /* else{
        return !this.cartList.find(item=>!item.ischecked)
      } */
      //利用原生js遍历判断
      else {
        for (let item of this.cartList) {
          if (!item.ischecked) {
            return false
          }
        }
        return true
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    clickbutton() {
      if(this.isselectAll){
        this.cartList.forEach(element => {
          element.ischecked = false
        })
      }
      else{
        //重点forEach方法可以遍历数组并修改原数组的元素及其里面的属性
        this.cartList.forEach(element=>{
          element.ischecked = true
        })
      }
    },
  },
};
</script>

<style scoped>
.cart-bottom {
  position: fixed;
  display: flex;
  bottom: 49px;
  width: 100%;
  height: 70px;
  border-top: 3px #eee solid;
  background-color: #eee;
}
.choose-all {
  width: 80px;
}
.choose-All {
  position: relative;
  top: 3px;
}
.choose-All-text {
  line-height: 70px;
  margin-left: 15px;
  font-size: 20px;
}
.total-price {
  flex: 1;

  line-height: 65px;
  margin-left: 20px;
}
.totalprice-2 {
  font-size: 25px;
  color: orange;
}
.toPay {
  width: 90px;
  height: 100%;
  background-color: var(--color-tint);
  text-align: center;
  line-height: 70px;
}
.toPay-text {
  font-size: 20px;
  color: #fff;
  font-weight: bold;
}
</style>
