<template>
  <div class="tabcontrol">
    <div class="tab-item" :key="item" v-for="(item,index) in titles" @click="clickTabItem(index)">
      <span class="tab-item-title" :class="{active:index === currentIndex}">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex:0
    };
  },
  created() {},
  mounted() {},
  methods: {
    clickTabItem(index){
      this.currentIndex = index
      this.$emit("tabclick",index)
    }
  },
};
</script>



<style scoped>
.tabcontrol {
  display: flex;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
}
.tab-item {
  flex: 1;
  text-align: center;
  
}
.tab-item-title{
  font-size: 15px;
  padding: 5px;
  
}
.active{
  color:var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
  
}
</style>
