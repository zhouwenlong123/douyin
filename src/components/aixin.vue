<template>
    <div class="xinxin" :style="`top:${this.top}+px,left:${this.left}+px`"><i class="iconfont icon-love-b"></i></div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  props: {
    top: {
      type: null
    },
    left: {
      left: null
    }
  },
  methods:{

  },
  mounted() {
    console.log(this.left);
  },
  updated:{

  }
};
</script>

<style>
</style>

