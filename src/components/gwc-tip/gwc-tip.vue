<template>
  <div class="gwc-tip">
    <img src="./images/db_gwc@2x.png" alt="购物车" class="big-item1">
    <div class="badge">8</div>
    <img src="./images/db_xx@2x.png" alt="" class="big-item2">
    <div class="null-badge"></div>
  </div>
</template>

<script>

  export default {
    name: 'jwTop',

  }
</script>
<style scoped>
  gwc-tip{
    height: 12vmin;
    width: 30vw;
    position: absolute;
  }
  .big-item1 {
    position: absolute;
    top: 5vmin;
    right: 12vw;
    width: 5vmin;
    height: 5vmin;

  }
  .big-item2 {
    position: absolute;
    top: 5vmin;
    right: 2vw;
    width: 5vmin;
    height: 5vmin;

  }

  .badge {
    display: inline-block;
    width: 2vmin;
    height: 2vmin;
    line-height: 2vmin;
    background: #F63854;
    -webkit-border-radius: 1.25vmin;
    -moz-border-radius: 1.25vmin;
    border-radius: 1.25vmin;
    text-align: center;
    color: white;
    position: absolute;
    top: 5vmin;
    right: 12vw;
    padding: 0.25vmin;
  }
  .null-badge{
    display: inline-block;
    width: 1vmin;
    height: 1vmin;
    background: #F63854;
    -webkit-border-radius: 0.5vmin;
    -moz-border-radius: 0.5vmin;
    border-radius: 0.5vmin;
    text-align: center;
    color: white;
    position: absolute;
    top: 5vmin;
    right: 1.7vw;
  }
</style>
