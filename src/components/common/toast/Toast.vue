<template>
    <div class="toast">
      <span>{{messageTip}}</span>
    </div>
</template>

<script>
export default {
    name:'',
    data() {
        return {

        };
    },
    props:{
      messageTip:{
        type:String,
        default(){
          return null
        }
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scpoed>
  .toast{
    position: fixed;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    width: 250px;
    height: 100px;
    background-color: rgba(0, 0, 0, .75);
    z-index: 99;
    border-radius: 20px;
    line-height: 100px;
    text-align: center;
  }
  .toast span{
    color: #fff;
    font-size: 20px;
    
  }
</style>
