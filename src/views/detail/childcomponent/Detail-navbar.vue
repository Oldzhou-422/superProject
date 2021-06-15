<template>
  <div class="detail-navbar">
    <NavBar>
      <img
        class="detail-navbar-left"
        src="~assets/img/common/back.svg"
        slot="left"
        alt=""
        @click="clickBack"
      />
      <!-- 采用了navbar,务必在内部元素中表明slot属性,是左中右？ -->
      <div class="detail-navbar-center" slot="center">
        <div
          class="detail-navbar-item"
          :key="index"
          v-for="(item, index) in titles"
          @click="clickNavbar(index)"
          :class="{active:currentIndex === index}"
        >
          {{ item }}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  created() {},
  mounted() {},
  methods: {
    //顶部navbar返回间的点击事件
    clickBack(){
      this.$router.go(-1)
    },
    //商品详情页的顶部navbar的点击效果
    clickNavbar(index){
      this.currentIndex = index
      this.$emit("clickNavbar",index)
    }
  },
};
</script>

<style scoped>
.detail-navbar-left {
  margin-top: 13px;
  margin-left: 13px;

}
.detail-navbar-center {
  display: flex;
  margin-top: 15px;
  margin-left: 25px;
}
.detail-navbar-item {
  flex: 1;
  font-size: 16px;
  text-align: center;
  padding-bottom: 5px;
}
.active{
  color:var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
}
</style>
