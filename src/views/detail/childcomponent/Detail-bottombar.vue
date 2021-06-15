<template>
  <div class="bottomBar">
    <div class="bottomBar-left">
      <div class="service">
        <div class="service-icon"></div>
        <h3>客服</h3>
      </div>
      <div class="store">
        <div class="store-icon"></div>
        <h3>店铺</h3>
      </div>
      <div class="collect">
        <div class="collect-icon"></div>
        <h3>收藏</h3>
      </div>
    </div>
    <div class="bottomBar-right">
      <div class="shopping-cart" @click="addTocart">
        <h3>加入购物车</h3>
      </div>
      <div class="buy">
        <h3>购买</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    addTocart(){
      this.$emit("addTocart")
    }
  },
};
</script>

<style scoped>
.bottomBar {
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0;
  background-color: #fff;
  z-index: 99;
  height: 70px;
  display: flex;
  
}
.bottomBar-left{
  display: flex;
  justify-content:space-around;
  width: 50%;
}
.service {
  text-align: center;
}
.service-icon {
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
  background-image: url(~assets/img/detail/detail_bottom.png);
  background-position: 0 -100px;
  margin-left:5px;
}
.store {
  text-align: center;
}
.store-icon {
  height: 50px;
  width: 50px;
  background-image: url(~assets/img/detail/detail_bottom.png);
  background-repeat: no-repeat;
  background-position: 0 -190px;
  margin-left: 5px;
}
.collect{
  text-align: center;
}
.collect-icon{
  height: 50px;
  width: 50px;
  background-image: url(~assets/img/detail/detail_bottom.png);
  background-repeat: no-repeat;
  background-position: 0 7px;
  margin-left: 5px;
}
.bottomBar-right{
  display: flex;
  justify-content:space-around;
}
.shopping-cart{
  width:100px;
  background-color: #FFDD0F;
}
.shopping-cart h3{
  line-height: 70px;
  text-align: center;
}
.buy{
  width: 90px;
  background-color: #FF789A;
}
.buy h3{
  text-align: center;
  line-height: 70px;
  color: #fff;
}
</style>
