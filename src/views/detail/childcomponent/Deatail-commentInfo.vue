<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="detail-commentinfo">
    <div class="comment-info-top">
      <h3 class="title">用户评论</h3>
      <h3 class="click-showmore" @click="clickShowmore">更多</h3>
    </div>
    <div class="isshow" v-show="isShowcomment">
      <div class="comment-info-user">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <p class="comment-info-text">{{ commentInfo.content }}</p>
      <div class="comment-info-showinf">
        <span>{{ showtime }}</span>
        <span class="style">{{commentInfo.style}}</span>
      </div>
      <div class="imgs">
        <img class="comment-img" :key="index" v-for="(item,index) in commentInfo.images" :src="item" alt="">
      </div>
      
    </div>
  </div>
</template>

<script>
//引用公共方法模块
import { formatDate } from "common/utils.js";
export default {
  name: "",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isShowcomment: false,
      showtime: null,
    };
  },
  created() {},
  mounted() {},
  methods: {
    clickShowmore() {
      //想要时间戳转化时间格式,第一步先将时间戳转化为Date数据如下,注意要乘以1000,以毫秒为单位
      //第二步再利用util.js里面的方法将date数据传入参数，第二个参数为时间格式
      const date = new Date(this.commentInfo.created * 1000);
      this.showtime = formatDate(date, "yyyy-MM-dd");
      this.isShowcomment = true;
    },
  },
};
</script>

<style>
.detail-commentinfo {
  margin: 40px 20px 0;
}
.comment-info-top {
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-bottom: 3px solid #eee;
}
.comment-info-top h3 {
  font-size: 20px;
}
.comment-info-user{
  margin-top: 20px;
}
.comment-info-user img{
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
.comment-info-user span{
  position: relative;
  top: -25px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
}
.comment-info-text{
  margin-top: 8px;
  font-size: 17px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  line-height: 25px;
}
.comment-info-showinf{
  margin-top: 15px;
  color: grey;
}
.style{
  margin-left: 10px;
}
.imgs{
  margin-top: 20px;
  display: flex;
}

.comment-img{
  
  width: 80px;
  height: 80px;
  margin-right: 15px;
}
</style>
