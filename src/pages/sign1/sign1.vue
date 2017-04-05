<template>
  <div class="sign">
    <div class="editSign">
      <div class="logo"></div>
      <br>
      <div style="height: 32vmin">
        <p class="signIn" v-if="next">
          <span class="step blue">1</span>
          <span class="signIn cblue">获取验证码</span>
          <img src="./images/dl_jt@2x.png" alt="" class="dl_jt">
          <span class="step bggray">2</span>
          <span class="signIn cgray">填写新密码</span>
        </p>
        <p class="signIn cblue" v-if="first">账号登陆</p>
        <input type="text" class="tel" v-model="tel" placeholder="填写你的手机号码" @blur="isTel">
        <br>
        <span v-if="warmTel" style="color:red ;font-size:2.8vmin ">填写正确的的手机号码</span>
        <br>
        <div class="secondInput" v-if="first">
          <input type="password" class="tel" style="width: 100%" v-model="psw" placeholder="填写你的密码">
        </div>
        <div class="secondInput" v-if="next">
          <input type="text" class="tel" style="width: 100%" v-model="psw" placeholder="填写你的密码">
          <span class="cblue getY" v-if="next" @click="getCode">获取验证码</span>
        </div>
        <br>
        <span v-if="warmPsw" style="color:red ;font-size:2.8vmin " v-text="wPsw"></span>
        <br>
        <div class="help" v-if="help">
          <div class="help-left" @click="isGx=!isGx">
            <span :class="['round',{gx:isGx}]"></span>
            <span class="getPws">记住密码</span>
          </div>
          <label class="losePws help-right" @click="newInfo">忘记密码</label>
        </div>
        <br>
        <input type="button" v-if="sureLogin" class="tel blue bot" value="登陆" style="padding: 0" @click="submit">

      </div>
      <input type="button" v-if="next" class="tel blue bot" value="下一步" style="padding: 0" @click="changepsw">
      <span class="esc" v-if="next">退出找回密码</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'sign1',
    data(){
      return {
        first: true,
        login: true,
        help: true,
        getY: false,
        isGx: false,
        wPsw: '密码错误',
        tel: '',
        psw: '',
        warmTel: false,
        warmPsw: false,
        sureLogin: true,
        next: false
      }
    },
    beforeCreate (){
      /*如果有记住密码，再次登陆直接填好*/
      if (localStorage.tel) {
        this.$nextTick(function () {
          this.tel = localStorage.tel;
          this.psw = localStorage.psw;
          this.isGx = true
        })

      }
    }
    ,
    methods: {
      /*手机号码格式验证*/
      isTel(){
        if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(this.tel))) {

          this.warmTel = true;
          console.log(this.tel)
        } else {
          this.warmTel = false;

        }
      },
      /* 登陆按钮，远程验证账号和密码，并且根据是否记住密码设置localStorage*/
      submit(){
        this.$http.get('/api/tel').then(response => {
          if (response.body.data.tel == true) {
            if (this.isGx == true) {
              localStorage.tel = this.tel;
              localStorage.psw = this.psw;

            } else {
              localStorage.tel = '';
              localStorage.psw = '';
            }

            this.$router.push('/jw')
          } else {
            this.warmPsw = true
          }
        }, response => {

        });
      },
      /*点击忘记密码出现界面*/
      newInfo(){
        this.first = !this.first;
        this.tel = '';
        this.psw = '';
        this.help = false;
        this.sureLogin = false;
        this.next = true;
        this.psw = "输入验证码"

      },
      getCode(){

      },
      changepsw(){
        this.$http.get('/api/tel', {tel: this.tel}).then(response => {
          if (response.body.data.tel == true) {


          } else {
            this.warmPsw = true;
            this.wPsw = "验证码错误"

          }

        })
      }
    }


  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import 'sign.scss';


</style>
