<template>
  <div class="video">
    <div class="video-top">
      <gwc-tip></gwc-tip>
      <img src="./images/db_ss@2x.png" alt="" class="search">
    </div>
    <div class="choose-top">
      <!--分类-->
      <ul class="cho1">
        <li class="choose" @click="isShow=!isShow" tabindex="1" style="outline: none" @blur="isShow=false">
          <span class="text" v-text="myChoose" v-model="myChoose"></span>
          <img src="./images/z@2x.png" alt="" :class="['bot',{'show':isShow}]">
          <img src="./images/xzk_sl@2x.png" alt=" " :class="['bot',{'show':!isShow}]">
          <ul :class="{show:!isShow}">
            <li class="on" v-text="choOne" @click="myChoose=choOne"></li>
            <li class="on" v-text="choTwo" @click="myChoose=choTwo"></li>
            <li class="on" v-text="choAll" @click="myChoose=choAll"></li>
          </ul>
        </li>
      </ul>
      <!--状态-->
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
      <table class="edit">
        <li>+ 新增</li>
        <li>编辑</li>
      </table>
    </div>
    <!--视频选项-->
    <ul class="video-items" v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="50">
      <li v-for="vPic in vPics" :style="{backgroundImage: 'url(' + vPic.img + ')'}" class="video-item">
        <span class="v-badge">付费</span>
        <p v-text="vPic.Title" class="vTitle"></p>
        <p class="vPeople">{{vPic.people}}人观看</p>
        <div class="main">
          <img :src="vPic.head" alt="" class="vHead">
          <span v-text="vPic.name" class="vName"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import gwcTip from '../gwc-tip/gwc-tip.vue'
  export default {
    name: 'video',
    data () {
      return {
        isShow: false,
        myChoose: "全部分类",
        choOne: "付费",
        choTwo: "免费",
        choAll: "全部分类",
        isShow1: false,
        myChoose1: "全部分类",
        choOne1: "正在直播",
        choTwo1: "结束",
        choAll1: "全部分类",
        vPics: [
          {
            img: require('./images/pic1.png'),
            free:1,
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: "",
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img:"",
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: '',
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: require('./images/pic1.png'),
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: require('./images/pic.png'),
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: require('./images/pic.png'),
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: require('./images/pic1.png'),
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: require('./images/pic1.png'),
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: require('./images/pic1.png'),
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: require('./images/pic1.png'),
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: require('./images/pic1.png'),
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: require('./images/pic.png'),
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: require('./images/pic.png'),
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: require('./images/pic1.png'),
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: require('./images/pic1.png'),
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          },
          {
            img: require('./images/pic1.png'),
            Title: "乌克丽丽\"传奇\"教学",
            people: "3121",
            head: require('./images/pic.png'),
            name: "mdfafa"
          }
        ],


      }
    },
    methods:{
      loadMore() {
        this.loading = true;
        this.vPics.push({
          img: require('./images/pic.png'),
          Title: "乌\"传奇\"教学",
          people: "3121",
          head: require('./images/pic.png'),
          name: "mdfafa"
        });
        this.vPics.push({
          img: require('./images/pic.png'),
          Title: "乌\"传奇\"教学",
          people: "3121",
          head: require('./images/pic.png'),
          name: "mdfafa"
        })
      }
    },
    components: {
      gwcTip,
    }

  }
</script>

<style scoped>
  .video {
    width: 90.1vw;
    position: absolute;
    right:0;
    margin-left: -1vmin;
  }

  .video-top {
    width: 90.1vw;
    position: relative;
    height: 12vmin;
    background: black;
  }

  .gwc-tip {
    position: absolute;
    height: 12vmin;
    width: 30vw;
    right: 13%;
  }

  .search {
    width: 5vmin;
    height: 5vmin;
    position: absolute;
    right: 4%;
    top: 5vmin;
  }

  .choose-top, .cho1, .choose {
    display: inline-block;

  }

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

  .video-items {
    padding: 0 2.7vmin 0 2.7vmin;
    width: 100%;
    box-sizing: border-box;
    height: 90vh;
    overflow: scroll;

  }

  .video-item {
    display: inline-block;
    width: 48.7%;
    height: 20vw;
    border: 1px solid gainsboro;
    margin-bottom: 2vh;
    -webkit-border-radius: 1vmin;
    -moz-border-radius: 1vmin;
    border-radius: 0.7vmin;
    position: relative;
    box-sizing: border-box;
    background-size: 100% 100%;
    opacity: 0.8;
  }

  .video-item:nth-child(odd) {
    float: left;

  }

  .video-item:nth-child(even) {
    float: right;
  }

  .v-badge {
    display: inline-block;
    background: #F63854;
    color: gainsboro;
    padding: 0.2vmin;
    margin-left: 90%;

  }

  .vTitle {
    font-family: ".PingFangSC-Medium";
    color: ghostwhite;
    letter-spacing: 0;
    font-size: 2rem;
    position: absolute;
    top:3vw;
    margin-left: 3vmin;
  }

  .vPeople {
    color: gainsboro;

    margin-left: 3vmin;
    position: absolute;
    top:7.5vw;

  }
  .main{
    height: 5vmin;
    line-height:5vmin;
    margin-top: 9vmin;
    margin-left: 3vmin;
    position: absolute;
    bottom: 2.4vmin;
  }
  .vHead {
    width: 4vmin;
    height: 4vmin;
    -webkit-border-radius: 2vmin;
    -moz-border-radius: 2vmin;
    border-radius: 2vmin;
    vertical-align: middle;
  }

  .vName {
    margin-left: 1vmin;
    color: gainsboro;
  }
</style>
