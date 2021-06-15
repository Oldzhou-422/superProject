<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  data() {
    return {
      bscroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 1;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  created() {},
  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      observeDOM: true,
      pullUpLoad: this.pullUpLoad,
    });
    if (this.probeType == 2 || this.probeType == 3) {
      this.bscroll.on("scroll", (position) => {
        this.$emit("savePosition", position);
      });
    }
    if (this.pullUpLoad) {
      this.bscroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.bscroll.scrollTo(x, y, time);
    },
    pullingUp() {
      this.bscroll && this.bscroll.pullingUp();
    },
    finishPullUp() {
      this.bscroll.finishPullUp();
    },
    refresh() {
      this.bscroll.refresh();
    },
    getsaveY(){
      return this.bscroll ? this.bscroll.Y : 0
    }
  },
};
</script>

<style scoped>

</style>
