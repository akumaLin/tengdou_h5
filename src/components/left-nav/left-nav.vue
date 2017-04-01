<template>
  <div class="left">
    <table>
      <tr v-for="(item,index) in items">
        <td>
          <router-link :to="item.link">
            <img :src="item.img" alt="">
            <p v-text="item.text"></p>
            <span class="Triangle"></span>
          </router-link>
        </td>
      </tr>

    </table>
  </div>
</template>

<script>
  export default {
    name: 'leftNav',
    data(){
      return {
        items: [
          {img: require('./images/sy_sy@2x.png'), text: "首页",link:"/jw"},
          {img: require('./images/sy_jwgl@2x.png'), text: "教务管理",link:"/s"},
          {img: require('./images/sy_spgl@2x.png'), text: "视频直播",link:"/video"},
          {img: require('./images/sy_tdsc@2x.png'), text: "腾豆商城",link:"/sc"},
          {img: require('./images/sy_ddgl@2x.png'), text: "订单管理",link:"/jw/dd"},
          {img: require('./images/sy_cwxt@2x.png'), text: "财务系统",link:"/cw"},
          {img: require('./images/sy_grzx@2x.png'), text: "个人中心",link:"/gr"}
        ],
        showTriangle: 0
      }
    }

  }
</script>
<style scoped>
  .left {
    display: inline-block;
    width: 10vw;
    height: 100vh;
    box-sizing: border-box;
   position: absolute;
    left: 0;
    z-index:99;
  }

  table {
    width: 10vw;
    background: black;
    text-align: center;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
  }

  tr {
    box-sizing: border-box;
  }

  tr:first-child td {
    padding-bottom: 1vmin;
    height: 19vh;
    vertical-align: bottom;
  }

  td {
    text-align: center;
    border-bottom: 1px solid #323046;
    position: relative;
  }

  img {

    width: 8vmin;
    height: 8vmin;
  }

  p {
    color: #A4AAB3;
  }

  .Triangle {
    width: 0;
    height: 0;
    border-width: 1.2vmin 1.2vmin 1.2vmin 0;
    border-style: solid;
    border-color: transparent white transparent transparent;
    position: absolute;
    right: -3%;
    bottom: 40%;
    display: none;
  }
  .router-link-active>.Triangle{
      display: block;

  }

  tr:nth-of-type(1) > td > span {
    bottom: 27%;
  }
</style>
