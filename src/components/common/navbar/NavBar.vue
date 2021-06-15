<template>
    <div class="nav-bar">
      <!-- 因为插槽slot标签内无法定义id或者class等属性，故在每个插槽外边包裹一个div -->
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'nav-bar',
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

<style scoped>
  .nav-bar{
    display: flex;
    height:44px;
    box-shadow: rgba(0,100,100,100,.1);
  }
  .left{
    width: 60px;
  }
  .center{
    flex: 1;/* 该句的话就是左右两边已经定义具体的宽度，剩下的中间定义为1则自动填满其他空间 */
  }
  .right{
    width: 60px;
  }

</style>
