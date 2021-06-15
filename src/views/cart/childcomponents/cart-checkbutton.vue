<template>
    <div class="circue" v-if="!ischecked"></div>
    <div class="hook" v-else>✔</div>
</template>

<script>
export default {
  name: "",
  data() {
    return {

    };
  },
  props:{
    ischecked:{
      type:Boolean
    }
  },
  created() {},
  mounted() {},
  methods: {
    
  },
};
</script>

<style scoped>
.circue,
.hook {
  display: inline-block;
  position: relative;
  top: -35px;
  left: 7px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.circue {
  border: 2px black solid;
}
.hook {
  border: 2px transparent solid;
  background-color: var(--color-tint);
  color: #fff;
  font-size: 25px;
  line-height: 25px;
  text-align: center;
}
</style>
