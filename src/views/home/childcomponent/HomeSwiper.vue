<template>
  <div>
    <swiper>
      <swiper-item :key="item.acm" v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="ImageLoad"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  name: "",
  components: {
    Swiper,
    SwiperItem,
  },
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      finishLoading:false
    };
  },
  created() {},
  mounted() {},
  methods: {
    ImageLoad(){
      if(this.finishLoading === false){
        this.$emit("ImageLoad")
        this.finishLoading = true
      }
    }
  },
};
</script>

<style>
</style>
