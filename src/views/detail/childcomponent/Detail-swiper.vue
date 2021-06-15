<template>
    <Swiper class="detail-swiper">
      <SwiperItem class="detail-swiperitem" :key="index" v-for="(item,index) in topImages">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
    name:'',
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
        return {
          
        };
    },
    created() {
      
    },
    mounted() {
    },
    methods: {

    }
};
</script>

<style scoped>
  .detail-swiper{
    height: 300px;
  }
</style>
