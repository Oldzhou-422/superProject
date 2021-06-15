<template>
    <div class="detailshopinf">
      <div class="shopinf">
        <img :src="shop.shopLogo" alt="">
        <span>{{shop.name}}</span>
      </div>
      <div class="shopotherinf">
        <div class="sellscount">
          <h2>{{shop.cSell}}</h2>
          <h3>总销量</h3>
        </div>
        <div class="allgoodscount">
          <h2>{{shop.cGoods}}</h2>
          <h3>全部宝贝</h3>
        </div>
        <div class="goodscomment">
          <h2 class="goodscomment-item" v-for="(item,index) in shop.score" :key="index">
            <span >{{item.name}}</span>
            <span :class="{redstyle:item.isBetter}" class="greenstyle">{{item.score}}</span>
            <span :class="{redstyle2:item.isBetter}" class="greenstyle2">{{item.isBetter? "高" : "低"}}</span>
            <span></span>
          </h2>
        </div>
      </div>
     
    </div>
</template>

<script>
export default {
    name:'',
    props:{
      shop:{
        type:Object,
        default(){
          return {}
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

<style>
  .detailshopinf{
    margin-top: 40px;
  }
  .shopinf{
    margin-left: 15px;
  }
  .shopinf img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .shopinf span{
    position: relative;
    top: -25px;
    left: 20px;
    font-size: 25px;
  }
  .shopotherinf{
    display: flex;
    margin-top: 25px;
  }
  
  .sellscount,.allgoodscount,.goodscomment{
    text-align: center;
    border-right: 1px solid #eee;
  }
  .sellscount h2,.allgoodscount h2{
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .sellscount h3,.allgoodscount h3{
    font-size: 18px;
  }
  .goodscomment{
    width: 200px;
    font-size: 11px;
  }
  .goodscomment-item{
    display: flex;
    justify-content: space-between;
    margin-bottom: 9px;
  }
  .sellscount{
    width: 150px;
  }
  .allgoodscount{
    width: 150px;
  }
  .greenstyle{
    color: green;
  }
  .redstyle{
    color: red;
  }
  .greenstyle2{
    background-color: green;
    color: #fff;
  }
  .redstyle2{
    background-color: red;
    color: #fff;
  }
  
  
</style>
