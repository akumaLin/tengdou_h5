<template>
  <div class="top">
    <img src="./images/jwgl_bj@2x.png" alt="" class="top-big">
    <gwc-tip></gwc-tip>
  </div>
</template>

<script>
import gwcTip from '../gwc-tip/gwc-tip.vue'
  export default {
    name: 'jwTop',
    components:{
      gwcTip
    }

  }
</script>
<style scoped>
  .top {
    display: inline-block;
    width: 90.1vw;
    height: 39vh;
    margin-left: -1vmin;
    box-sizing: border-box;
    position: relative;
  }

  .top-big {
    width: 100%;
    height: 100%;
  }
  .gwc-tip{
    position: absolute;
    top: 0;
    right: 2%;
    padding-bottom: 20vmin;

  }
</style>
