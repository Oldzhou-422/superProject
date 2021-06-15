<template>
  <div class="detail" >
    <DetailNavBar class="detailnavbar"
     @clickNavbar="clickNavbar"
     ref="navbar"
    />
     <!-- 想要监听滚动就需要给bscroll传递probeType的值 -->
    <Scroll class="wrapper"
            ref="scroll"
            @savePosition="savePosition"
            :probeType="3">
      
      <DetailSwiper :topImages="topImages" />
      <DetailGoodsinf :goods="goods" />
      <Detailshopinf :shop="shop" />
      <DetailGoodsimages  :goodsimages="goodsimages" @imgload="imgload1"/>
      <DetailParamsinfo ref="params" :paramsinfo="paramsinfo"/>
      <DetailCommentInfo ref="comment" :commentInfo="commentInfo"/>
      <GoodsList ref="commend" :goodslist="recommends"/>
    </Scroll>
    <BackTop v-show="showBacktop" @click.native="clickBacktop"/>
    <DetailBottombar @addTocart="addTocart"/>
    <Toast :messageTip="messageTip" v-show="isClickadd"/>
  </div>
</template>

<script>
//引入scroll模块实现详情页滚动
import Scroll from "components/common/bscroll/BScroll.vue";

//引入网络请求模块
import { getDetailTopImages, Goods, shop, paramsinfo,getRecommends} from "network/detail.js";
//引入子组件信息
import DetailNavBar from "./childcomponent/Detail-navbar.vue";
import DetailSwiper from "./childcomponent/Detail-swiper.vue";
import DetailGoodsinf from "./childcomponent/Detail-goodsInf";
import Detailshopinf from "./childcomponent/Detail-shopinf";
import DetailGoodsimages from "./childcomponent/Detail-goodsimages"
import DetailParamsinfo from "./childcomponent/Detail-paramsinfo"
import DetailCommentInfo from "./childcomponent/Deatail-commentInfo"
import DetailBottombar from "./childcomponent/Detail-bottombar"

//引入goodslist复用组件
import GoodsList from "components/content/goodslist/GoodsList"
//引入backTop复用组件
import BackTop from "components/content/backtop/BackTop.vue"
//引入Toast复用组件
import Toast from "components/common/toast/Toast.vue"

//引入混入方法
import {imgloadmixin} from "common/mixin.js"


export default {
  name: "",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsinf,
    Detailshopinf,
    DetailGoodsimages,
    Scroll,
    DetailGoodsimages,
    DetailParamsinfo,
    DetailCommentInfo,
    DetailBottombar,
    GoodsList,
    BackTop,
    Toast
    
  },
  //引入挂载时图片加载完成的高度刷新
  mixins:[imgloadmixin],
  data() {
    return {
      iid:this.$route.params.iid,
      topImages: null,
      goods: {},
      shop: {},
      goodsimages:{},
      paramsinfo:{},
      commentInfo:{},
      recommends:[],
      NavbarTops:[],
      positionY:0,
      currentIndex:0,
      length:0,
      showBacktop:false,
      messageTip:"",
      isClickadd:false
    };
  },
  created() {
    getRecommends().then(res=>{
      this.recommends = res.data.list
    })
    getDetailTopImages(this.iid).then((res) => {
      const data = res.result;
      //引入顶部轮播图信息
      this.topImages = data.itemInfo.topImages;
      //引入商品详细信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //引入商店信息
      this.shop = new shop(data.shopInfo);
      //引入商品图片详情
      this.goodsimages = data.detailInfo
      //获取商品详细信息
      this.paramsinfo = new paramsinfo(data.itemParams.info,data.itemParams.rule)
      //获取用户评论信息
      this.commentInfo = data.rate.list[0]
    });
  },
  methods: {
    addTocart(){
      const product = {}
      product.goodsimage = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.realprice = this.goods.realPrice
      product.iid = this.iid
      this.$store.dispatch("addCount",product).then(res=>{
        /* clearTimeout(timer) */
        this.messageTip = res
        this.isClickadd = true
        const timer = setTimeout(()=>{
          this.isClickadd = false
        },1500)
      })

    },
    //backtop按钮事件
    clickBacktop(){
      this.$refs.scroll.scrollTo(0,0,300)
    },
    imgload(){
      this.$refs.scroll.refresh()
    },
    //该方法用混入的方式完成刷新事件的防抖
    imgload1(){
      //选择在详情页里面所有图片加载完成这个时机将所有的offsetTop加载出来,实现navbar模块联动效果
      this.imgloadrefresh()
      this.NavbarTops = [0]
      this.NavbarTops.push(this.$refs.params.$el.offsetTop)
      this.NavbarTops.push(this.$refs.comment.$el.offsetTop)
      this.NavbarTops.push(this.$refs.commend.$el.offsetTop)
      this.NavbarTops.push(Number.MAX_VALUE)
      
      this.length = this.NavbarTops.length
    },
    clickNavbar(index){
     this.$refs.scroll.scrollTo(0,-this.NavbarTops[index],300)
     this.currentIndex = index
    },
    //开始监听滚动的位置变化
    savePosition(position){
      if(position.y<(-1000)){
        this.showBacktop = true
      }
      else{
        this.showBacktop = false
      }
      this.positionY = position.y
      for(let i=0;i<this.length-1;i++){
        if(this.currentIndex !== i && (this.positionY<=(-this.NavbarTops[i]) && this.positionY>=(-this.NavbarTops[i+1]))){
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex
        }
      }
      
    }
  },
};
</script>

<style scoped>
  .detail{
    background-color: #fff;
    height: 100vh;
  }
  .detailnavbar{
    position: relative;
    z-index: 11;
    background-color: #fff;
  }
  .wrapper{
    position: relative;
    z-index: 10;
    background-color: #fff;
    height: calc(100% - 44px);
  }
</style>
