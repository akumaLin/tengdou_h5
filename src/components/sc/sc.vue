<template>
  <div class="sc-top">
    <ul class="cho1">
      <li class="choose" @click="isShow1=!isShow1" style="outline: none" tabindex="1" @blur="isShow1=false">
        <span class="text" v-text="myChoose1" v-model="myChoose1"></span>
        <img src="./images/z@2x.png" alt="" :class="['bot',{'show':isShow1}]">
        <img src="./images/xzk_sl@2x.png" alt=" " :class="['bot',{'show':!isShow1}]">
        <ul :class="{show:!isShow1}">
          <li class="on" v-text="choOne1" @click="myChoose1=choOne1"></li>
          <li class="on" v-text="choTwo1" @click="myChoose1=choTwo1"></li>
          <li class="on" v-text="choAll1" @click="myChoose1=choAll1"></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'src',
    data(){
      return {
        isShow1: false,
        myChoose1: "全部分类",
        choOne1: "正在直播",
        choTwo1: "结束",
        choAll1: "全部分类",
      }
    },
    components: {}

  }
</script>
<style scoped>
  .cho1 {
    margin-right: 3vmin;
  }

  .choose-top {
    padding-left: 3vmin;
    margin-top: 3vmin;
    width: 94%;
    position: relative;
    z-index: 99;
    margin-bottom: 3vmin;
  }

  .choose {
    height: 5vmin;
    line-height: 5vmin;
    text-align: center;
    border: 1px solid #CCCCCC;
    position: relative;
    -webkit-border-radius: 0.1vmin;
    -moz-border-radius: 0.1vmin;
    border-radius: 0.5vmin;
    width: 20vmin;
  }

  .text {
    font-family: "PingFangSC-Regular";
    color: #000000;
    font-size: 2vmin;
  }

  .bot {
    width: 5vmin;
    vertical-align: middle;
    float: right;
  }

  .choose > ul {
    position: absolute;
    left: 0;
    width: 100%;
  }

  .choose > ul > li {
    height: 6vmin;
    border: 1px solid #CCCCCC;
    width: 100%;
    text-align: center;
    line-height: 6vmin;
    font-size: 1.2rem;
    background: white;
  }

  .on:hover {
    background: gainsboro;
  }

  .show {
    display: none;
  }

  .edit {
    float: right;
  }

  .edit > li {
    line-height: 5vmin;
    display: inline-block;
    font-size: 2vmin;
    color: #00B38A;
    margin-right: 4vmin;
  }

</style>
