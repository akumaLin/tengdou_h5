<template>
  <div class="sign">
    <div class="editSign">
      <img src="./images/dl_logo@2x.png" alt="" class="logo">
      <br>
      <p class="signIn">
        <span class="step blue">1</span>
        <span class="signIn cblue">获取验证码</span>
        <img src="./images/dl_jt@2x.png" alt="" class="dl_jt">
        <span class="step bggray">2</span>
        <span class="signIn cgray">填写新密码</span>
      </p>
      <p class="signIn blue" v-if="false">账号登陆</p>
      <input type="text" class="tel" placeholder="填写你的手机号码">
      <br>
      <input type="password" class="tel" placeholder="填写你的密码">
      <br>
      <div class="help">
        <div class="help-left" @click="isGx=!isGx">
          <span :class="['round',{gx:isGx}]"></span>
          <span for="radio" class="getPws">记住密码</span>
        </div>
        <label for="radio" class="losePws help-right">忘记密码</label>
      </div>
      <br>
      <router-link to="/jwgl">
        <input type="button" class="tel blue" value="登陆" style="padding: 0">
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'sign',
    data(){
      return {
        isGx: false


      }
    }

  }
</script>
<style scoped>

  .sign {
    background: url("./images/dl_bj@2x.png") no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    width: 100vw;
  }

  .editSign {
    height: 80vh;
    width: 80vw;
    opacity: 0.8;
    background: #1C1B26;

    border-radius: 4px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
    text-align: center;
  }

  .logo {
    width: 10vw;
    height: 8vw;
    margin-top: 7vmin
  }

  .dl_jt {
    height: 2vmin;
    margin: 0 3vmin 0 3vmin;
  }

  .step {
    display: inline-block;
    height: 2vmin;
    width: 2vmin;
    line-height: 2vmin;
    -webkit-border-radius: 1vmin;
    -moz-border-radius: 1vmin;
    border-radius: 1vmin;
    margin-right: 1vmin;
  }

  .bggray {
    background: #999999;
  }

  .cgray {
    color: #999999;
  }

  .cblue {
    color: #00FFC5;
  }

  .signIn {

    margin-top: 6vmin;
    font-size: 2vmin;
    margin-bottom: 4vmin;
  }

  .tel {
    background: none;
    border: 1px solid #999999;
    display: inline-block;
    height: 6vmin;
    width: 48%;
    border-radius: 3vmin;
    font-size: 2.3vmin;
    color: #999999;
    padding-left: 3vmin;
    margin-bottom: 4vmin;
    box-sizing: border-box;
  }

  .help {
    display: inline-block;
    height: 6vmin;
    width: 48%;

    text-align: left;

  }

  .round {
    display: inline-block;
    width: 2.5vmin;
    height: 2.5vmin;
    background: url("./images/gx_mx@2x.png") no-repeat;
    background-size: contain;
    -webkit-border-radius: 1.25vmin;
    -moz-border-radius: 1.25vmin;
    border-radius: 1.25vmin;
    vertical-align: top;
  }

  .gx {
    background: url("./images/gx_xz@2x.png") no-repeat;
    background-size: contain;
  }

  .help-left {
    float: left;
  }

  .help-right {
    float: right;
  }

  .getPws, .losePws {
    color: white;
  }

  .blue {
    background: #00FFC5;
    color: black;
  }
</style>
