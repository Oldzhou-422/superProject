<template>
    <div class="recommend">
      <div :key="index" v-for="(item,index) in recommend" class="recommend-item">
        <a :href="item.link">
          <img class="item-photo" :src="item.image" alt="">
          <h4 class="item-title">{{item.title}}</h4>
        </a>
      </div>
    </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    },
    created(){
      
    }
};
</script>

<style>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
    margin: 15px 0 30px 0;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
  }
  .recommend-item h4{
    font-size: 14px;
    margin-left: 2px;
  }
</style>
