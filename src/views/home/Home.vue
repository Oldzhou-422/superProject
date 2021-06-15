<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="left"></div>
      <div slot="center" class="nav-text">购物车</div>
      <div slot="right"></div>
    </nav-bar>
    <!-- 肯定不把你设置再滚动区内 -->
    <tab-control
      ref="tabcontrol2"
      @tabclick="tabclick"
      class="tab-control2"
      :titles="titles"
      v-show="isTabtop"
    ></tab-control>
    <!-- 通过封装swiper将里面的业务逻辑全部移到子组件，并将banner数组传递过去，在子组件用props接收 -->
    <Scroll
      class="wrapper"
      ref="scroll"
      @savePosition="savePosition"
      :probeType="3"
      @pullingUp="pullingUp"
      :pullUpLoad="true"
    >
      <home-swiper :banner="banner" @ImageLoad="getoffsetTop"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        @tabclick="tabclick"
        class="tab-control1"
        :titles="titles"
        ref="tabcontrol1"
      ></tab-control>
      <GoodsList :goodslist="showGoods"></GoodsList>
    </Scroll>
    <!--    <router-view></router-view> -->
    <!-- 组件加natiave可以模仿原生DOM元素去监听原生事件 -->
    <BackTop @click.native="clickBack" v-show="showBacktop" />
  </div>
</template>

<script>
//引入公共组件模块
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goodslist/GoodsList";
import Scroll from "components/common/bscroll/BScroll.vue";

//引入业务组件模块
import HomeSwiper from "./childcomponent/HomeSwiper";
import RecommendView from "./childcomponent/RecommendView";
import FeatureView from "./childcomponent/FeatureView";
import BackTop from "components/content/backtop/BackTop";

//引入网络请求发送模块
import { gethomemultidata, gethomeGoodsdata } from "network/home";

import {imgloadmixin} from "common/mixin.js"

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,

    HomeSwiper,
    RecommendView,
    FeatureView,
    BackTop,
  },
  mixins:[imgloadmixin],
  data() {
    return {
      banner: [],
      recommend: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, goodslist: [] },
        new: { page: 0, goodslist: [] },
        sell: { page: 0, goodslist: [] },
      },
      currentType: null,
      showBacktop: false,
      tabControloffsetTop: 0,
      isTabtop: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].goodslist;
    },
  },
  created() {
    gethomemultidata().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
    //封装pop,new,sell三个模块的网络请求
    this.gethomeGoodsdata("pop");
    this.gethomeGoodsdata("new");
    this.gethomeGoodsdata("sell");
  },
   methods: {
    //事件监听的方法
    //得到轮播图第一张图片加载完成后滚动区域总高度
    getoffsetTop() {
      this.tabControloffsetTop = this.$refs.tabcontrol1.$el.offsetTop;
    },
    //节流防抖动函数
    //可防止在短时间内,客户端发送太多请求给服务器，造成过大压力。可选择性清除前面大部分请求，留剩最后切最有价值的请求
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        //先判断timer是否为空,如果有，则清除
        if (timer) {
          clearTimeout(timer);
        }
        //前面清除后，此时肯定如果没有定时器存在,则可以将下一次事件列入任务循环队列
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    //监听页面划到底部时加载更多
    pullingUp() {
      this.gethomeGoodsdata(this.currentType);
      this.$refs.scroll.bscroll.refresh();
    },
    //保存首页滚动位置信息
    savePosition(position) {
      if (position.y < -1000) {
        this.showBacktop = true;
      } else {
        this.showBacktop = false;
      }
      //记录滚动的高度到达tabcontrol的高度的复数时给tabcontrol加上一个class
      if (position.y < -this.tabControloffsetTop) {
        this.isTabtop = true;
      } else {
        this.isTabtop = false;
      }
    },
    //点击返回顶部
    clickBack() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    },

    //网络请求的方法
    gethomeGoodsdata(type) {
      const page = this.goods[type].page + 1;
      this.currentType = type;
      gethomeGoodsdata(type, page).then((res) => {
        this.goods[type].goodslist.push(...res.data.list);
      });
      this.goods[type].page++;
      this.$refs.scroll && this.$refs.scroll.finishPullUp();
    },
  },
  //记住activated，deactivated,destroy,都是需要在APP.vue的router-view包裹keep-alive
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //再离开首页时获取当前滚动高度
    this.saveY = this.$refs.scroll.getsaveY();
    //在离开时取消总线的图片加载刷新事件
    this.$bus.$off("imgLoadFinish",)
  },
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}
.nav-text {
  text-align: center;
  line-height: 44px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}
.home-nav {
  background-color: var(--color-tint);
  position: relative;
  z-index: 9;
  /* 设置position为fixed则该元素脱离文档流,fixed是固定于界面视口的,top,left,right都设置为0则直接钉死位置
  但与此同时下面的轮播图也会上来遮盖,此时则用z-index调高， */
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99; */
}
/* 同样是relative,tabcontrol再home-nav下面 */
.tab-control2 {
  position: relative;
  z-index: 9;
}

/* wrapper里面所有组件都在 */
.wrapper {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>
