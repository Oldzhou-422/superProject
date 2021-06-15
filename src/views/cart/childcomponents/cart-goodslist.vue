<template>
  <div class="cart-show">
    <Scroll class="wrapper" :probeType="3"  ref="scroll">
      <ul class="cart-show-list">  
        <li :key="index" v-for="(item, index) in $store.state.cartList">
          <Goodslistitem :item="item"></Goodslistitem>
        </li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "components/common/bscroll/BScroll.vue";
import Goodslistitem from "./cart-goodslistitem.vue";
export default {
  name: "",
  components: {
    Goodslistitem,
    Scroll,
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  activated() {
    this.$refs.scroll.refresh()
  },
};
</script>

<style scoped>

.cart-show {
  height: calc(100% - 168px);
}
/* 重点！！！！calc括号里减号两边加空格 */
.wrapper {
  margin-top: 49px;
  height: 100%;
  overflow: hidden;
}
.cart-show-list li {
  height: 130px;
  border-bottom: 4px solid #eee;
}

</style>
