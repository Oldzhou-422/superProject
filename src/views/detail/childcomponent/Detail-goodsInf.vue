<template>
  <div class="detail-goodsinf" v-if="Object.keys(goods).length !== 0" >
    <div class="detail-goodsinf-up">
      <h2>{{ goods.title }}</h2>
      <div class="pricemodel">
        <span class="newprice">{{ goods.newPrice }}</span>
        <span class="oldprice">{{ goods.oldPrice }}</span>
        <div class="discount">
          <span class="discount-text">{{ goods.discount }}</span>
        </div>
        
      </div>
    </div>
    <div class="detail-goodsinf-center">
      <span v-for="(item, index) in goods.services" :key="index">{{
        item
      }}</span>
    </div>
    <div class="detail-goodsinf-down">
      <span  v-for="index in goods.columns.length-1" :key="index">
        <img :src="goods.columns[index-1].icon"/>
        <span>{{goods.columns[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail-goodsinf",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
  
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.detail-goodsinf {
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
}
.detail-goodsinf-up {
  font-size: 15px;
}
.pricemodel{
  margin-top: 15px;
}
.newprice {
  font-size: 30px;
  color: var(--color-high-text);
  font-weight: bold;
}
.oldprice {
  margin-left: 10px;
  font-size: 17px;
  text-decoration:line-through
}
.discount{
  margin-left: 10px;
  width: 50px;
  display: inline-block;
  position:relative;
  text-align: center;
  top: -8px;
  background-color: var(--color-high-text);
  border-radius: 15px;

}
.discount-text{
  font-size: 18px;
  color: #fff;
  font-weight: bold;
}
.detail-goodsinf-center{
  display: flex;
  margin-top: 20px;
  padding-bottom: 15px;
  font-size: 16px;
  color: grey;
  justify-content: space-between;
  border-bottom: 2px solid #eee;
}

.detail-goodsinf-down{
  margin-top: 15px;
  padding-bottom: 25px;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #eee;
}

.detail-goodsinf-down img{
  width: 15px;
  height: 15px;
}
.detail-goodsinf-down span{
  font-size: 16px;
}
</style>
