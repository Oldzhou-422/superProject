<template>
  <div v-if="Object.keys(goodsimages).length !== 0" class="detail-goodsimages">
    <div :key="index" v-for="(item, index) in goodsimages.detailImage[0].list">
      <img :src="item" alt="" @load="imgload" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail-goodsimages",
  props: {
    goodsimages: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
      goodsimageslength: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {
    //监听图片加载,待所有图片加载完成后便发送imgload事件,并在detail主组件中调用scroll刷新事件
    imgload() {
     if (++this.counter == this.goodsimageslength) {
        this.$emit("imgload");
      }
    },
  },
  watch:{
    //vue框架自带监听器,goodsimages为要监听的属性,是从props传过来的，一旦发生变化,则立刻调用该事件，将值赋予
    goodsimages(){
      this.goodsimageslength = this.goodsimages.detailImage[0].list.length;
    }
      
    
  },
};
</script>

<style>
.detail-goodsimages img {
  width: 100%;
  height: 100%;
}
</style>
