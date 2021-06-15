<template>
  <div class="cart">
    <Navbar class="topBar">
      <img
        class="cart-navbar-left"
        src="~assets/img/common/back.svg"
        slot="left"
        @click="clickBack"
      />
      <div slot="center" class="topBar-text">购物车({{cartlength}})</div>
    </Navbar>
    <Goodslist></Goodslist>
    <Bottom></Bottom>
  </div>
</template>

<script>
//引入常用模块
import Navbar from "components/common/navbar/NavBar.vue";

//引入计算属性所需方法
import {mapGetters} from "vuex"
//引入子组件模块
import Goodslist from "./childcomponents/cart-goodslist.vue"
import Bottom from "./childcomponents/cart-bottom.vue"


export default {
  name: "Cart",
  components: {
    Navbar,
    Goodslist,
    Bottom,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["cartlength"]),
  },
  methods: {
    clickBack() {
      this.$router.push("/Home");
    },
  },
};
</script>

<style scoped>
.cart {
  width: 100vw;
  height: 100vh;
}
.topBar {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 49px;
  line-height: 49px;
  text-align: center;
  background-color: var(--color-tint);
}
.topBar-text {
  font-size: 20px;
  color: #fff;
  font-weight: bold;
}
.cart-navbar-left {
  position: relative;
  top: 5px;
  left: -5px;
}

</style>
