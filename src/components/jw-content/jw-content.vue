<template>
  <div class="content">
    <ul class="items">
      <li v-for="item in items">
        <div class="img-wrap">
          <img :src="item.img" alt="">
          <p v-text="item.text"></p>
          <span class="ct-badge">8</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'jwContent',
    data(){
      return {
        items: [
          {img: require('./images/jwgl_kbgl@2x.png'), text: "课表管理"},
          {img: require('./images/jwgl_kcgl@2x.png'), text: "课程管理"},
          {img: require('./images/jwgl_jsgl@2x.png'), text: "教师管理"},
          {img: require('./images/jwgl_xsgl@2x.png'), text: "学生管理"},
          {img: require('./images/jwgl_pfxt@2x.png'), text: "评分系统"},
          {img: require('./images/jwgl_lsgl@2x.png'), text: "教室管理"},
          {img: require('./images/jwgl_nrgl@2x.png'), text: "内容管理"}
        ]
      }
    }
  }
</script>
<style scoped>
  .content {
    width: 90vw;
    padding-top: 8vh;


  }

  .items {
    width: 100%;
    overflow: hidden;
  }

  li {
    float: left;
    width: 21.75vw;
    position: relative;
    text-align: center;
    margin-top: 5vh;
  }
  .img-wrap{
    position: relative;
    width: 13vmin;
    margin: auto;
  }
  img {
    width: 13vmin;
    margin-bottom: 1vh;
  }

  .ct-badge {
    display: inline-block;
    width: 3vmin;
    height: 3vmin;
    line-height: 3vmin;
    background: #F63854;
    -webkit-border-radius: 2.5vmin;
    -moz-border-radius: 2.5vmin;
    border-radius: 2.5vmin;
    text-align: center;
    color: white;
    position: absolute;
    top: 0.5vh;
    right: -12%;

    border: 0.3vmin solid white;

  }
</style>
