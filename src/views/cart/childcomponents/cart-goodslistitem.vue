<template>
  <div>
    <Checkbutton @click.native="clickbutton" :ischecked="item.ischecked"/>
    <img :src="item.goodsimage" alt="" />
    <div class="show-list-text">
      <p class="title">{{ item.title }}</p>
      <p class="desc">{{ item.desc }}</p>
    </div>
    <span class="realprice">￥{{ item.realprice }}</span>
    <span class="count">×{{ item.count }}</span>
  </div>
</template>

<script>
import Checkbutton from "./cart-checkbutton.vue"
export default {
  name: "",
  data() {
    return {
    };
  },
  components:{
    Checkbutton
  },
  props:{
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {},
  mounted() {},
  methods: {
    clickbutton(){
      this.item.ischecked =!this.item.ischecked
    }
  },
};
</script>

<style scoped>
.cart-show-list img {
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 10px;
  width: 80px;
  height: 100px;
  line-height: 110px;
}
.show-list-text {
  width: 150px;
  position: relative;
  left: 135px;
  top: -95px;
}
.title {
  font-size: 17px;
  font-weight: bold;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc {
  margin-top: 10px;
  font-size: 17px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.realprice {
  position: relative;
  font-weight: bold;
  font-size: 24px;
  color: orange;
  top: -80px;
  left: 140px;
}
.count {
  position: relative;
  font-size: 20px;
  top: -80px;
  left: 220px;
}

</style>
