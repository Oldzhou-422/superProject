<template>
    <div class="goodslistitem" @click="toDetail">
    
      <img v-lazy="showImages" @load="imgLoad()" alt="">
     
      <div class="goods-info">
        <p>{{goodslistitem.title}}</p>
        <span class="price">{{goodslistitem.price}}</span>
        <span class="collect">{{goodslistitem.cfav}}</span>
      </div>
    </div>
</template>

<script>
export default {
    name:'',
    props:{
      goodslistitem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data() {
        return {
          iid:this.goodslistitem.iid
        };
    },
    computed:{
      showImages(){
        return this.goodslistitem.image || this.goodslistitem.show.img  
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      imgLoad(){
        this.$bus.$emit("imgLoadFinish")
      },
      toDetail(){
       /*  if(Object.keys(this.goodslistitem).length!==0){
            //用params跳转路由
            
        } */
        this.$router.push("/detail/"+this.iid)
        
        //用query跳转路由
        /* this.$router.push({
          path:"/detail",
          query:{
            iid:this.iid
          }
        }) */
      }
    }
};
</script>

<style>
  .goodslistitem{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goodslistitem img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
