<template>
  <div class="goodslist">
    <GoodsListitem :key="index"
     v-for="(item,index) in goodslist"
      :goodslistitem="item"
      />
  </div>
</template>

<script>
import GoodsListitem from "./GoodsListitem"
export default {
  name: "GoodsList",
  components:{
    GoodsListitem
  },
  props: {
    goodslist: {
      type: Array,
      default(){
        return []
      },
    },
  },
  data() {
    return {
    };
  },
  created() {},
  mounted() {},
  methods: {
  },
};
</script>

<style>
  .goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
    z-index: 0;
  }
</style>
